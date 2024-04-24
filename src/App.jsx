import React, { useEffect, useState } from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();

    window.addEventListener('load', () => {
      setLoading(false);
    });
  }, []);

  return (
    <BrowserRouter>
      {loading && (
        <div id="loading-screen" style={{ position: 'fixed', color: '#5c6170', zIndex: 9999, top: 0, left: 0, width: '100%', height: '100dvh', overflow: 'hidden', background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'opacity 0.5s ease' }}>
          <h1 style={{ color: '#5c6170' }}>Loading...</h1>
        </div>
      )}
      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
