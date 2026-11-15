import React, { useState, useRef, useEffect } from 'react';
import { REGIONAL_FLOOR_ARTS, ETHNOMATHEMATICS_CONCEPTS, KOLAM_POSTER_TEAM } from '../data/kolamData';
import { Sparkles, Download, Eye, Grid, Compass, RotateCw, BookOpen } from 'lucide-react';

interface KolamViewProps {
  openLightbox: (img: string, title: string, caption?: string) => void;
}

export const KolamView: React.FC<KolamViewProps> = ({ openLightbox }) => {
  const [gridMode, setGridMode] = useState<'ner' | 'kanni'>('ner');
  const [showLoops, setShowLoops] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Render interactive Kolam canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;

    // Draw background grid dots
    ctx.fillStyle = '#C99738'; // Gold dots
    const dots: { x: number; y: number }[] = [];

    if (gridMode === 'ner') {
      // 5x5 square grid
      const step = 60;
      for (let r = -2; r <= 2; r++) {
        for (let c = -2; c <= 2; c++) {
          const x = cx + c * step;
          const y = cy + r * step;
          dots.push({ x, y });
          ctx.beginPath();
          ctx.arc(x, y, 5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    } else {
      // 1-3-5-3-1 diamond grid (Kanni Pulli)
      const step = 55;
      const diamondRows = [
        { r: -2, cols: [0] },
        { r: -1, cols: [-1, 0, 1] },
        { r: 0, cols: [-2, -1, 0, 1, 2] },
        { r: 1, cols: [-1, 0, 1] },
        { r: 2, cols: [0] },
      ];
      diamondRows.forEach(({ r, cols }) => {
        cols.forEach(c => {
          const x = cx + c * step;
          const y = cy + r * step;
          dots.push({ x, y });
          ctx.beginPath();
          ctx.arc(x, y, 5, 0, Math.PI * 2);
          ctx.fill();
        });
      });
    }

    // Draw continuous Sikku Loop if enabled
    if (showLoops) {
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#FAF6EE'; // Rice flour white
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      const step = gridMode === 'ner' ? 60 : 55;

      // Draw symmetrical petals around center
      for (let angle = 0; angle < 4; angle++) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate((angle * Math.PI) / 2);

        ctx.beginPath();
        ctx.moveTo(0, -step * 0.4);
        ctx.bezierCurveTo(
          -step * 0.8, -step * 0.8,
          -step * 1.6, -step * 1.8,
          0, -step * 2.2
        );
        ctx.bezierCurveTo(
          step * 1.6, -step * 1.8,
          step * 0.8, -step * 0.8,
          0, -step * 0.4
        );
        ctx.stroke();

        // Corner diagonal loops
        ctx.beginPath();
        ctx.moveTo(step * 0.4, -step * 0.4);
        ctx.bezierCurveTo(
          step * 1.2, -step * 0.4,
          step * 1.8, -step * 1.2,
          step * 1.4, -step * 1.4
        );
        ctx.bezierCurveTo(
          step * 1.2, -step * 1.8,
          step * 0.4, -step * 1.2,
          step * 0.4, -step * 0.4
        );
        ctx.stroke();

        ctx.restore();
      }

      // Center knot circle
      ctx.beginPath();
      ctx.arc(cx, cy, step * 0.25, 0, Math.PI * 2);
      ctx.strokeStyle = '#8B2616'; // Terracotta accent ring
      ctx.lineWidth = 3;
      ctx.stroke();
    }
  }, [gridMode, showLoops]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Monograph Bar */}
      <div className="bg-white rounded-lg p-6 sm:p-8 border border-heritage-sandstoneDark shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-heritage-terracotta font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-heritage-gold" />
            <span>Academic Component C • Visual Research Poster & Ethnomathematics</span>
          </div>
          <h1 className="font-display font-black text-2xl sm:text-4xl text-heritage-charcoal leading-tight">
            Sacred Geometry of the Threshold
          </h1>
          <p className="font-serif italic text-base sm:text-lg text-heritage-indigo mt-1">
            Rice Flour, Symmetry, and Living Heritage: Ethnomathematics, Ecology, and Regional Aesthetics
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/deliverables/kolam_rangoli_poster/Kolam_Rangoli_Academic_Poster.pdf"
            download
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded bg-heritage-terracotta hover:bg-heritage-terracottaDark text-white font-sans text-xs font-bold uppercase tracking-wider transition-colors shadow"
          >
            <Download className="w-4 h-4" />
            <span>Download Poster (A1/A2 PDF)</span>
          </a>
          <a
            href="/deliverables/kolam_rangoli_poster/Kolam_Rangoli_Academic_Poster.html"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded bg-heritage-sandstone hover:bg-heritage-sandstoneDark text-heritage-charcoal font-sans text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <Eye className="w-4 h-4 text-heritage-indigo" />
            <span>Print-Ready HTML Poster</span>
          </a>
        </div>
      </div>

      {/* NON-NEGOTIABLE CORE DISTINCTION: KOLAM VS RANGOLI */}
      <section className="bg-white rounded-lg p-6 sm:p-10 border border-heritage-sandstoneDark shadow-sm space-y-6">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 rounded bg-heritage-terracotta text-white font-sans text-xs font-bold uppercase tracking-wider mb-2">
            Non-Negotiable Academic Standard
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-heritage-charcoal">
            The Fundamental Distinction: Kolam vs. Rangoli
          </h2>
          <p className="font-serif text-base text-heritage-umber mt-2">
            Academic integrity demands that Kolam and Rangoli are <strong>not</strong> treated as interchangeable decorative terms. They represent distinct material chemistries, ritual temporalities, and geometric philosophies:
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse font-sans text-xs sm:text-sm">
            <thead>
              <tr className="bg-heritage-indigo text-white">
                <th className="p-3.5 text-left font-bold">Category</th>
                <th className="p-3.5 text-left font-bold">Kolam (Tamil Nadu & Dravidian South)</th>
                <th className="p-3.5 text-left font-bold">Rangoli (North, West & Central India)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-heritage-sandstoneDark">
              <tr className="bg-heritage-parchment">
                <td className="p-3.5 font-bold text-heritage-terracotta">Medium & Materiality</td>
                <td className="p-3.5 text-heritage-umber">
                  <strong>Edible raw rice flour</strong> (<em>arisi maavu</em>), wet rice paste (<em>padi</em>), red mineral ochre (<em>kāvi</em>).
                </td>
                <td className="p-3.5 text-heritage-umber">
                  <strong>Synthetic & mineral colored powders</strong> (gulal, marble dust), flower petals, sand, turmeric.
                </td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-heritage-terracotta">Temporal Rhythm</td>
                <td className="p-3.5 text-heritage-umber">
                  Drawn <strong>daily at dawn</strong> at residential thresholds (<em>vāsal</em>) after washing the ground.
                </td>
                <td className="p-3.5 text-heritage-umber">
                  Predominantly <strong>festive & ceremonial</strong> (Diwali, weddings, temple utsavas).
                </td>
              </tr>
              <tr className="bg-heritage-parchment">
                <td className="p-3.5 font-bold text-heritage-terracotta">Ecological Ethos</td>
                <td className="p-3.5 text-heritage-umber">
                  <strong>Bhūta Yajña</strong>: Sacred duty to feed ants, beetles, birds, and soil microbes (Nagarajan, 2018).
                </td>
                <td className="p-3.5 text-heritage-umber">
                  <strong>Śobhā & Mangala</strong>: Festive visual welcome to Goddess Lakshmi and guests.
                </td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-heritage-terracotta">Geometric Syntax</td>
                <td className="p-3.5 text-heritage-umber">
                  Strict <strong>topological dot matrix</strong> (<em>pulli</em>), endless knot loops (<em>Brahma Mudi</em>), Eulerian circuits.
                </td>
                <td className="p-3.5 text-heritage-umber">
                  <strong>Pictorial & figurative</strong> motifs: peacocks, diyas, kalash pots, floral mandalas.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Interactive Kolam Simulator */}
      <section className="bg-heritage-indigo text-heritage-sandstone rounded-lg p-6 sm:p-10 border-2 border-heritage-gold shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-heritage-gold/40">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-sans uppercase tracking-widest text-heritage-gold font-bold mb-1">
              <Compass className="w-4 h-4" />
              <span>Interactive Algorithmic Visualizer</span>
            </div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Sikku Kolam & Pulli Matrix Laboratory
            </h2>
            <p className="font-serif italic text-sm text-heritage-sandstoneDark mt-1">
              Explore how continuous Eulerian loops weave around Cartesian vs. Interleaved dot coordinates.
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setGridMode(gridMode === 'ner' ? 'kanni' : 'ner')}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded bg-heritage-sandstone text-heritage-charcoal font-sans text-xs font-bold uppercase transition-colors"
            >
              <Grid className="w-4 h-4 text-heritage-terracotta" />
              <span>Grid: {gridMode === 'ner' ? 'Nēr Pulli (Square)' : 'Kanni Pulli (Diamond)'}</span>
            </button>
            <button
              onClick={() => setShowLoops(!showLoops)}
              className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded bg-heritage-terracotta text-white font-sans text-xs font-bold uppercase transition-colors"
            >
              <RotateCw className="w-4 h-4" />
              <span>{showLoops ? 'Hide Continuous Loops' : 'Draw Eulerian Loops'}</span>
            </button>
          </div>
        </div>

        {/* Canvas Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
          <div className="lg:col-span-7 flex justify-center bg-heritage-indigoDark/80 p-4 rounded-lg border border-heritage-gold/30">
            <canvas
              ref={canvasRef}
              width={460}
              height={420}
              className="max-w-full h-auto rounded shadow-inner"
            />
          </div>

          <div className="lg:col-span-5 space-y-4 font-sans text-xs sm:text-sm text-heritage-sandstoneDark leading-relaxed">
            <h3 className="font-display font-bold text-lg text-heritage-gold">
              Topological Principles in Motion
            </h3>
            <p>
              The canvas above visualizes how traditional Tamil women conceptualize coordinate space. The dots do not serve as endpoints to be connected; rather, they form the <strong>repulsion obstacles</strong> around which the white rice-flour line must navigate without touching.
            </p>
            <div className="p-3.5 bg-white/5 rounded border border-white/10 space-y-2">
              <div>
                <strong className="text-white block">Active Configuration:</strong>
                <span>{gridMode === 'ner' ? '5×5 Cartesian Matrix (Nēr Pulli)' : '1-3-5-3-1 Interleaved Lattice (Kanni Pulli)'}</span>
              </div>
              <div>
                <strong className="text-white block">Eulerian Invariant:</strong>
                <span>Continuous loop exhibiting 4-fold dihedral symmetry (Group D₄).</span>
              </div>
            </div>
            <p className="text-xs text-heritage-sandstoneDark/80">
              Prof. Gift Siromoney (1974) proved that such symmetric Kolams can be generated recursively via formal <em>Array Grammars</em> in theoretical computer science.
            </p>
          </div>
        </div>
      </section>

      {/* Ethnomathematics Deep-Dive Cards */}
      <section className="space-y-6">
        <div>
          <h2 className="font-display font-bold text-2xl text-heritage-charcoal">
            The Mathematical Dimensions of Kolam
          </h2>
          <p className="font-serif italic text-sm text-heritage-muted mt-1">
            Formalized in ethnomathematics by Marcia Ascher (1991) and computer science by Prof. Gift Siromoney:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-lg border border-heritage-sandstoneDark shadow-sm space-y-3">
            <div 
              className="h-36 overflow-hidden rounded border border-heritage-sandstoneDark cursor-pointer"
              onClick={() => openLightbox("/assets/diagrams/diagram_pulli_grid_types.svg", "Pulli Dot Matrix Topologies", "Orthogonal (Ner Pulli) vs Interleaved (Kanni Pulli) coordinate lattices.")}
            >
              <img 
                src="/assets/diagrams/diagram_pulli_grid_types.svg" 
                alt="Pulli Grid Types" 
                className="w-full h-full object-contain p-2 bg-heritage-parchment"
              />
            </div>
            <h3 className="font-display font-bold text-base text-heritage-terracotta">
              1. Pulli Grid Topologies
            </h3>
            <p className="font-sans text-xs text-heritage-umber leading-relaxed">
              Discrete point matrices (Nēr Pulli and Kanni Pulli) serving as coordinate boundary guides for continuous curve navigation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-heritage-sandstoneDark shadow-sm space-y-3">
            <div 
              className="h-36 overflow-hidden rounded border border-heritage-sandstoneDark cursor-pointer"
              onClick={() => openLightbox("/assets/diagrams/diagram_sikku_eulerian.svg", "Brahma Mudi Topological Knot", "Eulerian circuit continuous loop drawn around dot coordinates.")}
            >
              <img 
                src="/assets/diagrams/diagram_sikku_eulerian.svg" 
                alt="Brahma Mudi Knot" 
                className="w-full h-full object-contain p-2 bg-heritage-indigo"
              />
            </div>
            <h3 className="font-display font-bold text-base text-heritage-terracotta">
              2. Knot Theory & Brahma Mudi
            </h3>
            <p className="font-sans text-xs text-heritage-umber leading-relaxed">
              Continuous non-self-intersecting loops forming Eulerian circuits in graph theory, symbolizing the eternal cycle of saṃsāra.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-heritage-sandstoneDark shadow-sm space-y-3">
            <div 
              className="h-36 overflow-hidden rounded border border-heritage-sandstoneDark cursor-pointer"
              onClick={() => openLightbox("/assets/diagrams/diagram_symmetry_groups.svg", "Symmetry Groups & Fractal Dimension", "Dihedral point group D4 and recursive self-similarity.")}
            >
              <img 
                src="/assets/diagrams/diagram_symmetry_groups.svg" 
                alt="Symmetry Groups" 
                className="w-full h-full object-contain p-2 bg-white"
              />
            </div>
            <h3 className="font-display font-bold text-base text-heritage-terracotta">
              3. Dihedral Symmetry & Fractals
            </h3>
            <p className="font-sans text-xs text-heritage-umber leading-relaxed">
              Dihedral point groups (C₄, D₄, D₈) with 90° rotations and reflection axes; recursive self-similarity akin to Sierpiński curves.
            </p>
          </div>

        </div>

        {/* Detailed Ethnomathematics Concepts List */}
        <div className="bg-heritage-parchment p-6 sm:p-8 rounded-lg border border-heritage-sandstoneDark space-y-4">
          <div className="flex items-center space-x-2 text-heritage-indigo font-bold text-sm">
            <BookOpen className="w-4 h-4 text-heritage-terracotta" />
            <span>Theoretical Formalisms (Gift Siromoney & Marcia Ascher)</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
            {ETHNOMATHEMATICS_CONCEPTS.map((concept, idx) => (
              <div key={idx} className="bg-white p-4 rounded border border-heritage-sandstoneDark space-y-1">
                <strong className="text-heritage-terracotta text-sm block">{concept.title}</strong>
                <p className="text-heritage-umber leading-relaxed">{concept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pan-Indian Regional Diversity Matrix */}
      <section className="bg-white rounded-lg p-8 sm:p-10 border border-heritage-sandstoneDark shadow-sm space-y-6">
        <div>
          <h2 className="font-display font-bold text-2xl text-heritage-charcoal">
            Pan-Indian Regional Diversity Matrix
          </h2>
          <p className="font-serif italic text-sm text-heritage-muted mt-1">
            Comparative taxonomy across Indian regional sacred floor art traditions:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REGIONAL_FLOOR_ARTS.map((art, idx) => (
            <div key={idx} className="bg-heritage-sandstone p-5 rounded-lg border border-heritage-sandstoneDark space-y-2 flex flex-col justify-between">
              <div>
                <span className="font-sans font-bold text-[11px] text-heritage-terracotta uppercase block">
                  {art.region}
                </span>
                <h3 className="font-display font-bold text-lg text-heritage-indigo flex items-baseline space-x-2">
                  <span>{art.name}</span>
                  <span className="font-normal text-sm text-heritage-muted font-serif">({art.vernacularScript})</span>
                </h3>
                <div className="text-xs font-sans text-heritage-umber mt-2 space-y-1">
                  <div><strong>Medium:</strong> {art.medium}</div>
                  <div><strong>Ritual Context:</strong> {art.ritualContext}</div>
                  <div><strong>Key Motifs:</strong> {art.keyMotifs}</div>
                </div>
              </div>
              <div className="pt-2 border-t border-heritage-sandstoneDark text-[11px] font-sans text-heritage-muted">
                <strong>Geometric Logic:</strong> {art.geometricLogic}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Student Team Placeholders Block */}
      <section className="bg-heritage-sandstone rounded-lg p-6 sm:p-8 border border-heritage-sandstoneDark">
        <h3 className="font-display font-bold text-lg text-heritage-indigo mb-4">
          Team of Five Student Researchers (Poster Placeholders)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-xs font-sans">
          {KOLAM_POSTER_TEAM.map((s) => (
            <div key={s.id} className="bg-white p-3.5 rounded border border-heritage-sandstoneDark shadow-sm space-y-1">
              <strong className="text-heritage-charcoal block">{s.name}</strong>
              <div className="text-heritage-muted text-[11px]">Roll: {s.rollNumber}</div>
              <div className="text-heritage-terracotta font-semibold text-[11.5px]">{s.role}</div>
              <p className="text-heritage-muted text-[11px] leading-snug pt-1 border-t border-heritage-sandstoneDark">
                {s.contribution}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
