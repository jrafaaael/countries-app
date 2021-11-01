import styles from "./error_layout.module.css";

const ErrorLayout = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.info}>Sorry, something went wrong</h2>
      <p className={styles.text}>Check your internet connection</p>
      <span className={styles.face}>:/</span>
    </section>
  );
};

export default ErrorLayout;
