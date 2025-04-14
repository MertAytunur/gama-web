import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import ProjectCard from '../../src/components/ProjectCard';

export default function Projects() {
  return (
    <Layout title="Projeler | GAMA METALURJI" description="GAMA METALURJI tarafından gerçekleştirilen projeler">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Projelerimiz</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Asfalt Güçlendirme Projeleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard 
              title="Asfalt Güçlendirme"
              year="2024"
              location="Otoyol AP-8, Basauri, İspanya"
              imageSrc="/images/assets/project1.jpg"
              imageAlt="AP-8 Bilbao"
              href="/projects/ap-8-bilbao"
            />
            <ProjectCard 
              title="Çatlak Önleme"
              year="2024"
              location="E45 Otoyolu, Hjallerup, Danimarka"
              imageSrc="/images/assets/project2.jpg"
              imageAlt="E45 Hjallerup"
              href="/projects/e45-hjallerup"
            />
            <ProjectCard 
              title="Köprü Onarımı"
              year="2023"
              location="Rheinbrücke, Köln, Almanya"
              imageSrc="/images/assets/project1.jpg"
              imageAlt="Köln Köprüsü"
              href="/projects/koln-koprusu"
            />
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Yapısal Güçlendirme Projeleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard 
              title="Yapısal Güçlendirme"
              year="2024"
              location="Viaducs du Chêne, İsviçre"
              imageSrc="/pages/public/images/products/project3.jpg"
              imageAlt="Viaducs du Chêne"
              href="/projects/viaducs-du-chene"
            />
            <ProjectCard 
              title="Bina Güçlendirme"
              year="2023"
              location="İş Merkezi, İstanbul, Türkiye"
              imageSrc="/pages/public/images/products/project3.jpg"
              imageAlt="İş Merkezi İstanbul"
              href="/projects/is-merkezi-istanbul"
            />
            <ProjectCard 
              title="Köprü Güçlendirme"
              year="2023"
              location="15 Temmuz Şehitler Köprüsü, İstanbul"
              imageSrc="/pages/public/images/products/project2.jpg"
              imageAlt="15 Temmuz Şehitler Köprüsü"
              href="/projects/15-temmuz-koprusu"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Tarihi Yapı Güçlendirme Projeleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard 
              title="Tarihi Yapı Güçlendirmesi"
              year="2023"
              location="Tarihi Konak, Bursa, Türkiye"
              imageSrc="/pages/public/images/products/project1.jpg"
              imageAlt="Tarihi Konak Bursa"
              href="/projects/tarihi-konak-bursa"
            />
            <ProjectCard 
              title="Cami Güçlendirme"
              year="2022"
              location="Tarihi Cami, Konya, Türkiye"
              imageSrc="/pages/public/images/products/project3.jpg"
              imageAlt="Tarihi Cami Konya"
              href="/projects/tarihi-cami-konya"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Okul ve Hastane Güçlendirmeleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard 
              title="Okul Binası Güçlendirme"
              year="2023"
              location="İzmir, Türkiye"
              imageSrc="/images/assets/project3.jpg"
              imageAlt="İzmir Okul"
              href="/projects/izmir-okul"
            />
            <ProjectCard 
              title="Hastane Güçlendirme"
              year="2023"
              location="İstanbul, Türkiye"
              imageSrc="/images/assets/project3.jpg"
              imageAlt="İstanbul Hastane"
              href="/projects/istanbul-hastane"
            />
            <ProjectCard 
              title="Üniversite Binaları"
              year="2022"
              location="Ankara, Türkiye"
              imageSrc="/images/assets/project2.jpg"
              imageAlt="Ankara Üniversite"
              href="/projects/ankara-universite"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Endüstriyel Yapı Projeleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard 
              title="Fabrika Güçlendirme"
              year="2022"
              location="Bursa, Türkiye"
              imageSrc="/images/assets/project1.jpg"
              imageAlt="Bursa Fabrika"
              href="/projects/bursa-fabrika"
            />
            <ProjectCard 
              title="Depo Binası"
              year="2021"
              location="Adana, Türkiye"
              imageSrc="/images/assets/project3.jpg"
              imageAlt="Adana Depo"
              href="/projects/adana-depo"
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