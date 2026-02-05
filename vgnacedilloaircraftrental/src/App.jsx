import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Layout Components
import NavigationSidebar from './components/common/NavigationSidebar'
import Footer from './components/common/Footer'

// Pages
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import CartPage from './pages/CartPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import PaymentDelivery from './pages/PaymentDelivery'
import TransactionConfirmation from './pages/TransactionConfirmation'
import About from './pages/About'
import Contact from './pages/Contact'
import AircraftDetails from './components/aircraft/AircraftDetails'

function App() {
  const handleSkipToMain = (e) => {
    e.preventDefault();
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView();
    }
  };

  return (
    <Router>
      <div className="app">
        <a href="#main-content" className="skip-link" onClick={handleSkipToMain}>
          Skip to main content
        </a>
        <NavigationSidebar />
        <div className="app-wrapper">
          <main className="main-content" id="main-content" tabIndex={-1}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/aircraft/:id" element={<AircraftDetails />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/payment-delivery" element={<PaymentDelivery />} />
              <Route path="/transaction-confirmation" element={<TransactionConfirmation />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
