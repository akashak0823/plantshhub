import React, { useState } from 'react'
import './Header.css'
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      {/* Main navigation */}
      <nav className="main-nav">
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <h1>VRINDHAVANAM</h1>
               <img src="./src/Assets/logo-image.svg" alt="Logo" className='logo-image' />
            </div>

            <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
              <a href="#home">Home</a>
              <a href="#plants">Plants</a>
              <a href="#seeds">Seeds</a>
              <a href="#planters">Planters</a>
              <a href="#care">Plant Care</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="nav-actions">
              <button className="search-btn"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg></button>
              <button className="cart-btn">🛒</button>
              <button className="menu-toggle" >
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Trust badges */}
      <div className="trust-badges">
        <div className="container">
          <div className="badges-list">
            <div className="badge">
              <span className="badge-icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#008000"><path d="M531-260h96v-3L462-438l1-3h10q54 0 89.5-33t43.5-77h40v-47h-41q-3-15-10.5-28.5T576-653h70v-47H314v57h156q26 0 42.5 13t22.5 32H314v47h222q-6 20-23 34.5T467-502H367v64l164 178ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg> </span>
              <span>Best Price</span>
            </div>
            <div className="badge">
              <span className="badge-icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#808080"><path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm179-80h442L480-830 259-720ZM80-120v-80h482q2 21 5 40.5t9 39.5H80Zm600-310v-130h80v90l-80 40ZM800 0q-69-17-114.5-79.5T640-218v-102l160-80 160 80v102q0 76-45.5 138.5T800 0Zm-29-120 139-138-42-42-97 95-39-39-42 43 81 81ZM259-720h442-442Z"/></svg>
              </span>
              <span>100% Secure payments</span>
            </div>
            <div className="badge">
              <span className="badge-icon">💰</span>
              <span>Get Better Discounts on Bulk Orders</span>
            </div>
            <div className="badge">
              <span className="badge-icon">🚚</span>
              <span>Secure Shipping</span>
            </div>
            <div className="badge">
              <span className="badge-icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#34A853"><path d="M600-800H360v280h240v-280Zm200 0H680v280h120v-280ZM575-440H320v240h222q21 0 40.5-7t35.5-21l166-137q-8-8-18-12t-21-6q-17-3-33 1t-30 15l-108 87H400v-80h146l44-36q5-3 7.5-8t2.5-11q0-10-7.5-17.5T575-440Zm-335 0h-80v280h80v-280Zm40 0v-360q0-33 23.5-56.5T360-880h440q33 0 56.5 23.5T880-800v280q0 33-23.5 56.5T800-440H280ZM240-80h-80q-33 0-56.5-23.5T80-160v-280q0-33 23.5-56.5T160-520h415q85 0 164 29t127 98l27 41-223 186q-27 23-60 34.5T542-120H309q-11 18-29 29t-40 11Z"/></svg></span>
              <span>All India Delivery</span>
            </div>
            <div className="badge">
              <span className="badge-icon"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-80Q315-220 237.5-339T160-570q0-137 96.5-223.5T480-880q127 0 223.5 89T800-552l84-84 56 56-180 180-180-180 56-56 84 84q0-109-69.5-178.5T480-800q-101 0-170.5 67T240-569q0 83 59 177t181 206q20-18 37-35l34-34q-5-11-8-22t-3-23q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29q-8 0-14.5-1t-13.5-3q-29 30-61.5 61T480-80Z"/></svg></span>
              <span>15 Days Refund or Replacement (T&C)</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header