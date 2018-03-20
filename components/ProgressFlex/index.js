import { CircularProgress } from 'material-ui'

import styles from './index.scss'

export const ProgressFlex = ({ message }) => (
  <div className={styles.root}>
    {message && <p className={styles.message}>{message}</p>}
    <CircularProgress className={styles.progress} size={50} />
  </div>
)
