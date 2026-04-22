function Y(a, i, t) {
  switch (a) {
    case "zapata-aislada-validacion":
    case "zapata-aislada":
      return V(i, t);
    case "plate-thick":
    case "plate-thick-validacion":
      return Z(i, t);
    case "plate-thin":
      return H();
    case "membrana-pstress":
      return Q();
    default:
      return [{ title: "Report not available", html: `<p>The step-by-step mathematical report for example
               <code>${a}</code> is not yet implemented.</p>
               <p>Supported: <b>zapata-aislada-validacion</b>,
               <b>plate-thick</b>, <b>plate-thin</b>, <b>membrana-pstress</b>.</p>` }];
  }
}
function P(a) {
  const i = Math.max(0, Math.min(1, a));
  let t = 0, e = 0, r = 0;
  i < 0.25 ? (t = 0, e = 4 * i, r = 1) : i < 0.5 ? (t = 0, e = 1, r = 1 - 4 * (i - 0.25)) : i < 0.75 ? (t = 4 * (i - 0.5), e = 1, r = 0) : (t = 1, e = 1 - 4 * (i - 0.75), r = 0);
  const p = (m) => Math.round(255 * m).toString(16).padStart(2, "0");
  return `#${p(t)}${p(e)}${p(r)}`;
}
function N(a, i, t, e, r, p, m, d = 420, $ = 280) {
  if (!a.length) return `<p><i>No data for "${p}"</i></p>`;
  const c = Math.min(...a.map((g) => g.v)), o = Math.max(...a.map((g) => g.v)), u = o - c || 1, n = 30, f = (d - 2 * n) / i, _ = ($ - 2 * n - 30) / t, b = Math.min(f, _), s = i * b, h = t * b, x = e, y = r, M = s / x, v = h / y;
  let E = "";
  for (let g = 0; g < y; g++) for (let z = 0; z < x; z++) {
    const O = (z + 0.5) / x * i, X = (g + 0.5) / y * t;
    let B = 0, L = 0;
    for (const T of a) {
      const S = (T.x - O) ** 2 + (T.y - X) ** 2;
      if (S < 1e-10) {
        L = T.v, B = 1;
        break;
      }
      const C = 1 / S;
      B += C, L += C * T.v;
    }
    const G = (L / B - c) / u, I = n + z * M, A = n + (y - 1 - g) * v;
    E += `<rect x="${I.toFixed(1)}" y="${A.toFixed(1)}" width="${(M + 0.3).toFixed(1)}" height="${(v + 0.3).toFixed(1)}" fill="${P(G)}"/>`;
  }
  const F = n + s + 10, w = h;
  let l = "";
  const q = 60;
  for (let g = 0; g < q; g++) {
    const z = 1 - g / (q - 1);
    l += `<rect x="${F}" y="${n + g * w / q}" width="14" height="${(w / q + 0.5).toFixed(1)}" fill="${P(z)}"/>`;
  }
  [`<text x="${F + 18}" y="${n + 8}" font-size="10" fill="#ddd">${o.toFixed(2)}</text>`, `<text x="${F + 18}" y="${n + w / 2 + 3}" font-size="10" fill="#ddd">${((c + o) / 2).toFixed(2)}</text>`, `<text x="${F + 18}" y="${n + w - 2}" font-size="10" fill="#ddd">${c.toFixed(2)}</text>`, `<text x="${F + 18}" y="${n + w + 14}" font-size="9" fill="#999" font-style="italic">${m}</text>`].join("");
  const W = `
    <text x="${n + s / 2}" y="${n + h + 20}" font-size="11" text-anchor="middle" fill="#ddd">x (m)</text>
    <text x="${n - 18}" y="${n + h / 2}" font-size="11" text-anchor="middle" fill="#ddd" transform="rotate(-90 ${n - 18} ${n + h / 2})">y (m)</text>
    <text x="${n}" y="${n - 8}" font-size="11" fill="#d4af37" font-weight="bold">${p}</text>
  `;
  return `<svg width="${d}" height="${$}" style="background:#111;border:1px solid #333;border-radius:4px;">
    ${E}
    <rect x="${n}" y="${n}" width="${s}" height="${h}" fill="none" stroke="#666" stroke-width="1"/>
    ${l}
    ${W}
  </svg>`;
}
function D(a, i, t, e, r, p = 420, m = 180) {
  if (!a.length) return "";
  const d = Math.max(...t === "x" ? a.map((l) => l.y) : a.map((l) => l.x)), $ = d / 2, c = d * 0.15, o = a.filter((l) => t === "x" ? Math.abs(l.y - $) < c : Math.abs(l.x - $) < c).map((l) => ({ p: t === "x" ? l.x : l.y, v: l.v })).sort((l, q) => l.p - q.p);
  if (o.length < 2) return "";
  const u = Math.min(...o.map((l) => l.v)), n = Math.max(...o.map((l) => l.v)), f = Math.min(0, u), _ = Math.max(0, n), b = _ - f || 1, s = 40, h = p - 2 * s, x = m - 2 * s - 10, y = (l) => s + l / i * h, M = (l) => s + x - (l - f) / b * x, v = M(0);
  let E = `${y(o[0].p).toFixed(1)},${v.toFixed(1)} `;
  o.forEach((l) => E += `${y(l.p).toFixed(1)},${M(l.v).toFixed(1)} `), E += `${y(o[o.length - 1].p).toFixed(1)},${v.toFixed(1)}`;
  const F = `
    <text x="${s + h / 2}" y="${s + x + 22}" font-size="11" text-anchor="middle" fill="#ddd">${t === "x" ? "x" : "y"} (m) \u2014 cross-section at ${t === "x" ? "y" : "x"} = ${$.toFixed(2)}</text>
    <text x="${s - 28}" y="${s + x / 2}" font-size="10" text-anchor="middle" fill="#ddd" transform="rotate(-90 ${s - 28} ${s + x / 2})">${r}</text>
    <text x="${s}" y="${s - 10}" font-size="11" fill="#d4af37" font-weight="bold">${e}</text>
    <line x1="${s}" y1="${s + x}" x2="${s + h}" y2="${s + x}" stroke="#666" stroke-width="1"/>
    <line x1="${s}" y1="${s}" x2="${s}" y2="${s + x}" stroke="#666" stroke-width="1"/>
    <line x1="${s}" y1="${v.toFixed(1)}" x2="${s + h}" y2="${v.toFixed(1)}" stroke="#888" stroke-width="1" stroke-dasharray="3,3"/>
    <text x="${s + h + 3}" y="${(v + 3).toFixed(1)}" font-size="9" fill="#aaa">0 (undeformed)</text>
    <text x="${s - 5}" y="${s + 5}" font-size="10" text-anchor="end" fill="#aaa">${_.toFixed(2)}</text>
    <text x="${s - 5}" y="${s + x + 3}" font-size="10" text-anchor="end" fill="#aaa">${f.toFixed(2)}</text>
  `, w = u < 0 ? "#e74c3c" : "#3498db";
  return `<svg width="${p}" height="${m}" style="background:#111;border:1px solid #333;border-radius:4px;">
    <polygon points="${E}" fill="${w}" fill-opacity="0.35" stroke="${w}" stroke-width="2"/>
    ${o.map((l) => `<circle cx="${y(l.p).toFixed(1)}" cy="${M(l.v).toFixed(1)}" r="2.5" fill="#f39c12"/>`).join("")}
    ${F}
  </svg>`;
}
function j(a, i) {
  var _a, _b, _c, _d;
  const t = (_b = (_a = i == null ? void 0 : i.analyzeOutputs) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.pressure, e = (_c = i == null ? void 0 : i.nodes) == null ? void 0 : _c.rawVal, r = (_d = i == null ? void 0 : i.elements) == null ? void 0 : _d.rawVal;
  if (!t || !e || !r) return [];
  const p = /* @__PURE__ */ new Map();
  r.forEach((d, $) => {
    if (d.length !== 4) return;
    const c = t.get($);
    c && d.forEach((o, u) => {
      const n = p.get(o) || { sum: 0, count: 0 };
      n.sum += Math.abs(c[u] ?? 0), n.count += 1, p.set(o, n);
    });
  });
  const m = [];
  return p.forEach((d, $) => {
    const c = e[$];
    c && m.push({ x: c[0], y: c[1], v: d.count > 0 ? d.sum / d.count : 0 });
  }), m;
}
function K(a, i) {
  var _a, _b, _c;
  const t = (_b = (_a = i == null ? void 0 : i.deformOutputs) == null ? void 0 : _a.rawVal) == null ? void 0 : _b.deformations, e = (_c = i == null ? void 0 : i.nodes) == null ? void 0 : _c.rawVal;
  if (!t || !e) return [];
  const r = [];
  return t.forEach((p, m) => {
    const d = e[m];
    !d || d[2] !== 0 || r.push({ x: d[0], y: d[1], v: 1e3 * (p[2] ?? 0) });
  }), r;
}
function V(a, i) {
  const t = a.Lz ?? 1.5, e = a.Bz ?? 1.5, r = a.tz ?? 0.3, p = a.bc ?? 0.4, m = a.q_adm ?? 10, d = a.ks_factor ?? 10.5, $ = a.ks ?? 1030, c = a.P_simple ?? 20, o = a.Mx_simple ?? 0.5, u = a.My_simple ?? -0.5, n = 22800, f = 0.2, _ = n * 1e3 * Math.pow(r, 3) / (12 * (1 - f * f)), b = _ / ($ * Math.pow(t, 4)), s = b > 1 ? "RIGID" : "FLEXIBLE";
  return [{ title: "1. Theory \u2014 Thick plate (Mindlin-Reissner) on Winkler foundation", html: `
<p>The isolated footing is modelled as a <b>Mindlin-Reissner plate</b>
(Shell Thick) resting on a <b>Winkler foundation</b> (bed of independent
linear springs).</p>

<p>Unlike Kirchhoff-Love (thin plate), Mindlin admits <b>transverse shear</b>
deformation \u2014 valid for <span class="math">$t/L \\geq 0.05$</span>. In our footing:</p>

<p class="math">$$\\frac{t}{L} = \\frac{${r.toFixed(2)}}{${t.toFixed(2)}} = ${(r / t).toFixed(3)} \\geq 0.05 \\Rightarrow \\text{Mindlin OK}$$</p>

<p>Each node has <b>3 DOFs</b>: <span class="math">$w$</span> (vertical deflection),
<span class="math">$\\theta_x$</span> (rotation about X),
<span class="math">$\\theta_y$</span> (rotation about Y).</p>
      ` }, { title: "2. Geometry and material", html: `
<table class="data-tbl">
<tr><th>Parameter</th><th>Symbol</th><th>Value</th><th>Unit</th></tr>
<tr><td>Length X</td><td class="math">$L_z$</td><td>${t.toFixed(2)}</td><td>m</td></tr>
<tr><td>Length Y</td><td class="math">$B_z$</td><td>${e.toFixed(2)}</td><td>m</td></tr>
<tr><td>Thickness</td><td class="math">$t$</td><td>${r.toFixed(2)}</td><td>m</td></tr>
<tr><td>Column side</td><td class="math">$b_c$</td><td>${p.toFixed(2)}</td><td>m</td></tr>
<tr><td>Elastic modulus</td><td class="math">$E_c$</td><td>${n.toLocaleString()}</td><td>MPa</td></tr>
<tr><td>Poisson ratio</td><td class="math">$\\nu$</td><td>${f}</td><td>\u2014</td></tr>
</table>

<p>Plate flexural rigidity:</p>

<p class="math">$$D = \\frac{E \\cdot t^3}{12(1-\\nu^2)} = \\frac{${(n * 1e3).toLocaleString()} \\cdot ${r.toFixed(2)}^3}{12(1-${f}^2)} = ${_.toFixed(1)} \\ \\text{kN}\\cdot\\text{m}$$</p>
      ` }, { title: "3. Winkler subgrade", html: `
<p>The modulus of subgrade reaction <span class="math">$k_s$</span> is estimated
via the Bowles correlation from the allowable pressure:</p>

<p class="math">$$k_s = k_{factor} \\cdot q_{adm} \\cdot g = ${d} \\cdot ${m} \\cdot 9.807 = ${$.toFixed(0)} \\ \\text{kN/m}^3$$</p>

<p><b>Biot number</b> \u2014 relative plate/soil stiffness:</p>

<p class="math">$$k_r = \\frac{D}{k_s \\cdot L^4} = \\frac{${_.toFixed(0)}}{${$.toFixed(0)} \\cdot ${t.toFixed(2)}^4} = ${b.toFixed(3)}$$</p>

<p>Since <span class="math">$k_r = ${b.toFixed(2)}$</span> \u21D2 plate is
<b>${s}</b> ${b > 1 ? "\u2014 FEM should converge to the Meyerhof rigid method" : "\u2014 FEM will concentrate pressure under the column"}.</p>
      ` }, { title: "4. Bilinear Q4 shape functions", html: `
<p>Natural coordinates <span class="math">$(\\xi, \\eta) \\in [-1, +1]$</span>:</p>
<p class="math">$$N_1(\\xi,\\eta) = \\frac{(1-\\xi)(1-\\eta)}{4} \\qquad N_2(\\xi,\\eta) = \\frac{(1+\\xi)(1-\\eta)}{4}$$</p>
<p class="math">$$N_3(\\xi,\\eta) = \\frac{(1+\\xi)(1+\\eta)}{4} \\qquad N_4(\\xi,\\eta) = \\frac{(1-\\xi)(1+\\eta)}{4}$$</p>

<p>The three unknowns <span class="math">$w, \\theta_x, \\theta_y$</span>
are interpolated with the <b>same</b> <span class="math">$N_i$</span>:</p>
<p class="math">$$w = \\sum_{i=1}^{4} N_i w_i \\quad \\theta_x = \\sum_{i=1}^{4} N_i \\theta_{xi} \\quad \\theta_y = \\sum_{i=1}^{4} N_i \\theta_{yi}$$</p>
      ` }, { title: "5. Mindlin kinematics", html: `
<p><b>Curvatures</b> (1st derivatives of rotations, not of <span class="math">$w$</span>):</p>
<p class="math">$$\\kappa_x = -\\frac{\\partial \\theta_y}{\\partial x} \\qquad \\kappa_y = \\frac{\\partial \\theta_x}{\\partial y} \\qquad \\kappa_{xy} = \\frac{\\partial \\theta_x}{\\partial x} - \\frac{\\partial \\theta_y}{\\partial y}$$</p>

<p><b>Transverse shear strains</b> (exclusive to Mindlin \u2014 Kirchhoff sets them to zero):</p>
<p class="math">$$\\gamma_{xz} = \\frac{\\partial w}{\\partial x} - \\theta_y \\qquad \\gamma_{yz} = \\frac{\\partial w}{\\partial y} + \\theta_x$$</p>
      ` }, { title: "6. Constitutive matrices", html: `
<p><b>Bending</b> (same as Kirchhoff):</p>
<p class="math">$$\\mathbf{D}_b = \\frac{E t^3}{12(1-\\nu^2)}
\\begin{bmatrix} 1 & \\nu & 0 \\\\ \\nu & 1 & 0 \\\\ 0 & 0 & \\frac{1-\\nu}{2} \\end{bmatrix}$$</p>

<p><b>Shear</b> (new \u2014 shear correction factor <span class="math">$\\kappa_s = 5/6$</span>):</p>
<p class="math">$$\\mathbf{D}_s = \\kappa_s \\, G \\, t \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$$</p>
      ` }, { title: "7. Element stiffness matrix", html: `
<p><b>Selective integration</b> to avoid shear locking:</p>
<ul>
<li><b>Bending</b>: full <b>2\xD72</b> Gauss quadrature (4 points).</li>
<li><b>Shear</b>: <b>1\xD71</b> reduced Gauss quadrature (1 point, weight 4).</li>
</ul>

<p class="math">$$\\mathbf{K}_e = \\int_{-1}^{1}\\!\\!\\int_{-1}^{1} \\!\\left[ \\mathbf{B}_b^T \\mathbf{D}_b \\mathbf{B}_b + \\mathbf{B}_s^T \\mathbf{D}_s \\mathbf{B}_s \\right] \\det(\\mathbf{J}) \\, d\\xi \\, d\\eta$$</p>

<p>Result: <b>12\xD712</b> matrix (4 nodes \xD7 3 DOFs each).</p>
      ` }, { title: "8. Winkler foundation \u2014 springs in the matrix", html: `
<p>For each node <span class="math">$j$</span>, a spring is added to the
<b>diagonal of the w DOF</b> at position
<span class="math">$3(j-1)+1$</span>:</p>

<p class="math">$$K_{ii}^{global} \\gets K_{ii}^{global} + k_s \\cdot A_{trib,j}$$</p>

<p>The <span class="math">$\\theta_x$</span> (positions 2, 5, 8, 11, \u2026) and
<span class="math">$\\theta_y$</span> (positions 3, 6, 9, 12, \u2026) rows/columns
are <b>not touched</b>.</p>

<table class="data-tbl">
<tr><th>Node position</th><th>A<sub>trib</sub></th><th>Stiffness</th></tr>
<tr><td>Interior</td><td class="math">$a_1 b_1$</td><td class="math">$k_s \\cdot a_1 b_1$</td></tr>
<tr><td>Edge</td><td class="math">$a_1 b_1/2$</td><td class="math">$k_s \\cdot a_1 b_1/2$</td></tr>
<tr><td>Corner</td><td class="math">$a_1 b_1/4$</td><td class="math">$k_s \\cdot a_1 b_1/4$</td></tr>
</table>
      ` }, { title: "9. Global system and solution", html: `
<p>We assemble the global K by summing the elemental contributions and the
Winkler springs. With <span class="math">$n_j$</span> nodes and 3 DOFs/node,
the system size is <span class="math">$3 n_j \\times 3 n_j$</span>.</p>

<p>Load vector \u2014 only at the column (center) node:</p>
<p class="math">$$F_{w,col} = -P = -${c.toFixed(2)} \\ \\text{tonf} \\qquad F_{\\theta_x,col} = M_x = ${o.toFixed(2)} \\qquad F_{\\theta_y,col} = M_y = ${u.toFixed(2)}$$</p>

<p>Solve with <b>Cholesky</b> (K is symmetric positive-definite thanks to Winkler):</p>
<p class="math">$$\\mathbf{K} \\cdot \\mathbf{Z} = \\mathbf{F} \\quad \\Longrightarrow \\quad \\mathbf{Z} = \\mathbf{K}^{-1} \\mathbf{F}$$</p>
      ` }, { title: "10. Contact pressure and verification", html: `
<p>By the Winkler law <span class="math">$\\sigma = -k_s \\cdot w$</span>
(compression positive):</p>

<p class="math">$$\\sigma_{max}^{FEM} \\leq q_{adm} = ${m.toFixed(1)} \\ \\text{tonf/m}^2 \\qquad \\text{(NEC-SE-GC)}$$</p>

<p><b>Comparison with rigid Meyerhof</b> (classical method):</p>

<p class="math">$$\\sigma_{max}^{rigid} = \\frac{P}{A} + \\frac{|M_x|}{W_x} + \\frac{|M_y|}{W_y}$$</p>

<p class="math">$$= \\frac{${c.toFixed(2)}}{${(t * e).toFixed(3)}} + \\frac{${Math.abs(o).toFixed(2)}}{${(t * e * e / 6).toFixed(3)}} + \\frac{${Math.abs(u).toFixed(2)}}{${(e * t * t / 6).toFixed(3)}} = ${(c / (t * e) + Math.abs(o) / (t * e * e / 6) + Math.abs(u) / (e * t * t / 6)).toFixed(2)} \\ \\text{tonf/m}^2$$</p>

<p>With <span class="math">$k_r = ${b.toFixed(2)}$</span> (${s}),
the FEM result should be ${b > 1 ? "close to" : "larger (concentration) than"} the rigid value.</p>
      ` }, { title: "11. Plan view color map \u2014 contact pressure \u03C3 (tonf/m\xB2)", html: (() => {
    const h = j(a, i);
    return h.length ? `
<p>2D plan view (top-down) of the contact pressure distribution at the plate-soil
interface. Colors follow the jet palette: <span style="color:#0000ff">blue</span>
(minimum compression, edge) \u2192 <span style="color:#00ff00">green</span> \u2192
<span style="color:#ff0000">red</span> (maximum compression, under column):</p>
<div style="text-align:center; margin: 10px 0;">
${N(h, t, e, 40, 40, "\u03C3 plan view (tonf/m\xB2)", "tonf/m\xB2", 480, 340)}
</div>
<p><b>Interpretation</b>: with
<span class="math">$k_r = ${b.toFixed(2)}$</span> (${s}), the plate
${b > 1 ? "behaves rigidly \u2014 the plan distribution is nearly linear (Meyerhof)" : "is flexible \u2014 pressure concentrates under the column"}.</p>
        ` : "<p><i>No pressure data available. Run the analysis by adjusting any parameter to trigger a rebuild.</i></p>";
  })() }, { title: "12. Lateral elevations \u2014 X and Y cross-sections", html: (() => {
    const h = j(a, i);
    return h.length ? `
<p>Cross-section of the contact pressure along the central line:</p>
<div style="text-align:center; margin: 10px 0;">
${D(h, t, "x", "\u03C3 along X (through column)", "tonf/m\xB2", 460, 200)}
</div>
<div style="text-align:center; margin: 10px 0;">
${D(h, e, "y", "\u03C3 along Y (through column)", "tonf/m\xB2", 460, 200)}
</div>
<p>Peak (dark blue fill) should coincide with the <b>column center</b>
(<span class="math">$x = L/2, y = B/2$</span>); the <b>edges</b> should
show the Meyerhof linear gradient if k<sub>r</sub> \u226B 1, or be close to zero
if the plate is flexible.</p>
        ` : "<p><i>No cross-section data available.</i></p>";
  })() }, { title: "13. Vertical deflection w (mm, signed)", html: (() => {
    const h = K(a, i);
    if (!h.length) return "<p><i>No deflection data available.</i></p>";
    const x = Math.min(...h.map((y) => y.v));
    return `
<p>Plan view of the vertical deflection <span class="math">$w$</span>
in mm using the FEM sign convention (<b>negative = downward</b>, global Z
points upward). The Winkler law
<span class="math">$\\sigma = -k_s \\cdot w$</span> links this field directly
to the pressure map above \u2014 where w is most negative, the compression \u03C3 is
maximum (hence positive in the pressure plot).</p>
<div style="text-align:center; margin: 10px 0;">
${N(h, t, e, 40, 40, "w plan view (mm, signed)", "mm", 480, 340)}
</div>
<p>Minimum (most downward): <span class="math">$w_{min} = ${x.toFixed(3)}$</span> mm (at the column)</p>
<div style="text-align:center; margin: 10px 0;">
${D(h, t, "x", "w along X (mm, signed)", "mm", 460, 200)}
</div>
<div style="text-align:center; margin: 10px 0;">
${D(h, e, "y", "w along Y (mm, signed)", "mm", 460, 200)}
</div>
        `;
  })() }];
}
function Z(a, i) {
  const t = a.a ?? 6, e = a.b ?? 4, r = a.t ?? 0.1, p = a.q ?? 10, m = a.E_MPa ?? 35e3, d = a.nu ?? 0.15, $ = m * 1e3, c = $ / (2 * (1 + d)), o = $ * Math.pow(r, 3) / (12 * (1 - d * d)), u = 772e-5, n = u * p * Math.pow(e, 4) / o * 1e3;
  return [{ title: "1. Theory \u2014 Mindlin-Reissner thick plate", html: `
<p>The rectangular slab is modelled as a <b>Mindlin-Reissner plate</b>
(Shell Thick), simply supported along all four edges and subjected to a
uniform distributed load <span class="math">$q$</span>.</p>

<p>Mindlin theory admits transverse shear deformation and is valid for
<span class="math">$t/L \\geq 0.05$</span>. In this case:</p>

<p class="math">$$\\frac{t}{L_{min}} = \\frac{${r.toFixed(3)}}{${Math.min(t, e).toFixed(1)}} = ${(r / Math.min(t, e)).toFixed(4)}$$</p>

<p>Each node has <b>3 DOFs</b>: <span class="math">$w, \\theta_x, \\theta_y$</span>
(= 12 DOFs per element).</p>
      ` }, { title: "2. Input data", html: `
<table class="data-tbl">
<tr><th>Parameter</th><th>Symbol</th><th>Value</th><th>Unit</th></tr>
<tr><td>Length X</td><td class="math">$a$</td><td>${t.toFixed(1)}</td><td>m</td></tr>
<tr><td>Length Y</td><td class="math">$b$</td><td>${e.toFixed(1)}</td><td>m</td></tr>
<tr><td>Thickness</td><td class="math">$t$</td><td>${r.toFixed(3)}</td><td>m</td></tr>
<tr><td>Uniform load</td><td class="math">$q$</td><td>${p.toFixed(1)}</td><td>kN/m\xB2</td></tr>
<tr><td>Elastic modulus</td><td class="math">$E$</td><td>${m.toLocaleString()}</td><td>MPa</td></tr>
<tr><td>Poisson</td><td class="math">$\\nu$</td><td>${d.toFixed(2)}</td><td>\u2014</td></tr>
<tr><td>Shear modulus</td><td class="math">$G$</td><td>${(c / 1e3).toFixed(0)}</td><td>MPa</td></tr>
<tr><td>Shear correction</td><td class="math">$\\kappa_s$</td><td>5/6</td><td>\u2014</td></tr>
</table>

<p>Flexural rigidity:</p>
<p class="math">$$D = \\frac{E t^3}{12(1-\\nu^2)} = \\frac{${$.toLocaleString()} \\cdot ${r.toFixed(3)}^3}{12(1-${d}^2)} = ${o.toFixed(1)} \\ \\text{kN}\\cdot\\text{m}$$</p>
      ` }, { title: "3. Bilinear Q4 shape functions", html: `
<p>Natural coordinates <span class="math">$(\\xi, \\eta) \\in [-1, +1]$</span>:</p>
<p class="math">$$N_i(\\xi,\\eta) = \\tfrac{1}{4}(1 + \\xi_i \\xi)(1 + \\eta_i \\eta), \\quad i=1,\\dots,4$$</p>

<p>The three unknowns <span class="math">$w, \\theta_x, \\theta_y$</span> at each
node are interpolated with the same <span class="math">$N_i$</span>.</p>
      ` }, { title: "4. Mindlin kinematics", html: `
<p><b>Curvatures</b> \u2014 first derivatives of rotations:</p>
<p class="math">$$\\kappa_x = -\\frac{\\partial \\theta_y}{\\partial x},\\quad \\kappa_y = \\frac{\\partial \\theta_x}{\\partial y},\\quad \\kappa_{xy} = \\frac{\\partial \\theta_x}{\\partial x} - \\frac{\\partial \\theta_y}{\\partial y}$$</p>

<p><b>Transverse shear strains</b>:</p>
<p class="math">$$\\gamma_{xz} = \\frac{\\partial w}{\\partial x} - \\theta_y,\\quad \\gamma_{yz} = \\frac{\\partial w}{\\partial y} + \\theta_x$$</p>
      ` }, { title: "5. Constitutive matrices", html: `
<p><b>Bending</b> (identical to Kirchhoff):</p>
<p class="math">$$\\mathbf{D}_b = \\frac{E t^3}{12(1-\\nu^2)} \\begin{bmatrix} 1 & \\nu & 0 \\\\ \\nu & 1 & 0 \\\\ 0 & 0 & \\frac{1-\\nu}{2} \\end{bmatrix}$$</p>

<p><b>Shear</b> \u2014 exclusive to Mindlin:</p>
<p class="math">$$\\mathbf{D}_s = \\kappa_s \\, G \\, t \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$$</p>
      ` }, { title: "6. Element stiffness matrix (selective integration)", html: `
<p>To avoid <b>shear locking</b> in thin regimes, we use a different quadrature
for each term:</p>
<ul>
<li><b>Bending</b>: full <b>2\xD72 Gauss</b> (4 points, weight 1).</li>
<li><b>Shear</b>: <b>1\xD71 reduced Gauss</b> (1 point at <span class="math">$\\xi=\\eta=0$</span>, weight 4).</li>
</ul>

<p class="math">$$\\mathbf{K}_e = \\int_{-1}^{1}\\!\\!\\int_{-1}^{1} \\!\\mathbf{B}_b^T \\mathbf{D}_b \\mathbf{B}_b \\det(\\mathbf{J}) \\,d\\xi\\,d\\eta + \\underbrace{4 \\, \\mathbf{B}_s^T(0,0)\\mathbf{D}_s\\mathbf{B}_s(0,0)\\det(\\mathbf{J})}_{\\text{shear, reduced}}$$</p>
      ` }, { title: "7. Element load vector", html: `
<p>For uniform pressure <span class="math">$q$</span>, only the <var>w</var>
DOFs receive force (rotations are not loaded):</p>

<p class="math">$$F_{e,w}^{(i)} = \\int\\!\\!\\int N_i \\cdot q \\, dA = \\frac{q \\cdot A_e}{4}$$</p>

<p>Each of the 4 element nodes gets equal share
<span class="math">$q \\cdot a_1 b_1 / 4$</span>.</p>
      ` }, { title: "8. Boundary conditions", html: `
<p>All four edges are <b>simply supported</b>: only the vertical displacement
<span class="math">$w$</span> is restrained at the edge nodes. The rotations
<span class="math">$\\theta_x, \\theta_y$</span> remain free \u2014 this is the true
physical "simply supported" condition in Mindlin theory.</p>

<p>We enforce <span class="math">$w = 0$</span> at edge nodes by adding a
penalty term <span class="math">$k_{pen} = 10^{20}$</span> to the diagonal of
the corresponding DOFs:</p>
<p class="math">$$K_{ii}^{global} \\gets K_{ii}^{global} + k_{pen} \\qquad \\forall i \\in \\text{edge } w\\text{-DOFs}$$</p>
      ` }, { title: "9. Solution and Kirchhoff comparison", html: `
<p>We solve the global system with Cholesky factorization:</p>
<p class="math">$$\\mathbf{K} \\cdot \\mathbf{Z} = \\mathbf{F} \\Longrightarrow \\mathbf{Z} = \\mathbf{K}^{-1} \\mathbf{F}$$</p>

<p><b>Kirchhoff analytical benchmark</b> (Navier series, simply supported
plate with uniform load, <span class="math">$a/b = ${(t / e).toFixed(2)}$</span>):</p>

<p class="math">$$w_{max}^{Kirchhoff} \\approx \\alpha \\cdot \\frac{q \\cdot b^4}{D} = ${u} \\cdot \\frac{${p} \\cdot ${e.toFixed(1)}^4}{${o.toFixed(1)}} = ${(n / 1e3).toFixed(6)} \\ \\text{m} = ${n.toFixed(2)} \\ \\text{mm}$$</p>

<p>Mindlin should give a <b>slightly larger</b> deflection than Kirchhoff
because it includes shear deformation energy. The difference grows with
<span class="math">$t/L$</span>.</p>
      ` }, { title: "10. Post-processing \u2014 bending moments", html: `
<p>After solving for displacements, the bending moments in each element are
recovered from the bending strain matrix:</p>

<p class="math">$$\\mathbf{M} = \\begin{bmatrix} M_x \\\\ M_y \\\\ M_{xy} \\end{bmatrix} = \\mathbf{D}_b \\cdot \\mathbf{B}_b(\\xi,\\eta) \\cdot \\mathbf{Z}_e$$</p>

<p>evaluated at the element center <span class="math">$\\xi=\\eta=0$</span>
(optimal point for bending in Q4 bilinear).</p>

<p>The transverse shear forces are similarly recovered:</p>
<p class="math">$$\\begin{bmatrix} Q_x \\\\ Q_y \\end{bmatrix} = \\mathbf{D}_s \\cdot \\mathbf{B}_s \\cdot \\mathbf{Z}_e$$</p>
      ` }, { title: "11. Plan view color map \u2014 deflection w (mm, signed)", html: (() => {
    const f = K(a, i);
    return f.length ? `
<p>2D plan view (top-down) of the vertical deflection
<span class="math">$w$</span> in mm using the FEM sign convention
(<b>negative = downward</b>). The minimum (most negative) value
<span class="math">$w_{min} = ${Math.min(...f.map((b) => b.v)).toFixed(3)}$</span> mm should occur
at the plate center for a simply supported plate under uniform pressure:</p>
<div style="text-align:center; margin: 10px 0;">
${N(f, t, e, 50, 30, "w plan view (mm, signed)", "mm", 520, 340)}
</div>
<p><b>Analytical benchmark</b> (Kirchhoff Navier):
<span class="math">$w_{max}^{downward} \\approx ${n.toFixed(3)}$</span> mm,
so FEM should give <span class="math">$w_{min}^{FEM} \\approx -${n.toFixed(3)}$</span> mm.
Mindlin typically gives slightly larger magnitude due to shear deformation.</p>
        ` : "<p><i>No deflection data. Adjust any parameter to rebuild.</i></p>";
  })() }, { title: "12. Lateral elevations \u2014 X and Y cross-sections (w signed)", html: (() => {
    const f = K(a, i);
    return f.length ? `
<p>Cross-section of the vertical deflection along the central axes.
With downward load, the curve should <b>dip below zero</b> (negative
values) at the center and return to 0 at the simply supported edges:</p>
<div style="text-align:center; margin: 10px 0;">
${D(f, t, "x", "w along X (through y = b/2) \u2014 mm, signed", "mm", 500, 220)}
</div>
<div style="text-align:center; margin: 10px 0;">
${D(f, e, "y", "w along Y (through x = a/2) \u2014 mm, signed", "mm", 500, 220)}
</div>
        ` : "<p><i>No cross-section data.</i></p>";
  })() }];
}
function H(a, i) {
  return [{ title: "Kirchhoff-Love thin plate", html: `<p>16 DOFs per element (w, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03C8 per node).
    <span class="math">$\\mathbf{K}_e = \\int\\!\\int \\mathbf{B}^T \\mathbf{D} \\mathbf{B} \\, dA$</span>
    with <span class="math">$\\mathbf{B}$</span> built from 2nd derivatives of
    Hermite shape functions. <i>Full report coming soon.</i></p>` }];
}
function Q(a, i) {
  return [{ title: "Plane stress membrane", html: `<p>8 DOFs per element (<span class="math">$u_i, v_i$</span> at each of 4 nodes).
    <span class="math">$\\mathbf{D}_m = \\frac{E}{1-\\nu^2}[\\dots]$</span>.
    <i>Full report coming soon.</i></p>` }];
}
let k = null, R = false;
async function U() {
  if (R) return;
  const a = document.createElement("link");
  a.rel = "stylesheet", a.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(a), await new Promise((i, t) => {
    const e = document.createElement("script");
    e.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", e.onload = () => i(), e.onerror = () => t(), document.head.appendChild(e);
  }), await new Promise((i, t) => {
    const e = document.createElement("script");
    e.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js", e.onload = () => i(), e.onerror = () => t(), document.head.appendChild(e);
  }), R = true;
}
async function tt(a, i, t, e) {
  await U(), k && k.remove();
  const r = Y(a, t, e);
  k = document.createElement("div"), k.id = "math-report-panel", k.innerHTML = `
    <div class="mr-backdrop" id="mr-backdrop"></div>
    <div class="mr-panel">
      <div class="mr-header">
        <h2>\u{1F4D0} FEM Mathematical Report</h2>
        <div class="mr-subtitle">${i}</div>
        <button class="mr-close" id="mr-close" title="Close">\u2715</button>
      </div>
      <div class="mr-nav">
        ${r.map((c, o) => `<a href="#mr-sec-${o}" class="mr-nav-link">${o + 1}. ${c.title}</a>`).join("")}
      </div>
      <div class="mr-body" id="mr-body">
        ${r.map((c, o) => `
          <section id="mr-sec-${o}" class="mr-section">
            <h3>${o + 1}. ${c.title}</h3>
            ${c.html}
          </section>
        `).join("")}
      </div>
    </div>
  `;
  const p = document.createElement("style");
  p.id = "math-report-styles", p.textContent = `
    #math-report-panel { font-family: "Segoe UI", Roboto, sans-serif; color: #e8e8e8; }
    .mr-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.55); backdrop-filter: blur(3px); z-index: 9998; }
    .mr-panel { position: fixed; top: 3%; right: 2%; bottom: 3%; width: 54%; max-width: 900px;
                background: #1e1f22; border: 1px solid #3a3b3f; border-radius: 8px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.6); z-index: 9999; display: flex; flex-direction: column;
                overflow: hidden; }
    .mr-header { padding: 12px 20px; background: linear-gradient(180deg,#2c2d31,#242529);
                 border-bottom: 1px solid #3a3b3f; position: relative; }
    .mr-header h2 { margin: 0; font-size: 16px; color: #d4af37; font-weight: 600; }
    .mr-subtitle { font-size: 12px; color: #9a9a9a; margin-top: 2px; }
    .mr-close { position: absolute; top: 10px; right: 12px; background: transparent; color: #bbb;
                border: 1px solid #555; border-radius: 4px; width: 28px; height: 28px; cursor: pointer; font-size: 14px; }
    .mr-close:hover { background: #d4af37; color: #111; border-color: #d4af37; }
    .mr-nav { padding: 10px 20px; background: #242529; border-bottom: 1px solid #3a3b3f;
              max-height: 90px; overflow-y: auto; display: flex; flex-wrap: wrap; gap: 6px 12px; }
    .mr-nav-link { font-size: 11px; color: #9dc3e6; text-decoration: none; padding: 2px 8px;
                   border: 1px solid #3a3b3f; border-radius: 3px; white-space: nowrap; }
    .mr-nav-link:hover { background: #d4af37; color: #111; border-color: #d4af37; }
    .mr-body { padding: 20px 28px; overflow-y: auto; flex: 1; line-height: 1.6; font-size: 13px; }
    .mr-section { margin-bottom: 28px; padding-bottom: 18px; border-bottom: 1px dashed #3a3b3f; }
    .mr-section:last-child { border-bottom: none; }
    .mr-section h3 { color: #d4af37; font-size: 14px; border-left: 3px solid #d4af37;
                     padding: 4px 10px; margin: 0 0 12px 0; background: rgba(212,175,55,0.08); }
    .mr-body p { margin: 8px 0; }
    .mr-body ul { margin: 6px 0; padding-left: 22px; }
    .mr-body li { margin-bottom: 4px; }
    .mr-body b, .mr-body strong { color: #ffd86b; }
    .mr-body code { background: #2c2d31; padding: 1px 5px; border-radius: 3px;
                    color: #9dc3e6; font-size: 12px; font-family: "Consolas", monospace; }
    .mr-body var { color: #ffd86b; font-style: italic; }
    .mr-body .math { text-align: center; margin: 10px 0; }
    .data-tbl { border-collapse: collapse; margin: 10px 0; font-size: 12px; width: 100%; }
    .data-tbl th, .data-tbl td { border: 1px solid #3a3b3f; padding: 5px 10px; text-align: left; }
    .data-tbl th { background: rgba(212,175,55,0.12); color: #d4af37; font-weight: 600; }
    .data-tbl td:first-child { color: #bbb; }
    @media (max-width: 1100px) { .mr-panel { width: 90%; right: 5%; } }
  `, document.head.appendChild(p), document.body.appendChild(k);
  const m = () => {
    k == null ? void 0 : k.remove(), p.remove(), k = null;
  };
  document.getElementById("mr-close").onclick = m, document.getElementById("mr-backdrop").onclick = m, window.addEventListener("keydown", function c(o) {
    o.key === "Escape" && (m(), window.removeEventListener("keydown", c));
  });
  const d = document.getElementById("mr-body"), $ = window.renderMathInElement;
  $ && $(d, { delimiters: [{ left: "$$", right: "$$", display: true }, { left: "$", right: "$", display: false }], throwOnError: false });
}
export {
  Y as buildMathReport,
  tt as openMathReport
};
