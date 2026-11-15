import React, { useEffect } from 'react';
import { X, ExternalLink, ShieldCheck } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  caption?: string;
  attribution?: string;
  license?: string;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  caption,
  attribution,
  license
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="relative max-w-5xl w-full bg-heritage-parchment rounded-lg shadow-2xl overflow-hidden border border-heritage-gold flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-heritage-indigo text-white border-b border-heritage-gold">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-heritage-goldLight" />
            <h3 className="font-display font-bold text-base sm:text-lg tracking-wide truncate max-w-md sm:max-w-xl">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-heritage-gold"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Image viewport */}
        <div className="flex-1 overflow-auto bg-black flex items-center justify-center p-2 sm:p-4">
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[62vh] max-w-full object-contain rounded"
          />
        </div>

        {/* Metadata Footer */}
        <div className="p-4 sm:p-6 bg-heritage-sandstone border-t border-heritage-sandstoneDark text-xs sm:text-sm text-heritage-umber font-sans">
          {caption && <p className="font-serif italic text-base sm:text-lg mb-2 text-heritage-charcoal">{caption}</p>}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-heritage-sandstoneDark/60 text-xs text-heritage-muted">
            <div>
              {attribution && <span><strong>Photographer / Archive:</strong> {attribution} </span>}
              {license && <span className="ml-2 px-2 py-0.5 rounded bg-heritage-terracotta text-white font-medium">{license}</span>}
            </div>
            <a
              href={imageSrc}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-1 text-heritage-indigo hover:text-heritage-terracotta font-medium"
            >
              <span>View Full Resolution</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
