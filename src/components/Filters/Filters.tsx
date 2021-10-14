import Input from "../Input/Input";
import Select from "../Select/Select";

import styles from "./filters.module.css";

const Filters = () => {
  return (
    <aside className={styles.filters}>
      <Input />
      <Select />
    </aside>
  );
};

export default Filters;
