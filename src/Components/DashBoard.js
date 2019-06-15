import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs(e) {

  // constructor(props) {
  //   super(props)

    
  // }
  
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
 
 
  function handleChange(event, newValue) {

    setValue(newValue);
  }

  
  const App = () => (
  <div>
    <h1>Currency Converter</h1>
  </div>
);

  return (
    <Paper className={classes.root}>
      
      <div>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label={e.Tab1} />
        <Tab label={e.Tab2} />
        {e.Tab3 && <Tab label={e.Tab2} />}
        
      </Tabs>
      </div>
    </Paper>
  );
}

