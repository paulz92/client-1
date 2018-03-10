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

  const model = [
    'Honda',
    'BMW',
    'Jeep',
  ]

  const make = [
    'M3',
    'Civic',
    'Jeep',
  ]

  const year = [
    '1995',
    '1996',
    '1997',
    '2015',
    '2016',
    '2017',
    '2018',
  ]

  return (
    <div >
      <ExpansionPanel className={styles.root} defaultExpanded>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={styles.column}>
            <Typography className={styles.font} >Filter</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={styles.options} >
        <FormControl className={styles.dropDownOpt}>
          <InputLabel  htmlFor="select-multiple">Model</InputLabel>
          <Select
          value={''}
            input={<Input id="select-multiple" />}
          >
            {model.map(name => (
              <MenuItem
                key={name}
                value={name}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={styles.dropDownOpt}>
          <InputLabel htmlFor="select-multiple">Make</InputLabel>
          <Select
          value={''}
            input={<Input id="select-multiple" />}
          >
            {make.map(car => (
              <MenuItem
                key={car}
                value={car}
              >
                {car}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={styles.dropDownOpt}>
          <InputLabel htmlFor="select-multiple">Years</InputLabel>
          <Select
          value={''}
            input={<Input id="select-multiple" />}
          >
            {year.map(years => (
              <MenuItem
                key={years}
                value={years}
              >
                {years}
              </MenuItem>
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