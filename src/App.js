import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/product/ProductListing";
import Header from "./containers/header/Header";
import "./App.css";
import ProductDetails from "./containers/product/ProductDetails";
import Cart from "./containers/Cart/Cart";

import { useSelector } from "react-redux";


function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route path="/cart" component={Cart} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
