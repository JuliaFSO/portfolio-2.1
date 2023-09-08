import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faGear, faLocationDot, faEnvelope, faUser,
         faMicrophone, faPhone, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import Github from '../../../public/assets/images/github_icon.png';
import LinkedIn from '../../../public/assets/images/linkedin_icon.png';

export default function Profile() {
  return (
    <div className={styles.section}>
      <div className={styles.sub_title}>PROFILE</div>
      <div className={styles.section_column} style={{ width: '420px' }}>
        <ul><li className={styles.text}><FontAwesomeIcon icon={faUser} className={styles.icon} />
              Name: <strong>Julia Fachin</strong></li>
          <li className={styles.text}><FontAwesomeIcon icon={faFlag} className={styles.icon} />
              Nationality: <strong>Brazilian</strong></li>
          <li className={styles.text}><FontAwesomeIcon icon={faGear} className={styles.icon} />
              Experience: <strong>2 years</strong></li>
          <li className={styles.text}><FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
              Address: <strong>Toronto, Canada</strong></li></ul>
      </div>
      <div className={styles.section_column} style={{ width: '420px' }}>
        <ul>
          <li className={styles.text}><FontAwesomeIcon icon={faPhone} className={styles.icon} />
              Telephone: <Link href="https://api.whatsapp.com/send?phone=16479399042" className={styles.text}><strong>+1 647 939-9042</strong></Link></li>
          <li className={styles.text}><FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              Email: <Link href="mailto:juliafso@mail.com" className={styles.text}><strong>juliafso@mail.com</strong></Link></li>
          <li className={styles.text}><FontAwesomeIcon icon={faMicrophone} className={styles.icon} />
              Languages:
                <ul style={{ marginLeft: '110px', marginTop: '-30px'}}>
                  <li className={styles.text} style={{ fontSize: '1em'}}><strong>English</strong></li>
                  <li className={styles.text} style={{ fontSize: '1em'}}><strong>Portuguese</strong></li>
                </ul>
          </li>
        </ul>
      </div>
      <div className={styles.section_column} style={{ width: '220px' }}>
        <div>
        <Link href="/julia_fachin_fullstack_developer.pdf" passHref target='blank'>
          <button className={styles.button} download="julia_fachin_fullstack_developer.pdf">
            Download CV <FontAwesomeIcon icon={faFileArrowDown} className={styles.download_icon} />
          </button>
        </Link>
        </div>
        <div>
          <Link href={'https://github.com/JuliaFSO/'} className={styles.link} target='blank'>
            <button className={styles.button}>
              GitHub <Image src={Github} className={styles.img_icon} alt='Github' />
            </button>
          </Link>
        </div>
        <div>
          <Link href={'https://www.linkedin.com/in/juliafachin/'} className={styles.link} target='blank'>
            <button className={styles.button}>
              LinkedIn <Image src={LinkedIn} className={styles.img_linkedin} alt='LinkedIn' />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
