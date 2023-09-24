import Image from "next/image";
import styles from "./Hero.module.scss";
import Button from "../UI/Button";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.hero}>
        <div className={styles.mask}>
          <Image
            src="/assets/hero.png"
            alt="background"
            width={10000}
            height={10000}
            className={styles.mask__img}
          />
        </div>

        <div className={styles.hero__content}>
          <h1>Creative Home, Simplify Your Furniture</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Adipiscing id condimentum
            cras posuere vestibulum sem eget sed. Sollicitudin at quis proin
            eget aenean id.
          </p>

          <Button className="button">Get quote</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
