import { a as Ye, V as M, L as je, B as Xe } from "./Text-CBH-tcJP.js";
import { v as ft } from "./theme-CzzIlc4y.js";
import { a as ut } from "./analyze-ClLKGn9k.js";
import { m as Nt, d as pt, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { p as Pt, __tla as __tla_1 } from "./plateThickValidacion-D_mgYE7c.js";
import { p as yt, __tla as __tla_2 } from "./plateThin-C30Q-WjQ.js";
import { p as It, __tla as __tla_3 } from "./plateThick-DrHD17l3.js";
import { m as Et, __tla as __tla_4 } from "./membrana-Darbd52d.js";
import { s as Dt, __tla as __tla_5 } from "./shellThin-ORSIx719.js";
import { s as qt, __tla as __tla_6 } from "./shellThick-BSU3qF0E.js";
import { e as Ft, __tla as __tla_7 } from "./edificioAporticado-DG3xVeOI.js";
import { t as Ct, __tla as __tla_8 } from "./trussGen-CYTV_Ioz.js";
import { b as $t, __tla as __tla_9 } from "./barraAxial-Bnm-0MrG.js";
import { p as At, __tla as __tla_10 } from "./portico2D-kxfBcLlJ.js";
import { t as Tt, __tla as __tla_11 } from "./tower3D-tLRX3VEB.js";
import { g as Bt, __tla as __tla_12 } from "./galpon-BaNuuhBd.js";
import { e as Ot, __tla as __tla_13 } from "./edifAcero-Dhwvq9Mc.js";
import { m as Rt, __tla as __tla_14 } from "./mezanine-BmEOOT1G.js";
let Ze, Jt, no, wo, Xt;
let __tla = Promise.all([
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
  let Qe, et, ht, st, Gt, xt, Mt, Ht, Vt, jt, Be, Oe, Zt, bt, Fe, gt, Yt, kt, St, Ut, Kt, Wt, Re, Ge, Qt, vt, Te, eo, wt, Lt, to, oo, so;
  Qe = 25e6;
  et = 0.2;
  ht = Qe / (2 * (1 + et));
  st = 24;
  Gt = 0.2;
  xt = 0.035;
  Mt = 8;
  Ht = 0.04;
  Vt = new Ye({
    color: 16711731,
    linewidth: 2
  });
  jt = new Ye({
    color: 52224,
    linewidth: 2
  });
  Xt = {
    id: "zapata-viga-amarre",
    name: "Zapata + Viga de Amarre + Pedestal",
    category: "Cimentaciones",
    defaultShellResult: "pressure",
    availableShellResults: [
      "pressure",
      "bendingXX",
      "bendingYY",
      "displacementZ",
      "vonMises"
    ],
    hasModal: true,
    params: {
      Lz1: {
        default: 2,
        min: 1,
        max: 4,
        step: 0.1,
        label: "Lz1 (m)"
      },
      Bz1: {
        default: 2,
        min: 1,
        max: 4,
        step: 0.1,
        label: "Bz1 (m)"
      },
      Lv: {
        default: 3,
        min: 1,
        max: 6,
        step: 0.1,
        label: "Lv (m)"
      },
      Bv: {
        default: 0.25,
        min: 0.2,
        max: 0.8,
        step: 0.05,
        label: "Bv (m)"
      },
      Hv: {
        default: 0.3,
        min: 0.2,
        max: 0.8,
        step: 0.05,
        label: "Hv canto (m)"
      },
      Lz2: {
        default: 2.5,
        min: 1,
        max: 4,
        step: 0.1,
        label: "Lz2 (m)"
      },
      Bz2: {
        default: 2,
        min: 1,
        max: 4,
        step: 0.1,
        label: "Bz2 (m)"
      },
      tz: {
        default: 0.5,
        min: 0.2,
        max: 1,
        step: 0.05,
        label: "tz (m)"
      },
      bc: {
        default: 0.4,
        min: 0.2,
        max: 0.8,
        step: 0.05,
        label: "bc columna (m)"
      },
      Hp: {
        default: 0.8,
        min: 0.3,
        max: 2,
        step: 0.1,
        label: "Hp pedestal (m)"
      },
      vigaLevel: {
        default: 0,
        min: 0,
        max: 1,
        step: 1,
        label: "Viga: 0=baja 1=alta"
      },
      ks: {
        default: 2e3,
        min: 500,
        max: 3e4,
        step: 500,
        label: "ks Winkler (kN/m\xB3)"
      },
      P1: {
        default: 800,
        min: 100,
        max: 2e3,
        step: 10,
        label: "P1 axial (kN)"
      },
      M1x: {
        default: 80,
        min: -500,
        max: 500,
        step: 10,
        label: "M1x (kN\xB7m)"
      },
      M1y: {
        default: 60,
        min: -500,
        max: 500,
        step: 10,
        label: "M1y (kN\xB7m)"
      },
      P2: {
        default: 1200,
        min: 100,
        max: 2500,
        step: 10,
        label: "P2 axial (kN)"
      },
      M2x: {
        default: 120,
        min: -500,
        max: 500,
        step: 10,
        label: "M2x (kN\xB7m)"
      },
      M2y: {
        default: 90,
        min: -500,
        max: 500,
        step: 10,
        label: "M2y (kN\xB7m)"
      },
      nSubX: {
        default: 4,
        min: 2,
        max: 8,
        step: 1,
        label: "nx subdiv"
      },
      nSubY: {
        default: 4,
        min: 2,
        max: 8,
        step: 1,
        label: "ny subdiv"
      }
    },
    build(e, t) {
      var _a;
      const i = e.Lz1, m = e.Bz1, N = e.Lv, d = e.Bv, y = e.Hv, w = e.Lz2, q = e.Bz2, ne = e.tz, z = e.bc, W = e.Hp, Y = e.P1, be = e.P2, G = e.ks, F = e.M1x ?? 0, J = e.M1y ?? 0, U = e.M2x ?? 0, I = e.M2y ?? 0, h = Math.round(e.nSubX), E = Math.round(e.nSubY), Q = 0.2, ee = m / 2, te = i + N + w / 2, ae = q / 2, re = (ee + ae) / 2;
      function K(o, s, n, b) {
        const f = [
          o,
          ...n.filter((_) => _ > o && _ < s),
          s
        ].sort((_, u) => _ - u), Z = [];
        for (let _ = 0; _ < f.length - 1; _++) {
          const u = f[_], g = f[_ + 1], p = Math.max(1, Math.round((g - u) / ((s - o) / b)));
          for (let R = 0; R < p; R++) Z.push(u + (g - u) * R / p);
        }
        return Z.push(f[f.length - 1]), Z;
      }
      const H = K(0, i, [
        Q
      ], h), T = K(0, m, [
        ee,
        re
      ], E), Se = K(i + N, i + N + w, [
        te
      ], h), ge = K(0, q, [
        ae,
        re
      ], E), pe = [], B = [], ve = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), de = (o, s, n) => {
        const b = `${o.toFixed(4)},${s.toFixed(4)},${n.toFixed(4)}`;
        if (ze.has(b)) return ze.get(b);
        const f = pe.length;
        return pe.push([
          o,
          s,
          n
        ]), ze.set(b, f), f;
      }, $ = [];
      for (let o = 0; o < T.length; o++) {
        const s = [];
        for (let n = 0; n < H.length; n++) s.push(de(H[n], T[o], 0));
        $.push(s);
      }
      for (let o = 0; o < T.length - 1; o++) for (let s = 0; s < H.length - 1; s++) {
        const n = B.length;
        B.push([
          $[o][s],
          $[o][s + 1],
          $[o + 1][s + 1],
          $[o + 1][s]
        ]), we.set(n, ne), V.set(n, Qe), _e.set(n, et), me.set(n, st);
      }
      const ce = [];
      for (let o = 0; o < ge.length; o++) {
        const s = [];
        for (let n = 0; n < Se.length; n++) s.push(de(Se[n], ge[o], 0));
        ce.push(s);
      }
      for (let o = 0; o < ge.length - 1; o++) for (let s = 0; s < Se.length - 1; s++) {
        const n = B.length;
        B.push([
          ce[o][s],
          ce[o][s + 1],
          ce[o + 1][s + 1],
          ce[o + 1][s]
        ]), we.set(n, ne), V.set(n, Qe), _e.set(n, et), me.set(n, st);
      }
      const oe = Math.round(e.vigaLevel) === 0 ? ne : W, tt = de(Q, ee, 0), Pe = de(Q, ee, oe), ie = de(te, ae, 0), qe = de(te, ae, oe);
      for (const [o, s] of [
        [
          tt,
          Pe
        ],
        [
          ie,
          qe
        ]
      ]) {
        const n = B.length;
        B.push([
          o,
          s
        ]), V.set(n, Qe), _e.set(n, et), le.set(n, ht), C.set(n, z * z), Le.set(n, z ** 4 / 12), ye.set(n, z ** 4 / 12), Ee.set(n, 0.14 * z ** 4), me.set(n, st), Ne.set(n, {
          type: "rect",
          b: z,
          h: z
        });
      }
      const a = B.length;
      B.push([
        Pe,
        qe
      ]), V.set(a, Qe), _e.set(a, et), le.set(a, ht), C.set(a, d * y), Le.set(a, d * y ** 3 / 12), ye.set(a, y * d ** 3 / 12), Ee.set(a, 0.28 * d * y ** 3), me.set(a, st), Ne.set(a, {
        type: "rect",
        b: d,
        h: y
      }), S.set(Pe, [
        0,
        0,
        -Y,
        F,
        J,
        0
      ]), S.set(qe, [
        0,
        0,
        -be,
        U,
        I,
        0
      ]);
      const c = i / h, x = m / E, D = w / h, k = q / E, j = 0.5, P = [], se = [];
      for (let o = 0; o < T.length; o++) for (let s = 0; s < H.length; s++) {
        const n = c * x * (s === 0 || s === H.length - 1 ? 0.5 : 1) * (o === 0 || o === T.length - 1 ? 0.5 : 1), b = G * n, f = G * n * j;
        P.push({
          node: $[o][s],
          dof: 0,
          k: f
        }), P.push({
          node: $[o][s],
          dof: 1,
          k: f
        }), P.push({
          node: $[o][s],
          dof: 2,
          k: b
        }), se.push($[o][s]);
      }
      for (let o = 0; o < ge.length; o++) for (let s = 0; s < Se.length; s++) {
        const n = D * k * (s === 0 || s === Se.length - 1 ? 0.5 : 1) * (o === 0 || o === ge.length - 1 ? 0.5 : 1), b = G * n, f = G * n * j;
        P.push({
          node: ce[o][s],
          dof: 0,
          k: f
        }), P.push({
          node: ce[o][s],
          dof: 1,
          k: f
        }), P.push({
          node: ce[o][s],
          dof: 2,
          k: b
        }), se.push(ce[o][s]);
      }
      const A = G * c * x * 1e-4;
      P.push({
        node: $[0][0],
        dof: 3,
        k: A
      }), P.push({
        node: $[0][0],
        dof: 4,
        k: A
      }), P.push({
        node: $[0][0],
        dof: 5,
        k: A
      }), t.nodes.val = pe.map((o) => [
        o[0],
        o[1],
        o[2]
      ]), t.elements.val = B, t.nodeInputs.val = {
        supports: ve,
        loads: S
      }, t.elementInputs.val = {
        elasticities: V,
        poissonsRatios: _e,
        areas: C,
        momentsOfInertiaZ: Le,
        momentsOfInertiaY: ye,
        torsionalConstants: Ee,
        shearModuli: le,
        thicknesses: we,
        densities: me,
        sectionShapes: Ne
      };
      try {
        t.deformOutputs.val = pt(t.nodes.val, t.elements.val, t.nodeInputs.val, t.elementInputs.val, P);
        const o = ut(t.nodes.val, t.elements.val, t.elementInputs.val, t.deformOutputs.val), s = t.deformOutputs.rawVal.deformations, n = /* @__PURE__ */ new Map();
        t.elements.rawVal.forEach((b, f) => {
          if (b.length !== 4) return;
          const Z = [];
          for (const _ of b) {
            const u = s == null ? void 0 : s.get(_), g = u ? u[2] : 0;
            Z.push(-G * g);
          }
          n.set(f, Z);
        }), o.pressure = n, t.analyzeOutputs.val = o;
      } catch (o) {
        console.error("Solver error:", o);
      }
      const X = t.deformOutputs.rawVal.deformations;
      let O = 1e-9;
      for (const o of se) {
        const s = X == null ? void 0 : X.get(o);
        s && Number.isFinite(s[2]) && (O = Math.max(O, Math.abs(s[2])));
      }
      const fe = new Set(se), he = Mt * 12, xe = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, l = (o, s) => {
        const n = o ? s : 0, f = -(O * Math.max(n, 1) + Gt), Z = [];
        for (const _ of se) {
          if (!fe.has(_)) continue;
          const u = t.nodes.rawVal[_];
          if (!u) continue;
          const g = u[0], p = u[1], R = X == null ? void 0 : X.get(_), v = (ue) => Number.isFinite(ue) ? ue : 0, Ce = R ? v(R[0]) : 0, Ie = R ? v(R[1]) : 0, $e = R ? v(R[2]) : 0, ke = g + Ce * n, Ae = p + Ie * n, Ve = 0 + $e * n, nt = Ve - f, Ke = (ue) => [
            g + (ke - g) * ue,
            p + (Ae - p) * ue,
            f + nt * ue
          ], [at, lt, ct] = Ke(0), [it, We, Me] = Ke(0.05), Je = [
            new M(at, lt, ct),
            new M(it, We, Me)
          ];
          for (let ue = 0; ue <= he; ue++) {
            const mt = 0.05 + 0.9 * (ue / he), [dt, ot, zt] = Ke(mt), _t = 2 * Math.PI * Mt * (ue / he);
            Je.push(new M(dt + xt * Math.cos(_t), ot + xt * Math.sin(_t), zt));
          }
          Je.push(new M(ke, Ae, Ve)), Z.push(new je(new Xe().setFromPoints(Je), Vt));
          const L = Ht, rt = [
            new M(g - L, p - L, f),
            new M(g + L, p - L, f),
            new M(g + L, p + L, f),
            new M(g - L, p + L, f),
            new M(g - L, p - L, f)
          ];
          Z.push(new je(new Xe().setFromPoints(rt), jt));
        }
        return Z;
      }, r = Ze.v;
      xe ? ft.derive(() => {
        const o = xe.deformedShape.val, s = xe.deformScale.val;
        Ze.v === r && (t.objects3D.val = l(o, s));
      }) : t.objects3D.val = l(true, 1);
    },
    runModal(e, t, i) {
      var _a, _b;
      const m = t.nodes.val, N = t.elements.val, d = t.nodeInputs.val, y = t.elementInputs.val;
      if (!(!m.length || !N.length || !((_a = y.densities) == null ? void 0 : _a.size))) try {
        const w = Nt(m, N, d, y, 12);
        i.render(w, {
          title: `Zapata + Viga amarre Lv=${e.Lv}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  Viga ${e.Bv}\xD7${e.Hv}m`
          ]
        }), console.log(`[Zapata+Viga Modal] f\u2081=${(_b = w.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (w) {
        console.warn("Modal zapata-viga error:", w.message);
      }
    }
  };
  Be = 25e6;
  Oe = 0.2;
  Zt = Be / (2 * (1 + Oe));
  bt = 24;
  Fe = 9.80665;
  gt = [
    {
      name: "Custom",
      q_adm: 20,
      ks_factor: 10.5,
      su: 0,
      phi: 30,
      gamma: 18,
      N_SPT: 20,
      E_soil: 2e4
    },
    {
      name: "Arcilla blanda",
      q_adm: 5,
      ks_factor: 12,
      su: 25,
      phi: 0,
      gamma: 16,
      N_SPT: 3,
      E_soil: 3e3
    },
    {
      name: "Arcilla firme",
      q_adm: 15,
      ks_factor: 11,
      su: 75,
      phi: 0,
      gamma: 18,
      N_SPT: 10,
      E_soil: 15e3
    },
    {
      name: "Arcilla dura",
      q_adm: 30,
      ks_factor: 10,
      su: 150,
      phi: 0,
      gamma: 19,
      N_SPT: 20,
      E_soil: 3e4
    },
    {
      name: "Limo compacto",
      q_adm: 12,
      ks_factor: 10.5,
      su: 40,
      phi: 25,
      gamma: 18,
      N_SPT: 15,
      E_soil: 8e3
    },
    {
      name: "Arena suelta",
      q_adm: 10,
      ks_factor: 14,
      su: 0,
      phi: 28,
      gamma: 16,
      N_SPT: 10,
      E_soil: 1e4
    },
    {
      name: "Arena media",
      q_adm: 20,
      ks_factor: 13,
      su: 0,
      phi: 33,
      gamma: 18,
      N_SPT: 20,
      E_soil: 25e3
    },
    {
      name: "Arena densa",
      q_adm: 40,
      ks_factor: 12,
      su: 0,
      phi: 40,
      gamma: 20,
      N_SPT: 40,
      E_soil: 6e4
    },
    {
      name: "Grava densa",
      q_adm: 60,
      ks_factor: 12,
      su: 0,
      phi: 42,
      gamma: 22,
      N_SPT: 50,
      E_soil: 1e5
    },
    {
      name: "Roca alterada",
      q_adm: 100,
      ks_factor: 15,
      su: 0,
      phi: 45,
      gamma: 22,
      N_SPT: 100,
      E_soil: 5e5
    },
    {
      name: "Roca sana",
      q_adm: 200,
      ks_factor: 20,
      su: 0,
      phi: 50,
      gamma: 25,
      N_SPT: 100,
      E_soil: 2e6
    }
  ];
  Yt = 0.2;
  kt = 0.035;
  St = 8;
  Ut = new Ye({
    color: 16711731,
    linewidth: 2
  });
  Kt = new Ye({
    color: 52224,
    linewidth: 2
  });
  Wt = 0.04;
  Jt = {
    id: "zapata-aislada",
    name: "Zapata Aislada (Ecuador q_adm tonf/m\xB2)",
    category: "Cimentaciones",
    defaultShellResult: "pressure",
    availableShellResults: [
      "pressure",
      "bendingXX",
      "bendingYY",
      "displacementZ",
      "vonMises"
    ],
    hasModal: true,
    params: {
      Lz: {
        default: 2.5,
        min: 1,
        max: 5,
        step: 0.05,
        label: "Lz (m)"
      },
      Bz: {
        default: 2.5,
        min: 1,
        max: 5,
        step: 0.05,
        label: "Bz (m)"
      },
      tz: {
        default: 0.1,
        min: 0.05,
        max: 1,
        step: 0.05,
        label: "tz (m)"
      },
      bc: {
        default: 0.4,
        min: 0.2,
        max: 0.8,
        step: 0.05,
        label: "bc columna (m)"
      },
      Hp: {
        default: 0.5,
        min: 0.3,
        max: 2,
        step: 0.1,
        label: "Hp pedestal (m)"
      },
      soilType: {
        default: 6,
        label: "Tipo de suelo",
        options: Object.fromEntries(gt.map((e, t) => [
          e.name,
          t
        ]))
      },
      q_adm: {
        default: 20,
        min: 1,
        max: 100,
        step: 1,
        label: "q_adm (tonf/m\xB2)"
      },
      ks_factor: {
        default: 10.5,
        min: 5,
        max: 20,
        step: 0.5,
        label: "ks_factor Bowles (referencia)"
      },
      ks: {
        default: 2059,
        min: 100,
        max: 2e5,
        step: 10,
        label: "ks (kN/m\xB3)"
      },
      su: {
        default: 0,
        min: 0,
        max: 300,
        step: 1,
        label: "su cohesi\xF3n (kPa)"
      },
      phi: {
        default: 33,
        min: 0,
        max: 55,
        step: 1,
        label: "\u03C6 fricci\xF3n (\xB0)"
      },
      gamma: {
        default: 18,
        min: 14,
        max: 26,
        step: 0.5,
        label: "\u03B3 suelo (kN/m\xB3)"
      },
      N_SPT: {
        default: 20,
        min: 0,
        max: 100,
        step: 1,
        label: "N SPT"
      },
      E_soil: {
        default: 25e3,
        min: 1e3,
        max: 2e6,
        step: 1e3,
        label: "E suelo (kPa)"
      },
      useSimple: {
        default: 0,
        boolean: true,
        label: "\u{1F3AF} Usar Carga Simple (ignora D/L/S)",
        folder: "Cargas \u2014 Activar"
      },
      useD: {
        default: 1,
        boolean: true,
        label: "\u2611 Usar Patr\xF3n D (Muerta)",
        folder: "Cargas \u2014 Activar"
      },
      useL: {
        default: 1,
        boolean: true,
        label: "\u2611 Usar Patr\xF3n L (Viva)",
        folder: "Cargas \u2014 Activar"
      },
      useS: {
        default: 0,
        boolean: true,
        label: "\u2610 Usar Patr\xF3n S (Sobrecarga)",
        folder: "Cargas \u2014 Activar"
      },
      useFactors: {
        default: 1,
        boolean: true,
        label: "\xD7 Aplicar factores fD/fL/fS",
        folder: "Cargas \u2014 Activar"
      },
      P_simple: {
        default: 20,
        min: 0,
        max: 500,
        step: 0.5,
        label: "P (tonf)",
        folder: "Cargas \u2014 Simple"
      },
      Mx_simple: {
        default: 0,
        min: -50,
        max: 50,
        step: 0.5,
        label: "Mx (tonf\xB7m)",
        folder: "Cargas \u2014 Simple"
      },
      My_simple: {
        default: 0,
        min: -50,
        max: 50,
        step: 0.5,
        label: "My (tonf\xB7m)",
        folder: "Cargas \u2014 Simple"
      },
      P_D: {
        default: 10,
        min: 0,
        max: 500,
        step: 0.5,
        label: "P (tonf)",
        folder: "Cargas \u2014 Patr\xF3n D (Muerta)"
      },
      Mx_D: {
        default: 0,
        min: -50,
        max: 50,
        step: 0.5,
        label: "Mx (tonf\xB7m)",
        folder: "Cargas \u2014 Patr\xF3n D (Muerta)"
      },
      My_D: {
        default: 0,
        min: -50,
        max: 50,
        step: 0.5,
        label: "My (tonf\xB7m)",
        folder: "Cargas \u2014 Patr\xF3n D (Muerta)"
      },
      P_L: {
        default: 5,
        min: 0,
        max: 500,
        step: 0.5,
        label: "P (tonf)",
        folder: "Cargas \u2014 Patr\xF3n L (Viva)"
      },
      Mx_L: {
        default: 0,
        min: -50,
        max: 50,
        step: 0.5,
        label: "Mx (tonf\xB7m)",
        folder: "Cargas \u2014 Patr\xF3n L (Viva)"
      },
      My_L: {
        default: 0,
        min: -50,
        max: 50,
        step: 0.5,
        label: "My (tonf\xB7m)",
        folder: "Cargas \u2014 Patr\xF3n L (Viva)"
      },
      P_S: {
        default: 0,
        min: 0,
        max: 500,
        step: 0.5,
        label: "P (tonf)",
        folder: "Cargas \u2014 Patr\xF3n S (Sobrec.)"
      },
      Mx_S: {
        default: 0,
        min: -50,
        max: 50,
        step: 0.5,
        label: "Mx (tonf\xB7m)",
        folder: "Cargas \u2014 Patr\xF3n S (Sobrec.)"
      },
      My_S: {
        default: 0,
        min: -50,
        max: 50,
        step: 0.5,
        label: "My (tonf\xB7m)",
        folder: "Cargas \u2014 Patr\xF3n S (Sobrec.)"
      },
      combo: {
        default: 0,
        label: "Combinaci\xF3n (solo modo 5)",
        folder: "Cargas \u2014 Combinaci\xF3n D+L+S",
        options: {
          "1.2D + 1.6L (gravitatoria)": 0,
          "1.4D": 1,
          "1.2D + 1.0L": 2,
          "1.2D + 1.0L + 0.5S": 3,
          "1.2D + 1.6S + 0.5L": 4,
          "Servicio 1.0D + 1.0L": 5,
          "1.0D (solo D)": 6,
          "1.0L (solo L)": 7,
          "1.0S (solo S)": 8,
          "S\xEDsmica 1.2D+1.0L+1.0E": 9,
          "S\xEDsmica 0.9D + 1.0E": 10,
          Custom: 11
        }
      },
      fD: {
        default: 1.2,
        min: -2,
        max: 2,
        step: 0.05,
        label: "factor D",
        folder: "Cargas \u2014 Combinaci\xF3n D+L+S"
      },
      fL: {
        default: 1.6,
        min: -2,
        max: 2,
        step: 0.05,
        label: "factor L",
        folder: "Cargas \u2014 Combinaci\xF3n D+L+S"
      },
      fS: {
        default: 0,
        min: -2,
        max: 2,
        step: 0.05,
        label: "factor S (o E)",
        folder: "Cargas \u2014 Combinaci\xF3n D+L+S"
      },
      nSub: {
        default: 10,
        min: 3,
        max: 16,
        step: 1,
        label: "n subdivisiones"
      }
    },
    inlineComputed: [
      {
        after: "ks_factor",
        label: "ks Bowles ref. (kN/m\xB3)",
        compute: (e) => ((e.q_adm ?? 20) * Fe * (e.ks_factor ?? 10.5)).toFixed(0)
      },
      {
        after: "tz",
        label: "D flexural (kN\xB7m)",
        compute: (e) => {
          const t = e.tz ?? 0.15;
          return (Be * t ** 3 / (12 * (1 - Oe ** 2))).toFixed(1);
        }
      },
      {
        after: "ks",
        label: "k_r Biot",
        compute: (e) => {
          const t = e.tz ?? 0.15, i = e.Lz ?? 2.5, m = e.ks ?? 2059, d = Be * t ** 3 / (12 * (1 - Oe ** 2)) / (m * i ** 4);
          return d.toFixed(3) + (d < 1 ? " FLEX" : " R\xCDG");
        }
      }
    ],
    computedLabels(e, t) {
      var _a;
      const i = (e.q_adm ?? 20) * Fe, m = e.ks ?? i * (e.ks_factor ?? 10.5), N = e.tz ?? 0.15, d = e.Lz ?? 2.5, y = Be * N ** 3 / (12 * (1 - Oe ** 2)), w = y / (m * d ** 4), q = (e.useSimple ?? 0) >= 0.5, ne = (e.useD ?? 0) >= 0.5, z = (e.useL ?? 0) >= 0.5, W = (e.useS ?? 0) >= 0.5, Y = (e.useFactors ?? 1) >= 0.5, be = Y ? e.fD ?? 1.2 : 1, G = Y ? e.fL ?? 1.6 : 1, F = Y ? e.fS ?? 0 : 1, J = ne ? 1 : 0, U = z ? 1 : 0, I = W ? 1 : 0;
      let h = 0;
      q ? h = e.P_simple ?? 0 : h = J * be * (e.P_D ?? 0) + U * G * (e.P_L ?? 0) + I * F * (e.P_S ?? 0);
      const E = [];
      q ? E.push("Simple") : (ne && E.push("D"), z && E.push("L"), W && E.push("S"), E.length || E.push("NINGUNO"));
      const Q = E.join("+") + (Y && !q ? " (factor)" : "");
      let ee = 0, te = 0;
      const ae = (_a = t.analyzeOutputs.rawVal) == null ? void 0 : _a.pressure;
      if (ae && ae.size) {
        for (const H of ae.values()) for (const T of H) T < ee && (ee = T), (T < te || te === 0) && (te = T);
        let K = 1 / 0;
        for (const H of ae.values()) for (const T of H) Math.abs(T) < K && (K = Math.abs(T));
        te = -K;
      }
      const re = Math.abs(ee) / (e.q_adm || 1);
      return {
        "Patrones activos": Q,
        "ks (kN/m\xB3)": m.toFixed(0),
        "D (kN\xB7m)": y.toFixed(1),
        "k_r (Biot)": w.toFixed(3) + (w < 1 ? " FLEXIBLE" : " R\xCDGIDA"),
        "P total (tonf)": h.toFixed(2),
        "q_max (tonf/m\xB2)": ee.toFixed(2),
        "q_min (tonf/m\xB2)": te.toFixed(2),
        "q/q_adm": re.toFixed(2) + (re > 1 ? " \u26A0" : " \u2713")
      };
    },
    onParamChange(e, t) {
      if (e === "soilType") {
        const i = Math.round(t.soilType ?? 0);
        if (i >= 0) {
          const m = gt[i];
          t.q_adm = m.q_adm, t.ks_factor = m.ks_factor, t.su = m.su, t.phi = m.phi, t.gamma = m.gamma, t.N_SPT = m.N_SPT, t.E_soil = m.E_soil, t.ks = m.q_adm * Fe * m.ks_factor;
        }
      }
      if (e === "combo") {
        const i = Math.round(t.combo ?? 0), m = [
          [
            1.2,
            1.6,
            0
          ],
          [
            1.4,
            0,
            0
          ],
          [
            1.2,
            1,
            0
          ],
          [
            1.2,
            1,
            0.5
          ],
          [
            1.2,
            0.5,
            1.6
          ],
          [
            1,
            1,
            0
          ],
          [
            1,
            0,
            0
          ],
          [
            0,
            1,
            0
          ],
          [
            0,
            0,
            1
          ],
          [
            1.2,
            1,
            1
          ],
          [
            0.9,
            0,
            1
          ]
        ];
        i >= 0 && i < m.length && ([t.fD, t.fL, t.fS] = m[i]);
      }
    },
    build(e, t) {
      var _a;
      const { Lz: i, Bz: m, tz: N, bc: d, Hp: y } = e, w = e.q_adm, q = e.ks_factor, ne = w * Fe, z = e.ks ?? ne * q, W = (e.useSimple ?? 0) >= 0.5, Y = (e.useD ?? 0) >= 0.5, be = (e.useL ?? 0) >= 0.5, G = (e.useS ?? 0) >= 0.5, F = (e.useFactors ?? 1) >= 0.5, J = F ? e.fD ?? 1.2 : 1, U = F ? e.fL ?? 1.6 : 1, I = F ? e.fS ?? 0 : 1, h = Y ? 1 : 0, E = be ? 1 : 0, Q = G ? 1 : 0, ee = J, te = U, ae = I;
      let re = 0, K = 0, H = 0;
      W ? (re = e.P_simple ?? 0, K = e.Mx_simple ?? 0, H = e.My_simple ?? 0) : (re = h * J * (e.P_D ?? 0) + E * U * (e.P_L ?? 0) + Q * I * (e.P_S ?? 0), K = h * J * (e.Mx_D ?? 0) + E * U * (e.Mx_L ?? 0) + Q * I * (e.Mx_S ?? 0), H = h * J * (e.My_D ?? 0) + E * U * (e.My_L ?? 0) + Q * I * (e.My_S ?? 0));
      const T = re * Fe, Se = K * Fe, ge = H * Fe, pe = Math.round(e.nSub), B = i / 2, ve = m / 2, S = [], V = [];
      for (let l = 0; l <= pe; l++) S.push(i * l / pe), V.push(m * l / pe);
      S.includes(B) || (S.push(B), S.sort((l, r) => l - r)), V.includes(ve) || (V.push(ve), V.sort((l, r) => l - r));
      const _e = [], C = [], we = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), De = (l, r, o) => {
        const s = `${l.toFixed(4)},${r.toFixed(4)},${o.toFixed(4)}`;
        if (ce.has(s)) return ce.get(s);
        const n = _e.length;
        return _e.push([
          l,
          r,
          o
        ]), ce.set(s, n), n;
      }, oe = [];
      for (let l = 0; l < V.length; l++) {
        const r = [];
        for (let o = 0; o < S.length; o++) r.push(De(S[o], V[l], 0));
        oe.push(r);
      }
      for (let l = 0; l < V.length - 1; l++) for (let r = 0; r < S.length - 1; r++) {
        const o = C.length;
        C.push([
          oe[l][r],
          oe[l][r + 1],
          oe[l + 1][r + 1],
          oe[l + 1][r]
        ]), Ee.set(o, N), we.set(o, Be), Le.set(o, Oe), de.set(o, bt);
      }
      const tt = De(B, ve, 0), Pe = De(B, ve, y), ie = C.length;
      C.push([
        tt,
        Pe
      ]), we.set(ie, Be), Le.set(ie, Oe), ze.set(ie, Zt), ye.set(ie, d * d), le.set(ie, d ** 4 / 12), me.set(ie, d ** 4 / 12), Ne.set(ie, 0.14 * d ** 4), de.set(ie, bt), $.set(ie, {
        type: "rect",
        b: d,
        h: d
      });
      const qe = /* @__PURE__ */ new Map();
      qe.set(Pe, [
        0,
        0,
        -T,
        Se,
        ge,
        0
      ]);
      const a = i / pe, c = m / pe, x = 0.5, D = [], k = [];
      for (let l = 0; l < V.length; l++) for (let r = 0; r < S.length; r++) {
        const o = a * c * (r === 0 || r === S.length - 1 ? 0.5 : 1) * (l === 0 || l === V.length - 1 ? 0.5 : 1), s = z * o, n = z * o * x;
        D.push({
          node: oe[l][r],
          dof: 0,
          k: n
        }), D.push({
          node: oe[l][r],
          dof: 1,
          k: n
        }), D.push({
          node: oe[l][r],
          dof: 2,
          k: s
        }), k.push(oe[l][r]);
      }
      const j = z * a * c * 1e-4, P = oe[0][0];
      D.push({
        node: P,
        dof: 3,
        k: j
      }), D.push({
        node: P,
        dof: 4,
        k: j
      }), D.push({
        node: P,
        dof: 5,
        k: j
      }), t.nodes.val = _e.map((l) => [
        l[0],
        l[1],
        l[2]
      ]), t.elements.val = C, t.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: qe
      }, t.elementInputs.val = {
        elasticities: we,
        poissonsRatios: Le,
        areas: ye,
        momentsOfInertiaZ: le,
        momentsOfInertiaY: me,
        torsionalConstants: Ne,
        shearModuli: ze,
        thicknesses: Ee,
        densities: de,
        sectionShapes: $
      };
      try {
        t.deformOutputs.val = pt(t.nodes.val, t.elements.val, t.nodeInputs.val, t.elementInputs.val, D);
        const l = ut(t.nodes.val, t.elements.val, t.elementInputs.val, t.deformOutputs.val), r = t.deformOutputs.rawVal.deformations, o = /* @__PURE__ */ new Map();
        let s = 0;
        t.elements.rawVal.forEach((p, R) => {
          if (p.length !== 4) return;
          const v = [];
          for (const Ce of p) {
            const Ie = r == null ? void 0 : r.get(Ce), ke = z * (Ie ? Ie[2] : 0) / Fe;
            v.push(ke), ke < s && (s = ke);
          }
          o.set(R, v);
        }), l.pressure = o, t.analyzeOutputs.val = l;
        const n = Math.abs(s);
        let b = 1 / 0;
        o.forEach((p) => {
          for (const R of p) {
            const v = Math.abs(R);
            v < b && (b = v);
          }
        }), Number.isFinite(b) || (b = 0);
        const f = n / e.q_adm, _ = Be * N ** 3 / (12 * (1 - Oe ** 2)) / (z * i ** 4), u = [];
        W ? u.push("Simple") : (Y && u.push(`D${F ? "\xD7" + ee : ""}`), be && u.push(`L${F ? "\xD7" + te : ""}`), G && u.push(`S${F ? "\xD7" + ae : ""}`), u.length || u.push("\u26A0 NINGUNO activo"));
        const g = u.join(" + ");
        console.log(`[Zapata Aislada]  Patrones activos: ${g}
  Cargas totales: P=${re.toFixed(2)} tonf, Mx=${K.toFixed(2)} tonf\xB7m, My=${H.toFixed(2)} tonf\xB7m
  Patrones: D(${e.P_D}, ${e.Mx_D}, ${e.My_D}) L(${e.P_L}, ${e.Mx_L}, ${e.My_L}) S(${e.P_S}, ${e.Mx_S}, ${e.My_S})
  q_max (centro) = -${n.toFixed(2)} tonf/m\xB2
  q_min (bordes) = -${b.toFixed(2)} tonf/m\xB2
  variaci\xF3n = ${((1 - b / (n || 1)) * 100).toFixed(1)}%
  q_adm = -${e.q_adm} tonf/m\xB2 | ratio q_max/q_adm = ${f.toFixed(2)}` + (f > 1 ? " \u26A0 SOBREPASA" : " \u2713 OK") + `
  k_r\xEDgidez = ${_.toFixed(2)} (${_ < 1 ? "FLEXIBLE" : "R\xCDGIDA"} \u2014 flexible muestra concentraci\xF3n, r\xEDgida uniforme)`);
      } catch (l) {
        console.error("Solver error zapata aislada:", l);
      }
      const se = t.deformOutputs.rawVal.deformations;
      let A = 1e-9;
      for (const l of k) {
        const r = se == null ? void 0 : se.get(l);
        r && Number.isFinite(r[2]) && (A = Math.max(A, Math.abs(r[2])));
      }
      const O = St * 12, fe = new Set(k), he = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, He = (l, r) => {
        const o = l ? r : 0, n = -(A * Math.max(o, 1) + Yt), b = [];
        for (const f of k) {
          if (!fe.has(f)) continue;
          const Z = t.nodes.rawVal[f];
          if (!Z) continue;
          const _ = Z[0], u = Z[1], g = se == null ? void 0 : se.get(f), p = (L) => Number.isFinite(L) ? L : 0, R = g ? p(g[0]) : 0, v = g ? p(g[1]) : 0, Ce = g ? p(g[2]) : 0, Ie = _ + R * o, $e = u + v * o, ke = 0 + Ce * o, Ae = ke - n, Ve = (L) => [
            _ + (Ie - _) * L,
            u + ($e - u) * L,
            n + Ae * L
          ], [nt, Ke, at] = Ve(0), [lt, ct, it] = Ve(0.05), We = [
            new M(nt, Ke, at),
            new M(lt, ct, it)
          ];
          for (let L = 0; L <= O; L++) {
            const rt = 0.05 + 0.9 * (L / O), [ue, mt, dt] = Ve(rt), ot = 2 * Math.PI * St * (L / O);
            We.push(new M(ue + kt * Math.cos(ot), mt + kt * Math.sin(ot), dt));
          }
          We.push(new M(Ie, $e, ke)), b.push(new je(new Xe().setFromPoints(We), Ut));
          const Me = Wt, Je = [
            new M(_ - Me, u - Me, n),
            new M(_ + Me, u - Me, n),
            new M(_ + Me, u + Me, n),
            new M(_ - Me, u + Me, n),
            new M(_ - Me, u - Me, n)
          ];
          b.push(new je(new Xe().setFromPoints(Je), Kt));
        }
        return b;
      }, xe = Ze.v;
      he ? ft.derive(() => {
        const l = he.deformedShape.val, r = he.deformScale.val;
        Ze.v === xe && (t.objects3D.val = He(l, r));
      }) : t.objects3D.val = He(true, 1);
    },
    runModal(e, t, i) {
      var _a, _b;
      const m = t.nodes.val, N = t.elements.val, d = t.nodeInputs.val, y = t.elementInputs.val;
      if (!(!m.length || !N.length || !((_a = y.densities) == null ? void 0 : _a.size))) try {
        const w = Nt(m, N, d, y, 12);
        i.render(w, {
          title: `Zapata Aislada ${e.Lz}\xD7${e.Bz}m t=${e.tz}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  col=${e.bc}m  Hp=${e.Hp}m`
          ]
        }), console.log(`[Zapata Modal] f\u2081=${(_b = w.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (w) {
        console.warn("Modal zapata error:", w.message);
      }
    }
  };
  Re = 228e5;
  Ge = 0.2;
  Qt = Re / (2 * (1 + Ge));
  vt = 24;
  Te = 9.80665;
  eo = 0.2;
  wt = 0.035;
  Lt = 8;
  to = new Ye({
    color: 16711731,
    linewidth: 2
  });
  oo = new Ye({
    color: 52224,
    linewidth: 2
  });
  so = 0.04;
  no = {
    id: "zapata-aislada-validacion",
    name: "Isolated Footing \u2014 Calcpad validation",
    category: "Foundations",
    defaultShellResult: "pressure",
    availableShellResults: [
      "pressure",
      "bendingXX",
      "bendingYY",
      "displacementZ",
      "vonMises"
    ],
    hasModal: false,
    params: {
      Lz: {
        default: 1.5,
        min: 1,
        max: 5,
        step: 0.05,
        label: "Lz \u2014 length X (m)"
      },
      Bz: {
        default: 1.5,
        min: 1,
        max: 5,
        step: 0.05,
        label: "Bz \u2014 length Y (m)"
      },
      tz: {
        default: 0.3,
        min: 0.05,
        max: 1,
        step: 0.05,
        label: "t \u2014 thickness (m)"
      },
      bc: {
        default: 0.4,
        min: 0.2,
        max: 0.8,
        step: 0.05,
        label: "bc \u2014 column side (m)"
      },
      Hp: {
        default: 0.5,
        min: 0.3,
        max: 2,
        step: 0.1,
        label: "Hp \u2014 pedestal height (m)"
      },
      q_adm: {
        default: 10,
        min: 1,
        max: 100,
        step: 1,
        label: "q_adm (tonf/m\xB2)"
      },
      ks_factor: {
        default: 10.5,
        min: 5,
        max: 20,
        step: 0.5,
        label: "ks_factor (Bowles)"
      },
      ks: {
        default: 1030,
        min: 100,
        max: 2e5,
        step: 10,
        label: "ks \u2014 subgrade modulus (kN/m\xB3)"
      },
      P_simple: {
        default: 20,
        min: 0,
        max: 500,
        step: 0.5,
        label: "P \u2014 axial (tonf)",
        folder: "Loads"
      },
      Mx_simple: {
        default: 0.5,
        min: -50,
        max: 50,
        step: 0.1,
        label: "Mx (tonf\xB7m)",
        folder: "Loads"
      },
      My_simple: {
        default: -0.5,
        min: -50,
        max: 50,
        step: 0.1,
        label: "My (tonf\xB7m)",
        folder: "Loads"
      },
      nSub: {
        default: 10,
        min: 3,
        max: 16,
        step: 1,
        label: "n \u2014 mesh subdivisions"
      }
    },
    inlineComputed: [
      {
        after: "ks_factor",
        label: "ks computed (kN/m\xB3)",
        compute: (e) => ((e.q_adm ?? 10) * Te * (e.ks_factor ?? 10.5)).toFixed(0)
      },
      {
        after: "tz",
        label: "D flexural (kN\xB7m)",
        compute: (e) => {
          const t = e.tz ?? 0.3;
          return (Re * t ** 3 / (12 * (1 - Ge ** 2))).toFixed(1);
        }
      },
      {
        after: "ks",
        label: "k_r Biot",
        compute: (e) => {
          const t = e.tz ?? 0.3, i = e.Lz ?? 1.5, m = e.ks ?? 1030, d = Re * t ** 3 / (12 * (1 - Ge ** 2)) / (m * i ** 4);
          return d.toFixed(3) + (d < 1 ? " FLEX" : " RIGID");
        }
      }
    ],
    computedLabels(e, t) {
      var _a;
      const i = e.q_adm ?? 10, m = e.ks_factor ?? 10.5, N = i * Te, d = e.ks ?? N * m, y = e.tz ?? 0.3, w = e.Lz ?? 1.5, q = Re * y ** 3 / (12 * (1 - Ge ** 2)), ne = q / (d * w ** 4), z = e.P_simple ?? 0;
      let W = 0, Y = 0, be = false;
      const G = (_a = t.analyzeOutputs.rawVal) == null ? void 0 : _a.pressure;
      if (G && G.size) for (const I of G.values()) for (const h of I) be || (W = Y = h, be = true), h < W && (W = h), h > Y && (Y = h);
      const F = Math.abs(W), J = Math.abs(Y), U = F / (i || 1);
      return {
        Mode: "Direct P/Mx/My",
        "ks (kN/m\xB3)": d.toFixed(0),
        "D (kN\xB7m)": q.toFixed(1),
        "k_r (Biot)": ne.toFixed(3) + (ne < 1 ? " FLEXIBLE" : " RIGID"),
        "P (tonf)": z.toFixed(2),
        "Mx (tonf\xB7m)": (e.Mx_simple ?? 0).toFixed(2),
        "My (tonf\xB7m)": (e.My_simple ?? 0).toFixed(2),
        "\u03C3_max comp (tonf/m\xB2)": F.toFixed(2),
        "\u03C3_min comp (tonf/m\xB2)": J.toFixed(2),
        "q_adm (tonf/m\xB2)": i.toFixed(2),
        "\u03C3/q_adm": U.toFixed(2) + (U > 1 ? " \u26A0" : " \u2713")
      };
    },
    build(e, t) {
      var _a;
      const { Lz: i, Bz: m, tz: N, bc: d, Hp: y } = e, w = e.q_adm * Te, q = e.ks ?? w * e.ks_factor, ne = e.P_simple ?? 0, z = e.Mx_simple ?? 0, W = e.My_simple ?? 0, Y = ne * Te, be = z * Te, G = W * Te, F = Math.round(e.nSub), J = i / 2, U = m / 2, I = [], h = [];
      for (let a = 0; a <= F; a++) I.push(i * a / F), h.push(m * a / F);
      I.includes(J) || (I.push(J), I.sort((a, c) => a - c)), h.includes(U) || (h.push(U), h.sort((a, c) => a - c));
      const E = [], Q = [], ee = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), ve = (a, c, x) => {
        const D = `${a.toFixed(4)},${c.toFixed(4)},${x.toFixed(4)}`;
        if (B.has(D)) return B.get(D);
        const k = E.length;
        return E.push([
          a,
          c,
          x
        ]), B.set(D, k), k;
      }, S = [];
      for (let a = 0; a < h.length; a++) {
        const c = [];
        for (let x = 0; x < I.length; x++) c.push(ve(I[x], h[a], 0));
        S.push(c);
      }
      for (let a = 0; a < h.length - 1; a++) for (let c = 0; c < I.length - 1; c++) {
        const x = Q.length;
        Q.push([
          S[a][c],
          S[a][c + 1],
          S[a + 1][c + 1],
          S[a + 1][c]
        ]), re.set(x, N), ee.set(x, Re), te.set(x, Ge), ge.set(x, vt);
      }
      const V = ve(J, U, 0), _e = ve(J, U, y), C = Q.length;
      Q.push([
        V,
        _e
      ]), ee.set(C, Re), te.set(C, Ge), Se.set(C, Qt), ae.set(C, d * d), K.set(C, d ** 4 / 12), H.set(C, d ** 4 / 12), T.set(C, 0.14 * d ** 4), ge.set(C, vt), pe.set(C, {
        type: "rect",
        b: d,
        h: d
      });
      const we = /* @__PURE__ */ new Map();
      we.set(_e, [
        0,
        0,
        -Y,
        be,
        G,
        0
      ]);
      const Le = i / F, ye = m / F, Ee = 0.5, le = [], me = [];
      for (let a = 0; a < h.length; a++) for (let c = 0; c < I.length; c++) {
        const x = Le * ye * (c === 0 || c === I.length - 1 ? 0.5 : 1) * (a === 0 || a === h.length - 1 ? 0.5 : 1), D = q * x, k = q * x * Ee;
        le.push({
          node: S[a][c],
          dof: 0,
          k
        }), le.push({
          node: S[a][c],
          dof: 1,
          k
        }), le.push({
          node: S[a][c],
          dof: 2,
          k: D
        }), me.push(S[a][c]);
      }
      const Ne = q * Le * ye * 1e-4, ze = S[0][0];
      le.push({
        node: ze,
        dof: 3,
        k: Ne
      }), le.push({
        node: ze,
        dof: 4,
        k: Ne
      }), le.push({
        node: ze,
        dof: 5,
        k: Ne
      }), t.nodes.val = E.map((a) => [
        a[0],
        a[1],
        a[2]
      ]), t.elements.val = Q, t.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: we
      }, t.elementInputs.val = {
        elasticities: ee,
        poissonsRatios: te,
        areas: ae,
        momentsOfInertiaZ: K,
        momentsOfInertiaY: H,
        torsionalConstants: T,
        shearModuli: Se,
        thicknesses: re,
        densities: ge,
        sectionShapes: pe
      };
      try {
        t.deformOutputs.val = pt(t.nodes.val, t.elements.val, t.nodeInputs.val, t.elementInputs.val, le);
        const a = ut(t.nodes.val, t.elements.val, t.elementInputs.val, t.deformOutputs.val), c = t.deformOutputs.rawVal.deformations, x = /* @__PURE__ */ new Map();
        let D = 0;
        t.elements.rawVal.forEach((X, O) => {
          if (X.length !== 4) return;
          const fe = [];
          for (const Ue of X) {
            const he = c == null ? void 0 : c.get(Ue), xe = q * (he ? he[2] : 0) / Te;
            fe.push(xe), xe < D && (D = xe);
          }
          x.set(O, fe);
        }), a.pressure = x, t.analyzeOutputs.val = a;
        const k = Math.abs(D);
        let j = 1 / 0;
        x.forEach((X) => {
          for (const O of X) {
            const fe = Math.abs(O);
            fe < j && (j = fe);
          }
        }), Number.isFinite(j) || (j = 0);
        const P = k / e.q_adm, se = Re * N ** 3 / (12 * (1 - Ge ** 2)), A = se / (q * i ** 4);
        console.log(`[Zapata VALIDACI\xD3N \u2014 espejo Calcpad]
  Cargas: P=${ne.toFixed(2)} tonf, Mx=${z.toFixed(2)} tonf\xB7m, My=${W.toFixed(2)} tonf\xB7m
  \u2500\u2500\u2500 Valores derivados (comparar con Calcpad) \u2500\u2500\u2500
  D flexural = ${se.toFixed(1)} kN\xB7m   (Calcpad: idem)
  ks         = ${q.toFixed(0)} kN/m\xB3      (Calcpad: idem)
  k_r Biot   = ${A.toFixed(3)} ${A < 1 ? "FLEXIBLE" : "R\xCDGIDA"}
  \u2500\u2500\u2500 Resultados FEM Hekatan \u2500\u2500\u2500
  q_max (centro) = -${k.toFixed(2)} tonf/m\xB2
  q_min (bordes) = -${j.toFixed(2)} tonf/m\xB2
  variaci\xF3n = ${((1 - j / (k || 1)) * 100).toFixed(1)}%
  ratio q/q_adm = ${P.toFixed(3)} ${P > 1 ? "\u26A0 SOBREPASA" : "\u2713 OK"}
  FS = ${(e.q_adm / (k || 1)).toFixed(3)}`);
      } catch (a) {
        console.error("Solver error zapata validaci\xF3n:", a);
      }
      const de = t.deformOutputs.rawVal.deformations;
      let $ = 1e-9;
      for (const a of me) {
        const c = de == null ? void 0 : de.get(a);
        c && Number.isFinite(c[2]) && ($ = Math.max($, Math.abs(c[2])));
      }
      const De = Lt * 12, oe = new Set(me), Pe = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, ie = (a, c) => {
        const x = a ? c : 0, k = -($ * Math.max(x, 1) + eo), j = [];
        for (const P of me) {
          if (!oe.has(P)) continue;
          const se = t.nodes.rawVal[P];
          if (!se) continue;
          const A = se[0], X = se[1], O = de == null ? void 0 : de.get(P), fe = (v) => Number.isFinite(v) ? v : 0, Ue = O ? fe(O[0]) : 0, he = O ? fe(O[1]) : 0, He = O ? fe(O[2]) : 0, xe = A + Ue * x, l = X + he * x, r = 0 + He * x, o = r - k, s = (v) => [
            A + (xe - A) * v,
            X + (l - X) * v,
            k + o * v
          ], [n, b, f] = s(0), [Z, _, u] = s(0.05), g = [
            new M(n, b, f),
            new M(Z, _, u)
          ];
          for (let v = 0; v <= De; v++) {
            const Ce = 0.05 + 0.9 * (v / De), [Ie, $e, ke] = s(Ce), Ae = 2 * Math.PI * Lt * (v / De);
            g.push(new M(Ie + wt * Math.cos(Ae), $e + wt * Math.sin(Ae), ke));
          }
          g.push(new M(xe, l, r)), j.push(new je(new Xe().setFromPoints(g), to));
          const p = so, R = [
            new M(A - p, X - p, k),
            new M(A + p, X - p, k),
            new M(A + p, X + p, k),
            new M(A - p, X + p, k),
            new M(A - p, X - p, k)
          ];
          j.push(new je(new Xe().setFromPoints(R), oo));
        }
        return j;
      }, qe = Ze.v;
      Pe ? ft.derive(() => {
        const a = Pe.deformedShape.val, c = Pe.deformScale.val;
        Ze.v === qe && (t.objects3D.val = ie(a, c));
      }) : t.objects3D.val = ie(true, 1);
    }
  };
  Ze = {
    v: 0
  };
  wo = [
    no,
    Pt,
    Jt,
    Xt,
    $t,
    Ct,
    At,
    Tt,
    Bt,
    Ft,
    Ot,
    Rt,
    yt,
    It,
    Et,
    Dt,
    qt
  ];
});
export {
  __tla,
  Ze as a,
  Jt as b,
  no as c,
  wo as e,
  Xt as z
};
