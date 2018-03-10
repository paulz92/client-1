import { Button } from 'material-ui'
import styles from './index.scss'

export const SearchBar = (props) => {
  return (
    <div className={styles.searchRoot}>
      <input
        className={styles.torqSearch}
        autocomplete="off"
        autocorrect="off"
        type="text"
        value="Search cars"/>
      <Button variant="raised" className={styles.torqSearchButton}>Search</Button>
    </div>
  )
}