import React from 'react'
import './LP.css'
import MatrixRain from './Background/BackGround'
export default function LandingPage() {
  return (
    <div>
      <div>

  <nav id="navbar" className="navbar"><a href="#" /></nav>
  <div className="container">
    {/*=============== NAVIGATION MENU ===============*/}
    <div className="menu">
      <a href="#welcome-section" className="menu-icon fas fa-home" />
      <a href="#about" className="menu-icon fas fa-user" />
      <a href="#projects" className="menu-icon fas fa-code" />
      <a href="#experience" className="menu-icon fas fa-briefcase" />
      <a href="#contact" className="menu-icon fas fa-envelope" />
    </div>
    {/*=============== MAIN "WINDOW" ===============*/}
    <div className="portfolio">
      {/*=============== HEADER SECTION ===============*/}
      <section className="header">
        <img className="header-img" src="https://images.pexels.com/photos/2389349/pexels-photo-2389349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt />
        <h1>Ehsan Javed</h1>
        <h2>Data Scientist & Full Stack Developer</h2>
        <div className="socials">
          <a href="https://www.linkedin.com/in/ehsan-javed-352903282/" target="_blank" className="fab fa-linkedin-in" id="profile-link" />
          <a href="#" target="_blank" className="fab fa-github" />
          <a href="#" target="_blank" className="fab fa-codepen" />
        </div>
        <a href className="cta">DownIoad CV</a>
      </section>
      {/*=============== CONTENT SECTION ===============*/}
      <div className="content">
        {/*=============== HOME ===============*/}
        <section className="content-card home" id="welcome-section">
          <h1>Hello, I am Ehsan Javed</h1>
        </section>
        {/*=============== ABOUT ME ===============*/}
        <section className="content-card about" id="about">
          <h1>About me</h1>
          <div className="about-item about-me">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
              non dolore facere reiciendis iusto nemo tempore laboriosam
              laborum fugit dolorum totam incidunt tempora laudantium
              obcaecati natus sit, aspernatur consectetur! Voluptates?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              consectetur quos fugiat fugit! Officiis, temporibus.
            </p>
          </div>
          <div className="col-2">
            <div className="about-item skills">
              <h1>Skills</h1>
              <span className="skill">HTML</span>
              <span className="skill">CSS</span>
              <span className="skill">JavaScript</span>
              <span className="skill">Node.js</span>
              <span className="skill">React</span>
              <span className="skill">SQL</span>
              <span className="skill">Git</span>
              <span className="skill">API</span>
              <span className="skill">Unix/Linux</span>
              <span className="skill">Jira</span>
              <span className="skill">Confluence</span>
              <span className="skill">Figma</span>
            </div>
            <div className="about-item languages">
              <h1>Languages</h1>
              <div className="language">
                <p>polish</p>
                <span className="bar"><span className="polish" /></span>
              </div>
              <div className="language">
                <p>english</p>
                <span className="bar"><span className="english" /></span>
              </div>
              <div className="language">
                <p>french</p>
                <span className="bar"><span className="french" /></span>
              </div>
            </div>
          </div>
        </section>
        {/*=============== PROJECTS ===============*/}
        <section className="content-card projects" id="projects">
          <h1>Projects</h1>
          <div className="col-2 project-list">
            <div className="project-tile">
              <img src="https://shots.codepen.io/nietoperq/pen/BaPJqGW-512.webp?version=1674304822" alt />
              <div className="overlay">
                <div className="project-description">
                  <h3>Project 1</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nisi aperiam voluptate accusamus velit omnis.
                  </p>
                </div>
              </div>
            </div>
            <div className="project-tile">
              <img src="https://shots.codepen.io/nietoperq/pen/GRBOjyV-512.webp?version=1674084446" alt />
              <div className="overlay">
                <div className="project-description">
                  <h3>Project 2</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nisi aperiam voluptate accusamus velit omnis.
                  </p>
                </div>
              </div>
            </div>
            <div className="project-tile">
              <img src="https://shots.codepen.io/nietoperq/pen/dyjWxgX-512.webp?version=1673554073" alt />
              <div className="overlay">
                <div className="project-description">
                  <h3>Project 3</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nisi aperiam voluptate accusamus velit omnis.
                  </p>
                </div>
              </div>
            </div>
            <div className="project-tile">
              <img src="https://shots.codepen.io/nietoperq/pen/vYagdwo-512.webp?version=1673549480" alt />
              <div className="overlay">
                <div className="project-description">
                  <h3>Project 4</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nisi aperiam voluptate accusamus velit omnis.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a href="https://github.com/nietoperq">see more...</a>
        </section>
        {/*=============== EXPERIENCE ===============*/}
        <section className="content-card experience" id="experience">
          <h1>Experience</h1>
          <div className="timeline">
            <div className="timeline-items">
              <div className="timeline-item">
                <div className="timeline-date">2022 - now</div>
                <div className="timeline-content">
                  <h3>timeline item 1</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ab iusto accusantium nostrum eligendi debitis quisquam.
                    Corporis at voluptatem culpa officia.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2015 - 2022</div>
                <div className="timeline-content">
                  <h3>timeline item 2</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ab iusto accusantium nostrum eligendi debitis quisquam.
                    Corporis at voluptatem culpa officia.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-date">2014 - 2015</div>
                <div className="timeline-content">
                  <h3>timeline item 3</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ab iusto accusantium nostrum eligendi debitis quisquam.
                    Corporis at voluptatem culpa officia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*=============== CONTACT ===============*/}
        <section className="content-card contact" id="contact">
          <h1>Contact</h1>
          <form className="form" id="form" action="https://www.freecodecamp.com/email-submit">
            <div className="input-box">
              <input type="text" className="text-input" name="name" placeholder="Name" />
            </div>
            <div className="input-box">
              <input type="email" className="text-input" name="email" id="email" placeholder="Email" />
            </div>
            <div className="input-box">
              <input type="subject" className="text-input" name="subject" id="subject" placeholder="Subject" />
            </div>
            <div className="input-box">
              <textarea name="text" className="message" placeholder="Message..." defaultValue={""} />
            </div>
            <div className="input-box">
              <input type="submit" className="submit-btn" id="submit" defaultValue="submit" />
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
