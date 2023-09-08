import Link from 'next/link';

import styles from './navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbar_container}>
      <Link href="/" id="home" className={`${styles.navbar_item} ${styles.home}`}>
        <span className={styles.link_span}>Home</span></Link>
      <Link href="/about" id="about" className={`${styles.navbar_item} ${styles.about}`}>
        <span className={styles.link_span}>About</span></Link>
      <Link href="/projects" id="projects" className={`${styles.navbar_item} ${styles.projects}`}>
        <span className={styles.link_span}>Projects</span></Link>
      <Link href="/contact" id="contact" className={`${styles.navbar_item} ${styles.contact}`}>
        <span className={styles.link_span}>Contact</span></Link>
    </div>
  )
}
