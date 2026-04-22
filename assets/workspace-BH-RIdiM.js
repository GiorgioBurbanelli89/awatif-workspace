import "./modulepreload-polyfill-B5Qt9EMX.js";
import { v as P, P as G } from "./theme-CzzIlc4y.js";
import { g as J } from "./getViewer-DXzw4WPM.js";
import { g as Q } from "./styles-Z6stOm1O.js";
import { c as W } from "./renderModalTable-29W4CuGz.js";
import { e as R, a as tt, __tla as __tla_0 } from "./exampleRegistry-FmlUzIeF.js";
import { d as V, f as q } from "./units-CVPhvG5E.js";
import "./Text-CBH-tcJP.js";
import "./analyze-ClLKGn9k.js";
import "./pureFunctionsAny.generated-JAcEVsJ7.js";
import { __tla as __tla_1 } from "./didacticCpp-Bnj9OwqQ.js";
import { __tla as __tla_2 } from "./plateThin-C30Q-WjQ.js";
import { __tla as __tla_3 } from "./plateThick-DrHD17l3.js";
import { __tla as __tla_4 } from "./membrana-Darbd52d.js";
import { __tla as __tla_5 } from "./shellThin-ORSIx719.js";
import { __tla as __tla_6 } from "./shellThick-BSU3qF0E.js";
import { __tla as __tla_7 } from "./edificioAporticado-DG3xVeOI.js";
import { __tla as __tla_8 } from "./trussGen-CYTV_Ioz.js";
import { __tla as __tla_9 } from "./barraAxial-Bnm-0MrG.js";
import { __tla as __tla_10 } from "./portico2D-kxfBcLlJ.js";
import { __tla as __tla_11 } from "./tower3D-tLRX3VEB.js";
import { __tla as __tla_12 } from "./galpon-BaNuuhBd.js";
import { __tla as __tla_13 } from "./edifAcero-Dhwvq9Mc.js";
import { __tla as __tla_14 } from "./mezanine-BmEOOT1G.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_4;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_6;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_7;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_8;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_9;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_10;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_11;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_12;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_13;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_14;
    } catch {
    }
  })()
]).then(async () => {
  const F = P.state([]), X = P.state([]), L = P.state({}), D = P.state({}), U = P.state({}), Y = P.state({}), $ = P.state([]), c = {
    nodes: F,
    elements: X,
    nodeInputs: L,
    elementInputs: D,
    deformOutputs: U,
    analyzeOutputs: Y,
    objects3D: $
  };
  let l = null, g = {}, C = null, S = null, _ = null, et = [];
  const E = W();
  E.div.style.display = "none";
  function H() {
    c.objects3D.val = [], c.nodes.val = [], c.elements.val = [], c.nodeInputs.val = {}, c.elementInputs.val = {}, c.deformOutputs.val = {}, c.analyzeOutputs.val = {};
  }
  function K(e) {
    if (l = e, g = Object.fromEntries(Object.entries(e.params).map(([o, i]) => [
      o,
      i.default
    ])), tt.v++, H(), e.build(g, c, E), e.defaultShellResult) {
      const o = z.__settings;
      (o == null ? void 0 : o.shellResults) && (o.shellResults.val = e.defaultShellResult), (o == null ? void 0 : o.loads) && (o.loads.val = true), (o == null ? void 0 : o.supports) && (o.supports.val = true);
    }
    nt(e.availableShellResults), N(), Z(), it();
  }
  function N() {
    var _a;
    const e = z.__settings;
    if (!(e == null ? void 0 : e.deformScale)) return;
    const o = c.nodes.rawVal, i = (_a = c.deformOutputs.rawVal) == null ? void 0 : _a.deformations;
    if (!(o == null ? void 0 : o.length) || !i) {
      e.deformScale.val = 1;
      return;
    }
    let f = 1 / 0, p = 1 / 0, d = 1 / 0, m = -1 / 0, u = -1 / 0, v = -1 / 0;
    for (const a of o) a[0] < f && (f = a[0]), a[0] > m && (m = a[0]), a[1] < p && (p = a[1]), a[1] > u && (u = a[1]), a[2] < d && (d = a[2]), a[2] > v && (v = a[2]);
    const x = Math.sqrt((m - f) ** 2 + (u - p) ** 2 + (v - d) ** 2) || 1;
    let r = 0;
    if (i.forEach((a) => {
      const h = Math.sqrt((a[0] || 0) ** 2 + (a[1] || 0) ** 2 + (a[2] || 0) ** 2);
      h > r && (r = h);
    }), r < 1e-30) {
      e.deformScale.val = 1;
      return;
    }
    e.deformScale.val = Math.min(5e4, Math.max(1, 0.25 * x / r)), e.displayScale && (e.displayScale.val = 1);
  }
  function Z() {
    const e = z.__ctx, o = c.nodes.rawVal;
    if (!e || !(o == null ? void 0 : o.length)) return;
    const { camera: i, controls: f, render: p } = e;
    let d = 1 / 0, m = 1 / 0, u = 1 / 0, v = -1 / 0, x = -1 / 0, r = -1 / 0;
    for (const b of o) b[0] < d && (d = b[0]), b[0] > v && (v = b[0]), b[1] < m && (m = b[1]), b[1] > x && (x = b[1]), b[2] < u && (u = b[2]), b[2] > r && (r = b[2]);
    const a = (d + v) / 2, h = (m + x) / 2, y = (u + r) / 2, t = v - d, n = x - m, M = r - u, I = Math.max(Math.sqrt(t * t + n * n + M * M), 1), k = 2.2 * I;
    f.target.set(a, h, y);
    const s = k / Math.sqrt(3);
    i.position.set(a + s, h - s, y + s), i.up.set(0, 0, 1), i.near = I * 1e-3, i.far = I * 50, i.updateProjectionMatrix(), i.lookAt(a, h, y), f.update(), p == null ? void 0 : p();
    const w = z.__settings;
    (w == null ? void 0 : w.gridSize) && (w.gridSize.val = Math.max(Math.ceil(Math.max(t, n) * 1.2), 2));
  }
  function nt(e) {
    const o = z.querySelectorAll("select"), i = Array.from(o).find((p) => Array.from(p.options).some((d) => d.value === "bendingXX"));
    if (!i) return;
    for (const p of Array.from(i.options)) {
      const d = p.value === "none" || !e || e.includes(p.value);
      p.hidden = !d, p.disabled = !d;
    }
    const f = z.__settings;
    (f == null ? void 0 : f.shellResults) && (i.value = f.shellResults.val, i.dispatchEvent(new Event("change", {
      bubbles: true
    })));
  }
  function T() {
    if (l) {
      if (H(), l.build(g, c, E), N(), Z(), l.computedLabels && S) {
        const e = l.computedLabels(g, c);
        for (const o of Object.keys(S)) o in e && (S[o] = e[o]);
      }
      if (l.inlineComputed && _) for (const e of l.inlineComputed) {
        const o = `__inline_${e.after}_${e.label}`;
        _[o] = e.compute(g, c);
      }
      C == null ? void 0 : C.refresh();
    }
  }
  const A = document.createElement("div");
  A.style.cssText = "position:fixed;top:96px;right:16px;width:min(320px,calc(100vw - 32px));max-width:90vw;z-index:100;max-height:calc(100vh - 112px);overflow-y:auto;font-size:12px";
  document.body.appendChild(A);
  function j(e) {
    const o = z.__ctx;
    if (!o) return;
    const { camera: i, controls: f, render: p } = o, d = c.nodes.rawVal ?? [];
    let m = 1 / 0, u = 1 / 0, v = 1 / 0, x = -1 / 0, r = -1 / 0, a = -1 / 0;
    for (const s of d) s[0] < m && (m = s[0]), s[0] > x && (x = s[0]), s[1] < u && (u = s[1]), s[1] > r && (r = s[1]), s[2] < v && (v = s[2]), s[2] > a && (a = s[2]);
    const h = (m + x) / 2, y = (u + r) / 2, t = (v + a) / 2, n = x - m || 1, M = r - u || 1, I = a - v || 1, k = Math.sqrt(n * n + M * M + I * I) || 5;
    if (f.target.set(h, y, t), e === "iso") {
      i.fov = 45;
      const s = k * 1.2;
      i.position.set(h + s * 0.6, y - s * 0.6, t + s * 0.6);
    } else {
      i.fov = 5;
      const w = k / 2 * 25;
      switch (e) {
        case "plan":
          i.position.set(h, y, t + w);
          break;
        case "elevX":
          i.position.set(h + w, y, t);
          break;
        case "elevY":
          i.position.set(h, y + w, t);
          break;
      }
    }
    i.up.set(0, 0, 1), i.updateProjectionMatrix(), i.lookAt(h, y, t), f.update(), p == null ? void 0 : p();
  }
  function it() {
    if (C && (C.dispose(), C = null), A.innerHTML = "", !l) return;
    const e = new G({
      container: A,
      title: l.name
    }), o = {
      id: l.id
    }, i = Object.fromEntries(R.map((t) => [
      `${t.category} \xB7 ${t.name}`,
      t.id
    ]));
    e.addBinding(o, "id", {
      label: "Ejemplo",
      options: i
    }).on("change", (t) => {
      const n = R.find((M) => M.id === t.value);
      n && K(n);
    });
    const f = e.addFolder({
      title: "Vista",
      expanded: false
    });
    f.addButton({
      title: "\u{1F3D7} Isom\xE9trica"
    }).on("click", () => j("iso")), f.addButton({
      title: "\u2B07 Planta (X-Y)"
    }).on("click", () => j("plan")), f.addButton({
      title: "\u2192 Elevaci\xF3n X (frente)"
    }).on("click", () => j("elevX")), f.addButton({
      title: "\u2191 Elevaci\xF3n Y (lado)"
    }).on("click", () => j("elevY"));
    const p = e.addFolder({
      title: "Unidades",
      expanded: false
    }), d = {
      force: q.val,
      disp: V.val
    };
    p.addBinding(d, "force", {
      label: "Fuerza",
      options: {
        kN: "kN",
        tonf: "tonf",
        kip: "kip"
      }
    }).on("change", (t) => {
      q.val = t.value, T();
    }), p.addBinding(d, "disp", {
      label: "Desplazamiento",
      options: {
        mm: "mm",
        cm: "cm",
        "\xB5m (poco prob.)": "\xB5m"
      }
    }).on("change", (t) => {
      V.val = t.value, T();
    });
    const m = "Par\xE1metros", u = /* @__PURE__ */ new Map(), v = (t) => t === m || /\bmodo\b/i.test(t) || /activar/i.test(t) || /combinaci/i.test(t), x = (t) => (u.has(t) || u.set(t, e.addFolder({
      title: t,
      expanded: v(t)
    })), u.get(t));
    let r = null;
    const a = () => {
      r !== null && clearTimeout(r), r = window.setTimeout(() => {
        r = null, T();
      }, 120);
    }, h = {}, y = /* @__PURE__ */ new Map();
    if (_ = {}, l.inlineComputed) for (const t of l.inlineComputed) {
      const n = `__inline_${t.after}_${t.label}`;
      _[n] = t.compute(g, c), y.has(t.after) || y.set(t.after, []), y.get(t.after).push({
        label: t.label,
        key: n,
        compute: t.compute
      });
    }
    for (const [t, n] of Object.entries(l.params)) {
      const M = n.folder ?? m, I = x(M);
      if (n.boolean) {
        h[t] = g[t] >= 0.5;
        const w = I.addBinding(h, t, {
          label: n.label ?? t
        });
        w.on("change", (b) => {
          g[t] = b.value ? 1 : 0, (l == null ? void 0 : l.onParamChange) && (l.onParamChange(t, g), e.refresh()), applyHiddenBindings(), a();
        }), n.hiddenIf && et.push({
          binding: w,
          hiddenIf: n.hiddenIf
        });
        continue;
      }
      const k = {
        label: n.label ?? t
      };
      n.options !== void 0 ? k.options = n.options : (n.min !== void 0 && (k.min = n.min), n.max !== void 0 && (k.max = n.max), n.step !== void 0 && (k.step = n.step)), I.addBinding(g, t, k).on("change", () => {
        (l == null ? void 0 : l.onParamChange) && (l.onParamChange(t, g), e.refresh()), a();
      });
      const s = y.get(t);
      if (s && _) for (const w of s) I.addBinding(_, w.key, {
        readonly: true,
        label: w.label,
        view: "text"
      });
    }
    if (l.computedLabels) {
      const t = e.addFolder({
        title: "\u{1F4CA} Calculados",
        expanded: true
      }), n = l.computedLabels(g, c);
      S = {
        ...n
      }, console.log("[Calculados]", S);
      for (const M of Object.keys(n)) t.addBinding(S, M, {
        readonly: true,
        view: "text",
        interval: 0
      });
    } else S = null;
    l.hasModal && e.addButton({
      title: "\u26A1 An\xE1lisis modal"
    }).on("click", () => {
      E.div.style.display = "block", l.runModal && l.runModal(g, c, E);
    }), C = e;
  }
  const at = {
    deformedShape: true,
    displayScale: -1,
    shellResults: "pressure",
    gridSize: 10,
    showCotas: true
  }, z = J({
    mesh: {
      nodes: F,
      elements: X,
      nodeInputs: L,
      elementInputs: D,
      deformOutputs: U,
      analyzeOutputs: Y
    },
    objects3D: $,
    settingsObj: at
  });
  document.body.append(z, Q({
    sourceCode: "https://github.com/GiorgioBurbanelli89/hekatan-struct",
    author: "https://www.linkedin.com/in/jorge-burbano-213741138/"
  }));
  document.body.appendChild(E.div);
  let O = new URLSearchParams(window.location.search).get("t");
  if (!O || O === "zapata-aislada") {
    O = "zapata-aislada-validacion";
    try {
      const e = new URL(window.location.href);
      e.searchParams.set("t", O), window.history.replaceState(null, "", e.toString());
    } catch {
    }
  }
  const B = R.find((e) => e.id === O) || R.find((e) => e.id === "zapata-aislada-validacion") || R[0];
  B && (K(B), (B.id === "zapata-aislada" || B.id === "zapata-aislada-validacion" || B.id === "zapata-viga-amarre") && setTimeout(() => j("iso"), 200));
});
