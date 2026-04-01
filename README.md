# Hekatan Struct -- Open Source Structural Analysis

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/demo-GitHub%20Pages-green)](https://giorgioburbanelli89.github.io/awatif-workspace/workspace/)

Web-based structural engineering platform with a C++/Eigen FEM solver compiled to WebAssembly. Runs entirely in the browser -- no installation, no server required. Built on Three.js for 3D visualization and VanJS for reactive state management.

Based on [awatif v2.0.0](https://github.com/madil4/awatif/tree/v2.0.0) by Mohamed Adil.

## Features

- **3D structural modeling** -- frames, shells, and complete buildings with interactive Three.js viewer
- **Static analysis** -- linear elastic with Timoshenko beams and shell Q4 MITC4 elements
- **Modal analysis** -- eigenvalue solver (Eigen C++ SparseLU) for natural frequencies and mode shapes
- **Shell Q4 elements** -- membrane (incompatible modes), Mindlin-Reissner plate (MITC4 shear tying), drilling DOF
- **Parametric generators** -- buildings, pergolas, trusses, retaining walls, slopes, and 20+ structural models
- **Interactive FEM tutorials** -- 12 step-by-step tutorials covering bar elements to modal analysis
- **Bilingual UI** -- full Spanish/English support throughout the interface
- **Import/Export** -- ETABS (E2K), SAP2000 (S2K), IFC (Revit/ArchiCAD), OpenSees (Python/Tcl)
- **Calc panel** -- MATLAB-like calculator with math.js, KaTeX rendering, and symbolic math (nerdamer)
- **Nonlinear analysis** -- Newton-Raphson pushover and cyclic pushover
- **Rigid end offsets and moment releases** -- static condensation for realistic frame connections
- **Validated** -- solver results match ETABS 22.6 to 4+ decimal places for frames, 0.99-1.003 for shells

## Quick Start

Visit the live deployment: [giorgioburbanelli89.github.io/awatif-workspace/workspace/](https://giorgioburbanelli89.github.io/awatif-workspace/workspace/)

To run locally:

```bash
git clone https://github.com/GiorgioBurbanelli89/awatif-workspace.git
cd awatif-workspace && npm install
cd examples && npm install
npm run dev    # opens localhost:4600
```

## Screenshots

<!-- TODO: Add screenshots of the 3D viewer, calc panel, and parametric generators -->

## Architecture

```
awatif-fem/     C++/Eigen FEM solver compiled to WASM (334 KB)
                - deform.cpp (static), modal.cpp (eigenvalue)
                - Shell Q4, Timoshenko beams, rigid offsets
                - Eigen 3.4.0 SparseLU + GeneralizedEigenSolver

examples/       Three.js UI + parametric structural models
                - getCad3d.ts (FEM Studio with 25+ generators)
                - calc-editor/ (MATLAB-like calculator)
                - tutorials/ (12 interactive FEM tutorials)

awatif-ui/      Viewer (Three.js), parameters (Tweakpane), toolbar (VanJS)
```

## Technology Stack

| Technology | Purpose |
|-----------|---------|
| C++ / Eigen 3.4 | FEM solver (SparseLU, eigenvalues) |
| Emscripten | C++ to WebAssembly compiler |
| Three.js | 3D rendering (WebGL) |
| VanJS | Reactive state management (1.5 KB) |
| math.js + KaTeX | Calculator and equation rendering |
| web-ifc | IFC geometry parser (WASM) |
| Vite | Build tool and dev server |

## Credits

- [awatif v2.0.0](https://github.com/madil4/awatif/tree/v2.0.0) by Mohamed Adil -- original framework
- [Eigen 3.4](https://eigen.tuxfamily.org/) -- C++ linear algebra library
- [web-ifc](https://github.com/ThatOpen/engine_web-ifc) -- IFC parser by That Open Company

## Author

**Jorge Burbano** -- Structural Engineer, Ecuador

## License

MIT License. See [LICENSE](LICENSE) for details.
