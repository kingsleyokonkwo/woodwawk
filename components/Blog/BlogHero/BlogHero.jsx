import Image from 'next/image'
import styles from './BlogHero.module.scss'

const Blog = () => {
  return (
    <div className={styles.blogContainer}>
        <div className={styles.mask}>
          <Image
            src="/assets/hero.png"
            alt="background"
            width={10000}
            height={10000}
            className={styles.mask__img}
          />
        </div>
        <div className={styles.blog}>
            <h1>Blog</h1>
        </div>
    </div>
  )
}

export default Blog