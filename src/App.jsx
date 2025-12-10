import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="app-container">
      {loading && <Preloader onLoaded={() => setLoading(false)} />}
      <div className={`main-content ${loading ? 'hidden' : ''}`}>
        <Header />
        <main>
          <Hero />
          <Products />
          <Features />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
