import React, { Component } from "react";
import Product from "../Product/Product";
class ProductList extends Component {
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
    const products = [...this.state.products];
    const selectedItem = products.find((p) => p.id === id);
    selectedItem.quantity++;
    this.setState({ products: products });
  };
  decrementHandler = (id) => {
    const products = [...this.state.products];
    const selectedItem = products.find((p) => p.id === id);
    if (selectedItem.quantity === 1) {
      const filteredProducts =products.filter((p) => p.id !== id);
      this.setState({ products: filteredProducts });
  
    } else {
      selectedItem.quantity--;
      this.setState({ products: products });
    }
  };
  render() {
    return (
      <div>
        {this.state.products.map((product) => {
          return (
            <Product
              product={product}
              onDelete={() => this.removeHandler(product.id)}
              onIncrement={() => this.incrementHandler(product.id)}
              onDecrement={() => this.decrementHandler(product.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
