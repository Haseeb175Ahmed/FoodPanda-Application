import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { style } from '@material-ui/system';
import './css/stylessheet.css'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  function handleChange(event, value) {
    setSpacing(Number(value));
  }

  return (
     
    <div>
        <div className = "main">
        <h1>Burger Lab</h1>
        <img  src={ require('../images/1.jpg') }  className = "img"/>
        
    </div>

<div className = "main">
<h1>Burger Lab</h1>
<img  src={ require('../images/1.jpg') } />

</div>
    </div>
  );
}
