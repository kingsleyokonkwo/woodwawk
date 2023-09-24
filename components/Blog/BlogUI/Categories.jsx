import styles from "./Categories.module.scss"

const Categories = () => {
  return (
    <div className={styles.categories}>
      <p>Categories</p>
      <ul className={styles.listItems}>
        <li className={styles.listItem}>Products</li>
        <li className={styles.listItem}>Promotions</li>
        <li className={styles.listItem}>Tips and Tricks</li>
        <li className={styles.listItem}>How Tos</li>
      </ul>
    </div>
  )
}

export default Categories