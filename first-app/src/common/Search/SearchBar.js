import { useState } from "react";
import { useProductsActions } from "../../components/Providers/ProductsProvider";
import styles from "./SearchBar.module.css";
const SearchBar = ({ filter }) => {
  const dispatch= useProductsActions();

  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    dispatch({type:"filter",selectedOption:filter})
    dispatch({type:"search",event:e})
    setValue(e.target.value);
  };
  return (
    <div className={styles.searchControl}>
      <p>search for </p>
      <input
        type="text"
        /* placeholder="search for ..." */
        onChange={changeHandler}
        value={value}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBar;
