'use client';

import React, { useState } from 'react';
import LanguageToggle from '../../components/LanguageToggle';
import { projects } from '../../data/projectData';

const ShowcasePortfolio = () => {
  const [lang, setLang] = useState('en');

  // Assuming the first project is the one to showcase.
  const mainProject = projects[0];

  if (!mainProject) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-700">
        <p>
          {lang === 'en' ? 'No projects to display.' : 'No hay proyectos para mostrar.'}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* Main container with the same styles as the HTML example */}
      <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 w-full max-w-7xl transform transition-transform duration-300 hover:scale-[1.01] overflow-hidden">
        
        {/* Header section */}
        <header className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <LanguageToggle lang={lang} setLang={setLang} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-2">
            {mainProject.title[lang]}
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {mainProject.description[lang]}
          </p>
        </header>

        {/* Responsive iframe container with 16:9 aspect ratio */}
        <div className="relative w-full overflow-hidden rounded-2xl border-2 border-gray-200 shadow-xl" style={{ paddingTop: '56.25%' }}>
          <iframe
            id="website-iframe"
            src={mainProject.liveSite}
            title={mainProject.title[lang]}
            frameBorder="0"
            loading="lazy"
            className="absolute top-0 left-0 w-full h-full"
            sandbox="allow-same-origin allow-scripts"
          ></iframe>
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

export default ShowcasePortfolio;