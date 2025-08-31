
import './App.css';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import ProductCard from './components/ProductCard';
import Contact from './components/Contact';
import { products } from './data/products';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <section id="home">
          <h1>我的鉤織作品集</h1>
        </section>
        
        <AboutMe />
        
        <section id="products" className="product-list">
          <h2>作品集</h2>
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        
        <Contact />
      </main>
    </>
  );
}

export default App;
