import React, { Component } from 'react'

import { Layout } from '@/containers'
import { withReduxPage } from '@/utils'
import { Title, CreateMeetUp } from '@/components'
import styles from './index.scss'

@withReduxPage()
export default class Meetups extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.root}>
          <Title title="Coming Soon" />
        </div>
      </Layout>
    )
  }
}
