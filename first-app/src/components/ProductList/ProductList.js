import React, { Component } from "react";
import Product from "../Product/Product";
class ProductList extends Component {

  render() {
    return (
      <div>
        {this.props.products.map((product) => {
          return (
            <Product
              product={product}
              onDelete={() => this.props.onRemove(product.id)}
              onIncrement={() => this.props.onIncrement(product.id)}
              onDecrement={() => this.props.onDecrement(product.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
