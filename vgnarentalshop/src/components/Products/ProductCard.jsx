import { useCart } from '../../hooks/useCart';
import '../../styles/layout.css';

export function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">${product.price.toLocaleString()}/day</p>
      <p className="description">{product.description}</p>
      {product.specs && <p className="specs">{product.specs}</p>}
      <button onClick={handleAddToCart} className="btn-primary">
        Add to Cart
      </button>
    </div>
  );
}
