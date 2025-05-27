import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    
    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const formObject = Object.fromEntries(formData.entries());
    
    // Submit form via fetch API
    fetch('https://formsubmit.co/info@tinybites.net', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formObject)
    })
    .then(response => {
      console.log('Form submitted successfully');
      setFormSubmitted(true);
      
      // Reset form
      (e.target as HTMLFormElement).reset();
      
      // Keep success message visible for 10 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 10000);
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      alert(error.message || 'An error occurred while submitting the form. Please try again.');
    });
  };
  
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection animation="slide-in-left">
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {t('contact.form.submit')}
              </h2>
              
              {formSubmitted ? (
                <div className="p-4 bg-green-100 text-green-700 rounded-lg mb-6">
                  <p className="font-medium">{t('contact.form.success')}</p>
                  <p className="mt-2">{t('language') === 'tr' ? 'En kısa sürede size geri dönüş yapacağız.' : 'We will get back to you as soon as possible.'}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>

                  {/* FormSubmit.co settings */}
                  <input type="hidden" name="_subject" value="Tiny Bites Website Contact Form" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value={window.location.href} />
                  
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-medium transition-colors"
                  >
                    {t('contact.form.submit')}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-in-right">
            <div className="bg-gradient-to-br from-secondary-500 to-primary-500 text-white rounded-xl shadow-xl p-6 md:p-8 h-full">
              <h2 className="text-2xl font-bold mb-6">
                {t('contact.info.title')}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{t('contact.info.address')}</h3>
                    <p className="text-white/90">
                      Muratpaşa Mah. Demirhisar Cad.<br />
                      No:3/22 Bayrampaşa / ISTANBUL
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{t('contact.info.phone')}</h3>
                    <p className="text-white/90">+90 507 772 13 93</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{t('contact.info.email')}</h3>
                    <p className="text-white/90">info@tinybites.net</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <img 
                  src="/images/tiny-bites/elephant-tableware-2.jpg" 
                  alt="Tiny Bites ürünleri" 
                  className="rounded-lg shadow-lg object-cover h-48 w-full"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;