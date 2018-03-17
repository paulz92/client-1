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
        <Title title="Meetups" />
      <div className={styles.root}>
        <div style={{flexGrow: 1}} />
          <CreateMeetUp  className={styles.meetUp}/>
      </div>
      </Layout>
    )
  }
}
