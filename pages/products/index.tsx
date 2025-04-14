import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import ProjectCard from '../../src/components/ProjectCard';

export default function Products() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Ürünlerimiz</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">GAMA FRP Sistemleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard 
              title="GAMA Karbon Plaka"
              year="Ürün"
              imageSrc="/images/assets/c-laminate.png"
              imageAlt="GAMA Karbon Plaka"
              href="/products/c-laminate"
              techSpecs={[
                { label: "Genişlik", value: "50 / 100 mm" },
                { label: "Kalınlık", value: "1.4 mm" },
                { label: "Elastisite Modülü", value: ">165 GPa" },
                { label: "Çekme Mukavemeti", value: ">2800 MPa" }
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
                { label: "Elastisite Modülü", value: ">240 GPa" },
                { label: "Çekme Mukavemeti", value: ">4000 MPa" }
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
                { label: "Eğilme Mukavemeti", value: ">30 MPa" },
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
                { label: "Viskozite", value: "~4500 mPa·s" },
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
                { label: "Ankraj Derinliği", value: "100-200 mm" },
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
                { label: "Boyutlar", value: "Plaka genişliğine göre" },
                { label: "Kalınlık", value: "2 mm" }
              ]}
            />
          </div>
        </section>

        <div className="mt-12">
          <Link href="/" className="inline-block bg-primary-blue text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </Layout>
  );
} 