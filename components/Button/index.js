import { Button as MUIButton } from 'material-ui'

import styles from './index.scss'

export const Button = (props) =>
  <MUIButton
    className={styles.root}
    variant="raised"
    {...props}
  />
