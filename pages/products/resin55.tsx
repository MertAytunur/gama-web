import React from 'react';
import Layout from '../../components/Layout';

const Recine55Page = () => {
  return (
    <Layout title="GAMA Reçine 55 HP | GAMA Bina Güçlendirme Ürünleri" description="FRP kumaşlar için epoksi yapıştırıcı">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Ürün Başlık */}
          <div className="bg-blue-600 text-white p-6">
            <h1 className="text-3xl font-bold">GAMA Reçine 55 HP</h1>
            <p className="mt-2 text-lg">FRP kumaşlar için epoksi yapıştırıcı</p>
          </div>
          
          {/* Ürün Detayları */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Sol Taraf - Görsel */}
              <div className="md:w-1/3">
                <div className="relative h-80 w-full rounded-lg overflow-hidden border border-gray-200">
                  <img 
                    src="/images/assets/resin55.png" 
                    alt="GAMA Reçine 55 HP" 
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              {/* Sağ Taraf - Açıklama */}
              <div className="md:w-2/3">
                <h2 className="text-2xl font-semibold mb-4">Ürün Bilgileri</h2>
                
                <div className="prose max-w-none">
                  <p>GAMA Reçine 55 HP, karbon fiber kumaşların yapıya yapıştırılması için özel olarak geliştirilmiş epoksi yapıştırıcıdır.</p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Teknik Özellikler</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Malzeme:</strong> Epoksi Reçine</li>
                    <li><strong>Çekme Dayanımı:</strong> &gt;25 MPa</li>
                    <li><strong>Basma Dayanımı:</strong> &gt;80 MPa</li>
                    <li><strong>Eğilme Dayanımı:</strong> &gt;35 MPa</li>
                    <li><strong>Kürlenme Süresi:</strong> 24 saat</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Uygulamalar</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Karbon fiber kumaşların yapıştırılması</li>
                    <li>Yapısal güçlendirme uygulamaları</li>
                    <li>Beton onarımı</li>
                    <li>Çatlak enjeksiyonu</li>
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

export default Recine55Page; 