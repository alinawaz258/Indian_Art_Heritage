import React, { useState } from 'react';
import { Landmark, Compass, Sparkles, BookOpen, Menu, X, Download } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Overview', icon: Landmark },
    { id: 'ajanta', label: 'Ajanta Storyboard', icon: BookOpen },
    { id: 'mahabalipuram', label: 'Mahabalipuram Analysis', icon: Compass },
    { id: 'kolam', label: 'Kolam & Rangoli Poster', icon: Sparkles },
    { id: 'provenance', label: 'Provenance & Archive', icon: Download }
  ];

  return (
    <header className="sticky top-0 z-40 bg-heritage-parchment/95 backdrop-blur-md border-b border-heritage-sandstoneDark shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand */}
          <div 
            onClick={() => { setCurrentTab('home'); setMobileMenuOpen(false); }}
            className="cursor-pointer flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 rounded-full bg-heritage-terracotta flex items-center justify-center text-heritage-sandstone shadow-md group-hover:bg-heritage-terracottaDark transition-colors">
              <Landmark className="w-5 h-5 text-heritage-goldLight" />
            </div>
            <div>
              <span className="font-display font-bold text-lg sm:text-xl tracking-wider text-heritage-terracotta block leading-tight">
                INDIAN ART HERITAGE
              </span>
              <span className="font-serif italic text-xs sm:text-sm text-heritage-indigo block">
                Ajanta • Mahabalipuram • Kolam & Rangoli
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentTab(item.id)}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-md font-sans text-xs lg:text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-heritage-terracotta text-white shadow-sm'
                      : 'text-heritage-umber hover:text-heritage-terracotta hover:bg-heritage-sandstone/60'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-heritage-goldLight' : 'text-heritage-indigo'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-heritage-umber hover:text-heritage-terracotta hover:bg-heritage-sandstone focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-heritage-parchment border-b border-heritage-sandstoneDark px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-md text-sm font-medium text-left ${
                  isActive
                    ? 'bg-heritage-terracotta text-white'
                    : 'text-heritage-umber hover:bg-heritage-sandstone'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-heritage-goldLight' : 'text-heritage-indigo'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
