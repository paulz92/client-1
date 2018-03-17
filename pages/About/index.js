import { Component } from 'react'

import { Layout } from '@/containers'
import { AboutTorq } from '@/components'
import styles from './index.scss'

// fixme: withRedux fucks the style up here
export default class About extends Component {
  render() {
    return(
      <Layout store={{getState: () => {}}}>
        <div className={styles.root}>
          <div className={styles.aboutTorqRoot}>
            <AboutTorq />
          </div>
        </div>
      </Layout>
    )
  }
}
