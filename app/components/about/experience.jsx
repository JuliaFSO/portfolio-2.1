import styles from './about.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

export default function Experience() {
  return (
    <div className={styles.section}>
    <div className={styles.sub_title}>RELEVANT EXPERIENCE</div>
      <div className={styles.section_column} style={{ width: '80vw' }}>
        <ul>
          <li className={styles.timeline_li} style={{ position: 'relative', marginBottom: '30px' }}>
            <div className={styles.timeline_icon}>
              <FontAwesomeIcon icon={faBriefcase} className={styles.icon} style={{ color: '#fff' }} /></div>
            <span className={styles.text} style={{ color: '#592698' }}><strong>2022 - Present</strong></span>
            <h5 className={styles.text}> Self-Directed Skill Development and Personal Projects</h5>
            <ul className={styles.text} style={{ listStyle: 'outside' }}>
              <li>Engaging in intensive self-study to master a range of modern web development technologies.</li>
              <li>Executing an array of personal projects to refine skills.</li>
              <li>Focusing on advancing expertise in web development, including React and other front-end technologies.</li>
              <li>Actively exploring emerging technologies like Next.js and Typescript to stay ahead of the curve and prepare for future opportunities.</li>
              <li>Actively seeking a stimulating professional environment where I can leverage my skills and contribute effectively.</li>
            </ul>
          </li>
          <li className={styles.timeline_li} style={{ position: 'relative', marginBottom: '30px' }}>
            <div className={styles.timeline_icon}>
              <FontAwesomeIcon icon={faBriefcase} className={styles.icon} style={{ color: '#fff' }} /></div>
            <span className={styles.text} style={{ color: '#592698' }}><strong>07/2021 - 07/2022</strong></span>
            <h5 className={styles.text}>Full Stack Ruby Developer |<span className="place open-sans-font"> OM30</span></h5>
            <ul className={styles.text} style={{ listStyle: 'outside'}}>
              <li>Modified Ruby on Rails/PostgreSQL/JavaScript software, resolving errors, adapting to new hardware, and upgrading interfaces.</li>
              <li>Achieved a 40% increase in user satisfaction ratings and optimized performance for a 30% faster user experience.</li>
              <li>Participated in sprints, standups, code reviews, plannings and reviews meetings according to Agile Scrum Methodology.</li>
              <li>Implemented testing using RSpec to ensure the functionality of the code resulting in a significant increase in test coverage from 60% to 97%.</li>
              <li>Supported other developers with coding, troubleshooting, and debugging.</li>
            </ul>
          </li>
          <li className={styles.timeline_li} style={{ position: 'relative' }}>
            <div className={styles.timeline_icon}>
              <FontAwesomeIcon icon={faBriefcase} className={styles.icon} style={{ color: '#fff' }} /></div>
            <span className={styles.text} style={{ color: '#592698' }}><strong>04/2021 - 06/2021</strong></span>
          <h5 className={styles.text}>Full-Stack Web Developer |<span> Le Wagon Bootcamp</span></h5>
          <p className={styles.text}>
            Attended Le Wagon Sao Paulo - Batch {"#616"}.<br />
            A 9-week full-time intensive coding bootcamp learning HTML, CSS, Bootstrap, JavaScript ES6,
            SQL, git, GitHub, Heroku and Ruby on Rails. Designed, implemented and shipped to
            production a clone of AirBnB and a Rails prototype of Indicaria.
          </p>
        </li>
      </ul>
    </div>
  </div>
  )
}
