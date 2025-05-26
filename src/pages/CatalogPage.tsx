import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Download, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

// Path constants for assets
const CATALOG_ROOT = '/';

// Product images from wetransfer folders
// You'll need to copy these images to the 'public/images' folder
// for them to be accessible in the deployed website
const PRODUCT_IMAGES = {
  tinyBites: {
    main: '/images/tiny-bites/elephant-tableware-1.jpg',
    // Source: c:/Users/aliko/Downloads/wetransfer_tiny-bites_2025-05-09_0838/Tiny Bites/elephant tableware 1.jpg
  },
  storageBoxes: {
    main: '/images/storage-boxes/lv-237-shell.jpg',
    // Source: c:/Users/aliko/Downloads/wetransfer_tiny-bites_2025-05-09_0838/Storage Boxes/LV-237 Shell Erzak Set.jpg
  },
  baskets: {
    main: '/images/baskets/lv-331-lv-341.png',
    // Source: c:/Users/aliko/Downloads/wetransfer_tiny-bites_2025-05-09_0838/Baskets/LV-331_LV-341 IMAGE.png
  }
};

type Catalog = {
  id: number;
  title: {
    en: string;
    tr: string;
  };
  description: {
    en: string;
    tr: string;
  };
  image: string;
  pdfFile: string;
  details: {
    en: string[];
    tr: string[];
  };
  featured: boolean;
};

const catalogs: Catalog[] = [
  {
    id: 1,
    title: {
      en: "Food Plates for Kids",
      tr: "Çocuklar İçin Yemek Tabakları"
    },
    description: {
      en: "Discover our colorful and fun food plates designed specifically for children. Making mealtime enjoyable and encouraging healthy eating habits.",
      tr: "Özellikle çocuklar için tasarlanmış renkli ve eğlenceli yemek tabaklarımızı keşfedin. Yemek zamanını keyifli hale getirin ve sağlıklı beslenme alışkanlıklarını teşvik edin."
    },
    image: PRODUCT_IMAGES.tinyBites.main,
    pdfFile: "Food Plates for Kids (1).pdf",
    details: {
      en: [
        "BPA-free materials safe for children",
        "Dishwasher safe",
        "Fun designs that make mealtime exciting",
        "Separated compartments for different foods",
        "Non-slip bottom to prevent spills"
      ],
      tr: [
        "Çocuklar için güvenli BPA içermeyen malzemeler",
        "Bulaşık makinesinde yıkanabilir",
        "Yemek zamanını heyecanlı hale getiren eğlenceli tasarımlar",
        "Farklı yiyecekler için ayrılmış bölmeler",
        "Dökülmeleri önlemek için kaymaz taban"
      ]
    },
    featured: true
  },
  {
    id: 2,
    title: {
      en: "Storage Boxes",
      tr: "Saklama Kutuları"
    },
    description: {
      en: "Organize toys, clothes, and accessories with our durable and stylish storage boxes. Perfect for children's rooms and playrooms.",
      tr: "Dayanıklı ve şık saklama kutularımızla oyuncakları, kıyafetleri ve aksesuarları düzenleyin. Çocuk odaları ve oyun odaları için mükemmel."
    },
    image: PRODUCT_IMAGES.storageBoxes.main,
    pdfFile: "Storage Boxes.pdf",
    details: {
      en: [
        "Durable construction for long-lasting use",
        "Available in various sizes and colors",
        "Stackable design to save space",
        "Easy-to-clean surfaces",
        "Lightweight and portable"
      ],
      tr: [
        "Uzun ömürlü kullanım için dayanıklı yapı",
        "Çeşitli boyut ve renklerde mevcuttur",
        "Alan tasarrufu sağlayan istifleme tasarımı",
        "Kolay temizlenebilen yüzeyler",
        "Hafif ve taşınabilir"
      ]
    },
    featured: true
  },
  {
    id: 3,
    title: {
      en: "Baskets",
      tr: "Sepetler"
    },
    description: {
      en: "Versatile baskets for storage and decoration. Our handcrafted baskets add both functionality and style to any room.",
      tr: "Depolama ve dekorasyon için çok yönlü sepetler. El yapımı sepetlerimiz, her odaya hem işlevsellik hem de stil katar."
    },
    image: PRODUCT_IMAGES.baskets.main,
    pdfFile: "Baskets.pdf",
    details: {
      en: [
        "Made from eco-friendly materials",
        "Handcrafted with attention to detail",
        "Multiple sizes for various storage needs",
        "Stylish designs that complement home decor",
        "Durable and long-lasting"
      ],
      tr: [
        "Çevre dostu malzemelerden üretilmiştir",
        "Detaylara özen gösterilerek el yapımı",
        "Çeşitli depolama ihtiyaçları için birden fazla boyut",
        "Ev dekorasyonunu tamamlayan şık tasarımlar",
        "Dayanıklı ve uzun ömürlü"
      ]
    },
    featured: false
  }
];

