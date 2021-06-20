import React from "react";
import "./css/style.css";
import "./css/utilities.css";

function Footer() {
  return (
    <div>
      {/* Footer  */}
      <footer className="footer bg-dark">
        <div className="container grid grid-3">
          <div>
            <h2>Zeroku || 2021</h2>
            <p>Copyright &copy; Kabir Hasan</p>
          </div>
          <div>
            <h3>
              Lets make the world easier <br /> With Coding
            </h3>
          </div>
          <div className="social">
            <a href="https://github.com/kabir-webDev" target="_blank">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://facebook.com/sir.kabir.v3" target="_blank">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://www.instagram.com/kabindronath/" target="_blank">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/kabirhasan/" target="_blank">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
