import React, { Component } from 'react'
import StackGrid, { transitions, easings } from 'react-stack-grid'

import { Layout } from '@/containers'
import { Filter, Title, CarCard } from '@/components'
import { withReduxPage } from '@/utils'

import styles from './index.scss'

@withReduxPage()
export default class MarketPlace extends Component {
  state = {
    make: ' ',
    model: ' ',
    year: ' ',
    price: ' ',
    searchVal: 'Search Cars'
  }

  transition = transitions.scaleDown

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({ searchVal: event.target.value });
  }

  handleFormSelect = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { transition } = this
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
        <StackGrid
          monitorImagesLoaded
          columnWidth={300}
          duration={600}
          gutterWidth={30}
          gutterHeight={30}
          easing={easings.cubicOut}
          appearDelay={60}
          appear={transition.appear}
          appeared={transition.appeared}
          enter={transition.enter}
          entered={transition.entered}
          leaved={transition.leaved}
          className={styles.stackGrid}
        >
          <CarCard
            key={0}
            carMake="Honda" 
            carModel="Accord" 
            carYear="2010" 
            carNote="Hondas are built to last. Not the flashiest cars in the world, but absolutely a great daily driver."
            carPic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCLK_6CUznbfVQBejZ-_ZnoTS1JcQR1C_tj-W4xPGIf3raif_9"
            tags={["sedan", "family"]}
            owner="Test McTest"
            showPrice={true}
            price="$12,500" />
          <CarCard
            key={1}
            carMake="Mazda" 
            carModel="Miata" 
            carYear="2018" 
            carNote="The tires are the things on your car that make contact with the road."
            carPic="https://i.ytimg.com/vi/EivIdi3oVXc/maxresdefault.jpg"
            tags={["sporty", "quick"]}
            owner="Tester McTesterson"
            showPrice={true}
            price="$22,500" />
          <CarCard
            key={2}
            carMake="Ford" 
            carModel="Excursion" 
            carYear="2010" 
            carNote="I love to pay lots for my gas fill ups."
            carPic="https://media.ed.edmunds-media.com/ford/excursion/2003/oem/2003_ford_excursion_4dr-suv_eddie-bauer_fq_oem_1_500.jpg"
            tags={["big", "ford"]}
            owner="Testy MacTestytesterson"
            showPrice={true}
            price="$8,500" />
        </StackGrid>
      </Layout>
    )
  }
}
