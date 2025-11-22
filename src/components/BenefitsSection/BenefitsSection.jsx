import React from 'react'
import './BenefitsSection.css'
function BenefitsSection() {
  const benefits = [
    {
      icon: "🌱",
      title: "Air Purification",
      description: "Plants naturally filter and purify the air in your home, removing harmful toxins.",
    },
    {
      icon: "😌",
      title: "Stress Relief",
      description: "Being around plants has been proven to reduce stress and improve mental well-being.",
    },
    {
      icon: "💚",
      title: "Health Benefits",
      description: "Plants can improve humidity levels and provide natural aromatherapy benefits.",
    },
    {
      icon: "🏡",
      title: "Home Decoration",
      description: "Beautiful plants add natural beauty and style to any living space.",
    },
  ]

  return (
    <section className="benefits-section">
      <div className="container">
        <div className="section-content">
          <div className="benefits-text">
            <h2>Why Choose Plants for Your Home?</h2>
            <p>
              Discover the amazing benefits of bringing nature indoors with our carefully selected collection of plants.
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection