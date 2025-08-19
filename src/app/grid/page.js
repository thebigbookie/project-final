'use client';

import React, { useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import LanguageToggle from '../../components/LanguageToggle';
import { projects } from '../../data/projectData';

const GridPortfolio = () => {
  const [lang, setLang] = useState('en');
  
  // Custom Tailwind class for the grid background pattern
  const bgGridStyle = {
    backgroundColor: '#f8fafc',
    backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
    backgroundSize: '2rem 2rem'
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={bgGridStyle}>
      <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 w-full max-w-7xl transform transition-transform duration-300 hover:scale-[1.01] overflow-hidden">
        
        {/* Header section */}
        <header className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <LanguageToggle lang={lang} setLang={setLang} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-2">
            {lang === 'en' ? 'My Projects' : 'Mis Proyectos'}
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {lang === 'en' ? 'A showcase of my featured projects and websites.' : 'Una muestra de mis proyectos y sitios web destacados.'}
          </p>
        </header>
        
        {/* Main responsive grid for multiple showcase cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} lang={lang} />
          ))}
        </div>
        
        {/* Footer with a simple message */}
        <footer className="text-center mt-10">
          <p className="text-sm text-gray-400">
            {lang === 'en' ? 'Created with ❤️ and a touch of magic.' : 'Creado con ❤️ y un toque de magia.'}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default GridPortfolio;