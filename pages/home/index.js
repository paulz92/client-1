import React, { Component } from 'react'
import { bindActionCreators } from 'redux'

import { CarCard, NewPostModal, SearchBar } from '@/components'
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
    modalOpen: false,
  };

  handleModalOpen = () => {
    this.setState({ modalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };
  
  render() {
    return (
      <Layout>
        <div className={styles.root}>
          <h1>Cars</h1>
          <SearchBar />
          <div style={{marginTop: '24px'}}>
            <NewPostModal shouldModalBeOpen={this.state.modalOpen} openModal={this.handleModalOpen} closeModal={this.handleModalClose} />
          </div>
          <div className={styles.homeCarCardsRoot}>
            <CarCard 
              carMake="Honda" 
              carModel="Accord" 
              carYear="2010" 
              carNote="Hondas are built to last. Not the flashiest cars in the world, but absolutely a great daily driver."
              carPic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCLK_6CUznbfVQBejZ-_ZnoTS1JcQR1C_tj-W4xPGIf3raif_9"
              tags={["sedan", "family"]}
              owner="Test McTest"
              carAction="Like" />
            <CarCard 
              carMake="Mazda" 
              carModel="Miata" 
              carYear="2018" 
              carNote="The tires are the things on your car that make contact with the road."
              carPic="https://i.ytimg.com/vi/EivIdi3oVXc/maxresdefault.jpg"
              tags={["sporty", "quick"]}
              owner="Tester McTesterson"
              carAction="Like" />
            <CarCard 
              carMake="Ford" 
              carModel="Excursion" 
              carYear="2010" 
              carNote="I love to pay lots for my gas fill ups."
              carPic="https://media.ed.edmunds-media.com/ford/excursion/2003/oem/2003_ford_excursion_4dr-suv_eddie-bauer_fq_oem_1_500.jpg"
              tags={["big", "ford"]}
              owner="Testy MacTestytesterson"
              carAction="Like" />  
          </div>
        </div>
      </Layout>
    )
  }
}

