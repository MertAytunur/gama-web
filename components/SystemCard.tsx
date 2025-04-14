import React from 'react';
import Link from 'next/link';

interface SystemCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

const SystemCard: React.FC<SystemCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
}) => {
  return (
    <Link href={href} className="block group">
      <div className="system-card bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
        <div className="mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
          <span className="text-2xl font-bold">{title.charAt(0)}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
          <span className="text-blue-600 font-medium">Detaylı Bilgi</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default SystemCard; 