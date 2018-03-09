import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

import { Button, CarCard } from '@/components'
import { Layout } from '@/containers'
import { incrementCount, decrementCount } from '@/actions'
import { withTranslate, withRedux, withMaterialUI } from '@/utils'

import styles from './index.scss'

const mapStateToProps = ({ count }) => ({ count })
const mapDispatchToProps = dispatch => (
  bindActionCreators({ incrementCount, decrementCount }, dispatch)
)

@withRedux(mapStateToProps, mapDispatchToProps)
@withTranslate(['home', 'common'])
export default class Home extends Component {
  render() {
    const { t, incrementCount, decrementCount, count } = this.props

    return (
      <Layout>
        <div className={styles.root}>
          <h1>{t('count', { count: count.count })}</h1>
          <div className={styles.buttons}>
            <Button
              onClick={() => incrementCount()}
              variant="raised"
            >
              {t`increment`}
            </Button>
            <Button
              onClick={() => decrementCount()}
              variant="raised"
            >
              {t`decrement`}
            </Button>
          </div>
          <div className={styles.homeCarCardsRoot}>
            <CarCard 
              carMake="Honda" 
              carModel="Accord" 
              carYear="2010" 
              carNote="Hondas are built to last. Not the flashiest cars in the world, but absolutely a great daily driver."
              carPic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCLK_6CUznbfVQBejZ-_ZnoTS1JcQR1C_tj-W4xPGIf3raif_9"/>
            <CarCard 
              carMake="Mazda" 
              carModel="Miata" 
              carYear="2018" 
              carNote="The tires are the things on your car that make contact with the road."
              carPic="http://wpmedia.driving.ca/2017/11/chrome-image-389045.png?w=800&h=520&crop=1"/>
            <CarCard 
              carMake="Ford" 
              carModel="Excursion" 
              carYear="2010" 
              carNote="I love to pay lots for my gas fill ups."
              carPic="https://media.ed.edmunds-media.com/ford/excursion/2003/oem/2003_ford_excursion_4dr-suv_eddie-bauer_fq_oem_1_500.jpg"/>  
          </div>
        </div>
      </Layout>
    )
  }
}

