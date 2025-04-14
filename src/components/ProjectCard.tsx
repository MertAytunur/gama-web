import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface ProjectCardProps {
  title: string;
  year?: string;
  location?: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  techSpecs?: { label: string; value: string }[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  year,
  location,
  imageSrc,
  imageAlt,
  href,
  techSpecs
}) => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!expanded) {
      // First click - expand to show tech specs
      setExpanded(true);
    } else {
      // Second click - navigate to product page using Next.js router
      router.push(href);
    }
  };

  return (
    <div 
      className={`project-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 ease-in-out ${
        expanded ? 'transform scale-105 shadow-lg z-10' : isHovered ? 'transform translate-y-[-5px] shadow-lg' : ''
      }`}
      style={{ minHeight: expanded ? '380px' : 'auto' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="block cursor-pointer" 
        onClick={handleCardClick}
      >
        <div className="relative h-56 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${
              isHovered ? 'scale-105' : ''
            }`}
          />
          {year && (
            <div className="absolute top-3 right-3 bg-primary-blue text-white text-sm font-medium py-1 px-2 rounded">
              {year}
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-3">{title}</h3>
          
          {/* Tech Specs (Only shown when expanded) */}
          {expanded && techSpecs && techSpecs.length > 0 && (
            <div className="mt-3 pt-3 border-t border-gray-200 animate-fadeIn">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Teknik Özellikler</h4>
              <ul className="text-sm">
                {techSpecs.map((spec, index) => (
                  <li key={index} className="mb-1 flex">
                    <span className="font-medium text-gray-700 mr-2">{spec.label}:</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="flex items-center text-primary-blue text-sm mt-2 transition-transform duration-300 ease-in-out">
            <span>{expanded ? "Ürüne Git" : "Detaylar"}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transition-transform duration-300 ease-in-out ${isHovered ? 'transform translate-x-1' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 