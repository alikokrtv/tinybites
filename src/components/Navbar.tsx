import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-secondary-50 py-3'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/images/tiny-bites/logo.png" alt="Tiny Bites" className="h-16 md:h-20 object-contain mix-blend-multiply" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'text-primary-600' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/products" 
              className={`font-medium transition-colors ${
                location.pathname === '/products' 
                  ? 'text-primary-600' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {t('nav.products')}
            </Link>
            <Link 
              to="/catalog" 
              className={`font-medium transition-colors ${
                location.pathname === '/catalog' 
                  ? 'text-primary-600' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {t('nav.catalog')}
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                location.pathname === '/about' 
                  ? 'text-primary-600' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/blog" 
              className={`font-medium transition-colors ${
                location.pathname === '/blog' 
                  ? 'text-primary-600' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {t('nav.blog')}
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${
                location.pathname === '/contact' 
                  ? 'text-primary-600' 
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {t('nav.contact')}
            </Link>
            <button 
              onClick={toggleLanguage}
              className="flex items-center text-gray-700 hover:text-secondary-600 transition-colors"
            >
              <Globe size={18} className="mr-1" />
              <span className="uppercase">{language === 'en' ? 'TR' : 'EN'}</span>
            </button>
          </nav>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-4">
            {/* Language Switcher for Mobile */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center text-gray-700 hover:text-secondary-600 transition-colors"
            >
              <Globe size={18} />
              <span className="uppercase ml-1">{language === 'en' ? 'TR' : 'EN'}</span>
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="text-gray-700 hover:text-secondary-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`font-medium py-2 transition-colors ${
                location.pathname === '/' 
                  ? 'text-primary-600' 
                  : 'text-gray-700'
              }`}
              onClick={closeMobileMenu}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/products" 
              className={`font-medium py-2 transition-colors ${
                location.pathname === '/products' 
                  ? 'text-primary-600' 
                  : 'text-gray-700'
              }`}
              onClick={closeMobileMenu}
            >
              {t('nav.products')}
            </Link>
            <Link 
              to="/catalog" 
              className={`font-medium py-2 transition-colors ${
                location.pathname === '/catalog' 
                  ? 'text-primary-600' 
                  : 'text-gray-700'
              }`}
              onClick={closeMobileMenu}
            >
              {t('nav.catalog')}
            </Link>
            <Link 
              to="/about" 
              className={`font-medium py-2 transition-colors ${
                location.pathname === '/about' 
                  ? 'text-primary-600' 
                  : 'text-gray-700'
              }`}
              onClick={closeMobileMenu}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/blog" 
              className={`font-medium py-2 transition-colors ${
                location.pathname === '/blog' 
                  ? 'text-primary-600' 
                  : 'text-gray-700'
              }`}
              onClick={closeMobileMenu}
            >
              {t('nav.blog')}
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium py-2 transition-colors ${
                location.pathname === '/contact' 
                  ? 'text-primary-600' 
                  : 'text-gray-700'
              }`}
              onClick={closeMobileMenu}
            >
              {t('nav.contact')}
            </Link>
            <button 
              onClick={toggleLanguage}
              className="flex items-center text-gray-700 py-2"
            >
              <Globe size={18} className="mr-1" />
              <span className="uppercase">{language === 'en' ? 'TR' : 'EN'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;