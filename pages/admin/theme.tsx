import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface ThemeSettings {
  primaryColor: string;
  textColor: string;
  buttonBgColor: string;
  headerBgColor: string;
  footerBgColor: string;
  fontSize: string;
  spacing: string;
  borderRadius: string;
}

const ThemeEdit: React.FC = () => {
  const router = useRouter();
  
  // Check authentication on component mount
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('gamaAdminAuth') === 'true';
    if (!isAuthenticated) {
      router.push('/admin/login');
    }
  }, [router]);
  
  const [themeSettings, setThemeSettings] = useState<ThemeSettings>({
    primaryColor: '#2a2a2a',
    textColor: '#FFFFFF',
    buttonBgColor: '#2a2a2a',
    headerBgColor: '#2a2a2a',
    footerBgColor: '#2a2a2a',
    fontSize: 'medium',
    spacing: 'normal',
    borderRadius: '4px'
  });
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setThemeSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleColorChange = (name: string, value: string) => {
    setThemeSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, you would save these settings to a database or config file
    console.log('Updated theme settings:', themeSettings);
    alert('Tema ayarları başarıyla güncellendi!');
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head>
        <title>Tema Ayarları | GAMA Admin Panel</title>
        <meta name="description" content="Edit theme settings" />
      </Head>
      
      {/* Admin Header */}
      <header className="carbon-fiber-bg text-white p-4 shadow-md relative">
        <div className="container mx-auto relative z-10 flex justify-between items-center">
          <h1 className="text-2xl font-bold">GAMA Admin Panel</h1>
          <div className="flex space-x-4">
            <Link href="/admin" className="text-white hover:text-gray-200 transition-colors">
              Admin Panele Dön
            </Link>
            <Link href="/" className="text-white hover:text-gray-200 transition-colors">
              Ana Siteye Dön
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Tema Ayarları</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Renk Ayarları</h3>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ana Renk</label>
                  <div className="flex">
                    <input
                      type="text"
                      name="primaryColor"
                      value={themeSettings.primaryColor}
                      onChange={handleInputChange}
                      className="flex-grow p-2 border rounded-l"
                    />
                    <input
                      type="color"
                      value={themeSettings.primaryColor}
                      onChange={(e) => handleColorChange('primaryColor', e.target.value)}
                      className="h-10 w-10 border-l-0 rounded-r"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Metin Rengi</label>
                  <div className="flex">
                    <input
                      type="text"
                      name="textColor"
                      value={themeSettings.textColor}
                      onChange={handleInputChange}
                      className="flex-grow p-2 border rounded-l"
                    />
                    <input
                      type="color"
                      value={themeSettings.textColor}
                      onChange={(e) => handleColorChange('textColor', e.target.value)}
                      className="h-10 w-10 border-l-0 rounded-r"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Buton Arkaplan</label>
                  <div className="flex">
                    <input
                      type="text"
                      name="buttonBgColor"
                      value={themeSettings.buttonBgColor}
                      onChange={handleInputChange}
                      className="flex-grow p-2 border rounded-l"
                    />
                    <input
                      type="color"
                      value={themeSettings.buttonBgColor}
                      onChange={(e) => handleColorChange('buttonBgColor', e.target.value)}
                      className="h-10 w-10 border-l-0 rounded-r"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Header Arkaplan</label>
                  <div className="flex">
                    <input
                      type="text"
                      name="headerBgColor"
                      value={themeSettings.headerBgColor}
                      onChange={handleInputChange}
                      className="flex-grow p-2 border rounded-l"
                    />
                    <input
                      type="color"
                      value={themeSettings.headerBgColor}
                      onChange={(e) => handleColorChange('headerBgColor', e.target.value)}
                      className="h-10 w-10 border-l-0 rounded-r"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Footer Arkaplan</label>
                  <div className="flex">
                    <input
                      type="text"
                      name="footerBgColor"
                      value={themeSettings.footerBgColor}
                      onChange={handleInputChange}
                      className="flex-grow p-2 border rounded-l"
                    />
                    <input
                      type="color"
                      value={themeSettings.footerBgColor}
                      onChange={(e) => handleColorChange('footerBgColor', e.target.value)}
                      className="h-10 w-10 border-l-0 rounded-r"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Yazı ve Boşluk Ayarları</h3>
                
                <div className="mb-4">
                  <label htmlFor="fontSize" className="block text-sm font-medium text-gray-700 mb-1">Başlık Boyutu</label>
                  <select
                    id="fontSize"
                    name="fontSize"
                    value={themeSettings.fontSize}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="small">Küçük</option>
                    <option value="medium">Orta</option>
                    <option value="large">Büyük</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="spacing" className="block text-sm font-medium text-gray-700 mb-1">Paragraf Aralığı</label>
                  <select
                    id="spacing"
                    name="spacing"
                    value={themeSettings.spacing}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="tight">Dar</option>
                    <option value="normal">Normal</option>
                    <option value="wide">Geniş</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="borderRadius" className="block text-sm font-medium text-gray-700 mb-1">Köşe Yuvarlaklığı</label>
                  <select
                    id="borderRadius"
                    name="borderRadius"
                    value={themeSettings.borderRadius}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="0">Köşeli (0px)</option>
                    <option value="4px">Hafif Yuvarlak (4px)</option>
                    <option value="8px">Yuvarlak (8px)</option>
                    <option value="16px">Çok Yuvarlak (16px)</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Önizleme</label>
                  <div 
                    className="p-4 border rounded"
                    style={{ backgroundColor: themeSettings.primaryColor }}
                  >
                    <h3 
                      className="mb-2 font-semibold"
                      style={{ 
                        color: themeSettings.textColor,
                        fontSize: themeSettings.fontSize === 'small' ? '16px' : 
                                themeSettings.fontSize === 'medium' ? '18px' : '20px'
                      }}
                    >
                      GAMA Karbon Plaka
                    </h3>
                    <p 
                      className="mb-4"
                      style={{ 
                        color: themeSettings.textColor,
                        marginBottom: themeSettings.spacing === 'tight' ? '8px' : 
                                    themeSettings.spacing === 'normal' ? '16px' : '24px'
                      }}
                    >
                      Karbon fiber ile güçlendirme çözümleri
                    </p>
                    <button
                      style={{
                        backgroundColor: themeSettings.buttonBgColor,
                        color: themeSettings.textColor,
                        borderRadius: themeSettings.borderRadius,
                        padding: '8px 16px'
                      }}
                    >
                      İncele
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <Link 
                href="/admin" 
                className="bg-gray-300 text-gray-800 px-6 py-2 rounded mr-2 hover:bg-gray-400 transition-colors"
              >
                İptal
              </Link>
              <button 
                type="submit"
                className="carbon-fiber-bg text-white px-6 py-2 rounded relative overflow-hidden"
              >
                <span className="relative z-10">Değişiklikleri Kaydet</span>
              </button>
            </div>
          </form>
        </div>
      </main>
      
      <footer className="bg-gray-100 py-4 border-t">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} GAMA Bina Güçlendirme Ürünleri. Tüm hakları saklıdır.
        </div>
      </footer>
    </div>
  );
};

export default ThemeEdit; 