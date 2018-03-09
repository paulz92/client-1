
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

export const ProfileTab = (props) =>

// function TabContainer({ children, dir }) {
//     return (
//       <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
//         {children}
//       </Typography>
//     );
//   }

<div>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Car One" />
            <Tab label="Car Two" />
            <Tab label="Car Three" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>Car One</TabContainer>
          <TabContainer dir={theme.direction}>Car Two</TabContainer>
          <TabContainer dir={theme.direction}>Car Three</TabContainer>
        </SwipeableViews>
      </div>