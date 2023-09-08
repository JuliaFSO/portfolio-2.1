import Image from 'next/image';
import Link from 'next/link';

import styles from './projects.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faFileLines, faFolder,
        faCode, faCalendar, faExternalLink } from '@fortawesome/free-solid-svg-icons';
import MarkdownImage from '../../../public/assets/images/markdown_previewer.png';
import Github from '../../../public/assets/images/github_icon.png';

export default function ModalMarkdown({ closeModal }) {
  return (
    <div className={styles.projects_container} onClick={closeModal}>
      <div className={styles.modal_overlay}>
        <div className={styles.modal_projects}>
          <div className={styles.modal_external}></div>
           <div className={styles.modal_content}>
            <h2 className={styles.modal_title}>Markdown Previewer</h2>
              <div className={styles.modal_info}>
                <div className={styles.text} style={{ textAlign: 'center', paddingBottom: '10px' }} >
                  An app with real-time markdown formatting.
                </div>
                <div className={styles.text} >
                  <FontAwesomeIcon icon={faFileLines} className={styles.icon} />Project: <strong>Web App</strong>
                </div>
                <div className={styles.text} >
                  <FontAwesomeIcon icon={faFolder} className={styles.icon} />Category: <strong>Web Development Course</strong>
                </div>
                <div className={styles.text} >
                  <FontAwesomeIcon icon={faCode} className={styles.icon} />Language: <strong>React, HTML, CSS</strong>
                </div>
                <div className={styles.text} >
                  <FontAwesomeIcon icon={faCalendar} className={styles.icon} />Date: <strong>05/2023</strong>
                </div>
                <div className={styles.text} >
                  <Image src={Github} className={styles.icon} alt='Github Markdown Previewer' width={15} height={15} />
                  Github: <Link href={'https://github.com/JuliaFSO/markdown-previewer'} className={styles.link} target='blank'>
                    <strong>github.com/JuliaFSO/markdown-previewer</strong>
                  </Link>
                </div>
                <div className={styles.text} >
                  <FontAwesomeIcon icon={faExternalLink} className={styles.icon} />
                  Preview: <Link href={'https://juliafso-markdownpreviewer.netlify.app/'} className={styles.link} target='blank'>
                    <strong>Click here to preview!</strong>
                  </Link>
                </div>
              </div>
              <Image src={MarkdownImage} className={styles.proj_img} alt="Markdown Previewer" />
            <button className={styles.button} ><FontAwesomeIcon icon={faXmark} className={styles.close_icon} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
