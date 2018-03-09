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
// import { FormControl } from 'material-ui/Form';
// import { InputLabel } from 'material-ui/Input';

import styles from './index.scss'
import FormControl from 'material-ui';

export const Filter = (props) => {
  const { classes } = props;
  return (
    <div className={styles.root}>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={styles.column}>
            <Typography className={styles.font} >Filter</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails class={styles.options} >
          <div>
            
          </div>
        </ExpansionPanelDetails>
       
      </ExpansionPanel>
    </div>
  );
}