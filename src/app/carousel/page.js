'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import LanguageToggle from '../../components/LanguageToggle';
import { projects } from '../../data/projectData';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CarouselPortfolio = () => {
  const [lang, setLang] = useState('en');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const bgGridStyle = {
    backgroundColor: '#f8fafc',
    backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
    backgroundSize: '2rem 2rem'
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={bgGridStyle}>
      <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 w-full max-w-7xl transform transition-transform duration-300 hover:scale-[1.01] overflow-hidden">
        
        {/* Header section with title and description */}
        <header className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <LanguageToggle lang={lang} setLang={setLang} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-2">
            {lang === 'en' ? 'My Projects' : 'Mis Proyectos'}
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {lang === 'en' ? 'A dynamic carousel of my featured projects and websites.' : 'Un carrusel dinámico de mis proyectos y sitios web destacados.'}
          </p>
        </header>

        {/* Carousel section */}
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="p-4">
              <div className="bg-gray-50 rounded-2xl p-6 shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">{project.title[lang]}</h2>
                <p className="text-gray-500 mb-4 text-center">{project.description[lang]}</p>
                
                {/* Responsive iframe container with 16:9 aspect ratio */}
                <div className="relative w-full overflow-hidden rounded-xl border-2 border-gray-200 shadow-md" style={{ paddingTop: '56.25%' }}>
                  <iframe
                    src={project.liveSite}
                    title={project.title[lang]}
                    frameBorder="0"
                    loading="lazy"
                    className="absolute top-0 left-0 w-full h-full"
                    sandbox="allow-same-origin allow-scripts"
                  ></iframe>
                </div>
                
                <div className="flex justify-center space-x-4 mt-6">
                  <a
                    href={project.liveSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-semibold"
                  >
                    {lang === 'en' ? 'View Live' : 'Ver en Vivo'}
                  </a>
                  {project.githubRepo && (
                    <a
                      href={project.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors font-semibold"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
        
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

export default CarouselPortfolio;