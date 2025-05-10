// React is used implicitly by JSX
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import KVKKPage from './pages/KVKKPage';
import CatalogPage from './pages/CatalogPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AnimationProvider from './contexts/AnimationProvider';

// This component will scroll to top when route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

function App() {
  return (
    <LanguageProvider>
      <AnimationProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-gradient-to-b from-yellow-50 to-white">
            <ScrollToTop />
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogDetailPage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/kvkk" element={<KVKKPage />} />
              </Routes>
            </main>
            <Footer />
            <CookieConsent />
            <WhatsAppButton phoneNumber="+90 535 054 91 91" />
          </div>
        </Router>
      </AnimationProvider>
    </LanguageProvider>
  );
}

export default App;