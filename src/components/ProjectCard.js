'use client';

import React from 'react';

const ProjectCard = ({ project, lang }) => {
  const { title, description, liveSite, githubRepo } = project;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{title[lang]}</h2>
      <p className="text-gray-500 mb-4">{description[lang]}</p>
      
      {/* Responsive iframe container with 16:9 aspect ratio */}
      <div className="relative w-full overflow-hidden rounded-xl border-2 border-gray-200 shadow-md" style={{ paddingTop: '56.25%' }}>
        <iframe
          src={liveSite}
          title={title[lang]}
          frameBorder="0"
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full"
          sandbox="allow-same-origin allow-scripts"
        ></iframe>
      </div>
      
      <div className="flex justify-between items-center mt-4">
        <a
          href={liveSite}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-semibold text-sm md:text-base"
        >
          {lang === 'en' ? 'Visit Site' : 'Visitar Sitio'}
        </a>
        {githubRepo && (
          <a
            href={githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition-colors text-sm md:text-base"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;