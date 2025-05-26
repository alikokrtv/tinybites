import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';

// Mock blog posts data - this would typically come from an API or CMS
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
    },
    content: {
      en: `<p>Establishing healthy eating habits in children from an early age is crucial for their development and future health. Here are some effective strategies to encourage healthy eating habits in your little ones:</p>
          <h2>1. Be a Role Model</h2>
          <p>Children learn by observing. If they see you enjoying nutritious foods, they are more likely to follow suit. Make sure to demonstrate healthy eating behaviors yourself.</p>
          <h2>2. Make Mealtime Fun</h2>
          <p>Use colorful plates and utensils designed for children. Arrange food in fun shapes or create food art that makes healthy options appealing. Our Tiny Bites collection is specifically designed with this principle in mind!</p>
          <h2>3. Involve Children in Food Preparation</h2>
          <p>Let your children help with age-appropriate tasks in the kitchen. This involvement increases their interest in trying new foods and understanding where their food comes from.</p>
          <h2>4. Offer a Variety of Foods</h2>
          <p>Expose children to a wide range of fruits, vegetables, whole grains, and proteins. The more variety they experience, the more likely they are to find healthy foods they enjoy.</p>
          <h2>5. Stay Consistent but Patient</h2>
          <p>It can take 10-15 exposures to a new food before a child accepts it. Be patient and continue offering new foods without pressure.</p>
          <h2>6. Avoid Using Food as Reward or Punishment</h2>
          <p>This practice can create unhealthy associations with food. Instead, use praise, activities, or other non-food rewards.</p>
          <p>By implementing these strategies consistently, you'll help set your child on a path to lifelong healthy eating habits.</p>`,
      tr: `<p>Çocuklarda erken yaştan itibaren sağlıklı beslenme alışkanlıkları oluşturmak, gelişimleri ve gelecekteki sağlıkları için çok önemlidir. İşte küçüklerinizde sağlıklı beslenme alışkanlıklarını teşvik etmenin bazı etkili yolları:</p>
          <h2>1. Rol Model Olun</h2>
          <p>Çocuklar gözlemleyerek öğrenir. Eğer sizi besleyici gıdaları keyifle yerken görürlerse, onlar da büyük olasılıkla sizi takip edeceklerdir. Kendiniz de sağlıklı beslenme davranışları sergilediğinizden emin olun.</p>
          <h2>2. Yemek Zamanını Eğlenceli Hale Getirin</h2>
          <p>Çocuklar için tasarlanmış renkli tabak ve çatal bıçak takımları kullanın. Yiyecekleri eğlenceli şekillerde düzenleyin veya sağlıklı seçenekleri cazip hale getiren yemek sanatı oluşturun. Tiny Bites koleksiyonumuz özellikle bu prensip göz önünde bulundurularak tasarlanmıştır!</p>
          <h2>3. Çocukları Yemek Hazırlama Sürecine Dahil Edin</h2>
          <p>Çocuklarınızın mutfakta yaşlarına uygun görevlerde yardım etmelerine izin verin. Bu katılım, yeni yiyecekleri deneme ve yiyeceklerinin nereden geldiğini anlama konusundaki ilgilerini artırır.</p>
          <h2>4. Çeşitli Yiyecekler Sunun</h2>
          <p>Çocukları çeşitli meyve, sebze, tam tahıl ve proteinlerle tanıştırın. Ne kadar çok çeşit deneyimlerlerse, sevdikleri sağlıklı yiyecekleri bulma olasılıkları o kadar artar.</p>
          <h2>5. Tutarlı ama Sabırlı Olun</h2>
          <p>Bir çocuğun yeni bir yiyeceği kabul etmesi 10-15 kez deneme gerektirebilir. Sabırlı olun ve baskı yapmadan yeni yiyecekler sunmaya devam edin.</p>
          <h2>6. Yiyeceği Ödül veya Ceza Olarak Kullanmaktan Kaçının</h2>
          <p>Bu uygulama, yiyecekle ilgili sağlıksız ilişkiler oluşturabilir. Bunun yerine övgü, aktiviteler veya diğer yiyecek dışı ödüller kullanın.</p>
          <p>Bu stratejileri tutarlı bir şekilde uygulayarak, çocuğunuzu ömür boyu sürecek sağlıklı beslenme alışkanlıkları yoluna koyacaksınız.</p>`
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
    },
    content: {
      en: `<p>Colors play a significant role in stimulating children's senses and can dramatically impact their mealtime experience. Here's how incorporating colorful tableware can make eating more enjoyable for kids:</p>
          <h2>The Psychology of Color</h2>
          <p>Research shows that children are naturally drawn to bright, vibrant colors. These colors stimulate their developing brains and can create positive associations with food and eating.</p>
          <h2>Benefits of Colorful Tableware</h2>
          <p>Using colorful plates, cups, and utensils can:</p>
          <ul>
            <li>Encourage children to try new foods</li>
            <li>Make nutritious options more appealing</li>
            <li>Transform ordinary meals into exciting adventures</li>
            <li>Create a positive atmosphere at the dining table</li>
            <li>Help children distinguish between different food groups</li>
          </ul>
          <h2>Color-Based Food Presentation Ideas</h2>
          <p>Try these creative approaches to make meals more engaging:</p>
          <ul>
            <li>Create rainbow meals with fruits and vegetables of different colors</li>
            <li>Use contrasting plate colors to make food stand out</li>
            <li>Arrange food in patterns or pictures on colorful plates</li>
            <li>Match food colors to plate colors for a theme</li>
          </ul>
          <p>Our Tiny Bites collection features a variety of vibrant, child-friendly colors specifically designed to make mealtime an adventure. By incorporating these colorful elements into your child's eating routine, you can foster a healthier relationship with food and make every meal something to look forward to!</p>`,
      tr: `<p>Renkler çocukların duyularını uyarmada önemli bir rol oynar ve yemek saati deneyimlerini önemli ölçüde etkileyebilir. İşte renkli sofra ürünlerinin çocuklar için yemeği daha keyifli hale nasıl getirebileceği:</p>
          <h2>Rengin Psikolojisi</h2>
          <p>Araştırmalar, çocukların doğal olarak parlak, canlı renklere çekildiğini gösteriyor. Bu renkler, gelişen beyinlerini uyarır ve yiyecek ve yemekle ilgili olumlu bağlantılar oluşturabilir.</p>
          <h2>Renkli Sofra Ürünlerinin Faydaları</h2>
          <p>Renkli tabaklar, bardaklar ve çatal bıçak takımları kullanmak:</p>
          <ul>
            <li>Çocukları yeni yiyecekleri denemeye teşvik eder</li>
            <li>Besleyici seçenekleri daha çekici hale getirir</li>
            <li>Sıradan yemekleri heyecan verici maceralara dönüştürür</li>
            <li>Yemek masasında olumlu bir atmosfer yaratır</li>
            <li>Çocukların farklı yiyecek gruplarını ayırt etmesine yardımcı olur</li>
          </ul>
          <h2>Renge Dayalı Yemek Sunum Fikirleri</h2>
          <p>Yemekleri daha ilgi çekici hale getirmek için bu yaratıcı yaklaşımları deneyin:</p>
          <ul>
            <li>Farklı renklerde meyve ve sebzelerle gökkuşağı yemekleri oluşturun</li>
            <li>Yiyeceklerin öne çıkması için zıt tabak renkleri kullanın</li>
            <li>Renkli tabaklarda yiyecekleri desenler veya resimler halinde düzenleyin</li>
            <li>Bir tema için yiyecek renklerini tabak renkleriyle eşleştirin</li>
          </ul>
          <p>Tiny Bites koleksiyonumuz, yemek saatini bir maceraya dönüştürmek için özel olarak tasarlanmış çeşitli canlı, çocuk dostu renkler içerir. Bu renkli öğeleri çocuğunuzun yeme rutinine dahil ederek, yiyecekle daha sağlıklı bir ilişki geliştirebilir ve her öğünü sabırsızlıkla beklenen bir şeye dönüştürebilirsiniz!</p>`
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
    },
    content: {
      en: `<p>In today's fast-paced world, finding time to sit down for family meals might seem challenging, but the benefits make it well worth the effort. Research consistently shows that regular family meals can have profound positive effects on children's development.</p>
          <h2>Social and Emotional Benefits</h2>
          <p>Family meals provide a structured time for connection and communication. Children who regularly eat with their families tend to:</p>
          <ul>
            <li>Feel more secure and develop stronger family bonds</li>
            <li>Have better communication skills</li>
            <li>Experience less stress and anxiety</li>
            <li>Develop better self-esteem</li>
          </ul>
          <h2>Nutritional Benefits</h2>
          <p>The quality of food consumed during family meals is typically higher than meals eaten on-the-go or alone. Benefits include:</p>
          <ul>
            <li>More fruits and vegetables in the diet</li>
            <li>Better portion control and eating patterns</li>
            <li>Lower risk of developing eating disorders</li>
            <li>Reduced likelihood of childhood obesity</li>
          </ul>
          <h2>Educational Benefits</h2>
          <p>Family mealtime conversation exposes children to a rich vocabulary and complex ideas. Studies show children who regularly participate in family meals:</p>
          <ul>
            <li>Have larger vocabularies</li>
            <li>Perform better academically</li>
            <li>Develop better critical thinking skills</li>
          </ul>
          <h2>Tips for Successful Family Meals</h2>
          <ul>
            <li>Start with realistic goals (even if it's just 2-3 times per week)</li>
            <li>Keep meals screen-free to encourage conversation</li>
            <li>Involve children in meal preparation when possible</li>
            <li>Use child-friendly tableware to make the experience more enjoyable</li>
            <li>Focus on connection, not perfect behavior or nutrition</li>
          </ul>
          <p>Remember, the quality of the interaction is more important than the elaborateness of the meal. Even simple meals can create meaningful family connections that benefit your child's development in numerous ways.</p>`,
      tr: `<p>Günümüzün hızlı temposunda, aile yemekleri için oturmak için zaman bulmak zor görünebilir, ancak faydaları çabaya değer. Araştırmalar, düzenli aile yemeklerinin çocukların gelişimi üzerinde derin olumlu etkileri olabileceğini tutarlı bir şekilde gösteriyor.</p>
          <h2>Sosyal ve Duygusal Faydalar</h2>
          <p>Aile yemekleri, bağlantı ve iletişim için yapılandırılmış bir zaman sağlar. Düzenli olarak aileleriyle yemek yiyen çocuklar genellikle:</p>
          <ul>
            <li>Kendilerini daha güvende hisseder ve daha güçlü aile bağları geliştirirler</li>
            <li>Daha iyi iletişim becerilerine sahip olurlar</li>
            <li>Daha az stres ve kaygı yaşarlar</li>
            <li>Daha iyi özgüven geliştirirler</li>
          </ul>
          <h2>Beslenme Faydaları</h2>
          <p>Aile yemekleri sırasında tüketilen yiyeceklerin kalitesi genellikle yolda veya yalnız yenilen yemeklerden daha yüksektir. Faydalar şunları içerir:</p>
          <ul>
            <li>Diyette daha fazla meyve ve sebze</li>
            <li>Daha iyi porsiyon kontrolü ve yeme alışkanlıkları</li>
            <li>Yeme bozuklukları geliştirme riskinin azalması</li>
            <li>Çocukluk çağı obezitesi olasılığının azalması</li>
          </ul>
          <h2>Eğitimsel Faydalar</h2>
          <p>Aile yemek zamanı sohbeti, çocukları zengin bir kelime dağarcığı ve karmaşık fikirlerle tanıştırır. Araştırmalar, düzenli olarak aile yemeklerine katılan çocukların:</p>
          <ul>
            <li>Daha geniş kelime dağarcığına sahip olduklarını</li>
            <li>Akademik olarak daha iyi performans gösterdiklerini</li>
            <li>Daha iyi eleştirel düşünme becerileri geliştirdiklerini gösteriyor</li>
          </ul>
          <h2>Başarılı Aile Yemekleri İçin İpuçları</h2>
          <ul>
            <li>Gerçekçi hedeflerle başlayın (haftada sadece 2-3 kez olsa bile)</li>
            <li>Sohbeti teşvik etmek için yemekleri ekransız tutun</li>
            <li>Mümkün olduğunda çocukları yemek hazırlamaya dahil edin</li>
            <li>Deneyimi daha keyifli hale getirmek için çocuk dostu sofra takımları kullanın</li>
            <li>Mükemmel davranış veya beslenme değil, bağlantıya odaklanın</li>
          </ul>
          <p>Unutmayın, etkileşimin kalitesi, yemeğin karmaşıklığından daha önemlidir. Basit yemekler bile, çocuğunuzun gelişimini çeşitli şekillerde faydalandıran anlamlı aile bağlantıları oluşturabilir.</p>`
    }
  }
];

