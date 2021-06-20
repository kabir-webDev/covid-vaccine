import React from "react";
import { Link } from "react-router-dom";
import "./css/style.css";
import "./css/utilities.css";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="container flex">
          <h1 className="logo" style={{ fontWeight: "bold" }}>
            CoVax-BD
          </h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/features">Registration</Link>
              </li>
              <li>
                <Link to="/docs">FAQ's</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
