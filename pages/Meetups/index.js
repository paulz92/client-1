import React, { Component } from 'react'
import { Layout } from '@/containers'
import { Title } from '@/components'
import styles from './index.scss'

export default class Meetups extends Component {
  render() {
    return (
      <Layout>
        <Title title="Meetups" />
        <div style={{flexGrow: 1}} />
      </Layout>
    )
  }
}