import { Children, cloneElement } from 'react'

import styles from './index.scss'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header className={styles.header} />
      {Children.map(children, child =>
        cloneElement(child, {
          style: {...child.style, flexGrow: '1'}
        })
      )}
      <Footer className={styles.footer} />
    </div>
  )
}
