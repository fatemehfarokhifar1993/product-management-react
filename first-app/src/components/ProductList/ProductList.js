import React, { Component } from "react";
import Product from "../Product/Product";
class ProductList extends Component {
  state = {
    products: [
      { title: "React.js", price: "99 $", id: 1, quantity: 2 },
      { title: "Node.js", price: "89 $", id: 2, quantity: 3 },
      { title: "JavaScript", price: "79 $", id: 3, quantity: 2 },
    ],
  };
  render() {
    return (
      <div>
        {this.state.products.map((product) => {
          return (
            <Product
              name={product.title}
              price={product.price}
              key={product.id}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
