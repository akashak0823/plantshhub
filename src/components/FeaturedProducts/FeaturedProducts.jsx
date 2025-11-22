import React from 'react'
import './FeaturedProducts.css'
function FeaturedProducts() {
const products = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      price: "₹899",
      originalPrice: "₹1299",
      image: "./src/Assets/product (1).jpg",
      rating: 4.5,
      reviews: 128,
    },
    {
      id: 2,
      name: "Snake Plant",
      price: "₹599",
      originalPrice: "₹799",
      image: "/src/Assets/product (2).jpg",
      rating: 4.8,
      reviews: 95,
    },
    {
      id: 3,
      name: "Peace Lily",
      price: "₹749",
      originalPrice: "₹999",
      image: "/src/Assets/product (3).jpg",
      rating: 4.6,
      reviews: 76,
    },
    {
      id: 4,
      name: "Rubber Plant",
      price: "₹1199",
      originalPrice: "₹1599",
      image: "/src/Assets/product (4).jpg",
      rating: 4.7,
      reviews: 112,
    },
     {
      id: 5,
      name: "Monstera Deliciosa",
      price: "₹899",
      originalPrice: "₹1299",
      image: "./src/Assets/product (5).jpg",
      rating: 4.5,
      reviews: 128,
    },
    {
      id: 6,
      name: "Snake Plant",
      price: "₹599",
      originalPrice: "₹799",
      image: "/src/Assets/product (6).jpg",
      rating: 4.8,
      reviews: 95,
    },
    {
      id: 7,
      name: "Peace Lily",
      price: "₹749",
      originalPrice: "₹999",
      image: "/src/Assets/product (7).jpg",
      rating: 4.6,
      reviews: 76,
    },
    {
      id: 8,
      name: "Rubber Plant",
      price: "₹1199",
      originalPrice: "₹1599",
      image: "/src/Assets/product (8).jpg",
      rating: 4.7,
      reviews: 112,
    },
     {
      id: 9,
      name: "Monstera Deliciosa",
      price: "₹899",
      originalPrice: "₹1299",
      image: "./src/Assets/product (9).jpg",
      rating: 4.5,
      reviews: 128,
    },
    {
      id: 10,
      name: "Snake Plant",
      price: "₹599",
      originalPrice: "₹799",
      image: "/src/Assets/product (10).jpg",
      rating: 4.8,
      reviews: 95,
    },
    {
      id: 11,
      name: "Peace Lily",
      price: "₹749",
      originalPrice: "₹999",
      image: "/src/Assets/product (11).jpg",
      rating: 4.6,
      reviews: 76,
    },
    {
      id: 12,
      name: "Rubber Plant",
      price: "₹1199",
      originalPrice: "₹1599",
      image: "/src/Assets/product (12).jpg",
      rating: 4.7,
      reviews: 112,
    },
     {
      id: 13,
      name: "Monstera Deliciosa",
      price: "₹899",
      originalPrice: "₹1299",
      image: "./src/Assets/product (13).jpg",
      rating: 4.5,
      reviews: 128,
    },
    {
      id: 14,
      name: "Snake Plant",
      price: "₹599",
      originalPrice: "₹799",
      image: "/src/Assets/product (14).jpg",
      rating: 4.8,
      reviews: 95,
    },
    {
      id: 15,
      name: "Peace Lily",
      price: "₹749",
      originalPrice: "₹999",
      image: "/src/Assets/product (15).jpg",
      rating: 4.6,
      reviews: 76,
    },
    {
      id: 16,
      name: "Rubber Plant",
      price: "₹1199",
      originalPrice: "₹1599",
      image: "/src/Assets/product (16).jpg",
      rating: 4.7,
      reviews: 112,
    }
  ]

  return (
    <section className="featured-products">
      <div className="container">
        <div className="section-header">
          <h2 className='text-centre'>Featured Products</h2>
          <button className="btn btn-secondary">View All</button>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image || "/placeholder.svg"} alt={product.name} />
                <div className="product-overlay">
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="rating">
                  <span className="stars">★★★★★</span>
                  <span className="reviews">({product.reviews})</span>
                </div>
                <div className="price">
                  <span className="current-price">{product.price}</span>
                  <span className="original-price">{product.originalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts