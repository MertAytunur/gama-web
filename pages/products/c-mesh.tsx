import React from 'react';
import Layout from '../../components/Layout';

const CMeshPage = () => {
  return (
    <Layout title="S&P C-Mesh | GAMA METALURJI" description="Karbon fiber file güçlendirme sistemleri">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Ürün Başlık */}
          <div className="bg-blue-600 text-white p-6">
            <h1 className="text-3xl font-bold">S&P C-Mesh</h1>
            <p className="mt-2 text-lg">Karbon fiber takviyeli file sistemleri</p>
          </div>
          
          {/* Ürün Detayları */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Sol Taraf - Görsel */}
              <div className="md:w-1/3">
                <div className="relative h-80 w-full rounded-lg overflow-hidden border border-gray-200">
                  <img 
                    src="/images/assets/c-mesh.png" 
                    alt="S&P C-Mesh" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              {/* Sağ Taraf - Açıklama */}
              <div className="md:w-2/3">
                <h2 className="text-2xl font-semibold mb-4">Ürün Bilgileri</h2>
                
                <div className="prose max-w-none">
                  <p>S&P C-Mesh, yüksek mukavemetli karbon fiber filelerdir. Tek veya çift yönlü olarak üretilen bu fileler, betonarme yapıların güçlendirilmesinde kullanılır. Özellikle duvarların kesme dayanımını artırmak ve kolonları sargılamak için ideal bir çözümdür.</p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Teknik Özellikler</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Elastisite Modülü:</strong> 240 GPa</li>
                    <li><strong>Çekme Dayanımı:</strong> 4300 MPa</li>
                    <li><strong>Örgü Aralığı:</strong> 5x5 mm, 10x10 mm</li>
                    <li><strong>Karbon İçeriği:</strong> %99</li>
                    <li><strong>Kopma Uzaması:</strong> %1.75</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Uygulamalar</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Duvarların kesme dayanımının artırılması</li>
                    <li>Kolonların sargılanması</li>
                    <li>Tuğla duvarlarda güçlendirme</li>
                    <li>Tonoz ve kemerlerin güçlendirilmesi</li>
                    <li>Kirişlerin kesme dayanımının artırılması</li>
                    <li>Tarihi yapıların güçlendirilmesi</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Avantajları</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Yüksek çekme dayanımı</li>
                    <li>Korozyona karşı tam dayanıklılık</li>
                    <li>Hafif ve ince yapısı sayesinde kolay uygulama</li>
                    <li>Alkali ortamlara dayanıklılık</li>
                    <li>Yapı ağırlığında minimum artış</li>
                    <li>Yangına dayanıklı versiyonları mevcuttur</li>
                  </ul>
                </div>
                
                <div className="mt-8">
                  <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors inline-block">Teknik Dokümanları İndir</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* İlgili Ürünler */}
          <div className="p-6 bg-gray-50 border-t">
            <h2 className="text-2xl font-semibold mb-4">İlgili Ürünler</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-2">S&P Armo-Mesh</h3>
                <p className="text-sm text-gray-600">Cam fiber takviyeli file sistemleri</p>
                <a href="/products/armo-mesh" className="text-blue-600 text-sm mt-2 inline-block hover:underline">Daha fazla bilgi →</a>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-2">S&P Resin Epoxy</h3>
                <p className="text-sm text-gray-600">Yüksek performanslı yapıştırma reçinesi</p>
                <a href="/products/resin" className="text-blue-600 text-sm mt-2 inline-block hover:underline">Daha fazla bilgi →</a>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-2">S&P C-Laminate</h3>
                <p className="text-sm text-gray-600">Karbon fiber takviyeli laminat sistemleri</p>
                <a href="/products/c-laminate" className="text-blue-600 text-sm mt-2 inline-block hover:underline">Daha fazla bilgi →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CMeshPage; 