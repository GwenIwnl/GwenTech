
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: 'ri-tools-line',
      title: t('features.feature1.title'),
      description: t('features.feature1.description')
    },
    {
      icon: 'ri-cpu-line',
      title: t('features.feature2.title'),
      description: t('features.feature2.description')
    },
    {
      icon: 'ri-gamepad-line',
      title: t('features.feature3.title'),
      description: t('features.feature3.description')
    }
  ];

  return (
    <section id="features" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t('features.title')}
          </h2>
          <p className="text-lg text-gray-400">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all hover:scale-105 cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-violet-500/0 group-hover:from-purple-500/5 group-hover:to-violet-500/5 rounded-2xl transition-all"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <i className={`${feature.icon} text-2xl text-purple-400`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
