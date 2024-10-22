// imported react and reactdom from nodemodule folder
import React from 'react';
import ReactDOM from 'react-dom/client';
const heading = React.createElement(
    "h1",
    {
      id: "title",
    },
    "heading"
  );
  
    
   // create root using createRoot
   const root = ReactDOM.createRoot(document.getElementById("root"));
   // passing react element inside root
   root.render(heading);