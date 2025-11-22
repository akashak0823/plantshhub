import React from 'react'
import "./HeroSection.css"

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-card cactus-card">
             <div className="plants-image">
              <img src="/src/Assets/f-gwah.jpg" alt="Grow Wealth at Home" />
            </div>
          </div>

          <div className="hero-card green-life-card">
            <div className="card-header">
            </div>
            <div className="plants-image">
              <img src="/src/Assets/f-bhgv.jpg" alt="Bring Home Good Vibes" />
            </div>
          </div>

          <div className="hero-card trending-card">
            <div className="card-header">
            </div>
            <div className="plants-image">
              <img src="/src/Assets/f-ryo.jpg" alt="Refresh Your Outdoors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection