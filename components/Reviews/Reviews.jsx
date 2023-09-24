import Image from "next/image";
import styles from "./Reviews.module.scss";
import { reviews } from "@/Data";

const Reviews = () => {
  return (
    <div className={styles.reviewContainer}>
      <div className={styles.review__inner}>
        <h3 className={styles.review__header}>Our Reviews</h3>
        <div className={styles.reviews}>
          {reviews.map((review) => (
            <div className={styles.review} key={review.id}>
              <p className={styles.header}>{review.title}</p>
              <p className={styles.text}>{review.text}
              </p>
              <span className={styles.stars}>
                <Image
                  src={review.img}
                  alt="star"
                  height={100}
                  width={100}
                  className={styles.star}
                />
                <Image
                  src={review.img}
                  alt="star"
                  className={styles.star}
                  height={100}
                  width={100}
                />
                <Image
                  src={review.img}
                  alt="star"
                  height={100}
                  width={100}
                  className={styles.star}
                />
                <Image
                  src={review.img}
                  alt="star"
                  height={100}
                  width={100}
                  className={styles.star}
                />

                <Image
                  src={review.img}
                  alt="star"
                  height={100}
                  width={100}
                  className={styles.star}
                />
              </span>
            </div>
          ))}

          <Image
            src="/assets/square-arrow-left.png"
            alt="arrow"
            width={100}
            height={100}
            className={styles.arrowLeft}
          />
          <Image
            className={styles.arrowright}
            src="/assets/square-arrow-right.png"
            alt="arrow"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
