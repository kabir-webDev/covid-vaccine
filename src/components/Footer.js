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
            <h2>CoVax || 2021</h2>
            <p>Copyright &copy; Government</p>
          </div>
          <div>
            <h3>
              Let's live and let people live <br /> Taking Vaccine
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
