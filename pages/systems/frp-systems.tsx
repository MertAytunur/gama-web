import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import ProjectCard from '../../src/components/ProjectCard';

export default function FrpSystems() {
  return (
    <Layout 
      title="FRP Sistemleri | GAMA METALURJI" 
      description="Fiber kompozitlerle yapısal güçlendirme çözümleri - FRP Sistemleri"
    >
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-primary-blue to-blue-600 text-white py-12 px-6 rounded-lg mb-10 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">FRP Sistemleri</h1>
          <p className="text-xl">Fiber kompozitlerle yapısal güçlendirme</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Content - Main Description */}
        <div className="lg:col-span-2">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 pb-2">Sistem Açıklaması</h2>
            <p className="mb-4">
              FRP sistemleri, test edilmiş ve sertifikalı epoksi yapıştırıcılar ve doyurucular kullanılarak uygulanan karbon, aramid ve cam elyaflardan oluşur.
            </p>
            <p className="mb-4">
              İnşaat ve yapı mühendisliğinde, FRP sistemleri dönüşümler, sistem adaptasyonları veya bina yükseltmeleri sırasında yapıların statik güçlendirilmesi için kullanılır. Yapı malzemesine (beton, duvar, çelik, ahşap) veya statik gerekliliğe (eğilme momenti, kesme kuvveti, normal kuvvet, sismik yük) bağlı olarak, ya C-Plakalar ya da Kumaşlar uygulanabilir.
            </p>
            <p>
              Daha büyük sehim veya titreşimlerle mücadele etmenin gerekli olduğu durumlarda, ön gerilmeli C-Plakalar genellikle tercih edilen seçenektir. Yüksek mukavemetli, hafif ve korozyona dayanıklı güçlendirme ürünleri ve sistemleri birçok uygulamada kullanılabilir.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 pb-2">Özellikler ve Faydalar</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-blue">Özellikler</h3>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Yüzeye uygulanan, yuvaya uygulanan ve ön gerilmeli plakalar (C-Plakalar)</li>
                  <li>Karbon, cam ve aramid elyaf kumaşlar</li>
                  <li>Epoksi yapıştırıcılar ve laminasyon reçineleri</li>
                  <li>Cihazlar ve uygulama yardımcıları</li>
                  <li>Yazılım</li>
                  <li>Mühendislik hizmetleri</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-primary-blue">Faydalar</h3>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Çok yüksek çekme mukavemeti ve yorulmada mükemmel davranış</li>
                  <li>Düşük ölü ağırlık ve yapı yüksekliği</li>
                  <li>Hızlı, basit kurulum, dolayısıyla düşük çalışmama süreleri</li>
                  <li>Esnek ve ekonomik teknoloji</li>
                  <li>Dayanıklı, korozyona dayanıklı malzemeler</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">Uygulamalar</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="border rounded-lg overflow-hidden">
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <div className="text-center text-primary-blue p-4">
                    <span className="block font-bold mb-2">Yüzeye Uygulanan C-Plaka</span>
                    <span className="text-sm">(eğilme)</span>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <div className="text-center text-primary-blue p-4">
                    <span className="block font-bold mb-2">Yuvaya Uygulanan C-Plaka</span>
                    <span className="text-sm">(eğilme)</span>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <div className="text-center text-primary-blue p-4">
                    <span className="block font-bold mb-2">Ankraj Plakalı C-Plaka</span>
                    <span className="text-sm">(sehim)</span>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <div className="text-center text-primary-blue p-4">
                    <span className="block font-bold mb-2">Ön Gerilmeli C-Plaka</span>
                    <span className="text-sm">(sehim)</span>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <div className="text-center text-primary-blue p-4">
                    <span className="block font-bold mb-2">Karbon Kumaş ile Kolon</span>
                    <span className="text-sm">(normal kuvvet)</span>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <div className="text-center text-primary-blue p-4">
                    <span className="block font-bold mb-2">Karbon Kumaş ile Kiriş</span>
                    <span className="text-sm">(kesme kuvveti)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-2">Ürünler</h2>
            
            <h3 className="text-xl font-bold mb-4 text-primary-blue">Plakalar</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <ProjectCard 
                title="GAMA Karbon Plaka"
                year="Ürün"
                imageSrc="/images/assets/c-laminate.png"
                imageAlt="GAMA Karbon Plaka"
                href="/products/c-laminate"
                techSpecs={[
                  { label: "Genişlik", value: "50 / 100 mm" },
                  { label: "Kalınlık", value: "1.4 mm" },
                  { label: "Elastisite Modülü", value: ">165 GPa" }
                ]}
              />
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-primary-blue">Kumaşlar</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <ProjectCard 
                title="GAMA Karbon Kumaş"
                year="Ürün"
                imageSrc="/images/assets/c-sheet.png"
                imageAlt="GAMA Karbon Kumaş"
                href="/products/c-sheet"
                techSpecs={[
                  { label: "Ağırlık", value: "200 / 300 g/m²" },
                  { label: "Lif Kalınlığı", value: "0.111 / 0.167 mm" },
                  { label: "Elastisite Modülü", value: ">240 GPa" }
                ]}
              />
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-primary-blue">FRP Ankrajlar</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <ProjectCard 
                title="GAMA Karbon Ankraj"
                year="Ürün"
                imageSrc="/images/assets/c-anchor.png"
                imageAlt="GAMA Karbon Ankraj"
                href="/products/c-anchor"
                techSpecs={[
                  { label: "Çap", value: "8 / 10 / 12 mm" },
                  { label: "Kesme Dayanımı", value: ">1000 MPa" },
                  { label: "Uygulama Sıcaklığı", value: "5-35°C" }
                ]}
              />
              
              <ProjectCard 
                title="GAMA Uç Ankraj"
                year="Ürün"
                imageSrc="/images/assets/end-anchor.png"
                imageAlt="GAMA Uç Ankraj"
                href="/products/end-anchor"
                techSpecs={[
                  { label: "Malzeme", value: "Paslanmaz Çelik (AISI 304)" },
                  { label: "Çekme Dayanımı", value: ">550 MPa" },
                  { label: "Kalınlık", value: "2 mm" }
                ]}
              />
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-primary-blue">Epoksi Yapıştırıcı</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ProjectCard 
                title="GAMA Epoksi Reçine"
                year="Ürün"
                imageSrc="/images/assets/resin.png"
                imageAlt="GAMA Epoksi Reçine"
                href="/products/resin"
                techSpecs={[
                  { label: "Karışım Oranı", value: "A:B = 3:1 (ağırlık)" },
                  { label: "Basınç Mukavemeti", value: ">70 MPa" },
                  { label: "Çalışma Süresi", value: "~60 dakika (20°C)" }
                ]}
              />
              
              <ProjectCard 
                title="GAMA Epoksi Astar"
                year="Ürün"
                imageSrc="/images/assets/resin55.png"
                imageAlt="GAMA Epoksi Astar"
                href="/products/resin55"
                techSpecs={[
                  { label: "Karışım Oranı", value: "A:B = 4:1 (ağırlık)" },
                  { label: "Yüzey Yapışma", value: ">3.0 MPa" },
                  { label: "Çalışma Süresi", value: "~40 dakika (20°C)" }
                ]}
              />
            </div>
          </section>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">Hızlı Erişim</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex items-center text-primary-blue hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    FRP Sistemleri Broşürü
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-primary-blue hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Teknik Veri Sayfaları
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-primary-blue hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Uygulama Videoları
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-primary-blue hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Tamamlanan Projeler
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="bg-primary-blue text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-white">İletişime Geçin</h3>
              <p className="mb-4 text-white">
                FRP sistemleri hakkında daha fazla bilgi için uzman ekibimizle iletişime geçin.
              </p>
              <Link href="/contact" className="bg-white text-primary-blue px-4 py-2 rounded-md hover:bg-gray-100 transition-colors inline-block w-full text-center font-medium">
                Bize Ulaşın
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Projects Section */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6">İlgili Projeler</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="h-48 bg-gray-50 flex items-center justify-center">
              <span className="text-xl font-bold text-gray-800">Viaducs du Chêne</span>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">2024</span>
                <span className="text-sm bg-blue-100 text-primary-blue px-2 py-1 rounded-full">Yapısal Güçlendirmesi</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Viaducs du Chêne Güçlendirmesi</h3>
              <p className="text-gray-600 mb-4">İsviçre, Essert-Pittet</p>
              <a href="#" className="text-primary-blue hover:underline font-medium">
                Detayları Görüntüle →
              </a>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="h-48 bg-gray-50 flex items-center justify-center">
              <span className="text-xl font-bold text-gray-800">Lojistik Merkezi</span>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">2024</span>
                <span className="text-sm bg-blue-100 text-primary-blue px-2 py-1 rounded-full">Eğilme Güçlendirmesi</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Hasarlı Çekme Kafesi Güçlendirmesi</h3>
              <p className="text-gray-600 mb-4">Almanya</p>
              <a href="#" className="text-primary-blue hover:underline font-medium">
                Detayları Görüntüle →
              </a>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="h-48 bg-gray-50 flex items-center justify-center">
              <span className="text-xl font-bold text-gray-800">Köprü B8</span>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">2023</span>
                <span className="text-sm bg-blue-100 text-primary-blue px-2 py-1 rounded-full">Eğilme Güçlendirmesi</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Köprü Tabliyesi Güçlendirmesi</h3>
              <p className="text-gray-600 mb-4">Almanya, Sulzbach</p>
              <a href="#" className="text-primary-blue hover:underline font-medium">
                Detayları Görüntüle →
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary-blue to-blue-600 text-white rounded-lg p-8 text-center shadow-lg my-12">
        <h2 className="text-3xl font-bold mb-4">Projeniz için Doğru FRP Çözümü</h2>
        <p className="text-xl mb-6 max-w-3xl mx-auto">
          Yapısal güçlendirmede en iyi çözümleri bulun.
          Uzman mühendislerimiz, projenizin ihtiyaçlarına göre özel çözümler sunmak için hazır.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="bg-white text-primary-blue px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all">
            Bizimle İletişime Geçin
          </Link>
          <Link href="/documentation" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-blue transition-all">
            Teknik Dökümanlar
          </Link>
        </div>
      </section>
    </Layout>
  );
} 