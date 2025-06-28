import React from 'react';
import './Navbar.css';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar({ onNavigate, cartCount = 0 }) {
  return (
    <nav className="navbar">
      <div className="logo" onClick={() => onNavigate('home')}>
        HomeCook
      </div>

      <ul className="nav-links">
        <li><button onClick={() => onNavigate('home')}>Home</button></li>
        <li><button onClick={() => onNavigate('menu')}>Menu</button></li>
        <li>
            <button onClick={() => {
                const section = document.getElementsByClassName('about-us-section')[0];
                if (section) section.scrollIntoView({ behavior: 'smooth' });
            }}>
                About Us
            </button>
        </li>

        <li>
            <button onClick={() => {
                const section = document.getElementsByClassName('contact-us-section')[0];
                if (section) section.scrollIntoView({ behavior: 'smooth' });
            }}>
                Contact Us
            </button>
        </li>
      </ul>

      <div className="nav-actions">
        
        <a href="/login" className="auth-link">Login</a>
        <a href="/signup" className="auth-link">Signup</a>
        <button onClick={() => onNavigate('cart')} className="cart-icon">
          <FaShoppingCart />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
