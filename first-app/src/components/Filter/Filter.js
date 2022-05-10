import { useState } from "react";
import { useProductsActions } from "../Providers/ProductsProvider";
import SelectComponent from "../../common/Select/Select";
import SearchBar from "../../common/Search/SearchBar";
import styles from "./Filter.module.css";
const filterOptions = [
  { value: "", label: "All" },
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];
const sortOptions = [
  { value: "highest", label: "highest" },
  { value: "lowest", label: "lowest" },
];

const Filter = () => {
  const dispatch = useProductsActions();
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
console.log(sort)
  const filterHandler = (selectedOption) => {
    dispatch({type:"filter",selectedOption:selectedOption})
    dispatch({type:"sort",selectedOption:sort})
    setFilter(selectedOption);
  };
  const sortHandler = (selectedOption) => {
    dispatch({type:"sort",selectedOption:selectedOption})
    setSort(selectedOption);
  };

  return (
    <div className={styles.filter}>
      <SearchBar filter={filter} sort={sort}/>
      <SelectComponent
        title="filter by size"
        value={filter}
        onChange={filterHandler}
        options={filterOptions}
      />
      <SelectComponent
        title="sort by price"
        value={sort}
        onChange={sortHandler}
        options={sortOptions}
      />
    </div>
  );
};

export default Filter;
