import React from 'react';

const products = [
  {
    id: 1,
    name: "Apple iPhone 15 Pro Max",
    price: "$1,199",
    image: "/prod_iphone.png",
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: "$1,299",
    image: "/product_ultra.png",
    badge: "Top Rated"
  },
  {
    id: 3,
    name: "Huawei Mate 60 Pro",
    price: "$999",
    image: "/prod_huawei.png",
    badge: "Trending"
  },
  {
    id: 4,
    name: "Google Pixel 8 Pro",
    price: "$999",
    image: "/prod_pixel.png",
    badge: "New"
  },
  {
    id: 5,
    name: "Samsung Galaxy Z Fold 5",
    price: "$1,799",
    image: "/product_fold.png",
    badge: "Foldable"
  },
  {
    id: 6,
    name: "Apple iPhone 15",
    price: "$799",
    image: "/product_budget.png",
    badge: "Popular"
  }
];

const Products = () => {
  return (
    <section id="products" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="title">Latest <span className="text-gradient">Innovations</span></h2>
          <p className="subtitle">Discover our curated selection of premium mobile devices.</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card glass-panel">
              <div className="card-badge">{product.badge}</div>
              <div className="card-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="card-info">
                <h3>{product.name}</h3>
                <div className="flex-between">
                  <span className="price">{product.price}</span>
                  <button className="btn-sm">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Products;
