function _(t, o, a) {
  switch (t) {
    case "zapata-aislada-validacion":
    case "zapata-aislada":
      return g(o);
    case "plate-thick":
      return y();
    case "plate-thin":
      return k();
    case "membrana-pstress":
      return v();
    default:
      return [{ title: "Reporte no disponible", html: `<p>El reporte matem\xE1tico paso-a-paso para el ejemplo <code>${t}</code> a\xFAn no est\xE1 implementado.</p>
               <p>Soportados: <b>zapata-aislada-validacion</b>, <b>plate-thick</b>, <b>plate-thin</b>, <b>membrana-pstress</b>.</p>` }];
  }
}
function g(t, o) {
  const a = t.Lz ?? 1.5, e = t.Bz ?? 1.5, r = t.tz ?? 0.3, d = t.bc ?? 0.4, l = t.q_adm ?? 10, b = t.ks_factor ?? 10.5, p = t.ks ?? 1030, i = t.P_simple ?? 20, s = t.Mx_simple ?? 0.5, h = t.My_simple ?? -0.5, $ = 22800, m = 0.2, x = $ * 1e3 * Math.pow(r, 3) / (12 * (1 - m * m)), c = x / (p * Math.pow(a, 4)), f = c > 1 ? "R\xCDGIDA" : "FLEXIBLE";
  return [{ title: "1. Teor\xEDa de placas gruesas \u2014 Mindlin-Reissner", html: `
<p>La zapata aislada se modela como una <b>placa Mindlin-Reissner</b>
(Shell Thick) apoyada sobre <b>fundaci\xF3n Winkler</b> (lecho el\xE1stico
de resortes verticales independientes).</p>

<p>A diferencia de Kirchhoff-Love (placa delgada), Mindlin admite
deformaci\xF3n por <b>cortante transverso</b> \u2014 v\xE1lido para
<span class="math">$t/L \\geq 0.05$</span>. En nuestra zapata:</p>

<p class="math">$$\\frac{t}{L} = \\frac{${r.toFixed(2)}}{${a.toFixed(2)}} = ${(r / a).toFixed(3)} \\geq 0.05 \\Rightarrow \\text{Mindlin OK}$$</p>

<p>Cada nodo tiene <b>3 DOFs</b>: <span class="math">$w$</span> (deflexi\xF3n vertical),
<span class="math">$\\theta_x$</span> (rotaci\xF3n sobre X),
<span class="math">$\\theta_y$</span> (rotaci\xF3n sobre Y).</p>
      ` }, { title: "2. Geometr\xEDa y material", html: `
<table class="data-tbl">
<tr><th>Par\xE1metro</th><th>S\xEDmbolo</th><th>Valor</th><th>Unidad</th></tr>
<tr><td>Lado X</td><td class="math">$L_z$</td><td>${a.toFixed(2)}</td><td>m</td></tr>
<tr><td>Lado Y</td><td class="math">$B_z$</td><td>${e.toFixed(2)}</td><td>m</td></tr>
<tr><td>Espesor</td><td class="math">$t$</td><td>${r.toFixed(2)}</td><td>m</td></tr>
<tr><td>Columna (lado)</td><td class="math">$b_c$</td><td>${d.toFixed(2)}</td><td>m</td></tr>
<tr><td>M\xF3dulo el\xE1stico</td><td class="math">$E_c$</td><td>${$.toLocaleString()}</td><td>MPa</td></tr>
<tr><td>Poisson</td><td class="math">$\\nu$</td><td>${m}</td><td>\u2014</td></tr>
</table>

<p>Rigidez flexural de placa:</p>

<p class="math">$$D = \\frac{E \\cdot t^3}{12(1-\\nu^2)} = \\frac{${($ * 1e3).toLocaleString()} \\cdot ${r.toFixed(2)}^3}{12(1-${m}^2)} = ${x.toFixed(1)} \\ \\text{kN}\\cdot\\text{m}$$</p>
      ` }, { title: "3. Suelo Winkler", html: `
<p>El m\xF3dulo de balasto <span class="math">$k_s$</span> se estima por la
correlaci\xF3n de Bowles a partir de la presi\xF3n admisible:</p>

<p class="math">$$k_s = k_{factor} \\cdot q_{adm} \\cdot g = ${b} \\cdot ${l} \\cdot 9.807 = ${p.toFixed(0)} \\text{ kN/m}^3$$</p>

<p><b>N\xFAmero de Biot</b> \u2014 rigidez relativa placa/suelo:</p>

<p class="math">$$k_r = \\frac{D}{k_s \\cdot L^4} = \\frac{${x.toFixed(0)}}{${p.toFixed(0)} \\cdot ${a.toFixed(2)}^4} = ${c.toFixed(3)}$$</p>

<p>Como <span class="math">$k_r = ${c.toFixed(2)}$</span> \u21D2 placa
<b>${f}</b> ${c > 1 ? "\u2014 el FEM convergir\xE1 al resultado del m\xE9todo r\xEDgido Meyerhof" : "\u2014 el FEM concentrar\xE1 presi\xF3n bajo la columna"}.</p>
      ` }, { title: "4. Funciones de forma Q4 bilineales", html: `
<p>Coordenadas naturales <span class="math">$(\\xi, \\eta) \\in [-1, +1]$</span>:</p>
<p class="math">$$N_1(\\xi,\\eta) = \\frac{(1-\\xi)(1-\\eta)}{4} \\qquad N_2(\\xi,\\eta) = \\frac{(1+\\xi)(1-\\eta)}{4}$$</p>
<p class="math">$$N_3(\\xi,\\eta) = \\frac{(1+\\xi)(1+\\eta)}{4} \\qquad N_4(\\xi,\\eta) = \\frac{(1-\\xi)(1+\\eta)}{4}$$</p>

<p>Las <b>tres</b> inc\xF3gnitas <span class="math">$w, \\theta_x, \\theta_y$</span>
se interpolan con las <b>mismas</b> <span class="math">$N_i$</span>:</p>
<p class="math">$$w = \\sum_{i=1}^{4} N_i w_i \\quad \\theta_x = \\sum_{i=1}^{4} N_i \\theta_{xi} \\quad \\theta_y = \\sum_{i=1}^{4} N_i \\theta_{yi}$$</p>
      ` }, { title: "5. Relaciones cinem\xE1ticas Mindlin", html: `
<p><b>Curvaturas</b> (1\xAA derivadas de rotaciones, no de <var>w</var>):</p>
<p class="math">$$\\kappa_x = -\\frac{\\partial \\theta_y}{\\partial x} \\qquad \\kappa_y = \\frac{\\partial \\theta_x}{\\partial y} \\qquad \\kappa_{xy} = \\frac{\\partial \\theta_x}{\\partial x} - \\frac{\\partial \\theta_y}{\\partial y}$$</p>

<p><b>Cortantes transversos</b> (exclusivos de Mindlin \u2014 Kirchhoff los ignora):</p>
<p class="math">$$\\gamma_{xz} = \\frac{\\partial w}{\\partial x} - \\theta_y \\qquad \\gamma_{yz} = \\frac{\\partial w}{\\partial y} + \\theta_x$$</p>
      ` }, { title: "6. Matrices constitutivas", html: `
<p><b>Flexi\xF3n</b> (id\xE9ntica a Kirchhoff):</p>
<p class="math">$$\\mathbf{D}_b = \\frac{E t^3}{12(1-\\nu^2)}
\\begin{bmatrix} 1 & \\nu & 0 \\\\ \\nu & 1 & 0 \\\\ 0 & 0 & \\frac{1-\\nu}{2} \\end{bmatrix}$$</p>

<p><b>Cortante</b> (nuevo \u2014 factor <span class="math">$\\kappa_s = 5/6$</span>):</p>
<p class="math">$$\\mathbf{D}_s = \\kappa_s \\, G \\, t \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$$</p>
      ` }, { title: "7. Matriz de rigidez elemental", html: `
<p><b>Integraci\xF3n selectiva</b> para evitar shear locking:</p>
<ul>
<li><b>Flexi\xF3n</b>: cuadratura Gauss <b>2\xD72</b> completa (4 puntos).</li>
<li><b>Cortante</b>: cuadratura Gauss <b>1\xD71</b> reducida (1 punto, peso 4).</li>
</ul>

<p class="math">$$\\mathbf{K}_e = \\int_{-1}^{1}\\int_{-1}^{1} \\left[ \\mathbf{B}_b^T \\mathbf{D}_b \\mathbf{B}_b + \\mathbf{B}_s^T \\mathbf{D}_s \\mathbf{B}_s \\right] \\det(\\mathbf{J}) \\, d\\xi \\, d\\eta$$</p>

<p>Resultado: matriz <b>12\xD712</b> (4 nodos \xD7 3 DOFs cada uno).</p>
      ` }, { title: "8. Fundaci\xF3n Winkler \u2014 resortes en la matriz", html: `
<p>Para cada nodo <span class="math">$j$</span>, agregamos un resorte
a la <b>diagonal del DOF w</b> en la posici\xF3n
<span class="math">$3(j-1)+1$</span>:</p>

<p class="math">$$K_{ii}^{global} \\gets K_{ii}^{global} + k_s \\cdot A_{trib,j}$$</p>

<p>Las filas/columnas de <span class="math">$\\theta_x$</span> (pos. 2,5,8,11,...) y
<span class="math">$\\theta_y$</span> (pos. 3,6,9,12,...) <b>no se tocan</b>.</p>

<table class="data-tbl">
<tr><th>Posici\xF3n nodo</th><th>A<sub>trib</sub></th><th>Rigidez</th></tr>
<tr><td>Interior</td><td class="math">$a_1 b_1$</td><td class="math">$k_s \\cdot a_1 b_1$</td></tr>
<tr><td>Borde</td><td class="math">$a_1 b_1/2$</td><td class="math">$k_s \\cdot a_1 b_1/2$</td></tr>
<tr><td>Esquina</td><td class="math">$a_1 b_1/4$</td><td class="math">$k_s \\cdot a_1 b_1/4$</td></tr>
</table>
      ` }, { title: "9. Sistema global y soluci\xF3n", html: `
<p>Ensamblamos K global sumando las contribuciones elementales y los
resortes Winkler. Con <span class="math">$n_j$</span> nodos y 3 DOFs/nodo,
el sistema es de tama\xF1o <span class="math">$3 n_j \\times 3 n_j$</span>.</p>

<p>Vector de fuerzas \u2014 solo en el nodo central (columna):</p>
<p class="math">$$F_{w,col} = -P = -${i.toFixed(2)} \\text{ tonf} \\qquad F_{\\theta_x,col} = M_x = ${s.toFixed(2)} \\qquad F_{\\theta_y,col} = M_y = ${h.toFixed(2)}$$</p>

<p>Resolvemos con <b>Cholesky</b> (K es sim\xE9trica positiva-definida gracias a Winkler):</p>
<p class="math">$$\\mathbf{K} \\cdot \\mathbf{Z} = \\mathbf{F} \\quad \\Longrightarrow \\quad \\mathbf{Z} = \\mathbf{K}^{-1} \\mathbf{F}$$</p>
      ` }, { title: "10. Presi\xF3n de contacto y verificaci\xF3n", html: `
<p>Por la ley Winkler <span class="math">$\\sigma = -k_s \\cdot w$</span>
(compresi\xF3n positiva):</p>

<p class="math">$$\\sigma_{max}^{FEM} \\leq q_{adm} = ${l.toFixed(1)} \\text{ tonf/m}^2 \\qquad \\text{(NEC-SE-GC)}$$</p>

<p><b>Comparaci\xF3n con Meyerhof r\xEDgido</b> (m\xE9todo cl\xE1sico):</p>

<p class="math">$$\\sigma_{max}^{r\xEDgido} = \\frac{P}{A} + \\frac{|M_x|}{W_x} + \\frac{|M_y|}{W_y} = \\frac{${i.toFixed(2)}}{${(a * e).toFixed(3)}} + \\frac{${Math.abs(s).toFixed(2)}}{${(a * e * e / 6).toFixed(3)}} + \\frac{${Math.abs(h).toFixed(2)}}{${(e * a * a / 6).toFixed(3)}}$$</p>

<p class="math">$$= ${(i / (a * e) + Math.abs(s) / (a * e * e / 6) + Math.abs(h) / (e * a * a / 6)).toFixed(2)} \\text{ tonf/m}^2$$</p>

<p>Con <span class="math">$k_r = ${c.toFixed(2)}$</span> (${f}),
el FEM debe dar un valor ${c > 1 ? "cercano" : "mayor (concentraci\xF3n)"} al r\xEDgido.</p>
      ` }];
}
function y(t, o) {
  return [{ title: "Placa Gruesa \u2014 Mindlin-Reissner", html: `<p>Reporte similar al de zapata pero <b>sin</b> fundaci\xF3n Winkler:
    apoyos en el borde, carga distribuida <span class="math">$q$</span>.
    <i>Implementaci\xF3n pendiente.</i></p>` }];
}
function k(t, o) {
  return [{ title: "Placa Delgada \u2014 Kirchhoff-Love", html: `<p>16 DOFs/elemento. <span class="math">$K_e = \\int\\int B^T D B \\, dA$</span>
    con <span class="math">$B$</span> de 2\xAA derivadas. <i>Implementaci\xF3n pendiente.</i></p>` }];
}
function v(t, o) {
  return [{ title: "Membrana \u2014 Plane Stress", html: `<p>8 DOFs/elemento (<span class="math">$u_i, v_i$</span>).
    <span class="math">$\\mathbf{D}_m = \\frac{E}{1-\\nu^2}[\\,\\ldots\\,]$</span>.
    <i>Implementaci\xF3n pendiente.</i></p>` }];
}
let n = null, u = false;
async function F() {
  if (u) return;
  const t = document.createElement("link");
  t.rel = "stylesheet", t.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css", document.head.appendChild(t), await new Promise((o, a) => {
    const e = document.createElement("script");
    e.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js", e.onload = () => o(), e.onerror = () => a(), document.head.appendChild(e);
  }), await new Promise((o, a) => {
    const e = document.createElement("script");
    e.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js", e.onload = () => o(), e.onerror = () => a(), document.head.appendChild(e);
  }), u = true;
}
async function w(t, o, a, e) {
  await F(), n && n.remove();
  const r = _(t, a);
  n = document.createElement("div"), n.id = "math-report-panel", n.innerHTML = `
    <div class="mr-backdrop" id="mr-backdrop"></div>
    <div class="mr-panel">
      <div class="mr-header">
        <h2>\u{1F4D0} Reporte matem\xE1tico FEM</h2>
        <div class="mr-subtitle">${o}</div>
        <button class="mr-close" id="mr-close" title="Cerrar">\u2715</button>
      </div>
      <div class="mr-nav">
        ${r.map((i, s) => `<a href="#mr-sec-${s}" class="mr-nav-link">${s + 1}. ${i.title}</a>`).join("")}
      </div>
      <div class="mr-body" id="mr-body">
        ${r.map((i, s) => `
          <section id="mr-sec-${s}" class="mr-section">
            <h3>${s + 1}. ${i.title}</h3>
            ${i.html}
          </section>
        `).join("")}
      </div>
    </div>
  `;
  const d = document.createElement("style");
  d.id = "math-report-styles", d.textContent = `
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
  `, document.head.appendChild(d), document.body.appendChild(n);
  const l = () => {
    n == null ? void 0 : n.remove(), d.remove(), n = null;
  };
  document.getElementById("mr-close").onclick = l, document.getElementById("mr-backdrop").onclick = l, window.addEventListener("keydown", function i(s) {
    s.key === "Escape" && (l(), window.removeEventListener("keydown", i));
  });
  const b = document.getElementById("mr-body"), p = window.renderMathInElement;
  p && p(b, { delimiters: [{ left: "$$", right: "$$", display: true }, { left: "$", right: "$", display: false }], throwOnError: false });
}
export {
  _ as buildMathReport,
  w as openMathReport
};
