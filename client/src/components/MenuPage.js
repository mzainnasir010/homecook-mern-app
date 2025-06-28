import React, { useState, useEffect } from 'react';
import AboutAndContact from './AboutAndContact';
import './MenuPage.css';

const MenuPage = ({ onMealClick }) => {
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMeals, setFilteredMeals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/meals")
      .then(res => res.json())
      .then(data => {
        setMeals(data);
        setFilteredMeals(data); // Initially show all
      })
      .catch(err => console.error("Failed to fetch meals:", err));
  }, []);

  useEffect(() => {
    const filtered = meals.filter(meal =>
      meal.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMeals(filtered);
  }, [searchTerm, meals]);

  return (
    <div className="menu-container">
      <h2>Our Menu</h2>

      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search meals..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="menu-search-bar"
        />
      </div>

      <div className="meal-grid">
        {filteredMeals.map(meal => (
          <div
            className="meal-card"
            key={meal._id}
            onClick={() => onMealClick(meal)}
            style={{ cursor: 'pointer' }}
          >
            <img src={meal.imageUrl || meal.image || 'https://via.placeholder.com/150'} alt={meal.name} />
            <h3>{meal.name}</h3>
            <p>{meal.description}</p>
            <span className="price">Rs. {meal.price}</span>
          </div>
        ))}
      </div>

      <AboutAndContact />
    </div>
  );
};

export default MenuPage;
