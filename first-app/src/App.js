import React, { Component } from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h1>Shopping Cart</h1>
        <ProductList />
      </div>
    );
  }
}

export default App;
