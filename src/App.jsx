import React, {useEffect} from 'react';
import './styles/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(()=> {
    AOS.init();
  }, []);
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
