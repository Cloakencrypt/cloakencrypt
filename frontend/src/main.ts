import "./styles.css";
import { icons } from "./icons";
import {
  deriveEncryptionKey,
  encryptVaultData,
  decryptVaultData,
  clearKeyCache,
  generatePassword,
  toByteBuf,
  fromByteBuf,
  type VaultData,
  type BackendActor,
} from "./crypto";
import { AuthClient } from "@icp-sdk/auth/client";
import { HttpAgent, Actor } from "@icp-sdk/core/agent";
import { IDL } from "@icp-sdk/core/candid";

// ─── IDL Factory (matches backend Candid) ────────────────────────────

// ByteBuf is serialized as record { inner : blob } in Candid
const ByteBuf = IDL.Record({ inner: IDL.Vec(IDL.Nat8) });

const VaultEntry = IDL.Record({
  id: IDL.Nat64,
  owner: IDL.Principal,
  encrypted_data: ByteBuf,
  iv: ByteBuf,
  created_at: IDL.Nat64,
  updated_at: IDL.Nat64,
});

const idlFactory = ({ IDL: _IDL }: { IDL: any }) => {
  return IDL.Service({
    get_encrypted_vetkey: IDL.Func([ByteBuf], [ByteBuf], []),
    get_vetkey_verification_key: IDL.Func([], [ByteBuf], []),
    add_entry: IDL.Func([ByteBuf, ByteBuf], [IDL.Nat64], []),
    update_entry: IDL.Func([IDL.Nat64, ByteBuf, ByteBuf], [IDL.Bool], []),
    delete_entry: IDL.Func([IDL.Nat64], [IDL.Bool], []),
    get_entries: IDL.Func([], [IDL.Vec(VaultEntry)], ["query"]),
    get_entry_count: IDL.Func([], [IDL.Nat64], ["query"]),
    whoami: IDL.Func([], [IDL.Text], ["query"]),
  });
};

// ─── State ───────────────────────────────────────────────────────────

interface DecryptedEntry {
  id: bigint;
  data: VaultData;
  created_at: bigint;
  updated_at: bigint;
}

let authClient: any = null;
let actor: BackendActor | null = null;
let aesKey: CryptoKey | null = null;
let entries: DecryptedEntry[] = [];
let searchQuery = "";
let selectedEntryId: bigint | null = null;

const app = document.getElementById("app")!;

// ─── Helpers ─────────────────────────────────────────────────────────

/** Parse the ic_env cookie (set by the asset canister). Format: key=value&key=value (URL-encoded). */
function parseIcEnv(): Record<string, string> {
  try {
    const cookies = document.cookie.split(";").map((c) => c.trim());
    for (const cookie of cookies) {
      if (cookie.startsWith("ic_env=")) {
        const raw = decodeURIComponent(cookie.substring("ic_env=".length));
        const env: Record<string, string> = {};
        for (const pair of raw.split("&")) {
          const idx = pair.indexOf("=");
          if (idx > 0) {
            env[pair.substring(0, idx)] = pair.substring(idx + 1);
          }
        }
        return env;
      }
    }
  } catch {}
  return {};
}

function getBackendCanisterId(): string {
  const env = parseIcEnv();
  return (
    env["PUBLIC_CANISTER_ID:backend"] ||
    (window as any).__CANISTER_ID_BACKEND ||
    "tz2ag-zx777-77776-aaabq-cai"
  );
}

function getIdentityProviderUrl(): string {
  const host = window.location.hostname;
  const local =
    host === "localhost" ||
    host === "127.0.0.1" ||
    host.endsWith(".localhost");

  if (local) {
    const env = parseIcEnv();
    const iiId = env["PUBLIC_CANISTER_ID:internet_identity"] || "rdmx6-jaaaa-aaaaa-aaadq-cai";
    return `http://${iiId}.localhost:8000`;
  }

  return "https://identity.ic0.app";
}

function isLocal(): boolean {
  const host = window.location.hostname;
  return (
    host === "localhost" ||
    host === "127.0.0.1" ||
    host.endsWith(".localhost")
  );
}

