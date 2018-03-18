import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import StackGrid, { transitions, easings } from 'react-stack-grid'
import SearchIcon from 'material-ui-icons/Search'

import { CarCard, CarCommentModal, SearchBar, Title } from '@/components'
import { Layout } from '@/containers'

import { incrementCount, decrementCount } from '@/actions'
import { withTranslate, withReduxPage, withMaterialUI } from '@/utils'

import styles from './index.scss'

@withReduxPage()
@withTranslate(['Home', 'common'])
export default class Home extends Component {
  state = {
    searchVal: "Search cars",
    carCommentModal: {
      carYear: "Info for",
      carMake: "car",
      carModel: "clicked",
      carNote: "Car note for car clicked",
      carPic: "https://media.ed.edmunds-media.com/ford/excursion/2003/oem/2003_ford_excursion_4dr-suv_eddie-bauer_fq_oem_1_500.jpg",
      tags: ["tags for", "car", "clicked"],
      comments: ["comments associated", "with the car that", "was clicked by the user"],
      commentBody: ""
    },
    modalOpen: false
  }

  transition = transitions.scaleDown

  handleInputChange = (event) => {
    event.preventDefault()
    this.setState({ searchVal: event.target.value })
  }

  handleCommentChange = (event) => {
    event.preventDefault()
    const newCarCommentModal = { ...this.state.carCommentModal }
    newCarCommentModal.commentBody = event.target.value
    this.setState({ carCommentModal: newCarCommentModal })
  }

  handleCarLike = (event) => {
    event.preventDefault()
    console.log('clicked to like car')
  }

  handleModalOpen = () => {
    console.log(this)
    this.setState({ modalOpen: true })
  }

  handleModalClose = () => {
    this.setState({ modalOpen: false })
  }

  handleAddComment = (event) => {
    event.preventDefault()
    const newCarCommentModal = { ...this.state.carCommentModal }
    const commentsArray = [ ...newCarCommentModal.comments ]
    commentsArray.push(this.state.carCommentModal.commentBody)
    newCarCommentModal.comments = commentsArray
    newCarCommentModal.commentBody = ""
    this.setState({ carCommentModal: newCarCommentModal })
  }

  render() {
    const { transition } = this
    return (
      <Layout>
        <div className={styles.root}>
          <Title title="Cars" />
          <div className={styles.searchRoot}>
            <SearchBar typed={this.handleInputChange} value={this.state.searchVal} />
            <SearchIcon className={styles.torqSearchIcon}/>
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
              handleLike={this.handleCarLike}
              openModal={this.handleModalOpen}
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
              openModal={this.handleModalOpen}
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
              openModal={this.handleModalOpen}
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
              openModal={this.handleModalOpen}
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
              openModal={this.handleModalOpen}
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
              openModal={this.handleModalOpen}
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
              openModal={this.handleModalOpen}
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
              openModal={this.handleModalOpen}
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
              openModal={this.handleModalOpen}
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
              openModal={this.handleModalOpen}
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
              openModal={this.handleModalOpen}
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
              openModal={this.handleModalOpen}
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
              openModal={this.handleModalOpen}
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
              openModal={this.handleModalOpen}
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
              openModal={this.handleModalOpen}
              key={14}
              carMake="Ford" 
              carModel="Excursion" 
              carYear="2010" 
              carNote="I love to pay lots for my gas fill ups."
              carPic="https://media.ed.edmunds-media.com/ford/excursion/2003/oem/2003_ford_excursion_4dr-suv_eddie-bauer_fq_oem_1_500.jpg"
              tags={["big", "ford"]}
              owner="Testy MacTestytesterson" />
            <CarCommentModal 
              shouldModalBeOpen={this.state.modalOpen}
              closeModal={this.handleModalClose}
              carYear={this.state.carCommentModal.carYear}
              carMake={this.state.carCommentModal.carMake}
              carModel={this.state.carCommentModal.carModel}
              carNote={this.state.carCommentModal.carNote}
              carPic={this.state.carCommentModal.carPic}
              tags={this.state.carCommentModal.tags}
              currentComments={this.state.carCommentModal.comments}
              changed={this.handleCommentChange}
              commentBody={this.state.carCommentModal.commentBody}
              addComment={this.handleAddComment}
            />
          </StackGrid>
        </div>
      </Layout>
    )
  }
}
