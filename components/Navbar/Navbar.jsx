"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { navLink } from "@/Data";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [show, setShow] = useState(true);

  const handleScroll = () => {
    setScrollPos(document.body.getBoundingClientRect().top);
    console.log(document.body.getBoundingClientRect())
    setShow(document.body.getBoundingClientRect().top > scrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleClick = () => {
    setClick(!click);
  };

  const pathname = usePathname();

  return (
    <div
      className={`${styles.header} ${
        show ? `${styles.visible}` : `${styles.hidden}`
      }`}
    >
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
        <ul
          className={`${styles.navigations} ${click ? `${styles.active}` : ""}`}
        >
          {navLink.map(({ link, name }) => (
            <li key={name} className={styles.links}>
              <Link
                href={link}
                className={`${styles.link} ${
                  pathname == link ? `${styles.on}` : ""
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
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
