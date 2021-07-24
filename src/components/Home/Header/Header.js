import React from "react";
import banner from "../../../image/hero-img.png";
import Navbar from "../../Shared/Navbar/Navbar";
import "./Header.css";
import Fade from "react-reveal/Fade";

const Header = () => {
  return (
    <section className="header">
      <Navbar />
      <div className="row w-100">
        <div className="row col-md-11 mx-auto ">
          <div className="col-md-7 titleArea">
            <Fade duration={2000} left>
              <p className="miniTitle">TO BE SAFE</p>
              <h1 className="headerTitle">
                WE HAVE TO BE{" "}
                <span className="headerHighlight">VACCINATED</span>
              </h1>
              <p className="headerContent">
                Equitable access to safe and effective vaccines is critical to
                ending the COVID-19 pandemic, so it is hugely encouraging to see
                so many vaccines proving and going into development. WHO is
                working tirelessly with partners to develop, manufacture and
                deploy safe and effective vaccines.
              </p>
              <a href="#services"></a>
            </Fade>
          </div>
          <Fade duration={2000} right>
            <div className="col-md-5 img">
              {" "}
              <br />
              <div className="noora__chora">
                <img
                  src="https://www.internationaldisabilityalliance.org/sites/default/files/custom/covid-19-vaccine.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Header;
