import Details from "../Details/Details";
import styles from "./Product.module.scss";
import Image from "next/image";

const Product = () => {
  return (
    <div className={styles.productContainer}>
      <div className={styles.productContainerInner}>
        <Details />
        <h1>Product Range</h1>
        <div className={styles.products}>
          <div className={styles.product}>
            <Image
              src="/assets/chair.png"
              alt="product"
              height={10000}
              width={10000}
              className={styles.image}
            />
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className={styles.product}>
            <Image
              src="/assets/bookshelf.png"
              alt="product"
              height={10000}
              width={10000}
              className={styles.image}
            />
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className={styles.product}>
            <Image
              src="/assets/workspace.png"
              alt="product"
              height={10000}
              width={10000}
              className={styles.image}
            />
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className={styles.product}>
            <Image
              src="/assets/workspace.png"
              alt="product"
              height={10000}
              width={10000}
              className={styles.image}
            />
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
