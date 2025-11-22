import React from 'react'
import './Testimonials.css'
function Testimonials() {
  const testimonials = [
  {
    id: 1,
    name: " priya",
    location: "Kochi, Kerala",
    rating: 5,
    text: "Absolutely loved the freshness and quality of the plants. Packaging was secure and the delivery was prompt.",
    image: "https://avatars.githubusercontent.com/u/6451866?v=4",
  },
  {
    id: 2,
    name: "Krishna",
    location: "Thiruvananthapuram, Kerala",
    rating: 4,
    text: "Healthy plants and great customer support. My balcony garden is now thriving thanks to Vrindhavanam!",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
    id: 3,
    name: "Mohmed",
    location: "Kozhikode, Kerala",
    rating: 5,
    text: "Excellent variety of plants. The care instructions included were really helpful. Will definitely order again.",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  ]

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                <div className="customer-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.location}</p>
                  <div className="rating">{"★".repeat(testimonial.rating)}</div>
                </div>
              </div>

              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials