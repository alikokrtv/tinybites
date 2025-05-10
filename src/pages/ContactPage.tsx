import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedSection from '../components/AnimatedSection';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16">
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
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring focus:ring-pink-200 transition-colors"
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
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring focus:ring-pink-200 transition-colors"
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
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring focus:ring-pink-200 transition-colors"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  {t('contact.form.submit')}
                </button>
              </form>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-in-right">
            <div className="bg-gradient-to-br from-blue-500 to-pink-500 text-white rounded-xl shadow-xl p-6 md:p-8 h-full">
              <h2 className="text-2xl font-bold mb-6">
                {t('contact.info.title')}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{t('contact.info.address')}</h3>
                    <p className="text-white/90">
                      Kadıköy<br />
                      Istanbul, Turkey 34710
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{t('contact.info.phone')}</h3>
                    <p className="text-white/90">+90 212 555 1234</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{t('contact.info.email')}</h3>
                    <p className="text-white/90">info@tinybites.com</p>
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