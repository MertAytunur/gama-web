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
  href
}) => {
  return (
    <div className="system-card bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px] hover:shadow-lg">
      <Link href={href} className="block">
        <div className="relative h-56 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform hover:scale-105" 
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
        <div className="p-4">
          <p className="text-gray-600 mb-3">{description}</p>
          <div className="flex items-center text-blue-600">
            <span className="font-medium">Detaylı Bilgi</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
    </div>
  );
};

export default SystemCard; 