import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-slower"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 backdrop-blur-sm">
            <i className="ri-user-star-line text-purple-400"></i>
            <span className="text-purple-400 text-sm font-medium">{t('about.badge')}</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
            {t('about.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Info */}
          <div className="space-y-6">
            <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <i className="ri-user-line text-2xl text-purple-400"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{t('about.name.label')}</h3>
                  <p className="text-gray-400">{t('about.name.value')}</p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <i className="ri-graduation-cap-line text-2xl text-purple-400"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{t('about.education.label')}</h3>
                  <p className="text-gray-400">{t('about.education.value')}</p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <i className="ri-lightbulb-line text-2xl text-purple-400"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{t('about.expertise.label')}</h3>
                  <p className="text-gray-400">{t('about.expertise.value')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Hobbies */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="ri-heart-line text-purple-400"></i>
              {t('about.hobbies.title')}
            </h3>
            
            <div className="space-y-4">
              <div className="group flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <i className="ri-box-3-line text-2xl text-purple-400"></i>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">{t('about.hobbies.rubik')}</span>
              </div>

              <div className="group flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <i className="ri-gamepad-line text-2xl text-purple-400"></i>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">{t('about.hobbies.gaming')}</span>
              </div>

              <div className="group flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <i className="ri-code-line text-2xl text-purple-400"></i>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">{t('about.hobbies.programming')}</span>
              </div>

              <div className="group flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <svg className="w-7 h-7 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C10.34 2 9 3.34 9 5c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.66-1.34-3-3-3zm0 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c0-.29 2.67-2 6-2s6 1.71 6 2H6z"/>
                    <circle cx="12" cy="5" r="2"/>
                    <path d="M12 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    <ellipse cx="12" cy="18" rx="4" ry="1.5" opacity="0.3"/>
                  </svg>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">{t('about.hobbies.girlfriend')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
