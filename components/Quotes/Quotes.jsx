import Image from "next/image";
import Button from "../UI/Button";
import styles from "./Quotes.module.scss";

const Quotes = () => {
  return (
    <div className={styles.quotes}>
      <h3>Lorem ipsum dolor sit amet consectetur.</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur. Interdum semper blandit aliquet
        risus. Dictum rhoncus mauris vel pellentesque id neque tempor. Sit id
        est diam vestibulum morbi lorem. Pharetra risus at molestie at nibh.
        Arcu ipsum nulla odio nunc cursus id leo id ac. Diam vulputate ut at
        erat proin habitasse massa egestas gravida. Suscipit.
      </p>
      <Button className='button-quote'>Get Quote</Button>
      <Image
        src="/assets/design-1.png"
        alt="design"
        width={10000}
        height={10000}
        className={styles.design}
      />
      <Image
        src="/assets/design-2.png"
        alt="design"
        width={10000}
        height={10000}
        className={styles.design1}
      />
    </div>
  );
};

export default Quotes;
