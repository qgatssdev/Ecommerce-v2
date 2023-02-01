import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <div className={styles.container}>
      <div>G</div>
      <div className={styles.border1}>
        <div className={styles.border2}>
          <ul className={styles.links}>
            <li>
              <Link href={`/`} className={styles.navigation}>
                Home
              </Link>
            </li>
            <li>
              <Link href={`/`} className={styles.navigation}>
                Everything
              </Link>
            </li>
            <li>
              <Link href={`/`} className={styles.navigation}>
                Gadgets
              </Link>
            </li>
            <li>
              <Link href={`/`} className={styles.navigation}>
                Sports Gear
              </Link>
            </li>
            <li>
              <Link href={`/`} className={styles.navigation}>
                Bottles
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>G</div>
    </div>
  );
};

export default Header;
