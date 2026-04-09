var _o = Object.defineProperty, Dd = (e, t) => {
  let r = {};
  for (var n in e)
    _o(r, n, {
      get: e[n],
      enumerable: !0
    });
  return t || _o(r, Symbol.toStringTag, { value: "Module" }), r;
}, xo;
(function(e) {
  e[e.SysFatal = 1] = "SysFatal", e[e.SysTransient = 2] = "SysTransient", e[e.DestinationInvalid = 3] = "DestinationInvalid", e[e.CanisterReject = 4] = "CanisterReject", e[e.CanisterError = 5] = "CanisterError";
})(xo || (xo = {}));
var Fr;
(function(e) {
  e.Replied = "replied", e.Rejected = "rejected";
})(Fr || (Fr = {}));
function qd(e) {
  return e != null && "reject_code" in e;
}
function Pd(e) {
  return e != null && "certificate" in e;
}
var hi = "abcdefghijklmnopqrstuvwxyz234567", Dr = /* @__PURE__ */ Object.create(null);
for (let e = 0; e < 32; e++) Dr[hi[e]] = e;
Dr[0] = Dr.o;
Dr[1] = Dr.i;
function Ld(e) {
  let t = 0, r = 0, n = "";
  function s(i) {
    return t < 0 ? r |= i >> -t : r = i << t & 248, t > 3 ? (t -= 8, 1) : (t < 4 && (n += hi[r >> 3], t += 5), 0);
  }
  for (let i = 0; i < e.length; ) i += s(e[i]);
  return n + (t < 0 ? hi[r >> 3] : "");
}
function Md(e) {
  let t = 0, r = 0;
  const n = new Uint8Array(e.length * 4 / 3 | 0);
  let s = 0;
  function i(o) {
    let a = Dr[o.toLowerCase()];
    if (a === void 0) throw new Error(`Invalid character: ${JSON.stringify(o)}`);
    a <<= 3, r |= a >>> t, t += 5, t >= 8 && (n[s++] = r, t -= 8, t > 0 ? r = a << 5 - t & 255 : r = 0);
  }
  for (const o of e) i(o);
  return n.slice(0, s);
}
var kd = new Uint32Array([
  0,
  1996959894,
  3993919788,
  2567524794,
  124634137,
  1886057615,
  3915621685,
  2657392035,
  249268274,
  2044508324,
  3772115230,
  2547177864,
  162941995,
  2125561021,
  3887607047,
  2428444049,
  498536548,
  1789927666,
  4089016648,
  2227061214,
  450548861,
  1843258603,
  4107580753,
  2211677639,
  325883990,
  1684777152,
  4251122042,
  2321926636,
  335633487,
  1661365465,
  4195302755,
  2366115317,
  997073096,
  1281953886,
  3579855332,
  2724688242,
  1006888145,
  1258607687,
  3524101629,
  2768942443,
  901097722,
  1119000684,
  3686517206,
  2898065728,
  853044451,
  1172266101,
  3705015759,
  2882616665,
  651767980,
  1373503546,
  3369554304,
  3218104598,
  565507253,
  1454621731,
  3485111705,
  3099436303,
  671266974,
  1594198024,
  3322730930,
  2970347812,
  795835527,
  1483230225,
  3244367275,
  3060149565,
  1994146192,
  31158534,
  2563907772,
  4023717930,
  1907459465,
  112637215,
  2680153253,
  3904427059,
  2013776290,
  251722036,
  2517215374,
  3775830040,
  2137656763,
  141376813,
  2439277719,
  3865271297,
  1802195444,
  476864866,
  2238001368,
  4066508878,
  1812370925,
  453092731,
  2181625025,
  4111451223,
  1706088902,
  314042704,
  2344532202,
  4240017532,
  1658658271,
  366619977,
  2362670323,
  4224994405,
  1303535960,
  984961486,
  2747007092,
  3569037538,
  1256170817,
  1037604311,
  2765210733,
  3554079995,
  1131014506,
  879679996,
  2909243462,
  3663771856,
  1141124467,
  855842277,
  2852801631,
  3708648649,
  1342533948,
  654459306,
  3188396048,
  3373015174,
  1466479909,
  544179635,
  3110523913,
  3462522015,
  1591671054,
  702138776,
  2966460450,
  3352799412,
  1504918807,
  783551873,
  3082640443,
  3233442989,
  3988292384,
  2596254646,
  62317068,
  1957810842,
  3939845945,
  2647816111,
  81470997,
  1943803523,
  3814918930,
  2489596804,
  225274430,
  2053790376,
  3826175755,
  2466906013,
  167816743,
  2097651377,
  4027552580,
  2265490386,
  503444072,
  1762050814,
  4150417245,
  2154129355,
  426522225,
  1852507879,
  4275313526,
  2312317920,
  282753626,
  1742555852,
  4189708143,
  2394877945,
  397917763,
  1622183637,
  3604390888,
  2714866558,
  953729732,
  1340076626,
  3518719985,
  2797360999,
  1068828381,
  1219638859,
  3624741850,
  2936675148,
  906185462,
  1090812512,
  3747672003,
  2825379669,
  829329135,
  1181335161,
  3412177804,
  3160834842,
  628085408,
  1382605366,
  3423369109,
  3138078467,
  570562233,
  1426400815,
  3317316542,
  2998733608,
  733239954,
  1555261956,
  3268935591,
  3050360625,
  752459403,
  1541320221,
  2607071920,
  3965973030,
  1969922972,
  40735498,
  2617837225,
  3943577151,
  1913087877,
  83908371,
  2512341634,
  3803740692,
  2075208622,
  213261112,
  2463272603,
  3855990285,
  2094854071,
  198958881,
  2262029012,
  4057260610,
  1759359992,
  534414190,
  2176718541,
  4139329115,
  1873836001,
  414664567,
  2282248934,
  4279200368,
  1711684554,
  285281116,
  2405801727,
  4167216745,
  1634467795,
  376229701,
  2685067896,
  3608007406,
  1308918612,
  956543938,
  2808555105,
  3495958263,
  1231636301,
  1047427035,
  2932959818,
  3654703836,
  1088359270,
  936918e3,
  2847714899,
  3736837829,
  1202900863,
  817233897,
  3183342108,
  3401237130,
  1404277552,
  615818150,
  3134207493,
  3453421203,
  1423857449,
  601450431,
  3009837614,
  3294710456,
  1567103746,
  711928724,
  3020668471,
  3272380065,
  1510334235,
  755167117
]);
function Vd(e) {
  let t = -1;
  for (let r = 0; r < e.length; r++) t = kd[(e[r] ^ t) & 255] ^ t >>> 8;
  return (t ^ -1) >>> 0;
}
var gr = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
function _n(e) {
  return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
}
function $d(e) {
  if (!Number.isSafeInteger(e) || e < 0) throw new Error("positive integer expected, got " + e);
}
function Pe(e, ...t) {
  if (!_n(e)) throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length)) throw new Error("Uint8Array expected of length " + t + ", got length=" + e.length);
}
function Bo(e, t = !0) {
  if (e.destroyed) throw new Error("Hash instance has been destroyed");
  if (t && e.finished) throw new Error("Hash#digest() has already been called");
}
function jd(e, t) {
  Pe(e);
  const r = t.outputLen;
  if (e.length < r) throw new Error("digestInto() expects output buffer of length at least " + r);
}
function sn(...e) {
  for (let t = 0; t < e.length; t++) e[t].fill(0);
}
function Os(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function tt(e, t) {
  return e << 32 - t | e >>> t;
}
var qp = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68, nc = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", Kd = /* @__PURE__ */ Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function te(e) {
  if (Pe(e), nc) return e.toHex();
  let t = "";
  for (let r = 0; r < e.length; r++) t += Kd[e[r]];
  return t;
}
var dt = {
  _0: 48,
  _9: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function Io(e) {
  if (e >= dt._0 && e <= dt._9) return e - dt._0;
  if (e >= dt.A && e <= dt.F) return e - (dt.A - 10);
  if (e >= dt.a && e <= dt.f) return e - (dt.a - 10);
}
function at(e) {
  if (typeof e != "string") throw new Error("hex string expected, got " + typeof e);
  if (nc) return Uint8Array.fromHex(e);
  const t = e.length, r = t / 2;
  if (t % 2) throw new Error("hex string expected, got unpadded hex of length " + t);
  const n = new Uint8Array(r);
  for (let s = 0, i = 0; s < r; s++, i += 2) {
    const o = Io(e.charCodeAt(i)), a = Io(e.charCodeAt(i + 1));
    if (o === void 0 || a === void 0) {
      const c = e[i] + e[i + 1];
      throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + i);
    }
    n[s] = o * 16 + a;
  }
  return n;
}
function ae(e) {
  if (typeof e != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(e));
}
function sc(e) {
  return typeof e == "string" && (e = ae(e)), Pe(e), e;
}
function J(...e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    Pe(s), t += s.length;
  }
  const r = new Uint8Array(t);
  for (let n = 0, s = 0; n < e.length; n++) {
    const i = e[n];
    r.set(i, s), s += i.length;
  }
  return r;
}
var Hd = class {
};
function $i(e) {
  const t = (n) => e().update(sc(n)).digest(), r = e();
  return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = () => e(), t;
}
function ic(e = 32) {
  if (gr && typeof gr.getRandomValues == "function") return gr.getRandomValues(new Uint8Array(e));
  if (gr && typeof gr.randomBytes == "function") return Uint8Array.from(gr.randomBytes(e));
  throw new Error("crypto.getRandomValues must be defined");
}
function Gd(e, t, r, n) {
  if (typeof e.setBigUint64 == "function") return e.setBigUint64(t, r, n);
  const s = BigInt(32), i = BigInt(4294967295), o = Number(r >> s & i), a = Number(r & i), c = n ? 4 : 0, d = n ? 0 : 4;
  e.setUint32(t + c, o, n), e.setUint32(t + d, a, n);
}
function Zd(e, t, r) {
  return e & t ^ ~e & r;
}
function Yd(e, t, r) {
  return e & t ^ e & r ^ t & r;
}
var oc = class extends Hd {
  constructor(e, t, r, n) {
    super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = e, this.outputLen = t, this.padOffset = r, this.isLE = n, this.buffer = new Uint8Array(e), this.view = Os(this.buffer);
  }
  update(e) {
    Bo(this), e = sc(e), Pe(e);
    const { view: t, buffer: r, blockLen: n } = this, s = e.length;
    for (let i = 0; i < s; ) {
      const o = Math.min(n - this.pos, s - i);
      if (o === n) {
        const a = Os(e);
        for (; n <= s - i; i += n) this.process(a, i);
        continue;
      }
      r.set(e.subarray(i, i + o), this.pos), this.pos += o, i += o, this.pos === n && (this.process(t, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    Bo(this), jd(e, this), this.finished = !0;
    const { buffer: t, view: r, blockLen: n, isLE: s } = this;
    let { pos: i } = this;
    t[i++] = 128, sn(this.buffer.subarray(i)), this.padOffset > n - i && (this.process(r, 0), i = 0);
    for (let f = i; f < n; f++) t[f] = 0;
    Gd(r, n - 8, BigInt(this.length * 8), s), this.process(r, 0);
    const o = Os(e), a = this.outputLen;
    if (a % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const c = a / 4, d = this.get();
    if (c > d.length) throw new Error("_sha2: outputLen bigger than state");
    for (let f = 0; f < c; f++) o.setUint32(4 * f, d[f], s);
  }
  digest() {
    const { buffer: e, outputLen: t } = this;
    this.digestInto(e);
    const r = e.slice(0, t);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: t, buffer: r, length: n, finished: s, destroyed: i, pos: o } = this;
    return e.destroyed = i, e.finished = s, e.length = n, e.pos = o, n % t && e.buffer.set(r), e;
  }
  clone() {
    return this._cloneInto();
  }
}, It = /* @__PURE__ */ Uint32Array.from([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), St = /* @__PURE__ */ Uint32Array.from([
  3238371032,
  914150663,
  812702999,
  4144912697,
  4290775857,
  1750603025,
  1694076839,
  3204075428
]), Be = /* @__PURE__ */ Uint32Array.from([
  1779033703,
  4089235720,
  3144134277,
  2227873595,
  1013904242,
  4271175723,
  2773480762,
  1595750129,
  1359893119,
  2917565137,
  2600822924,
  725511199,
  528734635,
  4215389547,
  1541459225,
  327033209
]), An = /* @__PURE__ */ BigInt(2 ** 32 - 1), So = /* @__PURE__ */ BigInt(32);
function zd(e, t = !1) {
  return t ? {
    h: Number(e & An),
    l: Number(e >> So & An)
  } : {
    h: Number(e >> So & An) | 0,
    l: Number(e & An) | 0
  };
}
function Xd(e, t = !1) {
  const r = e.length;
  let n = new Uint32Array(r), s = new Uint32Array(r);
  for (let i = 0; i < r; i++) {
    const { h: o, l: a } = zd(e[i], t);
    [n[i], s[i]] = [o, a];
  }
  return [n, s];
}
var To = (e, t, r) => e >>> r, Oo = (e, t, r) => e << 32 - r | t >>> r, wr = (e, t, r) => e >>> r | t << 32 - r, Er = (e, t, r) => e << 32 - r | t >>> r, Rn = (e, t, r) => e << 64 - r | t >>> r - 32, Nn = (e, t, r) => e >>> r - 32 | t << 64 - r;
function lt(e, t, r, n) {
  const s = (t >>> 0) + (n >>> 0);
  return {
    h: e + r + (s / 2 ** 32 | 0) | 0,
    l: s | 0
  };
}
var Wd = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0), Jd = (e, t, r, n) => t + r + n + (e / 2 ** 32 | 0) | 0, Qd = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0), el = (e, t, r, n, s) => t + r + n + s + (e / 2 ** 32 | 0) | 0, tl = (e, t, r, n, s) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (s >>> 0), rl = (e, t, r, n, s, i) => t + r + n + s + i + (e / 2 ** 32 | 0) | 0, nl = /* @__PURE__ */ Uint32Array.from([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), Tt = /* @__PURE__ */ new Uint32Array(64), ac = class extends oc {
  constructor(e = 32) {
    super(64, e, 8, !1), this.A = It[0] | 0, this.B = It[1] | 0, this.C = It[2] | 0, this.D = It[3] | 0, this.E = It[4] | 0, this.F = It[5] | 0, this.G = It[6] | 0, this.H = It[7] | 0;
  }
  get() {
    const { A: e, B: t, C: r, D: n, E: s, F: i, G: o, H: a } = this;
    return [
      e,
      t,
      r,
      n,
      s,
      i,
      o,
      a
    ];
  }
  set(e, t, r, n, s, i, o, a) {
    this.A = e | 0, this.B = t | 0, this.C = r | 0, this.D = n | 0, this.E = s | 0, this.F = i | 0, this.G = o | 0, this.H = a | 0;
  }
  process(e, t) {
    for (let f = 0; f < 16; f++, t += 4) Tt[f] = e.getUint32(t, !1);
    for (let f = 16; f < 64; f++) {
      const l = Tt[f - 15], u = Tt[f - 2], h = tt(l, 7) ^ tt(l, 18) ^ l >>> 3;
      Tt[f] = (tt(u, 17) ^ tt(u, 19) ^ u >>> 10) + Tt[f - 7] + h + Tt[f - 16] | 0;
    }
    let { A: r, B: n, C: s, D: i, E: o, F: a, G: c, H: d } = this;
    for (let f = 0; f < 64; f++) {
      const l = tt(o, 6) ^ tt(o, 11) ^ tt(o, 25), u = d + l + Zd(o, a, c) + nl[f] + Tt[f] | 0, h = (tt(r, 2) ^ tt(r, 13) ^ tt(r, 22)) + Yd(r, n, s) | 0;
      d = c, c = a, a = o, o = i + u | 0, i = s, s = n, n = r, r = u + h | 0;
    }
    r = r + this.A | 0, n = n + this.B | 0, s = s + this.C | 0, i = i + this.D | 0, o = o + this.E | 0, a = a + this.F | 0, c = c + this.G | 0, d = d + this.H | 0, this.set(r, n, s, i, o, a, c, d);
  }
  roundClean() {
    sn(Tt);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), sn(this.buffer);
  }
}, sl = class extends ac {
  constructor() {
    super(28), this.A = St[0] | 0, this.B = St[1] | 0, this.C = St[2] | 0, this.D = St[3] | 0, this.E = St[4] | 0, this.F = St[5] | 0, this.G = St[6] | 0, this.H = St[7] | 0;
  }
}, cc = Xd([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((e) => BigInt(e))), il = cc[0], ol = cc[1], Ot = /* @__PURE__ */ new Uint32Array(80), Ct = /* @__PURE__ */ new Uint32Array(80), al = class extends oc {
  constructor(e = 64) {
    super(128, e, 16, !1), this.Ah = Be[0] | 0, this.Al = Be[1] | 0, this.Bh = Be[2] | 0, this.Bl = Be[3] | 0, this.Ch = Be[4] | 0, this.Cl = Be[5] | 0, this.Dh = Be[6] | 0, this.Dl = Be[7] | 0, this.Eh = Be[8] | 0, this.El = Be[9] | 0, this.Fh = Be[10] | 0, this.Fl = Be[11] | 0, this.Gh = Be[12] | 0, this.Gl = Be[13] | 0, this.Hh = Be[14] | 0, this.Hl = Be[15] | 0;
  }
  get() {
    const { Ah: e, Al: t, Bh: r, Bl: n, Ch: s, Cl: i, Dh: o, Dl: a, Eh: c, El: d, Fh: f, Fl: l, Gh: u, Gl: h, Hh: p, Hl: y } = this;
    return [
      e,
      t,
      r,
      n,
      s,
      i,
      o,
      a,
      c,
      d,
      f,
      l,
      u,
      h,
      p,
      y
    ];
  }
  set(e, t, r, n, s, i, o, a, c, d, f, l, u, h, p, y) {
    this.Ah = e | 0, this.Al = t | 0, this.Bh = r | 0, this.Bl = n | 0, this.Ch = s | 0, this.Cl = i | 0, this.Dh = o | 0, this.Dl = a | 0, this.Eh = c | 0, this.El = d | 0, this.Fh = f | 0, this.Fl = l | 0, this.Gh = u | 0, this.Gl = h | 0, this.Hh = p | 0, this.Hl = y | 0;
  }
  process(e, t) {
    for (let g = 0; g < 16; g++, t += 4)
      Ot[g] = e.getUint32(t), Ct[g] = e.getUint32(t += 4);
    for (let g = 16; g < 80; g++) {
      const E = Ot[g - 15] | 0, _ = Ct[g - 15] | 0, I = wr(E, _, 1) ^ wr(E, _, 8) ^ To(E, _, 7), S = Er(E, _, 1) ^ Er(E, _, 8) ^ Oo(E, _, 7), B = Ot[g - 2] | 0, U = Ct[g - 2] | 0, v = wr(B, U, 19) ^ Rn(B, U, 61) ^ To(B, U, 6), N = Er(B, U, 19) ^ Nn(B, U, 61) ^ Oo(B, U, 6), P = Qd(S, N, Ct[g - 7], Ct[g - 16]);
      Ot[g] = el(P, I, v, Ot[g - 7], Ot[g - 16]) | 0, Ct[g] = P | 0;
    }
    let { Ah: r, Al: n, Bh: s, Bl: i, Ch: o, Cl: a, Dh: c, Dl: d, Eh: f, El: l, Fh: u, Fl: h, Gh: p, Gl: y, Hh: w, Hl: m } = this;
    for (let g = 0; g < 80; g++) {
      const E = wr(f, l, 14) ^ wr(f, l, 18) ^ Rn(f, l, 41), _ = Er(f, l, 14) ^ Er(f, l, 18) ^ Nn(f, l, 41), I = f & u ^ ~f & p, S = l & h ^ ~l & y, B = tl(m, _, S, ol[g], Ct[g]), U = rl(B, w, E, I, il[g], Ot[g]), v = B | 0, N = wr(r, n, 28) ^ Rn(r, n, 34) ^ Rn(r, n, 39), P = Er(r, n, 28) ^ Nn(r, n, 34) ^ Nn(r, n, 39), A = r & s ^ r & o ^ s & o, b = n & i ^ n & a ^ i & a;
      w = p | 0, m = y | 0, p = u | 0, y = h | 0, u = f | 0, h = l | 0, { h: f, l } = lt(c | 0, d | 0, U | 0, v | 0), c = o | 0, d = a | 0, o = s | 0, a = i | 0, s = r | 0, i = n | 0;
      const x = Wd(v, P, b);
      r = Jd(x, U, N, A), n = x | 0;
    }
    ({ h: r, l: n } = lt(this.Ah | 0, this.Al | 0, r | 0, n | 0)), { h: s, l: i } = lt(this.Bh | 0, this.Bl | 0, s | 0, i | 0), { h: o, l: a } = lt(this.Ch | 0, this.Cl | 0, o | 0, a | 0), { h: c, l: d } = lt(this.Dh | 0, this.Dl | 0, c | 0, d | 0), { h: f, l } = lt(this.Eh | 0, this.El | 0, f | 0, l | 0), { h: u, l: h } = lt(this.Fh | 0, this.Fl | 0, u | 0, h | 0), { h: p, l: y } = lt(this.Gh | 0, this.Gl | 0, p | 0, y | 0), { h: w, l: m } = lt(this.Hh | 0, this.Hl | 0, w | 0, m | 0), this.set(r, n, s, i, o, a, c, d, f, l, u, h, p, y, w, m);
  }
  roundClean() {
    sn(Ot, Ct);
  }
  destroy() {
    sn(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}, ke = /* @__PURE__ */ $i(() => new ac()), cl = /* @__PURE__ */ $i(() => new sl()), on = /* @__PURE__ */ $i(() => new al()), Co = "__principal__", ul = 2, Ao = 4, fl = "aaaaa-aa", X = class Br {
  static anonymous() {
    return new this(new Uint8Array([Ao]));
  }
  static managementCanister() {
    return this.fromText(fl);
  }
  static selfAuthenticating(t) {
    const r = cl(t);
    return new this(new Uint8Array([...r, ul]));
  }
  static from(t) {
    if (typeof t == "string") return Br.fromText(t);
    if (Object.getPrototypeOf(t) === Uint8Array.prototype) return new Br(t);
    if (Br.isPrincipal(t)) return new Br(t._arr);
    throw new Error(`Impossible to convert ${JSON.stringify(t)} to Principal.`);
  }
  static fromHex(t) {
    return new this(at(t));
  }
  static fromText(t) {
    let r = t;
    if (t.includes("__principal__")) {
      const i = JSON.parse(t);
      "__principal__" in i && (r = i[Co]);
    }
    let n = Md(r.toLowerCase().replace(/-/g, ""));
    n = n.slice(4, n.length);
    const s = new this(n);
    if (s.toText() !== r) throw new Error(`Principal "${s.toText()}" does not have a valid checksum (original value "${r}" may not be a valid Principal ID).`);
    return s;
  }
  static fromUint8Array(t) {
    return new this(t);
  }
  static isPrincipal(t) {
    return t instanceof Br || typeof t == "object" && t !== null && "_isPrincipal" in t && t._isPrincipal === !0 && "_arr" in t && t._arr instanceof Uint8Array;
  }
  constructor(t) {
    this._arr = t, this._isPrincipal = !0;
  }
  isAnonymous() {
    return this._arr.byteLength === 1 && this._arr[0] === Ao;
  }
  toUint8Array() {
    return this._arr;
  }
  toHex() {
    return te(this._arr).toUpperCase();
  }
  toText() {
    const t = /* @__PURE__ */ new ArrayBuffer(4);
    new DataView(t).setUint32(0, Vd(this._arr));
    const r = new Uint8Array(t), n = Ld(new Uint8Array([...r, ...this._arr])).match(/.{1,5}/g);
    if (!n) throw new Error();
    return n.join("-");
  }
  toString() {
    return this.toText();
  }
  toJSON() {
    return { [Co]: this.toText() };
  }
  compareTo(t) {
    for (let r = 0; r < Math.min(this._arr.length, t._arr.length); r++) {
      if (this._arr[r] < t._arr[r]) return "lt";
      if (this._arr[r] > t._arr[r]) return "gt";
    }
    return this._arr.length < t._arr.length ? "lt" : this._arr.length > t._arr.length ? "gt" : "eq";
  }
  ltEq(t) {
    const r = this.compareTo(t);
    return r == "lt" || r == "eq";
  }
  gtEq(t) {
    const r = this.compareTo(t);
    return r == "gt" || r == "eq";
  }
}, _t;
(function(e) {
  e.Trust = "Trust", e.Protocol = "Protocol", e.Reject = "Reject", e.Transport = "Transport", e.External = "External", e.Limit = "Limit", e.Input = "Input", e.Unknown = "Unknown";
})(_t || (_t = {}));
var G = class {
  constructor(e = !1) {
    this.isCertified = e;
  }
  toString() {
    let e = this.toErrorMessage();
    return this.requestContext && (e += `
Request context:
  Request ID (hex): ${this.requestContext.requestId ? te(this.requestContext.requestId) : "undefined"}
  Sender pubkey (hex): ${te(this.requestContext.senderPubKey)}
  Sender signature (hex): ${te(this.requestContext.senderSignature)}
  Ingress expiry: ${this.requestContext.ingressExpiry.toString()}`), this.callContext && (e += `
Call context:
  Canister ID: ${this.callContext.canisterId.toText()}
  Method name: ${this.callContext.methodName}
  HTTP details: ${JSON.stringify(this.callContext.httpDetails, null, 2)}`), e;
  }
}, Zt = class uc extends Error {
  get code() {
    return this.cause.code;
  }
  set code(t) {
    this.cause.code = t;
  }
  get kind() {
    return this.cause.kind;
  }
  set kind(t) {
    this.cause.kind = t;
  }
  get isCertified() {
    return this.code.isCertified;
  }
  constructor(t, r) {
    super(t.toString()), this.name = "AgentError", this.cause = {
      code: t,
      kind: r
    }, Object.setPrototypeOf(this, uc.prototype);
  }
  hasCode(t) {
    return this.code instanceof t;
  }
  toString() {
    return `${this.name} (${this.kind}): ${this.message}`;
  }
}, hr = class extends Zt {
  static fromCode(e) {
    return new this(e);
  }
}, st = class fc extends hr {
  constructor(t) {
    super(t, _t.Trust), this.name = "TrustError", Object.setPrototypeOf(this, fc.prototype);
  }
}, pe = class dc extends hr {
  constructor(t) {
    super(t, _t.Protocol), this.name = "ProtocolError", Object.setPrototypeOf(this, dc.prototype);
  }
}, Mn = class lc extends hr {
  constructor(t) {
    super(t, _t.Reject), this.name = "RejectError", Object.setPrototypeOf(this, lc.prototype);
  }
}, Ro = class hc extends hr {
  constructor(t) {
    super(t, _t.Transport), this.name = "TransportError", Object.setPrototypeOf(this, hc.prototype);
  }
}, He = class pc extends hr {
  constructor(t) {
    super(t, _t.External), this.name = "ExternalError", Object.setPrototypeOf(this, pc.prototype);
  }
}, oe = class bc extends hr {
  constructor(t) {
    super(t, _t.Input), this.name = "InputError", Object.setPrototypeOf(this, bc.prototype);
  }
}, Ge = class yc extends hr {
  constructor(t) {
    super(t, _t.Unknown), this.name = "UnknownError", Object.setPrototypeOf(this, yc.prototype);
  }
}, kn = class mc extends G {
  constructor(t, r) {
    super(), this.reason = t, this.error = r, this.name = "CertificateVerificationErrorCode", Object.setPrototypeOf(this, mc.prototype);
  }
  toErrorMessage() {
    let t = this.reason;
    return this.error && (t += `: ${xn(this.error)}`), `Certificate verification error: "${t}"`;
  }
}, pi = class gc extends G {
  constructor(t, r, n, s, i) {
    super(), this.maxAgeInMinutes = t, this.certificateTime = r, this.currentTime = n, this.timeDiffMsecs = s, this.ageType = i, this.name = "CertificateTimeErrorCode", Object.setPrototypeOf(this, gc.prototype);
  }
  toErrorMessage() {
    return `Certificate is signed more than ${this.maxAgeInMinutes} minutes in the ${this.ageType}. Certificate time: ${this.certificateTime.toISOString()} Current time: ${this.currentTime.toISOString()} Clock drift: ${this.timeDiffMsecs}ms`;
  }
}, dl = class wc extends G {
  constructor() {
    super(), this.name = "CertificateHasTooManyDelegationsErrorCode", Object.setPrototypeOf(this, wc.prototype);
  }
  toErrorMessage() {
    return "Certificate has too many delegations";
  }
}, Ec = class vc extends G {
  constructor(t, r) {
    super(), this.canisterId = t, this.subnetId = r, this.name = "CertificateNotAuthorizedErrorCode", Object.setPrototypeOf(this, vc.prototype);
  }
  toErrorMessage() {
    return `The certificate contains a delegation that does not include the canister ${this.canisterId.toText()} in the canister_ranges field. Subnet ID: ${this.subnetId.toText()}`;
  }
}, zn = class _c extends G {
  constructor(t, r) {
    super(), this.message = t, this.lookupStatus = r, this.name = "LookupErrorCode", Object.setPrototypeOf(this, _c.prototype);
  }
  toErrorMessage() {
    return `${this.message}. Lookup status: ${this.lookupStatus}`;
  }
}, xc = class Bc extends G {
  constructor(t) {
    super(), this.message = t, this.name = "MalformedLookupFoundValueErrorCode", Object.setPrototypeOf(this, Bc.prototype);
  }
  toErrorMessage() {
    return this.message;
  }
}, ll = class Ic extends G {
  constructor(t) {
    super(), this.message = t, this.name = "MissingLookupValueErrorCode", Object.setPrototypeOf(this, Ic.prototype);
  }
  toErrorMessage() {
    return this.message;
  }
}, Sc = class Tc extends G {
  constructor(t, r) {
    super(), this.expectedLength = t, this.actualLength = r, this.name = "DerKeyLengthMismatchErrorCode", Object.setPrototypeOf(this, Tc.prototype);
  }
  toErrorMessage() {
    return `BLS DER-encoded public key must be ${this.expectedLength} bytes long, but is ${this.actualLength} bytes long`;
  }
}, hl = class Oc extends G {
  constructor(t, r) {
    super(), this.expectedPrefix = t, this.actualPrefix = r, this.name = "DerPrefixMismatchErrorCode", Object.setPrototypeOf(this, Oc.prototype);
  }
  toErrorMessage() {
    return `BLS DER-encoded public key is invalid. Expected the following prefix: ${te(this.expectedPrefix)}, but got ${te(this.actualPrefix)}`;
  }
}, pl = class Cc extends G {
  constructor(t, r) {
    super(), this.expectedLength = t, this.actualLength = r, this.name = "DerDecodeLengthMismatchErrorCode", Object.setPrototypeOf(this, Cc.prototype);
  }
  toErrorMessage() {
    return `DER payload mismatch: Expected length ${this.expectedLength}, actual length: ${this.actualLength}`;
  }
}, nr = class Ac extends G {
  constructor(t) {
    super(), this.error = t, this.name = "DerDecodeErrorCode", Object.setPrototypeOf(this, Ac.prototype);
  }
  toErrorMessage() {
    return `Failed to decode DER: ${this.error}`;
  }
}, Rc = class Nc extends G {
  constructor(t) {
    super(), this.error = t, this.name = "DerEncodeErrorCode", Object.setPrototypeOf(this, Nc.prototype);
  }
  toErrorMessage() {
    return `Failed to encode DER: ${this.error}`;
  }
}, bl = class Uc extends G {
  constructor(t, r) {
    super(), this.error = t, this.input = r, this.name = "CborDecodeErrorCode", Object.setPrototypeOf(this, Uc.prototype);
  }
  toErrorMessage() {
    return `Failed to decode CBOR: ${xn(this.error)}, input: ${te(this.input)}`;
  }
}, yl = class Fc extends G {
  constructor(t, r) {
    super(), this.error = t, this.value = r, this.name = "CborEncodeErrorCode", Object.setPrototypeOf(this, Fc.prototype);
  }
  toErrorMessage() {
    return `Failed to encode CBOR: ${xn(this.error)}, input: ${this.value}`;
  }
}, bi = class Dc extends G {
  constructor(t, r, n) {
    super(), this.message = t, this.requestId = r, this.status = n, this.name = "TimeoutWaitingForResponseErrorCode", Object.setPrototypeOf(this, Dc.prototype);
  }
  toErrorMessage() {
    let t = `${this.message}
`;
    return this.requestId && (t += `  Request ID: ${te(this.requestId)}
`), this.status && (t += `  Request status: ${this.status}
`), t;
  }
}, ml = class qc extends G {
  constructor(t, r, n) {
    super(), this.maxIngressExpiryInMinutes = t, this.requestId = r, this.retryTimes = n, this.name = "CertificateOutdatedErrorCode", Object.setPrototypeOf(this, qc.prototype);
  }
  toErrorMessage() {
    let t = `Certificate is stale (over ${this.maxIngressExpiryInMinutes} minutes). Is the computer's clock synchronized?
  Request ID: ${te(this.requestId)}
`;
    return this.retryTimes !== void 0 && (t += `  Retried ${this.retryTimes} times.`), t;
  }
}, Pc = class Lc extends G {
  constructor(t, r, n, s) {
    super(!0), this.requestId = t, this.rejectCode = r, this.rejectMessage = n, this.rejectErrorCode = s, this.name = "CertifiedRejectErrorCode", Object.setPrototypeOf(this, Lc.prototype);
  }
  toErrorMessage() {
    return `The replica returned a rejection error:
  Request ID: ${te(this.requestId)}
  Reject code: ${this.rejectCode}
  Reject text: ${this.rejectMessage}
  Error code: ${this.rejectErrorCode}
`;
  }
}, gl = class Mc extends G {
  constructor(t, r, n, s, i) {
    super(), this.requestId = t, this.rejectCode = r, this.rejectMessage = n, this.rejectErrorCode = s, this.signatures = i, this.name = "UncertifiedRejectErrorCode", Object.setPrototypeOf(this, Mc.prototype);
  }
  toErrorMessage() {
    return `The replica returned a rejection error:
  Request ID: ${te(this.requestId)}
  Reject code: ${this.rejectCode}
  Reject text: ${this.rejectMessage}
  Error code: ${this.rejectErrorCode}
`;
  }
}, wl = class kc extends G {
  constructor(t, r, n, s) {
    super(), this.requestId = t, this.rejectCode = r, this.rejectMessage = n, this.rejectErrorCode = s, this.name = "UncertifiedRejectUpdateErrorCode", Object.setPrototypeOf(this, kc.prototype);
  }
  toErrorMessage() {
    return `The replica returned a rejection error:
  Request ID: ${te(this.requestId)}
  Reject code: ${this.rejectCode}
  Reject text: ${this.rejectMessage}
  Error code: ${this.rejectErrorCode}
`;
  }
}, El = class Vc extends G {
  constructor(t) {
    super(), this.requestId = t, this.name = "RequestStatusDoneNoReplyErrorCode", Object.setPrototypeOf(this, Vc.prototype);
  }
  toErrorMessage() {
    return `Call was marked as done but we never saw the reply:
  Request ID: ${te(this.requestId)}
`;
  }
}, bs = class $c extends G {
  constructor(t) {
    super(), this.shouldFetchRootKey = t, this.name = "MissingRootKeyErrorCode", Object.setPrototypeOf(this, $c.prototype);
  }
  toErrorMessage() {
    return this.shouldFetchRootKey === void 0 ? "Agent is missing root key" : `Agent is missing root key and the shouldFetchRootKey value is set to ${this.shouldFetchRootKey}. The root key should only be unknown if you are in local development. Otherwise you should avoid fetching and use the default IC Root Key or the known root key of your environment.`;
  }
}, vl = class jc extends G {
  constructor(t) {
    super(), this.value = t, this.name = "HashValueErrorCode", Object.setPrototypeOf(this, jc.prototype);
  }
  toErrorMessage() {
    return `Attempt to hash a value of unsupported type: ${this.value}`;
  }
}, Cs = class Kc extends G {
  constructor(t) {
    super(), this.error = t, this.name = "HttpDefaultFetchErrorCode", Object.setPrototypeOf(this, Kc.prototype);
  }
  toErrorMessage() {
    return this.error;
  }
}, Gr = class Hc extends G {
  constructor() {
    super(), this.name = "IdentityInvalidErrorCode", Object.setPrototypeOf(this, Hc.prototype);
  }
  toErrorMessage() {
    return "This identity has expired due this application's security policy. Please refresh your authentication.";
  }
}, Un = class Gc extends G {
  constructor(t, r) {
    super(), this.message = t, this.providedIngressExpiryInMinutes = r, this.name = "IngressExpiryInvalidErrorCode", Object.setPrototypeOf(this, Gc.prototype);
  }
  toErrorMessage() {
    return `${this.message}. Provided ingress expiry time is ${this.providedIngressExpiryInMinutes} minutes.`;
  }
}, _l = class Zc extends G {
  constructor() {
    super(), this.name = "CreateHttpAgentErrorCode", Object.setPrototypeOf(this, Zc.prototype);
  }
  toErrorMessage() {
    return "Failed to create agent from provided agent";
  }
}, xl = class Yc extends G {
  constructor(t) {
    super(), this.error = t, this.name = "MalformedSignatureErrorCode", Object.setPrototypeOf(this, Yc.prototype);
  }
  toErrorMessage() {
    return `Query response contained a malformed signature: ${this.error}`;
  }
}, Bl = class zc extends G {
  constructor() {
    super(), this.name = "MissingSignatureErrorCode", Object.setPrototypeOf(this, zc.prototype);
  }
  toErrorMessage() {
    return "Query response did not contain any node signatures";
  }
}, Il = class Xc extends G {
  constructor() {
    super(), this.name = "MalformedPublicKeyErrorCode", Object.setPrototypeOf(this, Xc.prototype);
  }
  toErrorMessage() {
    return "Read state response contained a malformed public key";
  }
}, Sl = class Wc extends G {
  constructor(t) {
    super(), this.nodeId = t, this.name = "QuerySignatureVerificationFailedErrorCode", Object.setPrototypeOf(this, Wc.prototype);
  }
  toErrorMessage() {
    return `Query signature verification failed. Node ID: ${this.nodeId}`;
  }
}, gt = class Jc extends G {
  constructor(t) {
    super(), this.error = t, this.name = "UnexpectedErrorCode", Object.setPrototypeOf(this, Jc.prototype);
  }
  toErrorMessage() {
    return `Unexpected error: ${xn(this.error)}`;
  }
}, ji = class Qc extends G {
  constructor(t) {
    super(), this.error = t, this.name = "HashTreeDecodeErrorCode", Object.setPrototypeOf(this, Qc.prototype);
  }
  toErrorMessage() {
    return `Failed to decode certificate: ${this.error}`;
  }
}, No = class eu extends G {
  constructor(t, r, n, s) {
    super(), this.status = t, this.statusText = r, this.headers = n, this.bodyText = s, this.name = "HttpErrorCode", Object.setPrototypeOf(this, eu.prototype);
  }
  toErrorMessage() {
    let t = `HTTP request failed:
  Status: ${this.status} (${this.statusText})
  Headers: ${JSON.stringify(this.headers)}
`;
    return this.bodyText && (t += `  Body: ${this.bodyText}
`), t;
  }
}, Uo = class tu extends G {
  constructor() {
    super(), this.name = "HttpV3ApiNotSupportedErrorCode", Object.setPrototypeOf(this, tu.prototype);
  }
  toErrorMessage() {
    return "HTTP request failed: v3 API is not supported";
  }
}, Fo = class ru extends G {
  constructor(t) {
    super(), this.error = t, this.name = "HttpFetchErrorCode", Object.setPrototypeOf(this, ru.prototype);
  }
  toErrorMessage() {
    return `Failed to fetch HTTP request: ${xn(this.error)}`;
  }
}, Do = class nu extends G {
  constructor(t) {
    super(), this.receivedCanisterId = t, this.name = "MissingCanisterIdErrorCode", Object.setPrototypeOf(this, nu.prototype);
  }
  toErrorMessage() {
    return `Canister ID is required, but received ${typeof this.receivedCanisterId} instead. If you are using automatically generated declarations, this may be because your application is not setting the canister ID in process.env correctly.`;
  }
}, Tl = class su extends G {
  constructor(t) {
    super(), this.request = t, this.name = "InvalidReadStateRequestErrorCode", Object.setPrototypeOf(this, su.prototype);
  }
  toErrorMessage() {
    return `Invalid read state request: ${this.request}`;
  }
}, qo = class iu extends G {
  constructor(t) {
    super(), this.error = t, this.name = "ExpiryJsonDeserializeErrorCode", Object.setPrototypeOf(this, iu.prototype);
  }
  toErrorMessage() {
    return `Failed to deserialize expiry: ${this.error}`;
  }
};
function xn(e) {
  if (e instanceof Error) return e.stack ?? e.message;
  try {
    return JSON.stringify(e);
  } catch {
    return String(e);
  }
}
var Cr = /* @__PURE__ */ new Error("unreachable");
function Q(...e) {
  const t = new Uint8Array(e.reduce((n, s) => n + s.byteLength, 0));
  let r = 0;
  for (const n of e)
    t.set(n, r), r += n.byteLength;
  return t;
}
var $r = class {
  save() {
    return this._view;
  }
  restore(e) {
    if (!(e instanceof Uint8Array)) throw new Error("Checkpoint must be a Uint8Array");
    this._view = e;
  }
  constructor(e, t = e?.byteLength || 0) {
    if (e && !(e instanceof Uint8Array)) try {
      e = Vt(e);
    } catch {
      throw new Error("Buffer must be a Uint8Array");
    }
    if (t < 0 || !Number.isInteger(t)) throw new Error("Length must be a non-negative integer");
    if (e && t > e.byteLength) throw new Error("Length cannot exceed buffer length");
    this._buffer = e || new Uint8Array(0), this._view = new Uint8Array(this._buffer.buffer, 0, t);
  }
  get buffer() {
    return this._view.slice();
  }
  get byteLength() {
    return this._view.byteLength;
  }
  read(e) {
    const t = this._view.subarray(0, e);
    return this._view = this._view.subarray(e), t.slice();
  }
  readUint8() {
    if (this._view.byteLength === 0) return;
    const e = this._view[0];
    return this._view = this._view.subarray(1), e;
  }
  write(e) {
    if (!(e instanceof Uint8Array)) throw new Error("Buffer must be a Uint8Array");
    const t = this._view.byteLength;
    this._view.byteOffset + this._view.byteLength + e.byteLength >= this._buffer.byteLength ? this.alloc(e.byteLength) : this._view = new Uint8Array(this._buffer.buffer, this._view.byteOffset, this._view.byteLength + e.byteLength), this._view.set(e, t);
  }
  get end() {
    return this._view.byteLength === 0;
  }
  alloc(e) {
    if (e <= 0 || !Number.isInteger(e)) throw new Error("Amount must be a positive integer");
    const t = new Uint8Array((this._buffer.byteLength + e) * 1.2 | 0), r = new Uint8Array(t.buffer, 0, this._view.byteLength + e);
    r.set(this._view), this._buffer = t, this._view = r;
  }
};
function Vt(e) {
  if (!e) throw new Error("Input cannot be null or undefined");
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : Array.isArray(e) ? new Uint8Array(e) : "buffer" in e ? Vt(e.buffer) : new Uint8Array(e);
}
function ou(e, t) {
  if (e.byteLength !== t.byteLength) return e.byteLength - t.byteLength;
  for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return e[r] - t[r];
  return 0;
}
function Ol(e, t) {
  return ou(e, t) === 0;
}
function Cl(e) {
  if (!(e instanceof Uint8Array)) throw new Error("Input must be a Uint8Array");
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function Al(e) {
  const t = new TextEncoder().encode(e);
  let r = 0;
  for (const n of t) r = (r * 223 + n) % 2 ** 32;
  return r;
}
function De(e) {
  if (/^_\d+_$/.test(e) || /^_0x[0-9a-fA-F]+_$/.test(e)) {
    const t = +e.slice(1, -1);
    if (Number.isSafeInteger(t) && t >= 0 && t < 2 ** 32) return t;
  }
  return Al(e);
}
function au(e) {
  const t = BigInt(e);
  if (e <= 0) throw new RangeError("Input must be positive");
  return t.toString(2).length - 1;
}
function yi(e) {
  const t = BigInt(e);
  if (e < 0) throw new RangeError("Input must be non-negative");
  return BigInt(1) << t;
}
function cu() {
  throw new Error("unexpected end of buffer");
}
function sr(e, t) {
  return e.byteLength < t && cu(), e.read(t);
}
function ir(e) {
  const t = e.readUint8();
  return t === void 0 && cu(), t;
}
function ce(e) {
  if (typeof e == "number" && (e = BigInt(e)), e < BigInt(0)) throw new Error("Cannot leb encode negative values.");
  const t = (e === BigInt(0) ? 0 : au(e)) + 1, r = new $r(new Uint8Array(t), 0);
  for (; ; ) {
    const n = Number(e & BigInt(127));
    if (e /= BigInt(128), e === BigInt(0)) {
      r.write(new Uint8Array([n]));
      break;
    } else r.write(new Uint8Array([n | 128]));
  }
  return r.buffer;
}
function we(e) {
  let t = BigInt(1), r = BigInt(0), n;
  do
    n = ir(e), r += BigInt(n & 127).valueOf() * t, t *= BigInt(128);
  while (n >= 128);
  return r;
}
function me(e) {
  typeof e == "number" && (e = BigInt(e));
  const t = e < BigInt(0);
  t && (e = -e - BigInt(1));
  const r = (e === BigInt(0) ? 0 : au(e)) + 1, n = new $r(new Uint8Array(r), 0);
  for (; ; ) {
    const i = s(e);
    if (e /= BigInt(128), t && e === BigInt(0) && (i & 64) !== 0 || !t && e === BigInt(0) && (i & 64) === 0) {
      n.write(new Uint8Array([i]));
      break;
    } else n.write(new Uint8Array([i | 128]));
  }
  function s(i) {
    const o = i % BigInt(128);
    return Number(t ? BigInt(128) - o - BigInt(1) : o);
  }
  return n.buffer;
}
function Ut(e) {
  const t = new Uint8Array(e.buffer);
  let r = 0;
  for (; r < t.byteLength; r++) if (t[r] < 128) {
    if ((t[r] & 64) === 0) return we(e);
    break;
  }
  const n = new Uint8Array(sr(e, r + 1));
  let s = BigInt(0);
  for (let i = n.byteLength - 1; i >= 0; i--) s = s * BigInt(128) + BigInt(128 - (n[i] & 127) - 1);
  return -s - BigInt(1);
}
function Rl(e, t) {
  if (BigInt(e) < BigInt(0)) throw new Error("Cannot write negative values.");
  return uu(e, t);
}
function uu(e, t) {
  e = BigInt(e);
  const r = new $r(new Uint8Array(Math.min(1, t)), 0);
  let n = 0, s = BigInt(256), i = BigInt(0), o = Number(e % s);
  for (r.write(new Uint8Array([o])); ++n < t; )
    e < 0 && i === BigInt(0) && o !== 0 && (i = BigInt(1)), o = Number((e / s - i) % BigInt(256)), r.write(new Uint8Array([o])), s *= BigInt(256);
  return r.buffer;
}
function fu(e, t) {
  if (t <= 0 || !Number.isInteger(t)) throw new Error("Byte length must be a positive integer");
  let r = BigInt(ir(e)), n = BigInt(1), s = 0;
  for (; ++s < t; ) {
    n *= BigInt(256);
    const i = BigInt(ir(e));
    r = r + n * i;
  }
  return r;
}
function Nl(e, t) {
  if (t <= 0 || !Number.isInteger(t)) throw new Error("Byte length must be a positive integer");
  let r = fu(e, t);
  const n = BigInt(2) ** (BigInt(8) * BigInt(t - 1) + BigInt(7));
  return r >= n && (r -= n * BigInt(2)), r;
}
var Ul = /* @__PURE__ */ Dd({
  Bool: () => Iu,
  BoolClass: () => hu,
  ConstructType: () => Ht,
  Empty: () => xu,
  EmptyClass: () => Ki,
  FixedIntClass: () => or,
  FixedNatClass: () => $t,
  Float32: () => Au,
  Float64: () => Ru,
  FloatClass: () => Zi,
  Func: () => Zu,
  FuncClass: () => fn,
  Int: () => Ou,
  Int16: () => Uu,
  Int32: () => Fu,
  Int64: () => Du,
  Int8: () => Nu,
  IntClass: () => Hi,
  Nat: () => Cu,
  Nat16: () => Pu,
  Nat32: () => Lu,
  Nat64: () => Mu,
  Nat8: () => qu,
  NatClass: () => Gi,
  Null: () => Su,
  NullClass: () => cn,
  Opt: () => ju,
  OptClass: () => qr,
  PrimitiveType: () => Xe,
  Principal: () => ku,
  PrincipalClass: () => vu,
  Rec: () => Gu,
  RecClass: () => ft,
  Record: () => Ku,
  RecordClass: () => un,
  Reserved: () => Bu,
  ReservedClass: () => Kt,
  Service: () => Yu,
  ServiceClass: () => Jn,
  Text: () => Tu,
  TextClass: () => pu,
  Tuple: () => Vu,
  TupleClass: () => mu,
  Type: () => ys,
  Unknown: () => ql,
  UnknownClass: () => lu,
  Variant: () => Hu,
  VariantClass: () => Wn,
  Vec: () => $u,
  VecClass: () => Xn,
  Visitor: () => Dl,
  decode: () => _u,
  encode: () => gi,
  resetSubtypeCache: () => wi,
  subtype: () => zi
}), W;
(function(e) {
  e[e.Null = -1] = "Null", e[e.Bool = -2] = "Bool", e[e.Nat = -3] = "Nat", e[e.Int = -4] = "Int", e[e.Float32 = -13] = "Float32", e[e.Float64 = -14] = "Float64", e[e.Text = -15] = "Text", e[e.Reserved = -16] = "Reserved", e[e.Empty = -17] = "Empty", e[e.Opt = -18] = "Opt", e[e.Vector = -19] = "Vector", e[e.Record = -20] = "Record", e[e.Variant = -21] = "Variant", e[e.Func = -22] = "Func", e[e.Service = -23] = "Service", e[e.Principal = -24] = "Principal";
})(W || (W = {}));
var du = "DIDL", Po = 400;
function an(e, t, r) {
  return e.map((n, s) => r(n, t[s]));
}
var Fl = class {
  constructor() {
    this._typs = [], this._idx = /* @__PURE__ */ new Map(), this._idxRefCount = /* @__PURE__ */ new Map();
  }
  has(e) {
    return this._idx.has(e.name);
  }
  add(e, t) {
    const r = this._typs.length;
    this._idx.set(e.name, r), this._idxRefCount.set(r, 1), this._typs.push(t);
  }
  merge(e, t) {
    const r = this._idx.get(e.name), n = this._idx.get(t);
    if (r === void 0) throw new Error("Missing type index for " + e);
    if (n === void 0) throw new Error("Missing type index for " + t);
    this._typs[r] = this._typs[n];
    const s = this._getIdxRefCount(r), i = this._getIdxRefCount(n);
    this._idxRefCount.set(r, s + i), this._idx.set(t, r), this._idxRefCount.set(n, 0), this._compactFromEnd();
  }
  _getIdxRefCount(e) {
    return this._idxRefCount.get(e) || 0;
  }
  _compactFromEnd() {
    for (; this._typs.length > 0; ) {
      const e = this._typs.length - 1;
      if (this._getIdxRefCount(e) > 0) break;
      this._typs.pop(), this._idxRefCount.delete(e);
    }
  }
  encode() {
    return Q(ce(this._typs.length), Q(...this._typs));
  }
  indexOf(e) {
    if (!this._idx.has(e)) throw new Error("Missing type index for " + e);
    return me(this._idx.get(e) || 0);
  }
}, Dl = class {
  visitType(e, t) {
    throw new Error("Not implemented");
  }
  visitPrimitive(e, t) {
    return this.visitType(e, t);
  }
  visitEmpty(e, t) {
    return this.visitPrimitive(e, t);
  }
  visitBool(e, t) {
    return this.visitPrimitive(e, t);
  }
  visitNull(e, t) {
    return this.visitPrimitive(e, t);
  }
  visitReserved(e, t) {
    return this.visitPrimitive(e, t);
  }
  visitText(e, t) {
    return this.visitPrimitive(e, t);
  }
  visitNumber(e, t) {
    return this.visitPrimitive(e, t);
  }
  visitInt(e, t) {
    return this.visitNumber(e, t);
  }
  visitNat(e, t) {
    return this.visitNumber(e, t);
  }
  visitFloat(e, t) {
    return this.visitPrimitive(e, t);
  }
  visitFixedInt(e, t) {
    return this.visitNumber(e, t);
  }
  visitFixedNat(e, t) {
    return this.visitNumber(e, t);
  }
  visitPrincipal(e, t) {
    return this.visitPrimitive(e, t);
  }
  visitConstruct(e, t) {
    return this.visitType(e, t);
  }
  visitVec(e, t, r) {
    return this.visitConstruct(e, r);
  }
  visitOpt(e, t, r) {
    return this.visitConstruct(e, r);
  }
  visitRecord(e, t, r) {
    return this.visitConstruct(e, r);
  }
  visitTuple(e, t, r) {
    const n = t.map((s, i) => [`_${i}_`, s]);
    return this.visitRecord(e, n, r);
  }
  visitVariant(e, t, r) {
    return this.visitConstruct(e, r);
  }
  visitRec(e, t, r) {
    return this.visitConstruct(t, r);
  }
  visitFunc(e, t) {
    return this.visitConstruct(e, t);
  }
  visitService(e, t) {
    return this.visitConstruct(e, t);
  }
}, j;
(function(e) {
  e.EmptyClass = "__IDL_EmptyClass__", e.UnknownClass = "__IDL_UnknownClass__", e.BoolClass = "__IDL_BoolClass__", e.NullClass = "__IDL_NullClass__", e.ReservedClass = "__IDL_ReservedClass__", e.TextClass = "__IDL_TextClass__", e.IntClass = "__IDL_IntClass__", e.NatClass = "__IDL_NatClass__", e.FloatClass = "__IDL_FloatClass__", e.FixedIntClass = "__IDL_FixedIntClass__", e.FixedNatClass = "__IDL_FixedNatClass__", e.VecClass = "__IDL_VecClass__", e.OptClass = "__IDL_OptClass__", e.RecordClass = "__IDL_RecordClass__", e.TupleClass = "__IDL_TupleClass__", e.VariantClass = "__IDL_VariantClass__", e.RecClass = "__IDL_RecClass__", e.PrincipalClass = "__IDL_PrincipalClass__", e.FuncClass = "__IDL_FuncClass__", e.ServiceClass = "__IDL_ServiceClass__";
})(j || (j = {}));
var ys = class {
  display() {
    return this.name;
  }
  valueToString(e) {
    return le(e);
  }
  buildTypeTable(e) {
    e.has(this) || this._buildTypeTableImpl(e);
  }
}, Xe = class extends ys {
  checkType(e) {
    if (this.name !== e.name) throw new Error(`type mismatch: type on the wire ${e.name}, expect type ${this.name}`);
    return e;
  }
  _buildTypeTableImpl(e) {
  }
}, Ht = class extends ys {
  checkType(e) {
    if (e instanceof ft) {
      const t = e.getType();
      if (typeof t > "u") throw new Error("type mismatch with uninitialized type");
      return t;
    }
    throw new Error(`type mismatch: type on the wire ${e.name}, expect type ${this.name}`);
  }
  encodeType(e) {
    return e.indexOf(this.name);
  }
}, Ki = class extends Xe {
  get typeName() {
    return j.EmptyClass;
  }
  static [Symbol.hasInstance](e) {
    return e.typeName === j.EmptyClass;
  }
  accept(e, t) {
    return e.visitEmpty(this, t);
  }
  covariant(e) {
    throw new Error(`Invalid ${this.display()} argument: ${le(e)}`);
  }
  encodeValue() {
    throw new Error("Empty cannot appear as a function argument");
  }
  valueToString() {
    throw new Error("Empty cannot appear as a value");
  }
  encodeType() {
    return me(W.Empty);
  }
  decodeValue() {
    throw new Error("Empty cannot appear as an output");
  }
  get name() {
    return "empty";
  }
}, lu = class extends ys {
  get typeName() {
    return j.UnknownClass;
  }
  static [Symbol.hasInstance](e) {
    return e.typeName === j.UnknownClass;
  }
  checkType(e) {
    throw new Error("Method not implemented for unknown.");
  }
  accept(e, t) {
    throw e.visitType(this, t);
  }
  covariant(e) {
    throw new Error(`Invalid ${this.display()} argument: ${le(e)}`);
  }
  encodeValue() {
    throw new Error("Unknown cannot appear as a function argument");
  }
  valueToString() {
    throw new Error("Unknown cannot appear as a value");
  }
  encodeType() {
    throw new Error("Unknown cannot be serialized");
  }
  decodeValue(e, t) {
    let r = t.decodeValue(e, t);
    Object(r) !== r && (r = Object(r));
    let n;
    return t instanceof ft ? n = () => t.getType() : n = () => t, Object.defineProperty(r, "type", {
      value: n,
      writable: !0,
      enumerable: !1,
      configurable: !0
    }), r;
  }
  _buildTypeTableImpl() {
    throw new Error("Unknown cannot be serialized");
  }
  get name() {
    return "Unknown";
  }
}, hu = class extends Xe {
  get typeName() {
    return j.BoolClass;
  }
  static [Symbol.hasInstance](e) {
    return e.typeName === j.BoolClass;
  }
  accept(e, t) {
    return e.visitBool(this, t);
  }
  covariant(e) {
    if (typeof e == "boolean") return !0;
    throw new Error(`Invalid ${this.display()} argument: ${le(e)}`);
  }
  encodeValue(e) {
    return new Uint8Array([e ? 1 : 0]);
  }
  encodeType() {
    return me(W.Bool);
  }
  decodeValue(e, t) {
    switch (this.checkType(t), ir(e)) {
      case 0:
        return !1;
      case 1:
        return !0;
      default:
        throw new Error("Boolean value out of range");
    }
  }
  get name() {
    return "bool";
  }
}, cn = class extends Xe {
  get typeName() {
    return j.NullClass;
  }
  static [Symbol.hasInstance](e) {
    return e.typeName === j.NullClass;
  }
  accept(e, t) {
    return e.visitNull(this, t);
  }
  covariant(e) {
    if (e === null) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${le(e)}`);
  }
  encodeValue() {
    return new Uint8Array(0);
  }
  encodeType() {
    return me(W.Null);
  }
  decodeValue(e, t) {
    return this.checkType(t), null;
  }
  get name() {
    return "null";
  }
}, Kt = class extends Xe {
  get typeName() {
    return j.ReservedClass;
  }
  static [Symbol.hasInstance](e) {
    return e.typeName === j.ReservedClass;
  }
  accept(e, t) {
    return e.visitReserved(this, t);
  }
  covariant(e) {
    return !0;
  }
  encodeValue() {
    return new Uint8Array(0);
  }
  encodeType() {
    return me(W.Reserved);
  }
  decodeValue(e, t) {
    return t.name !== this.name && t.decodeValue(e, t), null;
  }
  get name() {
    return "reserved";
  }
}, pu = class extends Xe {
  get typeName() {
    return j.TextClass;
  }
  static [Symbol.hasInstance](e) {
    return e.typeName === j.TextClass;
  }
  accept(e, t) {
    return e.visitText(this, t);
  }
  covariant(e) {
    if (typeof e == "string") return !0;
    throw new Error(`Invalid ${this.display()} argument: ${le(e)}`);
  }
  encodeValue(e) {
    const t = new TextEncoder().encode(e);
    return Q(ce(t.byteLength), t);
  }
  encodeType() {
    return me(W.Text);
  }
  decodeValue(e, t) {
    this.checkType(t);
    const r = we(e), n = sr(e, Number(r));
    return new TextDecoder("utf8", { fatal: !0 }).decode(n);
  }
  get name() {
    return "text";
  }
  valueToString(e) {
    return '"' + e + '"';
  }
}, Hi = class extends Xe {
  get typeName() {
    return j.IntClass;
  }
  static [Symbol.hasInstance](e) {
    return e.typeName === j.IntClass;
  }
  accept(e, t) {
    return e.visitInt(this, t);
  }
  covariant(e) {
    if (typeof e == "bigint" || Number.isInteger(e)) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${le(e)}`);
  }
  encodeValue(e) {
    return me(e);
  }
  encodeType() {
    return me(W.Int);
  }
  decodeValue(e, t) {
    return this.checkType(t), Ut(e);
  }
  get name() {
    return "int";
  }
  valueToString(e) {
    return e.toString();
  }
}, Gi = class extends Xe {
  get typeName() {
    return j.NatClass;
  }
  static [Symbol.hasInstance](e) {
    return e.typeName === j.NatClass;
  }
  accept(e, t) {
    return e.visitNat(this, t);
  }
  covariant(e) {
    if (typeof e == "bigint" && e >= BigInt(0) || Number.isInteger(e) && e >= 0) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${le(e)}`);
  }
  encodeValue(e) {
    return ce(e);
  }
  encodeType() {
    return me(W.Nat);
  }
  decodeValue(e, t) {
    return this.checkType(t), we(e);
  }
  get name() {
    return "nat";
  }
  valueToString(e) {
    return e.toString();
  }
}, Zi = class extends Xe {
  get typeName() {
    return j.FloatClass;
  }
  static [Symbol.hasInstance](e) {
    return e.typeName === j.FloatClass;
  }
  constructor(e) {
    if (super(), this._bits = e, e !== 32 && e !== 64) throw new Error("not a valid float type");
  }
  accept(e, t) {
    return e.visitFloat(this, t);
  }
  covariant(e) {
    if (typeof e == "number" || e instanceof Number) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${le(e)}`);
  }
  encodeValue(e) {
    const t = /* @__PURE__ */ new ArrayBuffer(this._bits / 8), r = new DataView(t);
    return this._bits === 32 ? r.setFloat32(0, e, !0) : r.setFloat64(0, e, !0), new Uint8Array(t);
  }
  encodeType() {
    return me(this._bits === 32 ? W.Float32 : W.Float64);
  }
  decodeValue(e, t) {
    this.checkType(t);
    const r = Cl(sr(e, this._bits / 8));
    return this._bits === 32 ? r.getFloat32(0, !0) : r.getFloat64(0, !0);
  }
  get name() {
    return "float" + this._bits;
  }
  valueToString(e) {
    return e.toString();
  }
}, or = class extends Xe {
  get typeName() {
    return j.FixedIntClass;
  }
  static [Symbol.hasInstance](e) {
    return e.typeName === j.FixedIntClass;
  }
  constructor(e) {
    super(), this._bits = e;
  }
  accept(e, t) {
    return e.visitFixedInt(this, t);
  }
  covariant(e) {
    const t = yi(this._bits - 1) * BigInt(-1), r = yi(this._bits - 1) - BigInt(1);
    let n = !1;
    if (typeof e == "bigint") n = e >= t && e <= r;
    else if (Number.isInteger(e)) {
      const s = BigInt(e);
      n = s >= t && s <= r;
    } else n = !1;
    if (n) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${le(e)}`);
  }
  encodeValue(e) {
    return uu(e, this._bits / 8);
  }
  encodeType() {
    return me(-9 - (Math.log2(this._bits) - 3));
  }
  decodeValue(e, t) {
    this.checkType(t);
    const r = Nl(e, this._bits / 8);
    return this._bits <= 32 ? Number(r) : r;
  }
  get name() {
    return `int${this._bits}`;
  }
  valueToString(e) {
    return e.toString();
  }
}, $t = class extends Xe {
  get typeName() {
    return j.FixedNatClass;
  }
  static [Symbol.hasInstance](e) {
    return e.typeName === j.FixedNatClass;
  }
  constructor(e) {
    super(), this._bits = e;
  }
  accept(e, t) {
    return e.visitFixedNat(this, t);
  }
  covariant(e) {
    const t = yi(this._bits);
    let r = !1;
    if (typeof e == "bigint" && e >= BigInt(0) ? r = e < t : Number.isInteger(e) && e >= 0 ? r = BigInt(e) < t : r = !1, r) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${le(e)}`);
  }
  encodeValue(e) {
    return Rl(e, this._bits / 8);
  }
  encodeType() {
    return me(-5 - (Math.log2(this._bits) - 3));
  }
  decodeValue(e, t) {
    this.checkType(t);
    const r = fu(e, this._bits / 8);
    return this._bits <= 32 ? Number(r) : r;
  }
  get name() {
    return `nat${this._bits}`;
  }
  valueToString(e) {
    return e.toString();
  }
}, Xn = class bu extends Ht {
  get typeName() {
    return j.VecClass;
  }
  static [Symbol.hasInstance](t) {
    return t.typeName === j.VecClass;
  }
  constructor(t) {
    super(), this._type = t, this._blobOptimization = !1, t instanceof $t && t._bits === 8 && (this._blobOptimization = !0);
  }
  accept(t, r) {
    return t.visitVec(this, this._type, r);
  }
  covariant(t) {
    const r = this._type instanceof $t ? this._type._bits : this._type instanceof or ? this._type._bits : 0;
    if (ArrayBuffer.isView(t) && r == t.BYTES_PER_ELEMENT * 8 || Array.isArray(t) && t.every((n, s) => {
      try {
        return this._type.covariant(n);
      } catch (i) {
        throw new Error(`Invalid ${this.display()} argument: 

index ${s} -> ${i.message}`);
      }
    })) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${le(t)}`);
  }
  encodeValue(t) {
    const r = ce(t.length);
    if (this._blobOptimization) return Q(r, new Uint8Array(t));
    if (ArrayBuffer.isView(t)) if (t instanceof Int16Array || t instanceof Uint16Array) {
      const s = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(t.length * 2));
      for (let i = 0; i < t.length; i++) t instanceof Int16Array ? s.setInt16(i * 2, t[i], !0) : s.setUint16(i * 2, t[i], !0);
      return Q(r, new Uint8Array(s.buffer));
    } else if (t instanceof Int32Array || t instanceof Uint32Array) {
      const s = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(t.length * 4));
      for (let i = 0; i < t.length; i++) t instanceof Int32Array ? s.setInt32(i * 4, t[i], !0) : s.setUint32(i * 4, t[i], !0);
      return Q(r, new Uint8Array(s.buffer));
    } else if (t instanceof BigInt64Array || t instanceof BigUint64Array) {
      const s = /* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(t.length * 8));
      for (let i = 0; i < t.length; i++) t instanceof BigInt64Array ? s.setBigInt64(i * 8, t[i], !0) : s.setBigUint64(i * 8, t[i], !0);
      return Q(r, new Uint8Array(s.buffer));
    } else return Q(r, new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
    const n = new $r(new Uint8Array(r.byteLength + t.length), 0);
    n.write(r);
    for (const s of t) {
      const i = this._type.encodeValue(s);
      n.write(new Uint8Array(i));
    }
    return n.buffer;
  }
  _buildTypeTableImpl(t) {
    this._type.buildTypeTable(t);
    const r = me(W.Vector), n = this._type.encodeType(t);
    t.add(this, Q(r, n));
  }
  decodeValue(t, r) {
    const n = this.checkType(r);
    if (!(n instanceof bu)) throw new Error("Not a vector type");
    const s = Number(we(t));
    if (this._type instanceof $t) {
      if (this._type._bits == 8) return new Uint8Array(t.read(s));
      if (this._type._bits == 16) {
        const o = t.read(s * 2);
        return new Uint16Array(o.buffer, o.byteOffset, s);
      }
      if (this._type._bits == 32) {
        const o = t.read(s * 4);
        return new Uint32Array(o.buffer, o.byteOffset, s);
      }
      if (this._type._bits == 64) return new BigUint64Array(t.read(s * 8).buffer);
    }
    if (this._type instanceof or) {
      if (this._type._bits == 8) return new Int8Array(t.read(s));
      if (this._type._bits == 16) {
        const o = t.read(s * 2), a = new DataView(o.buffer, o.byteOffset, o.byteLength), c = new Int16Array(s);
        for (let d = 0; d < s; d++) c[d] = a.getInt16(d * 2, !0);
        return c;
      }
      if (this._type._bits == 32) {
        const o = t.read(s * 4), a = new DataView(o.buffer, o.byteOffset, o.byteLength), c = new Int32Array(s);
        for (let d = 0; d < s; d++) c[d] = a.getInt32(d * 4, !0);
        return c;
      }
      if (this._type._bits == 64) {
        const o = t.read(s * 8), a = new DataView(o.buffer, o.byteOffset, o.byteLength), c = new BigInt64Array(s);
        for (let d = 0; d < s; d++) c[d] = a.getBigInt64(d * 8, !0);
        return c;
      }
    }
    const i = [];
    for (let o = 0; o < s; o++) i.push(this._type.decodeValue(t, n._type));
    return i;
  }
  get name() {
    return `vec ${this._type.name}`;
  }
  display() {
    return `vec ${this._type.display()}`;
  }
  valueToString(t) {
    return "vec {" + t.map((r) => this._type.valueToString(r)).join("; ") + "}";
  }
}, qr = class mi extends Ht {
  get typeName() {
    return j.OptClass;
  }
  static [Symbol.hasInstance](t) {
    return t.typeName === j.OptClass;
  }
  constructor(t) {
    super(), this._type = t;
  }
  accept(t, r) {
    return t.visitOpt(this, this._type, r);
  }
  covariant(t) {
    try {
      if (Array.isArray(t) && (t.length === 0 || t.length === 1 && this._type.covariant(t[0]))) return !0;
    } catch (r) {
      throw new Error(`Invalid ${this.display()} argument: ${le(t)} 

-> ${r.message}`);
    }
    throw new Error(`Invalid ${this.display()} argument: ${le(t)}`);
  }
  encodeValue(t) {
    return t.length === 0 ? new Uint8Array([0]) : Q(new Uint8Array([1]), this._type.encodeValue(t[0]));
  }
  _buildTypeTableImpl(t) {
    this._type.buildTypeTable(t);
    const r = me(W.Opt), n = this._type.encodeType(t);
    t.add(this, Q(r, n));
  }
  decodeValue(t, r) {
    if (r instanceof cn) return [];
    if (r instanceof Kt) return [];
    let n = r;
    if (r instanceof ft) {
      const s = r.getType();
      if (typeof s > "u") throw new Error("type mismatch with uninitialized type");
      n = s;
    }
    if (n instanceof mi) switch (ir(t)) {
      case 0:
        return [];
      case 1: {
        const s = t.save();
        try {
          return [this._type.decodeValue(t, n._type)];
        } catch {
          return t.restore(s), n._type.decodeValue(t, n._type), [];
        }
      }
      default:
        throw new Error("Not an option value");
    }
    else {
      if (this._type instanceof cn || this._type instanceof mi || this._type instanceof Kt)
        return n.decodeValue(t, n), [];
      {
        const s = t.save();
        try {
          return [this._type.decodeValue(t, r)];
        } catch {
          return t.restore(s), n.decodeValue(t, r), [];
        }
      }
    }
  }
  get name() {
    return `opt ${this._type.name}`;
  }
  display() {
    return `opt ${this._type.display()}`;
  }
  valueToString(t) {
    return t.length === 0 ? "null" : `opt ${this._type.valueToString(t[0])}`;
  }
}, un = class yu extends Ht {
  get typeName() {
    return j.RecordClass;
  }
  static [Symbol.hasInstance](t) {
    return t.typeName === j.RecordClass || t.typeName === j.TupleClass;
  }
  constructor(t = {}) {
    super(), this._fields = Object.entries(t).sort((r, n) => De(r[0]) - De(n[0]));
  }
  accept(t, r) {
    return t.visitRecord(this, this._fields, r);
  }
  tryAsTuple() {
    const t = [];
    for (let r = 0; r < this._fields.length; r++) {
      const [n, s] = this._fields[r];
      if (n !== `_${r}_`) return null;
      t.push(s);
    }
    return t;
  }
  covariant(t) {
    if (typeof t == "object" && this._fields.every(([r, n]) => {
      if (!t.hasOwnProperty(r)) throw new Error(`Record is missing key "${r}".`);
      try {
        return n.covariant(t[r]);
      } catch (s) {
        throw new Error(`Invalid ${this.display()} argument: 

field ${r} -> ${s.message}`);
      }
    })) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${le(t)}`);
  }
  encodeValue(t) {
    const r = this._fields.map(([n]) => t[n]);
    return Q(...an(this._fields, r, ([, n], s) => n.encodeValue(s)));
  }
  _buildTypeTableImpl(t) {
    this._fields.forEach(([i, o]) => o.buildTypeTable(t));
    const r = me(W.Record), n = ce(this._fields.length), s = this._fields.map(([i, o]) => Q(ce(De(i)), o.encodeType(t)));
    t.add(this, Q(r, n, Q(...s)));
  }
  decodeValue(t, r) {
    const n = this.checkType(r);
    if (!(n instanceof yu)) throw new Error("Not a record type");
    const s = {};
    let i = 0, o = 0;
    for (; o < n._fields.length; ) {
      const [a, c] = n._fields[o];
      if (i >= this._fields.length) {
        c.decodeValue(t, c), o++;
        continue;
      }
      const [d, f] = this._fields[i], l = De(this._fields[i][0]), u = De(a);
      if (l === u)
        s[d] = f.decodeValue(t, c), i++, o++;
      else if (u > l) if (f instanceof qr || f instanceof Kt)
        s[d] = [], i++;
      else throw new Error("Cannot find required field " + d);
      else
        c.decodeValue(t, c), o++;
    }
    for (const [a, c] of this._fields.slice(i)) if (c instanceof qr || c instanceof Kt) s[a] = [];
    else throw new Error("Cannot find required field " + a);
    return s;
  }
  get fieldsAsObject() {
    const t = {};
    for (const [r, n] of this._fields) t[De(r)] = n;
    return t;
  }
  get name() {
    return `record {${this._fields.map(([t, r]) => t + ":" + r.name).join("; ")}}`;
  }
  display() {
    return `record {${this._fields.map(([t, r]) => t + ":" + r.display()).join("; ")}}`;
  }
  valueToString(t) {
    const r = this._fields.map(([n]) => t[n]);
    return `record {${an(this._fields, r, ([n, s], i) => n + "=" + s.valueToString(i)).join("; ")}}`;
  }
}, mu = class gu extends un {
  get typeName() {
    return j.TupleClass;
  }
  static [Symbol.hasInstance](t) {
    return t.typeName === j.TupleClass;
  }
  constructor(t) {
    const r = {};
    t.forEach((n, s) => r["_" + s + "_"] = n), super(r), this._components = t;
  }
  accept(t, r) {
    return t.visitTuple(this, this._components, r);
  }
  covariant(t) {
    if (Array.isArray(t) && t.length >= this._fields.length && this._components.every((r, n) => {
      try {
        return r.covariant(t[n]);
      } catch (s) {
        throw new Error(`Invalid ${this.display()} argument: 

index ${n} -> ${s.message}`);
      }
    })) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${le(t)}`);
  }
  encodeValue(t) {
    return Q(...an(this._components, t, (r, n) => r.encodeValue(n)));
  }
  decodeValue(t, r) {
    const n = this.checkType(r);
    if (!(n instanceof gu)) throw new Error("not a tuple type");
    if (n._components.length < this._components.length) throw new Error("tuple mismatch");
    const s = [];
    for (const [i, o] of n._components.entries()) i >= this._components.length ? o.decodeValue(t, o) : s.push(this._components[i].decodeValue(t, o));
    return s;
  }
  display() {
    return `record {${this._components.map((t) => t.display()).join("; ")}}`;
  }
  valueToString(t) {
    return `record {${an(this._components, t, (r, n) => r.valueToString(n)).join("; ")}}`;
  }
}, Wn = class wu extends Ht {
  get typeName() {
    return j.VariantClass;
  }
  static [Symbol.hasInstance](t) {
    return t.typeName === j.VariantClass;
  }
  constructor(t = {}) {
    super(), this._fields = Object.entries(t).sort((r, n) => De(r[0]) - De(n[0]));
  }
  accept(t, r) {
    return t.visitVariant(this, this._fields, r);
  }
  covariant(t) {
    if (typeof t == "object" && Object.entries(t).length === 1 && this._fields.every(([r, n]) => {
      try {
        return !t.hasOwnProperty(r) || n.covariant(t[r]);
      } catch (s) {
        throw new Error(`Invalid ${this.display()} argument: 

variant ${r} -> ${s.message}`);
      }
    })) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${le(t)}`);
  }
  encodeValue(t) {
    for (let r = 0; r < this._fields.length; r++) {
      const [n, s] = this._fields[r];
      if (t.hasOwnProperty(n)) return Q(ce(r), s.encodeValue(t[n]));
    }
    throw Error("Variant has no data: " + t);
  }
  _buildTypeTableImpl(t) {
    this._fields.forEach(([, i]) => {
      i.buildTypeTable(t);
    });
    const r = me(W.Variant), n = ce(this._fields.length), s = this._fields.map(([i, o]) => Q(ce(De(i)), o.encodeType(t)));
    t.add(this, Q(r, n, ...s));
  }
  decodeValue(t, r) {
    const n = this.checkType(r);
    if (!(n instanceof wu)) throw new Error("Not a variant type");
    const s = Number(we(t));
    if (s >= n._fields.length) throw Error("Invalid variant index: " + s);
    const [i, o] = n._fields[s];
    for (const [a, c] of this._fields) if (De(i) === De(a)) {
      const d = c.decodeValue(t, o);
      return { [a]: d };
    }
    throw new Error("Cannot find field hash " + i);
  }
  get name() {
    return `variant {${this._fields.map(([t, r]) => t + ":" + r.name).join("; ")}}`;
  }
  display() {
    return `variant {${this._fields.map(([t, r]) => t + (r.name === "null" ? "" : `:${r.display()}`)).join("; ")}}`;
  }
  valueToString(t) {
    for (const [r, n] of this._fields) if (t.hasOwnProperty(r)) {
      const s = n.valueToString(t[r]);
      return s === "null" ? `variant {${r}}` : `variant {${r}=${s}}`;
    }
    throw new Error("Variant has no data: " + t);
  }
  get alternativesAsObject() {
    const t = {};
    for (const [r, n] of this._fields) t[De(r)] = n;
    return t;
  }
}, ft = class Eu extends Ht {
  constructor() {
    super(...arguments), this._id = Eu._counter++;
  }
  get typeName() {
    return j.RecClass;
  }
  static {
    this._counter = 0;
  }
  static [Symbol.hasInstance](t) {
    return t.typeName === j.RecClass;
  }
  accept(t, r) {
    if (!this._type) throw Error("Recursive type uninitialized.");
    return t.visitRec(this, this._type, r);
  }
  fill(t) {
    this._type = t;
  }
  getType() {
    return this._type;
  }
  covariant(t) {
    if (this._type && this._type.covariant(t)) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${le(t)}`);
  }
  encodeValue(t) {
    if (!this._type) throw Error("Recursive type uninitialized.");
    return this._type.encodeValue(t);
  }
  _buildTypeTableImpl(t) {
    if (!this._type) throw Error("Recursive type uninitialized.");
    t.add(this, new Uint8Array([])), this._type.buildTypeTable(t), t.merge(this, this._type.name);
  }
  decodeValue(t, r) {
    if (!this._type) throw Error("Recursive type uninitialized.");
    return this._type.decodeValue(t, r);
  }
  get name() {
    return `rec_${this._id}`;
  }
  display() {
    if (!this._type) throw Error("Recursive type uninitialized.");
    return `μ${this.name}.${this._type.name}`;
  }
  valueToString(t) {
    if (!this._type) throw Error("Recursive type uninitialized.");
    return this._type.valueToString(t);
  }
};
function Yi(e) {
  if (ir(e) !== 1) throw new Error("Cannot decode principal");
  const t = Number(we(e));
  return X.fromUint8Array(new Uint8Array(sr(e, t)));
}
var vu = class extends Xe {
  get typeName() {
    return j.PrincipalClass;
  }
  static [Symbol.hasInstance](e) {
    return e.typeName === j.PrincipalClass;
  }
  accept(e, t) {
    return e.visitPrincipal(this, t);
  }
  covariant(e) {
    if (e && e._isPrincipal) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${le(e)}`);
  }
  encodeValue(e) {
    const t = e.toUint8Array(), r = ce(t.byteLength);
    return Q(new Uint8Array([1]), r, t);
  }
  encodeType() {
    return me(W.Principal);
  }
  decodeValue(e, t) {
    return this.checkType(t), Yi(e);
  }
  get name() {
    return "principal";
  }
  valueToString(e) {
    return `${this.name} "${e.toText()}"`;
  }
}, fn = class extends Ht {
  get typeName() {
    return j.FuncClass;
  }
  static [Symbol.hasInstance](e) {
    return e.typeName === j.FuncClass;
  }
  static argsToString(e, t) {
    if (e.length !== t.length) throw new Error("arity mismatch");
    return "(" + e.map((r, n) => r.valueToString(t[n])).join(", ") + ")";
  }
  constructor(e, t, r = []) {
    super(), this.argTypes = e, this.retTypes = t, this.annotations = r;
  }
  accept(e, t) {
    return e.visitFunc(this, t);
  }
  covariant(e) {
    if (Array.isArray(e) && e.length === 2 && e[0] && e[0]._isPrincipal && typeof e[1] == "string") return !0;
    throw new Error(`Invalid ${this.display()} argument: ${le(e)}`);
  }
  encodeValue([e, t]) {
    const r = e.toUint8Array(), n = ce(r.byteLength), s = Q(new Uint8Array([1]), n, r), i = new TextEncoder().encode(t), o = ce(i.byteLength);
    return Q(new Uint8Array([1]), s, o, i);
  }
  _buildTypeTableImpl(e) {
    this.argTypes.forEach((c) => c.buildTypeTable(e)), this.retTypes.forEach((c) => c.buildTypeTable(e));
    const t = me(W.Func), r = ce(this.argTypes.length), n = Q(...this.argTypes.map((c) => c.encodeType(e))), s = ce(this.retTypes.length), i = Q(...this.retTypes.map((c) => c.encodeType(e))), o = ce(this.annotations.length), a = Q(...this.annotations.map((c) => this.encodeAnnotation(c)));
    e.add(this, Q(t, r, n, s, i, o, a));
  }
  decodeValue(e, t) {
    const r = t instanceof ft ? t.getType() ?? t : t;
    if (!zi(r, this)) throw new Error(`Cannot decode function reference at type ${this.display()} from wire type ${r.display()}`);
    if (ir(e) !== 1) throw new Error("Cannot decode function reference");
    const n = Yi(e), s = sr(e, Number(we(e)));
    return [n, new TextDecoder("utf8", { fatal: !0 }).decode(s)];
  }
  get name() {
    return `(${this.argTypes.map((e) => e.name).join(", ")}) -> (${this.retTypes.map((e) => e.name).join(", ")})${" " + this.annotations.join(" ")}`;
  }
  valueToString([e, t]) {
    return `func "${e.toText()}".${t}`;
  }
  display() {
    return `(${this.argTypes.map((e) => e.display()).join(", ")}) → (${this.retTypes.map((e) => e.display()).join(", ")})${" " + this.annotations.join(" ")}`;
  }
  encodeAnnotation(e) {
    if (e === "query") return new Uint8Array([1]);
    if (e === "oneway") return new Uint8Array([2]);
    if (e === "composite_query") return new Uint8Array([3]);
    throw new Error("Illegal function annotation");
  }
}, Jn = class extends Ht {
  get typeName() {
    return j.ServiceClass;
  }
  static [Symbol.hasInstance](e) {
    return e.typeName === j.ServiceClass;
  }
  constructor(e) {
    super(), this._fields = Object.entries(e).sort((t, r) => t[0] < r[0] ? -1 : t[0] > r[0] ? 1 : 0);
  }
  accept(e, t) {
    return e.visitService(this, t);
  }
  covariant(e) {
    if (e && e._isPrincipal) return !0;
    throw new Error(`Invalid ${this.display()} argument: ${le(e)}`);
  }
  encodeValue(e) {
    const t = e.toUint8Array(), r = ce(t.length);
    return Q(new Uint8Array([1]), r, t);
  }
  _buildTypeTableImpl(e) {
    this._fields.forEach(([s, i]) => i.buildTypeTable(e));
    const t = me(W.Service), r = ce(this._fields.length), n = this._fields.map(([s, i]) => {
      const o = new TextEncoder().encode(s);
      return Q(ce(o.length), o, i.encodeType(e));
    });
    e.add(this, Q(t, r, ...n));
  }
  decodeValue(e, t) {
    const r = t instanceof ft ? t.getType() ?? t : t;
    if (!zi(r, this)) throw new Error(`Cannot decode service reference at type ${this.display()} from wire type ${r.display()}`);
    return Yi(e);
  }
  get name() {
    return `service {${this._fields.map(([e, t]) => e + ":" + t.name).join("; ")}}`;
  }
  valueToString(e) {
    return `service "${e.toText()}"`;
  }
  fieldsAsObject() {
    const e = {};
    for (const [t, r] of this._fields) e[t] = r;
    return e;
  }
};
function le(e) {
  const t = JSON.stringify(e, (r, n) => typeof n == "bigint" ? `BigInt(${n})` : n);
  return t && t.length > Po ? t.substring(0, Po - 3) + "..." : t;
}
function gi(e, t) {
  if (t.length < e.length) throw Error("Wrong number of message arguments");
  const r = new Fl();
  return e.forEach((n) => n.buildTypeTable(r)), Q(new TextEncoder().encode(du), r.encode(), ce(t.length), Q(...e.map((n) => n.encodeType(r))), Q(...an(e, t, (n, s) => {
    try {
      n.covariant(s);
    } catch (i) {
      throw /* @__PURE__ */ new Error(i.message + `

`);
    }
    return n.encodeValue(s);
  })));
}
function _u(e, t) {
  const r = new $r(t);
  if (t.byteLength < 4) throw new Error("Message length smaller than magic number");
  const n = sr(r, 4), s = new TextDecoder().decode(n);
  if (s !== du) throw new Error("Wrong magic number: " + JSON.stringify(s));
  function i(u) {
    const h = [], p = Number(we(u));
    for (let m = 0; m < p; m++) {
      const g = Number(Ut(u));
      switch (g) {
        case W.Opt:
        case W.Vector: {
          const E = Number(Ut(u));
          h.push([g, E]);
          break;
        }
        case W.Record:
        case W.Variant: {
          const E = [];
          let _ = Number(we(u)), I;
          for (; _--; ) {
            const S = Number(we(u));
            if (S >= Math.pow(2, 32)) throw new Error("field id out of 32-bit range");
            if (typeof I == "number" && I >= S) throw new Error("field id collision or not sorted");
            I = S;
            const B = Number(Ut(u));
            E.push([S, B]);
          }
          h.push([g, E]);
          break;
        }
        case W.Func: {
          const E = [];
          let _ = Number(we(u));
          for (; _--; ) E.push(Number(Ut(u)));
          const I = [];
          let S = Number(we(u));
          for (; S--; ) I.push(Number(Ut(u)));
          const B = [];
          let U = Number(we(u));
          for (; U--; ) switch (Number(we(u))) {
            case 1:
              B.push("query");
              break;
            case 2:
              B.push("oneway");
              break;
            case 3:
              B.push("composite_query");
              break;
            default:
              throw new Error("unknown annotation");
          }
          h.push([g, [
            E,
            I,
            B
          ]]);
          break;
        }
        case W.Service: {
          let E = Number(we(u));
          const _ = [];
          for (; E--; ) {
            const I = Number(we(u)), S = new TextDecoder().decode(sr(u, I)), B = Ut(u);
            _.push([S, B]);
          }
          h.push([g, _]);
          break;
        }
        default:
          throw new Error("Illegal op_code: " + g);
      }
    }
    const y = [], w = Number(we(u));
    for (let m = 0; m < w; m++) y.push(Number(Ut(u)));
    return [h, y];
  }
  const [o, a] = i(r);
  if (a.length < e.length) throw new Error("Wrong number of return values");
  const c = o.map((u) => Gu());
  function d(u) {
    if (u < -24) throw new Error("future value not supported");
    if (u < 0) switch (u) {
      case -1:
        return Su;
      case -2:
        return Iu;
      case -3:
        return Cu;
      case -4:
        return Ou;
      case -5:
        return qu;
      case -6:
        return Pu;
      case -7:
        return Lu;
      case -8:
        return Mu;
      case -9:
        return Nu;
      case -10:
        return Uu;
      case -11:
        return Fu;
      case -12:
        return Du;
      case -13:
        return Au;
      case -14:
        return Ru;
      case -15:
        return Tu;
      case -16:
        return Bu;
      case -17:
        return xu;
      case -24:
        return ku;
      default:
        throw new Error("Illegal op_code: " + u);
    }
    if (u >= o.length) throw new Error("type index out of range");
    return c[u];
  }
  function f(u) {
    switch (u[0]) {
      case W.Vector:
        return $u(d(u[1]));
      case W.Opt:
        return ju(d(u[1]));
      case W.Record: {
        const h = {};
        for (const [w, m] of u[1]) {
          const g = `_${w}_`;
          h[g] = d(m);
        }
        const p = Ku(h), y = p.tryAsTuple();
        return Array.isArray(y) ? Vu(...y) : p;
      }
      case W.Variant: {
        const h = {};
        for (const [p, y] of u[1]) {
          const w = `_${p}_`;
          h[w] = d(y);
        }
        return Hu(h);
      }
      case W.Func: {
        const [h, p, y] = u[1];
        return Zu(h.map((w) => d(w)), p.map((w) => d(w)), y);
      }
      case W.Service: {
        const h = {}, p = u[1];
        for (const [y, w] of p) {
          let m = d(w);
          if (m instanceof ft && (m = m.getType()), !(m instanceof fn)) throw new Error("Illegal service definition: services can only contain functions");
          h[y] = m;
        }
        return Yu(h);
      }
      default:
        throw new Error("Illegal op_code: " + u[0]);
    }
  }
  o.forEach((u, h) => {
    if (u[0] === W.Func) {
      const p = f(u);
      c[h].fill(p);
    }
  }), o.forEach((u, h) => {
    if (u[0] !== W.Func) {
      const p = f(u);
      c[h].fill(p);
    }
  }), wi();
  const l = a.map((u) => d(u));
  try {
    const u = e.map((h, p) => h.decodeValue(r, l[p]));
    for (let h = e.length; h < l.length; h++) l[h].decodeValue(r, l[h]);
    if (r.byteLength > 0) throw new Error("decode: Left-over bytes");
    return u;
  } finally {
    wi();
  }
}
var xu = new Ki(), Bu = new Kt(), ql = new lu(), Iu = new hu(), Su = new cn(), Tu = new pu(), Ou = new Hi(), Cu = new Gi(), Au = new Zi(32), Ru = new Zi(64), Nu = new or(8), Uu = new or(16), Fu = new or(32), Du = new or(64), qu = new $t(8), Pu = new $t(16), Lu = new $t(32), Mu = new $t(64), ku = new vu();
function Vu(...e) {
  return new mu(e);
}
function $u(e) {
  return new Xn(e);
}
function ju(e) {
  return new qr(e);
}
function Ku(e) {
  return new un(e);
}
function Hu(e) {
  return new Wn(e);
}
function Gu() {
  return new ft();
}
function Zu(e, t, r = []) {
  return new fn(e, t, r);
}
function Yu(e) {
  return new Jn(e);
}
var zu = class Xu {
  constructor(t = /* @__PURE__ */ new Map()) {
    this.rels = t;
  }
  copy() {
    const t = /* @__PURE__ */ new Map();
    for (const [r, n] of this.rels.entries()) {
      const s = new Map(n);
      t.set(r, s);
    }
    return new Xu(t);
  }
  known(t, r) {
    return this.rels.get(t.name)?.get(r.name);
  }
  addNegative(t, r) {
    this.addNames(t.name, r.name, !1);
  }
  add(t, r) {
    this.addNames(t.name, r.name, !0);
  }
  display() {
    let t = "";
    for (const [r, n] of this.rels) for (const [s, i] of n) t += `${r} ${i ? ":<" : "!<:"} ${s}
`;
    return t;
  }
  addNames(t, r, n) {
    const s = this.rels.get(t);
    if (s == null) {
      const i = /* @__PURE__ */ new Map();
      i.set(r, n), this.rels.set(t, i);
    } else s.set(r, n);
  }
}, Vn = new zu();
function wi() {
  Vn = new zu();
}
function Pl(e, t) {
  const r = new Set(e.annotations), n = new Set(t.annotations);
  if (r.size !== n.size) return !1;
  for (const s of r) if (!n.has(s)) return !1;
  return !0;
}
function As(e) {
  return e instanceof qr || e instanceof cn || e instanceof Kt;
}
function zi(e, t) {
  const r = pt(Vn.copy(), e, t);
  return r ? Vn.add(e, t) : Vn.addNegative(e, t), r;
}
function pt(e, t, r) {
  if (t.name === r.name) return !0;
  const n = e.known(t, r);
  if (n !== void 0) return n;
  if (e.add(t, r), r instanceof Kt || t instanceof Ki || t instanceof Gi && r instanceof Hi) return !0;
  if (t instanceof Xn && r instanceof Xn) return pt(e, t._type, r._type);
  if (r instanceof qr) return !0;
  if (t instanceof un && r instanceof un) {
    const s = t.fieldsAsObject;
    for (const [i, o] of r._fields) {
      const a = s[De(i)];
      if (a) {
        if (!pt(e, a, o)) return !1;
      } else if (!As(o)) return !1;
    }
    return !0;
  }
  if (t instanceof fn && r instanceof fn) {
    if (!Pl(t, r)) return !1;
    for (let s = 0; s < t.argTypes.length; s++) {
      const i = t.argTypes[s];
      if (s < r.argTypes.length) {
        if (!pt(e, r.argTypes[s], i)) return !1;
      } else if (!As(i)) return !1;
    }
    for (let s = 0; s < r.retTypes.length; s++) {
      const i = r.retTypes[s];
      if (s < t.retTypes.length) {
        if (!pt(e, t.retTypes[s], i)) return !1;
      } else if (!As(i)) return !1;
    }
    return !0;
  }
  if (t instanceof Wn && r instanceof Wn) {
    const s = r.alternativesAsObject;
    for (const [i, o] of t._fields) {
      const a = s[De(i)];
      if (!a || !pt(e, o, a)) return !1;
    }
    return !0;
  }
  if (t instanceof Jn && r instanceof Jn) {
    const s = t.fieldsAsObject();
    for (const [i, o] of r._fields) {
      const a = s[i];
      if (!a || !pt(e, a, o)) return !1;
    }
    return !0;
  }
  return t instanceof ft ? pt(e, t.getType(), r) : r instanceof ft ? pt(e, t, r.getType()) : !1;
}
function Qn(e) {
  if (!e) throw new Error("Input cannot be null or undefined");
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : Array.isArray(e) ? new Uint8Array(e) : "buffer" in e ? Qn(e.buffer) : new Uint8Array(e);
}
function ms(e, t) {
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function Ei(e) {
  if (typeof e == "string") return Wu(e);
  if (typeof e == "number") return ke(ce(e));
  if (e instanceof Uint8Array || ArrayBuffer.isView(e)) return ke(Qn(e));
  if (Array.isArray(e)) return ke(J(...e.map(Ei)));
  if (e && typeof e == "object" && e._isPrincipal) return ke(e.toUint8Array());
  if (typeof e == "object" && e !== null && typeof e.toHash == "function") return Ei(e.toHash());
  if (typeof e == "object") return es(e);
  if (typeof e == "bigint") return ke(ce(e));
  throw oe.fromCode(new vl(e));
}
var Wu = (e) => ke(new TextEncoder().encode(e));
function Ar(e) {
  return es(e);
}
function es(e) {
  return ke(J(...Object.entries(e).filter(([, t]) => t !== void 0).map(([t, r]) => [Wu(t), Ei(r)]).sort(([t], [r]) => ou(t, r)).map((t) => J(...t))));
}
var Ju = new TextEncoder().encode(`
ic-request`), Ll = new TextEncoder().encode("\vic-response"), Ml = new TextEncoder().encode("ic-request-auth-delegation"), Xi = class {
  getPrincipal() {
    return this._principal || (this._principal = X.selfAuthenticating(new Uint8Array(this.getPublicKey().toDer()))), this._principal;
  }
  async transformRequest(e) {
    const { body: t, ...r } = e, n = Ar(t);
    return {
      ...r,
      body: {
        content: t,
        sender_pubkey: this.getPublicKey().toDer(),
        sender_sig: await this.sign(J(Ju, n))
      }
    };
  }
}, ts = class {
  getPrincipal() {
    return X.anonymous();
  }
  async transformRequest(e) {
    return {
      ...e,
      body: { content: e.body }
    };
  }
}, pr = class extends Error {
  constructor(e) {
    super(e), this.name = "DecodingError";
  }
}, Qu = 55799, ef = Symbol("CBOR_STOP_CODE"), Qe = /* @__PURE__ */ ((e) => (e[e.False = 20] = "False", e[e.True = 21] = "True", e[e.Null = 22] = "Null", e[e.Undefined = 23] = "Undefined", e[e.Break = 31] = "Break", e))(Qe || {}), be = /* @__PURE__ */ ((e) => (e[e.UnsignedInteger = 0] = "UnsignedInteger", e[e.NegativeInteger = 1] = "NegativeInteger", e[e.ByteString = 2] = "ByteString", e[e.TextString = 3] = "TextString", e[e.Array = 4] = "Array", e[e.Map = 5] = "Map", e[e.Tag = 6] = "Tag", e[e.Simple = 7] = "Simple", e))(be || {}), kl = 23, Vl = 255, $l = 65535, jl = 4294967295, Kl = BigInt("0xffffffffffffffff"), Je = /* @__PURE__ */ ((e) => (e[e.Value = 23] = "Value", e[e.OneByte = 24] = "OneByte", e[e.TwoBytes = 25] = "TwoBytes", e[e.FourBytes = 26] = "FourBytes", e[e.EightBytes = 27] = "EightBytes", e[e.Indefinite = 31] = "Indefinite", e))(Je || {}), Rr = !1;
function Hl(e) {
  return e == null;
}
function tf(e, t) {
  const r = new Uint8Array(t);
  return r.set(e), r;
}
var Gl = new TextDecoder();
function Zl(e) {
  return (e & 224) >> 5;
}
function Yl(e) {
  return e & 31;
}
var dn = new Uint8Array(), Zr, et = 0;
function zl(e, t) {
  dn = e, et = 0;
  const r = rr(t);
  return t?.(r) ?? r;
}
function rr(e) {
  const [t, r] = $n();
  switch (t) {
    case be.UnsignedInteger:
      return jr(r);
    case be.NegativeInteger:
      return Ql(r);
    case be.ByteString:
      return rf(r);
    case be.TextString:
      return vi(r);
    case be.Array:
      return Xl(r, e);
    case be.Map:
      return Jl(r, e);
    case be.Tag:
      return eh(r, e);
    case be.Simple:
      return Wl(r);
  }
  throw new pr(`Unsupported major type: ${t}`);
}
function $n() {
  const e = dn.at(et);
  if (Hl(e)) throw new pr("Provided CBOR data is empty");
  const t = Zl(e), r = Yl(e);
  return et++, [t, r];
}
function Xl(e, t) {
  const r = jr(e);
  if (r === 1 / 0) {
    const s = [];
    let i = rr(t);
    for (; i !== ef; ) s.push(t?.(i) ?? i), i = rr(t);
    return s;
  }
  const n = new Array(r);
  for (let s = 0; s < r; s++) {
    const i = rr(t);
    n[s] = t?.(i) ?? i;
  }
  return n;
}
function Wl(e) {
  switch (e) {
    case Qe.False:
      return !1;
    case Qe.True:
      return !0;
    case Qe.Null:
      return null;
    case Qe.Undefined:
      return;
    case Qe.Break:
      return ef;
  }
  throw new pr(`Unrecognized simple type: ${e.toString(2)}`);
}
function Jl(e, t) {
  const r = jr(e), n = {};
  if (r === 1 / 0) {
    let [s, i] = $n();
    for (; s !== be.Simple && i !== Qe.Break; ) {
      const o = vi(i), a = rr(t);
      n[o] = t?.(a, o) ?? a, [s, i] = $n();
    }
    return n;
  }
  for (let s = 0; s < r; s++) {
    const [i, o] = $n();
    if (i !== be.TextString) throw new pr("Map keys must be text strings");
    const a = vi(o), c = rr(t);
    n[a] = t?.(c, a) ?? c;
  }
  return n;
}
function jr(e) {
  if (e <= Je.Value) return e;
  switch (Zr = new DataView(dn.buffer, dn.byteOffset + et), e) {
    case Je.OneByte:
      return et++, Zr.getUint8(0);
    case Je.TwoBytes:
      return et += 2, Zr.getUint16(0, Rr);
    case Je.FourBytes:
      return et += 4, Zr.getUint32(0, Rr);
    case Je.EightBytes:
      return et += 8, Zr.getBigUint64(0, Rr);
    case Je.Indefinite:
      return 1 / 0;
    default:
      throw new pr(`Unsupported integer info: ${e.toString(2)}`);
  }
}
function Ql(e) {
  const t = jr(e);
  return typeof t == "number" ? -1 - t : -1n - t;
}
function rf(e) {
  const t = jr(e);
  if (t > Number.MAX_SAFE_INTEGER) throw new pr("Byte length is too large");
  const r = Number(t);
  return et += r, dn.slice(et - r, et);
}
function vi(e) {
  const t = rf(e);
  return Gl.decode(t);
}
function eh(e, t) {
  const r = jr(e);
  if (r === Qu) return rr(t);
  throw new pr(`Unsupported tag: ${r}.`);
}
var Wi = class extends Error {
  constructor(e) {
    super(e), this.name = "SerializationError";
  }
}, th = 2 * 1024, rh = 100, nh = new TextEncoder();
function Yr(e) {
  return e << 5;
}
var Me = new Uint8Array(th), We = new DataView(Me.buffer), he = 0, Rs = [];
function sh(e, t) {
  return he = 0, lh(Qu, t?.(e) ?? e, t), Me.slice(0, he);
}
function Ji(e, t) {
  if (he > Me.length - rh && (Me = tf(Me, Me.length * 2), We = new DataView(Me.buffer)), e === !1 || e === !0 || e === null || e === void 0) {
    ah(e);
    return;
  }
  if (typeof e == "number" || typeof e == "bigint") {
    dh(e);
    return;
  }
  if (typeof e == "string") {
    of(e);
    return;
  }
  if (e instanceof Uint8Array) {
    Lo(e);
    return;
  }
  if (e instanceof ArrayBuffer) {
    Lo(new Uint8Array(e));
    return;
  }
  if (Array.isArray(e)) {
    ih(e, t);
    return;
  }
  if (typeof e == "object") {
    oh(e, t);
    return;
  }
  throw new Wi(`Unsupported type: ${typeof e}`);
}
function ih(e, t) {
  Kr(be.Array, e.length), e.forEach((r, n) => {
    Ji(t?.(r, n.toString()) ?? r, t);
  });
}
function oh(e, t) {
  Rs = Object.entries(e), Kr(be.Map, Rs.length), Rs.forEach(([r, n]) => {
    of(r), Ji(t?.(n, r) ?? n, t);
  });
}
function Kr(e, t) {
  if (t <= kl) {
    We.setUint8(he++, Yr(e) | Number(t));
    return;
  }
  if (t <= Vl) {
    We.setUint8(he++, Yr(e) | Je.OneByte), We.setUint8(he, Number(t)), he += 1;
    return;
  }
  if (t <= $l) {
    We.setUint8(he++, Yr(e) | Je.TwoBytes), We.setUint16(he, Number(t), Rr), he += 2;
    return;
  }
  if (t <= jl) {
    We.setUint8(he++, Yr(e) | Je.FourBytes), We.setUint32(he, Number(t), Rr), he += 4;
    return;
  }
  if (t <= Kl) {
    We.setUint8(he++, Yr(e) | Je.EightBytes), We.setBigUint64(he, BigInt(t), Rr), he += 8;
    return;
  }
  throw new Wi(`Value too large to encode: ${t}`);
}
function ah(e) {
  Kr(be.Simple, ch(e));
}
function ch(e) {
  if (e === !1) return Qe.False;
  if (e === !0) return Qe.True;
  if (e === null) return Qe.Null;
  if (e === void 0) return Qe.Undefined;
  throw new Wi(`Unrecognized simple value: ${e.toString()}`);
}
function nf(e, t) {
  Kr(e, t.length), he > Me.length - t.length && (Me = tf(Me, Me.length + t.length), We = new DataView(Me.buffer)), Me.set(t, he), he += t.length;
}
function sf(e, t) {
  Kr(e, t);
}
function uh(e) {
  sf(be.UnsignedInteger, e);
}
function fh(e) {
  sf(be.NegativeInteger, typeof e == "bigint" ? -1n - e : -1 - e);
}
function dh(e) {
  e >= 0 ? uh(e) : fh(e);
}
function of(e) {
  nf(be.TextString, nh.encode(e));
}
function Lo(e) {
  nf(be.ByteString, e);
}
function lh(e, t, r) {
  Kr(be.Tag, e), Ji(t, r);
}
function hh(e) {
  return typeof e == "object" && e !== null && "toCborValue" in e;
}
function Ns(e) {
  try {
    return sh(e, (t) => X.isPrincipal(t) ? t.toUint8Array() : af.isExpiry(t) ? t.toBigInt() : hh(t) ? t.toCborValue() : t);
  } catch (t) {
    throw oe.fromCode(new yl(t, e));
  }
}
function it(e) {
  try {
    return zl(e);
  } catch (t) {
    throw oe.fromCode(new bl(t, e));
  }
}
var Fn = () => {
  if (typeof window < "u" && window.crypto && window.crypto.getRandomValues) {
    const e = new Uint32Array(1);
    return window.crypto.getRandomValues(e), e[0];
  }
  if (typeof crypto < "u" && crypto.getRandomValues) {
    const e = new Uint32Array(1);
    return crypto.getRandomValues(e), e[0];
  }
  return typeof crypto < "u" && crypto.randomInt ? crypto.randomInt(0, 4294967295) : Math.floor(Math.random() * 4294967295);
}, zt;
(function(e) {
  e.Query = "read", e.ReadState = "read_state", e.Call = "call";
})(zt || (zt = {}));
var _i;
(function(e) {
  e.Call = "call";
})(_i || (_i = {}));
var ln;
(function(e) {
  e.Query = "query", e.ReadState = "read_state";
})(ln || (ln = {}));
function xi() {
  const e = /* @__PURE__ */ new ArrayBuffer(16), t = new DataView(e), r = Fn(), n = Fn(), s = Fn(), i = Fn();
  return t.setUint32(0, r), t.setUint32(4, n), t.setUint32(8, s), t.setUint32(12, i), Object.assign(new Uint8Array(e), { __nonce__: void 0 });
}
var Us = "__expiry__", Bi = BigInt(1e3), ph = BigInt(1e6), Ii = BigInt(60) * Bi, bh = BigInt(1) * Ii;
function yh(e) {
  return e / Bi * Bi;
}
function mh(e) {
  return e / Ii * Ii;
}
var af = class jn {
  constructor(t) {
    this.__expiry__ = t, this._isExpiry = !0;
  }
  static fromDeltaInMilliseconds(t, r = 0) {
    const n = BigInt(Date.now()) + BigInt(r), s = n + BigInt(t), i = mh(s);
    let o;
    return i >= n + bh ? o = i : o = yh(s), new jn(o * ph);
  }
  toBigInt() {
    return this.__expiry__;
  }
  toHash() {
    return ce(this.__expiry__);
  }
  toString() {
    return this.__expiry__.toString();
  }
  toJSON() {
    return { [Us]: this.toString() };
  }
  static fromJSON(t) {
    const r = JSON.parse(t);
    if (r.__expiry__) try {
      return new jn(BigInt(r[Us]));
    } catch (n) {
      throw new oe(new qo(`Not a valid BigInt: ${n}`));
    }
    throw new oe(new qo(`The input does not contain the key ${Us}`));
  }
  static isExpiry(t) {
    return t instanceof jn || typeof t == "object" && t !== null && "_isExpiry" in t && t._isExpiry === !0 && "__expiry__" in t && typeof t.__expiry__ == "bigint";
  }
};
function Mo(e = xi) {
  return async (t) => {
    const r = t.request.headers;
    t.request.headers = r, t.endpoint === zt.Call && (t.body.nonce = e());
  };
}
function Fs(e) {
  const t = [];
  return e.forEach((r, n) => {
    t.push([n, r]);
  }), t;
}
var Qi = /* @__PURE__ */ BigInt(0), rs = /* @__PURE__ */ BigInt(1);
function hn(e, t = "") {
  if (typeof e != "boolean") {
    const r = t && `"${t}"`;
    throw new Error(r + "expected boolean, got type=" + typeof e);
  }
  return e;
}
function Nr(e, t, r = "") {
  const n = _n(e), s = e?.length, i = t !== void 0;
  if (!n || i && s !== t) {
    const o = r && `"${r}" `, a = i ? ` of length ${t}` : "", c = n ? `length=${s}` : `type=${typeof e}`;
    throw new Error(o + "expected Uint8Array" + a + ", got " + c);
  }
  return e;
}
function cf(e) {
  if (typeof e != "string") throw new Error("hex string expected, got " + typeof e);
  return e === "" ? Qi : BigInt("0x" + e);
}
function ct(e) {
  return cf(te(e));
}
function ar(e) {
  return Pe(e), cf(te(Uint8Array.from(e).reverse()));
}
function ve(e, t) {
  return at(e.toString(16).padStart(t * 2, "0"));
}
function uf(e, t) {
  return ve(e, t).reverse();
}
function Ie(e, t, r) {
  let n;
  if (typeof t == "string") try {
    n = at(t);
  } catch (i) {
    throw new Error(e + " must be hex string or Uint8Array, cause: " + i);
  }
  else if (_n(t)) n = Uint8Array.from(t);
  else throw new Error(e + " must be hex string or Uint8Array");
  const s = n.length;
  if (typeof r == "number" && s !== r) throw new Error(e + " of length " + r + " expected, got " + s);
  return n;
}
function gh(e, t) {
  if (e.length !== t.length) return !1;
  let r = 0;
  for (let n = 0; n < e.length; n++) r |= e[n] ^ t[n];
  return r === 0;
}
function ko(e) {
  return Uint8Array.from(e);
}
var Ds = (e) => typeof e == "bigint" && Qi <= e;
function ff(e, t, r) {
  return Ds(e) && Ds(t) && Ds(r) && t <= e && e < r;
}
function Vo(e, t, r, n) {
  if (!ff(t, r, n)) throw new Error("expected valid " + e + ": " + r + " <= n < " + n + ", got " + t);
}
function pn(e) {
  let t;
  for (t = 0; e > Qi; e >>= rs, t += 1) ;
  return t;
}
function wh(e, t) {
  return e >> BigInt(t) & rs;
}
var br = (e) => (rs << BigInt(e)) - rs;
function Eh(e) {
  return typeof e == "function" && Number.isSafeInteger(e.outputLen);
}
function Bn(e, t, r = {}) {
  if (!e || typeof e != "object") throw new Error("expected valid options object");
  function n(s, i, o) {
    const a = e[s];
    if (o && a === void 0) return;
    const c = typeof a;
    if (c !== i || a === null) throw new Error(`param "${s}" is invalid: expected ${i}, got ${c}`);
  }
  Object.entries(t).forEach(([s, i]) => n(s, i, !1)), Object.entries(r).forEach(([s, i]) => n(s, i, !0));
}
var ns = () => {
  throw new Error("not implemented");
};
function bn(e) {
  const t = /* @__PURE__ */ new WeakMap();
  return (r, ...n) => {
    const s = t.get(r);
    if (s !== void 0) return s;
    const i = e(r, ...n);
    return t.set(r, i), i;
  };
}
var Ne = BigInt(0), Ee = BigInt(1), Xt = /* @__PURE__ */ BigInt(2), df = /* @__PURE__ */ BigInt(3), lf = /* @__PURE__ */ BigInt(4), hf = /* @__PURE__ */ BigInt(5), vh = /* @__PURE__ */ BigInt(7), pf = /* @__PURE__ */ BigInt(8), _h = /* @__PURE__ */ BigInt(9), bf = /* @__PURE__ */ BigInt(16);
function de(e, t) {
  const r = e % t;
  return r >= Ne ? r : t + r;
}
function rt(e, t, r) {
  let n = e;
  for (; t-- > Ne; )
    n *= n, n %= r;
  return n;
}
function $o(e, t) {
  if (e === Ne) throw new Error("invert: expected non-zero number");
  if (t <= Ne) throw new Error("invert: expected positive modulus, got " + t);
  let r = de(e, t), n = t, s = Ne, i = Ee, o = Ee, a = Ne;
  for (; r !== Ne; ) {
    const c = n / r, d = n % r, f = s - o * c, l = i - a * c;
    n = r, r = d, s = o, i = a, o = f, a = l;
  }
  if (n !== Ee) throw new Error("invert: does not exist");
  return de(s, t);
}
function eo(e, t, r) {
  if (!e.eql(e.sqr(t), r)) throw new Error("Cannot find square root");
}
function yf(e, t) {
  const r = (e.ORDER + Ee) / lf, n = e.pow(t, r);
  return eo(e, n, t), n;
}
function xh(e, t) {
  const r = (e.ORDER - hf) / pf, n = e.mul(t, Xt), s = e.pow(n, r), i = e.mul(t, s), o = e.mul(e.mul(i, Xt), s), a = e.mul(i, e.sub(o, e.ONE));
  return eo(e, a, t), a;
}
function Bh(e) {
  const t = Bt(e), r = mf(e), n = r(t, t.neg(t.ONE)), s = r(t, n), i = r(t, t.neg(n)), o = (e + vh) / bf;
  return (a, c) => {
    let d = a.pow(c, o), f = a.mul(d, n);
    const l = a.mul(d, s), u = a.mul(d, i), h = a.eql(a.sqr(f), c), p = a.eql(a.sqr(l), c);
    d = a.cmov(d, f, h), f = a.cmov(u, l, p);
    const y = a.eql(a.sqr(f), c), w = a.cmov(d, f, y);
    return eo(a, w, c), w;
  };
}
function mf(e) {
  if (e < df) throw new Error("sqrt is not defined for small field");
  let t = e - Ee, r = 0;
  for (; t % Xt === Ne; )
    t /= Xt, r++;
  let n = Xt;
  const s = Bt(e);
  for (; ss(s, n) === 1; ) if (n++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
  if (r === 1) return yf;
  let i = s.pow(n, t);
  const o = (t + Ee) / Xt;
  return function(c, d) {
    if (c.is0(d)) return d;
    if (ss(c, d) !== 1) throw new Error("Cannot find square root");
    let f = r, l = c.mul(c.ONE, i), u = c.pow(d, t), h = c.pow(d, o);
    for (; !c.eql(u, c.ONE); ) {
      if (c.is0(u)) return c.ZERO;
      let p = 1, y = c.sqr(u);
      for (; !c.eql(y, c.ONE); )
        if (p++, y = c.sqr(y), p === f) throw new Error("Cannot find square root");
      const w = Ee << BigInt(f - p - 1), m = c.pow(l, w);
      f = p, l = c.sqr(m), u = c.mul(u, l), h = c.mul(h, m);
    }
    return h;
  };
}
function Ih(e) {
  return e % lf === df ? yf : e % pf === hf ? xh : e % bf === _h ? Bh(e) : mf(e);
}
var Dt = (e, t) => (de(e, t) & Ee) === Ee, Sh = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function gf(e) {
  return Bn(e, Sh.reduce((t, r) => (t[r] = "function", t), {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "number",
    BITS: "number"
  })), e;
}
function gs(e, t, r) {
  if (r < Ne) throw new Error("invalid exponent, negatives unsupported");
  if (r === Ne) return e.ONE;
  if (r === Ee) return t;
  let n = e.ONE, s = t;
  for (; r > Ne; )
    r & Ee && (n = e.mul(n, s)), s = e.sqr(s), r >>= Ee;
  return n;
}
function Gt(e, t, r = !1) {
  const n = new Array(t.length).fill(r ? e.ZERO : void 0), s = t.reduce((o, a, c) => e.is0(a) ? o : (n[c] = o, e.mul(o, a)), e.ONE), i = e.inv(s);
  return t.reduceRight((o, a, c) => e.is0(a) ? o : (n[c] = e.mul(o, n[c]), e.mul(o, a)), i), n;
}
function ss(e, t) {
  const r = (e.ORDER - Ee) / Xt, n = e.pow(t, r), s = e.eql(n, e.ONE), i = e.eql(n, e.ZERO), o = e.eql(n, e.neg(e.ONE));
  if (!s && !i && !o) throw new Error("invalid Legendre symbol result");
  return s ? 1 : i ? 0 : -1;
}
function Th(e, t) {
  t !== void 0 && $d(t);
  const r = t !== void 0 ? t : e.toString(2).length;
  return {
    nBitLength: r,
    nByteLength: Math.ceil(r / 8)
  };
}
function Bt(e, t, r = !1, n = {}) {
  if (e <= Ne) throw new Error("invalid field: expected ORDER > 0, got " + e);
  let s, i, o = !1, a;
  if (typeof t == "object" && t != null) {
    if (n.sqrt || r) throw new Error("cannot specify opts in two arguments");
    const u = t;
    u.BITS && (s = u.BITS), u.sqrt && (i = u.sqrt), typeof u.isLE == "boolean" && (r = u.isLE), typeof u.modFromBytes == "boolean" && (o = u.modFromBytes), a = u.allowedLengths;
  } else
    typeof t == "number" && (s = t), n.sqrt && (i = n.sqrt);
  const { nBitLength: c, nByteLength: d } = Th(e, s);
  if (d > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let f;
  const l = Object.freeze({
    ORDER: e,
    isLE: r,
    BITS: c,
    BYTES: d,
    MASK: br(c),
    ZERO: Ne,
    ONE: Ee,
    allowedLengths: a,
    create: (u) => de(u, e),
    isValid: (u) => {
      if (typeof u != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof u);
      return Ne <= u && u < e;
    },
    is0: (u) => u === Ne,
    isValidNot0: (u) => !l.is0(u) && l.isValid(u),
    isOdd: (u) => (u & Ee) === Ee,
    neg: (u) => de(-u, e),
    eql: (u, h) => u === h,
    sqr: (u) => de(u * u, e),
    add: (u, h) => de(u + h, e),
    sub: (u, h) => de(u - h, e),
    mul: (u, h) => de(u * h, e),
    pow: (u, h) => gs(l, u, h),
    div: (u, h) => de(u * $o(h, e), e),
    sqrN: (u) => u * u,
    addN: (u, h) => u + h,
    subN: (u, h) => u - h,
    mulN: (u, h) => u * h,
    inv: (u) => $o(u, e),
    sqrt: i || ((u) => (f || (f = Ih(e)), f(l, u))),
    toBytes: (u) => r ? uf(u, d) : ve(u, d),
    fromBytes: (u, h = !0) => {
      if (a) {
        if (!a.includes(u.length) || u.length > d) throw new Error("Field.fromBytes: expected " + a + " bytes, got " + u.length);
        const y = new Uint8Array(d);
        y.set(u, r ? 0 : y.length - u.length), u = y;
      }
      if (u.length !== d) throw new Error("Field.fromBytes: expected " + d + " bytes, got " + u.length);
      let p = r ? ar(u) : ct(u);
      if (o && (p = de(p, e)), !h && !l.isValid(p))
        throw new Error("invalid field element: outside of range 0..ORDER");
      return p;
    },
    invertBatch: (u) => Gt(l, u),
    cmov: (u, h, p) => p ? h : u
  });
  return Object.freeze(l);
}
function Oh(e, t) {
  if (!e.isOdd) throw new Error("Field doesn't have isOdd");
  const r = e.sqrt(t);
  return e.isOdd(r) ? e.neg(r) : r;
}
function wf(e) {
  if (typeof e != "bigint") throw new Error("field order must be bigint");
  const t = e.toString(2).length;
  return Math.ceil(t / 8);
}
function Ef(e) {
  const t = wf(e);
  return t + Math.ceil(t / 2);
}
function Ch(e, t, r = !1) {
  const n = e.length, s = wf(t), i = Ef(t);
  if (n < 16 || n < i || n > 1024) throw new Error("expected " + i + "-1024 bytes of input, got " + n);
  const o = de(r ? ar(e) : ct(e), t - Ee) + Ee;
  return r ? uf(o, s) : ve(o, s);
}
var Pr = BigInt(0), Wt = BigInt(1);
function is(e, t) {
  const r = t.negate();
  return e ? r : t;
}
function wt(e, t) {
  const r = Gt(e.Fp, t.map((n) => n.Z));
  return t.map((n, s) => e.fromAffine(n.toAffine(r[s])));
}
function vf(e, t) {
  if (!Number.isSafeInteger(e) || e <= 0 || e > t) throw new Error("invalid window size, expected [1.." + t + "], got W=" + e);
}
function qs(e, t) {
  vf(e, t);
  const r = Math.ceil(t / e) + 1, n = 2 ** (e - 1), s = 2 ** e;
  return {
    windows: r,
    windowSize: n,
    mask: br(e),
    maxNumber: s,
    shiftBy: BigInt(e)
  };
}
function jo(e, t, r) {
  const { windowSize: n, mask: s, maxNumber: i, shiftBy: o } = r;
  let a = Number(e & s), c = e >> o;
  a > n && (a -= i, c += Wt);
  const d = t * n, f = d + Math.abs(a) - 1, l = a === 0, u = a < 0, h = t % 2 !== 0;
  return {
    nextN: c,
    offset: f,
    isZero: l,
    isNeg: u,
    isNegF: h,
    offsetF: d
  };
}
function Ah(e, t) {
  if (!Array.isArray(e)) throw new Error("array expected");
  e.forEach((r, n) => {
    if (!(r instanceof t)) throw new Error("invalid point at index " + n);
  });
}
function Rh(e, t) {
  if (!Array.isArray(e)) throw new Error("array of scalars expected");
  e.forEach((r, n) => {
    if (!t.isValid(r)) throw new Error("invalid scalar at index " + n);
  });
}
var Ps = /* @__PURE__ */ new WeakMap(), _f = /* @__PURE__ */ new WeakMap();
function Ls(e) {
  return _f.get(e) || 1;
}
function Ko(e) {
  if (e !== Pr) throw new Error("invalid wNAF");
}
var xf = class {
  constructor(e, t) {
    this.BASE = e.BASE, this.ZERO = e.ZERO, this.Fn = e.Fn, this.bits = t;
  }
  _unsafeLadder(e, t, r = this.ZERO) {
    let n = e;
    for (; t > Pr; )
      t & Wt && (r = r.add(n)), n = n.double(), t >>= Wt;
    return r;
  }
  precomputeWindow(e, t) {
    const { windows: r, windowSize: n } = qs(t, this.bits), s = [];
    let i = e, o = i;
    for (let a = 0; a < r; a++) {
      o = i, s.push(o);
      for (let c = 1; c < n; c++)
        o = o.add(i), s.push(o);
      i = o.double();
    }
    return s;
  }
  wNAF(e, t, r) {
    if (!this.Fn.isValid(r)) throw new Error("invalid scalar");
    let n = this.ZERO, s = this.BASE;
    const i = qs(e, this.bits);
    for (let o = 0; o < i.windows; o++) {
      const { nextN: a, offset: c, isZero: d, isNeg: f, isNegF: l, offsetF: u } = jo(r, o, i);
      r = a, d ? s = s.add(is(l, t[u])) : n = n.add(is(f, t[c]));
    }
    return Ko(r), {
      p: n,
      f: s
    };
  }
  wNAFUnsafe(e, t, r, n = this.ZERO) {
    const s = qs(e, this.bits);
    for (let i = 0; i < s.windows && r !== Pr; i++) {
      const { nextN: o, offset: a, isZero: c, isNeg: d } = jo(r, i, s);
      if (r = o, !c) {
        const f = t[a];
        n = n.add(d ? f.negate() : f);
      }
    }
    return Ko(r), n;
  }
  getPrecomputes(e, t, r) {
    let n = Ps.get(t);
    return n || (n = this.precomputeWindow(t, e), e !== 1 && (typeof r == "function" && (n = r(n)), Ps.set(t, n))), n;
  }
  cached(e, t, r) {
    const n = Ls(e);
    return this.wNAF(n, this.getPrecomputes(n, e, r), t);
  }
  unsafe(e, t, r, n) {
    const s = Ls(e);
    return s === 1 ? this._unsafeLadder(e, t, n) : this.wNAFUnsafe(s, this.getPrecomputes(s, e, r), t, n);
  }
  createCache(e, t) {
    vf(t, this.bits), _f.set(e, t), Ps.delete(e);
  }
  hasCache(e) {
    return Ls(e) !== 1;
  }
};
function Nh(e, t, r, n) {
  let s = t, i = e.ZERO, o = e.ZERO;
  for (; r > Pr || n > Pr; )
    r & Wt && (i = i.add(s)), n & Wt && (o = o.add(s)), s = s.double(), r >>= Wt, n >>= Wt;
  return {
    p1: i,
    p2: o
  };
}
function to(e, t, r, n) {
  Ah(r, e), Rh(n, t);
  const s = r.length, i = n.length;
  if (s !== i) throw new Error("arrays of points and scalars must have equal length");
  const o = e.ZERO, a = pn(BigInt(s));
  let c = 1;
  a > 12 ? c = a - 3 : a > 4 ? c = a - 2 : a > 0 && (c = 2);
  const d = br(c), f = new Array(Number(d) + 1).fill(o), l = Math.floor((t.BITS - 1) / c) * c;
  let u = o;
  for (let h = l; h >= 0; h -= c) {
    f.fill(o);
    for (let y = 0; y < i; y++) {
      const w = n[y], m = Number(w >> BigInt(h) & d);
      f[m] = f[m].add(r[y]);
    }
    let p = o;
    for (let y = f.length - 1, w = o; y > 0; y--)
      w = w.add(f[y]), p = p.add(w);
    if (u = u.add(p), h !== 0) for (let y = 0; y < c; y++) u = u.double();
  }
  return u;
}
function Ho(e, t, r) {
  if (t) {
    if (t.ORDER !== e) throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
    return gf(t), t;
  } else return Bt(e, { isLE: r });
}
function Bf(e, t, r = {}, n) {
  if (n === void 0 && (n = e === "edwards"), !t || typeof t != "object") throw new Error(`expected valid ${e} CURVE object`);
  for (const a of [
    "p",
    "n",
    "h"
  ]) {
    const c = t[a];
    if (!(typeof c == "bigint" && c > Pr)) throw new Error(`CURVE.${a} must be positive bigint`);
  }
  const s = Ho(t.p, r.Fp, n), i = Ho(t.n, r.Fn, n), o = [
    "Gx",
    "Gy",
    "a",
    e === "weierstrass" ? "b" : "d"
  ];
  for (const a of o) if (!s.isValid(t[a])) throw new Error(`CURVE.${a} must be valid field element of CURVE.Fp`);
  return t = Object.freeze(Object.assign({}, t)), {
    CURVE: t,
    Fp: s,
    Fn: i
  };
}
var Uh = ct;
function qt(e, t) {
  if (yn(e), yn(t), e < 0 || e >= 1 << 8 * t) throw new Error("invalid I2OSP input: " + e);
  const r = Array.from({ length: t }).fill(0);
  for (let n = t - 1; n >= 0; n--)
    r[n] = e & 255, e >>>= 8;
  return new Uint8Array(r);
}
function Fh(e, t) {
  const r = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++) r[n] = e[n] ^ t[n];
  return r;
}
function yn(e) {
  if (!Number.isSafeInteger(e)) throw new Error("number expected");
}
function If(e) {
  if (!_n(e) && typeof e != "string") throw new Error("DST must be Uint8Array or string");
  return typeof e == "string" ? ae(e) : e;
}
function Si(e, t, r, n) {
  Pe(e), yn(r), t = If(t), t.length > 255 && (t = n(J(ae("H2C-OVERSIZE-DST-"), t)));
  const { outputLen: s, blockLen: i } = n, o = Math.ceil(r / s);
  if (r > 65535 || o > 255) throw new Error("expand_message_xmd: invalid lenInBytes");
  const a = J(t, qt(t.length, 1)), c = qt(0, i), d = qt(r, 2), f = new Array(o), l = n(J(c, e, d, qt(0, 1), a));
  f[0] = n(J(l, qt(1, 1), a));
  for (let u = 1; u <= o; u++) f[u] = n(J(Fh(l, f[u - 1]), qt(u + 1, 1), a));
  return J(...f).slice(0, r);
}
function Dh(e, t, r, n, s) {
  if (Pe(e), yn(r), t = If(t), t.length > 255) {
    const i = Math.ceil(2 * n / 8);
    t = s.create({ dkLen: i }).update(ae("H2C-OVERSIZE-DST-")).update(t).digest();
  }
  if (r > 65535 || t.length > 255) throw new Error("expand_message_xof: invalid lenInBytes");
  return s.create({ dkLen: r }).update(e).update(qt(r, 2)).update(t).update(qt(t.length, 1)).digest();
}
function Ms(e, t, r) {
  Bn(r, {
    p: "bigint",
    m: "number",
    k: "number",
    hash: "function"
  });
  const { p: n, k: s, m: i, hash: o, expand: a, DST: c } = r;
  if (!Eh(r.hash)) throw new Error("expected valid hash");
  Pe(e), yn(t);
  const d = n.toString(2).length, f = Math.ceil((d + s) / 8), l = t * i * f;
  let u;
  if (a === "xmd") u = Si(e, c, l, o);
  else if (a === "xof") u = Dh(e, c, l, s, o);
  else if (a === "_internal_pass") u = e;
  else throw new Error('expand must be "xmd" or "xof"');
  const h = new Array(t);
  for (let p = 0; p < t; p++) {
    const y = new Array(i);
    for (let w = 0; w < i; w++) {
      const m = f * (w + p * i);
      y[w] = de(Uh(u.subarray(m, m + f)), n);
    }
    h[p] = y;
  }
  return h;
}
function Sf(e, t) {
  const r = t.map((n) => Array.from(n).reverse());
  return (n, s) => {
    const [i, o, a, c] = r.map((l) => l.reduce((u, h) => e.add(e.mul(u, n), h))), [d, f] = Gt(e, [o, c], !0);
    return n = e.mul(i, d), s = e.mul(s, e.mul(a, f)), {
      x: n,
      y: s
    };
  };
}
var Tf = ae("HashToScalar-");
function Ti(e, t, r) {
  if (typeof t != "function") throw new Error("mapToCurve() must be defined");
  function n(i) {
    return e.fromAffine(t(i));
  }
  function s(i) {
    const o = i.clearCofactor();
    return o.equals(e.ZERO) ? e.ZERO : (o.assertValidity(), o);
  }
  return {
    defaults: r,
    hashToCurve(i, o) {
      const a = Ms(i, 2, Object.assign({}, r, o)), c = n(a[0]), d = n(a[1]);
      return s(c.add(d));
    },
    encodeToCurve(i, o) {
      const a = r.encodeDST ? { DST: r.encodeDST } : {};
      return s(n(Ms(i, 1, Object.assign({}, r, a, o))[0]));
    },
    mapToCurve(i) {
      if (!Array.isArray(i)) throw new Error("expected array of bigints");
      for (const o of i) if (typeof o != "bigint") throw new Error("expected array of bigints");
      return s(n(i));
    },
    hashToScalar(i, o) {
      const a = e.Fn.ORDER;
      return Ms(i, 1, Object.assign({}, r, {
        p: a,
        m: 1,
        DST: Tf
      }, o))[0][0];
    }
  };
}
var Go = (e, t) => (e + (e >= 0 ? t : -t) / bt) / t;
function qh(e, t, r) {
  const [[n, s], [i, o]] = t, a = Go(o * e, r), c = Go(-s * e, r);
  let d = e - a * n - c * i, f = -a * s - c * o;
  const l = d < Jt, u = f < Jt;
  l && (d = -d), u && (f = -f);
  const h = br(Math.ceil(pn(r) / 2)) + Oe;
  if (d < Jt || d >= h || f < Jt || f >= h) throw new Error("splitScalar (endomorphism): failed, k=" + e);
  return {
    k1neg: l,
    k1: d,
    k2neg: u,
    k2: f
  };
}
var Jt = BigInt(0), Oe = BigInt(1), bt = BigInt(2), Ir = BigInt(3), Oi = BigInt(4);
function os(e, t) {
  const { BYTES: r } = e;
  let n;
  if (typeof t == "bigint") n = t;
  else {
    let s = Ie("private key", t);
    try {
      n = e.fromBytes(s);
    } catch {
      throw new Error(`invalid private key: expected ui8a of size ${r}, got ${typeof t}`);
    }
  }
  if (!e.isValidNot0(n)) throw new Error("invalid private key: out of range [1..N-1]");
  return n;
}
function Ph(e, t = {}) {
  const r = Bf("weierstrass", e, t), { Fp: n, Fn: s } = r;
  let i = r.CURVE;
  const { h: o, n: a } = i;
  Bn(t, {}, {
    allowInfinityPoint: "boolean",
    clearCofactor: "function",
    isTorsionFree: "function",
    fromBytes: "function",
    toBytes: "function",
    endo: "object",
    wrapPrivateKey: "boolean"
  });
  const { endo: c } = t;
  if (c && (!n.is0(i.a) || typeof c.beta != "bigint" || !Array.isArray(c.basises)))
    throw new Error('invalid endo: expected "beta": bigint and "basises": array');
  const d = kh(n, s);
  function f() {
    if (!n.isOdd) throw new Error("compression is not supported: Field does not have .isOdd()");
  }
  function l(A, b, x) {
    const { x: R, y: F } = b.toAffine(), M = n.toBytes(R);
    return hn(x, "isCompressed"), x ? (f(), J(Lh(!n.isOdd(F)), M)) : J(Uint8Array.of(4), M, n.toBytes(F));
  }
  function u(A) {
    Nr(A, void 0, "Point");
    const { publicKey: b, publicKeyUncompressed: x } = d, R = A.length, F = A[0], M = A.subarray(1);
    if (R === b && (F === 2 || F === 3)) {
      const T = n.fromBytes(M);
      if (!n.isValid(T)) throw new Error("bad point: is not on curve, wrong x");
      const O = y(T);
      let C;
      try {
        C = n.sqrt(O);
      } catch (D) {
        const re = D instanceof Error ? ": " + D.message : "";
        throw new Error("bad point: is not on curve, sqrt error" + re);
      }
      f();
      const q = n.isOdd(C);
      return (F & 1) === 1 !== q && (C = n.neg(C)), {
        x: T,
        y: C
      };
    } else if (R === x && F === 4) {
      const T = n.BYTES, O = n.fromBytes(M.subarray(0, T)), C = n.fromBytes(M.subarray(T, T * 2));
      if (!w(O, C)) throw new Error("bad point: is not on curve");
      return {
        x: O,
        y: C
      };
    } else throw new Error(`bad point: got length ${R}, expected compressed=${b} or uncompressed=${x}`);
  }
  const h = t.toBytes || l, p = t.fromBytes || u;
  function y(A) {
    const b = n.sqr(A), x = n.mul(b, A);
    return n.add(n.add(x, n.mul(A, i.a)), i.b);
  }
  function w(A, b) {
    const x = n.sqr(b), R = y(A);
    return n.eql(x, R);
  }
  if (!w(i.Gx, i.Gy)) throw new Error("bad curve params: generator point");
  const m = n.mul(n.pow(i.a, Ir), Oi), g = n.mul(n.sqr(i.b), BigInt(27));
  if (n.is0(n.add(m, g))) throw new Error("bad curve params: a or b");
  function E(A, b, x = !1) {
    if (!n.isValid(b) || x && n.is0(b)) throw new Error(`bad point coordinate ${A}`);
    return b;
  }
  function _(A) {
    if (!(A instanceof v)) throw new Error("ProjectivePoint expected");
  }
  function I(A) {
    if (!c || !c.basises) throw new Error("no endo");
    return qh(A, c.basises, s.ORDER);
  }
  const S = bn((A, b) => {
    const { X: x, Y: R, Z: F } = A;
    if (n.eql(F, n.ONE)) return {
      x,
      y: R
    };
    const M = A.is0();
    b == null && (b = M ? n.ONE : n.inv(F));
    const T = n.mul(x, b), O = n.mul(R, b), C = n.mul(F, b);
    if (M) return {
      x: n.ZERO,
      y: n.ZERO
    };
    if (!n.eql(C, n.ONE)) throw new Error("invZ was invalid");
    return {
      x: T,
      y: O
    };
  }), B = bn((A) => {
    if (A.is0()) {
      if (t.allowInfinityPoint && !n.is0(A.Y)) return;
      throw new Error("bad point: ZERO");
    }
    const { x: b, y: x } = A.toAffine();
    if (!n.isValid(b) || !n.isValid(x)) throw new Error("bad point: x or y not field elements");
    if (!w(b, x)) throw new Error("bad point: equation left != right");
    if (!A.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
    return !0;
  });
  function U(A, b, x, R, F) {
    return x = new v(n.mul(x.X, A), x.Y, x.Z), b = is(R, b), x = is(F, x), b.add(x);
  }
  class v {
    constructor(b, x, R) {
      this.X = E("x", b), this.Y = E("y", x, !0), this.Z = E("z", R), Object.freeze(this);
    }
    static CURVE() {
      return i;
    }
    static fromAffine(b) {
      const { x, y: R } = b || {};
      if (!b || !n.isValid(x) || !n.isValid(R)) throw new Error("invalid affine point");
      if (b instanceof v) throw new Error("projective point not allowed");
      return n.is0(x) && n.is0(R) ? v.ZERO : new v(x, R, n.ONE);
    }
    static fromBytes(b) {
      const x = v.fromAffine(p(Nr(b, void 0, "point")));
      return x.assertValidity(), x;
    }
    static fromHex(b) {
      return v.fromBytes(Ie("pointHex", b));
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    precompute(b = 8, x = !0) {
      return P.createCache(this, b), x || this.multiply(Ir), this;
    }
    assertValidity() {
      B(this);
    }
    hasEvenY() {
      const { y: b } = this.toAffine();
      if (!n.isOdd) throw new Error("Field doesn't support isOdd");
      return !n.isOdd(b);
    }
    equals(b) {
      _(b);
      const { X: x, Y: R, Z: F } = this, { X: M, Y: T, Z: O } = b, C = n.eql(n.mul(x, O), n.mul(M, F)), q = n.eql(n.mul(R, O), n.mul(T, F));
      return C && q;
    }
    negate() {
      return new v(this.X, n.neg(this.Y), this.Z);
    }
    double() {
      const { a: b, b: x } = i, R = n.mul(x, Ir), { X: F, Y: M, Z: T } = this;
      let O = n.ZERO, C = n.ZERO, q = n.ZERO, D = n.mul(F, F), re = n.mul(M, M), Z = n.mul(T, T), $ = n.mul(F, M);
      return $ = n.add($, $), q = n.mul(F, T), q = n.add(q, q), O = n.mul(b, q), C = n.mul(R, Z), C = n.add(O, C), O = n.sub(re, C), C = n.add(re, C), C = n.mul(O, C), O = n.mul($, O), q = n.mul(R, q), Z = n.mul(b, Z), $ = n.sub(D, Z), $ = n.mul(b, $), $ = n.add($, q), q = n.add(D, D), D = n.add(q, D), D = n.add(D, Z), D = n.mul(D, $), C = n.add(C, D), Z = n.mul(M, T), Z = n.add(Z, Z), D = n.mul(Z, $), O = n.sub(O, D), q = n.mul(Z, re), q = n.add(q, q), q = n.add(q, q), new v(O, C, q);
    }
    add(b) {
      _(b);
      const { X: x, Y: R, Z: F } = this, { X: M, Y: T, Z: O } = b;
      let C = n.ZERO, q = n.ZERO, D = n.ZERO;
      const re = i.a, Z = n.mul(i.b, Ir);
      let $ = n.mul(x, M), ne = n.mul(R, T), se = n.mul(F, O), Le = n.add(x, R), ee = n.add(M, T);
      Le = n.mul(Le, ee), ee = n.add($, ne), Le = n.sub(Le, ee), ee = n.add(x, F);
      let ue = n.add(M, O);
      return ee = n.mul(ee, ue), ue = n.add($, se), ee = n.sub(ee, ue), ue = n.add(R, F), C = n.add(T, O), ue = n.mul(ue, C), C = n.add(ne, se), ue = n.sub(ue, C), D = n.mul(re, ee), C = n.mul(Z, se), D = n.add(C, D), C = n.sub(ne, D), D = n.add(ne, D), q = n.mul(C, D), ne = n.add($, $), ne = n.add(ne, $), se = n.mul(re, se), ee = n.mul(Z, ee), ne = n.add(ne, se), se = n.sub($, se), se = n.mul(re, se), ee = n.add(ee, se), $ = n.mul(ne, ee), q = n.add(q, $), $ = n.mul(ue, ee), C = n.mul(Le, C), C = n.sub(C, $), $ = n.mul(Le, ne), D = n.mul(ue, D), D = n.add(D, $), new v(C, q, D);
    }
    subtract(b) {
      return this.add(b.negate());
    }
    is0() {
      return this.equals(v.ZERO);
    }
    multiply(b) {
      const { endo: x } = t;
      if (!s.isValidNot0(b)) throw new Error("invalid scalar: out of range");
      let R, F;
      const M = (T) => P.cached(this, T, (O) => wt(v, O));
      if (x) {
        const { k1neg: T, k1: O, k2neg: C, k2: q } = I(b), { p: D, f: re } = M(O), { p: Z, f: $ } = M(q);
        F = re.add($), R = U(x.beta, D, Z, T, C);
      } else {
        const { p: T, f: O } = M(b);
        R = T, F = O;
      }
      return wt(v, [R, F])[0];
    }
    multiplyUnsafe(b) {
      const { endo: x } = t, R = this;
      if (!s.isValid(b)) throw new Error("invalid scalar: out of range");
      if (b === Jt || R.is0()) return v.ZERO;
      if (b === Oe) return R;
      if (P.hasCache(this)) return this.multiply(b);
      if (x) {
        const { k1neg: F, k1: M, k2neg: T, k2: O } = I(b), { p1: C, p2: q } = Nh(v, R, M, O);
        return U(x.beta, C, q, F, T);
      } else return P.unsafe(R, b);
    }
    multiplyAndAddUnsafe(b, x, R) {
      const F = this.multiplyUnsafe(x).add(b.multiplyUnsafe(R));
      return F.is0() ? void 0 : F;
    }
    toAffine(b) {
      return S(this, b);
    }
    isTorsionFree() {
      const { isTorsionFree: b } = t;
      return o === Oe ? !0 : b ? b(v, this) : P.unsafe(this, a).is0();
    }
    clearCofactor() {
      const { clearCofactor: b } = t;
      return o === Oe ? this : b ? b(v, this) : this.multiplyUnsafe(o);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(o).is0();
    }
    toBytes(b = !0) {
      return hn(b, "isCompressed"), this.assertValidity(), h(v, this, b);
    }
    toHex(b = !0) {
      return te(this.toBytes(b));
    }
    toString() {
      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
    }
    get px() {
      return this.X;
    }
    get py() {
      return this.X;
    }
    get pz() {
      return this.Z;
    }
    toRawBytes(b = !0) {
      return this.toBytes(b);
    }
    _setWindowSize(b) {
      this.precompute(b);
    }
    static normalizeZ(b) {
      return wt(v, b);
    }
    static msm(b, x) {
      return to(v, s, b, x);
    }
    static fromPrivateKey(b) {
      return v.BASE.multiply(os(s, b));
    }
  }
  v.BASE = new v(i.Gx, i.Gy, n.ONE), v.ZERO = new v(n.ZERO, n.ONE, n.ZERO), v.Fp = n, v.Fn = s;
  const N = s.BITS, P = new xf(v, t.endo ? Math.ceil(N / 2) : N);
  return v.BASE.precompute(8), v;
}
function Lh(e) {
  return Uint8Array.of(e ? 2 : 3);
}
function Mh(e, t) {
  const r = e.ORDER;
  let n = Jt;
  for (let p = r - Oe; p % bt === Jt; p /= bt) n += Oe;
  const s = n, i = bt << s - Oe - Oe, o = i * bt, a = (r - Oe) / o, c = (a - Oe) / bt, d = o - Oe, f = i, l = e.pow(t, a), u = e.pow(t, (a + Oe) / bt);
  let h = (p, y) => {
    let w = l, m = e.pow(y, d), g = e.sqr(m);
    g = e.mul(g, y);
    let E = e.mul(p, g);
    E = e.pow(E, c), E = e.mul(E, m), m = e.mul(E, y), g = e.mul(E, p);
    let _ = e.mul(g, m);
    E = e.pow(_, f);
    let I = e.eql(E, e.ONE);
    m = e.mul(g, u), E = e.mul(_, w), g = e.cmov(m, g, I), _ = e.cmov(E, _, I);
    for (let S = s; S > Oe; S--) {
      let B = S - bt;
      B = bt << B - Oe;
      let U = e.pow(_, B);
      const v = e.eql(U, e.ONE);
      m = e.mul(g, w), w = e.mul(w, w), U = e.mul(_, w), g = e.cmov(m, g, v), _ = e.cmov(U, _, v);
    }
    return {
      isValid: I,
      value: g
    };
  };
  if (e.ORDER % Oi === Ir) {
    const p = (e.ORDER - Ir) / Oi, y = e.sqrt(e.neg(t));
    h = (w, m) => {
      let g = e.sqr(m);
      const E = e.mul(w, m);
      g = e.mul(g, E);
      let _ = e.pow(g, p);
      _ = e.mul(_, E);
      const I = e.mul(_, y), S = e.mul(e.sqr(_), m), B = e.eql(S, w);
      return {
        isValid: B,
        value: e.cmov(I, _, B)
      };
    };
  }
  return h;
}
function Of(e, t) {
  gf(e);
  const { A: r, B: n, Z: s } = t;
  if (!e.isValid(r) || !e.isValid(n) || !e.isValid(s)) throw new Error("mapToCurveSimpleSWU: invalid opts");
  const i = Mh(e, s);
  if (!e.isOdd) throw new Error("Field does not have .isOdd()");
  return (o) => {
    let a, c, d, f, l, u, h, p;
    a = e.sqr(o), a = e.mul(a, s), c = e.sqr(a), c = e.add(c, a), d = e.add(c, e.ONE), d = e.mul(d, n), f = e.cmov(s, e.neg(c), !e.eql(c, e.ZERO)), f = e.mul(f, r), c = e.sqr(d), u = e.sqr(f), l = e.mul(u, r), c = e.add(c, l), c = e.mul(c, d), u = e.mul(u, f), l = e.mul(u, n), c = e.add(c, l), h = e.mul(a, d);
    const { isValid: y, value: w } = i(c, u);
    p = e.mul(a, o), p = e.mul(p, w), h = e.cmov(h, d, y), p = e.cmov(p, w, y);
    const m = e.isOdd(o) === e.isOdd(p);
    p = e.cmov(e.neg(p), p, m);
    const g = Gt(e, [f], !0)[0];
    return h = e.mul(h, g), {
      x: h,
      y: p
    };
  };
}
function kh(e, t) {
  return {
    secretKey: t.BYTES,
    publicKey: 1 + e.BYTES,
    publicKeyUncompressed: 1 + 2 * e.BYTES,
    publicKeyHasPrefix: !0,
    signature: 2 * t.BYTES
  };
}
function Zo(e) {
  const { CURVE: t, curveOpts: r } = Vh(e);
  return jh(e, Ph(t, r));
}
function Vh(e) {
  const t = {
    a: e.a,
    b: e.b,
    p: e.Fp.ORDER,
    n: e.n,
    h: e.h,
    Gx: e.Gx,
    Gy: e.Gy
  }, r = e.Fp;
  let n = e.allowedPrivateKeyLengths ? Array.from(new Set(e.allowedPrivateKeyLengths.map((s) => Math.ceil(s / 2)))) : void 0;
  return {
    CURVE: t,
    curveOpts: {
      Fp: r,
      Fn: Bt(t.n, {
        BITS: e.nBitLength,
        allowedLengths: n,
        modFromBytes: e.wrapPrivateKey
      }),
      allowInfinityPoint: e.allowInfinityPoint,
      endo: e.endo,
      isTorsionFree: e.isTorsionFree,
      clearCofactor: e.clearCofactor,
      fromBytes: e.fromBytes,
      toBytes: e.toBytes
    }
  };
}
function $h(e, t, r) {
  function n(s) {
    const i = e.sqr(s), o = e.mul(i, s);
    return e.add(e.add(o, e.mul(s, t)), r);
  }
  return n;
}
function jh(e, t) {
  const { Fp: r, Fn: n } = t;
  function s(o) {
    return ff(o, Oe, n.ORDER);
  }
  const i = $h(r, e.a, e.b);
  return Object.assign({}, {
    CURVE: e,
    Point: t,
    ProjectivePoint: t,
    normPrivateKeyToScalar: (o) => os(n, o),
    weierstrassEquation: i,
    isWithinCurveOrder: s
  });
}
var Kh = BigInt(0), Dn = BigInt(1), Yo = BigInt(2), Sr = BigInt(3);
function Hh(e) {
  const t = [];
  for (; e > Dn; e >>= Dn) (e & Dn) === Kh ? t.unshift(0) : (e & Sr) === Sr ? (t.unshift(-1), e += Dn) : t.unshift(1);
  return t;
}
function ks(e) {
  if (!Array.isArray(e) || e.length === 0) throw new Error("expected non-empty array");
}
function Gh(e, t, r, n) {
  const { Fp2: s, Fp12: i } = e, { twistType: o, ateLoopSize: a, xNegative: c, postPrecompute: d } = n;
  let f;
  if (o === "multiplicative") f = (E, _, I, S, B, U) => i.mul014(S, E, s.mul(_, B), s.mul(I, U));
  else if (o === "divisive") f = (E, _, I, S, B, U) => i.mul034(S, s.mul(I, U), s.mul(_, B), E);
  else throw new Error("bls: unknown twist type");
  const l = s.div(s.ONE, s.mul(s.ONE, Yo));
  function u(E, _, I, S) {
    const B = s.sqr(I), U = s.sqr(S), v = s.mulByB(s.mul(U, Sr)), N = s.mul(v, Sr), P = s.sub(s.sub(s.sqr(s.add(I, S)), U), B), A = s.sub(v, B), b = s.mul(s.sqr(_), Sr), x = s.neg(P);
    return E.push([
      A,
      b,
      x
    ]), _ = s.mul(s.mul(s.mul(s.sub(B, N), _), I), l), I = s.sub(s.sqr(s.mul(s.add(B, N), l)), s.mul(s.sqr(v), Sr)), S = s.mul(B, P), {
      Rx: _,
      Ry: I,
      Rz: S
    };
  }
  function h(E, _, I, S, B, U) {
    const v = s.sub(I, s.mul(U, S)), N = s.sub(_, s.mul(B, S)), P = s.sub(s.mul(v, B), s.mul(N, U)), A = s.neg(v), b = N;
    E.push([
      P,
      A,
      b
    ]);
    const x = s.sqr(N), R = s.mul(x, N), F = s.mul(x, _), M = s.add(s.sub(R, s.mul(F, Yo)), s.mul(s.sqr(v), S));
    return _ = s.mul(N, M), I = s.sub(s.mul(s.sub(F, M), v), s.mul(R, I)), S = s.mul(S, R), {
      Rx: _,
      Ry: I,
      Rz: S
    };
  }
  const p = Hh(a), y = bn((E) => {
    const { x: _, y: I } = E.toAffine(), S = _, B = I, U = s.neg(I);
    let v = S, N = B, P = s.ONE;
    const A = [];
    for (const b of p) {
      const x = [];
      ({ Rx: v, Ry: N, Rz: P } = u(x, v, N, P)), b && ({ Rx: v, Ry: N, Rz: P } = h(x, v, N, P, S, b === -1 ? U : B)), A.push(x);
    }
    if (d) {
      const b = A[A.length - 1];
      d(v, N, P, S, B, h.bind(null, b));
    }
    return A;
  });
  function w(E, _ = !1) {
    let I = i.ONE;
    if (E.length) {
      const S = E[0][0].length;
      for (let B = 0; B < S; B++) {
        I = i.sqr(I);
        for (const [U, v, N] of E) for (const [P, A, b] of U[B]) I = f(P, A, b, I, v, N);
      }
    }
    return c && (I = i.conjugate(I)), _ ? i.finalExponentiate(I) : I;
  }
  function m(E, _ = !0) {
    const I = [];
    wt(t, E.map(({ g1: S }) => S)), wt(r, E.map(({ g2: S }) => S));
    for (const { g1: S, g2: B } of E) {
      if (S.is0() || B.is0()) throw new Error("pairing is not available for ZERO point");
      S.assertValidity(), B.assertValidity();
      const U = S.toAffine();
      I.push([
        y(B),
        U.x,
        U.y
      ]);
    }
    return w(I, _);
  }
  function g(E, _, I = !0) {
    return m([{
      g1: E,
      g2: _
    }], I);
  }
  return {
    Fp12: i,
    millerLoopBatch: w,
    pairing: g,
    pairingBatch: m,
    calcPairingPrecomputes: y
  };
}
function zo(e, t, r, n, s) {
  const { Fp12: i, pairingBatch: o } = e;
  function a(l) {
    return l instanceof t.Point ? l : t.Point.fromHex(l);
  }
  function c(l) {
    return l instanceof r.Point ? l : r.Point.fromHex(l);
  }
  function d(l) {
    if (!(l instanceof r.Point)) throw new Error(`expected valid message hashed to ${s ? "G1" : "G2"} curve`);
    return l;
  }
  const f = s ? (l, u) => ({
    g1: u,
    g2: l
  }) : (l, u) => ({
    g1: l,
    g2: u
  });
  return {
    getPublicKey(l) {
      const u = os(t.Point.Fn, l);
      return t.Point.BASE.multiply(u);
    },
    sign(l, u, h) {
      if (h != null) throw new Error("sign() expects 2 arguments");
      const p = os(t.Point.Fn, u);
      return d(l).assertValidity(), l.multiply(p);
    },
    verify(l, u, h, p) {
      if (p != null) throw new Error("verify() expects 3 arguments");
      l = c(l), h = a(h);
      const y = h.negate(), w = t.Point.BASE, m = d(u), g = l, E = o([f(y, m), f(w, g)]);
      return i.eql(E, i.ONE);
    },
    verifyBatch(l, u, h) {
      if (ks(u), h.length !== u.length) throw new Error("amount of public keys and messages should be equal");
      const p = c(l), y = u, w = h.map(a), m = /* @__PURE__ */ new Map();
      for (let _ = 0; _ < w.length; _++) {
        const I = w[_], S = y[_];
        let B = m.get(S);
        B === void 0 && (B = [], m.set(S, B)), B.push(I);
      }
      const g = [], E = t.Point.BASE;
      try {
        for (const [_, I] of m) {
          const S = I.reduce((B, U) => B.add(U));
          g.push(f(S, _));
        }
        return g.push(f(E.negate(), p)), i.eql(o(g), i.ONE);
      } catch {
        return !1;
      }
    },
    aggregatePublicKeys(l) {
      ks(l), l = l.map((h) => a(h));
      const u = l.reduce((h, p) => h.add(p), t.Point.ZERO);
      return u.assertValidity(), u;
    },
    aggregateSignatures(l) {
      ks(l), l = l.map((h) => c(h));
      const u = l.reduce((h, p) => h.add(p), r.Point.ZERO);
      return u.assertValidity(), u;
    },
    hash(l, u) {
      Pe(l);
      const h = u ? { DST: u } : void 0;
      return r.hashToCurve(l, h);
    },
    Signature: n
  };
}
function Zh(e) {
  const { Fp: t, Fr: r, Fp2: n, Fp6: s, Fp12: i } = e.fields, o = Zo(e.G1), a = Object.assign(o, Ti(o.Point, e.G1.mapToCurve, {
    ...e.htfDefaults,
    ...e.G1.htfDefaults
  })), c = Zo(e.G2), d = Object.assign(c, Ti(c.Point, e.G2.mapToCurve, {
    ...e.htfDefaults,
    ...e.G2.htfDefaults
  })), f = Gh(e.fields, a.Point, d.Point, {
    ...e.params,
    postPrecompute: e.postPrecompute
  }), { millerLoopBatch: l, pairing: u, pairingBatch: h, calcPairingPrecomputes: p } = f, y = zo(f, a, d, e.G2.Signature, !1), w = zo(f, d, a, e.G1.ShortSignature, !0), m = e.randomBytes || ic, g = () => Ch(m(Ef(r.ORDER)), r.ORDER), E = {
    randomSecretKey: g,
    randomPrivateKey: g,
    calcPairingPrecomputes: p
  }, { ShortSignature: _ } = e.G1, { Signature: I } = e.G2;
  function S(T, O) {
    return T instanceof a.Point ? T : w.hash(Ie("point", T), O?.DST);
  }
  function B(T, O) {
    return T instanceof d.Point ? T : y.hash(Ie("point", T), O?.DST);
  }
  function U(T) {
    return y.getPublicKey(T).toBytes(!0);
  }
  function v(T) {
    return w.getPublicKey(T).toBytes(!0);
  }
  function N(T, O, C) {
    const q = B(T, C), D = y.sign(q, O);
    return T instanceof d.Point ? D : I.toBytes(D);
  }
  function P(T, O, C) {
    const q = S(T, C), D = w.sign(q, O);
    return T instanceof a.Point ? D : _.toBytes(D);
  }
  function A(T, O, C, q) {
    const D = B(O, q);
    return y.verify(T, D, C);
  }
  function b(T, O, C, q) {
    const D = S(O, q);
    return w.verify(T, D, C);
  }
  function x(T) {
    const O = y.aggregatePublicKeys(T);
    return T[0] instanceof a.Point ? O : O.toBytes(!0);
  }
  function R(T) {
    const O = y.aggregateSignatures(T);
    return T[0] instanceof d.Point ? O : I.toBytes(O);
  }
  function F(T) {
    const O = w.aggregateSignatures(T);
    return T[0] instanceof a.Point ? O : _.toBytes(O);
  }
  function M(T, O, C, q) {
    const D = O.map((re) => B(re, q));
    return y.verifyBatch(T, D, C);
  }
  return a.Point.BASE.precompute(4), {
    longSignatures: y,
    shortSignatures: w,
    millerLoopBatch: l,
    pairing: u,
    pairingBatch: h,
    verifyBatch: M,
    fields: {
      Fr: r,
      Fp: t,
      Fp2: n,
      Fp6: s,
      Fp12: i
    },
    params: {
      ateLoopSize: e.params.ateLoopSize,
      twistType: e.params.twistType,
      r: e.params.r,
      G1b: e.G1.b,
      G2b: e.G2.b
    },
    utils: E,
    getPublicKey: U,
    getPublicKeyForShortSignatures: v,
    sign: N,
    signShortSignature: P,
    verify: A,
    verifyShortSignature: b,
    aggregatePublicKeys: x,
    aggregateSignatures: R,
    aggregateShortSignatures: F,
    G1: a,
    G2: d,
    Signature: I,
    ShortSignature: _
  };
}
var Xo = BigInt(0), Et = BigInt(1), Ae = BigInt(2), Wo = BigInt(3);
function ro(e, t, r, n, s = 1, i) {
  const o = BigInt(i === void 0 ? n : i), a = r ** BigInt(n), c = [];
  for (let d = 0; d < s; d++) {
    const f = BigInt(d + 1), l = [];
    for (let u = 0, h = Et; u < n; u++) {
      const p = (f * h - f) / o % a;
      l.push(e.pow(t, p)), h *= r;
    }
    c.push(l);
  }
  return c;
}
function Yh(e, t, r) {
  const n = t.pow(r, (e.ORDER - Et) / Wo), s = t.pow(r, (e.ORDER - Et) / Ae);
  function i(f, l) {
    return [t.mul(t.frobeniusMap(f, 1), n), t.mul(t.frobeniusMap(l, 1), s)];
  }
  const o = t.pow(r, (e.ORDER ** Ae - Et) / Wo), a = t.pow(r, (e.ORDER ** Ae - Et) / Ae);
  if (!t.eql(a, t.neg(t.ONE))) throw new Error("psiFrobenius: PSI2_Y!==-1");
  function c(f, l) {
    return [t.mul(f, o), t.neg(l)];
  }
  const d = (f) => (l, u) => {
    const h = u.toAffine(), p = f(h.x, h.y);
    return l.fromAffine({
      x: p[0],
      y: p[1]
    });
  };
  return {
    psi: i,
    psi2: c,
    G2psi: d(i),
    G2psi2: d(c),
    PSI_X: n,
    PSI_Y: s,
    PSI2_X: o,
    PSI2_Y: a
  };
}
var Jo = (e, t) => {
  if (t.length !== 2) throw new Error("invalid tuple");
  const r = t.map((n) => e.create(n));
  return {
    c0: r[0],
    c1: r[1]
  };
}, zh = class {
  constructor(e, t = {}) {
    this.MASK = Et;
    const r = e.ORDER, n = r * r;
    this.Fp = e, this.ORDER = n, this.BITS = pn(n), this.BYTES = Math.ceil(pn(n) / 8), this.isLE = e.isLE, this.ZERO = {
      c0: e.ZERO,
      c1: e.ZERO
    }, this.ONE = {
      c0: e.ONE,
      c1: e.ZERO
    }, this.Fp_NONRESIDUE = e.create(t.NONRESIDUE || BigInt(-1)), this.Fp_div2 = e.div(e.ONE, Ae), this.NONRESIDUE = Jo(e, t.FP2_NONRESIDUE), this.FROBENIUS_COEFFICIENTS = ro(e, this.Fp_NONRESIDUE, e.ORDER, 2)[0], this.mulByB = t.Fp2mulByB, Object.seal(this);
  }
  fromBigTuple(e) {
    return Jo(this.Fp, e);
  }
  create(e) {
    return e;
  }
  isValid({ c0: e, c1: t }) {
    function r(n, s) {
      return typeof n == "bigint" && Xo <= n && n < s;
    }
    return r(e, this.ORDER) && r(t, this.ORDER);
  }
  is0({ c0: e, c1: t }) {
    return this.Fp.is0(e) && this.Fp.is0(t);
  }
  isValidNot0(e) {
    return !this.is0(e) && this.isValid(e);
  }
  eql({ c0: e, c1: t }, { c0: r, c1: n }) {
    return this.Fp.eql(e, r) && this.Fp.eql(t, n);
  }
  neg({ c0: e, c1: t }) {
    return {
      c0: this.Fp.neg(e),
      c1: this.Fp.neg(t)
    };
  }
  pow(e, t) {
    return gs(this, e, t);
  }
  invertBatch(e) {
    return Gt(this, e);
  }
  add(e, t) {
    const { c0: r, c1: n } = e, { c0: s, c1: i } = t;
    return {
      c0: this.Fp.add(r, s),
      c1: this.Fp.add(n, i)
    };
  }
  sub({ c0: e, c1: t }, { c0: r, c1: n }) {
    return {
      c0: this.Fp.sub(e, r),
      c1: this.Fp.sub(t, n)
    };
  }
  mul({ c0: e, c1: t }, r) {
    const { Fp: n } = this;
    if (typeof r == "bigint") return {
      c0: n.mul(e, r),
      c1: n.mul(t, r)
    };
    const { c0: s, c1: i } = r;
    let o = n.mul(e, s), a = n.mul(t, i);
    return {
      c0: n.sub(o, a),
      c1: n.sub(n.mul(n.add(e, t), n.add(s, i)), n.add(o, a))
    };
  }
  sqr({ c0: e, c1: t }) {
    const { Fp: r } = this, n = r.add(e, t), s = r.sub(e, t), i = r.add(e, e);
    return {
      c0: r.mul(n, s),
      c1: r.mul(i, t)
    };
  }
  addN(e, t) {
    return this.add(e, t);
  }
  subN(e, t) {
    return this.sub(e, t);
  }
  mulN(e, t) {
    return this.mul(e, t);
  }
  sqrN(e) {
    return this.sqr(e);
  }
  div(e, t) {
    const { Fp: r } = this;
    return this.mul(e, typeof t == "bigint" ? r.inv(r.create(t)) : this.inv(t));
  }
  inv({ c0: e, c1: t }) {
    const { Fp: r } = this, n = r.inv(r.create(e * e + t * t));
    return {
      c0: r.mul(n, r.create(e)),
      c1: r.mul(n, r.create(-t))
    };
  }
  sqrt(e) {
    const { Fp: t } = this, r = this, { c0: n, c1: s } = e;
    if (t.is0(s)) return ss(t, n) === 1 ? r.create({
      c0: t.sqrt(n),
      c1: t.ZERO
    }) : r.create({
      c0: t.ZERO,
      c1: t.sqrt(t.div(n, this.Fp_NONRESIDUE))
    });
    const i = t.sqrt(t.sub(t.sqr(n), t.mul(t.sqr(s), this.Fp_NONRESIDUE)));
    let o = t.mul(t.add(i, n), this.Fp_div2);
    ss(t, o) === -1 && (o = t.sub(o, i));
    const a = t.sqrt(o), c = r.create({
      c0: a,
      c1: t.div(t.mul(s, this.Fp_div2), a)
    });
    if (!r.eql(r.sqr(c), e)) throw new Error("Cannot find square root");
    const d = c, f = r.neg(d), { re: l, im: u } = r.reim(d), { re: h, im: p } = r.reim(f);
    return u > p || u === p && l > h ? d : f;
  }
  isOdd(e) {
    const { re: t, im: r } = this.reim(e), n = t % Ae, s = t === Xo, i = r % Ae;
    return BigInt(n || s && i) == Et;
  }
  fromBytes(e) {
    const { Fp: t } = this;
    if (e.length !== this.BYTES) throw new Error("fromBytes invalid length=" + e.length);
    return {
      c0: t.fromBytes(e.subarray(0, t.BYTES)),
      c1: t.fromBytes(e.subarray(t.BYTES))
    };
  }
  toBytes({ c0: e, c1: t }) {
    return J(this.Fp.toBytes(e), this.Fp.toBytes(t));
  }
  cmov({ c0: e, c1: t }, { c0: r, c1: n }, s) {
    return {
      c0: this.Fp.cmov(e, r, s),
      c1: this.Fp.cmov(t, n, s)
    };
  }
  reim({ c0: e, c1: t }) {
    return {
      re: e,
      im: t
    };
  }
  Fp4Square(e, t) {
    const r = this, n = r.sqr(e), s = r.sqr(t);
    return {
      first: r.add(r.mulByNonresidue(s), n),
      second: r.sub(r.sub(r.sqr(r.add(e, t)), n), s)
    };
  }
  mulByNonresidue({ c0: e, c1: t }) {
    return this.mul({
      c0: e,
      c1: t
    }, this.NONRESIDUE);
  }
  frobeniusMap({ c0: e, c1: t }, r) {
    return {
      c0: e,
      c1: this.Fp.mul(t, this.FROBENIUS_COEFFICIENTS[r % 2])
    };
  }
}, Xh = class {
  constructor(e) {
    this.MASK = Et, this.Fp2 = e, this.ORDER = e.ORDER, this.BITS = 3 * e.BITS, this.BYTES = 3 * e.BYTES, this.isLE = e.isLE, this.ZERO = {
      c0: e.ZERO,
      c1: e.ZERO,
      c2: e.ZERO
    }, this.ONE = {
      c0: e.ONE,
      c1: e.ZERO,
      c2: e.ZERO
    };
    const { Fp: t } = e, r = ro(e, e.NONRESIDUE, t.ORDER, 6, 2, 3);
    this.FROBENIUS_COEFFICIENTS_1 = r[0], this.FROBENIUS_COEFFICIENTS_2 = r[1], Object.seal(this);
  }
  add({ c0: e, c1: t, c2: r }, { c0: n, c1: s, c2: i }) {
    const { Fp2: o } = this;
    return {
      c0: o.add(e, n),
      c1: o.add(t, s),
      c2: o.add(r, i)
    };
  }
  sub({ c0: e, c1: t, c2: r }, { c0: n, c1: s, c2: i }) {
    const { Fp2: o } = this;
    return {
      c0: o.sub(e, n),
      c1: o.sub(t, s),
      c2: o.sub(r, i)
    };
  }
  mul({ c0: e, c1: t, c2: r }, n) {
    const { Fp2: s } = this;
    if (typeof n == "bigint") return {
      c0: s.mul(e, n),
      c1: s.mul(t, n),
      c2: s.mul(r, n)
    };
    const { c0: i, c1: o, c2: a } = n, c = s.mul(e, i), d = s.mul(t, o), f = s.mul(r, a);
    return {
      c0: s.add(c, s.mulByNonresidue(s.sub(s.mul(s.add(t, r), s.add(o, a)), s.add(d, f)))),
      c1: s.add(s.sub(s.mul(s.add(e, t), s.add(i, o)), s.add(c, d)), s.mulByNonresidue(f)),
      c2: s.sub(s.add(d, s.mul(s.add(e, r), s.add(i, a))), s.add(c, f))
    };
  }
  sqr({ c0: e, c1: t, c2: r }) {
    const { Fp2: n } = this;
    let s = n.sqr(e), i = n.mul(n.mul(e, t), Ae), o = n.mul(n.mul(t, r), Ae), a = n.sqr(r);
    return {
      c0: n.add(n.mulByNonresidue(o), s),
      c1: n.add(n.mulByNonresidue(a), i),
      c2: n.sub(n.sub(n.add(n.add(i, n.sqr(n.add(n.sub(e, t), r))), o), s), a)
    };
  }
  addN(e, t) {
    return this.add(e, t);
  }
  subN(e, t) {
    return this.sub(e, t);
  }
  mulN(e, t) {
    return this.mul(e, t);
  }
  sqrN(e) {
    return this.sqr(e);
  }
  create(e) {
    return e;
  }
  isValid({ c0: e, c1: t, c2: r }) {
    const { Fp2: n } = this;
    return n.isValid(e) && n.isValid(t) && n.isValid(r);
  }
  is0({ c0: e, c1: t, c2: r }) {
    const { Fp2: n } = this;
    return n.is0(e) && n.is0(t) && n.is0(r);
  }
  isValidNot0(e) {
    return !this.is0(e) && this.isValid(e);
  }
  neg({ c0: e, c1: t, c2: r }) {
    const { Fp2: n } = this;
    return {
      c0: n.neg(e),
      c1: n.neg(t),
      c2: n.neg(r)
    };
  }
  eql({ c0: e, c1: t, c2: r }, { c0: n, c1: s, c2: i }) {
    const { Fp2: o } = this;
    return o.eql(e, n) && o.eql(t, s) && o.eql(r, i);
  }
  sqrt(e) {
    return ns();
  }
  div(e, t) {
    const { Fp2: r } = this, { Fp: n } = r;
    return this.mul(e, typeof t == "bigint" ? n.inv(n.create(t)) : this.inv(t));
  }
  pow(e, t) {
    return gs(this, e, t);
  }
  invertBatch(e) {
    return Gt(this, e);
  }
  inv({ c0: e, c1: t, c2: r }) {
    const { Fp2: n } = this;
    let s = n.sub(n.sqr(e), n.mulByNonresidue(n.mul(r, t))), i = n.sub(n.mulByNonresidue(n.sqr(r)), n.mul(e, t)), o = n.sub(n.sqr(t), n.mul(e, r)), a = n.inv(n.add(n.mulByNonresidue(n.add(n.mul(r, i), n.mul(t, o))), n.mul(e, s)));
    return {
      c0: n.mul(a, s),
      c1: n.mul(a, i),
      c2: n.mul(a, o)
    };
  }
  fromBytes(e) {
    const { Fp2: t } = this;
    if (e.length !== this.BYTES) throw new Error("fromBytes invalid length=" + e.length);
    const r = t.BYTES;
    return {
      c0: t.fromBytes(e.subarray(0, r)),
      c1: t.fromBytes(e.subarray(r, r * 2)),
      c2: t.fromBytes(e.subarray(2 * r))
    };
  }
  toBytes({ c0: e, c1: t, c2: r }) {
    const { Fp2: n } = this;
    return J(n.toBytes(e), n.toBytes(t), n.toBytes(r));
  }
  cmov({ c0: e, c1: t, c2: r }, { c0: n, c1: s, c2: i }, o) {
    const { Fp2: a } = this;
    return {
      c0: a.cmov(e, n, o),
      c1: a.cmov(t, s, o),
      c2: a.cmov(r, i, o)
    };
  }
  fromBigSix(e) {
    const { Fp2: t } = this;
    if (!Array.isArray(e) || e.length !== 6) throw new Error("invalid Fp6 usage");
    return {
      c0: t.fromBigTuple(e.slice(0, 2)),
      c1: t.fromBigTuple(e.slice(2, 4)),
      c2: t.fromBigTuple(e.slice(4, 6))
    };
  }
  frobeniusMap({ c0: e, c1: t, c2: r }, n) {
    const { Fp2: s } = this;
    return {
      c0: s.frobeniusMap(e, n),
      c1: s.mul(s.frobeniusMap(t, n), this.FROBENIUS_COEFFICIENTS_1[n % 6]),
      c2: s.mul(s.frobeniusMap(r, n), this.FROBENIUS_COEFFICIENTS_2[n % 6])
    };
  }
  mulByFp2({ c0: e, c1: t, c2: r }, n) {
    const { Fp2: s } = this;
    return {
      c0: s.mul(e, n),
      c1: s.mul(t, n),
      c2: s.mul(r, n)
    };
  }
  mulByNonresidue({ c0: e, c1: t, c2: r }) {
    const { Fp2: n } = this;
    return {
      c0: n.mulByNonresidue(r),
      c1: e,
      c2: t
    };
  }
  mul1({ c0: e, c1: t, c2: r }, n) {
    const { Fp2: s } = this;
    return {
      c0: s.mulByNonresidue(s.mul(r, n)),
      c1: s.mul(e, n),
      c2: s.mul(t, n)
    };
  }
  mul01({ c0: e, c1: t, c2: r }, n, s) {
    const { Fp2: i } = this;
    let o = i.mul(e, n), a = i.mul(t, s);
    return {
      c0: i.add(i.mulByNonresidue(i.sub(i.mul(i.add(t, r), s), a)), o),
      c1: i.sub(i.sub(i.mul(i.add(n, s), i.add(e, t)), o), a),
      c2: i.add(i.sub(i.mul(i.add(e, r), n), o), a)
    };
  }
}, Wh = class {
  constructor(e, t) {
    this.MASK = Et;
    const { Fp2: r } = e, { Fp: n } = r;
    this.Fp6 = e, this.ORDER = r.ORDER, this.BITS = 2 * e.BITS, this.BYTES = 2 * e.BYTES, this.isLE = e.isLE, this.ZERO = {
      c0: e.ZERO,
      c1: e.ZERO
    }, this.ONE = {
      c0: e.ONE,
      c1: e.ZERO
    }, this.FROBENIUS_COEFFICIENTS = ro(r, r.NONRESIDUE, n.ORDER, 12, 1, 6)[0], this.X_LEN = t.X_LEN, this.finalExponentiate = t.Fp12finalExponentiate;
  }
  create(e) {
    return e;
  }
  isValid({ c0: e, c1: t }) {
    const { Fp6: r } = this;
    return r.isValid(e) && r.isValid(t);
  }
  is0({ c0: e, c1: t }) {
    const { Fp6: r } = this;
    return r.is0(e) && r.is0(t);
  }
  isValidNot0(e) {
    return !this.is0(e) && this.isValid(e);
  }
  neg({ c0: e, c1: t }) {
    const { Fp6: r } = this;
    return {
      c0: r.neg(e),
      c1: r.neg(t)
    };
  }
  eql({ c0: e, c1: t }, { c0: r, c1: n }) {
    const { Fp6: s } = this;
    return s.eql(e, r) && s.eql(t, n);
  }
  sqrt(e) {
    ns();
  }
  inv({ c0: e, c1: t }) {
    const { Fp6: r } = this;
    let n = r.inv(r.sub(r.sqr(e), r.mulByNonresidue(r.sqr(t))));
    return {
      c0: r.mul(e, n),
      c1: r.neg(r.mul(t, n))
    };
  }
  div(e, t) {
    const { Fp6: r } = this, { Fp2: n } = r, { Fp: s } = n;
    return this.mul(e, typeof t == "bigint" ? s.inv(s.create(t)) : this.inv(t));
  }
  pow(e, t) {
    return gs(this, e, t);
  }
  invertBatch(e) {
    return Gt(this, e);
  }
  add({ c0: e, c1: t }, { c0: r, c1: n }) {
    const { Fp6: s } = this;
    return {
      c0: s.add(e, r),
      c1: s.add(t, n)
    };
  }
  sub({ c0: e, c1: t }, { c0: r, c1: n }) {
    const { Fp6: s } = this;
    return {
      c0: s.sub(e, r),
      c1: s.sub(t, n)
    };
  }
  mul({ c0: e, c1: t }, r) {
    const { Fp6: n } = this;
    if (typeof r == "bigint") return {
      c0: n.mul(e, r),
      c1: n.mul(t, r)
    };
    let { c0: s, c1: i } = r, o = n.mul(e, s), a = n.mul(t, i);
    return {
      c0: n.add(o, n.mulByNonresidue(a)),
      c1: n.sub(n.mul(n.add(e, t), n.add(s, i)), n.add(o, a))
    };
  }
  sqr({ c0: e, c1: t }) {
    const { Fp6: r } = this;
    let n = r.mul(e, t);
    return {
      c0: r.sub(r.sub(r.mul(r.add(r.mulByNonresidue(t), e), r.add(e, t)), n), r.mulByNonresidue(n)),
      c1: r.add(n, n)
    };
  }
  addN(e, t) {
    return this.add(e, t);
  }
  subN(e, t) {
    return this.sub(e, t);
  }
  mulN(e, t) {
    return this.mul(e, t);
  }
  sqrN(e) {
    return this.sqr(e);
  }
  fromBytes(e) {
    const { Fp6: t } = this;
    if (e.length !== this.BYTES) throw new Error("fromBytes invalid length=" + e.length);
    return {
      c0: t.fromBytes(e.subarray(0, t.BYTES)),
      c1: t.fromBytes(e.subarray(t.BYTES))
    };
  }
  toBytes({ c0: e, c1: t }) {
    const { Fp6: r } = this;
    return J(r.toBytes(e), r.toBytes(t));
  }
  cmov({ c0: e, c1: t }, { c0: r, c1: n }, s) {
    const { Fp6: i } = this;
    return {
      c0: i.cmov(e, r, s),
      c1: i.cmov(t, n, s)
    };
  }
  fromBigTwelve(e) {
    const { Fp6: t } = this;
    return {
      c0: t.fromBigSix(e.slice(0, 6)),
      c1: t.fromBigSix(e.slice(6, 12))
    };
  }
  frobeniusMap(e, t) {
    const { Fp6: r } = this, { Fp2: n } = r, { c0: s, c1: i, c2: o } = r.frobeniusMap(e.c1, t), a = this.FROBENIUS_COEFFICIENTS[t % 12];
    return {
      c0: r.frobeniusMap(e.c0, t),
      c1: r.create({
        c0: n.mul(s, a),
        c1: n.mul(i, a),
        c2: n.mul(o, a)
      })
    };
  }
  mulByFp2({ c0: e, c1: t }, r) {
    const { Fp6: n } = this;
    return {
      c0: n.mulByFp2(e, r),
      c1: n.mulByFp2(t, r)
    };
  }
  conjugate({ c0: e, c1: t }) {
    return {
      c0: e,
      c1: this.Fp6.neg(t)
    };
  }
  mul014({ c0: e, c1: t }, r, n, s) {
    const { Fp6: i } = this, { Fp2: o } = i;
    let a = i.mul01(e, r, n), c = i.mul1(t, s);
    return {
      c0: i.add(i.mulByNonresidue(c), a),
      c1: i.sub(i.sub(i.mul01(i.add(t, e), r, o.add(n, s)), a), c)
    };
  }
  mul034({ c0: e, c1: t }, r, n, s) {
    const { Fp6: i } = this, { Fp2: o } = i, a = i.create({
      c0: o.mul(e.c0, r),
      c1: o.mul(e.c1, r),
      c2: o.mul(e.c2, r)
    }), c = i.mul01(t, n, s), d = i.mul01(i.add(e, t), o.add(r, n), s);
    return {
      c0: i.add(i.mulByNonresidue(c), a),
      c1: i.sub(d, i.add(a, c))
    };
  }
  _cyclotomicSquare({ c0: e, c1: t }) {
    const { Fp6: r } = this, { Fp2: n } = r, { c0: s, c1: i, c2: o } = e, { c0: a, c1: c, c2: d } = t, { first: f, second: l } = n.Fp4Square(s, c), { first: u, second: h } = n.Fp4Square(a, o), { first: p, second: y } = n.Fp4Square(i, d), w = n.mulByNonresidue(y);
    return {
      c0: r.create({
        c0: n.add(n.mul(n.sub(f, s), Ae), f),
        c1: n.add(n.mul(n.sub(u, i), Ae), u),
        c2: n.add(n.mul(n.sub(p, o), Ae), p)
      }),
      c1: r.create({
        c0: n.add(n.mul(n.add(w, a), Ae), w),
        c1: n.add(n.mul(n.add(l, c), Ae), l),
        c2: n.add(n.mul(n.add(h, d), Ae), h)
      })
    };
  }
  _cyclotomicExp(e, t) {
    let r = this.ONE;
    for (let n = this.X_LEN - 1; n >= 0; n--)
      r = this._cyclotomicSquare(r), wh(t, n) && (r = this.mul(r, e));
    return r;
  }
};
function Jh(e) {
  const t = Bt(e.ORDER), r = new zh(t, e), n = new Xh(r);
  return {
    Fp: t,
    Fp2: r,
    Fp6: n,
    Fp12: new Wh(n, e)
  };
}
var Se = BigInt(0), as = BigInt(1), Ye = BigInt(2), ws = BigInt(3), mn = BigInt(4), Pt = BigInt("0xd201000000010000"), Qh = pn(Pt), cr = {
  p: BigInt("0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaab"),
  n: BigInt("0x73eda753299d7d483339d80809a1d80553bda402fffe5bfeffffffff00000001"),
  h: BigInt("0x396c8c005555e1568c00aaab0000aaab"),
  a: Se,
  b: mn,
  Gx: BigInt("0x17f1d3a73197d7942695638c4fa9ac0fc3688c4f9774b905a14e3a3f171bac586c55e83ff97a1aeffb3af00adb22c6bb"),
  Gy: BigInt("0x08b3f481e3aaa0f1a09e30ed741d8ae4fcf5e095d5d00af600db18cb2c04b3edd03cc744a2888ae40caa232946c5e7e1")
}, e0 = Bt(cr.n, {
  modFromBytes: !0,
  isLE: !0
}), { Fp: k, Fp2: K, Fp6: t0, Fp12: Y } = Jh({
  ORDER: cr.p,
  X_LEN: Qh,
  FP2_NONRESIDUE: [as, as],
  Fp2mulByB: ({ c0: e, c1: t }) => {
    const r = k.mul(e, mn), n = k.mul(t, mn);
    return {
      c0: k.sub(r, n),
      c1: k.add(r, n)
    };
  },
  Fp12finalExponentiate: (e) => {
    const t = Pt, r = Y.div(Y.frobeniusMap(e, 6), e), n = Y.mul(Y.frobeniusMap(r, 2), r), s = Y.conjugate(Y._cyclotomicExp(n, t)), i = Y.mul(Y.conjugate(Y._cyclotomicSquare(n)), s), o = Y.conjugate(Y._cyclotomicExp(i, t)), a = Y.conjugate(Y._cyclotomicExp(o, t)), c = Y.mul(Y.conjugate(Y._cyclotomicExp(a, t)), Y._cyclotomicSquare(s)), d = Y.conjugate(Y._cyclotomicExp(c, t)), f = Y.frobeniusMap(Y.mul(s, a), 2), l = Y.frobeniusMap(Y.mul(o, n), 3), u = Y.frobeniusMap(Y.mul(c, Y.conjugate(n)), 1), h = Y.mul(Y.mul(d, Y.conjugate(i)), n);
    return Y.mul(Y.mul(Y.mul(f, l), u), h);
  }
}), { G2psi: Qo, G2psi2: r0 } = Yh(k, K, K.div(K.ONE, K.NONRESIDUE)), Vs = Object.freeze({
  DST: "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_",
  encodeDST: "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_",
  p: k.ORDER,
  m: 2,
  k: 128,
  expand: "xmd",
  hash: ke
}), no = {
  p: K.ORDER,
  n: cr.n,
  h: BigInt("0x5d543a95414e7f1091d50792876a202cd91de4547085abaa68a205b2e5a7ddfa628f1cb4d9e82ef21537e293a6691ae1616ec6e786f0c70cf1c38e31c7238e5"),
  a: K.ZERO,
  b: K.fromBigTuple([mn, mn]),
  Gx: K.fromBigTuple([BigInt("0x024aa2b2f08f0a91260805272dc51051c6e47ad4fa403b02b4510b647ae3d1770bac0326a805bbefd48056c8c121bdb8"), BigInt("0x13e02b6052719f607dacd3a088274f65596bd0d09920b61ab5da61bbdc7f5049334cf11213945d57e5ac7d055d042b7e")]),
  Gy: K.fromBigTuple([BigInt("0x0ce5d527727d6e118cc9cdc6da2e351aadfd9baa8cbdd3a76d429a695160d12c923ac9cc3baca289e193548608b82801"), BigInt("0x0606c4a02ea734cc32acd2b02bc28b99cb3e287e85a763af267492ab572e99ab3f370d275cec1da1aaa9075ff05f79be")])
}, Es = In(k.toBytes(Se), {
  infinity: !0,
  compressed: !0
});
function vs(e) {
  e = e.slice();
  const t = e[0] & 224, r = !!(t >> 7 & 1), n = !!(t >> 6 & 1), s = !!(t >> 5 & 1);
  return e[0] &= 31, {
    compressed: r,
    infinity: n,
    sort: s,
    value: e
  };
}
function In(e, t) {
  if (e[0] & 224) throw new Error("setMask: non-empty mask");
  return t.compressed && (e[0] |= 128), t.infinity && (e[0] |= 64), t.sort && (e[0] |= 32), e;
}
function n0(e, t, r) {
  const { BYTES: n, ORDER: s } = k, i = t.is0(), { x: o, y: a } = t.toAffine();
  if (r) {
    if (i) return Es.slice();
    const c = !!(a * Ye / s);
    return In(ve(o, n), {
      compressed: !0,
      sort: c
    });
  } else return i ? J(Uint8Array.of(64), new Uint8Array(2 * n - 1)) : J(ve(o, n), ve(a, n));
}
function $s(e) {
  e.assertValidity();
  const { BYTES: t, ORDER: r } = k, { x: n, y: s } = e.toAffine();
  if (e.is0()) return Es.slice();
  const i = !!(s * Ye / r);
  return In(ve(n, t), {
    compressed: !0,
    sort: i
  });
}
function s0(e) {
  const { compressed: t, infinity: r, sort: n, value: s } = vs(e), { BYTES: i, ORDER: o } = k;
  if (s.length === 48 && t) {
    const a = ct(s), c = k.create(a & br(k.BITS));
    if (r) {
      if (c !== Se) throw new Error("invalid G1 point: non-empty, at infinity, with compression");
      return {
        x: Se,
        y: Se
      };
    }
    const d = k.add(k.pow(c, ws), k.create(cr.b));
    let f = k.sqrt(d);
    if (!f) throw new Error("invalid G1 point: compressed point");
    return f * Ye / o !== BigInt(n) && (f = k.neg(f)), {
      x: k.create(c),
      y: k.create(f)
    };
  } else if (s.length === 96 && !t) {
    const a = ct(s.subarray(0, i)), c = ct(s.subarray(i));
    if (r) {
      if (a !== Se || c !== Se) throw new Error("G1: non-empty point at infinity");
      return _s.G1.Point.ZERO.toAffine();
    }
    return {
      x: k.create(a),
      y: k.create(c)
    };
  } else throw new Error("invalid G1 point: expected 48/96 bytes");
}
function ea(e) {
  const { infinity: t, sort: r, value: n } = vs(Ie("signatureHex", e, 48)), s = k.ORDER, i = _s.G1.Point, o = ct(n);
  if (t) return i.ZERO;
  const a = k.create(o & br(k.BITS)), c = k.add(k.pow(a, ws), k.create(cr.b));
  let d = k.sqrt(c);
  if (!d) throw new Error("invalid G1 point: compressed");
  const f = BigInt(r);
  d * Ye / s !== f && (d = k.neg(d));
  const l = i.fromAffine({
    x: a,
    y: d
  });
  return l.assertValidity(), l;
}
function i0(e, t, r) {
  const { BYTES: n, ORDER: s } = k, i = t.is0(), { x: o, y: a } = t.toAffine();
  if (r) {
    if (i) return J(Es, ve(Se, n));
    const c = !!(a.c1 === Se ? a.c0 * Ye / s : a.c1 * Ye / s);
    return J(In(ve(o.c1, n), {
      compressed: !0,
      sort: c
    }), ve(o.c0, n));
  } else {
    if (i) return J(Uint8Array.of(64), new Uint8Array(4 * n - 1));
    const { re: c, im: d } = K.reim(o), { re: f, im: l } = K.reim(a);
    return J(ve(d, n), ve(c, n), ve(l, n), ve(f, n));
  }
}
function js(e) {
  e.assertValidity();
  const { BYTES: t } = k;
  if (e.is0()) return J(Es, ve(Se, t));
  const { x: r, y: n } = e.toAffine(), { re: s, im: i } = K.reim(r), { re: o, im: a } = K.reim(n), d = !!((a > Se ? a * Ye : o * Ye) / k.ORDER & as), f = s;
  return J(In(ve(i, t), {
    sort: d,
    compressed: !0
  }), ve(f, t));
}
function o0(e) {
  const { BYTES: t, ORDER: r } = k, { compressed: n, infinity: s, sort: i, value: o } = vs(e);
  if (!n && !s && i || !n && s && i || i && s && n) throw new Error("invalid encoding flag: " + (e[0] & 224));
  const a = (c, d, f) => ct(c.slice(d, f));
  if (o.length === 96 && n) {
    if (s) {
      if (o.reduce((p, y) => p !== 0 ? y + 1 : y, 0) > 0) throw new Error("invalid G2 point: compressed");
      return {
        x: K.ZERO,
        y: K.ZERO
      };
    }
    const c = a(o, 0, t), d = a(o, t, 2 * t), f = K.create({
      c0: k.create(d),
      c1: k.create(c)
    }), l = K.add(K.pow(f, ws), no.b);
    let u = K.sqrt(l);
    const h = u.c1 === Se ? u.c0 * Ye / r : u.c1 * Ye / r ? as : Se;
    return u = i && h > 0 ? u : K.neg(u), {
      x: f,
      y: u
    };
  } else if (o.length === 192 && !n) {
    if (s) {
      if (o.reduce((u, h) => u !== 0 ? h + 1 : h, 0) > 0) throw new Error("invalid G2 point: uncompressed");
      return {
        x: K.ZERO,
        y: K.ZERO
      };
    }
    const c = a(o, 0 * t, 1 * t), d = a(o, 1 * t, 2 * t), f = a(o, 2 * t, 3 * t), l = a(o, 3 * t, 4 * t);
    return {
      x: K.fromBigTuple([d, c]),
      y: K.fromBigTuple([l, f])
    };
  } else throw new Error("invalid G2 point: expected 96/192 bytes");
}
function ta(e) {
  const { ORDER: t } = k, { infinity: r, sort: n, value: s } = vs(Ie("signatureHex", e)), i = _s.G2.Point, o = s.length / 2;
  if (o !== 48 && o !== 96) throw new Error("invalid compressed signature length, expected 96/192 bytes");
  const a = ct(s.slice(0, o)), c = ct(s.slice(o));
  if (r) return i.ZERO;
  const d = k.create(a & br(k.BITS)), f = k.create(c), l = K.create({
    c0: f,
    c1: d
  }), u = K.add(K.pow(l, ws), no.b);
  let h = K.sqrt(u);
  if (!h) throw new Error("Failed to find a square root");
  const { re: p, im: y } = K.reim(h), w = BigInt(n), m = y > Se && y * Ye / t !== w, g = y === Se && p * Ye / t !== w;
  (m || g) && (h = K.neg(h));
  const E = i.fromAffine({
    x: l,
    y: h
  });
  return E.assertValidity(), E;
}
var _s = Zh({
  fields: {
    Fp: k,
    Fp2: K,
    Fp6: t0,
    Fp12: Y,
    Fr: e0
  },
  G1: {
    ...cr,
    Fp: k,
    htfDefaults: {
      ...Vs,
      m: 1,
      DST: "BLS_SIG_BLS12381G1_XMD:SHA-256_SSWU_RO_NUL_"
    },
    wrapPrivateKey: !0,
    allowInfinityPoint: !0,
    isTorsionFree: (e, t) => {
      const r = BigInt("0x5f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffefffe"), n = new e(k.mul(t.X, r), t.Y, t.Z);
      return t.multiplyUnsafe(Pt).negate().multiplyUnsafe(Pt).equals(n);
    },
    clearCofactor: (e, t) => t.multiplyUnsafe(Pt).add(t),
    mapToCurve: d0,
    fromBytes: s0,
    toBytes: n0,
    ShortSignature: {
      fromBytes(e) {
        return Pe(e), ea(e);
      },
      fromHex(e) {
        return ea(e);
      },
      toBytes(e) {
        return $s(e);
      },
      toRawBytes(e) {
        return $s(e);
      },
      toHex(e) {
        return te($s(e));
      }
    }
  },
  G2: {
    ...no,
    Fp: K,
    hEff: BigInt("0xbc69f08f2ee75b3584c6a0ea91b352888e2a8e9145ad7689986ff031508ffe1329c2f178731db956d82bf015d1212b02ec0ec69d7477c1ae954cbc06689f6a359894c0adebbf6b4e8020005aaa95551"),
    htfDefaults: { ...Vs },
    wrapPrivateKey: !0,
    allowInfinityPoint: !0,
    mapToCurve: l0,
    isTorsionFree: (e, t) => t.multiplyUnsafe(Pt).negate().equals(Qo(e, t)),
    clearCofactor: (e, t) => {
      const r = Pt;
      let n = t.multiplyUnsafe(r).negate(), s = Qo(e, t), i = t.double();
      return i = r0(e, i), i = i.subtract(s), s = n.add(s), s = s.multiplyUnsafe(r).negate(), i = i.add(s), i = i.subtract(n), i.subtract(t);
    },
    fromBytes: o0,
    toBytes: i0,
    Signature: {
      fromBytes(e) {
        return Pe(e), ta(e);
      },
      fromHex(e) {
        return ta(e);
      },
      toBytes(e) {
        return js(e);
      },
      toRawBytes(e) {
        return js(e);
      },
      toHex(e) {
        return te(js(e));
      }
    }
  },
  params: {
    ateLoopSize: Pt,
    r: cr.n,
    xNegative: !0,
    twistType: "multiplicative"
  },
  htfDefaults: Vs,
  hash: ke
}), a0 = Sf(K, [
  [
    ["0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97d6", "0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97d6"],
    ["0x0", "0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71a"],
    ["0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71e", "0x8ab05f8bdd54cde190937e76bc3e447cc27c3d6fbd7063fcd104635a790520c0a395554e5c6aaaa9354ffffffffe38d"],
    ["0x171d6541fa38ccfaed6dea691f5fb614cb14b4e7f4e810aa22d6108f142b85757098e38d0f671c7188e2aaaaaaaa5ed1", "0x0"]
  ],
  [
    ["0x0", "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa63"],
    ["0xc", "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa9f"],
    ["0x1", "0x0"]
  ],
  [
    ["0x1530477c7ab4113b59a4c18b076d11930f7da5d4a07f649bf54439d87d27e500fc8c25ebf8c92f6812cfc71c71c6d706", "0x1530477c7ab4113b59a4c18b076d11930f7da5d4a07f649bf54439d87d27e500fc8c25ebf8c92f6812cfc71c71c6d706"],
    ["0x0", "0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97be"],
    ["0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71c", "0x8ab05f8bdd54cde190937e76bc3e447cc27c3d6fbd7063fcd104635a790520c0a395554e5c6aaaa9354ffffffffe38f"],
    ["0x124c9ad43b6cf79bfbf7043de3811ad0761b0f37a1e26286b0e977c69aa274524e79097a56dc4bd9e1b371c71c718b10", "0x0"]
  ],
  [
    ["0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa8fb", "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa8fb"],
    ["0x0", "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa9d3"],
    ["0x12", "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa99"],
    ["0x1", "0x0"]
  ]
].map((e) => e.map((t) => K.fromBigTuple(t.map(BigInt))))), c0 = Sf(k, [
  [
    "0x11a05f2b1e833340b809101dd99815856b303e88a2d7005ff2627b56cdb4e2c85610c2d5f2e62d6eaeac1662734649b7",
    "0x17294ed3e943ab2f0588bab22147a81c7c17e75b2f6a8417f565e33c70d1e86b4838f2a6f318c356e834eef1b3cb83bb",
    "0xd54005db97678ec1d1048c5d10a9a1bce032473295983e56878e501ec68e25c958c3e3d2a09729fe0179f9dac9edcb0",
    "0x1778e7166fcc6db74e0609d307e55412d7f5e4656a8dbf25f1b33289f1b330835336e25ce3107193c5b388641d9b6861",
    "0xe99726a3199f4436642b4b3e4118e5499db995a1257fb3f086eeb65982fac18985a286f301e77c451154ce9ac8895d9",
    "0x1630c3250d7313ff01d1201bf7a74ab5db3cb17dd952799b9ed3ab9097e68f90a0870d2dcae73d19cd13c1c66f652983",
    "0xd6ed6553fe44d296a3726c38ae652bfb11586264f0f8ce19008e218f9c86b2a8da25128c1052ecaddd7f225a139ed84",
    "0x17b81e7701abdbe2e8743884d1117e53356de5ab275b4db1a682c62ef0f2753339b7c8f8c8f475af9ccb5618e3f0c88e",
    "0x80d3cf1f9a78fc47b90b33563be990dc43b756ce79f5574a2c596c928c5d1de4fa295f296b74e956d71986a8497e317",
    "0x169b1f8e1bcfa7c42e0c37515d138f22dd2ecb803a0c5c99676314baf4bb1b7fa3190b2edc0327797f241067be390c9e",
    "0x10321da079ce07e272d8ec09d2565b0dfa7dccdde6787f96d50af36003b14866f69b771f8c285decca67df3f1605fb7b",
    "0x6e08c248e260e70bd1e962381edee3d31d79d7e22c837bc23c0bf1bc24c6b68c24b1b80b64d391fa9c8ba2e8ba2d229"
  ],
  [
    "0x8ca8d548cff19ae18b2e62f4bd3fa6f01d5ef4ba35b48ba9c9588617fc8ac62b558d681be343df8993cf9fa40d21b1c",
    "0x12561a5deb559c4348b4711298e536367041e8ca0cf0800c0126c2588c48bf5713daa8846cb026e9e5c8276ec82b3bff",
    "0xb2962fe57a3225e8137e629bff2991f6f89416f5a718cd1fca64e00b11aceacd6a3d0967c94fedcfcc239ba5cb83e19",
    "0x3425581a58ae2fec83aafef7c40eb545b08243f16b1655154cca8abc28d6fd04976d5243eecf5c4130de8938dc62cd8",
    "0x13a8e162022914a80a6f1d5f43e7a07dffdfc759a12062bb8d6b44e833b306da9bd29ba81f35781d539d395b3532a21e",
    "0xe7355f8e4e667b955390f7f0506c6e9395735e9ce9cad4d0a43bcef24b8982f7400d24bc4228f11c02df9a29f6304a5",
    "0x772caacf16936190f3e0c63e0596721570f5799af53a1894e2e073062aede9cea73b3538f0de06cec2574496ee84a3a",
    "0x14a7ac2a9d64a8b230b3f5b074cf01996e7f63c21bca68a81996e1cdf9822c580fa5b9489d11e2d311f7d99bbdcc5a5e",
    "0xa10ecf6ada54f825e920b3dafc7a3cce07f8d1d7161366b74100da67f39883503826692abba43704776ec3a79a1d641",
    "0x95fc13ab9e92ad4476d6e3eb3a56680f682b4ee96f7d03776df533978f31c1593174e4b4b7865002d6384d168ecdd0a",
    "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
  ],
  [
    "0x90d97c81ba24ee0259d1f094980dcfa11ad138e48a869522b52af6c956543d3cd0c7aee9b3ba3c2be9845719707bb33",
    "0x134996a104ee5811d51036d776fb46831223e96c254f383d0f906343eb67ad34d6c56711962fa8bfe097e75a2e41c696",
    "0xcc786baa966e66f4a384c86a3b49942552e2d658a31ce2c344be4b91400da7d26d521628b00523b8dfe240c72de1f6",
    "0x1f86376e8981c217898751ad8746757d42aa7b90eeb791c09e4a3ec03251cf9de405aba9ec61deca6355c77b0e5f4cb",
    "0x8cc03fdefe0ff135caf4fe2a21529c4195536fbe3ce50b879833fd221351adc2ee7f8dc099040a841b6daecf2e8fedb",
    "0x16603fca40634b6a2211e11db8f0a6a074a7d0d4afadb7bd76505c3d3ad5544e203f6326c95a807299b23ab13633a5f0",
    "0x4ab0b9bcfac1bbcb2c977d027796b3ce75bb8ca2be184cb5231413c4d634f3747a87ac2460f415ec961f8855fe9d6f2",
    "0x987c8d5333ab86fde9926bd2ca6c674170a05bfe3bdd81ffd038da6c26c842642f64550fedfe935a15e4ca31870fb29",
    "0x9fc4018bd96684be88c9e221e4da1bb8f3abd16679dc26c1e8b6e6a1f20cabe69d65201c78607a360370e577bdba587",
    "0xe1bba7a1186bdb5223abde7ada14a23c42a0ca7915af6fe06985e7ed1e4d43b9b3f7055dd4eba6f2bafaaebca731c30",
    "0x19713e47937cd1be0dfd0b8f1d43fb93cd2fcbcb6caf493fd1183e416389e61031bf3a5cce3fbafce813711ad011c132",
    "0x18b46a908f36f6deb918c143fed2edcc523559b8aaf0c2462e6bfe7f911f643249d9cdf41b44d606ce07c8a4d0074d8e",
    "0xb182cac101b9399d155096004f53f447aa7b12a3426b08ec02710e807b4633f06c851c1919211f20d4c04f00b971ef8",
    "0x245a394ad1eca9b72fc00ae7be315dc757b3b080d4c158013e6632d3c40659cc6cf90ad1c232a6442d9d3f5db980133",
    "0x5c129645e44cf1102a159f748c4a3fc5e673d81d7e86568d9ab0f5d396a7ce46ba1049b6579afb7866b1e715475224b",
    "0x15e6be4e990f03ce4ea50b3b42df2eb5cb181d8f84965a3957add4fa95af01b2b665027efec01c7704b456be69c8b604"
  ],
  [
    "0x16112c4c3a9c98b252181140fad0eae9601a6de578980be6eec3232b5be72e7a07f3688ef60c206d01479253b03663c1",
    "0x1962d75c2381201e1a0cbd6c43c348b885c84ff731c4d59ca4a10356f453e01f78a4260763529e3532f6102c2e49a03d",
    "0x58df3306640da276faaae7d6e8eb15778c4855551ae7f310c35a5dd279cd2eca6757cd636f96f891e2538b53dbf67f2",
    "0x16b7d288798e5395f20d23bf89edb4d1d115c5dbddbcd30e123da489e726af41727364f2c28297ada8d26d98445f5416",
    "0xbe0e079545f43e4b00cc912f8228ddcc6d19c9f0f69bbb0542eda0fc9dec916a20b15dc0fd2ededda39142311a5001d",
    "0x8d9e5297186db2d9fb266eaac783182b70152c65550d881c5ecd87b6f0f5a6449f38db9dfa9cce202c6477faaf9b7ac",
    "0x166007c08a99db2fc3ba8734ace9824b5eecfdfa8d0cf8ef5dd365bc400a0051d5fa9c01a58b1fb93d1a1399126a775c",
    "0x16a3ef08be3ea7ea03bcddfabba6ff6ee5a4375efa1f4fd7feb34fd206357132b920f5b00801dee460ee415a15812ed9",
    "0x1866c8ed336c61231a1be54fd1d74cc4f9fb0ce4c6af5920abc5750c4bf39b4852cfe2f7bb9248836b233d9d55535d4a",
    "0x167a55cda70a6e1cea820597d94a84903216f763e13d87bb5308592e7ea7d4fbc7385ea3d529b35e346ef48bb8913f55",
    "0x4d2f259eea405bd48f010a01ad2911d9c6dd039bb61a6290e591b36e636a5c871a5c29f4f83060400f8b49cba8f6aa8",
    "0xaccbb67481d033ff5852c1e48c50c477f94ff8aefce42d28c0f9a88cea7913516f968986f7ebbea9684b529e2561092",
    "0xad6b9514c767fe3c3613144b45f1496543346d98adf02267d5ceef9a00d9b8693000763e3b90ac11e99b138573345cc",
    "0x2660400eb2e4f3b628bdd0d53cd76f2bf565b94e72927c1cb748df27942480e420517bd8714cc80d1fadc1326ed06f7",
    "0xe0fa1d816ddc03e6b24255e0d7819c171c40f65e273b853324efcd6356caa205ca2f570f13497804415473a1d634b8f",
    "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
  ]
].map((e) => e.map((t) => BigInt(t)))), u0 = Of(k, {
  A: k.create(BigInt("0x144698a3b8e9433d693a02c96d4982b0ea985383ee66a8d8e8981aefd881ac98936f8da0e0f97f5cf428082d584c1d")),
  B: k.create(BigInt("0x12e2908d11688030018b12e8753eee3b2016c1f0f24f4070a0b9c14fcef35ef55a23215a316ceaa5d1cc48e98e172be0")),
  Z: k.create(BigInt(11))
}), f0 = Of(K, {
  A: K.create({
    c0: k.create(Se),
    c1: k.create(BigInt(240))
  }),
  B: K.create({
    c0: k.create(BigInt(1012)),
    c1: k.create(BigInt(1012))
  }),
  Z: K.create({
    c0: k.create(BigInt(-2)),
    c1: k.create(BigInt(-1))
  })
});
function d0(e) {
  const { x: t, y: r } = u0(k.create(e[0]));
  return c0(t, r);
}
function l0(e) {
  const { x: t, y: r } = f0(K.fromBigTuple(e));
  return a0(t, r);
}
function h0(e, t, r) {
  const n = typeof e == "string" ? e : te(e), s = typeof t == "string" ? t : te(t), i = typeof r == "string" ? r : te(r);
  return _s.verifyShortSignature(s, i, n);
}
var p0 = BigInt(1e6), Cf = (e) => we(new $r(e)), so = (e) => {
  const t = Cf(e) / p0;
  return new Date(Number(t));
}, ra = 60 * 1e3, b0 = 1440, y0 = 5, m0 = 5, g0 = 30 * b0, xe;
(function(e) {
  e[e.Empty = 0] = "Empty", e[e.Fork = 1] = "Fork", e[e.Labeled = 2] = "Labeled", e[e.Leaf = 3] = "Leaf", e[e.Pruned = 4] = "Pruned";
})(xe || (xe = {}));
function w0(e, t) {
  for (let r = 0; r < e.length; r++) if (e[r] > t[r]) return !0;
  return !1;
}
var io = class Kn {
  #e = !1;
  #t = void 0;
  static async create(t) {
    const r = Kn.createUnverified(t);
    return await r.verify(), r;
  }
  static createUnverified(t) {
    return new Kn(t.certificate, t.rootKey, t.canisterId, t.blsVerify ?? h0, t.maxAgeInMinutes, t.disableTimeVerification, t.agent);
  }
  constructor(t, r, n, s, i = y0, o = !1, a) {
    this._rootKey = r, this._canisterId = n, this._blsVerify = s, this._maxAgeInMinutes = i, this.#e = o, this.cert = it(t), a && "getTimeDiffMsecs" in a && "hasSyncedTime" in a && "syncTime" in a && (this.#t = a);
  }
  lookup_path(t) {
    return Sn(t, this.cert.tree);
  }
  lookup_subtree(t) {
    return oo(t, this.cert.tree);
  }
  async verify() {
    const t = await Hn(this.cert.tree), r = await this._checkDelegationAndGetKey(this.cert.delegation), n = this.cert.signature, s = v0(r), i = J(Wr("ic-state-root"), t), o = Ve(this.lookup_path(["time"]));
    if (!o) throw pe.fromCode(new kn("Certificate does not contain a time"));
    if (!this.#e) {
      const a = this.#t?.getTimeDiffMsecs() ?? 0, c = this._maxAgeInMinutes * ra, d = /* @__PURE__ */ new Date(), f = d.getTime() + a, l = f - c, u = f + m0 * ra, h = so(o), p = h.getTime() < l, y = h.getTime() > u;
      if ((p || y) && this.#t && !this.#t.hasSyncedTime())
        return await this.#t.syncTime(this._canisterId), await this.verify();
      if (p) throw st.fromCode(new pi(this._maxAgeInMinutes, h, d, a, "past"));
      if (y)
        throw this.#t?.hasSyncedTime() ? Ge.fromCode(new gt("System time has been synced with the IC network, but certificate is still too far in the future.")) : st.fromCode(new pi(5, h, d, a, "future"));
    }
    try {
      if (!await this._blsVerify(s, n, i)) throw st.fromCode(new kn("Invalid signature"));
    } catch (a) {
      throw st.fromCode(new kn("Signature verification failed", a));
    }
  }
  async _checkDelegationAndGetKey(t) {
    if (!t) return this._rootKey;
    const r = Kn.createUnverified({
      certificate: t.certificate,
      rootKey: this._rootKey,
      canisterId: this._canisterId,
      blsVerify: this._blsVerify,
      disableTimeVerification: this.#e,
      maxAgeInMinutes: g0,
      agent: this.#t
    });
    if (r.cert.delegation) throw pe.fromCode(new dl());
    await r.verify();
    const n = t.subnet_id, s = X.fromUint8Array(n);
    if (!Rf({
      canisterId: this._canisterId,
      subnetId: s,
      tree: r.cert.tree
    })) throw st.fromCode(new Ec(this._canisterId, s));
    const i = Ve(r.lookup_path([
      "subnet",
      n,
      "public_key"
    ]));
    if (!i) throw st.fromCode(new ll(`Could not find subnet key for subnet ID ${s.toText()}`));
    return i;
  }
}, zr = at("308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100"), E0 = 96;
function v0(e) {
  const t = zr.byteLength + E0;
  if (e.byteLength !== t) throw pe.fromCode(new Sc(t, e.byteLength));
  const r = e.slice(0, zr.byteLength);
  if (!ms(r, zr)) throw pe.fromCode(new hl(zr, r));
  return e.slice(zr.byteLength);
}
function Ve(e) {
  if (e.status === Ze.Found && e.value instanceof Uint8Array)
    return e.value;
}
async function Hn(e) {
  switch (e[0]) {
    case xe.Empty:
      return ke(Wr("ic-hashtree-empty"));
    case xe.Pruned:
      return e[1];
    case xe.Leaf:
      return ke(J(Wr("ic-hashtree-leaf"), e[1]));
    case xe.Labeled:
      return ke(J(Wr("ic-hashtree-labeled"), e[1], await Hn(e[2])));
    case xe.Fork:
      return ke(J(Wr("ic-hashtree-fork"), await Hn(e[1]), await Hn(e[2])));
    default:
      throw Cr;
  }
}
function Wr(e) {
  return J(new Uint8Array([e.length]), new TextEncoder().encode(e));
}
function Af(e) {
  return typeof e[0] == "string" ? ae(e[0]) : e[0];
}
var Ze;
(function(e) {
  e.Unknown = "Unknown", e.Absent = "Absent", e.Found = "Found", e.Error = "Error";
})(Ze || (Ze = {}));
var Ur;
(function(e) {
  e.Absent = "Absent", e.Unknown = "Unknown", e.Found = "Found";
})(Ur || (Ur = {}));
var ie;
(function(e) {
  e.Absent = "Absent", e.Unknown = "Unknown", e.Found = "Found", e.Less = "Less", e.Greater = "Greater";
})(ie || (ie = {}));
function Sn(e, t) {
  if (e.length === 0) switch (t[0]) {
    case xe.Empty:
      return { status: Ze.Absent };
    case xe.Leaf:
      if (!t[1]) throw Ge.fromCode(new ji("Invalid tree structure for leaf"));
      if (t[1] instanceof Uint8Array) return {
        status: Ze.Found,
        value: t[1].slice(t[1].byteOffset, t[1].byteLength + t[1].byteOffset)
      };
      throw Cr;
    case xe.Pruned:
      return { status: Ze.Unknown };
    case xe.Labeled:
    case xe.Fork:
      return { status: Ze.Error };
    default:
      throw Cr;
  }
  const r = rn(Af(e), t);
  switch (r.status) {
    case ie.Found:
      return Sn(e.slice(1), r.value);
    case ie.Absent:
    case ie.Greater:
    case ie.Less:
      return { status: Ze.Absent };
    case ie.Unknown:
      return { status: Ze.Unknown };
    default:
      throw Cr;
  }
}
function oo(e, t) {
  if (e.length === 0) return {
    status: Ur.Found,
    value: t
  };
  const r = rn(Af(e), t);
  switch (r.status) {
    case ie.Found:
      return oo(e.slice(1), r.value);
    case ie.Unknown:
      return { status: Ur.Unknown };
    case ie.Absent:
    case ie.Greater:
    case ie.Less:
      return { status: Ur.Absent };
    default:
      throw Cr;
  }
}
function Ci(e) {
  switch (e[0]) {
    case xe.Empty:
      return [];
    case xe.Fork:
      return Ci(e[1]).concat(Ci(e[2]));
    default:
      return [e];
  }
}
function rn(e, t) {
  switch (t[0]) {
    case xe.Labeled:
      return w0(e, t[1]) ? { status: ie.Greater } : ms(e, t[1]) ? {
        status: ie.Found,
        value: t[2]
      } : { status: ie.Less };
    case xe.Fork: {
      const r = rn(e, t[1]);
      switch (r.status) {
        case ie.Greater: {
          const n = rn(e, t[2]);
          return n.status === ie.Less ? { status: ie.Absent } : n;
        }
        case ie.Unknown: {
          const n = rn(e, t[2]);
          return n.status === ie.Less ? { status: ie.Unknown } : n;
        }
        default:
          return r;
      }
    }
    case xe.Pruned:
      return { status: ie.Unknown };
    default:
      return { status: ie.Absent };
  }
}
function Rf(e) {
  const { canisterId: t, subnetId: r, tree: n } = e, s = Sn([
    "subnet",
    r.toUint8Array(),
    "canister_ranges"
  ], n);
  if (s.status !== Ze.Found) throw pe.fromCode(new zn(`Could not find canister ranges for subnet ${r.toText()}`, s.status));
  if (!(s.value instanceof Uint8Array)) throw pe.fromCode(new xc(`Could not find canister ranges for subnet ${r.toText()}`));
  return it(s.value).map((i) => [X.fromUint8Array(i[0]), X.fromUint8Array(i[1])]).some((i) => i[0].ltEq(t) && i[1].gtEq(t));
}
var na = async (e) => {
  const { agent: t, paths: r, disableCertificateTimeVerification: n = !1 } = e, s = X.from(e.canisterId), i = [...new Set(r)], o = /* @__PURE__ */ new Map(), a = i.map((c, d) => {
    const f = x0(c, s);
    return (async () => {
      try {
        if (t.rootKey === null) throw He.fromCode(new bs());
        const l = t.rootKey, u = await t.readState(s, { paths: [f] }), h = await io.create({
          certificate: u.certificate,
          rootKey: l,
          canisterId: s,
          disableTimeVerification: n,
          agent: t
        }), p = (m, g) => g === "subnet" ? {
          path: g,
          data: _0(u.certificate, s, l)
        } : {
          path: g,
          data: Ve(m.lookup_path(f))
        }, { path: y, data: w } = p(h, i[d]);
        if (!w)
          console.warn(`Expected to find result for path ${y}, but instead found nothing.`), typeof y == "string" ? o.set(y, null) : o.set(y.key, null);
        else switch (y) {
          case "time":
            o.set(y, so(w));
            break;
          case "controllers":
            o.set(y, B0(w));
            break;
          case "module_hash":
            o.set(y, te(w));
            break;
          case "subnet":
            o.set(y, w);
            break;
          case "candid":
            o.set(y, new TextDecoder().decode(w));
            break;
          default:
            if (typeof y != "string" && "key" in y && "path" in y) switch (y.decodeStrategy) {
              case "raw":
                o.set(y.key, w);
                break;
              case "leb128":
                o.set(y.key, Cf(w));
                break;
              case "cbor":
                o.set(y.key, it(w));
                break;
              case "hex":
                o.set(y.key, te(w));
                break;
              case "utf-8":
                o.set(y.key, new TextDecoder().decode(w));
            }
        }
      } catch (l) {
        if (l instanceof Zt && (l.hasCode(kn) || l.hasCode(pi))) throw l;
        typeof c != "string" && "key" in c && "path" in c ? o.set(c.key, null) : o.set(c, null), console.group(), console.warn(`Expected to find result for path ${c}, but instead found nothing.`), console.warn(l), console.groupEnd();
      }
    })();
  });
  return await Promise.all(a), o;
}, _0 = (e, t, r) => {
  if (!t._isPrincipal) throw oe.fromCode(new gt("Invalid canisterId"));
  const n = it(e), s = n.tree;
  let i = n.delegation, o;
  if (i && i.subnet_id ? o = X.fromUint8Array(new Uint8Array(i.subnet_id)) : !i && typeof r < "u" ? (o = X.selfAuthenticating(new Uint8Array(r)), i = {
    subnet_id: o.toUint8Array(),
    certificate: new Uint8Array(0)
  }) : (o = X.selfAuthenticating(X.fromText("tdb26-jop6k-aogll-7ltgs-eruif-6kk7m-qpktf-gdiqx-mxtrf-vb5e6-eqe").toUint8Array()), i = {
    subnet_id: o.toUint8Array(),
    certificate: new Uint8Array(0)
  }), !Rf({
    canisterId: t,
    subnetId: o,
    tree: s
  })) throw st.fromCode(new Ec(t, o));
  const a = oo([
    "subnet",
    i.subnet_id,
    "node"
  ], s);
  if (a.status !== Ur.Found) throw pe.fromCode(new zn("Node not found", a.status));
  if (a.value instanceof Uint8Array) throw Ge.fromCode(new ji("Invalid node tree"));
  const c = Ci(a.value), d = /* @__PURE__ */ new Map();
  return c.forEach((f) => {
    const l = X.from(f[1]).toText(), u = Sn(["public_key"], f[2]);
    if (u.status !== Ze.Found) throw pe.fromCode(new zn("Public key not found", u.status));
    const h = u.value;
    if (h.byteLength !== 44) throw pe.fromCode(new Sc(44, h.byteLength));
    d.set(l, h);
  }), {
    subnetId: X.fromUint8Array(new Uint8Array(i.subnet_id)).toText(),
    nodeKeys: d
  };
}, x0 = (e, t) => {
  const r = t.toUint8Array();
  switch (e) {
    case "time":
      return [ae("time")];
    case "controllers":
      return [
        ae("canister"),
        r,
        ae("controllers")
      ];
    case "module_hash":
      return [
        ae("canister"),
        r,
        ae("module_hash")
      ];
    case "subnet":
      return [ae("subnet")];
    case "candid":
      return [
        ae("canister"),
        r,
        ae("metadata"),
        ae("candid:service")
      ];
    default:
      if ("key" in e && "path" in e) if (typeof e.path == "string" || e.path instanceof Uint8Array) {
        const n = e.path, s = typeof n == "string" ? ae(n) : n;
        return [
          ae("canister"),
          r,
          ae("metadata"),
          s
        ];
      } else return e.path;
  }
  throw Ge.fromCode(new gt(`Error while encoding your path for canister status. Please ensure that your path ${e} was formatted correctly.`));
}, B0 = (e) => it(e).map((t) => X.fromUint8Array(t)), At = BigInt(0), ge = BigInt(1), Ks = BigInt(2), I0 = BigInt(8);
function S0(e, t, r, n) {
  const s = e.sqr(r), i = e.sqr(n), o = e.add(e.mul(t.a, s), i), a = e.add(e.ONE, e.mul(t.d, e.mul(s, i)));
  return e.eql(o, a);
}
function T0(e, t = {}) {
  const r = Bf("edwards", e, t, t.FpFnLE), { Fp: n, Fn: s } = r;
  let i = r.CURVE;
  const { h: o } = i;
  Bn(t, {}, { uvRatio: "function" });
  const a = Ks << BigInt(s.BYTES * 8) - ge, c = (w) => n.create(w), d = t.uvRatio || ((w, m) => {
    try {
      return {
        isValid: !0,
        value: n.sqrt(n.div(w, m))
      };
    } catch {
      return {
        isValid: !1,
        value: At
      };
    }
  });
  if (!S0(n, i, i.Gx, i.Gy)) throw new Error("bad curve params: generator point");
  function f(w, m, g = !1) {
    const E = g ? ge : At;
    return Vo("coordinate " + w, m, E, a), m;
  }
  function l(w) {
    if (!(w instanceof p)) throw new Error("ExtendedPoint expected");
  }
  const u = bn((w, m) => {
    const { X: g, Y: E, Z: _ } = w, I = w.is0();
    m == null && (m = I ? I0 : n.inv(_));
    const S = c(g * m), B = c(E * m), U = n.mul(_, m);
    if (I) return {
      x: At,
      y: ge
    };
    if (U !== ge) throw new Error("invZ was invalid");
    return {
      x: S,
      y: B
    };
  }), h = bn((w) => {
    const { a: m, d: g } = i;
    if (w.is0()) throw new Error("bad point: ZERO");
    const { X: E, Y: _, Z: I, T: S } = w, B = c(E * E), U = c(_ * _), v = c(I * I), N = c(v * v);
    if (c(v * c(c(B * m) + U)) !== c(N + c(g * c(B * U)))) throw new Error("bad point: equation left != right (1)");
    if (c(E * _) !== c(I * S)) throw new Error("bad point: equation left != right (2)");
    return !0;
  });
  class p {
    constructor(m, g, E, _) {
      this.X = f("x", m), this.Y = f("y", g), this.Z = f("z", E, !0), this.T = f("t", _), Object.freeze(this);
    }
    static CURVE() {
      return i;
    }
    static fromAffine(m) {
      if (m instanceof p) throw new Error("extended point not allowed");
      const { x: g, y: E } = m || {};
      return f("x", g), f("y", E), new p(g, E, ge, c(g * E));
    }
    static fromBytes(m, g = !1) {
      const E = n.BYTES, { a: _, d: I } = i;
      m = ko(Nr(m, E, "point")), hn(g, "zip215");
      const S = ko(m), B = m[E - 1];
      S[E - 1] = B & -129;
      const U = ar(S);
      Vo("point.y", U, At, g ? a : n.ORDER);
      const v = c(U * U);
      let { isValid: N, value: P } = d(c(v - ge), c(I * v - _));
      if (!N) throw new Error("bad point: invalid y coordinate");
      const A = (P & ge) === ge, b = (B & 128) !== 0;
      if (!g && P === At && b) throw new Error("bad point: x=0 and x_0=1");
      return b !== A && (P = c(-P)), p.fromAffine({
        x: P,
        y: U
      });
    }
    static fromHex(m, g = !1) {
      return p.fromBytes(Ie("point", m), g);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    precompute(m = 8, g = !0) {
      return y.createCache(this, m), g || this.multiply(Ks), this;
    }
    assertValidity() {
      h(this);
    }
    equals(m) {
      l(m);
      const { X: g, Y: E, Z: _ } = this, { X: I, Y: S, Z: B } = m, U = c(g * B), v = c(I * _), N = c(E * B), P = c(S * _);
      return U === v && N === P;
    }
    is0() {
      return this.equals(p.ZERO);
    }
    negate() {
      return new p(c(-this.X), this.Y, this.Z, c(-this.T));
    }
    double() {
      const { a: m } = i, { X: g, Y: E, Z: _ } = this, I = c(g * g), S = c(E * E), B = c(Ks * c(_ * _)), U = c(m * I), v = g + E, N = c(c(v * v) - I - S), P = U + S, A = P - B, b = U - S, x = c(N * A), R = c(P * b), F = c(N * b);
      return new p(x, R, c(A * P), F);
    }
    add(m) {
      l(m);
      const { a: g, d: E } = i, { X: _, Y: I, Z: S, T: B } = this, { X: U, Y: v, Z: N, T: P } = m, A = c(_ * U), b = c(I * v), x = c(B * E * P), R = c(S * N), F = c((_ + I) * (U + v) - A - b), M = R - x, T = R + x, O = c(b - g * A), C = c(F * M), q = c(T * O), D = c(F * O);
      return new p(C, q, c(M * T), D);
    }
    subtract(m) {
      return this.add(m.negate());
    }
    multiply(m) {
      if (!s.isValidNot0(m)) throw new Error("invalid scalar: expected 1 <= sc < curve.n");
      const { p: g, f: E } = y.cached(this, m, (_) => wt(p, _));
      return wt(p, [g, E])[0];
    }
    multiplyUnsafe(m, g = p.ZERO) {
      if (!s.isValid(m)) throw new Error("invalid scalar: expected 0 <= sc < curve.n");
      return m === At ? p.ZERO : this.is0() || m === ge ? this : y.unsafe(this, m, (E) => wt(p, E), g);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(o).is0();
    }
    isTorsionFree() {
      return y.unsafe(this, i.n).is0();
    }
    toAffine(m) {
      return u(this, m);
    }
    clearCofactor() {
      return o === ge ? this : this.multiplyUnsafe(o);
    }
    toBytes() {
      const { x: m, y: g } = this.toAffine(), E = n.toBytes(g);
      return E[E.length - 1] |= m & ge ? 128 : 0, E;
    }
    toHex() {
      return te(this.toBytes());
    }
    toString() {
      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
    }
    get ex() {
      return this.X;
    }
    get ey() {
      return this.Y;
    }
    get ez() {
      return this.Z;
    }
    get et() {
      return this.T;
    }
    static normalizeZ(m) {
      return wt(p, m);
    }
    static msm(m, g) {
      return to(p, s, m, g);
    }
    _setWindowSize(m) {
      this.precompute(m);
    }
    toRawBytes() {
      return this.toBytes();
    }
  }
  p.BASE = new p(i.Gx, i.Gy, ge, c(i.Gx * i.Gy)), p.ZERO = new p(At, ge, ge, At), p.Fp = n, p.Fn = s;
  const y = new xf(p, s.BITS);
  return p.BASE.precompute(8), p;
}
var O0 = class {
  constructor(e) {
    this.ep = e;
  }
  static fromBytes(e) {
    ns();
  }
  static fromHex(e) {
    ns();
  }
  get x() {
    return this.toAffine().x;
  }
  get y() {
    return this.toAffine().y;
  }
  clearCofactor() {
    return this;
  }
  assertValidity() {
    this.ep.assertValidity();
  }
  toAffine(e) {
    return this.ep.toAffine(e);
  }
  toHex() {
    return te(this.toBytes());
  }
  toString() {
    return this.toHex();
  }
  isTorsionFree() {
    return !0;
  }
  isSmallOrder() {
    return !1;
  }
  add(e) {
    return this.assertSame(e), this.init(this.ep.add(e.ep));
  }
  subtract(e) {
    return this.assertSame(e), this.init(this.ep.subtract(e.ep));
  }
  multiply(e) {
    return this.init(this.ep.multiply(e));
  }
  multiplyUnsafe(e) {
    return this.init(this.ep.multiplyUnsafe(e));
  }
  double() {
    return this.init(this.ep.double());
  }
  negate() {
    return this.init(this.ep.negate());
  }
  precompute(e, t) {
    return this.init(this.ep.precompute(e, t));
  }
  toRawBytes() {
    return this.toBytes();
  }
};
function C0(e, t, r = {}) {
  if (typeof t != "function") throw new Error('"hash" function param is required');
  Bn(r, {}, {
    adjustScalarBytes: "function",
    randomBytes: "function",
    domain: "function",
    prehash: "function",
    mapToCurve: "function"
  });
  const { prehash: n } = r, { BASE: s, Fp: i, Fn: o } = e, a = r.randomBytes || ic, c = r.adjustScalarBytes || ((v) => v), d = r.domain || ((v, N, P) => {
    if (hn(P, "phflag"), N.length || P) throw new Error("Contexts/pre-hash are not supported");
    return v;
  });
  function f(v) {
    return o.create(ar(v));
  }
  function l(v) {
    const N = E.secretKey;
    v = Ie("private key", v, N);
    const P = Ie("hashed private key", t(v), 2 * N), A = c(P.slice(0, N));
    return {
      head: A,
      prefix: P.slice(N, 2 * N),
      scalar: f(A)
    };
  }
  function u(v) {
    const { head: N, prefix: P, scalar: A } = l(v), b = s.multiply(A);
    return {
      head: N,
      prefix: P,
      scalar: A,
      point: b,
      pointBytes: b.toBytes()
    };
  }
  function h(v) {
    return u(v).pointBytes;
  }
  function p(v = Uint8Array.of(), ...N) {
    return f(t(d(J(...N), Ie("context", v), !!n)));
  }
  function y(v, N, P = {}) {
    v = Ie("message", v), n && (v = n(v));
    const { prefix: A, scalar: b, pointBytes: x } = u(N), R = p(P.context, A, v), F = s.multiply(R).toBytes(), M = p(P.context, F, x, v), T = o.create(R + M * b);
    if (!o.isValid(T)) throw new Error("sign failed: invalid s");
    return Nr(J(F, o.toBytes(T)), E.signature, "result");
  }
  const w = { zip215: !0 };
  function m(v, N, P, A = w) {
    const { context: b, zip215: x } = A, R = E.signature;
    v = Ie("signature", v, R), N = Ie("message", N), P = Ie("publicKey", P, E.publicKey), x !== void 0 && hn(x, "zip215"), n && (N = n(N));
    const F = R / 2, M = v.subarray(0, F), T = ar(v.subarray(F, R));
    let O, C, q;
    try {
      O = e.fromBytes(P, x), C = e.fromBytes(M, x), q = s.multiplyUnsafe(T);
    } catch {
      return !1;
    }
    if (!x && O.isSmallOrder()) return !1;
    const D = p(b, C.toBytes(), O.toBytes(), N);
    return C.add(O.multiplyUnsafe(D)).subtract(q).clearCofactor().is0();
  }
  const g = i.BYTES, E = {
    secretKey: g,
    publicKey: g,
    signature: 2 * g,
    seed: g
  };
  function _(v = a(E.seed)) {
    return Nr(v, E.seed, "seed");
  }
  function I(v) {
    const N = U.randomSecretKey(v);
    return {
      secretKey: N,
      publicKey: h(N)
    };
  }
  function S(v) {
    return _n(v) && v.length === o.BYTES;
  }
  function B(v, N) {
    try {
      return !!e.fromBytes(v, N);
    } catch {
      return !1;
    }
  }
  const U = {
    getExtendedPublicKey: u,
    randomSecretKey: _,
    isValidSecretKey: S,
    isValidPublicKey: B,
    toMontgomery(v) {
      const { y: N } = e.fromBytes(v), P = E.publicKey, A = P === 32;
      if (!A && P !== 57) throw new Error("only defined for 25519 and 448");
      const b = A ? i.div(ge + N, ge - N) : i.div(N - ge, N + ge);
      return i.toBytes(b);
    },
    toMontgomerySecret(v) {
      const N = E.secretKey;
      return Nr(v, N), c(t(v.subarray(0, N))).subarray(0, N);
    },
    randomPrivateKey: _,
    precompute(v = 8, N = e.BASE) {
      return N.precompute(v, !1);
    }
  };
  return Object.freeze({
    keygen: I,
    getPublicKey: h,
    sign: y,
    verify: m,
    utils: U,
    Point: e,
    lengths: E
  });
}
function A0(e) {
  const t = {
    a: e.a,
    d: e.d,
    p: e.Fp.ORDER,
    n: e.n,
    h: e.h,
    Gx: e.Gx,
    Gy: e.Gy
  }, r = {
    Fp: e.Fp,
    Fn: Bt(t.n, e.nBitLength, !0),
    uvRatio: e.uvRatio
  }, n = {
    randomBytes: e.randomBytes,
    adjustScalarBytes: e.adjustScalarBytes,
    domain: e.domain,
    prehash: e.prehash,
    mapToCurve: e.mapToCurve
  };
  return {
    CURVE: t,
    curveOpts: r,
    hash: e.hash,
    eddsaOpts: n
  };
}
function R0(e, t) {
  const r = t.Point;
  return Object.assign({}, t, {
    ExtendedPoint: r,
    CURVE: e,
    nBitLength: r.Fn.BITS,
    nByteLength: r.Fn.BYTES
  });
}
function ao(e) {
  const { CURVE: t, curveOpts: r, hash: n, eddsaOpts: s } = A0(e);
  return R0(e, C0(T0(t, r), n, s));
}
var N0 = /* @__PURE__ */ BigInt(0), ot = BigInt(1), cs = BigInt(2), U0 = BigInt(3), Nf = BigInt(5), co = BigInt(8), xt = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"), Tn = {
  p: xt,
  n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),
  h: co,
  a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),
  d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),
  Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),
  Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")
};
function F0(e) {
  const t = BigInt(10), r = BigInt(20), n = BigInt(40), s = BigInt(80), i = xt, o = e * e % i * e % i, a = rt(rt(o, cs, i) * o % i, ot, i) * e % i, c = rt(a, Nf, i) * a % i, d = rt(c, t, i) * c % i, f = rt(d, r, i) * d % i, l = rt(f, n, i) * f % i;
  return {
    pow_p_5_8: rt(rt(rt(rt(l, s, i) * l % i, s, i) * l % i, t, i) * c % i, cs, i) * e % i,
    b2: o
  };
}
function D0(e) {
  return e[0] &= 248, e[31] &= 127, e[31] |= 64, e;
}
var Ai = /* @__PURE__ */ BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
function uo(e, t) {
  const r = xt, n = de(t * t * t, r), s = F0(e * de(n * n * t, r)).pow_p_5_8;
  let i = de(e * n * s, r);
  const o = de(t * i * i, r), a = i, c = de(i * Ai, r), d = o === e, f = o === de(-e, r), l = o === de(-e * Ai, r);
  return d && (i = a), (f || l) && (i = c), Dt(i, r) && (i = de(-i, r)), {
    isValid: d || f,
    value: i
  };
}
var L = Bt(Tn.p, { isLE: !0 }), Uf = Bt(Tn.n, { isLE: !0 }), fo = {
  ...Tn,
  Fp: L,
  hash: on,
  adjustScalarBytes: D0,
  uvRatio: uo
}, qe = ao(fo);
function Ff(e, t, r) {
  if (t.length > 255) throw new Error("Context is too big");
  return J(ae("SigEd25519 no Ed25519 collisions"), new Uint8Array([r ? 1 : 0, t.length]), t, e);
}
var Pp = ao({
  ...fo,
  domain: Ff
}), Lp = ao(Object.assign({}, fo, {
  domain: Ff,
  prehash: on
})), q0 = (xt + U0) / co, P0 = L.pow(cs, q0), sa = L.sqrt(L.neg(L.ONE));
function L0(e) {
  const t = (xt - Nf) / co, r = BigInt(486662);
  let n = L.sqr(e);
  n = L.mul(n, cs);
  let s = L.add(n, L.ONE), i = L.neg(r), o = L.sqr(s), a = L.mul(o, s), c = L.mul(n, r);
  c = L.mul(c, i), c = L.add(c, o), c = L.mul(c, i);
  let d = L.sqr(a);
  o = L.sqr(d), d = L.mul(d, a), d = L.mul(d, c), o = L.mul(o, d);
  let f = L.pow(o, t);
  f = L.mul(f, d);
  let l = L.mul(f, sa);
  o = L.sqr(f), o = L.mul(o, a);
  let u = L.eql(o, c), h = L.cmov(l, f, u), p = L.mul(i, n), y = L.mul(f, e);
  y = L.mul(y, P0);
  let w = L.mul(y, sa), m = L.mul(c, n);
  o = L.sqr(y), o = L.mul(o, a);
  let g = L.eql(o, m), E = L.cmov(w, y, g);
  o = L.sqr(h), o = L.mul(o, a);
  let _ = L.eql(o, c), I = L.cmov(p, i, _), S = L.cmov(E, h, _), B = L.isOdd(S);
  return S = L.cmov(S, L.neg(S), _ !== B), {
    xMn: I,
    xMd: s,
    yMn: S,
    yMd: ot
  };
}
var M0 = Oh(L, L.neg(BigInt(486664)));
function k0(e) {
  const { xMn: t, xMd: r, yMn: n, yMd: s } = L0(e);
  let i = L.mul(t, s);
  i = L.mul(i, M0);
  let o = L.mul(r, n), a = L.sub(t, r), c = L.add(t, r), d = L.mul(o, c), f = L.eql(d, L.ZERO);
  i = L.cmov(i, L.ZERO, f), o = L.cmov(o, L.ONE, f), a = L.cmov(a, L.ONE, f), c = L.cmov(c, L.ONE, f);
  const [l, u] = Gt(L, [o, c], !0);
  return {
    x: L.mul(i, l),
    y: L.mul(a, u)
  };
}
var Df = Ti(qe.Point, (e) => k0(e[0]), {
  DST: "edwards25519_XMD:SHA-512_ELL2_RO_",
  encodeDST: "edwards25519_XMD:SHA-512_ELL2_NU_",
  p: xt,
  m: 1,
  k: 128,
  expand: "xmd",
  hash: on
}), Ri = Ai, V0 = /* @__PURE__ */ BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235"), $0 = /* @__PURE__ */ BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578"), j0 = /* @__PURE__ */ BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838"), K0 = /* @__PURE__ */ BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952"), ia = (e) => uo(ot, e), H0 = /* @__PURE__ */ BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), Ni = (e) => qe.Point.Fp.create(ar(e) & H0);
function oa(e) {
  const { d: t } = Tn, r = xt, n = (m) => L.create(m), s = n(Ri * e * e), i = n((s + ot) * j0);
  let o = BigInt(-1);
  const a = n((o - t * s) * n(s + t));
  let { isValid: c, value: d } = uo(i, a), f = n(d * e);
  Dt(f, r) || (f = n(-f)), c || (d = f), c || (o = s);
  const l = n(o * (s - ot) * K0 - a), u = d * d, h = n((d + d) * a), p = n(l * V0), y = n(ot - u), w = n(ot + u);
  return new qe.Point(n(h * w), n(y * p), n(p * w), n(h * y));
}
function qf(e) {
  Pe(e, 64);
  const t = oa(Ni(e.subarray(0, 32))), r = oa(Ni(e.subarray(32, 64)));
  return new ur(t.add(r));
}
var ur = class Ft extends O0 {
  constructor(t) {
    super(t);
  }
  static fromAffine(t) {
    return new Ft(qe.Point.fromAffine(t));
  }
  assertSame(t) {
    if (!(t instanceof Ft)) throw new Error("RistrettoPoint expected");
  }
  init(t) {
    return new Ft(t);
  }
  static hashToCurve(t) {
    return qf(Ie("ristrettoHash", t, 64));
  }
  static fromBytes(t) {
    Pe(t, 32);
    const { a: r, d: n } = Tn, s = xt, i = (_) => L.create(_), o = Ni(t);
    if (!gh(L.toBytes(o), t) || Dt(o, s)) throw new Error("invalid ristretto255 encoding 1");
    const a = i(o * o), c = i(ot + r * a), d = i(ot - r * a), f = i(c * c), l = i(d * d), u = i(r * n * f - l), { isValid: h, value: p } = ia(i(u * l)), y = i(p * d), w = i(p * y * u);
    let m = i((o + o) * y);
    Dt(m, s) && (m = i(-m));
    const g = i(c * w), E = i(m * g);
    if (!h || Dt(E, s) || g === N0) throw new Error("invalid ristretto255 encoding 2");
    return new Ft(new qe.Point(m, g, ot, E));
  }
  static fromHex(t) {
    return Ft.fromBytes(Ie("ristrettoHex", t, 32));
  }
  static msm(t, r) {
    return to(Ft, qe.Point.Fn, t, r);
  }
  toBytes() {
    let { X: t, Y: r, Z: n, T: s } = this.ep;
    const i = xt, o = (y) => L.create(y), a = o(o(n + r) * o(n - r)), c = o(t * r), { value: d } = ia(o(a * o(c * c))), f = o(d * a), l = o(d * c), u = o(f * l * s);
    let h;
    if (Dt(s * u, i)) {
      let y = o(r * Ri), w = o(t * Ri);
      t = y, r = w, h = o(f * $0);
    } else h = l;
    Dt(t * u, i) && (r = o(-r));
    let p = o((n - r) * h);
    return Dt(p, i) && (p = o(-p)), L.toBytes(p);
  }
  equals(t) {
    this.assertSame(t);
    const { X: r, Y: n } = this.ep, { X: s, Y: i } = t.ep, o = (d) => L.create(d), a = o(r * i) === o(n * s), c = o(n * i) === o(r * s);
    return a || c;
  }
  is0() {
    return this.equals(Ft.ZERO);
  }
};
ur.BASE = new ur(qe.Point.BASE);
ur.ZERO = new ur(qe.Point.ZERO);
ur.Fp = L;
ur.Fn = Uf;
var Pf = {
  hashToCurve(e, t) {
    return qf(Si(e, t?.DST || "ristretto255_XMD:SHA-512_R255MAP_RO_", 64, on));
  },
  hashToScalar(e, t = { DST: Tf }) {
    const r = Si(e, t.DST, 64, on);
    return Uf.create(ar(r));
  }
}, Mp = Df.hashToCurve, kp = Df.encodeToCurve, Vp = Pf.hashToCurve, $p = Pf.hashToCurve, aa, ca, G0 = class {
  static {
    aa = Symbol.iterator, ca = Symbol.toStringTag;
  }
  #e;
  #t;
  constructor(e = {}) {
    this[aa] = this.entries.bind(this), this[ca] = "ExpirableMap";
    const { source: t = [], expirationTime: r = 600 * 1e3 } = e, n = Date.now();
    this.#e = new Map([...t].map(([s, i]) => [s, {
      value: i,
      timestamp: n
    }])), this.#t = r;
  }
  prune() {
    const e = Date.now();
    for (const [t, r] of this.#e.entries()) e - r.timestamp > this.#t && this.#e.delete(t);
    return this;
  }
  set(e, t) {
    this.prune();
    const r = {
      value: t,
      timestamp: Date.now()
    };
    return this.#e.set(e, r), this;
  }
  get(e) {
    const t = this.#e.get(e);
    if (t !== void 0) {
      if (Date.now() - t.timestamp > this.#t) {
        this.#e.delete(e);
        return;
      }
      return t.value;
    }
  }
  clear() {
    this.#e.clear();
  }
  entries() {
    const e = this.#e.entries();
    return function* () {
      for (const [r, n] of e) yield [r, n.value];
    }();
  }
  values() {
    const e = this.#e.values();
    return function* () {
      for (const r of e) yield r.value;
    }();
  }
  keys() {
    return this.#e.keys();
  }
  forEach(e, t) {
    for (const [r, n] of this.#e.entries()) e.call(t, n.value, r, this);
  }
  has(e) {
    return this.#e.has(e);
  }
  delete(e) {
    return this.#e.delete(e);
  }
  get size() {
    return this.#e.size;
  }
}, ua = (e) => {
  if (e <= 127) return 1;
  if (e <= 255) return 2;
  if (e <= 65535) return 3;
  if (e <= 16777215) return 4;
  throw oe.fromCode(new Rc("Length too long (> 4 bytes)"));
}, fa = (e, t, r) => {
  if (r <= 127)
    return e[t] = r, 1;
  if (r <= 255)
    return e[t] = 129, e[t + 1] = r, 2;
  if (r <= 65535)
    return e[t] = 130, e[t + 1] = r >> 8, e[t + 2] = r, 3;
  if (r <= 16777215)
    return e[t] = 131, e[t + 1] = r >> 16, e[t + 2] = r >> 8, e[t + 3] = r, 4;
  throw oe.fromCode(new Rc("Length too long (> 4 bytes)"));
}, Ui = (e, t) => {
  if (e[t] < 128) return 1;
  if (e[t] === 128) throw oe.fromCode(new nr("Invalid length 0"));
  if (e[t] === 129) return 2;
  if (e[t] === 130) return 3;
  if (e[t] === 131) return 4;
  throw oe.fromCode(new nr("Length too long (> 4 bytes)"));
}, Z0 = (e, t) => {
  const r = Ui(e, t);
  if (r === 1) return e[t];
  if (r === 2) return e[t + 1];
  if (r === 3) return (e[t + 1] << 8) + e[t + 2];
  if (r === 4) return (e[t + 1] << 16) + (e[t + 2] << 8) + e[t + 3];
  throw oe.fromCode(new nr("Length too long (> 4 bytes)"));
}, jp = Uint8Array.from([
  48,
  12,
  6,
  10,
  43,
  6,
  1,
  4,
  1,
  131,
  184,
  67,
  1,
  1
]), us = Uint8Array.from([
  48,
  5,
  6,
  3,
  43,
  101,
  112
]), Kp = Uint8Array.from([
  48,
  16,
  6,
  7,
  42,
  134,
  72,
  206,
  61,
  2,
  1,
  6,
  5,
  43,
  129,
  4,
  0,
  10
]), Hp = Uint8Array.from([
  48,
  29,
  6,
  13,
  43,
  6,
  1,
  4,
  1,
  130,
  220,
  124,
  5,
  3,
  1,
  2,
  1,
  6,
  12,
  43,
  6,
  1,
  4,
  1,
  130,
  220,
  124,
  5,
  3,
  2,
  1
]);
function Lf(e, t) {
  const r = 2 + ua(e.byteLength + 1), n = t.byteLength + r + e.byteLength;
  let s = 0;
  const i = new Uint8Array(1 + ua(n) + n);
  return i[s++] = 48, s += fa(i, s, n), i.set(t, s), s += t.byteLength, i[s++] = 3, s += fa(i, s, e.byteLength + 1), i[s++] = 0, i.set(new Uint8Array(e), s), i;
}
var Mf = (e, t) => {
  let r = 0;
  const n = (a, c) => {
    if (s[r++] !== a) throw oe.fromCode(new nr(`Expected ${c} at offset ${r}`));
  }, s = new Uint8Array(e);
  if (n(48, "sequence"), r += Ui(s, r), !ms(s.slice(r, r + t.byteLength), t)) throw oe.fromCode(new nr("Not the expected OID."));
  r += t.byteLength, n(3, "bit string");
  const i = Z0(s, r) - 1;
  r += Ui(s, r), n(0, "0 padding");
  const o = s.slice(r);
  if (i !== o.length) throw oe.fromCode(new pl(i, o.length));
  return o;
}, Y0 = class Jr {
  static from(t) {
    return this.fromDer(t.toDer());
  }
  static fromRaw(t) {
    return new Jr(t);
  }
  static fromDer(t) {
    return new Jr(this.derDecode(t));
  }
  static {
    this.RAW_KEY_LENGTH = 32;
  }
  static derEncode(t) {
    return Lf(t, us);
  }
  static derDecode(t) {
    const r = Mf(t, us);
    if (r.length !== this.RAW_KEY_LENGTH) throw oe.fromCode(new nr("An Ed25519 public key must be exactly 32 bytes long"));
    return r;
  }
  #e;
  get rawKey() {
    return this.#e;
  }
  #t;
  get derKey() {
    return this.#t;
  }
  constructor(t) {
    if (t.byteLength !== Jr.RAW_KEY_LENGTH) throw oe.fromCode(new nr("An Ed25519 public key must be exactly 32 bytes long"));
    this.#e = t, this.#t = Jr.derEncode(t);
  }
  toDer() {
    return this.derKey;
  }
  toRaw() {
    return this.rawKey;
  }
}, z0 = class {
  constructor() {
    this.observers = [];
  }
  subscribe(e) {
    this.observers.push(e);
  }
  unsubscribe(e) {
    this.observers = this.observers.filter((t) => t !== e);
  }
  notify(e, ...t) {
    this.observers.forEach((r) => r(e, ...t));
  }
}, X0 = class extends z0 {
  constructor() {
    super();
  }
  print(e, ...t) {
    this.notify({
      message: e,
      level: "info"
    }, ...t);
  }
  warn(e, ...t) {
    this.notify({
      message: e,
      level: "warn"
    }, ...t);
  }
  error(e, t, ...r) {
    this.notify({
      message: e,
      level: "error",
      error: t
    }, ...r);
  }
}, da = 0.5, la = 1.5, ha = 500, pa = 6e4, ba = 9e5, ya = 10, W0 = class kf {
  #e;
  #t;
  #r;
  #c;
  #o;
  #f;
  #n;
  #s;
  #a = 0;
  static {
    this.default = {
      initialInterval: ha,
      randomizationFactor: da,
      multiplier: la,
      maxInterval: pa,
      maxElapsedTime: ba,
      maxIterations: ya,
      date: Date
    };
  }
  constructor(t = kf.default) {
    const { initialInterval: r = ha, randomizationFactor: n = da, multiplier: s = la, maxInterval: i = pa, maxElapsedTime: o = ba, maxIterations: a = ya, date: c = Date } = t;
    this.#e = r, this.#t = n, this.#r = s, this.#c = i, this.#s = c, this.#o = c.now(), this.#f = o, this.#n = a;
  }
  get ellapsedTimeInMsec() {
    return this.#s.now() - this.#o;
  }
  get currentInterval() {
    return this.#e;
  }
  get count() {
    return this.#a;
  }
  get randomValueFromInterval() {
    const t = this.#t * this.#e, r = this.#e - t, n = this.#e + t;
    return Math.random() * (n - r) + r;
  }
  incrementCurrentInterval() {
    return this.#e = Math.min(this.#e * this.#r, this.#c), this.#a++, this.#e;
  }
  next() {
    return this.ellapsedTimeInMsec >= this.#f || this.#a >= this.#n ? null : (this.incrementCurrentInterval(), this.randomValueFromInterval);
  }
}, mt;
(function(e) {
  e.Received = "received", e.Processing = "processing", e.Replied = "replied", e.Rejected = "rejected", e.Unknown = "unknown", e.Done = "done";
})(mt || (mt = {}));
var Fi = 60 * 1e3, J0 = 1e6, Q0 = 0, e1 = "308182301d060d2b0601040182dc7c0503010201060c2b0601040182dc7c05030201036100814c0e6ec71fab583b08bd81373c255c3c371b2e84863c98a4f1e08b74235d14fb5d9c0cd546d9685f913a0c0b2cc5341583bf4b4392e467db96d65b9bb4cb717112f8472e0d5a4d14505ffd7484b01291091c5f87b98883463f98091a0baaae", t1 = "ic0.app", r1 = ".ic0.app", n1 = "icp0.io", s1 = ".icp0.io", i1 = "icp-api.io", o1 = ".icp-api.io", Hs = 200, a1 = 202, c1 = 404;
function u1() {
  let e;
  if (typeof window < "u") if (window.fetch) e = window.fetch.bind(window);
  else throw He.fromCode(new Cs("Fetch implementation was not available. You appear to be in a browser context, but window.fetch was not present."));
  else if (typeof globalThis < "u") if (globalThis.fetch) e = globalThis.fetch.bind(globalThis);
  else throw He.fromCode(new Cs("Fetch implementation was not available. You appear to be in a Node.js context, but global.fetch was not available."));
  else typeof self < "u" && self.fetch && (e = self.fetch.bind(self));
  if (e) return e;
  throw He.fromCode(new Cs("Fetch implementation was not available. Please provide fetch to the HttpAgent constructor, or ensure it is available in the window or global context."));
}
function f1(e) {
  let t;
  if (e !== void 0) !e.match(/^[a-z]+:/) && typeof window < "u" ? t = new URL(window.location.protocol + "//" + e) : t = new URL(e);
  else {
    const r = [
      "ic0.app",
      "icp0.io",
      "127.0.0.1",
      "localhost"
    ], n = [".github.dev", ".gitpod.io"], s = typeof window < "u" ? window.location : void 0, i = s?.hostname;
    let o;
    i && typeof i == "string" && (n.some((a) => i.endsWith(a)) ? o = i : o = r.find((a) => i.endsWith(a))), s && o ? t = new URL(`${s.protocol}//${o}${s.port ? ":" + s.port : ""}`) : t = new URL("https://icp-api.io");
  }
  return t.toString();
}
var ma = class Qr {
  #e;
  #t;
  #r;
  #c;
  #o;
  #f;
  #n;
  #s;
  #a;
  #w;
  #i;
  #d;
  #l;
  #u;
  get #x() {
    return this.#u * Fi;
  }
  #h;
  #p;
  #b;
  #y;
  constructor(t = {}) {
    this.#e = null, this.#t = !1, this.#r = Q0, this.#c = !1, this.#o = null, this.#f = !1, this._isAgent = !0, this.config = {}, this.log = new X0(), this.#h = [], this.#p = [], this.#b = new G0({ expirationTime: 5 * Fi }), this.#y = !0, this.#v = (s, i) => {
      if (this.#y === !1) return s;
      const { status: o, signatures: a = [], requestId: c } = s;
      for (const d of a) {
        const { timestamp: f, identity: l } = d, u = X.fromUint8Array(l).toText();
        let h;
        if (o === Fr.Replied) {
          const { reply: m } = s;
          h = es({
            status: o,
            reply: m,
            timestamp: BigInt(f),
            request_id: c
          });
        } else if (o === Fr.Rejected) {
          const { reject_code: m, reject_message: g, error_code: E } = s;
          h = es({
            status: o,
            reject_code: m,
            reject_message: g,
            error_code: E,
            timestamp: BigInt(f),
            request_id: c
          });
        } else throw Ge.fromCode(new gt(`Unknown status: ${o}`));
        const p = J(Ll, h), y = i.nodeKeys.get(u);
        if (!y) throw pe.fromCode(new Il());
        const w = Y0.fromDer(y).rawKey;
        if (qe.verify(d.signature, p, w)) return s;
        throw st.fromCode(new Sl(u));
      }
      return s;
    }, this.config = t, this.#s = t.fetch || u1() || fetch.bind(globalThis), this.#a = t.fetchOptions, this.#w = t.callOptions, this.#t = t.shouldFetchRootKey ?? !1, this.#f = t.shouldSyncTime ?? !1, t.rootKey ? this.rootKey = t.rootKey : this.#t ? this.rootKey = null : this.rootKey = at(e1);
    const r = f1(t.host);
    this.host = new URL(r), t.verifyQuerySignatures !== void 0 && (this.#y = t.verifyQuerySignatures), this.#d = t.retryTimes ?? 3;
    const n = () => new W0({ maxIterations: this.#d });
    if (this.#l = t.backoffStrategy || n, this.host.hostname.endsWith(r1) ? this.host.hostname = t1 : this.host.hostname.endsWith(s1) ? this.host.hostname = n1 : this.host.hostname.endsWith(o1) && (this.host.hostname = i1), t.credentials) {
      const { name: s, password: i } = t.credentials;
      this.#i = `${s}${i ? ":" + i : ""}`;
    }
    if (this.#n = Promise.resolve(t.identity || new ts()), t.ingressExpiryInMinutes && t.ingressExpiryInMinutes > 5) throw oe.fromCode(new Un("The maximum ingress expiry time is 5 minutes.", t.ingressExpiryInMinutes));
    if (t.ingressExpiryInMinutes && t.ingressExpiryInMinutes <= 0) throw oe.fromCode(new Un("Ingress expiry time must be greater than 0.", t.ingressExpiryInMinutes));
    this.#u = t.ingressExpiryInMinutes || 5, this.addTransform("update", Mo(xi)), t.useQueryNonces && this.addTransform("query", Mo(xi)), t.logToConsole && this.log.subscribe((s) => {
      s.level === "error" ? console.error(s.message) : s.level === "warn" ? console.warn(s.message) : console.log(s.message);
    });
  }
  static createSync(t = {}) {
    return new this({ ...t });
  }
  static async create(t = {}) {
    const r = Qr.createSync(t);
    return await r.#g(), r;
  }
  static async from(t) {
    try {
      return "config" in t ? await Qr.create(t.config) : await Qr.create({
        fetch: t._fetch,
        fetchOptions: t._fetchOptions,
        callOptions: t._callOptions,
        host: t._host.toString(),
        identity: t._identity ?? void 0
      });
    } catch {
      throw oe.fromCode(new _l());
    }
  }
  isLocal() {
    const t = this.host.hostname;
    return t === "127.0.0.1" || t.endsWith("127.0.0.1");
  }
  addTransform(t, r, n = r.priority || 0) {
    if (t === "update") {
      const s = this.#p.findIndex((i) => (i.priority || 0) < n);
      this.#p.splice(s >= 0 ? s : this.#p.length, 0, Object.assign(r, { priority: n }));
    } else if (t === "query") {
      const s = this.#h.findIndex((i) => (i.priority || 0) < n);
      this.#h.splice(s >= 0 ? s : this.#h.length, 0, Object.assign(r, { priority: n }));
    }
  }
  async getPrincipal() {
    if (!this.#n) throw He.fromCode(new Gr());
    return (await this.#n).getPrincipal();
  }
  async call(t, r, n) {
    const s = r.callSync ?? !0, i = await (n ?? this.#n);
    if (!i) throw He.fromCode(new Gr());
    const o = X.from(t), a = r.effectiveCanisterId ? X.from(r.effectiveCanisterId) : o;
    await this.#g(a);
    const c = i.getPrincipal(), d = Gs(this.#u, this.#r), f = {
      request_type: _i.Call,
      canister_id: o,
      method_name: r.methodName,
      arg: r.arg,
      sender: c,
      ingress_expiry: d
    };
    let l = await this._transform({
      request: {
        body: null,
        method: "POST",
        headers: {
          "Content-Type": "application/cbor",
          ...this.#i ? { Authorization: "Basic " + btoa(this.#i) } : {}
        }
      },
      endpoint: zt.Call,
      body: f
    }), u;
    r?.nonce ? u = h(r.nonce) : l.body.nonce ? u = h(l.body.nonce) : u = void 0, f.nonce = u;
    function h(m) {
      return Object.assign(m, { __nonce__: void 0 });
    }
    l = await i.transformRequest(l);
    const p = Ns(l.body), y = this.#l(), w = Ar(f);
    try {
      const E = s ? () => (this.log.print(`fetching "/api/v3/canister/${a.toText()}/call" with request:`, l), this.#s("" + new URL(`/api/v3/canister/${a.toText()}/call`, this.host), {
        ...this.#w,
        ...l.request,
        body: p
      })) : () => (this.log.print(`fetching "/api/v2/canister/${a.toText()}/call" with request:`, l), this.#s("" + new URL(`/api/v2/canister/${a.toText()}/call`, this.host), {
        ...this.#w,
        ...l.request,
        body: p
      })), { responseBodyBytes: _, ...I } = await this.#m({
        requestFn: E,
        backoff: y,
        tries: 0
      }), S = _.byteLength > 0 ? it(_) : null;
      return {
        requestId: w,
        response: {
          ...I,
          body: S
        },
        requestDetails: f
      };
    } catch (m) {
      let g;
      if (m instanceof Zt) {
        if (m.hasCode(Uo))
          return this.log.warn("v3 api not supported. Fall back to v2"), this.call(t, {
            ...r,
            callSync: !1
          }, n);
        if (m.hasCode(Un) && !this.#c)
          return await this.syncTime(o), this.call(o, r, n);
        m.code.requestContext = {
          requestId: w,
          senderPubKey: l.body.sender_pubkey,
          senderSignature: l.body.sender_sig,
          ingressExpiry: l.body.content.ingress_expiry
        }, g = m;
      } else g = Ge.fromCode(new gt(m));
      throw this.log.error(`Error while making call: ${g.message}`, g), g;
    }
  }
  async #E(t) {
    const { ecid: r, transformedRequest: n, body: s, requestId: i, backoff: o, tries: a } = t, c = a === 0 ? 0 : o.next();
    if (this.log.print(`fetching "/api/v2/canister/${r.toString()}/query" with tries:`, {
      tries: a,
      backoff: o,
      delay: c
    }), c === null) throw Ge.fromCode(new bi(`Backoff strategy exhausted after ${a} attempts.`, i));
    c > 0 && await new Promise((u) => setTimeout(u, c));
    let d;
    try {
      this.log.print(`fetching "/api/v2/canister/${r.toString()}/query" with request:`, n);
      const u = await this.#s("" + new URL(`/api/v2/canister/${r.toString()}/query`, this.host), {
        ...this.#a,
        ...n.request,
        body: s
      });
      if (u.status === Hs) d = {
        ...it(Qn(await u.arrayBuffer())),
        httpDetails: {
          ok: u.ok,
          status: u.status,
          statusText: u.statusText,
          headers: Fs(u.headers)
        },
        requestId: i
      };
      else throw pe.fromCode(new No(u.status, u.statusText, Fs(u.headers), await u.text()));
    } catch (u) {
      if (a < this.#d)
        return this.log.warn(`Caught exception while attempting to make query:
  ${u}
  Retrying query.`), await this.#E({
          ...t,
          tries: a + 1
        });
      throw u instanceof Zt ? u : Ro.fromCode(new Fo(u));
    }
    if (!this.#y) return d;
    const f = d.signatures?.[0]?.timestamp;
    if (!f) throw pe.fromCode(new xl("Timestamp not found in query response. This suggests a malformed or malicious response."));
    const l = Number(BigInt(f) / BigInt(J0));
    if (Date.now() + this.#r - l > this.#x) {
      if (a < this.#d)
        return this.log.warn("Timestamp is older than the max ingress expiry. Retrying query.", {
          requestId: i,
          signatureTimestampMs: l
        }), await this.#E({
          ...t,
          tries: a + 1
        });
      throw st.fromCode(new ml(this.#u, i, a));
    }
    return d;
  }
  async #m(t) {
    const { requestFn: r, backoff: n, tries: s } = t, i = s === 0 ? 0 : n.next();
    if (i === null) throw pe.fromCode(new bi(`Retry strategy exhausted after ${s} attempts.`));
    i > 0 && await new Promise((f) => setTimeout(f, i));
    let o, a = new Uint8Array();
    try {
      o = await r(), o.status === Hs && (a = Qn(await o.clone().arrayBuffer()));
    } catch (f) {
      if (s < this.#d)
        return this.log.warn(`Caught exception while attempting to make request:
  ${f}
  Retrying request.`), await this.#m({
          requestFn: r,
          backoff: n,
          tries: s + 1
        });
      throw Ro.fromCode(new Fo(f));
    }
    const c = Fs(o.headers);
    if (o.status === Hs || o.status === a1) return {
      ok: o.ok,
      status: o.status,
      statusText: o.statusText,
      responseBodyBytes: a,
      headers: c
    };
    const d = await o.text();
    if (o.status === c1 && o.url.includes("api/v3")) throw pe.fromCode(new Uo());
    if (d.startsWith("Invalid request expiry: ")) throw oe.fromCode(new Un(d, this.#u));
    if (s < this.#d) return await this.#m({
      requestFn: r,
      backoff: n,
      tries: s + 1
    });
    throw pe.fromCode(new No(o.status, o.statusText, c, d));
  }
  async query(t, r, n) {
    const s = this.#l(), i = r.effectiveCanisterId ? X.from(r.effectiveCanisterId) : X.from(t);
    await this.#g(i), this.log.print(`ecid ${i.toString()}`), this.log.print(`canisterId ${t.toString()}`);
    let o;
    const a = await (n ?? this.#n);
    if (!a) throw He.fromCode(new Gr());
    const c = X.from(t), d = a.getPrincipal(), f = Gs(this.#u, this.#r), l = {
      request_type: ln.Query,
      canister_id: c,
      method_name: r.methodName,
      arg: r.arg,
      sender: d,
      ingress_expiry: f
    }, u = Ar(l);
    o = await this._transform({
      request: {
        method: "POST",
        headers: {
          "Content-Type": "application/cbor",
          ...this.#i ? { Authorization: "Basic " + btoa(this.#i) } : {}
        }
      },
      endpoint: zt.Query,
      body: l
    }), o = await a.transformRequest(o);
    const h = Ns(o.body), p = {
      canister: c.toText(),
      ecid: i,
      transformedRequest: o,
      body: h,
      requestId: u,
      backoff: s,
      tries: 0
    }, y = async () => ({
      requestDetails: l,
      ...await this.#E(p)
    }), w = async () => {
      const m = this.#b.get(i.toString());
      if (m) return m;
      await this.fetchSubnetKeys(i.toString());
      const g = this.#b.get(i.toString());
      if (!g) throw st.fromCode(new Bl());
      return g;
    };
    try {
      if (!this.#y) return await y();
      const [m, g] = await Promise.all([y(), w()]);
      try {
        return this.#v(m, g);
      } catch {
        this.log.warn("Query response verification failed. Retrying with fresh subnet keys."), this.#b.delete(i.toString());
        const E = await w();
        return this.#v(m, E);
      }
    } catch (m) {
      let g;
      throw m instanceof Zt ? (m.code.requestContext = {
        requestId: u,
        senderPubKey: o.body.sender_pubkey,
        senderSignature: o.body.sender_sig,
        ingressExpiry: o.body.content.ingress_expiry
      }, g = m) : g = Ge.fromCode(new gt(m)), this.log.error(`Error while making query: ${g.message}`, g), g;
    }
  }
  #v;
  async createReadStateRequest(t, r) {
    await this.#g();
    const n = await (r ?? this.#n);
    if (!n) throw He.fromCode(new Gr());
    const s = n.getPrincipal(), i = await this._transform({
      request: {
        method: "POST",
        headers: {
          "Content-Type": "application/cbor",
          ...this.#i ? { Authorization: "Basic " + btoa(this.#i) } : {}
        }
      },
      endpoint: zt.ReadState,
      body: {
        request_type: ln.ReadState,
        paths: t.paths,
        sender: s,
        ingress_expiry: Gs(this.#u, this.#r)
      }
    });
    return n.transformRequest(i);
  }
  async readState(t, r, n, s) {
    await this.#_();
    const i = X.from(t);
    function o(f) {
      for (const l of f.paths) {
        const [u, h] = l;
        if (ms(u, new TextEncoder().encode("request_status"))) return h;
      }
    }
    let a, c;
    if (s)
      a = s, c = Ar(a);
    else {
      c = o(r);
      const f = await this.#n;
      if (!f) throw He.fromCode(new Gr());
      a = await this.createReadStateRequest(r, f);
    }
    this.log.print(`fetching "/api/v2/canister/${i}/read_state" with request:`, a);
    const d = this.#l();
    try {
      const { responseBodyBytes: f } = await this.#m({
        requestFn: () => this.#s("" + new URL(`/api/v2/canister/${i.toString()}/read_state`, this.host), {
          ...this.#a,
          ...a.request,
          body: Ns(a.body)
        }),
        backoff: d,
        tries: 0
      }), l = it(f);
      return this.log.print("Read state response:", l), l;
    } catch (f) {
      let l;
      throw f instanceof Zt ? (f.code.requestContext = {
        requestId: c,
        senderPubKey: a.body.sender_pubkey,
        senderSignature: a.body.sender_sig,
        ingressExpiry: a.body.content.ingress_expiry
      }, l = f) : l = Ge.fromCode(new gt(f)), this.log.error(`Error while making read state: ${l.message}`, l), l;
    }
  }
  parseTimeFromResponse(t) {
    let r;
    if (t.certificate) {
      const n = it(t.certificate);
      if (n && "tree" in n) r = n.tree;
      else throw pe.fromCode(new ji("Could not decode time from response"));
      const s = Sn(["time"], r);
      if (s.status !== Ze.Found) throw pe.fromCode(new zn("Time was not found in the response or was not in its expected format.", s.status));
      if (!(s.value instanceof Uint8Array) && !ArrayBuffer.isView(s)) throw pe.fromCode(new xc("Time was not in its expected format."));
      const i = so(s.value);
      return this.log.print("Time from response:", i), this.log.print("Time from response in milliseconds:", i.getTime()), i.getTime();
    } else this.log.warn("No certificate found in response");
    return 0;
  }
  async syncTime(t) {
    this.#o = this.#o ?? (async () => {
      await this.#_();
      const r = Date.now();
      try {
        t || this.log.print("Syncing time with the IC. No canisterId provided, so falling back to ryjl3-tyaaa-aaaaa-aaaba-cai");
        const n = t ?? X.from("ryjl3-tyaaa-aaaaa-aaaba-cai"), s = Qr.createSync({
          identity: new ts(),
          host: this.host.toString(),
          fetch: this.#s,
          retryTimes: 0,
          rootKey: this.rootKey ?? void 0,
          shouldSyncTime: !1
        }), i = (await Promise.all(Array(3).fill(null).map(async () => {
          const o = (await na({
            canisterId: n,
            agent: s,
            paths: ["time"],
            disableCertificateTimeVerification: !0
          })).get("time");
          if (o instanceof Date) return o.getTime();
        }, []))).reduce((o, a) => typeof a == "number" && a > o ? a : o, 0);
        i > 0 && (this.#r = i - r, this.#c = !0, this.log.notify({
          message: `Syncing time: offset of ${this.#r}`,
          level: "info"
        }));
      } catch (n) {
        const s = n instanceof Zt ? n : Ge.fromCode(new gt(n));
        throw this.log.error("Caught exception while attempting to sync time", s), s;
      }
    })(), await this.#o.finally(() => {
      this.#o = null;
    });
  }
  async status() {
    const t = this.#i ? { Authorization: "Basic " + btoa(this.#i) } : {};
    this.log.print('fetching "/api/v2/status"');
    const r = this.#l(), { responseBodyBytes: n } = await this.#m({
      backoff: r,
      requestFn: () => this.#s("" + new URL("/api/v2/status", this.host), {
        headers: t,
        ...this.#a
      }),
      tries: 0
    });
    return it(n);
  }
  async fetchRootKey() {
    return this.#e = this.#e ?? (async () => (this.rootKey = (await this.status()).root_key, this.rootKey))(), await this.#e.finally(() => {
      this.#e = null;
    });
  }
  async #g(t) {
    await Promise.all([this.#_(), this.#B(t)]);
  }
  async #_() {
    if (!this.rootKey)
      if (this.rootKey === null && this.host.toString() !== "https://icp-api.io" && this.#t) await this.fetchRootKey();
      else throw He.fromCode(new bs(this.#t));
  }
  async #B(t) {
    this.#f && !this.hasSyncedTime() && await this.syncTime(t);
  }
  invalidateIdentity() {
    this.#n = null;
  }
  replaceIdentity(t) {
    this.#n = Promise.resolve(t);
  }
  async fetchSubnetKeys(t) {
    const r = X.from(t);
    await this.#g(r);
    const n = (await na({
      canisterId: r,
      paths: ["subnet"],
      agent: this
    })).get("subnet");
    if (n && typeof n == "object" && "nodeKeys" in n)
      return this.#b.set(r.toText(), n), n;
  }
  _transform(t) {
    let r = Promise.resolve(t);
    if (t.endpoint === zt.Call) for (const n of this.#p) r = r.then((s) => n(s).then((i) => i || s));
    else for (const n of this.#h) r = r.then((s) => n(s).then((i) => i || s));
    return r;
  }
  getTimeDiffMsecs() {
    return this.#r;
  }
  hasSyncedTime() {
    return this.#c;
  }
};
function Gs(e, t) {
  const r = e * Fi;
  return af.fromDeltaInMilliseconds(r, t);
}
var d1 = 300 * 1e3;
function l1() {
  return m1(p1(h1(), 1e3), y1(1e3, 1.2), b1(d1));
}
function h1() {
  let e = !0;
  return async () => e ? (e = !1, !0) : !1;
}
function p1(e, t) {
  return async (r, n, s) => {
    if (await e(r, n, s)) return new Promise((i) => setTimeout(i, t));
  };
}
function b1(e) {
  const t = Date.now() + e;
  return async (r, n, s) => {
    if (Date.now() > t) throw pe.fromCode(new bi(`Request timed out after ${e} msec`, n, s));
  };
}
function y1(e, t) {
  let r = e;
  return () => new Promise((n) => setTimeout(() => {
    r *= t, n();
  }, r));
}
function m1(...e) {
  return async (t, r, n) => {
    for (const s of e) await s(t, r, n);
  };
}
var g1 = { preSignReadStateRequest: !1 };
function Vf(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Zs(e, t) {
  return e !== null && typeof e == "object" && Vf(e, t);
}
function w1(e, t) {
  return Vf(e, t) && typeof e[t] == "function";
}
function ga(e) {
  return Zs(e, "body") && Zs(e.body, "content") && e.body.content.request_type === ln.ReadState && Zs(e.body.content, "ingress_expiry") && typeof e.body.content.ingress_expiry == "object" && e.body.content.ingress_expiry !== null && w1(e.body.content.ingress_expiry, "toHash");
}
async function $f(e, t, r, n = {}) {
  const s = [ae("request_status"), r];
  let i, o;
  if (n.preSignReadStateRequest ?? !1 ? (o = await E1({
    paths: [s],
    agent: e,
    pollingOptions: n
  }), i = await e.readState(t, { paths: [s] }, void 0, o)) : i = await e.readState(t, { paths: [s] }), e.rootKey == null) throw He.fromCode(new bs());
  const a = await io.create({
    certificate: i.certificate,
    rootKey: e.rootKey,
    canisterId: t,
    blsVerify: n.blsVerify,
    agent: e
  }), c = Ve(a.lookup_path([...s, ae("status")]));
  let d;
  switch (typeof c > "u" ? d = mt.Unknown : d = new TextDecoder().decode(c), d) {
    case mt.Replied:
      return {
        reply: Ve(a.lookup_path([...s, "reply"])),
        certificate: a
      };
    case mt.Received:
    case mt.Unknown:
    case mt.Processing: {
      const f = n.strategy ?? l1();
      return await f(t, r, d), $f(e, t, r, {
        ...n,
        strategy: f,
        request: o
      });
    }
    case mt.Rejected: {
      const f = new Uint8Array(Ve(a.lookup_path([...s, "reject_code"])))[0], l = new TextDecoder().decode(Ve(a.lookup_path([...s, "reject_message"]))), u = Ve(a.lookup_path([...s, "error_code"])), h = u ? new TextDecoder().decode(u) : void 0;
      throw Mn.fromCode(new Pc(r, f, l, h));
    }
    case mt.Done:
      throw Ge.fromCode(new El(r));
  }
  throw Cr;
}
async function E1(e) {
  const { paths: t, agent: r, pollingOptions: n } = e;
  if (n.request && ga(n.request)) return n.request;
  const s = await r.createReadStateRequest?.({ paths: t }, void 0);
  if (!ga(s)) throw oe.fromCode(new Tl(s));
  return s;
}
var je = Symbol.for("ic-agent-metadata"), v1 = class {
  static agentOf(e) {
    return e[je].config.agent;
  }
  static interfaceOf(e) {
    return e[je].service;
  }
  static canisterIdOf(e) {
    return X.from(e[je].config.canisterId);
  }
  static createActorClass(e, t) {
    const r = e({ IDL: Ul });
    class n extends v1 {
      constructor(i) {
        if (!i.canisterId) throw oe.fromCode(new Do(i.canisterId));
        const o = typeof i.canisterId == "string" ? X.fromText(i.canisterId) : i.canisterId;
        super({
          config: {
            ...jf,
            ...i,
            canisterId: o
          },
          service: r
        });
        for (const [a, c] of r._fields)
          t?.httpDetails && c.annotations.push(Kf), t?.certificate && c.annotations.push(Hf), this[a] = _1(this, a, c, i.blsVerify);
      }
    }
    return n;
  }
  static createActor(e, t) {
    if (!t.canisterId) throw oe.fromCode(new Do(t.canisterId));
    return new (this.createActorClass(e))(t);
  }
  static createActorWithHttpDetails(e, t) {
    return new (this.createActorClass(e, { httpDetails: !0 }))(t);
  }
  static createActorWithExtendedDetails(e, t, r = {
    httpDetails: !0,
    certificate: !0
  }) {
    return new (this.createActorClass(e, r))(t);
  }
  constructor(e) {
    this[je] = Object.freeze(e);
  }
};
function vr(e, t) {
  const r = _u(e, t);
  switch (r.length) {
    case 0:
      return;
    case 1:
      return r[0];
    default:
      return r;
  }
}
var jf = { pollingOptions: g1 }, Kf = "http-details", Hf = "certificate";
function _1(e, t, r, n) {
  let s;
  r.annotations.includes("query") || r.annotations.includes("composite_query") ? s = async (o, ...a) => {
    o = {
      ...o,
      ...e[je].config.queryTransform?.(t, a, {
        ...e[je].config,
        ...o
      })
    };
    const c = o.agent || e[je].config.agent || new ma(), d = X.from(o.canisterId || e[je].config.canisterId), f = gi(r.argTypes, a), l = await c.query(d, {
      methodName: t,
      arg: f,
      effectiveCanisterId: o.effectiveCanisterId
    }), u = {
      ...l.httpDetails,
      requestDetails: l.requestDetails
    };
    switch (l.status) {
      case Fr.Rejected: {
        const h = new gl(l.requestId, l.reject_code, l.reject_message, l.error_code, l.signatures);
        throw h.callContext = {
          canisterId: d,
          methodName: t,
          httpDetails: u
        }, Mn.fromCode(h);
      }
      case Fr.Replied:
        return r.annotations.includes("http-details") ? {
          httpDetails: u,
          result: vr(r.retTypes, l.reply.arg)
        } : vr(r.retTypes, l.reply.arg);
    }
  } : s = async (o, ...a) => {
    o = {
      ...o,
      ...e[je].config.callTransform?.(t, a, {
        ...e[je].config,
        ...o
      })
    };
    const c = o.agent || e[je].config.agent || ma.createSync(), { canisterId: d, effectiveCanisterId: f, pollingOptions: l } = {
      ...jf,
      ...e[je].config,
      ...o
    }, u = X.from(d), h = f !== void 0 ? X.from(f) : u, p = gi(r.argTypes, a), { requestId: y, response: w, requestDetails: m } = await c.call(u, {
      methodName: t,
      arg: p,
      effectiveCanisterId: h,
      nonce: o.nonce
    });
    let g, E;
    if (Pd(w.body)) {
      if (c.rootKey == null) throw He.fromCode(new bs());
      const B = w.body.certificate;
      E = await io.create({
        certificate: B,
        rootKey: c.rootKey,
        canisterId: h,
        blsVerify: n,
        agent: c
      });
      const U = [ae("request_status"), y];
      switch (new TextDecoder().decode(Ve(E.lookup_path([...U, "status"])))) {
        case "replied":
          g = Ve(E.lookup_path([...U, "reply"]));
          break;
        case "rejected": {
          const v = new Uint8Array(Ve(E.lookup_path([...U, "reject_code"])))[0], N = new TextDecoder().decode(Ve(E.lookup_path([...U, "reject_message"]))), P = Ve(E.lookup_path([...U, "error_code"])), A = new Pc(y, v, N, P ? new TextDecoder().decode(P) : void 0);
          throw A.callContext = {
            canisterId: u,
            methodName: t,
            httpDetails: w
          }, Mn.fromCode(A);
        }
      }
    } else if (qd(w.body)) {
      const { reject_code: B, reject_message: U, error_code: v } = w.body, N = new wl(y, B, U, v);
      throw N.callContext = {
        canisterId: u,
        methodName: t,
        httpDetails: w
      }, Mn.fromCode(N);
    }
    if (w.status === 202) {
      const B = await $f(c, h, y, {
        ...l,
        blsVerify: n
      });
      E = B.certificate, g = B.reply;
    }
    const _ = r.annotations.includes(Kf), I = r.annotations.includes(Hf), S = {
      ...w,
      requestDetails: m
    };
    if (g !== void 0)
      return _ && I ? {
        httpDetails: S,
        certificate: E,
        result: vr(r.retTypes, g)
      } : I ? {
        certificate: E,
        result: vr(r.retTypes, g)
      } : _ ? {
        httpDetails: S,
        result: vr(r.retTypes, g)
      } : vr(r.retTypes, g);
    {
      const B = new gt(`Call was returned undefined. We cannot determine if the call was successful or not. Return types: [${r.retTypes.map((U) => U.display()).join(",")}].`);
      throw B.callContext = {
        canisterId: u,
        methodName: t,
        httpDetails: S
      }, Ge.fromCode(B);
    }
  };
  const i = (...o) => s({}, ...o);
  return i.withOptions = (o) => (...a) => s(o, ...a), i;
}
function wa(e) {
  return e !== null && typeof e == "object";
}
var Ys = class en {
  static from(t) {
    if (typeof t == "string") {
      const r = at(t);
      return this.fromRaw(r);
    } else if (wa(t)) {
      const r = t;
      if (wa(r) && Object.hasOwnProperty.call(r, "__derEncodedPublicKey__")) return this.fromDer(r);
      if (ArrayBuffer.isView(r)) {
        const n = r;
        return this.fromRaw(Vt(n.buffer));
      } else {
        if (r instanceof ArrayBuffer) return this.fromRaw(Vt(r));
        if ("rawKey" in r && r.rawKey instanceof Uint8Array) return this.fromRaw(r.rawKey);
        if ("derKey" in r) return this.fromDer(r.derKey);
        if ("toDer" in r) return this.fromDer(r.toDer());
      }
    }
    throw new Error("Cannot construct Ed25519PublicKey from the provided key.");
  }
  static fromRaw(t) {
    return new en(t);
  }
  static fromDer(t) {
    return new en(this.derDecode(t));
  }
  static {
    this.RAW_KEY_LENGTH = 32;
  }
  static derEncode(t) {
    const r = Lf(t, us);
    return r.__derEncodedPublicKey__ = void 0, r;
  }
  static derDecode(t) {
    const r = Mf(t, us);
    if (r.length !== this.RAW_KEY_LENGTH) throw new Error("An Ed25519 public key must be exactly 32bytes long");
    return r;
  }
  #e;
  get rawKey() {
    return this.#e;
  }
  #t;
  get derKey() {
    return this.#t;
  }
  constructor(t) {
    if (t.byteLength !== en.RAW_KEY_LENGTH) throw new Error("An Ed25519 public key must be exactly 32bytes long");
    this.#e = t, this.#t = en.derEncode(t);
  }
  toDer() {
    return this.derKey;
  }
  toRaw() {
    return this.rawKey;
  }
}, zs = class tn extends Xi {
  static generate(t) {
    if (t && t.length !== 32) throw new Error("Ed25519 Seed needs to be 32 bytes long.");
    t || (t = qe.utils.randomPrivateKey()), Ol(t, new Uint8Array(new Array(32).fill(0))) && console.warn("Seed is all zeros. This is not a secure seed. Please provide a seed with sufficient entropy if this is a production environment.");
    const r = new Uint8Array(32);
    for (let s = 0; s < 32; s++) r[s] = t[s];
    const n = qe.getPublicKey(r);
    return tn.fromKeyPair(n, r);
  }
  static fromParsedJson(t) {
    const [r, n] = t;
    return new tn(Ys.fromDer(at(r)), at(n));
  }
  static fromJSON(t) {
    const r = JSON.parse(t);
    if (Array.isArray(r)) {
      if (typeof r[0] == "string" && typeof r[1] == "string") return this.fromParsedJson([r[0], r[1]]);
      throw new Error("Deserialization error: JSON must have at least 2 items.");
    }
    throw new Error(`Deserialization error: Invalid JSON type for string: ${JSON.stringify(t)}`);
  }
  static fromKeyPair(t, r) {
    return new tn(Ys.fromRaw(t), r);
  }
  static fromSecretKey(t) {
    const r = qe.getPublicKey(t);
    return tn.fromKeyPair(r, t);
  }
  #e;
  #t;
  constructor(t, r) {
    super(), this.#e = Ys.from(t), this.#t = r;
  }
  toJSON() {
    return [te(this.#e.toDer()), te(this.#t)];
  }
  getKeyPair() {
    return {
      secretKey: this.#t,
      publicKey: this.#e
    };
  }
  getPublicKey() {
    return this.#e;
  }
  async sign(t) {
    const r = qe.sign(t, this.#t.slice(0, 32));
    return Object.defineProperty(r, "__signature__", {
      enumerable: !1,
      value: void 0
    }), r;
  }
  static verify(t, r, n) {
    const [s, i, o] = [
      t,
      r,
      n
    ].map((a) => (typeof a == "string" && (a = at(a)), Vt(a)));
    return qe.verify(s, i, o);
  }
}, x1 = class Gf extends Error {
  constructor(t) {
    super(t), this.message = t, Object.setPrototypeOf(this, Gf.prototype);
  }
};
function Ea(e) {
  if (typeof globalThis < "u" && globalThis.crypto && globalThis.crypto.subtle) return globalThis.crypto.subtle;
  if (e) return e;
  if (typeof crypto < "u" && crypto.subtle) return crypto.subtle;
  throw new x1("Global crypto was not available and none was provided. Please inlcude a SubtleCrypto implementation. See https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto");
}
var va = class Zf extends Xi {
  static async generate(t) {
    const { extractable: r = !1, keyUsages: n = ["sign", "verify"], subtleCrypto: s } = t ?? {}, i = Ea(s), o = await i.generateKey({
      name: "ECDSA",
      namedCurve: "P-256"
    }, r, n), a = Vt(await i.exportKey("spki", o.publicKey));
    return Object.assign(a, { __derEncodedPublicKey__: void 0 }), new this(o, a, i);
  }
  static async fromKeyPair(t, r) {
    const n = Ea(r), s = Vt(await n.exportKey("spki", t.publicKey));
    return Object.assign(s, { __derEncodedPublicKey__: void 0 }), new Zf(t, s, n);
  }
  constructor(t, r, n) {
    super(), this._keyPair = t, this._derKey = r, this._subtleCrypto = n;
  }
  getKeyPair() {
    return this._keyPair;
  }
  getPublicKey() {
    const t = this._derKey, r = Object.create(this._keyPair.publicKey);
    return r.toDer = function() {
      return t;
    }, r;
  }
  async sign(t) {
    const r = Vt(await this._subtleCrypto.sign({
      name: "ECDSA",
      hash: { name: "SHA-256" }
    }, this._keyPair.privateKey, t));
    return Object.assign(r, { __signature__: void 0 }), r;
  }
}, B1 = class {
  #e;
  get rawKey() {
    return this.#e.rawKey;
  }
  get derKey() {
    return this.#e.derKey;
  }
  toDer() {
    return this.#e.toDer();
  }
  getPublicKey() {
    return this.#e;
  }
  getPrincipal() {
    if (!this.#e.rawKey) throw new Error("Cannot get principal from a public key without a raw key.");
    return X.fromUint8Array(new Uint8Array(this.#e.rawKey));
  }
  transformRequest() {
    return Promise.reject("Not implemented. You are attempting to use a partial identity to sign calls, but this identity only has access to the public key.To sign calls, use a DelegationIdentity instead.");
  }
  constructor(e) {
    this.#e = e;
  }
};
function Gn(e) {
  return e instanceof Uint8Array ? te(e) : te(new Uint8Array(e));
}
function Xs(e) {
  if (typeof e != "string" || e.length < 64) throw new Error("Invalid public key.");
  return at(e);
}
var lo = class {
  constructor(e, t, r) {
    this.pubkey = e, this.expiration = t, this.targets = r;
  }
  toCborValue() {
    return {
      pubkey: this.pubkey,
      expiration: this.expiration,
      ...this.targets && { targets: this.targets }
    };
  }
  toJSON() {
    return {
      expiration: this.expiration.toString(16),
      pubkey: Gn(this.pubkey),
      ...this.targets && { targets: this.targets.map((e) => e.toHex()) }
    };
  }
};
async function I1(e, t, r, n) {
  const s = new lo(t.toDer(), BigInt(+r) * BigInt(1e6), n), i = new Uint8Array([...Ml, ...new Uint8Array(Ar({ ...s }))]);
  return {
    delegation: s,
    signature: await e.sign(i)
  };
}
var _a = class Yf {
  static async create(t, r, n = new Date(Date.now() + 900 * 1e3), s = {}) {
    const i = await I1(t, r, n, s.targets);
    return new Yf([...s.previous?.delegations || [], i], s.previous?.publicKey || t.getPublicKey().toDer());
  }
  static fromJSON(t) {
    const { publicKey: r, delegations: n } = typeof t == "string" ? JSON.parse(t) : t;
    if (!Array.isArray(n)) throw new Error("Invalid delegations.");
    const s = n.map((i) => {
      const { delegation: o, signature: a } = i, { pubkey: c, expiration: d, targets: f } = o;
      if (f !== void 0 && !Array.isArray(f)) throw new Error("Invalid targets.");
      return {
        delegation: new lo(Xs(c), BigInt("0x" + d), f && f.map((l) => {
          if (typeof l != "string") throw new Error("Invalid target.");
          return X.fromHex(l);
        })),
        signature: Xs(a)
      };
    });
    return new this(s, Xs(r));
  }
  static fromDelegations(t, r) {
    return new this(t, r);
  }
  constructor(t, r) {
    this.delegations = t, this.publicKey = r;
  }
  toJSON() {
    return {
      delegations: this.delegations.map((t) => {
        const { delegation: r, signature: n } = t, { targets: s } = r;
        return {
          delegation: {
            expiration: r.expiration.toString(16),
            pubkey: Gn(r.pubkey),
            ...s && { targets: s.map((i) => i.toHex()) }
          },
          signature: Gn(n)
        };
      }),
      publicKey: Gn(this.publicKey)
    };
  }
}, xa = class extends Xi {
  static fromDelegation(e, t) {
    return new this(e, t);
  }
  constructor(e, t) {
    super(), this._inner = e, this._delegation = t;
  }
  getDelegation() {
    return this._delegation;
  }
  getPublicKey() {
    return {
      derKey: this._delegation.publicKey,
      toDer: () => this._delegation.publicKey
    };
  }
  sign(e) {
    return this._inner.sign(e);
  }
  async transformRequest(e) {
    const { body: t, ...r } = e, n = await Ar(t);
    return {
      ...r,
      body: {
        content: t,
        sender_sig: await this.sign(new Uint8Array([...Ju, ...new Uint8Array(n)])),
        sender_delegation: this._delegation.delegations,
        sender_pubkey: this._delegation.publicKey
      }
    };
  }
}, Ba = class zf extends B1 {
  #e;
  get delegation() {
    return this.#e;
  }
  constructor(t, r) {
    super(t), this.#e = r;
  }
  static fromDelegation(t, r) {
    return new zf(t, r);
  }
};
function Ia(e, t) {
  for (const { delegation: s } of e.delegations) if (+new Date(Number(s.expiration / BigInt(1e6))) <= +Date.now()) return !1;
  const r = [], n = t?.scope;
  n && (Array.isArray(n) ? r.push(...n.map((s) => typeof s == "string" ? X.fromText(s) : s)) : r.push(typeof n == "string" ? X.fromText(n) : n));
  for (const s of r) {
    const i = s.toText();
    for (const { delegation: o } of e.delegations) {
      if (o.targets === void 0) continue;
      let a = !0;
      for (const c of o.targets) if (c.toText() === i) {
        a = !1;
        break;
      }
      if (a) return !1;
    }
  }
  return !0;
}
var Sa;
(function(e) {
  e[e.ECDSA_WITH_SHA256 = -7] = "ECDSA_WITH_SHA256";
})(Sa || (Sa = {}));
var Ta = [
  "mousedown",
  "mousemove",
  "keydown",
  "touchstart",
  "wheel"
], Oa = class {
  callbacks = [];
  idleTimeout = 600 * 1e3;
  timeoutID = void 0;
  static create(e = {}) {
    return new this(e);
  }
  constructor(e = {}) {
    const { onIdle: t, idleTimeout: r = 600 * 1e3 } = e || {};
    this.callbacks = t ? [t] : [], this.idleTimeout = r;
    const n = this._resetTimer.bind(this);
    window.addEventListener("load", n, !0), Ta.forEach(function(i) {
      document.addEventListener(i, n, !0);
    });
    const s = (i, o) => {
      let a;
      return (...c) => {
        const d = this, f = function() {
          a = void 0, i.apply(d, c);
        };
        clearTimeout(a), a = window.setTimeout(f, o);
      };
    };
    if (e?.captureScroll) {
      const i = s(n, e?.scrollDebounce ?? 100);
      window.addEventListener("scroll", i, !0);
    }
    n();
  }
  registerCallback(e) {
    this.callbacks.push(e);
  }
  exit() {
    clearTimeout(this.timeoutID), window.removeEventListener("load", this._resetTimer, !0);
    const e = this._resetTimer.bind(this);
    Ta.forEach(function(t) {
      document.removeEventListener(t, e, !0);
    }), this.callbacks.forEach((t) => t());
  }
  _resetTimer() {
    const e = this.exit.bind(this);
    window.clearTimeout(this.timeoutID), this.timeoutID = window.setTimeout(e, this.idleTimeout);
  }
}, S1 = (e, t) => t.some((r) => e instanceof r), Ca, Aa;
function T1() {
  return Ca || (Ca = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function O1() {
  return Aa || (Aa = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
var Xf = /* @__PURE__ */ new WeakMap(), Di = /* @__PURE__ */ new WeakMap(), Wf = /* @__PURE__ */ new WeakMap(), Ws = /* @__PURE__ */ new WeakMap(), ho = /* @__PURE__ */ new WeakMap();
function C1(e) {
  const t = new Promise((r, n) => {
    const s = () => {
      e.removeEventListener("success", i), e.removeEventListener("error", o);
    }, i = () => {
      r(jt(e.result)), s();
    }, o = () => {
      n(e.error), s();
    };
    e.addEventListener("success", i), e.addEventListener("error", o);
  });
  return t.then((r) => {
    r instanceof IDBCursor && Xf.set(r, e);
  }).catch(() => {
  }), ho.set(t, e), t;
}
function A1(e) {
  if (Di.has(e)) return;
  const t = new Promise((r, n) => {
    const s = () => {
      e.removeEventListener("complete", i), e.removeEventListener("error", o), e.removeEventListener("abort", o);
    }, i = () => {
      r(), s();
    }, o = () => {
      n(e.error || new DOMException("AbortError", "AbortError")), s();
    };
    e.addEventListener("complete", i), e.addEventListener("error", o), e.addEventListener("abort", o);
  });
  Di.set(e, t);
}
var qi = {
  get(e, t, r) {
    if (e instanceof IDBTransaction) {
      if (t === "done") return Di.get(e);
      if (t === "objectStoreNames") return e.objectStoreNames || Wf.get(e);
      if (t === "store") return r.objectStoreNames[1] ? void 0 : r.objectStore(r.objectStoreNames[0]);
    }
    return jt(e[t]);
  },
  set(e, t, r) {
    return e[t] = r, !0;
  },
  has(e, t) {
    return e instanceof IDBTransaction && (t === "done" || t === "store") ? !0 : t in e;
  }
};
function R1(e) {
  qi = e(qi);
}
function N1(e) {
  return e === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(t, ...r) {
    const n = e.call(Js(this), t, ...r);
    return Wf.set(n, t.sort ? t.sort() : [t]), jt(n);
  } : O1().includes(e) ? function(...t) {
    return e.apply(Js(this), t), jt(Xf.get(this));
  } : function(...t) {
    return jt(e.apply(Js(this), t));
  };
}
function U1(e) {
  return typeof e == "function" ? N1(e) : (e instanceof IDBTransaction && A1(e), S1(e, T1()) ? new Proxy(e, qi) : e);
}
function jt(e) {
  if (e instanceof IDBRequest) return C1(e);
  if (Ws.has(e)) return Ws.get(e);
  const t = U1(e);
  return t !== e && (Ws.set(e, t), ho.set(t, e)), t;
}
var Js = (e) => ho.get(e);
function F1(e, t, { blocked: r, upgrade: n, blocking: s, terminated: i } = {}) {
  const o = indexedDB.open(e, t), a = jt(o);
  return n && o.addEventListener("upgradeneeded", (c) => {
    n(jt(o.result), c.oldVersion, c.newVersion, jt(o.transaction), c);
  }), r && o.addEventListener("blocked", (c) => r(c.oldVersion, c.newVersion, c)), a.then((c) => {
    i && c.addEventListener("close", () => i()), s && c.addEventListener("versionchange", (d) => s(d.oldVersion, d.newVersion, d));
  }).catch(() => {
  }), a;
}
var D1 = [
  "get",
  "getKey",
  "getAll",
  "getAllKeys",
  "count"
], q1 = [
  "put",
  "add",
  "delete",
  "clear"
], Qs = /* @__PURE__ */ new Map();
function Ra(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
  if (Qs.get(t)) return Qs.get(t);
  const r = t.replace(/FromIndex$/, ""), n = t !== r, s = q1.includes(r);
  if (!(r in (n ? IDBIndex : IDBObjectStore).prototype) || !(s || D1.includes(r))) return;
  const i = async function(o, ...a) {
    const c = this.transaction(o, s ? "readwrite" : "readonly");
    let d = c.store;
    return n && (d = d.index(a.shift())), (await Promise.all([d[r](...a), s && c.done]))[0];
  };
  return Qs.set(t, i), i;
}
R1((e) => ({
  ...e,
  get: (t, r, n) => Ra(t, r) || e.get(t, r, n),
  has: (t, r) => !!Ra(t, r) || e.has(t, r)
}));
var Jf = "auth-client-db", Qf = "ic-keyval", P1 = async (e = Jf, t = Qf, r) => (td && localStorage?.getItem("delegation") && (localStorage.removeItem(Yt), localStorage.removeItem(Lt)), await F1(e, r, { upgrade: (n) => {
  n.objectStoreNames.contains(t) && n.clear(t), n.createObjectStore(t);
} }));
async function L1(e, t, r) {
  return await e.get(t, r);
}
async function M1(e, t, r, n) {
  return await e.put(t, n, r);
}
async function k1(e, t, r) {
  return await e.delete(t, r);
}
var V1 = class ed {
  _db;
  _storeName;
  static async create(t) {
    const { dbName: r = Jf, storeName: n = Qf, version: s = 1 } = t ?? {};
    return new ed(await P1(r, n, s), n);
  }
  constructor(t, r) {
    this._db = t, this._storeName = r;
  }
  async set(t, r) {
    return await M1(this._db, this._storeName, t, r);
  }
  async get(t) {
    return await L1(this._db, this._storeName, t) ?? null;
  }
  async remove(t) {
    return await k1(this._db, this._storeName, t);
  }
}, Lt = "identity", Yt = "delegation", td = typeof window < "u", $1 = class {
  prefix;
  _localStorage;
  constructor(e = "ic-", t) {
    this.prefix = e, this._localStorage = t;
  }
  get(e) {
    return Promise.resolve(this._getLocalStorage().getItem(this.prefix + e));
  }
  set(e, t) {
    return this._getLocalStorage().setItem(this.prefix + e, t), Promise.resolve();
  }
  remove(e) {
    return this._getLocalStorage().removeItem(this.prefix + e), Promise.resolve();
  }
  _getLocalStorage() {
    if (this._localStorage) return this._localStorage;
    const e = typeof window > "u" ? typeof globalThis > "u" ? typeof self > "u" ? void 0 : self.localStorage : globalThis.localStorage : window.localStorage;
    if (!e) throw new Error("Could not find local storage.");
    return e;
  }
}, j1 = class {
  #e;
  constructor(e) {
    this.#e = e ?? {};
  }
  initializedDb;
  get _db() {
    return new Promise((e, t) => {
      if (this.initializedDb) {
        e(this.initializedDb);
        return;
      }
      V1.create(this.#e).then((r) => {
        this.initializedDb = r, e(r);
      }).catch(t);
    });
  }
  async get(e) {
    return await (await this._db).get(e);
  }
  async set(e, t) {
    await (await this._db).set(e, t);
  }
  async remove(e) {
    await (await this._db).remove(e);
  }
}, K1 = BigInt(1e9) * BigInt(3600), H1 = "https://identity.internetcomputer.org", G1 = "#authorize", Z1 = BigInt(8) * K1, ei = "ECDSA", ti = "Ed25519", Y1 = 500, z1 = "UserInterrupt", Gp = class {
  _identity;
  _key;
  _chain;
  _storage;
  idleManager;
  _createOptions;
  _idpWindow;
  _eventHandler;
  static async create(e = {}) {
    const t = e.storage ?? new j1(), r = e.keyType ?? ei;
    let n = null;
    if (e.identity) n = e.identity;
    else {
      let a = await t.get(Lt);
      if (!a && td) try {
        const c = new $1(), d = await c.get(Yt), f = await c.get(Lt);
        d && f && r === ei && (console.log("Discovered an identity stored in localstorage. Migrating to IndexedDB"), await t.set(Yt, d), await t.set(Lt, f), a = d, await c.remove(Yt), await c.remove(Lt));
      } catch (c) {
        console.error("error while attempting to recover localstorage: " + c);
      }
      if (a) try {
        typeof a == "object" ? r === ti && typeof a == "string" ? n = zs.fromJSON(a) : n = await va.fromKeyPair(a) : typeof a == "string" && (n = zs.fromJSON(a));
      } catch {
      }
    }
    let s = new ts(), i = null;
    if (n) try {
      const a = await t.get(Yt);
      if (typeof a == "object" && a !== null) throw new Error("Delegation chain is incorrectly stored. A delegation chain should be stored as a string.");
      e.identity ? s = e.identity : a && (i = _a.fromJSON(a), Ia(i) ? "toDer" in n ? s = Ba.fromDelegation(n, i) : s = xa.fromDelegation(n, i) : (await ri(t), n = null));
    } catch (a) {
      console.error(a), await ri(t), n = null;
    }
    let o;
    return e.idleOptions?.disableIdle ? o = void 0 : (i || e.identity) && (o = Oa.create(e.idleOptions)), n || (r === ti ? (n = zs.generate(), await t.set(Lt, JSON.stringify(n.toJSON()))) : (e.storage && r === ei && console.warn(`You are using a custom storage provider that may not support CryptoKey storage. If you are using a custom storage provider that does not support CryptoKey storage, you should use '${ti}' as the key type, as it can serialize to a string`), n = await va.generate(), await t.set(Lt, n.getKeyPair()))), new this(s, n, i, t, o, e);
  }
  constructor(e, t, r, n, s, i, o, a) {
    this._identity = e, this._key = t, this._chain = r, this._storage = n, this.idleManager = s, this._createOptions = i, this._idpWindow = o, this._eventHandler = a, this._registerDefaultIdleCallback();
  }
  _registerDefaultIdleCallback() {
    const e = this._createOptions?.idleOptions;
    !e?.onIdle && !e?.disableDefaultIdleCallback && this.idleManager?.registerCallback(() => {
      this.logout(), location.reload();
    });
  }
  async _handleSuccess(e, t) {
    const r = e.delegations.map((o) => ({
      delegation: new lo(o.delegation.pubkey, o.delegation.expiration, o.delegation.targets),
      signature: o.signature
    })), n = _a.fromDelegations(r, e.userPublicKey), s = this._key;
    if (!s) return;
    this._chain = n, "toDer" in s ? this._identity = Ba.fromDelegation(s, this._chain) : this._identity = xa.fromDelegation(s, this._chain), this._idpWindow?.close();
    const i = this._createOptions?.idleOptions;
    !this.idleManager && !i?.disableIdle && (this.idleManager = Oa.create(i), this._registerDefaultIdleCallback()), this._removeEventListener(), delete this._idpWindow, this._chain && await this._storage.set(Yt, JSON.stringify(this._chain.toJSON())), t?.(e);
  }
  getIdentity() {
    return this._identity;
  }
  async isAuthenticated() {
    return !this.getIdentity().getPrincipal().isAnonymous() && this._chain !== null && Ia(this._chain);
  }
  async login(e) {
    const t = X1(this._createOptions?.loginOptions, e), r = t?.maxTimeToLive ?? Z1, n = new URL(t?.identityProvider?.toString() || H1);
    n.hash = G1, this._idpWindow?.close(), this._removeEventListener(), this._eventHandler = this._getEventHandler(n, {
      maxTimeToLive: r,
      ...t
    }), window.addEventListener("message", this._eventHandler), this._idpWindow = window.open(n.toString(), "idpWindow", t?.windowOpenerFeatures) ?? void 0;
    const s = () => {
      this._idpWindow && (this._idpWindow.closed ? this._handleFailure(z1, t?.onError) : setTimeout(s, Y1));
    };
    s();
  }
  _getEventHandler(e, t) {
    return async (r) => {
      if (r.origin !== e.origin) return;
      const n = r.data;
      switch (n.kind) {
        case "authorize-ready": {
          const s = {
            kind: "authorize-client",
            sessionPublicKey: new Uint8Array(this._key?.getPublicKey().toDer()),
            maxTimeToLive: t?.maxTimeToLive,
            allowPinAuthentication: t?.allowPinAuthentication,
            derivationOrigin: t?.derivationOrigin?.toString(),
            ...t?.customValues
          };
          this._idpWindow?.postMessage(s, e.origin);
          break;
        }
        case "authorize-client-success":
          try {
            await this._handleSuccess(n, t?.onSuccess);
          } catch (s) {
            this._handleFailure(s.message, t?.onError);
          }
          break;
        case "authorize-client-failure":
          this._handleFailure(n.text, t?.onError);
          break;
        default:
          break;
      }
    };
  }
  _handleFailure(e, t) {
    this._idpWindow?.close(), t?.(e), this._removeEventListener(), delete this._idpWindow;
  }
  _removeEventListener() {
    this._eventHandler && window.removeEventListener("message", this._eventHandler), this._eventHandler = void 0;
  }
  async logout(e = {}) {
    if (await ri(this._storage), this._identity = new ts(), this._chain = null, e.returnTo) try {
      window.history.pushState({}, "", e.returnTo);
    } catch {
      window.location.href = e.returnTo;
    }
  }
};
async function ri(e) {
  await e.remove(Lt), await e.remove(Yt), await e.remove("iv");
}
function X1(e, t) {
  if (!e && !t) return;
  const r = e?.customValues || t?.customValues ? {
    ...e?.customValues,
    ...t?.customValues
  } : void 0;
  return {
    ...e,
    ...t,
    customValues: r
  };
}
var _r = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
function xs(e) {
  return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
}
function Lr(e) {
  if (!Number.isSafeInteger(e) || e < 0) throw new Error("positive integer expected, got " + e);
}
function Fe(e, ...t) {
  if (!xs(e)) throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length)) throw new Error("Uint8Array expected of length " + t + ", got length=" + e.length);
}
function po(e) {
  if (typeof e != "function" || typeof e.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
  Lr(e.outputLen), Lr(e.blockLen);
}
function Mr(e, t = !0) {
  if (e.destroyed) throw new Error("Hash instance has been destroyed");
  if (t && e.finished) throw new Error("Hash#digest() has already been called");
}
function rd(e, t) {
  Fe(e);
  const r = t.outputLen;
  if (e.length < r) throw new Error("digestInto() expects output buffer of length at least " + r);
}
function W1(e) {
  return new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
}
function fr(...e) {
  for (let t = 0; t < e.length; t++) e[t].fill(0);
}
function ni(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function nt(e, t) {
  return e << 32 - t | e >>> t;
}
var J1 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function Q1(e) {
  return e << 24 & 4278190080 | e << 8 & 16711680 | e >>> 8 & 65280 | e >>> 24 & 255;
}
function e2(e) {
  for (let t = 0; t < e.length; t++) e[t] = Q1(e[t]);
  return e;
}
var Na = J1 ? (e) => e : e2, nd = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function", t2 = /* @__PURE__ */ Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function gn(e) {
  if (Fe(e), nd) return e.toHex();
  let t = "";
  for (let r = 0; r < e.length; r++) t += t2[e[r]];
  return t;
}
var ht = {
  _0: 48,
  _9: 57,
  A: 65,
  F: 70,
  a: 97,
  f: 102
};
function Ua(e) {
  if (e >= ht._0 && e <= ht._9) return e - ht._0;
  if (e >= ht.A && e <= ht.F) return e - (ht.A - 10);
  if (e >= ht.a && e <= ht.f) return e - (ht.a - 10);
}
function sd(e) {
  if (typeof e != "string") throw new Error("hex string expected, got " + typeof e);
  if (nd) return Uint8Array.fromHex(e);
  const t = e.length, r = t / 2;
  if (t % 2) throw new Error("hex string expected, got unpadded hex of length " + t);
  const n = new Uint8Array(r);
  for (let s = 0, i = 0; s < r; s++, i += 2) {
    const o = Ua(e.charCodeAt(i)), a = Ua(e.charCodeAt(i + 1));
    if (o === void 0 || a === void 0) {
      const c = e[i] + e[i + 1];
      throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + i);
    }
    n[s] = o * 16 + a;
  }
  return n;
}
function On(e) {
  if (typeof e != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(e));
}
function dr(e) {
  return typeof e == "string" && (e = On(e)), Fe(e), e;
}
function ye(...e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    Fe(s), t += s.length;
  }
  const r = new Uint8Array(t);
  for (let n = 0, s = 0; n < e.length; n++) {
    const i = e[n];
    r.set(i, s), s += i.length;
  }
  return r;
}
var bo = class {
};
function r2(e) {
  const t = (n) => e().update(dr(n)).digest(), r = e();
  return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = () => e(), t;
}
function n2(e) {
  const t = (n, s) => e(s).update(dr(n)).digest(), r = e({});
  return t.outputLen = r.outputLen, t.blockLen = r.blockLen, t.create = (n) => e(n), t;
}
function s2(e = 32) {
  if (_r && typeof _r.getRandomValues == "function") return _r.getRandomValues(new Uint8Array(e));
  if (_r && typeof _r.randomBytes == "function") return Uint8Array.from(_r.randomBytes(e));
  throw new Error("crypto.getRandomValues must be defined");
}
function i2(e, t, r, n) {
  if (typeof e.setBigUint64 == "function") return e.setBigUint64(t, r, n);
  const s = BigInt(32), i = BigInt(4294967295), o = Number(r >> s & i), a = Number(r & i), c = n ? 4 : 0, d = n ? 0 : 4;
  e.setUint32(t + c, o, n), e.setUint32(t + d, a, n);
}
function o2(e, t, r) {
  return e & t ^ ~e & r;
}
function a2(e, t, r) {
  return e & t ^ e & r ^ t & r;
}
var c2 = class extends bo {
  constructor(e, t, r, n) {
    super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = e, this.outputLen = t, this.padOffset = r, this.isLE = n, this.buffer = new Uint8Array(e), this.view = ni(this.buffer);
  }
  update(e) {
    Mr(this), e = dr(e), Fe(e);
    const { view: t, buffer: r, blockLen: n } = this, s = e.length;
    for (let i = 0; i < s; ) {
      const o = Math.min(n - this.pos, s - i);
      if (o === n) {
        const a = ni(e);
        for (; n <= s - i; i += n) this.process(a, i);
        continue;
      }
      r.set(e.subarray(i, i + o), this.pos), this.pos += o, i += o, this.pos === n && (this.process(t, 0), this.pos = 0);
    }
    return this.length += e.length, this.roundClean(), this;
  }
  digestInto(e) {
    Mr(this), rd(e, this), this.finished = !0;
    const { buffer: t, view: r, blockLen: n, isLE: s } = this;
    let { pos: i } = this;
    t[i++] = 128, fr(this.buffer.subarray(i)), this.padOffset > n - i && (this.process(r, 0), i = 0);
    for (let f = i; f < n; f++) t[f] = 0;
    i2(r, n - 8, BigInt(this.length * 8), s), this.process(r, 0);
    const o = ni(e), a = this.outputLen;
    if (a % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const c = a / 4, d = this.get();
    if (c > d.length) throw new Error("_sha2: outputLen bigger than state");
    for (let f = 0; f < c; f++) o.setUint32(4 * f, d[f], s);
  }
  digest() {
    const { buffer: e, outputLen: t } = this;
    this.digestInto(e);
    const r = e.slice(0, t);
    return this.destroy(), r;
  }
  _cloneInto(e) {
    e || (e = new this.constructor()), e.set(...this.get());
    const { blockLen: t, buffer: r, length: n, finished: s, destroyed: i, pos: o } = this;
    return e.destroyed = i, e.finished = s, e.length = n, e.pos = o, n % t && e.buffer.set(r), e;
  }
  clone() {
    return this._cloneInto();
  }
}, Rt = /* @__PURE__ */ Uint32Array.from([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
var qn = /* @__PURE__ */ BigInt(2 ** 32 - 1), Fa = /* @__PURE__ */ BigInt(32);
function u2(e, t = !1) {
  return t ? {
    h: Number(e & qn),
    l: Number(e >> Fa & qn)
  } : {
    h: Number(e >> Fa & qn) | 0,
    l: Number(e & qn) | 0
  };
}
function id(e, t = !1) {
  const r = e.length;
  let n = new Uint32Array(r), s = new Uint32Array(r);
  for (let i = 0; i < r; i++) {
    const { h: o, l: a } = u2(e[i], t);
    [n[i], s[i]] = [o, a];
  }
  return [n, s];
}
var f2 = (e, t, r) => e << r | t >>> 32 - r, d2 = (e, t, r) => t << r | e >>> 32 - r, l2 = (e, t, r) => t << r - 32 | e >>> 64 - r, h2 = (e, t, r) => e << r - 32 | t >>> 64 - r;
var p2 = /* @__PURE__ */ Uint32Array.from([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), Nt = /* @__PURE__ */ new Uint32Array(64), b2 = class extends c2 {
  constructor(e = 32) {
    super(64, e, 8, !1), this.A = Rt[0] | 0, this.B = Rt[1] | 0, this.C = Rt[2] | 0, this.D = Rt[3] | 0, this.E = Rt[4] | 0, this.F = Rt[5] | 0, this.G = Rt[6] | 0, this.H = Rt[7] | 0;
  }
  get() {
    const { A: e, B: t, C: r, D: n, E: s, F: i, G: o, H: a } = this;
    return [
      e,
      t,
      r,
      n,
      s,
      i,
      o,
      a
    ];
  }
  set(e, t, r, n, s, i, o, a) {
    this.A = e | 0, this.B = t | 0, this.C = r | 0, this.D = n | 0, this.E = s | 0, this.F = i | 0, this.G = o | 0, this.H = a | 0;
  }
  process(e, t) {
    for (let f = 0; f < 16; f++, t += 4) Nt[f] = e.getUint32(t, !1);
    for (let f = 16; f < 64; f++) {
      const l = Nt[f - 15], u = Nt[f - 2], h = nt(l, 7) ^ nt(l, 18) ^ l >>> 3;
      Nt[f] = (nt(u, 17) ^ nt(u, 19) ^ u >>> 10) + Nt[f - 7] + h + Nt[f - 16] | 0;
    }
    let { A: r, B: n, C: s, D: i, E: o, F: a, G: c, H: d } = this;
    for (let f = 0; f < 64; f++) {
      const l = nt(o, 6) ^ nt(o, 11) ^ nt(o, 25), u = d + l + o2(o, a, c) + p2[f] + Nt[f] | 0, h = (nt(r, 2) ^ nt(r, 13) ^ nt(r, 22)) + a2(r, n, s) | 0;
      d = c, c = a, a = o, o = i + u | 0, i = s, s = n, n = r, r = u + h | 0;
    }
    r = r + this.A | 0, n = n + this.B | 0, s = s + this.C | 0, i = i + this.D | 0, o = o + this.E | 0, a = a + this.F | 0, c = c + this.G | 0, d = d + this.H | 0, this.set(r, n, s, i, o, a, c, d);
  }
  roundClean() {
    fr(Nt);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), fr(this.buffer);
  }
};
var od = id([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((e) => BigInt(e))), Zp = od[0], Yp = od[1];
var ad = /* @__PURE__ */ r2(() => new b2());
var yo = /* @__PURE__ */ BigInt(0), fs = /* @__PURE__ */ BigInt(1);
function Da(e, t = "") {
  if (typeof e != "boolean") {
    const r = t && `"${t}"`;
    throw new Error(r + "expected boolean, got type=" + typeof e);
  }
  return e;
}
function qa(e, t, r = "") {
  const n = xs(e), s = e?.length, i = t !== void 0;
  if (!n || i && s !== t) {
    const o = r && `"${r}" `, a = i ? ` of length ${t}` : "", c = n ? `length=${s}` : `type=${typeof e}`;
    throw new Error(o + "expected Uint8Array" + a + ", got " + c);
  }
  return e;
}
function cd(e) {
  if (typeof e != "string") throw new Error("hex string expected, got " + typeof e);
  return e === "" ? yo : BigInt("0x" + e);
}
function ut(e) {
  return cd(gn(e));
}
function ud(e) {
  return Fe(e), cd(gn(Uint8Array.from(e).reverse()));
}
function _e(e, t) {
  return sd(e.toString(16).padStart(t * 2, "0"));
}
function fd(e, t) {
  return _e(e, t).reverse();
}
function kr(e, t, r) {
  let n;
  if (typeof t == "string") try {
    n = sd(t);
  } catch (i) {
    throw new Error(e + " must be hex string or Uint8Array, cause: " + i);
  }
  else if (xs(t)) n = Uint8Array.from(t);
  else throw new Error(e + " must be hex string or Uint8Array");
  const s = n.length;
  if (typeof r == "number" && s !== r) throw new Error(e + " of length " + r + " expected, got " + s);
  return n;
}
var si = (e) => typeof e == "bigint" && yo <= e;
function y2(e, t, r) {
  return si(e) && si(t) && si(r) && t <= e && e < r;
}
function wn(e) {
  let t;
  for (t = 0; e > yo; e >>= fs, t += 1) ;
  return t;
}
function m2(e, t) {
  return e >> BigInt(t) & fs;
}
var yr = (e) => (fs << BigInt(e)) - fs;
function g2(e) {
  return typeof e == "function" && Number.isSafeInteger(e.outputLen);
}
function mo(e, t, r = {}) {
  if (!e || typeof e != "object") throw new Error("expected valid options object");
  function n(s, i, o) {
    const a = e[s];
    if (o && a === void 0) return;
    const c = typeof a;
    if (c !== i || a === null) throw new Error(`param "${s}" is invalid: expected ${i}, got ${c}`);
  }
  Object.entries(t).forEach(([s, i]) => n(s, i, !1)), Object.entries(r).forEach(([s, i]) => n(s, i, !0));
}
var dd = () => {
  throw new Error("not implemented");
};
function Pi(e) {
  const t = /* @__PURE__ */ new WeakMap();
  return (r, ...n) => {
    const s = t.get(r);
    if (s !== void 0) return s;
    const i = e(r, ...n);
    return t.set(r, i), i;
  };
}
var $e = BigInt(0), Ue = BigInt(1), Qt = /* @__PURE__ */ BigInt(2), ld = /* @__PURE__ */ BigInt(3), hd = /* @__PURE__ */ BigInt(4), pd = /* @__PURE__ */ BigInt(5), w2 = /* @__PURE__ */ BigInt(7), bd = /* @__PURE__ */ BigInt(8), E2 = /* @__PURE__ */ BigInt(9), yd = /* @__PURE__ */ BigInt(16);
function Ke(e, t) {
  const r = e % t;
  return r >= $e ? r : t + r;
}
function Pa(e, t) {
  if (e === $e) throw new Error("invert: expected non-zero number");
  if (t <= $e) throw new Error("invert: expected positive modulus, got " + t);
  let r = Ke(e, t), n = t, s = $e, i = Ue;
  for (; r !== $e; ) {
    const o = n / r, a = n % r, c = s - i * o;
    n = r, r = a, s = i, i = c;
  }
  if (n !== Ue) throw new Error("invert: does not exist");
  return Ke(s, t);
}
function go(e, t, r) {
  if (!e.eql(e.sqr(t), r)) throw new Error("Cannot find square root");
}
function md(e, t) {
  const r = (e.ORDER + Ue) / hd, n = e.pow(t, r);
  return go(e, n, t), n;
}
function v2(e, t) {
  const r = (e.ORDER - pd) / bd, n = e.mul(t, Qt), s = e.pow(n, r), i = e.mul(t, s), o = e.mul(e.mul(i, Qt), s), a = e.mul(i, e.sub(o, e.ONE));
  return go(e, a, t), a;
}
function _2(e) {
  const t = Hr(e), r = gd(e), n = r(t, t.neg(t.ONE)), s = r(t, n), i = r(t, t.neg(n)), o = (e + w2) / yd;
  return (a, c) => {
    let d = a.pow(c, o), f = a.mul(d, n);
    const l = a.mul(d, s), u = a.mul(d, i), h = a.eql(a.sqr(f), c), p = a.eql(a.sqr(l), c);
    d = a.cmov(d, f, h), f = a.cmov(u, l, p);
    const y = a.eql(a.sqr(f), c), w = a.cmov(d, f, y);
    return go(a, w, c), w;
  };
}
function gd(e) {
  if (e < ld) throw new Error("sqrt is not defined for small field");
  let t = e - Ue, r = 0;
  for (; t % Qt === $e; ) t /= Qt, r++;
  let n = Qt;
  const s = Hr(e);
  for (; ds(s, n) === 1; ) if (n++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
  if (r === 1) return md;
  let i = s.pow(n, t);
  const o = (t + Ue) / Qt;
  return function(a, c) {
    if (a.is0(c)) return c;
    if (ds(a, c) !== 1) throw new Error("Cannot find square root");
    let d = r, f = a.mul(a.ONE, i), l = a.pow(c, t), u = a.pow(c, o);
    for (; !a.eql(l, a.ONE); ) {
      if (a.is0(l)) return a.ZERO;
      let h = 1, p = a.sqr(l);
      for (; !a.eql(p, a.ONE); ) if (h++, p = a.sqr(p), h === d) throw new Error("Cannot find square root");
      const y = Ue << BigInt(d - h - 1), w = a.pow(f, y);
      d = h, f = a.sqr(w), l = a.mul(l, f), u = a.mul(u, w);
    }
    return u;
  };
}
function x2(e) {
  return e % hd === ld ? md : e % bd === pd ? v2 : e % yd === E2 ? _2(e) : gd(e);
}
var B2 = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function wd(e) {
  return mo(e, B2.reduce((t, r) => (t[r] = "function", t), {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "number",
    BITS: "number"
  })), e;
}
function Bs(e, t, r) {
  if (r < $e) throw new Error("invalid exponent, negatives unsupported");
  if (r === $e) return e.ONE;
  if (r === Ue) return t;
  let n = e.ONE, s = t;
  for (; r > $e; ) r & Ue && (n = e.mul(n, s)), s = e.sqr(s), r >>= Ue;
  return n;
}
function mr(e, t, r = !1) {
  const n = new Array(t.length).fill(r ? e.ZERO : void 0), s = t.reduce((o, a, c) => e.is0(a) ? o : (n[c] = o, e.mul(o, a)), e.ONE), i = e.inv(s);
  return t.reduceRight((o, a, c) => e.is0(a) ? o : (n[c] = e.mul(o, n[c]), e.mul(o, a)), i), n;
}
function ds(e, t) {
  const r = (e.ORDER - Ue) / Qt, n = e.pow(t, r), s = e.eql(n, e.ONE), i = e.eql(n, e.ZERO), o = e.eql(n, e.neg(e.ONE));
  if (!s && !i && !o) throw new Error("invalid Legendre symbol result");
  return s ? 1 : i ? 0 : -1;
}
function I2(e, t) {
  t !== void 0 && Lr(t);
  const r = t !== void 0 ? t : e.toString(2).length;
  return {
    nBitLength: r,
    nByteLength: Math.ceil(r / 8)
  };
}
function Hr(e, t, r = !1, n = {}) {
  if (e <= $e) throw new Error("invalid field: expected ORDER > 0, got " + e);
  let s, i, o = !1, a;
  if (typeof t == "object" && t != null) {
    if (n.sqrt || r) throw new Error("cannot specify opts in two arguments");
    const u = t;
    u.BITS && (s = u.BITS), u.sqrt && (i = u.sqrt), typeof u.isLE == "boolean" && (r = u.isLE), typeof u.modFromBytes == "boolean" && (o = u.modFromBytes), a = u.allowedLengths;
  } else typeof t == "number" && (s = t), n.sqrt && (i = n.sqrt);
  const { nBitLength: c, nByteLength: d } = I2(e, s);
  if (d > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let f;
  const l = Object.freeze({
    ORDER: e,
    isLE: r,
    BITS: c,
    BYTES: d,
    MASK: yr(c),
    ZERO: $e,
    ONE: Ue,
    allowedLengths: a,
    create: (u) => Ke(u, e),
    isValid: (u) => {
      if (typeof u != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof u);
      return $e <= u && u < e;
    },
    is0: (u) => u === $e,
    isValidNot0: (u) => !l.is0(u) && l.isValid(u),
    isOdd: (u) => (u & Ue) === Ue,
    neg: (u) => Ke(-u, e),
    eql: (u, h) => u === h,
    sqr: (u) => Ke(u * u, e),
    add: (u, h) => Ke(u + h, e),
    sub: (u, h) => Ke(u - h, e),
    mul: (u, h) => Ke(u * h, e),
    pow: (u, h) => Bs(l, u, h),
    div: (u, h) => Ke(u * Pa(h, e), e),
    sqrN: (u) => u * u,
    addN: (u, h) => u + h,
    subN: (u, h) => u - h,
    mulN: (u, h) => u * h,
    inv: (u) => Pa(u, e),
    sqrt: i || ((u) => (f || (f = x2(e)), f(l, u))),
    toBytes: (u) => r ? fd(u, d) : _e(u, d),
    fromBytes: (u, h = !0) => {
      if (a) {
        if (!a.includes(u.length) || u.length > d) throw new Error("Field.fromBytes: expected " + a + " bytes, got " + u.length);
        const y = new Uint8Array(d);
        y.set(u, r ? 0 : y.length - u.length), u = y;
      }
      if (u.length !== d) throw new Error("Field.fromBytes: expected " + d + " bytes, got " + u.length);
      let p = r ? ud(u) : ut(u);
      if (o && (p = Ke(p, e)), !h && !l.isValid(p)) throw new Error("invalid field element: outside of range 0..ORDER");
      return p;
    },
    invertBatch: (u) => mr(l, u),
    cmov: (u, h, p) => p ? h : u
  });
  return Object.freeze(l);
}
function Ed(e) {
  if (typeof e != "bigint") throw new Error("field order must be bigint");
  const t = e.toString(2).length;
  return Math.ceil(t / 8);
}
function vd(e) {
  const t = Ed(e);
  return t + Math.ceil(t / 2);
}
function S2(e, t, r = !1) {
  const n = e.length, s = Ed(t), i = vd(t);
  if (n < 16 || n < i || n > 1024) throw new Error("expected " + i + "-1024 bytes of input, got " + n);
  const o = Ke(r ? ud(e) : ut(e), t - Ue) + Ue;
  return r ? fd(o, s) : _e(o, s);
}
var Vr = BigInt(0), er = BigInt(1);
function ls(e, t) {
  const r = t.negate();
  return e ? r : t;
}
function nn(e, t) {
  const r = mr(e.Fp, t.map((n) => n.Z));
  return t.map((n, s) => e.fromAffine(n.toAffine(r[s])));
}
function _d(e, t) {
  if (!Number.isSafeInteger(e) || e <= 0 || e > t) throw new Error("invalid window size, expected [1.." + t + "], got W=" + e);
}
function ii(e, t) {
  _d(e, t);
  const r = Math.ceil(t / e) + 1, n = 2 ** (e - 1), s = 2 ** e;
  return {
    windows: r,
    windowSize: n,
    mask: yr(e),
    maxNumber: s,
    shiftBy: BigInt(e)
  };
}
function La(e, t, r) {
  const { windowSize: n, mask: s, maxNumber: i, shiftBy: o } = r;
  let a = Number(e & s), c = e >> o;
  a > n && (a -= i, c += er);
  const d = t * n, f = d + Math.abs(a) - 1, l = a === 0, u = a < 0, h = t % 2 !== 0;
  return {
    nextN: c,
    offset: f,
    isZero: l,
    isNeg: u,
    isNegF: h,
    offsetF: d
  };
}
function T2(e, t) {
  if (!Array.isArray(e)) throw new Error("array expected");
  e.forEach((r, n) => {
    if (!(r instanceof t)) throw new Error("invalid point at index " + n);
  });
}
function O2(e, t) {
  if (!Array.isArray(e)) throw new Error("array of scalars expected");
  e.forEach((r, n) => {
    if (!t.isValid(r)) throw new Error("invalid scalar at index " + n);
  });
}
var oi = /* @__PURE__ */ new WeakMap(), xd = /* @__PURE__ */ new WeakMap();
function ai(e) {
  return xd.get(e) || 1;
}
function Ma(e) {
  if (e !== Vr) throw new Error("invalid wNAF");
}
var C2 = class {
  constructor(e, t) {
    this.BASE = e.BASE, this.ZERO = e.ZERO, this.Fn = e.Fn, this.bits = t;
  }
  _unsafeLadder(e, t, r = this.ZERO) {
    let n = e;
    for (; t > Vr; ) t & er && (r = r.add(n)), n = n.double(), t >>= er;
    return r;
  }
  precomputeWindow(e, t) {
    const { windows: r, windowSize: n } = ii(t, this.bits), s = [];
    let i = e, o = i;
    for (let a = 0; a < r; a++) {
      o = i, s.push(o);
      for (let c = 1; c < n; c++) o = o.add(i), s.push(o);
      i = o.double();
    }
    return s;
  }
  wNAF(e, t, r) {
    if (!this.Fn.isValid(r)) throw new Error("invalid scalar");
    let n = this.ZERO, s = this.BASE;
    const i = ii(e, this.bits);
    for (let o = 0; o < i.windows; o++) {
      const { nextN: a, offset: c, isZero: d, isNeg: f, isNegF: l, offsetF: u } = La(r, o, i);
      r = a, d ? s = s.add(ls(l, t[u])) : n = n.add(ls(f, t[c]));
    }
    return Ma(r), {
      p: n,
      f: s
    };
  }
  wNAFUnsafe(e, t, r, n = this.ZERO) {
    const s = ii(e, this.bits);
    for (let i = 0; i < s.windows && r !== Vr; i++) {
      const { nextN: o, offset: a, isZero: c, isNeg: d } = La(r, i, s);
      if (r = o, !c) {
        const f = t[a];
        n = n.add(d ? f.negate() : f);
      }
    }
    return Ma(r), n;
  }
  getPrecomputes(e, t, r) {
    let n = oi.get(t);
    return n || (n = this.precomputeWindow(t, e), e !== 1 && (typeof r == "function" && (n = r(n)), oi.set(t, n))), n;
  }
  cached(e, t, r) {
    const n = ai(e);
    return this.wNAF(n, this.getPrecomputes(n, e, r), t);
  }
  unsafe(e, t, r, n) {
    const s = ai(e);
    return s === 1 ? this._unsafeLadder(e, t, n) : this.wNAFUnsafe(s, this.getPrecomputes(s, e, r), t, n);
  }
  createCache(e, t) {
    _d(t, this.bits), xd.set(e, t), oi.delete(e);
  }
  hasCache(e) {
    return ai(e) !== 1;
  }
};
function A2(e, t, r, n) {
  let s = t, i = e.ZERO, o = e.ZERO;
  for (; r > Vr || n > Vr; ) r & er && (i = i.add(s)), n & er && (o = o.add(s)), s = s.double(), r >>= er, n >>= er;
  return {
    p1: i,
    p2: o
  };
}
function R2(e, t, r, n) {
  T2(r, e), O2(n, t);
  const s = r.length, i = n.length;
  if (s !== i) throw new Error("arrays of points and scalars must have equal length");
  const o = e.ZERO, a = wn(BigInt(s));
  let c = 1;
  a > 12 ? c = a - 3 : a > 4 ? c = a - 2 : a > 0 && (c = 2);
  const d = yr(c), f = new Array(Number(d) + 1).fill(o), l = Math.floor((t.BITS - 1) / c) * c;
  let u = o;
  for (let h = l; h >= 0; h -= c) {
    f.fill(o);
    for (let y = 0; y < i; y++) {
      const w = n[y], m = Number(w >> BigInt(h) & d);
      f[m] = f[m].add(r[y]);
    }
    let p = o;
    for (let y = f.length - 1, w = o; y > 0; y--) w = w.add(f[y]), p = p.add(w);
    if (u = u.add(p), h !== 0) for (let y = 0; y < c; y++) u = u.double();
  }
  return u;
}
function ka(e, t, r) {
  if (t) {
    if (t.ORDER !== e) throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
    return wd(t), t;
  } else return Hr(e, { isLE: r });
}
function N2(e, t, r = {}, n) {
  if (n === void 0 && (n = e === "edwards"), !t || typeof t != "object") throw new Error(`expected valid ${e} CURVE object`);
  for (const a of [
    "p",
    "n",
    "h"
  ]) {
    const c = t[a];
    if (!(typeof c == "bigint" && c > Vr)) throw new Error(`CURVE.${a} must be positive bigint`);
  }
  const s = ka(t.p, r.Fp, n), i = ka(t.n, r.Fn, n), o = [
    "Gx",
    "Gy",
    "a",
    e === "weierstrass" ? "b" : "d"
  ];
  for (const a of o) if (!s.isValid(t[a])) throw new Error(`CURVE.${a} must be valid field element of CURVE.Fp`);
  return t = Object.freeze(Object.assign({}, t)), {
    CURVE: t,
    Fp: s,
    Fn: i
  };
}
var U2 = ut;
function Mt(e, t) {
  if (En(e), En(t), e < 0 || e >= 1 << 8 * t) throw new Error("invalid I2OSP input: " + e);
  const r = Array.from({ length: t }).fill(0);
  for (let n = t - 1; n >= 0; n--) r[n] = e & 255, e >>>= 8;
  return new Uint8Array(r);
}
function F2(e, t) {
  const r = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++) r[n] = e[n] ^ t[n];
  return r;
}
function En(e) {
  if (!Number.isSafeInteger(e)) throw new Error("number expected");
}
function Bd(e) {
  if (!xs(e) && typeof e != "string") throw new Error("DST must be Uint8Array or string");
  return typeof e == "string" ? On(e) : e;
}
function D2(e, t, r, n) {
  Fe(e), En(r), t = Bd(t), t.length > 255 && (t = n(ye(On("H2C-OVERSIZE-DST-"), t)));
  const { outputLen: s, blockLen: i } = n, o = Math.ceil(r / s);
  if (r > 65535 || o > 255) throw new Error("expand_message_xmd: invalid lenInBytes");
  const a = ye(t, Mt(t.length, 1)), c = Mt(0, i), d = Mt(r, 2), f = new Array(o), l = n(ye(c, e, d, Mt(0, 1), a));
  f[0] = n(ye(l, Mt(1, 1), a));
  for (let u = 1; u <= o; u++) f[u] = n(ye(F2(l, f[u - 1]), Mt(u + 1, 1), a));
  return ye(...f).slice(0, r);
}
function q2(e, t, r, n, s) {
  if (Fe(e), En(r), t = Bd(t), t.length > 255) {
    const i = Math.ceil(2 * n / 8);
    t = s.create({ dkLen: i }).update(On("H2C-OVERSIZE-DST-")).update(t).digest();
  }
  if (r > 65535 || t.length > 255) throw new Error("expand_message_xof: invalid lenInBytes");
  return s.create({ dkLen: r }).update(e).update(Mt(r, 2)).update(t).update(Mt(t.length, 1)).digest();
}
function Zn(e, t, r) {
  mo(r, {
    p: "bigint",
    m: "number",
    k: "number",
    hash: "function"
  });
  const { p: n, k: s, m: i, hash: o, expand: a, DST: c } = r;
  if (!g2(r.hash)) throw new Error("expected valid hash");
  Fe(e), En(t);
  const d = n.toString(2).length, f = Math.ceil((d + s) / 8), l = t * i * f;
  let u;
  if (a === "xmd") u = D2(e, c, l, o);
  else if (a === "xof") u = q2(e, c, l, s, o);
  else if (a === "_internal_pass") u = e;
  else throw new Error('expand must be "xmd" or "xof"');
  const h = new Array(t);
  for (let p = 0; p < t; p++) {
    const y = new Array(i);
    for (let w = 0; w < i; w++) {
      const m = f * (w + p * i);
      y[w] = Ke(U2(u.subarray(m, m + f)), n);
    }
    h[p] = y;
  }
  return h;
}
function Id(e, t) {
  const r = t.map((n) => Array.from(n).reverse());
  return (n, s) => {
    const [i, o, a, c] = r.map((l) => l.reduce((u, h) => e.add(e.mul(u, n), h))), [d, f] = mr(e, [o, c], !0);
    return n = e.mul(i, d), s = e.mul(s, e.mul(a, f)), {
      x: n,
      y: s
    };
  };
}
var P2 = On("HashToScalar-");
function Va(e, t, r) {
  if (typeof t != "function") throw new Error("mapToCurve() must be defined");
  function n(i) {
    return e.fromAffine(t(i));
  }
  function s(i) {
    const o = i.clearCofactor();
    return o.equals(e.ZERO) ? e.ZERO : (o.assertValidity(), o);
  }
  return {
    defaults: r,
    hashToCurve(i, o) {
      const a = Zn(i, 2, Object.assign({}, r, o)), c = n(a[0]), d = n(a[1]);
      return s(c.add(d));
    },
    encodeToCurve(i, o) {
      const a = r.encodeDST ? { DST: r.encodeDST } : {};
      return s(n(Zn(i, 1, Object.assign({}, r, a, o))[0]));
    },
    mapToCurve(i) {
      if (!Array.isArray(i)) throw new Error("expected array of bigints");
      for (const o of i) if (typeof o != "bigint") throw new Error("expected array of bigints");
      return s(n(i));
    },
    hashToScalar(i, o) {
      const a = e.Fn.ORDER;
      return Zn(i, 1, Object.assign({}, r, {
        p: a,
        m: 1,
        DST: P2
      }, o))[0][0];
    }
  };
}
var Sd = class extends bo {
  constructor(e, t) {
    super(), this.finished = !1, this.destroyed = !1, po(e);
    const r = dr(t);
    if (this.iHash = e.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const n = this.blockLen, s = new Uint8Array(n);
    s.set(r.length > n ? e.create().update(r).digest() : r);
    for (let i = 0; i < s.length; i++) s[i] ^= 54;
    this.iHash.update(s), this.oHash = e.create();
    for (let i = 0; i < s.length; i++) s[i] ^= 106;
    this.oHash.update(s), fr(s);
  }
  update(e) {
    return Mr(this), this.iHash.update(e), this;
  }
  digestInto(e) {
    Mr(this), Fe(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy();
  }
  digest() {
    const e = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e), e;
  }
  _cloneInto(e) {
    e || (e = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: t, iHash: r, finished: n, destroyed: s, blockLen: i, outputLen: o } = this;
    return e = e, e.finished = n, e.destroyed = s, e.blockLen = i, e.outputLen = o, e.oHash = t._cloneInto(e.oHash), e.iHash = r._cloneInto(e.iHash), e;
  }
  clone() {
    return this._cloneInto();
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
}, wo = (e, t, r) => new Sd(e, t).update(r).digest();
wo.create = (e, t) => new Sd(e, t);
var $a = (e, t) => (e + (e >= 0 ? t : -t) / yt) / t;
function L2(e, t, r) {
  const [[n, s], [i, o]] = t, a = $a(o * e, r), c = $a(-s * e, r);
  let d = e - a * n - c * i, f = -a * s - c * o;
  const l = d < tr, u = f < tr;
  l && (d = -d), u && (f = -f);
  const h = yr(Math.ceil(wn(r) / 2)) + Ce;
  if (d < tr || d >= h || f < tr || f >= h) throw new Error("splitScalar (endomorphism): failed, k=" + e);
  return {
    k1neg: l,
    k1: d,
    k2neg: u,
    k2: f
  };
}
var tr = BigInt(0), Ce = BigInt(1), yt = BigInt(2), Tr = BigInt(3), Li = BigInt(4);
function hs(e, t) {
  const { BYTES: r } = e;
  let n;
  if (typeof t == "bigint") n = t;
  else {
    let s = kr("private key", t);
    try {
      n = e.fromBytes(s);
    } catch {
      throw new Error(`invalid private key: expected ui8a of size ${r}, got ${typeof t}`);
    }
  }
  if (!e.isValidNot0(n)) throw new Error("invalid private key: out of range [1..N-1]");
  return n;
}
function M2(e, t = {}) {
  const r = N2("weierstrass", e, t), { Fp: n, Fn: s } = r;
  let i = r.CURVE;
  const { h: o, n: a } = i;
  mo(t, {}, {
    allowInfinityPoint: "boolean",
    clearCofactor: "function",
    isTorsionFree: "function",
    fromBytes: "function",
    toBytes: "function",
    endo: "object",
    wrapPrivateKey: "boolean"
  });
  const { endo: c } = t;
  if (c && (!n.is0(i.a) || typeof c.beta != "bigint" || !Array.isArray(c.basises))) throw new Error('invalid endo: expected "beta": bigint and "basises": array');
  const d = $2(n, s);
  function f() {
    if (!n.isOdd) throw new Error("compression is not supported: Field does not have .isOdd()");
  }
  function l(A, b, x) {
    const { x: R, y: F } = b.toAffine(), M = n.toBytes(R);
    return Da(x, "isCompressed"), x ? (f(), ye(k2(!n.isOdd(F)), M)) : ye(Uint8Array.of(4), M, n.toBytes(F));
  }
  function u(A) {
    qa(A, void 0, "Point");
    const { publicKey: b, publicKeyUncompressed: x } = d, R = A.length, F = A[0], M = A.subarray(1);
    if (R === b && (F === 2 || F === 3)) {
      const T = n.fromBytes(M);
      if (!n.isValid(T)) throw new Error("bad point: is not on curve, wrong x");
      const O = y(T);
      let C;
      try {
        C = n.sqrt(O);
      } catch (D) {
        const re = D instanceof Error ? ": " + D.message : "";
        throw new Error("bad point: is not on curve, sqrt error" + re);
      }
      f();
      const q = n.isOdd(C);
      return (F & 1) === 1 !== q && (C = n.neg(C)), {
        x: T,
        y: C
      };
    } else if (R === x && F === 4) {
      const T = n.BYTES, O = n.fromBytes(M.subarray(0, T)), C = n.fromBytes(M.subarray(T, T * 2));
      if (!w(O, C)) throw new Error("bad point: is not on curve");
      return {
        x: O,
        y: C
      };
    } else throw new Error(`bad point: got length ${R}, expected compressed=${b} or uncompressed=${x}`);
  }
  const h = t.toBytes || l, p = t.fromBytes || u;
  function y(A) {
    const b = n.sqr(A), x = n.mul(b, A);
    return n.add(n.add(x, n.mul(A, i.a)), i.b);
  }
  function w(A, b) {
    const x = n.sqr(b), R = y(A);
    return n.eql(x, R);
  }
  if (!w(i.Gx, i.Gy)) throw new Error("bad curve params: generator point");
  const m = n.mul(n.pow(i.a, Tr), Li), g = n.mul(n.sqr(i.b), BigInt(27));
  if (n.is0(n.add(m, g))) throw new Error("bad curve params: a or b");
  function E(A, b, x = !1) {
    if (!n.isValid(b) || x && n.is0(b)) throw new Error(`bad point coordinate ${A}`);
    return b;
  }
  function _(A) {
    if (!(A instanceof v)) throw new Error("ProjectivePoint expected");
  }
  function I(A) {
    if (!c || !c.basises) throw new Error("no endo");
    return L2(A, c.basises, s.ORDER);
  }
  const S = Pi((A, b) => {
    const { X: x, Y: R, Z: F } = A;
    if (n.eql(F, n.ONE)) return {
      x,
      y: R
    };
    const M = A.is0();
    b ??= M ? n.ONE : n.inv(F);
    const T = n.mul(x, b), O = n.mul(R, b), C = n.mul(F, b);
    if (M) return {
      x: n.ZERO,
      y: n.ZERO
    };
    if (!n.eql(C, n.ONE)) throw new Error("invZ was invalid");
    return {
      x: T,
      y: O
    };
  }), B = Pi((A) => {
    if (A.is0()) {
      if (t.allowInfinityPoint && !n.is0(A.Y)) return;
      throw new Error("bad point: ZERO");
    }
    const { x: b, y: x } = A.toAffine();
    if (!n.isValid(b) || !n.isValid(x)) throw new Error("bad point: x or y not field elements");
    if (!w(b, x)) throw new Error("bad point: equation left != right");
    if (!A.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
    return !0;
  });
  function U(A, b, x, R, F) {
    return x = new v(n.mul(x.X, A), x.Y, x.Z), b = ls(R, b), x = ls(F, x), b.add(x);
  }
  class v {
    constructor(b, x, R) {
      this.X = E("x", b), this.Y = E("y", x, !0), this.Z = E("z", R), Object.freeze(this);
    }
    static CURVE() {
      return i;
    }
    static fromAffine(b) {
      const { x, y: R } = b || {};
      if (!b || !n.isValid(x) || !n.isValid(R)) throw new Error("invalid affine point");
      if (b instanceof v) throw new Error("projective point not allowed");
      return n.is0(x) && n.is0(R) ? v.ZERO : new v(x, R, n.ONE);
    }
    static fromBytes(b) {
      const x = v.fromAffine(p(qa(b, void 0, "point")));
      return x.assertValidity(), x;
    }
    static fromHex(b) {
      return v.fromBytes(kr("pointHex", b));
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    precompute(b = 8, x = !0) {
      return P.createCache(this, b), x || this.multiply(Tr), this;
    }
    assertValidity() {
      B(this);
    }
    hasEvenY() {
      const { y: b } = this.toAffine();
      if (!n.isOdd) throw new Error("Field doesn't support isOdd");
      return !n.isOdd(b);
    }
    equals(b) {
      _(b);
      const { X: x, Y: R, Z: F } = this, { X: M, Y: T, Z: O } = b, C = n.eql(n.mul(x, O), n.mul(M, F)), q = n.eql(n.mul(R, O), n.mul(T, F));
      return C && q;
    }
    negate() {
      return new v(this.X, n.neg(this.Y), this.Z);
    }
    double() {
      const { a: b, b: x } = i, R = n.mul(x, Tr), { X: F, Y: M, Z: T } = this;
      let O = n.ZERO, C = n.ZERO, q = n.ZERO, D = n.mul(F, F), re = n.mul(M, M), Z = n.mul(T, T), $ = n.mul(F, M);
      return $ = n.add($, $), q = n.mul(F, T), q = n.add(q, q), O = n.mul(b, q), C = n.mul(R, Z), C = n.add(O, C), O = n.sub(re, C), C = n.add(re, C), C = n.mul(O, C), O = n.mul($, O), q = n.mul(R, q), Z = n.mul(b, Z), $ = n.sub(D, Z), $ = n.mul(b, $), $ = n.add($, q), q = n.add(D, D), D = n.add(q, D), D = n.add(D, Z), D = n.mul(D, $), C = n.add(C, D), Z = n.mul(M, T), Z = n.add(Z, Z), D = n.mul(Z, $), O = n.sub(O, D), q = n.mul(Z, re), q = n.add(q, q), q = n.add(q, q), new v(O, C, q);
    }
    add(b) {
      _(b);
      const { X: x, Y: R, Z: F } = this, { X: M, Y: T, Z: O } = b;
      let C = n.ZERO, q = n.ZERO, D = n.ZERO;
      const re = i.a, Z = n.mul(i.b, Tr);
      let $ = n.mul(x, M), ne = n.mul(R, T), se = n.mul(F, O), Le = n.add(x, R), ee = n.add(M, T);
      Le = n.mul(Le, ee), ee = n.add($, ne), Le = n.sub(Le, ee), ee = n.add(x, F);
      let ue = n.add(M, O);
      return ee = n.mul(ee, ue), ue = n.add($, se), ee = n.sub(ee, ue), ue = n.add(R, F), C = n.add(T, O), ue = n.mul(ue, C), C = n.add(ne, se), ue = n.sub(ue, C), D = n.mul(re, ee), C = n.mul(Z, se), D = n.add(C, D), C = n.sub(ne, D), D = n.add(ne, D), q = n.mul(C, D), ne = n.add($, $), ne = n.add(ne, $), se = n.mul(re, se), ee = n.mul(Z, ee), ne = n.add(ne, se), se = n.sub($, se), se = n.mul(re, se), ee = n.add(ee, se), $ = n.mul(ne, ee), q = n.add(q, $), $ = n.mul(ue, ee), C = n.mul(Le, C), C = n.sub(C, $), $ = n.mul(Le, ne), D = n.mul(ue, D), D = n.add(D, $), new v(C, q, D);
    }
    subtract(b) {
      return this.add(b.negate());
    }
    is0() {
      return this.equals(v.ZERO);
    }
    multiply(b) {
      const { endo: x } = t;
      if (!s.isValidNot0(b)) throw new Error("invalid scalar: out of range");
      let R, F;
      const M = (T) => P.cached(this, T, (O) => nn(v, O));
      if (x) {
        const { k1neg: T, k1: O, k2neg: C, k2: q } = I(b), { p: D, f: re } = M(O), { p: Z, f: $ } = M(q);
        F = re.add($), R = U(x.beta, D, Z, T, C);
      } else {
        const { p: T, f: O } = M(b);
        R = T, F = O;
      }
      return nn(v, [R, F])[0];
    }
    multiplyUnsafe(b) {
      const { endo: x } = t, R = this;
      if (!s.isValid(b)) throw new Error("invalid scalar: out of range");
      if (b === tr || R.is0()) return v.ZERO;
      if (b === Ce) return R;
      if (P.hasCache(this)) return this.multiply(b);
      if (x) {
        const { k1neg: F, k1: M, k2neg: T, k2: O } = I(b), { p1: C, p2: q } = A2(v, R, M, O);
        return U(x.beta, C, q, F, T);
      } else return P.unsafe(R, b);
    }
    multiplyAndAddUnsafe(b, x, R) {
      const F = this.multiplyUnsafe(x).add(b.multiplyUnsafe(R));
      return F.is0() ? void 0 : F;
    }
    toAffine(b) {
      return S(this, b);
    }
    isTorsionFree() {
      const { isTorsionFree: b } = t;
      return o === Ce ? !0 : b ? b(v, this) : P.unsafe(this, a).is0();
    }
    clearCofactor() {
      const { clearCofactor: b } = t;
      return o === Ce ? this : b ? b(v, this) : this.multiplyUnsafe(o);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(o).is0();
    }
    toBytes(b = !0) {
      return Da(b, "isCompressed"), this.assertValidity(), h(v, this, b);
    }
    toHex(b = !0) {
      return gn(this.toBytes(b));
    }
    toString() {
      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
    }
    get px() {
      return this.X;
    }
    get py() {
      return this.X;
    }
    get pz() {
      return this.Z;
    }
    toRawBytes(b = !0) {
      return this.toBytes(b);
    }
    _setWindowSize(b) {
      this.precompute(b);
    }
    static normalizeZ(b) {
      return nn(v, b);
    }
    static msm(b, x) {
      return R2(v, s, b, x);
    }
    static fromPrivateKey(b) {
      return v.BASE.multiply(hs(s, b));
    }
  }
  v.BASE = new v(i.Gx, i.Gy, n.ONE), v.ZERO = new v(n.ZERO, n.ONE, n.ZERO), v.Fp = n, v.Fn = s;
  const N = s.BITS, P = new C2(v, t.endo ? Math.ceil(N / 2) : N);
  return v.BASE.precompute(8), v;
}
function k2(e) {
  return Uint8Array.of(e ? 2 : 3);
}
function V2(e, t) {
  const r = e.ORDER;
  let n = tr;
  for (let p = r - Ce; p % yt === tr; p /= yt) n += Ce;
  const s = n, i = yt << s - Ce - Ce, o = i * yt, a = (r - Ce) / o, c = (a - Ce) / yt, d = o - Ce, f = i, l = e.pow(t, a), u = e.pow(t, (a + Ce) / yt);
  let h = (p, y) => {
    let w = l, m = e.pow(y, d), g = e.sqr(m);
    g = e.mul(g, y);
    let E = e.mul(p, g);
    E = e.pow(E, c), E = e.mul(E, m), m = e.mul(E, y), g = e.mul(E, p);
    let _ = e.mul(g, m);
    E = e.pow(_, f);
    let I = e.eql(E, e.ONE);
    m = e.mul(g, u), E = e.mul(_, w), g = e.cmov(m, g, I), _ = e.cmov(E, _, I);
    for (let S = s; S > Ce; S--) {
      let B = S - yt;
      B = yt << B - Ce;
      let U = e.pow(_, B);
      const v = e.eql(U, e.ONE);
      m = e.mul(g, w), w = e.mul(w, w), U = e.mul(_, w), g = e.cmov(m, g, v), _ = e.cmov(U, _, v);
    }
    return {
      isValid: I,
      value: g
    };
  };
  if (e.ORDER % Li === Tr) {
    const p = (e.ORDER - Tr) / Li, y = e.sqrt(e.neg(t));
    h = (w, m) => {
      let g = e.sqr(m);
      const E = e.mul(w, m);
      g = e.mul(g, E);
      let _ = e.pow(g, p);
      _ = e.mul(_, E);
      const I = e.mul(_, y), S = e.mul(e.sqr(_), m), B = e.eql(S, w);
      return {
        isValid: B,
        value: e.cmov(I, _, B)
      };
    };
  }
  return h;
}
function Td(e, t) {
  wd(e);
  const { A: r, B: n, Z: s } = t;
  if (!e.isValid(r) || !e.isValid(n) || !e.isValid(s)) throw new Error("mapToCurveSimpleSWU: invalid opts");
  const i = V2(e, s);
  if (!e.isOdd) throw new Error("Field does not have .isOdd()");
  return (o) => {
    let a, c, d, f, l, u, h, p;
    a = e.sqr(o), a = e.mul(a, s), c = e.sqr(a), c = e.add(c, a), d = e.add(c, e.ONE), d = e.mul(d, n), f = e.cmov(s, e.neg(c), !e.eql(c, e.ZERO)), f = e.mul(f, r), c = e.sqr(d), u = e.sqr(f), l = e.mul(u, r), c = e.add(c, l), c = e.mul(c, d), u = e.mul(u, f), l = e.mul(u, n), c = e.add(c, l), h = e.mul(a, d);
    const { isValid: y, value: w } = i(c, u);
    p = e.mul(a, o), p = e.mul(p, w), h = e.cmov(h, d, y), p = e.cmov(p, w, y);
    const m = e.isOdd(o) === e.isOdd(p);
    p = e.cmov(e.neg(p), p, m);
    const g = mr(e, [f], !0)[0];
    return h = e.mul(h, g), {
      x: h,
      y: p
    };
  };
}
function $2(e, t) {
  return {
    secretKey: t.BYTES,
    publicKey: 1 + e.BYTES,
    publicKeyUncompressed: 1 + 2 * e.BYTES,
    publicKeyHasPrefix: !0,
    signature: 2 * t.BYTES
  };
}
function ja(e) {
  const { CURVE: t, curveOpts: r } = j2(e);
  return H2(e, M2(t, r));
}
function j2(e) {
  const t = {
    a: e.a,
    b: e.b,
    p: e.Fp.ORDER,
    n: e.n,
    h: e.h,
    Gx: e.Gx,
    Gy: e.Gy
  }, r = e.Fp;
  let n = e.allowedPrivateKeyLengths ? Array.from(new Set(e.allowedPrivateKeyLengths.map((s) => Math.ceil(s / 2)))) : void 0;
  return {
    CURVE: t,
    curveOpts: {
      Fp: r,
      Fn: Hr(t.n, {
        BITS: e.nBitLength,
        allowedLengths: n,
        modFromBytes: e.wrapPrivateKey
      }),
      allowInfinityPoint: e.allowInfinityPoint,
      endo: e.endo,
      isTorsionFree: e.isTorsionFree,
      clearCofactor: e.clearCofactor,
      fromBytes: e.fromBytes,
      toBytes: e.toBytes
    }
  };
}
function K2(e, t, r) {
  function n(s) {
    const i = e.sqr(s), o = e.mul(i, s);
    return e.add(e.add(o, e.mul(s, t)), r);
  }
  return n;
}
function H2(e, t) {
  const { Fp: r, Fn: n } = t;
  function s(o) {
    return y2(o, Ce, n.ORDER);
  }
  const i = K2(r, e.a, e.b);
  return Object.assign({}, {
    CURVE: e,
    Point: t,
    ProjectivePoint: t,
    normPrivateKeyToScalar: (o) => hs(n, o),
    weierstrassEquation: i,
    isWithinCurveOrder: s
  });
}
var G2 = BigInt(0), Pn = BigInt(1), Ka = BigInt(2), Or = BigInt(3);
function Z2(e) {
  const t = [];
  for (; e > Pn; e >>= Pn) (e & Pn) === G2 ? t.unshift(0) : (e & Or) === Or ? (t.unshift(-1), e += Pn) : t.unshift(1);
  return t;
}
function ci(e) {
  if (!Array.isArray(e) || e.length === 0) throw new Error("expected non-empty array");
}
function Y2(e, t, r, n) {
  const { Fp2: s, Fp12: i } = e, { twistType: o, ateLoopSize: a, xNegative: c, postPrecompute: d } = n;
  let f;
  if (o === "multiplicative") f = (E, _, I, S, B, U) => i.mul014(S, E, s.mul(_, B), s.mul(I, U));
  else if (o === "divisive") f = (E, _, I, S, B, U) => i.mul034(S, s.mul(I, U), s.mul(_, B), E);
  else throw new Error("bls: unknown twist type");
  const l = s.div(s.ONE, s.mul(s.ONE, Ka));
  function u(E, _, I, S) {
    const B = s.sqr(I), U = s.sqr(S), v = s.mulByB(s.mul(U, Or)), N = s.mul(v, Or), P = s.sub(s.sub(s.sqr(s.add(I, S)), U), B), A = s.sub(v, B), b = s.mul(s.sqr(_), Or), x = s.neg(P);
    return E.push([
      A,
      b,
      x
    ]), _ = s.mul(s.mul(s.mul(s.sub(B, N), _), I), l), I = s.sub(s.sqr(s.mul(s.add(B, N), l)), s.mul(s.sqr(v), Or)), S = s.mul(B, P), {
      Rx: _,
      Ry: I,
      Rz: S
    };
  }
  function h(E, _, I, S, B, U) {
    const v = s.sub(I, s.mul(U, S)), N = s.sub(_, s.mul(B, S)), P = s.sub(s.mul(v, B), s.mul(N, U)), A = s.neg(v), b = N;
    E.push([
      P,
      A,
      b
    ]);
    const x = s.sqr(N), R = s.mul(x, N), F = s.mul(x, _), M = s.add(s.sub(R, s.mul(F, Ka)), s.mul(s.sqr(v), S));
    return _ = s.mul(N, M), I = s.sub(s.mul(s.sub(F, M), v), s.mul(R, I)), S = s.mul(S, R), {
      Rx: _,
      Ry: I,
      Rz: S
    };
  }
  const p = Z2(a), y = Pi((E) => {
    const { x: _, y: I } = E.toAffine(), S = _, B = I, U = s.neg(I);
    let v = S, N = B, P = s.ONE;
    const A = [];
    for (const b of p) {
      const x = [];
      ({ Rx: v, Ry: N, Rz: P } = u(x, v, N, P)), b && ({ Rx: v, Ry: N, Rz: P } = h(x, v, N, P, S, b === -1 ? U : B)), A.push(x);
    }
    if (d) {
      const b = A[A.length - 1];
      d(v, N, P, S, B, h.bind(null, b));
    }
    return A;
  });
  function w(E, _ = !1) {
    let I = i.ONE;
    if (E.length) {
      const S = E[0][0].length;
      for (let B = 0; B < S; B++) {
        I = i.sqr(I);
        for (const [U, v, N] of E) for (const [P, A, b] of U[B]) I = f(P, A, b, I, v, N);
      }
    }
    return c && (I = i.conjugate(I)), _ ? i.finalExponentiate(I) : I;
  }
  function m(E, _ = !0) {
    const I = [];
    nn(t, E.map(({ g1: S }) => S)), nn(r, E.map(({ g2: S }) => S));
    for (const { g1: S, g2: B } of E) {
      if (S.is0() || B.is0()) throw new Error("pairing is not available for ZERO point");
      S.assertValidity(), B.assertValidity();
      const U = S.toAffine();
      I.push([
        y(B),
        U.x,
        U.y
      ]);
    }
    return w(I, _);
  }
  function g(E, _, I = !0) {
    return m([{
      g1: E,
      g2: _
    }], I);
  }
  return {
    Fp12: i,
    millerLoopBatch: w,
    pairing: g,
    pairingBatch: m,
    calcPairingPrecomputes: y
  };
}
function Ha(e, t, r, n, s) {
  const { Fp12: i, pairingBatch: o } = e;
  function a(l) {
    return l instanceof t.Point ? l : t.Point.fromHex(l);
  }
  function c(l) {
    return l instanceof r.Point ? l : r.Point.fromHex(l);
  }
  function d(l) {
    if (!(l instanceof r.Point)) throw new Error(`expected valid message hashed to ${s ? "G1" : "G2"} curve`);
    return l;
  }
  const f = s ? (l, u) => ({
    g1: u,
    g2: l
  }) : (l, u) => ({
    g1: l,
    g2: u
  });
  return {
    getPublicKey(l) {
      const u = hs(t.Point.Fn, l);
      return t.Point.BASE.multiply(u);
    },
    sign(l, u, h) {
      if (h != null) throw new Error("sign() expects 2 arguments");
      const p = hs(t.Point.Fn, u);
      return d(l).assertValidity(), l.multiply(p);
    },
    verify(l, u, h, p) {
      if (p != null) throw new Error("verify() expects 3 arguments");
      l = c(l), h = a(h);
      const y = h.negate(), w = t.Point.BASE, m = d(u), g = l, E = o([f(y, m), f(w, g)]);
      return i.eql(E, i.ONE);
    },
    verifyBatch(l, u, h) {
      if (ci(u), h.length !== u.length) throw new Error("amount of public keys and messages should be equal");
      const p = c(l), y = u, w = h.map(a), m = /* @__PURE__ */ new Map();
      for (let _ = 0; _ < w.length; _++) {
        const I = w[_], S = y[_];
        let B = m.get(S);
        B === void 0 && (B = [], m.set(S, B)), B.push(I);
      }
      const g = [], E = t.Point.BASE;
      try {
        for (const [_, I] of m) {
          const S = I.reduce((B, U) => B.add(U));
          g.push(f(S, _));
        }
        return g.push(f(E.negate(), p)), i.eql(o(g), i.ONE);
      } catch {
        return !1;
      }
    },
    aggregatePublicKeys(l) {
      ci(l), l = l.map((h) => a(h));
      const u = l.reduce((h, p) => h.add(p), t.Point.ZERO);
      return u.assertValidity(), u;
    },
    aggregateSignatures(l) {
      ci(l), l = l.map((h) => c(h));
      const u = l.reduce((h, p) => h.add(p), r.Point.ZERO);
      return u.assertValidity(), u;
    },
    hash(l, u) {
      Fe(l);
      const h = u ? { DST: u } : void 0;
      return r.hashToCurve(l, h);
    },
    Signature: n
  };
}
function z2(e) {
  const { Fp: t, Fr: r, Fp2: n, Fp6: s, Fp12: i } = e.fields, o = ja(e.G1), a = Object.assign(o, Va(o.Point, e.G1.mapToCurve, {
    ...e.htfDefaults,
    ...e.G1.htfDefaults
  })), c = ja(e.G2), d = Object.assign(c, Va(c.Point, e.G2.mapToCurve, {
    ...e.htfDefaults,
    ...e.G2.htfDefaults
  })), f = Y2(e.fields, a.Point, d.Point, {
    ...e.params,
    postPrecompute: e.postPrecompute
  }), { millerLoopBatch: l, pairing: u, pairingBatch: h, calcPairingPrecomputes: p } = f, y = Ha(f, a, d, e.G2.Signature, !1), w = Ha(f, d, a, e.G1.ShortSignature, !0), m = e.randomBytes || s2, g = () => S2(m(vd(r.ORDER)), r.ORDER), E = {
    randomSecretKey: g,
    randomPrivateKey: g,
    calcPairingPrecomputes: p
  }, { ShortSignature: _ } = e.G1, { Signature: I } = e.G2;
  function S(T, O) {
    return T instanceof a.Point ? T : w.hash(kr("point", T), O?.DST);
  }
  function B(T, O) {
    return T instanceof d.Point ? T : y.hash(kr("point", T), O?.DST);
  }
  function U(T) {
    return y.getPublicKey(T).toBytes(!0);
  }
  function v(T) {
    return w.getPublicKey(T).toBytes(!0);
  }
  function N(T, O, C) {
    const q = B(T, C), D = y.sign(q, O);
    return T instanceof d.Point ? D : I.toBytes(D);
  }
  function P(T, O, C) {
    const q = S(T, C), D = w.sign(q, O);
    return T instanceof a.Point ? D : _.toBytes(D);
  }
  function A(T, O, C, q) {
    const D = B(O, q);
    return y.verify(T, D, C);
  }
  function b(T, O, C, q) {
    const D = S(O, q);
    return w.verify(T, D, C);
  }
  function x(T) {
    const O = y.aggregatePublicKeys(T);
    return T[0] instanceof a.Point ? O : O.toBytes(!0);
  }
  function R(T) {
    const O = y.aggregateSignatures(T);
    return T[0] instanceof d.Point ? O : I.toBytes(O);
  }
  function F(T) {
    const O = w.aggregateSignatures(T);
    return T[0] instanceof a.Point ? O : _.toBytes(O);
  }
  function M(T, O, C, q) {
    const D = O.map((re) => B(re, q));
    return y.verifyBatch(T, D, C);
  }
  return a.Point.BASE.precompute(4), {
    longSignatures: y,
    shortSignatures: w,
    millerLoopBatch: l,
    pairing: u,
    pairingBatch: h,
    verifyBatch: M,
    fields: {
      Fr: r,
      Fp: t,
      Fp2: n,
      Fp6: s,
      Fp12: i
    },
    params: {
      ateLoopSize: e.params.ateLoopSize,
      twistType: e.params.twistType,
      r: e.params.r,
      G1b: e.G1.b,
      G2b: e.G2.b
    },
    utils: E,
    getPublicKey: U,
    getPublicKeyForShortSignatures: v,
    sign: N,
    signShortSignature: P,
    verify: A,
    verifyShortSignature: b,
    aggregatePublicKeys: x,
    aggregateSignatures: R,
    aggregateShortSignatures: F,
    G1: a,
    G2: d,
    Signature: I,
    ShortSignature: _
  };
}
var Ga = BigInt(0), vt = BigInt(1), Re = BigInt(2), Za = BigInt(3);
function Eo(e, t, r, n, s = 1, i) {
  const o = BigInt(i === void 0 ? n : i), a = r ** BigInt(n), c = [];
  for (let d = 0; d < s; d++) {
    const f = BigInt(d + 1), l = [];
    for (let u = 0, h = vt; u < n; u++) {
      const p = (f * h - f) / o % a;
      l.push(e.pow(t, p)), h *= r;
    }
    c.push(l);
  }
  return c;
}
function X2(e, t, r) {
  const n = t.pow(r, (e.ORDER - vt) / Za), s = t.pow(r, (e.ORDER - vt) / Re);
  function i(f, l) {
    return [t.mul(t.frobeniusMap(f, 1), n), t.mul(t.frobeniusMap(l, 1), s)];
  }
  const o = t.pow(r, (e.ORDER ** Re - vt) / Za), a = t.pow(r, (e.ORDER ** Re - vt) / Re);
  if (!t.eql(a, t.neg(t.ONE))) throw new Error("psiFrobenius: PSI2_Y!==-1");
  function c(f, l) {
    return [t.mul(f, o), t.neg(l)];
  }
  const d = (f) => (l, u) => {
    const h = u.toAffine(), p = f(h.x, h.y);
    return l.fromAffine({
      x: p[0],
      y: p[1]
    });
  };
  return {
    psi: i,
    psi2: c,
    G2psi: d(i),
    G2psi2: d(c),
    PSI_X: n,
    PSI_Y: s,
    PSI2_X: o,
    PSI2_Y: a
  };
}
var Ya = (e, t) => {
  if (t.length !== 2) throw new Error("invalid tuple");
  const r = t.map((n) => e.create(n));
  return {
    c0: r[0],
    c1: r[1]
  };
}, W2 = class {
  constructor(e, t = {}) {
    this.MASK = vt;
    const r = e.ORDER, n = r * r;
    this.Fp = e, this.ORDER = n, this.BITS = wn(n), this.BYTES = Math.ceil(wn(n) / 8), this.isLE = e.isLE, this.ZERO = {
      c0: e.ZERO,
      c1: e.ZERO
    }, this.ONE = {
      c0: e.ONE,
      c1: e.ZERO
    }, this.Fp_NONRESIDUE = e.create(t.NONRESIDUE || BigInt(-1)), this.Fp_div2 = e.div(e.ONE, Re), this.NONRESIDUE = Ya(e, t.FP2_NONRESIDUE), this.FROBENIUS_COEFFICIENTS = Eo(e, this.Fp_NONRESIDUE, e.ORDER, 2)[0], this.mulByB = t.Fp2mulByB, Object.seal(this);
  }
  fromBigTuple(e) {
    return Ya(this.Fp, e);
  }
  create(e) {
    return e;
  }
  isValid({ c0: e, c1: t }) {
    function r(n, s) {
      return typeof n == "bigint" && Ga <= n && n < s;
    }
    return r(e, this.ORDER) && r(t, this.ORDER);
  }
  is0({ c0: e, c1: t }) {
    return this.Fp.is0(e) && this.Fp.is0(t);
  }
  isValidNot0(e) {
    return !this.is0(e) && this.isValid(e);
  }
  eql({ c0: e, c1: t }, { c0: r, c1: n }) {
    return this.Fp.eql(e, r) && this.Fp.eql(t, n);
  }
  neg({ c0: e, c1: t }) {
    return {
      c0: this.Fp.neg(e),
      c1: this.Fp.neg(t)
    };
  }
  pow(e, t) {
    return Bs(this, e, t);
  }
  invertBatch(e) {
    return mr(this, e);
  }
  add(e, t) {
    const { c0: r, c1: n } = e, { c0: s, c1: i } = t;
    return {
      c0: this.Fp.add(r, s),
      c1: this.Fp.add(n, i)
    };
  }
  sub({ c0: e, c1: t }, { c0: r, c1: n }) {
    return {
      c0: this.Fp.sub(e, r),
      c1: this.Fp.sub(t, n)
    };
  }
  mul({ c0: e, c1: t }, r) {
    const { Fp: n } = this;
    if (typeof r == "bigint") return {
      c0: n.mul(e, r),
      c1: n.mul(t, r)
    };
    const { c0: s, c1: i } = r;
    let o = n.mul(e, s), a = n.mul(t, i);
    return {
      c0: n.sub(o, a),
      c1: n.sub(n.mul(n.add(e, t), n.add(s, i)), n.add(o, a))
    };
  }
  sqr({ c0: e, c1: t }) {
    const { Fp: r } = this, n = r.add(e, t), s = r.sub(e, t), i = r.add(e, e);
    return {
      c0: r.mul(n, s),
      c1: r.mul(i, t)
    };
  }
  addN(e, t) {
    return this.add(e, t);
  }
  subN(e, t) {
    return this.sub(e, t);
  }
  mulN(e, t) {
    return this.mul(e, t);
  }
  sqrN(e) {
    return this.sqr(e);
  }
  div(e, t) {
    const { Fp: r } = this;
    return this.mul(e, typeof t == "bigint" ? r.inv(r.create(t)) : this.inv(t));
  }
  inv({ c0: e, c1: t }) {
    const { Fp: r } = this, n = r.inv(r.create(e * e + t * t));
    return {
      c0: r.mul(n, r.create(e)),
      c1: r.mul(n, r.create(-t))
    };
  }
  sqrt(e) {
    const { Fp: t } = this, r = this, { c0: n, c1: s } = e;
    if (t.is0(s)) return ds(t, n) === 1 ? r.create({
      c0: t.sqrt(n),
      c1: t.ZERO
    }) : r.create({
      c0: t.ZERO,
      c1: t.sqrt(t.div(n, this.Fp_NONRESIDUE))
    });
    const i = t.sqrt(t.sub(t.sqr(n), t.mul(t.sqr(s), this.Fp_NONRESIDUE)));
    let o = t.mul(t.add(i, n), this.Fp_div2);
    ds(t, o) === -1 && (o = t.sub(o, i));
    const a = t.sqrt(o), c = r.create({
      c0: a,
      c1: t.div(t.mul(s, this.Fp_div2), a)
    });
    if (!r.eql(r.sqr(c), e)) throw new Error("Cannot find square root");
    const d = c, f = r.neg(d), { re: l, im: u } = r.reim(d), { re: h, im: p } = r.reim(f);
    return u > p || u === p && l > h ? d : f;
  }
  isOdd(e) {
    const { re: t, im: r } = this.reim(e), n = t % Re, s = t === Ga, i = r % Re;
    return BigInt(n || s && i) == vt;
  }
  fromBytes(e) {
    const { Fp: t } = this;
    if (e.length !== this.BYTES) throw new Error("fromBytes invalid length=" + e.length);
    return {
      c0: t.fromBytes(e.subarray(0, t.BYTES)),
      c1: t.fromBytes(e.subarray(t.BYTES))
    };
  }
  toBytes({ c0: e, c1: t }) {
    return ye(this.Fp.toBytes(e), this.Fp.toBytes(t));
  }
  cmov({ c0: e, c1: t }, { c0: r, c1: n }, s) {
    return {
      c0: this.Fp.cmov(e, r, s),
      c1: this.Fp.cmov(t, n, s)
    };
  }
  reim({ c0: e, c1: t }) {
    return {
      re: e,
      im: t
    };
  }
  Fp4Square(e, t) {
    const r = this, n = r.sqr(e), s = r.sqr(t);
    return {
      first: r.add(r.mulByNonresidue(s), n),
      second: r.sub(r.sub(r.sqr(r.add(e, t)), n), s)
    };
  }
  mulByNonresidue({ c0: e, c1: t }) {
    return this.mul({
      c0: e,
      c1: t
    }, this.NONRESIDUE);
  }
  frobeniusMap({ c0: e, c1: t }, r) {
    return {
      c0: e,
      c1: this.Fp.mul(t, this.FROBENIUS_COEFFICIENTS[r % 2])
    };
  }
}, J2 = class {
  constructor(e) {
    this.MASK = vt, this.Fp2 = e, this.ORDER = e.ORDER, this.BITS = 3 * e.BITS, this.BYTES = 3 * e.BYTES, this.isLE = e.isLE, this.ZERO = {
      c0: e.ZERO,
      c1: e.ZERO,
      c2: e.ZERO
    }, this.ONE = {
      c0: e.ONE,
      c1: e.ZERO,
      c2: e.ZERO
    };
    const { Fp: t } = e, r = Eo(e, e.NONRESIDUE, t.ORDER, 6, 2, 3);
    this.FROBENIUS_COEFFICIENTS_1 = r[0], this.FROBENIUS_COEFFICIENTS_2 = r[1], Object.seal(this);
  }
  add({ c0: e, c1: t, c2: r }, { c0: n, c1: s, c2: i }) {
    const { Fp2: o } = this;
    return {
      c0: o.add(e, n),
      c1: o.add(t, s),
      c2: o.add(r, i)
    };
  }
  sub({ c0: e, c1: t, c2: r }, { c0: n, c1: s, c2: i }) {
    const { Fp2: o } = this;
    return {
      c0: o.sub(e, n),
      c1: o.sub(t, s),
      c2: o.sub(r, i)
    };
  }
  mul({ c0: e, c1: t, c2: r }, n) {
    const { Fp2: s } = this;
    if (typeof n == "bigint") return {
      c0: s.mul(e, n),
      c1: s.mul(t, n),
      c2: s.mul(r, n)
    };
    const { c0: i, c1: o, c2: a } = n, c = s.mul(e, i), d = s.mul(t, o), f = s.mul(r, a);
    return {
      c0: s.add(c, s.mulByNonresidue(s.sub(s.mul(s.add(t, r), s.add(o, a)), s.add(d, f)))),
      c1: s.add(s.sub(s.mul(s.add(e, t), s.add(i, o)), s.add(c, d)), s.mulByNonresidue(f)),
      c2: s.sub(s.add(d, s.mul(s.add(e, r), s.add(i, a))), s.add(c, f))
    };
  }
  sqr({ c0: e, c1: t, c2: r }) {
    const { Fp2: n } = this;
    let s = n.sqr(e), i = n.mul(n.mul(e, t), Re), o = n.mul(n.mul(t, r), Re), a = n.sqr(r);
    return {
      c0: n.add(n.mulByNonresidue(o), s),
      c1: n.add(n.mulByNonresidue(a), i),
      c2: n.sub(n.sub(n.add(n.add(i, n.sqr(n.add(n.sub(e, t), r))), o), s), a)
    };
  }
  addN(e, t) {
    return this.add(e, t);
  }
  subN(e, t) {
    return this.sub(e, t);
  }
  mulN(e, t) {
    return this.mul(e, t);
  }
  sqrN(e) {
    return this.sqr(e);
  }
  create(e) {
    return e;
  }
  isValid({ c0: e, c1: t, c2: r }) {
    const { Fp2: n } = this;
    return n.isValid(e) && n.isValid(t) && n.isValid(r);
  }
  is0({ c0: e, c1: t, c2: r }) {
    const { Fp2: n } = this;
    return n.is0(e) && n.is0(t) && n.is0(r);
  }
  isValidNot0(e) {
    return !this.is0(e) && this.isValid(e);
  }
  neg({ c0: e, c1: t, c2: r }) {
    const { Fp2: n } = this;
    return {
      c0: n.neg(e),
      c1: n.neg(t),
      c2: n.neg(r)
    };
  }
  eql({ c0: e, c1: t, c2: r }, { c0: n, c1: s, c2: i }) {
    const { Fp2: o } = this;
    return o.eql(e, n) && o.eql(t, s) && o.eql(r, i);
  }
  sqrt(e) {
    return dd();
  }
  div(e, t) {
    const { Fp2: r } = this, { Fp: n } = r;
    return this.mul(e, typeof t == "bigint" ? n.inv(n.create(t)) : this.inv(t));
  }
  pow(e, t) {
    return Bs(this, e, t);
  }
  invertBatch(e) {
    return mr(this, e);
  }
  inv({ c0: e, c1: t, c2: r }) {
    const { Fp2: n } = this;
    let s = n.sub(n.sqr(e), n.mulByNonresidue(n.mul(r, t))), i = n.sub(n.mulByNonresidue(n.sqr(r)), n.mul(e, t)), o = n.sub(n.sqr(t), n.mul(e, r)), a = n.inv(n.add(n.mulByNonresidue(n.add(n.mul(r, i), n.mul(t, o))), n.mul(e, s)));
    return {
      c0: n.mul(a, s),
      c1: n.mul(a, i),
      c2: n.mul(a, o)
    };
  }
  fromBytes(e) {
    const { Fp2: t } = this;
    if (e.length !== this.BYTES) throw new Error("fromBytes invalid length=" + e.length);
    const r = t.BYTES;
    return {
      c0: t.fromBytes(e.subarray(0, r)),
      c1: t.fromBytes(e.subarray(r, r * 2)),
      c2: t.fromBytes(e.subarray(2 * r))
    };
  }
  toBytes({ c0: e, c1: t, c2: r }) {
    const { Fp2: n } = this;
    return ye(n.toBytes(e), n.toBytes(t), n.toBytes(r));
  }
  cmov({ c0: e, c1: t, c2: r }, { c0: n, c1: s, c2: i }, o) {
    const { Fp2: a } = this;
    return {
      c0: a.cmov(e, n, o),
      c1: a.cmov(t, s, o),
      c2: a.cmov(r, i, o)
    };
  }
  fromBigSix(e) {
    const { Fp2: t } = this;
    if (!Array.isArray(e) || e.length !== 6) throw new Error("invalid Fp6 usage");
    return {
      c0: t.fromBigTuple(e.slice(0, 2)),
      c1: t.fromBigTuple(e.slice(2, 4)),
      c2: t.fromBigTuple(e.slice(4, 6))
    };
  }
  frobeniusMap({ c0: e, c1: t, c2: r }, n) {
    const { Fp2: s } = this;
    return {
      c0: s.frobeniusMap(e, n),
      c1: s.mul(s.frobeniusMap(t, n), this.FROBENIUS_COEFFICIENTS_1[n % 6]),
      c2: s.mul(s.frobeniusMap(r, n), this.FROBENIUS_COEFFICIENTS_2[n % 6])
    };
  }
  mulByFp2({ c0: e, c1: t, c2: r }, n) {
    const { Fp2: s } = this;
    return {
      c0: s.mul(e, n),
      c1: s.mul(t, n),
      c2: s.mul(r, n)
    };
  }
  mulByNonresidue({ c0: e, c1: t, c2: r }) {
    const { Fp2: n } = this;
    return {
      c0: n.mulByNonresidue(r),
      c1: e,
      c2: t
    };
  }
  mul1({ c0: e, c1: t, c2: r }, n) {
    const { Fp2: s } = this;
    return {
      c0: s.mulByNonresidue(s.mul(r, n)),
      c1: s.mul(e, n),
      c2: s.mul(t, n)
    };
  }
  mul01({ c0: e, c1: t, c2: r }, n, s) {
    const { Fp2: i } = this;
    let o = i.mul(e, n), a = i.mul(t, s);
    return {
      c0: i.add(i.mulByNonresidue(i.sub(i.mul(i.add(t, r), s), a)), o),
      c1: i.sub(i.sub(i.mul(i.add(n, s), i.add(e, t)), o), a),
      c2: i.add(i.sub(i.mul(i.add(e, r), n), o), a)
    };
  }
}, Q2 = class {
  constructor(e, t) {
    this.MASK = vt;
    const { Fp2: r } = e, { Fp: n } = r;
    this.Fp6 = e, this.ORDER = r.ORDER, this.BITS = 2 * e.BITS, this.BYTES = 2 * e.BYTES, this.isLE = e.isLE, this.ZERO = {
      c0: e.ZERO,
      c1: e.ZERO
    }, this.ONE = {
      c0: e.ONE,
      c1: e.ZERO
    }, this.FROBENIUS_COEFFICIENTS = Eo(r, r.NONRESIDUE, n.ORDER, 12, 1, 6)[0], this.X_LEN = t.X_LEN, this.finalExponentiate = t.Fp12finalExponentiate;
  }
  create(e) {
    return e;
  }
  isValid({ c0: e, c1: t }) {
    const { Fp6: r } = this;
    return r.isValid(e) && r.isValid(t);
  }
  is0({ c0: e, c1: t }) {
    const { Fp6: r } = this;
    return r.is0(e) && r.is0(t);
  }
  isValidNot0(e) {
    return !this.is0(e) && this.isValid(e);
  }
  neg({ c0: e, c1: t }) {
    const { Fp6: r } = this;
    return {
      c0: r.neg(e),
      c1: r.neg(t)
    };
  }
  eql({ c0: e, c1: t }, { c0: r, c1: n }) {
    const { Fp6: s } = this;
    return s.eql(e, r) && s.eql(t, n);
  }
  sqrt(e) {
    dd();
  }
  inv({ c0: e, c1: t }) {
    const { Fp6: r } = this;
    let n = r.inv(r.sub(r.sqr(e), r.mulByNonresidue(r.sqr(t))));
    return {
      c0: r.mul(e, n),
      c1: r.neg(r.mul(t, n))
    };
  }
  div(e, t) {
    const { Fp6: r } = this, { Fp2: n } = r, { Fp: s } = n;
    return this.mul(e, typeof t == "bigint" ? s.inv(s.create(t)) : this.inv(t));
  }
  pow(e, t) {
    return Bs(this, e, t);
  }
  invertBatch(e) {
    return mr(this, e);
  }
  add({ c0: e, c1: t }, { c0: r, c1: n }) {
    const { Fp6: s } = this;
    return {
      c0: s.add(e, r),
      c1: s.add(t, n)
    };
  }
  sub({ c0: e, c1: t }, { c0: r, c1: n }) {
    const { Fp6: s } = this;
    return {
      c0: s.sub(e, r),
      c1: s.sub(t, n)
    };
  }
  mul({ c0: e, c1: t }, r) {
    const { Fp6: n } = this;
    if (typeof r == "bigint") return {
      c0: n.mul(e, r),
      c1: n.mul(t, r)
    };
    let { c0: s, c1: i } = r, o = n.mul(e, s), a = n.mul(t, i);
    return {
      c0: n.add(o, n.mulByNonresidue(a)),
      c1: n.sub(n.mul(n.add(e, t), n.add(s, i)), n.add(o, a))
    };
  }
  sqr({ c0: e, c1: t }) {
    const { Fp6: r } = this;
    let n = r.mul(e, t);
    return {
      c0: r.sub(r.sub(r.mul(r.add(r.mulByNonresidue(t), e), r.add(e, t)), n), r.mulByNonresidue(n)),
      c1: r.add(n, n)
    };
  }
  addN(e, t) {
    return this.add(e, t);
  }
  subN(e, t) {
    return this.sub(e, t);
  }
  mulN(e, t) {
    return this.mul(e, t);
  }
  sqrN(e) {
    return this.sqr(e);
  }
  fromBytes(e) {
    const { Fp6: t } = this;
    if (e.length !== this.BYTES) throw new Error("fromBytes invalid length=" + e.length);
    return {
      c0: t.fromBytes(e.subarray(0, t.BYTES)),
      c1: t.fromBytes(e.subarray(t.BYTES))
    };
  }
  toBytes({ c0: e, c1: t }) {
    const { Fp6: r } = this;
    return ye(r.toBytes(e), r.toBytes(t));
  }
  cmov({ c0: e, c1: t }, { c0: r, c1: n }, s) {
    const { Fp6: i } = this;
    return {
      c0: i.cmov(e, r, s),
      c1: i.cmov(t, n, s)
    };
  }
  fromBigTwelve(e) {
    const { Fp6: t } = this;
    return {
      c0: t.fromBigSix(e.slice(0, 6)),
      c1: t.fromBigSix(e.slice(6, 12))
    };
  }
  frobeniusMap(e, t) {
    const { Fp6: r } = this, { Fp2: n } = r, { c0: s, c1: i, c2: o } = r.frobeniusMap(e.c1, t), a = this.FROBENIUS_COEFFICIENTS[t % 12];
    return {
      c0: r.frobeniusMap(e.c0, t),
      c1: r.create({
        c0: n.mul(s, a),
        c1: n.mul(i, a),
        c2: n.mul(o, a)
      })
    };
  }
  mulByFp2({ c0: e, c1: t }, r) {
    const { Fp6: n } = this;
    return {
      c0: n.mulByFp2(e, r),
      c1: n.mulByFp2(t, r)
    };
  }
  conjugate({ c0: e, c1: t }) {
    return {
      c0: e,
      c1: this.Fp6.neg(t)
    };
  }
  mul014({ c0: e, c1: t }, r, n, s) {
    const { Fp6: i } = this, { Fp2: o } = i;
    let a = i.mul01(e, r, n), c = i.mul1(t, s);
    return {
      c0: i.add(i.mulByNonresidue(c), a),
      c1: i.sub(i.sub(i.mul01(i.add(t, e), r, o.add(n, s)), a), c)
    };
  }
  mul034({ c0: e, c1: t }, r, n, s) {
    const { Fp6: i } = this, { Fp2: o } = i, a = i.create({
      c0: o.mul(e.c0, r),
      c1: o.mul(e.c1, r),
      c2: o.mul(e.c2, r)
    }), c = i.mul01(t, n, s), d = i.mul01(i.add(e, t), o.add(r, n), s);
    return {
      c0: i.add(i.mulByNonresidue(c), a),
      c1: i.sub(d, i.add(a, c))
    };
  }
  _cyclotomicSquare({ c0: e, c1: t }) {
    const { Fp6: r } = this, { Fp2: n } = r, { c0: s, c1: i, c2: o } = e, { c0: a, c1: c, c2: d } = t, { first: f, second: l } = n.Fp4Square(s, c), { first: u, second: h } = n.Fp4Square(a, o), { first: p, second: y } = n.Fp4Square(i, d), w = n.mulByNonresidue(y);
    return {
      c0: r.create({
        c0: n.add(n.mul(n.sub(f, s), Re), f),
        c1: n.add(n.mul(n.sub(u, i), Re), u),
        c2: n.add(n.mul(n.sub(p, o), Re), p)
      }),
      c1: r.create({
        c0: n.add(n.mul(n.add(w, a), Re), w),
        c1: n.add(n.mul(n.add(l, c), Re), l),
        c2: n.add(n.mul(n.add(h, d), Re), h)
      })
    };
  }
  _cyclotomicExp(e, t) {
    let r = this.ONE;
    for (let n = this.X_LEN - 1; n >= 0; n--) r = this._cyclotomicSquare(r), m2(t, n) && (r = this.mul(r, e));
    return r;
  }
};
function ep(e) {
  const t = Hr(e.ORDER), r = new W2(t, e), n = new J2(r);
  return {
    Fp: t,
    Fp2: r,
    Fp6: n,
    Fp12: new Q2(n, e)
  };
}
var Te = BigInt(0), ps = BigInt(1), ze = BigInt(2), Is = BigInt(3), vn = BigInt(4), kt = BigInt("0xd201000000010000"), tp = wn(kt), lr = {
  p: BigInt("0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaab"),
  n: BigInt("0x73eda753299d7d483339d80809a1d80553bda402fffe5bfeffffffff00000001"),
  h: BigInt("0x396c8c005555e1568c00aaab0000aaab"),
  a: Te,
  b: vn,
  Gx: BigInt("0x17f1d3a73197d7942695638c4fa9ac0fc3688c4f9774b905a14e3a3f171bac586c55e83ff97a1aeffb3af00adb22c6bb"),
  Gy: BigInt("0x08b3f481e3aaa0f1a09e30ed741d8ae4fcf5e095d5d00af600db18cb2c04b3edd03cc744a2888ae40caa232946c5e7e1")
}, rp = Hr(lr.n, {
  modFromBytes: !0,
  isLE: !0
}), { Fp: V, Fp2: H, Fp6: np, Fp12: z } = ep({
  ORDER: lr.p,
  X_LEN: tp,
  FP2_NONRESIDUE: [ps, ps],
  Fp2mulByB: ({ c0: e, c1: t }) => {
    const r = V.mul(e, vn), n = V.mul(t, vn);
    return {
      c0: V.sub(r, n),
      c1: V.add(r, n)
    };
  },
  Fp12finalExponentiate: (e) => {
    const t = kt, r = z.div(z.frobeniusMap(e, 6), e), n = z.mul(z.frobeniusMap(r, 2), r), s = z.conjugate(z._cyclotomicExp(n, t)), i = z.mul(z.conjugate(z._cyclotomicSquare(n)), s), o = z.conjugate(z._cyclotomicExp(i, t)), a = z.conjugate(z._cyclotomicExp(o, t)), c = z.mul(z.conjugate(z._cyclotomicExp(a, t)), z._cyclotomicSquare(s)), d = z.conjugate(z._cyclotomicExp(c, t)), f = z.frobeniusMap(z.mul(s, a), 2), l = z.frobeniusMap(z.mul(o, n), 3), u = z.frobeniusMap(z.mul(c, z.conjugate(n)), 1), h = z.mul(z.mul(d, z.conjugate(i)), n);
    return z.mul(z.mul(z.mul(f, l), u), h);
  }
}), { G2psi: za, G2psi2: sp } = X2(V, H, H.div(H.ONE, H.NONRESIDUE)), ui = Object.freeze({
  DST: "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_",
  encodeDST: "BLS_SIG_BLS12381G2_XMD:SHA-256_SSWU_RO_NUL_",
  p: V.ORDER,
  m: 2,
  k: 128,
  expand: "xmd",
  hash: ad
}), vo = {
  p: H.ORDER,
  n: lr.n,
  h: BigInt("0x5d543a95414e7f1091d50792876a202cd91de4547085abaa68a205b2e5a7ddfa628f1cb4d9e82ef21537e293a6691ae1616ec6e786f0c70cf1c38e31c7238e5"),
  a: H.ZERO,
  b: H.fromBigTuple([vn, vn]),
  Gx: H.fromBigTuple([BigInt("0x024aa2b2f08f0a91260805272dc51051c6e47ad4fa403b02b4510b647ae3d1770bac0326a805bbefd48056c8c121bdb8"), BigInt("0x13e02b6052719f607dacd3a088274f65596bd0d09920b61ab5da61bbdc7f5049334cf11213945d57e5ac7d055d042b7e")]),
  Gy: H.fromBigTuple([BigInt("0x0ce5d527727d6e118cc9cdc6da2e351aadfd9baa8cbdd3a76d429a695160d12c923ac9cc3baca289e193548608b82801"), BigInt("0x0606c4a02ea734cc32acd2b02bc28b99cb3e287e85a763af267492ab572e99ab3f370d275cec1da1aaa9075ff05f79be")])
}, Ss = Cn(V.toBytes(Te), {
  infinity: !0,
  compressed: !0
});
function Ts(e) {
  e = e.slice();
  const t = e[0] & 224, r = !!(t >> 7 & 1), n = !!(t >> 6 & 1), s = !!(t >> 5 & 1);
  return e[0] &= 31, {
    compressed: r,
    infinity: n,
    sort: s,
    value: e
  };
}
function Cn(e, t) {
  if (e[0] & 224) throw new Error("setMask: non-empty mask");
  return t.compressed && (e[0] |= 128), t.infinity && (e[0] |= 64), t.sort && (e[0] |= 32), e;
}
function ip(e, t, r) {
  const { BYTES: n, ORDER: s } = V, i = t.is0(), { x: o, y: a } = t.toAffine();
  if (r) {
    if (i) return Ss.slice();
    const c = !!(a * ze / s);
    return Cn(_e(o, n), {
      compressed: !0,
      sort: c
    });
  } else return i ? ye(Uint8Array.of(64), new Uint8Array(2 * n - 1)) : ye(_e(o, n), _e(a, n));
}
function fi(e) {
  e.assertValidity();
  const { BYTES: t, ORDER: r } = V, { x: n, y: s } = e.toAffine();
  if (e.is0()) return Ss.slice();
  const i = !!(s * ze / r);
  return Cn(_e(n, t), {
    compressed: !0,
    sort: i
  });
}
function op(e) {
  const { compressed: t, infinity: r, sort: n, value: s } = Ts(e), { BYTES: i, ORDER: o } = V;
  if (s.length === 48 && t) {
    const a = ut(s), c = V.create(a & yr(V.BITS));
    if (r) {
      if (c !== Te) throw new Error("invalid G1 point: non-empty, at infinity, with compression");
      return {
        x: Te,
        y: Te
      };
    }
    const d = V.add(V.pow(c, Is), V.create(lr.b));
    let f = V.sqrt(d);
    if (!f) throw new Error("invalid G1 point: compressed point");
    return f * ze / o !== BigInt(n) && (f = V.neg(f)), {
      x: V.create(c),
      y: V.create(f)
    };
  } else if (s.length === 96 && !t) {
    const a = ut(s.subarray(0, i)), c = ut(s.subarray(i));
    if (r) {
      if (a !== Te || c !== Te) throw new Error("G1: non-empty point at infinity");
      return fe.G1.Point.ZERO.toAffine();
    }
    return {
      x: V.create(a),
      y: V.create(c)
    };
  } else throw new Error("invalid G1 point: expected 48/96 bytes");
}
function Xa(e) {
  const { infinity: t, sort: r, value: n } = Ts(kr("signatureHex", e, 48)), s = V.ORDER, i = fe.G1.Point, o = ut(n);
  if (t) return i.ZERO;
  const a = V.create(o & yr(V.BITS)), c = V.add(V.pow(a, Is), V.create(lr.b));
  let d = V.sqrt(c);
  if (!d) throw new Error("invalid G1 point: compressed");
  const f = BigInt(r);
  d * ze / s !== f && (d = V.neg(d));
  const l = i.fromAffine({
    x: a,
    y: d
  });
  return l.assertValidity(), l;
}
function ap(e, t, r) {
  const { BYTES: n, ORDER: s } = V, i = t.is0(), { x: o, y: a } = t.toAffine();
  if (r) {
    if (i) return ye(Ss, _e(Te, n));
    const c = !!(a.c1 === Te ? a.c0 * ze / s : a.c1 * ze / s);
    return ye(Cn(_e(o.c1, n), {
      compressed: !0,
      sort: c
    }), _e(o.c0, n));
  } else {
    if (i) return ye(Uint8Array.of(64), new Uint8Array(4 * n - 1));
    const { re: c, im: d } = H.reim(o), { re: f, im: l } = H.reim(a);
    return ye(_e(d, n), _e(c, n), _e(l, n), _e(f, n));
  }
}
function di(e) {
  e.assertValidity();
  const { BYTES: t } = V;
  if (e.is0()) return ye(Ss, _e(Te, t));
  const { x: r, y: n } = e.toAffine(), { re: s, im: i } = H.reim(r), { re: o, im: a } = H.reim(n), c = !!((a > Te ? a * ze : o * ze) / V.ORDER & ps), d = s;
  return ye(Cn(_e(i, t), {
    sort: c,
    compressed: !0
  }), _e(d, t));
}
function cp(e) {
  const { BYTES: t, ORDER: r } = V, { compressed: n, infinity: s, sort: i, value: o } = Ts(e);
  if (!n && !s && i || !n && s && i || i && s && n) throw new Error("invalid encoding flag: " + (e[0] & 224));
  const a = (c, d, f) => ut(c.slice(d, f));
  if (o.length === 96 && n) {
    if (s) {
      if (o.reduce((p, y) => p !== 0 ? y + 1 : y, 0) > 0) throw new Error("invalid G2 point: compressed");
      return {
        x: H.ZERO,
        y: H.ZERO
      };
    }
    const c = a(o, 0, t), d = a(o, t, 2 * t), f = H.create({
      c0: V.create(d),
      c1: V.create(c)
    }), l = H.add(H.pow(f, Is), vo.b);
    let u = H.sqrt(l);
    const h = u.c1 === Te ? u.c0 * ze / r : u.c1 * ze / r ? ps : Te;
    return u = i && h > 0 ? u : H.neg(u), {
      x: f,
      y: u
    };
  } else if (o.length === 192 && !n) {
    if (s) {
      if (o.reduce((u, h) => u !== 0 ? h + 1 : h, 0) > 0) throw new Error("invalid G2 point: uncompressed");
      return {
        x: H.ZERO,
        y: H.ZERO
      };
    }
    const c = a(o, 0 * t, 1 * t), d = a(o, 1 * t, 2 * t), f = a(o, 2 * t, 3 * t), l = a(o, 3 * t, 4 * t);
    return {
      x: H.fromBigTuple([d, c]),
      y: H.fromBigTuple([l, f])
    };
  } else throw new Error("invalid G2 point: expected 96/192 bytes");
}
function Wa(e) {
  const { ORDER: t } = V, { infinity: r, sort: n, value: s } = Ts(kr("signatureHex", e)), i = fe.G2.Point, o = s.length / 2;
  if (o !== 48 && o !== 96) throw new Error("invalid compressed signature length, expected 96/192 bytes");
  const a = ut(s.slice(0, o)), c = ut(s.slice(o));
  if (r) return i.ZERO;
  const d = V.create(a & yr(V.BITS)), f = V.create(c), l = H.create({
    c0: f,
    c1: d
  }), u = H.add(H.pow(l, Is), vo.b);
  let h = H.sqrt(u);
  if (!h) throw new Error("Failed to find a square root");
  const { re: p, im: y } = H.reim(h), w = BigInt(n), m = y > Te && y * ze / t !== w, g = y === Te && p * ze / t !== w;
  (m || g) && (h = H.neg(h));
  const E = i.fromAffine({
    x: l,
    y: h
  });
  return E.assertValidity(), E;
}
var fe = z2({
  fields: {
    Fp: V,
    Fp2: H,
    Fp6: np,
    Fp12: z,
    Fr: rp
  },
  G1: {
    ...lr,
    Fp: V,
    htfDefaults: {
      ...ui,
      m: 1,
      DST: "BLS_SIG_BLS12381G1_XMD:SHA-256_SSWU_RO_NUL_"
    },
    wrapPrivateKey: !0,
    allowInfinityPoint: !0,
    isTorsionFree: (e, t) => {
      const r = BigInt("0x5f19672fdf76ce51ba69c6076a0f77eaddb3a93be6f89688de17d813620a00022e01fffffffefffe"), n = new e(V.mul(t.X, r), t.Y, t.Z);
      return t.multiplyUnsafe(kt).negate().multiplyUnsafe(kt).equals(n);
    },
    clearCofactor: (e, t) => t.multiplyUnsafe(kt).add(t),
    mapToCurve: hp,
    fromBytes: op,
    toBytes: ip,
    ShortSignature: {
      fromBytes(e) {
        return Fe(e), Xa(e);
      },
      fromHex(e) {
        return Xa(e);
      },
      toBytes(e) {
        return fi(e);
      },
      toRawBytes(e) {
        return fi(e);
      },
      toHex(e) {
        return gn(fi(e));
      }
    }
  },
  G2: {
    ...vo,
    Fp: H,
    hEff: BigInt("0xbc69f08f2ee75b3584c6a0ea91b352888e2a8e9145ad7689986ff031508ffe1329c2f178731db956d82bf015d1212b02ec0ec69d7477c1ae954cbc06689f6a359894c0adebbf6b4e8020005aaa95551"),
    htfDefaults: { ...ui },
    wrapPrivateKey: !0,
    allowInfinityPoint: !0,
    mapToCurve: pp,
    isTorsionFree: (e, t) => t.multiplyUnsafe(kt).negate().equals(za(e, t)),
    clearCofactor: (e, t) => {
      const r = kt;
      let n = t.multiplyUnsafe(r).negate(), s = za(e, t), i = t.double();
      return i = sp(e, i), i = i.subtract(s), s = n.add(s), s = s.multiplyUnsafe(r).negate(), i = i.add(s), i = i.subtract(n), i.subtract(t);
    },
    fromBytes: cp,
    toBytes: ap,
    Signature: {
      fromBytes(e) {
        return Fe(e), Wa(e);
      },
      fromHex(e) {
        return Wa(e);
      },
      toBytes(e) {
        return di(e);
      },
      toRawBytes(e) {
        return di(e);
      },
      toHex(e) {
        return gn(di(e));
      }
    }
  },
  params: {
    ateLoopSize: kt,
    r: lr.n,
    xNegative: !0,
    twistType: "multiplicative"
  },
  htfDefaults: ui
}), up = Id(H, [
  [
    ["0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97d6", "0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97d6"],
    ["0x0", "0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71a"],
    ["0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71e", "0x8ab05f8bdd54cde190937e76bc3e447cc27c3d6fbd7063fcd104635a790520c0a395554e5c6aaaa9354ffffffffe38d"],
    ["0x171d6541fa38ccfaed6dea691f5fb614cb14b4e7f4e810aa22d6108f142b85757098e38d0f671c7188e2aaaaaaaa5ed1", "0x0"]
  ],
  [
    ["0x0", "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa63"],
    ["0xc", "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa9f"],
    ["0x1", "0x0"]
  ],
  [
    ["0x1530477c7ab4113b59a4c18b076d11930f7da5d4a07f649bf54439d87d27e500fc8c25ebf8c92f6812cfc71c71c6d706", "0x1530477c7ab4113b59a4c18b076d11930f7da5d4a07f649bf54439d87d27e500fc8c25ebf8c92f6812cfc71c71c6d706"],
    ["0x0", "0x5c759507e8e333ebb5b7a9a47d7ed8532c52d39fd3a042a88b58423c50ae15d5c2638e343d9c71c6238aaaaaaaa97be"],
    ["0x11560bf17baa99bc32126fced787c88f984f87adf7ae0c7f9a208c6b4f20a4181472aaa9cb8d555526a9ffffffffc71c", "0x8ab05f8bdd54cde190937e76bc3e447cc27c3d6fbd7063fcd104635a790520c0a395554e5c6aaaa9354ffffffffe38f"],
    ["0x124c9ad43b6cf79bfbf7043de3811ad0761b0f37a1e26286b0e977c69aa274524e79097a56dc4bd9e1b371c71c718b10", "0x0"]
  ],
  [
    ["0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa8fb", "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa8fb"],
    ["0x0", "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffa9d3"],
    ["0x12", "0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaa99"],
    ["0x1", "0x0"]
  ]
].map((e) => e.map((t) => H.fromBigTuple(t.map(BigInt))))), fp = Id(V, [
  [
    "0x11a05f2b1e833340b809101dd99815856b303e88a2d7005ff2627b56cdb4e2c85610c2d5f2e62d6eaeac1662734649b7",
    "0x17294ed3e943ab2f0588bab22147a81c7c17e75b2f6a8417f565e33c70d1e86b4838f2a6f318c356e834eef1b3cb83bb",
    "0xd54005db97678ec1d1048c5d10a9a1bce032473295983e56878e501ec68e25c958c3e3d2a09729fe0179f9dac9edcb0",
    "0x1778e7166fcc6db74e0609d307e55412d7f5e4656a8dbf25f1b33289f1b330835336e25ce3107193c5b388641d9b6861",
    "0xe99726a3199f4436642b4b3e4118e5499db995a1257fb3f086eeb65982fac18985a286f301e77c451154ce9ac8895d9",
    "0x1630c3250d7313ff01d1201bf7a74ab5db3cb17dd952799b9ed3ab9097e68f90a0870d2dcae73d19cd13c1c66f652983",
    "0xd6ed6553fe44d296a3726c38ae652bfb11586264f0f8ce19008e218f9c86b2a8da25128c1052ecaddd7f225a139ed84",
    "0x17b81e7701abdbe2e8743884d1117e53356de5ab275b4db1a682c62ef0f2753339b7c8f8c8f475af9ccb5618e3f0c88e",
    "0x80d3cf1f9a78fc47b90b33563be990dc43b756ce79f5574a2c596c928c5d1de4fa295f296b74e956d71986a8497e317",
    "0x169b1f8e1bcfa7c42e0c37515d138f22dd2ecb803a0c5c99676314baf4bb1b7fa3190b2edc0327797f241067be390c9e",
    "0x10321da079ce07e272d8ec09d2565b0dfa7dccdde6787f96d50af36003b14866f69b771f8c285decca67df3f1605fb7b",
    "0x6e08c248e260e70bd1e962381edee3d31d79d7e22c837bc23c0bf1bc24c6b68c24b1b80b64d391fa9c8ba2e8ba2d229"
  ],
  [
    "0x8ca8d548cff19ae18b2e62f4bd3fa6f01d5ef4ba35b48ba9c9588617fc8ac62b558d681be343df8993cf9fa40d21b1c",
    "0x12561a5deb559c4348b4711298e536367041e8ca0cf0800c0126c2588c48bf5713daa8846cb026e9e5c8276ec82b3bff",
    "0xb2962fe57a3225e8137e629bff2991f6f89416f5a718cd1fca64e00b11aceacd6a3d0967c94fedcfcc239ba5cb83e19",
    "0x3425581a58ae2fec83aafef7c40eb545b08243f16b1655154cca8abc28d6fd04976d5243eecf5c4130de8938dc62cd8",
    "0x13a8e162022914a80a6f1d5f43e7a07dffdfc759a12062bb8d6b44e833b306da9bd29ba81f35781d539d395b3532a21e",
    "0xe7355f8e4e667b955390f7f0506c6e9395735e9ce9cad4d0a43bcef24b8982f7400d24bc4228f11c02df9a29f6304a5",
    "0x772caacf16936190f3e0c63e0596721570f5799af53a1894e2e073062aede9cea73b3538f0de06cec2574496ee84a3a",
    "0x14a7ac2a9d64a8b230b3f5b074cf01996e7f63c21bca68a81996e1cdf9822c580fa5b9489d11e2d311f7d99bbdcc5a5e",
    "0xa10ecf6ada54f825e920b3dafc7a3cce07f8d1d7161366b74100da67f39883503826692abba43704776ec3a79a1d641",
    "0x95fc13ab9e92ad4476d6e3eb3a56680f682b4ee96f7d03776df533978f31c1593174e4b4b7865002d6384d168ecdd0a",
    "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
  ],
  [
    "0x90d97c81ba24ee0259d1f094980dcfa11ad138e48a869522b52af6c956543d3cd0c7aee9b3ba3c2be9845719707bb33",
    "0x134996a104ee5811d51036d776fb46831223e96c254f383d0f906343eb67ad34d6c56711962fa8bfe097e75a2e41c696",
    "0xcc786baa966e66f4a384c86a3b49942552e2d658a31ce2c344be4b91400da7d26d521628b00523b8dfe240c72de1f6",
    "0x1f86376e8981c217898751ad8746757d42aa7b90eeb791c09e4a3ec03251cf9de405aba9ec61deca6355c77b0e5f4cb",
    "0x8cc03fdefe0ff135caf4fe2a21529c4195536fbe3ce50b879833fd221351adc2ee7f8dc099040a841b6daecf2e8fedb",
    "0x16603fca40634b6a2211e11db8f0a6a074a7d0d4afadb7bd76505c3d3ad5544e203f6326c95a807299b23ab13633a5f0",
    "0x4ab0b9bcfac1bbcb2c977d027796b3ce75bb8ca2be184cb5231413c4d634f3747a87ac2460f415ec961f8855fe9d6f2",
    "0x987c8d5333ab86fde9926bd2ca6c674170a05bfe3bdd81ffd038da6c26c842642f64550fedfe935a15e4ca31870fb29",
    "0x9fc4018bd96684be88c9e221e4da1bb8f3abd16679dc26c1e8b6e6a1f20cabe69d65201c78607a360370e577bdba587",
    "0xe1bba7a1186bdb5223abde7ada14a23c42a0ca7915af6fe06985e7ed1e4d43b9b3f7055dd4eba6f2bafaaebca731c30",
    "0x19713e47937cd1be0dfd0b8f1d43fb93cd2fcbcb6caf493fd1183e416389e61031bf3a5cce3fbafce813711ad011c132",
    "0x18b46a908f36f6deb918c143fed2edcc523559b8aaf0c2462e6bfe7f911f643249d9cdf41b44d606ce07c8a4d0074d8e",
    "0xb182cac101b9399d155096004f53f447aa7b12a3426b08ec02710e807b4633f06c851c1919211f20d4c04f00b971ef8",
    "0x245a394ad1eca9b72fc00ae7be315dc757b3b080d4c158013e6632d3c40659cc6cf90ad1c232a6442d9d3f5db980133",
    "0x5c129645e44cf1102a159f748c4a3fc5e673d81d7e86568d9ab0f5d396a7ce46ba1049b6579afb7866b1e715475224b",
    "0x15e6be4e990f03ce4ea50b3b42df2eb5cb181d8f84965a3957add4fa95af01b2b665027efec01c7704b456be69c8b604"
  ],
  [
    "0x16112c4c3a9c98b252181140fad0eae9601a6de578980be6eec3232b5be72e7a07f3688ef60c206d01479253b03663c1",
    "0x1962d75c2381201e1a0cbd6c43c348b885c84ff731c4d59ca4a10356f453e01f78a4260763529e3532f6102c2e49a03d",
    "0x58df3306640da276faaae7d6e8eb15778c4855551ae7f310c35a5dd279cd2eca6757cd636f96f891e2538b53dbf67f2",
    "0x16b7d288798e5395f20d23bf89edb4d1d115c5dbddbcd30e123da489e726af41727364f2c28297ada8d26d98445f5416",
    "0xbe0e079545f43e4b00cc912f8228ddcc6d19c9f0f69bbb0542eda0fc9dec916a20b15dc0fd2ededda39142311a5001d",
    "0x8d9e5297186db2d9fb266eaac783182b70152c65550d881c5ecd87b6f0f5a6449f38db9dfa9cce202c6477faaf9b7ac",
    "0x166007c08a99db2fc3ba8734ace9824b5eecfdfa8d0cf8ef5dd365bc400a0051d5fa9c01a58b1fb93d1a1399126a775c",
    "0x16a3ef08be3ea7ea03bcddfabba6ff6ee5a4375efa1f4fd7feb34fd206357132b920f5b00801dee460ee415a15812ed9",
    "0x1866c8ed336c61231a1be54fd1d74cc4f9fb0ce4c6af5920abc5750c4bf39b4852cfe2f7bb9248836b233d9d55535d4a",
    "0x167a55cda70a6e1cea820597d94a84903216f763e13d87bb5308592e7ea7d4fbc7385ea3d529b35e346ef48bb8913f55",
    "0x4d2f259eea405bd48f010a01ad2911d9c6dd039bb61a6290e591b36e636a5c871a5c29f4f83060400f8b49cba8f6aa8",
    "0xaccbb67481d033ff5852c1e48c50c477f94ff8aefce42d28c0f9a88cea7913516f968986f7ebbea9684b529e2561092",
    "0xad6b9514c767fe3c3613144b45f1496543346d98adf02267d5ceef9a00d9b8693000763e3b90ac11e99b138573345cc",
    "0x2660400eb2e4f3b628bdd0d53cd76f2bf565b94e72927c1cb748df27942480e420517bd8714cc80d1fadc1326ed06f7",
    "0xe0fa1d816ddc03e6b24255e0d7819c171c40f65e273b853324efcd6356caa205ca2f570f13497804415473a1d634b8f",
    "0x000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001"
  ]
].map((e) => e.map((t) => BigInt(t)))), dp = Td(V, {
  A: V.create(BigInt("0x144698a3b8e9433d693a02c96d4982b0ea985383ee66a8d8e8981aefd881ac98936f8da0e0f97f5cf428082d584c1d")),
  B: V.create(BigInt("0x12e2908d11688030018b12e8753eee3b2016c1f0f24f4070a0b9c14fcef35ef55a23215a316ceaa5d1cc48e98e172be0")),
  Z: V.create(BigInt(11))
}), lp = Td(H, {
  A: H.create({
    c0: V.create(Te),
    c1: V.create(BigInt(240))
  }),
  B: H.create({
    c0: V.create(BigInt(1012)),
    c1: V.create(BigInt(1012))
  }),
  Z: H.create({
    c0: V.create(BigInt(-2)),
    c1: V.create(BigInt(-1))
  })
});
function hp(e) {
  const { x: t, y: r } = dp(V.create(e[0]));
  return fp(t, r);
}
function pp(e) {
  const { x: t, y: r } = lp(H.fromBigTuple(e));
  return up(t, r);
}
var bp = BigInt(0), Xr = BigInt(1), yp = BigInt(2), mp = BigInt(7), gp = BigInt(256), wp = BigInt(113), Od = [], Cd = [], Ad = [];
for (let e = 0, t = Xr, r = 1, n = 0; e < 24; e++) {
  [r, n] = [n, (2 * r + 3 * n) % 5], Od.push(2 * (5 * n + r)), Cd.push((e + 1) * (e + 2) / 2 % 64);
  let s = bp;
  for (let i = 0; i < 7; i++) t = (t << Xr ^ (t >> mp) * wp) % gp, t & yp && (s ^= Xr << (Xr << /* @__PURE__ */ BigInt(i)) - Xr);
  Ad.push(s);
}
var Rd = id(Ad, !0), Ep = Rd[0], vp = Rd[1], Ja = (e, t, r) => r > 32 ? l2(e, t, r) : f2(e, t, r), Qa = (e, t, r) => r > 32 ? h2(e, t, r) : d2(e, t, r);
function _p(e, t = 24) {
  const r = new Uint32Array(10);
  for (let n = 24 - t; n < 24; n++) {
    for (let o = 0; o < 10; o++) r[o] = e[o] ^ e[o + 10] ^ e[o + 20] ^ e[o + 30] ^ e[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const a = (o + 8) % 10, c = (o + 2) % 10, d = r[c], f = r[c + 1], l = Ja(d, f, 1) ^ r[a], u = Qa(d, f, 1) ^ r[a + 1];
      for (let h = 0; h < 50; h += 10) e[o + h] ^= l, e[o + h + 1] ^= u;
    }
    let s = e[2], i = e[3];
    for (let o = 0; o < 24; o++) {
      const a = Cd[o], c = Ja(s, i, a), d = Qa(s, i, a), f = Od[o];
      s = e[f], i = e[f + 1], e[f] = c, e[f + 1] = d;
    }
    for (let o = 0; o < 50; o += 10) {
      for (let a = 0; a < 10; a++) r[a] = e[o + a];
      for (let a = 0; a < 10; a++) e[o + a] ^= ~r[(a + 2) % 10] & r[(a + 4) % 10];
    }
    e[0] ^= Ep[n], e[1] ^= vp[n];
  }
  fr(r);
}
var xp = class Nd extends bo {
  constructor(t, r, n, s = !1, i = 24) {
    if (super(), this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, this.enableXOF = !1, this.blockLen = t, this.suffix = r, this.outputLen = n, this.enableXOF = s, this.rounds = i, Lr(n), !(0 < t && t < 200)) throw new Error("only keccak-f1600 function is supported");
    this.state = new Uint8Array(200), this.state32 = W1(this.state);
  }
  clone() {
    return this._cloneInto();
  }
  keccak() {
    Na(this.state32), _p(this.state32, this.rounds), Na(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    Mr(this), t = dr(t), Fe(t);
    const { blockLen: r, state: n } = this, s = t.length;
    for (let i = 0; i < s; ) {
      const o = Math.min(r - this.pos, s - i);
      for (let a = 0; a < o; a++) n[this.pos++] ^= t[i++];
      this.pos === r && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = !0;
    const { state: t, suffix: r, pos: n, blockLen: s } = this;
    t[n] ^= r, r & 128 && n === s - 1 && this.keccak(), t[s - 1] ^= 128, this.keccak();
  }
  writeInto(t) {
    Mr(this, !1), Fe(t), this.finish();
    const r = this.state, { blockLen: n } = this;
    for (let s = 0, i = t.length; s < i; ) {
      this.posOut >= n && this.keccak();
      const o = Math.min(n - this.posOut, i - s);
      t.set(r.subarray(this.posOut, this.posOut + o), s), this.posOut += o, s += o;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return Lr(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if (rd(t, this), this.finished) throw new Error("digest() was already called");
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, fr(this.state);
  }
  _cloneInto(t) {
    const { blockLen: r, suffix: n, outputLen: s, rounds: i, enableXOF: o } = this;
    return t || (t = new Nd(r, n, s, o, i)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = i, t.suffix = n, t.outputLen = s, t.enableXOF = o, t.destroyed = this.destroyed, t;
  }
}, Bp = (e, t, r) => n2((n = {}) => new xp(t, e, n.dkLen === void 0 ? r : n.dkLen, !0)), zp = Bp(31, 136, 256 / 8);
function Ip(e, t, r) {
  return po(e), r === void 0 && (r = new Uint8Array(e.outputLen)), wo(e, dr(r), dr(t));
}
var li = /* @__PURE__ */ Uint8Array.from([0]), ec = /* @__PURE__ */ Uint8Array.of();
function Sp(e, t, r, n = 32) {
  po(e), Lr(n);
  const s = e.outputLen;
  if (n > 255 * s) throw new Error("Length should be <= 255*HashLen");
  const i = Math.ceil(n / s);
  r === void 0 && (r = ec);
  const o = new Uint8Array(i * s), a = wo.create(e, t), c = a._cloneInto(), d = new Uint8Array(a.outputLen);
  for (let f = 0; f < i; f++) li[0] = f + 1, c.update(f === 0 ? ec : d).update(r).update(li).digestInto(d), o.set(d, s * f), a._cloneInto(c);
  return a.destroy(), c.destroy(), fr(d, li), o.slice(0, n);
}
var Tp = (e, t, r, n, s) => Sp(e, Ip(e, t, r), n, s), Op = ad, xr = 48, Yn = 96, Xp = class Mi {
  #e;
  #t;
  static random() {
    return new Mi(fe.utils.randomPrivateKey());
  }
  static deserialize(t) {
    if (t.length !== 32) throw new Error("Invalid size for transport secret key");
    return new Mi(t);
  }
  publicKeyBytes() {
    return this.#t.toRawBytes(!0);
  }
  serialize() {
    return this.#e;
  }
  constructor(t) {
    this.#e = t, this.#t = fe.G1.ProjectivePoint.fromPrivateKey(this.#e);
  }
};
function tc(e) {
  let t = e.length;
  const r = new Uint8Array(8 + t);
  for (let n = 7; n >= 0; n--) r[n] = t & 255, t >>>= 8;
  return r.set(e, 8), r;
}
var Wp = class ki {
  #e;
  static deserialize(t) {
    return new ki(fe.G2.ProjectivePoint.fromHex(t));
  }
  deriveSubKey(t) {
    if (t.length === 0) return this;
    {
      const r = "ic-vetkd-bls12-381-g2-context", n = this.publicKeyBytes(), s = Cp(new Uint8Array([...tc(n), ...tc(t)]), r), i = fe.G2.ProjectivePoint.BASE.multiply(s);
      return new ki(this.getPoint().add(i));
    }
  }
  publicKeyBytes() {
    return this.#e.toRawBytes(!0);
  }
  getPoint() {
    return this.#e;
  }
  constructor(t) {
    this.#e = t;
  }
};
function Cp(e, t) {
  const r = {
    p: fe.params.r,
    m: 1,
    DST: t
  };
  return Zn(e, 1, Object.assign({}, fe.G2.CURVE.htfDefaults, r))[0][0];
}
function rc(e) {
  return typeof e == "string" ? new TextEncoder().encode(e) : e;
}
function Ap(e, t, r) {
  return Tp(Op, e, new Uint8Array(), t, r);
}
function Rp(e, t, r) {
  const n = e.publicKeyBytes(), s = new Uint8Array([...n, ...t]), i = Object.assign({}, fe.G1.CURVE.htfDefaults, { DST: "BLS_SIG_BLS12381G1_XMD:SHA-256_SSWU_RO_AUG_" });
  return fe.verifyShortSignature(r, s, e.getPoint(), i);
}
var Np = class Ud {
  #e;
  #t;
  signatureBytes() {
    return this.#t;
  }
  serialize() {
    return this.#t;
  }
  deriveSymmetricKey(t, r) {
    return Ap(this.#t, t, r);
  }
  async asDerivedKeyMaterial() {
    return Up.setup(this.#t);
  }
  static deserialize(t) {
    return new Ud(fe.G1.ProjectivePoint.fromHex(t));
  }
  getPoint() {
    return this.#e;
  }
  constructor(t) {
    this.#e = t, this.#t = t.toRawBytes(!0);
  }
}, Ln = 12, Up = class Vi {
  #e;
  constructor(t) {
    this.#e = t;
  }
  static fromCryptoKey(t) {
    return new Vi(t);
  }
  static async setup(t) {
    return new Vi(await globalThis.crypto.subtle.importKey("raw", t, "HKDF", !1, ["deriveKey"]));
  }
  getCryptoKey() {
    return this.#e;
  }
  async deriveAesGcmCryptoKey(t) {
    const r = {
      name: "HKDF",
      hash: "SHA-256",
      length: 256,
      info: rc(t),
      salt: new Uint8Array()
    };
    return globalThis.crypto.subtle.deriveKey(r, this.#e, {
      name: "AES-GCM",
      length: 256
    }, !1, ["encrypt", "decrypt"]);
  }
  async encryptMessage(t, r) {
    const n = await this.deriveAesGcmCryptoKey(r), s = globalThis.crypto.getRandomValues(new Uint8Array(Ln)), i = new Uint8Array(await globalThis.crypto.subtle.encrypt({
      name: "AES-GCM",
      iv: s
    }, n, rc(t)));
    return new Uint8Array([...s, ...i]);
  }
  async decryptMessage(t, r) {
    if (t.length < Ln + 16) throw new Error("Invalid ciphertext, too short to possibly be valid");
    const n = t.slice(0, Ln), s = t.slice(Ln), i = await this.deriveAesGcmCryptoKey(r);
    try {
      const o = await globalThis.crypto.subtle.decrypt({
        name: "AES-GCM",
        iv: n
      }, i, s);
      return new Uint8Array(o);
    } catch {
      throw new Error("Decryption failed");
    }
  }
}, Jp = class Fd {
  #e;
  #t;
  #r;
  static deserialize(t) {
    if (t.length !== xr + Yn + xr) throw new Error("Invalid EncryptedVetKey serialization");
    return new Fd(fe.G1.ProjectivePoint.fromHex(t.subarray(0, xr)), fe.G2.ProjectivePoint.fromHex(t.subarray(xr, xr + Yn)), fe.G1.ProjectivePoint.fromHex(t.subarray(xr + Yn)));
  }
  decryptAndVerify(t, r, n) {
    const s = fe.G1.ProjectivePoint.BASE, i = fe.G2.ProjectivePoint.BASE.negate(), o = fe.fields.Fp12.ONE, a = fe.pairingBatch([{
      g1: this.#e,
      g2: i
    }, {
      g1: s,
      g2: this.#t
    }]);
    if (!fe.fields.Fp12.eql(a, o)) throw new Error("Invalid VetKey");
    const c = this.#r.subtract(this.#e.multiply(fe.G1.normPrivateKeyToScalar(t.serialize())));
    if (Rp(r, n, c)) return new Np(c);
    throw new Error("Invalid VetKey");
  }
  constructor(t, r, n) {
    this.#e = t, this.#t = r, this.#r = n;
  }
}, Qp = new Uint8Array([
  73,
  67,
  32,
  73,
  66,
  69,
  0,
  1
]), Fp = 8, Dp = 32, eb = Fp + Dp + Yn;
export {
  v1 as Actor,
  Gp as AuthClient,
  Wp as DerivedPublicKey,
  Jp as EncryptedVetKey,
  ma as HttpAgent,
  Ul as IDL,
  X as Principal,
  Xp as TransportSecretKey
};
