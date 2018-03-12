import React, { Component } from 'react'
import { Layout } from '@/containers'
import { Filter } from '@/components'

import styles from './index.scss'

export default class MarketPlace extends Component {
  state = {
    make: ' ',
    model: ' ',
    year: ' '
  }

  handleFormSelect = event => {
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <Layout>
        <div className={styles.pageTitle}>
          <h1>Marketplace</h1>
        </div>
        <div className={styles.pageFilter}>
          <Filter 
            selected={this.handleFormSelect} 
            makeVal={this.state.make}
            modelVal={this.state.model}
            yearVal={this.state.year} />
        </div>
      </Layout>
    )
  }
}
