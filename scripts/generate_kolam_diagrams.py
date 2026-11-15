import os
import math

def generate_kolam_svgs():
    diag_dir = os.path.join("website", "public", "assets", "diagrams")
    poster_dir = os.path.join("deliverables", "kolam_rangoli_poster")
    os.makedirs(diag_dir, exist_ok=True)
    os.makedirs(poster_dir, exist_ok=True)

    # 1. Pulli Grid Comparison (Ner Pulli vs Kanni Pulli)
    svg_pulli = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 380" width="100%" height="100%" style="background:#FAF6EE; font-family:'Inter', sans-serif;">
      <!-- Title -->
      <text x="400" y="36" text-anchor="middle" font-size="20" font-weight="700" fill="#8B2616" letter-spacing="1">TOPOLOGIES OF THE PULLI (DOT) MATRIX</text>
      
      <!-- Sub-panel A: Ner Pulli -->
      <g transform="translate(60, 60)">
        <rect width="320" height="280" rx="8" fill="#FFFFFF" stroke="#DCD3C1" stroke-width="1.5"/>
        <text x="160" y="32" text-anchor="middle" font-size="15" font-weight="700" fill="#1F3A52">1. NĒR PULLI (Orthogonal / Cartesian Grid)</text>
        <text x="160" y="52" text-anchor="middle" font-size="11.5" fill="#6B5E57">m × n dots aligned in straight rows and columns</text>
        
        <!-- 5x5 dots with grid lines -->
        <g transform="translate(60, 75)">
          <!-- subtle guide lines -->
          <line x1="0" y1="0" x2="200" y2="0" stroke="#F0E8D5" stroke-dasharray="3,3"/>
          <line x1="0" y1="50" x2="200" y2="50" stroke="#F0E8D5" stroke-dasharray="3,3"/>
          <line x1="0" y1="100" x2="200" y2="100" stroke="#F0E8D5" stroke-dasharray="3,3"/>
          <line x1="0" y1="150" x2="200" y2="150" stroke="#F0E8D5" stroke-dasharray="3,3"/>
          <line x1="0" y1="200" x2="200" y2="200" stroke="#F0E8D5" stroke-dasharray="3,3"/>
          
          <line x1="0" y1="0" x2="0" y2="200" stroke="#F0E8D5" stroke-dasharray="3,3"/>
          <line x1="50" y1="0" x2="50" y2="200" stroke="#F0E8D5" stroke-dasharray="3,3"/>
          <line x1="100" y1="0" x2="100" y2="200" stroke="#F0E8D5" stroke-dasharray="3,3"/>
          <line x1="150" y1="0" x2="150" y2="200" stroke="#F0E8D5" stroke-dasharray="3,3"/>
          <line x1="200" y1="0" x2="200" y2="200" stroke="#F0E8D5" stroke-dasharray="3,3"/>
          
          <!-- Dots -->
"""
    for r in range(5):
        for c in range(5):
            x = c * 50
            y = r * 50
            svg_pulli += f'          <circle cx="{x}" cy="{y}" r="4.5" fill="#8B2616"/>\n'
    svg_pulli += """        </g>
      </g>

      <!-- Sub-panel B: Kanni Pulli -->
      <g transform="translate(420, 60)">
        <rect width="320" height="280" rx="8" fill="#FFFFFF" stroke="#DCD3C1" stroke-width="1.5"/>
        <text x="160" y="32" text-anchor="middle" font-size="15" font-weight="700" fill="#1F3A52">2. KANNI / SANDHU PULLI (Interleaved Grid)</text>
        <text x="160" y="52" text-anchor="middle" font-size="11.5" fill="#6B5E57">Equilateral interstitial diamond matrix (e.g. 1-3-5-3-1)</text>
        
        <!-- Diamond interleaved dots -->
        <g transform="translate(160, 80)">
