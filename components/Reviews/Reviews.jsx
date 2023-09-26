"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Reviews.module.scss";
import { reviews } from "@/Data";

const Reviews = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={styles.reviewContainer}>
      <div className={styles.review__inner}>
        <h3 className={styles.review__header}>Our Reviews</h3>
        <div className={styles.carouselWrapper}>
          <Carousel
            ssr={true}
            responsive={responsive}
            className={styles.reviews}
          >
            {reviews.map((review) => (
              <div className={styles.review} key={review.id}>
                <p className={styles.header}>{review.title}</p>
                <p className={styles.text}>{review.text}</p>
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
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
