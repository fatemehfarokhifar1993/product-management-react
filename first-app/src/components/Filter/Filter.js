import { useState } from "react";
import { useProductsActions } from "../Providers/ProductsProvider";
import Select from "react-select";
const options = [
  { value: "", label: "All" },
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];

const Filter = () => {
  const { filterSizeHandler } = useProductsActions();
  const [value, setValue] = useState("");

  const changeHandler = (selectedOption) => {
    filterSizeHandler(selectedOption);
    setValue(selectedOption);
  };

  return (
    <div className="filter">
      <p>filter products based on:</p>
      <div className="selectContainer">
        <span>order by</span>

        <Select
          value={value}
          onChange={changeHandler}
          options={options}
          className="select"
        />
      </div>
    </div>
  );
};

export default Filter;
