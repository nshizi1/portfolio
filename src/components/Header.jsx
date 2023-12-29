import React from 'react'

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={require("../images/logo.png")} alt="Developer's Logo" />
      </div>
      <nav>
        <a href="#home"><i class="fa-solid fa-house"></i> Home</a>
        <a href="#home"><i class="fa-solid fa-house"></i> About</a>
        <a href="#home"><i class="fa-solid fa-house"></i> Skills</a>
        <a href="#home"><i class="fa-solid fa-house"></i> Resume</a>
        <a href="#home"><i class="fa-solid fa-house"></i> Services</a>
        <a href="#home"><i class="fa-solid fa-house"></i> Portfolio</a>
        <a href="#home"><i class="fa-solid fa-house"></i> Contact</a>
        <i class="fa-solid fa-xmark"></i>
      </nav>
      <i class="fa-solid fa-bars"></i>
    </header>
  )
}

export default Header;