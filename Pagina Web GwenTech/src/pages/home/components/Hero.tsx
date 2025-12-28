
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!showContent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#060010]">
        <div className="rubiks-cube-animation">
          <div className="cube">
            <div className="face front"></div>
            <div className="face back"></div>
            <div className="face right"></div>
            <div className="face left"></div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[#060010]">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-violet-900/20"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl animate-float-slower"></div>
        
        {/* Floating Rubik's Cube */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
          <div className="rubiks-cube-float">
            <div className="cube-3d">
              <div className="face-3d front"></div>
              <div className="face-3d back"></div>
              <div className="face-3d right"></div>
              <div className="face-3d left"></div>
              <div className="face-3d top"></div>
              <div className="face-3d bottom"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8 animate-fade-in-up backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <span className="text-purple-400 text-sm font-medium">{t('hero.badge')}</span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up animation-delay-200">
          <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-gradient-x">
            {t('hero.title')}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed">
          {t('hero.description')}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in-up animation-delay-600">
          <a
            href="#service-request"
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 whitespace-nowrap"
          >
            <span className="relative z-10 flex items-center gap-2">
              <i className="ri-tools-line text-xl"></i>
              {t('hero.cta.primary')}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>

          <a
            href="https://wa.me/5219841082210"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-lg border border-purple-500/30 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 whitespace-nowrap"
          >
            <span className="flex items-center gap-2">
              <i className="ri-whatsapp-line text-xl group-hover:scale-110 transition-transform"></i>
              {t('hero.cta.secondary')}
            </span>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-800">
          <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            <div className="relative">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                100+
              </div>
              <div className="text-gray-400 text-sm">{t('hero.stats.repairs')}</div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            <div className="relative">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                24/7
              </div>
              <div className="text-gray-400 text-sm">{t('hero.stats.availability')}</div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            <div className="relative">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                100%
              </div>
              <div className="text-gray-400 text-sm">{t('hero.stats.satisfaction')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-3xl text-purple-400"></i>
      </div>
    </section>
  );
};

export default Hero;
