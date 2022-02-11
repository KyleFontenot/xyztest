import styles from "./FlexDiv.module.scss";

export default function FlexDiv({ children }) {
  return <div className={styles.flex}>{children}</div>;
}
