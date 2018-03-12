import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Button from 'material-ui/Button';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

import styles from './index.scss'
import { handle } from 'i18next-express-middleware';


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
    year.push(year[i] - 1);
  }

  return (
    <div >
      <ExpansionPanel className={styles.root}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={styles.column}>
            <Typography className={styles.font}>Filter</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={styles.options}>
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
          <Button color="secondary">
            Search
          </Button> 
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}