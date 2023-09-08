import styles from './contact.module.css'

export default function SuccessPage() {
  return (
    <div className={styles.section_column} style={ {textAlign: 'center', padding: '2em', justifyContent: 'center'} }>
      <h1 className={styles.text} style={ {textAlign: 'center', marginLeft: '10px'} }>Message Sent Successfully!</h1>
      <h3 className={styles.text} style={ {textAlign: 'center', marginLeft: '10px'} }>Thank you for getting in touch with me.</h3>
    </div>
  )
}
