import React, { useState } from 'react';
import { MAHABALIPURAM_MONUMENTS, SLESHA_DEBATE_POINTS } from '../data/mahabalipuramData';
import { Download, Compass, ShieldCheck, Eye, Layers, HelpCircle } from 'lucide-react';

interface MahabalipuramViewProps {
  openLightbox: (img: string, title: string, caption?: string) => void;
}

export const MahabalipuramView: React.FC<MahabalipuramViewProps> = ({ openLightbox }) => {
  const [selectedMonumentId, setSelectedMonumentId] = useState(MAHABALIPURAM_MONUMENTS[0].id);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const currentMonument = MAHABALIPURAM_MONUMENTS.find(m => m.id === selectedMonumentId) || MAHABALIPURAM_MONUMENTS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Monograph Bar */}
      <div className="bg-white rounded-lg p-6 sm:p-8 border border-heritage-sandstoneDark shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-heritage-indigo font-bold mb-2">
            <Compass className="w-3.5 h-3.5 text-heritage-terracotta" />
            <span>Academic Component B • Thematic Sculpture & Architectural Analysis</span>
          </div>
          <h1 className="font-display font-black text-2xl sm:text-4xl text-heritage-charcoal leading-tight">
            Granite, Sea, and Sacred Sovereignty
          </h1>
          <p className="font-serif italic text-base sm:text-lg text-heritage-terracotta mt-1">
            Pallava Monuments of Māmallapuram • 7th–8th Century CE (UNESCO World Heritage Site)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="./deliverables/mahabalipuram_analysis/Mahabalipuram_Thematic_Report.docx"
            download
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded bg-heritage-indigo hover:bg-heritage-indigoDark text-white font-sans text-xs font-bold uppercase tracking-wider transition-colors shadow"
          >
            <Download className="w-4 h-4 text-heritage-goldLight" />
            <span>Download Report (Word .docx)</span>
          </a>
          <a
            href="./deliverables/mahabalipuram_analysis/Mahabalipuram_Thematic_Report.pdf"
            download
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded bg-heritage-terracotta hover:bg-heritage-terracottaDark text-white font-sans text-xs font-bold uppercase tracking-wider transition-colors shadow"
          >
            <Download className="w-4 h-4" />
            <span>Download Report (PDF)</span>
          </a>
          <a
            href="./deliverables/mahabalipuram_analysis/Mahabalipuram_Presentation.pptx"
            download
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded bg-heritage-sandstone hover:bg-heritage-sandstoneDark text-heritage-charcoal font-sans text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <Download className="w-4 h-4 text-heritage-indigo" />
            <span>Presentation Deck (PPTX)</span>
          </a>
          <a
            href="./deliverables/mahabalipuram_analysis/Mahabalipuram_Presentation_Deck.html"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded bg-white border border-heritage-sandstoneDark hover:border-heritage-gold text-heritage-charcoal font-sans text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <Eye className="w-4 h-4 text-heritage-gold" />
            <span>Launch Slide Deck</span>
          </a>
        </div>
      </div>

      {/* Monument Selector Tabs */}
      <div className="flex border-b border-heritage-sandstoneDark overflow-x-auto space-x-2 custom-scrollbar pb-1">
        {MAHABALIPURAM_MONUMENTS.map((m) => {
          const isSelected = selectedMonumentId === m.id;
          return (
            <button
              key={m.id}
              onClick={() => { setSelectedMonumentId(m.id); setActiveHotspot(null); }}
              className={`px-5 py-3 rounded-t-lg font-sans text-xs sm:text-sm font-bold tracking-wide transition-all whitespace-nowrap flex items-center space-x-2 ${
                isSelected
                  ? 'bg-white border-t-2 border-x border-heritage-sandstoneDark text-heritage-terracotta shadow-sm'
                  : 'text-heritage-muted hover:text-heritage-charcoal hover:bg-heritage-sandstone/60'
              }`}
            >
              <span>{m.name}</span>
            </button>
          );
        })}
      </div>

      {/* Monument Detail View */}
      <section className="bg-white rounded-lg p-6 sm:p-10 border border-heritage-sandstoneDark shadow-sm space-y-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-heritage-sandstoneDark">
          <div>
            <span className="font-sans font-bold text-xs uppercase tracking-widest text-heritage-gold block">
              {currentMonument.architectureType}
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-heritage-charcoal mt-1">
              {currentMonument.name} {currentMonument.tamilName && <span className="font-serif font-normal text-lg text-heritage-indigo">({currentMonument.tamilName})</span>}
            </h2>
            <div className="text-xs font-sans text-heritage-muted mt-1">
              <strong>Period & Patron:</strong> {currentMonument.period} • {currentMonument.patron}
            </div>
          </div>
        </div>

        {/* Image & Interactive Hotspot Canvas */}
        <div className="space-y-4">
          <div className="relative rounded-lg overflow-hidden border border-heritage-sandstoneDark shadow-md group">
            <img
              src={currentMonument.image}
              alt={currentMonument.name}
              className="w-full max-h-[520px] object-cover cursor-pointer"
              onClick={() => openLightbox(currentMonument.image, currentMonument.name, currentMonument.caption)}
            />

            {/* Hotspot Markers if available (e.g., Great Bas-Relief) */}
            {currentMonument.hotspots && currentMonument.hotspots.map((hs) => (
              <button
                key={hs.id}
                onClick={() => setActiveHotspot(activeHotspot === hs.id ? null : hs.id)}
                style={{ top: `${hs.y}%`, left: `${hs.x}%` }}
                className={`absolute w-7 h-7 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center font-sans font-bold text-xs transition-all shadow-lg ${
                  activeHotspot === hs.id
                    ? 'bg-heritage-gold text-heritage-charcoal ring-4 ring-white scale-125'
                    : 'bg-heritage-terracotta text-white hover:scale-110 ring-2 ring-white/80'
                }`}
                title={hs.title}
                aria-label={hs.title}
              >
                <HelpCircle className="w-4 h-4" />
              </button>
            ))}

            <div className="absolute bottom-3 left-3 bg-black/75 text-white text-[11px] font-sans px-3 py-1 rounded backdrop-blur-sm pointer-events-none">
              Click hotspots or image to inspect details
            </div>
          </div>

          <div className="font-serif italic text-xs sm:text-sm text-heritage-muted text-center max-w-4xl mx-auto">
            {currentMonument.caption}
          </div>

          {/* Active Hotspot Callout Box */}
          {activeHotspot && currentMonument.hotspots && (
            <div className="p-4 bg-heritage-sandstone border-l-4 border-heritage-gold rounded text-xs sm:text-sm font-sans space-y-1 shadow-sm">
              {(() => {
                const hs = currentMonument.hotspots.find(h => h.id === activeHotspot);
                if (!hs) return null;
                return (
                  <>
                    <strong className="text-heritage-indigo text-sm block">{hs.title}</strong>
                    <p className="text-heritage-umber leading-relaxed">{hs.description}</p>
                  </>
                );
              })()}
            </div>
          )}
        </div>

        {/* Narrative & Thematic Analysis Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg text-heritage-terracotta flex items-center space-x-2">
              <Compass className="w-4 h-4" />
              <span>Architectural & Structural Syntax</span>
            </h3>
            <p className="font-serif text-base text-heritage-umber leading-relaxed">
              {currentMonument.thematicAnalysis}
            </p>
            <div className="space-y-2 pt-2">
              <span className="font-sans font-bold text-xs uppercase tracking-wider text-heritage-indigo block">
                Key Architectural Dimensions:
              </span>
              <ul className="space-y-1.5 text-xs font-sans text-heritage-umber list-disc list-inside">
                {currentMonument.architecturalFeatures.map((feat, idx) => (
                  <li key={idx} className="leading-relaxed">{feat}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg text-heritage-terracotta flex items-center space-x-2">
              <Layers className="w-4 h-4" />
              <span>Iconography & Mythological Meaning</span>
            </h3>
            <div className="space-y-2">
              <span className="font-sans font-bold text-xs uppercase tracking-wider text-heritage-indigo block">
                Primary Sculptural Motifs:
              </span>
              <ul className="space-y-1.5 text-xs font-sans text-heritage-umber list-disc list-inside">
                {currentMonument.iconography.map((icon, idx) => (
                  <li key={idx} className="leading-relaxed">{icon}</li>
                ))}
              </ul>
            </div>

            {currentMonument.conservationNotes && (
              <div className="p-3.5 bg-heritage-sandstone rounded border border-heritage-sandstoneDark text-xs font-sans mt-4">
                <span className="font-bold text-heritage-terracotta block mb-1">Conservation & Littoral Dynamics:</span>
                <p className="text-heritage-muted leading-relaxed">{currentMonument.conservationNotes}</p>
              </div>
            )}
          </div>

        </div>

      </section>

      {/* The Śleṣa (Double Meaning) Debate Special Feature */}
      <section className="bg-heritage-parchment rounded-lg p-8 sm:p-10 border-2 border-heritage-gold shadow-md space-y-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-heritage-gold/20 text-heritage-charcoal text-xs font-sans font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4 text-heritage-terracotta" />
            <span>Art Historical Debate & Epigraphical Synthesis</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-heritage-terracotta">
            {SLESHA_DEBATE_POINTS.title}
          </h2>
          <div className="font-serif italic text-base text-heritage-indigo mt-1">
            Grounded in scholarship by {SLESHA_DEBATE_POINTS.scholar}
          </div>
          <p className="font-serif text-base text-heritage-umber mt-3 leading-relaxed">
            {SLESHA_DEBATE_POINTS.summary}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {SLESHA_DEBATE_POINTS.aspects.map((asp, idx) => (
            <div key={idx} className="bg-white p-5 rounded-lg border border-heritage-sandstoneDark shadow-sm space-y-2">
              <span className="w-7 h-7 rounded-full bg-heritage-terracotta text-white font-sans font-bold text-xs flex items-center justify-center">
                {idx + 1}
              </span>
              <h3 className="font-display font-bold text-base text-heritage-indigo">
                {asp.heading}
              </h3>
              <p className="font-serif text-sm text-heritage-umber leading-relaxed">
                {asp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Monolithic Architecture Laboratory: The Pancha Rathas Profile */}
      <section className="bg-white rounded-lg p-8 sm:p-10 border border-heritage-sandstoneDark shadow-sm space-y-6">
        <div>
          <h2 className="font-display font-bold text-2xl text-heritage-charcoal">
            The Pancha Rathas: Dravidian Roof Taxonomy
          </h2>
          <p className="font-serif italic text-sm text-heritage-muted mt-1">
            How 7th-century Pallava sculptors established the foundational vocabulary of South Indian temple architecture:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          
          <div className="p-4 bg-heritage-sandstone rounded border border-heritage-sandstoneDark space-y-1.5">
            <span className="font-sans font-bold text-xs text-heritage-terracotta uppercase block">Draupadi Ratha</span>
            <h4 className="font-display font-bold text-sm text-heritage-indigo">Kuṭāgāra / Bānglā</h4>
            <p className="font-sans text-[11px] text-heritage-muted">Curvilinear thatched-hut roof with corner ribs, dedicated to Goddess Durgā.</p>
          </div>

          <div className="p-4 bg-heritage-sandstone rounded border border-heritage-sandstoneDark space-y-1.5">
            <span className="font-sans font-bold text-xs text-heritage-terracotta uppercase block">Arjuna Ratha</span>
            <h4 className="font-display font-bold text-sm text-heritage-indigo">Dvitāla Vimāna</h4>
            <p className="font-sans text-[11px] text-heritage-muted">Square two-storeyed vimāna crowned with an octagonal dome (śikhara).</p>
          </div>

          <div className="p-4 bg-heritage-sandstone rounded border border-heritage-sandstoneDark space-y-1.5">
            <span className="font-sans font-bold text-xs text-heritage-terracotta uppercase block">Bhima Ratha</span>
            <h4 className="font-display font-bold text-sm text-heritage-indigo">Śālā / Wagon-Vault</h4>
            <p className="font-sans text-[11px] text-heritage-muted">Oblong rectangular shrine with a barrel-vaulted roof and chaitya gable ends.</p>
          </div>

          <div className="p-4 bg-heritage-sandstone rounded border border-heritage-sandstoneDark space-y-1.5">
            <span className="font-sans font-bold text-xs text-heritage-terracotta uppercase block">Dharmaraja Ratha</span>
            <h4 className="font-display font-bold text-sm text-heritage-indigo">Tritāla Vimāna</h4>
            <p className="font-sans text-[11px] text-heritage-muted">Three-tiered pyramidal vimāna (35 ft), prototype for subsequent imperial Dravidian temples.</p>
          </div>

          <div className="p-4 bg-heritage-sandstone rounded border border-heritage-sandstoneDark space-y-1.5">
            <span className="font-sans font-bold text-xs text-heritage-terracotta uppercase block">Nakula-Sahadeva</span>
            <h4 className="font-display font-bold text-sm text-heritage-indigo">Gajapṛṣṭha (Apsidal)</h4>
            <p className="font-sans text-[11px] text-heritage-muted">Horseshoe elephant-backed plan standing beside a free-standing monolithic elephant.</p>
          </div>

        </div>
      </section>

    </div>
  );
};
