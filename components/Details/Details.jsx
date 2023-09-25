import styles from "./Details.module.scss";

const Details = () => {
  return (
    <div className={styles.details}>
      <div className={styles.detail}>
        <p className={styles.top}>8</p>
        <p>Years Experience</p>
      </div>
      <div className={styles.vl}></div>
      <div className={styles.detail}>
        <p className={styles.top}>5</p>
        <p>Branches Nation </p>
        <p>wide</p>
      </div>
      <div className={styles.vl} id={styles.line}></div>
      <div className={styles.detail}>
        <p className={styles.top}>10k+</p>
        <p>Products Sold</p>
      </div>
      <div className={styles.vl}></div>
      <div className={styles.detail}>
        <p className={styles.top}>25k+</p>
        <p>Furniture Sold</p>
      </div>
    </div>
  );
};

export default Details;
