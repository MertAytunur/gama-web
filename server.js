const express = require('express');
const next = require('next');
const session = require('express-session');
const startAdminPanel = require('./src/admin/adminPanel');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  
  // Set up session for AdminJS
  server.use(session({
    secret: 'your-secret-key-here',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' }
  }));
  
  // Static files
  server.use(express.static('public'));
  
  // Initialize the admin panel
  startAdminPanel(server);
  
  // Handle Next.js requests
  server.all('*', (req, res) => {
    return handle(req, res);
  });
  
  const PORT = process.env.PORT || 3000;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
    console.log(`> Admin panel available at http://localhost:${PORT}/admin`);
  });
}); 