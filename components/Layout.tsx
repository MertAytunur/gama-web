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
          <div className="flex justify-between items-center py-4">
            <div className="logo flex items-center">
              <Link href="/" className="flex items-center">
                <img src="/assets/images/logos/logo.png" alt="GAMA METALURJI Logo" className="h-20" />
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
            <nav className="hidden md:flex space-x-8">
              <Link href="/products" className="text-gray-600 hover:text-primary-blue transition-colors font-medium">Ürünler</Link>
              <Link href="/systems" className="text-gray-600 hover:text-primary-blue transition-colors font-medium">Sistemler</Link>
              <Link href="/projects" className="text-gray-600 hover:text-primary-blue transition-colors font-medium">Projeler</Link>
              <Link href="/about" className="text-gray-600 hover:text-primary-blue transition-colors font-medium">Hakkımızda</Link>
              <Link href="/contact" className="bg-primary-blue text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors font-medium">İletişim</Link>
            </nav>
          </div>
          
          {/* Mobil Menü */}
          <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} py-4`}>
            <nav className="flex flex-col space-y-4">
              <Link href="/products" className="text-gray-600 hover:text-primary-blue transition-colors font-medium py-2">Ürünler</Link>
              <Link href="/systems" className="text-gray-600 hover:text-primary-blue transition-colors font-medium py-2">Sistemler</Link>
              <Link href="/projects" className="text-gray-600 hover:text-primary-blue transition-colors font-medium py-2">Projeler</Link>
              <Link href="/solutions" className="text-gray-600 hover:text-primary-blue transition-colors font-medium py-2">Çözümler</Link>
              <Link href="/about" className="text-gray-600 hover:text-primary-blue transition-colors font-medium py-2">Hakkımızda</Link>
              <Link href="/contact" className="bg-primary-blue text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors font-medium inline-block">İletişim</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>

      <footer className="text-white pt-12 pb-6 bg-primary-blue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold">GAMA METALURJI</h3>
              <p className="text-gray-300 mb-4">Bina güçlendirme çözümlerinde lider firma.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Sistemlerimiz</h3>
              <ul className="space-y-2">
                <li><Link href="/systems/frp-systems" className="text-gray-300 hover:text-white">FRP Sistemleri</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Hızlı Bağlantılar</h3>
              <ul className="space-y-2">
                <li><Link href="/products" className="text-gray-300 hover:text-white">Ürünler</Link></li>
                <li><Link href="/systems" className="text-gray-300 hover:text-white">Sistemler</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-white">Hakkımızda</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white">İletişim</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">İletişim</h3>
              <address className="not-italic text-gray-300 mb-4">
                <p>Yeşilce Mah.</p>
                <p>Dağıstanlı Sk. No:29</p>
                <p>34656 Kâğıthane/İstanbul - Türkiye</p>
              </address>
              <p className="text-gray-300">Tel: +90 212 325 2864</p>
              <p className="text-gray-300">Tel: +90 532 172 1624</p>
              <p className="text-gray-300">Email: info@gamametalurji.com</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} GAMA METALURJI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 