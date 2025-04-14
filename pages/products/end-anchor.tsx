import React from 'react';
import Layout from '../../components/Layout';

const UcAnkrajPage = () => {
  return (
    <Layout title="GAMA Uç Ankraj | GAMA Bina Güçlendirme Ürünleri" description="FRP plaka ankraj sistemi">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Ürün Başlık */}
          <div className="bg-blue-600 text-white p-6">
            <h1 className="text-3xl font-bold">GAMA Uç Ankraj</h1>
            <p className="mt-2 text-lg">FRP plaka ankraj sistemi</p>
          </div>
          
          {/* Ürün Detayları */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Sol Taraf - Görsel */}
              <div className="md:w-1/3">
                <div className="relative h-80 w-full rounded-lg overflow-hidden border border-gray-200">
                  <img 
                    src="/images/assets/end-anchor.png" 
                    alt="GAMA Uç Ankraj" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              {/* Sağ Taraf - Açıklama */}
              <div className="md:w-2/3">
                <h2 className="text-2xl font-semibold mb-4">Ürün Bilgileri</h2>
                
                <div className="prose max-w-none">
                  <p>GAMA Uç Ankraj, FRP plakaların uç kısımlarının ankrajlanması için özel olarak geliştirilmiş bir sistemdir.</p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Teknik Özellikler</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Malzeme:</strong> Karbon Fiber</li>
                    <li><strong>Çekme Dayanımı:</strong> &gt;90 kN</li>
                    <li><strong>Ankraj Derinliği:</strong> 60-100 mm</li>
                    <li><strong>Delik Çapı:</strong> 10-14 mm</li>
                    <li><strong>Uygulama Sıcaklığı:</strong> +5°C ile +35°C</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Uygulamalar</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>FRP plakaların uç ankrajlanması</li>
                    <li>Kiriş güçlendirmeleri</li>
                    <li>Kolon güçlendirmeleri</li>
                    <li>Duvar güçlendirmeleri</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* İlgili Ürünler */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">İlgili Ürünler</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">GAMA Karbon Plaka</h3>
                  <p className="text-sm text-gray-600">Yüksek mukavemetli karbon fiber plakalar</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">GAMA Karbon Ankraj</h3>
                  <p className="text-sm text-gray-600">Yapısal güçlendirme için karbon ankraj</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">GAMA Reçine 220 HP</h3>
                  <p className="text-sm text-gray-600">Yapısal bağlantı için epoksi yapıştırıcı</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UcAnkrajPage; 