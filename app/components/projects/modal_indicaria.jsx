import Image from 'next/image';
import Link from 'next/link';

import styles from './projects.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faFileLines, faFolder,
        faCode, faCalendar, faExternalLink } from '@fortawesome/free-solid-svg-icons';
import IndicariaImage from '../../../public/assets/images/indicaria.png';
import Github from '../../../public/assets/images/github_icon.png';

export default function ModalIndicaria({ closeModal }) {
  return (
    <div className={styles.projects_container} onClick={closeModal}>
      <div className={styles.modal_overlay}>
        <div className={styles.modal_projects}>
          <div className={styles.modal_external}></div>
           <div className={styles.modal_content}>
            <h2 className={styles.modal_title}>Indicaria</h2>
              <div className={styles.modal_info}>
                <div className={styles.text} style={{ textAlign: 'center', paddingBottom: '10px' }} >
                  WebApp that chooses your movie night for you!
                </div>
                <div className={styles.text} >
                  <FontAwesomeIcon icon={faFileLines} className={styles.icon} />Project: <strong>Web App</strong>
                </div>
                <div className={styles.text} >
                  <FontAwesomeIcon icon={faFolder} className={styles.icon} />Category: <strong>Bootcamp Final Project</strong>
                </div>
                <div className={styles.text} >
                  <FontAwesomeIcon icon={faCode} className={styles.icon} />Language: <strong>Ruby on Rails, Javascript, HTML, CSS</strong>
                </div>
                <div className={styles.text} >
                  <FontAwesomeIcon icon={faCalendar} className={styles.icon} />Date: <strong>06/2021</strong>
                </div>
                <div className={styles.text} >
                  <Image src={Github} className={styles.icon} alt='Github Indicaria' width={15} height={15} />
                  Github: <Link href={'https://github.com/JuliaFSO/indicaria'} className={styles.link} target='blank'>
                    <strong>github.com/JuliaFSO/indicaria</strong>
                  </Link>
                </div>
                <div className={styles.text} >
                  <FontAwesomeIcon icon={faExternalLink} className={styles.icon} />Preview: <strong>Soon!</strong>
                </div>
              </div>
              <Image src={IndicariaImage} className={styles.proj_img} alt="Indicaria" />
            <button className={styles.button} ><FontAwesomeIcon icon={faXmark} className={styles.close_icon} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
