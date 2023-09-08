import Image from 'next/image';
import Link from 'next/link';

import styles from './projects.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faFileLines, faFolder,
        faCode, faCalendar, faExternalLink } from '@fortawesome/free-solid-svg-icons';
import ToDoAppImage from '../../../public/assets/images/toDo_app.png';
import Github from '../../../public/assets/images/github_icon.png';

export default function ModalToDoApp({ closeModal }) {
  return (
    <div className={styles.projects_container} onClick={closeModal}>
      <div className={styles.modal_overlay}>
        <div className={styles.modal_projects}>
          <div className={styles.modal_external}></div>
           <div className={styles.modal_content}>
            <h2 className={styles.modal_title}>ToDo App</h2>
              <div className={styles.modal_info}>
                <div className={styles.text} style={{ textAlign: 'center', paddingBottom: '10px' }} >
                  Streamline your daily to-dos.
                </div>
                <div className={styles.text} >
                  <FontAwesomeIcon icon={faFileLines} className={styles.icon} />Project: <strong>Web App</strong>
                </div>
                <div className={styles.text} >
                  <FontAwesomeIcon icon={faFolder} className={styles.icon} />Category: <strong>React/Redux Course</strong>
                </div>
                <div className={styles.text} >
                  <FontAwesomeIcon icon={faCode} className={styles.icon} />Language: <strong>React, Redux HTML, CSS</strong>
                </div>
                <div className={styles.text} >
                  <FontAwesomeIcon icon={faCalendar} className={styles.icon} />Date: <strong>07/2023</strong>
                </div>
                <div className={styles.text} >
                  <Image src={Github} className={styles.icon} alt='Github ToDo App' width={15} height={15} />
                  Github: <Link href={'https://github.com/JuliaFSO/todo-app'} className={styles.link} target='blank'>
                    <strong>github.com/JuliaFSO/todo-app</strong>
                  </Link>
                </div>
                <div className={styles.text} >
                  <FontAwesomeIcon icon={faExternalLink} className={styles.icon} />Preview:
                  <strong> Soon!</strong>
                </div>
              </div>
              <Image src={ToDoAppImage} className={styles.proj_img} alt="ToDo App" />
            <button className={styles.button} ><FontAwesomeIcon icon={faXmark} className={styles.close_icon} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
