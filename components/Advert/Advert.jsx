import Image from "next/image";
import styles from "./Advert.module.scss";

const Advert = (props) => {
  return (
    <div className={styles.advertContainer}>
      <div  className={styles[props.styles]} >
        <div className={styles.advert__image}>
         
          <Image
            src={props.image}
            alt="interior design"
            height={10000}
            width={10000}
            className={styles.image}
          />
           <div className={styles.background}></div>
        </div>
        <div className={styles.advert__text}>
          <h3>{props.title}</h3>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Advert;
