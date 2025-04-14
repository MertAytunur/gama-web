const fs = require('fs');
const path = require('path');

// Create directory if it doesn't exist
const productsDir = path.join(__dirname, 'public', 'images', 'products');
if (!fs.existsSync(productsDir)) {
  fs.mkdirSync(productsDir, { recursive: true });
}

// Product names to create placeholders for
const products = [
  'c-anchor',
  'c-laminate',
  'c-sheet',
  'end-anchor',
  'glasphalt',
  'resin',
  'resin55'
];

// Create a simple HTML placeholder for each product
products.forEach(product => {
  const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 400px;
      height: 300px;
      background-color: #f0f0f0;
      font-family: Arial, sans-serif;
    }
    .container {
      text-align: center;
      padding: 20px;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      width: 80%;
    }
    h2 {
      margin-top: 0;
      color: #2563eb;
    }
    p {
      color: #333;
      margin-bottom: 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>S&P ${product.replace(/-/g, ' ').toUpperCase()}</h2>
    <p>Ürün Görseli</p>
  </div>
</body>
</html>
  `;
  
  const filePath = path.join(productsDir, `${product}.html`);
  fs.writeFileSync(filePath, html);
  console.log(`Created placeholder for ${product} at ${filePath}`);
});

console.log('All placeholders created successfully!'); 