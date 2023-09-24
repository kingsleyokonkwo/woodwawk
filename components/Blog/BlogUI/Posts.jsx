import styles from "./Posts.module.scss";

const Posts = () => {
  return (
    <div className={styles.post}>
      <h3 className={styles.recent}>Recent Posts</h3>
      <div className={styles.recentPost}>
        <div>
          <h3>We Provide the Best Quality</h3>
          <p>Products - 1 hour ago</p>
        </div>
        <div>
          <h3>We Provide the Best Quality</h3>
          <p>Products - 1 hour ago</p>
        </div>
        <div>
          <h3>We Provide the Best Quality</h3>
          <p>Products - 1 hour ago</p>
        </div>
        <div>
          <h3>We Provide the Best Quality</h3>
          <p>Products - 1 hour ago</p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
