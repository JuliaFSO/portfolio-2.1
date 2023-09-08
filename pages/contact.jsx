"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import styles from '../app/components/contact/contact.module.css';
import RootLayout from '../app/layout';
import Form from '../app/components/contact/form.jsx';
import SuccessPage from '../app/components/contact/success';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Github from '../public/assets/images/github_icon.png';
import LinkedIn from '../public/assets/images/linkedin_icon.png';

export default function Contact() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  return (
    <RootLayout>
      <div className={styles.contact_container}>
        <h1 className={styles.head_title}>CONTACT</h1>
        <div className={styles.section}>
          <div className={styles.input_container_small}>
            <h2>{`${"Let's chat!"}`}</h2>
            <p className={styles.text}>
            {`${"Don't"}`} be shy to connect! {`${"I'm"}`} here and excited to chat about new projects,
            creative ideas, or anything that involves your vision.
              </p>
            <p className={styles.text}>
              <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
              <span className={styles.text}>Address: </span><strong>GTA, ON, Canada</strong></p>
            <p className={styles.text}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              <span className={styles.text}>Email: </span>
              <Link href="mailto:juliafso@mail.com"><strong>juliafso@mail.com</strong></Link></p>
            <p className={styles.text}>
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              <span className={styles.text}>Phone: </span>
              <Link href="https://api.whatsapp.com/send?phone=16479399042"><strong>+1 647 939-9042</strong></Link></p>
            <div>
              <Link href={'https://github.com/JuliaFSO/'} className={styles.link} target='blank'>
                <button className={styles.button}>
                  GitHub <Image src={Github} className={styles.img_icon} alt='Github' />
                </button>
              </Link>
              <Link href={'https://www.linkedin.com/in/juliafachin/'} className={styles.link} target='blank'>
                <button className={styles.button}>
                  LinkedIn <Image src={LinkedIn} className={styles.img_linkedin} alt='LinkedIn' />
                </button>
              </Link>
            </div>
            </div>
          <div className={styles.section_column}>
            {showSuccessMessage ? ( <SuccessPage /> ) : ( <Form onSuccess={() => setShowSuccessMessage(true)} /> )}
          </div>
        </div>
      </div>
    </RootLayout>
  )
}
