import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.header_main}>
      <Link href="/blogs">
        <span className={styles.header_link}>Posts</span>
      </Link>
      <Link href="/blogs">
        <span className={styles.header_link}>About Us</span>
      </Link>
      <Link href="/blogs">
        <span className={styles.header_link}>Contact Us</span>
      </Link>
    </div>
  );
}
