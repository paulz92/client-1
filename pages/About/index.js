import { Component } from 'react'

import { Layout } from '@/containers'
import { AboutTorq } from '@/components'
import styles from './index.scss'
import { withReduxPage } from '@/utils'

@withReduxPage()
export default class About extends Component {
  render() {
    return(
      <Layout >
        <div className={styles.root}>
          <div className={styles.aboutTorqRoot}>
            <AboutTorq />
          </div>
        </div>
      </Layout>
    )
  }
}
