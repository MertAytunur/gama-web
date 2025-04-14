import React from 'react';
import Layout from '../../components/Layout';

const KarbonAnchorPage = () => {
  return (
    <Layout title="GAMA Karbon Ankraj | GAMA METALURJI" description="Yapısal güçlendirme için karbon ankraj">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Ürün Başlık */}
          <div className="bg-primary-blue text-white p-6">
            <h1 className="text-3xl font-bold">GAMA Karbon Ankraj</h1>
            <p className="mt-2 text-lg">Yapısal güçlendirme için karbon ankraj</p>
          </div>
          
          {/* Ürün Detayları */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Sol Taraf - Görsel */}
              <div className="md:w-1/3">
                <div className="relative h-80 w-full rounded-lg overflow-hidden border border-gray-200">
                  <img 
                    src="/images/assets/c-anchor.png" 
                    alt="GAMA Karbon Ankraj" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              {/* Sağ Taraf - Açıklama */}
              <div className="md:w-2/3">
                <h2 className="text-2xl font-semibold mb-4">Ürün Bilgileri</h2>
                
                <div className="prose max-w-none">
                  <p>GAMA Karbon Ankraj, yüksek mukavemetli karbon fiber içeren özel ankraj sistemidir. Beton, ahşap ve taş gibi farklı yapı elemanlarında FRP sistemlerinin ankrajlanması için kullanılır.</p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Teknik Özellikler</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Malzeme:</strong> Karbon Fiber</li>
                    <li><strong>Çekme Dayanımı:</strong> &gt;100 kN</li>
                    <li><strong>Ankraj Derinliği:</strong> 80-120 mm</li>
                    <li><strong>Delik Çapı:</strong> 12-16 mm</li>
                    <li><strong>Uygulama Sıcaklığı:</strong> +5°C ile +35°C</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Uygulamalar</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>FRP plakaların ankrajlanması</li>
                    <li>Kiriş ve kolon güçlendirmeleri</li>
                    <li>Duvar güçlendirmeleri</li>
                    <li>Tarihi yapı güçlendirmeleri</li>
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
                  <h3 className="font-semibold mb-2">GAMA Karbon Kumaş</h3>
                  <p className="text-sm text-gray-600">Karbon fiber kumaşlar</p>
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

export default KarbonAnchorPage; 