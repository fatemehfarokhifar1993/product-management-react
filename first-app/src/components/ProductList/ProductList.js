import Product from "../Product/Product";
import { useProducts, useProductsActions } from "../Providers/ProductsProvider";
import styles from "./ProductList.module.css"
const ProductList = (props) => {
  const products=useProducts()
  const dispatch=useProductsActions()
  const renderProduct = () => {

    if (products.length === 0) return <div>there is no product in cart</div>;
    return products.map((product) => {
      return (
        <Product
          product={product}
          key={product.id}
          onDelete={() => dispatch({type:"remove",id:product.id})}
          onIncrement={() => dispatch({type:"increment",id:product.id})}
          onDecrement={() => dispatch({type:"decrement",id:product.id})}
        />
      );
    });
  };

  return (
    <div className={styles.productList}>
      {!products.length && <div>go to Shopping</div>}
      {renderProduct()}
    </div>
  );
};

export default ProductList;
