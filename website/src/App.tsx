import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Lightbox } from './components/Lightbox';
import { Home } from './pages/Home';
import { AjantaView } from './pages/AjantaView';
import { MahabalipuramView } from './pages/MahabalipuramView';
import { KolamView } from './pages/KolamView';
import { ProvenanceView } from './pages/ProvenanceView';

export function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageSrc: string;
    title: string;
    caption?: string;
    attribution?: string;
    license?: string;
  }>({
    isOpen: false,
    imageSrc: '',
    title: ''
  });

  const openLightbox = (imageSrc: string, title: string, caption?: string, attribution?: string, license?: string) => {
    setLightboxState({
      isOpen: true,
      imageSrc,
      title,
      caption,
      attribution,
      license
    });
  };

  const closeLightbox = () => {
    setLightboxState(prev => ({ ...prev, isOpen: false }));
  };

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  return (
    <div className="min-h-screen flex flex-col bg-heritage-parchment text-heritage-umber font-sans">
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <main className="flex-grow">
        {currentTab === 'home' && (
          <Home setCurrentTab={setCurrentTab} openLightbox={openLightbox} />
        )}
        {currentTab === 'ajanta' && (
          <AjantaView openLightbox={openLightbox} />
        )}
        {currentTab === 'mahabalipuram' && (
          <MahabalipuramView openLightbox={openLightbox} />
        )}
        {currentTab === 'kolam' && (
          <KolamView openLightbox={openLightbox} />
        )}
        {currentTab === 'provenance' && (
          <ProvenanceView openLightbox={openLightbox} />
        )}
      </main>

      <Footer />

      <Lightbox
        isOpen={lightboxState.isOpen}
        onClose={closeLightbox}
        imageSrc={lightboxState.imageSrc}
        title={lightboxState.title}
        caption={lightboxState.caption}
        attribution={lightboxState.attribution}
        license={lightboxState.license}
      />
    </div>
  );
}

export default App;
