import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import StackGrid, { transitions, easings } from 'react-stack-grid'

import { CarCard, SearchBar } from '@/components'
import { Layout } from '@/containers'

import { incrementCount, decrementCount } from '@/actions'
import { withTranslate, withRedux, withMaterialUI } from '@/utils'

import styles from './index.scss'

const mapStateToProps = ({ count }) => ({ count })
const mapDispatchToProps = dispatch => (
  bindActionCreators({ incrementCount, decrementCount }, dispatch)
)

@withRedux(mapStateToProps, mapDispatchToProps)
@withTranslate(['Home', 'common'])
export default class Home extends Component {
  state = {
    searchVal: "Search cars"
  }

  transition = transitions.scaleDown

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({ searchVal: event.target.value });
  }

  handleCarLike = (event) => {
    event.preventDefault();
    console.log('clicked to like car')
  }

  handleCarComment = (event) => {
    event.preventDefault();
    console.log('clicked to comment on car')
  }


  render() {
    const { transition } = this
    return (
      <Layout>
        <div className={styles.root}>
          <h1>Cars</h1>
          <SearchBar typed={this.handleInputChange} value={this.state.searchVal} />
          <StackGrid
            monitorImagesLoaded
            columnWidth={300}
            duration={600}
            gutterWidth={15}
            gutterHeight={15}
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
              handleLike={this.handleCarLike}
              handleComment={this.handleCarComment}
              className={styles.card}
              key={0}
              carMake="Honda" 
              carModel="Accord" 
              carYear="2010" 
              carNote="Hondas are built to last. Not the flashiest cars in the world, but absolutely a great daily driver."
              carPic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCLK_6CUznbfVQBejZ-_ZnoTS1JcQR1C_tj-W4xPGIf3raif_9"
              tags={["sedan", "family"]}
              owner="Test McTest" />
            <CarCard
              handleLike={this.handleCarLike}
              handleComment={this.handleCarComment}
              key={1}
              carMake="Mazda" 
              carModel="Miata" 
              carYear="2018" 
              carNote="The tires are the things on your car that make contact with the road."
              carPic="https://i.ytimg.com/vi/EivIdi3oVXc/maxresdefault.jpg"
              tags={["sporty", "quick"]}
              owner="Tester McTesterson" />
            <CarCard
              handleLike={this.handleCarLike}
              handleComment={this.handleCarComment}
              key={2}
              carMake="Ford" 
              carModel="Excursion" 
              carYear="2010" 
              carNote="I love to pay lots for my gas fill ups."
              carPic="https://media.ed.edmunds-media.com/ford/excursion/2003/oem/2003_ford_excursion_4dr-suv_eddie-bauer_fq_oem_1_500.jpg"
              tags={["big", "ford"]}
              owner="Testy MacTestytesterson" />
            <CarCard
              handleLike={this.handleCarLike}
              handleComment={this.handleCarComment}
              className={styles.card}
              key={3}
              carMake="Honda" 
              carModel="Accord" 
              carYear="2010" 
              carNote="Hondas are built to last. Not the flashiest cars in the world, but absolutely a great daily driver."
              carPic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCLK_6CUznbfVQBejZ-_ZnoTS1JcQR1C_tj-W4xPGIf3raif_9"
              tags={["sedan", "family"]}
              owner="Test McTest" />
            <CarCard
              handleLike={this.handleCarLike}
              handleComment={this.handleCarComment}
              key={4}
              carMake="Mazda" 
              carModel="Miata" 
              carYear="2018" 
              carNote="The tires are the things on your car that make contact with the road."
              carPic="https://i.ytimg.com/vi/EivIdi3oVXc/maxresdefault.jpg"
              tags={["sporty", "quick"]}
              owner="Tester McTesterson" />
            <CarCard
              handleLike={this.handleCarLike}
              handleComment={this.handleCarComment}
              key={5}
              carMake="Ford" 
              carModel="Excursion" 
              carYear="2010" 
              carNote="I love to pay lots for my gas fill ups."
              carPic="https://media.ed.edmunds-media.com/ford/excursion/2003/oem/2003_ford_excursion_4dr-suv_eddie-bauer_fq_oem_1_500.jpg"
              tags={["big", "ford"]}
              owner="Testy MacTestytesterson" />
            <CarCard
              handleLike={this.handleCarLike}
              handleComment={this.handleCarComment}
              className={styles.card}
              key={6}
              carMake="Honda" 
              carModel="Accord" 
              carYear="2010" 
              carNote="Hondas are built to last. Not the flashiest cars in the world, but absolutely a great daily driver."
              carPic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCLK_6CUznbfVQBejZ-_ZnoTS1JcQR1C_tj-W4xPGIf3raif_9"
              tags={["sedan", "family"]}
              owner="Test McTest" />
            <CarCard
              handleLike={this.handleCarLike}
              handleComment={this.handleCarComment}
              key={7}
              carMake="Mazda" 
              carModel="Miata" 
              carYear="2018" 
              carNote="The tires are the things on your car that make contact with the road."
              carPic="https://i.ytimg.com/vi/EivIdi3oVXc/maxresdefault.jpg"
              tags={["sporty", "quick"]}
              owner="Tester McTesterson" />
            <CarCard
              handleLike={this.handleCarLike}
              handleComment={this.handleCarComment}
              key={8}
              carMake="Ford" 
              carModel="Excursion" 
              carYear="2010" 
              carNote="I love to pay lots for my gas fill ups."
              carPic="https://media.ed.edmunds-media.com/ford/excursion/2003/oem/2003_ford_excursion_4dr-suv_eddie-bauer_fq_oem_1_500.jpg"
              tags={["big", "ford"]}
              owner="Testy MacTestytesterson" />
            <CarCard
              handleLike={this.handleCarLike}
              handleComment={this.handleCarComment}
              className={styles.card}
              key={9}
              carMake="Honda" 
              carModel="Accord" 
              carYear="2010" 
              carNote="Hondas are built to last. Not the flashiest cars in the world, but absolutely a great daily driver."
              carPic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCLK_6CUznbfVQBejZ-_ZnoTS1JcQR1C_tj-W4xPGIf3raif_9"
              tags={["sedan", "family"]}
              owner="Test McTest" />
            <CarCard
              handleLike={this.handleCarLike}
              handleComment={this.handleCarComment}
              key={10}
              carMake="Mazda" 
              carModel="Miata" 
              carYear="2018" 
              carNote="The tires are the things on your car that make contact with the road."
              carPic="https://i.ytimg.com/vi/EivIdi3oVXc/maxresdefault.jpg"
              tags={["sporty", "quick"]}
              owner="Tester McTesterson" />
            <CarCard
              handleLike={this.handleCarLike}
              handleComment={this.handleCarComment}
              key={11}
              carMake="Ford" 
              carModel="Excursion" 
              carYear="2010" 
              carNote="I love to pay lots for my gas fill ups."
              carPic="https://media.ed.edmunds-media.com/ford/excursion/2003/oem/2003_ford_excursion_4dr-suv_eddie-bauer_fq_oem_1_500.jpg"
              tags={["big", "ford"]}
              owner="Testy MacTestytesterson" />
            <CarCard
              handleLike={this.handleCarLike}
              handleComment={this.handleCarComment}
              className={styles.card}
              key={12}
              carMake="Honda" 
              carModel="Accord" 
              carYear="2010" 
              carNote="Hondas are built to last. Not the flashiest cars in the world, but absolutely a great daily driver."
              carPic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCLK_6CUznbfVQBejZ-_ZnoTS1JcQR1C_tj-W4xPGIf3raif_9"
              tags={["sedan", "family"]}
              owner="Test McTest" />
            <CarCard
              handleLike={this.handleCarLike}
              handleComment={this.handleCarComment}
              key={13}
              carMake="Mazda" 
              carModel="Miata" 
              carYear="2018" 
              carNote="The tires are the things on your car that make contact with the road."
              carPic="https://i.ytimg.com/vi/EivIdi3oVXc/maxresdefault.jpg"
              tags={["sporty", "quick"]}
              owner="Tester McTesterson" />
            <CarCard
              handleLike={this.handleCarLike}
              handleComment={this.handleCarComment}
              key={14}
              carMake="Ford" 
              carModel="Excursion" 
              carYear="2010" 
              carNote="I love to pay lots for my gas fill ups."
              carPic="https://media.ed.edmunds-media.com/ford/excursion/2003/oem/2003_ford_excursion_4dr-suv_eddie-bauer_fq_oem_1_500.jpg"
              tags={["big", "ford"]}
              owner="Testy MacTestytesterson" />
          </StackGrid>
        </div>
      </Layout>
    )
  }
}
