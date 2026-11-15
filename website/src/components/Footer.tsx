import React from 'react';
import { Landmark, ShieldCheck, FileText, Download } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-heritage-charcoal text-heritage-sandstone border-t-4 border-heritage-terracotta mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Col 1: Overview */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded bg-heritage-terracotta flex items-center justify-center text-heritage-goldLight">
                <Landmark className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-base tracking-wider text-heritage-gold">
                INDIAN ART HERITAGE
              </span>
            </div>
            <p className="font-serif italic text-sm text-heritage-sandstoneDark leading-relaxed">
              An academic digital museum exhibition, research ledger, and publication repository investigating ancient Vākāṭaka murals, Pallava monolithic granite architecture, and living Indic sacred geometry.
            </p>
            <div className="flex items-center space-x-2 text-xs text-heritage-goldLight pt-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Academic Integrity Verified (ASI & UNESCO Documentation)</span>
            </div>
          </div>

          {/* Col 2: Academic Deliverables */}
          <div className="space-y-3">
            <h3 className="font-sans font-bold uppercase text-xs tracking-wider text-heritage-gold">
              Master Deliverables
            </h3>
            <ul className="space-y-2 text-xs font-sans text-heritage-sandstoneDark">
              <li>
                <a 
                  href="/deliverables/ajanta_storyboard/Ajanta_Storyboard_Publication.pdf" 
                  download 
                  className="hover:text-heritage-gold transition-colors flex items-center space-x-1"
                >
                  <Download className="w-3.5 h-3.5 text-heritage-terracotta" />
                  <span>Ajanta 8-Panel Storyboard (PDF)</span>
                </a>
              </li>
              <li>
                <a 
                  href="/deliverables/mahabalipuram_analysis/Mahabalipuram_Thematic_Report.docx" 
                  download 
                  className="hover:text-heritage-gold transition-colors flex items-center space-x-1"
                >
                  <Download className="w-3.5 h-3.5 text-heritage-terracotta" />
                  <span>Mahabalipuram Report (Word .docx)</span>
                </a>
              </li>
              <li>
                <a 
                  href="/deliverables/mahabalipuram_analysis/Mahabalipuram_Thematic_Report.pdf" 
                  download 
                  className="hover:text-heritage-gold transition-colors flex items-center space-x-1"
                >
                  <Download className="w-3.5 h-3.5 text-heritage-terracotta" />
                  <span>Mahabalipuram Report (PDF)</span>
                </a>
              </li>
              <li>
                <a 
                  href="/deliverables/mahabalipuram_analysis/Mahabalipuram_Presentation.pptx" 
                  download 
                  className="hover:text-heritage-gold transition-colors flex items-center space-x-1"
                >
                  <Download className="w-3.5 h-3.5 text-heritage-terracotta" />
                  <span>Mahabalipuram Deck (PowerPoint)</span>
                </a>
              </li>
              <li>
                <a 
                  href="/deliverables/kolam_rangoli_poster/Kolam_Rangoli_Academic_Poster.pdf" 
                  download 
                  className="hover:text-heritage-gold transition-colors flex items-center space-x-1"
                >
                  <Download className="w-3.5 h-3.5 text-heritage-terracotta" />
                  <span>Kolam & Rangoli Poster (Print PDF)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Student Research Team Placeholders */}
          <div className="space-y-3">
            <h3 className="font-sans font-bold uppercase text-xs tracking-wider text-heritage-gold">
              Student Research Team (5 Placeholders)
            </h3>
            <div className="text-xs space-y-1.5 text-heritage-sandstoneDark font-sans">
              <div><strong className="text-white">[Student 1 Name Placeholder]</strong> — Roll No: [Roll 01]</div>
              <div><strong className="text-white">[Student 2 Name Placeholder]</strong> — Roll No: [Roll 02]</div>
              <div><strong className="text-white">[Student 3 Name Placeholder]</strong> — Roll No: [Roll 03]</div>
              <div><strong className="text-white">[Student 4 Name Placeholder]</strong> — Roll No: [Roll 04]</div>
              <div><strong className="text-white">[Student 5 Name Placeholder]</strong> — Roll No: [Roll 05]</div>
            </div>
            <div className="pt-2 text-[11px] text-neutral-400">
              Department of Fine Arts & Archaeology • Session 2026–2027
            </div>
          </div>

          {/* Col 4: Scholarly Foundations */}
          <div className="space-y-3">
            <h3 className="font-sans font-bold uppercase text-xs tracking-wider text-heritage-gold">
              Academic Authorities
            </h3>
            <p className="text-xs text-heritage-sandstoneDark leading-relaxed">
              Groundwork established by the Archaeological Survey of India (ASI), Dieter Schlingloff (Ajanta), Michael D. Rabe (Māmallapuram Śleṣa), Walter Spink, Stella Kramrisch, and Prof. Gift Siromoney (Kolam Array Grammars).
            </p>
            <div className="text-[11px] text-neutral-400 border-t border-neutral-700 pt-2">
              All artistic reconstructions are explicitly labelled and distinct from original archaeological evidence.
            </div>
          </div>

        </div>

        <div className="border-t border-neutral-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400">
          <div>
            © 2026 Indian Art Heritage Academic Project. Open Educational Heritage License.
          </div>
          <div className="mt-2 sm:mt-0 flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <FileText className="w-3.5 h-3.5 text-heritage-gold" />
              <span>WCAG 2.1 AA Compliant</span>
            </span>
            <span>•</span>
            <span>Vite + React 18 + TypeScript</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
