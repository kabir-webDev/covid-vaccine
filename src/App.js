import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Docs from "./components/Docs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Demo1 from "./components/FireDemo/Demo1";

function App() {
  return (
    <>
      {/* <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/features">
            <Features />
          </Route>
          <Route path="/docs">
            <Docs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router> */}
      <Demo1 />
    </>
  );
}

export default App;
