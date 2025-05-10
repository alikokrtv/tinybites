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
            <Link to="/" className="flex items-center gap-2">
              <img src="/images/tiny-bites/tinylogo.png" alt="Tiny Bites" className="h-12" />
              <div className="font-bold text-2xl">
                <span className="text-white">Tiny</span>
                <span className="text-yellow-300">Bites</span>
              </div>
            </Link>
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
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
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