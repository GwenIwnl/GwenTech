import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ServiceRequest = () => {
  const { t } = useTranslation();
  const [selectedDevice, setSelectedDevice] = useState<'windows' | 'mac' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    deviceType: '',
    model: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const generateServiceNumber = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `SRV-${timestamp}-${random}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceNumber = generateServiceNumber();
    const device = selectedDevice === 'windows' ? 'Windows' : 'Mac';

    const emailBody = `
Nuevo Servicio Solicitado

Número de Servicio: ${serviceNumber}
Nombre del Cliente: ${formData.name}
Tipo de Equipo: ${device}
Modelo: ${formData.model}
Problema/Servicio: ${formData.message}
    `.trim();

    const whatsappMessage = `*Nuevo Servicio - ${serviceNumber}*%0A%0A*Cliente:* ${formData.name}%0A*Equipo:* ${device}%0A*Modelo:* ${formData.model}%0A*Problema:* ${formData.message}`;

    try {
      // Send to email
      window.location.href = `mailto:Gweniwnltech@gmail.com?subject=Solicitud de Servicio - ${serviceNumber}&body=${encodeURIComponent(emailBody)}`;

      // Open WhatsApp in new tab
      setTimeout(() => {
        window.open(`https://wa.me/5219841082210?text=${whatsappMessage}`, '_blank');
      }, 500);

      setSubmitStatus('success');
      
      // Reset form
      setTimeout(() => {
        setFormData({ name: '', deviceType: '', model: '', message: '' });
        setSelectedDevice(null);
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="service-request" className="relative py-24 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-violet-500/5"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-float-slower"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6 backdrop-blur-sm">
            <i className="ri-customer-service-line text-purple-400"></i>
            <span className="text-purple-400 text-sm font-medium">{t('serviceRequest.badge')}</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
            {t('serviceRequest.title')}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('serviceRequest.description')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-500">
          {/* Device Selection */}
          <div className="mb-8">
            <label className="block text-white text-lg font-semibold mb-4">
              {t('serviceRequest.form.device.label')}
            </label>
            <div className="grid grid-cols-2 gap-6">
              <button
                type="button"
                onClick={() => setSelectedDevice('windows')}
                className={`group relative p-8 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                  selectedDevice === 'windows'
                    ? 'border-purple-500 bg-purple-500/20 shadow-xl shadow-purple-500/30'
                    : 'border-white/10 bg-white/5 hover:border-purple-500/50'
                }`}
              >
                <div className="flex flex-col items-center gap-4">
                  <svg className="w-16 h-16" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12.402l35.687-4.8602.016 34.423-35.67.203zm35.67 33.529.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349-.011 41.34-47.318-6.678-.066-34.739z" fill="#00ADEF"/>
                  </svg>
                  <span className="text-white font-semibold text-lg">Windows</span>
                </div>
                {selectedDevice === 'windows' && (
                  <div className="absolute top-3 right-3">
                    <i className="ri-checkbox-circle-fill text-2xl text-purple-400"></i>
                  </div>
                )}
              </button>

              <button
                type="button"
                onClick={() => setSelectedDevice('mac')}
                className={`group relative p-8 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                  selectedDevice === 'mac'
                    ? 'border-purple-500 bg-purple-500/20 shadow-xl shadow-purple-500/30'
                    : 'border-white/10 bg-white/5 hover:border-purple-500/50'
                }`}
              >
                <div className="flex flex-col items-center gap-4">
                  <svg className="w-16 h-16" viewBox="0 0 814 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" fill="currentColor" className="text-gray-300 group-hover:text-white transition-colors"/>
                  </svg>
                  <span className="text-white font-semibold text-lg">Mac</span>
                </div>
                {selectedDevice === 'mac' && (
                  <div className="absolute top-3 right-3">
                    <i className="ri-checkbox-circle-fill text-2xl text-purple-400"></i>
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                {t('serviceRequest.form.name.label')}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                placeholder={t('serviceRequest.form.name.placeholder')}
              />
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                {t('serviceRequest.form.deviceType.label')}
              </label>
              <input
                type="text"
                required
                value={formData.deviceType}
                onChange={(e) => setFormData({ ...formData, deviceType: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                placeholder={t('serviceRequest.form.deviceType.placeholder')}
              />
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                {t('serviceRequest.form.model.label')}
              </label>
              <input
                type="text"
                required
                value={formData.model}
                onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                placeholder={t('serviceRequest.form.model.placeholder')}
              />
            </div>

            <div>
              <label className="block text-white text-sm font-semibold mb-2">
                {t('serviceRequest.form.message.label')}
              </label>
              <textarea
                required
                maxLength={500}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                placeholder={t('serviceRequest.form.message.placeholder')}
              />
              <p className="text-gray-500 text-xs mt-2">
                {formData.message.length}/500 {t('serviceRequest.form.message.characters')}
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!selectedDevice || isSubmitting}
            className="group relative w-full mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <i className="ri-loader-4-line text-xl animate-spin"></i>
                  {t('serviceRequest.form.submit.sending')}
                </>
              ) : (
                <>
                  <i className="ri-send-plane-line text-xl"></i>
                  {t('serviceRequest.form.submit.button')}
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3 animate-fade-in-up">
              <i className="ri-checkbox-circle-line text-2xl text-green-400"></i>
              <p className="text-green-400">{t('serviceRequest.form.submit.success')}</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-3 animate-fade-in-up">
              <i className="ri-error-warning-line text-2xl text-red-400"></i>
              <p className="text-red-400">{t('serviceRequest.form.submit.error')}</p>
            </div>
          )}

          {/* Contact Options */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-gray-400 text-center mb-4">{t('serviceRequest.directContact.title')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/5219841082210"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-green-600/20 border border-green-500/30 text-green-400 rounded-lg hover:bg-green-600/30 hover:scale-105 transition-all duration-300 whitespace-nowrap"
              >
                <i className="ri-whatsapp-line text-xl group-hover:scale-110 transition-transform"></i>
                WhatsApp
              </a>
              <a
                href="mailto:Gweniwnltech@gmail.com"
                className="group flex items-center gap-2 px-6 py-3 bg-purple-600/20 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-600/30 hover:scale-105 transition-all duration-300 whitespace-nowrap"
              >
                <i className="ri-mail-line text-xl group-hover:scale-110 transition-transform"></i>
                Email
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ServiceRequest;
