import React from 'react'

function Home() {
  return (
    <main>
      <section id="hero">
        <div className="contents">
          <div className="intro">
            <div className="texts">
              <h1>Wilson Nshizirungu</h1>
              <div className="desc">
                <h3>Fullstack Website developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsum neque illum, fuga sint harum culpa id earum expedita eveniet est, a deleniti quibusdam asperiores reiciendis minima itaque fugiat quod.</p>
              </div>
              <a href="#about" className="btn-get-started">Say hello</a>
            </div>
            <div className="image">
              <img src={require("../images/hero.jpg")} alt="Developer's profile" />
            </div>
          </div>
          <div className="social">
            <a href="lorem"><i class="fa-brands fa-twitter"></i></a>
            <a href="lorem"><i class="fa-brands fa-instagram"></i></a>
            <a href="lorem"><i class="fa-brands fa-github"></i></a>
            <a href="lorem"><i class="fa-brands fa-linkedin"></i></a>
          </div>
          <div className="scroll">
            <a href="#about"><i class="fa-solid fa-arrow-down"></i></a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
