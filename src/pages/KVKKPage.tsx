import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const KVKKPage: React.FC = () => {
  const { t } = useLanguage();
  const lang = t('language') === 'tr' ? 'tr' : 'en';
  
  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('kvkk.title')}
          </h1>
          <p className="text-gray-500">
            {t('kvkk.lastUpdated')} May 10, 2025
          </p>
        </div>
        
        <div className="prose prose-pink max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            {t('kvkk.intro')}
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            {lang === 'tr' ? 'Veri Sorumlusu' : 'Data Controller'}
          </h2>
          <p className="text-gray-700 mb-4">
            {lang === 'tr' 
              ? 'Tiny Bites olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında "veri sorumlusu" sıfatıyla, kişisel verilerinizi işbu Kişisel Verilerin Korunması ve İşlenmesi Politikası ("Politika") doğrultusunda işlemekteyiz.' 
              : 'As Tiny Bites, we process your personal data as a "data controller" within the framework of the Law on Protection of Personal Data No. 6698 ("KVKK") in accordance with this Personal Data Protection and Processing Policy ("Policy").'}
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            {lang === 'tr' ? 'Kişisel Verilerin İşlenme Amacı' : 'Purpose of Personal Data Processing'}
          </h2>
          <p className="text-gray-700 mb-4">
            {lang === 'tr'
              ? 'Kişisel verileriniz KVKK\'da öngörülen temel ilkelere uygun olarak, Şirketimizin işletmesel faaliyetlerinin yürütülmesi, sözleşmelerin ifası, yasal yükümlülüklerin yerine getirilmesi, müşteri ilişkilerinin yönetimi ve pazarlama faaliyetlerinin yürütülmesi amacıyla işlenmektedir.'
              : 'Your personal data is processed in accordance with the basic principles stipulated in the KVKK for the purpose of conducting our company\'s operational activities, fulfilling contracts, meeting legal obligations, managing customer relations, and carrying out marketing activities.'}
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            {lang === 'tr' ? 'Kişisel Verilerin Aktarımı' : 'Transfer of Personal Data'}
          </h2>
          <p className="text-gray-700 mb-4">
            {lang === 'tr'
              ? 'Kişisel verileriniz, işleme amaçlarına uygun olarak, gerekli güvenlik önlemleri alınmak kaydıyla, hizmet sağlayıcılarımız, iş ortaklarımız, kanunen yetkili kamu kurumları ve özel kişilere aktarılabilecektir.'
              : 'Your personal data may be transferred to our service providers, business partners, legally authorized public institutions and private individuals in accordance with processing purposes, provided that necessary security measures are taken.'}
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            {lang === 'tr' ? 'Kişisel Veri Toplama Yöntemi' : 'Personal Data Collection Method'}
          </h2>
          <p className="text-gray-700 mb-4">
            {lang === 'tr'
              ? 'Kişisel verileriniz, web sitemiz, mobil uygulamalarımız, e-posta, çağrı merkezi, sosyal medya, iş başvuru formları ve diğer elektronik veya fiziksel ortamlar aracılığıyla toplanmaktadır.'
              : 'Your personal data is collected through our website, mobile applications, e-mail, call center, social media, job application forms, and other electronic or physical environments.'}
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            {lang === 'tr' ? 'KVKK Kapsamındaki Haklarınız' : 'Your Rights Under KVKK'}
          </h2>
          <p className="text-gray-700 mb-4">
            {lang === 'tr'
              ? 'KVKK\'nın 11. maddesi uyarınca, kişisel verileriniz ile ilgili olarak aşağıdaki haklara sahipsiniz:'
              : 'Pursuant to Article 11 of the KVKK, you have the following rights regarding your personal data:'}
          </p>
          
          <ul className="list-disc pl-5 mb-6 text-gray-700">
            {lang === 'tr' ? (
              <>
                <li className="mb-2">Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li className="mb-2">Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                <li className="mb-2">Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li className="mb-2">Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
                <li className="mb-2">Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                <li className="mb-2">Kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
                <li className="mb-2">Kişisel verilerinizin düzeltilmesi, silinmesi veya yok edilmesine ilişkin işlemlerin kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
                <li className="mb-2">İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
                <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
              </>
            ) : (
              <>
                <li className="mb-2">Learning whether your personal data is being processed</li>
                <li className="mb-2">Requesting information if your personal data has been processed</li>
                <li className="mb-2">Learning the purpose of processing your personal data and whether they are used in accordance with the purpose</li>
                <li className="mb-2">Knowing the third parties to whom your personal data is transferred domestically or abroad</li>
                <li className="mb-2">Requesting correction if your personal data is processed incompletely or inaccurately</li>
                <li className="mb-2">Requesting deletion or destruction of your personal data</li>
                <li className="mb-2">Requesting notification of the operations regarding correction, deletion or destruction of your personal data to third parties to whom your personal data has been transferred</li>
                <li className="mb-2">Objecting to the occurrence of a result against you by analyzing the processed data exclusively through automated systems</li>
                <li>Requesting compensation for damages incurred due to unlawful processing of your personal data</li>
              </>
            )}
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
            {lang === 'tr' ? 'Başvuru Yöntemi' : 'Application Method'}
          </h2>
          <p className="text-gray-700 mb-4">
            {lang === 'tr'
              ? 'KVKK\'nın 11. maddesinde belirtilen haklarınız kapsamındaki taleplerinizi, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ\'e uygun olarak Şirketimize iletebilirsiniz.'
              : 'You can submit your requests within the scope of your rights specified in Article 11 of the KVKK to our Company in accordance with the Communiqué on the Procedures and Principles of Application to the Data Controller.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default KVKKPage;
