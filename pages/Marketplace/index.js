import React, { Component } from 'react'
import { Layout } from '@/containers'
import { Filter, Title } from '@/components'

import styles from './index.scss'

export default class MarketPlace extends Component {
  state = {
    make: ' ',
    model: ' ',
    year: ' ',
    price: ' ',
    searchVal: 'Search Cars'
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({ searchVal: event.target.value });
  }

  handleFormSelect = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <Layout>
        <Title title="Marketplace" />
        <div className={styles.pageFilter}>
          <Filter 
            selected={this.handleFormSelect} 
            makeVal={this.state.make}
            modelVal={this.state.model}
            yearVal={this.state.year}
            priceRange={this.state.price}
            value={this.state.searchVal}
            typed={this.handleInputChange} />
        </div>
      </Layout>
    )
  }
}
