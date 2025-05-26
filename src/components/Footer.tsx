import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-500 to-pink-500 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex flex-col items-start">
              <Link to="/" className="flex items-center mb-2">
                <img src="/images/tiny-bites/logo.png" alt="Tiny Bites" className="h-16 mix-blend-multiply" />
              </Link>
            </div>
            <p className="mt-4 text-white/80">
              Colorful tableware for little ones to make mealtime fun and enjoyable.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">{t('nav.products')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-white/80 hover:text-white transition-colors">
                  {t('products.tableware')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-white transition-colors">
                  {t('products.storageBoxes')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-white transition-colors">
                  {t('products.baskets')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">{t('nav.about')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  {t('about.mission.title')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  {t('about.values.title')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">{t('footer.follow')}</h3>
            <div className="flex space-x-4 mt-2">
              <a 
                href="https://www.instagram.com/tinybitesofficial_?igsh=MWlwMjV5NXNsODM4dg==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="#" 
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="#" 
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <Link to="/privacy" className="text-white/80 hover:text-white transition-colors text-sm">
              {t('language') === 'tr' ? 'Gizlilik Politikası' : 'Privacy Policy'}
            </Link>
            <span className="text-white/50">|</span>
            <Link to="/kvkk" className="text-white/80 hover:text-white transition-colors text-sm">
              {t('language') === 'tr' ? 'KVKK' : 'Personal Data Protection'}
            </Link>
          </div>
          <p>© {currentYear} alikok. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;