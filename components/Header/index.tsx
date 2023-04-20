import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Header.module.css';

export default function Header() {

  return (
    <header className={`width100 ${styles.header}`}>
      <div className={styles.headerCon}>
        <Link href="/">
          <h3 className="semibold txtPrimary">Cahier de <span className='semibold txtSecondary'>Français</span></h3>
        </Link>

      <nav className={styles.nav}>
        <Link href='/grammar/'>Grammar Reference</Link>
      </nav>
      </div>
    </header>
  )
}