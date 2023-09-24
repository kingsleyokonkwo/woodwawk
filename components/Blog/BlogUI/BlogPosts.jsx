import Image from "next/image";
import styles from "./BlogPosts.module.scss";
import { posts } from "@/Data";
import { Fragment } from "react";

const BlogPosts = () => {
  return (
    <div className={styles.blog}>
      {posts.map((post) => (
        <div key={post.id} className={styles.blogpost}>
          <div className={styles.blogpost__image}>
            <div className={styles.background}></div>
            <Image
              src={post.img}
              alt="blog post"
              height={100}
              width={100}
              className={styles.blogpost__img}
            />
          </div>
          <p className={styles.blogpost__time}>{post.time}</p>
          <h3 className={styles.blogpost__header}>{post.header}</h3>
          <p className={styles.blogpost__desc}>{post.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
