import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./LoginModal.css";
import "firebase/auth";
import log from "../../../image/log.svg";
import desk from "../../../image/register.svg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { UserContext } from "../../../App";
import toast from "react-hot-toast";
import swal from "sweetalert";
import { handleSignOut } from "./LoginManager";

const Form = () => {
  const [isSignUp, setSignUp] = useState(false);
  const { setUser } = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleResponse = (res) => {
    setUser(res);
    if (!res.error) {
      toast.success("Successfully Logged In!");
      history.replace(from);
    }
    if (res.email === "test@admin.com") {
      swal({
        title: "Warning!",
        text: "You have entered the admin panel for testing. Please don't abuse this facility!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((ok) => {
        if (!ok) {
          handleSignOut().then((res) => {
            setUser(res);
            toast.error("Logged Out!");
          });
        }
      });
    }
  };

  return (
    <div className={`${isSignUp ? "fContainer sign-up-mode" : "fContainer"}`}>
      <Link to="/">
        <span className="pageCloseBtn">
          <FontAwesomeIcon icon={faTimes} />
        </span>
      </Link>
      <div className="forms-container">
        <div className="signIn-singUp">
          <SignInForm handleResponse={handleResponse} />
          <SignUpForm handleResponse={handleResponse} />
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Need Covid Vaccine?</h3>
            <p>Sign up for free to get vaccine.</p>
            <button
              className="iBtn transparent"
              onClick={() => setSignUp(true)}
            >
              Sign Up
            </button>
          </div>
          <img
            src="https://images.vexels.com/media/users/3/193296/isolated/preview/12bde61b79a09e6f414909fa5adc64d1-covid-19-earth-mask-cartoon.png"
            alt=""
            className="pImg"
          />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>Already have an account?</h3>
            <p>Login to your old account.</p>
            <button
              className="iBtn transparent"
              onClick={() => setSignUp(false)}
            >
              Sign In
            </button>
          </div>
          <img
            src="https://images.vexels.com/media/users/3/193251/isolated/preview/b23a8130b03eff475be26b2275ebfc19---cono-de-personaje-covid-19-man-by-vexels.png"
            alt=""
            className="pImg"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