function showToast(message: string, type: "success" | "error" = "success") {
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

function filteredEntries(): DecryptedEntry[] {
  if (!searchQuery) return entries;
  const q = searchQuery.toLowerCase();
  return entries.filter(
    (e) =>
      e.data.title.toLowerCase().includes(q) ||
      e.data.username.toLowerCase().includes(q) ||
      e.data.url.toLowerCase().includes(q)
  );
}

function getFavicon(entry: DecryptedEntry): string {
  if (entry.data.url) {
    try {
      const url = new URL(
        entry.data.url.startsWith("http")
          ? entry.data.url
          : `https://${entry.data.url}`
      );
      return url.hostname.charAt(0).toUpperCase();
    } catch {}
  }
  return entry.data.title.charAt(0).toUpperCase() || "?";
}

async function copyToClipboard(text: string, label: string) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(`${label} copied`);
  } catch {
    showToast("Failed to copy", "error");
  }
}

// ─── Auth ────────────────────────────────────────────────────────────

async function initAuth() {
  authClient = await AuthClient.create();
  const isAuthenticated = await authClient.isAuthenticated();

  if (isAuthenticated) {
    await setupActor();
    renderApp();
  } else {
    renderLogin();
  }
}

async function login() {
  return new Promise<void>((resolve, reject) => {
    authClient.login({
      identityProvider: getIdentityProviderUrl(),
      maxTimeToLive: BigInt(8) * BigInt(3_600_000_000_000),
      onSuccess: async () => {
        await setupActor();
        renderApp();
        resolve();
      },
      onError: (error: any) => {
        showToast("Authentication failed", "error");
        reject(error);
      },
    });
  });
}

async function logout() {
  await authClient.logout();
  actor = null;
  aesKey = null;
  entries = [];
  clearKeyCache();
  renderLogin();
}

async function setupActor() {
  const identity = authClient.getIdentity();
  const agent = await HttpAgent.create({
    identity,
    host: isLocal() ? "http://localhost:8000" : "https://icp-api.io",
    ...(isLocal() && { shouldFetchRootKey: true, verifyQuerySignatures: false }),
  });

  actor = Actor.createActor(idlFactory, {
    agent,
    canisterId: getBackendCanisterId(),
  }) as unknown as BackendActor;
}

// ─── Data ────────────────────────────────────────────────────────────

async function loadEntries() {
  if (!actor || !aesKey) return;

  try {
    const rawEntries = await actor.get_entries();
    const decrypted: DecryptedEntry[] = [];

    for (const raw of rawEntries) {
      try {
        const data = await decryptVaultData(
          aesKey,
          fromByteBuf(raw.encrypted_data),
          fromByteBuf(raw.iv)
        );
        decrypted.push({
          id: raw.id,
          data,
          created_at: raw.created_at,
          updated_at: raw.updated_at,
        });
      } catch (e) {
        console.error("Failed to decrypt entry", raw.id, e);
      }
    }

    entries = decrypted.sort((a, b) =>
      a.data.title.localeCompare(b.data.title)
    );
  } catch (e) {
    console.error("Failed to load entries:", e);
    showToast("Failed to load vault entries", "error");
  }
}

async function saveEntry(data: VaultData, editId?: bigint) {
  if (!actor || !aesKey) return;

  try {
    const { encrypted, iv } = await encryptVaultData(aesKey, data);

    if (editId !== undefined) {
      await actor.update_entry(editId, toByteBuf(encrypted), toByteBuf(iv));
      showToast("Entry updated");
    } else {
      await actor.add_entry(toByteBuf(encrypted), toByteBuf(iv));
      showToast("Entry saved");
    }

    await loadEntries();
    renderVault();
  } catch (e) {
    console.error("Failed to save entry:", e);
    showToast("Failed to save entry", "error");
  }
}

async function deleteEntry(id: bigint) {
  if (!actor) return;

  try {
    await actor.delete_entry(id);
    showToast("Entry deleted");
    selectedEntryId = null;
    await loadEntries();
    renderVault();
  } catch (e) {
    console.error("Failed to delete entry:", e);
    showToast("Failed to delete entry", "error");
  }
}

// ─── Render: Login ───────────────────────────────────────────────────

function renderLogin() {
  app.innerHTML = `
    <div class="login-screen">
      <div class="login-card">
        <div class="login-logo">
          <span style="color: var(--color-accent)">${icons.vault}</span>
          <h1>IC Vault</h1>
        </div>
        <p class="login-subtitle">
          Your passwords, encrypted on the Internet Computer.<br />
          No master password. No central server. Just your passkey.
        </p>
        <button class="login-btn" id="btn-login">
          ${icons.shield}
          Sign in with Internet Identity
        </button>
        <p class="login-footer">
          Secured by <a href="https://internetcomputer.org/docs/building-apps/network-features/vetkeys" target="_blank">vetKeys</a> threshold cryptography
        </p>
      </div>
    </div>
  `;

  document.getElementById("btn-login")!.addEventListener("click", login);
}

// ─── Render: App Shell ───────────────────────────────────────────────

async function renderApp() {
  const identity = authClient.getIdentity();
  const principal = identity.getPrincipal().toText();

  app.innerHTML = `
    <div class="app-shell">
      <header class="app-header">
        <div class="header-left">
          <span style="color: var(--color-accent)">${icons.vaultSmall}</span>
          <h1>IC Vault</h1>
        </div>
        <div class="header-right">
          <span class="header-principal" title="${principal}">${principal}</span>
          <button class="btn-logout" id="btn-logout">Sign out</button>
        </div>
      </header>
      <main class="vault-content" id="vault-content">
        <div class="loading-spinner"><div class="spinner"></div></div>
      </main>
    </div>
  `;

  document.getElementById("btn-logout")!.addEventListener("click", logout);

  // Derive encryption key (vetKey flow)
  try {
    aesKey = await deriveEncryptionKey(actor!);
    await loadEntries();
    renderVault();
  } catch (e) {
    console.error("Failed to derive encryption key:", e);
    document.getElementById("vault-content")!.innerHTML = `
      <div class="empty-state">
        <h3>Encryption key derivation failed</h3>
        <p>Please try signing in again. If the problem persists, the vetKeys service may be temporarily unavailable.</p>
      </div>
    `;
  }
}

// ─── Render: Vault ───────────────────────────────────────────────────

function renderVault() {
  const content = document.getElementById("vault-content")!;
  const filtered = filteredEntries();

  content.innerHTML = `
    <div class="vault-toolbar">
      <h2>Vault <span class="vault-count">${entries.length}</span></h2>
      <button class="btn-add" id="btn-add">
        ${icons.plus}
        Add entry
      </button>
    </div>
    <div class="search-bar">
      ${icons.search}
      <input type="text" placeholder="Search vault..." id="search-input" value="${searchQuery}" />
    </div>
    ${
      filtered.length === 0
        ? `
      <div class="empty-state">
        ${entries.length === 0 ? icons.key : icons.search}
        <h3>${entries.length === 0 ? "Your vault is empty" : "No results"}</h3>
        <p>${entries.length === 0 ? "Add your first password to get started." : "Try a different search term."}</p>
      </div>
    `
        : `
      <div class="entry-list">
        ${filtered
          .map(
            (entry) => `
          <div class="entry-item" data-id="${entry.id}">
            <div class="entry-favicon">${getFavicon(entry)}</div>
            <div class="entry-info">
              <div class="entry-title">${escapeHtml(entry.data.title)}</div>
              <div class="entry-username">${escapeHtml(entry.data.username)}</div>
            </div>
            <div class="entry-actions">
              <button class="btn-icon" data-action="copy-password" data-id="${entry.id}" title="Copy password">
                ${icons.copy}
              </button>
              <button class="btn-icon" data-action="edit" data-id="${entry.id}" title="Edit">
                ${icons.edit}
              </button>
              <button class="btn-icon danger" data-action="delete" data-id="${entry.id}" title="Delete">
                ${icons.trash}
              </button>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    `
    }
  `;

  // Event listeners
  document.getElementById("btn-add")!.addEventListener("click", () => {
    openEntryModal();
  });

  const searchInput = document.getElementById("search-input") as HTMLInputElement;
  searchInput.addEventListener("input", (e) => {
    searchQuery = (e.target as HTMLInputElement).value;
    renderVault();
    // Re-focus after re-render
    const newInput = document.getElementById("search-input") as HTMLInputElement;
    newInput.focus();
    newInput.setSelectionRange(searchQuery.length, searchQuery.length);
  });

  // Entry click handlers
  content.querySelectorAll(".entry-item").forEach((el) => {
    el.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      const actionBtn = target.closest("[data-action]") as HTMLElement;

      if (actionBtn) {
        e.stopPropagation();
        const action = actionBtn.dataset.action;
        const id = BigInt(actionBtn.dataset.id!);
        const entry = entries.find((en) => en.id === id);
        if (!entry) return;

        if (action === "copy-password") {
          copyToClipboard(entry.data.password, "Password");
        } else if (action === "edit") {
          openEntryModal(entry);
        } else if (action === "delete") {
          if (confirm("Delete this entry?")) {
            deleteEntry(id);
          }
        }
      } else {
        const id = BigInt((el as HTMLElement).dataset.id!);
        const entry = entries.find((en) => en.id === id);
        if (entry) openDetailModal(entry);
      }
    });
  });
}

// ─── Render: Entry Modal ─────────────────────────────────────────────

function openEntryModal(existingEntry?: DecryptedEntry) {
  const isEdit = !!existingEntry;
  const data = existingEntry?.data || {
    title: "",
    username: "",
    password: "",
    url: "",
    notes: "",
  };

  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <h3>${isEdit ? "Edit entry" : "New entry"}</h3>
        <button class="modal-close">${icons.close}</button>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label>Title</label>
          <input type="text" id="entry-title" placeholder="e.g. GitHub" value="${escapeAttr(data.title)}" />
        </div>
        <div class="form-group">
          <label>Username / Email</label>
          <input type="text" id="entry-username" placeholder="e.g. user@example.com" value="${escapeAttr(data.username)}" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <div class="password-field">
            <input type="password" id="entry-password" placeholder="Enter password" value="${escapeAttr(data.password)}" />
            <div class="password-field-actions">
              <button class="btn-icon" id="toggle-pw-visibility" title="Toggle visibility">
                ${icons.eye}
              </button>
              <button class="btn-icon" id="btn-gen-password" title="Generate password">
                ${icons.shield}
              </button>
            </div>
          </div>
          <div id="password-gen-container"></div>
        </div>
        <div class="form-group">
          <label>URL</label>
          <input type="text" id="entry-url" placeholder="e.g. github.com" value="${escapeAttr(data.url)}" />
        </div>
        <div class="form-group">
          <label>Notes</label>
          <textarea id="entry-notes" placeholder="Optional notes...">${escapeHtml(data.notes)}</textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-cancel" id="btn-modal-cancel">Cancel</button>
        <button class="btn-save" id="btn-modal-save">${isEdit ? "Update" : "Save"}</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // Focus title
  setTimeout(() => {
    (document.getElementById("entry-title") as HTMLInputElement)?.focus();
  }, 100);

  // Close handlers
  overlay.querySelector(".modal-close")!.addEventListener("click", () => overlay.remove());
  overlay.querySelector("#btn-modal-cancel")!.addEventListener("click", () => overlay.remove());
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.remove();
  });

  // Toggle password visibility
  const pwField = document.getElementById("entry-password") as HTMLInputElement;
  document.getElementById("toggle-pw-visibility")!.addEventListener("click", () => {
    pwField.type = pwField.type === "password" ? "text" : "password";
  });

  // Password generator
  let genOpen = false;
  document.getElementById("btn-gen-password")!.addEventListener("click", () => {
    const container = document.getElementById("password-gen-container")!;
    genOpen = !genOpen;
    if (genOpen) {
      const pw = generatePassword(20);
      container.innerHTML = `
        <div class="password-generator">
          <div class="password-generator-output" id="gen-pw-output">${escapeHtml(pw)}</div>
          <div class="password-generator-controls">
            <label>Length: <span id="gen-length-val">20</span></label>
            <input type="range" min="8" max="64" value="20" id="gen-length" />
            <button class="btn-generate" id="btn-regen">Regenerate</button>
            <button class="btn-generate" id="btn-use-pw">Use</button>
          </div>
        </div>
      `;

      const lengthSlider = document.getElementById("gen-length") as HTMLInputElement;
      const lengthVal = document.getElementById("gen-length-val")!;
      const output = document.getElementById("gen-pw-output")!;

      lengthSlider.addEventListener("input", () => {
        lengthVal.textContent = lengthSlider.value;
        output.textContent = generatePassword(parseInt(lengthSlider.value));
      });

      document.getElementById("btn-regen")!.addEventListener("click", () => {
        output.textContent = generatePassword(parseInt(lengthSlider.value));
      });

      document.getElementById("btn-use-pw")!.addEventListener("click", () => {
        pwField.value = output.textContent!;
        pwField.type = "text";
        container.innerHTML = "";
        genOpen = false;
      });
    } else {
      container.innerHTML = "";
    }
  });

  // Save
  document.getElementById("btn-modal-save")!.addEventListener("click", async () => {
    const title = (document.getElementById("entry-title") as HTMLInputElement).value.trim();
    const username = (document.getElementById("entry-username") as HTMLInputElement).value.trim();
    const password = (document.getElementById("entry-password") as HTMLInputElement).value;
    const url = (document.getElementById("entry-url") as HTMLInputElement).value.trim();
    const notes = (document.getElementById("entry-notes") as HTMLTextAreaElement).value.trim();

    if (!title) {
      showToast("Title is required", "error");
      return;
    }

    const btn = document.getElementById("btn-modal-save") as HTMLButtonElement;
    btn.disabled = true;
    btn.textContent = "Encrypting...";

    await saveEntry({ title, username, password, url, notes }, existingEntry?.id);
    overlay.remove();
  });
}

// ─── Render: Detail Modal ────────────────────────────────────────────

function openDetailModal(entry: DecryptedEntry) {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <h3>${escapeHtml(entry.data.title)}</h3>
        <button class="modal-close">${icons.close}</button>
      </div>
      <div class="modal-body">
        ${
          entry.data.username
            ? `
          <div class="detail-field">
            <span class="detail-label">Username / Email</span>
            <div class="detail-value mono">
              ${escapeHtml(entry.data.username)}
              <button class="btn-copy" data-copy="${escapeAttr(entry.data.username)}" data-label="Username">Copy</button>
            </div>
          </div>
        `
            : ""
        }
        <div class="detail-field">
          <span class="detail-label">Password</span>
          <div class="detail-value password">
            <span id="detail-pw-display">${"•".repeat(12)}</span>
            <button class="btn-icon" id="detail-toggle-pw" title="Toggle visibility">${icons.eye}</button>
            <button class="btn-copy" data-copy="${escapeAttr(entry.data.password)}" data-label="Password">Copy</button>
          </div>
        </div>
        ${
          entry.data.url
            ? `
          <div class="detail-field">
            <span class="detail-label">URL</span>
            <div class="detail-value">
              <a href="${entry.data.url.startsWith("http") ? escapeAttr(entry.data.url) : `https://${escapeAttr(entry.data.url)}`}" target="_blank" rel="noopener">${escapeHtml(entry.data.url)}</a>
              <button class="btn-copy" data-copy="${escapeAttr(entry.data.url)}" data-label="URL">Copy</button>
            </div>
          </div>
        `
            : ""
        }
        ${
          entry.data.notes
            ? `
          <div class="detail-field">
            <span class="detail-label">Notes</span>
            <div class="detail-value">${escapeHtml(entry.data.notes)}</div>
          </div>
        `
            : ""
        }
        <div class="detail-field">
          <span class="detail-label">Created</span>
          <div class="detail-value" style="font-size: 12px; color: var(--color-text-muted)">
            ${new Date(Number(entry.created_at) / 1_000_000).toLocaleString()}
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-cancel" id="detail-delete">Delete</button>
        <button class="btn-save" id="detail-edit">Edit</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // Close
  overlay.querySelector(".modal-close")!.addEventListener("click", () => overlay.remove());
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.remove();
  });

  // Toggle password
  let pwVisible = false;
  document.getElementById("detail-toggle-pw")!.addEventListener("click", () => {
    pwVisible = !pwVisible;
    document.getElementById("detail-pw-display")!.textContent = pwVisible
      ? entry.data.password
      : "•".repeat(12);
  });

  // Copy buttons
  overlay.querySelectorAll(".btn-copy").forEach((btn) => {
    btn.addEventListener("click", () => {
      const el = btn as HTMLElement;
      copyToClipboard(el.dataset.copy!, el.dataset.label!);
      el.textContent = "Copied";
      el.classList.add("copied");
      setTimeout(() => {
        el.textContent = "Copy";
        el.classList.remove("copied");
      }, 1500);
    });
  });

  // Edit
  document.getElementById("detail-edit")!.addEventListener("click", () => {
    overlay.remove();
    openEntryModal(entry);
  });

  // Delete
  document.getElementById("detail-delete")!.addEventListener("click", () => {
    if (confirm("Delete this entry?")) {
      overlay.remove();
      deleteEntry(entry.id);
    }
  });
}

// ─── Utils ───────────────────────────────────────────────────────────

function escapeHtml(str: string): string {
  const el = document.createElement("span");
  el.textContent = str;
  return el.innerHTML;
}

function escapeAttr(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// ─── Init ────────────────────────────────────────────────────────────

initAuth().catch((e) => {
  console.error("initAuth failed:", e);
  app.innerHTML = `
    <div class="login-screen">
      <div class="login-card">
        <div class="login-logo">
          <span style="color: var(--color-accent)">${icons.vault}</span>
          <h1>IC Vault</h1>
        </div>
        <p class="login-subtitle" style="color: #f87171;">Failed to initialize: ${String(e?.message || e)}</p>
        <button class="login-btn" onclick="location.reload()">Retry</button>
      </div>
    </div>
  `;
});
