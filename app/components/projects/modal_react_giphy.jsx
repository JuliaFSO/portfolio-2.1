import Image from 'next/image';
import Link from 'next/link';

import styles from './projects.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faFileLines, faFolder,
        faCode, faCalendar, faExternalLink } from '@fortawesome/free-solid-svg-icons';
import ReactGiphyImage from '../../../public/assets/images/react_giphy.png';
import Github from '../../../public/assets/images/github_icon.png';

export default function ModalReactGiphy({ closeModal }) {
  return (
    <div className={styles.projects_container} onClick={closeModal}>
      <div className={styles.modal_overlay}>
        <div className={styles.modal_projects}>
          <div className={styles.modal_external}></div>
           <div className={styles.modal_content}>
            <h2 className={styles.modal_title}>React Giphy</h2>
              <div className={styles.modal_info}>
                <div className={styles.text} style={{ textAlign: 'center', paddingBottom: '10px' }} >
                  WebApp to find your favorite gifs!
                </div>
                <div className={styles.text} >
                  <FontAwesomeIcon icon={faFileLines} className={styles.icon} />Project: <strong>Web App</strong>
                </div>
                <div className={styles.text} >
                  <FontAwesomeIcon icon={faFolder} className={styles.icon} />Category: <strong>React Course</strong>
                </div>
                <div className={styles.text} >
                  <FontAwesomeIcon icon={faCode} className={styles.icon} />Language: <strong>React, HTML, CSS</strong>
                </div>
                <div className={styles.text} >
                  <FontAwesomeIcon icon={faCalendar} className={styles.icon} />Date: <strong>07/2022</strong>
                </div>
                <div className={styles.text} >
                  <Image src={Github} className={styles.icon} alt='Github React Giphy' width={15} height={15} />
                  Github: <Link href={'https://github.com/JuliaFSO/react-giphy'} className={styles.link} target='blank'>
                    <strong>github.com/JuliaFSO/react-giphy</strong>
                  </Link>
                </div>
                <div className={styles.text} >
                  <FontAwesomeIcon icon={faExternalLink} className={styles.icon} />
                  Preview: <Link href={'https://juliafso.github.io/react-giphy/'} className={styles.link} target='blank'>
                    <strong> Click here to preview!</strong>
                  </Link>
                </div>
              </div>
              <Image src={ReactGiphyImage} className={styles.proj_img} alt="React Giphy" />
            <button className={styles.button} ><FontAwesomeIcon icon={faXmark} className={styles.close_icon} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
