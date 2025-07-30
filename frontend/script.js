fetch("http://localhost:5000/api/products")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("product-list");
    data.forEach(p => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h2>${p.name}</h2>
        <img src="${p.image}" width="100" />
        <p>₹${p.price}</p>
        <a href="product.html?id=${p.id}">View</a>
      `;
      container.appendChild(div);
    });
  });
