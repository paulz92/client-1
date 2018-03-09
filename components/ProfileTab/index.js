import { Component } from 'react'

import { Paper, Tab, Tabs } from 'material-ui'
import PhoneIcon from 'material-ui-icons/Phone'
import FavoriteIcon from 'material-ui-icons/Favorite'
import PersonPinIcon from 'material-ui-icons/PersonPin'
import DirectionsCar from 'material-ui-icons/DirectionsCar'

export class ProfileTab extends Component {
  state = {
    tab: 0
  }

  handleChange(value) {
    this.setState({ tab: value })
  }

  render() {
    return (
      <Paper style={{ width: 500 }}>
        <Tabs
          value={this.state.tab}
          onChange={(e, value) => this.handleChange(value)}
          fullWidth
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab icon={<DirectionsCar />} label="MY CAR" />
          <Tab icon={<FavoriteIcon />} label="FAVORITE CARS" />
          <Tab icon={<PersonPinIcon />} label="CARS OF INTEREST" />
        </Tabs>
        { this.state.tab === 0 ? 'My Car' : 'FAVORITE CARS'  }
      </Paper>
    )
  }
}
