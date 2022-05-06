import React from "react";
import styles from "./product.module.css";
import { BiTrash } from "react-icons/bi";
const Product = ({product,onDecrement,onIncrement,onDelete}) => {
  return (
    <div className={styles.product}>
      <p>product name: {product.title}</p>
      <p>product price: {product.price}</p>
      <span className={styles.value}>{product.quantity}</span>
      <button className={`${styles.button}`} onClick={onDecrement}>
       {product.quantity>1?"-": <BiTrash color="red"/>}
      </button>
      <button className={`${styles.button} ${styles.inc}`}
        onClick={onIncrement}
      >
        +
      </button>
      <button onClick={onDelete} className={styles.button}>
        delete
      </button>
    </div>
  );
};

export default Product;
