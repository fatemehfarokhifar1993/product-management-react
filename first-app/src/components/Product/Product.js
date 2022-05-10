import React from "react";
import styles from "./product.module.css";
import { BiTrash } from "react-icons/bi";
const Product = ({product,onDecrement,onIncrement,onDelete}) => {
  return (
    <div className={styles.product}>
      <p className={styles.title}>product name: {product.title}</p>
      <p className={styles.price}>product price: {product.price}</p>
{/*       <span className={styles.quantity}>{product.quantity}</span>
 */}   {/*    <button className={`${styles.button} ${styles.decrement}`} onClick={onDecrement}>
       {product.quantity>1?"-": <BiTrash color="red"/>}
      </button> */}
      <button  className={`${styles.button} ${styles.decrement} ${
          product.quantity === 1 && styles.delete
        }`} onClick={onDecrement}>
    -
      </button>
      <span className={styles.quantity}>{product.quantity}</span>
      <button className={`${styles.button} ${styles.inc}`}
        onClick={onIncrement}
      >
        +
      </button>
      {/* <button onClick={onDelete}   className={`${styles.button} ${styles.delete}`}>
        delete
      </button> */}
      <button onClick={onDelete}   className={`${styles.button} ${styles.delete}`}>
       <BiTrash/>
      </button>
    </div>
  );
};

export default Product;
