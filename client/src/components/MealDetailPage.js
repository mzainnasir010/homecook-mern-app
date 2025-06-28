import React, { useState } from 'react';
import './MealDetailPage.css';
import AboutAndContact from './AboutAndContact';

function MealDetailPage({ meal, onBack, onAddToCart }) {
  const [alertMessage, setAlertMessage] = useState(""); 

  const handleAddToCart = (meal) => {
    onAddToCart(meal); 
    setAlertMessage("Item added to cart successfully!");
    setTimeout(() => {
      setAlertMessage("");
    }, 3000);
  };

  return (
    <div className="meal-detail-container">
      <button onClick={onBack} className="back-button">Back</button>
      <div className="meal-detail">
        <img src={meal.image} alt={meal.name} className="meal-image" />
        <div className="meal-info">
          <h2>{meal.name}</h2>
          <p>{meal.description}</p>
          <p className="meal-price">Rs {meal.price.toFixed(2)}</p>
          <p className="meal-serves">Serving:  {meal.serves}2-persons{meal.serves > 1 ? 's' : ''}</p>
          <button onClick={() => handleAddToCart(meal)} className="add-to-cart-btn">
            Add to Cart
          </button>
        </div>
      </div>

      {alertMessage && (
        <div className="alert-message">{alertMessage}</div> 
      )}
      <AboutAndContact />
    </div>
  );
}

export default MealDetailPage;
