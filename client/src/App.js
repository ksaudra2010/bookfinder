import React from "react";
import Books from "./pages/Books";
import Search from "./pages/search";
import Nav from "./components/Nav";
import {BrowserRouter as Router, Route, Redirect } from "react-router-dom";


function App() {
  return (
     <Router>
       <div>
      <Nav />
     
        <Route exact path = "/Books" component = { Books }/> 
        <Route exact path = "/" component = { Search }/> 
        {/* <Redirect exact from="/" to="Search"/> */}
    </div> 
    </Router>
  );
}

export default App;
