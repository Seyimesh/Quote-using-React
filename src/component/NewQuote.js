import React, { useState } from "react";
import "./NewQuote.css";

const NewQuote = (props) => {
  const [enteredQuote, setEnteredQuote] = useState("");

  const quoteHandler = (event) => {
    setEnteredQuote(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const quoteData = { enteredQuote };

    props.onSaveQuoteData(quoteData);
    setEnteredQuote("");
  };

  return (
    <div className="Quote">
      <form onSubmit={submitHandler}>
        <div>
          <div>
            <h3>What Quote is on your mind?</h3>
          </div>
          <div className="Quote-input">
            <input value={enteredQuote} onChange={quoteHandler} className="input" type="text" />
            <button className="search" type="submit">
              Create a new quote
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewQuote;
