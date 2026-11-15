import React, { useState } from 'react';
import { PROVENANCE_ASSETS, ACADEMIC_BIBLIOGRAPHY } from '../data/provenanceData';
import { Download, ExternalLink, ShieldCheck, Search, Filter, BookOpen } from 'lucide-react';

interface ProvenanceViewProps {
  openLightbox: (img: string, title: string, caption?: string) => void;
}

export const ProvenanceView: React.FC<ProvenanceViewProps> = ({ openLightbox }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredAssets = PROVENANCE_ASSETS.filter((item) => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.creator.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.license.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Monograph Bar */}
      <div className="bg-white rounded-lg p-6 sm:p-8 border border-heritage-sandstoneDark shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-heritage-indigo font-bold mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-heritage-terracotta" />
            <span>Academic Research Ledger & Asset Provenance</span>
          </div>
          <h1 className="font-display font-black text-2xl sm:text-4xl text-heritage-charcoal leading-tight">
            Provenance, Rights & Bibliography
          </h1>
          <p className="font-serif italic text-base sm:text-lg text-heritage-muted mt-1">
            Complete verification audit, image credits, institutional repositories, and primary academic literature.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="./deliverables/ajanta_storyboard/Ajanta_Storyboard_Publication.pdf"
            download
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded bg-heritage-terracotta text-white font-sans text-xs font-bold uppercase transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Ajanta PDF</span>
          </a>
          <a
            href="./deliverables/mahabalipuram_analysis/Mahabalipuram_Thematic_Report.docx"
            download
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded bg-heritage-indigo text-white font-sans text-xs font-bold uppercase transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Report DOCX</span>
          </a>
          <a
            href="./deliverables/mahabalipuram_analysis/Mahabalipuram_Presentation.pptx"
            download
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded bg-heritage-sandstone hover:bg-heritage-sandstoneDark text-heritage-charcoal font-sans text-xs font-bold uppercase transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-heritage-indigo" />
            <span>Slides PPTX</span>
          </a>
          <a
            href="./deliverables/kolam_rangoli_poster/Kolam_Rangoli_Academic_Poster.pdf"
            download
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded bg-heritage-gold text-heritage-charcoal font-sans text-xs font-bold uppercase transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Poster PDF</span>
          </a>
        </div>
      </div>

      {/* Disclaimers & Methodology */}
      <section className="bg-heritage-parchment rounded-lg p-6 sm:p-8 border-l-4 border-heritage-terracotta shadow-sm space-y-3 font-sans text-xs sm:text-sm text-heritage-umber">
        <h2 className="font-display font-bold text-lg text-heritage-charcoal">
          Academic Integrity & Licensing Policy
        </h2>
        <p className="leading-relaxed">
          1. <strong>Authentic Heritage Photography:</strong> All monument and mural photographs are sourced exclusively from reputable institutional archives, the Archaeological Survey of India (ASI), UNESCO, or licensed contributors via Wikimedia Commons under verifiable Creative Commons (CC BY, CC BY-SA) or Public Domain licenses.
        </p>
        <p className="leading-relaxed">
          2. <strong>Pedagogical Artistic Reconstructions:</strong> All visual reconstructions are original compositions developed for educational storytelling. In strict observance of academic ethics, they are prominently labelled as reconstructions and are never described as original archaeological discoveries or authentic ancient paintings.
        </p>
      </section>

      {/* Search & Filter Toolbar */}
      <section className="bg-white rounded-lg p-6 border border-heritage-sandstoneDark shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Search box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-heritage-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search assets by title, photographer, or license..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded border border-heritage-sandstoneDark bg-heritage-parchment text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-heritage-terracotta"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-heritage-muted" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="py-2 px-3 rounded border border-heritage-sandstoneDark bg-heritage-parchment text-xs sm:text-sm font-sans text-heritage-umber focus:outline-none focus:ring-2 focus:ring-heritage-terracotta"
            >
              <option value="all">All Heritage Categories</option>
              <option value="ajanta">Ajanta Caves</option>
              <option value="mahabalipuram">Mahabalipuram</option>
              <option value="kolam_rangoli">Kolam & Rangoli</option>
            </select>
          </div>

        </div>

        {/* Results Count */}
        <div className="text-xs font-sans text-heritage-muted">
          Showing {filteredAssets.length} verified authentic media assets
        </div>

        {/* Assets Grid / Table */}
        <div className="overflow-x-auto pt-2">
          <table className="w-full border-collapse font-sans text-xs">
            <thead>
              <tr className="bg-heritage-sandstone text-heritage-charcoal border-b border-heritage-sandstoneDark">
                <th className="p-3 text-left font-bold">Thumbnail</th>
                <th className="p-3 text-left font-bold">Asset Title & Description</th>
                <th className="p-3 text-left font-bold">Category</th>
                <th className="p-3 text-left font-bold">Photographer / Source</th>
                <th className="p-3 text-left font-bold">License</th>
                <th className="p-3 text-left font-bold">Intended Placement</th>
                <th className="p-3 text-right font-bold">Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-heritage-sandstoneDark">
              {filteredAssets.map((asset) => (
                <tr key={asset.id} className="hover:bg-heritage-parchment transition-colors">
                  <td className="p-2.5">
                    <img
                      src={`./assets/authentic/${asset.filename}`}
                      alt={asset.title}
                      className="w-14 h-10 object-cover rounded border border-heritage-sandstoneDark cursor-pointer"
                      onClick={() => openLightbox(`./assets/authentic/${asset.filename}`, asset.title, `Photo: ${asset.creator}. License: ${asset.license}`)}
                    />
                  </td>
                  <td className="p-2.5 font-bold text-heritage-umber max-w-xs">
                    {asset.title}
                  </td>
                  <td className="p-2.5 uppercase text-[10px] font-bold text-heritage-indigo">
                    {asset.category}
                  </td>
                  <td className="p-2.5 text-heritage-muted max-w-[140px] truncate">
                    {asset.creator}
                  </td>
                  <td className="p-2.5">
                    <span className="px-2 py-0.5 rounded bg-heritage-sandstone text-heritage-terracotta font-bold text-[10px]">
                      {asset.license}
                    </span>
                  </td>
                  <td className="p-2.5 text-heritage-muted text-[11px] max-w-[160px]">
                    {asset.intendedPlacement}
                  </td>
                  <td className="p-2.5 text-right">
                    <a
                      href={asset.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1 text-heritage-indigo hover:text-heritage-terracotta font-bold text-[11px]"
                    >
                      <span>Archive</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Complete Consolidated Academic Bibliography */}
      <section className="bg-white rounded-lg p-8 sm:p-10 border border-heritage-sandstoneDark shadow-sm space-y-6">
        <div className="flex items-center space-x-2 text-heritage-terracotta">
          <BookOpen className="w-5 h-5" />
          <h2 className="font-display font-bold text-2xl text-heritage-charcoal">
            Consolidated Academic Bibliography
          </h2>
        </div>
        <p className="font-serif italic text-sm text-heritage-muted">
          All historical, iconographic, epigraphical, and ethnomathematical arguments are cited from the peer-reviewed literature below:
        </p>

        <div className="space-y-4 pt-2">
          {ACADEMIC_BIBLIOGRAPHY.map((bib, idx) => (
            <div key={idx} className="p-4 rounded bg-heritage-sandstone/70 border border-heritage-sandstoneDark font-sans text-xs space-y-1">
              <div className="text-heritage-charcoal text-sm leading-snug">
                <strong className="text-heritage-terracotta">{bib.author}</strong> ({bib.year}).{' '}
                <em className="font-serif text-base text-heritage-indigo">{bib.title}</em>.{' '}
                <span>{bib.publisher}.</span>
              </div>
              <div className="text-heritage-muted text-[11px] pt-1 border-t border-heritage-sandstoneDark">
                <strong>Academic Scope:</strong> {bib.scope}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
