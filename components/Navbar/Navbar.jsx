import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <Link href='/' className={styles.logoContainer}>
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={281}
            height={100}
            className={styles.logo}
          />
        </Link>
        <ul className={styles.navigations}>
            <li>
              <Link href="/">Home</Link>
              <hr />
            </li>
            <li>
              <Link href="/">Products</Link>
              {/* <hr /> */}
            </li>
            <li>
              <Link href="/">About Us</Link>
              {/* <hr /> */}
            </li>
            <li>
              <Link href="/blog">Blog</Link>
              {/* <hr /> */}
            </li>
            <li>
              <Link href="/">Contact Us</Link>
              {/* <hr /> */}
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
