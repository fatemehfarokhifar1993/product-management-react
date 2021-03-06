import Select from "react-select";
import styles from "./Select.module.css"
const SelectComponent = ({value,onChange,options,title}) => {
  return (
    <div className={styles.selectContainer}>
      <span>{title}</span>
      <Select
        value={value}
        onChange={onChange}
        options={options}
        className={styles.select}
      />
    </div>
  );
};

export default SelectComponent;
