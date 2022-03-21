import React from "react";
import styles from "./product.module.css";
const Product = (props) => {
  return (
    <div className={styles.product}>
      <p>product name: {props.product.title}</p>
      <p>product price: {props.product.price}</p>
      <span className={styles.value}>{props.product.quantity}</span>
      <button
        className={`${styles.button} ${styles.inc}`}
        onClick={props.onIncrement}
      >
        +
      </button>
      <button onClick={props.onDelete} className={styles.button}>
        delete
      </button>
    </div>
  );
};

export default Product;