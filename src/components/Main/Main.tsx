import styles from "./main.module.css";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Main = ({ children }: Props) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
