import { Component } from 'react'
import { CarCard } from '../index'

import { Paper, Tab, Tabs } from 'material-ui'
import PhoneIcon from 'material-ui-icons/Phone'
import FavoriteIcon from 'material-ui-icons/Favorite'
import PersonPinIcon from 'material-ui-icons/PersonPin'
import DirectionsCar from 'material-ui-icons/DirectionsCar'
import styles from './index.scss'

export class ProfileTab extends Component {
  state = {
    tab: 0
  }

  handleChange(value) {
    this.setState({ tab: value })
  }

  render() {
    const myCar = 
      <div className={styles.profTabContent}>
        <CarCard
          openModal={this.props.openCommentModal} 
          carMake="Honda" 
          carModel="Accord" 
          carYear="2010" 
          carNote="Hondas are built to last. Not the flashiest cars in the world, but absolutely a great daily driver."
          carPic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCLK_6CUznbfVQBejZ-_ZnoTS1JcQR1C_tj-W4xPGIf3raif_9"
          tags={["sedan", "family"]}
          owner="Test McTest"
          carAction="Like" />
      </div>;

    const favCars = 
      <div className={styles.profTabContent}>
        <CarCard
          openModal={this.props.openCommentModal} 
          carMake="Mazda" 
          carModel="Miata" 
          carYear="2018" 
          carNote="The tires are the things on your car that make contact with the road."
          carPic="https://i.ytimg.com/vi/EivIdi3oVXc/maxresdefault.jpg"
          tags={["sporty", "quick"]}
          owner="Tester McTesterson"
          carAction="Like" />
        <CarCard
          openModal={this.props.openCommentModal} 
          carMake="Ford" 
          carModel="Excursion" 
          carYear="2010" 
          carNote="I love to pay lots for my gas fill ups."
          carPic="https://media.ed.edmunds-media.com/ford/excursion/2003/oem/2003_ford_excursion_4dr-suv_eddie-bauer_fq_oem_1_500.jpg"
          tags={["big", "ford"]}
          owner="Testy MacTestytesterson"
          carAction="Like" />
      </div>;

    return (
      <Paper className={styles.profileTabRoot}>
        <Tabs
          value={this.state.tab}
          onChange={(e, value) => this.handleChange(value)}
          fullWidth
          centered
          indicatorColor="#ba000d"
          textColor="#ba000d"
          className={styles.profileTabs}
        >
          <Tab icon={<DirectionsCar />} label="MY CARS" />
          <Tab icon={<FavoriteIcon />} label="FAVORITE CARS" />
          <Tab icon={<PersonPinIcon />} label="MEETUPS" />
        </Tabs>
        { this.state.tab === 0 ?  myCar : this.state.tab === 1 ? favCars : this.state.tab === 2 ? <div className={styles.profTabContent}>Meetups Coming Soon</div> : null  }
      </Paper>
    )
  }
}
            