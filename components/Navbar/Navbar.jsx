'use client'
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { useState } from "react";


const Navbar = () => {
  const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <Link href="/" className={styles.logoContainer}>
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={281}
            height={100}
            className={styles.logo}
          />
        </Link>
        <ul className={`${styles.navigations} ${click ? `${styles.active}` : ""}`}>
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

        <div className={styles.hamburger} onClick={handleClick}>
          {click ? (
            <Image
              src="/assets/cancel.png"
              alt="cancel"
              height={100}
              width={100}
              className={styles.cancel}
            />
          ) : (
            <Image
              src="/assets/hamburger.png"
              alt="cancel"
              height={100}
              className={styles.menu}
              width={100}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
