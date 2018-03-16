import { Button } from 'material-ui'
import styles from './index.scss'

export const SearchBar = (props) => {
  return (
    <input
      className={styles.torqSearch}
      autocomplete="off"
      autocorrect="off"
      type="text"
      value={props.value}
      onChange={props.typed} />
  )
}