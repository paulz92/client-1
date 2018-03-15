import React from 'react'

import { Layout } from '@/containers'
import styles from './index.scss'
import { AboutTorq } from '@/components'

export default () => (
  <Layout>
    <div className={styles.root}>
      <div className={styles.aboutTorqRoot}>
        <AboutTorq />
      </div>
    </div>
  </Layout>
)