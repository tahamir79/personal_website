import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">About Me</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/blog">Blog</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/game">Game</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/music">Music</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/photography">Photography</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
