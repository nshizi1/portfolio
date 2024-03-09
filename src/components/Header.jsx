import React, { useRef, useEffect, useState } from 'react';

const headerStyles = {
  position: 'fixed',
  width: '100%',
  display: 'flex',
  top: 0,
  justifyContent: 'space-between',
  gap: '3rem',
  backgroundColor: 'transparent',
  padding: '15px 10%',
  alignItems: 'center',
  transition: '1000ms ease',
  zIndex: 100,
  // Sticky styles
  '&.sticky': {
    backgroundColor: 'var(--platinum)',
    boxShadow: '0 0 20px 5px var(--gray)',
  },
};

const imgStyles = {
  width: '50px', // Adjust this value to your desired size
};

const navStyles = {
  display: 'flex',
  gap: '2rem',
  flexWrap: 'wrap',
};



const linkStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '.3rem',
  textDecoration: 'none',
  fontSize: '15px',
  color: 'var(--gray)',
  transition: '300ms ease',
  textTransform: 'capitalize',
  fontWeight: 600,
  position: 'relative',
};

const faStyles = {
  fontSize: '35px',
  color: 'var(--gray)',
  visibility: 'hidden',
  opacity: 0,
  display: 'none',
};


function Header() {
  const navRef = useRef();
  const [isSticky, setSticky] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 1) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header style={isSticky ? { ...headerStyles, ...headerStyles['&.sticky'] } : headerStyles}>
      <div className="logo">
        <img src={require("../images/logo.png")}  style={imgStyles} alt="Developer's Logo" />
      </div>
      <nav ref={navRef} style={navStyles}>
        <a onClick={showNavbar} style={linkStyles} href="#hero"><i className="fa-solid fa-house"></i> Home </a>
        <a onClick={showNavbar} style={linkStyles} href="#about"><i className="fa-solid fa-user"></i> About </a>
        <a onClick={showNavbar} style={linkStyles} href="#skills"><i className="fa-solid fa-laptop"></i> Skills </a>
        <a onClick={showNavbar} style={linkStyles} href="#resume"><i className="fa-solid fa-file"></i> Resume </a>
        <a onClick={showNavbar} style={linkStyles} href="#services"><i className="fa-solid fa-server"></i> Services </a>
        <a onClick={showNavbar} style={linkStyles} href="#portfolio"><i className="fa-solid fa-book"></i> Portfolio </a>
        <a onClick={showNavbar} style={linkStyles} href="#contact"><i className="fa-solid fa-envelope"></i> Contact </a>
        <i onClick={showNavbar} style={faStyles} className="fa-solid fa-xmark"></i>
      </nav>
      <i onClick={showNavbar} style={faStyles} className="fa-solid fa-bars"></i>
    </header>
  )
}

export default Header;