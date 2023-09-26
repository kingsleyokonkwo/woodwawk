"use client"
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";
import Button from "../UI/Button";
import { footerLink } from "@/Data";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.footer__top}>
          <div className={styles.brand}>
            <Image
              src="/assets/logo.png"
              alt="logo"
              height={100}
              width={281}
              className={styles.brand__logo}
            />
            <p className={styles.brand__text}>
              Lorem ipsum dolor sit amet consectetur. Fusce mauris adipiscing
              bibendum sem.
            </p>
          </div>
          <ul className={styles.links}>
            {footerLink.map(({ name, link }) => (
              <li key={name}>
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
          <div className={styles.advert}>
            <h3 className={styles.advert__header}>Lorem ipsum dolor sit</h3>
            <p className={styles.advert__text}>
              Lorem ipsum dolor sit amet consectetur. Fusce mauris adipiscing
              bibendum sem.
            </p>
            <form className={styles.footer__form}>
              <input type="email" placeholder="Enter your email address" />
              <Button className="subscribe-btn">Subscribe</Button>
            </form>
          </div>
        </div>
        <hr className={styles.line} />
        <div className={styles.footer__bottom}>
          <p>All rights reserved</p>
          <div className={styles.socials}>
            <Image
              src="/assets/facebook.png"
              alt="facebook"
              height={32}
              width={32}
              className={styles.social}
            />
            <Image
              src="/assets/twitter.png"
              alt="twitter"
              height={32}
              width={32}
              className={styles.social}
            />
            <Image
              src="/assets/instagram.png"
              alt="instagram"
              height={32}
              width={32}
              className={styles.social}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
