// import React from 'react'
import React, { useEffect, useRef } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './LP.css'
import me1 from './Images/ME.png'
import Content from './Content';
import long from './long';
export default function LandingPage() {


  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
    const columns = canvas.width / 10;
    const fontSize = 10;
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, .1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#0f0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    }

    const interval = setInterval(draw, 33);

    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <div>
      {/* <MatrixRain />  */}
      <canvas ref={canvasRef}/>

    <div className='content-overlay'>
      <div className='container'>
    <div className='LandingPage'>
  <nav id="navbar" className="navbar"><a href="#" /></nav>
  <div className="container">
    {/*=============== NAVIGATION MENU ===============*/}
    <div className="menu">
      <Link to="/" className="menu-icon fas fa-home" />
      <Link to="/about" className="menu-icon fas fa-user" />
      <Link to="/predictionAbout" className="menu-icon fas fa-code" />
      <Link to="/charts" className="menu-icon fas fa-chart-line" />
      <Link to="/Scrape" className="menu-icon fas fa-broom" />
    </div>
    {/*=============== MAIN "WINDOW" ===============*/}
    <div className="portfolio">
      {/*=============== HEADER SECTION ===============*/}
      <section className="header">
        <div className='about_me'>
        
      <div className="container">
        <div className="container-inner">
          <img
            className="circle"
            src={long}
          />
          <img
            className="img img1"src={me1}/>
        </div>
      </div>

        </div>
        <h1>Ehsan Javed</h1>
        <h2>Data Scientist & Full Stack Developer</h2>
        <div className="socials">
          <a href="https://www.linkedin.com/in/ehsan-javed-352903282/" target="_blank" className="fab fa-linkedin-in" id="profile-link" />
          <a href="https://github.com/EhsanJaved" target="_blank" className="fab fa-github" />
          <a href="#" target="_blank" className="fab fa-codepen" />
        </div>
        <a className="cta">DownIoad CV</a>
      </section>
      {/*=============== CONTENT SECTION ===============*/}
      <div className="content">
        <Outlet/>
       {/* <Content/> */}
      </div>
    </div>
  </div>
</div>
  </div>
  </div>
    </div>
  )
}
