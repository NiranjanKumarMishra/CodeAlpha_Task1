const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

const db = require('./db.json');

app.use(cors());

// 🔽 Add this line to serve images from the "images" folder
app.use('/images', express.static(__dirname + '/images'));

app.get('/api/products', (req, res) => {
  res.json(db.products);
});

app.get('/api/product/:id', (req, res) => {
  const product = db.products.find(p => p.id == req.params.id);
  res.json(product || {});
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
