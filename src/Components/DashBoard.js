import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import MyRequests from './Myrequest'
import Resturants from '../Components/Hotels'


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const display = () =>
{
  // console.log(">>>>>>>")
  // return(
   
   
  // )
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs(e) {
  const classes = useStyles();
  const data = display();
  const [value, setValue] = React.useState(0);

  // console.log(e.Tab1)
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <LinkTab label="Resturants" href="/drafts" />
          <LinkTab label="My Requests" href="/trash" />
          <LinkTab label="Page Three" href="/spam" />
        </Tabs>
      </AppBar>
      {value === 0 && <Resturants/>}
      {value === 1 && <MyRequests/>}
      {value === 2 && <TabContainer>Pending</TabContainer>}
    </div>
  );
}
