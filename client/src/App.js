import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import MealDetailPage from './components/MealDetailPage';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (meal) => {
    setCart([...cart, meal]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(prevCart => prevCart.filter((_, index) => index !== indexToRemove));
  };

  const clearCart = () => {
    setCart([]);
  };

  const handlePlaceOrder = (orderInfo) => {    
    setCart([]);
    setCurrentPage('home');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'menu':
  return (
    <MenuPage
      onMealClick={(meal) => {
        setSelectedMeal(meal);
        setCurrentPage('mealDetail');
          }}
        />
      );
      case 'mealDetail':
        return (
          <MealDetailPage
            meal={selectedMeal}
            onBack={() => {
              setCurrentPage('menu');
              setSelectedMeal(null);
            }}
            onAddToCart={addToCart}
          />
        );
      case 'cart':
        return (
          <CartPage
            cart={cart}
            onRemoveItem={removeFromCart}
            onClearCart={clearCart}
            onProceedToCheckout={() => setCurrentPage('checkout')}
          />
        );
      case 'checkout':
        return (
          <CheckoutPage
            cart={cart}
            onPlaceOrder={handlePlaceOrder}
          />
        );
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      <Navbar onNavigate={setCurrentPage} cartCount={cart.length} />
      <div style={{ paddingTop: '80px' }}>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
