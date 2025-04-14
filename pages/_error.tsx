import React from 'react';
import { NextPage } from 'next';

interface ErrorProps {
  statusCode?: number;
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          {statusCode ? `Hata ${statusCode}` : 'Bir Hata Oluştu'}
        </h1>
        <p className="text-gray-600 mb-6">
          {statusCode
            ? `Üzgünüz, bir ${statusCode} hatası oluştu.`
            : 'Üzgünüz, bir hata oluştu.'}
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Ana Sayfaya Dön
        </a>
      </div>
    </div>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error; 