import React from 'react'
import './AboutMe.css'
import me1 from './Images/ME.png'
import long from './long'
export default function AboutMe2() { 
  return (
    <div className='about_me'>
   <div class="person">
      <div class="container">
        <div class="container-inner">
          <img
            class="circle"
            src={long}
          />
          <img
            class="img img1"src={me1}/>
        </div>
      </div>
      <div class="name">Ehsan Javed</div>
      <div class="title">Data Scientist & Full Stack Developer</div>
      <div style={{padding : '20px'}}>
      <p >
            Hi there! I'm Ehsan, a passionate MERN stack developer and Data Scientist with a love for building
            innovative solutions. With a strong foundation in web development and a knack for exploring data insights,
            I bring a unique blend of skills to the table.
          </p>
          <p>
            My journey began in the world of web development, where I honed my expertise in the MERN (MongoDB, Express,
            React, Node.js) stack. Crafting dynamic and user-friendly applications is what I do best. However, my
            curiosity led me to the world of data science, where I enjoy diving into datasets, extracting meaningful
            patterns, and creating predictive models.
          </p>
          <p>
            When I'm not coding or analyzing data, you'll find me exploring the latest tech trends, contributing to
            open-source projects, and sharing my knowledge through workshops and talks. I believe in the power of
            technology to shape the future, and I'm excited to be a part of it.
          </p>
          </div>
    </div>
    </div>
  )
}
