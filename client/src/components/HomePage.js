import React from 'react';
import './HomePage.css';
import AboutAndContact from './AboutAndContact';
function HomePage() {
  return (
    <div className="homepage">
      <div className="hero">
        <h1>Delicious Home-Cooked Meals</h1>
        <p>Fresh, healthy food delivered to your doorstep.</p>
      </div>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div>
            <h3>1. Browse Menu</h3>
            <p>Choose from a variety of homemade meals.</p>
          </div>
          <div>
            <h3>2. Place Order</h3>
            <p>Order in seconds with our easy-to-use platform.</p>
          </div>
          <div>
            <h3>3. Enjoy Food</h3>
            <p>Get freshly made meals delivered on time.</p>
          </div>
        </div>
      </section>
      <AboutAndContact/>
    </div>
  );
}

export default HomePage;
