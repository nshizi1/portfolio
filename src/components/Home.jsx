import React from 'react';
import Typewriter from 'typewriter-effect';
import data from '../data/progress.json';
import skills from '../data/expertise.json';
import work from '../data/services.json';
import review from '../data/testimonials.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
function Home() {

  const progresses = data.progress;
  const expertize = skills.expertise;
  const services = work.services;
  const testimonials = review.testimonials;
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
              <img src={require("../images/imageOne.jpg")} alt="Developer's profile" />
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
            <img src={require("../images/imageOne.jpg")} alt="" />
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
          <div className="title">
            <p>Export</p>
            <h2>My Skills</h2>
            <div className="line"></div>
          </div>
          <div className="progresses">
            {progresses.map(progress => (
            <div className="progress" key={progress.id}>
              <div className="text">
                <p>{progress.name}</p>
                <p>{progress.width}%</p>
              </div>
              <div className="max">
                <div className="min" style={{width: `${progress.width}%`}}></div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
      <section id="resume">
        <div className="page">
          <h3>03</h3>
          <div className="line"></div>
        </div>
        <div className="contents">
          <div className="title">
            <p>Resume</p>
            <h2>My Expertise</h2>
            <div className="line"></div>
          </div>
          <div className="info">
            <div className="intro">
              <p>I aim to take on the roles of a software developer, UI/UX designer. I'm enthusiastic about exploring fresh opportunities and continually expanding my skill set. You can access my resume <a href="facebook.com">here</a> for further details.</p>
            </div>
            <div className="expertize">
              {expertize.map(expertise => (
                <div className="expertise" key={expertise.id}>
                  <p className="time">{expertise.date}</p>
                  <div className="lines">
                    <div className="circle"></div>
                    <div className="line"></div>
                    <div className="circle"></div>
                  </div>
                  <div className="desc">
                    <h3 className="company">{expertise.company}</h3>
                    <p className="name">{expertise.name}</p>
                    <ul>
                      <li><i class="fa-solid fa-arrow-right"></i> {expertise.one}</li>
                      <li><i class="fa-solid fa-arrow-right"></i> {expertise.two}</li>
                      <li><i class="fa-solid fa-arrow-right"></i> {expertise.three}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="services">
        <div className="page">
          <h3>04</h3>
          <div className="line"></div>
        </div>
        <div className="contents">
          <div className="title">
            <p>What I do</p>
            <h2>My Services</h2>
            <div className="line"></div>
          </div>
          <div className="cards">
            {services.map(services => (
              <div className="card" key={services.id}>
                <div className="icon">
                  <div className="circle">
                    <i className={services.icon}></i>
                  </div>
                </div>
                <div className="desc">
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="testimonial">
        <div className="page">
          <h3>05</h3>
          <div className="line"></div>
        </div>
        <div className="contents">
          <div className="title">
            <p>Reviews</p>
            <h2>Testimonials</h2>
            <div className="line"></div>
          </div>
          <Swiper className='cards' spaceBetween={10} slidesPerView={1} loop={true} breakpoints={{ 768:{ slidesPerView: 2, spaceBetween: 20, }, 1024:{ slidesPerView: 3, spaceBetween: 30, }, }} autoplay={{ delay: 5000, disableOnInteraction: false, }} pagination={{ clickable: true }} scrollbar={{ draggable: true }} modules={[Autoplay]} >
            {testimonials.map(testimonials => (
              <SwiperSlide className='card'>
                <img src={require(`../images/testimonials/${testimonials.image}`)} alt="" />
                <h3>{testimonials.names}</h3>
                <h4>{testimonials.title}</h4>
                <p>{testimonials.testimonial}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </main>
  )
}

export default Home
