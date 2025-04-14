const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const express = require('express');
const resources = require('./resources');

const startAdminPanel = async (app) => {
  const adminJs = new AdminJS({
    rootPath: '/admin',
    branding: {
      companyName: 'GAMA Admin Panel',
      logo: '/assets/images/logos/logo.png',
      favicon: '/favicon.ico',
      theme: {
        colors: {
          primary100: '#2a2a2a',  // Dark gray (primary-blue in your tailwind config)
          primary80: '#3a3a3a',
          primary60: '#4a4a4a',
          primary40: '#5a5a5a',
          primary20: '#6a6a6a',
          grey100: '#151515',
          grey80: '#202020',
          grey60: '#303030',
          grey40: '#505050',
          grey20: '#707070',
          filterBg: '#2a2a2a',
          accent: '#b8b8b8',
          hoverBg: '#3a3a3a',
        },
        borders: {
          borderWidth: '1px',
          borderRadius: '4px',
        },
        shadows: {
          cardShadow: '0 1px 6px 0 rgba(0, 0, 0, 0.1)',
          inputShadow: 'none',
        },
        font: 'Helvetica, Arial, sans-serif',
      }
    },
    dashboard: {
      component: AdminJS.bundle('./components/Dashboard'),
    },
    assets: {
      styles: ['/admin.css'],
    },
    resources: resources,
  });

  const router = AdminJSExpress.buildRouter(adminJs);
  app.use(adminJs.options.rootPath, router);
  
  console.log(`AdminJS started on http://localhost:3000${adminJs.options.rootPath}`);
};

module.exports = startAdminPanel; 