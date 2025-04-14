import React, { ReactNode, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'GAMA Seismic Engineering',
  description = 'GAMA bina güçlendirme alanında lider bir şirkettir',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            <div className="logo flex items-center">
              <Link href="/" className="flex items-center">
                <img src="/assets/images/logos/logo.png" alt="GAMA Bina Güçlendirme Ürünleri Logo" className="h-16" />
              </Link>
            </div>

            {/* Mobil Menü Butonu */}
            <button 
              className="md:hidden focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>

            {/* Masaüstü Menü */}
            <nav className="hidden md:flex items-center">
              <div className="flex space-x-8">
                <Link href="/products" className="text-gray-600 hover:text-primary-blue transition-colors font-medium py-2">Ürünler</Link>
                <Link href="/systems" className="text-gray-600 hover:text-primary-blue transition-colors font-medium py-2">Sistemler</Link>
                <Link href="/projects" className="text-gray-600 hover:text-primary-blue transition-colors font-medium py-2">Projeler</Link>
                <Link href="/about" className="text-gray-600 hover:text-primary-blue transition-colors font-medium py-2">Hakkımızda</Link>
                <Link href="/contact" className="carbon-fiber-bg text-white px-6 py-2 rounded-md hover:opacity-90 transition-colors font-medium ml-2 relative overflow-hidden">
                  <span className="relative z-10">İletişime Geçin</span>
                </Link>
              </div>
            </nav>
          </div>
          
          {/* Mobil Menü */}
          <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} py-4`}>
            <nav className="flex flex-col space-y-4">
              <Link href="/products" className="text-gray-600 hover:text-primary-blue transition-colors font-medium py-2">Ürünler</Link>
              <Link href="/systems" className="text-gray-600 hover:text-primary-blue transition-colors font-medium py-2">Sistemler</Link>
              <Link href="/projects" className="text-gray-600 hover:text-primary-blue transition-colors font-medium py-2">Projeler</Link>
              <Link href="/about" className="text-gray-600 hover:text-primary-blue transition-colors font-medium py-2">Hakkımızda</Link>
              <Link href="/contact" className="carbon-fiber-bg text-white px-6 py-2 rounded-md hover:opacity-90 transition-colors font-medium inline-block relative overflow-hidden">
                <span className="relative z-10">İletişime Geçin</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>

      <footer className="text-white pt-16 pb-8 carbon-fiber-bg relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            {/* Map and Company Info */}
            <div className="col-span-1 md:col-span-5">
              <h3 className="text-2xl font-bold mb-4 text-white">GAMA Bina Güçlendirme Ürünleri</h3>
              <p className="text-white mb-6 text-lg">Bina güçlendirme çözümlerinde lider firma.</p>
              
              {/* Google Maps Section */}
              <div className="mt-4">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.9158694536784!2d29.00132970000001!3d41.097732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab67f4240c3df%3A0x2cfe1418156d4f7f!2sGama%20Karbon%20Fiber%20Bina%20G%C3%BC%C3%A7lendirme%20Malzemeleri!5e0!3m2!1str!2str!4v1724677583833!5m2!1str!2str" 
                  width="100%" 
                  height="250" 
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="shadow-md"
                ></iframe>
              </div>
            </div>

            {/* Navigation Section - Now in a single row */}
            <div className="col-span-1 md:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Systems */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 border-b border-white pb-2 text-white">Sistemlerimiz</h3>
                  <ul className="space-y-3">
                    <li><Link href="/systems/frp-systems" className="text-white hover:text-gray-200 transition-colors">FRP Sistemleri</Link></li>
                  </ul>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 border-b border-white pb-2 text-white">Hızlı Bağlantılar</h3>
                  <ul className="space-y-3">
                    <li><Link href="/products" className="text-white hover:text-gray-200 transition-colors">Ürünler</Link></li>
                    <li><Link href="/systems" className="text-white hover:text-gray-200 transition-colors">Sistemler</Link></li>
                    <li><Link href="/about" className="text-white hover:text-gray-200 transition-colors">Hakkımızda</Link></li>
                    <li><Link href="/contact" className="text-white hover:text-gray-200 transition-colors">İletişim</Link></li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 border-b border-white pb-2 text-white">İletişim</h3>
                  <address className="not-italic text-white mb-5">
                    <p>Yeşilce Mah.</p>
                    <p>Dağıstanlı Sk. No:29</p>
                    <p>34656 Kâğıthane/İstanbul</p>
                  </address>
                  <p className="text-white mb-2"><span className="font-medium">Tel:</span> +90 212 325 2864</p>
                  <p className="text-white mb-2"><span className="font-medium">Tel:</span> +90 532 172 1624</p>
                  <p className="text-white"><span className="font-medium">Email:</span> info@gamametalurji.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white border-opacity-30 pt-6 text-center text-white">
            <p>&copy; {new Date().getFullYear()} GAMA Bina Güçlendirme Ürünleri. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 