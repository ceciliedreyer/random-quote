import React, { useState } from "react";
import axios from "axios";
import "./QuoteGenerator.css";

export default function QuoteGenerator() {
  return (
    <div className="quote-generator">
      <div className="wrapper">
        <h1 className="quote">"quote"</h1>
        <p className="author">
          <em>- Cecilie Dreyer</em>
        </p>
        <div className="buttons">
          <button className="social-share-button">T</button>
          <button className="social-share-button">F</button>
          <button className="new-quote-button">new quote</button>
        </div>
      </div>
      <footer>
        by Cecilie Lyng. <a>open-sourced on GitHub</a>.
      </footer>
    </div>
  );
}
