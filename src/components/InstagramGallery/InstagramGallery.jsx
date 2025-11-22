import React from 'react'
import './InstagramGallery.css'
function InstagramGallery() {
  const images = [
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
    "/placeholder.svg?height=300&width=300",
  ]

  return (
    <section className="instagram-gallery">
      <div className="container">
        <div className="gallery-header">
          <h2>Follow Us on Instagram</h2>
          <p>@vrindhavanam_plants</p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image || "/placeholder.svg"} alt={`Instagram post ${index + 1}`} />
              <div className="gallery-overlay">
                <span className="instagram-icon">📷</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-footer">
          <button className="btn btn-primary">Follow Us</button>
        </div>
      </div>
    </section>
  )
}

export default InstagramGallery