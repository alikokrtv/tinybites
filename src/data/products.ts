import { Product } from '../types/Product';

// Image path constants
const TINY_BITES_PATH = '/images/tiny-bites/';
const STORAGE_BOXES_PATH = '/images/storage-boxes/';
const BASKETS_PATH = '/images/baskets/';

export const allProducts: Product[] = [
  // Tableware
  {
    id: 'tb-lv111',
    name: 'Yogi Plate',
    category: 'Tableware',
    categoryId: 'tableware',
    image: `${TINY_BITES_PATH}tb-lv111gmrseli.jpg`,
    galleryImages: [
      `${TINY_BITES_PATH}tb-lv111gmrseli.jpg`,
      `${TINY_BITES_PATH}lv-111-yogi.jpg`
    ],
    colors: ['#4D7C4E', '#F4C145', '#8D5B8A'],
    featured: true,
    code: 'LV-111',
    description: {
      en: 'Yogi is your little one\'s cutest mealtime buddy! With its bear ears and fun, colorful compartments, it\'s a treat for both the eyes and the tummy. Fruits, snacks, or nuts - everything stays in its place! With Yogi, mealtime becomes more joyful and way more organized!',
      tr: 'Yogi, miniklerin en sevimli yemek arkadaşı! Ayı kulaklı eğlenceli tasarımı ve renkli bölmeleriyle hem gözlere hem karınlara hitap eder. Meyve mi, kuruyemiş mi, hepsi ayrı bölmesinde! Yogi ile yemek yemek artık daha keyifli, daha düzenli!'
    },
    specifications: {
      en: [
        'Bear-shaped design with 3 compartments',
        'Comes with matching bear-handled utensils',
        'Made from food-safe BPA-free materials',
        'Dishwasher safe',
        'Microwave safe (except utensils)',
        'Available in 3 colors: green, yellow, and purple',
        '36 pieces per box'
      ],
      tr: [
        'Ayı şeklinde tasarım, 3 bölmeli',
        'Ayı şeklinde saplı uyumlu çatal-kaşık ile birlikte',
        'Gıda güvenliği olan BPA içermeyen malzemelerden üretilmiştir',
        'Bulaşık makinesinde yıkanabilir',
        'Mikrodalga fırında kullanılabilir (çatal-kaşık hariç)',
        'Yeşil, sarı ve mor olmak üzere 3 renk seçeneği',
        'Kutuda 36 adet'
      ]
    }
  },
  {
    id: 'tb-lv113',
    name: 'Yogi Flat Plate + Cutlery Set',
    category: 'Tableware',
    categoryId: 'tableware',
    image: `${TINY_BITES_PATH}yogi-flat-plate.jpeg`,
    galleryImages: [
      `${TINY_BITES_PATH}yogi-flat-plate.jpeg`
    ],
    colors: ['#4D7C4E', '#F4C145', '#8D5B8A'],
    featured: true,
    code: 'LV-113',
    description: {
      en: 'Yogi is back - simpler but still super fun! This bear-shaped flat plate is perfect for little ones learning to feed themselves. Paired with a bone-handle fork and spoon, it turns every meal into a playful adventure. Bright colors, easy eating, happy tummies!',
      tr: 'Yogi şimdi daha sade ama hâlâ çok eğlenceli! Ayı şekilli düz mama tabağı, miniklerin kendi kendine yemeye başlaması için ideal. Yanındaki kemik saplı çatal-kaşık setiyle yemek saatleri hem daha keyifli hem daha pratik. Renkleriyle göz alıcı, tasarımıyla eğlenceli!'
    },
    specifications: {
      en: [
        'Bear-shaped flat plate design',
        'Comes with bone-handle utensils',
        'Made from food-safe BPA-free materials',
        'Dishwasher safe',
        'Microwave safe (except utensils)',
        'Available in multiple colors',
        'Perfect for self-feeding practice',
        'Non-slip base to prevent spills'
      ],
      tr: [
        'Ayı şekilli düz tabak tasarımı',
        'Kemik saplı çatal-kaşık seti ile birlikte',
        'Gıda güvenliği olan BPA içermeyen malzemelerden üretilmiştir',
        'Bulaşık makinesinde yıkanabilir',
        'Mikrodalga fırında kullanılabilir (çatal-kaşık hariç)',
        'Birden fazla renk seçeneğinde mevcuttur',
        'Çocukların kendi kendine yemek alışkanlığı kazanması için ideal',
        'Dökülmeleri önlemek için kaymaz taban'
      ]
    }
  },
  {
    id: 'tb-lv112',
    name: 'YOGI Food Table with 4 Compartments',
    category: 'Tableware',
    categoryId: 'tableware',
    image: `${TINY_BITES_PATH}Herborn Spice Organizer.jpeg`,
    galleryImages: [
      `${TINY_BITES_PATH}Herborn Spice Organizer.jpeg`,
    ],
    colors: ['#4D7C4E', '#F4C145', '#8D5B8A'],
    featured: true,
    code: 'LV-112',
    description: {
      en: 'Yogi Food Plate makes eating fun for your kids. The bear-shaped plate with 4 separate compartments helps children enjoy a variety of foods in an organized way.',
      tr: 'Yogi mama tabağı, yemek yemeyi çocuklarınız için eğlenceli hale getiriyor. 4 ayrı bölmeli ayı şeklindeki tabak, çocukların çeşitli yiyecekleri düzenli bir şekilde yemelerine yardımcı olur.'
    },
    specifications: {
      en: [
        'Bear-shaped design with 4 compartments',
        'Made from food-safe BPA-free materials',
        'Dishwasher safe',
        'Microwave safe',
        'Perfect for serving multiple foods without mixing',
        'Available in multiple colors',
        '24 pieces per box'
      ],
      tr: [
        'Ayı şeklinde tasarım, 4 bölmeli',
        'Gıda güvenliği olan BPA içermeyen malzemelerden üretilmiştir',
        'Bulaşık makinesinde yıkanabilir',
        'Mikrodalga fırında kullanılabilir',
        'Yiyecekleri karıştırmadan servis etmek için mükemmel',
        'Birden fazla renk seçeneği mevcut',
        'Kutuda 24 adet'
      ]
    }
  },
  {
    id: 'tb-lv108',
    name: 'Car Plate',
    category: 'Tableware',
    categoryId: 'tableware',
    image: `${TINY_BITES_PATH}car-plate-new.jpg`,
    galleryImages: [
      `${TINY_BITES_PATH}car-plate-new.jpg`,
      `${TINY_BITES_PATH}lv-108-car.jpg`
    ],
    colors: ['#89CFF0', '#FFB6C1'],
    featured: true,
    code: 'LV-108',
    description: {
      en: 'Mealtime goes full speed ahead with our fun Car Plate! With its playful car shape and smart compartments, it keeps food separate and little ones engaged. The perfect ride for happy tummies and tidy tables!',
      tr: 'Araba şekilli bu eğlenceli tabak, miniklerin öğünlerini hızla keyfe dönüştürüyor! Bölmeli tasarımı sayesinde yiyecekler karışmaz, çocuklar özgürce seçim yapar. Sofrada eğlenceli bir yolculuk başlasın!'
    },
    specifications: {
      en: [
        'Car-shaped design with multiple compartments',
        'Made from food-safe BPA-free materials',
        'Dishwasher safe',
        'Microwave safe',
        'Available in blue and pink colors',
        'Perfect for picky eaters',
        '48 pieces per box'
      ],
      tr: [
        'Araba şeklinde tasarım, çoklu bölmeli',
        'Gıda güvenliği olan BPA içermeyen malzemelerden üretilmiştir',
        'Bulaşık makinesinde yıkanabilir',
        'Mikrodalga fırında kullanılabilir',
        'Mavi ve pembe renk seçenekleri mevcut',
        'Seçici yemek yiyenler için mükemmel',
        'Kutuda 48 adet'
      ]
    }
  },
  {
    id: 'tb-lv160',
    name: 'Elephant Plate',
    category: 'Tableware',
    categoryId: 'tableware',
    image: `${TINY_BITES_PATH}elephant-tableware-blue-new.jpg`,
    galleryImages: [
      `${TINY_BITES_PATH}elephant-tableware-blue-new.jpg`,
      `${TINY_BITES_PATH}elephant-tableware-grey-new.jpg`,
      `${TINY_BITES_PATH}elephant-tableware-pink-new.jpg`,
      `${TINY_BITES_PATH}elephant-tableware-blue.jpg`,
      `${TINY_BITES_PATH}elephant-tableware-grey.jpg`,
      `${TINY_BITES_PATH}elephant-tableware-pink.jpg`
    ],
    colors: ['#87CEEB', '#A9A9A9', '#FFC0CB'],
    featured: true,
    code: 'LV-160',
    description: {
      en: 'Mealtime just got way more fun with Elephant! This adorable elephant-shaped plate keeps foods neat and separated with its smart compartments. Elephant makes it perfect for little hands and big appetites!',
      tr: 'Fil, miniklerin öğünlerini eğlenceli bir serüvene dönüştürüyor! Sevimli fil şekli ve bölmeli tasarımı sayesinde yiyecekler düzenli kalır, minikler severek yer. Fil mama tabagi ile mama savaşları tarih oluyor!'
    },
    specifications: {
      en: [
        'Elephant-shaped design with compartments',
        'Made from food-safe BPA-free materials',
        'Dishwasher safe',
        'Microwave safe',
        'Suitable for children 6 months and older',
        'Available in blue, grey, and pink colors',
        'Non-slip bottom to prevent spills'
      ],
      tr: [
        'Fil şeklinde bölmeli tasarım',
        'Gıda güvenliği olan BPA içermeyen malzemelerden üretilmiştir',
        'Bulaşık makinesinde yıkanabilir',
        'Mikrodalga fırında kullanılabilir',
        '6 ay ve üzeri çocuklar için uygundur',
        'Mavi, gri ve pembe renk seçenekleri mevcuttur',
        'Dökülmeleri önlemek için kaymaz taban'
      ]
    },
    variants: [
      {
        name: 'Blue',
        color: '#87CEEB',
        image: `${TINY_BITES_PATH}elephant-tableware-blue-new.jpg`
      },
      {
        name: 'Grey',
        color: '#A9A9A9',
        image: `${TINY_BITES_PATH}elephant-tableware-grey-new.jpg`
      },
      {
        name: 'Pink',
        color: '#FFC0CB',
        image: `${TINY_BITES_PATH}elephant-tableware-pink-new.jpg`
      }
    ]
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
  },
  
  {
    id: 'tb-lv120',
    name: 'Macaron Kids',
    category: 'Tableware',
    categoryId: 'tableware',
    image: `${TINY_BITES_PATH}macaron-container.jpg`,
    galleryImages: [
      `${TINY_BITES_PATH}macaron-container.jpg`
    ],
    colors: ['#FFB6C1', '#87CEEB', '#98FB98', '#FFFFE0'],
    featured: true,
    code: 'LV-120',
    description: {
      en: 'Sweet on the outside, smart on the inside! These colorful macaron-shaped containers add a dash of fun to snack time. Perfect for little bites, fruit portions, or playful storage. Cute, compact, and totally crave-worthy!',
      tr: 'Tatlı bir görünüm, pratik bir kullanım! Macaron şeklindeki bu renkli saklama kapları, atıştırmalıkları veya küçük porsiyonları saklamak için hem şık hem de eğlenceli bir çözüm. Çocukların bayılacağı bir tasarım, annelerin seveceği bir pratiklik!'
    },
    specifications: {
      en: [
        'Macaron-shaped design',
        'Made from food-safe BPA-free materials',
        'Dishwasher safe',
        'Airtight seal keeps snacks fresh',
        'Perfect size for kids\'s snacks',
        'Available in multiple pastel colors',
        'Stackable for easy storage'
      ],
      tr: [
        'Macaron şeklinde tasarım',
        'Gıda güvenliği olan BPA içermeyen malzemelerden üretilmiştir',
        'Bulaşık makinesinde yıkanabilir',
        'Hava geçirmez kapak atıştırmalıkları taze tutar',
        'Çocuk atıştırmalıkları için ideal boyut',
        'Birden fazla pastel renk seçeneği',
        'İstiflenerek kolay saklama'
      ]
    }
  },

  // Storage Boxes
  {
    id: 'sb-lv295',
    name: 'Order in Flavor: Herborn Spice Organizer',
    category: 'Storage Boxes',
    categoryId: 'storageBoxes',
    image: `${STORAGE_BOXES_PATH}herborn-spice-organizer.jpeg`,
    galleryImages: [
      `${STORAGE_BOXES_PATH}herborn-spice-organizer.jpeg`,
    ],
    colors: ['#FFFFFF', '#F5F5DC'],
    featured: true,
    code: 'LV-295',
    description: {
      en: 'Herborn is the perfect kitchen companion for those who value both elegance and practicality. With its four-compartment design, you can keep a variety of spices neatly organized in one container. Each section comes with its own spoon and a hygienic lid system for easy use.',
      tr: 'Herborn baharatlık, mutfakta hem şıklık hem de pratiklik arayanlar için ideal bir yardımcı. Dört bölmeli yapısı sayesinde farklı baharatları aynı kapta düzenli bir şekilde saklamanıza olanak tanır. Her bölme için özel kaşıkları ve kapak tasarımıyla hem hijyenik hem de kullanışlıdır.'
    },
    specifications: {
      en: [
        'Four separate compartments for different spices',
        'Includes 4 matching spoons',
        'Compact and portable design',
        'BPA-free food-safe materials',
        'Easy to clean',
        'Perfect for kitchen organization',
        '12 pieces per box'
      ],
      tr: [
        'Farklı baharatlar için dört ayrı bölme',
        '4 adet uyumlu kaşık içerir',
        'Kompakt ve taşınabilir tasarım',
        'BPA içermeyen gıda güvenliği olan malzemeler',
        'Kolayca temizlenebilir',
        'Mutfak organizasyonu için mükemmel',
        'Kutuda 12 adet'
      ]
    }
  },
  // Macaron Storage Container - For Adults ürünü kaldırıldı
  {
    id: 'sb-lv254',
    name: 'Compartment Storage Box',
    category: 'Storage Boxes',
    categoryId: 'storageBoxes',
    image: `${STORAGE_BOXES_PATH}LV-310 G.jpg`,
    galleryImages: [
      `${STORAGE_BOXES_PATH}LV-310 G.jpg`,
    ],
    colors: ['#4682B4', '#C08081', '#F0E68C', '#D3D3D3'],
    featured: true,
    code: 'LV-254',
    description: {
      en: 'With the compartmented storage boxes, you can carry or store your foods anywhere you want by putting them in separate compartments.',
      tr: 'Bölmeli saklama kabı ile yiyeceklerinizi ayrı bölmelere koyarak istediğiniz yere taşıyabilir veya saklayabilirsiniz.'
    },
    specifications: {
      en: [
        'Available in multiple vibrant colors',
        '900 ml capacity',
        'Airtight seal to keep food fresh',
        'Microwave safe (without lid)',
        'Dishwasher safe',
        'Stackable design for easy storage',
        '24 pieces per box'
      ],
      tr: [
        'Birden fazla canlı renk seçeneği mevcut',
        '900 ml kapasite',
        'Yiyecekleri taze tutmak için hava geçirmez kapak',
        'Mikrodalga fırında kullanılabilir (kapaksız)',
        'Bulaşık makinesinde yıkanabilir',
        'Kolay depolama için istifleme tasarımı',
        'Kutuda 24 adet'
      ]
    }
  },
  {
    id: 'sb-lv104',
    name: 'Macaron Adults',
    category: 'Storage Boxes',
    categoryId: 'storageBoxes',
    image: `${STORAGE_BOXES_PATH}MAKARON 1,2 LT.jpg`,
    galleryImages: [
      `${STORAGE_BOXES_PATH}MAKARON 1,2 LT.jpg`,
    ],
    colors: ['#FF69B4', '#90EE90', '#F0E68C', '#FFA500'],
    featured: true,
    code: 'LV-104',
    description: {
      en: 'Enjoy taking your food everywhere you want with the Macaron Storage Container. You can also use it for your child\'s lunchbox.',
      tr: 'Makaron saklama kabı ile yiyeceklerinizi istediğiniz yere taşıyabilme keyfini yaşayın. Çocuğunuzun beslenme çantası için de kullanabilirsiniz.'
    },
    specifications: {
      en: [
        'Cute macaron-shaped design',
        '400 ml capacity',
        'Available in pink, green, yellow, and orange',
        'Secure snap-lock closure',
        'Dishwasher safe',
        'Perfect for snacks, small meals or accessories',
        '72 pieces per box'
      ],
      tr: [
        'Sevimli makaron şeklinde tasarım',
        '400 ml kapasite',
        'Pembe, yeşil, sarı ve turuncu renklerde mevcut',
        'Güvenli mandallı kapak',
        'Bulaşık makinesinde yıkanabilir',
        'Atıştırmalıklar, küçük yemekler veya aksesuarlar için mükemmel',
        'Kutuda 72 adet'
      ]
    }
  },
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

  },
  
  {
    id: 'sb-lv202',
    name: 'Storage Container',
    category: 'Storage Boxes',
    categoryId: 'storageBoxes',
    image: `${STORAGE_BOXES_PATH}herborn-storage-1.jpg`,
    galleryImages: [
      `${STORAGE_BOXES_PATH}herborn-storage-1.jpg`,
      `${STORAGE_BOXES_PATH}herborn-storage-2.jpg`
    ],
    colors: ['#B0E0E6', '#FFB6C1', '#E6E6FA', '#F0F8FF'],
    featured: false,
    hidden: true,
    code: 'LV-202',
    description: {
      en: 'A perfect blend of elegance and practicality for your everyday kitchen needs. The Herborn container features a soft, ribbed exterior design and comes in calming pastel tones. Ideal for storing fruits, snacks, leftovers, or dry ingredients – both at home and on the go.',
      tr: 'Günlük mutfak ihtiyaçlarınız için şıklık ve pratikliğin mükemmel birleşimi. Herborn, yumuşak dokulu çizgili dış tasarımı ve pastel renk seçenekleriyle dikkat çeker. Meyve, atıştırmalık, artan yemekler veya kuru gıdalar için idealdir – hem evde hem de dışarıda kullanım için uygundur.'
    },
    specifications: {
      en: [
        'Elegant ribbed exterior design',
        'Available in multiple pastel colors',
        'Airtight seal keeps contents fresh',
        'Microwave, freezer, and dishwasher safe',
        'Made from high-quality BPA-free materials',
        'Multiple size options available',
        'Perfect for home and travel use'
      ],
      tr: [
        'Şık çizgili dış tasarım',
        'Birden fazla pastel renk seçeneği',
        'Hava geçirmez kapak içindekilerini taze tutar',
        'Mikrodalga, dondurucu ve bulaşık makinesinde kullanılabilir',
        'Yüksek kaliteli BPA içermeyen malzemelerden üretilmiştir',
        'Birden fazla boyut seçeneği mevcut',
        'Ev ve seyahat kullanımı için idealdir'
      ]
    }
  },
  {
    id: 'sb-lv201',
    name: 'Shell Food Storage Set',
    category: 'Storage Boxes',
    categoryId: 'storageBoxes',
    image: `${STORAGE_BOXES_PATH}shell-storage-1.jpg`,
    galleryImages: [
      `${STORAGE_BOXES_PATH}shell-storage-1.jpg`,
      `${STORAGE_BOXES_PATH}shell-storage-2.jpg`
    ],
    colors: ['#FFFFFF', '#F5F5F5'],
    featured: true,
    code: 'LV-201',
    description: {
      en: 'A stylish and practical solution for modern kitchens! The Shell series features a sleek, ribbed transparent design that keeps your pantry neat and your dry goods fresh. With various size options, it\'s perfect for storing pasta, legumes, snacks, and more.',
      tr: 'Modern mutfaklar için hem estetik hem fonksiyonel bir çözüm! Shell serisi, şeffaf ve zarif çizgili yapısıyla dolaplarda düzeni sağlarken, farklı ebatları sayesinde makarna, bakliyat, kuruyemiş gibi ürünleri taze tutar.'
    },
    specifications: {
      en: [
        'Sleek ribbed transparent design',
        'Airtight seal for freshness',
        'Made from high-quality BPA-free materials',
        'Available in multiple sizes',
        'Stackable design for space-saving storage',
        'Dishwasher safe',
        'Ideal for pantry organization'
      ],
      tr: [
        'Şık çizgili şeffaf tasarım',
        'Tazelik için hava geçirmez kapak',
        'Yüksek kaliteli BPA içermeyen malzemelerden üretilmiştir',
        'Birden fazla boyut seçeneği',
        'Alan tasarrufu sağlayan istiflenebilir tasarım',
        'Bulaşık makinesinde yıkanabilir',
        'Kiler organizasyonu için ideal'
      ]
    }
  },

  // Baskets
  {
    id: 'bk-lv301',
    name: 'Shell Basket - Stylish and Functional Storage Solution',
    category: 'Baskets',
    categoryId: 'baskets',
    image: `${BASKETS_PATH}lv-331-lv-341.png`,
    galleryImages: [
      `${BASKETS_PATH}lv-331-lv-341.png`,
      `${BASKETS_PATH}shell-basket-2.jpg`
    ],
    colors: ['#F5F5F5', '#EAEAEA', '#D3D3D3'],
    featured: true,
    code: 'LV-301',
    description: {
      en: 'More than just a basket, Shell is a modern and elegant piece that blends seamlessly into any room in your home. Its lid provides a neat appearance, while the side handles allow for easy carrying. From toys to laundry, textiles to everyday clutter — it keeps everything neatly stored.',
      tr: 'Shell, sadece bir sepet değil; evinizin her köşesine uyum sağlayan modern ve fonksiyonel bir dekor parçası! Kapağı sayesinde düzenli görünüm sağlarken, kulplarıyla kolay taşınır. Oyuncaklardan çamaşıra, tekstilden günlük dağınıklıklara kadar her şeyi saklamak için ideal.'
    },
    specifications: {
      en: [
        'Modern and elegant design',
        'Fitted lid for a neat appearance',
        'Convenient side handles for easy carrying',
        'Made from durable materials',
        'Available in multiple sizes',
        'Versatile storage solution for any room',
        'Neutral colors to match any decor'
      ],
      tr: [
        'Modern ve şık tasarım',
        'Düzenli görünüm için uyumlu kapak',
        'Kolay taşıma için kulplar',
        'Dayanıklı malzemelerden üretilmiştir',
        'Birden fazla boyut seçeneği',
        'Her oda için çok yönlü depolama çözümü',
        'Her dekora uyum sağlayan nötr renkler'
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

  }
];

export const featuredProducts = allProducts.filter(product => product.featured && !product.hidden);