import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MessageSquare, Send, X } from 'lucide-react';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

interface Option {
  id: number;
  text: string;
  action: () => void;
}

const ChatBot: React.FC = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [currentOptions, setCurrentOptions] = useState<Option[]>([]);
  const [showError, setShowError] = useState(false);
  const [isWaving, setIsWaving] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [lastLanguage, setLastLanguage] = useState(language); // Track language changes
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Translations
  const translations = {
    welcome: {
      tr: 'Merhaba! Tiny Bites sanal asistanına hoş geldiniz. Size nasıl yardımcı olabilirim?',
      en: 'Hello! Welcome to Tiny Bites virtual assistant. How can I help you?'
    },
    options: {
      tr: 'Lütfen aşağıdaki seçeneklerden birini seçin:',
      en: 'Please select one of the options below:'
    },
    products: {
      tr: 'Ürünlerimiz',
      en: 'Our Products'
    },
    contact: {
      tr: 'İletişim',
      en: 'Contact Us'
    },
    about: {
      tr: 'Hakkımızda',
      en: 'About Us'
    },
    catalog: {
      tr: 'Katalog',
      en: 'Catalog'
    },
    error: {
      tr: 'Lütfen geçerli bir rakam girin.',
      en: 'Please enter a valid number.'
    },
    chatbot: {
      tr: 'Asistan',
      en: 'Assistant'
    },
    placeholder: {
      tr: 'Bir rakam girin...',
      en: 'Enter a number...'
    },
    tableware: {
      tr: 'Sofra Ürünleri',
      en: 'Tableware'
    },
    containers: {
      tr: 'Saklama Kapları',
      en: 'Storage Containers'
    },
    baskets: {
      tr: 'Sepetler',
      en: 'Baskets'
    }
  };
  
  const t = (key: keyof typeof translations) => {
    return translations[key][language === 'tr' ? 'tr' : 'en'];
  };
  
  // Function to play notification sound - disabled
  const playNotificationSound = () => {
    // Sound functionality disabled as requested
    return;
  };
  
  // Start waving animation and play sound at intervals
  useEffect(() => {
    // Start waving animation every 10 seconds if not interacted
    const waveInterval = setInterval(() => {
      if (!hasInteracted) {
        setIsWaving(true);
        playNotificationSound();
        
        // Stop waving after 2 seconds
        setTimeout(() => setIsWaving(false), 2000);
      }
    }, 10000);
    
    return () => clearInterval(waveInterval);
  }, [hasInteracted]);
  
  // Detect language changes and update UI accordingly
  useEffect(() => {
    if (language !== lastLanguage) {
      // Language has changed, update all messages and options
      setLastLanguage(language);
      
      if (messages.length > 0) {
        // Create fresh translations of all bot messages
        const updatedMessages = messages.map((msg: Message) => {
          if (msg.sender === 'user') {
            return msg; // Keep user messages unchanged
          }
          
          // Try to identify message type and retranslate
          if (msg.text.includes(translations.welcome.en) || msg.text.includes(translations.welcome.tr)) {
            return { ...msg, text: t('welcome') };
          } else if (msg.text.includes(translations.options.en) || msg.text.includes(translations.options.tr)) {
            return { ...msg, text: t('options') };
          } else if (msg.text.includes(translations.products.en + ':') || msg.text.includes(translations.products.tr + ':')) {
            return { ...msg, text: `${t('products')}:` };
          } 
          // Keep other bot messages unchanged for now
          return msg;
        });
        
        setMessages(updatedMessages);
      }
      
      // Reset and update all options
      resetMainOptions();
    }
  }, [language]);
  
  // Set initial message and options when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages((prev: Message[]) => [
        ...prev, 
        { sender: 'bot', text: t('welcome') },
        { sender: 'bot', text: t('options') },
      ]);
      
      resetMainOptions();
    }
  }, [isOpen]);
  
  // Function to reset to main options menu
  const resetMainOptions = () => {
    setCurrentOptions([
      { 
        id: 1, 
        text: t('products'), 
        action: () => handleProductsOption() 
      },
      { 
        id: 2, 
        text: t('contact'), 
        action: () => handleContactOption() 
      },
      { 
        id: 3, 
        text: t('about'), 
        action: () => handleAboutOption() 
      },
      { 
        id: 4, 
        text: t('catalog'), 
        action: () => handleCatalogOption() 
      }
    ]);
  };
  
  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
    setHasInteracted(true);
    setIsWaving(false);
  };
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setShowError(false);
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    const userInput = inputValue.trim();
    setMessages((prev: Message[]) => [...prev, { sender: 'user', text: userInput }]);
    setInputValue('');
    
    // Process user input
    const selectedOption = parseInt(userInput);
    
    if (isNaN(selectedOption) || selectedOption < 1 || selectedOption > currentOptions.length) {
      setTimeout(() => {
        setMessages((prev: Message[]) => [...prev, { 
          sender: 'bot', 
          text: t('error')
        }]);
        setShowError(true);
      }, 500);
      return;
    }
    
    // Execute the action for the selected option
    const option = currentOptions.find(opt => opt.id === selectedOption);
    if (option) {
      setTimeout(() => {
        option.action();
      }, 500);
    }
  };

  // Option handlers
  const handleProductsOption = () => {
    setMessages((prev: Message[]) => [...prev, { sender: 'bot', text: `${t('products')}:` }]);

    setCurrentOptions([
      {
        id: 1,
        text: t('tableware'),
        action: () => {
          window.location.href = '/products/tableware';
        }
      },
      {
        id: 2,
        text: t('containers'),
        action: () => {
          window.location.href = '/products/containers';
        }
      },
      { 
        id: 3, 
        text: t('baskets'), 
        action: () => {
          window.location.href = '/products/baskets';
        } 
      },
      {
        id: 4,
        text: language === 'tr' ? 'Ana Menü' : 'Main Menu',
        action: () => resetMainOptions()
      }
    ]);
  };
  
  const handleContactOption = () => {
    window.location.href = '/contact';
  };
  
  const handleAboutOption = () => {
    window.location.href = '/about';
  };
  
  const handleCatalogOption = () => {
    window.location.href = '/catalog';
  };
  
  return (
    <div className="fixed bottom-16 left-6 z-50">
      {/* Chat button */}
      <button 
        onClick={toggleChat}
        className={`flex items-center justify-center w-14 h-14 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700 transition-all duration-300 ${isWaving ? 'animate-bounce' : ''}`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <X size={24} /> : (
          <div className={`relative ${isWaving ? 'animate-[wave_1s_ease-in-out_infinite]' : ''}`} style={{
            transformOrigin: 'bottom right',
            animation: isWaving ? 'wave 1s ease-in-out infinite' : 'none'
          }}>
            <MessageSquare size={24} />
            {isWaving && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
              </span>
            )}
          </div>
        )}
      </button>
      
      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 w-80 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 transition-all duration-300">
          {/* Chat header */}
          <div className="bg-primary-600 text-white px-4 py-3 flex justify-between items-center">
            <h3 className="font-medium">{t('chatbot')}</h3>
            <button 
              onClick={toggleChat}
              className="text-white/80 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>
          
          {/* Chat messages */}
          <div className="p-4 h-80 overflow-y-auto bg-gray-50">
            {messages.map((message: Message, index: number) => (
              <div 
                key={index} 
                className={`mb-3 ${message.sender === 'bot' ? 'text-left' : 'text-right'}`}
              >
                <div 
                  className={`inline-block rounded-lg px-4 py-2 max-w-[85%] ${
                    message.sender === 'bot' 
                      ? 'bg-primary-100 text-gray-800' 
                      : 'bg-primary-600 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            
            {/* Current options */}
            {currentOptions.length > 0 && (
              <div className="mb-3 text-left">
                <div className="inline-block rounded-lg px-4 py-2 bg-gray-100 text-gray-800 max-w-[85%]">
                  <ul className="space-y-1">
                    {currentOptions.map((option: Option) => (
                      <li key={option.id}>
                        <span className="font-bold">{option.id}.</span> {option.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            
            {/* Error message */}
            {showError && (
              <div className="text-center mb-3">
                <div className="inline-block text-xs text-red-500">
                  {t('error')}
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat input */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 px-4 py-3 bg-white">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder={t('placeholder')}
                className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-primary-600 text-white rounded-r-md px-3 py-2 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
