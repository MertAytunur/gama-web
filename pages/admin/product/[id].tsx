import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

interface TechSpec {
  label: string;
  value: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  techSpecs: TechSpec[];
}

interface FormDataType {
  title: string;
  description: string;
  imageSrc: string;
  techSpecs: TechSpec[];
}

// Mock product data
const productData: Record<string, Product> = {
  'c-laminate': {
    id: 'c-laminate',
    title: 'GAMA Karbon Plaka',
    description: 'Yüksek mukavemetli karbon fiber plakalar yapıların güçlendirilmesinde kullanılır.',
    imageSrc: '/images/assets/c-laminate.png',
    href: '/products/c-laminate',
    techSpecs: [
      { label: 'Genişlik', value: '50 / 100 mm' },
      { label: 'Kalınlık', value: '1.4 mm' },
      { label: 'Elastisite Modülü', value: '>165 GPa' }
    ]
  },
  'c-sheet': {
    id: 'c-sheet',
    title: 'GAMA Karbon Kumaş',
    description: 'Karbon fiber kumaşlar, yapıların güçlendirilmesi için kullanılan hafif ve dayanıklı malzemelerdir.',
    imageSrc: '/images/assets/c-sheet.png',
    href: '/products/c-sheet',
    techSpecs: [
      { label: 'Ağırlık', value: '200 / 300 g/m²' },
      { label: 'Lif Kalınlığı', value: '0.111 / 0.167 mm' },
      { label: 'Elastisite Modülü', value: '>240 GPa' }
    ]
  }
};

const ProductEdit: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  
  // Check authentication on component mount
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('gamaAdminAuth') === 'true';
    if (!isAuthenticated) {
      router.push('/admin/login');
    }
  }, [router]);
  
  const [product, setProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState<FormDataType>({
    title: '',
    description: '',
    imageSrc: '',
    techSpecs: []
  });
  
  useEffect(() => {
    if (id && typeof id === 'string' && productData[id]) {
      const productInfo = productData[id];
      
      if (productInfo) {
        setProduct(productInfo);
        setFormData({
          title: productInfo.title,
          description: productInfo.description,
          imageSrc: productInfo.imageSrc,
          techSpecs: [...productInfo.techSpecs]
        });
      }
    }
  }, [id]);
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleTechSpecChange = (index: number, field: keyof TechSpec, value: string) => {
    const updatedTechSpecs = [...formData.techSpecs];
    updatedTechSpecs[index] = {
      ...updatedTechSpecs[index],
      [field]: value
    };
    
    setFormData(prev => ({
      ...prev,
      techSpecs: updatedTechSpecs
    }));
  };
  
  const addTechSpec = () => {
    setFormData(prev => ({
      ...prev,
      techSpecs: [...prev.techSpecs, { label: '', value: '' }]
    }));
  };
  
  const removeTechSpec = (index: number) => {
    const updatedTechSpecs = [...formData.techSpecs];
    updatedTechSpecs.splice(index, 1);
    
    setFormData(prev => ({
      ...prev,
      techSpecs: updatedTechSpecs
    }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the updated data to your API
    console.log('Updated product:', formData);
    alert('Ürün başarıyla güncellendi!');
    router.push('/admin');
  };
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100 items-center justify-center">
        <p className="text-gray-600">Ürün yükleniyor veya bulunamadı...</p>
        <Link href="/admin" className="mt-4 text-blue-600 hover:underline">
          Admin Panele Dön
        </Link>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head>
        <title>Ürün Düzenle | GAMA Admin Panel</title>
        <meta name="description" content="Edit product details" />
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
          <h2 className="text-2xl font-bold mb-6">Ürün Düzenle: {product.title}</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Ürün Adı
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Açıklama
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="imageSrc" className="block text-sm font-medium text-gray-700 mb-1">
                Resim URL
              </label>
              <input
                type="text"
                id="imageSrc"
                name="imageSrc"
                value={formData.imageSrc}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              
              {/* Image preview */}
              <div className="mt-2 border p-2 rounded">
                <p className="text-sm text-gray-600 mb-2">Önizleme:</p>
                <img 
                  src={formData.imageSrc} 
                  alt={formData.title} 
                  className="h-40 object-contain bg-gray-100"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder-image.jpg';
                  }}
                />
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Teknik Özellikler
                </label>
                <button 
                  type="button" 
                  onClick={addTechSpec}
                  className="carbon-fiber-bg text-white px-3 py-1 rounded text-sm relative overflow-hidden"
                >
                  <span className="relative z-10">Ekle +</span>
                </button>
              </div>
              
              {formData.techSpecs.map((spec, index) => (
                <div key={index} className="flex items-center mb-2">
                  <div className="flex-grow grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={spec.label}
                      onChange={(e) => handleTechSpecChange(index, 'label', e.target.value)}
                      placeholder="Özellik"
                      className="p-2 border border-gray-300 rounded"
                      required
                    />
                    <input
                      type="text"
                      value={spec.value}
                      onChange={(e) => handleTechSpecChange(index, 'value', e.target.value)}
                      placeholder="Değer"
                      className="p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <button 
                    type="button" 
                    onClick={() => removeTechSpec(index)}
                    className="ml-2 text-red-600 hover:text-red-800"
                  >
                    Sil
                  </button>
                </div>
              ))}
            </div>
            
            <div className="flex justify-end">
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

export default ProductEdit; 