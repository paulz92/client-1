import { AppBar, Toolbar, Typography, Button, IconButton } from 'material-ui'
import MenuIcon from 'material-ui-icons/Menu'
import MoreIcon from 'material-ui-icons/MoreVert'

import styles from './index.scss'

export const Header = () => (
  <AppBar className={styles.appBar} position="static">
    <Toolbar className={styles.toolBar}>
      <IconButton className={styles.menuButton} aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography className={styles.title}>
        Torq
      </Typography>
      <IconButton className={styles.moreButton}>
        <MoreIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
)
