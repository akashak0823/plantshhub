import React from 'react'
import './PopularCategories.css'
function PopularCategories() {
   const categories = [
    {
      title: "Popular Picks",
      image: "/Assets/pc-pp.jpg",
      color: "#e3f2fd",
    },
    { 
      title: "Plants for Every Space",
      image: "/Assets/pc-pfes.jpg",
      color: "#f4e4bc",
    },
    {
      title: " Weather-Friendly Greens",
      image: "/Assets/pc-wfg.jpg",
      color: "#a8d5a8",
    },
    {
      title: " Explore by Personality",
      image: "/Assets/pc-ebp.jpg",
      color: "#f9e79f",
    },
  ] 
 
  return (
    <section className="popular-categories">
      <div className="container">
        <h2 className="section-title">Popular Categories</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="popular-category-card" style={{ backgroundColor: category.color }}>
              <div className="category-content">
                <h3>{category.title}</h3>
                <div className="category-image">
                  <img src={category.image || "/placeholder.svg"} alt={category.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularCategories