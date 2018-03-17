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

const HeaderButton = ({ to, label }) => (
  <Button
    onClick={() => Router.push(to)}
    className={styles.button}
    variant="raised"
  >
    {label}
  </Button>
)

export class Header extends Component {
  state = {
    anchor: null,
  }

  render() {
    const { anchor } = this.state
    const { user } = this.props.auth

    return (
      <AppBar className={styles.appBar} position="static">
        <div className={styles.topToolBar}>
          {user ?
            <div
              aria-haspopup
              aria-owns={anchor ? 'simple-menu' : null}
              className={styles.userContainer}
              onClick={e => this.setState({ anchor: e.currentTarget })}
            >
              <Menu
                anchorEl={anchor}
                open={Boolean(anchor)}
                onClose={() => this.setState({ anchor: null })}
                paperProps={{ style: { width: 200 } }}
              >
                <MenuItem>Foo</MenuItem>
              </Menu>
              <Avatar src={user.avatarUrl || PLACEHOLDER_AVATAR} />
              <Typography>
                {`${user.firstname} ${user.lastname}`.toUpperCase()}
              </Typography>
            </div>:
            <div>
              <HeaderButton to="/register" label="REGISTER" />
              <HeaderButton to="/login" label="LOGIN" />
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
