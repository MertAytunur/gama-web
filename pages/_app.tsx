import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import React from 'react';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Bir Hata Oluştu</h1>
        <p className="text-gray-600 mb-6">
          Üzgünüz, beklenmeyen bir hata oluştu.
        </p>
        <button
          onClick={resetErrorBoundary}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Tekrar Dene
        </button>
      </div>
    </div>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp; 