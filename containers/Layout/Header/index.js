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
  Dialog,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ButtonBase,
  
  DialogTitle
} from 'material-ui'
import MenuIcon from 'material-ui-icons/Menu'
import MoreIcon from 'material-ui-icons/MoreVert'
import AccountIcon from 'material-ui-icons/AccountCircle'
import AddIcon from 'material-ui-icons/Add'

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


const AccountDialog = ({ onClose, selected, unsetUser, open }) => (
  <Dialog
    open={open}
    onClose={onClose}
  >
    <DialogTitle>Your account</DialogTitle>
    <div>
      <List>
        <ListItem
          onClick={unsetUser}
          button
        >
          <ListItemAvatar>
            <AccountIcon />
          </ListItemAvatar>
          <ListItemText primary="log out" />
        </ListItem>
        <ListItem button onClick={() => console.log('does nothing')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="add account" />
        </ListItem>
      </List>
    </div>
  </Dialog>
)

export class Header extends Component {
  state = {
    open: false,
    selectedValue: ''
  }

  render() {
    const { auth, presentLoginModal, presentRegisterModal, unsetUser } = this.props
    const { user } = auth
    
    return (
      <AppBar className={styles.appBar} position="static">
        <div className={styles.topToolBar}>
          {user ?
            <ButtonBase
              className={styles.userContainer}
              onClick={() => this.setState({ open: true })}
            >
              <Avatar src={user.avatarUrl || PLACEHOLDER_AVATAR} />
              <Typography>
                {`${user.firstname} ${user.lastname}`.toUpperCase()}
              </Typography>
            </ButtonBase>:
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
              <AccountDialog
                unsetUser={unsetUser}
                onClose={() => this.setState({ open: false })}
                open={this.state.open}
              />
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
