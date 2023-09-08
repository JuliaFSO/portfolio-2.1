"use client"

import React, { useState } from 'react';
import styles from '../app/components/projects/projects.module.css';
import RootLayout from '../app/layout';
import ModalIndicaria from '../app/components/projects/modal_indicaria.jsx';
import ModalCryptoWallet from '../app/components/projects/modal_crypto_wallet';
import ModalMarkdown from '../app/components/projects/modal_markdown';
import ModalReactGiphy from '../app/components/projects/modal_react_giphy';
import ModalToDoApp from '../app/components/projects/modal_todo_app';
import ModalMoneyApp from '../app/components/projects/modal_money_app';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowModal(false);
  };

  return (
    <RootLayout>
      <div className={styles.projects_container}>
        <h1 className={styles.head_title}>PROJECTS</h1>
        <div className={styles.section}>
          <div className={styles.projects}>
            <div className={styles.card_container}>
              <div className={styles.card}
                  onClick={() => openModal('Indicaria')} style={{backgroundImage: `url(/assets/images/bckg_indicaria.jpg)`}}>
                <div className={styles.overlay}>
                  <h1>Indicaria</h1>
                </div>
              </div>
            </div>
            <div className={styles.card_container}>
              <div className={styles.card}
                  onClick={() => openModal('CryptoWallet')} style={{backgroundImage: `url(/assets/images/bckg_crypto.jpg)`}}>
                <div className={styles.overlay}>
                  <h1>Crypto Wallet</h1>
                </div>
              </div>
            </div>
            <div className={styles.card_container}>
              <div className={styles.card}
                  onClick={() => openModal('Markdown')}  style={{backgroundImage: `url(/assets/images/bckg_markdown.jpg)`}}>
                <div className={styles.overlay}>
                  <h1>Markdown Previewer</h1>
                </div>
              </div>
            </div>
            <div className={styles.card_container}>
              <div className={styles.card}
                  onClick={() => openModal('ReactGiphy')} style={{backgroundImage: `url(/assets/images/bckg_react_giphy.jpg)`}}>
                <div className={styles.overlay}>
                  <h1>React Giphy</h1>
                </div>
              </div>
            </div>
            <div className={styles.card_container}>
              <div className={styles.card}
                  onClick={() => openModal('ToDoApp')} style={{backgroundImage: `url(/assets/images/bckg_toDo.jpg)`}}>
                <div className={styles.overlay}>
                  <h1>ToDo App</h1>
                </div>
              </div>
            </div>
            <div className={styles.card_container}>
              <div className={styles.card}
                  onClick={() => openModal('MoneyApp')} style={{backgroundImage: `url(/assets/images/bckg_money.jpg)`}}>
                <div className={styles.overlay}>
                  <h1>Money App</h1>
                </div>
              </div>
            </div>
            <div>
              {selectedProject === 'Indicaria' && <ModalIndicaria closeModal={closeModal} />}
              {selectedProject === 'CryptoWallet' && <ModalCryptoWallet closeModal={closeModal} />}
              {selectedProject === 'Markdown' && <ModalMarkdown closeModal={closeModal} />}
              {selectedProject === 'ReactGiphy' && <ModalReactGiphy closeModal={closeModal} />}
              {selectedProject === 'ToDoApp' && <ModalToDoApp closeModal={closeModal} />}
              {selectedProject === 'MoneyApp' && <ModalMoneyApp closeModal={closeModal} />}
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  )
}
