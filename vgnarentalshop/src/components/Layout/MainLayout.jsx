import { Header } from './Header';
import { Footer } from './Footer';
import { Sidebar } from '../Navigation/Sidebar';

export function MainLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container">
        <Sidebar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
