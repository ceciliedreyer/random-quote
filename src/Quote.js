import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "./Quote.css";

export default function Quote() {
  return (
    <div className="quote">
      <h1>
        <strong className="quote-icon">
          <FontAwesomeIcon icon={faQuoteLeft} />
        </strong>{" "}
        <span className="quote-copy">this is the new quote</span>
      </h1>
    </div>
  );
}
