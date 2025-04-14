import React from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  year: string;
  location: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  year,
  location,
  imageSrc,
  imageAlt,
  href,
}) => {
  return (
    <div className="project-card bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
      <div className="relative overflow-hidden h-56 bg-blue-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">{title}</span>
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-800 rounded-full">{year}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="mb-4 text-gray-600 flex-grow">{location}</p>
        <Link href={href} className="group flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
          Detayları Görüntüle
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard; 