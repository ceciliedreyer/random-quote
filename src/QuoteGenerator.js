import React, { useState } from "react";
import axios from "axios";
import "./QuoteGenerator.css";
import Quote from "./Quote";

export default function QuoteGenerator() {
  return (
    <div className="quote-generator">
      <div className="wrapper">
        <h1 className="quote">
          <Quote />
        </h1>
        <p className="author">
          <em>- Cecilie Dreyer</em>
        </p>
        <div className="buttons">
          <a className="social-share-button button">
            <i class="bi bi-twitter"></i>
          </a>
          <button className="social-share-button button">F</button>
          <button className="new-quote-button button">new quote</button>
        </div>
      </div>
      <footer>
        by Cecilie Lyng. <a>open-sourced on GitHub</a>.
      </footer>
    </div>
  );
}
