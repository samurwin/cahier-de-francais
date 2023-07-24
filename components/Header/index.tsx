import React, {useState} from 'react';
import Link from 'next/link';
import styles from '../../styles/Header.module.css';

import {FaMoon, FaSun} from 'react-icons/fa'

if (typeof window !== "undefined") {

  const storedTheme = window.localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  if(storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme)
   }
}

export default function Header() {
  const sunIcon = <FaSun />;
  const moonIcon = <FaMoon />;
  const [toggleIcon, setToggleIcon] = useState(sunIcon);

function toggle() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";
    setToggleIcon(sunIcon)

    if (currentTheme === "light") {
        targetTheme = "dark";
        setToggleIcon(moonIcon)
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};

  return (
    <header className={`width100 ${styles.header}`}>
      <div className={styles.headerCon}>
        <Link href="/">
          <h3 className="semibold txtPrimary">Cahier de <span className='semibold txtSecondary'>Français</span></h3>
        </Link>

      <nav className={styles.nav}>
        <Link href='/grammar/'>Grammar Reference</Link>
        <label className="theme-switch">
          <input className={styles.hide} onClick={toggle} type="checkbox" />
          <span className={styles.toggleIcon}>{toggleIcon}</span>
        </label>
      </nav>
      </div>
    </header>
  )
}