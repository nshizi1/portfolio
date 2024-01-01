import React from 'react';
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <main>
      <section id="hero">
        <div className="contents">
          <div className="intro">
            <div className="texts">
              <h1 data-aos="fade-up" data-aos-duration="1000">Wilson Nshizirungu</h1>
              <div className="desc">
                <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"><Typewriter options={{ autoStart: true,loop: true,delay: 100,strings: [" Fullstack website developer", "Graphic Designer", "Student", "Collaborator & Contributor", "Freelancer"]}} /></h3>
                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">I am a software developer situated in Rwanda. Over the span of my short professional career, I have acquired considerable expertise and made substantial strides in enhancing my skill set.</p>
              </div>
              <a href="#contact" className="btn-get-started">Say hello</a>
            </div>
            <div className="image">
              <img src={require("../images/hero.jpg")} alt="Developer's profile" />
            </div>
          </div>
          <div className="social">
            <a target='_blank' rel='noreferrer' href="https://twitter.com/nshiziboi"><i class="fa-brands fa-twitter"></i></a>
            <a target='_blank' rel='noreferrer' href="https://www.instagram.com/nshizi_boi/"><i class="fa-brands fa-instagram"></i></a>
            <a target='_blank' rel='noreferrer' href="https://github.com/nshizi1"><i class="fa-brands fa-github"></i></a>
            <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/nshizirungu-wilson-7365a9268/"><i class="fa-brands fa-linkedin"></i></a>
          </div>
          <div className="scroll">
            <a href="#about"><i class="fa-solid fa-arrow-down"></i></a>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="page">
          <h3>01</h3>
          <div className="line"></div>
        </div>
        <div className="contents">
          <div className="image">
            <img src={require("../images/hero.jpg")} alt="" />
          </div>
          <div className="texts">
            <div className="title">
              <p>Discover</p>
              <h2>About Me</h2>
              <div className="line"></div>
            </div>
            <div className="info">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eius, velit quisquam minima et vel suscipit error reprehenderit mollitia laboriosam facilis iste ea illum veniam neque libero amet molestias recusandae.</p>
              <div className="cards">
                <div className="card">
                  <i class="fa-solid fa-gear"></i>
                  <h2>Experience</h2>
                  <p>3+ years</p>
                </div>
                <div className="card">
                  <i class="fa-solid fa-rectangle-list"></i>
                  <h2>Completed</h2>
                  <p>10+ years</p>
                </div>
                <div className="card">
                  <i class="fa-solid fa-headset"></i>
                  <h2>Support</h2>
                  <p>Online 24/7</p>
                </div>
              </div>
              <a href="cv.pdf" download={true}><button>Download CV</button></a>
            </div>
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="page">
          <h3>02</h3>
          <div className="line"></div>
        </div>
        <div className="contents">
          <div className="title">
            <p>Knowledge</p>
            <h2>My Education</h2>
            <div className="line"></div>
          </div>
          <div className="cards">
            <div className="card">
              <div className="shape"></div>
              <p className="time">20211-2017</p>
              <p className="school">Primary school</p>
              <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quis, a iure molestiae ea beatae voluptatem aspernatur enim adipisci, excepturi ipsum autem exercitationem quos rerum?</p>
            </div>
            <div className="card">
              <div className="shape"></div>
              <p className="time">20211-2017</p>
              <p className="school">Primary school</p>
              <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quis, a iure molestiae ea beatae voluptatem aspernatur enim adipisci, excepturi ipsum autem exercitationem quos rerum?</p>
            </div>
            <div className="card">
              <div className="shape"></div>
              <p className="time">20211-2017</p>
              <p className="school">Primary school</p>
              <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quis, a iure molestiae ea beatae voluptatem aspernatur enim adipisci, excepturi ipsum autem exercitationem quos rerum?</p>
            </div>
            <div className="card">
              <div className="shape"></div>
              <p className="time">20211-2017</p>
              <p className="school">Primary school</p>
              <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quis, a iure molestiae ea beatae voluptatem aspernatur enim adipisci, excepturi ipsum autem exercitationem quos rerum?</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
