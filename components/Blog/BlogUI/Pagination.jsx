import Image from "next/image";
import styles from "./Pagination.module.scss";

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <div className={styles.arrowContainer}>
        <Image
          className={styles.controlArrow}
          src="/assets/arrow-left.png"
          alt=""
          height={100}
          width={100}
        />
      </div>
      <div className={styles.pages}>
        <p>1</p>
      </div>
      <div className={styles.pages}>
        <p>2</p>
      </div>
      <div className={styles.pages}>
        <p>3</p>
      </div>
      <div className={styles.pages}>
        <p>4</p>
      </div>
      <div className={styles.pages}>
        <p>5</p>
      </div>
      <div className={styles.arrowContainer}>
        <Image
          className={styles.controlArrow}
          src="/assets/arrow-right.png"
          alt=""
          height={100}
          width={100}
        />
      </div>
    </div>
  );
};

export default Pagination;
