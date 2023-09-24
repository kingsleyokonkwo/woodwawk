import Image from "next/image";
import styles from "./Search.module.scss";

const Search = () => {
  return (
    <span className={styles.search}>
      <input
        type="text"
        placeholder="search"
        className={styles.search__input}
      />
      <Image
        src="/assets/search.png"
        alt="search icon"
        height={100}
        width={100}
        className={styles.search__icon}
      />
    </span>
  );
};

export default Search;
