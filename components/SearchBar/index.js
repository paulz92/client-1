import { Button } from 'material-ui'
import SearchIcon from 'material-ui-icons/Search'
import styles from './index.scss'

export const SearchBar = (props) => {
  return (
    <div className={styles.searchRoot}>
      <input
        className={styles.torqSearch}
        autocomplete="off"
        autocorrect="off"
        type="text"
        value={props.value}
        onChange={props.typed} />
        <SearchIcon className={styles.torqSearchIcon}/>
    </div>
  )
}