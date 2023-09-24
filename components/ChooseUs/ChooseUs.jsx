import styles from "./ChooseUs.module.scss";

const ChooseUs = () => {
  return (
    <div className={styles.chooseContainer}>
      <div className={styles.choose}>
        <h3 className={styles.grid1}>Why Choose Us?</h3>
        <div className={styles.grid}>
          <h3 className={styles.header}>Lorem Ipsum</h3>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur. Aliquam est ut arcu sit
            senectus sem gravida at.
          </p>
        </div>
        <div className={styles.grid}>
          <h3 className={styles.header}>Lorem Ipsum</h3>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur. Aliquam est ut arcu sit
            senectus sem gravida at.
          </p>
        </div>
        <div className={styles.grid}>
          <h3 className={styles.header}>Lorem Ipsum</h3>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur. Aliquam est ut arcu sit
            senectus sem gravida at.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
