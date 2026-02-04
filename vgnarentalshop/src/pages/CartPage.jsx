import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { cartItems, total, removeFromCart, updateQuantity } = useCart();

  if (cartItems.length === 0) {
    return (
      <>
        <h2>Shopping Cart</h2>
        <p>Your cart is empty.</p>
        <Link to="/catalog" className="btn-primary">Browse Catalog</Link>
      </>
    );
  }

  return (
    <>
      <h2>Shopping Cart</h2>
      <div className="cart-container">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} style={{width: '100px'}} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>${item.price.toLocaleString()}/day</p>
            </div>
            <div className="cart-item-quantity">
              <label>Quantity:</label>
              <input 
                type="number" 
                min="1" 
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              />
            </div>
            <div className="cart-item-total">
              <p><strong>Subtotal:</strong> ${(item.price * item.quantity).toLocaleString()}</p>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="btn-danger">
              Remove
            </button>
          </div>
        ))}
        <div className="cart-summary">
          <h3>Total: ${total.toLocaleString()}</h3>
          <Link to="/payment-delivery" className="btn-primary">Proceed to Checkout</Link>
        </div>
      </div>
    </>
  );
}
