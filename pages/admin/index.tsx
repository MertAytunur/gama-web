import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

const AdminPanel: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const auth = localStorage.getItem('gamaAdminAuth') === 'true';
    if (!auth) {
      router.push('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('gamaAdminAuth');
    router.push('/admin/login');
  };

  if (!isAuthenticated) {
    return null; // Don't render anything while checking authentication
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head>
        <title>GAMA Admin Panel</title>
        <meta name="description" content="Admin panel for GAMA products" />
      </Head>

      {/* Admin Header */}
      <header className="carbon-fiber-bg text-white p-4 shadow-md relative">
        <div className="container mx-auto relative z-10 flex justify-between items-center">
          <h1 className="text-2xl font-bold">GAMA Admin Panel</h1>
          <div className="flex space-x-4">
            <Link href="/" className="text-white hover:text-gray-200 transition-colors">
              Ana Siteye Dön
            </Link>
            <button 
              onClick={handleLogout}
              className="text-white hover:text-gray-200 transition-colors"
            >
              Çıkış Yap
            </button>
          </div>
        </div>
      </header>

      <div className="flex-grow flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-64 carbon-fiber-bg relative">
          <nav className="p-4 relative z-10">
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setActiveTab('dashboard')}
                  className={`w-full text-left p-3 rounded transition-colors ${
                    activeTab === 'dashboard' 
                      ? 'bg-white bg-opacity-20 text-white' 
                      : 'text-gray-200 hover:bg-white hover:bg-opacity-10'
                  }`}
                >
                  Dashboard
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('products')}
                  className={`w-full text-left p-3 rounded transition-colors ${
                    activeTab === 'products' 
                      ? 'bg-white bg-opacity-20 text-white' 
                      : 'text-gray-200 hover:bg-white hover:bg-opacity-10'
                  }`}
                >
                  Ürünler
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('projects')}
                  className={`w-full text-left p-3 rounded transition-colors ${
                    activeTab === 'projects' 
                      ? 'bg-white bg-opacity-20 text-white' 
                      : 'text-gray-200 hover:bg-white hover:bg-opacity-10'
                  }`}
                >
                  Projeler
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('themes')}
                  className={`w-full text-left p-3 rounded transition-colors ${
                    activeTab === 'themes' 
                      ? 'bg-white bg-opacity-20 text-white' 
                      : 'text-gray-200 hover:bg-white hover:bg-opacity-10'
                  }`}
                >
                  Tema Ayarları
                </button>
              </li>
              <li>
                <Link 
                  href="/admin/theme"
                  className="w-full block text-left p-3 rounded transition-colors text-gray-200 hover:bg-white hover:bg-opacity-10"
                >
                  Gelişmiş Tema Düzenleyicisi
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-6">
          {activeTab === 'dashboard' && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="carbon-fiber-bg text-white p-6 rounded-lg shadow-md relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-2">Ürünler</h3>
                    <p className="text-3xl font-bold">6</p>
                  </div>
                </div>
                
                <div className="carbon-fiber-bg text-white p-6 rounded-lg shadow-md relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-2">Projeler</h3>
                    <p className="text-3xl font-bold">3</p>
                  </div>
                </div>
                
                <div className="carbon-fiber-bg text-white p-6 rounded-lg shadow-md relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-2">İletişim</h3>
                    <p className="text-3xl font-bold">12</p>
                  </div>
                </div>
                
                <div className="carbon-fiber-bg text-white p-6 rounded-lg shadow-md relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-2">Ziyaretçiler</h3>
                    <p className="text-3xl font-bold">1,240</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Özet</h3>
                <p className="mb-4">GAMA bina güçlendirme ürünleri yönetim paneline hoş geldiniz. Bu panel üzerinden ürün ve proje bilgilerini düzenleyebilir, tema ayarlarını değiştirebilirsiniz.</p>
                <p>Son güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>
              </div>
            </div>
          )}
          
          {activeTab === 'products' && (
            <div className="animate-fadeIn">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Ürünler</h2>
                <button className="carbon-fiber-bg text-white px-4 py-2 rounded relative overflow-hidden">
                  <span className="relative z-10">Yeni Ürün Ekle</span>
                </button>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ürün Adı</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resim</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bağlantı</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İşlemler</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">GAMA Karbon Plaka</td>
                      <td className="px-6 py-4 whitespace-nowrap">/images/assets/c-laminate.png</td>
                      <td className="px-6 py-4 whitespace-nowrap">/products/c-laminate</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link href="/admin/product/c-laminate" className="text-blue-600 hover:text-blue-900 mr-3">Düzenle</Link>
                        <button className="text-red-600 hover:text-red-900">Sil</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">GAMA Karbon Kumaş</td>
                      <td className="px-6 py-4 whitespace-nowrap">/images/assets/c-sheet.png</td>
                      <td className="px-6 py-4 whitespace-nowrap">/products/c-sheet</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link href="/admin/product/c-sheet" className="text-blue-600 hover:text-blue-900 mr-3">Düzenle</Link>
                        <button className="text-red-600 hover:text-red-900">Sil</button>
                      </td>
                    </tr>
                    {/* More products... */}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {activeTab === 'themes' && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold mb-6">Tema Ayarları</h2>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Renk Ayarları</h3>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Ana Renk</label>
                      <div className="flex">
                        <input type="text" className="flex-grow p-2 border rounded-l" defaultValue="#2a2a2a" />
                        <input type="color" className="h-10 w-10 border-l-0 rounded-r" defaultValue="#2a2a2a" />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Text Rengi</label>
                      <div className="flex">
                        <input type="text" className="flex-grow p-2 border rounded-l" defaultValue="#FFFFFF" />
                        <input type="color" className="h-10 w-10 border-l-0 rounded-r" defaultValue="#FFFFFF" />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Buton Arkaplan</label>
                      <div className="flex">
                        <input type="text" className="flex-grow p-2 border rounded-l" defaultValue="#2a2a2a" />
                        <input type="color" className="h-10 w-10 border-l-0 rounded-r" defaultValue="#2a2a2a" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Yazı ve Boşluk Ayarları</h3>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Başlık Boyutu</label>
                      <select className="w-full p-2 border rounded">
                        <option>Küçük</option>
                        <option selected>Orta</option>
                        <option>Büyük</option>
                      </select>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Paragraf Aralığı</label>
                      <select className="w-full p-2 border rounded">
                        <option>Dar</option>
                        <option selected>Normal</option>
                        <option>Geniş</option>
                      </select>
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Sayfa Kenar Boşluğu</label>
                      <input type="range" className="w-full" min="0" max="100" defaultValue="40" />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Dar</span>
                        <span>Geniş</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-between">
                  <Link href="/admin/theme" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                    Gelişmiş Tema Düzenleyicisi
                  </Link>
                  <button className="carbon-fiber-bg text-white px-6 py-2 rounded relative overflow-hidden">
                    <span className="relative z-10">Değişiklikleri Kaydet</span>
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'projects' && (
            <div className="animate-fadeIn">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Projeler</h2>
                <button className="carbon-fiber-bg text-white px-4 py-2 rounded relative overflow-hidden">
                  <span className="relative z-10">Yeni Proje Ekle</span>
                </button>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proje Adı</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Yıl</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resim</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İşlemler</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">Asfalt Güçlendirme</td>
                      <td className="px-6 py-4 whitespace-nowrap">2024</td>
                      <td className="px-6 py-4 whitespace-nowrap">/images/assets/project1.jpg</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">Düzenle</button>
                        <button className="text-red-600 hover:text-red-900">Sil</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">Çatlak Önleme</td>
                      <td className="px-6 py-4 whitespace-nowrap">2024</td>
                      <td className="px-6 py-4 whitespace-nowrap">/images/assets/project2.jpg</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">Düzenle</button>
                        <button className="text-red-600 hover:text-red-900">Sil</button>
                      </td>
                    </tr>
                    {/* More projects... */}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>
      
      <footer className="bg-gray-100 py-4 border-t">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} GAMA Bina Güçlendirme Ürünleri. Tüm hakları saklıdır.
        </div>
      </footer>
    </div>
  );
};

export default AdminPanel; 