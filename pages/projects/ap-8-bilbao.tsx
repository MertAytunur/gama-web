import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectDetail() {
  return (
    <Layout title="Asfalt Güçlendirme: AP-8 Bilbao | GAMA METALURJI" description="GAMA METALURJI tarafından gerçekleştirilen AP-8 Bilbao asfalt güçlendirme projesi">
      <div className="container mx-auto px-4 py-8">
        <nav className="flex mb-8 text-gray-500" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="hover:text-primary-blue">Ana Sayfa</Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <Link href="/projects" className="hover:text-primary-blue">Projeler</Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <span className="text-gray-700">AP-8 Bilbao</span>
            </li>
          </ol>
        </nav>

        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">Asfalt Güçlendirme: AP-8 Bilbao</h1>
          <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
            <div>
              <span className="font-semibold">Yer:</span> Otoyol AP-8, Basauri, İspanya
            </div>
            <div>
              <span className="font-semibold">Tamamlanma:</span> 2024
            </div>
            <div>
              <span className="font-semibold">Kategori:</span> Asfalt Güçlendirme
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="mb-10 relative h-96 rounded-lg overflow-hidden">
              <img 
                src="/images/products/project1.jpg" 
                alt="AP-8 Bilbao Projesi" 
                className="object-cover w-full h-full"
              />
            </div>
            
            <div className="prose max-w-none">
              <h2>Proje Hakkında</h2>
              <p>
                Basauri'deki AP-8 otoyolunda gerçekleştirilen bu asfalt güçlendirme projesi, GAMA METALURJI'nin 
                Avrupa'daki önemli projelerinden biridir. Projenin amacı, yoğun trafik altındaki otoyolun 
                dayanıklılığını artırmak ve bakım süresini uzatmaktı.
              </p>

              <h2>Zorluklar</h2>
              <p>
                Proje sürecinde karşılaşılan en büyük zorluklar:
              </p>
              <ul>
                <li>Yoğun trafik akışı sırasında çalışma</li>
                <li>Değişken hava koşulları</li>
                <li>Kısa zamanda tamamlanması gereken geniş alanlar</li>
              </ul>

              <h2>Çözümler</h2>
              <p>
                GAMA METALURJI'nin GAMA Glasphalt G cam elyaf asfalt güçlendirme ızgarası kullanılarak:
              </p>
              <ul>
                <li>Asfalt katmanları arasında yüksek dayanımlı güçlendirme sağlandı</li>
                <li>Çatlak yayılımı engellenerek yolun ömrü uzatıldı</li>
                <li>Toplam bakım gereksinimleri azaltıldı</li>
                <li>Daha dayanıklı ve güvenli bir yol yüzeyi elde edildi</li>
              </ul>

              <h2>Sonuçlar</h2>
              <p>
                AP-8 otoyolunda uygulanan GAMA asfalt güçlendirme sistemi sayesinde:
              </p>
              <ul>
                <li>Yolun beklenen hizmet ömrü %40 oranında arttı</li>
                <li>Bakım maliyetlerinde %30 tasarruf sağlandı</li>
                <li>Çevre dostu bir yaklaşımla sürdürülebilir bir çözüm sunuldu</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Proje Detayları</h3>
              <div className="space-y-3">
                <div>
                  <span className="block text-gray-500">Müşteri</span>
                  <span className="font-medium">İspanya Karayolları İdaresi</span>
                </div>
                <div>
                  <span className="block text-gray-500">Proje Alanı</span>
                  <span className="font-medium">25.000 m²</span>
                </div>
                <div>
                  <span className="block text-gray-500">Kullanılan Malzemeler</span>
                  <span className="font-medium">GAMA Glasphalt G, GAMA FRP Sistemleri</span>
                </div>
                <div>
                  <span className="block text-gray-500">Proje Süresi</span>
                  <span className="font-medium">3 Ay</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Benzer Projeler</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/projects/e45-hjallerup" className="text-primary-blue hover:underline flex items-center">
                    <span className="mr-2">→</span> Çatlak Önleme: E45 Otoyolu
                  </Link>
                </li>
                <li>
                  <Link href="/projects/a21-ankara" className="text-primary-blue hover:underline flex items-center">
                    <span className="mr-2">→</span> Asfalt Yaşlanma Kontrolü: A21 Otoyolu
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <Link href="/projects" className="inline-block bg-primary-blue text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors">
            Tüm Projelere Dön
          </Link>
        </div>
      </div>
    </Layout>
  );
} 