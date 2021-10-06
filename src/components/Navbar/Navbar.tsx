import { Link } from "react-router-dom";

import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        <Link to="/">
          <h1 className={styles.title}>Where in the world?</h1>
        </Link>
        <button>Toggle</button>
      </div>
    </nav>
  );
};

export default Navbar;
