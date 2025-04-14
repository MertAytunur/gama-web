import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectDetail() {
  return (
    <Layout title="Asfalt Güçlendirme: AP-8 Bilbao | GAMA Bina Güçlendirme Ürünleri" description="GAMA Bina Güçlendirme Ürünleri tarafından gerçekleştirilen AP-8 Bilbao asfalt güçlendirme projesi">
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

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-blue-600 text-white p-6">
            <h1 className="text-3xl font-bold">AP-8 Bilbao Asfalt Güçlendirme Projesi</h1>
            <div className="flex items-center mt-2">
              <span className="text-sm font-medium px-3 py-1 bg-blue-800 rounded-full mr-3">2021</span>
              <span className="text-sm">Basauri, İspanya</span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="rounded-lg overflow-hidden border border-gray-200">
                  <img 
                    src="/images/assets/project1.jpg" 
                    alt="AP-8 Bilbao Projesi" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="rounded-lg overflow-hidden border border-gray-200">
                    <img 
                      src="/images/assets/project2.jpg" 
                      alt="AP-8 Bilbao Projesi Detay" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden border border-gray-200">
                    <img 
                      src="/images/assets/project3.jpg" 
                      alt="AP-8 Bilbao Projesi Detay" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h2 className="text-2xl font-semibold mb-4">Proje Açıklaması</h2>
                
                <div className="prose max-w-none">
                  <p>Basauri'deki AP-8 otoyolunda gerçekleştirilen bu asfalt güçlendirme projesi, GAMA Bina Güçlendirme Ürünleri'nin
                  yenilikçi cam elyaf ızgara teknolojisini kullanarak asfalt yüzeylerin ömrünü uzatma ve bakım maliyetlerini azaltma çabasını göstermektedir.</p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Proje Hedefleri</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Yüksek trafik yoğunluğuna sahip otoyolda asfalt çatlaklarını önlemek</li>
                    <li>Yol ömrünü %50'den fazla uzatmak</li>
                    <li>Bakım sıklığını ve maliyetlerini azaltmak</li>
                    <li>Ağır taşıt trafiğine dayanıklı bir yüzey oluşturmak</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Kullanılan Çözümler</h3>
                  <p>GAMA Bina Güçlendirme Ürünleri'nin GAMA Glasphalt G cam elyaf asfalt güçlendirme ızgarası kullanılarak:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>15.000 m² yol yüzeyi güçlendirildi</li>
                    <li>Asfalt katmanları arasına özel cam elyaf ızgara yerleştirildi</li>
                    <li>Yansıma çatlakları önlendi</li>
                    <li>Asfalt tabakaları arasında yük dağılımı iyileştirildi</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Sonuçlar</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Tahmini yol ömrü 2 kattan fazla arttırıldı</li>
                    <li>Bakım maliyetleri %40 azaltıldı</li>
                    <li>Yolun servis süresinde kesinti olmadan uygulama tamamlandı</li>
                    <li>Karbon emisyonu azaltımına katkı sağlandı</li>
                  </ul>
                </div>
              </div>
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