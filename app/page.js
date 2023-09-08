import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.shape_block}></div>
      <div className={styles.home_container}>
        <div className={`${styles.bg_img} ${'col-4 col-lg-8'}`}>
        </div>
        <div className={`${styles.text_container} ${'col-8 col-lg-8'}`} >
          <h1 className={styles.h1_color}>{`${"I'M"}`} JULIA FACHIN</h1>
          <h1 className={styles.h1_sub_color}>FULL STACK DEVELOPER</h1>
          <p className={styles.home_text}>
            A full stack developer from Brazil, with HR background,
            and a real passion for Front-end magic, based on Canada!
          {`${" Let's "}`}code and create something awesome together!</p>
        </div>
      </div>
    </main>
  )
}
