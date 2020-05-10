import React from "react";
import Books from "./pages/Books";
import Search from "./pages/search";
import Nav from "./components/Nav";
import {BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
     <Router>
       <div>
      <Nav />
     
        <Route path = "/Books" component = { Books }/> 
        <Route path = "/Search" component = { Search }/> 
        <Redirect from="*" to="/Search"/>
    </div> 
    </Router>
  );
}

export default App;
