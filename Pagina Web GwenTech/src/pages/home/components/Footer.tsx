import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-gradient-to-br from-purple-900/20 via-violet-900/10 to-purple-900/20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://static.readdy.ai/image/8e842a3d425149bd94931785aa07d90d/ca0d5e3536ee96f40ca6889eef75ace8.png" 
                alt="GwenTech Logo" 
                className="w-10 h-10"
              />
              <span className="text-2xl font-gwentech bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                GwenTech
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <i className="ri-contacts-line text-purple-400"></i>
              {t('footer.contact.title')}
            </h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/5219841082210"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
              >
                <i className="ri-whatsapp-line group-hover:scale-110 transition-transform"></i>
                <span className="text-sm">{t('footer.contact.whatsapp')}</span>
              </a>
              <a
                href="mailto:Gweniwnltech@gmail.com"
                className="group flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
              >
                <i className="ri-mail-line group-hover:scale-110 transition-transform"></i>
                <span className="text-sm">{t('footer.contact.email')}</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <i className="ri-time-line"></i>
                <div className="text-sm">
                  <div className="font-medium">{t('footer.contact.availability')}</div>
                  <div>{t('footer.contact.available')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <i className="ri-map-pin-line text-purple-400"></i>
              {t('footer.location.title')}
            </h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>{t('footer.location.address')}</p>
              <p>{t('footer.location.city')}</p>
              <p>{t('footer.location.country')}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <i className="ri-links-line text-purple-400"></i>
              {t('footer.quickLinks.title')}
            </h3>
            <div className="space-y-2">
              <a href="#services" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
                {t('footer.quickLinks.services')}
              </a>
              <a href="#about" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
                {t('footer.quickLinks.about')}
              </a>
              <a href="#coming-soon" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
                {t('footer.quickLinks.comingSoon')}
              </a>
              <a href="#service-request" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
                {t('footer.quickLinks.request')}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm font-gwentech">
            {t('footer.copyright')}
          </p>
          <a 
            href="https://readdy.ai/?ref=logo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors text-sm font-gwentech"
          >
            {t('footer.poweredBy')}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
