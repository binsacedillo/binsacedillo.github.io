import { useState, useEffect } from 'react';
import { ProductCard } from './ProductCard';
import { productService } from '../../services/productService';
import "../../styles/layout.css";

export function ProductList({ featured = false }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = featured ? productService.getFeaturedProducts() : productService.getProducts();
    setProducts(data);
  }, [featured]);

  return (
    <section className="products">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