const CatalogPage: React.FC = () => {
  const { t } = useLanguage();
  const currentLang = t('language') === 'tr' ? 'tr' : 'en';
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredCatalogs = filter === 'all' 
    ? catalogs 
    : catalogs.filter(catalog => catalog.featured);

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {currentLang === 'tr' ? 'Ürün Katalogları' : 'Product Catalogs'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentLang === 'tr' 
              ? 'Ürünlerimizin detaylı kataloglarını buradan indirebilirsiniz.' 
              : 'Download detailed catalogs of our products here.'}
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-md p-1">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                filter === 'all'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {currentLang === 'tr' ? 'Tüm Kataloglar' : 'All Catalogs'}
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                filter === 'featured'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              {currentLang === 'tr' ? 'Öne Çıkanlar' : 'Featured'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {filteredCatalogs.map((catalog) => (
            <div 
              key={catalog.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0 h-60 md:h-auto md:w-1/3">
                  <img 
                    src={catalog.image} 
                    alt={catalog.title[currentLang]} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 md:w-2/3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        {catalog.title[currentLang]}
                      </h2>
                      <p className="text-gray-600 mb-4">
                        {catalog.description[currentLang]}
                      </p>
                    </div>
                    <a 
                      href={`${CATALOG_ROOT}${catalog.pdfFile}`} 
                      download
                      className="flex items-center bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
                    >
                      <Download size={18} className="mr-2" />
                      {currentLang === 'tr' ? 'PDF İndir' : 'Download PDF'}
                    </a>
                  </div>
                  
                  <div className="mt-4">
                    <button
                      onClick={() => toggleExpand(catalog.id)}
                      className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      {expandedId === catalog.id ? (
                        <>
                          <ChevronUp size={20} className="mr-1" />
                          {currentLang === 'tr' ? 'Detayları Gizle' : 'Hide Details'}
                        </>
                      ) : (
                        <>
                          <ChevronDown size={20} className="mr-1" />
                          {currentLang === 'tr' ? 'Detayları Göster' : 'Show Details'}
                        </>
                      )}
                    </button>
                    
                    {expandedId === catalog.id && (
                      <div className="mt-4 pl-4 border-l-2 border-primary-200">
                        <h3 className="font-medium text-gray-800 mb-2">
                          {currentLang === 'tr' ? 'Ürün Özellikleri' : 'Product Features'}
                        </h3>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          {catalog.details[currentLang].map((detail, index) => (
                            <li key={index}>{detail}</li>
                          ))}
                        </ul>
                        
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <a 
                            href={`${CATALOG_ROOT}${catalog.pdfFile}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            <ExternalLink size={18} className="mr-2" />
                            {currentLang === 'tr' ? 'Kataloğu Görüntüle' : 'View Catalog'}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-secondary-50 rounded-xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {currentLang === 'tr' ? 'Özel Katalog mu İstiyorsunuz?' : 'Need a Custom Catalog?'}
          </h2>
          <p className="text-gray-700 mb-6">
            {currentLang === 'tr' 
              ? 'İhtiyaçlarınıza özel kataloglar için lütfen bizimle iletişime geçin. Size özel çözümler sunmaktan memnuniyet duyarız.'
              : 'Please contact us for catalogs tailored to your specific needs. We are happy to provide you with custom solutions.'}
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
          >
            {currentLang === 'tr' ? 'İletişime Geçin' : 'Contact Us'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
