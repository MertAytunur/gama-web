import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Custom404() {
  return (
    <Layout title="Sayfa Bulunamadı | GAMA Bina Güçlendirme Ürünleri">
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
          <h1 className="text-6xl font-bold text-blue-700 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sayfa Bulunamadı</h2>
          <p className="text-gray-600 mb-6">
            Aradığınız sayfa bulunamadı veya taşınmış olabilir.
          </p>
          <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </Layout>
  );
} 