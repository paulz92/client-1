import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'; 
import { About } from 'pages';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

export const AboutPage = (props) => {
function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Expansion Panel 1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
           Torq was created as an application for car enthusiasts who have a passion for automobiles 
           and want to connect with other local likeminded people who share the same interest. Torq not
           your average car enthusiast website it's a also social media platform for posting and commenting 
           about your personal and other enthusiasts vechiles. But it doesn't stop there here at Torq you may
           also find the vechiles of your dreams in our marketplace for those who wish to buy/sell, vechiles 
           and a meetup site for people to plan local car events. Torq the one stop shop for the car enthusiast
           in you. 
 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

 export default withStyles(styles)(SimpleExpansionPanel);
}