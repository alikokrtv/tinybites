import { Product } from '../types/Product';

// Image path constants
const TINY_BITES_PATH = '/images/tiny-bites/';
const STORAGE_BOXES_PATH = '/images/storage-boxes/';
const BASKETS_PATH = '/images/baskets/';

export const allProducts: Product[] = [
  // Tableware
  {
    id: '1',
    name: 'Elephant Tableware - Pink',
    category: 'Tableware',
    categoryId: 'tableware',
    image: `${TINY_BITES_PATH}elephant-tableware-pink.jpg`,
    galleryImages: [
      `${TINY_BITES_PATH}elephant-tableware-pink.jpg`,
    ],
    colors: ['#FFC0CB', '#FFB6C1', '#FF69B4'],
    featured: true,
    code: 'LV-160-P',
    description: {
      en: 'Our adorable pink elephant-themed tableware is designed specifically for children. Made from high-quality BPA-free materials that are safe for your little ones. The cute elephant design makes mealtime fun and exciting.',
      tr: 'Sevimli pembe fil temalı yemek takımımız özellikle çocuklar için tasarlanmıştır. Küçükleriniz için güvenli, yüksek kaliteli BPA içermeyen malzemelerden yapılmıştır. Sevimli fil tasarımı yemek zamanını eğlenceli ve heyecanlı hale getirir.'
    },
    specifications: {
      en: [
        'Made from food-safe BPA-free materials',
        'Dishwasher safe',
        'Microwave safe',
        'Suitable for children 6 months and older',
        'Separated compartments for different foods',
        'Non-slip bottom to prevent spills'
      ],
      tr: [
        'Gıda güvenliği olan BPA içermeyen malzemelerden üretilmiştir',
        'Bulaşık makinesinde yıkanabilir',
        'Mikrodalga fırında kullanılabilir',
        '6 ay ve üzeri çocuklar için uygundur',
        'Farklı yiyecekler için ayrı bölmeler',
        'Dökülmeleri önlemek için kaymaz taban'
      ]
    }
  },
  {
    id: '2',
    name: 'Elephant Tableware - Blue',
    category: 'Tableware',
    categoryId: 'tableware',
    image: `${TINY_BITES_PATH}elephant-tableware-blue.jpg`,
    galleryImages: [
      `${TINY_BITES_PATH}elephant-tableware-blue.jpg`,
    ],
    colors: ['#87CEEB', '#1E90FF', '#0000CD'],
    featured: true,
    code: 'LV-160-B',
    description: {
      en: 'Our adorable blue elephant-themed tableware is designed to make mealtime fun for kids. The cute elephant design and bright blue color are appealing to children while the practical compartments make it easy to serve different foods.',
      tr: 'Sevimli mavi fil temalı yemek takımımız, yemek zamanını çocuklar için eğlenceli hale getirmek için tasarlanmıştır. Sevimli fil tasarımı ve parlak mavi renk çocuklar için çekicidir, pratik bölmeler ise farklı yiyecekleri servis etmeyi kolaylaştırır.'
    },
    specifications: {
      en: [
        'Made from food-safe BPA-free materials',
        'Dishwasher safe',
        'Microwave safe',
        'Suitable for children 6 months and older',
        'Separated compartments for different foods',
        'Non-slip bottom to prevent spills'
      ],
      tr: [
        'Gıda güvenliği olan BPA içermeyen malzemelerden üretilmiştir',
        'Bulaşık makinesinde yıkanabilir',
        'Mikrodalga fırında kullanılabilir',
        '6 ay ve üzeri çocuklar için uygundur',
        'Farklı yiyecekler için ayrı bölmeler',
        'Dökülmeleri önlemek için kaymaz taban'
      ]
    }
  },
  {
    id: '3',
    name: 'Elephant Tableware - Grey',
    category: 'Tableware',
    categoryId: 'tableware',
    image: `${TINY_BITES_PATH}elephant-tableware-grey.jpg`,
    colors: ['#A9A9A9', '#808080', '#696969'],
    code: 'LV-160-G',
    description: {
      en: 'Our elegant grey elephant-themed tableware offers a sophisticated neutral option that complements any table setting. Made from the same high-quality BPA-free materials you expect from all our products, with the same playful design your children will love.',
      tr: 'Zarif gri fil temalı yemek takımımız, her sofra düzenini tamamlayan sofistike bir nötr seçenek sunar. Tüm ürünlerimizden beklediğiniz yüksek kaliteli BPA içermeyen malzemelerden üretilmiş, çocuklarınızın seveceği aynı eğlenceli tasarıma sahiptir.'
    },
    specifications: {
      en: [
        'Made from food-safe BPA-free materials',
        'Dishwasher safe',
        'Microwave safe',
        'Suitable for children 6 months and older',
        'Separated compartments for different foods',
        'Non-slip bottom to prevent spills'
      ],
      tr: [
        'Gıda güvenliği olan BPA içermeyen malzemelerden üretilmiştir',
        'Bulaşık makinesinde yıkanabilir',
        'Mikrodalga fırında kullanılabilir',
        '6 ay ve üzeri çocuklar için uygundur',
        'Farklı yiyecekler için ayrı bölmeler',
        'Dökülmeleri önlemek için kaymaz taban'
      ]
    },
    price: '290₺'
  },
  {
    id: '4',
    name: 'Kids Dinner Set',
    category: 'Tableware',
    categoryId: 'tableware',
    image: `${TINY_BITES_PATH}elephant-tableware-1.jpg`,
    colors: ['#FFC0CB', '#87CEEB', '#A9A9A9', '#FFFFFF'],
    code: 'LV-160-SET',
    description: {
      en: 'The complete dinner set for kids gives you everything you need for a perfect mealtime experience. This set includes our popular elephant-themed plate, bowl, cup, and utensils in coordinating colors. The perfect gift for new parents!',
      tr: 'Çocuklar için komple yemek seti, mükemmel bir yemek deneyimi için ihtiyacınız olan her şeyi sunar. Bu set, birbirine uyumlu renklerde popüler fil temalı tabak, kase, bardak ve çatal bıçak takımını içerir. Yeni ebeveynler için mükemmel bir hediye!'
    },
    specifications: {
      en: [
        'Complete set includes: plate, bowl, cup, fork, and spoon',
        'Made from food-safe BPA-free materials',
        'Dishwasher safe',
        'Microwave safe (except utensils)',
        'Suitable for children 6 months and older',
        'Available in multiple color options',
        'Gift box packaging available'
      ],
      tr: [
        'Komple set içeriği: tabak, kase, bardak, çatal ve kaşık',
        'Gıda güvenliği olan BPA içermeyen malzemelerden üretilmiştir',
        'Bulaşık makinesinde yıkanabilir',
        'Mikrodalga fırında kullanılabilir (çatal-kaşık hariç)',
        '6 ay ve üzeri çocuklar için uygundur',
        'Birden fazla renk seçeneğinde mevcuttur',
        'Hediye kutusu ambalajı mevcuttur'
      ]
    },
    price: '450₺'
  },
  
  // Storage Boxes
  {
    id: '5',
    name: 'Shell Storage Boxes Set',
    category: 'Storage Boxes',
    categoryId: 'storageBoxes',
    image: `${STORAGE_BOXES_PATH}lv-237-shell.jpg`,
    galleryImages: [
      `${STORAGE_BOXES_PATH}lv-237-shell.jpg`,
    ],
    colors: ['#FFFFFF', '#F5F5F5', '#E0E0E0'],
    featured: true,
    code: 'LV-237',
    description: {
      en: 'Our elegant Shell Storage Boxes Set provides a stylish and practical solution for organizing your home. These versatile containers are perfect for storing foods, spices, small household items, and more.',
      tr: 'Zarif Shell Saklama Kutuları Setimiz, evinizi düzenlemek için şık ve pratik bir çözüm sunar. Bu çok yönlü kaplar, yiyecekleri, baharatları, küçük ev eşyalarını ve daha fazlasını saklamak için mükemmeldir.'
    },
    specifications: {
      en: [
        'Made from high-quality durable plastic',
        'Airtight seal to keep contents fresh',
        'Stackable design to save space',
        'Easy-clean surface',
        'Elegant shell-inspired design',
        'Available in multiple sizes'
      ],
      tr: [
        'Yüksek kaliteli dayanıklı plastikten yapılmıştır',
        'İçindekileri taze tutmak için hava geçirmez conta',
        'Alan tasarrufu sağlayan istifleme tasarımı',
        'Kolay temizlenen yüzey',
        'Zarif deniz kabuğundan ilham alan tasarım',
        'Birden fazla boyutta mevcuttur'
      ]
    }
  },
  {
    id: '6',
    name: 'LV-310 Modern Storage',
    category: 'Storage Boxes',
    categoryId: 'storageBoxes',
    image: `${STORAGE_BOXES_PATH}LV-310 G.jpg`,
    colors: ['#A0A0A0', '#808080', '#606060'],
    code: 'LV-310',
    description: {
      en: "The LV-310 Modern Storage Box combines contemporary design with practical functionality. Perfect for organizing toys, art supplies, or small items in a child's room, this sleek container features a secure lid and easy-grip handles.",
      tr: 'LV-310 Modern Saklama Kutusu, çağdaş tasarımı pratik işlevsellikle birleştirir. Çocuk odasındaki oyuncakları, sanat malzemelerini veya küçük eşyaları düzenlemek için mükemmel olan bu şık konteyner, güvenli bir kapak ve kolay kavrama kulplarına sahiptir.'
    },
    specifications: {
      en: [
        'Durable polypropylene construction',
        'Secure snap-lock lid',
        'Easy-grip side handles',
        'Stackable design',
        'Available in multiple sizes',
        'Easy to clean with soap and water',
        'Dimensions: 40 x 30 x 20 cm'
      ],
      tr: [
        'Dayanıklı polipropilen yapı',
        'Güvenli mandallı kapak',
        'Kolay kavrama yan kulplar',
        'İstifleme tasarımı',
        'Birden fazla boyutta mevcuttur',
        'Sabun ve su ile kolayca temizlenebilir',
        'Boyutlar: 40 x 30 x 20 cm'
      ]
    },
    price: '180₺'
  },
  {
    id: '7',
    name: 'Pasta Storage Container',
    category: 'Storage Boxes',
    categoryId: 'storageBoxes',
    image: `${STORAGE_BOXES_PATH}MAKARON 1,2 LT.jpg`,
    colors: ['#F5F5DC', '#FAEBD7', '#FFE4C4'],
    code: 'LV-MAKARON-1.2',
    description: {
      en: 'Our Pasta Storage Container is specially designed to keep pasta, cereals, and dried goods fresh and organized. The airtight seal locks in freshness while the transparent design lets you see contents at a glance. Perfect for family kitchens!',
      tr: 'Makarna Saklama Kabımız, makarna, tahıllar ve kuru gıdaları taze ve düzenli tutmak için özel olarak tasarlanmıştır. Hava geçirmez conta tazeliği korurken, şeffaf tasarım içindekileri bir bakışta görmenizi sağlar. Aile mutfakları için mükemmel!'
    },
    specifications: {
      en: [
        '1.2 liter capacity',
        'Airtight silicone seal',
        'BPA-free plastic construction',
        'Transparent body for easy content visibility',
        'Dishwasher safe (top rack)',
        'Easy-open lid',
        'Stackable design saves cabinet space'
      ],
      tr: [
        '1,2 litre kapasite',
        'Hava geçirmez silikon conta',
        'BPA içermeyen plastik yapı',
        'İçeriğin kolayca görülebilmesi için şeffaf gövde',
        'Bulaşık makinesinde yıkanabilir (üst raf)',
        'Kolay açılır kapak',
        'Dolap alanından tasarruf sağlayan istifleme tasarımı'
      ]
    },
    price: '120₺'
  },
  
  // Baskets
  {
    id: '8',
    name: 'LV-341 Premium Basket',
    category: 'Baskets',
    categoryId: 'baskets',
    image: `${BASKETS_PATH}lv-331-lv-341.png`,
    galleryImages: [
      `${BASKETS_PATH}lv-331-lv-341.png`,
    ],
    colors: ['#D2B48C', '#DEB887', '#F5DEB3'],
    featured: true,
    code: 'LV-341',
    description: {
      en: 'The LV-341 Premium Basket combines functionality with elegance. This handcrafted basket is perfect for storing toys, laundry, or as a decorative element in any room. The sturdy construction ensures durability for years to come.',
      tr: 'LV-341 Premium Sepet, işlevselliği zarafetle birleştirir. Bu el yapımı sepet, oyuncakları, çamaşırları saklamak veya herhangi bir odada dekoratif bir eleman olarak kullanmak için mükemmeldir. Sağlam yapısı, uzun yıllar dayanıklılık sağlar.'
    },
    specifications: {
      en: [
        'Made from eco-friendly materials',
        'Handcrafted with attention to detail',
        'Sturdy handles for easy carrying',
        'Generous capacity for storage',
        'Available in multiple sizes and colors',
        'Wipe clean with damp cloth'
      ],
      tr: [
        'Çevre dostu malzemelerden üretilmiştir',
        'Detaylara özen gösterilerek el yapımı',
        'Kolay taşıma için sağlam kulplar',
        'Depolama için geniş kapasite',
        'Çeşitli boyut ve renklerde mevcuttur',
        'Nemli bezle silerek temizleyebilirsiniz'
      ]
    }
  },
  {
    id: '9',
    name: 'LV-331 Stylish Basket',
    category: 'Baskets',
    categoryId: 'baskets',
    image: `${BASKETS_PATH}LV-331.jpg`,
    colors: ['#8B4513', '#A0522D', '#CD853F'],
    code: 'LV-331',
    description: {
      en: 'The LV-331 Stylish Basket combines modern aesthetics with practical storage. Its durable construction and elegant design make it perfect for organizing toys, blankets, or laundry while enhancing your home décor.',
      tr: 'LV-331 Şık Sepet, modern estetiği pratik depolama ile birleştirir. Dayanıklı yapısı ve zarif tasarımı, ev dekorasyonunuzu zenginleştirirken oyuncakları, battaniyeleri veya çamaşırları düzenlemek için mükemmeldir.'
    },
    specifications: {
      en: [
        'Made from durable synthetic rattan',
        'Reinforced handles for easy carrying',
        'Water-resistant design',
        'Easy to clean with damp cloth',
        'Available in multiple sizes and colors',
        'Collapsible for easy storage when not in use',
        'Dimensions: 40 x 30 x 25 cm'
      ],
      tr: [
        'Dayanıklı sentetik rattandan üretilmiştir',
        'Kolay taşıma için güçlendirilmiş kulplar',
        'Su geçirmez tasarım',
        'Nemli bezle kolayca temizlenebilir',
        'Birden fazla boyut ve renkte mevcuttur',
        'Kullanılmadığında kolay depolama için katlanabilir',
        'Boyutlar: 40 x 30 x 25 cm'
      ]
    },
    price: '210₺'
  },
  {
    id: '10',
    name: 'LV-330 Green Basket',
    category: 'Baskets',
    categoryId: 'baskets',
    image: `${BASKETS_PATH}LV-330.jpg`,
    colors: ['#2E8B57', '#3CB371', '#90EE90'],
    code: 'LV-330',
    description: {
      en: "The LV-330 Green Basket brings a touch of nature to your storage solutions. With its vibrant green color and practical design, this basket is perfect for organizing children's toys, books, or as decorative storage in any room.",
      tr: 'LV-330 Yeşil Sepet, depolama çözümlerinize doğanın dokusunu getirir. Canlı yeşil rengi ve pratik tasarımıyla bu sepet, çocuk oyuncaklarını, kitaplarını düzenlemek veya herhangi bir odada dekoratif depolama olarak kullanmak için mükemmeldir.'
    },
    specifications: {
      en: [
        'Eco-friendly construction',
        'Lightweight yet durable design',
        'Easy-grip integrated handles',
        'Wipe clean with damp cloth',
        'Stackable when not in use',
        'Available in multiple sizes',
        'Dimensions: 35 x 25 x 20 cm'
      ],
      tr: [
        'Çevre dostu yapı',
        'Hafif ancak dayanıklı tasarım',
        'Kolay kavrama entegre kulplar',
        'Nemli bezle silinerek temizlenebilir',
        'Kullanılmadığında istifleme özelliği',
        'Birden fazla boyutta mevcuttur',
        'Boyutlar: 35 x 25 x 20 cm'
      ]
    },
    price: '195₺'
  }
];

export const featuredProducts = allProducts.filter(product => product.featured);