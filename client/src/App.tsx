import React from "react";
import { useAuth0 } from "./react-auth0-spa";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/navBar";
import Footer from "./components/footer"
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Products from "./components/pages/products";
import Contact from "./components/pages/contact";
import Admin from "./components/pages/admin";
import Checkout from "./components/pages/checkout";

function App() {
  const auth = useAuth0();
  let loading, user, isAuthenticated;
  if (auth) {
    loading = auth.loading;
    user = auth.user;
    isAuthenticated = auth.isAuthenticated;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="container">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/checkout" component={Checkout} />
      </div>
      <div>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
