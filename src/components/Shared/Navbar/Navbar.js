import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuffer } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import PopOver from "../PopOver/PopOver";

const NavBar = () => {
  const { user } = useContext(UserContext);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  const scrollTop = () => window["scrollTo"]({ top: 0, behavior: "smooth" });
  return (
    <Navbar
      className={`navbar navbar-expand-lg navbar-light ${
        isSticky ? "navStyle" : "navDefault"
      }`}
      expand="lg"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          exact
          to="/home"
          onClick={scrollTop}
          className="navBrn"
        >
          <FontAwesomeIcon icon={faBuffer} className="brnIcon" /> Co-
          <span className="navHighlight">Vax</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mainNav" activeKey="/home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                exact
                to="/home"
                className="nav-link"
                onClick={() =>
                  window["scrollTo"]({ top: 0, behavior: "smooth" })
                }
              >
                Home
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link href="#services" className="nav-link">
                Services
              </Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
              <Nav.Link href="#updates" className="nav-link">
                Updates
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#process" className="nav-link">
                Process
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#registration" className="nav-link">
                Registration
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#faq" className="nav-link">
                FAQ
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/dashboard/profile" className="nav-link">
                Dashboard
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              {user.email ? (
                <PopOver />
              ) : (
                <Link to="/login">
                  <button className="loginBtn">Login</button>
                </Link>
              )}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
