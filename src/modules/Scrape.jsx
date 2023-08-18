import React from 'react'
import {Link} from "react-router-dom"
import { Row, Col } from 'react-bootstrap'
import './Page1.css'
export default function Scrape() {
  return (
    <section className="content-card home" id="welcome-section">
        {/* <h1>Coming soon</h1> */}
        <h1>Get Results Accourding New Data</h1>
        <h2> Get the latest data by our scraping</h2>
        <p>
        Discover your ideal vehicle effortlessly with 'Unveil Your Ride.' By harnessing cutting-edge data scraping technology, we aggregate the best selections from <span style={{fontWeight:'bold'}}>OLX</span> and <span style={{fontWeight:'bold'}}>PakWheels</span>, presenting you with a seamless and informed car shopping experience. Find detailed listings, filter your preferences, and make confident decisions – all in one convenient platform.
        </p>
        <div class="button-container">
        <br />
        <Link to="/Scrape/olx">
  <button class="specific-button" ><b>Use OLX</b></button>
  </Link >
  <Link to="/Scrape/pw" style={{paddingLeft:'20px'}}>
  <button class="specific-button" ><b>Use PakWheels</b></button>
  </Link>
    </div>
    </section>
  )
}
