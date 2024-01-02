import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="text">
        <p>&copy; {currentYear} <span>Wilson</span>. All rights reserved</p>
        <p>Designed & developed by <a href="https://www.linkedin.com/in/nshizirungu-wilson-7365a9268/">wilson</a></p>
      </div>
      <div className="social">
        <a target='_blank' rel='noreferrer' href="https://twitter.com/nshiziboi"><i class="fa-brands fa-twitter"></i></a>
        <a target='_blank' rel='noreferrer' href="https://www.instagram.com/nshizi_boi/"><i class="fa-brands fa-instagram"></i></a>
        <a target='_blank' rel='noreferrer' href="https://github.com/nshizi1"><i class="fa-brands fa-github"></i></a>
        <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/nshizirungu-wilson-7365a9268/"><i class="fa-brands fa-linkedin"></i></a>
      </div>
    </footer>
  )
}

export default Footer
