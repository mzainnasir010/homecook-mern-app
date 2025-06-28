import React from 'react';
import './CartPage.css';
import AboutAndContact from './AboutAndContact';

function CartPage({ cart, onRemoveItem, onClearCart, onProceedToCheckout }) {
  const calculateTotal = () => {
    return cart.reduce((total, meal) => total + meal.price, 0).toFixed(2);
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((meal, index) => (
            <div key={index} className="cart-item">
              <img src={meal.image} alt={meal.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h3>{meal.name}</h3>
                <p>Rs. {meal.price.toFixed(2)}</p>
              </div>
              <button
                className="remove-item-btn"
                onClick={() => onRemoveItem(index)}

              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="cart-footer">
          <h3>Total: Rs. {calculateTotal()}</h3>
          <button
            className="proceed-checkout-btn"
            onClick={onProceedToCheckout}
          >
            Proceed to Checkout
          </button><br/><br/>
          <button
            className="clear-cart-btn"
            onClick={onClearCart}
          >
            Clear Cart
          </button>
        </div>
      )}
      <AboutAndContact/>
    </div>
  );
}

export default CartPage;
