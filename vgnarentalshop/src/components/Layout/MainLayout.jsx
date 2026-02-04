import { Header } from './Header';
import { Footer } from './Footer';
import { Sidebar } from '../Navigation/Sidebar';

export function MainLayout({ children }) {
  return (
    <div className="main-layout-wrapper">
      <Header />
      <div className="container">
        <Sidebar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
