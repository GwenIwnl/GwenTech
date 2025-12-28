
import { useTranslation } from 'react-i18next';

const ComingSoon = () => {
  const { t } = useTranslation();

  const gpuServices = [
    {
      brand: 'NVIDIA',
      logo: 'https://readdy.ai/api/search-image?query=NVIDIA%20logo%20official%20green%20brand%20identity%20transparent%20PNG%20high%20quality%20modern%20tech&width=400&height=200&seq=nvidia-logo-official-001&orientation=landscape',
      color: '#25D366',
      bgImage: 'https://readdy.ai/api/search-image?query=NVIDIA%20GeForce%20RTX%20graphics%20card%20close%20up%20detailed%20shot%20professional%20photography%20green%20lighting%20tech%20aesthetic%20high%20quality&width=800&height=600&seq=nvidia-gpu-bg-001&orientation=landscape',
      features: [
        t('comingSoon.features.diagnostics'),
        t('comingSoon.features.reballing'),
        t('comingSoon.features.cooling'),
        t('comingSoon.features.bios')
      ]
    },
    {
      brand: 'AMD',
      logo: 'https://readdy.ai/api/search-image?query=AMD%20official%20logo%20red%20brand%20identity%20transparent%20PNG%20high%20quality%20modern%20technology%20company&width=400&height=200&seq=amd-logo-official-002&orientation=landscape',
      color: '#8b1a1a',
      bgImage: 'https://readdy.ai/api/search-image?query=AMD%20Radeon%20graphics%20card%20close%20up%20detailed%20shot%20professional%20photography%20red%20lighting%20tech%20aesthetic%20high%20quality&width=800&height=600&seq=amd-gpu-bg-001&orientation=landscape',
      features: [
        t('comingSoon.features.diagnostics'),
        t('comingSoon.features.reballing'),
        t('comingSoon.features.cooling'),
        t('comingSoon.features.bios')
      ]
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060010] via-[#0a0018] to-[#060010]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 backdrop-blur-sm">
            <i className="ri-time-line text-purple-400"></i>
            <span className="text-purple-400 text-sm font-medium">{t('comingSoon.badge')}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              {t('comingSoon.title')}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('comingSoon.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gpuServices.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              style={{
                boxShadow: `0 0 40px ${service.color}15`
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <img
                  src={service.bgImage}
                  alt={`${service.brand} GPU`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060010] via-[#060010]/80 to-transparent"></div>
              </div>

              <div className="relative z-10 p-8">
                {/* Logo */}
                <div className="mb-8 flex justify-center">
                  <div 
                    className="w-48 h-24 flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      filter: `drop-shadow(0 0 20px ${service.color}80)`
                    }}
                  >
                    <img
                      src={service.logo}
                      alt={`${service.brand} Logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors duration-300"
                    >
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${service.color}20` }}
                      >
                        <i 
                          className="ri-check-line text-sm"
                          style={{ color: service.color }}
                        ></i>
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Coming Soon Badge */}
                <div className="flex justify-center">
                  <div 
                    className="px-6 py-3 rounded-full border-2 backdrop-blur-sm"
                    style={{
                      borderColor: `${service.color}40`,
                      backgroundColor: `${service.color}10`
                    }}
                  >
                    <span 
                      className="text-sm font-semibold"
                      style={{ color: service.color }}
                    >
                      {t('comingSoon.comingSoonBadge')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
