import React, {useRef} from 'react'

function Header() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    
  }
  return (
    <header>
      <div className="logo">
        <img src={require("../images/logo.png")} alt="Developer's Logo" />
      </div>
      <nav ref={navRef}>
        <a onClick={showNavbar} href="#home"><i class="fa-solid fa-house"></i> Home</a>
        <a onClick={showNavbar} href="#about"><i class="fa-solid fa-user"></i> About</a>
        <a onClick={showNavbar} href="#skills"><i class="fa-solid fa-laptop"></i> Skills</a>
        <a onClick={showNavbar} href="#resume"><i class="fa-solid fa-file"></i> Resume</a>
        <a onClick={showNavbar} href="#services"><i class="fa-solid fa-server"></i> Services</a>
        <a onClick={showNavbar} href="#portfolio"><i class="fa-solid fa-book"></i> Portfolio</a>
        <a onClick={showNavbar} href="#contact"><i class="fa-solid fa-envelope"></i> Contact</a>
        <i onClick={showNavbar} class="fa-solid fa-xmark"></i>
      </nav>
      <i onClick={showNavbar} class="fa-solid fa-bars"></i>
    </header>
  )
}

export default Header;