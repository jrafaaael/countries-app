import { useHistory } from "react-router";

import { ReactSVG } from "react-svg";

import styles from "./go_back.module.css";

interface Props {
  loading: boolean;
}

const GoBack = ({ loading }: Props) => {
  const { goBack } = useHistory();

  const handleClick = () => goBack();

  return (
    <aside className={styles.back__bar}>
      <button
        className={styles.back__button}
        onClick={handleClick}
        disabled={loading}
      >
        <ReactSVG
          src={
            new URL("../../assets/icons/left-arrow.svg", import.meta.url)
              .pathname
          }
        />
        Back
      </button>
    </aside>
  );
};

export default GoBack;
