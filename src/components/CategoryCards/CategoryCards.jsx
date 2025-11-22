import React from 'react';
import './CategoryCards.css';

function CategoryCards() {
  const categories = [
    { name: "Plants", icon: "🌱", image: "/Assets/cate-plants.png" },
    { name: "Seeds", icon: "🌾", image: "/Assets/cate-seeds.jpg" },
    { name: "Planters", icon: "🏺", image: "/Assets/cate-planters.png" },
    { name: "Plants Care", icon: "💚", image: "/Assets/cate-plantcare.jpg" },
    { name: "Combos", icon: "🎁", image: "/Assets/cate-combos.jpg" },
  ];

  return (
    <section className="category-cards" aria-label="Product categories">
      <div className="container">
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-card"
              role="button"
              tabIndex={0}
              aria-label={category.name}
            >
              <div className="category-image" aria-hidden="true">
                <img
                  src={category.image || "/Assets/placeholder.svg"}
                  alt={category.name}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryCards;
