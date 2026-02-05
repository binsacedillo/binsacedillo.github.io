import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import PaymentDelivery from './pages/PaymentDelivery';
import TransactionConfirmation from './pages/TransactionConfirmation';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const addToCart = (aircraft) => {
    setCartItems([...cartItems, aircraft]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <div className="app">
        <Header cartCount={cartItems.length} isLoggedIn={isLoggedIn} />
        <div className="container">
          <Sidebar isLoggedIn={isLoggedIn} />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home addToCart={addToCart} />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/catalog" element={<Catalog addToCart={addToCart} />} />
              <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
              <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile user={user} />} />
              <Route path="/payment-delivery" element={<PaymentDelivery cartItems={cartItems} />} />
              <Route path="/transaction-confirmation" element={<TransactionConfirmation />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
