import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

interface System {
  id: string;
  title: string;
  description: string;
  image: string;
}

const systems: System[] = [
  {
    id: 'frp-systems',
    title: 'FRP Sistemleri',
    description: 'Fiber kompozitlerle yapısal güçlendirme',
    image: '/images/frp-system.png'
  }
];

export default function Systems() {
  return (
    <Layout title="Sistemler | Akıllı Güçlendirme" description="güçlendirme sistemleri">
      <h1 className="text-4xl font-bold mb-8">Sistemler</h1>
      
      <div className="mb-10">
        <p className="text-lg">
          Bina ve altyapı yapılarının güçlendirilmesi için entegre sistemler sunmaktadır. 
          Her bir sistem, belirli ihtiyaçlar için özel olarak geliştirilmiş ürün ve çözümleri içerir.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {systems.map((system) => (
          <Link href={`/systems/${system.id}`} key={system.id}>
            <div className="flex border rounded-lg overflow-hidden hover:shadow-lg transition h-full">
              <div className="w-1/3 bg-gray-100 flex items-center justify-center p-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xl">
                  {system.title.charAt(0)}
                </div>
              </div>
              <div className="w-2/3 p-6">
                <h2 className="text-xl font-semibold mb-2">{system.title}</h2>
                <p className="text-gray-600">{system.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-12 bg-gray-100 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Güçlendirme Çözümleri</h2>
        <p className="mb-4">
          Uzman ekibimizle farklı yapısal sorunlara özel çözümler sunuyoruz. Sorularınız için lütfen bize ulaşın.
        </p>
        <Link href="/contact" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 inline-block">
          Bize Ulaşın
        </Link>
      </div>
    </Layout>
  );
} 