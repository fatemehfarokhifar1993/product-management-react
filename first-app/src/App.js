import React, { Component, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import NavBar from "./components/NavBar/NavBar";
/* class App extends Component {
  state = {
    products: [
      { title: "React.js", price: "99 $", id: 1, quantity: 1 },
      { title: "Node.js", price: "89 $", id: 2, quantity: 2 },
      { title: "JavaScript", price: "79 $", id: 3, quantity: 3 },
    ],
  };
  removeHandler = (id) => {
    const filteredProducts = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filteredProducts });
  };
  incrementHandler = (id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    product.quantity++;
    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products: products });
  };
  decrementHandler = (id) => { 
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    if (product.quantity === 1) {
      const filteredProducts = this.state.products.filter((p) => p.id !== id);
      this.setState({ products: filteredProducts });
    } else {
      const products = [...this.state.products];
      product.quantity--;
      products[index] = product;
      this.setState({ products: products });
    }
  };
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState)
  }
  render() {
    return (
      <div className="container">
        <NavBar
          totalItems={this.state.products.filter((p) => p.quantity > 0).length}
        />
        <ProductList
          products={this.state.products}
          onRemove={this.removeHandler}
          onIncrement={this.incrementHandler}
          onDecrement={this.decrementHandler}
        />
      </div>
    );
  }
}

export default App; */


const App = () => {
  const [products,setProducts]=useState([
    { title: "React.js", price: "99 $", id: 1, quantity: 1 },
    { title: "Node.js", price: "89 $", id: 2, quantity: 2 },
    { title: "JavaScript", price: "79 $", id: 3, quantity: 3 },
  ]
  );
 const removeHandler = (id) => {
    const filteredProducts = products.filter((p) => p.id !== id);
    setProducts(filteredProducts);
  };
  const incrementHandler = (id) => {
    const index = products.findIndex((item) => item.id === id);
    const product = { ...products[index] };
    product.quantity++;
    const updatedProduct = [...products];
    updatedProduct[index] = product;
    setProducts( updatedProduct );
  };
 const decrementHandler = (id) => { 
    const index = products.findIndex((item) => item.id === id);
    const product = { ...products[index] };
    if (product.quantity === 1) {
      const filteredProducts = products.filter((p) => p.id !== id);
      setProducts(filteredProducts) ;
    } else {
      const updatedProduct = [...products];
      product.quantity--;
      updatedProduct[index] = product;
      setProducts(updatedProduct );
    }
  };
  return (
    <div className="container">
      <NavBar
        totalItems={products.filter((p) => p.quantity > 0).length}
      />
      <ProductList
        products={products}
        onRemove={removeHandler}
        onIncrement={incrementHandler}
        onDecrement={decrementHandler}
      />
    </div>
  );
}
 
export default App;