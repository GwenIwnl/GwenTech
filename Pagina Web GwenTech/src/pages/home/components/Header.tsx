
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060010]/95 backdrop-blur-lg border-b border-purple-500/20 shadow-lg shadow-purple-500/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-12">
              <img 
                src="https://static.readdy.ai/image/8e842a3d425149bd94931785aa07d90d/ca0d5e3536ee96f40ca6889eef75ace8.png" 
                alt="GwenTech Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-gwentech text-white group-hover:text-purple-400 transition-colors duration-300">
              GwenTech
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm font-medium whitespace-nowrap cursor-pointer"
            >
              {t('nav.features')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm font-medium whitespace-nowrap cursor-pointer"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm font-medium whitespace-nowrap cursor-pointer"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm font-medium whitespace-nowrap cursor-pointer"
            >
              {t('nav.testimonials')}
            </button>
            <button
              onClick={() => scrollToSection('service-request')}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 text-sm font-semibold whitespace-nowrap cursor-pointer"
            >
              {t('nav.contact')}
            </button>
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-white/5 backdrop-blur-sm text-white rounded-lg border border-purple-500/30 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 text-sm font-medium whitespace-nowrap cursor-pointer"
            >
              {i18n.language === 'es' ? 'EN' : 'ES'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:text-purple-400 transition-colors cursor-pointer"
          >
            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-purple-500/20 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm font-medium cursor-pointer"
            >
              {t('nav.features')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm font-medium cursor-pointer"
            >
              {t('nav.services')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm font-medium cursor-pointer"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm font-medium cursor-pointer"
            >
              {t('nav.testimonials')}
            </button>
            <button
              onClick={() => scrollToSection('service-request')}
              className="block w-full text-left px-6 py-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg hover:scale-105 transition-all duration-300 text-sm font-semibold cursor-pointer"
            >
              {t('nav.contact')}
            </button>
            <button
              onClick={toggleLanguage}
              className="block w-full text-left px-4 py-2 bg-white/5 backdrop-blur-sm text-white rounded-lg border border-purple-500/30 hover:bg-white/10 transition-all duration-300 text-sm font-medium cursor-pointer"
            >
              {i18n.language === 'es' ? 'English' : 'Español'}
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
