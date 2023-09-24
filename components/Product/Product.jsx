import Details from "../Details/Details";
import styles from "./Product.module.scss";
import Image from "next/image";
import { products } from "@/Data";

const Product = () => {
  return (
    <div className={styles.productContainer}>
      <div className={styles.productContainerInner}>
        <Details />
        <h1>Product Range</h1>
        <div className={styles.products}>
          {products.map(product => (
            <div className={styles.product} key={product.id}>
            <Image
              src={product.image}
              alt="product"
              height={100}
              width={100}
              className={styles.image}
            />
            <p>{product.desc}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
