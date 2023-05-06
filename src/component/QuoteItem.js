import React from "react";
import "./QuoteItem.css";

const Quote = (props) => {

  return (
    <div className="quote"> 
      {props.items.map()}
      <div className="quote-body">
        <h3>This is the quote that need to be passed here</h3>
      </div>  
      <div className="quote-body">
        <h3>This is the quote that need to be passed here</h3>
      </div>  
      <div className="quote-body">
        <h3>This is the quote that need to be passed here</h3>
      </div>  
      <div className="quote-body">
        <h3>This is the quote that need to be passed here</h3>
      </div>  
      <div className="quote-body">
        <h3>This is the quote that need to be passed here</h3>
      </div>  
      <div className="quote-body">
        <h3>This is the quote that need to be passed here</h3>
      </div>  
    </div>
  );
};

export default Quote;
