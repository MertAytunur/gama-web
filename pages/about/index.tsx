import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

export default function About() {
  return (
    <Layout title="Hakkımızda | Gama Metalürji" description="Gama Metalürji hakkında bilgi">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Hakkımızda</h1>
        
        <section className="mb-12">
          <p className="text-lg mb-4">
            Gama Metalürji, 2009 yılında kurulmuştur. Firmamız tekstil makine parçaları ve bina güçlendirme malzemesi üretimi çalışmalarıyla tanınan, Ar-Ge çalışma faaliyetlerini Teknopark ile birlikte yürüten bir kompozit üretim firmasıdır.
          </p>
          <p className="text-lg mb-4">
            Ülkemizde 2009 yılında karbon elyaf üretimine başlanmasıyla Gama Metalürji de kendisi proses geliştirmeye başlamıştır. Kendi bünyesinde özel olarak geliştirdiği pultrüzyon prosesiyle karbon kompozit yapıları üretmektedir.
          </p>
          <p className="text-lg mb-4">
            Gama Metalürji, kuruluşundan itibaren birçok çalışmaya öncü olup, günümüze kadar gelen süreçte kendini geliştirmeye devam etmiş ve halen büyüme çalışmalarını sürdürmektedir. Üretim yaptığı alanda Türkiye'de tek üretici firmadır.
          </p>
          <p className="text-lg">
            Gama Metalurji, 15 yıldır bu alanda çalışan doktoralı Ar-Ge kadrosu ile sürekli ürün kalitesini iyileştirmektedir.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Değerlerimiz</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Kalite</h3>
              <p>
                Her ürünümüzün en yüksek kalite standartlarını karşılamasını sağlamak için kapsamlı test süreçleri uyguluyoruz. TSE ve ISO belgeli üretim yapıyoruz.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Araştırma & Geliştirme</h3>
              <p>
                Sürekli inovasyon sayesinde, yapı ve altyapı güçlendirmesi için yeni ve gelişmiş çözümler sunabiliyoruz.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Kaynaklar & Çevre</h3>
              <p>
                Çevresel etkimizi azaltmak ve sürdürülebilir iş uygulamaları benimsemek için çaba gösteriyoruz.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Sosyal Sorumluluk</h3>
              <p>
                Hem yerel topluluklar hem de küresel girişimler aracılığıyla sosyal sorumluluk projelerini aktif olarak destekliyoruz.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Belgelerimiz</h2>
          
        </section>
        
        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Bizimle İletişime Geçin</h2>
          <p className="mb-4">
            Projeleriniz için güçlendirme çözümleri hakkında daha fazla bilgi almak ister misiniz? 
            Uzman ekibimiz size yardımcı olmaktan memnuniyet duyacaktır.
          </p>
          <Link href="/contact" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 inline-block">
            İletişim
          </Link>
        </div>
      </div>
    </Layout>
  );
} 