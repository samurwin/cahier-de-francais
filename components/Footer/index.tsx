import Link from "next/link";

import styles from '../../styles/Footer.module.css'

export default function Footer() {

  return (
    <footer className={styles.footer}>
      <p>Created By</p>
      <Link href="https://smudesigns.com">
        <img src={require('../../assets/logo-smu.png')}  alt="SMU Designs Logo"/>
      </Link>
    </footer>
  )
}