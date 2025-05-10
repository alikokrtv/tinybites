import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const { t } = useLanguage();
  
  // Mock blog posts data
  const blogPosts = [
    {
      id: 1,
      title: {
        en: "Healthy Eating Habits for Children",
        tr: "Çocuklar İçin Sağlıklı Beslenme Alışkanlıkları"
      },
      date: "2025-04-15",
      image: "/images/tiny-bites/elephant-tableware-pink.jpg",
      summary: {
        en: "Discover simple ways to encourage healthy eating habits in children from an early age.",
        tr: "Çocuklarda erken yaştan itibaren sağlıklı beslenme alışkanlıklarını teşvik etmenin basit yollarını keşfedin."
      }
    },
    {
      id: 2,
      title: {
        en: "Making Mealtime Fun with Colors",
        tr: "Renklerle Yemek Saatini Eğlenceli Hale Getirmek"
      },
      date: "2025-03-22",
      image: "/images/tiny-bites/elephant-tableware-blue.jpg",
      summary: {
        en: "Learn how colorful tableware can transform mealtime into an exciting experience for kids.",
        tr: "Renkli sofra ürünlerinin çocuklar için yemek saatini nasıl heyecan verici bir deneyime dönüştürebileceğini öğrenin."
      }
    },
    {
      id: 3,
      title: {
        en: "The Importance of Family Meals",
        tr: "Aile Yemeklerinin Önemi"
      },
      date: "2025-02-10",
      image: "/images/tiny-bites/elephant-tableware-grey.jpg",
      summary: {
        en: "Why sitting down together as a family for meals matters for your child's development.",
        tr: "Yemeklerde aile olarak bir araya gelmenin çocuğunuzun gelişimi için neden önemli olduğu."
      }
    }
  ];

  // Format date function
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('blog.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title.en} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-pink-500 mb-2">{formatDate(post.date)}</p>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {post.title[t('language') === 'tr' ? 'tr' : 'en']}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.summary[t('language') === 'tr' ? 'tr' : 'en']}
                </p>
                <Link to={`/blog/${post.id}`} className="text-pink-600 font-medium hover:text-pink-700 transition-colors flex items-center">
                  {post.title[t('language') === 'tr' ? 'tr' : 'en'] === post.title.tr ? 'Devamını Oku' : 'Read More'} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
