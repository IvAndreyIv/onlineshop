import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/product/ProductListing";
import Header from "./containers/header/Header";
import "./App.css";
import ProductDetails from "./containers/product/ProductDetails";
import Cart from "./containers/cart/cart";

function App() {

  const handleAddToCArt = async (productId) => {
    const { cart } = await commerce.cart.add(productId)

    setCart(cart)
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart)
  }

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart)
  }

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart)
  }


  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} onAddToCart={handleAddToCArt} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route exact path='/cart'>
            <Cart
              Cart={Cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


