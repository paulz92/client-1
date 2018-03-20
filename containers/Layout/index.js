import { Component, Children, cloneElement } from 'react'
import { bindActionCreators } from 'redux'

import {
  unsetUser,
  dismissModal,
  presentLoginModal,
  presentRegisterModal
} from '@/actions'
import { Modal } from '@/components'
import { withRedux } from '@/utils'
import { Header } from './Header'
import { Footer } from './Footer'
import styles from './index.scss'

@withRedux(
  state => ({
    auth: state.auth,
    layout: state.layout,
  }),
  dispatch => bindActionCreators({
    unsetUser,
    dismissModal,
    presentLoginModal,
    presentRegisterModal,
  }, dispatch)
)
export class Layout extends Component {
  render() {
    const { auth, children, layout } = this.props
    return (
      <div className={styles.root}>
        <Header
          className={styles.header}
          auth={auth}
          unsetUser={() => this.props.unsetUser()}
          presentLoginModal={() => this.props.presentLoginModal()}
          presentRegisterModal={() => this.props.presentRegisterModal()}
        />
        {Children.map(children, child =>
          cloneElement(child, {
            style: {...child.style, flexGrow: '1'}
          })
        )}
        <Footer className={styles.footer} />
        <Modal
          onClose={() => this.props.dismissModal()}
          open={layout.modalPresented}
          type={layout.modalType}
        />
      </div>
    )
  }
}
