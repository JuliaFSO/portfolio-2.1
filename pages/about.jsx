"use client"

import styles from '../app/components/about/about.module.css';
import RootLayout from '../app/layout';
import Profile from '../app/components/about/profile.jsx';
import Skills from '../app/components/about/skills.jsx';
import Experience from '../app/components/about/experience.jsx';

export default function About() {
  return (
    <RootLayout>
      <div className={styles.about_container}>
        <h1 className={styles.head_title}>ABOUT ME</h1>
          <Profile />
        <hr className={styles.line} />
          <Skills />
        <hr className={styles.line} />
          <Experience />
      </div>
    </RootLayout>
  )
}
