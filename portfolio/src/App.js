import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio"
import "./index.css";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
    </Router>
    </div>
  );
}

export default App;
