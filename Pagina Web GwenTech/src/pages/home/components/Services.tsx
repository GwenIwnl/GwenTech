import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const hardwareServices = [
    { icon: 'ri-tools-line', key: 'maintenance' },
    { icon: 'ri-temp-hot-line', key: 'thermalPaste' },
    { icon: 'ri-scissors-line', key: 'hinges' },
    { icon: 'ri-tv-line', key: 'screen' },
    { icon: 'ri-cpu-line', key: 'components' },
    { icon: 'ri-gamepad-line', key: 'customPC' },
  ];

  const softwareServices = [
    { icon: 'ri-download-cloud-line', key: 'drivers' },
    { icon: 'ri-settings-3-line', key: 'bios' },
    { icon: 'ri-windows-line', key: 'windows' },
    { icon: 'ri-file-word-line', key: 'office' },
  ];

  return (
    <section id="services" className="relative py-24 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-violet-500/5"></div>
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-float-slower"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 backdrop-blur-sm">
            <i className="ri-service-line text-purple-400"></i>
            <span className="text-purple-400 text-sm font-medium">{t('services.badge')}</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
            {t('services.title')}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        {/* Hardware Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
            {t('services.hardware.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hardwareServices.map((service, index) => (
              <div
                key={service.key}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <i className={`${service.icon} text-3xl text-purple-400 group-hover:text-violet-400 transition-colors`}></i>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {t(`services.hardware.items.${service.key}.title`)}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {t(`services.hardware.items.${service.key}.description`)}
                  </p>
                </div>

                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Software Services */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
            {t('services.software.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softwareServices.map((service, index) => (
              <div
                key={service.key}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <i className={`${service.icon} text-3xl text-purple-400 group-hover:text-violet-400 transition-colors`}></i>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {t(`services.software.items.${service.key}.title`)}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {t(`services.software.items.${service.key}.description`)}
                  </p>
                </div>

                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
