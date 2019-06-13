import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Login from './login'
import { Select } from '@material-ui/core';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  );
}

function Register() {
  console.log("Hello WOwrld");
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function SignUp(e) {
  
  const classes = useStyles();


  const [value, setValue] = React.useState('female');

  function handleChange(event) {
    setValue(event.target.value);
  }

 
    function ShowLoginForm(e) {
      e.preventDefault();
      console.log('The link was clicked.');
      return(
        <Login/>
      )
    }

  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
         {e.Title}
        </Typography><br/>
        {/* <form className={classes.form} noValidate> */}
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="fullName"
                variant="outlined"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                autoFocus
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                // ref={this.emailRef}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="age"
                InputProps={{ inputProps: { min: 15, max: 70 } }}
                label="Age"
                name="age"
                autoComplete="age"
                type = "age"
                // ref={this.emailRef}
              />
            </Grid>

        

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="cpassword"
                label="Confirm Password"
                type="cpassword"
                id="cpassword"
                autoComplete="current-password"
              />
            </Grid>
            <FormControl component="fieldset" className={classes.formControl}>
             <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="Gender"
                name="gender1"
                className={classes.group}
                value={value}
                onChange={handleChange}
              >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />

          <FormControl className={classes.formControl}>
          <FormLabel component="legend">Select Country </FormLabel>
          <Select
            value="abc"
            // onChange={this.handleChange1}
            displayEmpty
            name="age"
            className={classes.selectEmpty}
          >
            
            <MenuItem value={1}>Pakistan</MenuItem>
            <MenuItem value={2}>Dubai</MenuItem>
            <MenuItem value={3}>Turkey</MenuItem>
          </Select>
         

          <FormLabel component="legend">Select City </FormLabel>
          <Select
            value="abc"
            // onChange={this.handleChange1}
            displayEmpty
            name="age"
            className={classes.selectEmpty}
          >
           
            <MenuItem value={1}>Lahore</MenuItem>
            <MenuItem value={2}>Karachi</MenuItem>
            <MenuItem value={3}>Islamabad</MenuItem>
          </Select>
        </FormControl>

        </RadioGroup>
      </FormControl>


            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {Register}
           
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2" onClick={ShowLoginForm}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        {/* </form> */}
      </div>
      <Box mt={5}>
        <MadeWithLove />
      </Box>
    </Container>
  );
}