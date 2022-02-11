import styles from "./HeroBlock.module.scss";
export default function HeroBlock({ children, header }) {
  return (
    <>
      <div className={styles.container}>
        {header && <h1 className={styles.header}>{header}</h1>}
        <div className={styles.flex}></div>
        {children}
      </div>
    </>
  );
}
