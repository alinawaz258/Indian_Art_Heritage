import React from 'react';
import { BookOpen, Compass, Sparkles, ArrowRight, ShieldCheck, Download, Award, Layers } from 'lucide-react';

interface HomeProps {
  setCurrentTab: (tab: string) => void;
  openLightbox: (img: string, title: string, caption?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setCurrentTab, openLightbox }) => {
  return (
    <div className="space-y-16 pb-12">
      
      {/* Editorial Hero Section */}
      <section className="relative overflow-hidden bg-heritage-indigo text-heritage-sandstone py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-heritage-gold shadow-xl">
        {/* Subtle background glow */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#C99738_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-heritage-gold/20 border border-heritage-gold/40 text-heritage-goldLight text-xs tracking-widest uppercase font-sans mb-6">
            <Award className="w-3.5 h-3.5" />
            <span>Academic Research & Digital Heritage Exhibition</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-wide leading-tight max-w-4xl mb-6">
            INDIAN ART HERITAGE
          </h1>
          
          <p className="font-serif italic text-xl sm:text-2xl text-heritage-sandstoneDark max-w-3xl leading-relaxed mb-8">
            From the rock-cut narrative frescoes of Ajanta to the sea-battered monolithic granite of Māmallapuram and the living sacred ethnomathematics of Kolam and Rangoli.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => setCurrentTab('ajanta')}
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded bg-heritage-terracotta hover:bg-heritage-terracottaDark text-white font-sans font-semibold text-sm transition-all shadow-md hover:shadow-lg"
            >
              <BookOpen className="w-4 h-4 text-heritage-goldLight" />
              <span>Explore Ajanta Storyboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentTab('mahabalipuram')}
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded bg-white/10 hover:bg-white/20 text-heritage-sandstone border border-heritage-gold/40 font-sans font-semibold text-sm transition-all"
            >
              <Compass className="w-4 h-4 text-heritage-goldLight" />
              <span>Mahabalipuram Analysis</span>
            </button>
            <button
              onClick={() => setCurrentTab('kolam')}
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded bg-white/10 hover:bg-white/20 text-heritage-sandstone border border-heritage-gold/40 font-sans font-semibold text-sm transition-all"
            >
              <Sparkles className="w-4 h-4 text-heritage-goldLight" />
              <span>Kolam & Rangoli Poster</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Curatorial Principles / Academic Foundations */}
        <section className="bg-white rounded-lg p-8 sm:p-10 border border-heritage-sandstoneDark shadow-sm">
          <div className="max-w-3xl">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-heritage-terracotta mb-4">
              Curation Standard & Methodological Framework
            </h2>
            <div className="h-1 w-20 bg-heritage-gold mb-6"></div>
            <p className="font-serif text-lg text-heritage-umber leading-relaxed mb-4">
              This exhibition fulfills a dual imperative: rigorous academic scholarship grounded in primary epigraphy and authoritative literature (Dieter Schlingloff, Michael D. Rabe, Walter Spink, Stella Kramrisch), combined with publication-grade visual storytelling.
            </p>
            <p className="font-serif text-lg text-heritage-umber leading-relaxed">
              Living and sacred traditions are represented with intellectual rigor and cultural respect. Authentic archaeological photography is maintained as historical evidence, while original artistic reconstructions are explicitly labelled and never presented as authentic ancient artifacts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-heritage-sandstoneDark">
            <div className="flex items-start space-x-3">
              <div className="p-2 rounded bg-heritage-sandstone text-heritage-terracotta">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-sm text-heritage-indigo">Epigraphical Accuracy</h3>
                <p className="font-sans text-xs text-heritage-muted mt-1 leading-normal">
                  All dates, dynastic patrons (Vākāṭakas, Pallavas), and Sanskrit/Pali sources are verified against peer-reviewed literature.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 rounded bg-heritage-sandstone text-heritage-terracotta">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-sm text-heritage-indigo">Explicit Provenance</h3>
                <p className="font-sans text-xs text-heritage-muted mt-1 leading-normal">
                  Every image tracks original attribution, photographer credits, Creative Commons licenses, and museum sources.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2 rounded bg-heritage-sandstone text-heritage-terracotta">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-sm text-heritage-indigo">Publication-Ready Exports</h3>
                <p className="font-sans text-xs text-heritage-muted mt-1 leading-normal">
                  Complete offline academic deliverables generated: DOCX report, PPTX presentation, and print-ready PDF publications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Three Exhibition Entrances */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-heritage-charcoal">
              The Three Assessed Exhibitions
            </h2>
            <p className="font-serif italic text-lg text-heritage-muted mt-2">
              Select an exhibition to explore panel narratives, architectural analysis, or interactive ethnomathematics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Ajanta */}
            <div className="bg-white rounded-lg overflow-hidden border border-heritage-sandstoneDark shadow-md hover:shadow-xl transition-all flex flex-col group">
              <div 
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => openLightbox("/assets/authentic/ajanta_cave_17_mural_chaddanta.jpg", "Ajanta Cave 17 Chaddanta Jātaka Original Mural", "Surviving 5th-century fresco-secco mural on right aisle wall. Photo: ASI / CC BY-SA.")}
              >
                <img 
                  src="/assets/authentic/ajanta_cave_17_mural_chaddanta.jpg" 
                  alt="Ajanta Mural" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-heritage-terracotta text-white font-sans text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                  Component A
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-heritage-terracotta mb-2">
                    Ajanta: Ṣaḍdanta Jātaka Storyboard
                  </h3>
                  <div className="font-serif italic text-sm text-heritage-indigo mb-3">
                    Cave 17 • Vākāṭaka Dynasty (c. 460–477 CE)
                  </div>
                  <p className="font-serif text-sm text-heritage-umber leading-relaxed mb-4">
                    An 8-panel illustrated narrative tracing the supreme sacrifice of the six-tusked elephant Bodhisattva King Ṣaḍdanta, with dramatized dialogues, mineral pigments, and continuous mural analysis.
                  </p>
                </div>
                <div className="pt-4 border-t border-heritage-sandstoneDark">
                  <button
                    onClick={() => setCurrentTab('ajanta')}
                    className="w-full inline-flex items-center justify-center space-x-2 py-2.5 rounded bg-heritage-sandstone hover:bg-heritage-sandstoneDark text-heritage-charcoal font-sans text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>Enter Storyboard Gallery</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Mahabalipuram */}
            <div className="bg-white rounded-lg overflow-hidden border border-heritage-sandstoneDark shadow-md hover:shadow-xl transition-all flex flex-col group">
              <div 
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => openLightbox("/assets/authentic/mahabalipuram_descent_ganges_monolith.jpg", "The Great Bas-Relief (Descent of the Ganges)", "27m granite monolith with central cleft representing holy Gaṅgā. Photo: CC BY-SA 4.0.")}
              >
                <img 
                  src="/assets/authentic/mahabalipuram_descent_ganges_monolith.jpg" 
                  alt="Mahabalipuram Great Relief" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-heritage-indigo text-white font-sans text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                  Component B
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-heritage-terracotta mb-2">
                    Māmallapuram: Thematic Analysis
                  </h3>
                  <div className="font-serif italic text-sm text-heritage-indigo mb-3">
                    Coromandel Coast • Pallava Dynasty (7th–8th Century CE)
                  </div>
                  <p className="font-serif text-sm text-heritage-umber leading-relaxed mb-4">
                    Comprehensive study of 4 monuments: Great Bas-Relief, Shore Temple, Pancha Rathas, and Varaha Cave. Explores the <em>Śleṣa</em> (polysemy) debate between Arjuna and Bhagīratha.
                  </p>
                </div>
                <div className="pt-4 border-t border-heritage-sandstoneDark">
                  <button
                    onClick={() => setCurrentTab('mahabalipuram')}
                    className="w-full inline-flex items-center justify-center space-x-2 py-2.5 rounded bg-heritage-sandstone hover:bg-heritage-sandstoneDark text-heritage-charcoal font-sans text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>View Monograph & Deck</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: Kolam & Rangoli */}
            <div className="bg-white rounded-lg overflow-hidden border border-heritage-sandstoneDark shadow-md hover:shadow-xl transition-all flex flex-col group">
              <div 
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => openLightbox("/assets/diagrams/diagram_sikku_eulerian.svg", "Brahma Mudi Topological Knot", "Eulerian circuit continuous loop drawn around dot coordinates.")}
              >
                <img 
                  src="/assets/diagrams/diagram_sikku_eulerian.svg" 
                  alt="Brahma Mudi Knot" 
                  className="w-full h-full object-contain bg-heritage-indigo p-4 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-heritage-gold text-white font-sans text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                  Component C
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-heritage-terracotta mb-2">
                    Kolam & Rangoli: Living Heritage
                  </h3>
                  <div className="font-serif italic text-sm text-heritage-indigo mb-3">
                    Ethnomathematics • Ecology • Regional Aesthetics
                  </div>
                  <p className="font-serif text-sm text-heritage-umber leading-relaxed mb-4">
                    Rigorous distinction between Tamil rice-flour Kolam (<em>Bhūta Yajña</em>) and mineral Rangoli. Mathematical analysis of dot grids, knot theory, Eulerian loops, and array grammars.
                  </p>
                </div>
                <div className="pt-4 border-t border-heritage-sandstoneDark">
                  <button
                    onClick={() => setCurrentTab('kolam')}
                    className="w-full inline-flex items-center justify-center space-x-2 py-2.5 rounded bg-heritage-sandstone hover:bg-heritage-sandstoneDark text-heritage-charcoal font-sans text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>Explore Poster & Generator</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Master Deliverables Download Center */}
        <section className="bg-heritage-sandstone rounded-lg p-8 sm:p-10 border border-heritage-sandstoneDark">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-heritage-sandstoneDark">
            <div>
              <h2 className="font-display font-bold text-2xl text-heritage-charcoal">
                Academic Publication & Deliverable Repository
              </h2>
              <p className="font-serif italic text-base text-heritage-muted mt-1">
                Direct access to all final editable sources and print-ready PDF exports.
              </p>
            </div>
            <button
              onClick={() => setCurrentTab('provenance')}
              className="inline-flex items-center space-x-2 text-xs font-sans font-bold uppercase tracking-wider text-heritage-terracotta hover:underline"
            >
              <span>View Full Research Ledger & Provenance</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            
            <a
              href="/deliverables/ajanta_storyboard/Ajanta_Storyboard_Publication.pdf"
              download
              className="p-4 bg-white rounded border border-heritage-sandstoneDark hover:border-heritage-terracotta transition-colors flex items-start space-x-3 group"
            >
              <div className="p-2 rounded bg-heritage-terracotta/10 text-heritage-terracotta group-hover:bg-heritage-terracotta group-hover:text-white transition-colors">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <span className="font-sans font-bold text-xs text-heritage-charcoal block">Ajanta Storyboard</span>
                <span className="font-sans text-[11px] text-heritage-muted block">8-Panel Publication (PDF)</span>
              </div>
            </a>

            <a
              href="/deliverables/mahabalipuram_analysis/Mahabalipuram_Thematic_Report.docx"
              download
              className="p-4 bg-white rounded border border-heritage-sandstoneDark hover:border-heritage-indigo transition-colors flex items-start space-x-3 group"
            >
              <div className="p-2 rounded bg-heritage-indigo/10 text-heritage-indigo group-hover:bg-heritage-indigo group-hover:text-white transition-colors">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <span className="font-sans font-bold text-xs text-heritage-charcoal block">Mahabalipuram Report</span>
                <span className="font-sans text-[11px] text-heritage-muted block">Academic Paper (DOCX)</span>
              </div>
            </a>

            <a
              href="/deliverables/mahabalipuram_analysis/Mahabalipuram_Presentation.pptx"
              download
              className="p-4 bg-white rounded border border-heritage-sandstoneDark hover:border-heritage-indigo transition-colors flex items-start space-x-3 group"
            >
              <div className="p-2 rounded bg-heritage-indigo/10 text-heritage-indigo group-hover:bg-heritage-indigo group-hover:text-white transition-colors">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <span className="font-sans font-bold text-xs text-heritage-charcoal block">Presentation Deck</span>
                <span className="font-sans text-[11px] text-heritage-muted block">10-Min Slides (PPTX)</span>
              </div>
            </a>

            <a
              href="/deliverables/kolam_rangoli_poster/Kolam_Rangoli_Academic_Poster.pdf"
              download
              className="p-4 bg-white rounded border border-heritage-sandstoneDark hover:border-heritage-gold transition-colors flex items-start space-x-3 group"
            >
              <div className="p-2 rounded bg-heritage-gold/10 text-heritage-gold group-hover:bg-heritage-gold group-hover:text-white transition-colors">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <span className="font-sans font-bold text-xs text-heritage-charcoal block">Kolam & Rangoli Poster</span>
                <span className="font-sans text-[11px] text-heritage-muted block">A1/A2 Print Layout (PDF)</span>
              </div>
            </a>

          </div>
        </section>

      </div>

    </div>
  );
};