"""
    # diamond grid: row -2: 1 dot, row -1: 3 dots, row 0: 5 dots, row 1: 3 dots, row 2: 1 dot
    diamond = [
        (-2, [0]),
        (-1, [-40, 0, 40]),
        (0, [-80, -40, 0, 40, 80]),
        (1, [-40, 0, 40]),
        (2, [0])
    ]
    for row_idx, xs in diamond:
        y = row_idx * 40 + 80
        for x in xs:
            svg_pulli += f'          <circle cx="{x}" cy="{y}" r="4.5" fill="#C99738"/>\n'
            # connect with subtle lines to show hexagonal/diamond lattice
    svg_pulli += """        </g>
      </g>
    </svg>"""

    with open(os.path.join(diag_dir, "diagram_pulli_grid_types.svg"), "w", encoding="utf-8") as f:
        f.write(svg_pulli)
    with open(os.path.join(poster_dir, "diagram_pulli_grid_types.svg"), "w", encoding="utf-8") as f:
        f.write(svg_pulli)

    # 2. Algorithmic Sikku Kolam (Brahma Mudi Knot Loop)
    svg_sikku = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%" style="background:#1F3A52; font-family:'Inter', sans-serif;">
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      <text x="250" y="40" text-anchor="middle" font-size="17" font-weight="700" fill="#C99738" letter-spacing="1">SIKKU KOLAM: EULERIAN KNOT (BRAHMA MUDI)</text>
      <text x="250" y="62" text-anchor="middle" font-size="11.5" fill="#FAF6EE" opacity="0.8">Continuous Single-Circuit Topological Loop Around Interstitial Dots</text>

      <!-- Central Kolam group -->
      <g transform="translate(250, 270)">
        <!-- 3x3 dot matrix -->
        <circle cx="-70" cy="-70" r="5" fill="#C99738"/>
        <circle cx="0" cy="-70" r="5" fill="#C99738"/>
        <circle cx="70" cy="-70" r="5" fill="#C99738"/>
        
        <circle cx="-70" cy="0" r="5" fill="#C99738"/>
        <circle cx="0" cy="0" r="6" fill="#C99738"/>
        <circle cx="70" cy="0" r="5" fill="#C99738"/>
        
        <circle cx="-70" cy="70" r="5" fill="#C99738"/>
        <circle cx="0" cy="70" r="5" fill="#C99738"/>
        <circle cx="70" cy="70" r="5" fill="#C99738"/>

        <!-- Outer diamond guide dots -->
        <circle cx="0" cy="-140" r="4" fill="#C99738" opacity="0.5"/>
        <circle cx="140" cy="0" r="4" fill="#C99738" opacity="0.5"/>
        <circle cx="0" cy="140" r="4" fill="#C99738" opacity="0.5"/>
        <circle cx="-140" cy="0" r="4" fill="#C99738" opacity="0.5"/>

        <!-- Continuous Sikku Loop path (Mathematical Bezier Splines) -->
        <!-- Corner loops -->
        <!-- Top petal -->
        <path d="M 0,-30 C -30,-30 -50,-90 0,-130 C 50,-90 30,-30 0,-30 Z" fill="none" stroke="#FAF6EE" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)"/>
        <!-- Bottom petal -->
        <path d="M 0,30 C -30,30 -50,90 0,130 C 50,90 30,30 0,30 Z" fill="none" stroke="#FAF6EE" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)"/>
        <!-- Left petal -->
        <path d="M -30,0 C -30,-30 -90,-50 -130,0 C -90,50 -30,30 -30,0 Z" fill="none" stroke="#FAF6EE" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)"/>
        <!-- Right petal -->
        <path d="M 30,0 C 30,-30 90,-50 130,0 C 90,50 30,30 30,0 Z" fill="none" stroke="#FAF6EE" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)"/>

        <!-- Interlacing diagonal loops -->
        <!-- Top-Right loop -->
        <path d="M 0,-30 C 40,-30 50,-50 70,-70 C 95,-95 105,-60 85,-40 C 65,-20 30,0 30,0" fill="none" stroke="#FAF6EE" stroke-width="4" stroke-linecap="round"/>
        <!-- Bottom-Right loop -->
        <path d="M 30,0 C 30,30 50,40 70,70 C 95,95 60,105 40,85 C 20,65 0,30 0,30" fill="none" stroke="#FAF6EE" stroke-width="4" stroke-linecap="round"/>
        <!-- Bottom-Left loop -->
        <path d="M 0,30 C -40,30 -50,50 -70,70 C -95,95 -105,60 -85,40 C -65,20 -30,0 -30,0" fill="none" stroke="#FAF6EE" stroke-width="4" stroke-linecap="round"/>
        <!-- Top-Left loop -->
        <path d="M -30,0 C -30,-30 -50,-40 -70,-70 C -95,-95 -60,-105 -40,-85 C -20,-65 0,-30 0,-30" fill="none" stroke="#FAF6EE" stroke-width="4" stroke-linecap="round"/>
      </g>
    </svg>"""

    with open(os.path.join(diag_dir, "diagram_sikku_eulerian.svg"), "w", encoding="utf-8") as f:
        f.write(svg_sikku)
    with open(os.path.join(poster_dir, "diagram_sikku_eulerian.svg"), "w", encoding="utf-8") as f:
        f.write(svg_sikku)

    # 3. Symmetry & Fractal Dimensions
    svg_symm = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" width="100%" height="100%" style="background:#FFFFFF; font-family:'Inter', sans-serif;">
      <text x="300" y="32" text-anchor="middle" font-size="18" font-weight="700" fill="#8B2616">MATHEMATICAL SYMMETRY GROUPS IN KOLAM</text>
      <text x="300" y="52" text-anchor="middle" font-size="12" fill="#6B5E57">Formalized in Ethnomathematics by Marcia Ascher & Prof. Gift Siromoney</text>

      <!-- 4-fold Dihedral Symmetry D4 -->
      <g transform="translate(150, 210)">
        <circle cx="0" cy="0" r="110" fill="#FAF6EE" stroke="#C99738" stroke-dasharray="4,4"/>
        <!-- Axes of reflection -->
        <line x1="-120" y1="0" x2="120" y2="0" stroke="#8B2616" stroke-width="1.5" stroke-dasharray="2,2"/>
        <line x1="0" y1="-120" x2="0" y2="120" stroke="#8B2616" stroke-width="1.5" stroke-dasharray="2,2"/>
        <line x1="-85" y1="-85" x2="85" y2="85" stroke="#1F3A52" stroke-width="1.5" stroke-dasharray="3,3"/>
        <line x1="-85" y1="85" x2="85" y2="-85" stroke="#1F3A52" stroke-width="1.5" stroke-dasharray="3,3"/>
        
        <!-- Lotus petals in 4 quadrants -->
        <path d="M 0,0 C 35,-60 60,-35 0,0" fill="#8B2616" opacity="0.3"/>
        <path d="M 0,0 C 60,35 35,60 0,0" fill="#8B2616" opacity="0.3"/>
        <path d="M 0,0 C -35,60 -60,35 0,0" fill="#8B2616" opacity="0.3"/>
        <path d="M 0,0 C -60,-35 -35,-60 0,0" fill="#8B2616" opacity="0.3"/>

        <!-- Center knot -->
        <circle cx="0" cy="0" r="14" fill="#C99738"/>
        
        <text x="0" y="145" text-anchor="middle" font-size="13" font-weight="700" fill="#1F3A52">Group D₄ (4-Fold Dihedral)</text>
        <text x="0" y="162" text-anchor="middle" font-size="11" fill="#6B5E57">4 rotations (90°) + 4 reflection axes</text>
      </g>

      <!-- Recursive Fractal Scaling -->
      <g transform="translate(450, 210)">
        <rect x="-110" y="-110" width="220" height="220" fill="#FAF6EE" stroke="#DCD3C1"/>
        <!-- Level 0 box -->
        <rect x="-90" y="-90" width="180" height="180" fill="none" stroke="#1F3A52" stroke-width="1"/>
        <!-- Level 1 subdivisions -->
        <rect x="-30" y="-30" width="60" height="60" fill="#8B2616" opacity="0.4"/>
        <rect x="-90" y="-90" width="60" height="60" fill="#C99738" opacity="0.2"/>
        <rect x="30" y="-90" width="60" height="60" fill="#C99738" opacity="0.2"/>
        <rect x="-90" y="30" width="60" height="60" fill="#C99738" opacity="0.2"/>
        <rect x="30" y="30" width="60" height="60" fill="#C99738" opacity="0.2"/>

        <text x="0" y="145" text-anchor="middle" font-size="13" font-weight="700" fill="#1F3A52">Self-Similarity & Fractal Order</text>
        <text x="0" y="162" text-anchor="middle" font-size="11" fill="#6B5E57">Sierpiński carpet scaling & array grammars</text>
      </g>
    </svg>"""

    with open(os.path.join(diag_dir, "diagram_symmetry_groups.svg"), "w", encoding="utf-8") as f:
        f.write(svg_symm)
    with open(os.path.join(poster_dir, "diagram_symmetry_groups.svg"), "w", encoding="utf-8") as f:
        f.write(svg_symm)

    print("Kolam mathematical vector SVGs generated successfully.")

if __name__ == "__main__":
    generate_kolam_svgs()
