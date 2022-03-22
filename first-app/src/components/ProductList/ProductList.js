import React, { Component } from "react";
import Product from "../Product/Product";
class ProductList extends Component {

  render() {
    const {products,onDecrement,onIncrement,onRemove}=this.props;
    return (
      <div>
        {products.map((product) => {
          return (
            <Product
              product={product} key={product.id}
              onDelete={() => onRemove(product.id)}
              onIncrement={() => onIncrement(product.id)}
              onDecrement={() => onDecrement(product.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
