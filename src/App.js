import React from "react";
import Quote from "./component/QuoteItem";
import SavedQuote from "./component/QuoteSaved";

const addQuotehandler = quote => { 
  console.log('In App.js');
  console.log(quote)
};
function App() {
  return ( 
    <div>
      <SavedQuote onAddQuote={addQuotehandler} />
      <Quote items={quotes} />
    </div>
  );
}

export default App;
