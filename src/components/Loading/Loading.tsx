import { memo } from "react";

import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default memo(Loading);
