import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.container}>
      <span className={styles.introduction}>Dev.xyz Presents</span>
      <h1>All about domain names</h1>
    </header>
  );
}
