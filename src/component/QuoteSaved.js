import React from "react";
import "./QuoteSaved.css";
import NewQuote from "./NewQuote";


const SavedQuote = (props) => {
  const saveQuoteData = (enteredQuoteData) => { 
    const quoteData = {
      ...enteredQuoteData,
      id: Math.random().toString()
    }
    props.onAddQuote(quoteData);
  };
  return (
    <div className="btn-bodys">
      <NewQuote onSaveQuoteData={saveQuoteData} />
    </div>
  );
};

export default SavedQuote;
