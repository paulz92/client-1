import React, { Component } from 'react'
import { Layout } from '@/containers'
import { Title, CreateMeetUp } from '@/components'
import styles from './index.scss'

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