import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/navBar";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Products from "./components/pages/products";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
