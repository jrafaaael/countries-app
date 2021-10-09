import { useChangeTheme } from "../../hooks/useChangeTheme";

import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

import styles from "./navbar.module.css";

const Navbar = () => {
  const { isDarkMode, handleChangeTheme } = useChangeTheme();

  const themeText = `${isDarkMode ? "Light" : "Dark"} mode`;

  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        <Link to="/">
          <h1 className={styles.title}>Where in the world?</h1>
        </Link>
        <button className={styles.toggle} onClick={handleChangeTheme}>
          {isDarkMode ? (
            <ReactSVG
              src={
                new URL(
                  "../../assets/icons/sun.svg",
                  import.meta.url
                ).pathname
              }
            />
          ) : (
            <ReactSVG
              src={
                new URL(
                  "../../assets/icons/moon.svg",
                  import.meta.url
                ).pathname
              }
            />
          )}
          {themeText}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
