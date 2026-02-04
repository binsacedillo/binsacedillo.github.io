import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { MainLayout } from './components/Layout/MainLayout';
import { ProtectedRoute } from './components/Auth/ProtectedRoute';

// Pages
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import CartPage from './pages/CartPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import PaymentDelivery from './pages/PaymentDelivery';
import TransactionConfirmation from './pages/TransactionConfirmation';

// Styles
import './styles/variables.css';
import './styles/layout.css';
import './App.css';

function App() {
  return (
    <Router basename="/">
      <AuthProvider>
        <CartProvider>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route 
                path="/profile" 
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/payment-delivery" 
                element={
                  <ProtectedRoute>
                    <PaymentDelivery />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/confirmation" 
                element={
                  <ProtectedRoute>
                    <TransactionConfirmation />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </MainLayout>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
