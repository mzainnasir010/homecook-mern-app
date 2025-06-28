import React, { useState } from 'react';
import './CheckoutPage.css';
import AboutAndContact from './AboutAndContact';

function CheckoutPage({ cart, onPlaceOrder }) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    deliveryTime: ''
  });

  const [personsPerMeal, setPersonsPerMeal] = useState(
    cart.map(() => 1) 
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handlePersonsChange = (index, value) => {
    const updatedPersons = [...personsPerMeal];
    updatedPersons[index] = parseInt(value) || 1;
    setPersonsPerMeal(updatedPersons);
  };

  const calculateTotal = () => {
    return cart.reduce((total, meal, index) => {
      const persons = personsPerMeal[index];
      const serves = meal.serves || 1;
      const quantityNeeded = Math.ceil(persons / serves);
      return total + meal.price * quantityNeeded;
    }, 0).toFixed(2);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const { name, address, phone, deliveryTime } = formData;

  if (!name || !address || !phone || !deliveryTime) {
    alert("Please fill in all the details!");
    return;
  }

  const now = new Date();
  const [deliveryHour, deliveryMinute] = deliveryTime.split(":").map(Number);

  const delivery = new Date();
  delivery.setHours(deliveryHour, deliveryMinute, 0, 0);

  if (delivery < now) {
    delivery.setDate(delivery.getDate() + 1);
  }

  const timeDiffMs = delivery - now;
  const timeDiffHours = timeDiffMs / (1000 * 60 * 60);

  if (timeDiffHours < 5) {
    alert("Orders must be placed at least 5 hours before delivery time.");
    return;
  }

  const enrichedCart = cart.map((meal, index) => ({
    ...meal,
    personsOrdered: personsPerMeal[index]
  }));

    const orderData = {
    customerName: name,
    address,
    phone,
    deliveryTime,
    orderDate: now.toISOString(),
    cart: enrichedCart,
    totalAmount: parseFloat(calculateTotal())
  };

  try {
    const response = await fetch('http://localhost:5000/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData)
  });

    if (!response.ok) {
      throw new Error('Failed to save order');
    }

    const result = await response.json();
    alert("Order placed successfully!");

    onPlaceOrder(orderData);

  } catch (error) {
    alert("Error placing order. Please try again.");
    console.error(error);
  }
};


  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="order-summary">
        <h2>Order Summary</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="order-items">
            {cart.map((meal, index) => (
              <div key={index} className="order-item">
                <img src={meal.image} alt={meal.name} className="order-item-image" />
                <div className="order-item-info">
                  <h3>{meal.name}</h3>
                  <p>Serves: {meal.serves} {meal.serves > 1 ? "persons" : "person"}</p>
                  <p>Price per unit: Rs {meal.price.toFixed(2)}</p>
                  <label>
                    Number of Persons:
                    <input
                      type="number"
                      min="1"
                      value={personsPerMeal[index]}
                      onChange={(e) => handlePersonsChange(index, e.target.value)}
                      className="person-count-input"
                    />
                  </label>
                </div>
              </div>
            ))}
          </div>
        )}
        <h3>Total: Rs {calculateTotal()}</h3>
      </div>

      <div className="delivery-form">
        <h2>Delivery Details</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required/>
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange}required/>
          <input type="number" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required/>
          <br/><label><h3>Delivery Time: </h3></label>
          <input type="time" name="deliveryTime" placeholder="Delivery Time" value={formData.deliveryTime} onChange={handleChange} required /><br />
          <button type="submit" className="place-order-btn">Place Order</button>
        </form>
      </div>
      <AboutAndContact />
    </div>
  );
}

export default CheckoutPage;
