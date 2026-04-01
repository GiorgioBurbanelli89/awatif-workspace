import { H as ct, B as Y, I as dt, F as K, G as U, h as It, a as et, j as Q, D as O, e as D, C as G, l as Yt, i as Lt, V as B, A as tt, z as q, J as yt, d as Et, L as nt, c as $, r as ht, K as ut, R as Xt, f as kt, N as Zt, U as Wt, X as At, Y as rt, Z as Ht, _ as _t, t as $t, u as Gt, v as qt, W as Nt, w as Kt, x as Ut, y as St, O as Dt } from "./Text-CBH-tcJP.js";
import { v as C, P as Qt, g as j, o as pt } from "./theme-CzzIlc4y.js";
import "./styles-B8h3dtQW.js";
function Jt(t, e, l) {
  const o = document.createElement("div"), n = new Qt({ title: "Settings", expanded: true, container: o });
  if (o.setAttribute("id", "settings"), (e == null ? void 0 : e.nodes) && (n.addBinding(t.displayScale, "val", { label: "Display scale", min: -10, max: 10, step: 1 }), n.addBinding(t.nodes, "val", { label: "Nodes" }), n.addBinding(t.elements, "val", { label: "Elements" }), n.addBinding(t.elemColumns, "val", { label: "  Columnas" }), n.addBinding(t.elemBeams, "val", { label: "  Vigas" }), n.addBinding(t.nodesIndexes, "val", { label: "Nodes indexes" }), n.addBinding(t.elementsIndexes, "val", { label: "Elements indexes" }), n.addBinding(t.orientations, "val", { label: "Orientations" }), n.addBinding(t.sections, "val", { label: "Sections" }), n.addBinding(t.secColumns, "val", { label: "  Sec. Columnas" }), n.addBinding(t.secBeams, "val", { label: "  Sec. Vigas" }), n.addBinding(t.secFloor, "val", { label: "  Sec. Piso", options: { Todos: -1, "Piso 1": 0, "Piso 2": 1, "Piso 3": 2, "Piso 4": 3, "Piso 5": 4 } })), (e == null ? void 0 : e.nodeInputs) || (e == null ? void 0 : e.elementInputs)) {
    const r = n.addFolder({ title: "Analysis Inputs" });
    r.addBinding(t.supports, "val", { label: "Supports" }), r.addBinding(t.loads, "val", { label: "Loads" });
  }
  if ((e == null ? void 0 : e.deformOutputs) || (e == null ? void 0 : e.analyzeOutputs)) {
    const r = n.addFolder({ title: "Analysis Outputs" });
    r.addBinding(t.nodeResults, "val", { options: { none: "none", deformations: "deformations", reactions: "reactions" }, label: "Node results" }), r.addBinding(t.frameResults, "val", { options: { none: "none", normals: "normals", shearsY: "shearsY", shearsZ: "shearsZ", torsions: "torsions", bendingsY: "bendingsY", bendingsZ: "bendingsZ", "contour:normals": "contour:normals", "contour:shearsY": "contour:shearsY", "contour:shearsZ": "contour:shearsZ", "contour:torsions": "contour:torsions", "contour:bendingsY": "contour:bendingsY", "contour:bendingsZ": "contour:bendingsZ" }, label: "Frame results" }), r.addBinding(t.shellResults, "val", { options: { none: "none", bendingXX: "bendingXX", bendingYY: "bendingYY", bendingXY: "bendingXY", displacementX: "displacementX", displacementY: "displacementY", displacementZ: "displacementZ" }, label: "Shell results" }), r.addBinding(t.deformedShape, "val", { label: "Deformed shape" });
  }
  return l && n.addBinding(t.solids, "val", { label: "Solids" }), o;
}
function Ot(t) {
  return { gridSize: C.state((t == null ? void 0 : t.gridSize) ?? 20), displayScale: C.state((t == null ? void 0 : t.displayScale) ?? 1), nodes: C.state((t == null ? void 0 : t.nodes) ?? true), elements: C.state((t == null ? void 0 : t.elements) ?? true), elemColumns: C.state((t == null ? void 0 : t.elemColumns) ?? true), elemBeams: C.state((t == null ? void 0 : t.elemBeams) ?? true), nodesIndexes: C.state((t == null ? void 0 : t.nodesIndexes) ?? false), elementsIndexes: C.state((t == null ? void 0 : t.elementsIndexes) ?? false), orientations: C.state((t == null ? void 0 : t.orientations) ?? false), sections: C.state((t == null ? void 0 : t.sections) ?? true), secColumns: C.state((t == null ? void 0 : t.secColumns) ?? true), secBeams: C.state((t == null ? void 0 : t.secBeams) ?? true), secFloor: C.state((t == null ? void 0 : t.secFloor) ?? -1), supports: C.state((t == null ? void 0 : t.supports) ?? true), loads: C.state((t == null ? void 0 : t.loads) ?? false), deformedShape: C.state((t == null ? void 0 : t.deformedShape) ?? false), nodeResults: C.state((t == null ? void 0 : t.nodeResults) ?? "none"), frameResults: C.state((t == null ? void 0 : t.frameResults) ?? "none"), shellResults: C.state((t == null ? void 0 : t.shellResults) ?? "none"), flipAxes: C.state((t == null ? void 0 : t.flipAxes) ?? false), solids: C.state((t == null ? void 0 : t.solids) ?? true) };
}
function jt(t, e, l) {
  const o = j(), n = new ct(new Y(), new dt({ color: o.nodePoint }));
  return pt((r, c) => {
    n.material.color.setHex(c.nodePoint);
  }), n.frustumCulled = false, C.derive(() => {
    t.nodes.val && n.geometry.setAttribute("position", new K(e.val.flat(), 3));
  }), C.derive(() => {
    l.val;
    const r = 0.05 * t.gridSize.val * 0.5;
    t.nodes.rawVal && (n.material.size = r * l.rawVal);
  }), C.derive(() => {
    n.visible = t.nodes.val;
  }), n;
}
function te(t, e, l) {
  const o = j(), n = new U(), r = new It(new Y(), new et({ color: o.elementLine }));
  pt((p, V) => {
    r.material.color.setHex(V.elementLine);
  }), r.frustumCulled = false, n.add(r);
  const c = new Q({ vertexColors: true, transparent: true, opacity: o.shellOpacity, side: O, depthWrite: false }), i = new D(new Y(), c);
  i.frustumCulled = false, n.add(i);
  let f = new G(o.shellWall), g = new G(o.shellSlab), M = new G(o.shellTri);
  pt((p, V) => {
    f = new G(V.shellWall), g = new G(V.shellSlab), M = new G(V.shellTri), c.opacity = V.shellOpacity, c.needsUpdate = true;
  });
  function b(p, V) {
    const m = Math.abs(V[0] - p[0]), P = Math.abs(V[1] - p[1]), X = Math.abs(V[2] - p[2]);
    return X > m && X > P || P > m && P > X;
  }
  return C.derive(() => {
    var _a;
    if (e.deformedShape.val, e.elemColumns.val, e.elemBeams.val, !e.elements.val) return;
    const p = e.elemColumns.rawVal, V = e.elemBeams.rawVal, m = l.val, P = ((_a = t.elements) == null ? void 0 : _a.val) || [], X = P.filter((S) => {
      if (S.length !== 2) return true;
      const v = m[S[0]], y = m[S[1]];
      if (!v || !y) return true;
      const d = b(v, y);
      return !(d && !p || !d && !V);
    }).map((S) => ee(S).map((v) => [...m[v[0]], ...m[v[1]]]).flat()).flat();
    r.geometry.setAttribute("position", new K(X, 3));
    const L = [], Z = [];
    function T(S, v, y, d) {
      const s = [v[0] - S[0], v[1] - S[1], v[2] - S[2]], a = [d[0] - S[0], d[1] - S[1], d[2] - S[2]], u = s[1] * a[2] - s[2] * a[1], h = s[2] * a[0] - s[0] * a[2], w = s[0] * a[1] - s[1] * a[0], F = Math.sqrt(u * u + h * h + w * w);
      return F < 1e-12 ? false : Math.abs(w / F) < 0.5;
    }
    for (const S of P) if (S.length === 3) {
      const [v, y, d] = S;
      if (m[v] && m[y] && m[d]) {
        L.push(...m[v], ...m[y], ...m[d]);
        for (let s = 0; s < 3; s++) Z.push(M.r, M.g, M.b);
      }
    } else if (S.length === 4) {
      const [v, y, d, s] = S;
      if (m[v] && m[y] && m[d] && m[s]) {
        const a = T(m[v], m[y], m[d], m[s]) ? f : g;
        L.push(...m[v], ...m[y], ...m[d]), L.push(...m[v], ...m[d], ...m[s]);
        for (let u = 0; u < 6; u++) Z.push(a.r, a.g, a.b);
      }
    }
    L.length > 0 ? (i.geometry.dispose(), i.geometry = new Y(), i.geometry.setAttribute("position", new K(L, 3)), i.geometry.setAttribute("color", new K(Z, 3)), i.geometry.computeVertexNormals(), i.visible = true) : i.visible = false;
  }), C.derive(() => {
    n.visible = e.elements.val;
  }), n;
}
function ee(t) {
  if (t.length === 2) return [t];
  const e = [];
  for (let l = 0; l < t.length; l++) e.push([t[l], t[(l + 1) % t.length]]);
  return e;
}
function zt(t) {
  const e = j(), l = new Yt(t, 20, e.grid, e.grid);
  return l.position.set(0.5 * t, 0.5 * t, 0), l.rotateX(Math.PI / 2), l;
}
function ne(t, e, l, o) {
  const n = new U(), r = new Lt(0.5, 0.5, 0.5), c = new Q({ color: 10166822 });
  return C.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, !e.supports.val) return;
    n.clear();
    const i = 0.05 * e.gridSize.val * 0.6;
    (_b = (_a = t.nodeInputs) == null ? void 0 : _a.val.supports) == null ? void 0 : _b.forEach((f, g) => {
      const M = l.val[g];
      if (!M) return;
      const b = new D(r, c);
      b.position.set(...M);
      const p = i * o.rawVal;
      b.scale.set(p, p, p), n.add(b);
    });
  }), C.derive(() => {
    if (o.val, !e.supports.rawVal) return;
    const f = 0.05 * e.gridSize.val * 0.6 * o.rawVal;
    n.children.forEach((g) => g.scale.set(f, f, f));
  }), C.derive(() => {
    n.visible = e.supports.val;
  }), n;
}
function oe(t, e, l, o) {
  const n = new U();
  n.name = "loadsGroup";
  function r(c) {
    if (c.length < 2) return 0.12 * e.gridSize.rawVal;
    const i = [1 / 0, 1 / 0, 1 / 0], f = [-1 / 0, -1 / 0, -1 / 0];
    for (const M of c) for (let b = 0; b < 3; b++) i[b] = Math.min(i[b], M[b]), f[b] = Math.max(f[b], M[b]);
    return 0.08 * Math.max(f[0] - i[0], f[1] - i[1], f[2] - i[2], 0.1);
  }
  return C.derive(() => {
    var _a, _b, _c;
    if (e.deformedShape.val, !e.loads.val) return;
    n.children.forEach((f) => f.dispose()), n.clear();
    const c = l.val, i = r(c);
    (_c = (_b = (_a = t.nodeInputs) == null ? void 0 : _a.val) == null ? void 0 : _b.loads) == null ? void 0 : _c.forEach((f, g) => {
      const M = c[g];
      if (!M) return;
      const b = new B(...f.slice(0, 3));
      if (b.lengthSq() < 1e-30) return;
      b.normalize();
      const p = new tt(b, new B(...M), 1, 15637248, 0.3, 0.3), V = i * o.rawVal;
      p.scale.set(V, V, V), n.add(p);
    });
  }), C.derive(() => {
    if (o.val, !e.loads.rawVal) return;
    const i = r(l.rawVal) * o.rawVal;
    n.children.forEach((f) => f.scale.set(i, i, i));
  }), C.derive(() => {
    n.visible = e.loads.val;
  }), n;
}
function se(t, e, l) {
  const o = new U();
  return C.derive(() => {
    if (!t.nodesIndexes.val) return;
    o.children.forEach((r) => r.dispose()), o.clear();
    const n = 0.05 * t.gridSize.val * 0.6;
    e.val.forEach((r, c) => {
      const i = new q(`${c}`);
      i.position.set(...r), i.updateScale(n * l.rawVal), o.add(i);
    });
  }), C.derive(() => {
    if (l.val, !t.nodesIndexes.rawVal) return;
    const n = 0.05 * t.gridSize.val * 0.6;
    o.children.forEach((r) => r.updateScale(n * l.rawVal));
  }), C.derive(() => {
    o.visible = t.nodesIndexes.val;
  }), o;
}
function ie(t, e, l, o) {
  const n = new U();
  return C.derive(() => {
    var _a;
    if (e.deformedShape.val, !e.elementsIndexes.val) return;
    n.children.forEach((c) => c.dispose()), n.clear();
    const r = 0.05 * e.gridSize.val * 0.6;
    (_a = t.elements) == null ? void 0 : _a.val.forEach((c, i) => {
      const f = new q(`${i}`, void 0, "#001219");
      f.position.set(...ae(c.map((g) => l.rawVal[g]))), f.updateScale(r * o.rawVal), n.add(f);
    });
  }), C.derive(() => {
    if (o.val, !e.elementsIndexes.rawVal) return;
    const r = 0.05 * e.gridSize.val * 0.6;
    n.children.forEach((c) => c.updateScale(r * o.rawVal));
  }), C.derive(() => {
    n.visible = e.elementsIndexes.val;
  }), n;
}
function ae(t) {
  const e = t.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), l = t.length;
  return [e[0] / l, e[1] / l, e[2] / l];
}
function re(t, e) {
  const l = new U(), o = 0.05 * t * 1, n = j(), r = new q("X", "red", "transparent"), c = new q(e ? "Z" : "Y", "green", "transparent"), i = new q(e ? "Y" : "Z", "blue", "transparent"), f = new tt(new B(1, 0, 0), new B(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), g = new tt(new B(0, 1, 0), new B(0, 0, 0), 1, n.axisArrow, 0.2, 0.2), M = new tt(new B(0, 0, 1), new B(0, 0, 0), 1, n.axisArrow, 0.2, 0.2);
  return r.position.set(1.3 * o, 0, 0), c.position.set(0, 1.3 * o, 0), i.position.set(0, 0, 1.3 * o), r.updateScale(0.4 * o), c.updateScale(0.4 * o), i.updateScale(0.4 * o), f.scale.set(o, o, o), g.scale.set(o, o, o), M.scale.set(o, o, o), l.add(f, g, M, r, c, i), l;
}
function Ft(t, e) {
  const l = new B(...t), n = new B(...e).clone().sub(l), r = n.length(), c = n.dot(new B(1, 0, 0)) / r, i = n.dot(new B(0, 1, 0)) / r, f = n.dot(new B(0, 0, 1)) / r, g = Math.sqrt(c ** 2 + i ** 2);
  let M = new yt().fromArray([[c, i, f], [-i / g, c / g, 0], [-c * f / g, -i * f / g, g]].flat());
  return f === 1 && (M = new yt().fromArray([[0, 0, 1], [0, 1, 0], [-1, 0, 0]].flat())), f === -1 && (M = new yt().fromArray([[0, 0, -1], [0, 1, 0], [1, 0, 0]].flat())), new Et().setFromMatrix3(M);
}
function bt(t, e) {
  return t == null ? void 0 : t.map((l, o) => (9 * l + e[o]) / 10);
}
function ot(t) {
  const e = t.reduce((o, n) => [o[0] + n[0], o[1] + n[1], o[2] + n[2]], [0, 0, 0]), l = t.length;
  return [e[0] / l, e[1] / l, e[2] / l];
}
function le(t, e, l) {
  const o = ot([e, l]), n = ot([t, l]), r = ot([t, e]), c = new B(...o).sub(new B(...n)).normalize(), i = new B(...l).sub(new B(...r)).normalize(), f = c.clone().cross(i).normalize(), g = f.clone().cross(c).normalize();
  return new Et().makeBasis(c, g, f);
}
function ce(t, e, l, o) {
  const n = new U(), r = new Y(), c = new et({ vertexColors: true }), i = [0, 0, 0], f = [1, 0, 0], g = [0, 1, 0], M = [0, 0, 1];
  r.setAttribute("position", new K([...i, ...f, ...i, ...g, ...i, ...M], 3));
  const b = [255, 0, 0], p = [0, 255, 0], V = [0, 0, 255];
  return r.setAttribute("color", new K([...b, ...b, ...p, ...p, ...V, ...V], 3)), C.derive(() => {
    var _a;
    e.deformedShape.val, e.orientations.val && (n.clear(), (_a = t.elements) == null ? void 0 : _a.val.forEach((m) => {
      const P = new It(r, c), X = l.rawVal[m[0]], L = l.rawVal[m[1]];
      if (m.length === 2 && (P.position.set(...bt(X, L)), P.rotation.setFromRotationMatrix(Ft(X, L))), m.length === 3) {
        const S = l.rawVal[m[2]];
        P.position.set(...ot([X, L, S])), P.rotation.setFromRotationMatrix(le(X, L, S));
      }
      const T = 0.05 * e.gridSize.rawVal * 0.75 * o.rawVal;
      P.scale.set(T, T, T), n.add(P);
    }));
  }), C.derive(() => {
    if (o.val, !e.orientations.rawVal) return;
    const P = 0.05 * e.gridSize.val * 0.75 * o.rawVal;
    n.children.forEach((X) => X.scale.set(P, P, P));
  }), C.derive(() => {
    n.visible = e.orientations.val;
  }), n;
}
function de(t) {
  if (t.name) return t.name;
  if (t.type === "rect") {
    const e = (t.b * 100).toFixed(0), l = (t.h * 100).toFixed(0);
    return `${e}x${l}`;
  }
  return t.type === "circ" ? `D${(t.d * 100).toFixed(0)}` : "";
}
function he(t, e, l, o) {
  const n = new U();
  function r(v, y) {
    const d = v / 2, s = y / 2, a = new Float32Array([0, -d, -s, 0, d, -s, 0, d, s, 0, -d, -s, 0, d, s, 0, -d, s]), u = new Y();
    u.setAttribute("position", new $(a, 3));
    const h = new Float32Array([0, -d, -s, 0, d, -s, 0, d, s, 0, -d, s, 0, -d, -s]), w = new Y();
    return w.setAttribute("position", new $(h, 3)), { fill: u, outline: w };
  }
  function c(v, y = 24) {
    const d = v / 2, s = new Float32Array(y * 9);
    for (let w = 0; w < y; w++) {
      const F = w / y * Math.PI * 2, A = (w + 1) / y * Math.PI * 2;
      s[w * 9] = 0, s[w * 9 + 1] = 0, s[w * 9 + 2] = 0, s[w * 9 + 3] = 0, s[w * 9 + 4] = d * Math.cos(F), s[w * 9 + 5] = d * Math.sin(F), s[w * 9 + 6] = 0, s[w * 9 + 7] = d * Math.cos(A), s[w * 9 + 8] = d * Math.sin(A);
    }
    const a = new Y();
    a.setAttribute("position", new $(s, 3));
    const u = new Float32Array((y + 1) * 3);
    for (let w = 0; w <= y; w++) {
      const F = w / y * Math.PI * 2;
      u[w * 3] = 0, u[w * 3 + 1] = d * Math.cos(F), u[w * 3 + 2] = d * Math.sin(F);
    }
    const h = new Y();
    return h.setAttribute("position", new $(u, 3)), { fill: a, outline: h };
  }
  function i(v, y, d, s) {
    const a = d ?? y * 0.08, u = s ?? v * 0.07, h = v / 2, w = y / 2, F = w - a, A = u / 2, E = [];
    function x(I, W, H, _) {
      E.push(0, I, W, 0, H, W, 0, H, _, 0, I, W, 0, H, _, 0, I, _);
    }
    x(-h, -w, h, -F), x(-A, -F, A, F), x(-h, F, h, w);
    const z = new Y();
    z.setAttribute("position", new $(new Float32Array(E), 3));
    const R = new Float32Array([0, -h, -w, 0, h, -w, 0, h, -F, 0, A, -F, 0, A, F, 0, h, F, 0, h, w, 0, -h, w, 0, -h, F, 0, -A, F, 0, -A, -F, 0, -h, -F, 0, -h, -w]), k = new Y();
    return k.setAttribute("position", new $(R, 3)), { fill: z, outline: k };
  }
  function f(v, y, d) {
    const s = v / 2, a = y / 2, u = s - d, h = a - d, w = [];
    function F(z, R, k, I) {
      w.push(0, z, R, 0, k, R, 0, k, I, 0, z, R, 0, k, I, 0, z, I);
    }
    F(-s, -a, s, -h), F(-s, h, s, a), F(-s, -h, -u, h), F(u, -h, s, h);
    const A = new Y();
    A.setAttribute("position", new $(new Float32Array(w), 3));
    const E = new Float32Array([0, -s, -a, 0, s, -a, 0, s, -a, 0, s, a, 0, s, a, 0, -s, a, 0, -s, a, 0, -s, -a, 0, -u, -h, 0, u, -h, 0, u, -h, 0, u, h, 0, u, h, 0, -u, h, 0, -u, h, 0, -u, -h]), x = new Y();
    return x.setAttribute("position", new $(E, 3)), { fill: A, outline: x };
  }
  function g(v, y, d) {
    const s = v / 2, a = y / 2, u = s - d, h = a - d, w = new Y(), F = new Float32Array([0, -u, -h, 0, u, -h, 0, u, h, 0, -u, -h, 0, u, h, 0, -u, h]);
    w.setAttribute("position", new $(F, 3));
    const A = [];
    function E(k, I, W, H) {
      A.push(0, k, I, 0, W, I, 0, W, H, 0, k, I, 0, W, H, 0, k, H);
    }
    E(-s, -a, s, -h), E(-s, h, s, a), E(-s, -h, -u, h), E(u, -h, s, h);
    const x = new Y();
    x.setAttribute("position", new $(new Float32Array(A), 3));
    const z = new Float32Array([0, -s, -a, 0, s, -a, 0, s, -a, 0, s, a, 0, s, a, 0, -s, a, 0, -s, a, 0, -s, -a, 0, -u, -h, 0, u, -h, 0, u, -h, 0, u, h, 0, u, h, 0, -u, h, 0, -u, h, 0, -u, -h]), R = new Y();
    return R.setAttribute("position", new $(z, 3)), { concFill: w, steelFillGeom: x, outline: R };
  }
  function M(v, y, d) {
    const s = [], a = [[0, -v / 2, -y / 2], [0, -v / 2 + d, -y / 2], [0, -v / 2 + d, y / 2 - d], [0, v / 2, y / 2 - d], [0, v / 2, y / 2], [0, -v / 2, y / 2]], u = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const A of u) s.push(...a[A]);
    const h = new Y();
    h.setAttribute("position", new $(new Float32Array(s), 3));
    const w = [];
    for (let A = 0; A < a.length; A++) {
      const E = (A + 1) % a.length;
      w.push(...a[A], ...a[E]);
    }
    const F = new Y();
    return F.setAttribute("position", new $(new Float32Array(w), 3)), { fill: h, outline: F };
  }
  function b(v, y, d, s) {
    const a = s / 2, u = [], h = [[0, -v - a, -y / 2], [0, -d - a, -y / 2], [0, -d - a, y / 2 - d], [0, -a, y / 2 - d], [0, -a, y / 2], [0, -v - a, y / 2]], w = [[0, a, -y / 2], [0, a + d, -y / 2], [0, a + d, y / 2 - d], [0, v + a, y / 2 - d], [0, v + a, y / 2], [0, a, y / 2]], F = [0, 1, 2, 0, 2, 5, 2, 3, 4, 2, 4, 5];
    for (const z of F) u.push(...h[z]);
    for (const z of F) u.push(...w[z]);
    const A = new Y();
    A.setAttribute("position", new $(new Float32Array(u), 3));
    const E = [];
    for (const z of [h, w]) for (let R = 0; R < z.length; R++) {
      const k = (R + 1) % z.length;
      E.push(...z[R], ...z[k]);
    }
    const x = new Y();
    return x.setAttribute("position", new $(new Float32Array(E), 3)), { fill: A, outline: x };
  }
  function p(v, y, d, s) {
    const a = y / 2, u = v, h = [[0, -u, -a], [0, -u, -a + d], [0, -s, -a + d], [0, -s, a - d], [0, -u, a - d], [0, -u, a], [0, 0, a], [0, 0, -a]], w = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5], F = [];
    for (const z of w) F.push(...h[z]);
    const A = new Y();
    A.setAttribute("position", new $(new Float32Array(F), 3));
    const E = [];
    for (let z = 0; z < h.length; z++) {
      const R = (z + 1) % h.length;
      E.push(...h[z], ...h[R]);
    }
    const x = new Y();
    return x.setAttribute("position", new $(new Float32Array(E), 3)), { fill: A, outline: x };
  }
  function V(v, y, d, s, a) {
    const u = y / 2, h = a / 2, w = [], F = [[0, -v, -u], [0, -v, -u + d], [0, -h - s, -u + d], [0, -h - s, u - d], [0, -v, u - d], [0, -v, u], [0, -h, u], [0, -h, -u]], A = F.map((k) => [k[0], -k[1], k[2]]), E = [0, 1, 7, 1, 6, 7, 1, 2, 6, 2, 5, 6, 2, 3, 5, 3, 4, 5];
    for (const k of E) w.push(...F[k]);
    for (const k of E) w.push(...A[k]);
    const x = new Y();
    x.setAttribute("position", new $(new Float32Array(w), 3));
    const z = [];
    for (const k of [F, A]) for (let I = 0; I < k.length; I++) {
      const W = (I + 1) % k.length;
      z.push(...k[I], ...k[W]);
    }
    const R = new Y();
    return R.setAttribute("position", new $(new Float32Array(z), 3)), { fill: x, outline: R };
  }
  function m(v, y, d, s) {
    const a = v / 2, u = y / 2, h = s / 2, w = [[0, -h, -u], [0, h, -u], [0, h, u - d], [0, a, u - d], [0, a, u], [0, -a, u], [0, -a, u - d], [0, -h, u - d]], F = [0, 1, 7, 1, 2, 7, 6, 7, 5, 2, 3, 4, 2, 4, 5, 2, 5, 7], A = [];
    for (const R of F) A.push(...w[R]);
    const E = new Y();
    E.setAttribute("position", new $(new Float32Array(A), 3));
    const x = [];
    for (let R = 0; R < w.length; R++) {
      const k = (R + 1) % w.length;
      x.push(...w[R], ...w[k]);
    }
    const z = new Y();
    return z.setAttribute("position", new $(new Float32Array(x), 3)), { fill: E, outline: z };
  }
  function P(v, y, d = 24) {
    const s = v / 2, a = s - y, u = [];
    for (let A = 0; A < d; A++) {
      const E = A / d * Math.PI * 2, x = (A + 1) / d * Math.PI * 2, z = Math.cos(E), R = Math.sin(E), k = Math.cos(x), I = Math.sin(x);
      u.push(0, s * z, s * R, 0, s * k, s * I, 0, a * k, a * I), u.push(0, s * z, s * R, 0, a * k, a * I, 0, a * z, a * R);
    }
    const h = new Y();
    h.setAttribute("position", new $(new Float32Array(u), 3));
    const w = [];
    for (let A = 0; A < d; A++) {
      const E = A / d * Math.PI * 2, x = (A + 1) / d * Math.PI * 2;
      w.push(0, s * Math.cos(E), s * Math.sin(E), 0, s * Math.cos(x), s * Math.sin(x)), w.push(0, a * Math.cos(E), a * Math.sin(E), 0, a * Math.cos(x), a * Math.sin(x));
    }
    const F = new Y();
    return F.setAttribute("position", new $(new Float32Array(w), 3)), { fill: h, outline: F };
  }
  const X = new Q({ color: 52479, transparent: true, opacity: 0.35, side: O, depthWrite: false }), L = new et({ color: 52479 }), Z = new Q({ color: 16750848, transparent: true, opacity: 0.4, side: O, depthWrite: false }), T = new et({ color: 16750848 });
  function S(v, y) {
    const d = Math.abs(y[0] - v[0]), s = Math.abs(y[1] - v[1]), a = Math.abs(y[2] - v[2]);
    return a > d && a > s || s > d && s > a;
  }
  return C.derive(() => {
    var _a, _b;
    e.deformedShape.val, e.secColumns.val, e.secBeams.val, e.secFloor.val;
    const v = e.secColumns.rawVal, y = e.secBeams.rawVal;
    if (!v && !y) {
      n.children.forEach((h) => {
        h instanceof q && h.dispose();
      }), n.clear();
      return;
    }
    n.children.forEach((h) => {
      h instanceof q && h.dispose();
    }), n.clear();
    const d = (_a = t.elements) == null ? void 0 : _a.val, s = (_b = t.elementInputs) == null ? void 0 : _b.val;
    if (!d || !s) return;
    const a = s.sectionShapes, u = e.secFloor.rawVal;
    d.forEach((h, w) => {
      if (h.length !== 2) return;
      const F = l.rawVal[h[0]], A = l.rawVal[h[1]];
      if (!F || !A) return;
      const E = S(F, A);
      if (E && !v || !E && !y) return;
      if (u >= 0) {
        const I = Math.min(F[1], A[1]);
        Math.max(F[1], A[1]);
        const W = e.gridSize.rawVal || 3;
        if (Math.floor(I / W + 0.01) !== u) return;
      }
      const x = a == null ? void 0 : a.get(w);
      if (!x) return;
      const z = [(F[0] + A[0]) / 2, (F[1] + A[1]) / 2, (F[2] + A[2]) / 2], R = Ft(F, A);
      if (x.type === "CFT") {
        const I = g(x.b, x.h, x.tw ?? x.b * 0.05), W = new D(I.concFill, X);
        W.position.set(...z), W.rotation.setFromRotationMatrix(R), n.add(W);
        const H = new D(I.steelFillGeom, Z);
        H.position.set(...z), H.rotation.setFromRotationMatrix(R), n.add(H);
        const _ = new nt(I.outline, T);
        _.position.set(...z), _.rotation.setFromRotationMatrix(R), n.add(_);
      } else {
        let I, W, H;
        switch (x.type) {
          case "rect":
            I = r(x.b, x.h), W = X, H = L;
            break;
          case "circ":
            I = c(x.d), W = X, H = L;
            break;
          case "I":
            I = i(x.b, x.h, x.tf, x.tw), W = Z, H = T;
            break;
          case "HSS":
            I = f(x.b, x.h, x.tw ?? x.b * 0.05), W = Z, H = T;
            break;
          case "CFT":
            I = g(x.b, x.h, x.tw ?? x.b * 0.05), W = Z, H = T;
            break;
          case "L":
            I = M(x.b ?? x.h, x.h, x.t ?? x.tw ?? 3e-3), W = Z, H = T;
            break;
          case "2L":
            I = b(x.b ?? x.h, x.h, x.t ?? x.tw ?? 3e-3, x.dis ?? 0.01), W = Z, H = T;
            break;
          case "C":
          case "coldC":
            I = p(x.b, x.h, x.tf ?? x.t ?? 3e-3, x.tw ?? x.t ?? 3e-3), W = Z, H = T;
            break;
          case "2C":
            I = V(x.b, x.h, x.tf ?? 5e-3, x.tw ?? 5e-3, x.dis ?? 0.01), W = Z, H = T;
            break;
          case "T":
            I = m(x.b, x.h, x.tf ?? 0.01, x.tw ?? 6e-3), W = Z, H = T;
            break;
          case "pipe":
            I = P(x.d, x.tw ?? x.d * 0.05), W = Z, H = T;
            break;
          default:
            return;
        }
        const _ = new D(I.fill, W);
        _.position.set(...z), _.rotation.setFromRotationMatrix(R), n.add(_);
        const N = new nt(I.outline, H);
        N.position.set(...z), N.rotation.setFromRotationMatrix(R), n.add(N);
      }
      const k = de(x);
      if (k) {
        const W = ["I", "HSS", "CFT", "L", "2L", "C", "2C", "T", "pipe", "coldC"].includes(x.type) ? "#ff9900" : "#00ccff", H = new q(k, W, "transparent");
        H.position.set(z[0], z[1], z[2]);
        const _ = 0.05 * e.gridSize.rawVal * 0.5;
        H.updateScale(_ * ((o == null ? void 0 : o.rawVal) ?? 1)), n.add(H);
      }
    });
  }), o && C.derive(() => {
    if (o.val, !e.sections.rawVal) return;
    const v = 0.05 * e.gridSize.val * 0.5;
    n.children.forEach((y) => {
      y instanceof q && y.updateScale(v * o.rawVal);
    });
  }), C.derive(() => {
    n.visible = e.sections.val;
  }), n;
}
class lt extends U {
  constructor(e, l, o, n, r, c, i) {
    super();
    const f = new ht().moveTo(0, 0).lineTo(0, c[1]).lineTo(o, c[1]).lineTo(o, 0).lineTo(0, 0), g = f.getPoints(), M = new Y().setFromPoints(g);
    this.lines = new nt(M, new et({ color: j().resultOutline })), this.lines.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), i && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
    const b = new ut(f), p = new Q({ color: c[1] > 0 ? 24435 : 11411474, side: O });
    this.mesh = new D(b, p), this.mesh.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), i && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh), this.text = new q(`${r[1].toFixed(4)}`), this.normalizedResult = c, this.textPosition = ot([e, l]), this.text.position.set(...this.textPosition), this.text.rotation.setFromRotationMatrix(n), this.add(this.text);
  }
  updateScale(e) {
    this.lines.scale.set(1, e * 2, 1), this.mesh.scale.set(1, e * 2, 1), this.text.updateScale(e * 0.6), this.text.position.set(...this.textPosition), this.text.translateZ(this.normalizedResult[1] * 2.5 * e);
  }
  dispose() {
    this.lines.geometry.dispose(), this.lines.material.dispose(), this.mesh.geometry.dispose(), this.mesh.material.dispose(), this.text.dispose();
  }
}
class Pt extends U {
  constructor(e, l, o, n, r, c, i) {
    super();
    const f = r[0] * o / (r[0] + r[1]), g = r[0] * r[1] > 0;
    if (this.text = new q(`${r[0].toFixed(4)}`), this.text2 = new q(`${(r[1] * -1).toFixed(4)}`), this.normalizedResult = c, this.textPosition = bt(e, l), this.text2Position = bt(l, e), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.rotation.setFromRotationMatrix(n), this.text2.rotation.setFromRotationMatrix(n), this.add(this.text, this.text2), g) {
      const M = new ht().moveTo(0, 0).lineTo(0, c[0]).lineTo(f, 0).lineTo(0, 0), b = new ht().moveTo(f, 0).lineTo(o, -c[1]).lineTo(o, 0).lineTo(f, 0), p = M.getPoints(), V = b.getPoints(), m = new Y().setFromPoints(p), P = new Y().setFromPoints(V), X = new et({ color: j().resultOutline });
      this.lines = new nt(m, X), this.lines2 = new nt(P, X), this.lines.position.set(...e), this.lines2.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), this.lines2.rotation.setFromRotationMatrix(n), i && this.lines.rotateX(Math.PI / 2), i && this.lines2.rotateX(Math.PI / 2), this.add(this.lines, this.lines2);
      const L = new ut(M), Z = new ut(b), T = new Q({ color: c[0] > 0 ? 24435 : 11411474, side: O }), S = new Q({ color: -c[1] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new D(L, T), this.mesh2 = new D(Z, S), this.mesh.position.set(...e), this.mesh2.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), this.mesh2.rotation.setFromRotationMatrix(n), i && this.mesh.rotateX(Math.PI / 2), i && this.mesh2.rotateX(Math.PI / 2), this.add(this.mesh, this.mesh2);
    } else {
      const M = new ht().moveTo(0, 0).lineTo(0, c[0]).lineTo(o, -c[1]).lineTo(o, 0).lineTo(0, 0), b = M.getPoints(), p = new Y().setFromPoints(b);
      this.lines = new nt(p, new et({ color: j().resultOutline })), this.lines.position.set(...e), this.lines.rotation.setFromRotationMatrix(n), i && this.lines.rotateX(Math.PI / 2), this.add(this.lines);
      const V = new ut(M), m = new Q({ color: c[0] > 0 ? 24435 : 11411474, side: O });
      this.mesh = new D(V, m), this.mesh.position.set(...e), this.mesh.rotation.setFromRotationMatrix(n), i && this.mesh.rotateX(Math.PI / 2), this.add(this.mesh);
    }
  }
  updateScale(e) {
    var _a, _b;
    this.lines.scale.set(1, e * 2, 1), (_a = this.lines2) == null ? void 0 : _a.scale.set(1, e * 2, 1), this.mesh.scale.set(1, e * 2, 1), (_b = this.mesh2) == null ? void 0 : _b.scale.set(1, e * 2, 1), this.text.updateScale(e * 0.6), this.text2.updateScale(e * 0.6), this.text.position.set(...this.textPosition), this.text2.position.set(...this.text2Position), this.text.translateZ(this.normalizedResult[0] * 2.5 * e), this.text2.translateZ(-this.normalizedResult[1] * 2.5 * e);
  }
  dispose() {
    var _a, _b, _c, _d, _e, _f;
    this.lines.geometry.dispose(), (_a = this.lines2) == null ? void 0 : _a.geometry.dispose(), this.lines.material.dispose(), (_c = (_b = this.lines2) == null ? void 0 : _b.material) == null ? void 0 : _c.dispose(), this.mesh.geometry.dispose(), (_d = this.mesh2) == null ? void 0 : _d.geometry.dispose(), this.mesh.material.dispose(), (_f = (_e = this.mesh2) == null ? void 0 : _e.material) == null ? void 0 : _f.dispose(), this.text.dispose(), this.text2.dispose();
  }
}
var Bt = ((t) => (t.normals = "normals", t.shearsY = "shearsY", t.shearsZ = "shearsZ", t.torsions = "torsions", t.bendingsY = "bendingsY", t.bendingsZ = "bendingsZ", t))(Bt || {});
function ue(t, e, l, o) {
  const n = new U(), r = { normals: lt, shearsY: lt, shearsZ: lt, torsions: lt, bendingsY: Pt, bendingsZ: Pt };
  return C.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, l.val, e.frameResults.val == "none") return;
    n.children.forEach((i) => i.dispose()), n.clear();
    const c = Bt[e.frameResults.rawVal];
    (_b = (_a = t.analyzeOutputs) == null ? void 0 : _a.rawVal[c]) == null ? void 0 : _b.forEach((i, f) => {
      var _a2, _b2;
      const g = ((_a2 = t.elements) == null ? void 0 : _a2.rawVal[f]) ?? [0, 1], M = l.rawVal[g[0]], b = l.rawVal[g[1]], p = new B(...b).distanceTo(new B(...M)), V = pe((_b2 = t.analyzeOutputs) == null ? void 0 : _b2.rawVal[c]), m = i == null ? void 0 : i.map((Z) => Z / (V === 0 ? 1 : V)), P = Ft(M, b), X = new r[c](M, b, p, P, i ?? [0, 0], m ?? [0, 0], !!["normals", "shearsZ", "torsions", "bendingsY"].includes(c)), L = 0.05 * e.gridSize.rawVal;
      X.updateScale(L * o.rawVal), n.add(X);
    });
  }), C.derive(() => {
    if (o.val, e.frameResults.rawVal == "none") return;
    const c = 0.05 * e.gridSize.val;
    n.children.forEach((i) => i.updateScale(c * o.rawVal));
  }), C.derive(() => {
    n.visible = e.frameResults.val != "none";
  }), n;
}
function pe(t) {
  let e = 0;
  return t == null ? void 0 : t.forEach((l) => {
    const o = Math.max(...l ?? [0, 0]);
    o > e && (e = o);
  }), e;
}
class fe extends U {
  constructor(e, l, o) {
    super();
    const n = l === Ct.reactions;
    o[0] && (this.xText1 = new q(`${n ? "Fx" : "Dx"}: ` + o[0].toFixed(4))), o[3] && (this.xText2 = new q(`${n ? "Mx" : "Rx"}: ` + o[3].toFixed(4))), o[1] && (this.yText1 = new q(`${n ? "Fy" : "Dy"}: ` + o[1].toFixed(4))), o[4] && (this.yText2 = new q(`${n ? "My" : "Ry"}: ` + o[4].toFixed(4))), o[2] && (this.zText1 = new q(`${n ? "Fz" : "Dz"}: ` + o[2].toFixed(4))), o[5] && (this.zText2 = new q(`${n ? "Mz" : "Rz"}: ` + o[5].toFixed(4))), (o[0] || o[3]) && (this.xArrow = new tt(new B(1, 0, 0), new B(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[1] || o[4]) && (this.yArrow = new tt(new B(0, 1, 0), new B(0, 0, 0), 1, 15637248, 0.3, 0.3)), (o[2] || o[5]) && (this.zArrow = new tt(new B(0, 0, 1), new B(0, 0, 0), 1, 15637248, 0.3, 0.3)), this.position.set(...e), this.xArrow && this.add(this.xArrow), this.yArrow && this.add(this.yArrow), this.zArrow && this.add(this.zArrow), this.xText1 && this.add(this.xText1), this.xText2 && this.add(this.xText2), this.yText1 && this.add(this.yText1), this.yText2 && this.add(this.yText2), this.zText1 && this.add(this.zText1), this.zText2 && this.add(this.zText2);
  }
  updateScale(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
    (_a = this.xArrow) == null ? void 0 : _a.scale.set(e, e, e), (_b = this.yArrow) == null ? void 0 : _b.scale.set(e, e, e), (_c = this.zArrow) == null ? void 0 : _c.scale.set(e, e, e), (_d = this.xText1) == null ? void 0 : _d.position.set(1.3 * e, 0, 0), (_e = this.xText2) == null ? void 0 : _e.position.set(1.3 * e, 0, 0.5 * e), (_f = this.yText1) == null ? void 0 : _f.position.set(0, 1.3 * e, 0), (_g = this.yText2) == null ? void 0 : _g.position.set(0, 1.3 * e, 0.5 * e), (_h = this.zText1) == null ? void 0 : _h.position.set(0, 0, 1.3 * e), (_i = this.zText2) == null ? void 0 : _i.position.set(0, 0, 1.3 * e + 0.5 * e), (_j = this.xText1) == null ? void 0 : _j.updateScale(0.4 * e), (_k = this.xText2) == null ? void 0 : _k.updateScale(0.4 * e), (_l = this.yText1) == null ? void 0 : _l.updateScale(0.4 * e), (_m = this.yText2) == null ? void 0 : _m.updateScale(0.4 * e), (_n = this.zText1) == null ? void 0 : _n.updateScale(0.4 * e), (_o = this.zText2) == null ? void 0 : _o.updateScale(0.4 * e);
  }
  dispose() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    (_a = this.xArrow) == null ? void 0 : _a.dispose(), (_b = this.yArrow) == null ? void 0 : _b.dispose(), (_c = this.zArrow) == null ? void 0 : _c.dispose(), (_d = this.xText1) == null ? void 0 : _d.dispose(), (_e = this.xText2) == null ? void 0 : _e.dispose(), (_f = this.yText1) == null ? void 0 : _f.dispose(), (_g = this.yText2) == null ? void 0 : _g.dispose(), (_h = this.zText1) == null ? void 0 : _h.dispose(), (_i = this.zText2) == null ? void 0 : _i.dispose();
  }
}
var Ct = ((t) => (t.deformations = "deformations", t.reactions = "reactions", t))(Ct || {});
function me(t, e, l, o) {
  const n = new U();
  return C.derive(() => {
    var _a, _b;
    if (e.deformedShape.val, e.nodeResults.val == "none") return;
    n.children.forEach((i) => i.dispose()), n.clear();
    const r = Ct[e.nodeResults.rawVal], c = 0.05 * e.gridSize.val;
    (_b = (_a = t.deformOutputs) == null ? void 0 : _a.val[r]) == null ? void 0 : _b.forEach((i, f) => {
      const g = new fe(l.rawVal[f], r, i ?? [0, 0, 0, 0, 0, 0]);
      g.updateScale(c * o.rawVal), n.add(g);
    });
  }), C.derive(() => {
    if (o.val, e.nodeResults.rawVal == "none") return;
    const r = 0.05 * e.gridSize.val;
    n.children.forEach((c) => c.updateScale(r * o.rawVal));
  }), C.derive(() => {
    n.visible = e.nodeResults.val != "none";
  }), n;
}
function we({ drawingObj: t, gridObj: e, scene: l, camera: o, controls: n, gridSize: r, derivedDisplayScale: c, rendererElm: i, viewerRender: f }) {
  const g = new Xt(), M = new kt(), b = new D(new Zt(r, r), new Q({ side: O })), p = new ct(new Y(), new dt()), V = new ct(new Y(), new dt({ color: "gray" })), m = new ct(new Y(), new dt({ color: "orange", size: 0.8 }));
  l.add(m), p.geometry.setAttribute("position", new K(t.points.rawVal.flat(), 3)), p.geometry.computeBoundingSphere(), p.frustumCulled = false, V.frustumCulled = false, l.add(V), b.position.set(0.5 * r, 0.5 * r, 0), b.rotateX(Math.PI / 2), b.geometry.rotateX(Math.PI / 2), b.updateMatrixWorld(), t.polylines && (t.polylines.val = [...t.polylines.rawVal, []]), C.derive(() => {
    t.gridTarget && (xe(e, { position: new B(...t.gridTarget.val.position), quaternion: new Wt().setFromEuler(new At(...t.gridTarget.val.rotation)) }, f), b.position.set(...t.gridTarget.val.position), b.quaternion.setFromEuler(new At(...t.gridTarget.val.rotation)), b.updateMatrixWorld());
  }), C.derive(() => {
    p.geometry.setAttribute("position", new K(t.points.val.flat(), 3)), p.geometry.computeBoundingSphere();
  }), C.derive(() => {
    const T = 0.05 * r * 0.5 * c.val;
    V.material.size = T, g.params.Points.threshold = 0.4 * T;
  }), C.derive(() => {
    var _a;
    const T = t.points.val ?? [], v = (((_a = t.polylines) == null ? void 0 : _a.val) ?? []).at(-1) ?? [], y = [];
    for (const s of v) {
      const [a, u, h] = T[s];
      y.push(a, u, h);
    }
    const d = new Y();
    d.setAttribute("position", new K(y, 3)), m.geometry.dispose(), m.geometry = d;
  });
  let P = false, X = 0;
  i.addEventListener("pointerdown", () => {
    P = true;
  }), i.addEventListener("pointerup", () => {
    P = false;
  }), i.addEventListener("pointermove", () => {
    P && X++;
  }), i.addEventListener("click", (T) => {
    if (X > 5) {
      X = 0;
      return;
    }
    X = 0, M.x = T.clientX / window.innerWidth * 2 - 1, M.y = -(T.clientY / window.innerHeight) * 2 + 1, g.setFromCamera(M, o);
    const S = g.intersectObject(b);
    if (S.length) {
      let v = S[0].point;
      (T.ctrlKey || T.metaKey) && (v = new B(Math.round(S[0].point.x), Math.round(S[0].point.y), Math.round(S[0].point.z))), t.points.val = [...t.points.rawVal, v.toArray()], t.polylines && (t.polylines.val = [...t.polylines.rawVal.slice(0, -1), [...t.polylines.rawVal.length ? t.polylines.rawVal.pop() : [], t.points.rawVal.length - 1]]);
    }
  }), i.addEventListener("contextmenu", () => {
    !t.polylines || t.polylines.rawVal[t.polylines.rawVal.length - 1].length === 0 || (t.polylines.val = [...t.polylines.rawVal, []]);
  }), i.addEventListener("pointermove", (T) => {
    M.x = T.clientX / window.innerWidth * 2 - 1, M.y = -(T.clientY / window.innerHeight) * 2 + 1, g.setFromCamera(M, o);
    const S = g.intersectObject(b);
    if (V.geometry.deleteAttribute("position"), S.length) {
      let v = S[0].point;
      (T.ctrlKey || T.metaKey) && (v = new B(Math.round(S[0].point.x), Math.round(S[0].point.y), Math.round(S[0].point.z))), V.geometry.setAttribute("position", new K(v.toArray(), 3));
    }
    f();
  }), i.addEventListener("pointermove", (T) => {
    var _a;
    M.x = T.clientX / window.innerWidth * 2 - 1, M.y = -(T.clientY / window.innerHeight) * 2 + 1, g.setFromCamera(M, o);
    let S = false;
    const v = g.intersectObject(p), y = g.intersectObject(b);
    if (v.length && y.length) {
      const d = new B(...t.points.rawVal[v[0].index]), s = new B(...y[0].point), a = d.sub(s), u = (_a = y[0].face) == null ? void 0 : _a.normal;
      u.transformDirection(b.matrixWorld), Math.abs(a.dot(u)) < 1e-4 && (S = true);
    }
    V.visible = !S;
  });
  let L = false, Z;
  i.addEventListener("pointermove", (T) => {
    var _a;
    if (!X) return;
    M.x = T.clientX / window.innerWidth * 2 - 1, M.y = -(T.clientY / window.innerHeight) * 2 + 1, g.setFromCamera(M, o);
    let S = false;
    const v = g.intersectObject(p), y = g.intersectObject(b);
    if (v.length && y.length) {
      const s = new B(...t.points.rawVal[v[0].index]), a = new B(...y[0].point), u = s.sub(a), h = (_a = y[0].face) == null ? void 0 : _a.normal;
      h.transformDirection(b.matrixWorld), Math.abs(u.dot(h)) < 1e-4 && (S = true);
    }
    if (S && X < 5 && (L = true, n.enabled = false, Z = v[0].index), !L || X % 2 !== 0) return;
    const d = [...t.points.rawVal];
    if (Z !== void 0) {
      let s = y[0].point;
      (T.ctrlKey || T.metaKey) && (s = new B(Math.round(s.x), Math.round(s.y), Math.round(s.z))), d[Z] = s.toArray();
    }
    t.points.val = d;
  }), i.addEventListener("pointerup", () => {
    n.enabled = true, L = false;
  }), i.addEventListener("contextmenu", (T) => {
    var _a;
    M.x = T.clientX / window.innerWidth * 2 - 1, M.y = -(T.clientY / window.innerHeight) * 2 + 1, g.setFromCamera(M, o);
    let S = false;
    const v = g.intersectObject(p), y = g.intersectObject(b);
    if (v.length && y.length) {
      const a = new B(...t.points.rawVal[v[0].index]), u = new B(...y[0].point), h = a.sub(u), w = (_a = y[0].face) == null ? void 0 : _a.normal;
      w.transformDirection(b.matrixWorld), Math.abs(h.dot(w)) < 1e-4 && (S = true);
    }
    if (!S) return;
    const d = [...t.points.rawVal];
    if (d.splice(v[0].index, 1), t.points.val = d, !t.polylines) return;
    const s = t.polylines.rawVal.map((a) => a.filter((u) => u !== v[0].index)).map((a) => a.map((u) => u > v[0].index ? u - 1 : u)).filter((a) => a.length);
    s.push([]), t.polylines.val = s;
  });
}
function xe(t, e, l) {
  const r = Math.round(14.999999999999998), c = { position: t.position.clone(), quaternion: t.quaternion.clone() }, i = setInterval(g, 1e3 / 30);
  let f = 0;
  function g() {
    f++;
    const M = f / r;
    t.position.lerpVectors(c.position, e.position, M), t.quaternion.slerpQuaternions(c.quaternion, e.quaternion, M), l && l(), f == r && clearInterval(i);
  }
}
class Rt {
  constructor(e, l = 32) {
    this.isLut = true, this.lut = [], this.map = [], this.n = 0, this.minV = 0, this.maxV = 1, this.setColorMap(e, l);
  }
  set(e) {
    return e.isLut === true && this.copy(e), this;
  }
  setMin(e) {
    return this.minV = e, this;
  }
  setMax(e) {
    return this.maxV = e, this;
  }
  setColorMap(e, l = 32) {
    this.map = Mt[e] || Mt.rainbow, this.n = l;
    const o = 1 / this.n, n = new G(), r = new G();
    this.lut.length = 0, this.lut.push(new G(this.map[0][1]));
    for (let c = 1; c < l; c++) {
      const i = c * o;
      for (let f = 0; f < this.map.length - 1; f++) if (i > this.map[f][0] && i <= this.map[f + 1][0]) {
        const g = this.map[f][0], M = this.map[f + 1][0];
        n.setHex(this.map[f][1], rt), r.setHex(this.map[f + 1][1], rt);
        const b = new G().lerpColors(n, r, (i - g) / (M - g));
        this.lut.push(b);
      }
    }
    return this.lut.push(new G(this.map[this.map.length - 1][1])), this;
  }
  copy(e) {
    return this.lut = e.lut, this.map = e.map, this.n = e.n, this.minV = e.minV, this.maxV = e.maxV, this;
  }
  getColor(e) {
    e = Ht.clamp(e, this.minV, this.maxV), e = (e - this.minV) / (this.maxV - this.minV);
    const l = Math.round(e * this.n);
    return this.lut[l];
  }
  addColorMap(e, l) {
    return Mt[e] = l, this;
  }
  createCanvas() {
    const e = document.createElement("canvas");
    return e.width = 1, e.height = this.n, this.updateCanvas(e), e;
  }
  updateCanvas(e) {
    const l = e.getContext("2d", { alpha: false }), o = l.getImageData(0, 0, 1, this.n), n = o.data;
    let r = 0;
    const c = 1 / this.n, i = new G(), f = new G(), g = new G();
    for (let M = 1; M >= 0; M -= c) for (let b = this.map.length - 1; b >= 0; b--) if (M < this.map[b][0] && M >= this.map[b - 1][0]) {
      const p = this.map[b - 1][0], V = this.map[b][0];
      i.setHex(this.map[b - 1][1], rt), f.setHex(this.map[b][1], rt), g.lerpColors(i, f, (M - p) / (V - p)), n[r * 4] = Math.round(g.r * 255), n[r * 4 + 1] = Math.round(g.g * 255), n[r * 4 + 2] = Math.round(g.b * 255), n[r * 4 + 3] = 255, r += 1;
    }
    return l.putImageData(o, 0, 0), e;
  }
}
const Mt = { rainbow: [[0, 255], [0.2, 65535], [0.5, 65280], [0.8, 16776960], [1, 16711680]], cooltowarm: [[0, 3952322], [0.2, 10206463], [0.5, 14474460], [0.8, 16163717], [1, 11797542]], blackbody: [[0, 0], [0.2, 7864320], [0.5, 15086080], [0.8, 16776960], [1, 16777215]], grayscale: [[0, 0], [0.2, 4210752], [0.5, 8355712], [0.8, 12566463], [1, 16777215]] };
function ve(t, e, l) {
  const o = new Rt(), n = new G(), r = new D(new Y(), new Q({ side: O, vertexColors: true }));
  return o.setColorMap("rainbow"), r.renderOrder = -1, r.frustumCulled = false, C.derive(() => {
    r.geometry.setAttribute("position", new K(t.val.flat(), 3));
    const c = [];
    for (const i of e.val) i.length === 3 ? c.push(i[0], i[1], i[2]) : i.length === 4 && (c.push(i[0], i[1], i[2]), c.push(i[0], i[2], i[3]));
    r.geometry.setIndex(new _t(c, 1)), r.geometry.setAttribute("color", new K(t.val.map(() => [0, 0, 0]).flat(), 3)), o.setMax(Math.max(...l.val)), o.setMin(Math.min(...l.val));
    for (let i = 0; i < l.val.length; i++) {
      const f = o.getColor(l.val[i]) ?? new G(0, 0, 0);
      n.copy(f).convertSRGBToLinear(), n.multiplyScalar(0.6), r.geometry.attributes.color.setXYZ(i, n.r, n.g, n.b);
    }
  }), r;
}
function ye(t, e, l, o) {
  const n = ve(l, t.elements, o);
  return C.derive(() => {
    n.visible = e.shellResults.val != "none";
  }), n;
}
const Me = 6, gt = 10, ge = 0.012;
function be(t) {
  return t.startsWith("contour:") ? t.slice(8) : null;
}
function Fe(t, e, l, o) {
  if (!l && !o) return null;
  if (["normals", "shearsY", "shearsZ", "torsions", "bendingsY", "bendingsZ"].includes(t) && l) {
    const r = l[t];
    if (r && r.has(e)) return r.get(e);
  }
  return null;
}
function Ce(t, e, l, o) {
  const n = new U(), r = new Rt();
  r.setColorMap("rainbow");
  const c = new G(), i = C.state([]);
  return C.derive(() => {
    var _a, _b, _c;
    e.deformedShape.val;
    const f = l.val, g = ((_a = t.elements) == null ? void 0 : _a.val) ?? [], M = be(e.frameResults.val);
    if (n.children.forEach((w) => {
      w.geometry && w.geometry.dispose(), w.material && w.material.dispose();
    }), n.clear(), !M || g.length === 0 || f.length === 0) {
      i.val = [];
      return;
    }
    const b = (_b = t.analyzeOutputs) == null ? void 0 : _b.val, p = (_c = t.deformOutputs) == null ? void 0 : _c.val, V = [], m = [];
    for (let w = 0; w < g.length; w++) {
      if (g[w].length !== 2) continue;
      const A = Fe(M, w, b, p);
      A && (V.push(A[0], A[1]), m.push({ idx: w, vals: A }));
    }
    if (V.length === 0) {
      i.val = [];
      return;
    }
    const P = Math.min(...V), X = Math.max(...V);
    r.setMin(P), r.setMax(X), i.val = V;
    const L = [1 / 0, 1 / 0, 1 / 0], Z = [-1 / 0, -1 / 0, -1 / 0];
    for (const w of f) for (let F = 0; F < 3; F++) L[F] = Math.min(L[F], w[F]), Z[F] = Math.max(Z[F], w[F]);
    const S = Math.max(Z[0] - L[0], Z[1] - L[1], Z[2] - L[2], 1) * ge, v = [], y = [], d = [];
    let s = 0;
    for (const { idx: w, vals: F } of m) {
      const A = g[w], E = f[A[0]], x = f[A[1]];
      if (!E || !x) continue;
      const z = new B(x[0] - E[0], x[1] - E[1], x[2] - E[2]), R = z.length();
      if (R < 1e-10) continue;
      z.normalize();
      const k = Math.abs(z.y) < 0.99 ? new B(0, 1, 0) : new B(1, 0, 0), I = new B().crossVectors(z, k).normalize(), W = new B().crossVectors(z, I).normalize(), H = gt + 1, _ = Me;
      for (let N = 0; N < H; N++) {
        const J = N / gt, st = E[0] + z.x * R * J, it = E[1] + z.y * R * J, ft = E[2] + z.z * R * J, mt = F[0] + (F[1] - F[0]) * J, at = r.getColor(mt) ?? new G(0, 0, 0);
        c.copy(at).convertSRGBToLinear();
        for (let wt = 0; wt < _; wt++) {
          const Vt = wt / _ * Math.PI * 2, xt = Math.cos(Vt), vt = Math.sin(Vt);
          v.push(st + (I.x * xt + W.x * vt) * S, it + (I.y * xt + W.y * vt) * S, ft + (I.z * xt + W.z * vt) * S), y.push(c.r, c.g, c.b);
        }
      }
      for (let N = 0; N < gt; N++) for (let J = 0; J < _; J++) {
        const st = (J + 1) % _, it = s + N * _ + J, ft = s + N * _ + st, mt = s + (N + 1) * _ + J, at = s + (N + 1) * _ + st;
        d.push(it, ft, at), d.push(it, at, mt);
      }
      s += H * _;
    }
    if (v.length === 0) return;
    const a = new Y();
    a.setAttribute("position", new K(v, 3)), a.setAttribute("color", new K(y, 3)), a.setIndex(d), a.computeVertexNormals();
    const u = new Q({ vertexColors: true, side: O }), h = new D(a, u);
    h.frustumCulled = false, n.add(h);
  }), n.__colorMapValues = i, n;
}
function Tt(t, e = 8) {
  const l = document.createElement("div");
  l.id = "legend";
  const o = Array.from({ length: e + 1 }, (i, f) => f / e).reverse();
  let n, r;
  o.forEach((i, f) => {
    n = document.createElement("div"), n.id = `marker-${f}`, n.className = "marker", n.style.marginTop = f == 0 ? "0px" : `calc(${50 / e}vh - 1px)`, r = document.createElement("p"), r.id = `marker-text-${f}`, n.append(r), l.append(n);
  });
  const c = [];
  return l.querySelectorAll("p").forEach((i) => c.push(i)), setTimeout(() => {
    C.derive(() => {
      o.forEach((i, f) => {
        const g = c[f];
        g && (g.innerText = Ve(t.val, i).toString());
      });
    });
  }), l;
}
function Ve(t, e) {
  const l = Math.max(...t) - Math.min(...t);
  return (Math.min(...t) + e * l).toPrecision(3);
}
function Ie({ mesh: t, settingsObj: e, drawingObj: l, objects3D: o, solids: n }) {
  Dt.DEFAULT_UP = new B(0, 0, 1);
  const r = document.createElement("div"), c = new $t(), i = new Gt(45, 1, 0.1, 2 * 1e6), f = new qt(-10, 10, 10, -10, -1e3, 2e6);
  let g = i;
  const M = new Nt({ antialias: true });
  M.localClippingEnabled = true;
  const b = new Kt(i, M.domElement), p = Ot(e), V = C.derive(() => p.displayScale.val === 0 ? 1 : p.displayScale.val > 0 ? p.displayScale.val : -1 / p.displayScale.val), m = Ae(t, p);
  let P = zt(p.gridSize.rawVal);
  r.appendChild(Jt(p, t, n)), r.setAttribute("id", "viewer"), r.appendChild(M.domElement), M.setPixelRatio(window.devicePixelRatio);
  const X = j();
  M.setClearColor(X.background, 1);
  const L = p.gridSize.rawVal, Z = L * 0.5 + L * 0.5 / Math.tan(45 * 0.5);
  i.position.set(0.5 * L, 0.8 * -Z, 0.5 * L), b.target.set(0.5 * L, 0.5 * L, 0), b.minDistance = 1, b.maxDistance = Z * 2.5, b.zoomSpeed = 10, b.update(), c.add(P, re(p.gridSize.rawVal, p.flipAxes.rawVal)), new ResizeObserver((d) => {
    var _a, _b;
    for (const s of d) {
      const a = (_a = s.target) == null ? void 0 : _a.clientWidth, u = (_b = s.target) == null ? void 0 : _b.clientHeight;
      if (a === 0 || u === 0) continue;
      i.aspect = a / u, i.updateProjectionMatrix();
      const h = a / u, w = f.top;
      f.left = -w * h, f.right = w * h, f.updateProjectionMatrix(), M.setSize(a, u), S();
    }
  }).observe(r), b.addEventListener("change", S), C.derive(() => {
    var _a, _b, _c, _d, _e, _f;
    (_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val, (_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val, (_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val, (_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val, (_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val, (_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val, p.displayScale.val, p.nodes.val, p.elements.val, p.elemColumns.val, p.elemBeams.val, p.nodesIndexes.val, p.elementsIndexes.val, p.orientations.val, p.sections.val, p.secColumns.val, p.secBeams.val, p.secFloor.val, p.supports.val, p.loads.val, p.deformedShape.val, p.nodeResults.val, p.frameResults.val, p.shellResults.val, setTimeout(S);
  });
  function S() {
    M.render(c, g);
  }
  function v(d) {
    g = d, b.object = d, b.update(), S();
  }
  if (t) {
    c.add(jt(p, m, V), te(t, p, m), se(p, m, V), ie(t, p, m, V), ne(t, p, m, V), oe(t, p, m, V), ce(t, p, m, V), he(t, p, m, V), me(t, p, m, V), ue(t, p, m, V));
    const d = Se(t, p), s = ye(t, p, m, d), a = Tt(d);
    c.add(s), r.appendChild(a);
    const u = Ce(t, p, m);
    c.add(u);
    const h = u.__colorMapValues, w = Tt(h);
    w.id = "frame-legend", r.appendChild(w), C.derive(() => {
      const F = p.shellResults.val != "none", A = p.frameResults.val.startsWith("contour:");
      a.hidden = !F, s.visible = F, w.hidden = !A;
    });
  }
  if (n) {
    const d = new Ut(16777215, 0.5);
    c.add(d);
    const s = new St(16777215, 0.5);
    s.position.set(30, 25, -10), s.shadow.mapSize.width = 1024, s.shadow.mapSize.height = 1024, c.add(s);
    const a = 10;
    s.shadow.camera.left = -10, s.shadow.camera.right = a, s.shadow.camera.top = a, s.shadow.camera.bottom = -10, s.shadow.camera.far = 1e3;
    const u = new St(16777215, 0.5);
    u.color.setHSL(11, 43, 96), u.position.set(-10, 0, 30), c.add(u), C.derive(() => {
      (n == null ? void 0 : n.val.length) && (c.remove(...n.oldVal), c.add(...n.rawVal), S());
    }), C.derive(() => {
      n.rawVal.forEach((h) => h.visible = p.solids.val), S();
    });
  }
  o && C.derive(() => {
    (o == null ? void 0 : o.val.length) && (c.remove(...o.oldVal), c.add(...o.rawVal), S());
  }), l && we({ drawingObj: l, gridObj: P, scene: c, camera: i, controls: b, gridSize: L, derivedDisplayScale: V, rendererElm: M.domElement, viewerRender: S }), pt((d, s) => {
    M.setClearColor(s.background, 1), c.remove(P), P.geometry.dispose(), P.material.dispose(), P = zt(p.gridSize.rawVal), c.add(P), r.style.setProperty("--awatif-legend-color", s.legendMarker), S();
  });
  const y = { scene: c, perspCamera: i, orthoCamera: f, get camera() {
    return g;
  }, controls: b, renderer: M, rendererElm: M.domElement, render: S, setActiveCamera: v, settings: p };
  return r.__ctx = y, r;
}
function Ae(t, e) {
  return C.derive(() => {
    var _a, _b, _c, _d;
    if (!e.deformedShape.val) return ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) ?? [];
    const l = ((_b = t == null ? void 0 : t.nodes) == null ? void 0 : _b.val) ?? [], o = (_d = (_c = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.deformations;
    if (!o || o.size === 0) return l;
    let n = 0;
    o.forEach((m) => {
      const P = Math.sqrt(m[0] * m[0] + m[1] * m[1] + m[2] * m[2]);
      P > n && (n = P);
    });
    let r = 1e20, c = -1e20, i = 1e20, f = -1e20, g = 1e20, M = -1e20;
    for (const m of l) m[0] < r && (r = m[0]), m[0] > c && (c = m[0]), m[1] < i && (i = m[1]), m[1] > f && (f = m[1]), m[2] < g && (g = m[2]), m[2] > M && (M = m[2]);
    const b = Math.max(c - r, f - i, M - g, 1), p = e.displayScale.val;
    let V;
    if (n < 1e-12) V = 1;
    else {
      const m = b * 0.05 / n;
      V = p === 1 ? m : p === 0 ? 1 : p > 0 ? m * p : m * (-1 / p);
    }
    return l.map((m, P) => {
      var _a2;
      const X = ((_a2 = o.get(P)) == null ? void 0 : _a2.slice(0, 3)) ?? [0, 0, 0];
      return m.map((L, Z) => L + X[Z] * V);
    });
  });
}
function Se(t, e) {
  const l = C.state([]);
  let o;
  return ((n) => {
    n.bendingXX = "bendingXX", n.bendingYY = "bendingYY", n.bendingXY = "bendingXY", n.displacementX = "displacementX", n.displacementY = "displacementY", n.displacementZ = "displacementZ";
  })(o || (o = {})), C.derive(() => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), i = (M, b) => {
      M == null ? void 0 : M.forEach((p, V) => {
        const m = t.elements.val[V];
        if (m) for (let P = 0; P < m.length; P++) b.set(m[P], [p[P] ?? p[0]]);
      });
    };
    i((_b = (_a = t.analyzeOutputs) == null ? void 0 : _a.val) == null ? void 0 : _b.bendingXX, n), i((_d = (_c = t.analyzeOutputs) == null ? void 0 : _c.val) == null ? void 0 : _d.bendingYY, r), i((_f = (_e = t.analyzeOutputs) == null ? void 0 : _e.val) == null ? void 0 : _f.bendingXY, c);
    const f = { bendingXX: [n, 0], bendingYY: [r, 0], bendingXY: [c, 0], displacementX: [(_h = (_g = t.deformOutputs) == null ? void 0 : _g.val) == null ? void 0 : _h.deformations, 0], displacementY: [(_j = (_i = t.deformOutputs) == null ? void 0 : _i.val) == null ? void 0 : _j.deformations, 1], displacementZ: [(_l = (_k = t.deformOutputs) == null ? void 0 : _k.val) == null ? void 0 : _l.deformations, 2] }, g = [];
    t.nodes.val.forEach((M, b) => {
      const p = f[e.shellResults.val];
      if (!p || !p[0] || typeof p[0].has != "function") return;
      if (!p[0].has(b)) {
        g.push(0);
        return;
      }
      const V = p[0].get(b);
      g.push(V ? V[p[1]] ?? 0 : 0);
    }), l.val = g;
  }), l;
}
export {
  ve as a,
  Tt as b,
  Ie as g
};
