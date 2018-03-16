import { Typography, Select, MenuItem, Input, InputLabel, FormControl, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from 'material-ui'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import SearchIcon from 'material-ui-icons/Search'

import { SearchBar } from '@/components'
import styles from './index.scss'
import { handle } from 'i18next-express-middleware'


export const Filter = (props) => {

  const make = ['Alfa Romeo', 'Alpina', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'Citroen', 'Dacia', 'DS', 'Ferrari', 'Fiat', 'Ford', 'Honda', 'Hyundai', 'Infinity',
    'Jaguar', 'Jeep', 'Kia', 'Lamborghini', 'Land Rover', 'Lexus', 'Lotus', 'Maserati', 'Mazda', 'McLaren', 'Mercedes', 'MG', 'Mini', 'Mitsubishi', 'Nissan', 'Peugeot',
    'Porsche', 'Renault', 'Rolls-Royce', 'Seat', 'Skoda', 'Smart', 'SsangYong', 'Subaru', 'Suzuki', 'Tesla', 'Toyota', 'Vauxhall', 'Volkswagen', 'Volvo'];

  const model = [
    'M3',
    'Civic',
    'Jeep',
  ]

  const year = [2018]

  for (let i = 0; i < 118; i++) {
    year.push(year[i] - 1)
  }

  const priceRange = [
    "<$10,000",
    "$10,001 - $20,000",
    "$20,001 - $30,000",
    "$30,001 - $40,000",
    "$40,001 - $50,000",
    "$50,001 - $60,000",
    "$60,001 - $75,000",
    "$75,001 - $100,000",
    "$100,001+"
  ]

  return (
    <ExpansionPanel className={styles.expPanRoot}>
      <ExpansionPanelSummary>
        <div className={styles.center}>
          <Typography className={styles.titleFont}>Search Marketplace</Typography>
          <ExpandMoreIcon className={styles.expIcon}/>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={styles.options}>
        <SearchBar typed={props.typed} value={props.value} />
        <Typography className={styles.subFont}>Filter</Typography>
        <div className={styles.filterGroups}>
          <FormControl className={styles.dropDownOpt}>
            <InputLabel  htmlFor="car-make">Make</InputLabel>
            <Select
              value={props.makeVal}
              onChange={props.selected}
              input={<Input id="car-make" name="make" />}>
              {make.map(name => (
                <MenuItem key={name} value={name}>{name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={styles.dropDownOpt}>
            <InputLabel htmlFor="car-model">Model</InputLabel>
            <Select
              value={props.modelVal}
              onChange={props.selected}
              input={<Input id="car-model" name="model" />}>
              {model.map(car => (
                <MenuItem key={car} value={car}>{car}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className={styles.filterGroups}>
          <FormControl className={styles.dropDownOpt}>
            <InputLabel htmlFor="car-year">Year</InputLabel>
            <Select
              value={props.yearVal}
              onChange={props.selected}
              input={<Input id="car-year" name="year" />}>
              {year.map(year => (
                <MenuItem key={year} value={year}>{year}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={styles.dropDownOpt}>
            <InputLabel htmlFor="price">Price</InputLabel>
            <Select
              value={props.priceRange}
              onChange={props.selected}
              input={<Input id="price" name="price" />}>
              {priceRange.map(price => (
                <MenuItem key={price} value={price}>{price}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <SearchIcon className={styles.torqSearchIcon} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}