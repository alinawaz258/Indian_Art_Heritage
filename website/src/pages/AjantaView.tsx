import React, { useState } from 'react';
import { AJANTA_PANELS, AJANTA_TEAM, MINERAL_PIGMENTS } from '../data/storyboardData';
import { ChevronLeft, ChevronRight, Download, BookOpen, ShieldCheck, Sparkles, Eye, Info } from 'lucide-react';

interface AjantaViewProps {
  openLightbox: (img: string, title: string, caption?: string) => void;
}

export const AjantaView: React.FC<AjantaViewProps> = ({ openLightbox }) => {
  const [currentPanelIdx, setCurrentPanelIdx] = useState(0);
  const currentPanel = AJANTA_PANELS[currentPanelIdx];

  const handlePrev = () => {
    if (currentPanelIdx > 0) setCurrentPanelIdx(currentPanelIdx - 1);
  };

  const handleNext = () => {
    if (currentPanelIdx < AJANTA_PANELS.length - 1) setCurrentPanelIdx(currentPanelIdx + 1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Monograph Bar */}
      <div className="bg-white rounded-lg p-6 sm:p-8 border border-heritage-sandstoneDark shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-heritage-terracotta font-bold mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Component A • Illustrated Jātaka Storyboard</span>
          </div>
          <h1 className="font-display font-black text-2xl sm:text-4xl text-heritage-charcoal leading-tight">
            The Sacrifice of King Ṣaḍdanta
          </h1>
          <p className="font-serif italic text-base sm:text-lg text-heritage-indigo mt-1">
            Ajanta Cave 17, Right Aisle Wall • Vākāṭaka Dynasty (Reign of Hariṣeṇa, c. 460–477 CE)
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/deliverables/ajanta_storyboard/Ajanta_Storyboard_Publication.pdf"
            download
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded bg-heritage-terracotta hover:bg-heritage-terracottaDark text-white font-sans text-xs font-bold uppercase tracking-wider transition-colors shadow"
          >
            <Download className="w-4 h-4" />
            <span>Download Publication (PDF)</span>
          </a>
          <a
            href="/deliverables/ajanta_storyboard/Ajanta_Storyboard_Publication.html"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded bg-heritage-sandstone hover:bg-heritage-sandstoneDark text-heritage-charcoal font-sans text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <Eye className="w-4 h-4 text-heritage-indigo" />
            <span>Printable HTML Booklet</span>
          </a>
        </div>
      </div>

      {/* Main Storyboard Stage */}
      <section className="bg-white rounded-lg border border-heritage-sandstoneDark shadow-lg overflow-hidden">
        
        {/* Top Control Bar */}
        <div className="bg-heritage-indigo text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-heritage-gold">
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-1 rounded bg-heritage-gold text-heritage-charcoal font-sans text-xs font-bold tracking-wider">
              PANEL {currentPanel.panelNumber} OF 8
            </span>
            <h2 className="font-display font-bold text-lg sm:text-xl text-white">
              {currentPanel.title}
            </h2>
          </div>
          <div className="font-serif italic text-sm text-heritage-sandstoneDark">
            {currentPanel.sanskritTitle}
          </div>
        </div>

        {/* Panel Main Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left / Top: Visual Artwork */}
          <div className="lg:col-span-7 bg-black flex flex-col items-center justify-center relative p-2 sm:p-4 group">
            <img
              src={currentPanel.reconstructionImage}
              alt={currentPanel.title}
              className="max-h-[500px] w-full object-contain rounded shadow-lg cursor-pointer"
              onClick={() => openLightbox(
                currentPanel.reconstructionImage,
                `${currentPanel.title} (Panel ${currentPanel.panelNumber})`,
                `Artistic reconstruction inspired by Ajanta Cave 17 right corridor wall. Setting: ${currentPanel.setting}.`
              )}
            />
            
            {/* Reconstruction Label Badge */}
            <div className="absolute bottom-6 right-6 bg-heritage-indigo/90 border border-heritage-gold text-heritage-parchment text-[11px] font-sans px-3 py-1 rounded shadow-md backdrop-blur-sm pointer-events-none">
              Artistic Reconstruction • Classical Vākāṭaka Style
            </div>

            {/* Click to expand prompt */}
            <button
              onClick={() => openLightbox(
                currentPanel.reconstructionImage,
                `${currentPanel.title} (Panel ${currentPanel.panelNumber})`,
                `Setting: ${currentPanel.setting}. Theme: ${currentPanel.ethicalTheme}.`
              )}
              className="absolute top-6 right-6 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Enlarge artwork"
            >
              <Eye className="w-5 h-5 text-heritage-goldLight" />
            </button>
          </div>

          {/* Right: Narrative, Dialogue, Iconography */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-heritage-parchment overflow-y-auto max-h-[600px] custom-scrollbar">
            
            <div className="space-y-6">
              
              {/* Setting Tag */}
              <div className="flex items-center space-x-2 text-xs font-sans text-heritage-muted">
                <span className="font-bold text-heritage-terracotta uppercase">Scene Setting:</span>
                <span>{currentPanel.setting}</span>
              </div>

              {/* Narration */}
              <div className="border-l-4 border-heritage-gold pl-4 py-1">
                <p className="font-serif italic text-lg sm:text-xl text-heritage-charcoal leading-relaxed">
                  "{currentPanel.narration}"
                </p>
              </div>

              {/* Dialogue Transcript */}
              <div className="space-y-3 bg-heritage-sandstone p-4 rounded-md border border-heritage-sandstoneDark">
                <div className="text-xs font-sans font-bold uppercase tracking-wider text-heritage-indigo flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-heritage-gold" />
                  <span>Dramatized Script & Dialogue</span>
                </div>
                {currentPanel.dialogue.map((d, idx) => (
                  <div key={idx} className="font-sans text-xs sm:text-sm leading-relaxed">
                    <strong className="text-heritage-terracotta">{d.speaker}:</strong>{' '}
                    <span className="text-heritage-umber">"{d.text}"</span>
                  </div>
                ))}
              </div>

              {/* Iconographical Notes */}
              <div className="space-y-1.5 pt-2 border-t border-heritage-sandstoneDark text-xs font-sans text-heritage-muted">
                <div className="flex items-center space-x-1.5 text-heritage-indigo font-bold">
                  <Info className="w-3.5 h-3.5" />
                  <span>Dieter Schlingloff Scene Analysis</span>
                </div>
                <p className="leading-relaxed">
                  {currentPanel.iconographicNotes}
                </p>
              </div>

              {/* Ethical Theme Badge */}
              <div className="inline-block px-3 py-1.5 rounded bg-heritage-terracotta/10 text-heritage-terracotta border border-heritage-terracotta/20 text-xs font-sans font-bold">
                Ethical Theme: {currentPanel.ethicalTheme}
              </div>

            </div>

            {/* Stepper Controls */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-heritage-sandstoneDark">
              <button
                onClick={handlePrev}
                disabled={currentPanelIdx === 0}
                className="inline-flex items-center space-x-1.5 px-3 py-2 rounded bg-heritage-sandstone hover:bg-heritage-sandstoneDark text-heritage-charcoal font-sans text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Panel</span>
              </button>
              
              <span className="font-sans text-xs font-bold text-heritage-muted">
                {currentPanelIdx + 1} / {AJANTA_PANELS.length}
              </span>

              <button
                onClick={handleNext}
                disabled={currentPanelIdx === AJANTA_PANELS.length - 1}
                className="inline-flex items-center space-x-1.5 px-3 py-2 rounded bg-heritage-terracotta hover:bg-heritage-terracottaDark text-white font-sans text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <span>Next Panel</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Thumbnail Filmstrip */}
        <div className="bg-heritage-sandstoneDark/40 p-4 border-t border-heritage-sandstoneDark overflow-x-auto custom-scrollbar">
          <div className="flex items-center space-x-3 min-w-max">
            {AJANTA_PANELS.map((p, idx) => (
              <button
                key={p.panelNumber}
                onClick={() => setCurrentPanelIdx(idx)}
                className={`relative w-24 h-16 rounded overflow-hidden border-2 transition-all flex-shrink-0 ${
                  currentPanelIdx === idx
                    ? 'border-heritage-terracotta scale-105 shadow-md'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={p.reconstructionImage}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 bg-black/80 text-white font-sans text-[10px] px-1 font-bold">
                  P{p.panelNumber}
                </span>
              </button>
            ))}
          </div>
        </div>

      </section>

      {/* Authentic Evidence Comparison Module */}
      <section className="bg-white rounded-lg p-8 sm:p-10 border border-heritage-sandstoneDark shadow-sm space-y-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-1.5 text-xs font-sans font-bold uppercase tracking-wider text-heritage-gold mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Archaeological Grounding & Authenticity Check</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-heritage-terracotta">
            Authentic Murals vs. Pedagogical Reconstructions
          </h2>
          <p className="font-serif text-base text-heritage-umber mt-2">
            In strict compliance with academic standards, we present the actual surviving archaeological evidence from the Archaeological Survey of India alongside our pedagogical storyboard reconstructions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          
          <div 
            className="border border-heritage-sandstoneDark rounded-lg overflow-hidden bg-heritage-parchment cursor-pointer group"
            onClick={() => openLightbox("/assets/authentic/ajanta_cave_17_mural_chaddanta.jpg", "Original Surviving Mural: Ṣaḍdanta Jātaka", "Cave 17 right corridor wall. Photo: ASI / Wikimedia Commons / CC BY-SA.")}
          >
            <div className="h-56 overflow-hidden">
              <img 
                src="/assets/authentic/ajanta_cave_17_mural_chaddanta.jpg" 
                alt="Original Ṣaḍdanta Mural" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <span className="font-sans text-[11px] font-bold text-heritage-terracotta uppercase block">Cave 17 Right Wall</span>
              <h3 className="font-display font-bold text-base text-heritage-charcoal mt-0.5">Ṣaḍdanta Jātaka Mural Original</h3>
              <p className="font-serif italic text-xs text-heritage-muted mt-1">
                Notice the mineral ochres and weathered mud plaster ground documenting the historical herd and lotus lake.
              </p>
            </div>
          </div>

          <div 
            className="border border-heritage-sandstoneDark rounded-lg overflow-hidden bg-heritage-parchment cursor-pointer group"
            onClick={() => openLightbox("/assets/authentic/ajanta_cave_17_facade.jpg", "Veranda & Pillared Facade of Cave 17", "Patronage of King Upendragupta of Rṣīka, c. 460-477 CE. Photo: Wikimedia / CC BY-SA 4.0.")}
          >
            <div className="h-56 overflow-hidden">
              <img 
                src="/assets/authentic/ajanta_cave_17_facade.jpg" 
                alt="Cave 17 Facade" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <span className="font-sans text-[11px] font-bold text-heritage-terracotta uppercase block">Cave 17 Architecture</span>
              <h3 className="font-display font-bold text-base text-heritage-charcoal mt-0.5">Pillared Monolithic Veranda</h3>
              <p className="font-serif italic text-xs text-heritage-muted mt-1">
                Preserves the 29-verse Sanskrit donor inscription of King Upendragupta recording the monastic excavation.
              </p>
            </div>
          </div>

          <div 
            className="border border-heritage-sandstoneDark rounded-lg overflow-hidden bg-heritage-parchment cursor-pointer group"
            onClick={() => openLightbox("/assets/authentic/ajanta_cave_1_padmapani.jpg", "Bodhisattva Padmapani, Cave 1", "Classic Vākāṭaka aesthetic baseline: graceful almond eyes, lotus flower, and imported lapis lazuli. Photo: CC BY 2.0.")}
          >
            <div className="h-56 overflow-hidden">
              <img 
                src="/assets/authentic/ajanta_cave_1_padmapani.jpg" 
                alt="Bodhisattva Padmapani" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <span className="font-sans text-[11px] font-bold text-heritage-terracotta uppercase block">Chromatic Reference</span>
              <h3 className="font-display font-bold text-base text-heritage-charcoal mt-0.5">Padmapani Bodhisattva (Cave 1)</h3>
              <p className="font-serif italic text-xs text-heritage-muted mt-1">
                Masterpiece illustrating the Vākāṭaka mineral palette, shading, and the emotional serenity of Bodhicitta.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Mineral Pigment Chemistry Guide */}
      <section className="bg-white rounded-lg p-8 sm:p-10 border border-heritage-sandstoneDark shadow-sm">
        <h2 className="font-display font-bold text-2xl text-heritage-charcoal mb-2">
          The Mineral Chemistry of Ajanta's Fresco-Secco
        </h2>
        <p className="font-serif italic text-sm text-heritage-muted mb-6">
          Ajanta's painters did not use Italian wet fresco, but tempera on dry mud-plaster using inorganic minerals:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {MINERAL_PIGMENTS.map((p, idx) => (
            <div key={idx} className="bg-heritage-sandstone p-4 rounded border border-heritage-sandstoneDark space-y-1.5">
              <span className="font-sans font-bold text-xs text-heritage-terracotta uppercase block">
                {p.vernacular}
              </span>
              <h3 className="font-display font-bold text-sm text-heritage-indigo">
                {p.name}
              </h3>
              <p className="font-sans text-[11px] text-heritage-muted">
                <strong>Source:</strong> {p.origin}
              </p>
              <p className="font-sans text-[11px] text-heritage-umber">
                <strong>Application:</strong> {p.use}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Student Team Placeholders Block */}
      <section className="bg-heritage-sandstone rounded-lg p-6 sm:p-8 border border-heritage-sandstoneDark">
        <h3 className="font-display font-bold text-lg text-heritage-indigo mb-4">
          Team of Five Student Researchers & Assigned Contributions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-xs font-sans">
          {AJANTA_TEAM.map((s) => (
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
