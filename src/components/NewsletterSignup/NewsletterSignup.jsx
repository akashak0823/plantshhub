import React, { useState } from 'react'
import './NewsletterSignup.css'

function NewsletterSignup() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Subscribed with email:", email)
    setEmail("")
  }

  return (
    <section className="newsletter-signup">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2>Join Our Green Circle 🌱</h2>
            <p>
              Be part of a growing community of plant lovers! Get seasonal gardening tips, 
              exclusive discounts, and early access to our new arrivals—straight to your inbox.
            </p>
          </div>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">
                Sign Me Up
              </button>
            </div>
            <p className="privacy-text">We send only green goodness. Unsubscribe anytime.</p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSignup
