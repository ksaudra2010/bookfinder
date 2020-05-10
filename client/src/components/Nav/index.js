import React from "react";
import { Link, } from "react-router-dom";

function Nav() {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        Google Books List
      </Link>
      <Link className="nav-link text-info" to="/">Search</Link>
      <Link className="nav-link text-info" to="/Books">Saved</Link>
    </nav>

 </div> );
}

export default Nav;
