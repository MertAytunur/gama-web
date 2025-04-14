import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import SystemCard from '../src/components/SystemCard';
import ProjectCard from '../src/components/ProjectCard';

export default function Home() {
  const slideRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2; // Toplam sayfa sayısı
  
  const scrollLeft = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  
  const scrollRight = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  
  useEffect(() => {
    if (slideRef.current) {
      const translateX = currentSlide * -100; // Tam sayfa kaydırma
      slideRef.current.style.transform = `translateX(${translateX}%)`;
    }
  }, [currentSlide]);
  
  // Ekran genişliğine göre görünen ürün sayısı
  const [visibleProducts, setVisibleProducts] = useState(3);

  useEffect(() => {
    // Ekran boyutuna göre görünen ürün sayısını ayarla
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleProducts(1); // Mobil
      } else if (window.innerWidth < 768) {
        setVisibleProducts(2); // Tablet
      } else {
        setVisibleProducts(3); // Masaüstü
      }
    };

    handleResize(); // İlk yükleme
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <Layout>
      {/* Modern Hero Bölümü */}
      <section
        className="hero bg-primary-blue bg-cover bg-center text-white p-12 rounded-lg mb-10 shadow-lg"
        style={{
          backgroundImage: "url('/images/assets/arka-plan.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Gama Bina Güçlendirme Ürünleri</h1>
          <p className="text-xl mb-8">
            Yapısal güçlendirme ve zemin iyileştirme için özel çözümler.
          </p>
          <div className="flex space-x-4">
            <Link href="/contact" className="bg-primary-blue hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all">
              İletişime Geçin
            </Link>
            <Link href="/about" className="bg-white text-primary-blue hover:bg-gray-100 font-semibold py-3 px-6 rounded-full shadow-lg transition-all">
              Hakkımızda
            </Link>
          </div>
        </div>
      </section>

      {/* Kısa Tanıtım */}
      <section className="intro mb-16">
        <div className="bg-gray-50 p-8 rounded-lg">
          <p className="text-lg text-center">
            Üniversitelerden "Sistem Testleri" yapılmış, TSE ve ISO sertifikalı ürünlerimizle ihtiyacınıza göre size özel çözümler sunmaktayız.
          </p>
        </div>
      </section>

      {/* Ürünler Bölümü */}
      <section className="products mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Öne Çıkan Ürünlerimiz</h2>
          <Link href="/products" className="text-primary-blue hover:underline font-medium">
            Tüm Ürünler &rarr;
          </Link>
        </div>
        
        <div className="relative">
          {/* Sol ok */}
          <button 
            onClick={scrollLeft}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 bg-opacity-50 hover:bg-opacity-70 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none transition-all -ml-5 ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
            disabled={currentSlide === 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Ürün Slider */}
          <div className="overflow-hidden">
            <div ref={slideRef} className="flex transition-transform duration-300 ease-in-out">
              {/* İlk Sayfa */}
              <div className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
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
              </div>
              
              {/* İkinci Sayfa */}
              <div className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
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
            </div>
          </div>
          
          {/* Sağ ok */}
          <button 
            onClick={scrollRight}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 bg-opacity-50 hover:bg-opacity-70 text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none transition-all -mr-5 ${currentSlide === totalSlides - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
            disabled={currentSlide === totalSlides - 1}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Sayfa noktaları */}
          <div className="flex justify-center mt-6 space-x-2">
            {[...Array(totalSlides)].map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-primary-blue' : 'bg-gray-300 hover:bg-gray-400'}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Sistemler Bölümü */}
      <section className="systems mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Güçlendirme Sistemlerimiz</h2>
          <Link href="/systems" className="text-primary-blue hover:underline font-medium">
            Tüm Sistemler &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <ProjectCard 
            title="GAMA FRP Sistemleri"
            year="Sistem"
            imageSrc="/images/assets/frp-system.png"
            imageAlt="GAMA FRP Sistemleri"
            href="/systems/frp-systems"
          />
        </div>
      </section>

      {/* Neden Biz Bölümü */}
      <section className="why-us mb-16 bg-white border border-light-gray p-8 rounded-lg shadow-sm">
        <h2 className="text-3xl font-bold mb-6 text-center">Neden GAMA?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-gray-50 p-6 rounded-lg">
            <div className="bg-primary-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              <span>15+</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-dark-gray">Yıllık Deneyim</h3>
            <p className="text-gray-700">Alanında uzman deneyimli kadromuzla güvenilir çözümler</p>
          </div>
          <div className="text-center bg-gray-50 p-6 rounded-lg">
            <div className="bg-primary-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              <span>✓</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-dark-gray">Sertifikalı Ürünler</h3>
            <p className="text-gray-700">TSE ve ISO standartlarına uygun yüksek kaliteli ürünler</p>
          </div>
          <div className="text-center bg-gray-50 p-6 rounded-lg">
            <div className="bg-primary-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              <span>🌍</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-dark-gray">Teknik Destek</h3>
            <p className="text-gray-700">Türkiye genelinde teknik destek ve danışmanlık hizmeti</p>
          </div>
        </div>
      </section>

      {/* Öne Çıkan Projeler */}
      <section className="projects mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Öne Çıkan Projeler</h2>
          <Link href="/projects" className="text-primary-blue hover:underline font-medium">
            Tüm Projeler &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="Asfalt Güçlendirme"
            year="2024"
            imageSrc="/images/assets/project1.jpg"
            imageAlt="AP-8 Bilbao"
            href="/projects/ap-8-bilbao"
          />
          <ProjectCard 
            title="Çatlak Önleme"
            year="2024"
            imageSrc="/images/assets/project2.jpg"
            imageAlt="E45 Hjallerup"
            href="/projects/e45-hjallerup"
          />
          <ProjectCard 
            title="Yapısal Güçlendirme"
            year="2024"
            imageSrc="/images/project3.jpg"
            imageAlt="Viaducs du Chêne"
            href="/projects/viaducs-du-chene"
          />
        </div>
      </section>

      {/* CTA Bölümü */}
      <section className="cta mb-10">
        <div className="bg-primary-blue text-white p-10 rounded-lg text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Projenize Özel Çözümler</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Güçlendirme ihtiyaçlarınız için uzman ekibimizle iletişime geçin. Size özel çözümler sunalım.
          </p>
          <Link href="/contact" className="bg-white text-primary-blue px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all inline-block shadow-md">
            Hemen İletişime Geçin
          </Link>
        </div>
      </section>
    </Layout>
  );
} 