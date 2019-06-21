import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

import './css/style.css'

// import './App.css'

class DashBoard extends Component {

  constructor() {
    super();

    this.state = {
      
      }

      // const useStyles = makeStyles({
      //   root: {
      //     padding: '2px 4px',
      //     display: 'flex',
      //     alignItems: 'center',
      //     width: 400,
      //   },
      //   input: {
      //     marginLeft: 8,
      //     flex: 1,
      //   },
      //   iconButton: {
      //     padding: 10,
      //   },
      //   divider: {
      //     width: 1,
      //     height: 28,
      //     margin: 4,
      //   },
      // });
 }

  
  render() {
   
    
    const classes = makeStyles({
      root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
      },
      input: {
        marginLeft: 8,
        flex: 1,
      },
      iconButton: {
        padding: 10,
      },
      divider: {
        width: 1,
        height: 28,
        margin: 4,
      },
    });

    // const{data} = this.state;
  
    return (
//room//



   //room ///
      <div class="site-wrap">


<Paper className={classes.root}>
<IconButton className={classes.iconButton} aria-label="Menu">
  <MenuIcon />
</IconButton>
<InputBase
  className={classes.input}
  placeholder="Search Your Resturants"
  inputProps={{ 'aria-label': 'Search Google Maps' }}
/>

<Divider className={classes.divider} />

</Paper>
      <div class="site-section bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mx-auto text-center mb-5 section-heading">
            <h2 class="mb-5">Resturants </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-5">
            <div class="hotel-room text-center">
              <a href="#" class="d-block mb-0 thumbnail"><img src={ require('../images/img_1.jpg') }  alt="Image" class="img-fluid"/></a>
              <div class="hotel-room-body">
                <h3 class="heading mb-0"><a href="#">Kolachi Resturants</a></h3>
                <strong class="price">$350.00 / per night</strong>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-5">
            <div class="hotel-room text-center">
              <a href="#" class="d-block mb-0 thumbnail"><img src={ require('../images/img_2.jpg') } alt="Image" class="img-fluid"/></a>
              <div class="hotel-room-body">
                <h3 class="heading mb-0"><a href="#">Balochistan SAjji</a></h3>
                <strong class="price">$400.00 / per night</strong>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-5">
            <div class="hotel-room text-center">
              <a href="#" class="d-block mb-0 thumbnail"><img src={ require('../images/img_3.jpg') } alt="Image" class="img-fluid"/></a>
              <div class="hotel-room-body">
                <h3 class="heading mb-0"><a href="#">Bolan Sajji</a></h3>
                <strong class="price">$255.00 / per night</strong>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-5">
            <div class="hotel-room text-center">
              <a href="#" class="d-block mb-0 thumbnail"><img src={ require('../images/img_4.jpg') } alt="Image" class="img-fluid"/></a>
              <div class="hotel-room-body">
                <h3 class="heading mb-0"><a href="#">Macdonalds </a></h3>
                <strong class="price">$150.00 / per night</strong>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-5">
            <div class="hotel-room text-center">
              <a href="#" class="d-block mb-0 thumbnail"><img src={ require('../images/img_5.jpg') } alt="Image" class="img-fluid"/></a>
              <div class="hotel-room-body">
                <h3 class="heading mb-0"><a href="#">KFC</a></h3>
                <strong class="price">$200.00 / per night</strong>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-5">
            <div class="hotel-room text-center">
              <a href="#" class="d-block mb-0 thumbnail"><img src={ require('../images/img_1.jpg') } alt="Image" class="img-fluid"/></a>
              <div class="hotel-room-body">
                <h3 class="heading mb-0"><a href="#">Salaatin</a></h3>
                <strong class="price">$155.00 / per night</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      </div>
      
    );
  }
}

export default DashBoard;
