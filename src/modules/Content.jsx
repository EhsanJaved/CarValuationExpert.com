import React from "react";
import { Link } from 'react-router-dom';
import "./LP.css";
import './Page1.css'
export default function Content() {
  return (
    <div>
      <section className="content-card home" id="welcome-section">
        <h2>
          <h1>Discover Your Dream Car's Worth with Car Valuation Expert</h1>
          <br />
          Curious about the value of your dream car? Our Car Valuation Expert tool
          simplifies the guessing game for you. With just a click, you can
          access an estimated price range based on essential factors like make,
          model, year, and more. Say goodbye to uncertainty and hello to
          informed decisions! </h2>
          <div class="button-container">
            <br />
            <Link to="/prediction">
  <button class="specific-button"><b>Click to Get Your Prediction!</b></button>
  </Link>
</div>
        
      </section>
         </div>
  );
}
