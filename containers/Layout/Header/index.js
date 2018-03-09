import { AppBar, Toolbar, Typography, Button, IconButton } from 'material-ui'
import MenuIcon from 'material-ui-icons/Menu'
import MoreIcon from 'material-ui-icons/MoreVert'

import { Link } from '@/isomorphic/routes'
import styles from './index.scss'

const HeaderLink = ({ to, label }) => (
  <Link route={to}>
    <Typography className={styles.link}>
      {label}
    </Typography>
  </Link>
)

const HeaderButton = ({ onClick, label }) => (
  <Button
    onClick={onClick}
    className={styles.button}
    variant="raised"
  >
    {label}
  </Button>
)

export const Header = () => (
  <AppBar className={styles.appBar} position="static">
    <Toolbar className={styles.topToolBar}>
      <HeaderButton label="REGISTER" />
      <HeaderButton label="LOGIN" />
    </Toolbar>
    <Toolbar className={styles.bottomToolBar}>
      <HeaderLink to="/" label="CARS" />
      <HeaderLink to="/marketplace" label="MARKETPLACE" />
      <Typography className={styles.brand}>Torq</Typography>
      <HeaderLink to="/meetups" label="MEETUPS" />
      <HeaderLink to="/about" label="ABOUT" />
    </Toolbar>
    <Toolbar className={styles.mobileToolBar}>
      <IconButton><MenuIcon/></IconButton>
      <Typography className={styles.brand}>Torq</Typography>
      <IconButton><MoreIcon/></IconButton>
    </Toolbar>
  </AppBar>
)
