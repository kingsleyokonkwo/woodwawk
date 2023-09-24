import BlogPosts from "./BlogPosts";
import styles from "./BlogUI.module.scss";
import Categories from "./Categories";
import Posts from "./Posts";
import Search from "./Search";

const BlogUI = () => {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogUI}>
        <div className={styles.sidebar}>
          <Search />
          <Categories />
          <Posts />
        </div>
        <div className={styles.main}>
          <BlogPosts />
        </div>
      </div>
    </div>
  );
};

export default BlogUI;
