import { useTranslation } from 'react-i18next';

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-violet-900/20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 backdrop-blur-sm">
          <i className="ri-customer-service-2-line text-purple-400"></i>
          <span className="text-purple-400 text-sm font-medium">{t('cta.badge')}</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
          {t('cta.title')}
        </h2>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          {t('cta.description')}
        </p>

        <a
          href="https://wa.me/5219841082210"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-lg font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 whitespace-nowrap"
        >
          <span className="relative z-10 flex items-center gap-3">
            <i className="ri-whatsapp-line text-2xl"></i>
            {t('cta.button')}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </a>
      </div>
    </section>
  );
};

export default CTA;
