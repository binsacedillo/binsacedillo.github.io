import { ProductList } from '../components/Products/ProductList';

export default function Home() {
  return (
    <>
      <h2>Featured Aircraft</h2>
      <ProductList featured={true} />
    </>
  );
}