const BlogDetailPage: React.FC = () => {
  const { t } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const blogId = parseInt(id || '1');
  
  // Find the blog post with the matching ID
  const post = blogPosts.find(post => post.id === blogId);
  
  if (!post) {
    return (
      <div className="pt-32 pb-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800">
            {t('language') === 'tr' ? 'Blog yazısı bulunamadı' : 'Blog post not found'}
          </h1>
          <Link 
            to="/blog" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mt-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            {t('language') === 'tr' ? 'Blog\'a geri dön' : 'Back to blog'}
          </Link>
        </div>
      </div>
    );
  }

  // Format date function
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };
  
  const currentLanguage = t('language') === 'tr' ? 'tr' : 'en';
  
  return (
    <div className="pt-32 pb-16">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
        >
          <ArrowLeft size={20} className="mr-2" />
          {t('language') === 'tr' ? 'Blog\'a geri dön' : 'Back to blog'}
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {post.title[currentLanguage]}
          </h1>
          <p className="text-gray-500">
            {formatDate(post.date)}
          </p>
        </div>
        
        <div className="rounded-xl overflow-hidden mb-8 h-[300px] md:h-[400px]">
          <img 
            src={post.image} 
            alt={post.title[currentLanguage]} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div 
          className="prose prose-primary max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content[currentLanguage] }}
        />
      </div>
    </div>
  );
};

export default BlogDetailPage;
