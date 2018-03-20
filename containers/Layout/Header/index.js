import { Component } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  ButtonBase
} from 'material-ui'
import MenuIcon from 'material-ui-icons/Menu'
import MoreIcon from 'material-ui-icons/MoreVert'

import { Link, Router } from '@/isomorphic/routes'
import styles from './index.scss'

const PLACEHOLDER_AVATAR = '/public/images/user-placeholder.svg'

const HeaderLink = ({ to, label }) => (
  <Link route={to}>
    <Typography className={styles.link}>
      {label}
    </Typography>
  </Link>
)

export class Header extends Component {
  state = {
    anchor: null,
  }

  render() {
    const { anchor } = this.state
    const { auth, presentLoginModal, presentRegisterModal } = this.props
    const { user } = auth
    
    return (
      <AppBar className={styles.appBar} position="static">
        <div className={styles.topToolBar}>
          {user ?
            <Button
              aria-haspopup
              aria-label="Account Menu"
              aria-owns={anchor ? 'account-menu' : null}
              className={styles.userContainer}
              onClick={e => this.setState({ anchor: e.currentTarget })}
            >
              <Menu
                disableAutoFocus
                id="account-menu"
                anchorEl={anchor}
                open={Boolean(anchor)}
                onClose={() => this.setState({ anchor: null })}
                onMouseLeave={() => console.log('blurred')}
              >
                <MenuItem>Foo</MenuItem>
              </Menu>
              <Avatar src={user.avatarUrl || PLACEHOLDER_AVATAR} />
              <Typography>
                {`${user.firstname} ${user.lastname}`.toUpperCase()}
              </Typography>
            </Button>:
            <div>
              <Button
                variant="raised"
                onClick={presentRegisterModal}
                className={styles.button}
              >
                Register
              </Button>
              <Button
                variant="raised"
                onClick={presentLoginModal}
                className={styles.button}
              >
                Login
              </Button>
            </div>
          }
        </div>
        <div className={styles.bottomToolBar}>
          <HeaderLink to="/" label="CARS" />
          <HeaderLink to="/marketplace" label="MARKETPLACE" />
          <Typography className={styles.brand}>Torq</Typography>
          <HeaderLink to="/meetups" label="MEETUPS" />
          <HeaderLink to="/about" label="ABOUT" />
        </div>
        <div className={styles.mobileToolBar}>
          <IconButton><MenuIcon/></IconButton>
          <Typography className={styles.brand}>Torq</Typography>
          <IconButton><MoreIcon/></IconButton>
        </div>
      </AppBar>
    )
  }
}
