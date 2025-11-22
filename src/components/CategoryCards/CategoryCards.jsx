import React from 'react'
import './CategoryCards.css'
function CategoryCards() {
    const categories = [
    { name: "Plants", icon: "🌱", image: "./src/Assets/cate-plants.png" },
    { name: "Seeds", icon: "🌾", image: "./src/Assets/cate-seeds.jpg" },
    { name: "Planters", icon: "🏺", image: "./src/Assets/cate-planters.png" },
    { name: "Plants Care", icon: "💚", image: "./src/Assets/cate-plantcare.jpg" },
    { name: "Combos", icon: "🎁", image: "./src/Assets/cate-combos.jpg" },
  ]

  return (
    <section className="category-cards">
      <div className="container">
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="category-image">
                <img src={category.image || "/placeholder.svg"} alt={category.name} />
              </div>
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryCards