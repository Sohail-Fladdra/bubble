function e(e, t, n, i) {
  Object.defineProperty(e, t, {
    get: n,
    set: i,
    enumerable: !0,
    configurable: !0,
  });
}
var t =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {},
  n = {},
  i = {},
  r = t.parcelRequirefe40;
null == r &&
  (((r = function (e) {
    if (e in n) return n[e].exports;
    if (e in i) {
      var t = i[e];
      delete i[e];
      var r = { id: e, exports: {} };
      return (n[e] = r), t.call(r.exports, r, r.exports), r.exports;
    }
    var a = new Error("Cannot find module '" + e + "'");
    throw ((a.code = "MODULE_NOT_FOUND"), a);
  }).register = function (e, t) {
    i[e] = t;
  }),
  (t.parcelRequirefe40 = r)),
  r.register("27Lyk", function (t, n) {
    var i, r;
    e(
      t.exports,
      "register",
      () => i,
      (e) => (i = e)
    ),
      e(
        t.exports,
        "resolve",
        () => r,
        (e) => (r = e)
      );
    var a = {};
    (i = function (e) {
      for (var t = Object.keys(e), n = 0; n < t.length; n++) a[t[n]] = e[t[n]];
    }),
      (r = function (e) {
        var t = a[e];
        if (null == t) throw new Error("Could not resolve bundle with id " + e);
        return t;
      });
  }),
  r("27Lyk").register(
    JSON.parse(
      '{"5SCbD":"index.1a740c27.js","kiCgM":"griffintown.be67403f.hdr"}'
    )
  );
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const a = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
  s = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 };
class o {
  addEventListener(e, t) {
    void 0 === this._listeners && (this._listeners = {});
    const n = this._listeners;
    void 0 === n[e] && (n[e] = []), -1 === n[e].indexOf(t) && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (void 0 === this._listeners) return !1;
    const n = this._listeners;
    return void 0 !== n[e] && -1 !== n[e].indexOf(t);
  }
  removeEventListener(e, t) {
    if (void 0 === this._listeners) return;
    const n = this._listeners[e];
    if (void 0 !== n) {
      const e = n.indexOf(t);
      -1 !== e && n.splice(e, 1);
    }
  }
  dispatchEvent(e) {
    if (void 0 === this._listeners) return;
    const t = this._listeners[e.type];
    if (void 0 !== t) {
      e.target = this;
      const n = t.slice(0);
      for (let t = 0, i = n.length; t < i; t++) n[t].call(this, e);
      e.target = null;
    }
  }
}
const l = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "0a",
  "0b",
  "0c",
  "0d",
  "0e",
  "0f",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "1a",
  "1b",
  "1c",
  "1d",
  "1e",
  "1f",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "2a",
  "2b",
  "2c",
  "2d",
  "2e",
  "2f",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "3a",
  "3b",
  "3c",
  "3d",
  "3e",
  "3f",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "4a",
  "4b",
  "4c",
  "4d",
  "4e",
  "4f",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "5a",
  "5b",
  "5c",
  "5d",
  "5e",
  "5f",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "6a",
  "6b",
  "6c",
  "6d",
  "6e",
  "6f",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "7a",
  "7b",
  "7c",
  "7d",
  "7e",
  "7f",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "8a",
  "8b",
  "8c",
  "8d",
  "8e",
  "8f",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
  "9a",
  "9b",
  "9c",
  "9d",
  "9e",
  "9f",
  "a0",
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "aa",
  "ab",
  "ac",
  "ad",
  "ae",
  "af",
  "b0",
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b7",
  "b8",
  "b9",
  "ba",
  "bb",
  "bc",
  "bd",
  "be",
  "bf",
  "c0",
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "ca",
  "cb",
  "cc",
  "cd",
  "ce",
  "cf",
  "d0",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "d9",
  "da",
  "db",
  "dc",
  "dd",
  "de",
  "df",
  "e0",
  "e1",
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e7",
  "e8",
  "e9",
  "ea",
  "eb",
  "ec",
  "ed",
  "ee",
  "ef",
  "f0",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "fa",
  "fb",
  "fc",
  "fd",
  "fe",
  "ff",
];
const c = Math.PI / 180,
  h = 180 / Math.PI;
function u() {
  const e = (4294967295 * Math.random()) | 0,
    t = (4294967295 * Math.random()) | 0,
    n = (4294967295 * Math.random()) | 0,
    i = (4294967295 * Math.random()) | 0;
  return (
    l[255 & e] +
    l[(e >> 8) & 255] +
    l[(e >> 16) & 255] +
    l[(e >> 24) & 255] +
    "-" +
    l[255 & t] +
    l[(t >> 8) & 255] +
    "-" +
    l[((t >> 16) & 15) | 64] +
    l[(t >> 24) & 255] +
    "-" +
    l[(63 & n) | 128] +
    l[(n >> 8) & 255] +
    "-" +
    l[(n >> 16) & 255] +
    l[(n >> 24) & 255] +
    l[255 & i] +
    l[(i >> 8) & 255] +
    l[(i >> 16) & 255] +
    l[(i >> 24) & 255]
  ).toLowerCase();
}
function d(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function p(e, t) {
  return ((e % t) + t) % t;
}
function f(e, t, n) {
  return (1 - n) * e + n * t;
}
function m(e) {
  return 0 == (e & (e - 1)) && 0 !== e;
}
function g(e) {
  return Math.pow(2, Math.floor(Math.log(e) / Math.LN2));
}
class v {
  constructor(e = 0, t = 0) {
    (v.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e, t) {
    return void 0 !== t
      ? (console.warn(
          "THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(e, t))
      : ((this.x += e.x), (this.y += e.y), this);
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e, t) {
    return void 0 !== t
      ? (console.warn(
          "THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(e, t))
      : ((this.x -= e.x), (this.y -= e.y), this);
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[3] * n + i[6]),
      (this.y = i[1] * t + i[4] * n + i[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t, n) {
    return (
      void 0 !== n &&
        console.warn(
          "THREE.Vector2: offset has been removed from .fromBufferAttribute()."
        ),
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      this
    );
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      r = this.x - e.x,
      a = this.y - e.y;
    return (this.x = r * n - a * i + e.x), (this.y = r * i + a * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class _ {
  constructor() {
    (_.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      arguments.length > 0 &&
        console.error(
          "THREE.Matrix3: the constructor no longer reads arguments. use .set() instead."
        );
  }
  set(e, t, n, i, r, a, s, o, l) {
    const c = this.elements;
    return (
      (c[0] = e),
      (c[1] = i),
      (c[2] = s),
      (c[3] = t),
      (c[4] = r),
      (c[5] = o),
      (c[6] = n),
      (c[7] = a),
      (c[8] = l),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      r = this.elements,
      a = n[0],
      s = n[3],
      o = n[6],
      l = n[1],
      c = n[4],
      h = n[7],
      u = n[2],
      d = n[5],
      p = n[8],
      f = i[0],
      m = i[3],
      g = i[6],
      v = i[1],
      _ = i[4],
      x = i[7],
      y = i[2],
      M = i[5],
      b = i[8];
    return (
      (r[0] = a * f + s * v + o * y),
      (r[3] = a * m + s * _ + o * M),
      (r[6] = a * g + s * x + o * b),
      (r[1] = l * f + c * v + h * y),
      (r[4] = l * m + c * _ + h * M),
      (r[7] = l * g + c * x + h * b),
      (r[2] = u * f + d * v + p * y),
      (r[5] = u * m + d * _ + p * M),
      (r[8] = u * g + d * x + p * b),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      a = e[4],
      s = e[5],
      o = e[6],
      l = e[7],
      c = e[8];
    return (
      t * a * c - t * s * l - n * r * c + n * s * o + i * r * l - i * a * o
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      a = e[4],
      s = e[5],
      o = e[6],
      l = e[7],
      c = e[8],
      h = c * a - s * l,
      u = s * o - c * r,
      d = l * r - a * o,
      p = t * h + n * u + i * d;
    if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const f = 1 / p;
    return (
      (e[0] = h * f),
      (e[1] = (i * l - c * n) * f),
      (e[2] = (s * n - i * a) * f),
      (e[3] = u * f),
      (e[4] = (c * t - i * o) * f),
      (e[5] = (i * r - s * t) * f),
      (e[6] = d * f),
      (e[7] = (n * o - l * t) * f),
      (e[8] = (a * t - n * r) * f),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, i, r, a, s) {
    const o = Math.cos(r),
      l = Math.sin(r);
    return (
      this.set(
        n * o,
        n * l,
        -n * (o * a + l * s) + a + e,
        -i * l,
        i * o,
        -i * (-l * a + o * s) + s + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    const n = this.elements;
    return (
      (n[0] *= e),
      (n[3] *= e),
      (n[6] *= e),
      (n[1] *= t),
      (n[4] *= t),
      (n[7] *= t),
      this
    );
  }
  rotate(e) {
    const t = Math.cos(e),
      n = Math.sin(e),
      i = this.elements,
      r = i[0],
      a = i[3],
      s = i[6],
      o = i[1],
      l = i[4],
      c = i[7];
    return (
      (i[0] = t * r + n * o),
      (i[3] = t * a + n * l),
      (i[6] = t * s + n * c),
      (i[1] = -n * r + t * o),
      (i[4] = -n * a + t * l),
      (i[7] = -n * s + t * c),
      this
    );
  }
  translate(e, t) {
    const n = this.elements;
    return (
      (n[0] += e * n[2]),
      (n[3] += e * n[5]),
      (n[6] += e * n[8]),
      (n[1] += t * n[2]),
      (n[4] += t * n[5]),
      (n[7] += t * n[8]),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let e = 0; e < 9; e++) if (t[e] !== n[e]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
function x(e) {
  for (let t = e.length - 1; t >= 0; --t) if (e[t] > 65535) return !0;
  return !1;
}
Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array;
function y(e) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}
function M(e) {
  return e < 0.04045
    ? 0.0773993808 * e
    : Math.pow(0.9478672986 * e + 0.0521327014, 2.4);
}
function b(e) {
  return e < 0.0031308 ? 12.92 * e : 1.055 * Math.pow(e, 0.41666) - 0.055;
}
const S = { srgb: { "srgb-linear": M }, "srgb-linear": { srgb: b } },
  w = {
    legacyMode: !0,
    get workingColorSpace() {
      return "srgb-linear";
    },
    set workingColorSpace(e) {
      console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
    },
    convert: function (e, t, n) {
      if (this.legacyMode || t === n || !t || !n) return e;
      if (S[t] && void 0 !== S[t][n]) {
        const i = S[t][n];
        return (e.r = i(e.r)), (e.g = i(e.g)), (e.b = i(e.b)), e;
      }
      throw new Error("Unsupported color space conversion.");
    },
    fromWorkingColorSpace: function (e, t) {
      return this.convert(e, this.workingColorSpace, t);
    },
    toWorkingColorSpace: function (e, t) {
      return this.convert(e, t, this.workingColorSpace);
    },
  },
  T = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  E = { r: 0, g: 0, b: 0 },
  A = { h: 0, s: 0, l: 0 },
  C = { h: 0, s: 0, l: 0 };
function L(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + 6 * (t - e) * n
      : n < 0.5
      ? t
      : n < 2 / 3
      ? e + 6 * (t - e) * (2 / 3 - n)
      : e
  );
}
function R(e, t) {
  return (t.r = e.r), (t.g = e.g), (t.b = e.b), t;
}
class P {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      void 0 === t && void 0 === n ? this.set(e) : this.setRGB(e, t, n)
    );
  }
  set(e) {
    return (
      e && e.isColor
        ? this.copy(e)
        : "number" == typeof e
        ? this.setHex(e)
        : "string" == typeof e && this.setStyle(e),
      this
    );
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = "srgb") {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (255 & e) / 255),
      w.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, i = "srgb-linear") {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      w.toWorkingColorSpace(this, i),
      this
    );
  }
  setHSL(e, t, n, i = "srgb-linear") {
    if (((e = p(e, 1)), (t = d(t, 0, 1)), (n = d(n, 0, 1)), 0 === t))
      this.r = this.g = this.b = n;
    else {
      const i = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        r = 2 * n - i;
      (this.r = L(r, i, e + 1 / 3)),
        (this.g = L(r, i, e)),
        (this.b = L(r, i, e - 1 / 3));
    }
    return w.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = "srgb") {
    function n(t) {
      void 0 !== t &&
        parseFloat(t) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored."
        );
    }
    let i;
    if ((i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e))) {
      let e;
      const r = i[1],
        a = i[2];
      switch (r) {
        case "rgb":
        case "rgba":
          if (
            (e =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              (this.r = Math.min(255, parseInt(e[1], 10)) / 255),
              (this.g = Math.min(255, parseInt(e[2], 10)) / 255),
              (this.b = Math.min(255, parseInt(e[3], 10)) / 255),
              w.toWorkingColorSpace(this, t),
              n(e[4]),
              this
            );
          if (
            (e =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              (this.r = Math.min(100, parseInt(e[1], 10)) / 100),
              (this.g = Math.min(100, parseInt(e[2], 10)) / 100),
              (this.b = Math.min(100, parseInt(e[3], 10)) / 100),
              w.toWorkingColorSpace(this, t),
              n(e[4]),
              this
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (e =
              /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          ) {
            const i = parseFloat(e[1]) / 360,
              r = parseInt(e[2], 10) / 100,
              a = parseInt(e[3], 10) / 100;
            return n(e[4]), this.setHSL(i, r, a, t);
          }
      }
    } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const e = i[1],
        n = e.length;
      if (3 === n)
        return (
          (this.r = parseInt(e.charAt(0) + e.charAt(0), 16) / 255),
          (this.g = parseInt(e.charAt(1) + e.charAt(1), 16) / 255),
          (this.b = parseInt(e.charAt(2) + e.charAt(2), 16) / 255),
          w.toWorkingColorSpace(this, t),
          this
        );
      if (6 === n)
        return (
          (this.r = parseInt(e.charAt(0) + e.charAt(1), 16) / 255),
          (this.g = parseInt(e.charAt(2) + e.charAt(3), 16) / 255),
          (this.b = parseInt(e.charAt(4) + e.charAt(5), 16) / 255),
          w.toWorkingColorSpace(this, t),
          this
        );
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = "srgb") {
    const n = T[e.toLowerCase()];
    return (
      void 0 !== n
        ? this.setHex(n, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = M(e.r)), (this.g = M(e.g)), (this.b = M(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = b(e.r)), (this.g = b(e.g)), (this.b = b(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = "srgb") {
    return (
      w.fromWorkingColorSpace(R(this, E), e),
      (d(255 * E.r, 0, 255) << 16) ^
        (d(255 * E.g, 0, 255) << 8) ^
        (d(255 * E.b, 0, 255) << 0)
    );
  }
  getHexString(e = "srgb") {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = "srgb-linear") {
    w.fromWorkingColorSpace(R(this, E), t);
    const n = E.r,
      i = E.g,
      r = E.b,
      a = Math.max(n, i, r),
      s = Math.min(n, i, r);
    let o, l;
    const c = (s + a) / 2;
    if (s === a) (o = 0), (l = 0);
    else {
      const e = a - s;
      switch (((l = c <= 0.5 ? e / (a + s) : e / (2 - a - s)), a)) {
        case n:
          o = (i - r) / e + (i < r ? 6 : 0);
          break;
        case i:
          o = (r - n) / e + 2;
          break;
        case r:
          o = (n - i) / e + 4;
      }
      o /= 6;
    }
    return (e.h = o), (e.s = l), (e.l = c), e;
  }
  getRGB(e, t = "srgb-linear") {
    return (
      w.fromWorkingColorSpace(R(this, E), t),
      (e.r = E.r),
      (e.g = E.g),
      (e.b = E.b),
      e
    );
  }
  getStyle(e = "srgb") {
    return (
      w.fromWorkingColorSpace(R(this, E), e),
      "srgb" !== e
        ? `color(${e} ${E.r} ${E.g} ${E.b})`
        : `rgb(${(255 * E.r) | 0},${(255 * E.g) | 0},${(255 * E.b) | 0})`
    );
  }
  offsetHSL(e, t, n) {
    return (
      this.getHSL(A),
      (A.h += e),
      (A.s += t),
      (A.l += n),
      this.setHSL(A.h, A.s, A.l),
      this
    );
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(A), e.getHSL(C);
    const n = f(A.h, C.h, t),
      i = f(A.s, C.s, t),
      r = f(A.l, C.l, t);
    return this.setHSL(n, i, r), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)),
      (this.g = e.getY(t)),
      (this.b = e.getZ(t)),
      !0 === e.normalized &&
        ((this.r /= 255), (this.g /= 255), (this.b /= 255)),
      this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
let D;
P.NAMES = T;
class I {
  static getDataURL(e) {
    if (/^data:/i.test(e.src)) return e.src;
    if ("undefined" == typeof HTMLCanvasElement) return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      void 0 === D && (D = y("canvas")),
        (D.width = e.width),
        (D.height = e.height);
      const n = D.getContext("2d");
      e instanceof ImageData
        ? n.putImageData(e, 0, 0)
        : n.drawImage(e, 0, 0, e.width, e.height),
        (t = D);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      ("undefined" != typeof HTMLImageElement &&
        e instanceof HTMLImageElement) ||
      ("undefined" != typeof HTMLCanvasElement &&
        e instanceof HTMLCanvasElement) ||
      ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap)
    ) {
      const t = y("canvas");
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height),
        r = i.data;
      for (let e = 0; e < r.length; e++) r[e] = 255 * M(r[e] / 255);
      return n.putImageData(i, 0, 0), t;
    }
    if (e.data) {
      const t = e.data.slice(0);
      for (let e = 0; e < t.length; e++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[e] = Math.floor(255 * M(t[e] / 255)))
          : (t[e] = M(t[e]));
      return { data: t, width: e.width, height: e.height };
    }
    return (
      console.warn(
        "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
      ),
      e
    );
  }
}
class N {
  constructor(e = null) {
    (this.isSource = !0),
      (this.uuid = u()),
      (this.data = e),
      (this.version = 0);
  }
  set needsUpdate(e) {
    !0 === e && this.version++;
  }
  toJSON(e) {
    const t = void 0 === e || "string" == typeof e;
    if (!t && void 0 !== e.images[this.uuid]) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      i = this.data;
    if (null !== i) {
      let e;
      if (Array.isArray(i)) {
        e = [];
        for (let t = 0, n = i.length; t < n; t++)
          i[t].isDataTexture ? e.push(O(i[t].image)) : e.push(O(i[t]));
      } else e = O(i);
      n.url = e;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function O(e) {
  return ("undefined" != typeof HTMLImageElement &&
    e instanceof HTMLImageElement) ||
    ("undefined" != typeof HTMLCanvasElement &&
      e instanceof HTMLCanvasElement) ||
    ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap)
    ? I.getDataURL(e)
    : e.data
    ? {
        data: Array.from(e.data),
        width: e.width,
        height: e.height,
        type: e.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let z = 0;
class U extends o {
  constructor(
    e = U.DEFAULT_IMAGE,
    t = U.DEFAULT_MAPPING,
    n = 1001,
    i = 1001,
    r = 1006,
    a = 1008,
    s = 1023,
    o = 1009,
    l = 1,
    c = 3e3
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: z++ }),
      (this.uuid = u()),
      (this.name = ""),
      (this.source = new N(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.wrapS = n),
      (this.wrapT = i),
      (this.magFilter = r),
      (this.minFilter = a),
      (this.anisotropy = l),
      (this.format = s),
      (this.internalFormat = null),
      (this.type = o),
      (this.offset = new v(0, 0)),
      (this.repeat = new v(1, 1)),
      (this.center = new v(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new _()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.encoding = c),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.needsPMREMUpdate = !1);
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.encoding = e.encoding),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = void 0 === e || "string" == typeof e;
    if (!t && void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (300 !== this.mapping) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case 1e3:
          e.x = e.x - Math.floor(e.x);
          break;
        case 1001:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case 1002:
          1 === Math.abs(Math.floor(e.x) % 2)
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case 1e3:
          e.y = e.y - Math.floor(e.y);
          break;
        case 1001:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case 1002:
          1 === Math.abs(Math.floor(e.y) % 2)
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    !0 === e && (this.version++, (this.source.needsUpdate = !0));
  }
}
(U.DEFAULT_IMAGE = null), (U.DEFAULT_MAPPING = 300);
class F {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (F.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = i);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = i), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = void 0 !== e.w ? e.w : 1),
      this
    );
  }
  add(e, t) {
    return void 0 !== t
      ? (console.warn(
          "THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(e, t))
      : ((this.x += e.x),
        (this.y += e.y),
        (this.z += e.z),
        (this.w += e.w),
        this);
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e, t) {
    return void 0 !== t
      ? (console.warn(
          "THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(e, t))
      : ((this.x -= e.x),
        (this.y -= e.y),
        (this.z -= e.z),
        (this.w -= e.w),
        this);
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = this.w,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * r),
      (this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * r),
      (this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * r),
      (this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * r),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, r;
    const a = 0.01,
      s = 0.1,
      o = e.elements,
      l = o[0],
      c = o[4],
      h = o[8],
      u = o[1],
      d = o[5],
      p = o[9],
      f = o[2],
      m = o[6],
      g = o[10];
    if (Math.abs(c - u) < a && Math.abs(h - f) < a && Math.abs(p - m) < a) {
      if (
        Math.abs(c + u) < s &&
        Math.abs(h + f) < s &&
        Math.abs(p + m) < s &&
        Math.abs(l + d + g - 3) < s
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const e = (l + 1) / 2,
        o = (d + 1) / 2,
        v = (g + 1) / 2,
        _ = (c + u) / 4,
        x = (h + f) / 4,
        y = (p + m) / 4;
      return (
        e > o && e > v
          ? e < a
            ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
            : ((n = Math.sqrt(e)), (i = _ / n), (r = x / n))
          : o > v
          ? o < a
            ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
            : ((i = Math.sqrt(o)), (n = _ / i), (r = y / i))
          : v < a
          ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
          : ((r = Math.sqrt(v)), (n = x / r), (i = y / r)),
        this.set(n, i, r, t),
        this
      );
    }
    let v = Math.sqrt(
      (m - p) * (m - p) + (h - f) * (h - f) + (u - c) * (u - c)
    );
    return (
      Math.abs(v) < 0.001 && (v = 1),
      (this.x = (m - p) / v),
      (this.y = (h - f) / v),
      (this.z = (u - c) / v),
      (this.w = Math.acos((l + d + g - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t, n) {
    return (
      void 0 !== n &&
        console.warn(
          "THREE.Vector4: offset has been removed from .fromBufferAttribute()."
        ),
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class B extends o {
  constructor(e, t, n = {}) {
    super(),
      (this.isWebGLRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new F(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new F(0, 0, e, t));
    const i = { width: e, height: t, depth: 1 };
    (this.texture = new U(
      i,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.flipY = !1),
      (this.texture.generateMipmaps =
        void 0 !== n.generateMipmaps && n.generateMipmaps),
      (this.texture.internalFormat =
        void 0 !== n.internalFormat ? n.internalFormat : null),
      (this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : 1006),
      (this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer),
      (this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer),
      (this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null),
      (this.samples = void 0 !== n.samples ? n.samples : 0);
  }
  setSize(e, t, n = 1) {
    (this.width === e && this.height === t && this.depth === n) ||
      ((this.width = e),
      (this.height = t),
      (this.depth = n),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.image.depth = n),
      this.dispose()),
      this.viewport.set(0, 0, e, t),
      this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.viewport.copy(e.viewport),
      (this.texture = e.texture.clone()),
      (this.texture.isRenderTargetTexture = !0);
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new N(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      null !== e.depthTexture && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class k extends U {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = 1003),
      (this.minFilter = 1003),
      (this.wrapR = 1001),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class V extends U {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = 1003),
      (this.minFilter = 1003),
      (this.wrapR = 1001),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class H {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i);
  }
  static slerp(e, t, n, i) {
    return (
      console.warn(
        "THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."
      ),
      n.slerpQuaternions(e, t, i)
    );
  }
  static slerpFlat(e, t, n, i, r, a, s) {
    let o = n[i + 0],
      l = n[i + 1],
      c = n[i + 2],
      h = n[i + 3];
    const u = r[a + 0],
      d = r[a + 1],
      p = r[a + 2],
      f = r[a + 3];
    if (0 === s)
      return (
        (e[t + 0] = o), (e[t + 1] = l), (e[t + 2] = c), void (e[t + 3] = h)
      );
    if (1 === s)
      return (
        (e[t + 0] = u), (e[t + 1] = d), (e[t + 2] = p), void (e[t + 3] = f)
      );
    if (h !== f || o !== u || l !== d || c !== p) {
      let e = 1 - s;
      const t = o * u + l * d + c * p + h * f,
        n = t >= 0 ? 1 : -1,
        i = 1 - t * t;
      if (i > Number.EPSILON) {
        const r = Math.sqrt(i),
          a = Math.atan2(r, t * n);
        (e = Math.sin(e * a) / r), (s = Math.sin(s * a) / r);
      }
      const r = s * n;
      if (
        ((o = o * e + u * r),
        (l = l * e + d * r),
        (c = c * e + p * r),
        (h = h * e + f * r),
        e === 1 - s)
      ) {
        const e = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
        (o *= e), (l *= e), (c *= e), (h *= e);
      }
    }
    (e[t] = o), (e[t + 1] = l), (e[t + 2] = c), (e[t + 3] = h);
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, a) {
    const s = n[i],
      o = n[i + 1],
      l = n[i + 2],
      c = n[i + 3],
      h = r[a],
      u = r[a + 1],
      d = r[a + 2],
      p = r[a + 3];
    return (
      (e[t] = s * p + c * h + o * d - l * u),
      (e[t + 1] = o * p + c * u + l * h - s * d),
      (e[t + 2] = l * p + c * d + s * u - o * h),
      (e[t + 3] = c * p - s * h - o * u - l * d),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, i) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t) {
    if (!e || !e.isEuler)
      throw new Error(
        "THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."
      );
    const n = e._x,
      i = e._y,
      r = e._z,
      a = e._order,
      s = Math.cos,
      o = Math.sin,
      l = s(n / 2),
      c = s(i / 2),
      h = s(r / 2),
      u = o(n / 2),
      d = o(i / 2),
      p = o(r / 2);
    switch (a) {
      case "XYZ":
        (this._x = u * c * h + l * d * p),
          (this._y = l * d * h - u * c * p),
          (this._z = l * c * p + u * d * h),
          (this._w = l * c * h - u * d * p);
        break;
      case "YXZ":
        (this._x = u * c * h + l * d * p),
          (this._y = l * d * h - u * c * p),
          (this._z = l * c * p - u * d * h),
          (this._w = l * c * h + u * d * p);
        break;
      case "ZXY":
        (this._x = u * c * h - l * d * p),
          (this._y = l * d * h + u * c * p),
          (this._z = l * c * p + u * d * h),
          (this._w = l * c * h - u * d * p);
        break;
      case "ZYX":
        (this._x = u * c * h - l * d * p),
          (this._y = l * d * h + u * c * p),
          (this._z = l * c * p - u * d * h),
          (this._w = l * c * h + u * d * p);
        break;
      case "YZX":
        (this._x = u * c * h + l * d * p),
          (this._y = l * d * h + u * c * p),
          (this._z = l * c * p - u * d * h),
          (this._w = l * c * h - u * d * p);
        break;
      case "XZY":
        (this._x = u * c * h - l * d * p),
          (this._y = l * d * h - u * c * p),
          (this._z = l * c * p + u * d * h),
          (this._w = l * c * h + u * d * p);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a
        );
    }
    return !1 !== t && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      i = Math.sin(n);
    return (
      (this._x = e.x * i),
      (this._y = e.y * i),
      (this._z = e.z * i),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      i = t[4],
      r = t[8],
      a = t[1],
      s = t[5],
      o = t[9],
      l = t[2],
      c = t[6],
      h = t[10],
      u = n + s + h;
    if (u > 0) {
      const e = 0.5 / Math.sqrt(u + 1);
      (this._w = 0.25 / e),
        (this._x = (c - o) * e),
        (this._y = (r - l) * e),
        (this._z = (a - i) * e);
    } else if (n > s && n > h) {
      const e = 2 * Math.sqrt(1 + n - s - h);
      (this._w = (c - o) / e),
        (this._x = 0.25 * e),
        (this._y = (i + a) / e),
        (this._z = (r + l) / e);
    } else if (s > h) {
      const e = 2 * Math.sqrt(1 + s - n - h);
      (this._w = (r - l) / e),
        (this._x = (i + a) / e),
        (this._y = 0.25 * e),
        (this._z = (o + c) / e);
    } else {
      const e = 2 * Math.sqrt(1 + h - n - s);
      (this._w = (a - i) / e),
        (this._x = (r + l) / e),
        (this._y = (o + c) / e),
        (this._z = 0.25 * e);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(d(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (0 === n) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      0 === e
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e, t) {
    return void 0 !== t
      ? (console.warn(
          "THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."
        ),
        this.multiplyQuaternions(e, t))
      : this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      i = e._y,
      r = e._z,
      a = e._w,
      s = t._x,
      o = t._y,
      l = t._z,
      c = t._w;
    return (
      (this._x = n * c + a * s + i * l - r * o),
      (this._y = i * c + a * o + r * s - n * l),
      (this._z = r * c + a * l + n * o - i * s),
      (this._w = a * c - n * s - i * o - r * l),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (0 === t) return this;
    if (1 === t) return this.copy(e);
    const n = this._x,
      i = this._y,
      r = this._z,
      a = this._w;
    let s = a * e._w + n * e._x + i * e._y + r * e._z;
    if (
      (s < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (s = -s))
        : this.copy(e),
      s >= 1)
    )
      return (this._w = a), (this._x = n), (this._y = i), (this._z = r), this;
    const o = 1 - s * s;
    if (o <= Number.EPSILON) {
      const e = 1 - t;
      return (
        (this._w = e * a + t * this._w),
        (this._x = e * n + t * this._x),
        (this._y = e * i + t * this._y),
        (this._z = e * r + t * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    const l = Math.sqrt(o),
      c = Math.atan2(l, s),
      h = Math.sin((1 - t) * c) / l,
      u = Math.sin(t * c) / l;
    return (
      (this._w = a * h + this._w * u),
      (this._x = n * h + this._x * u),
      (this._y = i * h + this._y * u),
      (this._z = r * h + this._z * u),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(),
      t = Math.sqrt(1 - e),
      n = Math.sqrt(e),
      i = 2 * Math.PI * Math.random(),
      r = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(r),
      n * Math.cos(r),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class G {
  constructor(e = 0, t = 0, n = 0) {
    (G.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      void 0 === n && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e, t) {
    return void 0 !== t
      ? (console.warn(
          "THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(e, t))
      : ((this.x += e.x), (this.y += e.y), (this.z += e.z), this);
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e, t) {
    return void 0 !== t
      ? (console.warn(
          "THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(e, t))
      : ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this);
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e, t) {
    return void 0 !== t
      ? (console.warn(
          "THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."
        ),
        this.multiplyVectors(e, t))
      : ((this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this);
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return (
      (e && e.isEuler) ||
        console.error(
          "THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."
        ),
      this.applyQuaternion(j.setFromEuler(e))
    );
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(j.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * n + r[6] * i),
      (this.y = r[1] * t + r[4] * n + r[7] * i),
      (this.z = r[2] * t + r[5] * n + r[8] * i),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements,
      a = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return (
      (this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * a),
      (this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * a),
      (this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.x,
      a = e.y,
      s = e.z,
      o = e.w,
      l = o * t + a * i - s * n,
      c = o * n + s * t - r * i,
      h = o * i + r * n - a * t,
      u = -r * t - a * n - s * i;
    return (
      (this.x = l * o + u * -r + c * -s - h * -a),
      (this.y = c * o + u * -a + h * -r - l * -s),
      (this.z = h * o + u * -s + l * -a - c * -r),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[4] * n + r[8] * i),
      (this.y = r[1] * t + r[5] * n + r[9] * i),
      (this.z = r[2] * t + r[6] * n + r[10] * i),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e, t) {
    return void 0 !== t
      ? (console.warn(
          "THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."
        ),
        this.crossVectors(e, t))
      : this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      i = e.y,
      r = e.z,
      a = t.x,
      s = t.y,
      o = t.z;
    return (
      (this.x = i * o - r * s),
      (this.y = r * a - n * o),
      (this.z = n * s - i * a),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (0 === t) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return W.copy(this).projectOnVector(e), this.sub(W);
  }
  reflect(e) {
    return this.sub(W.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (0 === t) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(d(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return (
      (this.x = i * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = i * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      i = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = i), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, 4 * t);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, 3 * t);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t, n) {
    return (
      void 0 !== n &&
        console.warn(
          "THREE.Vector3: offset has been removed from .fromBufferAttribute()."
        ),
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = 2 * (Math.random() - 0.5),
      t = Math.random() * Math.PI * 2,
      n = Math.sqrt(1 - e ** 2);
    return (
      (this.x = n * Math.cos(t)), (this.y = n * Math.sin(t)), (this.z = e), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const W = new G(),
  j = new H();
class q {
  constructor(
    e = new G(1 / 0, 1 / 0, 1 / 0),
    t = new G(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0,
      n = 1 / 0,
      i = 1 / 0,
      r = -1 / 0,
      a = -1 / 0,
      s = -1 / 0;
    for (let o = 0, l = e.length; o < l; o += 3) {
      const l = e[o],
        c = e[o + 1],
        h = e[o + 2];
      l < t && (t = l),
        c < n && (n = c),
        h < i && (i = h),
        l > r && (r = l),
        c > a && (a = c),
        h > s && (s = h);
    }
    return this.min.set(t, n, i), this.max.set(r, a, s), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0,
      n = 1 / 0,
      i = 1 / 0,
      r = -1 / 0,
      a = -1 / 0,
      s = -1 / 0;
    for (let o = 0, l = e.count; o < l; o++) {
      const l = e.getX(o),
        c = e.getY(o),
        h = e.getZ(o);
      l < t && (t = l),
        c < n && (n = c),
        h < i && (i = h),
        l > r && (r = l),
        c > a && (a = c),
        h > s && (s = h);
    }
    return this.min.set(t, n, i), this.max.set(r, a, s), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Y.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (void 0 !== n)
      if (t && null != n.attributes && void 0 !== n.attributes.position) {
        const t = n.attributes.position;
        for (let n = 0, i = t.count; n < i; n++)
          Y.fromBufferAttribute(t, n).applyMatrix4(e.matrixWorld),
            this.expandByPoint(Y);
      } else
        null === n.boundingBox && n.computeBoundingBox(),
          Z.copy(n.boundingBox),
          Z.applyMatrix4(e.matrixWorld),
          this.union(Z);
    const i = e.children;
    for (let e = 0, n = i.length; e < n; e++) this.expandByObject(i[e], t);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, Y),
      Y.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(ne),
      ie.subVectors(this.max, ne),
      K.subVectors(e.a, ne),
      J.subVectors(e.b, ne),
      Q.subVectors(e.c, ne),
      $.subVectors(J, K),
      ee.subVectors(Q, J),
      te.subVectors(K, Q);
    let t = [
      0,
      -$.z,
      $.y,
      0,
      -ee.z,
      ee.y,
      0,
      -te.z,
      te.y,
      $.z,
      0,
      -$.x,
      ee.z,
      0,
      -ee.x,
      te.z,
      0,
      -te.x,
      -$.y,
      $.x,
      0,
      -ee.y,
      ee.x,
      0,
      -te.y,
      te.x,
      0,
    ];
    return (
      !!se(t, K, J, Q, ie) &&
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      !!se(t, K, J, Q, ie) &&
        (re.crossVectors($, ee), (t = [re.x, re.y, re.z]), se(t, K, J, Q, ie)))
    );
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return Y.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return (
      this.getCenter(e.center), (e.radius = 0.5 * this.getSize(Y).length()), e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return (
      this.isEmpty() ||
        (X[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        X[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        X[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        X[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        X[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        X[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        X[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        X[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(X)),
      this
    );
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const X = [
    new G(),
    new G(),
    new G(),
    new G(),
    new G(),
    new G(),
    new G(),
    new G(),
  ],
  Y = new G(),
  Z = new q(),
  K = new G(),
  J = new G(),
  Q = new G(),
  $ = new G(),
  ee = new G(),
  te = new G(),
  ne = new G(),
  ie = new G(),
  re = new G(),
  ae = new G();
function se(e, t, n, i, r) {
  for (let a = 0, s = e.length - 3; a <= s; a += 3) {
    ae.fromArray(e, a);
    const s =
        r.x * Math.abs(ae.x) + r.y * Math.abs(ae.y) + r.z * Math.abs(ae.z),
      o = t.dot(ae),
      l = n.dot(ae),
      c = i.dot(ae);
    if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > s) return !1;
  }
  return !0;
}
const oe = new q(),
  le = new G(),
  ce = new G(),
  he = new G();
class ue {
  constructor(e = new G(), t = -1) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    void 0 !== t ? n.copy(t) : oe.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let t = 0, r = e.length; t < r; t++)
      i = Math.max(i, n.distanceToSquared(e[t]));
    return (this.radius = Math.sqrt(i)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    he.subVectors(e, this.center);
    const t = he.lengthSq();
    if (t > this.radius * this.radius) {
      const e = Math.sqrt(t),
        n = 0.5 * (e - this.radius);
      this.center.add(he.multiplyScalar(n / e)), (this.radius += n);
    }
    return this;
  }
  union(e) {
    return (
      !0 === this.center.equals(e.center)
        ? ce.set(0, 0, 1).multiplyScalar(e.radius)
        : ce
            .subVectors(e.center, this.center)
            .normalize()
            .multiplyScalar(e.radius),
      this.expandByPoint(le.copy(e.center).add(ce)),
      this.expandByPoint(le.copy(e.center).sub(ce)),
      this
    );
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const de = new G(),
  pe = new G(),
  fe = new G(),
  me = new G(),
  ge = new G(),
  ve = new G(),
  _e = new G();
class xe {
  constructor(e = new G(), t = new G(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.direction).multiplyScalar(e).add(this.origin);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, de)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.direction).multiplyScalar(n).add(this.origin);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = de.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (de.copy(this.direction).multiplyScalar(t).add(this.origin),
        de.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    pe.copy(e).add(t).multiplyScalar(0.5),
      fe.copy(t).sub(e).normalize(),
      me.copy(this.origin).sub(pe);
    const r = 0.5 * e.distanceTo(t),
      a = -this.direction.dot(fe),
      s = me.dot(this.direction),
      o = -me.dot(fe),
      l = me.lengthSq(),
      c = Math.abs(1 - a * a);
    let h, u, d, p;
    if (c > 0)
      if (((h = a * o - s), (u = a * s - o), (p = r * c), h >= 0))
        if (u >= -p)
          if (u <= p) {
            const e = 1 / c;
            (h *= e),
              (u *= e),
              (d = h * (h + a * u + 2 * s) + u * (a * h + u + 2 * o) + l);
          } else
            (u = r),
              (h = Math.max(0, -(a * u + s))),
              (d = -h * h + u * (u + 2 * o) + l);
        else
          (u = -r),
            (h = Math.max(0, -(a * u + s))),
            (d = -h * h + u * (u + 2 * o) + l);
      else
        u <= -p
          ? ((h = Math.max(0, -(-a * r + s))),
            (u = h > 0 ? -r : Math.min(Math.max(-r, -o), r)),
            (d = -h * h + u * (u + 2 * o) + l))
          : u <= p
          ? ((h = 0),
            (u = Math.min(Math.max(-r, -o), r)),
            (d = u * (u + 2 * o) + l))
          : ((h = Math.max(0, -(a * r + s))),
            (u = h > 0 ? r : Math.min(Math.max(-r, -o), r)),
            (d = -h * h + u * (u + 2 * o) + l));
    else
      (u = a > 0 ? -r : r),
        (h = Math.max(0, -(a * u + s))),
        (d = -h * h + u * (u + 2 * o) + l);
    return (
      n && n.copy(this.direction).multiplyScalar(h).add(this.origin),
      i && i.copy(fe).multiplyScalar(u).add(pe),
      d
    );
  }
  intersectSphere(e, t) {
    de.subVectors(e.center, this.origin);
    const n = de.dot(this.direction),
      i = de.dot(de) - n * n,
      r = e.radius * e.radius;
    if (i > r) return null;
    const a = Math.sqrt(r - i),
      s = n - a,
      o = n + a;
    return s < 0 && o < 0 ? null : s < 0 ? this.at(o, t) : this.at(s, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (0 === t) return 0 === e.distanceToPoint(this.origin) ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return null === n ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    if (0 === t) return !0;
    return e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, r, a, s, o;
    const l = 1 / this.direction.x,
      c = 1 / this.direction.y,
      h = 1 / this.direction.z,
      u = this.origin;
    return (
      l >= 0
        ? ((n = (e.min.x - u.x) * l), (i = (e.max.x - u.x) * l))
        : ((n = (e.max.x - u.x) * l), (i = (e.min.x - u.x) * l)),
      c >= 0
        ? ((r = (e.min.y - u.y) * c), (a = (e.max.y - u.y) * c))
        : ((r = (e.max.y - u.y) * c), (a = (e.min.y - u.y) * c)),
      n > a || r > i
        ? null
        : ((r > n || n != n) && (n = r),
          (a < i || i != i) && (i = a),
          h >= 0
            ? ((s = (e.min.z - u.z) * h), (o = (e.max.z - u.z) * h))
            : ((s = (e.max.z - u.z) * h), (o = (e.min.z - u.z) * h)),
          n > o || s > i
            ? null
            : ((s > n || n != n) && (n = s),
              (o < i || i != i) && (i = o),
              i < 0 ? null : this.at(n >= 0 ? n : i, t)))
    );
  }
  intersectsBox(e) {
    return null !== this.intersectBox(e, de);
  }
  intersectTriangle(e, t, n, i, r) {
    ge.subVectors(t, e), ve.subVectors(n, e), _e.crossVectors(ge, ve);
    let a,
      s = this.direction.dot(_e);
    if (s > 0) {
      if (i) return null;
      a = 1;
    } else {
      if (!(s < 0)) return null;
      (a = -1), (s = -s);
    }
    me.subVectors(this.origin, e);
    const o = a * this.direction.dot(ve.crossVectors(me, ve));
    if (o < 0) return null;
    const l = a * this.direction.dot(ge.cross(me));
    if (l < 0) return null;
    if (o + l > s) return null;
    const c = -a * me.dot(_e);
    return c < 0 ? null : this.at(c / s, r);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ye {
  constructor() {
    (ye.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      arguments.length > 0 &&
        console.error(
          "THREE.Matrix4: the constructor no longer reads arguments. use .set() instead."
        );
  }
  set(e, t, n, i, r, a, s, o, l, c, h, u, d, p, f, m) {
    const g = this.elements;
    return (
      (g[0] = e),
      (g[4] = t),
      (g[8] = n),
      (g[12] = i),
      (g[1] = r),
      (g[5] = a),
      (g[9] = s),
      (g[13] = o),
      (g[2] = l),
      (g[6] = c),
      (g[10] = h),
      (g[14] = u),
      (g[3] = d),
      (g[7] = p),
      (g[11] = f),
      (g[15] = m),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new ye().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      i = 1 / Me.setFromMatrixColumn(e, 0).length(),
      r = 1 / Me.setFromMatrixColumn(e, 1).length(),
      a = 1 / Me.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * i),
      (t[1] = n[1] * i),
      (t[2] = n[2] * i),
      (t[3] = 0),
      (t[4] = n[4] * r),
      (t[5] = n[5] * r),
      (t[6] = n[6] * r),
      (t[7] = 0),
      (t[8] = n[8] * a),
      (t[9] = n[9] * a),
      (t[10] = n[10] * a),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    (e && e.isEuler) ||
      console.error(
        "THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."
      );
    const t = this.elements,
      n = e.x,
      i = e.y,
      r = e.z,
      a = Math.cos(n),
      s = Math.sin(n),
      o = Math.cos(i),
      l = Math.sin(i),
      c = Math.cos(r),
      h = Math.sin(r);
    if ("XYZ" === e.order) {
      const e = a * c,
        n = a * h,
        i = s * c,
        r = s * h;
      (t[0] = o * c),
        (t[4] = -o * h),
        (t[8] = l),
        (t[1] = n + i * l),
        (t[5] = e - r * l),
        (t[9] = -s * o),
        (t[2] = r - e * l),
        (t[6] = i + n * l),
        (t[10] = a * o);
    } else if ("YXZ" === e.order) {
      const e = o * c,
        n = o * h,
        i = l * c,
        r = l * h;
      (t[0] = e + r * s),
        (t[4] = i * s - n),
        (t[8] = a * l),
        (t[1] = a * h),
        (t[5] = a * c),
        (t[9] = -s),
        (t[2] = n * s - i),
        (t[6] = r + e * s),
        (t[10] = a * o);
    } else if ("ZXY" === e.order) {
      const e = o * c,
        n = o * h,
        i = l * c,
        r = l * h;
      (t[0] = e - r * s),
        (t[4] = -a * h),
        (t[8] = i + n * s),
        (t[1] = n + i * s),
        (t[5] = a * c),
        (t[9] = r - e * s),
        (t[2] = -a * l),
        (t[6] = s),
        (t[10] = a * o);
    } else if ("ZYX" === e.order) {
      const e = a * c,
        n = a * h,
        i = s * c,
        r = s * h;
      (t[0] = o * c),
        (t[4] = i * l - n),
        (t[8] = e * l + r),
        (t[1] = o * h),
        (t[5] = r * l + e),
        (t[9] = n * l - i),
        (t[2] = -l),
        (t[6] = s * o),
        (t[10] = a * o);
    } else if ("YZX" === e.order) {
      const e = a * o,
        n = a * l,
        i = s * o,
        r = s * l;
      (t[0] = o * c),
        (t[4] = r - e * h),
        (t[8] = i * h + n),
        (t[1] = h),
        (t[5] = a * c),
        (t[9] = -s * c),
        (t[2] = -l * c),
        (t[6] = n * h + i),
        (t[10] = e - r * h);
    } else if ("XZY" === e.order) {
      const e = a * o,
        n = a * l,
        i = s * o,
        r = s * l;
      (t[0] = o * c),
        (t[4] = -h),
        (t[8] = l * c),
        (t[1] = e * h + r),
        (t[5] = a * c),
        (t[9] = n * h - i),
        (t[2] = i * h - n),
        (t[6] = s * c),
        (t[10] = r * h + e);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Se, e, we);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return (
      Ae.subVectors(e, t),
      0 === Ae.lengthSq() && (Ae.z = 1),
      Ae.normalize(),
      Te.crossVectors(n, Ae),
      0 === Te.lengthSq() &&
        (1 === Math.abs(n.z) ? (Ae.x += 1e-4) : (Ae.z += 1e-4),
        Ae.normalize(),
        Te.crossVectors(n, Ae)),
      Te.normalize(),
      Ee.crossVectors(Ae, Te),
      (i[0] = Te.x),
      (i[4] = Ee.x),
      (i[8] = Ae.x),
      (i[1] = Te.y),
      (i[5] = Ee.y),
      (i[9] = Ae.y),
      (i[2] = Te.z),
      (i[6] = Ee.z),
      (i[10] = Ae.z),
      this
    );
  }
  multiply(e, t) {
    return void 0 !== t
      ? (console.warn(
          "THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."
        ),
        this.multiplyMatrices(e, t))
      : this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      r = this.elements,
      a = n[0],
      s = n[4],
      o = n[8],
      l = n[12],
      c = n[1],
      h = n[5],
      u = n[9],
      d = n[13],
      p = n[2],
      f = n[6],
      m = n[10],
      g = n[14],
      v = n[3],
      _ = n[7],
      x = n[11],
      y = n[15],
      M = i[0],
      b = i[4],
      S = i[8],
      w = i[12],
      T = i[1],
      E = i[5],
      A = i[9],
      C = i[13],
      L = i[2],
      R = i[6],
      P = i[10],
      D = i[14],
      I = i[3],
      N = i[7],
      O = i[11],
      z = i[15];
    return (
      (r[0] = a * M + s * T + o * L + l * I),
      (r[4] = a * b + s * E + o * R + l * N),
      (r[8] = a * S + s * A + o * P + l * O),
      (r[12] = a * w + s * C + o * D + l * z),
      (r[1] = c * M + h * T + u * L + d * I),
      (r[5] = c * b + h * E + u * R + d * N),
      (r[9] = c * S + h * A + u * P + d * O),
      (r[13] = c * w + h * C + u * D + d * z),
      (r[2] = p * M + f * T + m * L + g * I),
      (r[6] = p * b + f * E + m * R + g * N),
      (r[10] = p * S + f * A + m * P + g * O),
      (r[14] = p * w + f * C + m * D + g * z),
      (r[3] = v * M + _ * T + x * L + y * I),
      (r[7] = v * b + _ * E + x * R + y * N),
      (r[11] = v * S + _ * A + x * P + y * O),
      (r[15] = v * w + _ * C + x * D + y * z),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      i = e[8],
      r = e[12],
      a = e[1],
      s = e[5],
      o = e[9],
      l = e[13],
      c = e[2],
      h = e[6],
      u = e[10],
      d = e[14];
    return (
      e[3] *
        (+r * o * h -
          i * l * h -
          r * s * u +
          n * l * u +
          i * s * d -
          n * o * d) +
      e[7] *
        (+t * o * d -
          t * l * u +
          r * a * u -
          i * a * d +
          i * l * c -
          r * o * c) +
      e[11] *
        (+t * l * h -
          t * s * d -
          r * a * h +
          n * a * d +
          r * s * c -
          n * l * c) +
      e[15] *
        (-i * s * c - t * o * h + t * s * u + i * a * h - n * a * u + n * o * c)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return (
      e.isVector3
        ? ((i[12] = e.x), (i[13] = e.y), (i[14] = e.z))
        : ((i[12] = e), (i[13] = t), (i[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      a = e[4],
      s = e[5],
      o = e[6],
      l = e[7],
      c = e[8],
      h = e[9],
      u = e[10],
      d = e[11],
      p = e[12],
      f = e[13],
      m = e[14],
      g = e[15],
      v = h * m * l - f * u * l + f * o * d - s * m * d - h * o * g + s * u * g,
      _ = p * u * l - c * m * l - p * o * d + a * m * d + c * o * g - a * u * g,
      x = c * f * l - p * h * l + p * s * d - a * f * d - c * s * g + a * h * g,
      y = p * h * o - c * f * o - p * s * u + a * f * u + c * s * m - a * h * m,
      M = t * v + n * _ + i * x + r * y;
    if (0 === M)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const b = 1 / M;
    return (
      (e[0] = v * b),
      (e[1] =
        (f * u * r -
          h * m * r -
          f * i * d +
          n * m * d +
          h * i * g -
          n * u * g) *
        b),
      (e[2] =
        (s * m * r -
          f * o * r +
          f * i * l -
          n * m * l -
          s * i * g +
          n * o * g) *
        b),
      (e[3] =
        (h * o * r -
          s * u * r -
          h * i * l +
          n * u * l +
          s * i * d -
          n * o * d) *
        b),
      (e[4] = _ * b),
      (e[5] =
        (c * m * r -
          p * u * r +
          p * i * d -
          t * m * d -
          c * i * g +
          t * u * g) *
        b),
      (e[6] =
        (p * o * r -
          a * m * r -
          p * i * l +
          t * m * l +
          a * i * g -
          t * o * g) *
        b),
      (e[7] =
        (a * u * r -
          c * o * r +
          c * i * l -
          t * u * l -
          a * i * d +
          t * o * d) *
        b),
      (e[8] = x * b),
      (e[9] =
        (p * h * r -
          c * f * r -
          p * n * d +
          t * f * d +
          c * n * g -
          t * h * g) *
        b),
      (e[10] =
        (a * f * r -
          p * s * r +
          p * n * l -
          t * f * l -
          a * n * g +
          t * s * g) *
        b),
      (e[11] =
        (c * s * r -
          a * h * r -
          c * n * l +
          t * h * l +
          a * n * d -
          t * s * d) *
        b),
      (e[12] = y * b),
      (e[13] =
        (c * f * i -
          p * h * i +
          p * n * u -
          t * f * u -
          c * n * m +
          t * h * m) *
        b),
      (e[14] =
        (p * s * i -
          a * f * i -
          p * n * o +
          t * f * o +
          a * n * m -
          t * s * m) *
        b),
      (e[15] =
        (a * h * i -
          c * s * i +
          c * n * o -
          t * h * o -
          a * n * u +
          t * s * u) *
        b),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      r = e.z;
    return (
      (t[0] *= n),
      (t[4] *= i),
      (t[8] *= r),
      (t[1] *= n),
      (t[5] *= i),
      (t[9] *= r),
      (t[2] *= n),
      (t[6] *= i),
      (t[10] *= r),
      (t[3] *= n),
      (t[7] *= i),
      (t[11] *= r),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      r = 1 - n,
      a = e.x,
      s = e.y,
      o = e.z,
      l = r * a,
      c = r * s;
    return (
      this.set(
        l * a + n,
        l * s - i * o,
        l * o + i * s,
        0,
        l * s + i * o,
        c * s + n,
        c * o - i * a,
        0,
        l * o - i * s,
        c * o + i * a,
        r * o * o + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, i, r, a) {
    return this.set(1, n, r, 0, e, 1, a, 0, t, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const i = this.elements,
      r = t._x,
      a = t._y,
      s = t._z,
      o = t._w,
      l = r + r,
      c = a + a,
      h = s + s,
      u = r * l,
      d = r * c,
      p = r * h,
      f = a * c,
      m = a * h,
      g = s * h,
      v = o * l,
      _ = o * c,
      x = o * h,
      y = n.x,
      M = n.y,
      b = n.z;
    return (
      (i[0] = (1 - (f + g)) * y),
      (i[1] = (d + x) * y),
      (i[2] = (p - _) * y),
      (i[3] = 0),
      (i[4] = (d - x) * M),
      (i[5] = (1 - (u + g)) * M),
      (i[6] = (m + v) * M),
      (i[7] = 0),
      (i[8] = (p + _) * b),
      (i[9] = (m - v) * b),
      (i[10] = (1 - (u + f)) * b),
      (i[11] = 0),
      (i[12] = e.x),
      (i[13] = e.y),
      (i[14] = e.z),
      (i[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = Me.set(i[0], i[1], i[2]).length();
    const a = Me.set(i[4], i[5], i[6]).length(),
      s = Me.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r),
      (e.x = i[12]),
      (e.y = i[13]),
      (e.z = i[14]),
      be.copy(this);
    const o = 1 / r,
      l = 1 / a,
      c = 1 / s;
    return (
      (be.elements[0] *= o),
      (be.elements[1] *= o),
      (be.elements[2] *= o),
      (be.elements[4] *= l),
      (be.elements[5] *= l),
      (be.elements[6] *= l),
      (be.elements[8] *= c),
      (be.elements[9] *= c),
      (be.elements[10] *= c),
      t.setFromRotationMatrix(be),
      (n.x = r),
      (n.y = a),
      (n.z = s),
      this
    );
  }
  makePerspective(e, t, n, i, r, a) {
    void 0 === a &&
      console.warn(
        "THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."
      );
    const s = this.elements,
      o = (2 * r) / (t - e),
      l = (2 * r) / (n - i),
      c = (t + e) / (t - e),
      h = (n + i) / (n - i),
      u = -(a + r) / (a - r),
      d = (-2 * a * r) / (a - r);
    return (
      (s[0] = o),
      (s[4] = 0),
      (s[8] = c),
      (s[12] = 0),
      (s[1] = 0),
      (s[5] = l),
      (s[9] = h),
      (s[13] = 0),
      (s[2] = 0),
      (s[6] = 0),
      (s[10] = u),
      (s[14] = d),
      (s[3] = 0),
      (s[7] = 0),
      (s[11] = -1),
      (s[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, i, r, a) {
    const s = this.elements,
      o = 1 / (t - e),
      l = 1 / (n - i),
      c = 1 / (a - r),
      h = (t + e) * o,
      u = (n + i) * l,
      d = (a + r) * c;
    return (
      (s[0] = 2 * o),
      (s[4] = 0),
      (s[8] = 0),
      (s[12] = -h),
      (s[1] = 0),
      (s[5] = 2 * l),
      (s[9] = 0),
      (s[13] = -u),
      (s[2] = 0),
      (s[6] = 0),
      (s[10] = -2 * c),
      (s[14] = -d),
      (s[3] = 0),
      (s[7] = 0),
      (s[11] = 0),
      (s[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let e = 0; e < 16; e++) if (t[e] !== n[e]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const Me = new G(),
  be = new ye(),
  Se = new G(0, 0, 0),
  we = new G(1, 1, 1),
  Te = new G(),
  Ee = new G(),
  Ae = new G(),
  Ce = new ye(),
  Le = new H();
class Re {
  constructor(e = 0, t = 0, n = 0, i = Re.DefaultOrder) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements,
      r = i[0],
      a = i[4],
      s = i[8],
      o = i[1],
      l = i[5],
      c = i[9],
      h = i[2],
      u = i[6],
      p = i[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(d(s, -1, 1))),
          Math.abs(s) < 0.9999999
            ? ((this._x = Math.atan2(-c, p)), (this._z = Math.atan2(-a, r)))
            : ((this._x = Math.atan2(u, l)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-d(c, -1, 1))),
          Math.abs(c) < 0.9999999
            ? ((this._y = Math.atan2(s, p)), (this._z = Math.atan2(o, l)))
            : ((this._y = Math.atan2(-h, r)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(d(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(-h, p)), (this._z = Math.atan2(-a, l)))
            : ((this._y = 0), (this._z = Math.atan2(o, r)));
        break;
      case "ZYX":
        (this._y = Math.asin(-d(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._x = Math.atan2(u, p)), (this._z = Math.atan2(o, r)))
            : ((this._x = 0), (this._z = Math.atan2(-a, l)));
        break;
      case "YZX":
        (this._z = Math.asin(d(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-c, l)), (this._y = Math.atan2(-h, r)))
            : ((this._x = 0), (this._y = Math.atan2(s, p)));
        break;
      case "XZY":
        (this._z = Math.asin(-d(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(u, l)), (this._y = Math.atan2(s, r)))
            : ((this._x = Math.atan2(-c, p)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t
        );
    }
    return (this._order = t), !0 === n && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      Ce.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Ce, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Le.setFromEuler(this), this.setFromQuaternion(Le, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      void 0 !== e[3] && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
  toVector3() {
    console.error(
      "THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead"
    );
  }
}
(Re.DefaultOrder = "XYZ"),
  (Re.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"]);
class Pe {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return 0 != (this.mask & e.mask);
  }
  isEnabled(e) {
    return 0 != (this.mask & ((1 << e) | 0));
  }
}
let De = 0;
const Ie = new G(),
  Ne = new H(),
  Oe = new ye(),
  ze = new G(),
  Ue = new G(),
  Fe = new G(),
  Be = new H(),
  ke = new G(1, 0, 0),
  Ve = new G(0, 1, 0),
  He = new G(0, 0, 1),
  Ge = { type: "added" },
  We = { type: "removed" };
class je extends o {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: De++ }),
      (this.uuid = u()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = je.DefaultUp.clone());
    const e = new G(),
      t = new Re(),
      n = new H(),
      i = new G(1, 1, 1);
    t._onChange(function () {
      n.setFromEuler(t, !1);
    }),
      n._onChange(function () {
        t.setFromQuaternion(n, void 0, !1);
      }),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: i },
        modelViewMatrix: { value: new ye() },
        normalMatrix: { value: new _() },
      }),
      (this.matrix = new ye()),
      (this.matrixWorld = new ye()),
      (this.matrixAutoUpdate = je.DefaultMatrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new Pe()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Ne.setFromAxisAngle(e, t), this.quaternion.multiply(Ne), this;
  }
  rotateOnWorldAxis(e, t) {
    return Ne.setFromAxisAngle(e, t), this.quaternion.premultiply(Ne), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(ke, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Ve, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(He, e);
  }
  translateOnAxis(e, t) {
    return (
      Ie.copy(e).applyQuaternion(this.quaternion),
      this.position.add(Ie.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(ke, e);
  }
  translateY(e) {
    return this.translateOnAxis(Ve, e);
  }
  translateZ(e) {
    return this.translateOnAxis(He, e);
  }
  localToWorld(e) {
    return e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return e.applyMatrix4(Oe.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? ze.copy(e) : ze.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1),
      Ue.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? Oe.lookAt(Ue, ze, this.up)
        : Oe.lookAt(ze, Ue, this.up),
      this.quaternion.setFromRotationMatrix(Oe),
      i &&
        (Oe.extractRotation(i.matrixWorld),
        Ne.setFromRotationMatrix(Oe),
        this.quaternion.premultiply(Ne.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e
        ),
        this)
      : (e && e.isObject3D
          ? (null !== e.parent && e.parent.remove(e),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(Ge))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      -1 !== t &&
        ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(We)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return null !== e && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      (t.parent = null), t.dispatchEvent(We);
    }
    return (this.children.length = 0), this;
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      Oe.copy(this.matrixWorld).invert(),
      null !== e.parent &&
        (e.parent.updateWorldMatrix(!0, !1), Oe.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(Oe),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const i = this.children[n].getObjectByProperty(e, t);
      if (void 0 !== i) return i;
    }
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ue, e, Fe), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ue, Be, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (!1 === this.visible) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    null !== t && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (null === this.parent
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (!0 === e && null !== n && n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      null === this.parent
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix
          ),
      !0 === t)
    ) {
      const e = this.children;
      for (let t = 0, n = e.length; t < n; t++) e[t].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = void 0 === e || "string" == typeof e,
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const i = {};
    function r(t, n) {
      return void 0 === t[n.uuid] && (t[n.uuid] = n.toJSON(e)), n.uuid;
    }
    if (
      ((i.uuid = this.uuid),
      (i.type = this.type),
      "" !== this.name && (i.name = this.name),
      !0 === this.castShadow && (i.castShadow = !0),
      !0 === this.receiveShadow && (i.receiveShadow = !0),
      !1 === this.visible && (i.visible = !1),
      !1 === this.frustumCulled && (i.frustumCulled = !1),
      0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
      "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData),
      (i.layers = this.layers.mask),
      (i.matrix = this.matrix.toArray()),
      !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((i.type = "InstancedMesh"),
        (i.count = this.count),
        (i.instanceMatrix = this.instanceMatrix.toJSON()),
        null !== this.instanceColor &&
          (i.instanceColor = this.instanceColor.toJSON())),
      this.isScene)
    )
      this.background &&
        (this.background.isColor
          ? (i.background = this.background.toJSON())
          : this.background.isTexture &&
            (i.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const t = this.geometry.parameters;
      if (void 0 !== t && void 0 !== t.shapes) {
        const n = t.shapes;
        if (Array.isArray(n))
          for (let t = 0, i = n.length; t < i; t++) {
            const i = n[t];
            r(e.shapes, i);
          }
        else r(e.shapes, n);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((i.bindMode = this.bindMode),
        (i.bindMatrix = this.bindMatrix.toArray()),
        void 0 !== this.skeleton &&
          (r(e.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
      void 0 !== this.material)
    )
      if (Array.isArray(this.material)) {
        const t = [];
        for (let n = 0, i = this.material.length; n < i; n++)
          t.push(r(e.materials, this.material[n]));
        i.material = t;
      } else i.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let t = 0; t < this.children.length; t++)
        i.children.push(this.children[t].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let t = 0; t < this.animations.length; t++) {
        const n = this.animations[t];
        i.animations.push(r(e.animations, n));
      }
    }
    if (t) {
      const t = a(e.geometries),
        i = a(e.materials),
        r = a(e.textures),
        s = a(e.images),
        o = a(e.shapes),
        l = a(e.skeletons),
        c = a(e.animations),
        h = a(e.nodes);
      t.length > 0 && (n.geometries = t),
        i.length > 0 && (n.materials = i),
        r.length > 0 && (n.textures = r),
        s.length > 0 && (n.images = s),
        o.length > 0 && (n.shapes = o),
        l.length > 0 && (n.skeletons = l),
        c.length > 0 && (n.animations = c),
        h.length > 0 && (n.nodes = h);
    }
    return (n.object = i), n;
    function a(e) {
      const t = [];
      for (const n in e) {
        const i = e[n];
        delete i.metadata, t.push(i);
      }
      return t;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      !0 === t)
    )
      for (let t = 0; t < e.children.length; t++) {
        const n = e.children[t];
        this.add(n.clone());
      }
    return this;
  }
}
(je.DefaultUp = new G(0, 1, 0)), (je.DefaultMatrixAutoUpdate = !0);
const qe = new G(),
  Xe = new G(),
  Ye = new G(),
  Ze = new G(),
  Ke = new G(),
  Je = new G(),
  Qe = new G(),
  $e = new G(),
  et = new G(),
  tt = new G();
class nt {
  constructor(e = new G(), t = new G(), n = new G()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), qe.subVectors(e, t), i.cross(qe);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, r) {
    qe.subVectors(i, t), Xe.subVectors(n, t), Ye.subVectors(e, t);
    const a = qe.dot(qe),
      s = qe.dot(Xe),
      o = qe.dot(Ye),
      l = Xe.dot(Xe),
      c = Xe.dot(Ye),
      h = a * l - s * s;
    if (0 === h) return r.set(-2, -1, -1);
    const u = 1 / h,
      d = (l * o - s * c) * u,
      p = (a * c - s * o) * u;
    return r.set(1 - d - p, p, d);
  }
  static containsPoint(e, t, n, i) {
    return (
      this.getBarycoord(e, t, n, i, Ze),
      Ze.x >= 0 && Ze.y >= 0 && Ze.x + Ze.y <= 1
    );
  }
  static getUV(e, t, n, i, r, a, s, o) {
    return (
      this.getBarycoord(e, t, n, i, Ze),
      o.set(0, 0),
      o.addScaledVector(r, Ze.x),
      o.addScaledVector(a, Ze.y),
      o.addScaledVector(s, Ze.z),
      o
    );
  }
  static isFrontFacing(e, t, n, i) {
    return qe.subVectors(n, t), Xe.subVectors(e, t), qe.cross(Xe).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, i),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      qe.subVectors(this.c, this.b),
      Xe.subVectors(this.a, this.b),
      0.5 * qe.cross(Xe).length()
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return nt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return nt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, r) {
    return nt.getUV(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return nt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return nt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      i = this.b,
      r = this.c;
    let a, s;
    Ke.subVectors(i, n), Je.subVectors(r, n), $e.subVectors(e, n);
    const o = Ke.dot($e),
      l = Je.dot($e);
    if (o <= 0 && l <= 0) return t.copy(n);
    et.subVectors(e, i);
    const c = Ke.dot(et),
      h = Je.dot(et);
    if (c >= 0 && h <= c) return t.copy(i);
    const u = o * h - c * l;
    if (u <= 0 && o >= 0 && c <= 0)
      return (a = o / (o - c)), t.copy(n).addScaledVector(Ke, a);
    tt.subVectors(e, r);
    const d = Ke.dot(tt),
      p = Je.dot(tt);
    if (p >= 0 && d <= p) return t.copy(r);
    const f = d * l - o * p;
    if (f <= 0 && l >= 0 && p <= 0)
      return (s = l / (l - p)), t.copy(n).addScaledVector(Je, s);
    const m = c * p - d * h;
    if (m <= 0 && h - c >= 0 && d - p >= 0)
      return (
        Qe.subVectors(r, i),
        (s = (h - c) / (h - c + (d - p))),
        t.copy(i).addScaledVector(Qe, s)
      );
    const g = 1 / (m + f + u);
    return (
      (a = f * g),
      (s = u * g),
      t.copy(n).addScaledVector(Ke, a).addScaledVector(Je, s)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let it = 0;
class rt extends o {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: it++ }),
      (this.uuid = u()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = 1),
      (this.side = 0),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.blendSrc = 204),
      (this.blendDst = 205),
      (this.blendEquation = 100),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.depthFunc = 3),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = 519),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = 7680),
      (this.stencilZFail = 7680),
      (this.stencilZPass = 7680),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (void 0 !== e)
      for (const t in e) {
        const n = e[t];
        if (void 0 === n) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        if ("shading" === t) {
          console.warn(
            "THREE." +
              this.type +
              ": .shading has been removed. Use the boolean .flatShading instead."
          ),
            (this.flatShading = 1 === n);
          continue;
        }
        const i = this[t];
        void 0 !== i
          ? i && i.isColor
            ? i.set(n)
            : i && i.isVector3 && n && n.isVector3
            ? i.copy(n)
            : (this[t] = n)
          : console.warn(
              "THREE." +
                this.type +
                ": '" +
                t +
                "' is not a property of this material."
            );
      }
  }
  toJSON(e) {
    const t = void 0 === e || "string" == typeof e;
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    function i(e) {
      const t = [];
      for (const n in e) {
        const i = e[n];
        delete i.metadata, t.push(i);
      }
      return t;
    }
    if (
      ((n.uuid = this.uuid),
      (n.type = this.type),
      "" !== this.name && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      void 0 !== this.roughness && (n.roughness = this.roughness),
      void 0 !== this.metalness && (n.metalness = this.metalness),
      void 0 !== this.sheen && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      void 0 !== this.sheenRoughness &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity &&
        1 !== this.emissiveIntensity &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      void 0 !== this.specularIntensity &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      void 0 !== this.shininess && (n.shininess = this.shininess),
      void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
      void 0 !== this.clearcoatRoughness &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      void 0 !== this.iridescence && (n.iridescence = this.iridescence),
      void 0 !== this.iridescenceIOR &&
        (n.iridescenceIOR = this.iridescenceIOR),
      void 0 !== this.iridescenceThicknessRange &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        void 0 !== this.combine && (n.combine = this.combine)),
      void 0 !== this.envMapIntensity &&
        (n.envMapIntensity = this.envMapIntensity),
      void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity),
      void 0 !== this.refractionRatio &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      void 0 !== this.transmission && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      void 0 !== this.thickness && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      void 0 !== this.attenuationDistance &&
        (n.attenuationDistance = this.attenuationDistance),
      void 0 !== this.attenuationColor &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      void 0 !== this.size && (n.size = this.size),
      null !== this.shadowSide && (n.shadowSide = this.shadowSide),
      void 0 !== this.sizeAttenuation &&
        (n.sizeAttenuation = this.sizeAttenuation),
      1 !== this.blending && (n.blending = this.blending),
      0 !== this.side && (n.side = this.side),
      this.vertexColors && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      !0 === this.transparent && (n.transparent = this.transparent),
      (n.depthFunc = this.depthFunc),
      (n.depthTest = this.depthTest),
      (n.depthWrite = this.depthWrite),
      (n.colorWrite = this.colorWrite),
      (n.stencilWrite = this.stencilWrite),
      (n.stencilWriteMask = this.stencilWriteMask),
      (n.stencilFunc = this.stencilFunc),
      (n.stencilRef = this.stencilRef),
      (n.stencilFuncMask = this.stencilFuncMask),
      (n.stencilFail = this.stencilFail),
      (n.stencilZFail = this.stencilZFail),
      (n.stencilZPass = this.stencilZPass),
      void 0 !== this.rotation &&
        0 !== this.rotation &&
        (n.rotation = this.rotation),
      !0 === this.polygonOffset && (n.polygonOffset = !0),
      0 !== this.polygonOffsetFactor &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      0 !== this.polygonOffsetUnits &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      void 0 !== this.linewidth &&
        1 !== this.linewidth &&
        (n.linewidth = this.linewidth),
      void 0 !== this.dashSize && (n.dashSize = this.dashSize),
      void 0 !== this.gapSize && (n.gapSize = this.gapSize),
      void 0 !== this.scale && (n.scale = this.scale),
      !0 === this.dithering && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      !0 === this.alphaToCoverage && (n.alphaToCoverage = this.alphaToCoverage),
      !0 === this.premultipliedAlpha &&
        (n.premultipliedAlpha = this.premultipliedAlpha),
      !0 === this.wireframe && (n.wireframe = this.wireframe),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      "round" !== this.wireframeLinecap &&
        (n.wireframeLinecap = this.wireframeLinecap),
      "round" !== this.wireframeLinejoin &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      !0 === this.flatShading && (n.flatShading = this.flatShading),
      !1 === this.visible && (n.visible = !1),
      !1 === this.toneMapped && (n.toneMapped = !1),
      !1 === this.fog && (n.fog = !1),
      "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
      t)
    ) {
      const t = i(e.textures),
        r = i(e.images);
      t.length > 0 && (n.textures = t), r.length > 0 && (n.images = r);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (null !== t) {
      const e = t.length;
      n = new Array(e);
      for (let i = 0; i !== e; ++i) n[i] = t[i].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    !0 === e && this.version++;
  }
}
class at extends rt {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new P(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = 0),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const st = new G(),
  ot = new v();
class lt {
  constructor(e, t, n) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = void 0 !== e ? e.length / t : 0),
      (this.normalized = !0 === n),
      (this.usage = 35044),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    !0 === e && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  copyColorsArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, r = e.length; i < r; i++) {
      let r = e[i];
      void 0 === r &&
        (console.warn(
          "THREE.BufferAttribute.copyColorsArray(): color is undefined",
          i
        ),
        (r = new P())),
        (t[n++] = r.r),
        (t[n++] = r.g),
        (t[n++] = r.b);
    }
    return this;
  }
  copyVector2sArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, r = e.length; i < r; i++) {
      let r = e[i];
      void 0 === r &&
        (console.warn(
          "THREE.BufferAttribute.copyVector2sArray(): vector is undefined",
          i
        ),
        (r = new v())),
        (t[n++] = r.x),
        (t[n++] = r.y);
    }
    return this;
  }
  copyVector3sArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, r = e.length; i < r; i++) {
      let r = e[i];
      void 0 === r &&
        (console.warn(
          "THREE.BufferAttribute.copyVector3sArray(): vector is undefined",
          i
        ),
        (r = new G())),
        (t[n++] = r.x),
        (t[n++] = r.y),
        (t[n++] = r.z);
    }
    return this;
  }
  copyVector4sArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, r = e.length; i < r; i++) {
      let r = e[i];
      void 0 === r &&
        (console.warn(
          "THREE.BufferAttribute.copyVector4sArray(): vector is undefined",
          i
        ),
        (r = new F())),
        (t[n++] = r.x),
        (t[n++] = r.y),
        (t[n++] = r.z),
        (t[n++] = r.w);
    }
    return this;
  }
  applyMatrix3(e) {
    if (2 === this.itemSize)
      for (let t = 0, n = this.count; t < n; t++)
        ot.fromBufferAttribute(this, t),
          ot.applyMatrix3(e),
          this.setXY(t, ot.x, ot.y);
    else if (3 === this.itemSize)
      for (let t = 0, n = this.count; t < n; t++)
        st.fromBufferAttribute(this, t),
          st.applyMatrix3(e),
          this.setXYZ(t, st.x, st.y, st.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      st.fromBufferAttribute(this, t),
        st.applyMatrix4(e),
        this.setXYZ(t, st.x, st.y, st.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      st.fromBufferAttribute(this, t),
        st.applyNormalMatrix(e),
        this.setXYZ(t, st.x, st.y, st.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      st.fromBufferAttribute(this, t),
        st.transformDirection(e),
        this.setXYZ(t, st.x, st.y, st.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    return this.array[e * this.itemSize];
  }
  setX(e, t) {
    return (this.array[e * this.itemSize] = t), this;
  }
  getY(e) {
    return this.array[e * this.itemSize + 1];
  }
  setY(e, t) {
    return (this.array[e * this.itemSize + 1] = t), this;
  }
  getZ(e) {
    return this.array[e * this.itemSize + 2];
  }
  setZ(e, t) {
    return (this.array[e * this.itemSize + 2] = t), this;
  }
  getW(e) {
    return this.array[e * this.itemSize + 3];
  }
  setW(e, t) {
    return (this.array[e * this.itemSize + 3] = t), this;
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e *= this.itemSize),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, r) {
    return (
      (e *= this.itemSize),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      (this.array[e + 3] = r),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      "" !== this.name && (e.name = this.name),
      35044 !== this.usage && (e.usage = this.usage),
      (0 === this.updateRange.offset && -1 === this.updateRange.count) ||
        (e.updateRange = this.updateRange),
      e
    );
  }
}
class ct extends lt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class ht extends lt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class ut extends lt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let dt = 0;
const pt = new ye(),
  ft = new je(),
  mt = new G(),
  gt = new q(),
  vt = new q(),
  _t = new G();
class xt extends o {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: dt++ }),
      (this.uuid = u()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (x(e) ? ht : ct)(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return void 0 !== this.attributes[e];
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    void 0 !== t && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (void 0 !== n) {
      const t = new _().getNormalMatrix(e);
      n.applyNormalMatrix(t), (n.needsUpdate = !0);
    }
    const i = this.attributes.tangent;
    return (
      void 0 !== i && (i.transformDirection(e), (i.needsUpdate = !0)),
      null !== this.boundingBox && this.computeBoundingBox(),
      null !== this.boundingSphere && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return pt.makeRotationFromQuaternion(e), this.applyMatrix4(pt), this;
  }
  rotateX(e) {
    return pt.makeRotationX(e), this.applyMatrix4(pt), this;
  }
  rotateY(e) {
    return pt.makeRotationY(e), this.applyMatrix4(pt), this;
  }
  rotateZ(e) {
    return pt.makeRotationZ(e), this.applyMatrix4(pt), this;
  }
  translate(e, t, n) {
    return pt.makeTranslation(e, t, n), this.applyMatrix4(pt), this;
  }
  scale(e, t, n) {
    return pt.makeScale(e, t, n), this.applyMatrix4(pt), this;
  }
  lookAt(e) {
    return ft.lookAt(e), ft.updateMatrix(), this.applyMatrix4(ft.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(mt).negate(),
      this.translate(mt.x, mt.y, mt.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const i = e[n];
      t.push(i.x, i.y, i.z || 0);
    }
    return this.setAttribute("position", new ut(t, 3)), this;
  }
  computeBoundingBox() {
    null === this.boundingBox && (this.boundingBox = new q());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute)
      return (
        console.error(
          'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
          this
        ),
        void this.boundingBox.set(
          new G(-1 / 0, -1 / 0, -1 / 0),
          new G(1 / 0, 1 / 0, 1 / 0)
        )
      );
    if (void 0 !== e) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let e = 0, n = t.length; e < n; e++) {
          const n = t[e];
          gt.setFromBufferAttribute(n),
            this.morphTargetsRelative
              ? (_t.addVectors(this.boundingBox.min, gt.min),
                this.boundingBox.expandByPoint(_t),
                _t.addVectors(this.boundingBox.max, gt.max),
                this.boundingBox.expandByPoint(_t))
              : (this.boundingBox.expandByPoint(gt.min),
                this.boundingBox.expandByPoint(gt.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    null === this.boundingSphere && (this.boundingSphere = new ue());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute)
      return (
        console.error(
          'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
          this
        ),
        void this.boundingSphere.set(new G(), 1 / 0)
      );
    if (e) {
      const n = this.boundingSphere.center;
      if ((gt.setFromBufferAttribute(e), t))
        for (let e = 0, n = t.length; e < n; e++) {
          const n = t[e];
          vt.setFromBufferAttribute(n),
            this.morphTargetsRelative
              ? (_t.addVectors(gt.min, vt.min),
                gt.expandByPoint(_t),
                _t.addVectors(gt.max, vt.max),
                gt.expandByPoint(_t))
              : (gt.expandByPoint(vt.min), gt.expandByPoint(vt.max));
        }
      gt.getCenter(n);
      let i = 0;
      for (let t = 0, r = e.count; t < r; t++)
        _t.fromBufferAttribute(e, t),
          (i = Math.max(i, n.distanceToSquared(_t)));
      if (t)
        for (let r = 0, a = t.length; r < a; r++) {
          const a = t[r],
            s = this.morphTargetsRelative;
          for (let t = 0, r = a.count; t < r; t++)
            _t.fromBufferAttribute(a, t),
              s && (mt.fromBufferAttribute(e, t), _t.add(mt)),
              (i = Math.max(i, n.distanceToSquared(_t)));
        }
      (this.boundingSphere.radius = Math.sqrt(i)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      null === e ||
      void 0 === t.position ||
      void 0 === t.normal ||
      void 0 === t.uv
    )
      return void console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
    const n = e.array,
      i = t.position.array,
      r = t.normal.array,
      a = t.uv.array,
      s = i.length / 3;
    !1 === this.hasAttribute("tangent") &&
      this.setAttribute("tangent", new lt(new Float32Array(4 * s), 4));
    const o = this.getAttribute("tangent").array,
      l = [],
      c = [];
    for (let e = 0; e < s; e++) (l[e] = new G()), (c[e] = new G());
    const h = new G(),
      u = new G(),
      d = new G(),
      p = new v(),
      f = new v(),
      m = new v(),
      g = new G(),
      _ = new G();
    function x(e, t, n) {
      h.fromArray(i, 3 * e),
        u.fromArray(i, 3 * t),
        d.fromArray(i, 3 * n),
        p.fromArray(a, 2 * e),
        f.fromArray(a, 2 * t),
        m.fromArray(a, 2 * n),
        u.sub(h),
        d.sub(h),
        f.sub(p),
        m.sub(p);
      const r = 1 / (f.x * m.y - m.x * f.y);
      isFinite(r) &&
        (g
          .copy(u)
          .multiplyScalar(m.y)
          .addScaledVector(d, -f.y)
          .multiplyScalar(r),
        _.copy(d)
          .multiplyScalar(f.x)
          .addScaledVector(u, -m.x)
          .multiplyScalar(r),
        l[e].add(g),
        l[t].add(g),
        l[n].add(g),
        c[e].add(_),
        c[t].add(_),
        c[n].add(_));
    }
    let y = this.groups;
    0 === y.length && (y = [{ start: 0, count: n.length }]);
    for (let e = 0, t = y.length; e < t; ++e) {
      const t = y[e],
        i = t.start;
      for (let e = i, r = i + t.count; e < r; e += 3)
        x(n[e + 0], n[e + 1], n[e + 2]);
    }
    const M = new G(),
      b = new G(),
      S = new G(),
      w = new G();
    function T(e) {
      S.fromArray(r, 3 * e), w.copy(S);
      const t = l[e];
      M.copy(t),
        M.sub(S.multiplyScalar(S.dot(t))).normalize(),
        b.crossVectors(w, t);
      const n = b.dot(c[e]) < 0 ? -1 : 1;
      (o[4 * e] = M.x),
        (o[4 * e + 1] = M.y),
        (o[4 * e + 2] = M.z),
        (o[4 * e + 3] = n);
    }
    for (let e = 0, t = y.length; e < t; ++e) {
      const t = y[e],
        i = t.start;
      for (let e = i, r = i + t.count; e < r; e += 3)
        T(n[e + 0]), T(n[e + 1]), T(n[e + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (void 0 !== t) {
      let n = this.getAttribute("normal");
      if (void 0 === n)
        (n = new lt(new Float32Array(3 * t.count), 3)),
          this.setAttribute("normal", n);
      else for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);
      const i = new G(),
        r = new G(),
        a = new G(),
        s = new G(),
        o = new G(),
        l = new G(),
        c = new G(),
        h = new G();
      if (e)
        for (let u = 0, d = e.count; u < d; u += 3) {
          const d = e.getX(u + 0),
            p = e.getX(u + 1),
            f = e.getX(u + 2);
          i.fromBufferAttribute(t, d),
            r.fromBufferAttribute(t, p),
            a.fromBufferAttribute(t, f),
            c.subVectors(a, r),
            h.subVectors(i, r),
            c.cross(h),
            s.fromBufferAttribute(n, d),
            o.fromBufferAttribute(n, p),
            l.fromBufferAttribute(n, f),
            s.add(c),
            o.add(c),
            l.add(c),
            n.setXYZ(d, s.x, s.y, s.z),
            n.setXYZ(p, o.x, o.y, o.z),
            n.setXYZ(f, l.x, l.y, l.z);
        }
      else
        for (let e = 0, s = t.count; e < s; e += 3)
          i.fromBufferAttribute(t, e + 0),
            r.fromBufferAttribute(t, e + 1),
            a.fromBufferAttribute(t, e + 2),
            c.subVectors(a, r),
            h.subVectors(i, r),
            c.cross(h),
            n.setXYZ(e + 0, c.x, c.y, c.z),
            n.setXYZ(e + 1, c.x, c.y, c.z),
            n.setXYZ(e + 2, c.x, c.y, c.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  merge(e, t) {
    if (!e || !e.isBufferGeometry)
      return void console.error(
        "THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",
        e
      );
    void 0 === t &&
      ((t = 0),
      console.warn(
        "THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."
      ));
    const n = this.attributes;
    for (const i in n) {
      if (void 0 === e.attributes[i]) continue;
      const r = n[i].array,
        a = e.attributes[i],
        s = a.array,
        o = a.itemSize * t,
        l = Math.min(s.length, r.length - o);
      for (let e = 0, t = o; e < l; e++, t++) r[t] = s[e];
    }
    return this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      _t.fromBufferAttribute(e, t),
        _t.normalize(),
        e.setXYZ(t, _t.x, _t.y, _t.z);
  }
  toNonIndexed() {
    function e(e, t) {
      const n = e.array,
        i = e.itemSize,
        r = e.normalized,
        a = new n.constructor(t.length * i);
      let s = 0,
        o = 0;
      for (let r = 0, l = t.length; r < l; r++) {
        s = e.isInterleavedBufferAttribute
          ? t[r] * e.data.stride + e.offset
          : t[r] * i;
        for (let e = 0; e < i; e++) a[o++] = n[s++];
      }
      return new lt(a, i, r);
    }
    if (null === this.index)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const t = new xt(),
      n = this.index.array,
      i = this.attributes;
    for (const r in i) {
      const a = e(i[r], n);
      t.setAttribute(r, a);
    }
    const r = this.morphAttributes;
    for (const i in r) {
      const a = [],
        s = r[i];
      for (let t = 0, i = s.length; t < i; t++) {
        const i = e(s[t], n);
        a.push(i);
      }
      t.morphAttributes[i] = a;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let e = 0, n = a.length; e < n; e++) {
      const n = a[e];
      t.addGroup(n.start, n.count, n.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      "" !== this.name && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      void 0 !== this.parameters)
    ) {
      const t = this.parameters;
      for (const n in t) void 0 !== t[n] && (e[n] = t[n]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    null !== t &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const t in n) {
      const i = n[t];
      e.data.attributes[t] = i.toJSON(e.data);
    }
    const i = {};
    let r = !1;
    for (const t in this.morphAttributes) {
      const n = this.morphAttributes[t],
        a = [];
      for (let t = 0, i = n.length; t < i; t++) {
        const i = n[t];
        a.push(i.toJSON(e.data));
      }
      a.length > 0 && ((i[t] = a), (r = !0));
    }
    r &&
      ((e.data.morphAttributes = i),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const s = this.boundingSphere;
    return (
      null !== s &&
        (e.data.boundingSphere = {
          center: s.center.toArray(),
          radius: s.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    null !== n && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const e in i) {
      const n = i[e];
      this.setAttribute(e, n.clone(t));
    }
    const r = e.morphAttributes;
    for (const e in r) {
      const n = [],
        i = r[e];
      for (let e = 0, r = i.length; e < r; e++) n.push(i[e].clone(t));
      this.morphAttributes[e] = n;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let e = 0, t = a.length; e < t; e++) {
      const t = a[e];
      this.addGroup(t.start, t.count, t.materialIndex);
    }
    const s = e.boundingBox;
    null !== s && (this.boundingBox = s.clone());
    const o = e.boundingSphere;
    return (
      null !== o && (this.boundingSphere = o.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      void 0 !== e.parameters &&
        (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const yt = new ye(),
  Mt = new xe(),
  bt = new ue(),
  St = new G(),
  wt = new G(),
  Tt = new G(),
  Et = new G(),
  At = new G(),
  Ct = new G(),
  Lt = new G(),
  Rt = new G(),
  Pt = new G(),
  Dt = new v(),
  It = new v(),
  Nt = new v(),
  Ot = new G(),
  zt = new G();
class Ut extends je {
  constructor(e = new xt(), t = new at()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      void 0 !== e.morphTargetInfluences &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      void 0 !== e.morphTargetDictionary &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes,
      t = Object.keys(e);
    if (t.length > 0) {
      const n = e[t[0]];
      if (void 0 !== n) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let e = 0, t = n.length; e < t; e++) {
          const t = n[e].name || String(e);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[t] = e);
        }
      }
    }
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.material,
      r = this.matrixWorld;
    if (void 0 === i) return;
    if (
      (null === n.boundingSphere && n.computeBoundingSphere(),
      bt.copy(n.boundingSphere),
      bt.applyMatrix4(r),
      !1 === e.ray.intersectsSphere(bt))
    )
      return;
    if (
      (yt.copy(r).invert(),
      Mt.copy(e.ray).applyMatrix4(yt),
      null !== n.boundingBox && !1 === Mt.intersectsBox(n.boundingBox))
    )
      return;
    let a;
    const s = n.index,
      o = n.attributes.position,
      l = n.morphAttributes.position,
      c = n.morphTargetsRelative,
      h = n.attributes.uv,
      u = n.attributes.uv2,
      d = n.groups,
      p = n.drawRange;
    if (null !== s)
      if (Array.isArray(i))
        for (let n = 0, r = d.length; n < r; n++) {
          const r = d[n],
            f = i[r.materialIndex];
          for (
            let n = Math.max(r.start, p.start),
              i = Math.min(
                s.count,
                Math.min(r.start + r.count, p.start + p.count)
              );
            n < i;
            n += 3
          ) {
            const i = s.getX(n),
              d = s.getX(n + 1),
              p = s.getX(n + 2);
            (a = Ft(this, f, e, Mt, o, l, c, h, u, i, d, p)),
              a &&
                ((a.faceIndex = Math.floor(n / 3)),
                (a.face.materialIndex = r.materialIndex),
                t.push(a));
          }
        }
      else {
        for (
          let n = Math.max(0, p.start),
            r = Math.min(s.count, p.start + p.count);
          n < r;
          n += 3
        ) {
          const r = s.getX(n),
            d = s.getX(n + 1),
            p = s.getX(n + 2);
          (a = Ft(this, i, e, Mt, o, l, c, h, u, r, d, p)),
            a && ((a.faceIndex = Math.floor(n / 3)), t.push(a));
        }
      }
    else if (void 0 !== o)
      if (Array.isArray(i))
        for (let n = 0, r = d.length; n < r; n++) {
          const r = d[n],
            s = i[r.materialIndex];
          for (
            let n = Math.max(r.start, p.start),
              i = Math.min(
                o.count,
                Math.min(r.start + r.count, p.start + p.count)
              );
            n < i;
            n += 3
          ) {
            (a = Ft(this, s, e, Mt, o, l, c, h, u, n, n + 1, n + 2)),
              a &&
                ((a.faceIndex = Math.floor(n / 3)),
                (a.face.materialIndex = r.materialIndex),
                t.push(a));
          }
        }
      else {
        for (
          let n = Math.max(0, p.start),
            r = Math.min(o.count, p.start + p.count);
          n < r;
          n += 3
        ) {
          (a = Ft(this, i, e, Mt, o, l, c, h, u, n, n + 1, n + 2)),
            a && ((a.faceIndex = Math.floor(n / 3)), t.push(a));
        }
      }
  }
}
function Ft(e, t, n, i, r, a, s, o, l, c, h, u) {
  St.fromBufferAttribute(r, c),
    wt.fromBufferAttribute(r, h),
    Tt.fromBufferAttribute(r, u);
  const d = e.morphTargetInfluences;
  if (a && d) {
    Lt.set(0, 0, 0), Rt.set(0, 0, 0), Pt.set(0, 0, 0);
    for (let e = 0, t = a.length; e < t; e++) {
      const t = d[e],
        n = a[e];
      0 !== t &&
        (Et.fromBufferAttribute(n, c),
        At.fromBufferAttribute(n, h),
        Ct.fromBufferAttribute(n, u),
        s
          ? (Lt.addScaledVector(Et, t),
            Rt.addScaledVector(At, t),
            Pt.addScaledVector(Ct, t))
          : (Lt.addScaledVector(Et.sub(St), t),
            Rt.addScaledVector(At.sub(wt), t),
            Pt.addScaledVector(Ct.sub(Tt), t)));
    }
    St.add(Lt), wt.add(Rt), Tt.add(Pt);
  }
  e.isSkinnedMesh &&
    (e.boneTransform(c, St), e.boneTransform(h, wt), e.boneTransform(u, Tt));
  const p = (function (e, t, n, i, r, a, s, o) {
    let l;
    if (
      ((l =
        1 === t.side
          ? i.intersectTriangle(s, a, r, !0, o)
          : i.intersectTriangle(r, a, s, 2 !== t.side, o)),
      null === l)
    )
      return null;
    zt.copy(o), zt.applyMatrix4(e.matrixWorld);
    const c = n.ray.origin.distanceTo(zt);
    return c < n.near || c > n.far
      ? null
      : { distance: c, point: zt.clone(), object: e };
  })(e, t, n, i, St, wt, Tt, Ot);
  if (p) {
    o &&
      (Dt.fromBufferAttribute(o, c),
      It.fromBufferAttribute(o, h),
      Nt.fromBufferAttribute(o, u),
      (p.uv = nt.getUV(Ot, St, wt, Tt, Dt, It, Nt, new v()))),
      l &&
        (Dt.fromBufferAttribute(l, c),
        It.fromBufferAttribute(l, h),
        Nt.fromBufferAttribute(l, u),
        (p.uv2 = nt.getUV(Ot, St, wt, Tt, Dt, It, Nt, new v())));
    const e = { a: c, b: h, c: u, normal: new G(), materialIndex: 0 };
    nt.getNormal(St, wt, Tt, e.normal), (p.face = e);
  }
  return p;
}
class Bt extends xt {
  constructor(e = 1, t = 1, n = 1, i = 1, r = 1, a = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: r,
        depthSegments: a,
      });
    const s = this;
    (i = Math.floor(i)), (r = Math.floor(r)), (a = Math.floor(a));
    const o = [],
      l = [],
      c = [],
      h = [];
    let u = 0,
      d = 0;
    function p(e, t, n, i, r, a, p, f, m, g, v) {
      const _ = a / m,
        x = p / g,
        y = a / 2,
        M = p / 2,
        b = f / 2,
        S = m + 1,
        w = g + 1;
      let T = 0,
        E = 0;
      const A = new G();
      for (let a = 0; a < w; a++) {
        const s = a * x - M;
        for (let o = 0; o < S; o++) {
          const u = o * _ - y;
          (A[e] = u * i),
            (A[t] = s * r),
            (A[n] = b),
            l.push(A.x, A.y, A.z),
            (A[e] = 0),
            (A[t] = 0),
            (A[n] = f > 0 ? 1 : -1),
            c.push(A.x, A.y, A.z),
            h.push(o / m),
            h.push(1 - a / g),
            (T += 1);
        }
      }
      for (let e = 0; e < g; e++)
        for (let t = 0; t < m; t++) {
          const n = u + t + S * e,
            i = u + t + S * (e + 1),
            r = u + (t + 1) + S * (e + 1),
            a = u + (t + 1) + S * e;
          o.push(n, i, a), o.push(i, r, a), (E += 6);
        }
      s.addGroup(d, E, v), (d += E), (u += T);
    }
    p("z", "y", "x", -1, -1, n, t, e, a, r, 0),
      p("z", "y", "x", 1, -1, n, t, -e, a, r, 1),
      p("x", "z", "y", 1, 1, e, n, t, i, a, 2),
      p("x", "z", "y", 1, -1, e, n, -t, i, a, 3),
      p("x", "y", "z", 1, -1, e, t, n, i, r, 4),
      p("x", "y", "z", -1, -1, e, t, -n, i, r, 5),
      this.setIndex(o),
      this.setAttribute("position", new ut(l, 3)),
      this.setAttribute("normal", new ut(c, 3)),
      this.setAttribute("uv", new ut(h, 2));
  }
  static fromJSON(e) {
    return new Bt(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function kt(e) {
  const t = {};
  for (const n in e) {
    t[n] = {};
    for (const i in e[n]) {
      const r = e[n][i];
      r &&
      (r.isColor ||
        r.isMatrix3 ||
        r.isMatrix4 ||
        r.isVector2 ||
        r.isVector3 ||
        r.isVector4 ||
        r.isTexture ||
        r.isQuaternion)
        ? (t[n][i] = r.clone())
        : Array.isArray(r)
        ? (t[n][i] = r.slice())
        : (t[n][i] = r);
    }
  }
  return t;
}
function Vt(e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = kt(e[n]);
    for (const e in i) t[e] = i[e];
  }
  return t;
}
const Ht = { clone: kt, merge: Vt };
class Gt extends rt {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.vertexShader =
        "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"),
      (this.fragmentShader =
        "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}"),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1,
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      void 0 !== e &&
        (void 0 !== e.attributes &&
          console.error(
            "THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."
          ),
        this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = kt(e.uniforms)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const n in this.uniforms) {
      const i = this.uniforms[n].value;
      i && i.isTexture
        ? (t.uniforms[n] = { type: "t", value: i.toJSON(e).uuid })
        : i && i.isColor
        ? (t.uniforms[n] = { type: "c", value: i.getHex() })
        : i && i.isVector2
        ? (t.uniforms[n] = { type: "v2", value: i.toArray() })
        : i && i.isVector3
        ? (t.uniforms[n] = { type: "v3", value: i.toArray() })
        : i && i.isVector4
        ? (t.uniforms[n] = { type: "v4", value: i.toArray() })
        : i && i.isMatrix3
        ? (t.uniforms[n] = { type: "m3", value: i.toArray() })
        : i && i.isMatrix4
        ? (t.uniforms[n] = { type: "m4", value: i.toArray() })
        : (t.uniforms[n] = { value: i });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader);
    const n = {};
    for (const e in this.extensions) !0 === this.extensions[e] && (n[e] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Wt extends je {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new ye()),
      (this.projectionMatrix = new ye()),
      (this.projectionMatrixInverse = new ye());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      this
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class jt extends Wt {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = i),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = null === e.view ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = 2 * h * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(0.5 * c * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return 2 * h * Math.atan(Math.tan(0.5 * c * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, i, r, a) {
    (this.aspect = e / t),
      null === this.view &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    null !== this.view && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(0.5 * c * this.fov)) / this.zoom,
      n = 2 * t,
      i = this.aspect * n,
      r = -0.5 * i;
    const a = this.view;
    if (null !== this.view && this.view.enabled) {
      const e = a.fullWidth,
        s = a.fullHeight;
      (r += (a.offsetX * i) / e),
        (t -= (a.offsetY * n) / s),
        (i *= a.width / e),
        (n *= a.height / s);
    }
    const s = this.filmOffset;
    0 !== s && (r += (e * s) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      null !== this.view && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
class qt extends je {
  constructor(e, t, n) {
    if ((super(), (this.type = "CubeCamera"), !0 !== n.isWebGLCubeRenderTarget))
      return void console.error(
        "THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter."
      );
    this.renderTarget = n;
    const i = new jt(90, 1, e, t);
    (i.layers = this.layers),
      i.up.set(0, -1, 0),
      i.lookAt(new G(1, 0, 0)),
      this.add(i);
    const r = new jt(90, 1, e, t);
    (r.layers = this.layers),
      r.up.set(0, -1, 0),
      r.lookAt(new G(-1, 0, 0)),
      this.add(r);
    const a = new jt(90, 1, e, t);
    (a.layers = this.layers),
      a.up.set(0, 0, 1),
      a.lookAt(new G(0, 1, 0)),
      this.add(a);
    const s = new jt(90, 1, e, t);
    (s.layers = this.layers),
      s.up.set(0, 0, -1),
      s.lookAt(new G(0, -1, 0)),
      this.add(s);
    const o = new jt(90, 1, e, t);
    (o.layers = this.layers),
      o.up.set(0, -1, 0),
      o.lookAt(new G(0, 0, 1)),
      this.add(o);
    const l = new jt(90, 1, e, t);
    (l.layers = this.layers),
      l.up.set(0, -1, 0),
      l.lookAt(new G(0, 0, -1)),
      this.add(l);
  }
  update(e, t) {
    null === this.parent && this.updateMatrixWorld();
    const n = this.renderTarget,
      [i, r, a, s, o, l] = this.children,
      c = e.getRenderTarget(),
      h = e.toneMapping,
      u = e.xr.enabled;
    (e.toneMapping = 0), (e.xr.enabled = !1);
    const d = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0),
      e.render(t, i),
      e.setRenderTarget(n, 1),
      e.render(t, r),
      e.setRenderTarget(n, 2),
      e.render(t, a),
      e.setRenderTarget(n, 3),
      e.render(t, s),
      e.setRenderTarget(n, 4),
      e.render(t, o),
      (n.texture.generateMipmaps = d),
      e.setRenderTarget(n, 5),
      e.render(t, l),
      e.setRenderTarget(c),
      (e.toneMapping = h),
      (e.xr.enabled = u),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class Xt extends U {
  constructor(e, t, n, i, r, a, s, o, l, c) {
    super(
      (e = void 0 !== e ? e : []),
      (t = void 0 !== t ? t : 301),
      n,
      i,
      r,
      a,
      s,
      o,
      l,
      c
    ),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Yt extends B {
  constructor(e, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      i = [n, n, n, n, n, n];
    (this.texture = new Xt(
      i,
      t.mapping,
      t.wrapS,
      t.wrapT,
      t.magFilter,
      t.minFilter,
      t.format,
      t.type,
      t.anisotropy,
      t.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        void 0 !== t.generateMipmaps && t.generateMipmaps),
      (this.texture.minFilter = void 0 !== t.minFilter ? t.minFilter : 1006);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.encoding = t.encoding),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader:
          "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
        fragmentShader:
          "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t",
      },
      i = new Bt(5, 5, 5),
      r = new Gt({
        name: "CubemapFromEquirect",
        uniforms: kt(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: 1,
        blending: 0,
      });
    r.uniforms.tEquirect.value = t;
    const a = new Ut(i, r),
      s = t.minFilter;
    1008 === t.minFilter && (t.minFilter = 1006);
    return (
      new qt(1, 10, this).update(e, a),
      (t.minFilter = s),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t, n, i) {
    const r = e.getRenderTarget();
    for (let r = 0; r < 6; r++) e.setRenderTarget(this, r), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
const Zt = new G(),
  Kt = new G(),
  Jt = new _();
class Qt {
  constructor(e = new G(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), (this.constant = i), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = Zt.subVectors(n, t).cross(Kt.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
  }
  intersectLine(e, t) {
    const n = e.delta(Zt),
      i = this.normal.dot(n);
    if (0 === i)
      return 0 === this.distanceToPoint(e.start) ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : t.copy(n).multiplyScalar(r).add(e.start);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Jt.getNormalMatrix(e),
      i = this.coplanarPoint(Zt).applyMatrix4(e),
      r = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -i.dot(r)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const $t = new ue(),
  en = new G();
class tn {
  constructor(
    e = new Qt(),
    t = new Qt(),
    n = new Qt(),
    i = new Qt(),
    r = new Qt(),
    a = new Qt()
  ) {
    this.planes = [e, t, n, i, r, a];
  }
  set(e, t, n, i, r, a) {
    const s = this.planes;
    return (
      s[0].copy(e),
      s[1].copy(t),
      s[2].copy(n),
      s[3].copy(i),
      s[4].copy(r),
      s[5].copy(a),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes,
      n = e.elements,
      i = n[0],
      r = n[1],
      a = n[2],
      s = n[3],
      o = n[4],
      l = n[5],
      c = n[6],
      h = n[7],
      u = n[8],
      d = n[9],
      p = n[10],
      f = n[11],
      m = n[12],
      g = n[13],
      v = n[14],
      _ = n[15];
    return (
      t[0].setComponents(s - i, h - o, f - u, _ - m).normalize(),
      t[1].setComponents(s + i, h + o, f + u, _ + m).normalize(),
      t[2].setComponents(s + r, h + l, f + d, _ + g).normalize(),
      t[3].setComponents(s - r, h - l, f - d, _ - g).normalize(),
      t[4].setComponents(s - a, h - c, f - p, _ - v).normalize(),
      t[5].setComponents(s + a, h + c, f + p, _ + v).normalize(),
      this
    );
  }
  intersectsObject(e) {
    const t = e.geometry;
    return (
      null === t.boundingSphere && t.computeBoundingSphere(),
      $t.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
      this.intersectsSphere($t)
    );
  }
  intersectsSprite(e) {
    return (
      $t.center.set(0, 0, 0),
      ($t.radius = 0.7071067811865476),
      $t.applyMatrix4(e.matrixWorld),
      this.intersectsSphere($t)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      i = -e.radius;
    for (let e = 0; e < 6; e++) {
      if (t[e].distanceToPoint(n) < i) return !1;
    }
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (
        ((en.x = i.normal.x > 0 ? e.max.x : e.min.x),
        (en.y = i.normal.y > 0 ? e.max.y : e.min.y),
        (en.z = i.normal.z > 0 ? e.max.z : e.min.z),
        i.distanceToPoint(en) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function nn() {
  let e = null,
    t = !1,
    n = null,
    i = null;
  function r(t, a) {
    n(t, a), (i = e.requestAnimationFrame(r));
  }
  return {
    start: function () {
      !0 !== t && null !== n && ((i = e.requestAnimationFrame(r)), (t = !0));
    },
    stop: function () {
      e.cancelAnimationFrame(i), (t = !1);
    },
    setAnimationLoop: function (e) {
      n = e;
    },
    setContext: function (t) {
      e = t;
    },
  };
}
function rn(e, t) {
  const n = t.isWebGL2,
    i = new WeakMap();
  return {
    get: function (e) {
      return e.isInterleavedBufferAttribute && (e = e.data), i.get(e);
    },
    remove: function (t) {
      t.isInterleavedBufferAttribute && (t = t.data);
      const n = i.get(t);
      n && (e.deleteBuffer(n.buffer), i.delete(t));
    },
    update: function (t, r) {
      if (t.isGLBufferAttribute) {
        const e = i.get(t);
        return void (
          (!e || e.version < t.version) &&
          i.set(t, {
            buffer: t.buffer,
            type: t.type,
            bytesPerElement: t.elementSize,
            version: t.version,
          })
        );
      }
      t.isInterleavedBufferAttribute && (t = t.data);
      const a = i.get(t);
      void 0 === a
        ? i.set(
            t,
            (function (t, i) {
              const r = t.array,
                a = t.usage,
                s = e.createBuffer();
              let o;
              if (
                (e.bindBuffer(i, s),
                e.bufferData(i, r, a),
                t.onUploadCallback(),
                r instanceof Float32Array)
              )
                o = 5126;
              else if (r instanceof Uint16Array)
                if (t.isFloat16BufferAttribute) {
                  if (!n)
                    throw new Error(
                      "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
                    );
                  o = 5131;
                } else o = 5123;
              else if (r instanceof Int16Array) o = 5122;
              else if (r instanceof Uint32Array) o = 5125;
              else if (r instanceof Int32Array) o = 5124;
              else if (r instanceof Int8Array) o = 5120;
              else if (r instanceof Uint8Array) o = 5121;
              else {
                if (!(r instanceof Uint8ClampedArray))
                  throw new Error(
                    "THREE.WebGLAttributes: Unsupported buffer data format: " +
                      r
                  );
                o = 5121;
              }
              return {
                buffer: s,
                type: o,
                bytesPerElement: r.BYTES_PER_ELEMENT,
                version: t.version,
              };
            })(t, r)
          )
        : a.version < t.version &&
          (!(function (t, i, r) {
            const a = i.array,
              s = i.updateRange;
            e.bindBuffer(r, t),
              -1 === s.count
                ? e.bufferSubData(r, 0, a)
                : (n
                    ? e.bufferSubData(
                        r,
                        s.offset * a.BYTES_PER_ELEMENT,
                        a,
                        s.offset,
                        s.count
                      )
                    : e.bufferSubData(
                        r,
                        s.offset * a.BYTES_PER_ELEMENT,
                        a.subarray(s.offset, s.offset + s.count)
                      ),
                  (s.count = -1));
          })(a.buffer, t, r),
          (a.version = t.version));
    },
  };
}
class an extends xt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: i,
      });
    const r = e / 2,
      a = t / 2,
      s = Math.floor(n),
      o = Math.floor(i),
      l = s + 1,
      c = o + 1,
      h = e / s,
      u = t / o,
      d = [],
      p = [],
      f = [],
      m = [];
    for (let e = 0; e < c; e++) {
      const t = e * u - a;
      for (let n = 0; n < l; n++) {
        const i = n * h - r;
        p.push(i, -t, 0), f.push(0, 0, 1), m.push(n / s), m.push(1 - e / o);
      }
    }
    for (let e = 0; e < o; e++)
      for (let t = 0; t < s; t++) {
        const n = t + l * e,
          i = t + l * (e + 1),
          r = t + 1 + l * (e + 1),
          a = t + 1 + l * e;
        d.push(n, i, a), d.push(i, r, a);
      }
    this.setIndex(d),
      this.setAttribute("position", new ut(p, 3)),
      this.setAttribute("normal", new ut(f, 3)),
      this.setAttribute("uv", new ut(m, 2));
  }
  static fromJSON(e) {
    return new an(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
const sn = {
    alphamap_fragment:
      "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
    alphamap_pars_fragment:
      "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
    alphatest_fragment:
      "#ifdef USE_ALPHATEST\n\tif ( diffuseColor.a < alphaTest ) discard;\n#endif",
    alphatest_pars_fragment:
      "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",
    aomap_fragment:
      "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",
    aomap_pars_fragment:
      "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
    begin_vertex: "vec3 transformed = vec3( position );",
    beginnormal_vertex:
      "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
    bsdfs:
      "vec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( V * D );\n}\n#ifdef USE_IRIDESCENCE\nvec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);\n\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( V * D );\n}\n#endif\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif",
    iridescence_fragment:
      "#ifdef USE_IRIDESCENCE\nconst mat3 XYZ_TO_REC709 = mat3(\n    3.2404542, -0.9692660,  0.0556434,\n   -1.5371385,  1.8760108, -0.2040259,\n   -0.4985314,  0.0415560,  1.0572252\n);\nvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n   vec3 sqrtF0 = sqrt( fresnel0 );\n   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n}\nvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n}\nfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n}\nvec3 evalSensitivity( float OPD, vec3 shift ) {\n   float phase = 2.0 * PI * OPD * 1.0e-9;\n   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );\n   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );\n   xyz /= 1.0685e-7;\n   vec3 srgb = XYZ_TO_REC709 * xyz;\n   return srgb;\n}\nvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n   vec3 I;\n   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n   float cosTheta2Sq = 1.0 - sinTheta2Sq;\n   if ( cosTheta2Sq < 0.0 ) {\n       return vec3( 1.0 );\n   }\n   float cosTheta2 = sqrt( cosTheta2Sq );\n   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n   float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n   float R21 = R12;\n   float T121 = 1.0 - R12;\n   float phi12 = 0.0;\n   if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n   float phi21 = PI - phi12;\n   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n   vec3 phi23 = vec3( 0.0 );\n   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;\n   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;\n   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;\n   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n   vec3 phi = vec3( phi21 ) + phi23;\n   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n   vec3 r123 = sqrt( R123 );\n   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n   vec3 C0 = R12 + Rs;\n   I = C0;\n   vec3 Cm = Rs - T121;\n   for ( int m = 1; m <= 2; ++m ) {\n       Cm *= r123;\n       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n       I += Cm * Sm;\n   }\n   return max( I, vec3( 0.0 ) );\n}\n#endif",
    bumpmap_pars_fragment:
      "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
    clipping_planes_fragment:
      "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
    clipping_planes_pars_fragment:
      "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
    clipping_planes_pars_vertex:
      "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
    clipping_planes_vertex:
      "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
    color_fragment:
      "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
    color_pars_fragment:
      "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
    color_pars_vertex:
      "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
    color_vertex:
      "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
    common:
      "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
    cube_uv_reflection_fragment:
      "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
    defaultnormal_vertex:
      "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
    displacementmap_pars_vertex:
      "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
    displacementmap_vertex:
      "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
    emissivemap_fragment:
      "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
    emissivemap_pars_fragment:
      "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
    encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
    encodings_pars_fragment:
      "vec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
    envmap_fragment:
      "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
    envmap_common_pars_fragment:
      "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
    envmap_pars_fragment:
      "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
    envmap_pars_vertex:
      "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
    envmap_physical_pars_fragment:
      "#if defined( USE_ENVMAP )\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n#endif",
    envmap_vertex:
      "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
    fog_vertex: "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",
    fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",
    fog_fragment:
      "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
    fog_pars_fragment:
      "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
    gradientmap_pars_fragment:
      "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
    lightmap_fragment:
      "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",
    lightmap_pars_fragment:
      "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
    lights_lambert_vertex:
      "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointLightInfo( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotLightInfo( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalLightInfo( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( - dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
    lights_pars_begin:
      "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tif ( cutoffDistance > 0.0 ) {\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t}\n\t\treturn distanceFalloff;\n\t#else\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t\t}\n\t\treturn 1.0;\n\t#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",
    lights_toon_fragment:
      "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
    lights_toon_pars_fragment:
      "varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
    lights_phong_fragment:
      "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
    lights_phong_pars_fragment:
      "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
    lights_physical_fragment:
      "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\t#ifdef SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULARINTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;\n\t\t#endif\n\t\t#ifdef USE_SPECULARCOLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vUv ).rgb;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\t#ifdef USE_IRIDESCENCEMAP\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vUv ).r;\n\t#endif\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;\n\t#else\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\t#endif\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;\n\t#endif\n#endif",
    lights_physical_pars_fragment:
      "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\t#ifdef USE_IRIDESCENCE\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\t#else\n\t\tvec3 Fr = specularColor;\n\t#endif\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\treflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );\n\t#else\n\t\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t#ifdef USE_IRIDESCENCE\n\t\tcomputeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\t#else\n\t\tcomputeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\t#endif\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
    lights_fragment_begin:
      "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\nfloat dotNVi = saturate( dot( normal, geometry.viewDir ) );\nif ( material.iridescenceThickness == 0.0 ) {\n\tmaterial.iridescence = 0.0;\n} else {\n\tmaterial.iridescence = saturate( material.iridescence );\n}\nif ( material.iridescence > 0.0 ) {\n\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
    lights_fragment_maps:
      "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometry.normal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",
    lights_fragment_end:
      "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
    logdepthbuf_fragment:
      "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
    logdepthbuf_pars_fragment:
      "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
    logdepthbuf_pars_vertex:
      "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
    logdepthbuf_vertex:
      "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
    map_fragment:
      "#ifdef USE_MAP\n\tvec4 sampledDiffuseColor = texture2D( map, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tsampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );\n\t#endif\n\tdiffuseColor *= sampledDiffuseColor;\n#endif",
    map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
    map_particle_fragment:
      "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
    map_particle_pars_fragment:
      "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
    metalnessmap_fragment:
      "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
    metalnessmap_pars_fragment:
      "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
    morphcolor_vertex:
      "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif",
    morphnormal_vertex:
      "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\t#endif\n#endif",
    morphtarget_pars_vertex:
      "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform ivec2 morphTargetsTextureSize;\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t\t}\n\t#else\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\t\t#else\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\t\t#endif\n\t#endif\n#endif",
    morphtarget_vertex:
      "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t\t#endif\n\t#endif\n#endif",
    normal_fragment_begin:
      "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * faceDirection;\n\t\t\tbitangent = bitangent * faceDirection;\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
    normal_fragment_maps:
      "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
    normal_pars_fragment:
      "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
    normal_pars_vertex:
      "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
    normal_vertex:
      "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",
    normalmap_pars_fragment:
      "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );\n\t\treturn normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );\n\t}\n#endif",
    clearcoat_normal_fragment_begin:
      "#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
    clearcoat_normal_fragment_maps:
      "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );\n\t#endif\n#endif",
    clearcoat_pars_fragment:
      "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
    iridescence_pars_fragment:
      "#ifdef USE_IRIDESCENCEMAP\n\tuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform sampler2D iridescenceThicknessMap;\n#endif",
    output_fragment:
      "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= transmissionAlpha + 0.1;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
    packing:
      "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
    premultiplied_alpha_fragment:
      "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
    project_vertex:
      "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
    dithering_fragment:
      "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
    dithering_pars_fragment:
      "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
    roughnessmap_fragment:
      "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
    roughnessmap_pars_fragment:
      "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
    shadowmap_pars_fragment:
      "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
    shadowmap_pars_vertex:
      "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
    shadowmap_vertex:
      "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
    shadowmask_pars_fragment:
      "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
    skinbase_vertex:
      "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
    skinning_pars_vertex:
      "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tuniform int boneTextureSize;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tfloat j = i * 4.0;\n\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\ty = dy * ( y + 0.5 );\n\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\treturn bone;\n\t}\n#endif",
    skinning_vertex:
      "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
    skinnormal_vertex:
      "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
    specularmap_fragment:
      "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
    specularmap_pars_fragment:
      "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
    tonemapping_fragment:
      "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
    tonemapping_pars_fragment:
      "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
    transmission_fragment:
      "#ifdef USE_TRANSMISSION\n\tfloat transmissionAlpha = 1.0;\n\tfloat transmissionFactor = transmission;\n\tfloat thicknessFactor = thickness;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\ttransmissionFactor *= texture2D( transmissionMap, vUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tthicknessFactor *= texture2D( thicknessMap, vUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmission = getIBLVolumeRefraction(\n\t\tn, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,\n\t\tattenuationColor, attenuationDistance );\n\ttotalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );\n\ttransmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );\n#endif",
    transmission_pars_fragment:
      "#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\t#ifdef texture2DLodEXT\n\t\t\treturn texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#else\n\t\t\treturn texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );\n\t\t#endif\n\t}\n\tvec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( attenuationDistance == 0.0 ) {\n\t\t\treturn radiance;\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance * radiance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\tvec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );\n\t}\n#endif",
    uv_pars_fragment:
      "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
    uv_pars_vertex:
      "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
    uv_vertex:
      "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
    uv2_pars_fragment:
      "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
    uv2_pars_vertex:
      "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
    uv2_vertex:
      "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
    worldpos_vertex:
      "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
    background_vert:
      "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
    background_frag:
      "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tgl_FragColor = texture2D( t2D, vUv );\n\t#ifdef DECODE_VIDEO_TEXTURE\n\t\tgl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );\n\t#endif\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    cube_vert:
      "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
    cube_frag:
      "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    depth_vert:
      "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
    depth_frag:
      "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
    distanceRGBA_vert:
      "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
    distanceRGBA_frag:
      "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
    equirect_vert:
      "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
    equirect_frag:
      "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
    linedashed_vert:
      "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
    linedashed_frag:
      "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
    meshbasic_vert:
      "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
    meshbasic_frag:
      "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshlambert_vert:
      "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshlambert_frag:
      "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshmatcap_vert:
      "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
    meshmatcap_frag:
      "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshnormal_vert:
      "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
    meshnormal_frag:
      "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}",
    meshphong_vert:
      "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshphong_frag:
      "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshphysical_vert:
      "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",
    meshphysical_frag:
      "#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULARINTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n\t#ifdef USE_SPECULARCOLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEENCOLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEENROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n\t#endif\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    meshtoon_vert:
      "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    meshtoon_frag:
      "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
    points_vert:
      "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
    points_frag:
      "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
    shadow_vert:
      "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
    shadow_frag:
      "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
    sprite_vert:
      "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
    sprite_frag:
      "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <output_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
  },
  on = {
    common: {
      diffuse: { value: new P(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      uvTransform: { value: new _() },
      uv2Transform: { value: new _() },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
    },
    specularmap: { specularMap: { value: null } },
    envmap: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
    lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
    emissivemap: { emissiveMap: { value: null } },
    bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
    normalmap: {
      normalMap: { value: null },
      normalScale: { value: new v(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    roughnessmap: { roughnessMap: { value: null } },
    metalnessmap: { metalnessMap: { value: null } },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new P(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotShadowMap: { value: [] },
      spotShadowMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new P(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new _() },
    },
    sprite: {
      diffuse: { value: new P(16777215) },
      opacity: { value: 1 },
      center: { value: new v(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new _() },
    },
  },
  ln = {
    basic: {
      uniforms: Vt([
        on.common,
        on.specularmap,
        on.envmap,
        on.aomap,
        on.lightmap,
        on.fog,
      ]),
      vertexShader: sn.meshbasic_vert,
      fragmentShader: sn.meshbasic_frag,
    },
    lambert: {
      uniforms: Vt([
        on.common,
        on.specularmap,
        on.envmap,
        on.aomap,
        on.lightmap,
        on.emissivemap,
        on.fog,
        on.lights,
        { emissive: { value: new P(0) } },
      ]),
      vertexShader: sn.meshlambert_vert,
      fragmentShader: sn.meshlambert_frag,
    },
    phong: {
      uniforms: Vt([
        on.common,
        on.specularmap,
        on.envmap,
        on.aomap,
        on.lightmap,
        on.emissivemap,
        on.bumpmap,
        on.normalmap,
        on.displacementmap,
        on.fog,
        on.lights,
        {
          emissive: { value: new P(0) },
          specular: { value: new P(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: sn.meshphong_vert,
      fragmentShader: sn.meshphong_frag,
    },
    standard: {
      uniforms: Vt([
        on.common,
        on.envmap,
        on.aomap,
        on.lightmap,
        on.emissivemap,
        on.bumpmap,
        on.normalmap,
        on.displacementmap,
        on.roughnessmap,
        on.metalnessmap,
        on.fog,
        on.lights,
        {
          emissive: { value: new P(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: sn.meshphysical_vert,
      fragmentShader: sn.meshphysical_frag,
    },
    toon: {
      uniforms: Vt([
        on.common,
        on.aomap,
        on.lightmap,
        on.emissivemap,
        on.bumpmap,
        on.normalmap,
        on.displacementmap,
        on.gradientmap,
        on.fog,
        on.lights,
        { emissive: { value: new P(0) } },
      ]),
      vertexShader: sn.meshtoon_vert,
      fragmentShader: sn.meshtoon_frag,
    },
    matcap: {
      uniforms: Vt([
        on.common,
        on.bumpmap,
        on.normalmap,
        on.displacementmap,
        on.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: sn.meshmatcap_vert,
      fragmentShader: sn.meshmatcap_frag,
    },
    points: {
      uniforms: Vt([on.points, on.fog]),
      vertexShader: sn.points_vert,
      fragmentShader: sn.points_frag,
    },
    dashed: {
      uniforms: Vt([
        on.common,
        on.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: sn.linedashed_vert,
      fragmentShader: sn.linedashed_frag,
    },
    depth: {
      uniforms: Vt([on.common, on.displacementmap]),
      vertexShader: sn.depth_vert,
      fragmentShader: sn.depth_frag,
    },
    normal: {
      uniforms: Vt([
        on.common,
        on.bumpmap,
        on.normalmap,
        on.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: sn.meshnormal_vert,
      fragmentShader: sn.meshnormal_frag,
    },
    sprite: {
      uniforms: Vt([on.sprite, on.fog]),
      vertexShader: sn.sprite_vert,
      fragmentShader: sn.sprite_frag,
    },
    background: {
      uniforms: { uvTransform: { value: new _() }, t2D: { value: null } },
      vertexShader: sn.background_vert,
      fragmentShader: sn.background_frag,
    },
    cube: {
      uniforms: Vt([on.envmap, { opacity: { value: 1 } }]),
      vertexShader: sn.cube_vert,
      fragmentShader: sn.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: sn.equirect_vert,
      fragmentShader: sn.equirect_frag,
    },
    distanceRGBA: {
      uniforms: Vt([
        on.common,
        on.displacementmap,
        {
          referencePosition: { value: new G() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: sn.distanceRGBA_vert,
      fragmentShader: sn.distanceRGBA_frag,
    },
    shadow: {
      uniforms: Vt([
        on.lights,
        on.fog,
        { color: { value: new P(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: sn.shadow_vert,
      fragmentShader: sn.shadow_frag,
    },
  };
function cn(e, t, n, i, r, a) {
  const s = new P(0);
  let o,
    l,
    c = !0 === r ? 0 : 1,
    h = null,
    u = 0,
    d = null;
  function p(e, t) {
    n.buffers.color.setClear(e.r, e.g, e.b, t, a);
  }
  return {
    getClearColor: function () {
      return s;
    },
    setClearColor: function (e, t = 1) {
      s.set(e), (c = t), p(s, c);
    },
    getClearAlpha: function () {
      return c;
    },
    setClearAlpha: function (e) {
      (c = e), p(s, c);
    },
    render: function (n, r) {
      let a = !1,
        f = !0 === r.isScene ? r.background : null;
      f && f.isTexture && (f = t.get(f));
      const m = e.xr,
        g = m.getSession && m.getSession();
      g && "additive" === g.environmentBlendMode && (f = null),
        null === f ? p(s, c) : f && f.isColor && (p(f, 1), (a = !0)),
        (e.autoClear || a) &&
          e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
        f && (f.isCubeTexture || 306 === f.mapping)
          ? (void 0 === l &&
              ((l = new Ut(
                new Bt(1, 1, 1),
                new Gt({
                  name: "BackgroundCubeMaterial",
                  uniforms: kt(ln.cube.uniforms),
                  vertexShader: ln.cube.vertexShader,
                  fragmentShader: ln.cube.fragmentShader,
                  side: 1,
                  depthTest: !1,
                  depthWrite: !1,
                  fog: !1,
                })
              )),
              l.geometry.deleteAttribute("normal"),
              l.geometry.deleteAttribute("uv"),
              (l.onBeforeRender = function (e, t, n) {
                this.matrixWorld.copyPosition(n.matrixWorld);
              }),
              Object.defineProperty(l.material, "envMap", {
                get: function () {
                  return this.uniforms.envMap.value;
                },
              }),
              i.update(l)),
            (l.material.uniforms.envMap.value = f),
            (l.material.uniforms.flipEnvMap.value =
              f.isCubeTexture && !1 === f.isRenderTargetTexture ? -1 : 1),
            (h === f && u === f.version && d === e.toneMapping) ||
              ((l.material.needsUpdate = !0),
              (h = f),
              (u = f.version),
              (d = e.toneMapping)),
            l.layers.enableAll(),
            n.unshift(l, l.geometry, l.material, 0, 0, null))
          : f &&
            f.isTexture &&
            (void 0 === o &&
              ((o = new Ut(
                new an(2, 2),
                new Gt({
                  name: "BackgroundMaterial",
                  uniforms: kt(ln.background.uniforms),
                  vertexShader: ln.background.vertexShader,
                  fragmentShader: ln.background.fragmentShader,
                  side: 0,
                  depthTest: !1,
                  depthWrite: !1,
                  fog: !1,
                })
              )),
              o.geometry.deleteAttribute("normal"),
              Object.defineProperty(o.material, "map", {
                get: function () {
                  return this.uniforms.t2D.value;
                },
              }),
              i.update(o)),
            (o.material.uniforms.t2D.value = f),
            !0 === f.matrixAutoUpdate && f.updateMatrix(),
            o.material.uniforms.uvTransform.value.copy(f.matrix),
            (h === f && u === f.version && d === e.toneMapping) ||
              ((o.material.needsUpdate = !0),
              (h = f),
              (u = f.version),
              (d = e.toneMapping)),
            o.layers.enableAll(),
            n.unshift(o, o.geometry, o.material, 0, 0, null));
    },
  };
}
function hn(e, t, n, i) {
  const r = e.getParameter(34921),
    a = i.isWebGL2 ? null : t.get("OES_vertex_array_object"),
    s = i.isWebGL2 || null !== a,
    o = {},
    l = p(null);
  let c = l,
    h = !1;
  function u(t) {
    return i.isWebGL2 ? e.bindVertexArray(t) : a.bindVertexArrayOES(t);
  }
  function d(t) {
    return i.isWebGL2 ? e.deleteVertexArray(t) : a.deleteVertexArrayOES(t);
  }
  function p(e) {
    const t = [],
      n = [],
      i = [];
    for (let e = 0; e < r; e++) (t[e] = 0), (n[e] = 0), (i[e] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: t,
      enabledAttributes: n,
      attributeDivisors: i,
      object: e,
      attributes: {},
      index: null,
    };
  }
  function f() {
    const e = c.newAttributes;
    for (let t = 0, n = e.length; t < n; t++) e[t] = 0;
  }
  function m(e) {
    g(e, 0);
  }
  function g(n, r) {
    const a = c.newAttributes,
      s = c.enabledAttributes,
      o = c.attributeDivisors;
    if (
      ((a[n] = 1),
      0 === s[n] && (e.enableVertexAttribArray(n), (s[n] = 1)),
      o[n] !== r)
    ) {
      (i.isWebGL2 ? e : t.get("ANGLE_instanced_arrays"))[
        i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
      ](n, r),
        (o[n] = r);
    }
  }
  function v() {
    const t = c.newAttributes,
      n = c.enabledAttributes;
    for (let i = 0, r = n.length; i < r; i++)
      n[i] !== t[i] && (e.disableVertexAttribArray(i), (n[i] = 0));
  }
  function _(t, n, r, a, s, o) {
    !0 !== i.isWebGL2 || (5124 !== r && 5125 !== r)
      ? e.vertexAttribPointer(t, n, r, a, s, o)
      : e.vertexAttribIPointer(t, n, r, s, o);
  }
  function x() {
    y(), (h = !0), c !== l && ((c = l), u(c.object));
  }
  function y() {
    (l.geometry = null), (l.program = null), (l.wireframe = !1);
  }
  return {
    setup: function (r, l, d, x, y) {
      let M = !1;
      if (s) {
        const t = (function (t, n, r) {
          const s = !0 === r.wireframe;
          let l = o[t.id];
          void 0 === l && ((l = {}), (o[t.id] = l));
          let c = l[n.id];
          void 0 === c && ((c = {}), (l[n.id] = c));
          let h = c[s];
          void 0 === h &&
            ((h = p(
              i.isWebGL2 ? e.createVertexArray() : a.createVertexArrayOES()
            )),
            (c[s] = h));
          return h;
        })(x, d, l);
        c !== t && ((c = t), u(c.object)),
          (M = (function (e, t, n, i) {
            const r = c.attributes,
              a = t.attributes;
            let s = 0;
            const o = n.getAttributes();
            for (const t in o) {
              if (o[t].location >= 0) {
                const n = r[t];
                let i = a[t];
                if (
                  (void 0 === i &&
                    ("instanceMatrix" === t &&
                      e.instanceMatrix &&
                      (i = e.instanceMatrix),
                    "instanceColor" === t &&
                      e.instanceColor &&
                      (i = e.instanceColor)),
                  void 0 === n)
                )
                  return !0;
                if (n.attribute !== i) return !0;
                if (i && n.data !== i.data) return !0;
                s++;
              }
            }
            return c.attributesNum !== s || c.index !== i;
          })(r, x, d, y)),
          M &&
            (function (e, t, n, i) {
              const r = {},
                a = t.attributes;
              let s = 0;
              const o = n.getAttributes();
              for (const t in o) {
                if (o[t].location >= 0) {
                  let n = a[t];
                  void 0 === n &&
                    ("instanceMatrix" === t &&
                      e.instanceMatrix &&
                      (n = e.instanceMatrix),
                    "instanceColor" === t &&
                      e.instanceColor &&
                      (n = e.instanceColor));
                  const i = {};
                  (i.attribute = n),
                    n && n.data && (i.data = n.data),
                    (r[t] = i),
                    s++;
                }
              }
              (c.attributes = r), (c.attributesNum = s), (c.index = i);
            })(r, x, d, y);
      } else {
        const e = !0 === l.wireframe;
        (c.geometry === x.id && c.program === d.id && c.wireframe === e) ||
          ((c.geometry = x.id),
          (c.program = d.id),
          (c.wireframe = e),
          (M = !0));
      }
      null !== y && n.update(y, 34963),
        (M || h) &&
          ((h = !1),
          (function (r, a, s, o) {
            if (
              !1 === i.isWebGL2 &&
              (r.isInstancedMesh || o.isInstancedBufferGeometry) &&
              null === t.get("ANGLE_instanced_arrays")
            )
              return;
            f();
            const l = o.attributes,
              c = s.getAttributes(),
              h = a.defaultAttributeValues;
            for (const t in c) {
              const i = c[t];
              if (i.location >= 0) {
                let a = l[t];
                if (
                  (void 0 === a &&
                    ("instanceMatrix" === t &&
                      r.instanceMatrix &&
                      (a = r.instanceMatrix),
                    "instanceColor" === t &&
                      r.instanceColor &&
                      (a = r.instanceColor)),
                  void 0 !== a)
                ) {
                  const t = a.normalized,
                    s = a.itemSize,
                    l = n.get(a);
                  if (void 0 === l) continue;
                  const c = l.buffer,
                    h = l.type,
                    u = l.bytesPerElement;
                  if (a.isInterleavedBufferAttribute) {
                    const n = a.data,
                      l = n.stride,
                      d = a.offset;
                    if (n.isInstancedInterleavedBuffer) {
                      for (let e = 0; e < i.locationSize; e++)
                        g(i.location + e, n.meshPerAttribute);
                      !0 !== r.isInstancedMesh &&
                        void 0 === o._maxInstanceCount &&
                        (o._maxInstanceCount = n.meshPerAttribute * n.count);
                    } else
                      for (let e = 0; e < i.locationSize; e++)
                        m(i.location + e);
                    e.bindBuffer(34962, c);
                    for (let e = 0; e < i.locationSize; e++)
                      _(
                        i.location + e,
                        s / i.locationSize,
                        h,
                        t,
                        l * u,
                        (d + (s / i.locationSize) * e) * u
                      );
                  } else {
                    if (a.isInstancedBufferAttribute) {
                      for (let e = 0; e < i.locationSize; e++)
                        g(i.location + e, a.meshPerAttribute);
                      !0 !== r.isInstancedMesh &&
                        void 0 === o._maxInstanceCount &&
                        (o._maxInstanceCount = a.meshPerAttribute * a.count);
                    } else
                      for (let e = 0; e < i.locationSize; e++)
                        m(i.location + e);
                    e.bindBuffer(34962, c);
                    for (let e = 0; e < i.locationSize; e++)
                      _(
                        i.location + e,
                        s / i.locationSize,
                        h,
                        t,
                        s * u,
                        (s / i.locationSize) * e * u
                      );
                  }
                } else if (void 0 !== h) {
                  const n = h[t];
                  if (void 0 !== n)
                    switch (n.length) {
                      case 2:
                        e.vertexAttrib2fv(i.location, n);
                        break;
                      case 3:
                        e.vertexAttrib3fv(i.location, n);
                        break;
                      case 4:
                        e.vertexAttrib4fv(i.location, n);
                        break;
                      default:
                        e.vertexAttrib1fv(i.location, n);
                    }
                }
              }
            }
            v();
          })(r, l, d, x),
          null !== y && e.bindBuffer(34963, n.get(y).buffer));
    },
    reset: x,
    resetDefaultState: y,
    dispose: function () {
      x();
      for (const e in o) {
        const t = o[e];
        for (const e in t) {
          const n = t[e];
          for (const e in n) d(n[e].object), delete n[e];
          delete t[e];
        }
        delete o[e];
      }
    },
    releaseStatesOfGeometry: function (e) {
      if (void 0 === o[e.id]) return;
      const t = o[e.id];
      for (const e in t) {
        const n = t[e];
        for (const e in n) d(n[e].object), delete n[e];
        delete t[e];
      }
      delete o[e.id];
    },
    releaseStatesOfProgram: function (e) {
      for (const t in o) {
        const n = o[t];
        if (void 0 === n[e.id]) continue;
        const i = n[e.id];
        for (const e in i) d(i[e].object), delete i[e];
        delete n[e.id];
      }
    },
    initAttributes: f,
    enableAttribute: m,
    disableUnusedAttributes: v,
  };
}
function un(e, t, n, i) {
  const r = i.isWebGL2;
  let a;
  (this.setMode = function (e) {
    a = e;
  }),
    (this.render = function (t, i) {
      e.drawArrays(a, t, i), n.update(i, a, 1);
    }),
    (this.renderInstances = function (i, s, o) {
      if (0 === o) return;
      let l, c;
      if (r) (l = e), (c = "drawArraysInstanced");
      else if (
        ((l = t.get("ANGLE_instanced_arrays")),
        (c = "drawArraysInstancedANGLE"),
        null === l)
      )
        return void console.error(
          "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
        );
      l[c](a, i, s, o), n.update(s, a, o);
    });
}
function dn(e, t, n) {
  let i;
  function r(t) {
    if ("highp" === t) {
      if (
        e.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
        e.getShaderPrecisionFormat(35632, 36338).precision > 0
      )
        return "highp";
      t = "mediump";
    }
    return "mediump" === t &&
      e.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
      e.getShaderPrecisionFormat(35632, 36337).precision > 0
      ? "mediump"
      : "lowp";
  }
  const a =
    ("undefined" != typeof WebGL2RenderingContext &&
      e instanceof WebGL2RenderingContext) ||
    ("undefined" != typeof WebGL2ComputeRenderingContext &&
      e instanceof WebGL2ComputeRenderingContext);
  let s = void 0 !== n.precision ? n.precision : "highp";
  const o = r(s);
  o !== s &&
    (console.warn(
      "THREE.WebGLRenderer:",
      s,
      "not supported, using",
      o,
      "instead."
    ),
    (s = o));
  const l = a || t.has("WEBGL_draw_buffers"),
    c = !0 === n.logarithmicDepthBuffer,
    h = e.getParameter(34930),
    u = e.getParameter(35660),
    d = e.getParameter(3379),
    p = e.getParameter(34076),
    f = e.getParameter(34921),
    m = e.getParameter(36347),
    g = e.getParameter(36348),
    v = e.getParameter(36349),
    _ = u > 0,
    x = a || t.has("OES_texture_float");
  return {
    isWebGL2: a,
    drawBuffers: l,
    getMaxAnisotropy: function () {
      if (void 0 !== i) return i;
      if (!0 === t.has("EXT_texture_filter_anisotropic")) {
        const n = t.get("EXT_texture_filter_anisotropic");
        i = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      } else i = 0;
      return i;
    },
    getMaxPrecision: r,
    precision: s,
    logarithmicDepthBuffer: c,
    maxTextures: h,
    maxVertexTextures: u,
    maxTextureSize: d,
    maxCubemapSize: p,
    maxAttributes: f,
    maxVertexUniforms: m,
    maxVaryings: g,
    maxFragmentUniforms: v,
    vertexTextures: _,
    floatFragmentTextures: x,
    floatVertexTextures: _ && x,
    maxSamples: a ? e.getParameter(36183) : 0,
  };
}
function pn(e) {
  const t = this;
  let n = null,
    i = 0,
    r = !1,
    a = !1;
  const s = new Qt(),
    o = new _(),
    l = { value: null, needsUpdate: !1 };
  function c() {
    l.value !== n && ((l.value = n), (l.needsUpdate = i > 0)),
      (t.numPlanes = i),
      (t.numIntersection = 0);
  }
  function h(e, n, i, r) {
    const a = null !== e ? e.length : 0;
    let c = null;
    if (0 !== a) {
      if (((c = l.value), !0 !== r || null === c)) {
        const t = i + 4 * a,
          r = n.matrixWorldInverse;
        o.getNormalMatrix(r),
          (null === c || c.length < t) && (c = new Float32Array(t));
        for (let t = 0, n = i; t !== a; ++t, n += 4)
          s.copy(e[t]).applyMatrix4(r, o),
            s.normal.toArray(c, n),
            (c[n + 3] = s.constant);
      }
      (l.value = c), (l.needsUpdate = !0);
    }
    return (t.numPlanes = a), (t.numIntersection = 0), c;
  }
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (e, t, a) {
      const s = 0 !== e.length || t || 0 !== i || r;
      return (r = t), (n = h(e, a, 0)), (i = e.length), s;
    }),
    (this.beginShadows = function () {
      (a = !0), h(null);
    }),
    (this.endShadows = function () {
      (a = !1), c();
    }),
    (this.setState = function (t, s, o) {
      const u = t.clippingPlanes,
        d = t.clipIntersection,
        p = t.clipShadows,
        f = e.get(t);
      if (!r || null === u || 0 === u.length || (a && !p)) a ? h(null) : c();
      else {
        const e = a ? 0 : i,
          t = 4 * e;
        let r = f.clippingState || null;
        (l.value = r), (r = h(u, s, t, o));
        for (let e = 0; e !== t; ++e) r[e] = n[e];
        (f.clippingState = r),
          (this.numIntersection = d ? this.numPlanes : 0),
          (this.numPlanes += e);
      }
    });
}
function fn(e) {
  let t = new WeakMap();
  function n(e, t) {
    return 303 === t ? (e.mapping = 301) : 304 === t && (e.mapping = 302), e;
  }
  function i(e) {
    const n = e.target;
    n.removeEventListener("dispose", i);
    const r = t.get(n);
    void 0 !== r && (t.delete(n), r.dispose());
  }
  return {
    get: function (r) {
      if (r && r.isTexture && !1 === r.isRenderTargetTexture) {
        const a = r.mapping;
        if (303 === a || 304 === a) {
          if (t.has(r)) {
            return n(t.get(r).texture, r.mapping);
          }
          {
            const a = r.image;
            if (a && a.height > 0) {
              const s = new Yt(a.height / 2);
              return (
                s.fromEquirectangularTexture(e, r),
                t.set(r, s),
                r.addEventListener("dispose", i),
                n(s.texture, r.mapping)
              );
            }
            return null;
          }
        }
      }
      return r;
    },
    dispose: function () {
      t = new WeakMap();
    },
  };
}
ln.physical = {
  uniforms: Vt([
    ln.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: new v(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: new P(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: new v() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new P(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: new P(1, 1, 1) },
      specularColorMap: { value: null },
    },
  ]),
  vertexShader: sn.meshphysical_vert,
  fragmentShader: sn.meshphysical_frag,
};
class mn extends Wt {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, a = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = i),
      (this.near = r),
      (this.far = a),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = null === e.view ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, i, r, a) {
    null === this.view &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    null !== this.view && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2;
    let r = n - e,
      a = n + e,
      s = i + t,
      o = i - t;
    if (null !== this.view && this.view.enabled) {
      const e = (this.right - this.left) / this.view.fullWidth / this.zoom,
        t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (r += e * this.view.offsetX),
        (a = r + e * this.view.width),
        (s -= t * this.view.offsetY),
        (o = s - t * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(r, a, s, o, this.near, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      null !== this.view && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const gn = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  vn = new mn(),
  _n = new P();
let xn = null;
const yn = (1 + Math.sqrt(5)) / 2,
  Mn = 1 / yn,
  bn = [
    new G(1, 1, 1),
    new G(-1, 1, 1),
    new G(1, 1, -1),
    new G(-1, 1, -1),
    new G(0, yn, Mn),
    new G(0, yn, -Mn),
    new G(Mn, 0, yn),
    new G(-Mn, 0, yn),
    new G(yn, Mn, 0),
    new G(-yn, Mn, 0),
  ];
class Sn {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    (xn = this._renderer.getRenderTarget()), this._setSize(256);
    const r = this._allocateTargets();
    return (
      (r.depthBuffer = !0),
      this._sceneToCubeUV(e, n, i, r),
      t > 0 && this._blur(r, 0, 0, t),
      this._applyPMREM(r),
      this._cleanup(r),
      r
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    null === this._cubemapMaterial &&
      ((this._cubemapMaterial = An()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    null === this._equirectMaterial &&
      ((this._equirectMaterial = En()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      null !== this._cubemapMaterial && this._cubemapMaterial.dispose(),
      null !== this._equirectMaterial && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    null !== this._blurMaterial && this._blurMaterial.dispose(),
      null !== this._pingPongRenderTarget &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(xn),
      (e.scissorTest = !1),
      Tn(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    301 === e.mapping || 302 === e.mapping
      ? this._setSize(
          0 === e.image.length ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (xn = this._renderer.getRenderTarget());
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: 1006,
        minFilter: 1006,
        generateMipmaps: !1,
        type: 1016,
        format: 1023,
        encoding: 3e3,
        depthBuffer: !1,
      },
      i = wn(e, t, n);
    if (
      null === this._pingPongRenderTarget ||
      this._pingPongRenderTarget.width !== e
    ) {
      null !== this._pingPongRenderTarget && this._dispose(),
        (this._pingPongRenderTarget = wn(e, t, n));
      const { _lodMax: i } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = (function (e) {
        const t = [],
          n = [],
          i = [];
        let r = e;
        const a = e - 4 + 1 + gn.length;
        for (let s = 0; s < a; s++) {
          const a = Math.pow(2, r);
          n.push(a);
          let o = 1 / a;
          s > e - 4 ? (o = gn[s - e + 4 - 1]) : 0 === s && (o = 0), i.push(o);
          const l = 1 / (a - 2),
            c = -l,
            h = 1 + l,
            u = [c, c, h, c, h, h, c, c, h, h, c, h],
            d = 6,
            p = 6,
            f = 3,
            m = 2,
            g = 1,
            v = new Float32Array(f * p * d),
            _ = new Float32Array(m * p * d),
            x = new Float32Array(g * p * d);
          for (let e = 0; e < d; e++) {
            const t = ((e % 3) * 2) / 3 - 1,
              n = e > 2 ? 0 : -1,
              i = [
                t,
                n,
                0,
                t + 2 / 3,
                n,
                0,
                t + 2 / 3,
                n + 1,
                0,
                t,
                n,
                0,
                t + 2 / 3,
                n + 1,
                0,
                t,
                n + 1,
                0,
              ];
            v.set(i, f * p * e), _.set(u, m * p * e);
            const r = [e, e, e, e, e, e];
            x.set(r, g * p * e);
          }
          const y = new xt();
          y.setAttribute("position", new lt(v, f)),
            y.setAttribute("uv", new lt(_, m)),
            y.setAttribute("faceIndex", new lt(x, g)),
            t.push(y),
            r > 4 && r--;
        }
        return { lodPlanes: t, sizeLods: n, sigmas: i };
      })(i)),
        (this._blurMaterial = (function (e, t, n) {
          const i = new Float32Array(20),
            r = new G(0, 1, 0);
          return new Gt({
            name: "SphericalGaussianBlur",
            defines: {
              n: 20,
              CUBEUV_TEXEL_WIDTH: 1 / t,
              CUBEUV_TEXEL_HEIGHT: 1 / n,
              CUBEUV_MAX_MIP: `${e}.0`,
            },
            uniforms: {
              envMap: { value: null },
              samples: { value: 1 },
              weights: { value: i },
              latitudinal: { value: !1 },
              dTheta: { value: 0 },
              mipInt: { value: 0 },
              poleAxis: { value: r },
            },
            vertexShader: Cn(),
            fragmentShader:
              "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",
            blending: 0,
            depthTest: !1,
            depthWrite: !1,
          });
        })(i, e, t));
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new Ut(this._lodPlanes[0], e);
    this._renderer.compile(t, vn);
  }
  _sceneToCubeUV(e, t, n, i) {
    const r = new jt(90, 1, t, n),
      a = [1, -1, 1, 1, 1, 1],
      s = [1, 1, 1, -1, -1, -1],
      o = this._renderer,
      l = o.autoClear,
      c = o.toneMapping;
    o.getClearColor(_n), (o.toneMapping = 0), (o.autoClear = !1);
    const h = new at({
        name: "PMREM.Background",
        side: 1,
        depthWrite: !1,
        depthTest: !1,
      }),
      u = new Ut(new Bt(), h);
    let d = !1;
    const p = e.background;
    p
      ? p.isColor && (h.color.copy(p), (e.background = null), (d = !0))
      : (h.color.copy(_n), (d = !0));
    for (let t = 0; t < 6; t++) {
      const n = t % 3;
      0 === n
        ? (r.up.set(0, a[t], 0), r.lookAt(s[t], 0, 0))
        : 1 === n
        ? (r.up.set(0, 0, a[t]), r.lookAt(0, s[t], 0))
        : (r.up.set(0, a[t], 0), r.lookAt(0, 0, s[t]));
      const l = this._cubeSize;
      Tn(i, n * l, t > 2 ? l : 0, l, l),
        o.setRenderTarget(i),
        d && o.render(u, r),
        o.render(e, r);
    }
    u.geometry.dispose(),
      u.material.dispose(),
      (o.toneMapping = c),
      (o.autoClear = l),
      (e.background = p);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      i = 301 === e.mapping || 302 === e.mapping;
    i
      ? (null === this._cubemapMaterial && (this._cubemapMaterial = An()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          !1 === e.isRenderTargetTexture ? -1 : 1))
      : null === this._equirectMaterial && (this._equirectMaterial = En());
    const r = i ? this._cubemapMaterial : this._equirectMaterial,
      a = new Ut(this._lodPlanes[0], r);
    r.uniforms.envMap.value = e;
    const s = this._cubeSize;
    Tn(t, 0, 0, 3 * s, 2 * s), n.setRenderTarget(t), n.render(a, vn);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    for (let t = 1; t < this._lodPlanes.length; t++) {
      const n = Math.sqrt(
          this._sigmas[t] * this._sigmas[t] -
            this._sigmas[t - 1] * this._sigmas[t - 1]
        ),
        i = bn[(t - 1) % bn.length];
      this._blur(e, t - 1, t, n, i);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, n, i, "latitudinal", r),
      this._halfBlur(a, e, n, n, i, "longitudinal", r);
  }
  _halfBlur(e, t, n, i, r, a, s) {
    const o = this._renderer,
      l = this._blurMaterial;
    "latitudinal" !== a &&
      "longitudinal" !== a &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    const c = new Ut(this._lodPlanes[i], l),
      h = l.uniforms,
      u = this._sizeLods[n] - 1,
      d = isFinite(r) ? Math.PI / (2 * u) : (2 * Math.PI) / 39,
      p = r / d,
      f = isFinite(r) ? 1 + Math.floor(3 * p) : 20;
    f > 20 &&
      console.warn(
        `sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`
      );
    const m = [];
    let g = 0;
    for (let e = 0; e < 20; ++e) {
      const t = e / p,
        n = Math.exp((-t * t) / 2);
      m.push(n), 0 === e ? (g += n) : e < f && (g += 2 * n);
    }
    for (let e = 0; e < m.length; e++) m[e] = m[e] / g;
    (h.envMap.value = e.texture),
      (h.samples.value = f),
      (h.weights.value = m),
      (h.latitudinal.value = "latitudinal" === a),
      s && (h.poleAxis.value = s);
    const { _lodMax: v } = this;
    (h.dTheta.value = d), (h.mipInt.value = v - n);
    const _ = this._sizeLods[i];
    Tn(
      t,
      3 * _ * (i > v - 4 ? i - v + 4 : 0),
      4 * (this._cubeSize - _),
      3 * _,
      2 * _
    ),
      o.setRenderTarget(t),
      o.render(c, vn);
  }
}
function wn(e, t, n) {
  const i = new B(e, t, n);
  return (
    (i.texture.mapping = 306),
    (i.texture.name = "PMREM.cubeUv"),
    (i.scissorTest = !0),
    i
  );
}
function Tn(e, t, n, i, r) {
  e.viewport.set(t, n, i, r), e.scissor.set(t, n, i, r);
}
function En() {
  return new Gt({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: Cn(),
    fragmentShader:
      "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t",
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function An() {
  return new Gt({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: Cn(),
    fragmentShader:
      "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Cn() {
  return "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t";
}
function Ln(e) {
  let t = new WeakMap(),
    n = null;
  function i(e) {
    const n = e.target;
    n.removeEventListener("dispose", i);
    const r = t.get(n);
    void 0 !== r && (t.delete(n), r.dispose());
  }
  return {
    get: function (r) {
      if (r && r.isTexture) {
        const a = r.mapping,
          s = 303 === a || 304 === a,
          o = 301 === a || 302 === a;
        if (s || o) {
          if (r.isRenderTargetTexture && !0 === r.needsPMREMUpdate) {
            r.needsPMREMUpdate = !1;
            let i = t.get(r);
            return (
              null === n && (n = new Sn(e)),
              (i = s ? n.fromEquirectangular(r, i) : n.fromCubemap(r, i)),
              t.set(r, i),
              i.texture
            );
          }
          if (t.has(r)) return t.get(r).texture;
          {
            const a = r.image;
            if (
              (s && a && a.height > 0) ||
              (o &&
                a &&
                (function (e) {
                  let t = 0;
                  const n = 6;
                  for (let i = 0; i < n; i++) void 0 !== e[i] && t++;
                  return t === n;
                })(a))
            ) {
              null === n && (n = new Sn(e));
              const a = s ? n.fromEquirectangular(r) : n.fromCubemap(r);
              return t.set(r, a), r.addEventListener("dispose", i), a.texture;
            }
            return null;
          }
        }
      }
      return r;
    },
    dispose: function () {
      (t = new WeakMap()), null !== n && (n.dispose(), (n = null));
    },
  };
}
function Rn(e) {
  const t = {};
  function n(n) {
    if (void 0 !== t[n]) return t[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i =
          e.getExtension("WEBGL_depth_texture") ||
          e.getExtension("MOZ_WEBGL_depth_texture") ||
          e.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i =
          e.getExtension("EXT_texture_filter_anisotropic") ||
          e.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i =
          e.getExtension("WEBGL_compressed_texture_s3tc") ||
          e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i =
          e.getExtension("WEBGL_compressed_texture_pvrtc") ||
          e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = e.getExtension(n);
    }
    return (t[n] = i), i;
  }
  return {
    has: function (e) {
      return null !== n(e);
    },
    init: function (e) {
      e.isWebGL2
        ? n("EXT_color_buffer_float")
        : (n("WEBGL_depth_texture"),
          n("OES_texture_float"),
          n("OES_texture_half_float"),
          n("OES_texture_half_float_linear"),
          n("OES_standard_derivatives"),
          n("OES_element_index_uint"),
          n("OES_vertex_array_object"),
          n("ANGLE_instanced_arrays")),
        n("OES_texture_float_linear"),
        n("EXT_color_buffer_half_float"),
        n("WEBGL_multisampled_render_to_texture");
    },
    get: function (e) {
      const t = n(e);
      return (
        null === t &&
          console.warn(
            "THREE.WebGLRenderer: " + e + " extension not supported."
          ),
        t
      );
    },
  };
}
function Pn(e, t, n, i) {
  const r = {},
    a = new WeakMap();
  function s(e) {
    const o = e.target;
    null !== o.index && t.remove(o.index);
    for (const e in o.attributes) t.remove(o.attributes[e]);
    o.removeEventListener("dispose", s), delete r[o.id];
    const l = a.get(o);
    l && (t.remove(l), a.delete(o)),
      i.releaseStatesOfGeometry(o),
      !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount,
      n.memory.geometries--;
  }
  function o(e) {
    const n = [],
      i = e.index,
      r = e.attributes.position;
    let s = 0;
    if (null !== i) {
      const e = i.array;
      s = i.version;
      for (let t = 0, i = e.length; t < i; t += 3) {
        const i = e[t + 0],
          r = e[t + 1],
          a = e[t + 2];
        n.push(i, r, r, a, a, i);
      }
    } else {
      const e = r.array;
      s = r.version;
      for (let t = 0, i = e.length / 3 - 1; t < i; t += 3) {
        const e = t + 0,
          i = t + 1,
          r = t + 2;
        n.push(e, i, i, r, r, e);
      }
    }
    const o = new (x(n) ? ht : ct)(n, 1);
    o.version = s;
    const l = a.get(e);
    l && t.remove(l), a.set(e, o);
  }
  return {
    get: function (e, t) {
      return (
        !0 === r[t.id] ||
          (t.addEventListener("dispose", s),
          (r[t.id] = !0),
          n.memory.geometries++),
        t
      );
    },
    update: function (e) {
      const n = e.attributes;
      for (const e in n) t.update(n[e], 34962);
      const i = e.morphAttributes;
      for (const e in i) {
        const n = i[e];
        for (let e = 0, i = n.length; e < i; e++) t.update(n[e], 34962);
      }
    },
    getWireframeAttribute: function (e) {
      const t = a.get(e);
      if (t) {
        const n = e.index;
        null !== n && t.version < n.version && o(e);
      } else o(e);
      return a.get(e);
    },
  };
}
function Dn(e, t, n, i) {
  const r = i.isWebGL2;
  let a, s, o;
  (this.setMode = function (e) {
    a = e;
  }),
    (this.setIndex = function (e) {
      (s = e.type), (o = e.bytesPerElement);
    }),
    (this.render = function (t, i) {
      e.drawElements(a, i, s, t * o), n.update(i, a, 1);
    }),
    (this.renderInstances = function (i, l, c) {
      if (0 === c) return;
      let h, u;
      if (r) (h = e), (u = "drawElementsInstanced");
      else if (
        ((h = t.get("ANGLE_instanced_arrays")),
        (u = "drawElementsInstancedANGLE"),
        null === h)
      )
        return void console.error(
          "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
        );
      h[u](a, l, s, i * o, c), n.update(l, a, c);
    });
}
function In(e) {
  const t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  return {
    memory: { geometries: 0, textures: 0 },
    render: t,
    programs: null,
    autoReset: !0,
    reset: function () {
      t.frame++,
        (t.calls = 0),
        (t.triangles = 0),
        (t.points = 0),
        (t.lines = 0);
    },
    update: function (e, n, i) {
      switch ((t.calls++, n)) {
        case 4:
          t.triangles += i * (e / 3);
          break;
        case 1:
          t.lines += i * (e / 2);
          break;
        case 3:
          t.lines += i * (e - 1);
          break;
        case 2:
          t.lines += i * e;
          break;
        case 0:
          t.points += i * e;
          break;
        default:
          console.error("THREE.WebGLInfo: Unknown draw mode:", n);
      }
    },
  };
}
function Nn(e, t) {
  return e[0] - t[0];
}
function On(e, t) {
  return Math.abs(t[1]) - Math.abs(e[1]);
}
function zn(e, t) {
  let n = 1;
  const i = t.isInterleavedBufferAttribute ? t.data.array : t.array;
  i instanceof Int8Array
    ? (n = 127)
    : i instanceof Uint8Array
    ? (n = 255)
    : i instanceof Uint16Array
    ? (n = 65535)
    : i instanceof Int16Array
    ? (n = 32767)
    : i instanceof Int32Array
    ? (n = 2147483647)
    : console.error(
        "THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",
        i
      ),
    e.divideScalar(n);
}
function Un(e, t, n) {
  const i = {},
    r = new Float32Array(8),
    a = new WeakMap(),
    s = new F(),
    o = [];
  for (let e = 0; e < 8; e++) o[e] = [e, 0];
  return {
    update: function (l, c, h, u) {
      const d = l.morphTargetInfluences;
      if (!0 === t.isWebGL2) {
        const i =
            c.morphAttributes.position ||
            c.morphAttributes.normal ||
            c.morphAttributes.color,
          r = void 0 !== i ? i.length : 0;
        let o = a.get(c);
        if (void 0 === o || o.count !== r) {
          void 0 !== o && o.texture.dispose();
          const e = void 0 !== c.morphAttributes.position,
            n = void 0 !== c.morphAttributes.normal,
            i = void 0 !== c.morphAttributes.color,
            l = c.morphAttributes.position || [],
            h = c.morphAttributes.normal || [],
            u = c.morphAttributes.color || [];
          let d = 0;
          !0 === e && (d = 1), !0 === n && (d = 2), !0 === i && (d = 3);
          let p = c.attributes.position.count * d,
            f = 1;
          p > t.maxTextureSize &&
            ((f = Math.ceil(p / t.maxTextureSize)), (p = t.maxTextureSize));
          const m = new Float32Array(p * f * 4 * r),
            g = new k(m, p, f, r);
          (g.type = 1015), (g.needsUpdate = !0);
          const _ = 4 * d;
          for (let t = 0; t < r; t++) {
            const r = l[t],
              a = h[t],
              o = u[t],
              c = p * f * 4 * t;
            for (let t = 0; t < r.count; t++) {
              const l = t * _;
              !0 === e &&
                (s.fromBufferAttribute(r, t),
                !0 === r.normalized && zn(s, r),
                (m[c + l + 0] = s.x),
                (m[c + l + 1] = s.y),
                (m[c + l + 2] = s.z),
                (m[c + l + 3] = 0)),
                !0 === n &&
                  (s.fromBufferAttribute(a, t),
                  !0 === a.normalized && zn(s, a),
                  (m[c + l + 4] = s.x),
                  (m[c + l + 5] = s.y),
                  (m[c + l + 6] = s.z),
                  (m[c + l + 7] = 0)),
                !0 === i &&
                  (s.fromBufferAttribute(o, t),
                  !0 === o.normalized && zn(s, o),
                  (m[c + l + 8] = s.x),
                  (m[c + l + 9] = s.y),
                  (m[c + l + 10] = s.z),
                  (m[c + l + 11] = 4 === o.itemSize ? s.w : 1));
            }
          }
          (o = { count: r, texture: g, size: new v(p, f) }),
            a.set(c, o),
            c.addEventListener("dispose", function e() {
              g.dispose(), a.delete(c), c.removeEventListener("dispose", e);
            });
        }
        let l = 0;
        for (let e = 0; e < d.length; e++) l += d[e];
        const h = c.morphTargetsRelative ? 1 : 1 - l;
        u.getUniforms().setValue(e, "morphTargetBaseInfluence", h),
          u.getUniforms().setValue(e, "morphTargetInfluences", d),
          u.getUniforms().setValue(e, "morphTargetsTexture", o.texture, n),
          u.getUniforms().setValue(e, "morphTargetsTextureSize", o.size);
      } else {
        const t = void 0 === d ? 0 : d.length;
        let n = i[c.id];
        if (void 0 === n || n.length !== t) {
          n = [];
          for (let e = 0; e < t; e++) n[e] = [e, 0];
          i[c.id] = n;
        }
        for (let e = 0; e < t; e++) {
          const t = n[e];
          (t[0] = e), (t[1] = d[e]);
        }
        n.sort(On);
        for (let e = 0; e < 8; e++)
          e < t && n[e][1]
            ? ((o[e][0] = n[e][0]), (o[e][1] = n[e][1]))
            : ((o[e][0] = Number.MAX_SAFE_INTEGER), (o[e][1] = 0));
        o.sort(Nn);
        const a = c.morphAttributes.position,
          s = c.morphAttributes.normal;
        let l = 0;
        for (let e = 0; e < 8; e++) {
          const t = o[e],
            n = t[0],
            i = t[1];
          n !== Number.MAX_SAFE_INTEGER && i
            ? (a &&
                c.getAttribute("morphTarget" + e) !== a[n] &&
                c.setAttribute("morphTarget" + e, a[n]),
              s &&
                c.getAttribute("morphNormal" + e) !== s[n] &&
                c.setAttribute("morphNormal" + e, s[n]),
              (r[e] = i),
              (l += i))
            : (a &&
                !0 === c.hasAttribute("morphTarget" + e) &&
                c.deleteAttribute("morphTarget" + e),
              s &&
                !0 === c.hasAttribute("morphNormal" + e) &&
                c.deleteAttribute("morphNormal" + e),
              (r[e] = 0));
        }
        const h = c.morphTargetsRelative ? 1 : 1 - l;
        u.getUniforms().setValue(e, "morphTargetBaseInfluence", h),
          u.getUniforms().setValue(e, "morphTargetInfluences", r);
      }
    },
  };
}
function Fn(e, t, n, i) {
  let r = new WeakMap();
  function a(e) {
    const t = e.target;
    t.removeEventListener("dispose", a),
      n.remove(t.instanceMatrix),
      null !== t.instanceColor && n.remove(t.instanceColor);
  }
  return {
    update: function (e) {
      const s = i.render.frame,
        o = e.geometry,
        l = t.get(e, o);
      return (
        r.get(l) !== s && (t.update(l), r.set(l, s)),
        e.isInstancedMesh &&
          (!1 === e.hasEventListener("dispose", a) &&
            e.addEventListener("dispose", a),
          n.update(e.instanceMatrix, 34962),
          null !== e.instanceColor && n.update(e.instanceColor, 34962)),
        l
      );
    },
    dispose: function () {
      r = new WeakMap();
    },
  };
}
const Bn = new U(),
  kn = new k(),
  Vn = new V(),
  Hn = new Xt(),
  Gn = [],
  Wn = [],
  jn = new Float32Array(16),
  qn = new Float32Array(9),
  Xn = new Float32Array(4);
function Yn(e, t, n) {
  const i = e[0];
  if (i <= 0 || i > 0) return e;
  const r = t * n;
  let a = Gn[r];
  if ((void 0 === a && ((a = new Float32Array(r)), (Gn[r] = a)), 0 !== t)) {
    i.toArray(a, 0);
    for (let i = 1, r = 0; i !== t; ++i) (r += n), e[i].toArray(a, r);
  }
  return a;
}
function Zn(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0, i = e.length; n < i; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
function Kn(e, t) {
  for (let n = 0, i = t.length; n < i; n++) e[n] = t[n];
}
function Jn(e, t) {
  let n = Wn[t];
  void 0 === n && ((n = new Int32Array(t)), (Wn[t] = n));
  for (let i = 0; i !== t; ++i) n[i] = e.allocateTextureUnit();
  return n;
}
function Qn(e, t) {
  const n = this.cache;
  n[0] !== t && (e.uniform1f(this.addr, t), (n[0] = t));
}
function $n(e, t) {
  const n = this.cache;
  if (void 0 !== t.x)
    (n[0] === t.x && n[1] === t.y) ||
      (e.uniform2f(this.addr, t.x, t.y), (n[0] = t.x), (n[1] = t.y));
  else {
    if (Zn(n, t)) return;
    e.uniform2fv(this.addr, t), Kn(n, t);
  }
}
function ei(e, t) {
  const n = this.cache;
  if (void 0 !== t.x)
    (n[0] === t.x && n[1] === t.y && n[2] === t.z) ||
      (e.uniform3f(this.addr, t.x, t.y, t.z),
      (n[0] = t.x),
      (n[1] = t.y),
      (n[2] = t.z));
  else if (void 0 !== t.r)
    (n[0] === t.r && n[1] === t.g && n[2] === t.b) ||
      (e.uniform3f(this.addr, t.r, t.g, t.b),
      (n[0] = t.r),
      (n[1] = t.g),
      (n[2] = t.b));
  else {
    if (Zn(n, t)) return;
    e.uniform3fv(this.addr, t), Kn(n, t);
  }
}
function ti(e, t) {
  const n = this.cache;
  if (void 0 !== t.x)
    (n[0] === t.x && n[1] === t.y && n[2] === t.z && n[3] === t.w) ||
      (e.uniform4f(this.addr, t.x, t.y, t.z, t.w),
      (n[0] = t.x),
      (n[1] = t.y),
      (n[2] = t.z),
      (n[3] = t.w));
  else {
    if (Zn(n, t)) return;
    e.uniform4fv(this.addr, t), Kn(n, t);
  }
}
function ni(e, t) {
  const n = this.cache,
    i = t.elements;
  if (void 0 === i) {
    if (Zn(n, t)) return;
    e.uniformMatrix2fv(this.addr, !1, t), Kn(n, t);
  } else {
    if (Zn(n, i)) return;
    Xn.set(i), e.uniformMatrix2fv(this.addr, !1, Xn), Kn(n, i);
  }
}
function ii(e, t) {
  const n = this.cache,
    i = t.elements;
  if (void 0 === i) {
    if (Zn(n, t)) return;
    e.uniformMatrix3fv(this.addr, !1, t), Kn(n, t);
  } else {
    if (Zn(n, i)) return;
    qn.set(i), e.uniformMatrix3fv(this.addr, !1, qn), Kn(n, i);
  }
}
function ri(e, t) {
  const n = this.cache,
    i = t.elements;
  if (void 0 === i) {
    if (Zn(n, t)) return;
    e.uniformMatrix4fv(this.addr, !1, t), Kn(n, t);
  } else {
    if (Zn(n, i)) return;
    jn.set(i), e.uniformMatrix4fv(this.addr, !1, jn), Kn(n, i);
  }
}
function ai(e, t) {
  const n = this.cache;
  n[0] !== t && (e.uniform1i(this.addr, t), (n[0] = t));
}
function si(e, t) {
  const n = this.cache;
  Zn(n, t) || (e.uniform2iv(this.addr, t), Kn(n, t));
}
function oi(e, t) {
  const n = this.cache;
  Zn(n, t) || (e.uniform3iv(this.addr, t), Kn(n, t));
}
function li(e, t) {
  const n = this.cache;
  Zn(n, t) || (e.uniform4iv(this.addr, t), Kn(n, t));
}
function ci(e, t) {
  const n = this.cache;
  n[0] !== t && (e.uniform1ui(this.addr, t), (n[0] = t));
}
function hi(e, t) {
  const n = this.cache;
  Zn(n, t) || (e.uniform2uiv(this.addr, t), Kn(n, t));
}
function ui(e, t) {
  const n = this.cache;
  Zn(n, t) || (e.uniform3uiv(this.addr, t), Kn(n, t));
}
function di(e, t) {
  const n = this.cache;
  Zn(n, t) || (e.uniform4uiv(this.addr, t), Kn(n, t));
}
function pi(e, t, n) {
  const i = this.cache,
    r = n.allocateTextureUnit();
  i[0] !== r && (e.uniform1i(this.addr, r), (i[0] = r)),
    n.setTexture2D(t || Bn, r);
}
function fi(e, t, n) {
  const i = this.cache,
    r = n.allocateTextureUnit();
  i[0] !== r && (e.uniform1i(this.addr, r), (i[0] = r)),
    n.setTexture3D(t || Vn, r);
}
function mi(e, t, n) {
  const i = this.cache,
    r = n.allocateTextureUnit();
  i[0] !== r && (e.uniform1i(this.addr, r), (i[0] = r)),
    n.setTextureCube(t || Hn, r);
}
function gi(e, t, n) {
  const i = this.cache,
    r = n.allocateTextureUnit();
  i[0] !== r && (e.uniform1i(this.addr, r), (i[0] = r)),
    n.setTexture2DArray(t || kn, r);
}
function vi(e, t) {
  e.uniform1fv(this.addr, t);
}
function _i(e, t) {
  const n = Yn(t, this.size, 2);
  e.uniform2fv(this.addr, n);
}
function xi(e, t) {
  const n = Yn(t, this.size, 3);
  e.uniform3fv(this.addr, n);
}
function yi(e, t) {
  const n = Yn(t, this.size, 4);
  e.uniform4fv(this.addr, n);
}
function Mi(e, t) {
  const n = Yn(t, this.size, 4);
  e.uniformMatrix2fv(this.addr, !1, n);
}
function bi(e, t) {
  const n = Yn(t, this.size, 9);
  e.uniformMatrix3fv(this.addr, !1, n);
}
function Si(e, t) {
  const n = Yn(t, this.size, 16);
  e.uniformMatrix4fv(this.addr, !1, n);
}
function wi(e, t) {
  e.uniform1iv(this.addr, t);
}
function Ti(e, t) {
  e.uniform2iv(this.addr, t);
}
function Ei(e, t) {
  e.uniform3iv(this.addr, t);
}
function Ai(e, t) {
  e.uniform4iv(this.addr, t);
}
function Ci(e, t) {
  e.uniform1uiv(this.addr, t);
}
function Li(e, t) {
  e.uniform2uiv(this.addr, t);
}
function Ri(e, t) {
  e.uniform3uiv(this.addr, t);
}
function Pi(e, t) {
  e.uniform4uiv(this.addr, t);
}
function Di(e, t, n) {
  const i = t.length,
    r = Jn(n, i);
  e.uniform1iv(this.addr, r);
  for (let e = 0; e !== i; ++e) n.setTexture2D(t[e] || Bn, r[e]);
}
function Ii(e, t, n) {
  const i = t.length,
    r = Jn(n, i);
  e.uniform1iv(this.addr, r);
  for (let e = 0; e !== i; ++e) n.setTexture3D(t[e] || Vn, r[e]);
}
function Ni(e, t, n) {
  const i = t.length,
    r = Jn(n, i);
  e.uniform1iv(this.addr, r);
  for (let e = 0; e !== i; ++e) n.setTextureCube(t[e] || Hn, r[e]);
}
function Oi(e, t, n) {
  const i = t.length,
    r = Jn(n, i);
  e.uniform1iv(this.addr, r);
  for (let e = 0; e !== i; ++e) n.setTexture2DArray(t[e] || kn, r[e]);
}
class zi {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.setValue = (function (e) {
        switch (e) {
          case 5126:
            return Qn;
          case 35664:
            return $n;
          case 35665:
            return ei;
          case 35666:
            return ti;
          case 35674:
            return ni;
          case 35675:
            return ii;
          case 35676:
            return ri;
          case 5124:
          case 35670:
            return ai;
          case 35667:
          case 35671:
            return si;
          case 35668:
          case 35672:
            return oi;
          case 35669:
          case 35673:
            return li;
          case 5125:
            return ci;
          case 36294:
            return hi;
          case 36295:
            return ui;
          case 36296:
            return di;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return pi;
          case 35679:
          case 36299:
          case 36307:
            return fi;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return mi;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return gi;
        }
      })(t.type));
  }
}
class Ui {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.size = t.size),
      (this.setValue = (function (e) {
        switch (e) {
          case 5126:
            return vi;
          case 35664:
            return _i;
          case 35665:
            return xi;
          case 35666:
            return yi;
          case 35674:
            return Mi;
          case 35675:
            return bi;
          case 35676:
            return Si;
          case 5124:
          case 35670:
            return wi;
          case 35667:
          case 35671:
            return Ti;
          case 35668:
          case 35672:
            return Ei;
          case 35669:
          case 35673:
            return Ai;
          case 5125:
            return Ci;
          case 36294:
            return Li;
          case 36295:
            return Ri;
          case 36296:
            return Pi;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return Di;
          case 35679:
          case 36299:
          case 36307:
            return Ii;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return Ni;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return Oi;
        }
      })(t.type));
  }
}
class Fi {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, a = i.length; r !== a; ++r) {
      const a = i[r];
      a.setValue(e, t[a.id], n);
    }
  }
}
const Bi = /(\w+)(\])?(\[|\.)?/g;
function ki(e, t) {
  e.seq.push(t), (e.map[t.id] = t);
}
function Vi(e, t, n) {
  const i = e.name,
    r = i.length;
  for (Bi.lastIndex = 0; ; ) {
    const a = Bi.exec(i),
      s = Bi.lastIndex;
    let o = a[1];
    const l = "]" === a[2],
      c = a[3];
    if ((l && (o |= 0), void 0 === c || ("[" === c && s + 2 === r))) {
      ki(n, void 0 === c ? new zi(o, e, t) : new Ui(o, e, t));
      break;
    }
    {
      let e = n.map[o];
      void 0 === e && ((e = new Fi(o)), ki(n, e)), (n = e);
    }
  }
}
class Hi {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const n = e.getActiveUniform(t, i);
      Vi(n, e.getUniformLocation(t, n.name), this);
    }
  }
  setValue(e, t, n, i) {
    const r = this.map[t];
    void 0 !== r && r.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    void 0 !== i && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let r = 0, a = t.length; r !== a; ++r) {
      const a = t[r],
        s = n[a.id];
      !1 !== s.needsUpdate && a.setValue(e, s.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const r = e[i];
      r.id in t && n.push(r);
    }
    return n;
  }
}
function Gi(e, t, n) {
  const i = e.createShader(t);
  return e.shaderSource(i, n), e.compileShader(i), i;
}
let Wi = 0;
function ji(e, t, n) {
  const i = e.getShaderParameter(t, 35713),
    r = e.getShaderInfoLog(t).trim();
  if (i && "" === r) return "";
  const a = /ERROR: 0:(\d+)/.exec(r);
  if (a) {
    const i = parseInt(a[1]);
    return (
      n.toUpperCase() +
      "\n\n" +
      r +
      "\n\n" +
      (function (e, t) {
        const n = e.split("\n"),
          i = [],
          r = Math.max(t - 6, 0),
          a = Math.min(t + 6, n.length);
        for (let e = r; e < a; e++) {
          const r = e + 1;
          i.push(`${r === t ? ">" : " "} ${r}: ${n[e]}`);
        }
        return i.join("\n");
      })(e.getShaderSource(t), i)
    );
  }
  return r;
}
function qi(e, t) {
  const n = (function (e) {
    switch (e) {
      case 3e3:
        return ["Linear", "( value )"];
      case 3001:
        return ["sRGB", "( value )"];
      default:
        return (
          console.warn("THREE.WebGLProgram: Unsupported encoding:", e),
          ["Linear", "( value )"]
        );
    }
  })(t);
  return "vec4 " + e + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }";
}
function Xi(e, t) {
  let n;
  switch (t) {
    case 1:
      n = "Linear";
      break;
    case 2:
      n = "Reinhard";
      break;
    case 3:
      n = "OptimizedCineon";
      break;
    case 4:
      n = "ACESFilmic";
      break;
    case 5:
      n = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t),
        (n = "Linear");
  }
  return (
    "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
  );
}
function Yi(e) {
  return "" !== e;
}
function Zi(e, t) {
  return e
    .replace(/NUM_DIR_LIGHTS/g, t.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights)
    .replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, t.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Ki(e, t) {
  return e
    .replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      t.numClippingPlanes - t.numClipIntersection
    );
}
const Ji = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Qi(e) {
  return e.replace(Ji, $i);
}
function $i(e, t) {
  const n = sn[t];
  if (void 0 === n) throw new Error("Can not resolve #include <" + t + ">");
  return Qi(n);
}
const er =
    /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
  tr =
    /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function nr(e) {
  return e.replace(tr, rr).replace(er, ir);
}
function ir(e, t, n, i) {
  return (
    console.warn(
      "WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."
    ),
    rr(e, t, n, i)
  );
}
function rr(e, t, n, i) {
  let r = "";
  for (let e = parseInt(t); e < parseInt(n); e++)
    r += i
      .replace(/\[\s*i\s*\]/g, "[ " + e + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, e);
  return r;
}
function ar(e) {
  let t =
    "precision " + e.precision + " float;\nprecision " + e.precision + " int;";
  return (
    "highp" === e.precision
      ? (t += "\n#define HIGH_PRECISION")
      : "mediump" === e.precision
      ? (t += "\n#define MEDIUM_PRECISION")
      : "lowp" === e.precision && (t += "\n#define LOW_PRECISION"),
    t
  );
}
function sr(e, t, n, i) {
  const r = e.getContext(),
    a = n.defines;
  let s = n.vertexShader,
    o = n.fragmentShader;
  const l = (function (e) {
      let t = "SHADOWMAP_TYPE_BASIC";
      return (
        1 === e.shadowMapType
          ? (t = "SHADOWMAP_TYPE_PCF")
          : 2 === e.shadowMapType
          ? (t = "SHADOWMAP_TYPE_PCF_SOFT")
          : 3 === e.shadowMapType && (t = "SHADOWMAP_TYPE_VSM"),
        t
      );
    })(n),
    c = (function (e) {
      let t = "ENVMAP_TYPE_CUBE";
      if (e.envMap)
        switch (e.envMapMode) {
          case 301:
          case 302:
            t = "ENVMAP_TYPE_CUBE";
            break;
          case 306:
            t = "ENVMAP_TYPE_CUBE_UV";
        }
      return t;
    })(n),
    h = (function (e) {
      let t = "ENVMAP_MODE_REFLECTION";
      e.envMap && 302 === e.envMapMode && (t = "ENVMAP_MODE_REFRACTION");
      return t;
    })(n),
    u = (function (e) {
      let t = "ENVMAP_BLENDING_NONE";
      if (e.envMap)
        switch (e.combine) {
          case 0:
            t = "ENVMAP_BLENDING_MULTIPLY";
            break;
          case 1:
            t = "ENVMAP_BLENDING_MIX";
            break;
          case 2:
            t = "ENVMAP_BLENDING_ADD";
        }
      return t;
    })(n),
    d = (function (e) {
      const t = e.envMapCubeUVHeight;
      if (null === t) return null;
      const n = Math.log2(t) - 2,
        i = 1 / t;
      return {
        texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
        texelHeight: i,
        maxMip: n,
      };
    })(n),
    p = n.isWebGL2
      ? ""
      : (function (e) {
          return [
            e.extensionDerivatives ||
            e.envMapCubeUVHeight ||
            e.bumpMap ||
            e.tangentSpaceNormalMap ||
            e.clearcoatNormalMap ||
            e.flatShading ||
            "physical" === e.shaderID
              ? "#extension GL_OES_standard_derivatives : enable"
              : "",
            (e.extensionFragDepth || e.logarithmicDepthBuffer) &&
            e.rendererExtensionFragDepth
              ? "#extension GL_EXT_frag_depth : enable"
              : "",
            e.extensionDrawBuffers && e.rendererExtensionDrawBuffers
              ? "#extension GL_EXT_draw_buffers : require"
              : "",
            (e.extensionShaderTextureLOD || e.envMap || e.transmission) &&
            e.rendererExtensionShaderTextureLod
              ? "#extension GL_EXT_shader_texture_lod : enable"
              : "",
          ]
            .filter(Yi)
            .join("\n");
        })(n),
    f = (function (e) {
      const t = [];
      for (const n in e) {
        const i = e[n];
        !1 !== i && t.push("#define " + n + " " + i);
      }
      return t.join("\n");
    })(a),
    m = r.createProgram();
  let g,
    v,
    _ = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
  n.isRawShaderMaterial
    ? ((g = [f].filter(Yi).join("\n")),
      g.length > 0 && (g += "\n"),
      (v = [p, f].filter(Yi).join("\n")),
      v.length > 0 && (v += "\n"))
    : ((g = [
        ar(n),
        "#define SHADER_NAME " + n.shaderName,
        f,
        n.instancing ? "#define USE_INSTANCING" : "",
        n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
        n.useFog && n.fog ? "#define USE_FOG" : "",
        n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
        n.map ? "#define USE_MAP" : "",
        n.envMap ? "#define USE_ENVMAP" : "",
        n.envMap ? "#define " + h : "",
        n.lightMap ? "#define USE_LIGHTMAP" : "",
        n.aoMap ? "#define USE_AOMAP" : "",
        n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        n.bumpMap ? "#define USE_BUMPMAP" : "",
        n.normalMap ? "#define USE_NORMALMAP" : "",
        n.normalMap && n.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        n.normalMap && n.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        n.displacementMap && n.supportsVertexTextures
          ? "#define USE_DISPLACEMENTMAP"
          : "",
        n.specularMap ? "#define USE_SPECULARMAP" : "",
        n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        n.metalnessMap ? "#define USE_METALNESSMAP" : "",
        n.alphaMap ? "#define USE_ALPHAMAP" : "",
        n.transmission ? "#define USE_TRANSMISSION" : "",
        n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        n.vertexTangents ? "#define USE_TANGENT" : "",
        n.vertexColors ? "#define USE_COLOR" : "",
        n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        n.vertexUvs ? "#define USE_UV" : "",
        n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        n.flatShading ? "#define FLAT_SHADED" : "",
        n.skinning ? "#define USE_SKINNING" : "",
        n.morphTargets ? "#define USE_MORPHTARGETS" : "",
        n.morphNormals && !1 === n.flatShading
          ? "#define USE_MORPHNORMALS"
          : "",
        n.morphColors && n.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
        n.morphTargetsCount > 0 && n.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE"
          : "",
        n.morphTargetsCount > 0 && n.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride
          : "",
        n.morphTargetsCount > 0 && n.isWebGL2
          ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount
          : "",
        n.doubleSided ? "#define DOUBLE_SIDED" : "",
        n.flipSided ? "#define FLIP_SIDED" : "",
        n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        n.shadowMapEnabled ? "#define " + l : "",
        n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        n.logarithmicDepthBuffer && n.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "\tattribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "\tattribute vec3 instanceColor;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_TANGENT",
        "\tattribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "\tattribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "\tattribute vec3 color;",
        "#endif",
        "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
        "\tattribute vec3 morphTarget0;",
        "\tattribute vec3 morphTarget1;",
        "\tattribute vec3 morphTarget2;",
        "\tattribute vec3 morphTarget3;",
        "\t#ifdef USE_MORPHNORMALS",
        "\t\tattribute vec3 morphNormal0;",
        "\t\tattribute vec3 morphNormal1;",
        "\t\tattribute vec3 morphNormal2;",
        "\t\tattribute vec3 morphNormal3;",
        "\t#else",
        "\t\tattribute vec3 morphTarget4;",
        "\t\tattribute vec3 morphTarget5;",
        "\t\tattribute vec3 morphTarget6;",
        "\t\tattribute vec3 morphTarget7;",
        "\t#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "\tattribute vec4 skinIndex;",
        "\tattribute vec4 skinWeight;",
        "#endif",
        "\n",
      ]
        .filter(Yi)
        .join("\n")),
      (v = [
        p,
        ar(n),
        "#define SHADER_NAME " + n.shaderName,
        f,
        n.useFog && n.fog ? "#define USE_FOG" : "",
        n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
        n.map ? "#define USE_MAP" : "",
        n.matcap ? "#define USE_MATCAP" : "",
        n.envMap ? "#define USE_ENVMAP" : "",
        n.envMap ? "#define " + c : "",
        n.envMap ? "#define " + h : "",
        n.envMap ? "#define " + u : "",
        d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
        d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
        d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
        n.lightMap ? "#define USE_LIGHTMAP" : "",
        n.aoMap ? "#define USE_AOMAP" : "",
        n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        n.bumpMap ? "#define USE_BUMPMAP" : "",
        n.normalMap ? "#define USE_NORMALMAP" : "",
        n.normalMap && n.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        n.normalMap && n.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        n.clearcoat ? "#define USE_CLEARCOAT" : "",
        n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        n.iridescence ? "#define USE_IRIDESCENCE" : "",
        n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        n.specularMap ? "#define USE_SPECULARMAP" : "",
        n.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        n.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        n.metalnessMap ? "#define USE_METALNESSMAP" : "",
        n.alphaMap ? "#define USE_ALPHAMAP" : "",
        n.alphaTest ? "#define USE_ALPHATEST" : "",
        n.sheen ? "#define USE_SHEEN" : "",
        n.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        n.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        n.transmission ? "#define USE_TRANSMISSION" : "",
        n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        n.vertexTangents ? "#define USE_TANGENT" : "",
        n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "",
        n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        n.vertexUvs ? "#define USE_UV" : "",
        n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        n.gradientMap ? "#define USE_GRADIENTMAP" : "",
        n.flatShading ? "#define FLAT_SHADED" : "",
        n.doubleSided ? "#define DOUBLE_SIDED" : "",
        n.flipSided ? "#define FLIP_SIDED" : "",
        n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        n.shadowMapEnabled ? "#define " + l : "",
        n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
        n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        n.logarithmicDepthBuffer && n.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        0 !== n.toneMapping ? "#define TONE_MAPPING" : "",
        0 !== n.toneMapping ? sn.tonemapping_pars_fragment : "",
        0 !== n.toneMapping ? Xi("toneMapping", n.toneMapping) : "",
        n.dithering ? "#define DITHERING" : "",
        n.opaque ? "#define OPAQUE" : "",
        sn.encodings_pars_fragment,
        qi("linearToOutputTexel", n.outputEncoding),
        n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
        "\n",
      ]
        .filter(Yi)
        .join("\n"))),
    (s = Qi(s)),
    (s = Zi(s, n)),
    (s = Ki(s, n)),
    (o = Qi(o)),
    (o = Zi(o, n)),
    (o = Ki(o, n)),
    (s = nr(s)),
    (o = nr(o)),
    n.isWebGL2 &&
      !0 !== n.isRawShaderMaterial &&
      ((_ = "#version 300 es\n"),
      (g =
        [
          "precision mediump sampler2DArray;",
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join("\n") +
        "\n" +
        g),
      (v =
        [
          "#define varying in",
          "300 es" === n.glslVersion
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          "300 es" === n.glslVersion ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join("\n") +
        "\n" +
        v));
  const x = _ + v + o,
    y = Gi(r, 35633, _ + g + s),
    M = Gi(r, 35632, x);
  if (
    (r.attachShader(m, y),
    r.attachShader(m, M),
    void 0 !== n.index0AttributeName
      ? r.bindAttribLocation(m, 0, n.index0AttributeName)
      : !0 === n.morphTargets && r.bindAttribLocation(m, 0, "position"),
    r.linkProgram(m),
    e.debug.checkShaderErrors)
  ) {
    const e = r.getProgramInfoLog(m).trim(),
      t = r.getShaderInfoLog(y).trim(),
      n = r.getShaderInfoLog(M).trim();
    let i = !0,
      a = !0;
    if (!1 === r.getProgramParameter(m, 35714)) {
      i = !1;
      const t = ji(r, y, "vertex"),
        n = ji(r, M, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " +
          r.getError() +
          " - VALIDATE_STATUS " +
          r.getProgramParameter(m, 35715) +
          "\n\nProgram Info Log: " +
          e +
          "\n" +
          t +
          "\n" +
          n
      );
    } else
      "" !== e
        ? console.warn("THREE.WebGLProgram: Program Info Log:", e)
        : ("" !== t && "" !== n) || (a = !1);
    a &&
      (this.diagnostics = {
        runnable: i,
        programLog: e,
        vertexShader: { log: t, prefix: g },
        fragmentShader: { log: n, prefix: v },
      });
  }
  let b, S;
  return (
    r.deleteShader(y),
    r.deleteShader(M),
    (this.getUniforms = function () {
      return void 0 === b && (b = new Hi(r, m)), b;
    }),
    (this.getAttributes = function () {
      return (
        void 0 === S &&
          (S = (function (e, t) {
            const n = {},
              i = e.getProgramParameter(t, 35721);
            for (let r = 0; r < i; r++) {
              const i = e.getActiveAttrib(t, r),
                a = i.name;
              let s = 1;
              35674 === i.type && (s = 2),
                35675 === i.type && (s = 3),
                35676 === i.type && (s = 4),
                (n[a] = {
                  type: i.type,
                  location: e.getAttribLocation(t, a),
                  locationSize: s,
                });
            }
            return n;
          })(r, m)),
        S
      );
    }),
    (this.destroy = function () {
      i.releaseStatesOfProgram(this),
        r.deleteProgram(m),
        (this.program = void 0);
    }),
    (this.name = n.shaderName),
    (this.id = Wi++),
    (this.cacheKey = t),
    (this.usedTimes = 1),
    (this.program = m),
    (this.vertexShader = y),
    (this.fragmentShader = M),
    this
  );
}
let or = 0;
class lr {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      i = this._getShaderStage(t),
      r = this._getShaderStage(n),
      a = this._getShaderCacheForMaterial(e);
    return (
      !1 === a.has(i) && (a.add(i), i.usedTimes++),
      !1 === a.has(r) && (a.add(r), r.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const e of t)
      e.usedTimes--, 0 === e.usedTimes && this.shaderCache.delete(e.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    return !1 === t.has(e) && t.set(e, new Set()), t.get(e);
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    if (!1 === t.has(e)) {
      const n = new cr(e);
      t.set(e, n);
    }
    return t.get(e);
  }
}
class cr {
  constructor(e) {
    (this.id = or++), (this.code = e), (this.usedTimes = 0);
  }
}
function hr(e, t, n, i, r, a, s) {
  const o = new Pe(),
    l = new lr(),
    c = [],
    h = r.isWebGL2,
    u = r.logarithmicDepthBuffer,
    d = r.vertexTextures;
  let p = r.precision;
  const f = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  return {
    getParameters: function (a, o, c, m, g) {
      const v = m.fog,
        _ = g.geometry,
        x = a.isMeshStandardMaterial ? m.environment : null,
        y = (a.isMeshStandardMaterial ? n : t).get(a.envMap || x),
        M = y && 306 === y.mapping ? y.image.height : null,
        b = f[a.type];
      null !== a.precision &&
        ((p = r.getMaxPrecision(a.precision)),
        p !== a.precision &&
          console.warn(
            "THREE.WebGLProgram.getParameters:",
            a.precision,
            "not supported, using",
            p,
            "instead."
          ));
      const S =
          _.morphAttributes.position ||
          _.morphAttributes.normal ||
          _.morphAttributes.color,
        w = void 0 !== S ? S.length : 0;
      let T,
        E,
        A,
        C,
        L = 0;
      if (
        (void 0 !== _.morphAttributes.position && (L = 1),
        void 0 !== _.morphAttributes.normal && (L = 2),
        void 0 !== _.morphAttributes.color && (L = 3),
        b)
      ) {
        const e = ln[b];
        (T = e.vertexShader), (E = e.fragmentShader);
      } else
        (T = a.vertexShader),
          (E = a.fragmentShader),
          l.update(a),
          (A = l.getVertexShaderID(a)),
          (C = l.getFragmentShaderID(a));
      const R = e.getRenderTarget(),
        P = a.alphaTest > 0,
        D = a.clearcoat > 0,
        I = a.iridescence > 0;
      return {
        isWebGL2: h,
        shaderID: b,
        shaderName: a.type,
        vertexShader: T,
        fragmentShader: E,
        defines: a.defines,
        customVertexShaderID: A,
        customFragmentShaderID: C,
        isRawShaderMaterial: !0 === a.isRawShaderMaterial,
        glslVersion: a.glslVersion,
        precision: p,
        instancing: !0 === g.isInstancedMesh,
        instancingColor: !0 === g.isInstancedMesh && null !== g.instanceColor,
        supportsVertexTextures: d,
        outputEncoding:
          null === R
            ? e.outputEncoding
            : !0 === R.isXRRenderTarget
            ? R.texture.encoding
            : 3e3,
        map: !!a.map,
        matcap: !!a.matcap,
        envMap: !!y,
        envMapMode: y && y.mapping,
        envMapCubeUVHeight: M,
        lightMap: !!a.lightMap,
        aoMap: !!a.aoMap,
        emissiveMap: !!a.emissiveMap,
        bumpMap: !!a.bumpMap,
        normalMap: !!a.normalMap,
        objectSpaceNormalMap: 1 === a.normalMapType,
        tangentSpaceNormalMap: 0 === a.normalMapType,
        decodeVideoTexture:
          !!a.map && !0 === a.map.isVideoTexture && 3001 === a.map.encoding,
        clearcoat: D,
        clearcoatMap: D && !!a.clearcoatMap,
        clearcoatRoughnessMap: D && !!a.clearcoatRoughnessMap,
        clearcoatNormalMap: D && !!a.clearcoatNormalMap,
        iridescence: I,
        iridescenceMap: I && !!a.iridescenceMap,
        iridescenceThicknessMap: I && !!a.iridescenceThicknessMap,
        displacementMap: !!a.displacementMap,
        roughnessMap: !!a.roughnessMap,
        metalnessMap: !!a.metalnessMap,
        specularMap: !!a.specularMap,
        specularIntensityMap: !!a.specularIntensityMap,
        specularColorMap: !!a.specularColorMap,
        opaque: !1 === a.transparent && 1 === a.blending,
        alphaMap: !!a.alphaMap,
        alphaTest: P,
        gradientMap: !!a.gradientMap,
        sheen: a.sheen > 0,
        sheenColorMap: !!a.sheenColorMap,
        sheenRoughnessMap: !!a.sheenRoughnessMap,
        transmission: a.transmission > 0,
        transmissionMap: !!a.transmissionMap,
        thicknessMap: !!a.thicknessMap,
        combine: a.combine,
        vertexTangents: !!a.normalMap && !!_.attributes.tangent,
        vertexColors: a.vertexColors,
        vertexAlphas:
          !0 === a.vertexColors &&
          !!_.attributes.color &&
          4 === _.attributes.color.itemSize,
        vertexUvs: !!(
          a.map ||
          a.bumpMap ||
          a.normalMap ||
          a.specularMap ||
          a.alphaMap ||
          a.emissiveMap ||
          a.roughnessMap ||
          a.metalnessMap ||
          a.clearcoatMap ||
          a.clearcoatRoughnessMap ||
          a.clearcoatNormalMap ||
          a.iridescenceMap ||
          a.iridescenceThicknessMap ||
          a.displacementMap ||
          a.transmissionMap ||
          a.thicknessMap ||
          a.specularIntensityMap ||
          a.specularColorMap ||
          a.sheenColorMap ||
          a.sheenRoughnessMap
        ),
        uvsVertexOnly: !(
          a.map ||
          a.bumpMap ||
          a.normalMap ||
          a.specularMap ||
          a.alphaMap ||
          a.emissiveMap ||
          a.roughnessMap ||
          a.metalnessMap ||
          a.clearcoatNormalMap ||
          a.iridescenceMap ||
          a.iridescenceThicknessMap ||
          a.transmission > 0 ||
          a.transmissionMap ||
          a.thicknessMap ||
          a.specularIntensityMap ||
          a.specularColorMap ||
          a.sheen > 0 ||
          a.sheenColorMap ||
          a.sheenRoughnessMap ||
          !a.displacementMap
        ),
        fog: !!v,
        useFog: !0 === a.fog,
        fogExp2: v && v.isFogExp2,
        flatShading: !!a.flatShading,
        sizeAttenuation: a.sizeAttenuation,
        logarithmicDepthBuffer: u,
        skinning: !0 === g.isSkinnedMesh,
        morphTargets: void 0 !== _.morphAttributes.position,
        morphNormals: void 0 !== _.morphAttributes.normal,
        morphColors: void 0 !== _.morphAttributes.color,
        morphTargetsCount: w,
        morphTextureStride: L,
        numDirLights: o.directional.length,
        numPointLights: o.point.length,
        numSpotLights: o.spot.length,
        numRectAreaLights: o.rectArea.length,
        numHemiLights: o.hemi.length,
        numDirLightShadows: o.directionalShadowMap.length,
        numPointLightShadows: o.pointShadowMap.length,
        numSpotLightShadows: o.spotShadowMap.length,
        numClippingPlanes: s.numPlanes,
        numClipIntersection: s.numIntersection,
        dithering: a.dithering,
        shadowMapEnabled: e.shadowMap.enabled && c.length > 0,
        shadowMapType: e.shadowMap.type,
        toneMapping: a.toneMapped ? e.toneMapping : 0,
        physicallyCorrectLights: e.physicallyCorrectLights,
        premultipliedAlpha: a.premultipliedAlpha,
        doubleSided: 2 === a.side,
        flipSided: 1 === a.side,
        useDepthPacking: !!a.depthPacking,
        depthPacking: a.depthPacking || 0,
        index0AttributeName: a.index0AttributeName,
        extensionDerivatives: a.extensions && a.extensions.derivatives,
        extensionFragDepth: a.extensions && a.extensions.fragDepth,
        extensionDrawBuffers: a.extensions && a.extensions.drawBuffers,
        extensionShaderTextureLOD:
          a.extensions && a.extensions.shaderTextureLOD,
        rendererExtensionFragDepth: h || i.has("EXT_frag_depth"),
        rendererExtensionDrawBuffers: h || i.has("WEBGL_draw_buffers"),
        rendererExtensionShaderTextureLod: h || i.has("EXT_shader_texture_lod"),
        customProgramCacheKey: a.customProgramCacheKey(),
      };
    },
    getProgramCacheKey: function (t) {
      const n = [];
      if (
        (t.shaderID
          ? n.push(t.shaderID)
          : (n.push(t.customVertexShaderID), n.push(t.customFragmentShaderID)),
        void 0 !== t.defines)
      )
        for (const e in t.defines) n.push(e), n.push(t.defines[e]);
      return (
        !1 === t.isRawShaderMaterial &&
          (!(function (e, t) {
            e.push(t.precision),
              e.push(t.outputEncoding),
              e.push(t.envMapMode),
              e.push(t.envMapCubeUVHeight),
              e.push(t.combine),
              e.push(t.vertexUvs),
              e.push(t.fogExp2),
              e.push(t.sizeAttenuation),
              e.push(t.morphTargetsCount),
              e.push(t.morphAttributeCount),
              e.push(t.numDirLights),
              e.push(t.numPointLights),
              e.push(t.numSpotLights),
              e.push(t.numHemiLights),
              e.push(t.numRectAreaLights),
              e.push(t.numDirLightShadows),
              e.push(t.numPointLightShadows),
              e.push(t.numSpotLightShadows),
              e.push(t.shadowMapType),
              e.push(t.toneMapping),
              e.push(t.numClippingPlanes),
              e.push(t.numClipIntersection),
              e.push(t.depthPacking);
          })(n, t),
          (function (e, t) {
            o.disableAll(), t.isWebGL2 && o.enable(0);
            t.supportsVertexTextures && o.enable(1);
            t.instancing && o.enable(2);
            t.instancingColor && o.enable(3);
            t.map && o.enable(4);
            t.matcap && o.enable(5);
            t.envMap && o.enable(6);
            t.lightMap && o.enable(7);
            t.aoMap && o.enable(8);
            t.emissiveMap && o.enable(9);
            t.bumpMap && o.enable(10);
            t.normalMap && o.enable(11);
            t.objectSpaceNormalMap && o.enable(12);
            t.tangentSpaceNormalMap && o.enable(13);
            t.clearcoat && o.enable(14);
            t.clearcoatMap && o.enable(15);
            t.clearcoatRoughnessMap && o.enable(16);
            t.clearcoatNormalMap && o.enable(17);
            t.iridescence && o.enable(18);
            t.iridescenceMap && o.enable(19);
            t.iridescenceThicknessMap && o.enable(20);
            t.displacementMap && o.enable(21);
            t.specularMap && o.enable(22);
            t.roughnessMap && o.enable(23);
            t.metalnessMap && o.enable(24);
            t.gradientMap && o.enable(25);
            t.alphaMap && o.enable(26);
            t.alphaTest && o.enable(27);
            t.vertexColors && o.enable(28);
            t.vertexAlphas && o.enable(29);
            t.vertexUvs && o.enable(30);
            t.vertexTangents && o.enable(31);
            t.uvsVertexOnly && o.enable(32);
            t.fog && o.enable(33);
            e.push(o.mask), o.disableAll(), t.useFog && o.enable(0);
            t.flatShading && o.enable(1);
            t.logarithmicDepthBuffer && o.enable(2);
            t.skinning && o.enable(3);
            t.morphTargets && o.enable(4);
            t.morphNormals && o.enable(5);
            t.morphColors && o.enable(6);
            t.premultipliedAlpha && o.enable(7);
            t.shadowMapEnabled && o.enable(8);
            t.physicallyCorrectLights && o.enable(9);
            t.doubleSided && o.enable(10);
            t.flipSided && o.enable(11);
            t.useDepthPacking && o.enable(12);
            t.dithering && o.enable(13);
            t.specularIntensityMap && o.enable(14);
            t.specularColorMap && o.enable(15);
            t.transmission && o.enable(16);
            t.transmissionMap && o.enable(17);
            t.thicknessMap && o.enable(18);
            t.sheen && o.enable(19);
            t.sheenColorMap && o.enable(20);
            t.sheenRoughnessMap && o.enable(21);
            t.decodeVideoTexture && o.enable(22);
            t.opaque && o.enable(23);
            e.push(o.mask);
          })(n, t),
          n.push(e.outputEncoding)),
        n.push(t.customProgramCacheKey),
        n.join()
      );
    },
    getUniforms: function (e) {
      const t = f[e.type];
      let n;
      if (t) {
        const e = ln[t];
        n = Ht.clone(e.uniforms);
      } else n = e.uniforms;
      return n;
    },
    acquireProgram: function (t, n) {
      let i;
      for (let e = 0, t = c.length; e < t; e++) {
        const t = c[e];
        if (t.cacheKey === n) {
          (i = t), ++i.usedTimes;
          break;
        }
      }
      return void 0 === i && ((i = new sr(e, n, t, a)), c.push(i)), i;
    },
    releaseProgram: function (e) {
      if (0 == --e.usedTimes) {
        const t = c.indexOf(e);
        (c[t] = c[c.length - 1]), c.pop(), e.destroy();
      }
    },
    releaseShaderCache: function (e) {
      l.remove(e);
    },
    programs: c,
    dispose: function () {
      l.dispose();
    },
  };
}
function ur() {
  let e = new WeakMap();
  return {
    get: function (t) {
      let n = e.get(t);
      return void 0 === n && ((n = {}), e.set(t, n)), n;
    },
    remove: function (t) {
      e.delete(t);
    },
    update: function (t, n, i) {
      e.get(t)[n] = i;
    },
    dispose: function () {
      e = new WeakMap();
    },
  };
}
function dr(e, t) {
  return e.groupOrder !== t.groupOrder
    ? e.groupOrder - t.groupOrder
    : e.renderOrder !== t.renderOrder
    ? e.renderOrder - t.renderOrder
    : e.material.id !== t.material.id
    ? e.material.id - t.material.id
    : e.z !== t.z
    ? e.z - t.z
    : e.id - t.id;
}
function pr(e, t) {
  return e.groupOrder !== t.groupOrder
    ? e.groupOrder - t.groupOrder
    : e.renderOrder !== t.renderOrder
    ? e.renderOrder - t.renderOrder
    : e.z !== t.z
    ? t.z - e.z
    : e.id - t.id;
}
function fr() {
  const e = [];
  let t = 0;
  const n = [],
    i = [],
    r = [];
  function a(n, i, r, a, s, o) {
    let l = e[t];
    return (
      void 0 === l
        ? ((l = {
            id: n.id,
            object: n,
            geometry: i,
            material: r,
            groupOrder: a,
            renderOrder: n.renderOrder,
            z: s,
            group: o,
          }),
          (e[t] = l))
        : ((l.id = n.id),
          (l.object = n),
          (l.geometry = i),
          (l.material = r),
          (l.groupOrder = a),
          (l.renderOrder = n.renderOrder),
          (l.z = s),
          (l.group = o)),
      t++,
      l
    );
  }
  return {
    opaque: n,
    transmissive: i,
    transparent: r,
    init: function () {
      (t = 0), (n.length = 0), (i.length = 0), (r.length = 0);
    },
    push: function (e, t, s, o, l, c) {
      const h = a(e, t, s, o, l, c);
      s.transmission > 0
        ? i.push(h)
        : !0 === s.transparent
        ? r.push(h)
        : n.push(h);
    },
    unshift: function (e, t, s, o, l, c) {
      const h = a(e, t, s, o, l, c);
      s.transmission > 0
        ? i.unshift(h)
        : !0 === s.transparent
        ? r.unshift(h)
        : n.unshift(h);
    },
    finish: function () {
      for (let n = t, i = e.length; n < i; n++) {
        const t = e[n];
        if (null === t.id) break;
        (t.id = null),
          (t.object = null),
          (t.geometry = null),
          (t.material = null),
          (t.group = null);
      }
    },
    sort: function (e, t) {
      n.length > 1 && n.sort(e || dr),
        i.length > 1 && i.sort(t || pr),
        r.length > 1 && r.sort(t || pr);
    },
  };
}
function mr() {
  let e = new WeakMap();
  return {
    get: function (t, n) {
      let i;
      return (
        !1 === e.has(t)
          ? ((i = new fr()), e.set(t, [i]))
          : n >= e.get(t).length
          ? ((i = new fr()), e.get(t).push(i))
          : (i = e.get(t)[n]),
        i
      );
    },
    dispose: function () {
      e = new WeakMap();
    },
  };
}
function gr() {
  const e = {};
  return {
    get: function (t) {
      if (void 0 !== e[t.id]) return e[t.id];
      let n;
      switch (t.type) {
        case "DirectionalLight":
          n = { direction: new G(), color: new P() };
          break;
        case "SpotLight":
          n = {
            position: new G(),
            direction: new G(),
            color: new P(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          n = { position: new G(), color: new P(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          n = { direction: new G(), skyColor: new P(), groundColor: new P() };
          break;
        case "RectAreaLight":
          n = {
            color: new P(),
            position: new G(),
            halfWidth: new G(),
            halfHeight: new G(),
          };
      }
      return (e[t.id] = n), n;
    },
  };
}
let vr = 0;
function _r(e, t) {
  return (t.castShadow ? 1 : 0) - (e.castShadow ? 1 : 0);
}
function xr(e, t) {
  const n = new gr(),
    i = (function () {
      const e = {};
      return {
        get: function (t) {
          if (void 0 !== e[t.id]) return e[t.id];
          let n;
          switch (t.type) {
            case "DirectionalLight":
            case "SpotLight":
              n = {
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new v(),
              };
              break;
            case "PointLight":
              n = {
                shadowBias: 0,
                shadowNormalBias: 0,
                shadowRadius: 1,
                shadowMapSize: new v(),
                shadowCameraNear: 1,
                shadowCameraFar: 1e3,
              };
          }
          return (e[t.id] = n), n;
        },
      };
    })(),
    r = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotShadow: [],
      spotShadowMap: [],
      spotShadowMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
    };
  for (let e = 0; e < 9; e++) r.probe.push(new G());
  const a = new G(),
    s = new ye(),
    o = new ye();
  return {
    setup: function (a, s) {
      let o = 0,
        l = 0,
        c = 0;
      for (let e = 0; e < 9; e++) r.probe[e].set(0, 0, 0);
      let h = 0,
        u = 0,
        d = 0,
        p = 0,
        f = 0,
        m = 0,
        g = 0,
        v = 0;
      a.sort(_r);
      const _ = !0 !== s ? Math.PI : 1;
      for (let e = 0, t = a.length; e < t; e++) {
        const t = a[e],
          s = t.color,
          x = t.intensity,
          y = t.distance,
          M = t.shadow && t.shadow.map ? t.shadow.map.texture : null;
        if (t.isAmbientLight)
          (o += s.r * x * _), (l += s.g * x * _), (c += s.b * x * _);
        else if (t.isLightProbe)
          for (let e = 0; e < 9; e++)
            r.probe[e].addScaledVector(t.sh.coefficients[e], x);
        else if (t.isDirectionalLight) {
          const e = n.get(t);
          if (
            (e.color.copy(t.color).multiplyScalar(t.intensity * _),
            t.castShadow)
          ) {
            const e = t.shadow,
              n = i.get(t);
            (n.shadowBias = e.bias),
              (n.shadowNormalBias = e.normalBias),
              (n.shadowRadius = e.radius),
              (n.shadowMapSize = e.mapSize),
              (r.directionalShadow[h] = n),
              (r.directionalShadowMap[h] = M),
              (r.directionalShadowMatrix[h] = t.shadow.matrix),
              m++;
          }
          (r.directional[h] = e), h++;
        } else if (t.isSpotLight) {
          const e = n.get(t);
          if (
            (e.position.setFromMatrixPosition(t.matrixWorld),
            e.color.copy(s).multiplyScalar(x * _),
            (e.distance = y),
            (e.coneCos = Math.cos(t.angle)),
            (e.penumbraCos = Math.cos(t.angle * (1 - t.penumbra))),
            (e.decay = t.decay),
            t.castShadow)
          ) {
            const e = t.shadow,
              n = i.get(t);
            (n.shadowBias = e.bias),
              (n.shadowNormalBias = e.normalBias),
              (n.shadowRadius = e.radius),
              (n.shadowMapSize = e.mapSize),
              (r.spotShadow[d] = n),
              (r.spotShadowMap[d] = M),
              (r.spotShadowMatrix[d] = t.shadow.matrix),
              v++;
          }
          (r.spot[d] = e), d++;
        } else if (t.isRectAreaLight) {
          const e = n.get(t);
          e.color.copy(s).multiplyScalar(x),
            e.halfWidth.set(0.5 * t.width, 0, 0),
            e.halfHeight.set(0, 0.5 * t.height, 0),
            (r.rectArea[p] = e),
            p++;
        } else if (t.isPointLight) {
          const e = n.get(t);
          if (
            (e.color.copy(t.color).multiplyScalar(t.intensity * _),
            (e.distance = t.distance),
            (e.decay = t.decay),
            t.castShadow)
          ) {
            const e = t.shadow,
              n = i.get(t);
            (n.shadowBias = e.bias),
              (n.shadowNormalBias = e.normalBias),
              (n.shadowRadius = e.radius),
              (n.shadowMapSize = e.mapSize),
              (n.shadowCameraNear = e.camera.near),
              (n.shadowCameraFar = e.camera.far),
              (r.pointShadow[u] = n),
              (r.pointShadowMap[u] = M),
              (r.pointShadowMatrix[u] = t.shadow.matrix),
              g++;
          }
          (r.point[u] = e), u++;
        } else if (t.isHemisphereLight) {
          const e = n.get(t);
          e.skyColor.copy(t.color).multiplyScalar(x * _),
            e.groundColor.copy(t.groundColor).multiplyScalar(x * _),
            (r.hemi[f] = e),
            f++;
        }
      }
      p > 0 &&
        (t.isWebGL2 || !0 === e.has("OES_texture_float_linear")
          ? ((r.rectAreaLTC1 = on.LTC_FLOAT_1),
            (r.rectAreaLTC2 = on.LTC_FLOAT_2))
          : !0 === e.has("OES_texture_half_float_linear")
          ? ((r.rectAreaLTC1 = on.LTC_HALF_1), (r.rectAreaLTC2 = on.LTC_HALF_2))
          : console.error(
              "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
            )),
        (r.ambient[0] = o),
        (r.ambient[1] = l),
        (r.ambient[2] = c);
      const x = r.hash;
      (x.directionalLength === h &&
        x.pointLength === u &&
        x.spotLength === d &&
        x.rectAreaLength === p &&
        x.hemiLength === f &&
        x.numDirectionalShadows === m &&
        x.numPointShadows === g &&
        x.numSpotShadows === v) ||
        ((r.directional.length = h),
        (r.spot.length = d),
        (r.rectArea.length = p),
        (r.point.length = u),
        (r.hemi.length = f),
        (r.directionalShadow.length = m),
        (r.directionalShadowMap.length = m),
        (r.pointShadow.length = g),
        (r.pointShadowMap.length = g),
        (r.spotShadow.length = v),
        (r.spotShadowMap.length = v),
        (r.directionalShadowMatrix.length = m),
        (r.pointShadowMatrix.length = g),
        (r.spotShadowMatrix.length = v),
        (x.directionalLength = h),
        (x.pointLength = u),
        (x.spotLength = d),
        (x.rectAreaLength = p),
        (x.hemiLength = f),
        (x.numDirectionalShadows = m),
        (x.numPointShadows = g),
        (x.numSpotShadows = v),
        (r.version = vr++));
    },
    setupView: function (e, t) {
      let n = 0,
        i = 0,
        l = 0,
        c = 0,
        h = 0;
      const u = t.matrixWorldInverse;
      for (let t = 0, d = e.length; t < d; t++) {
        const d = e[t];
        if (d.isDirectionalLight) {
          const e = r.directional[n];
          e.direction.setFromMatrixPosition(d.matrixWorld),
            a.setFromMatrixPosition(d.target.matrixWorld),
            e.direction.sub(a),
            e.direction.transformDirection(u),
            n++;
        } else if (d.isSpotLight) {
          const e = r.spot[l];
          e.position.setFromMatrixPosition(d.matrixWorld),
            e.position.applyMatrix4(u),
            e.direction.setFromMatrixPosition(d.matrixWorld),
            a.setFromMatrixPosition(d.target.matrixWorld),
            e.direction.sub(a),
            e.direction.transformDirection(u),
            l++;
        } else if (d.isRectAreaLight) {
          const e = r.rectArea[c];
          e.position.setFromMatrixPosition(d.matrixWorld),
            e.position.applyMatrix4(u),
            o.identity(),
            s.copy(d.matrixWorld),
            s.premultiply(u),
            o.extractRotation(s),
            e.halfWidth.set(0.5 * d.width, 0, 0),
            e.halfHeight.set(0, 0.5 * d.height, 0),
            e.halfWidth.applyMatrix4(o),
            e.halfHeight.applyMatrix4(o),
            c++;
        } else if (d.isPointLight) {
          const e = r.point[i];
          e.position.setFromMatrixPosition(d.matrixWorld),
            e.position.applyMatrix4(u),
            i++;
        } else if (d.isHemisphereLight) {
          const e = r.hemi[h];
          e.direction.setFromMatrixPosition(d.matrixWorld),
            e.direction.transformDirection(u),
            h++;
        }
      }
    },
    state: r,
  };
}
function yr(e, t) {
  const n = new xr(e, t),
    i = [],
    r = [];
  return {
    init: function () {
      (i.length = 0), (r.length = 0);
    },
    state: { lightsArray: i, shadowsArray: r, lights: n },
    setupLights: function (e) {
      n.setup(i, e);
    },
    setupLightsView: function (e) {
      n.setupView(i, e);
    },
    pushLight: function (e) {
      i.push(e);
    },
    pushShadow: function (e) {
      r.push(e);
    },
  };
}
function Mr(e, t) {
  let n = new WeakMap();
  return {
    get: function (i, r = 0) {
      let a;
      return (
        !1 === n.has(i)
          ? ((a = new yr(e, t)), n.set(i, [a]))
          : r >= n.get(i).length
          ? ((a = new yr(e, t)), n.get(i).push(a))
          : (a = n.get(i)[r]),
        a
      );
    },
    dispose: function () {
      n = new WeakMap();
    },
  };
}
class br extends rt {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = 3200),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class Sr extends rt {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.referencePosition = new G()),
      (this.nearDistance = 1),
      (this.farDistance = 1e3),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.referencePosition.copy(e.referencePosition),
      (this.nearDistance = e.nearDistance),
      (this.farDistance = e.farDistance),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
function wr(e, t, n) {
  let i = new tn();
  const r = new v(),
    a = new v(),
    s = new F(),
    o = new br({ depthPacking: 3201 }),
    l = new Sr(),
    c = {},
    h = n.maxTextureSize,
    u = { 0: 1, 1: 0, 2: 2 },
    d = new Gt({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new v() },
        radius: { value: 4 },
      },
      vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
      fragmentShader:
        "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}",
    }),
    p = d.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const f = new xt();
  f.setAttribute(
    "position",
    new lt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const m = new Ut(f, d),
    g = this;
  function _(n, i) {
    const a = t.update(m);
    d.defines.VSM_SAMPLES !== n.blurSamples &&
      ((d.defines.VSM_SAMPLES = n.blurSamples),
      (p.defines.VSM_SAMPLES = n.blurSamples),
      (d.needsUpdate = !0),
      (p.needsUpdate = !0)),
      null === n.mapPass && (n.mapPass = new B(r.x, r.y)),
      (d.uniforms.shadow_pass.value = n.map.texture),
      (d.uniforms.resolution.value = n.mapSize),
      (d.uniforms.radius.value = n.radius),
      e.setRenderTarget(n.mapPass),
      e.clear(),
      e.renderBufferDirect(i, null, a, d, m, null),
      (p.uniforms.shadow_pass.value = n.mapPass.texture),
      (p.uniforms.resolution.value = n.mapSize),
      (p.uniforms.radius.value = n.radius),
      e.setRenderTarget(n.map),
      e.clear(),
      e.renderBufferDirect(i, null, a, p, m, null);
  }
  function x(t, n, i, r, a, s) {
    let h = null;
    const d =
      !0 === i.isPointLight ? t.customDistanceMaterial : t.customDepthMaterial;
    if (
      ((h = void 0 !== d ? d : !0 === i.isPointLight ? l : o),
      (e.localClippingEnabled &&
        !0 === n.clipShadows &&
        Array.isArray(n.clippingPlanes) &&
        0 !== n.clippingPlanes.length) ||
        (n.displacementMap && 0 !== n.displacementScale) ||
        (n.alphaMap && n.alphaTest > 0))
    ) {
      const e = h.uuid,
        t = n.uuid;
      let i = c[e];
      void 0 === i && ((i = {}), (c[e] = i));
      let r = i[t];
      void 0 === r && ((r = h.clone()), (i[t] = r)), (h = r);
    }
    return (
      (h.visible = n.visible),
      (h.wireframe = n.wireframe),
      (h.side =
        3 === s
          ? null !== n.shadowSide
            ? n.shadowSide
            : n.side
          : null !== n.shadowSide
          ? n.shadowSide
          : u[n.side]),
      (h.alphaMap = n.alphaMap),
      (h.alphaTest = n.alphaTest),
      (h.clipShadows = n.clipShadows),
      (h.clippingPlanes = n.clippingPlanes),
      (h.clipIntersection = n.clipIntersection),
      (h.displacementMap = n.displacementMap),
      (h.displacementScale = n.displacementScale),
      (h.displacementBias = n.displacementBias),
      (h.wireframeLinewidth = n.wireframeLinewidth),
      (h.linewidth = n.linewidth),
      !0 === i.isPointLight &&
        !0 === h.isMeshDistanceMaterial &&
        (h.referencePosition.setFromMatrixPosition(i.matrixWorld),
        (h.nearDistance = r),
        (h.farDistance = a)),
      h
    );
  }
  function y(n, r, a, s, o) {
    if (!1 === n.visible) return;
    if (
      n.layers.test(r.layers) &&
      (n.isMesh || n.isLine || n.isPoints) &&
      (n.castShadow || (n.receiveShadow && 3 === o)) &&
      (!n.frustumCulled || i.intersectsObject(n))
    ) {
      n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
      const i = t.update(n),
        r = n.material;
      if (Array.isArray(r)) {
        const t = i.groups;
        for (let l = 0, c = t.length; l < c; l++) {
          const c = t[l],
            h = r[c.materialIndex];
          if (h && h.visible) {
            const t = x(n, h, s, a.near, a.far, o);
            e.renderBufferDirect(a, null, i, t, n, c);
          }
        }
      } else if (r.visible) {
        const t = x(n, r, s, a.near, a.far, o);
        e.renderBufferDirect(a, null, i, t, n, null);
      }
    }
    const l = n.children;
    for (let e = 0, t = l.length; e < t; e++) y(l[e], r, a, s, o);
  }
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = 1),
    (this.render = function (t, n, o) {
      if (!1 === g.enabled) return;
      if (!1 === g.autoUpdate && !1 === g.needsUpdate) return;
      if (0 === t.length) return;
      const l = e.getRenderTarget(),
        c = e.getActiveCubeFace(),
        u = e.getActiveMipmapLevel(),
        d = e.state;
      d.setBlending(0),
        d.buffers.color.setClear(1, 1, 1, 1),
        d.buffers.depth.setTest(!0),
        d.setScissorTest(!1);
      for (let l = 0, c = t.length; l < c; l++) {
        const c = t[l],
          u = c.shadow;
        if (void 0 === u) {
          console.warn("THREE.WebGLShadowMap:", c, "has no shadow.");
          continue;
        }
        if (!1 === u.autoUpdate && !1 === u.needsUpdate) continue;
        r.copy(u.mapSize);
        const p = u.getFrameExtents();
        if (
          (r.multiply(p),
          a.copy(u.mapSize),
          (r.x > h || r.y > h) &&
            (r.x > h &&
              ((a.x = Math.floor(h / p.x)),
              (r.x = a.x * p.x),
              (u.mapSize.x = a.x)),
            r.y > h &&
              ((a.y = Math.floor(h / p.y)),
              (r.y = a.y * p.y),
              (u.mapSize.y = a.y))),
          null === u.map)
        ) {
          const e = 3 !== this.type ? { minFilter: 1003, magFilter: 1003 } : {};
          (u.map = new B(r.x, r.y, e)),
            (u.map.texture.name = c.name + ".shadowMap"),
            u.camera.updateProjectionMatrix();
        }
        e.setRenderTarget(u.map), e.clear();
        const f = u.getViewportCount();
        for (let e = 0; e < f; e++) {
          const t = u.getViewport(e);
          s.set(a.x * t.x, a.y * t.y, a.x * t.z, a.y * t.w),
            d.viewport(s),
            u.updateMatrices(c, e),
            (i = u.getFrustum()),
            y(n, o, u.camera, c, this.type);
        }
        !0 !== u.isPointLightShadow && 3 === this.type && _(u, o),
          (u.needsUpdate = !1);
      }
      (g.needsUpdate = !1), e.setRenderTarget(l, c, u);
    });
}
function Tr(e, t, n) {
  const i = n.isWebGL2;
  const r = new (function () {
      let t = !1;
      const n = new F();
      let i = null;
      const r = new F(0, 0, 0, 0);
      return {
        setMask: function (n) {
          i === n || t || (e.colorMask(n, n, n, n), (i = n));
        },
        setLocked: function (e) {
          t = e;
        },
        setClear: function (t, i, a, s, o) {
          !0 === o && ((t *= s), (i *= s), (a *= s)),
            n.set(t, i, a, s),
            !1 === r.equals(n) && (e.clearColor(t, i, a, s), r.copy(n));
        },
        reset: function () {
          (t = !1), (i = null), r.set(-1, 0, 0, 0);
        },
      };
    })(),
    a = new (function () {
      let t = !1,
        n = null,
        i = null,
        r = null;
      return {
        setTest: function (e) {
          e ? B(2929) : k(2929);
        },
        setMask: function (i) {
          n === i || t || (e.depthMask(i), (n = i));
        },
        setFunc: function (t) {
          if (i !== t) {
            if (t)
              switch (t) {
                case 0:
                  e.depthFunc(512);
                  break;
                case 1:
                  e.depthFunc(519);
                  break;
                case 2:
                  e.depthFunc(513);
                  break;
                case 3:
                default:
                  e.depthFunc(515);
                  break;
                case 4:
                  e.depthFunc(514);
                  break;
                case 5:
                  e.depthFunc(518);
                  break;
                case 6:
                  e.depthFunc(516);
                  break;
                case 7:
                  e.depthFunc(517);
              }
            else e.depthFunc(515);
            i = t;
          }
        },
        setLocked: function (e) {
          t = e;
        },
        setClear: function (t) {
          r !== t && (e.clearDepth(t), (r = t));
        },
        reset: function () {
          (t = !1), (n = null), (i = null), (r = null);
        },
      };
    })(),
    s = new (function () {
      let t = !1,
        n = null,
        i = null,
        r = null,
        a = null,
        s = null,
        o = null,
        l = null,
        c = null;
      return {
        setTest: function (e) {
          t || (e ? B(2960) : k(2960));
        },
        setMask: function (i) {
          n === i || t || (e.stencilMask(i), (n = i));
        },
        setFunc: function (t, n, s) {
          (i === t && r === n && a === s) ||
            (e.stencilFunc(t, n, s), (i = t), (r = n), (a = s));
        },
        setOp: function (t, n, i) {
          (s === t && o === n && l === i) ||
            (e.stencilOp(t, n, i), (s = t), (o = n), (l = i));
        },
        setLocked: function (e) {
          t = e;
        },
        setClear: function (t) {
          c !== t && (e.clearStencil(t), (c = t));
        },
        reset: function () {
          (t = !1),
            (n = null),
            (i = null),
            (r = null),
            (a = null),
            (s = null),
            (o = null),
            (l = null),
            (c = null);
        },
      };
    })();
  let o = {},
    l = {},
    c = new WeakMap(),
    h = [],
    u = null,
    d = !1,
    p = null,
    f = null,
    m = null,
    g = null,
    v = null,
    _ = null,
    x = null,
    y = !1,
    M = null,
    b = null,
    S = null,
    w = null,
    T = null;
  const E = e.getParameter(35661);
  let A = !1,
    C = 0;
  const L = e.getParameter(7938);
  -1 !== L.indexOf("WebGL")
    ? ((C = parseFloat(/^WebGL (\d)/.exec(L)[1])), (A = C >= 1))
    : -1 !== L.indexOf("OpenGL ES") &&
      ((C = parseFloat(/^OpenGL ES (\d)/.exec(L)[1])), (A = C >= 2));
  let R = null,
    P = {};
  const D = e.getParameter(3088),
    I = e.getParameter(2978),
    N = new F().fromArray(D),
    O = new F().fromArray(I);
  function z(t, n, i) {
    const r = new Uint8Array(4),
      a = e.createTexture();
    e.bindTexture(t, a),
      e.texParameteri(t, 10241, 9728),
      e.texParameteri(t, 10240, 9728);
    for (let t = 0; t < i; t++)
      e.texImage2D(n + t, 0, 6408, 1, 1, 0, 6408, 5121, r);
    return a;
  }
  const U = {};
  function B(t) {
    !0 !== o[t] && (e.enable(t), (o[t] = !0));
  }
  function k(t) {
    !1 !== o[t] && (e.disable(t), (o[t] = !1));
  }
  (U[3553] = z(3553, 3553, 1)),
    (U[34067] = z(34067, 34069, 6)),
    r.setClear(0, 0, 0, 1),
    a.setClear(1),
    s.setClear(0),
    B(2929),
    a.setFunc(3),
    W(!1),
    j(1),
    B(2884),
    G(0);
  const V = { 100: 32774, 101: 32778, 102: 32779 };
  if (i) (V[103] = 32775), (V[104] = 32776);
  else {
    const e = t.get("EXT_blend_minmax");
    null !== e && ((V[103] = e.MIN_EXT), (V[104] = e.MAX_EXT));
  }
  const H = {
    200: 0,
    201: 1,
    202: 768,
    204: 770,
    210: 776,
    208: 774,
    206: 772,
    203: 769,
    205: 771,
    209: 775,
    207: 773,
  };
  function G(t, n, i, r, a, s, o, l) {
    if (0 !== t) {
      if ((!1 === d && (B(3042), (d = !0)), 5 === t))
        (a = a || n),
          (s = s || i),
          (o = o || r),
          (n === f && a === v) ||
            (e.blendEquationSeparate(V[n], V[a]), (f = n), (v = a)),
          (i === m && r === g && s === _ && o === x) ||
            (e.blendFuncSeparate(H[i], H[r], H[s], H[o]),
            (m = i),
            (g = r),
            (_ = s),
            (x = o)),
          (p = t),
          (y = null);
      else if (t !== p || l !== y) {
        if (
          ((100 === f && 100 === v) ||
            (e.blendEquation(32774), (f = 100), (v = 100)),
          l)
        )
          switch (t) {
            case 1:
              e.blendFuncSeparate(1, 771, 1, 771);
              break;
            case 2:
              e.blendFunc(1, 1);
              break;
            case 3:
              e.blendFuncSeparate(0, 769, 0, 1);
              break;
            case 4:
              e.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", t);
          }
        else
          switch (t) {
            case 1:
              e.blendFuncSeparate(770, 771, 1, 771);
              break;
            case 2:
              e.blendFunc(770, 1);
              break;
            case 3:
              e.blendFuncSeparate(0, 769, 0, 1);
              break;
            case 4:
              e.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", t);
          }
        (m = null), (g = null), (_ = null), (x = null), (p = t), (y = l);
      }
    } else !0 === d && (k(3042), (d = !1));
  }
  function W(t) {
    M !== t && (t ? e.frontFace(2304) : e.frontFace(2305), (M = t));
  }
  function j(t) {
    0 !== t
      ? (B(2884),
        t !== b &&
          (1 === t
            ? e.cullFace(1029)
            : 2 === t
            ? e.cullFace(1028)
            : e.cullFace(1032)))
      : k(2884),
      (b = t);
  }
  function q(t, n, i) {
    t
      ? (B(32823),
        (w === n && T === i) || (e.polygonOffset(n, i), (w = n), (T = i)))
      : k(32823);
  }
  function X(t) {
    void 0 === t && (t = 33984 + E - 1),
      R !== t && (e.activeTexture(t), (R = t));
  }
  return {
    buffers: { color: r, depth: a, stencil: s },
    enable: B,
    disable: k,
    bindFramebuffer: function (t, n) {
      return (
        l[t] !== n &&
        (e.bindFramebuffer(t, n),
        (l[t] = n),
        i && (36009 === t && (l[36160] = n), 36160 === t && (l[36009] = n)),
        !0)
      );
    },
    drawBuffers: function (i, r) {
      let a = h,
        s = !1;
      if (i)
        if (
          ((a = c.get(r)),
          void 0 === a && ((a = []), c.set(r, a)),
          i.isWebGLMultipleRenderTargets)
        ) {
          const e = i.texture;
          if (a.length !== e.length || 36064 !== a[0]) {
            for (let t = 0, n = e.length; t < n; t++) a[t] = 36064 + t;
            (a.length = e.length), (s = !0);
          }
        } else 36064 !== a[0] && ((a[0] = 36064), (s = !0));
      else 1029 !== a[0] && ((a[0] = 1029), (s = !0));
      s &&
        (n.isWebGL2
          ? e.drawBuffers(a)
          : t.get("WEBGL_draw_buffers").drawBuffersWEBGL(a));
    },
    useProgram: function (t) {
      return u !== t && (e.useProgram(t), (u = t), !0);
    },
    setBlending: G,
    setMaterial: function (e, t) {
      2 === e.side ? k(2884) : B(2884);
      let n = 1 === e.side;
      t && (n = !n),
        W(n),
        1 === e.blending && !1 === e.transparent
          ? G(0)
          : G(
              e.blending,
              e.blendEquation,
              e.blendSrc,
              e.blendDst,
              e.blendEquationAlpha,
              e.blendSrcAlpha,
              e.blendDstAlpha,
              e.premultipliedAlpha
            ),
        a.setFunc(e.depthFunc),
        a.setTest(e.depthTest),
        a.setMask(e.depthWrite),
        r.setMask(e.colorWrite);
      const i = e.stencilWrite;
      s.setTest(i),
        i &&
          (s.setMask(e.stencilWriteMask),
          s.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask),
          s.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)),
        q(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits),
        !0 === e.alphaToCoverage ? B(32926) : k(32926);
    },
    setFlipSided: W,
    setCullFace: j,
    setLineWidth: function (t) {
      t !== S && (A && e.lineWidth(t), (S = t));
    },
    setPolygonOffset: q,
    setScissorTest: function (e) {
      e ? B(3089) : k(3089);
    },
    activeTexture: X,
    bindTexture: function (t, n) {
      null === R && X();
      let i = P[R];
      void 0 === i && ((i = { type: void 0, texture: void 0 }), (P[R] = i)),
        (i.type === t && i.texture === n) ||
          (e.bindTexture(t, n || U[t]), (i.type = t), (i.texture = n));
    },
    unbindTexture: function () {
      const t = P[R];
      void 0 !== t &&
        void 0 !== t.type &&
        (e.bindTexture(t.type, null), (t.type = void 0), (t.texture = void 0));
    },
    compressedTexImage2D: function () {
      try {
        e.compressedTexImage2D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    texImage2D: function () {
      try {
        e.texImage2D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    texImage3D: function () {
      try {
        e.texImage3D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    texStorage2D: function () {
      try {
        e.texStorage2D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    texStorage3D: function () {
      try {
        e.texStorage3D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    texSubImage2D: function () {
      try {
        e.texSubImage2D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    texSubImage3D: function () {
      try {
        e.texSubImage3D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    compressedTexSubImage2D: function () {
      try {
        e.compressedTexSubImage2D.apply(e, arguments);
      } catch (e) {
        console.error("THREE.WebGLState:", e);
      }
    },
    scissor: function (t) {
      !1 === N.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), N.copy(t));
    },
    viewport: function (t) {
      !1 === O.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), O.copy(t));
    },
    reset: function () {
      e.disable(3042),
        e.disable(2884),
        e.disable(2929),
        e.disable(32823),
        e.disable(3089),
        e.disable(2960),
        e.disable(32926),
        e.blendEquation(32774),
        e.blendFunc(1, 0),
        e.blendFuncSeparate(1, 0, 1, 0),
        e.colorMask(!0, !0, !0, !0),
        e.clearColor(0, 0, 0, 0),
        e.depthMask(!0),
        e.depthFunc(513),
        e.clearDepth(1),
        e.stencilMask(4294967295),
        e.stencilFunc(519, 0, 4294967295),
        e.stencilOp(7680, 7680, 7680),
        e.clearStencil(0),
        e.cullFace(1029),
        e.frontFace(2305),
        e.polygonOffset(0, 0),
        e.activeTexture(33984),
        e.bindFramebuffer(36160, null),
        !0 === i &&
          (e.bindFramebuffer(36009, null), e.bindFramebuffer(36008, null)),
        e.useProgram(null),
        e.lineWidth(1),
        e.scissor(0, 0, e.canvas.width, e.canvas.height),
        e.viewport(0, 0, e.canvas.width, e.canvas.height),
        (o = {}),
        (R = null),
        (P = {}),
        (l = {}),
        (c = new WeakMap()),
        (h = []),
        (u = null),
        (d = !1),
        (p = null),
        (f = null),
        (m = null),
        (g = null),
        (v = null),
        (_ = null),
        (x = null),
        (y = !1),
        (M = null),
        (b = null),
        (S = null),
        (w = null),
        (T = null),
        N.set(0, 0, e.canvas.width, e.canvas.height),
        O.set(0, 0, e.canvas.width, e.canvas.height),
        r.reset(),
        a.reset(),
        s.reset();
    },
  };
}
function Er(e, t, n, i, r, a, s) {
  const o = r.isWebGL2,
    l = r.maxTextures,
    c = r.maxCubemapSize,
    h = r.maxTextureSize,
    u = r.maxSamples,
    d = t.has("WEBGL_multisampled_render_to_texture")
      ? t.get("WEBGL_multisampled_render_to_texture")
      : null,
    p = /OculusBrowser/g.test(navigator.userAgent),
    f = new WeakMap();
  let v;
  const _ = new WeakMap();
  let x = !1;
  try {
    x =
      "undefined" != typeof OffscreenCanvas &&
      null !== new OffscreenCanvas(1, 1).getContext("2d");
  } catch (e) {}
  function M(e, t) {
    return x ? new OffscreenCanvas(e, t) : y("canvas");
  }
  function b(e, t, n, i) {
    let r = 1;
    if (
      ((e.width > i || e.height > i) && (r = i / Math.max(e.width, e.height)),
      r < 1 || !0 === t)
    ) {
      if (
        ("undefined" != typeof HTMLImageElement &&
          e instanceof HTMLImageElement) ||
        ("undefined" != typeof HTMLCanvasElement &&
          e instanceof HTMLCanvasElement) ||
        ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap)
      ) {
        const i = t ? g : Math.floor,
          a = i(r * e.width),
          s = i(r * e.height);
        void 0 === v && (v = M(a, s));
        const o = n ? M(a, s) : v;
        (o.width = a), (o.height = s);
        return (
          o.getContext("2d").drawImage(e, 0, 0, a, s),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              e.width +
              "x" +
              e.height +
              ") to (" +
              a +
              "x" +
              s +
              ")."
          ),
          o
        );
      }
      return (
        "data" in e &&
          console.warn(
            "THREE.WebGLRenderer: Image in DataTexture is too big (" +
              e.width +
              "x" +
              e.height +
              ")."
          ),
        e
      );
    }
    return e;
  }
  function S(e) {
    return m(e.width) && m(e.height);
  }
  function w(e, t) {
    return (
      e.generateMipmaps && t && 1003 !== e.minFilter && 1006 !== e.minFilter
    );
  }
  function T(t) {
    e.generateMipmap(t);
  }
  function E(n, i, r, a, s = !1) {
    if (!1 === o) return i;
    if (null !== n) {
      if (void 0 !== e[n]) return e[n];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          n +
          "'"
      );
    }
    let l = i;
    return (
      6403 === i &&
        (5126 === r && (l = 33326),
        5131 === r && (l = 33325),
        5121 === r && (l = 33321)),
      33319 === i &&
        (5126 === r && (l = 33328),
        5131 === r && (l = 33327),
        5121 === r && (l = 33323)),
      6408 === i &&
        (5126 === r && (l = 34836),
        5131 === r && (l = 34842),
        5121 === r && (l = 3001 === a && !1 === s ? 35907 : 32856),
        32819 === r && (l = 32854),
        32820 === r && (l = 32855)),
      (33325 !== l &&
        33326 !== l &&
        33327 !== l &&
        33328 !== l &&
        34842 !== l &&
        34836 !== l) ||
        t.get("EXT_color_buffer_float"),
      l
    );
  }
  function A(e, t, n) {
    return !0 === w(e, n) ||
      (e.isFramebufferTexture && 1003 !== e.minFilter && 1006 !== e.minFilter)
      ? Math.log2(Math.max(t.width, t.height)) + 1
      : void 0 !== e.mipmaps && e.mipmaps.length > 0
      ? e.mipmaps.length
      : e.isCompressedTexture && Array.isArray(e.image)
      ? t.mipmaps.length
      : 1;
  }
  function C(e) {
    return 1003 === e || 1004 === e || 1005 === e ? 9728 : 9729;
  }
  function L(e) {
    const t = e.target;
    t.removeEventListener("dispose", L),
      (function (e) {
        const t = i.get(e);
        if (void 0 === t.__webglInit) return;
        const n = e.source,
          r = _.get(n);
        if (r) {
          const i = r[t.__cacheKey];
          i.usedTimes--,
            0 === i.usedTimes && P(e),
            0 === Object.keys(r).length && _.delete(n);
        }
        i.remove(e);
      })(t),
      t.isVideoTexture && f.delete(t);
  }
  function R(t) {
    const n = t.target;
    n.removeEventListener("dispose", R),
      (function (t) {
        const n = t.texture,
          r = i.get(t),
          a = i.get(n);
        void 0 !== a.__webglTexture &&
          (e.deleteTexture(a.__webglTexture), s.memory.textures--);
        t.depthTexture && t.depthTexture.dispose();
        if (t.isWebGLCubeRenderTarget)
          for (let t = 0; t < 6; t++)
            e.deleteFramebuffer(r.__webglFramebuffer[t]),
              r.__webglDepthbuffer &&
                e.deleteRenderbuffer(r.__webglDepthbuffer[t]);
        else {
          if (
            (e.deleteFramebuffer(r.__webglFramebuffer),
            r.__webglDepthbuffer && e.deleteRenderbuffer(r.__webglDepthbuffer),
            r.__webglMultisampledFramebuffer &&
              e.deleteFramebuffer(r.__webglMultisampledFramebuffer),
            r.__webglColorRenderbuffer)
          )
            for (let t = 0; t < r.__webglColorRenderbuffer.length; t++)
              r.__webglColorRenderbuffer[t] &&
                e.deleteRenderbuffer(r.__webglColorRenderbuffer[t]);
          r.__webglDepthRenderbuffer &&
            e.deleteRenderbuffer(r.__webglDepthRenderbuffer);
        }
        if (t.isWebGLMultipleRenderTargets)
          for (let t = 0, r = n.length; t < r; t++) {
            const r = i.get(n[t]);
            r.__webglTexture &&
              (e.deleteTexture(r.__webglTexture), s.memory.textures--),
              i.remove(n[t]);
          }
        i.remove(n), i.remove(t);
      })(n);
  }
  function P(t) {
    const n = i.get(t);
    e.deleteTexture(n.__webglTexture);
    const r = t.source;
    delete _.get(r)[n.__cacheKey], s.memory.textures--;
  }
  let D = 0;
  function N(e, t) {
    const r = i.get(e);
    if (
      (e.isVideoTexture &&
        (function (e) {
          const t = s.render.frame;
          f.get(e) !== t && (f.set(e, t), e.update());
        })(e),
      !1 === e.isRenderTargetTexture &&
        e.version > 0 &&
        r.__version !== e.version)
    ) {
      const n = e.image;
      if (null === n)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found."
        );
      else {
        if (!1 !== n.complete) return void B(r, e, t);
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      }
    }
    n.activeTexture(33984 + t), n.bindTexture(3553, r.__webglTexture);
  }
  const O = { 1e3: 10497, 1001: 33071, 1002: 33648 },
    z = {
      1003: 9728,
      1004: 9984,
      1005: 9986,
      1006: 9729,
      1007: 9985,
      1008: 9987,
    };
  function U(n, a, s) {
    if (
      (s
        ? (e.texParameteri(n, 10242, O[a.wrapS]),
          e.texParameteri(n, 10243, O[a.wrapT]),
          (32879 !== n && 35866 !== n) || e.texParameteri(n, 32882, O[a.wrapR]),
          e.texParameteri(n, 10240, z[a.magFilter]),
          e.texParameteri(n, 10241, z[a.minFilter]))
        : (e.texParameteri(n, 10242, 33071),
          e.texParameteri(n, 10243, 33071),
          (32879 !== n && 35866 !== n) || e.texParameteri(n, 32882, 33071),
          (1001 === a.wrapS && 1001 === a.wrapT) ||
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
            ),
          e.texParameteri(n, 10240, C(a.magFilter)),
          e.texParameteri(n, 10241, C(a.minFilter)),
          1003 !== a.minFilter &&
            1006 !== a.minFilter &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
            )),
      !0 === t.has("EXT_texture_filter_anisotropic"))
    ) {
      const s = t.get("EXT_texture_filter_anisotropic");
      if (1015 === a.type && !1 === t.has("OES_texture_float_linear")) return;
      if (
        !1 === o &&
        1016 === a.type &&
        !1 === t.has("OES_texture_half_float_linear")
      )
        return;
      (a.anisotropy > 1 || i.get(a).__currentAnisotropy) &&
        (e.texParameterf(
          n,
          s.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(a.anisotropy, r.getMaxAnisotropy())
        ),
        (i.get(a).__currentAnisotropy = a.anisotropy));
    }
  }
  function F(t, n) {
    let i = !1;
    void 0 === t.__webglInit &&
      ((t.__webglInit = !0), n.addEventListener("dispose", L));
    const r = n.source;
    let a = _.get(r);
    void 0 === a && ((a = {}), _.set(r, a));
    const o = (function (e) {
      const t = [];
      return (
        t.push(e.wrapS),
        t.push(e.wrapT),
        t.push(e.magFilter),
        t.push(e.minFilter),
        t.push(e.anisotropy),
        t.push(e.internalFormat),
        t.push(e.format),
        t.push(e.type),
        t.push(e.generateMipmaps),
        t.push(e.premultiplyAlpha),
        t.push(e.flipY),
        t.push(e.unpackAlignment),
        t.push(e.encoding),
        t.join()
      );
    })(n);
    if (o !== t.__cacheKey) {
      void 0 === a[o] &&
        ((a[o] = { texture: e.createTexture(), usedTimes: 0 }),
        s.memory.textures++,
        (i = !0)),
        a[o].usedTimes++;
      const r = a[t.__cacheKey];
      void 0 !== r && (a[t.__cacheKey].usedTimes--, 0 === r.usedTimes && P(n)),
        (t.__cacheKey = o),
        (t.__webglTexture = a[o].texture);
    }
    return i;
  }
  function B(t, i, r) {
    let s = 3553;
    i.isDataArrayTexture && (s = 35866), i.isData3DTexture && (s = 32879);
    const l = F(t, i),
      c = i.source;
    if (
      (n.activeTexture(33984 + r),
      n.bindTexture(s, t.__webglTexture),
      c.version !== c.__currentVersion || !0 === l)
    ) {
      e.pixelStorei(37440, i.flipY),
        e.pixelStorei(37441, i.premultiplyAlpha),
        e.pixelStorei(3317, i.unpackAlignment),
        e.pixelStorei(37443, 0);
      const t =
        (function (e) {
          return (
            !o &&
            (1001 !== e.wrapS ||
              1001 !== e.wrapT ||
              (1003 !== e.minFilter && 1006 !== e.minFilter))
          );
        })(i) && !1 === S(i.image);
      let r = b(i.image, t, !1, h);
      r = j(i, r);
      const u = S(r) || o,
        d = a.convert(i.format, i.encoding);
      let p,
        f = a.convert(i.type),
        m = E(i.internalFormat, d, f, i.encoding, i.isVideoTexture);
      U(s, i, u);
      const g = i.mipmaps,
        v = o && !0 !== i.isVideoTexture,
        _ = void 0 === c.__currentVersion || !0 === l,
        x = A(i, r, u);
      if (i.isDepthTexture)
        (m = 6402),
          o
            ? (m =
                1015 === i.type
                  ? 36012
                  : 1014 === i.type
                  ? 33190
                  : 1020 === i.type
                  ? 35056
                  : 33189)
            : 1015 === i.type &&
              console.error(
                "WebGLRenderer: Floating point depth texture requires WebGL2."
              ),
          1026 === i.format &&
            6402 === m &&
            1012 !== i.type &&
            1014 !== i.type &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
            ),
            (i.type = 1014),
            (f = a.convert(i.type))),
          1027 === i.format &&
            6402 === m &&
            ((m = 34041),
            1020 !== i.type &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
              ),
              (i.type = 1020),
              (f = a.convert(i.type)))),
          _ &&
            (v
              ? n.texStorage2D(3553, 1, m, r.width, r.height)
              : n.texImage2D(3553, 0, m, r.width, r.height, 0, d, f, null));
      else if (i.isDataTexture)
        if (g.length > 0 && u) {
          v && _ && n.texStorage2D(3553, x, m, g[0].width, g[0].height);
          for (let e = 0, t = g.length; e < t; e++)
            (p = g[e]),
              v
                ? n.texSubImage2D(
                    3553,
                    e,
                    0,
                    0,
                    p.width,
                    p.height,
                    d,
                    f,
                    p.data
                  )
                : n.texImage2D(3553, e, m, p.width, p.height, 0, d, f, p.data);
          i.generateMipmaps = !1;
        } else
          v
            ? (_ && n.texStorage2D(3553, x, m, r.width, r.height),
              n.texSubImage2D(3553, 0, 0, 0, r.width, r.height, d, f, r.data))
            : n.texImage2D(3553, 0, m, r.width, r.height, 0, d, f, r.data);
      else if (i.isCompressedTexture) {
        v && _ && n.texStorage2D(3553, x, m, g[0].width, g[0].height);
        for (let e = 0, t = g.length; e < t; e++)
          (p = g[e]),
            1023 !== i.format
              ? null !== d
                ? v
                  ? n.compressedTexSubImage2D(
                      3553,
                      e,
                      0,
                      0,
                      p.width,
                      p.height,
                      d,
                      p.data
                    )
                  : n.compressedTexImage2D(
                      3553,
                      e,
                      m,
                      p.width,
                      p.height,
                      0,
                      p.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                  )
              : v
              ? n.texSubImage2D(3553, e, 0, 0, p.width, p.height, d, f, p.data)
              : n.texImage2D(3553, e, m, p.width, p.height, 0, d, f, p.data);
      } else if (i.isDataArrayTexture)
        v
          ? (_ && n.texStorage3D(35866, x, m, r.width, r.height, r.depth),
            n.texSubImage3D(
              35866,
              0,
              0,
              0,
              0,
              r.width,
              r.height,
              r.depth,
              d,
              f,
              r.data
            ))
          : n.texImage3D(
              35866,
              0,
              m,
              r.width,
              r.height,
              r.depth,
              0,
              d,
              f,
              r.data
            );
      else if (i.isData3DTexture)
        v
          ? (_ && n.texStorage3D(32879, x, m, r.width, r.height, r.depth),
            n.texSubImage3D(
              32879,
              0,
              0,
              0,
              0,
              r.width,
              r.height,
              r.depth,
              d,
              f,
              r.data
            ))
          : n.texImage3D(
              32879,
              0,
              m,
              r.width,
              r.height,
              r.depth,
              0,
              d,
              f,
              r.data
            );
      else if (i.isFramebufferTexture) {
        if (_)
          if (v) n.texStorage2D(3553, x, m, r.width, r.height);
          else {
            let e = r.width,
              t = r.height;
            for (let i = 0; i < x; i++)
              n.texImage2D(3553, i, m, e, t, 0, d, f, null),
                (e >>= 1),
                (t >>= 1);
          }
      } else if (g.length > 0 && u) {
        v && _ && n.texStorage2D(3553, x, m, g[0].width, g[0].height);
        for (let e = 0, t = g.length; e < t; e++)
          (p = g[e]),
            v
              ? n.texSubImage2D(3553, e, 0, 0, d, f, p)
              : n.texImage2D(3553, e, m, d, f, p);
        i.generateMipmaps = !1;
      } else
        v
          ? (_ && n.texStorage2D(3553, x, m, r.width, r.height),
            n.texSubImage2D(3553, 0, 0, 0, d, f, r))
          : n.texImage2D(3553, 0, m, d, f, r);
      w(i, u) && T(s),
        (c.__currentVersion = c.version),
        i.onUpdate && i.onUpdate(i);
    }
    t.__version = i.version;
  }
  function k(t, r, s, o, l) {
    const c = a.convert(s.format, s.encoding),
      h = a.convert(s.type),
      u = E(s.internalFormat, c, h, s.encoding);
    i.get(r).__hasExternalTextures ||
      (32879 === l || 35866 === l
        ? n.texImage3D(l, 0, u, r.width, r.height, r.depth, 0, c, h, null)
        : n.texImage2D(l, 0, u, r.width, r.height, 0, c, h, null)),
      n.bindFramebuffer(36160, t),
      W(r)
        ? d.framebufferTexture2DMultisampleEXT(
            36160,
            o,
            l,
            i.get(s).__webglTexture,
            0,
            G(r)
          )
        : e.framebufferTexture2D(36160, o, l, i.get(s).__webglTexture, 0),
      n.bindFramebuffer(36160, null);
  }
  function V(t, n, i) {
    if ((e.bindRenderbuffer(36161, t), n.depthBuffer && !n.stencilBuffer)) {
      let r = 33189;
      if (i || W(n)) {
        const t = n.depthTexture;
        t &&
          t.isDepthTexture &&
          (1015 === t.type ? (r = 36012) : 1014 === t.type && (r = 33190));
        const i = G(n);
        W(n)
          ? d.renderbufferStorageMultisampleEXT(36161, i, r, n.width, n.height)
          : e.renderbufferStorageMultisample(36161, i, r, n.width, n.height);
      } else e.renderbufferStorage(36161, r, n.width, n.height);
      e.framebufferRenderbuffer(36160, 36096, 36161, t);
    } else if (n.depthBuffer && n.stencilBuffer) {
      const r = G(n);
      i && !1 === W(n)
        ? e.renderbufferStorageMultisample(36161, r, 35056, n.width, n.height)
        : W(n)
        ? d.renderbufferStorageMultisampleEXT(
            36161,
            r,
            35056,
            n.width,
            n.height
          )
        : e.renderbufferStorage(36161, 34041, n.width, n.height),
        e.framebufferRenderbuffer(36160, 33306, 36161, t);
    } else {
      const t = !0 === n.isWebGLMultipleRenderTargets ? n.texture : [n.texture];
      for (let r = 0; r < t.length; r++) {
        const s = t[r],
          o = a.convert(s.format, s.encoding),
          l = a.convert(s.type),
          c = E(s.internalFormat, o, l, s.encoding),
          h = G(n);
        i && !1 === W(n)
          ? e.renderbufferStorageMultisample(36161, h, c, n.width, n.height)
          : W(n)
          ? d.renderbufferStorageMultisampleEXT(36161, h, c, n.width, n.height)
          : e.renderbufferStorage(36161, c, n.width, n.height);
      }
    }
    e.bindRenderbuffer(36161, null);
  }
  function H(t) {
    const r = i.get(t),
      a = !0 === t.isWebGLCubeRenderTarget;
    if (t.depthTexture && !r.__autoAllocateDepthBuffer) {
      if (a)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      !(function (t, r) {
        if (r && r.isWebGLCubeRenderTarget)
          throw new Error(
            "Depth Texture with cube render targets is not supported"
          );
        if (
          (n.bindFramebuffer(36160, t),
          !r.depthTexture || !r.depthTexture.isDepthTexture)
        )
          throw new Error(
            "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
          );
        (i.get(r.depthTexture).__webglTexture &&
          r.depthTexture.image.width === r.width &&
          r.depthTexture.image.height === r.height) ||
          ((r.depthTexture.image.width = r.width),
          (r.depthTexture.image.height = r.height),
          (r.depthTexture.needsUpdate = !0)),
          N(r.depthTexture, 0);
        const a = i.get(r.depthTexture).__webglTexture,
          s = G(r);
        if (1026 === r.depthTexture.format)
          W(r)
            ? d.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, a, 0, s)
            : e.framebufferTexture2D(36160, 36096, 3553, a, 0);
        else {
          if (1027 !== r.depthTexture.format)
            throw new Error("Unknown depthTexture format");
          W(r)
            ? d.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, a, 0, s)
            : e.framebufferTexture2D(36160, 33306, 3553, a, 0);
        }
      })(r.__webglFramebuffer, t);
    } else if (a) {
      r.__webglDepthbuffer = [];
      for (let i = 0; i < 6; i++)
        n.bindFramebuffer(36160, r.__webglFramebuffer[i]),
          (r.__webglDepthbuffer[i] = e.createRenderbuffer()),
          V(r.__webglDepthbuffer[i], t, !1);
    } else
      n.bindFramebuffer(36160, r.__webglFramebuffer),
        (r.__webglDepthbuffer = e.createRenderbuffer()),
        V(r.__webglDepthbuffer, t, !1);
    n.bindFramebuffer(36160, null);
  }
  function G(e) {
    return Math.min(u, e.samples);
  }
  function W(e) {
    const n = i.get(e);
    return (
      o &&
      e.samples > 0 &&
      !0 === t.has("WEBGL_multisampled_render_to_texture") &&
      !1 !== n.__useRenderToTexture
    );
  }
  function j(e, n) {
    const i = e.encoding,
      r = e.format,
      a = e.type;
    return (
      !0 === e.isCompressedTexture ||
        !0 === e.isVideoTexture ||
        1035 === e.format ||
        (3e3 !== i &&
          (3001 === i
            ? !1 === o
              ? !0 === t.has("EXT_sRGB") && 1023 === r
                ? ((e.format = 1035),
                  (e.minFilter = 1006),
                  (e.generateMipmaps = !1))
                : (n = I.sRGBToLinear(n))
              : (1023 === r && 1009 === a) ||
                console.warn(
                  "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture encoding:",
                i
              ))),
      n
    );
  }
  (this.allocateTextureUnit = function () {
    const e = D;
    return (
      e >= l &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            e +
            " texture units while this GPU supports only " +
            l
        ),
      (D += 1),
      e
    );
  }),
    (this.resetTextureUnits = function () {
      D = 0;
    }),
    (this.setTexture2D = N),
    (this.setTexture2DArray = function (e, t) {
      const r = i.get(e);
      e.version > 0 && r.__version !== e.version
        ? B(r, e, t)
        : (n.activeTexture(33984 + t), n.bindTexture(35866, r.__webglTexture));
    }),
    (this.setTexture3D = function (e, t) {
      const r = i.get(e);
      e.version > 0 && r.__version !== e.version
        ? B(r, e, t)
        : (n.activeTexture(33984 + t), n.bindTexture(32879, r.__webglTexture));
    }),
    (this.setTextureCube = function (t, r) {
      const s = i.get(t);
      t.version > 0 && s.__version !== t.version
        ? (function (t, i, r) {
            if (6 !== i.image.length) return;
            const s = F(t, i),
              l = i.source;
            if (
              (n.activeTexture(33984 + r),
              n.bindTexture(34067, t.__webglTexture),
              l.version !== l.__currentVersion || !0 === s)
            ) {
              e.pixelStorei(37440, i.flipY),
                e.pixelStorei(37441, i.premultiplyAlpha),
                e.pixelStorei(3317, i.unpackAlignment),
                e.pixelStorei(37443, 0);
              const t = i.isCompressedTexture || i.image[0].isCompressedTexture,
                r = i.image[0] && i.image[0].isDataTexture,
                h = [];
              for (let e = 0; e < 6; e++)
                (h[e] =
                  t || r
                    ? r
                      ? i.image[e].image
                      : i.image[e]
                    : b(i.image[e], !1, !0, c)),
                  (h[e] = j(i, h[e]));
              const u = h[0],
                d = S(u) || o,
                p = a.convert(i.format, i.encoding),
                f = a.convert(i.type),
                m = E(i.internalFormat, p, f, i.encoding),
                g = o && !0 !== i.isVideoTexture,
                v = void 0 === l.__currentVersion || !0 === s;
              let _,
                x = A(i, u, d);
              if ((U(34067, i, d), t)) {
                g && v && n.texStorage2D(34067, x, m, u.width, u.height);
                for (let e = 0; e < 6; e++) {
                  _ = h[e].mipmaps;
                  for (let t = 0; t < _.length; t++) {
                    const r = _[t];
                    1023 !== i.format
                      ? null !== p
                        ? g
                          ? n.compressedTexSubImage2D(
                              34069 + e,
                              t,
                              0,
                              0,
                              r.width,
                              r.height,
                              p,
                              r.data
                            )
                          : n.compressedTexImage2D(
                              34069 + e,
                              t,
                              m,
                              r.width,
                              r.height,
                              0,
                              r.data
                            )
                        : console.warn(
                            "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                          )
                      : g
                      ? n.texSubImage2D(
                          34069 + e,
                          t,
                          0,
                          0,
                          r.width,
                          r.height,
                          p,
                          f,
                          r.data
                        )
                      : n.texImage2D(
                          34069 + e,
                          t,
                          m,
                          r.width,
                          r.height,
                          0,
                          p,
                          f,
                          r.data
                        );
                  }
                }
              } else {
                (_ = i.mipmaps),
                  g &&
                    v &&
                    (_.length > 0 && x++,
                    n.texStorage2D(34067, x, m, h[0].width, h[0].height));
                for (let e = 0; e < 6; e++)
                  if (r) {
                    g
                      ? n.texSubImage2D(
                          34069 + e,
                          0,
                          0,
                          0,
                          h[e].width,
                          h[e].height,
                          p,
                          f,
                          h[e].data
                        )
                      : n.texImage2D(
                          34069 + e,
                          0,
                          m,
                          h[e].width,
                          h[e].height,
                          0,
                          p,
                          f,
                          h[e].data
                        );
                    for (let t = 0; t < _.length; t++) {
                      const i = _[t].image[e].image;
                      g
                        ? n.texSubImage2D(
                            34069 + e,
                            t + 1,
                            0,
                            0,
                            i.width,
                            i.height,
                            p,
                            f,
                            i.data
                          )
                        : n.texImage2D(
                            34069 + e,
                            t + 1,
                            m,
                            i.width,
                            i.height,
                            0,
                            p,
                            f,
                            i.data
                          );
                    }
                  } else {
                    g
                      ? n.texSubImage2D(34069 + e, 0, 0, 0, p, f, h[e])
                      : n.texImage2D(34069 + e, 0, m, p, f, h[e]);
                    for (let t = 0; t < _.length; t++) {
                      const i = _[t];
                      g
                        ? n.texSubImage2D(
                            34069 + e,
                            t + 1,
                            0,
                            0,
                            p,
                            f,
                            i.image[e]
                          )
                        : n.texImage2D(34069 + e, t + 1, m, p, f, i.image[e]);
                    }
                  }
              }
              w(i, d) && T(34067),
                (l.__currentVersion = l.version),
                i.onUpdate && i.onUpdate(i);
            }
            t.__version = i.version;
          })(s, t, r)
        : (n.activeTexture(33984 + r), n.bindTexture(34067, s.__webglTexture));
    }),
    (this.rebindTextures = function (e, t, n) {
      const r = i.get(e);
      void 0 !== t && k(r.__webglFramebuffer, e, e.texture, 36064, 3553),
        void 0 !== n && H(e);
    }),
    (this.setupRenderTarget = function (t) {
      const l = t.texture,
        c = i.get(t),
        h = i.get(l);
      t.addEventListener("dispose", R),
        !0 !== t.isWebGLMultipleRenderTargets &&
          (void 0 === h.__webglTexture &&
            (h.__webglTexture = e.createTexture()),
          (h.__version = l.version),
          s.memory.textures++);
      const u = !0 === t.isWebGLCubeRenderTarget,
        d = !0 === t.isWebGLMultipleRenderTargets,
        p = S(t) || o;
      if (u) {
        c.__webglFramebuffer = [];
        for (let t = 0; t < 6; t++)
          c.__webglFramebuffer[t] = e.createFramebuffer();
      } else {
        if (((c.__webglFramebuffer = e.createFramebuffer()), d))
          if (r.drawBuffers) {
            const n = t.texture;
            for (let t = 0, r = n.length; t < r; t++) {
              const r = i.get(n[t]);
              void 0 === r.__webglTexture &&
                ((r.__webglTexture = e.createTexture()), s.memory.textures++);
            }
          } else
            console.warn(
              "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
            );
        if (o && t.samples > 0 && !1 === W(t)) {
          const i = d ? l : [l];
          (c.__webglMultisampledFramebuffer = e.createFramebuffer()),
            (c.__webglColorRenderbuffer = []),
            n.bindFramebuffer(36160, c.__webglMultisampledFramebuffer);
          for (let n = 0; n < i.length; n++) {
            const r = i[n];
            (c.__webglColorRenderbuffer[n] = e.createRenderbuffer()),
              e.bindRenderbuffer(36161, c.__webglColorRenderbuffer[n]);
            const s = a.convert(r.format, r.encoding),
              o = a.convert(r.type),
              l = E(r.internalFormat, s, o, r.encoding),
              h = G(t);
            e.renderbufferStorageMultisample(36161, h, l, t.width, t.height),
              e.framebufferRenderbuffer(
                36160,
                36064 + n,
                36161,
                c.__webglColorRenderbuffer[n]
              );
          }
          e.bindRenderbuffer(36161, null),
            t.depthBuffer &&
              ((c.__webglDepthRenderbuffer = e.createRenderbuffer()),
              V(c.__webglDepthRenderbuffer, t, !0)),
            n.bindFramebuffer(36160, null);
        }
      }
      if (u) {
        n.bindTexture(34067, h.__webglTexture), U(34067, l, p);
        for (let e = 0; e < 6; e++)
          k(c.__webglFramebuffer[e], t, l, 36064, 34069 + e);
        w(l, p) && T(34067), n.unbindTexture();
      } else if (d) {
        const e = t.texture;
        for (let r = 0, a = e.length; r < a; r++) {
          const a = e[r],
            s = i.get(a);
          n.bindTexture(3553, s.__webglTexture),
            U(3553, a, p),
            k(c.__webglFramebuffer, t, a, 36064 + r, 3553),
            w(a, p) && T(3553);
        }
        n.unbindTexture();
      } else {
        let e = 3553;
        (t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) &&
          (o
            ? (e = t.isWebGL3DRenderTarget ? 32879 : 35866)
            : console.error(
                "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
              )),
          n.bindTexture(e, h.__webglTexture),
          U(e, l, p),
          k(c.__webglFramebuffer, t, l, 36064, e),
          w(l, p) && T(e),
          n.unbindTexture();
      }
      t.depthBuffer && H(t);
    }),
    (this.updateRenderTargetMipmap = function (e) {
      const t = S(e) || o,
        r = !0 === e.isWebGLMultipleRenderTargets ? e.texture : [e.texture];
      for (let a = 0, s = r.length; a < s; a++) {
        const s = r[a];
        if (w(s, t)) {
          const t = e.isWebGLCubeRenderTarget ? 34067 : 3553,
            r = i.get(s).__webglTexture;
          n.bindTexture(t, r), T(t), n.unbindTexture();
        }
      }
    }),
    (this.updateMultisampleRenderTarget = function (t) {
      if (o && t.samples > 0 && !1 === W(t)) {
        const r = t.isWebGLMultipleRenderTargets ? t.texture : [t.texture],
          a = t.width,
          s = t.height;
        let o = 16384;
        const l = [],
          c = t.stencilBuffer ? 33306 : 36096,
          h = i.get(t),
          u = !0 === t.isWebGLMultipleRenderTargets;
        if (u)
          for (let t = 0; t < r.length; t++)
            n.bindFramebuffer(36160, h.__webglMultisampledFramebuffer),
              e.framebufferRenderbuffer(36160, 36064 + t, 36161, null),
              n.bindFramebuffer(36160, h.__webglFramebuffer),
              e.framebufferTexture2D(36009, 36064 + t, 3553, null, 0);
        n.bindFramebuffer(36008, h.__webglMultisampledFramebuffer),
          n.bindFramebuffer(36009, h.__webglFramebuffer);
        for (let n = 0; n < r.length; n++) {
          l.push(36064 + n), t.depthBuffer && l.push(c);
          const d = void 0 !== h.__ignoreDepthValues && h.__ignoreDepthValues;
          if (
            (!1 === d &&
              (t.depthBuffer && (o |= 256), t.stencilBuffer && (o |= 1024)),
            u &&
              e.framebufferRenderbuffer(
                36008,
                36064,
                36161,
                h.__webglColorRenderbuffer[n]
              ),
            !0 === d &&
              (e.invalidateFramebuffer(36008, [c]),
              e.invalidateFramebuffer(36009, [c])),
            u)
          ) {
            const t = i.get(r[n]).__webglTexture;
            e.framebufferTexture2D(36009, 36064, 3553, t, 0);
          }
          e.blitFramebuffer(0, 0, a, s, 0, 0, a, s, o, 9728),
            p && e.invalidateFramebuffer(36008, l);
        }
        if ((n.bindFramebuffer(36008, null), n.bindFramebuffer(36009, null), u))
          for (let t = 0; t < r.length; t++) {
            n.bindFramebuffer(36160, h.__webglMultisampledFramebuffer),
              e.framebufferRenderbuffer(
                36160,
                36064 + t,
                36161,
                h.__webglColorRenderbuffer[t]
              );
            const a = i.get(r[t]).__webglTexture;
            n.bindFramebuffer(36160, h.__webglFramebuffer),
              e.framebufferTexture2D(36009, 36064 + t, 3553, a, 0);
          }
        n.bindFramebuffer(36009, h.__webglMultisampledFramebuffer);
      }
    }),
    (this.setupDepthRenderbuffer = H),
    (this.setupFrameBufferTexture = k),
    (this.useMultisampledRTT = W);
}
function Ar(e, t, n) {
  const i = n.isWebGL2;
  return {
    convert: function (n, r = null) {
      let a;
      if (1009 === n) return 5121;
      if (1017 === n) return 32819;
      if (1018 === n) return 32820;
      if (1010 === n) return 5120;
      if (1011 === n) return 5122;
      if (1012 === n) return 5123;
      if (1013 === n) return 5124;
      if (1014 === n) return 5125;
      if (1015 === n) return 5126;
      if (1016 === n)
        return i
          ? 5131
          : ((a = t.get("OES_texture_half_float")),
            null !== a ? a.HALF_FLOAT_OES : null);
      if (1021 === n) return 6406;
      if (1023 === n) return 6408;
      if (1024 === n) return 6409;
      if (1025 === n) return 6410;
      if (1026 === n) return 6402;
      if (1027 === n) return 34041;
      if (1028 === n) return 6403;
      if (1022 === n)
        return (
          console.warn(
            "THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"
          ),
          6408
        );
      if (1035 === n)
        return (a = t.get("EXT_sRGB")), null !== a ? a.SRGB_ALPHA_EXT : null;
      if (1029 === n) return 36244;
      if (1030 === n) return 33319;
      if (1031 === n) return 33320;
      if (1033 === n) return 36249;
      if (33776 === n || 33777 === n || 33778 === n || 33779 === n)
        if (3001 === r) {
          if (((a = t.get("WEBGL_compressed_texture_s3tc_srgb")), null === a))
            return null;
          if (33776 === n) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (33777 === n) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (33778 === n) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (33779 === n) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else {
          if (((a = t.get("WEBGL_compressed_texture_s3tc")), null === a))
            return null;
          if (33776 === n) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
          if (33777 === n) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
          if (33778 === n) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
          if (33779 === n) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        }
      if (35840 === n || 35841 === n || 35842 === n || 35843 === n) {
        if (((a = t.get("WEBGL_compressed_texture_pvrtc")), null === a))
          return null;
        if (35840 === n) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (35841 === n) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (35842 === n) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (35843 === n) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      }
      if (36196 === n)
        return (
          (a = t.get("WEBGL_compressed_texture_etc1")),
          null !== a ? a.COMPRESSED_RGB_ETC1_WEBGL : null
        );
      if (37492 === n || 37496 === n) {
        if (((a = t.get("WEBGL_compressed_texture_etc")), null === a))
          return null;
        if (37492 === n)
          return 3001 === r ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (37496 === n)
          return 3001 === r
            ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : a.COMPRESSED_RGBA8_ETC2_EAC;
      }
      if (
        37808 === n ||
        37809 === n ||
        37810 === n ||
        37811 === n ||
        37812 === n ||
        37813 === n ||
        37814 === n ||
        37815 === n ||
        37816 === n ||
        37817 === n ||
        37818 === n ||
        37819 === n ||
        37820 === n ||
        37821 === n
      ) {
        if (((a = t.get("WEBGL_compressed_texture_astc")), null === a))
          return null;
        if (37808 === n)
          return 3001 === r
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (37809 === n)
          return 3001 === r
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (37810 === n)
          return 3001 === r
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (37811 === n)
          return 3001 === r
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (37812 === n)
          return 3001 === r
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (37813 === n)
          return 3001 === r
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (37814 === n)
          return 3001 === r
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (37815 === n)
          return 3001 === r
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (37816 === n)
          return 3001 === r
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (37817 === n)
          return 3001 === r
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (37818 === n)
          return 3001 === r
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (37819 === n)
          return 3001 === r
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (37820 === n)
          return 3001 === r
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (37821 === n)
          return 3001 === r
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      }
      if (36492 === n) {
        if (((a = t.get("EXT_texture_compression_bptc")), null === a))
          return null;
        if (36492 === n)
          return 3001 === r
            ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      }
      return 1020 === n
        ? i
          ? 34042
          : ((a = t.get("WEBGL_depth_texture")),
            null !== a ? a.UNSIGNED_INT_24_8_WEBGL : null)
        : void 0 !== e[n]
        ? e[n]
        : null;
    },
  };
}
class Cr extends jt {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class Lr extends je {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const Rr = { type: "move" };
class Pr {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      null === this._hand &&
        ((this._hand = new Lr()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      null === this._targetRay &&
        ((this._targetRay = new Lr()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new G()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new G())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      null === this._grip &&
        ((this._grip = new Lr()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new G()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new G())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      null !== this._targetRay && this._targetRay.dispatchEvent(e),
      null !== this._grip && this._grip.dispatchEvent(e),
      null !== this._hand && this._hand.dispatchEvent(e),
      this
    );
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      null !== this._targetRay && (this._targetRay.visible = !1),
      null !== this._grip && (this._grip.visible = !1),
      null !== this._hand && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let i = null,
      r = null,
      a = null;
    const s = this._targetRay,
      o = this._grip,
      l = this._hand;
    if (e && "visible-blurred" !== t.session.visibilityState) {
      if (l && e.hand) {
        a = !0;
        for (const i of e.hand.values()) {
          const e = t.getJointPose(i, n);
          if (void 0 === l.joints[i.jointName]) {
            const e = new Lr();
            (e.matrixAutoUpdate = !1),
              (e.visible = !1),
              (l.joints[i.jointName] = e),
              l.add(e);
          }
          const r = l.joints[i.jointName];
          null !== e &&
            (r.matrix.fromArray(e.transform.matrix),
            r.matrix.decompose(r.position, r.rotation, r.scale),
            (r.jointRadius = e.radius)),
            (r.visible = null !== e);
        }
        const i = l.joints["index-finger-tip"],
          r = l.joints["thumb-tip"],
          s = i.position.distanceTo(r.position),
          o = 0.02,
          c = 0.005;
        l.inputState.pinching && s > o + c
          ? ((l.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !l.inputState.pinching &&
            s <= o - c &&
            ((l.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        null !== o &&
          e.gripSpace &&
          ((r = t.getPose(e.gripSpace, n)),
          null !== r &&
            (o.matrix.fromArray(r.transform.matrix),
            o.matrix.decompose(o.position, o.rotation, o.scale),
            r.linearVelocity
              ? ((o.hasLinearVelocity = !0),
                o.linearVelocity.copy(r.linearVelocity))
              : (o.hasLinearVelocity = !1),
            r.angularVelocity
              ? ((o.hasAngularVelocity = !0),
                o.angularVelocity.copy(r.angularVelocity))
              : (o.hasAngularVelocity = !1)));
      null !== s &&
        ((i = t.getPose(e.targetRaySpace, n)),
        null === i && null !== r && (i = r),
        null !== i &&
          (s.matrix.fromArray(i.transform.matrix),
          s.matrix.decompose(s.position, s.rotation, s.scale),
          i.linearVelocity
            ? ((s.hasLinearVelocity = !0),
              s.linearVelocity.copy(i.linearVelocity))
            : (s.hasLinearVelocity = !1),
          i.angularVelocity
            ? ((s.hasAngularVelocity = !0),
              s.angularVelocity.copy(i.angularVelocity))
            : (s.hasAngularVelocity = !1),
          this.dispatchEvent(Rr)));
    }
    return (
      null !== s && (s.visible = null !== i),
      null !== o && (o.visible = null !== r),
      null !== l && (l.visible = null !== a),
      this
    );
  }
}
class Dr extends U {
  constructor(e, t, n, i, r, a, s, o, l, c) {
    if (1026 !== (c = void 0 !== c ? c : 1026) && 1027 !== c)
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    void 0 === n && 1026 === c && (n = 1014),
      void 0 === n && 1027 === c && (n = 1020),
      super(null, i, r, a, s, o, c, n, l),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = void 0 !== s ? s : 1003),
      (this.minFilter = void 0 !== o ? o : 1003),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
class Ir extends o {
  constructor(e, t) {
    super();
    const n = this;
    let i = null,
      r = 1,
      a = null,
      s = "local-floor",
      o = null,
      l = null,
      c = null,
      h = null,
      u = null,
      d = null;
    const p = t.getContextAttributes();
    let f = null,
      m = null;
    const g = [],
      v = [],
      _ = new jt();
    _.layers.enable(1), (_.viewport = new F());
    const x = new jt();
    x.layers.enable(2), (x.viewport = new F());
    const y = [_, x],
      M = new Cr();
    M.layers.enable(1), M.layers.enable(2);
    let b = null,
      S = null;
    function w(e) {
      const t = v.indexOf(e.inputSource);
      if (-1 === t) return;
      const n = g[t];
      void 0 !== n && n.dispatchEvent({ type: e.type, data: e.inputSource });
    }
    function T() {
      i.removeEventListener("select", w),
        i.removeEventListener("selectstart", w),
        i.removeEventListener("selectend", w),
        i.removeEventListener("squeeze", w),
        i.removeEventListener("squeezestart", w),
        i.removeEventListener("squeezeend", w),
        i.removeEventListener("end", T),
        i.removeEventListener("inputsourceschange", E);
      for (let e = 0; e < g.length; e++) {
        const t = v[e];
        null !== t && ((v[e] = null), g[e].disconnect(t));
      }
      (b = null),
        (S = null),
        e.setRenderTarget(f),
        (u = null),
        (h = null),
        (c = null),
        (i = null),
        (m = null),
        P.stop(),
        (n.isPresenting = !1),
        n.dispatchEvent({ type: "sessionend" });
    }
    function E(e) {
      for (let t = 0; t < e.removed.length; t++) {
        const n = e.removed[t],
          i = v.indexOf(n);
        i >= 0 &&
          ((v[i] = null),
          g[i].dispatchEvent({ type: "disconnected", data: n }));
      }
      for (let t = 0; t < e.added.length; t++) {
        const n = e.added[t];
        let i = v.indexOf(n);
        if (-1 === i) {
          for (let e = 0; e < g.length; e++) {
            if (e >= v.length) {
              v.push(n), (i = e);
              break;
            }
            if (null === v[e]) {
              (v[e] = n), (i = e);
              break;
            }
          }
          if (-1 === i) break;
        }
        const r = g[i];
        r && r.dispatchEvent({ type: "connected", data: n });
      }
    }
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (e) {
        let t = g[e];
        return (
          void 0 === t && ((t = new Pr()), (g[e] = t)), t.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (e) {
        let t = g[e];
        return void 0 === t && ((t = new Pr()), (g[e] = t)), t.getGripSpace();
      }),
      (this.getHand = function (e) {
        let t = g[e];
        return void 0 === t && ((t = new Pr()), (g[e] = t)), t.getHandSpace();
      }),
      (this.setFramebufferScaleFactor = function (e) {
        (r = e),
          !0 === n.isPresenting &&
            console.warn(
              "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
            );
      }),
      (this.setReferenceSpaceType = function (e) {
        (s = e),
          !0 === n.isPresenting &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return o || a;
      }),
      (this.setReferenceSpace = function (e) {
        o = e;
      }),
      (this.getBaseLayer = function () {
        return null !== h ? h : u;
      }),
      (this.getBinding = function () {
        return c;
      }),
      (this.getFrame = function () {
        return d;
      }),
      (this.getSession = function () {
        return i;
      }),
      (this.setSession = async function (l) {
        if (((i = l), null !== i)) {
          if (
            ((f = e.getRenderTarget()),
            i.addEventListener("select", w),
            i.addEventListener("selectstart", w),
            i.addEventListener("selectend", w),
            i.addEventListener("squeeze", w),
            i.addEventListener("squeezestart", w),
            i.addEventListener("squeezeend", w),
            i.addEventListener("end", T),
            i.addEventListener("inputsourceschange", E),
            !0 !== p.xrCompatible && (await t.makeXRCompatible()),
            void 0 === i.renderState.layers || !1 === e.capabilities.isWebGL2)
          ) {
            const n = {
              antialias: void 0 !== i.renderState.layers || p.antialias,
              alpha: p.alpha,
              depth: p.depth,
              stencil: p.stencil,
              framebufferScaleFactor: r,
            };
            (u = new XRWebGLLayer(i, t, n)),
              i.updateRenderState({ baseLayer: u }),
              (m = new B(u.framebufferWidth, u.framebufferHeight, {
                format: 1023,
                type: 1009,
                encoding: e.outputEncoding,
              }));
          } else {
            let n = null,
              a = null,
              s = null;
            p.depth &&
              ((s = p.stencil ? 35056 : 33190),
              (n = p.stencil ? 1027 : 1026),
              (a = p.stencil ? 1020 : 1014));
            const o = { colorFormat: 32856, depthFormat: s, scaleFactor: r };
            (c = new XRWebGLBinding(i, t)),
              (h = c.createProjectionLayer(o)),
              i.updateRenderState({ layers: [h] }),
              (m = new B(h.textureWidth, h.textureHeight, {
                format: 1023,
                type: 1009,
                depthTexture: new Dr(
                  h.textureWidth,
                  h.textureHeight,
                  a,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  n
                ),
                stencilBuffer: p.stencil,
                encoding: e.outputEncoding,
                samples: p.antialias ? 4 : 0,
              }));
            e.properties.get(m).__ignoreDepthValues = h.ignoreDepthValues;
          }
          (m.isXRRenderTarget = !0),
            this.setFoveation(1),
            (o = null),
            (a = await i.requestReferenceSpace(s)),
            P.setContext(i),
            P.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" });
        }
      });
    const A = new G(),
      C = new G();
    function L(e, t) {
      null === t
        ? e.matrixWorld.copy(e.matrix)
        : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix),
        e.matrixWorldInverse.copy(e.matrixWorld).invert();
    }
    (this.updateCamera = function (e) {
      if (null === i) return;
      (M.near = x.near = _.near = e.near),
        (M.far = x.far = _.far = e.far),
        (b === M.near && S === M.far) ||
          (i.updateRenderState({ depthNear: M.near, depthFar: M.far }),
          (b = M.near),
          (S = M.far));
      const t = e.parent,
        n = M.cameras;
      L(M, t);
      for (let e = 0; e < n.length; e++) L(n[e], t);
      M.matrixWorld.decompose(M.position, M.quaternion, M.scale),
        e.position.copy(M.position),
        e.quaternion.copy(M.quaternion),
        e.scale.copy(M.scale),
        e.matrix.copy(M.matrix),
        e.matrixWorld.copy(M.matrixWorld);
      const r = e.children;
      for (let e = 0, t = r.length; e < t; e++) r[e].updateMatrixWorld(!0);
      2 === n.length
        ? (function (e, t, n) {
            A.setFromMatrixPosition(t.matrixWorld),
              C.setFromMatrixPosition(n.matrixWorld);
            const i = A.distanceTo(C),
              r = t.projectionMatrix.elements,
              a = n.projectionMatrix.elements,
              s = r[14] / (r[10] - 1),
              o = r[14] / (r[10] + 1),
              l = (r[9] + 1) / r[5],
              c = (r[9] - 1) / r[5],
              h = (r[8] - 1) / r[0],
              u = (a[8] + 1) / a[0],
              d = s * h,
              p = s * u,
              f = i / (-h + u),
              m = f * -h;
            t.matrixWorld.decompose(e.position, e.quaternion, e.scale),
              e.translateX(m),
              e.translateZ(f),
              e.matrixWorld.compose(e.position, e.quaternion, e.scale),
              e.matrixWorldInverse.copy(e.matrixWorld).invert();
            const g = s + f,
              v = o + f,
              _ = d - m,
              x = p + (i - m),
              y = ((l * o) / v) * g,
              M = ((c * o) / v) * g;
            e.projectionMatrix.makePerspective(_, x, y, M, g, v);
          })(M, _, x)
        : M.projectionMatrix.copy(_.projectionMatrix);
    }),
      (this.getCamera = function () {
        return M;
      }),
      (this.getFoveation = function () {
        return null !== h
          ? h.fixedFoveation
          : null !== u
          ? u.fixedFoveation
          : void 0;
      }),
      (this.setFoveation = function (e) {
        null !== h && (h.fixedFoveation = e),
          null !== u && void 0 !== u.fixedFoveation && (u.fixedFoveation = e);
      });
    let R = null;
    const P = new nn();
    P.setAnimationLoop(function (t, n) {
      if (((l = n.getViewerPose(o || a)), (d = n), null !== l)) {
        const t = l.views;
        null !== u &&
          (e.setRenderTargetFramebuffer(m, u.framebuffer),
          e.setRenderTarget(m));
        let n = !1;
        t.length !== M.cameras.length && ((M.cameras.length = 0), (n = !0));
        for (let i = 0; i < t.length; i++) {
          const r = t[i];
          let a = null;
          if (null !== u) a = u.getViewport(r);
          else {
            const t = c.getViewSubImage(h, r);
            (a = t.viewport),
              0 === i &&
                (e.setRenderTargetTextures(
                  m,
                  t.colorTexture,
                  h.ignoreDepthValues ? void 0 : t.depthStencilTexture
                ),
                e.setRenderTarget(m));
          }
          let s = y[i];
          void 0 === s &&
            ((s = new jt()),
            s.layers.enable(i),
            (s.viewport = new F()),
            (y[i] = s)),
            s.matrix.fromArray(r.transform.matrix),
            s.projectionMatrix.fromArray(r.projectionMatrix),
            s.viewport.set(a.x, a.y, a.width, a.height),
            0 === i && M.matrix.copy(s.matrix),
            !0 === n && M.cameras.push(s);
        }
      }
      for (let e = 0; e < g.length; e++) {
        const t = v[e],
          i = g[e];
        null !== t && void 0 !== i && i.update(t, n, o || a);
      }
      R && R(t, n), (d = null);
    }),
      (this.setAnimationLoop = function (e) {
        R = e;
      }),
      (this.dispose = function () {});
  }
}
function Nr(e, t) {
  function n(n, i) {
    (n.opacity.value = i.opacity),
      i.color && n.diffuse.value.copy(i.color),
      i.emissive &&
        n.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),
      i.map && (n.map.value = i.map),
      i.alphaMap && (n.alphaMap.value = i.alphaMap),
      i.bumpMap &&
        ((n.bumpMap.value = i.bumpMap),
        (n.bumpScale.value = i.bumpScale),
        1 === i.side && (n.bumpScale.value *= -1)),
      i.displacementMap &&
        ((n.displacementMap.value = i.displacementMap),
        (n.displacementScale.value = i.displacementScale),
        (n.displacementBias.value = i.displacementBias)),
      i.emissiveMap && (n.emissiveMap.value = i.emissiveMap),
      i.normalMap &&
        ((n.normalMap.value = i.normalMap),
        n.normalScale.value.copy(i.normalScale),
        1 === i.side && n.normalScale.value.negate()),
      i.specularMap && (n.specularMap.value = i.specularMap),
      i.alphaTest > 0 && (n.alphaTest.value = i.alphaTest);
    const r = t.get(i).envMap;
    if (
      (r &&
        ((n.envMap.value = r),
        (n.flipEnvMap.value =
          r.isCubeTexture && !1 === r.isRenderTargetTexture ? -1 : 1),
        (n.reflectivity.value = i.reflectivity),
        (n.ior.value = i.ior),
        (n.refractionRatio.value = i.refractionRatio)),
      i.lightMap)
    ) {
      n.lightMap.value = i.lightMap;
      const t = !0 !== e.physicallyCorrectLights ? Math.PI : 1;
      n.lightMapIntensity.value = i.lightMapIntensity * t;
    }
    let a, s;
    i.aoMap &&
      ((n.aoMap.value = i.aoMap), (n.aoMapIntensity.value = i.aoMapIntensity)),
      i.map
        ? (a = i.map)
        : i.specularMap
        ? (a = i.specularMap)
        : i.displacementMap
        ? (a = i.displacementMap)
        : i.normalMap
        ? (a = i.normalMap)
        : i.bumpMap
        ? (a = i.bumpMap)
        : i.roughnessMap
        ? (a = i.roughnessMap)
        : i.metalnessMap
        ? (a = i.metalnessMap)
        : i.alphaMap
        ? (a = i.alphaMap)
        : i.emissiveMap
        ? (a = i.emissiveMap)
        : i.clearcoatMap
        ? (a = i.clearcoatMap)
        : i.clearcoatNormalMap
        ? (a = i.clearcoatNormalMap)
        : i.clearcoatRoughnessMap
        ? (a = i.clearcoatRoughnessMap)
        : i.iridescenceMap
        ? (a = i.iridescenceMap)
        : i.iridescenceThicknessMap
        ? (a = i.iridescenceThicknessMap)
        : i.specularIntensityMap
        ? (a = i.specularIntensityMap)
        : i.specularColorMap
        ? (a = i.specularColorMap)
        : i.transmissionMap
        ? (a = i.transmissionMap)
        : i.thicknessMap
        ? (a = i.thicknessMap)
        : i.sheenColorMap
        ? (a = i.sheenColorMap)
        : i.sheenRoughnessMap && (a = i.sheenRoughnessMap),
      void 0 !== a &&
        (a.isWebGLRenderTarget && (a = a.texture),
        !0 === a.matrixAutoUpdate && a.updateMatrix(),
        n.uvTransform.value.copy(a.matrix)),
      i.aoMap ? (s = i.aoMap) : i.lightMap && (s = i.lightMap),
      void 0 !== s &&
        (s.isWebGLRenderTarget && (s = s.texture),
        !0 === s.matrixAutoUpdate && s.updateMatrix(),
        n.uv2Transform.value.copy(s.matrix));
  }
  return {
    refreshFogUniforms: function (e, t) {
      e.fogColor.value.copy(t.color),
        t.isFog
          ? ((e.fogNear.value = t.near), (e.fogFar.value = t.far))
          : t.isFogExp2 && (e.fogDensity.value = t.density);
    },
    refreshMaterialUniforms: function (e, i, r, a, s) {
      i.isMeshBasicMaterial || i.isMeshLambertMaterial
        ? n(e, i)
        : i.isMeshToonMaterial
        ? (n(e, i),
          (function (e, t) {
            t.gradientMap && (e.gradientMap.value = t.gradientMap);
          })(e, i))
        : i.isMeshPhongMaterial
        ? (n(e, i),
          (function (e, t) {
            e.specular.value.copy(t.specular),
              (e.shininess.value = Math.max(t.shininess, 1e-4));
          })(e, i))
        : i.isMeshStandardMaterial
        ? (n(e, i),
          (function (e, n) {
            (e.roughness.value = n.roughness),
              (e.metalness.value = n.metalness),
              n.roughnessMap && (e.roughnessMap.value = n.roughnessMap);
            n.metalnessMap && (e.metalnessMap.value = n.metalnessMap);
            t.get(n).envMap && (e.envMapIntensity.value = n.envMapIntensity);
          })(e, i),
          i.isMeshPhysicalMaterial &&
            (function (e, t, n) {
              (e.ior.value = t.ior),
                t.sheen > 0 &&
                  (e.sheenColor.value
                    .copy(t.sheenColor)
                    .multiplyScalar(t.sheen),
                  (e.sheenRoughness.value = t.sheenRoughness),
                  t.sheenColorMap && (e.sheenColorMap.value = t.sheenColorMap),
                  t.sheenRoughnessMap &&
                    (e.sheenRoughnessMap.value = t.sheenRoughnessMap));
              t.clearcoat > 0 &&
                ((e.clearcoat.value = t.clearcoat),
                (e.clearcoatRoughness.value = t.clearcoatRoughness),
                t.clearcoatMap && (e.clearcoatMap.value = t.clearcoatMap),
                t.clearcoatRoughnessMap &&
                  (e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap),
                t.clearcoatNormalMap &&
                  (e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),
                  (e.clearcoatNormalMap.value = t.clearcoatNormalMap),
                  1 === t.side && e.clearcoatNormalScale.value.negate()));
              t.iridescence > 0 &&
                ((e.iridescence.value = t.iridescence),
                (e.iridescenceIOR.value = t.iridescenceIOR),
                (e.iridescenceThicknessMinimum.value =
                  t.iridescenceThicknessRange[0]),
                (e.iridescenceThicknessMaximum.value =
                  t.iridescenceThicknessRange[1]),
                t.iridescenceMap && (e.iridescenceMap.value = t.iridescenceMap),
                t.iridescenceThicknessMap &&
                  (e.iridescenceThicknessMap.value =
                    t.iridescenceThicknessMap));
              t.transmission > 0 &&
                ((e.transmission.value = t.transmission),
                (e.transmissionSamplerMap.value = n.texture),
                e.transmissionSamplerSize.value.set(n.width, n.height),
                t.transmissionMap &&
                  (e.transmissionMap.value = t.transmissionMap),
                (e.thickness.value = t.thickness),
                t.thicknessMap && (e.thicknessMap.value = t.thicknessMap),
                (e.attenuationDistance.value = t.attenuationDistance),
                e.attenuationColor.value.copy(t.attenuationColor));
              (e.specularIntensity.value = t.specularIntensity),
                e.specularColor.value.copy(t.specularColor),
                t.specularIntensityMap &&
                  (e.specularIntensityMap.value = t.specularIntensityMap);
              t.specularColorMap &&
                (e.specularColorMap.value = t.specularColorMap);
            })(e, i, s))
        : i.isMeshMatcapMaterial
        ? (n(e, i),
          (function (e, t) {
            t.matcap && (e.matcap.value = t.matcap);
          })(e, i))
        : i.isMeshDepthMaterial
        ? n(e, i)
        : i.isMeshDistanceMaterial
        ? (n(e, i),
          (function (e, t) {
            e.referencePosition.value.copy(t.referencePosition),
              (e.nearDistance.value = t.nearDistance),
              (e.farDistance.value = t.farDistance);
          })(e, i))
        : i.isMeshNormalMaterial
        ? n(e, i)
        : i.isLineBasicMaterial
        ? ((function (e, t) {
            e.diffuse.value.copy(t.color), (e.opacity.value = t.opacity);
          })(e, i),
          i.isLineDashedMaterial &&
            (function (e, t) {
              (e.dashSize.value = t.dashSize),
                (e.totalSize.value = t.dashSize + t.gapSize),
                (e.scale.value = t.scale);
            })(e, i))
        : i.isPointsMaterial
        ? (function (e, t, n, i) {
            e.diffuse.value.copy(t.color),
              (e.opacity.value = t.opacity),
              (e.size.value = t.size * n),
              (e.scale.value = 0.5 * i),
              t.map && (e.map.value = t.map);
            t.alphaMap && (e.alphaMap.value = t.alphaMap);
            t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
            let r;
            t.map ? (r = t.map) : t.alphaMap && (r = t.alphaMap);
            void 0 !== r &&
              (!0 === r.matrixAutoUpdate && r.updateMatrix(),
              e.uvTransform.value.copy(r.matrix));
          })(e, i, r, a)
        : i.isSpriteMaterial
        ? (function (e, t) {
            e.diffuse.value.copy(t.color),
              (e.opacity.value = t.opacity),
              (e.rotation.value = t.rotation),
              t.map && (e.map.value = t.map);
            t.alphaMap && (e.alphaMap.value = t.alphaMap);
            t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
            let n;
            t.map ? (n = t.map) : t.alphaMap && (n = t.alphaMap);
            void 0 !== n &&
              (!0 === n.matrixAutoUpdate && n.updateMatrix(),
              e.uvTransform.value.copy(n.matrix));
          })(e, i)
        : i.isShadowMaterial
        ? (e.color.value.copy(i.color), (e.opacity.value = i.opacity))
        : i.isShaderMaterial && (i.uniformsNeedUpdate = !1);
    },
  };
}
function Or(e = {}) {
  this.isWebGLRenderer = !0;
  const t =
      void 0 !== e.canvas
        ? e.canvas
        : (function () {
            const e = y("canvas");
            return (e.style.display = "block"), e;
          })(),
    n = void 0 !== e.context ? e.context : null,
    i = void 0 === e.depth || e.depth,
    r = void 0 === e.stencil || e.stencil,
    a = void 0 !== e.antialias && e.antialias,
    s = void 0 === e.premultipliedAlpha || e.premultipliedAlpha,
    o = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer,
    l = void 0 !== e.powerPreference ? e.powerPreference : "default",
    c =
      void 0 !== e.failIfMajorPerformanceCaveat &&
      e.failIfMajorPerformanceCaveat;
  let h;
  h =
    null !== n ? n.getContextAttributes().alpha : void 0 !== e.alpha && e.alpha;
  let u = null,
    d = null;
  const p = [],
    f = [];
  (this.domElement = t),
    (this.debug = { checkShaderErrors: !0 }),
    (this.autoClear = !0),
    (this.autoClearColor = !0),
    (this.autoClearDepth = !0),
    (this.autoClearStencil = !0),
    (this.sortObjects = !0),
    (this.clippingPlanes = []),
    (this.localClippingEnabled = !1),
    (this.outputEncoding = 3e3),
    (this.physicallyCorrectLights = !1),
    (this.toneMapping = 0),
    (this.toneMappingExposure = 1),
    Object.defineProperties(this, {
      gammaFactor: {
        get: function () {
          return (
            console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),
            2
          );
        },
        set: function () {
          console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.");
        },
      },
    });
  const m = this;
  let _ = !1,
    x = 0,
    M = 0,
    b = null,
    S = -1,
    w = null;
  const T = new F(),
    E = new F();
  let A = null,
    C = t.width,
    L = t.height,
    R = 1,
    P = null,
    D = null;
  const I = new F(0, 0, C, L),
    N = new F(0, 0, C, L);
  let O = !1;
  const z = new tn();
  let U = !1,
    k = !1,
    V = null;
  const H = new ye(),
    W = new v(),
    j = new G(),
    q = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0,
    };
  function X() {
    return null === b ? R : 1;
  }
  let Y,
    Z,
    K,
    J,
    Q,
    $,
    ee,
    te,
    ne,
    ie,
    re,
    ae,
    se,
    oe,
    le,
    ce,
    he,
    ue,
    de,
    pe,
    fe,
    me,
    ge,
    ve = n;
  function _e(e, n) {
    for (let i = 0; i < e.length; i++) {
      const r = e[i],
        a = t.getContext(r, n);
      if (null !== a) return a;
    }
    return null;
  }
  try {
    const e = {
      alpha: !0,
      depth: i,
      stencil: r,
      antialias: a,
      premultipliedAlpha: s,
      preserveDrawingBuffer: o,
      powerPreference: l,
      failIfMajorPerformanceCaveat: c,
    };
    if (
      ("setAttribute" in t && t.setAttribute("data-engine", "three.js r142"),
      t.addEventListener("webglcontextlost", be, !1),
      t.addEventListener("webglcontextrestored", Se, !1),
      t.addEventListener("webglcontextcreationerror", we, !1),
      null === ve)
    ) {
      const t = ["webgl2", "webgl", "experimental-webgl"];
      if (
        (!0 === m.isWebGL1Renderer && t.shift(), (ve = _e(t, e)), null === ve)
      )
        throw _e(t)
          ? new Error(
              "Error creating WebGL context with your selected attributes."
            )
          : new Error("Error creating WebGL context.");
    }
    void 0 === ve.getShaderPrecisionFormat &&
      (ve.getShaderPrecisionFormat = function () {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
  } catch (e) {
    throw (console.error("THREE.WebGLRenderer: " + e.message), e);
  }
  function xe() {
    (Y = new Rn(ve)),
      (Z = new dn(ve, Y, e)),
      Y.init(Z),
      (me = new Ar(ve, Y, Z)),
      (K = new Tr(ve, Y, Z)),
      (J = new In()),
      (Q = new ur()),
      ($ = new Er(ve, Y, K, Q, Z, me, J)),
      (ee = new fn(m)),
      (te = new Ln(m)),
      (ne = new rn(ve, Z)),
      (ge = new hn(ve, Y, ne, Z)),
      (ie = new Pn(ve, ne, J, ge)),
      (re = new Fn(ve, ie, ne, J)),
      (de = new Un(ve, Z, $)),
      (ce = new pn(Q)),
      (ae = new hr(m, ee, te, Y, Z, ge, ce)),
      (se = new Nr(m, Q)),
      (oe = new mr()),
      (le = new Mr(Y, Z)),
      (ue = new cn(m, ee, K, re, h, s)),
      (he = new wr(m, re, Z)),
      (pe = new un(ve, Y, J, Z)),
      (fe = new Dn(ve, Y, J, Z)),
      (J.programs = ae.programs),
      (m.capabilities = Z),
      (m.extensions = Y),
      (m.properties = Q),
      (m.renderLists = oe),
      (m.shadowMap = he),
      (m.state = K),
      (m.info = J);
  }
  xe();
  const Me = new Ir(m, ve);
  function be(e) {
    e.preventDefault(),
      console.log("THREE.WebGLRenderer: Context Lost."),
      (_ = !0);
  }
  function Se() {
    console.log("THREE.WebGLRenderer: Context Restored."), (_ = !1);
    const e = J.autoReset,
      t = he.enabled,
      n = he.autoUpdate,
      i = he.needsUpdate,
      r = he.type;
    xe(),
      (J.autoReset = e),
      (he.enabled = t),
      (he.autoUpdate = n),
      (he.needsUpdate = i),
      (he.type = r);
  }
  function we(e) {
    console.error(
      "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
      e.statusMessage
    );
  }
  function Te(e) {
    const t = e.target;
    t.removeEventListener("dispose", Te),
      (function (e) {
        (function (e) {
          const t = Q.get(e).programs;
          void 0 !== t &&
            (t.forEach(function (e) {
              ae.releaseProgram(e);
            }),
            e.isShaderMaterial && ae.releaseShaderCache(e));
        })(e),
          Q.remove(e);
      })(t);
  }
  (this.xr = Me),
    (this.getContext = function () {
      return ve;
    }),
    (this.getContextAttributes = function () {
      return ve.getContextAttributes();
    }),
    (this.forceContextLoss = function () {
      const e = Y.get("WEBGL_lose_context");
      e && e.loseContext();
    }),
    (this.forceContextRestore = function () {
      const e = Y.get("WEBGL_lose_context");
      e && e.restoreContext();
    }),
    (this.getPixelRatio = function () {
      return R;
    }),
    (this.setPixelRatio = function (e) {
      void 0 !== e && ((R = e), this.setSize(C, L, !1));
    }),
    (this.getSize = function (e) {
      return e.set(C, L);
    }),
    (this.setSize = function (e, n, i) {
      Me.isPresenting
        ? console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting."
          )
        : ((C = e),
          (L = n),
          (t.width = Math.floor(e * R)),
          (t.height = Math.floor(n * R)),
          !1 !== i && ((t.style.width = e + "px"), (t.style.height = n + "px")),
          this.setViewport(0, 0, e, n));
    }),
    (this.getDrawingBufferSize = function (e) {
      return e.set(C * R, L * R).floor();
    }),
    (this.setDrawingBufferSize = function (e, n, i) {
      (C = e),
        (L = n),
        (R = i),
        (t.width = Math.floor(e * i)),
        (t.height = Math.floor(n * i)),
        this.setViewport(0, 0, e, n);
    }),
    (this.getCurrentViewport = function (e) {
      return e.copy(T);
    }),
    (this.getViewport = function (e) {
      return e.copy(I);
    }),
    (this.setViewport = function (e, t, n, i) {
      e.isVector4 ? I.set(e.x, e.y, e.z, e.w) : I.set(e, t, n, i),
        K.viewport(T.copy(I).multiplyScalar(R).floor());
    }),
    (this.getScissor = function (e) {
      return e.copy(N);
    }),
    (this.setScissor = function (e, t, n, i) {
      e.isVector4 ? N.set(e.x, e.y, e.z, e.w) : N.set(e, t, n, i),
        K.scissor(E.copy(N).multiplyScalar(R).floor());
    }),
    (this.getScissorTest = function () {
      return O;
    }),
    (this.setScissorTest = function (e) {
      K.setScissorTest((O = e));
    }),
    (this.setOpaqueSort = function (e) {
      P = e;
    }),
    (this.setTransparentSort = function (e) {
      D = e;
    }),
    (this.getClearColor = function (e) {
      return e.copy(ue.getClearColor());
    }),
    (this.setClearColor = function () {
      ue.setClearColor.apply(ue, arguments);
    }),
    (this.getClearAlpha = function () {
      return ue.getClearAlpha();
    }),
    (this.setClearAlpha = function () {
      ue.setClearAlpha.apply(ue, arguments);
    }),
    (this.clear = function (e = !0, t = !0, n = !0) {
      let i = 0;
      e && (i |= 16384), t && (i |= 256), n && (i |= 1024), ve.clear(i);
    }),
    (this.clearColor = function () {
      this.clear(!0, !1, !1);
    }),
    (this.clearDepth = function () {
      this.clear(!1, !0, !1);
    }),
    (this.clearStencil = function () {
      this.clear(!1, !1, !0);
    }),
    (this.dispose = function () {
      t.removeEventListener("webglcontextlost", be, !1),
        t.removeEventListener("webglcontextrestored", Se, !1),
        t.removeEventListener("webglcontextcreationerror", we, !1),
        oe.dispose(),
        le.dispose(),
        Q.dispose(),
        ee.dispose(),
        te.dispose(),
        re.dispose(),
        ge.dispose(),
        ae.dispose(),
        Me.dispose(),
        Me.removeEventListener("sessionstart", Ae),
        Me.removeEventListener("sessionend", Ce),
        V && (V.dispose(), (V = null)),
        Le.stop();
    }),
    (this.renderBufferDirect = function (e, t, n, i, r, a) {
      null === t && (t = q);
      const s = r.isMesh && r.matrixWorld.determinant() < 0,
        o = (function (e, t, n, i, r) {
          !0 !== t.isScene && (t = q);
          $.resetTextureUnits();
          const a = t.fog,
            s = i.isMeshStandardMaterial ? t.environment : null,
            o =
              null === b
                ? m.outputEncoding
                : !0 === b.isXRRenderTarget
                ? b.texture.encoding
                : 3e3,
            l = (i.isMeshStandardMaterial ? te : ee).get(i.envMap || s),
            c =
              !0 === i.vertexColors &&
              !!n.attributes.color &&
              4 === n.attributes.color.itemSize,
            h = !!i.normalMap && !!n.attributes.tangent,
            u = !!n.morphAttributes.position,
            p = !!n.morphAttributes.normal,
            f = !!n.morphAttributes.color,
            g = i.toneMapped ? m.toneMapping : 0,
            v =
              n.morphAttributes.position ||
              n.morphAttributes.normal ||
              n.morphAttributes.color,
            _ = void 0 !== v ? v.length : 0,
            x = Q.get(i),
            y = d.state.lights;
          if (!0 === U && (!0 === k || e !== w)) {
            const t = e === w && i.id === S;
            ce.setState(i, e, t);
          }
          let M = !1;
          i.version === x.__version
            ? (x.needsLights && x.lightsStateVersion !== y.state.version) ||
              x.outputEncoding !== o ||
              (r.isInstancedMesh && !1 === x.instancing)
              ? (M = !0)
              : r.isInstancedMesh || !0 !== x.instancing
              ? r.isSkinnedMesh && !1 === x.skinning
                ? (M = !0)
                : r.isSkinnedMesh || !0 !== x.skinning
                ? x.envMap !== l || (!0 === i.fog && x.fog !== a)
                  ? (M = !0)
                  : void 0 === x.numClippingPlanes ||
                    (x.numClippingPlanes === ce.numPlanes &&
                      x.numIntersection === ce.numIntersection)
                  ? (x.vertexAlphas !== c ||
                      x.vertexTangents !== h ||
                      x.morphTargets !== u ||
                      x.morphNormals !== p ||
                      x.morphColors !== f ||
                      x.toneMapping !== g ||
                      (!0 === Z.isWebGL2 && x.morphTargetsCount !== _)) &&
                    (M = !0)
                  : (M = !0)
                : (M = !0)
              : (M = !0)
            : ((M = !0), (x.__version = i.version));
          let T = x.currentProgram;
          !0 === M && (T = Ne(i, t, r));
          let E = !1,
            A = !1,
            C = !1;
          const P = T.getUniforms(),
            D = x.uniforms;
          K.useProgram(T.program) && ((E = !0), (A = !0), (C = !0));
          i.id !== S && ((S = i.id), (A = !0));
          if (E || w !== e) {
            if (
              (P.setValue(ve, "projectionMatrix", e.projectionMatrix),
              Z.logarithmicDepthBuffer &&
                P.setValue(
                  ve,
                  "logDepthBufFC",
                  2 / (Math.log(e.far + 1) / Math.LN2)
                ),
              w !== e && ((w = e), (A = !0), (C = !0)),
              i.isShaderMaterial ||
                i.isMeshPhongMaterial ||
                i.isMeshToonMaterial ||
                i.isMeshStandardMaterial ||
                i.envMap)
            ) {
              const t = P.map.cameraPosition;
              void 0 !== t &&
                t.setValue(ve, j.setFromMatrixPosition(e.matrixWorld));
            }
            (i.isMeshPhongMaterial ||
              i.isMeshToonMaterial ||
              i.isMeshLambertMaterial ||
              i.isMeshBasicMaterial ||
              i.isMeshStandardMaterial ||
              i.isShaderMaterial) &&
              P.setValue(ve, "isOrthographic", !0 === e.isOrthographicCamera),
              (i.isMeshPhongMaterial ||
                i.isMeshToonMaterial ||
                i.isMeshLambertMaterial ||
                i.isMeshBasicMaterial ||
                i.isMeshStandardMaterial ||
                i.isShaderMaterial ||
                i.isShadowMaterial ||
                r.isSkinnedMesh) &&
                P.setValue(ve, "viewMatrix", e.matrixWorldInverse);
          }
          if (r.isSkinnedMesh) {
            P.setOptional(ve, r, "bindMatrix"),
              P.setOptional(ve, r, "bindMatrixInverse");
            const e = r.skeleton;
            e &&
              (Z.floatVertexTextures
                ? (null === e.boneTexture && e.computeBoneTexture(),
                  P.setValue(ve, "boneTexture", e.boneTexture, $),
                  P.setValue(ve, "boneTextureSize", e.boneTextureSize))
                : console.warn(
                    "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
                  ));
          }
          const I = n.morphAttributes;
          (void 0 !== I.position ||
            void 0 !== I.normal ||
            (void 0 !== I.color && !0 === Z.isWebGL2)) &&
            de.update(r, n, i, T);
          (A || x.receiveShadow !== r.receiveShadow) &&
            ((x.receiveShadow = r.receiveShadow),
            P.setValue(ve, "receiveShadow", r.receiveShadow));
          A &&
            (P.setValue(ve, "toneMappingExposure", m.toneMappingExposure),
            x.needsLights &&
              ((O = C),
              ((N = D).ambientLightColor.needsUpdate = O),
              (N.lightProbe.needsUpdate = O),
              (N.directionalLights.needsUpdate = O),
              (N.directionalLightShadows.needsUpdate = O),
              (N.pointLights.needsUpdate = O),
              (N.pointLightShadows.needsUpdate = O),
              (N.spotLights.needsUpdate = O),
              (N.spotLightShadows.needsUpdate = O),
              (N.rectAreaLights.needsUpdate = O),
              (N.hemisphereLights.needsUpdate = O)),
            a && !0 === i.fog && se.refreshFogUniforms(D, a),
            se.refreshMaterialUniforms(D, i, R, L, V),
            Hi.upload(ve, x.uniformsList, D, $));
          var N, O;
          i.isShaderMaterial &&
            !0 === i.uniformsNeedUpdate &&
            (Hi.upload(ve, x.uniformsList, D, $), (i.uniformsNeedUpdate = !1));
          i.isSpriteMaterial && P.setValue(ve, "center", r.center);
          return (
            P.setValue(ve, "modelViewMatrix", r.modelViewMatrix),
            P.setValue(ve, "normalMatrix", r.normalMatrix),
            P.setValue(ve, "modelMatrix", r.matrixWorld),
            T
          );
        })(e, t, n, i, r);
      K.setMaterial(i, s);
      let l = n.index;
      const c = n.attributes.position;
      if (null === l) {
        if (void 0 === c || 0 === c.count) return;
      } else if (0 === l.count) return;
      let h,
        u = 1;
      !0 === i.wireframe && ((l = ie.getWireframeAttribute(n)), (u = 2)),
        ge.setup(r, i, o, n, l);
      let p = pe;
      null !== l && ((h = ne.get(l)), (p = fe), p.setIndex(h));
      const f = null !== l ? l.count : c.count,
        g = n.drawRange.start * u,
        v = n.drawRange.count * u,
        _ = null !== a ? a.start * u : 0,
        x = null !== a ? a.count * u : 1 / 0,
        y = Math.max(g, _),
        M = Math.min(f, g + v, _ + x) - 1,
        T = Math.max(0, M - y + 1);
      if (0 !== T) {
        if (r.isMesh)
          !0 === i.wireframe
            ? (K.setLineWidth(i.wireframeLinewidth * X()), p.setMode(1))
            : p.setMode(4);
        else if (r.isLine) {
          let e = i.linewidth;
          void 0 === e && (e = 1),
            K.setLineWidth(e * X()),
            r.isLineSegments
              ? p.setMode(1)
              : r.isLineLoop
              ? p.setMode(2)
              : p.setMode(3);
        } else r.isPoints ? p.setMode(0) : r.isSprite && p.setMode(4);
        if (r.isInstancedMesh) p.renderInstances(y, T, r.count);
        else if (n.isInstancedBufferGeometry) {
          const e = Math.min(n.instanceCount, n._maxInstanceCount);
          p.renderInstances(y, T, e);
        } else p.render(y, T);
      }
    }),
    (this.compile = function (e, t) {
      (d = le.get(e)),
        d.init(),
        f.push(d),
        e.traverseVisible(function (e) {
          e.isLight &&
            e.layers.test(t.layers) &&
            (d.pushLight(e), e.castShadow && d.pushShadow(e));
        }),
        d.setupLights(m.physicallyCorrectLights),
        e.traverse(function (t) {
          const n = t.material;
          if (n)
            if (Array.isArray(n))
              for (let i = 0; i < n.length; i++) {
                Ne(n[i], e, t);
              }
            else Ne(n, e, t);
        }),
        f.pop(),
        (d = null);
    });
  let Ee = null;
  function Ae() {
    Le.stop();
  }
  function Ce() {
    Le.start();
  }
  const Le = new nn();
  function Re(e, t, n, i) {
    if (!1 === e.visible) return;
    if (e.layers.test(t.layers))
      if (e.isGroup) n = e.renderOrder;
      else if (e.isLOD) !0 === e.autoUpdate && e.update(t);
      else if (e.isLight) d.pushLight(e), e.castShadow && d.pushShadow(e);
      else if (e.isSprite) {
        if (!e.frustumCulled || z.intersectsSprite(e)) {
          i && j.setFromMatrixPosition(e.matrixWorld).applyMatrix4(H);
          const t = re.update(e),
            r = e.material;
          r.visible && u.push(e, t, r, n, j.z, null);
        }
      } else if (
        (e.isMesh || e.isLine || e.isPoints) &&
        (e.isSkinnedMesh &&
          e.skeleton.frame !== J.render.frame &&
          (e.skeleton.update(), (e.skeleton.frame = J.render.frame)),
        !e.frustumCulled || z.intersectsObject(e))
      ) {
        i && j.setFromMatrixPosition(e.matrixWorld).applyMatrix4(H);
        const t = re.update(e),
          r = e.material;
        if (Array.isArray(r)) {
          const i = t.groups;
          for (let a = 0, s = i.length; a < s; a++) {
            const s = i[a],
              o = r[s.materialIndex];
            o && o.visible && u.push(e, t, o, n, j.z, s);
          }
        } else r.visible && u.push(e, t, r, n, j.z, null);
      }
    const r = e.children;
    for (let e = 0, a = r.length; e < a; e++) Re(r[e], t, n, i);
  }
  function Pe(e, t, n, i) {
    const r = e.opaque,
      s = e.transmissive,
      o = e.transparent;
    d.setupLightsView(n),
      s.length > 0 &&
        (function (e, t, n) {
          const i = Z.isWebGL2;
          null === V &&
            (V = new B(1, 1, {
              generateMipmaps: !0,
              type: Y.has("EXT_color_buffer_half_float") ? 1016 : 1009,
              minFilter: 1008,
              samples: i && !0 === a ? 4 : 0,
            }));
          m.getDrawingBufferSize(W),
            i ? V.setSize(W.x, W.y) : V.setSize(g(W.x), g(W.y));
          const r = m.getRenderTarget();
          m.setRenderTarget(V), m.clear();
          const s = m.toneMapping;
          (m.toneMapping = 0),
            De(e, t, n),
            (m.toneMapping = s),
            $.updateMultisampleRenderTarget(V),
            $.updateRenderTargetMipmap(V),
            m.setRenderTarget(r);
        })(r, t, n),
      i && K.viewport(T.copy(i)),
      r.length > 0 && De(r, t, n),
      s.length > 0 && De(s, t, n),
      o.length > 0 && De(o, t, n),
      K.buffers.depth.setTest(!0),
      K.buffers.depth.setMask(!0),
      K.buffers.color.setMask(!0),
      K.setPolygonOffset(!1);
  }
  function De(e, t, n) {
    const i = !0 === t.isScene ? t.overrideMaterial : null;
    for (let r = 0, a = e.length; r < a; r++) {
      const a = e[r],
        s = a.object,
        o = a.geometry,
        l = null === i ? a.material : i,
        c = a.group;
      s.layers.test(n.layers) && Ie(s, t, n, o, l, c);
    }
  }
  function Ie(e, t, n, i, r, a) {
    e.onBeforeRender(m, t, n, i, r, a),
      e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld),
      e.normalMatrix.getNormalMatrix(e.modelViewMatrix),
      r.onBeforeRender(m, t, n, i, e, a),
      !0 === r.transparent && 2 === r.side
        ? ((r.side = 1),
          (r.needsUpdate = !0),
          m.renderBufferDirect(n, t, i, r, e, a),
          (r.side = 0),
          (r.needsUpdate = !0),
          m.renderBufferDirect(n, t, i, r, e, a),
          (r.side = 2))
        : m.renderBufferDirect(n, t, i, r, e, a),
      e.onAfterRender(m, t, n, i, r, a);
  }
  function Ne(e, t, n) {
    !0 !== t.isScene && (t = q);
    const i = Q.get(e),
      r = d.state.lights,
      a = d.state.shadowsArray,
      s = r.state.version,
      o = ae.getParameters(e, r.state, a, t, n),
      l = ae.getProgramCacheKey(o);
    let c = i.programs;
    (i.environment = e.isMeshStandardMaterial ? t.environment : null),
      (i.fog = t.fog),
      (i.envMap = (e.isMeshStandardMaterial ? te : ee).get(
        e.envMap || i.environment
      )),
      void 0 === c &&
        (e.addEventListener("dispose", Te), (c = new Map()), (i.programs = c));
    let h = c.get(l);
    if (void 0 !== h) {
      if (i.currentProgram === h && i.lightsStateVersion === s)
        return Oe(e, o), h;
    } else
      (o.uniforms = ae.getUniforms(e)),
        e.onBuild(n, o, m),
        e.onBeforeCompile(o, m),
        (h = ae.acquireProgram(o, l)),
        c.set(l, h),
        (i.uniforms = o.uniforms);
    const u = i.uniforms;
    ((e.isShaderMaterial || e.isRawShaderMaterial) && !0 !== e.clipping) ||
      (u.clippingPlanes = ce.uniform),
      Oe(e, o),
      (i.needsLights = (function (e) {
        return (
          e.isMeshLambertMaterial ||
          e.isMeshToonMaterial ||
          e.isMeshPhongMaterial ||
          e.isMeshStandardMaterial ||
          e.isShadowMaterial ||
          (e.isShaderMaterial && !0 === e.lights)
        );
      })(e)),
      (i.lightsStateVersion = s),
      i.needsLights &&
        ((u.ambientLightColor.value = r.state.ambient),
        (u.lightProbe.value = r.state.probe),
        (u.directionalLights.value = r.state.directional),
        (u.directionalLightShadows.value = r.state.directionalShadow),
        (u.spotLights.value = r.state.spot),
        (u.spotLightShadows.value = r.state.spotShadow),
        (u.rectAreaLights.value = r.state.rectArea),
        (u.ltc_1.value = r.state.rectAreaLTC1),
        (u.ltc_2.value = r.state.rectAreaLTC2),
        (u.pointLights.value = r.state.point),
        (u.pointLightShadows.value = r.state.pointShadow),
        (u.hemisphereLights.value = r.state.hemi),
        (u.directionalShadowMap.value = r.state.directionalShadowMap),
        (u.directionalShadowMatrix.value = r.state.directionalShadowMatrix),
        (u.spotShadowMap.value = r.state.spotShadowMap),
        (u.spotShadowMatrix.value = r.state.spotShadowMatrix),
        (u.pointShadowMap.value = r.state.pointShadowMap),
        (u.pointShadowMatrix.value = r.state.pointShadowMatrix));
    const p = h.getUniforms(),
      f = Hi.seqWithValue(p.seq, u);
    return (i.currentProgram = h), (i.uniformsList = f), h;
  }
  function Oe(e, t) {
    const n = Q.get(e);
    (n.outputEncoding = t.outputEncoding),
      (n.instancing = t.instancing),
      (n.skinning = t.skinning),
      (n.morphTargets = t.morphTargets),
      (n.morphNormals = t.morphNormals),
      (n.morphColors = t.morphColors),
      (n.morphTargetsCount = t.morphTargetsCount),
      (n.numClippingPlanes = t.numClippingPlanes),
      (n.numIntersection = t.numClipIntersection),
      (n.vertexAlphas = t.vertexAlphas),
      (n.vertexTangents = t.vertexTangents),
      (n.toneMapping = t.toneMapping);
  }
  Le.setAnimationLoop(function (e) {
    Ee && Ee(e);
  }),
    "undefined" != typeof self && Le.setContext(self),
    (this.setAnimationLoop = function (e) {
      (Ee = e), Me.setAnimationLoop(e), null === e ? Le.stop() : Le.start();
    }),
    Me.addEventListener("sessionstart", Ae),
    Me.addEventListener("sessionend", Ce),
    (this.render = function (e, t) {
      if (void 0 !== t && !0 !== t.isCamera)
        return void console.error(
          "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
        );
      if (!0 === _) return;
      !0 === e.autoUpdate && e.updateMatrixWorld(),
        null === t.parent && t.updateMatrixWorld(),
        !0 === Me.enabled &&
          !0 === Me.isPresenting &&
          (!0 === Me.cameraAutoUpdate && Me.updateCamera(t),
          (t = Me.getCamera())),
        !0 === e.isScene && e.onBeforeRender(m, e, t, b),
        (d = le.get(e, f.length)),
        d.init(),
        f.push(d),
        H.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
        z.setFromProjectionMatrix(H),
        (k = this.localClippingEnabled),
        (U = ce.init(this.clippingPlanes, k, t)),
        (u = oe.get(e, p.length)),
        u.init(),
        p.push(u),
        Re(e, t, 0, m.sortObjects),
        u.finish(),
        !0 === m.sortObjects && u.sort(P, D),
        !0 === U && ce.beginShadows();
      const n = d.state.shadowsArray;
      if (
        (he.render(n, e, t),
        !0 === U && ce.endShadows(),
        !0 === this.info.autoReset && this.info.reset(),
        ue.render(u, e),
        d.setupLights(m.physicallyCorrectLights),
        t.isArrayCamera)
      ) {
        const n = t.cameras;
        for (let t = 0, i = n.length; t < i; t++) {
          const i = n[t];
          Pe(u, e, i, i.viewport);
        }
      } else Pe(u, e, t);
      null !== b &&
        ($.updateMultisampleRenderTarget(b), $.updateRenderTargetMipmap(b)),
        !0 === e.isScene && e.onAfterRender(m, e, t),
        ge.resetDefaultState(),
        (S = -1),
        (w = null),
        f.pop(),
        (d = f.length > 0 ? f[f.length - 1] : null),
        p.pop(),
        (u = p.length > 0 ? p[p.length - 1] : null);
    }),
    (this.getActiveCubeFace = function () {
      return x;
    }),
    (this.getActiveMipmapLevel = function () {
      return M;
    }),
    (this.getRenderTarget = function () {
      return b;
    }),
    (this.setRenderTargetTextures = function (e, t, n) {
      (Q.get(e.texture).__webglTexture = t),
        (Q.get(e.depthTexture).__webglTexture = n);
      const i = Q.get(e);
      (i.__hasExternalTextures = !0),
        i.__hasExternalTextures &&
          ((i.__autoAllocateDepthBuffer = void 0 === n),
          i.__autoAllocateDepthBuffer ||
            (!0 === Y.has("WEBGL_multisampled_render_to_texture") &&
              (console.warn(
                "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
              ),
              (i.__useRenderToTexture = !1))));
    }),
    (this.setRenderTargetFramebuffer = function (e, t) {
      const n = Q.get(e);
      (n.__webglFramebuffer = t), (n.__useDefaultFramebuffer = void 0 === t);
    }),
    (this.setRenderTarget = function (e, t = 0, n = 0) {
      (b = e), (x = t), (M = n);
      let i = !0;
      if (e) {
        const t = Q.get(e);
        void 0 !== t.__useDefaultFramebuffer
          ? (K.bindFramebuffer(36160, null), (i = !1))
          : void 0 === t.__webglFramebuffer
          ? $.setupRenderTarget(e)
          : t.__hasExternalTextures &&
            $.rebindTextures(
              e,
              Q.get(e.texture).__webglTexture,
              Q.get(e.depthTexture).__webglTexture
            );
      }
      let r = null,
        a = !1,
        s = !1;
      if (e) {
        const n = e.texture;
        (n.isData3DTexture || n.isDataArrayTexture) && (s = !0);
        const i = Q.get(e).__webglFramebuffer;
        e.isWebGLCubeRenderTarget
          ? ((r = i[t]), (a = !0))
          : (r =
              Z.isWebGL2 && e.samples > 0 && !1 === $.useMultisampledRTT(e)
                ? Q.get(e).__webglMultisampledFramebuffer
                : i),
          T.copy(e.viewport),
          E.copy(e.scissor),
          (A = e.scissorTest);
      } else
        T.copy(I).multiplyScalar(R).floor(),
          E.copy(N).multiplyScalar(R).floor(),
          (A = O);
      if (
        (K.bindFramebuffer(36160, r) &&
          Z.drawBuffers &&
          i &&
          K.drawBuffers(e, r),
        K.viewport(T),
        K.scissor(E),
        K.setScissorTest(A),
        a)
      ) {
        const i = Q.get(e.texture);
        ve.framebufferTexture2D(36160, 36064, 34069 + t, i.__webglTexture, n);
      } else if (s) {
        const i = Q.get(e.texture),
          r = t || 0;
        ve.framebufferTextureLayer(36160, 36064, i.__webglTexture, n || 0, r);
      }
      S = -1;
    }),
    (this.readRenderTargetPixels = function (e, t, n, i, r, a, s) {
      if (!e || !e.isWebGLRenderTarget)
        return void console.error(
          "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
        );
      let o = Q.get(e).__webglFramebuffer;
      if ((e.isWebGLCubeRenderTarget && void 0 !== s && (o = o[s]), o)) {
        K.bindFramebuffer(36160, o);
        try {
          const s = e.texture,
            o = s.format,
            l = s.type;
          if (1023 !== o && me.convert(o) !== ve.getParameter(35739))
            return void console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
            );
          const c =
            1016 === l &&
            (Y.has("EXT_color_buffer_half_float") ||
              (Z.isWebGL2 && Y.has("EXT_color_buffer_float")));
          if (
            !(
              1009 === l ||
              me.convert(l) === ve.getParameter(35738) ||
              (1015 === l &&
                (Z.isWebGL2 ||
                  Y.has("OES_texture_float") ||
                  Y.has("WEBGL_color_buffer_float"))) ||
              c
            )
          )
            return void console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
            );
          t >= 0 &&
            t <= e.width - i &&
            n >= 0 &&
            n <= e.height - r &&
            ve.readPixels(t, n, i, r, me.convert(o), me.convert(l), a);
        } finally {
          const e = null !== b ? Q.get(b).__webglFramebuffer : null;
          K.bindFramebuffer(36160, e);
        }
      }
    }),
    (this.copyFramebufferToTexture = function (e, t, n = 0) {
      const i = Math.pow(2, -n),
        r = Math.floor(t.image.width * i),
        a = Math.floor(t.image.height * i);
      $.setTexture2D(t, 0),
        ve.copyTexSubImage2D(3553, n, 0, 0, e.x, e.y, r, a),
        K.unbindTexture();
    }),
    (this.copyTextureToTexture = function (e, t, n, i = 0) {
      const r = t.image.width,
        a = t.image.height,
        s = me.convert(n.format),
        o = me.convert(n.type);
      $.setTexture2D(n, 0),
        ve.pixelStorei(37440, n.flipY),
        ve.pixelStorei(37441, n.premultiplyAlpha),
        ve.pixelStorei(3317, n.unpackAlignment),
        t.isDataTexture
          ? ve.texSubImage2D(3553, i, e.x, e.y, r, a, s, o, t.image.data)
          : t.isCompressedTexture
          ? ve.compressedTexSubImage2D(
              3553,
              i,
              e.x,
              e.y,
              t.mipmaps[0].width,
              t.mipmaps[0].height,
              s,
              t.mipmaps[0].data
            )
          : ve.texSubImage2D(3553, i, e.x, e.y, s, o, t.image),
        0 === i && n.generateMipmaps && ve.generateMipmap(3553),
        K.unbindTexture();
    }),
    (this.copyTextureToTexture3D = function (e, t, n, i, r = 0) {
      if (m.isWebGL1Renderer)
        return void console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
        );
      const a = e.max.x - e.min.x + 1,
        s = e.max.y - e.min.y + 1,
        o = e.max.z - e.min.z + 1,
        l = me.convert(i.format),
        c = me.convert(i.type);
      let h;
      if (i.isData3DTexture) $.setTexture3D(i, 0), (h = 32879);
      else {
        if (!i.isDataArrayTexture)
          return void console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
          );
        $.setTexture2DArray(i, 0), (h = 35866);
      }
      ve.pixelStorei(37440, i.flipY),
        ve.pixelStorei(37441, i.premultiplyAlpha),
        ve.pixelStorei(3317, i.unpackAlignment);
      const u = ve.getParameter(3314),
        d = ve.getParameter(32878),
        p = ve.getParameter(3316),
        f = ve.getParameter(3315),
        g = ve.getParameter(32877),
        v = n.isCompressedTexture ? n.mipmaps[0] : n.image;
      ve.pixelStorei(3314, v.width),
        ve.pixelStorei(32878, v.height),
        ve.pixelStorei(3316, e.min.x),
        ve.pixelStorei(3315, e.min.y),
        ve.pixelStorei(32877, e.min.z),
        n.isDataTexture || n.isData3DTexture
          ? ve.texSubImage3D(h, r, t.x, t.y, t.z, a, s, o, l, c, v.data)
          : n.isCompressedTexture
          ? (console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
            ),
            ve.compressedTexSubImage3D(h, r, t.x, t.y, t.z, a, s, o, l, v.data))
          : ve.texSubImage3D(h, r, t.x, t.y, t.z, a, s, o, l, c, v),
        ve.pixelStorei(3314, u),
        ve.pixelStorei(32878, d),
        ve.pixelStorei(3316, p),
        ve.pixelStorei(3315, f),
        ve.pixelStorei(32877, g),
        0 === r && i.generateMipmaps && ve.generateMipmap(h),
        K.unbindTexture();
    }),
    (this.initTexture = function (e) {
      e.isCubeTexture
        ? $.setTextureCube(e, 0)
        : e.isData3DTexture
        ? $.setTexture3D(e, 0)
        : e.isDataArrayTexture
        ? $.setTexture2DArray(e, 0)
        : $.setTexture2D(e, 0),
        K.unbindTexture();
    }),
    (this.resetState = function () {
      (x = 0), (M = 0), (b = null), K.reset(), ge.reset();
    }),
    "undefined" != typeof __THREE_DEVTOOLS__ &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent("observe", { detail: this })
      );
}
class zr extends Or {}
zr.prototype.isWebGL1Renderer = !0;
class Ur extends je {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.overrideMaterial = null),
      (this.autoUpdate = !0),
      "undefined" != typeof __THREE_DEVTOOLS__ &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      null !== e.background && (this.background = e.background.clone()),
      null !== e.environment && (this.environment = e.environment.clone()),
      null !== e.fog && (this.fog = e.fog.clone()),
      null !== e.overrideMaterial &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.autoUpdate = e.autoUpdate),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return null !== this.fog && (t.object.fog = this.fog.toJSON()), t;
  }
}
class Fr extends U {
  constructor(e = null, t = 1, n = 1, i, r, a, s, o, l = 1003, c = 1003, h, u) {
    super(null, a, s, o, l, c, i, r, h, u),
      (this.isDataTexture = !0),
      (this.image = { data: e, width: t, height: n }),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Br extends xt {
  constructor(
    e = 1,
    t = 32,
    n = 16,
    i = 0,
    r = 2 * Math.PI,
    a = 0,
    s = Math.PI
  ) {
    super(),
      (this.type = "SphereGeometry"),
      (this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: n,
        phiStart: i,
        phiLength: r,
        thetaStart: a,
        thetaLength: s,
      }),
      (t = Math.max(3, Math.floor(t))),
      (n = Math.max(2, Math.floor(n)));
    const o = Math.min(a + s, Math.PI);
    let l = 0;
    const c = [],
      h = new G(),
      u = new G(),
      d = [],
      p = [],
      f = [],
      m = [];
    for (let d = 0; d <= n; d++) {
      const g = [],
        v = d / n;
      let _ = 0;
      0 == d && 0 == a
        ? (_ = 0.5 / t)
        : d == n && o == Math.PI && (_ = -0.5 / t);
      for (let n = 0; n <= t; n++) {
        const o = n / t;
        (h.x = -e * Math.cos(i + o * r) * Math.sin(a + v * s)),
          (h.y = e * Math.cos(a + v * s)),
          (h.z = e * Math.sin(i + o * r) * Math.sin(a + v * s)),
          p.push(h.x, h.y, h.z),
          u.copy(h).normalize(),
          f.push(u.x, u.y, u.z),
          m.push(o + _, 1 - v),
          g.push(l++);
      }
      c.push(g);
    }
    for (let e = 0; e < n; e++)
      for (let i = 0; i < t; i++) {
        const t = c[e][i + 1],
          r = c[e][i],
          s = c[e + 1][i],
          l = c[e + 1][i + 1];
        (0 !== e || a > 0) && d.push(t, r, l),
          (e !== n - 1 || o < Math.PI) && d.push(r, s, l);
      }
    this.setIndex(d),
      this.setAttribute("position", new ut(p, 3)),
      this.setAttribute("normal", new ut(f, 3)),
      this.setAttribute("uv", new ut(m, 2));
  }
  static fromJSON(e) {
    return new Br(
      e.radius,
      e.widthSegments,
      e.heightSegments,
      e.phiStart,
      e.phiLength,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class kr extends rt {
  constructor(e) {
    super(),
      (this.isMeshStandardMaterial = !0),
      (this.defines = { STANDARD: "" }),
      (this.type = "MeshStandardMaterial"),
      (this.color = new P(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new P(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = 0),
      (this.normalScale = new v(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "" }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.envMapIntensity = e.envMapIntensity),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
class Vr extends kr {
  constructor(e) {
    super(),
      (this.isMeshPhysicalMaterial = !0),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.type = "MeshPhysicalMaterial"),
      (this.clearcoatMap = null),
      (this.clearcoatRoughness = 0),
      (this.clearcoatRoughnessMap = null),
      (this.clearcoatNormalScale = new v(1, 1)),
      (this.clearcoatNormalMap = null),
      (this.ior = 1.5),
      Object.defineProperty(this, "reflectivity", {
        get: function () {
          return d((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
        },
        set: function (e) {
          this.ior = (1 + 0.4 * e) / (1 - 0.4 * e);
        },
      }),
      (this.iridescenceMap = null),
      (this.iridescenceIOR = 1.3),
      (this.iridescenceThicknessRange = [100, 400]),
      (this.iridescenceThicknessMap = null),
      (this.sheenColor = new P(0)),
      (this.sheenColorMap = null),
      (this.sheenRoughness = 1),
      (this.sheenRoughnessMap = null),
      (this.transmissionMap = null),
      (this.thickness = 0),
      (this.thicknessMap = null),
      (this.attenuationDistance = 0),
      (this.attenuationColor = new P(1, 1, 1)),
      (this.specularIntensity = 1),
      (this.specularIntensityMap = null),
      (this.specularColor = new P(1, 1, 1)),
      (this.specularColorMap = null),
      (this._sheen = 0),
      (this._clearcoat = 0),
      (this._iridescence = 0),
      (this._transmission = 0),
      this.setValues(e);
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, (this._sheen = e);
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, (this._clearcoat = e);
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, (this._iridescence = e);
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, (this._transmission = e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.clearcoat = e.clearcoat),
      (this.clearcoatMap = e.clearcoatMap),
      (this.clearcoatRoughness = e.clearcoatRoughness),
      (this.clearcoatRoughnessMap = e.clearcoatRoughnessMap),
      (this.clearcoatNormalMap = e.clearcoatNormalMap),
      this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
      (this.ior = e.ior),
      (this.iridescence = e.iridescence),
      (this.iridescenceMap = e.iridescenceMap),
      (this.iridescenceIOR = e.iridescenceIOR),
      (this.iridescenceThicknessRange = [...e.iridescenceThicknessRange]),
      (this.iridescenceThicknessMap = e.iridescenceThicknessMap),
      (this.sheen = e.sheen),
      this.sheenColor.copy(e.sheenColor),
      (this.sheenColorMap = e.sheenColorMap),
      (this.sheenRoughness = e.sheenRoughness),
      (this.sheenRoughnessMap = e.sheenRoughnessMap),
      (this.transmission = e.transmission),
      (this.transmissionMap = e.transmissionMap),
      (this.thickness = e.thickness),
      (this.thicknessMap = e.thicknessMap),
      (this.attenuationDistance = e.attenuationDistance),
      this.attenuationColor.copy(e.attenuationColor),
      (this.specularIntensity = e.specularIntensity),
      (this.specularIntensityMap = e.specularIntensityMap),
      this.specularColor.copy(e.specularColor),
      (this.specularColorMap = e.specularColorMap),
      this
    );
  }
}
const Hr = {
  arraySlice: function (e, t, n) {
    return Hr.isTypedArray(e)
      ? new e.constructor(e.subarray(t, void 0 !== n ? n : e.length))
      : e.slice(t, n);
  },
  convertArray: function (e, t, n) {
    return !e || (!n && e.constructor === t)
      ? e
      : "number" == typeof t.BYTES_PER_ELEMENT
      ? new t(e)
      : Array.prototype.slice.call(e);
  },
  isTypedArray: function (e) {
    return ArrayBuffer.isView(e) && !(e instanceof DataView);
  },
  getKeyframeOrder: function (e) {
    const t = e.length,
      n = new Array(t);
    for (let e = 0; e !== t; ++e) n[e] = e;
    return (
      n.sort(function (t, n) {
        return e[t] - e[n];
      }),
      n
    );
  },
  sortedArray: function (e, t, n) {
    const i = e.length,
      r = new e.constructor(i);
    for (let a = 0, s = 0; s !== i; ++a) {
      const i = n[a] * t;
      for (let n = 0; n !== t; ++n) r[s++] = e[i + n];
    }
    return r;
  },
  flattenJSON: function (e, t, n, i) {
    let r = 1,
      a = e[0];
    for (; void 0 !== a && void 0 === a[i]; ) a = e[r++];
    if (void 0 === a) return;
    let s = a[i];
    if (void 0 !== s)
      if (Array.isArray(s))
        do {
          (s = a[i]),
            void 0 !== s && (t.push(a.time), n.push.apply(n, s)),
            (a = e[r++]);
        } while (void 0 !== a);
      else if (void 0 !== s.toArray)
        do {
          (s = a[i]),
            void 0 !== s && (t.push(a.time), s.toArray(n, n.length)),
            (a = e[r++]);
        } while (void 0 !== a);
      else
        do {
          (s = a[i]), void 0 !== s && (t.push(a.time), n.push(s)), (a = e[r++]);
        } while (void 0 !== a);
  },
  subclip: function (e, t, n, i, r = 30) {
    const a = e.clone();
    a.name = t;
    const s = [];
    for (let e = 0; e < a.tracks.length; ++e) {
      const t = a.tracks[e],
        o = t.getValueSize(),
        l = [],
        c = [];
      for (let e = 0; e < t.times.length; ++e) {
        const a = t.times[e] * r;
        if (!(a < n || a >= i)) {
          l.push(t.times[e]);
          for (let n = 0; n < o; ++n) c.push(t.values[e * o + n]);
        }
      }
      0 !== l.length &&
        ((t.times = Hr.convertArray(l, t.times.constructor)),
        (t.values = Hr.convertArray(c, t.values.constructor)),
        s.push(t));
    }
    a.tracks = s;
    let o = 1 / 0;
    for (let e = 0; e < a.tracks.length; ++e)
      o > a.tracks[e].times[0] && (o = a.tracks[e].times[0]);
    for (let e = 0; e < a.tracks.length; ++e) a.tracks[e].shift(-1 * o);
    return a.resetDuration(), a;
  },
  makeClipAdditive: function (e, t = 0, n = e, i = 30) {
    i <= 0 && (i = 30);
    const r = n.tracks.length,
      a = t / i;
    for (let t = 0; t < r; ++t) {
      const i = n.tracks[t],
        r = i.ValueTypeName;
      if ("bool" === r || "string" === r) continue;
      const s = e.tracks.find(function (e) {
        return e.name === i.name && e.ValueTypeName === r;
      });
      if (void 0 === s) continue;
      let o = 0;
      const l = i.getValueSize();
      i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
        (o = l / 3);
      let c = 0;
      const h = s.getValueSize();
      s.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline &&
        (c = h / 3);
      const u = i.times.length - 1;
      let d;
      if (a <= i.times[0]) {
        const e = o,
          t = l - o;
        d = Hr.arraySlice(i.values, e, t);
      } else if (a >= i.times[u]) {
        const e = u * l + o,
          t = e + l - o;
        d = Hr.arraySlice(i.values, e, t);
      } else {
        const e = i.createInterpolant(),
          t = o,
          n = l - o;
        e.evaluate(a), (d = Hr.arraySlice(e.resultBuffer, t, n));
      }
      if ("quaternion" === r) {
        new H().fromArray(d).normalize().conjugate().toArray(d);
      }
      const p = s.times.length;
      for (let e = 0; e < p; ++e) {
        const t = e * h + c;
        if ("quaternion" === r)
          H.multiplyQuaternionsFlat(s.values, t, d, 0, s.values, t);
        else {
          const e = h - 2 * c;
          for (let n = 0; n < e; ++n) s.values[t + n] -= d[n];
        }
      }
    }
    return (e.blendMode = 2501), e;
  },
};
class Gr {
  constructor(e, t, n, i) {
    (this.parameterPositions = e),
      (this._cachedIndex = 0),
      (this.resultBuffer = void 0 !== i ? i : new t.constructor(n)),
      (this.sampleValues = t),
      (this.valueSize = n),
      (this.settings = null),
      (this.DefaultSettings_ = {});
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex,
      i = t[n],
      r = t[n - 1];
    e: {
      t: {
        let a;
        n: {
          i: if (!(e < i)) {
            for (let a = n + 2; ; ) {
              if (void 0 === i) {
                if (e < r) break i;
                return (
                  (n = t.length),
                  (this._cachedIndex = n),
                  this.copySampleValue_(n - 1)
                );
              }
              if (n === a) break;
              if (((r = i), (i = t[++n]), e < i)) break t;
            }
            a = t.length;
            break n;
          }
          if (e >= r) break e;
          {
            const s = t[1];
            e < s && ((n = 2), (r = s));
            for (let a = n - 2; ; ) {
              if (void 0 === r)
                return (this._cachedIndex = 0), this.copySampleValue_(0);
              if (n === a) break;
              if (((i = r), (r = t[--n - 1]), e >= r)) break t;
            }
            (a = n), (n = 0);
          }
        }
        for (; n < a; ) {
          const i = (n + a) >>> 1;
          e < t[i] ? (a = i) : (n = i + 1);
        }
        if (((i = t[n]), (r = t[n - 1]), void 0 === r))
          return (this._cachedIndex = 0), this.copySampleValue_(0);
        if (void 0 === i)
          return (
            (n = t.length),
            (this._cachedIndex = n),
            this.copySampleValue_(n - 1)
          );
      }
      (this._cachedIndex = n), this.intervalChanged_(n, r, i);
    }
    return this.interpolate_(n, r, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer,
      n = this.sampleValues,
      i = this.valueSize,
      r = e * i;
    for (let e = 0; e !== i; ++e) t[e] = n[r + e];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {}
}
class Wr extends Gr {
  constructor(e, t, n, i) {
    super(e, t, n, i),
      (this._weightPrev = -0),
      (this._offsetPrev = -0),
      (this._weightNext = -0),
      (this._offsetNext = -0),
      (this.DefaultSettings_ = { endingStart: 2400, endingEnd: 2400 });
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let r = e - 2,
      a = e + 1,
      s = i[r],
      o = i[a];
    if (void 0 === s)
      switch (this.getSettings_().endingStart) {
        case 2401:
          (r = e), (s = 2 * t - n);
          break;
        case 2402:
          (r = i.length - 2), (s = t + i[r] - i[r + 1]);
          break;
        default:
          (r = e), (s = n);
      }
    if (void 0 === o)
      switch (this.getSettings_().endingEnd) {
        case 2401:
          (a = e), (o = 2 * n - t);
          break;
        case 2402:
          (a = 1), (o = n + i[1] - i[0]);
          break;
        default:
          (a = e - 1), (o = t);
      }
    const l = 0.5 * (n - t),
      c = this.valueSize;
    (this._weightPrev = l / (t - s)),
      (this._weightNext = l / (o - n)),
      (this._offsetPrev = r * c),
      (this._offsetNext = a * c);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer,
      a = this.sampleValues,
      s = this.valueSize,
      o = e * s,
      l = o - s,
      c = this._offsetPrev,
      h = this._offsetNext,
      u = this._weightPrev,
      d = this._weightNext,
      p = (n - t) / (i - t),
      f = p * p,
      m = f * p,
      g = -u * m + 2 * u * f - u * p,
      v = (1 + u) * m + (-1.5 - 2 * u) * f + (-0.5 + u) * p + 1,
      _ = (-1 - d) * m + (1.5 + d) * f + 0.5 * p,
      x = d * m - d * f;
    for (let e = 0; e !== s; ++e)
      r[e] = g * a[c + e] + v * a[l + e] + _ * a[o + e] + x * a[h + e];
    return r;
  }
}
class jr extends Gr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer,
      a = this.sampleValues,
      s = this.valueSize,
      o = e * s,
      l = o - s,
      c = (n - t) / (i - t),
      h = 1 - c;
    for (let e = 0; e !== s; ++e) r[e] = a[l + e] * h + a[o + e] * c;
    return r;
  }
}
class qr extends Gr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class Xr {
  constructor(e, t, n, i) {
    if (void 0 === e)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (void 0 === t || 0 === t.length)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    (this.name = e),
      (this.times = Hr.convertArray(t, this.TimeBufferType)),
      (this.values = Hr.convertArray(n, this.ValueBufferType)),
      this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: Hr.convertArray(e.times, Array),
        values: Hr.convertArray(e.values, Array),
      };
      const t = e.getInterpolation();
      t !== e.DefaultInterpolation && (n.interpolation = t);
    }
    return (n.type = e.ValueTypeName), n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new qr(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new jr(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Wr(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case 2300:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case 2301:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case 2302:
        t = this.InterpolantFactoryMethodSmooth;
    }
    if (void 0 === t) {
      const t =
        "unsupported interpolation for " +
        this.ValueTypeName +
        " keyframe track named " +
        this.name;
      if (void 0 === this.createInterpolant) {
        if (e === this.DefaultInterpolation) throw new Error(t);
        this.setInterpolation(this.DefaultInterpolation);
      }
      return console.warn("THREE.KeyframeTrack:", t), this;
    }
    return (this.createInterpolant = t), this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return 2300;
      case this.InterpolantFactoryMethodLinear:
        return 2301;
      case this.InterpolantFactoryMethodSmooth:
        return 2302;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (0 !== e) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (1 !== e) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e;
    }
    return this;
  }
  trim(e, t) {
    const n = this.times,
      i = n.length;
    let r = 0,
      a = i - 1;
    for (; r !== i && n[r] < e; ) ++r;
    for (; -1 !== a && n[a] > t; ) --a;
    if ((++a, 0 !== r || a !== i)) {
      r >= a && ((a = Math.max(a, 1)), (r = a - 1));
      const e = this.getValueSize();
      (this.times = Hr.arraySlice(n, r, a)),
        (this.values = Hr.arraySlice(this.values, r * e, a * e));
    }
    return this;
  }
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) != 0 &&
      (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
      (e = !1));
    const n = this.times,
      i = this.values,
      r = n.length;
    0 === r &&
      (console.error("THREE.KeyframeTrack: Track is empty.", this), (e = !1));
    let a = null;
    for (let t = 0; t !== r; t++) {
      const i = n[t];
      if ("number" == typeof i && isNaN(i)) {
        console.error(
          "THREE.KeyframeTrack: Time is not a valid number.",
          this,
          t,
          i
        ),
          (e = !1);
        break;
      }
      if (null !== a && a > i) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, t, i, a),
          (e = !1);
        break;
      }
      a = i;
    }
    if (void 0 !== i && Hr.isTypedArray(i))
      for (let t = 0, n = i.length; t !== n; ++t) {
        const n = i[t];
        if (isNaN(n)) {
          console.error(
            "THREE.KeyframeTrack: Value is not a valid number.",
            this,
            t,
            n
          ),
            (e = !1);
          break;
        }
      }
    return e;
  }
  optimize() {
    const e = Hr.arraySlice(this.times),
      t = Hr.arraySlice(this.values),
      n = this.getValueSize(),
      i = 2302 === this.getInterpolation(),
      r = e.length - 1;
    let a = 1;
    for (let s = 1; s < r; ++s) {
      let r = !1;
      const o = e[s];
      if (o !== e[s + 1] && (1 !== s || o !== e[0]))
        if (i) r = !0;
        else {
          const e = s * n,
            i = e - n,
            a = e + n;
          for (let s = 0; s !== n; ++s) {
            const n = t[e + s];
            if (n !== t[i + s] || n !== t[a + s]) {
              r = !0;
              break;
            }
          }
        }
      if (r) {
        if (s !== a) {
          e[a] = e[s];
          const i = s * n,
            r = a * n;
          for (let e = 0; e !== n; ++e) t[r + e] = t[i + e];
        }
        ++a;
      }
    }
    if (r > 0) {
      e[a] = e[r];
      for (let e = r * n, i = a * n, s = 0; s !== n; ++s) t[i + s] = t[e + s];
      ++a;
    }
    return (
      a !== e.length
        ? ((this.times = Hr.arraySlice(e, 0, a)),
          (this.values = Hr.arraySlice(t, 0, a * n)))
        : ((this.times = e), (this.values = t)),
      this
    );
  }
  clone() {
    const e = Hr.arraySlice(this.times, 0),
      t = Hr.arraySlice(this.values, 0),
      n = new (0, this.constructor)(this.name, e, t);
    return (n.createInterpolant = this.createInterpolant), n;
  }
}
(Xr.prototype.TimeBufferType = Float32Array),
  (Xr.prototype.ValueBufferType = Float32Array),
  (Xr.prototype.DefaultInterpolation = 2301);
class Yr extends Xr {}
(Yr.prototype.ValueTypeName = "bool"),
  (Yr.prototype.ValueBufferType = Array),
  (Yr.prototype.DefaultInterpolation = 2300),
  (Yr.prototype.InterpolantFactoryMethodLinear = void 0),
  (Yr.prototype.InterpolantFactoryMethodSmooth = void 0);
class Zr extends Xr {}
Zr.prototype.ValueTypeName = "color";
class Kr extends Xr {}
Kr.prototype.ValueTypeName = "number";
class Jr extends Gr {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer,
      a = this.sampleValues,
      s = this.valueSize,
      o = (n - t) / (i - t);
    let l = e * s;
    for (let e = l + s; l !== e; l += 4) H.slerpFlat(r, 0, a, l - s, a, l, o);
    return r;
  }
}
class Qr extends Xr {
  InterpolantFactoryMethodLinear(e) {
    return new Jr(this.times, this.values, this.getValueSize(), e);
  }
}
(Qr.prototype.ValueTypeName = "quaternion"),
  (Qr.prototype.DefaultInterpolation = 2301),
  (Qr.prototype.InterpolantFactoryMethodSmooth = void 0);
class $r extends Xr {}
($r.prototype.ValueTypeName = "string"),
  ($r.prototype.ValueBufferType = Array),
  ($r.prototype.DefaultInterpolation = 2300),
  ($r.prototype.InterpolantFactoryMethodLinear = void 0),
  ($r.prototype.InterpolantFactoryMethodSmooth = void 0);
class ea extends Xr {}
ea.prototype.ValueTypeName = "vector";
const ta = {
  enabled: !1,
  files: {},
  add: function (e, t) {
    !1 !== this.enabled && (this.files[e] = t);
  },
  get: function (e) {
    if (!1 !== this.enabled) return this.files[e];
  },
  remove: function (e) {
    delete this.files[e];
  },
  clear: function () {
    this.files = {};
  },
};
class na {
  constructor(e, t, n) {
    const i = this;
    let r,
      a = !1,
      s = 0,
      o = 0;
    const l = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this.itemStart = function (e) {
        o++, !1 === a && void 0 !== i.onStart && i.onStart(e, s, o), (a = !0);
      }),
      (this.itemEnd = function (e) {
        s++,
          void 0 !== i.onProgress && i.onProgress(e, s, o),
          s === o && ((a = !1), void 0 !== i.onLoad && i.onLoad());
      }),
      (this.itemError = function (e) {
        void 0 !== i.onError && i.onError(e);
      }),
      (this.resolveURL = function (e) {
        return r ? r(e) : e;
      }),
      (this.setURLModifier = function (e) {
        return (r = e), this;
      }),
      (this.addHandler = function (e, t) {
        return l.push(e, t), this;
      }),
      (this.removeHandler = function (e) {
        const t = l.indexOf(e);
        return -1 !== t && l.splice(t, 2), this;
      }),
      (this.getHandler = function (e) {
        for (let t = 0, n = l.length; t < n; t += 2) {
          const n = l[t],
            i = l[t + 1];
          if ((n.global && (n.lastIndex = 0), n.test(e))) return i;
        }
        return null;
      });
  }
}
const ia = new na();
class ra {
  constructor(e) {
    (this.manager = void 0 !== e ? e : ia),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (i, r) {
      n.load(e, i, t, r);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
const aa = {};
class sa extends ra {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    void 0 === e && (e = ""),
      void 0 !== this.path && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const r = ta.get(e);
    if (void 0 !== r)
      return (
        this.manager.itemStart(e),
        setTimeout(() => {
          t && t(r), this.manager.itemEnd(e);
        }, 0),
        r
      );
    if (void 0 !== aa[e])
      return void aa[e].push({ onLoad: t, onProgress: n, onError: i });
    (aa[e] = []), aa[e].push({ onLoad: t, onProgress: n, onError: i });
    const a = new Request(e, {
        headers: new Headers(this.requestHeader),
        credentials: this.withCredentials ? "include" : "same-origin",
      }),
      s = this.mimeType,
      o = this.responseType;
    fetch(a)
      .then((t) => {
        if (200 === t.status || 0 === t.status) {
          if (
            (0 === t.status &&
              console.warn("THREE.FileLoader: HTTP Status 0 received."),
            "undefined" == typeof ReadableStream ||
              void 0 === t.body ||
              void 0 === t.body.getReader)
          )
            return t;
          const n = aa[e],
            i = t.body.getReader(),
            r = t.headers.get("Content-Length"),
            a = r ? parseInt(r) : 0,
            s = 0 !== a;
          let o = 0;
          const l = new ReadableStream({
            start(e) {
              !(function t() {
                i.read().then(({ done: i, value: r }) => {
                  if (i) e.close();
                  else {
                    o += r.byteLength;
                    const i = new ProgressEvent("progress", {
                      lengthComputable: s,
                      loaded: o,
                      total: a,
                    });
                    for (let e = 0, t = n.length; e < t; e++) {
                      const t = n[e];
                      t.onProgress && t.onProgress(i);
                    }
                    e.enqueue(r), t();
                  }
                });
              })();
            },
          });
          return new Response(l);
        }
        throw Error(
          `fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`
        );
      })
      .then((e) => {
        switch (o) {
          case "arraybuffer":
            return e.arrayBuffer();
          case "blob":
            return e.blob();
          case "document":
            return e.text().then((e) => new DOMParser().parseFromString(e, s));
          case "json":
            return e.json();
          default:
            if (void 0 === s) return e.text();
            {
              const t = /charset="?([^;"\s]*)"?/i.exec(s),
                n = t && t[1] ? t[1].toLowerCase() : void 0,
                i = new TextDecoder(n);
              return e.arrayBuffer().then((e) => i.decode(e));
            }
        }
      })
      .then((t) => {
        ta.add(e, t);
        const n = aa[e];
        delete aa[e];
        for (let e = 0, i = n.length; e < i; e++) {
          const i = n[e];
          i.onLoad && i.onLoad(t);
        }
      })
      .catch((t) => {
        const n = aa[e];
        if (void 0 === n) throw (this.manager.itemError(e), t);
        delete aa[e];
        for (let e = 0, i = n.length; e < i; e++) {
          const i = n[e];
          i.onError && i.onError(t);
        }
        this.manager.itemError(e);
      })
      .finally(() => {
        this.manager.itemEnd(e);
      }),
      this.manager.itemStart(e);
  }
  setResponseType(e) {
    return (this.responseType = e), this;
  }
  setMimeType(e) {
    return (this.mimeType = e), this;
  }
}
class oa extends ra {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = this,
      a = new Fr(),
      s = new sa(this.manager);
    return (
      s.setResponseType("arraybuffer"),
      s.setRequestHeader(this.requestHeader),
      s.setPath(this.path),
      s.setWithCredentials(r.withCredentials),
      s.load(
        e,
        function (e) {
          const n = r.parse(e);
          n &&
            (void 0 !== n.image
              ? (a.image = n.image)
              : void 0 !== n.data &&
                ((a.image.width = n.width),
                (a.image.height = n.height),
                (a.image.data = n.data)),
            (a.wrapS = void 0 !== n.wrapS ? n.wrapS : 1001),
            (a.wrapT = void 0 !== n.wrapT ? n.wrapT : 1001),
            (a.magFilter = void 0 !== n.magFilter ? n.magFilter : 1006),
            (a.minFilter = void 0 !== n.minFilter ? n.minFilter : 1006),
            (a.anisotropy = void 0 !== n.anisotropy ? n.anisotropy : 1),
            void 0 !== n.encoding && (a.encoding = n.encoding),
            void 0 !== n.flipY && (a.flipY = n.flipY),
            void 0 !== n.format && (a.format = n.format),
            void 0 !== n.type && (a.type = n.type),
            void 0 !== n.mipmaps &&
              ((a.mipmaps = n.mipmaps), (a.minFilter = 1008)),
            1 === n.mipmapCount && (a.minFilter = 1006),
            void 0 !== n.generateMipmaps &&
              (a.generateMipmaps = n.generateMipmaps),
            (a.needsUpdate = !0),
            t && t(a, n));
        },
        n,
        i
      ),
      a
    );
  }
}
const la = new RegExp("[\\[\\]\\.:\\/]", "g"),
  ca = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]",
  ha = new RegExp(
    "^" +
      /((?:WC+[\/:])*)/.source.replace("WC", "[^\\[\\]\\.:\\/]") +
      /(WCOD+)?/.source.replace("WCOD", ca) +
      /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", "[^\\[\\]\\.:\\/]") +
      /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", "[^\\[\\]\\.:\\/]") +
      "$"
  ),
  ua = ["material", "materials", "bones"];
class da {
  constructor(e, t, n) {
    (this.path = t),
      (this.parsedPath = n || da.parseTrackName(t)),
      (this.node = da.findNode(e, this.parsedPath.nodeName) || e),
      (this.rootNode = e),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup
      ? new da.Composite(e, t, n)
      : new da(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(la, "");
  }
  static parseTrackName(e) {
    const t = ha.exec(e);
    if (null === t)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
        nodeName: t[2],
        objectName: t[3],
        objectIndex: t[4],
        propertyName: t[5],
        propertyIndex: t[6],
      },
      i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (void 0 !== i && -1 !== i) {
      const e = n.nodeName.substring(i + 1);
      -1 !== ua.indexOf(e) &&
        ((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = e));
    }
    if (null === n.propertyName || 0 === n.propertyName.length)
      throw new Error(
        "PropertyBinding: can not parse propertyName from trackName: " + e
      );
    return n;
  }
  static findNode(e, t) {
    if (
      void 0 === t ||
      "" === t ||
      "." === t ||
      -1 === t ||
      t === e.name ||
      t === e.uuid
    )
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (void 0 !== n) return n;
    }
    if (e.children) {
      const n = function (e) {
          for (let i = 0; i < e.length; i++) {
            const r = e[i];
            if (r.name === t || r.uuid === t) return r;
            const a = n(r.children);
            if (a) return a;
          }
          return null;
        },
        i = n(e.children);
      if (i) return i;
    }
    return null;
  }
  _getValue_unavailable() {}
  _setValue_unavailable() {}
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), (this.targetObject.needsUpdate = !0);
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath,
      n = t.objectName,
      i = t.propertyName;
    let r = t.propertyIndex;
    if (
      (e ||
        ((e = da.findNode(this.rootNode, t.nodeName) || this.rootNode),
        (this.node = e)),
      (this.getValue = this._getValue_unavailable),
      (this.setValue = this._setValue_unavailable),
      !e)
    )
      return void console.error(
        "THREE.PropertyBinding: Trying to update node for track: " +
          this.path +
          " but it wasn't found."
      );
    if (n) {
      let i = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material)
            return void console.error(
              "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
              this
            );
          if (!e.material.materials)
            return void console.error(
              "THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
              this
            );
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton)
            return void console.error(
              "THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
              this
            );
          e = e.skeleton.bones;
          for (let t = 0; t < e.length; t++)
            if (e[t].name === i) {
              i = t;
              break;
            }
          break;
        default:
          if (void 0 === e[n])
            return void console.error(
              "THREE.PropertyBinding: Can not bind to objectName of node undefined.",
              this
            );
          e = e[n];
      }
      if (void 0 !== i) {
        if (void 0 === e[i])
          return void console.error(
            "THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
            this,
            e
          );
        e = e[i];
      }
    }
    const a = e[i];
    if (void 0 === a) {
      const n = t.nodeName;
      return void console.error(
        "THREE.PropertyBinding: Trying to update property for track: " +
          n +
          "." +
          i +
          " but it wasn't found.",
        e
      );
    }
    let s = this.Versioning.None;
    (this.targetObject = e),
      void 0 !== e.needsUpdate
        ? (s = this.Versioning.NeedsUpdate)
        : void 0 !== e.matrixWorldNeedsUpdate &&
          (s = this.Versioning.MatrixWorldNeedsUpdate);
    let o = this.BindingType.Direct;
    if (void 0 !== r) {
      if ("morphTargetInfluences" === i) {
        if (!e.geometry)
          return void console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
            this
          );
        if (!e.geometry.morphAttributes)
          return void console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
            this
          );
        void 0 !== e.morphTargetDictionary[r] &&
          (r = e.morphTargetDictionary[r]);
      }
      (o = this.BindingType.ArrayElement),
        (this.resolvedProperty = a),
        (this.propertyIndex = r);
    } else
      void 0 !== a.fromArray && void 0 !== a.toArray
        ? ((o = this.BindingType.HasFromToArray), (this.resolvedProperty = a))
        : Array.isArray(a)
        ? ((o = this.BindingType.EntireArray), (this.resolvedProperty = a))
        : (this.propertyName = i);
    (this.getValue = this.GetterByBindingType[o]),
      (this.setValue = this.SetterByBindingTypeAndVersioning[o][s]);
  }
  unbind() {
    (this.node = null),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
}
(da.Composite = class {
  constructor(e, t, n) {
    const i = n || da.parseTrackName(t);
    (this._targetGroup = e), (this._bindings = e.subscribe_(t, i));
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_,
      i = this._bindings[n];
    void 0 !== i && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}),
  (da.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3,
  }),
  (da.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2,
  }),
  (da.prototype.GetterByBindingType = [
    da.prototype._getValue_direct,
    da.prototype._getValue_array,
    da.prototype._getValue_arrayElement,
    da.prototype._getValue_toArray,
  ]),
  (da.prototype.SetterByBindingTypeAndVersioning = [
    [
      da.prototype._setValue_direct,
      da.prototype._setValue_direct_setNeedsUpdate,
      da.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
    ],
    [
      da.prototype._setValue_array,
      da.prototype._setValue_array_setNeedsUpdate,
      da.prototype._setValue_array_setMatrixWorldNeedsUpdate,
    ],
    [
      da.prototype._setValue_arrayElement,
      da.prototype._setValue_arrayElement_setNeedsUpdate,
      da.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
    ],
    [
      da.prototype._setValue_fromArray,
      da.prototype._setValue_fromArray_setNeedsUpdate,
      da.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
    ],
  ]);
class pa {
  constructor(e = 1, t = 0, n = 0) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  set(e, t, n) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  copy(e) {
    return (
      (this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this
    );
  }
  makeSafe() {
    const e = 1e-6;
    return (this.phi = Math.max(e, Math.min(Math.PI - e, this.phi))), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return (
      (this.radius = Math.sqrt(e * e + t * t + n * n)),
      0 === this.radius
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(e, n)),
          (this.phi = Math.acos(d(t / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const {
  floatView: fa,
  uint32View: ma,
  baseTable: ga,
  shiftTable: va,
  mantissaTable: _a,
  exponentTable: xa,
  offsetTable: ya,
} = Ma();
function Ma() {
  const e = new ArrayBuffer(4),
    t = new Float32Array(e),
    n = new Uint32Array(e),
    i = new Uint32Array(512),
    r = new Uint32Array(512);
  for (let e = 0; e < 256; ++e) {
    const t = e - 127;
    t < -27
      ? ((i[e] = 0), (i[256 | e] = 32768), (r[e] = 24), (r[256 | e] = 24))
      : t < -14
      ? ((i[e] = 1024 >> (-t - 14)),
        (i[256 | e] = (1024 >> (-t - 14)) | 32768),
        (r[e] = -t - 1),
        (r[256 | e] = -t - 1))
      : t <= 15
      ? ((i[e] = (t + 15) << 10),
        (i[256 | e] = ((t + 15) << 10) | 32768),
        (r[e] = 13),
        (r[256 | e] = 13))
      : t < 128
      ? ((i[e] = 31744), (i[256 | e] = 64512), (r[e] = 24), (r[256 | e] = 24))
      : ((i[e] = 31744), (i[256 | e] = 64512), (r[e] = 13), (r[256 | e] = 13));
  }
  const a = new Uint32Array(2048),
    s = new Uint32Array(64),
    o = new Uint32Array(64);
  for (let e = 1; e < 1024; ++e) {
    let t = e << 13,
      n = 0;
    for (; 0 == (8388608 & t); ) (t <<= 1), (n -= 8388608);
    (t &= -8388609), (n += 947912704), (a[e] = t | n);
  }
  for (let e = 1024; e < 2048; ++e) a[e] = 939524096 + ((e - 1024) << 13);
  for (let e = 1; e < 31; ++e) s[e] = e << 23;
  (s[31] = 1199570944), (s[32] = 2147483648);
  for (let e = 33; e < 63; ++e) s[e] = 2147483648 + ((e - 32) << 23);
  s[63] = 3347054592;
  for (let e = 1; e < 64; ++e) 32 !== e && (o[e] = 1024);
  return {
    floatView: t,
    uint32View: n,
    baseTable: i,
    shiftTable: r,
    mantissaTable: a,
    exponentTable: s,
    offsetTable: o,
  };
}
var ba = Object.freeze({
  __proto__: null,
  toHalfFloat: function (e) {
    Math.abs(e) > 65504 &&
      console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),
      (e = d(e, -65504, 65504)),
      (fa[0] = e);
    const t = ma[0],
      n = (t >> 23) & 511;
    return ga[n] + ((8388607 & t) >> va[n]);
  },
  fromHalfFloat: function (e) {
    const t = e >> 10;
    return (ma[0] = _a[ya[t] + (1023 & e)] + xa[t]), fa[0];
  },
});
"undefined" != typeof __THREE_DEVTOOLS__ &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: "142" } })
  ),
  "undefined" != typeof window &&
    (window.__THREE__
      ? console.warn("WARNING: Multiple instances of Three.js being imported.")
      : (window.__THREE__ = "142"));
const Sa = { type: "change" },
  wa = { type: "start" },
  Ta = { type: "end" };
class Ea extends o {
  constructor(e, t) {
    super(),
      void 0 === t &&
        console.warn(
          'THREE.OrbitControls: The second parameter "domElement" is now mandatory.'
        ),
      t === document &&
        console.error(
          'THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'
        ),
      (this.object = e),
      (this.domElement = t),
      (this.domElement.style.touchAction = "none"),
      (this.enabled = !0),
      (this.target = new G()),
      (this.minDistance = 0),
      (this.maxDistance = 1 / 0),
      (this.minZoom = 0),
      (this.maxZoom = 1 / 0),
      (this.minPolarAngle = 0),
      (this.maxPolarAngle = Math.PI),
      (this.minAzimuthAngle = -1 / 0),
      (this.maxAzimuthAngle = 1 / 0),
      (this.enableDamping = !1),
      (this.dampingFactor = 0.05),
      (this.enableZoom = !0),
      (this.zoomSpeed = 1),
      (this.enableRotate = !0),
      (this.rotateSpeed = 1),
      (this.enablePan = !0),
      (this.panSpeed = 1),
      (this.screenSpacePanning = !0),
      (this.keyPanSpeed = 7),
      (this.autoRotate = !1),
      (this.autoRotateSpeed = 2),
      (this.keys = {
        LEFT: "ArrowLeft",
        UP: "ArrowUp",
        RIGHT: "ArrowRight",
        BOTTOM: "ArrowDown",
      }),
      (this.mouseButtons = { LEFT: a.ROTATE, MIDDLE: a.DOLLY, RIGHT: a.PAN }),
      (this.touches = { ONE: s.ROTATE, TWO: s.DOLLY_PAN }),
      (this.target0 = this.target.clone()),
      (this.position0 = this.object.position.clone()),
      (this.zoom0 = this.object.zoom),
      (this._domElementKeyEvents = null),
      (this.getPolarAngle = function () {
        return l.phi;
      }),
      (this.getAzimuthalAngle = function () {
        return l.theta;
      }),
      (this.getDistance = function () {
        return this.object.position.distanceTo(this.target);
      }),
      (this.listenToKeyEvents = function (e) {
        e.addEventListener("keydown", Y), (this._domElementKeyEvents = e);
      }),
      (this.saveState = function () {
        n.target0.copy(n.target),
          n.position0.copy(n.object.position),
          (n.zoom0 = n.object.zoom);
      }),
      (this.reset = function () {
        n.target.copy(n.target0),
          n.object.position.copy(n.position0),
          (n.object.zoom = n.zoom0),
          n.object.updateProjectionMatrix(),
          n.dispatchEvent(Sa),
          n.update(),
          (r = i.NONE);
      }),
      (this.update = (function () {
        const t = new G(),
          a = new H().setFromUnitVectors(e.up, new G(0, 1, 0)),
          s = a.clone().invert(),
          p = new G(),
          f = new H(),
          m = 2 * Math.PI;
        return function () {
          const e = n.object.position;
          t.copy(e).sub(n.target),
            t.applyQuaternion(a),
            l.setFromVector3(t),
            n.autoRotate &&
              r === i.NONE &&
              E(((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed),
            n.enableDamping
              ? ((l.theta += c.theta * n.dampingFactor),
                (l.phi += c.phi * n.dampingFactor))
              : ((l.theta += c.theta), (l.phi += c.phi));
          let g = n.minAzimuthAngle,
            v = n.maxAzimuthAngle;
          return (
            isFinite(g) &&
              isFinite(v) &&
              (g < -Math.PI ? (g += m) : g > Math.PI && (g -= m),
              v < -Math.PI ? (v += m) : v > Math.PI && (v -= m),
              (l.theta =
                g <= v
                  ? Math.max(g, Math.min(v, l.theta))
                  : l.theta > (g + v) / 2
                  ? Math.max(g, l.theta)
                  : Math.min(v, l.theta))),
            (l.phi = Math.max(
              n.minPolarAngle,
              Math.min(n.maxPolarAngle, l.phi)
            )),
            l.makeSafe(),
            (l.radius *= h),
            (l.radius = Math.max(
              n.minDistance,
              Math.min(n.maxDistance, l.radius)
            )),
            !0 === n.enableDamping
              ? n.target.addScaledVector(u, n.dampingFactor)
              : n.target.add(u),
            t.setFromSpherical(l),
            t.applyQuaternion(s),
            e.copy(n.target).add(t),
            n.object.lookAt(n.target),
            !0 === n.enableDamping
              ? ((c.theta *= 1 - n.dampingFactor),
                (c.phi *= 1 - n.dampingFactor),
                u.multiplyScalar(1 - n.dampingFactor))
              : (c.set(0, 0, 0), u.set(0, 0, 0)),
            (h = 1),
            !!(
              d ||
              p.distanceToSquared(n.object.position) > o ||
              8 * (1 - f.dot(n.object.quaternion)) > o
            ) &&
              (n.dispatchEvent(Sa),
              p.copy(n.object.position),
              f.copy(n.object.quaternion),
              (d = !1),
              !0)
          );
        };
      })()),
      (this.dispose = function () {
        n.domElement.removeEventListener("contextmenu", Z),
          n.domElement.removeEventListener("pointerdown", V),
          n.domElement.removeEventListener("pointercancel", q),
          n.domElement.removeEventListener("wheel", X),
          n.domElement.removeEventListener("pointermove", W),
          n.domElement.removeEventListener("pointerup", j),
          null !== n._domElementKeyEvents &&
            n._domElementKeyEvents.removeEventListener("keydown", Y);
      });
    const n = this,
      i = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_PAN: 4,
        TOUCH_DOLLY_PAN: 5,
        TOUCH_DOLLY_ROTATE: 6,
      };
    let r = i.NONE;
    const o = 1e-6,
      l = new pa(),
      c = new pa();
    let h = 1;
    const u = new G();
    let d = !1;
    const p = new v(),
      f = new v(),
      m = new v(),
      g = new v(),
      _ = new v(),
      x = new v(),
      y = new v(),
      M = new v(),
      b = new v(),
      S = [],
      w = {};
    function T() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function E(e) {
      c.theta -= e;
    }
    function A(e) {
      c.phi -= e;
    }
    const C = (function () {
        const e = new G();
        return function (t, n) {
          e.setFromMatrixColumn(n, 0), e.multiplyScalar(-t), u.add(e);
        };
      })(),
      L = (function () {
        const e = new G();
        return function (t, i) {
          !0 === n.screenSpacePanning
            ? e.setFromMatrixColumn(i, 1)
            : (e.setFromMatrixColumn(i, 0), e.crossVectors(n.object.up, e)),
            e.multiplyScalar(t),
            u.add(e);
        };
      })(),
      R = (function () {
        const e = new G();
        return function (t, i) {
          const r = n.domElement;
          if (n.object.isPerspectiveCamera) {
            const a = n.object.position;
            e.copy(a).sub(n.target);
            let s = e.length();
            (s *= Math.tan(((n.object.fov / 2) * Math.PI) / 180)),
              C((2 * t * s) / r.clientHeight, n.object.matrix),
              L((2 * i * s) / r.clientHeight, n.object.matrix);
          } else
            n.object.isOrthographicCamera
              ? (C(
                  (t * (n.object.right - n.object.left)) /
                    n.object.zoom /
                    r.clientWidth,
                  n.object.matrix
                ),
                L(
                  (i * (n.object.top - n.object.bottom)) /
                    n.object.zoom /
                    r.clientHeight,
                  n.object.matrix
                ))
              : (console.warn(
                  "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
                ),
                (n.enablePan = !1));
        };
      })();
    function P(e) {
      n.object.isPerspectiveCamera
        ? (h /= e)
        : n.object.isOrthographicCamera
        ? ((n.object.zoom = Math.max(
            n.minZoom,
            Math.min(n.maxZoom, n.object.zoom * e)
          )),
          n.object.updateProjectionMatrix(),
          (d = !0))
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
          ),
          (n.enableZoom = !1));
    }
    function D(e) {
      n.object.isPerspectiveCamera
        ? (h *= e)
        : n.object.isOrthographicCamera
        ? ((n.object.zoom = Math.max(
            n.minZoom,
            Math.min(n.maxZoom, n.object.zoom / e)
          )),
          n.object.updateProjectionMatrix(),
          (d = !0))
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
          ),
          (n.enableZoom = !1));
    }
    function I(e) {
      p.set(e.clientX, e.clientY);
    }
    function N(e) {
      g.set(e.clientX, e.clientY);
    }
    function O() {
      if (1 === S.length) p.set(S[0].pageX, S[0].pageY);
      else {
        const e = 0.5 * (S[0].pageX + S[1].pageX),
          t = 0.5 * (S[0].pageY + S[1].pageY);
        p.set(e, t);
      }
    }
    function z() {
      if (1 === S.length) g.set(S[0].pageX, S[0].pageY);
      else {
        const e = 0.5 * (S[0].pageX + S[1].pageX),
          t = 0.5 * (S[0].pageY + S[1].pageY);
        g.set(e, t);
      }
    }
    function U() {
      const e = S[0].pageX - S[1].pageX,
        t = S[0].pageY - S[1].pageY,
        n = Math.sqrt(e * e + t * t);
      y.set(0, n);
    }
    function F(e) {
      if (1 == S.length) f.set(e.pageX, e.pageY);
      else {
        const t = Q(e),
          n = 0.5 * (e.pageX + t.x),
          i = 0.5 * (e.pageY + t.y);
        f.set(n, i);
      }
      m.subVectors(f, p).multiplyScalar(n.rotateSpeed);
      const t = n.domElement;
      E((2 * Math.PI * m.x) / t.clientHeight),
        A((2 * Math.PI * m.y) / t.clientHeight),
        p.copy(f);
    }
    function B(e) {
      if (1 === S.length) _.set(e.pageX, e.pageY);
      else {
        const t = Q(e),
          n = 0.5 * (e.pageX + t.x),
          i = 0.5 * (e.pageY + t.y);
        _.set(n, i);
      }
      x.subVectors(_, g).multiplyScalar(n.panSpeed), R(x.x, x.y), g.copy(_);
    }
    function k(e) {
      const t = Q(e),
        i = e.pageX - t.x,
        r = e.pageY - t.y,
        a = Math.sqrt(i * i + r * r);
      M.set(0, a),
        b.set(0, Math.pow(M.y / y.y, n.zoomSpeed)),
        P(b.y),
        y.copy(M);
    }
    function V(e) {
      !1 !== n.enabled &&
        (0 === S.length &&
          (n.domElement.setPointerCapture(e.pointerId),
          n.domElement.addEventListener("pointermove", W),
          n.domElement.addEventListener("pointerup", j)),
        (function (e) {
          S.push(e);
        })(e),
        "touch" === e.pointerType
          ? (function (e) {
              switch ((J(e), S.length)) {
                case 1:
                  switch (n.touches.ONE) {
                    case s.ROTATE:
                      if (!1 === n.enableRotate) return;
                      O(), (r = i.TOUCH_ROTATE);
                      break;
                    case s.PAN:
                      if (!1 === n.enablePan) return;
                      z(), (r = i.TOUCH_PAN);
                      break;
                    default:
                      r = i.NONE;
                  }
                  break;
                case 2:
                  switch (n.touches.TWO) {
                    case s.DOLLY_PAN:
                      if (!1 === n.enableZoom && !1 === n.enablePan) return;
                      n.enableZoom && U(),
                        n.enablePan && z(),
                        (r = i.TOUCH_DOLLY_PAN);
                      break;
                    case s.DOLLY_ROTATE:
                      if (!1 === n.enableZoom && !1 === n.enableRotate) return;
                      n.enableZoom && U(),
                        n.enableRotate && O(),
                        (r = i.TOUCH_DOLLY_ROTATE);
                      break;
                    default:
                      r = i.NONE;
                  }
                  break;
                default:
                  r = i.NONE;
              }
              r !== i.NONE && n.dispatchEvent(wa);
            })(e)
          : (function (e) {
              let t;
              switch (e.button) {
                case 0:
                  t = n.mouseButtons.LEFT;
                  break;
                case 1:
                  t = n.mouseButtons.MIDDLE;
                  break;
                case 2:
                  t = n.mouseButtons.RIGHT;
                  break;
                default:
                  t = -1;
              }
              switch (t) {
                case a.DOLLY:
                  if (!1 === n.enableZoom) return;
                  !(function (e) {
                    y.set(e.clientX, e.clientY);
                  })(e),
                    (r = i.DOLLY);
                  break;
                case a.ROTATE:
                  if (e.ctrlKey || e.metaKey || e.shiftKey) {
                    if (!1 === n.enablePan) return;
                    N(e), (r = i.PAN);
                  } else {
                    if (!1 === n.enableRotate) return;
                    I(e), (r = i.ROTATE);
                  }
                  break;
                case a.PAN:
                  if (e.ctrlKey || e.metaKey || e.shiftKey) {
                    if (!1 === n.enableRotate) return;
                    I(e), (r = i.ROTATE);
                  } else {
                    if (!1 === n.enablePan) return;
                    N(e), (r = i.PAN);
                  }
                  break;
                default:
                  r = i.NONE;
              }
              r !== i.NONE && n.dispatchEvent(wa);
            })(e));
    }
    function W(e) {
      !1 !== n.enabled &&
        ("touch" === e.pointerType
          ? (function (e) {
              switch ((J(e), r)) {
                case i.TOUCH_ROTATE:
                  if (!1 === n.enableRotate) return;
                  F(e), n.update();
                  break;
                case i.TOUCH_PAN:
                  if (!1 === n.enablePan) return;
                  B(e), n.update();
                  break;
                case i.TOUCH_DOLLY_PAN:
                  if (!1 === n.enableZoom && !1 === n.enablePan) return;
                  !(function (e) {
                    n.enableZoom && k(e), n.enablePan && B(e);
                  })(e),
                    n.update();
                  break;
                case i.TOUCH_DOLLY_ROTATE:
                  if (!1 === n.enableZoom && !1 === n.enableRotate) return;
                  !(function (e) {
                    n.enableZoom && k(e), n.enableRotate && F(e);
                  })(e),
                    n.update();
                  break;
                default:
                  r = i.NONE;
              }
            })(e)
          : (function (e) {
              if (!1 === n.enabled) return;
              switch (r) {
                case i.ROTATE:
                  if (!1 === n.enableRotate) return;
                  !(function (e) {
                    f.set(e.clientX, e.clientY),
                      m.subVectors(f, p).multiplyScalar(n.rotateSpeed);
                    const t = n.domElement;
                    E((2 * Math.PI * m.x) / t.clientHeight),
                      A((2 * Math.PI * m.y) / t.clientHeight),
                      p.copy(f),
                      n.update();
                  })(e);
                  break;
                case i.DOLLY:
                  if (!1 === n.enableZoom) return;
                  !(function (e) {
                    M.set(e.clientX, e.clientY),
                      b.subVectors(M, y),
                      b.y > 0 ? P(T()) : b.y < 0 && D(T()),
                      y.copy(M),
                      n.update();
                  })(e);
                  break;
                case i.PAN:
                  if (!1 === n.enablePan) return;
                  !(function (e) {
                    _.set(e.clientX, e.clientY),
                      x.subVectors(_, g).multiplyScalar(n.panSpeed),
                      R(x.x, x.y),
                      g.copy(_),
                      n.update();
                  })(e);
              }
            })(e));
    }
    function j(e) {
      K(e),
        0 === S.length &&
          (n.domElement.releasePointerCapture(e.pointerId),
          n.domElement.removeEventListener("pointermove", W),
          n.domElement.removeEventListener("pointerup", j)),
        n.dispatchEvent(Ta),
        (r = i.NONE);
    }
    function q(e) {
      K(e);
    }
    function X(e) {
      !1 !== n.enabled &&
        !1 !== n.enableZoom &&
        r === i.NONE &&
        (e.preventDefault(),
        n.dispatchEvent(wa),
        (function (e) {
          e.deltaY < 0 ? D(T()) : e.deltaY > 0 && P(T()), n.update();
        })(e),
        n.dispatchEvent(Ta));
    }
    function Y(e) {
      !1 !== n.enabled &&
        !1 !== n.enablePan &&
        (function (e) {
          let t = !1;
          switch (e.code) {
            case n.keys.UP:
              R(0, n.keyPanSpeed), (t = !0);
              break;
            case n.keys.BOTTOM:
              R(0, -n.keyPanSpeed), (t = !0);
              break;
            case n.keys.LEFT:
              R(n.keyPanSpeed, 0), (t = !0);
              break;
            case n.keys.RIGHT:
              R(-n.keyPanSpeed, 0), (t = !0);
          }
          t && (e.preventDefault(), n.update());
        })(e);
    }
    function Z(e) {
      !1 !== n.enabled && e.preventDefault();
    }
    function K(e) {
      delete w[e.pointerId];
      for (let t = 0; t < S.length; t++)
        if (S[t].pointerId == e.pointerId) return void S.splice(t, 1);
    }
    function J(e) {
      let t = w[e.pointerId];
      void 0 === t && ((t = new v()), (w[e.pointerId] = t)),
        t.set(e.pageX, e.pageY);
    }
    function Q(e) {
      const t = e.pointerId === S[0].pointerId ? S[1] : S[0];
      return w[t.pointerId];
    }
    n.domElement.addEventListener("contextmenu", Z),
      n.domElement.addEventListener("pointerdown", V),
      n.domElement.addEventListener("pointercancel", q),
      n.domElement.addEventListener("wheel", X, { passive: !1 }),
      this.update();
  }
}
new H();
Int8Array, Uint8Array, Int16Array, Uint16Array, Uint32Array, Float32Array;
document.getElementById("msg").style.display = /Mobi|Android/i.test(
  navigator.userAgent
)
  ? "block"
  : "none";
var Aa;
Aa = new URL(r("27Lyk").resolve("kiCgM"), import.meta.url).toString();
const Ca = new URL(Aa);
var La = new Ur(),
  Ra = new zr({});
Ra.setSize(window.innerWidth, window.innerHeight),
  document.getElementById("renderer-container").append(Ra.domElement),
  (Ra.domElement.style.width = "100%"),
  (Ra.domElement.style.height = "100%");
La = new Ur();
var Pa = new jt(45, window.innerWidth / window.innerHeight, 0.1, 1e3),
  Da = new Ea(Pa, Ra.domElement);
(Da.enablePan = !1),
  Pa.position.set(-6.213819779195119, -0.5690901066823985, 3.1724722539621557),
  Da.update(),
  (Ra.outputEncoding = 3001),
  (Ra.toneMapping = 4),
  (Ra.toneMappingExposure = 1.5);
var Ia = document.getElementById("loader");
new (class extends oa {
  constructor(e) {
    super(e), (this.type = 1016);
  }
  parse(e) {
    const t = function (e, t) {
        switch (e) {
          case 1:
            console.error("THREE.RGBELoader Read Error: " + (t || ""));
            break;
          case 2:
            console.error("THREE.RGBELoader Write Error: " + (t || ""));
            break;
          case 3:
            console.error("THREE.RGBELoader Bad File Format: " + (t || ""));
            break;
          default:
            console.error("THREE.RGBELoader: Error: " + (t || ""));
        }
        return -1;
      },
      n = function (e, t, n) {
        t = t || 1024;
        let i = e.pos,
          r = -1,
          a = 0,
          s = "",
          o = String.fromCharCode.apply(
            null,
            new Uint16Array(e.subarray(i, i + 128))
          );
        for (; 0 > (r = o.indexOf("\n")) && a < t && i < e.byteLength; )
          (s += o),
            (a += o.length),
            (i += 128),
            (o += String.fromCharCode.apply(
              null,
              new Uint16Array(e.subarray(i, i + 128))
            ));
        return -1 < r && (!1 !== n && (e.pos += a + r + 1), s + o.slice(0, r));
      },
      i = function (e, t, n, i) {
        const r = e[t + 3],
          a = Math.pow(2, r - 128) / 255;
        (n[i + 0] = e[t + 0] * a),
          (n[i + 1] = e[t + 1] * a),
          (n[i + 2] = e[t + 2] * a),
          (n[i + 3] = 1);
      },
      r = function (e, t, n, i) {
        const r = e[t + 3],
          a = Math.pow(2, r - 128) / 255;
        (n[i + 0] = ba.toHalfFloat(Math.min(e[t + 0] * a, 65504))),
          (n[i + 1] = ba.toHalfFloat(Math.min(e[t + 1] * a, 65504))),
          (n[i + 2] = ba.toHalfFloat(Math.min(e[t + 2] * a, 65504))),
          (n[i + 3] = ba.toHalfFloat(1));
      },
      a = new Uint8Array(e);
    a.pos = 0;
    const s = (function (e) {
      const i = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,
        r = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,
        a = /^\s*FORMAT=(\S+)\s*$/,
        s = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,
        o = {
          valid: 0,
          string: "",
          comments: "",
          programtype: "RGBE",
          format: "",
          gamma: 1,
          exposure: 1,
          width: 0,
          height: 0,
        };
      let l, c;
      if (e.pos >= e.byteLength || !(l = n(e))) return t(1, "no header found");
      if (!(c = l.match(/^#\?(\S+)/))) return t(3, "bad initial token");
      for (
        o.valid |= 1, o.programtype = c[1], o.string += l + "\n";
        (l = n(e)), !1 !== l;

      )
        if (((o.string += l + "\n"), "#" !== l.charAt(0))) {
          if (
            ((c = l.match(i)) && (o.gamma = parseFloat(c[1])),
            (c = l.match(r)) && (o.exposure = parseFloat(c[1])),
            (c = l.match(a)) && ((o.valid |= 2), (o.format = c[1])),
            (c = l.match(s)) &&
              ((o.valid |= 4),
              (o.height = parseInt(c[1], 10)),
              (o.width = parseInt(c[2], 10))),
            2 & o.valid && 4 & o.valid)
          )
            break;
        } else o.comments += l + "\n";
      return 2 & o.valid
        ? 4 & o.valid
          ? o
          : t(3, "missing image size specifier")
        : t(3, "missing format specifier");
    })(a);
    if (-1 !== s) {
      const e = s.width,
        n = s.height,
        o = (function (e, n, i) {
          const r = n;
          if (r < 8 || r > 32767 || 2 !== e[0] || 2 !== e[1] || 128 & e[2])
            return new Uint8Array(e);
          if (r !== ((e[2] << 8) | e[3])) return t(3, "wrong scanline width");
          const a = new Uint8Array(4 * n * i);
          if (!a.length) return t(4, "unable to allocate buffer space");
          let s = 0,
            o = 0;
          const l = 4 * r,
            c = new Uint8Array(4),
            h = new Uint8Array(l);
          let u = i;
          for (; u > 0 && o < e.byteLength; ) {
            if (o + 4 > e.byteLength) return t(1);
            if (
              ((c[0] = e[o++]),
              (c[1] = e[o++]),
              (c[2] = e[o++]),
              (c[3] = e[o++]),
              2 != c[0] || 2 != c[1] || ((c[2] << 8) | c[3]) != r)
            )
              return t(3, "bad rgbe scanline format");
            let n,
              i = 0;
            for (; i < l && o < e.byteLength; ) {
              n = e[o++];
              const r = n > 128;
              if ((r && (n -= 128), 0 === n || i + n > l))
                return t(3, "bad scanline data");
              if (r) {
                const t = e[o++];
                for (let e = 0; e < n; e++) h[i++] = t;
              } else h.set(e.subarray(o, o + n), i), (i += n), (o += n);
            }
            const d = r;
            for (let e = 0; e < d; e++) {
              let t = 0;
              (a[s] = h[e + t]),
                (t += r),
                (a[s + 1] = h[e + t]),
                (t += r),
                (a[s + 2] = h[e + t]),
                (t += r),
                (a[s + 3] = h[e + t]),
                (s += 4);
            }
            u--;
          }
          return a;
        })(a.subarray(a.pos), e, n);
      if (-1 !== o) {
        let t, a, l;
        switch (this.type) {
          case 1015:
            l = o.length / 4;
            const e = new Float32Array(4 * l);
            for (let t = 0; t < l; t++) i(o, 4 * t, e, 4 * t);
            (t = e), (a = 1015);
            break;
          case 1016:
            l = o.length / 4;
            const n = new Uint16Array(4 * l);
            for (let e = 0; e < l; e++) r(o, 4 * e, n, 4 * e);
            (t = n), (a = 1016);
            break;
          default:
            console.error("THREE.RGBELoader: unsupported type: ", this.type);
        }
        return {
          width: e,
          height: n,
          data: t,
          header: s.string,
          gamma: s.gamma,
          exposure: s.exposure,
          type: a,
        };
      }
    }
    return null;
  }
  setDataType(e) {
    return (this.type = e), this;
  }
  load(e, t, n, i) {
    return super.load(
      e,
      function (e, n) {
        switch (e.type) {
          case 1015:
          case 1016:
            (e.encoding = 3e3),
              (e.minFilter = 1006),
              (e.magFilter = 1006),
              (e.generateMipmaps = !1),
              (e.flipY = !0);
        }
        t && t(e, n);
      },
      n,
      i
    );
  }
})().load(
  Ca,
  function (e) {
    (e.mapping = 303), (La.background = e);
    var t = new Br(1.5, 30, 30);
    new Vr({
      color: 16777215,
      envMap: e,
      roughness: 0,
      transmission: 1,
      side: 2,
      wireframe: !0,
    });
   var sphereMaterial2 = new Vr({
      side: 2,
      envMap: e,
      roughness: 0,
      metalness: 0,
      transmission: 1,
      ior: 2.33,
      thickness: 0.2,
    });
    var n = new Ut(t, sphereMaterial2);
    La.add(n);
  },
  function (e) {
    (Ia.innerText = `Loading ${Math.round((e.loaded / e.total) * 100)}%`),
      100 == (e.loaded / e.total) * 100 &&
        ((Ia.innerText =
          "wait until graphics render..bye(it depends on your device)"),
        setTimeout(() => {
          Ia.style.display = "none";
        }, 4));
  }
),
  Ra.setAnimationLoop(function () {
    Ra.render(La, Pa);
  });
//# sourceMappingURL=index.1a740c27.js.map
