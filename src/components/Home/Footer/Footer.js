import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import FooterCol from "./FooterCol";
import "./Footer.css";
import {
  usefulLink,
  ourServices,
  otherLinks,
  footerInfo,
} from "../../../Data/FooterData";
import FooterInfo from "./FooterInfo";
import { Link } from "react-router-dom";
import { scrollUP } from "../../Shared/ScrollTop/ScrollTop";

const Footer = () => {
  return (
    <section class="row footer">
      <div className="pre__footer"></div>
      <p className="copyRight">
        Copyright &copy; 2021 <span className="fHighlight">Co-Vax BD</span>. All
        rights reserved.
      </p>
    </section>
  );
};

export default Footer;
