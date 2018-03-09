import styles from './index.scss'

export const Footer = () => {
  const year = (new Date()).getFullYear()
  return (
    <footer className={styles.root}>
      &copy; {year} Torq, Inc.
    </footer>
  )
}
