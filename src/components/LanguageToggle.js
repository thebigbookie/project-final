// src/components/LanguageToggle.js
import React from 'react';

const LanguageToggle = ({ lang, setLang }) => {
  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'es' : 'en');
  };

  return (
    <button onClick={toggleLanguage} className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 transition-colors">
      {lang === 'en' ? 'Español' : 'English'}
    </button>
  );
};

export default LanguageToggle;