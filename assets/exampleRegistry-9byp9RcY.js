import { a as Ue, V as v, L as Xe, B as Ze } from "./Text-CBH-tcJP.js";
import { v as ut } from "./theme-CzzIlc4y.js";
import { a as pt } from "./analyze-ClLKGn9k.js";
import { m as Pt, d as je, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { p as Nt, __tla as __tla_1 } from "./plateThickValidacion-D_mgYE7c.js";
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
let Ye, Jt, so, wo, Xt;
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
  let et, tt, ht, st, Gt, xt, Mt, Vt, Ht, jt, Re, Ge, Zt, bt, Te, gt, Yt, vt, kt, Ut, Kt, Wt, Ve, He, Qt, St, Oe, eo, wt, Lt, to, oo, no;
  et = 25e6;
  tt = 0.2;
  ht = et / (2 * (1 + tt));
  st = 24;
  Gt = 0.2;
  xt = 0.035;
  Mt = 8;
  Vt = 0.04;
  Ht = new Ue({
    color: 16711731,
    linewidth: 2
  });
  jt = new Ue({
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
      const d = e.Lz1, u = e.Bz1, N = e.Lv, f = e.Bv, I = e.Hv, L = e.Lz2, $ = e.Bz2, ne = e.tz, y = e.bc, J = e.Hp, Z = e.P1, pe = e.P2, G = e.ks, A = e.M1x ?? 0, T = e.M1y ?? 0, E = e.M2x ?? 0, w = e.M2y ?? 0, M = Math.round(e.nSubX), D = Math.round(e.nSubY), Q = 0.2, ee = u / 2, te = d + N + L / 2, se = $ / 2, ie = (ee + se) / 2;
      function K(o, s, n, i) {
        const m = [
          o,
          ...n.filter((h) => h > o && h < s),
          s
        ].sort((h, p) => h - p), P = [];
        for (let h = 0; h < m.length - 1; h++) {
          const p = m[h], x = m[h + 1], _ = Math.max(1, Math.round((x - p) / ((s - o) / i)));
          for (let C = 0; C < _; C++) P.push(p + (x - p) * C / _);
        }
        return P.push(m[m.length - 1]), P;
      }
      const Y = K(0, d, [
        Q
      ], M), V = K(0, u, [
        ee,
        ie
      ], D), we = K(d + N, d + N + L, [
        te
      ], M), be = K(0, $, [
        se,
        ie
      ], D), _e = [], H = [], Le = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), me = (o, s, n) => {
        const i = `${o.toFixed(4)},${s.toFixed(4)},${n.toFixed(4)}`;
        if (ye.has(i)) return ye.get(i);
        const m = _e.length;
        return _e.push([
          o,
          s,
          n
        ]), ye.set(i, m), m;
      }, O = [];
      for (let o = 0; o < V.length; o++) {
        const s = [];
        for (let n = 0; n < Y.length; n++) s.push(me(Y[n], V[o], 0));
        O.push(s);
      }
      for (let o = 0; o < V.length - 1; o++) for (let s = 0; s < Y.length - 1; s++) {
        const n = H.length;
        H.push([
          O[o][s],
          O[o][s + 1],
          O[o + 1][s + 1],
          O[o + 1][s]
        ]), Pe.set(n, ne), j.set(n, et), he.set(n, tt), re.set(n, st);
      }
      const ae = [];
      for (let o = 0; o < be.length; o++) {
        const s = [];
        for (let n = 0; n < we.length; n++) s.push(me(we[n], be[o], 0));
        ae.push(s);
      }
      for (let o = 0; o < be.length - 1; o++) for (let s = 0; s < we.length - 1; s++) {
        const n = H.length;
        H.push([
          ae[o][s],
          ae[o][s + 1],
          ae[o + 1][s + 1],
          ae[o + 1][s]
        ]), Pe.set(n, ne), j.set(n, et), he.set(n, tt), re.set(n, st);
      }
      const oe = Math.round(e.vigaLevel) === 0 ? ne : J, ot = me(Q, ee, 0), Ie = me(Q, ee, oe), le = me(te, se, 0), Ae = me(te, se, oe);
      for (const [o, s] of [
        [
          ot,
          Ie
        ],
        [
          le,
          Ae
        ]
      ]) {
        const n = H.length;
        H.push([
          o,
          s
        ]), j.set(n, et), he.set(n, tt), U.set(n, ht), B.set(n, y * y), ze.set(n, y ** 4 / 12), Ee.set(n, y ** 4 / 12), Ce.set(n, 0.14 * y ** 4), re.set(n, st), Ne.set(n, {
          type: "rect",
          b: y,
          h: y
        });
      }
      const a = H.length;
      H.push([
        Ie,
        Ae
      ]), j.set(a, et), he.set(a, tt), U.set(a, ht), B.set(a, f * I), ze.set(a, f * I ** 3 / 12), Ee.set(a, I * f ** 3 / 12), Ce.set(a, 0.28 * f * I ** 3), re.set(a, st), Ne.set(a, {
        type: "rect",
        b: f,
        h: I
      }), k.set(Ie, [
        0,
        0,
        -Z,
        A,
        T,
        0
      ]), k.set(Ae, [
        0,
        0,
        -pe,
        E,
        w,
        0
      ]);
      const r = d / M, b = u / D, q = L / M, S = $ / D, xe = 0.5, F = [], ce = [];
      for (let o = 0; o < V.length; o++) for (let s = 0; s < Y.length; s++) {
        const n = r * b * (s === 0 || s === Y.length - 1 ? 0.5 : 1) * (o === 0 || o === V.length - 1 ? 0.5 : 1), i = G * n, m = G * n * xe;
        F.push({
          node: O[o][s],
          dof: 0,
          k: m
        }), F.push({
          node: O[o][s],
          dof: 1,
          k: m
        }), F.push({
          node: O[o][s],
          dof: 2,
          k: i
        }), ce.push(O[o][s]);
      }
      for (let o = 0; o < be.length; o++) for (let s = 0; s < we.length; s++) {
        const n = q * S * (s === 0 || s === we.length - 1 ? 0.5 : 1) * (o === 0 || o === be.length - 1 ? 0.5 : 1), i = G * n, m = G * n * xe;
        F.push({
          node: ae[o][s],
          dof: 0,
          k: m
        }), F.push({
          node: ae[o][s],
          dof: 1,
          k: m
        }), F.push({
          node: ae[o][s],
          dof: 2,
          k: i
        }), ce.push(ae[o][s]);
      }
      const X = G * r * b * 1e-4;
      F.push({
        node: O[0][0],
        dof: 3,
        k: X
      }), F.push({
        node: O[0][0],
        dof: 4,
        k: X
      }), F.push({
        node: O[0][0],
        dof: 5,
        k: X
      }), t.nodes.val = _e.map((o) => [
        o[0],
        o[1],
        o[2]
      ]), t.elements.val = H, t.nodeInputs.val = {
        supports: Le,
        loads: k
      }, t.elementInputs.val = {
        elasticities: j,
        poissonsRatios: he,
        areas: B,
        momentsOfInertiaZ: ze,
        momentsOfInertiaY: Ee,
        torsionalConstants: Ce,
        shearModuli: U,
        thicknesses: Pe,
        densities: re,
        sectionShapes: Ne
      };
      try {
        t.deformOutputs.val = je(t.nodes.val, t.elements.val, t.nodeInputs.val, t.elementInputs.val, F);
        const o = pt(t.nodes.val, t.elements.val, t.elementInputs.val, t.deformOutputs.val), s = t.deformOutputs.rawVal.deformations, n = /* @__PURE__ */ new Map();
        t.elements.rawVal.forEach((i, m) => {
          if (i.length !== 4) return;
          const P = [];
          for (const h of i) {
            const p = s == null ? void 0 : s.get(h), x = p ? p[2] : 0;
            P.push(-G * x);
          }
          n.set(m, P);
        }), o.pressure = n, t.analyzeOutputs.val = o;
      } catch (o) {
        console.error("Solver error:", o);
      }
      const R = t.deformOutputs.rawVal.deformations;
      let W = 1e-9;
      for (const o of ce) {
        const s = R == null ? void 0 : R.get(o);
        s && Number.isFinite(s[2]) && (W = Math.max(W, Math.abs(s[2])));
      }
      const ge = new Set(ce), ve = Mt * 12, de = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, l = (o, s) => {
        const n = o ? s : 0, m = -(W * Math.max(n, 1) + Gt), P = [];
        for (const h of ce) {
          if (!ge.has(h)) continue;
          const p = t.nodes.rawVal[h];
          if (!p) continue;
          const x = p[0], _ = p[1], C = R == null ? void 0 : R.get(h), g = (ue) => Number.isFinite(ue) ? ue : 0, ke = C ? g(C[0]) : 0, Se = C ? g(C[1]) : 0, De = C ? g(C[2]) : 0, fe = x + ke * n, qe = _ + Se * n, Fe = 0 + De * n, at = Fe - m, We = (ue) => [
            x + (fe - x) * ue,
            _ + (qe - _) * ue,
            m + at * ue
          ], [lt, ct, it] = We(0), [rt, Je, Me] = We(0.05), Qe = [
            new v(lt, ct, it),
            new v(rt, Je, Me)
          ];
          for (let ue = 0; ue <= ve; ue++) {
            const dt = 0.05 + 0.9 * (ue / ve), [ft, nt, zt] = We(dt), _t = 2 * Math.PI * Mt * (ue / ve);
            Qe.push(new v(ft + xt * Math.cos(_t), nt + xt * Math.sin(_t), zt));
          }
          Qe.push(new v(fe, qe, Fe)), P.push(new Xe(new Ze().setFromPoints(Qe), Ht));
          const z = Vt, mt = [
            new v(x - z, _ - z, m),
            new v(x + z, _ - z, m),
            new v(x + z, _ + z, m),
            new v(x - z, _ + z, m),
            new v(x - z, _ - z, m)
          ];
          P.push(new Xe(new Ze().setFromPoints(mt), jt));
        }
        return P;
      }, c = Ye.v;
      de ? ut.derive(() => {
        const o = de.deformedShape.val, s = de.deformScale.val;
        Ye.v === c && (t.objects3D.val = l(o, s));
      }) : t.objects3D.val = l(true, 1);
    },
    runModal(e, t, d) {
      var _a, _b;
      const u = t.nodes.val, N = t.elements.val, f = t.nodeInputs.val, I = t.elementInputs.val;
      if (!(!u.length || !N.length || !((_a = I.densities) == null ? void 0 : _a.size))) try {
        const L = Pt(u, N, f, I, 12);
        d.render(L, {
          title: `Zapata + Viga amarre Lv=${e.Lv}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  Viga ${e.Bv}\xD7${e.Hv}m`
          ]
        }), console.log(`[Zapata+Viga Modal] f\u2081=${(_b = L.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (L) {
        console.warn("Modal zapata-viga error:", L.message);
      }
    }
  };
  Re = 25e6;
  Ge = 0.2;
  Zt = Re / (2 * (1 + Ge));
  bt = 24;
  Te = 9.80665;
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
  vt = 0.035;
  kt = 8;
  Ut = new Ue({
    color: 16711731,
    linewidth: 2
  });
  Kt = new Ue({
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
        compute: (e) => ((e.q_adm ?? 20) * Te * (e.ks_factor ?? 10.5)).toFixed(0)
      },
      {
        after: "tz",
        label: "D flexural (kN\xB7m)",
        compute: (e) => {
          const t = e.tz ?? 0.15;
          return (Re * t ** 3 / (12 * (1 - Ge ** 2))).toFixed(1);
        }
      },
      {
        after: "ks",
        label: "k_r Biot",
        compute: (e) => {
          const t = e.tz ?? 0.15, d = e.Lz ?? 2.5, u = e.ks ?? 2059, f = Re * t ** 3 / (12 * (1 - Ge ** 2)) / (u * d ** 4);
          return f.toFixed(3) + (f < 1 ? " FLEX" : " R\xCDG");
        }
      }
    ],
    computedLabels(e, t) {
      var _a;
      const d = (e.q_adm ?? 20) * Te, u = e.ks ?? d * (e.ks_factor ?? 10.5), N = e.tz ?? 0.15, f = e.Lz ?? 2.5, I = Re * N ** 3 / (12 * (1 - Ge ** 2)), L = I / (u * f ** 4), $ = (e.useSimple ?? 0) >= 0.5, ne = (e.useD ?? 0) >= 0.5, y = (e.useL ?? 0) >= 0.5, J = (e.useS ?? 0) >= 0.5, Z = (e.useFactors ?? 1) >= 0.5, pe = Z ? e.fD ?? 1.2 : 1, G = Z ? e.fL ?? 1.6 : 1, A = Z ? e.fS ?? 0 : 1, T = ne ? 1 : 0, E = y ? 1 : 0, w = J ? 1 : 0;
      let M = 0;
      $ ? M = e.P_simple ?? 0 : M = T * pe * (e.P_D ?? 0) + E * G * (e.P_L ?? 0) + w * A * (e.P_S ?? 0);
      const D = [];
      $ ? D.push("Simple") : (ne && D.push("D"), y && D.push("L"), J && D.push("S"), D.length || D.push("NINGUNO"));
      const Q = D.join("+") + (Z && !$ ? " (factor)" : "");
      let ee = 0, te = 0;
      const se = (_a = t.analyzeOutputs.rawVal) == null ? void 0 : _a.pressure;
      if (se && se.size) {
        for (const Y of se.values()) for (const V of Y) V < ee && (ee = V), (V < te || te === 0) && (te = V);
        let K = 1 / 0;
        for (const Y of se.values()) for (const V of Y) Math.abs(V) < K && (K = Math.abs(V));
        te = -K;
      }
      const ie = Math.abs(ee) / (e.q_adm || 1);
      return {
        "Patrones activos": Q,
        "ks (kN/m\xB3)": u.toFixed(0),
        "D (kN\xB7m)": I.toFixed(1),
        "k_r (Biot)": L.toFixed(3) + (L < 1 ? " FLEXIBLE" : " R\xCDGIDA"),
        "P total (tonf)": M.toFixed(2),
        "q_max (tonf/m\xB2)": ee.toFixed(2),
        "q_min (tonf/m\xB2)": te.toFixed(2),
        "q/q_adm": ie.toFixed(2) + (ie > 1 ? " \u26A0" : " \u2713")
      };
    },
    onParamChange(e, t) {
      if (e === "soilType") {
        const d = Math.round(t.soilType ?? 0);
        if (d >= 0) {
          const u = gt[d];
          t.q_adm = u.q_adm, t.ks_factor = u.ks_factor, t.su = u.su, t.phi = u.phi, t.gamma = u.gamma, t.N_SPT = u.N_SPT, t.E_soil = u.E_soil, t.ks = u.q_adm * Te * u.ks_factor;
        }
      }
      if (e === "combo") {
        const d = Math.round(t.combo ?? 0), u = [
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
        d >= 0 && d < u.length && ([t.fD, t.fL, t.fS] = u[d]);
      }
    },
    build(e, t) {
      var _a;
      const { Lz: d, Bz: u, tz: N, bc: f, Hp: I } = e, L = e.q_adm, $ = e.ks_factor, ne = L * Te, y = e.ks ?? ne * $, J = (e.useSimple ?? 0) >= 0.5, Z = (e.useD ?? 0) >= 0.5, pe = (e.useL ?? 0) >= 0.5, G = (e.useS ?? 0) >= 0.5, A = (e.useFactors ?? 1) >= 0.5, T = A ? e.fD ?? 1.2 : 1, E = A ? e.fL ?? 1.6 : 1, w = A ? e.fS ?? 0 : 1, M = Z ? 1 : 0, D = pe ? 1 : 0, Q = G ? 1 : 0, ee = T, te = E, se = w;
      let ie = 0, K = 0, Y = 0;
      J ? (ie = e.P_simple ?? 0, K = e.Mx_simple ?? 0, Y = e.My_simple ?? 0) : (ie = M * T * (e.P_D ?? 0) + D * E * (e.P_L ?? 0) + Q * w * (e.P_S ?? 0), K = M * T * (e.Mx_D ?? 0) + D * E * (e.Mx_L ?? 0) + Q * w * (e.Mx_S ?? 0), Y = M * T * (e.My_D ?? 0) + D * E * (e.My_L ?? 0) + Q * w * (e.My_S ?? 0));
      const V = ie * Te, we = K * Te, be = Y * Te, _e = Math.round(e.nSub), H = d / 2, Le = u / 2, k = [], j = [];
      for (let l = 0; l <= _e; l++) k.push(d * l / _e), j.push(u * l / _e);
      k.includes(H) || (k.push(H), k.sort((l, c) => l - c)), j.includes(Le) || (j.push(Le), j.sort((l, c) => l - c));
      const he = [], B = [], Pe = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), $e = (l, c, o) => {
        const s = `${l.toFixed(4)},${c.toFixed(4)},${o.toFixed(4)}`;
        if (ae.has(s)) return ae.get(s);
        const n = he.length;
        return he.push([
          l,
          c,
          o
        ]), ae.set(s, n), n;
      }, oe = [];
      for (let l = 0; l < j.length; l++) {
        const c = [];
        for (let o = 0; o < k.length; o++) c.push($e(k[o], j[l], 0));
        oe.push(c);
      }
      for (let l = 0; l < j.length - 1; l++) for (let c = 0; c < k.length - 1; c++) {
        const o = B.length;
        B.push([
          oe[l][c],
          oe[l][c + 1],
          oe[l + 1][c + 1],
          oe[l + 1][c]
        ]), Ce.set(o, N), Pe.set(o, Re), ze.set(o, Ge), me.set(o, bt);
      }
      const ot = $e(H, Le, 0), Ie = $e(H, Le, I), le = B.length;
      B.push([
        ot,
        Ie
      ]), Pe.set(le, Re), ze.set(le, Ge), ye.set(le, Zt), Ee.set(le, f * f), U.set(le, f ** 4 / 12), re.set(le, f ** 4 / 12), Ne.set(le, 0.14 * f ** 4), me.set(le, bt), O.set(le, {
        type: "rect",
        b: f,
        h: f
      });
      const Ae = /* @__PURE__ */ new Map();
      Ae.set(Ie, [
        0,
        0,
        -V,
        we,
        be,
        0
      ]);
      const a = d / _e, r = u / _e, b = 0.5, q = [], S = [];
      for (let l = 0; l < j.length; l++) for (let c = 0; c < k.length; c++) {
        const o = a * r * (c === 0 || c === k.length - 1 ? 0.5 : 1) * (l === 0 || l === j.length - 1 ? 0.5 : 1), s = y * o, n = y * o * b;
        q.push({
          node: oe[l][c],
          dof: 0,
          k: n
        }), q.push({
          node: oe[l][c],
          dof: 1,
          k: n
        }), q.push({
          node: oe[l][c],
          dof: 2,
          k: s
        }), S.push(oe[l][c]);
      }
      const xe = y * a * r * 1e-4, F = oe[0][0];
      q.push({
        node: F,
        dof: 3,
        k: xe
      }), q.push({
        node: F,
        dof: 4,
        k: xe
      }), q.push({
        node: F,
        dof: 5,
        k: xe
      }), t.nodes.val = he.map((l) => [
        l[0],
        l[1],
        l[2]
      ]), t.elements.val = B, t.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: Ae
      }, t.elementInputs.val = {
        elasticities: Pe,
        poissonsRatios: ze,
        areas: Ee,
        momentsOfInertiaZ: U,
        momentsOfInertiaY: re,
        torsionalConstants: Ne,
        shearModuli: ye,
        thicknesses: Ce,
        densities: me,
        sectionShapes: O
      };
      try {
        t.deformOutputs.val = je(t.nodes.val, t.elements.val, t.nodeInputs.val, t.elementInputs.val, q);
        const l = pt(t.nodes.val, t.elements.val, t.elementInputs.val, t.deformOutputs.val), c = t.deformOutputs.rawVal.deformations, o = /* @__PURE__ */ new Map();
        let s = 0;
        t.elements.rawVal.forEach((_, C) => {
          if (_.length !== 4) return;
          const g = [];
          for (const ke of _) {
            const Se = c == null ? void 0 : c.get(ke), fe = y * (Se ? Se[2] : 0) / Te;
            g.push(fe), fe < s && (s = fe);
          }
          o.set(C, g);
        }), l.pressure = o, t.analyzeOutputs.val = l;
        const n = Math.abs(s);
        let i = 1 / 0;
        o.forEach((_) => {
          for (const C of _) {
            const g = Math.abs(C);
            g < i && (i = g);
          }
        }), Number.isFinite(i) || (i = 0);
        const m = n / e.q_adm, h = Re * N ** 3 / (12 * (1 - Ge ** 2)) / (y * d ** 4), p = [];
        J ? p.push("Simple") : (Z && p.push(`D${A ? "\xD7" + ee : ""}`), pe && p.push(`L${A ? "\xD7" + te : ""}`), G && p.push(`S${A ? "\xD7" + se : ""}`), p.length || p.push("\u26A0 NINGUNO activo"));
        const x = p.join(" + ");
        console.log(`[Zapata Aislada]  Patrones activos: ${x}
  Cargas totales: P=${ie.toFixed(2)} tonf, Mx=${K.toFixed(2)} tonf\xB7m, My=${Y.toFixed(2)} tonf\xB7m
  Patrones: D(${e.P_D}, ${e.Mx_D}, ${e.My_D}) L(${e.P_L}, ${e.Mx_L}, ${e.My_L}) S(${e.P_S}, ${e.Mx_S}, ${e.My_S})
  q_max (centro) = -${n.toFixed(2)} tonf/m\xB2
  q_min (bordes) = -${i.toFixed(2)} tonf/m\xB2
  variaci\xF3n = ${((1 - i / (n || 1)) * 100).toFixed(1)}%
  q_adm = -${e.q_adm} tonf/m\xB2 | ratio q_max/q_adm = ${m.toFixed(2)}` + (m > 1 ? " \u26A0 SOBREPASA" : " \u2713 OK") + `
  k_r\xEDgidez = ${h.toFixed(2)} (${h < 1 ? "FLEXIBLE" : "R\xCDGIDA"} \u2014 flexible muestra concentraci\xF3n, r\xEDgida uniforme)`);
      } catch (l) {
        console.error("Solver error zapata aislada:", l);
      }
      const ce = t.deformOutputs.rawVal.deformations;
      let X = 1e-9;
      for (const l of S) {
        const c = ce == null ? void 0 : ce.get(l);
        c && Number.isFinite(c[2]) && (X = Math.max(X, Math.abs(c[2])));
      }
      const W = kt * 12, ge = new Set(S), ve = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, Be = (l, c) => {
        const o = l ? c : 0, n = -(X * Math.max(o, 1) + Yt), i = [];
        for (const m of S) {
          if (!ge.has(m)) continue;
          const P = t.nodes.rawVal[m];
          if (!P) continue;
          const h = P[0], p = P[1], x = ce == null ? void 0 : ce.get(m), _ = (z) => Number.isFinite(z) ? z : 0, C = x ? _(x[0]) : 0, g = x ? _(x[1]) : 0, ke = x ? _(x[2]) : 0, Se = h + C * o, De = p + g * o, fe = 0 + ke * o, qe = fe - n, Fe = (z) => [
            h + (Se - h) * z,
            p + (De - p) * z,
            n + qe * z
          ], [at, We, lt] = Fe(0), [ct, it, rt] = Fe(0.05), Je = [
            new v(at, We, lt),
            new v(ct, it, rt)
          ];
          for (let z = 0; z <= W; z++) {
            const mt = 0.05 + 0.9 * (z / W), [ue, dt, ft] = Fe(mt), nt = 2 * Math.PI * kt * (z / W);
            Je.push(new v(ue + vt * Math.cos(nt), dt + vt * Math.sin(nt), ft));
          }
          Je.push(new v(Se, De, fe)), i.push(new Xe(new Ze().setFromPoints(Je), Ut));
          const Me = Wt, Qe = [
            new v(h - Me, p - Me, n),
            new v(h + Me, p - Me, n),
            new v(h + Me, p + Me, n),
            new v(h - Me, p + Me, n),
            new v(h - Me, p - Me, n)
          ];
          i.push(new Xe(new Ze().setFromPoints(Qe), Kt));
        }
        return i;
      }, de = Ye.v;
      ve ? ut.derive(() => {
        const l = ve.deformedShape.val, c = ve.deformScale.val;
        Ye.v === de && (t.objects3D.val = Be(l, c));
      }) : t.objects3D.val = Be(true, 1);
    },
    runModal(e, t, d) {
      var _a, _b;
      const u = t.nodes.val, N = t.elements.val, f = t.nodeInputs.val, I = t.elementInputs.val;
      if (!(!u.length || !N.length || !((_a = I.densities) == null ? void 0 : _a.size))) try {
        const L = Pt(u, N, f, I, 12);
        d.render(L, {
          title: `Zapata Aislada ${e.Lz}\xD7${e.Bz}m t=${e.tz}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  col=${e.bc}m  Hp=${e.Hp}m`
          ]
        }), console.log(`[Zapata Modal] f\u2081=${(_b = L.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (L) {
        console.warn("Modal zapata error:", L.message);
      }
    }
  };
  Ve = 228e5;
  He = 0.2;
  Qt = Ve / (2 * (1 + He));
  St = 24;
  Oe = 9.80665;
  eo = 0.2;
  wt = 0.035;
  Lt = 8;
  to = new Ue({
    color: 16711731,
    linewidth: 2
  });
  oo = new Ue({
    color: 52224,
    linewidth: 2
  });
  no = 0.04;
  so = {
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
        compute: (e) => ((e.q_adm ?? 10) * Oe * (e.ks_factor ?? 10.5)).toFixed(0)
      },
      {
        after: "tz",
        label: "D flexural (kN\xB7m)",
        compute: (e) => {
          const t = e.tz ?? 0.3;
          return (Ve * t ** 3 / (12 * (1 - He ** 2))).toFixed(1);
        }
      },
      {
        after: "ks",
        label: "k_r Biot",
        compute: (e) => {
          const t = e.tz ?? 0.3, d = e.Lz ?? 1.5, u = e.ks ?? 1030, f = Ve * t ** 3 / (12 * (1 - He ** 2)) / (u * d ** 4);
          return f.toFixed(3) + (f < 1 ? " FLEX" : " RIGID");
        }
      }
    ],
    computedLabels(e, t) {
      var _a;
      const d = e.q_adm ?? 10, u = e.ks_factor ?? 10.5, N = d * Oe, f = e.ks ?? N * u, I = e.tz ?? 0.3, L = e.Lz ?? 1.5, $ = Ve * I ** 3 / (12 * (1 - He ** 2)), ne = $ / (f * L ** 4), y = e.P_simple ?? 0;
      let J = 0, Z = 0, pe = false;
      const G = (_a = t.analyzeOutputs.rawVal) == null ? void 0 : _a.pressure;
      if (G && G.size) for (const w of G.values()) for (const M of w) pe || (J = Z = M, pe = true), M < J && (J = M), M > Z && (Z = M);
      const A = Math.abs(J), T = Math.abs(Z), E = A / (d || 1);
      return {
        Mode: "Direct P/Mx/My",
        "ks (kN/m\xB3)": f.toFixed(0),
        "D (kN\xB7m)": $.toFixed(1),
        "k_r (Biot)": ne.toFixed(3) + (ne < 1 ? " FLEXIBLE" : " RIGID"),
        "P (tonf)": y.toFixed(2),
        "Mx (tonf\xB7m)": (e.Mx_simple ?? 0).toFixed(2),
        "My (tonf\xB7m)": (e.My_simple ?? 0).toFixed(2),
        "\u03C3_max comp (tonf/m\xB2)": A.toFixed(2),
        "\u03C3_min comp (tonf/m\xB2)": T.toFixed(2),
        "q_adm (tonf/m\xB2)": d.toFixed(2),
        "\u03C3/q_adm": E.toFixed(2) + (E > 1 ? " \u26A0" : " \u2713")
      };
    },
    build(e, t) {
      var _a;
      const { Lz: d, Bz: u, tz: N, bc: f, Hp: I } = e, L = e.q_adm * Oe, $ = e.ks ?? L * e.ks_factor, ne = e.P_simple ?? 0, y = e.Mx_simple ?? 0, J = e.My_simple ?? 0, Z = ne * Oe, pe = y * Oe, G = J * Oe, A = Math.round(e.nSub), T = d / 2, E = u / 2, w = [], M = [];
      for (let a = 0; a <= A; a++) w.push(d * a / A), M.push(u * a / A);
      w.includes(T) || (w.push(T), w.sort((a, r) => a - r)), M.includes(E) || (M.push(E), M.sort((a, r) => a - r));
      const D = [], Q = [], ee = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), Le = (a, r, b) => {
        const q = `${a.toFixed(4)},${r.toFixed(4)},${b.toFixed(4)}`;
        if (H.has(q)) return H.get(q);
        const S = D.length;
        return D.push([
          a,
          r,
          b
        ]), H.set(q, S), S;
      }, k = [];
      for (let a = 0; a < M.length; a++) {
        const r = [];
        for (let b = 0; b < w.length; b++) r.push(Le(w[b], M[a], 0));
        k.push(r);
      }
      for (let a = 0; a < M.length - 1; a++) for (let r = 0; r < w.length - 1; r++) {
        const b = Q.length;
        Q.push([
          k[a][r],
          k[a][r + 1],
          k[a + 1][r + 1],
          k[a + 1][r]
        ]), ie.set(b, N), ee.set(b, Ve), te.set(b, He), be.set(b, St);
      }
      const j = Le(T, E, 0), he = Le(T, E, I), B = Q.length;
      Q.push([
        j,
        he
      ]), ee.set(B, Ve), te.set(B, He), we.set(B, Qt), se.set(B, f * f), K.set(B, f ** 4 / 12), Y.set(B, f ** 4 / 12), V.set(B, 0.14 * f ** 4), be.set(B, St), _e.set(B, {
        type: "rect",
        b: f,
        h: f
      });
      const Pe = /* @__PURE__ */ new Map();
      Pe.set(he, [
        0,
        0,
        -Z,
        pe,
        G,
        0
      ]);
      const ze = d / A, Ee = u / A, Ce = 0.5, U = [], re = [];
      for (let a = 0; a < M.length; a++) for (let r = 0; r < w.length; r++) {
        const b = ze * Ee * (r === 0 || r === w.length - 1 ? 0.5 : 1) * (a === 0 || a === M.length - 1 ? 0.5 : 1), q = $ * b, S = $ * b * Ce;
        U.push({
          node: k[a][r],
          dof: 0,
          k: S
        }), U.push({
          node: k[a][r],
          dof: 1,
          k: S
        }), U.push({
          node: k[a][r],
          dof: 2,
          k: q
        }), re.push(k[a][r]);
      }
      const Ne = $ * ze * Ee * 1e-4, ye = k[0][0];
      U.push({
        node: ye,
        dof: 3,
        k: Ne
      }), U.push({
        node: ye,
        dof: 4,
        k: Ne
      }), U.push({
        node: ye,
        dof: 5,
        k: Ne
      }), t.nodes.val = D.map((a) => [
        a[0],
        a[1],
        a[2]
      ]), t.elements.val = Q, t.nodeInputs.val = {
        supports: /* @__PURE__ */ new Map(),
        loads: Pe
      }, t.elementInputs.val = {
        elasticities: ee,
        poissonsRatios: te,
        areas: se,
        momentsOfInertiaZ: K,
        momentsOfInertiaY: Y,
        torsionalConstants: V,
        shearModuli: we,
        thicknesses: ie,
        densities: be,
        sectionShapes: _e
      };
      try {
        t.deformOutputs.val = je(t.nodes.val, t.elements.val, t.nodeInputs.val, t.elementInputs.val, U);
        const a = pt(t.nodes.val, t.elements.val, t.elementInputs.val, t.deformOutputs.val), r = t.deformOutputs.rawVal.deformations, b = (n) => {
          const i = /* @__PURE__ */ new Map();
          return t.elements.rawVal.forEach((m, P) => {
            if (m.length !== 4) return;
            const h = [];
            for (const p of m) {
              const x = n == null ? void 0 : n.get(p), _ = $ * (x ? x[2] : 0);
              h.push(_ / Oe);
            }
            i.set(P, h);
          }), i;
        }, q = b(r);
        let S = 0;
        q.forEach((n) => {
          for (const i of n) i < S && (S = i);
        }), a.pressure = q;
        const xe = T - f / 2, F = T + f / 2, ce = E - f / 2, X = E + f / 2, R = [];
        for (let n = 0; n < M.length; n++) for (let i = 0; i < w.length; i++) w[i] >= xe - 1e-9 && w[i] <= F + 1e-9 && M[n] >= ce - 1e-9 && M[n] <= X + 1e-9 && R.push(k[n][i]);
        R.length === 0 && R.push(j);
        const W = R.length, ge = (n, i, m) => {
          const P = /* @__PURE__ */ new Map(), h = n ? -Z / W : 0;
          for (const p of R) {
            const x = t.nodes.rawVal[p], _ = x[0] - T, C = x[1] - E;
            let g = 0, ke = 0;
            for (const qe of R) {
              const Fe = t.nodes.rawVal[qe];
              g += (Fe[1] - E) ** 2, ke += (Fe[0] - T) ** 2;
            }
            const Se = i && g > 1e-12 ? pe * C / g : 0, De = m && ke > 1e-12 ? -G * _ / ke : 0, fe = h + Se + De;
            P.set(p, [
              0,
              0,
              fe,
              0,
              0,
              0
            ]);
          }
          return P;
        }, Ke = {
          supports: /* @__PURE__ */ new Map(),
          loads: ge(true, false, false)
        }, ve = {
          supports: /* @__PURE__ */ new Map(),
          loads: ge(false, true, false)
        }, Be = {
          supports: /* @__PURE__ */ new Map(),
          loads: ge(false, false, true)
        };
        try {
          const n = je(t.nodes.val, t.elements.val, Ke, t.elementInputs.val, U);
          a.pressure_P = b(n.deformations), a.deform_P = n.deformations;
        } catch {
        }
        try {
          const n = je(t.nodes.val, t.elements.val, ve, t.elementInputs.val, U);
          a.pressure_Mx = b(n.deformations), a.deform_Mx = n.deformations;
        } catch {
        }
        try {
          const n = je(t.nodes.val, t.elements.val, Be, t.elementInputs.val, U);
          a.pressure_My = b(n.deformations), a.deform_My = n.deformations;
        } catch {
        }
        t.analyzeOutputs.val = a;
        const de = Math.abs(S);
        let l = 1 / 0;
        q.forEach((n) => {
          for (const i of n) {
            const m = Math.abs(i);
            m < l && (l = m);
          }
        }), Number.isFinite(l) || (l = 0);
        const c = de / e.q_adm, o = Ve * N ** 3 / (12 * (1 - He ** 2)), s = o / ($ * d ** 4);
        console.log(`[Zapata VALIDACI\xD3N \u2014 espejo Calcpad]
  Cargas: P=${ne.toFixed(2)} tonf, Mx=${y.toFixed(2)} tonf\xB7m, My=${J.toFixed(2)} tonf\xB7m
  \u2500\u2500\u2500 Valores derivados (comparar con Calcpad) \u2500\u2500\u2500
  D flexural = ${o.toFixed(1)} kN\xB7m   (Calcpad: idem)
  ks         = ${$.toFixed(0)} kN/m\xB3      (Calcpad: idem)
  k_r Biot   = ${s.toFixed(3)} ${s < 1 ? "FLEXIBLE" : "R\xCDGIDA"}
  \u2500\u2500\u2500 Resultados FEM Hekatan \u2500\u2500\u2500
  q_max (centro) = -${de.toFixed(2)} tonf/m\xB2
  q_min (bordes) = -${l.toFixed(2)} tonf/m\xB2
  variaci\xF3n = ${((1 - l / (de || 1)) * 100).toFixed(1)}%
  ratio q/q_adm = ${c.toFixed(3)} ${c > 1 ? "\u26A0 SOBREPASA" : "\u2713 OK"}
  FS = ${(e.q_adm / (de || 1)).toFixed(3)}`);
      } catch (a) {
        console.error("Solver error zapata validaci\xF3n:", a);
      }
      const me = t.deformOutputs.rawVal.deformations;
      let O = 1e-9;
      for (const a of re) {
        const r = me == null ? void 0 : me.get(a);
        r && Number.isFinite(r[2]) && (O = Math.max(O, Math.abs(r[2])));
      }
      const $e = Lt * 12, oe = new Set(re), Ie = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, le = (a, r) => {
        const b = a ? r : 0, S = -(O * Math.max(b, 1) + eo), xe = [];
        for (const F of re) {
          if (!oe.has(F)) continue;
          const ce = t.nodes.rawVal[F];
          if (!ce) continue;
          const X = ce[0], R = ce[1], W = me == null ? void 0 : me.get(F), ge = (g) => Number.isFinite(g) ? g : 0, Ke = W ? ge(W[0]) : 0, ve = W ? ge(W[1]) : 0, Be = W ? ge(W[2]) : 0, de = X + Ke * b, l = R + ve * b, c = 0 + Be * b, o = c - S, s = (g) => [
            X + (de - X) * g,
            R + (l - R) * g,
            S + o * g
          ], [n, i, m] = s(0), [P, h, p] = s(0.05), x = [
            new v(n, i, m),
            new v(P, h, p)
          ];
          for (let g = 0; g <= $e; g++) {
            const ke = 0.05 + 0.9 * (g / $e), [Se, De, fe] = s(ke), qe = 2 * Math.PI * Lt * (g / $e);
            x.push(new v(Se + wt * Math.cos(qe), De + wt * Math.sin(qe), fe));
          }
          x.push(new v(de, l, c)), xe.push(new Xe(new Ze().setFromPoints(x), to));
          const _ = no, C = [
            new v(X - _, R - _, S),
            new v(X + _, R - _, S),
            new v(X + _, R + _, S),
            new v(X - _, R + _, S),
            new v(X - _, R - _, S)
          ];
          xe.push(new Xe(new Ze().setFromPoints(C), oo));
        }
        return xe;
      }, Ae = Ye.v;
      Ie ? ut.derive(() => {
        const a = Ie.deformedShape.val, r = Ie.deformScale.val;
        Ye.v === Ae && (t.objects3D.val = le(a, r));
      }) : t.objects3D.val = le(true, 1);
    }
  };
  Ye = {
    v: 0
  };
  wo = [
    so,
    Nt,
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
  Ye as a,
  Jt as b,
  so as c,
  wo as e,
  Xt as z
};
