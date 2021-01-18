import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio"

function App() {
  return (
    <div className="App">
      <div className="nc-photo"></div>
      <Router
      >
      <div>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
    </Router>
        <footer>
                <nav className="navbar navbar-expand-sm navbar-dark sticky-bottom navbar-custom navbar-index">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#footerBar"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon footer-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="footerBar">
                    <ul className="navbar-nav d-flex align-items-end footer-nav">
                    <li className="nav-item active">
                        <h4>Jim Faulkner | 2020 |</h4>
                    </li>
                    <li className="nav-item active">
                        <a href="#" target="_blank" className="btn btn-sm" role="button" aria-pressed="true">
                        <i className="fa fa-user"></i></a>
                    </li>
                    <li className="nav-item">
                        <a href="https://jhf1203.github.io/portfolio" target="_blank" className="btn btn-sm active" role="button"
                        aria-pressed="true">
                        <i className="fa fa-book"></i></a>
                    </li>
                    <li className="nav-item">
                        <a href="https://jhf1203.github.io/contact" target="_blank" className="btn btn-sm" role="button"
                        aria-pressed="true">
                        <i className="fa fa-envelope-o e-mail-button"></i></a>
                    </li>
                    <li className="nav-item">
                        <a href="https://www.linkedin.com/in/jim-faulkner-13476534" target="_blank" className="btn btn-sm" role="button"
                        aria-pressed="true">
                        <i className="fa fa-linkedin-square"></i></a>
                    </li>
                    <li className="nav-item">
                        <a href="https://github.com/jhf1203" target="_blank" className="btn btn-sm" role="button" aria-pressed="true">
                        <i className="fa fa-github"></i></a>
                    </li>
                    </ul>
                </div>
                </nav>
            </footer>
    </div>
  );
}

export default App;
