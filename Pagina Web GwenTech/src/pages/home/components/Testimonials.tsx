import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: t('testimonials.items.1.name'),
      text: t('testimonials.items.1.text'),
      rating: 5,
    },
    {
      name: t('testimonials.items.2.name'),
      text: t('testimonials.items.2.text'),
      rating: 5,
    },
    {
      name: t('testimonials.items.3.name'),
      text: t('testimonials.items.3.text'),
      rating: 5,
    },
    {
      name: t('testimonials.items.4.name'),
      text: t('testimonials.items.4.text'),
      rating: 5,
    },
    {
      name: t('testimonials.items.5.name'),
      text: t('testimonials.items.5.text'),
      rating: 5,
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-semibold mb-4 border border-purple-500/20">
            {t('testimonials.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {t('testimonials.title')}
          </h2>
        </div>

        <div className="space-y-8">
          {/* Primera fila - Derecha a Izquierda */}
          <div className="flex gap-6 animate-scroll-rtl">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`rtl-${index}`}
                className="flex-shrink-0 w-[400px] bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">Cliente Verificado</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Segunda fila - Izquierda a Derecha */}
          <div className="flex gap-6 animate-scroll-ltr">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`ltr-${index}`}
                className="flex-shrink-0 w-[400px] bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">Cliente Verificado</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-ltr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-rtl {
          animation: scroll-rtl 40s linear infinite;
        }

        .animate-scroll-ltr {
          animation: scroll-ltr 40s linear infinite;
        }

        .animate-scroll-rtl:hover,
        .animate-scroll-ltr:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
