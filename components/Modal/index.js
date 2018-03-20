import { Component } from 'react' 
import {
  Dialog,
  AppBar,
  IconButton,
  Toolbar,
  Typography
} from 'material-ui'
import CloseIcon from 'material-ui-icons/Close'
import Slide from 'material-ui/transitions/Slide'

import {
  LoginModal,
  RegisterModal,
  PostModal,
  NewPostModal,
} from '@/containers'
import styles from './index.scss'

const Transition = props => <Slide direction="up" {...props} />

export class Modal extends Component {
  getModalTitle(type) {
    switch (type) {
      case 'LOGIN':
        return 'Login'
      case 'REGISTER':
        return 'Register'
      case 'POST':
        return 'Post'
      case 'NEW_POST':
        return 'New Post'
    }
  }
  
  getModal(type) {
    switch (type) {
      case 'LOGIN':
        return <LoginModal />
      case 'REGISTER':
        return <RegisterModal />
      case 'POST':
        return <PostModal />
      case 'NEW_POST':
        return <NewPostModal />
      default:
        return <h1>error</h1>
    }
  }
  
  render() {
    const {
      onClose,
      open,
      type,
    } = this.props
    
    console.log('modal props', this.props)
    
    const title = this.getModalTitle(type)
    
    return (
      <Dialog
        fullScreen
        className={styles.root}
        open={open}
        transition={Transition}
      >
        <AppBar>
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={onClose}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
            >
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
        {this.getModal(type)}
      </Dialog>
    )
  }
}
