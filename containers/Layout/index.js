import { Component, Children, cloneElement } from 'react'

import { withRedux } from '@/utils'
import styles from './index.scss'
import { Header } from './Header'
import { Footer } from './Footer'

@withRedux(state => ({ auth: state.auth }))
export class Layout extends Component {
  render() {
    const { auth, children } = this.props
    return (
      <div className={styles.root}>
        <Header auth={auth} className={styles.header} />
        {Children.map(children, child =>
          cloneElement(child, {
            style: {...child.style, flexGrow: '1'}
          })
        )}
        <Footer className={styles.footer} />
      </div>
    )
  }
}
