import React from 'react';

import { store, persistor } from '../Store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import Dashboard from '../Components/DashBoard'
import UserRegistrationForm from '../Components/UserRegistrationForm'
import RestarauntsRegistrationForm from '../Components/RestarauntsRegistrationForm'
// import Login from '../src/Config/firebase'
import Navigations from '../config/router'
import AppBar from '../Components/AppBar'
import Slider from '../Components/HeadSlider'







class MainDisplay extends React.Component {
    constructor(){
      super();
      this.state = {
        login : false,
  
      }
  
      // this.Login = this.Login.bind(this);
   
    }





render() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <header className="App-header">
          

          <AppBar/>

         
           </header>
           <div className = "row1">
           
           <div className="column"> 
           <button  onClick = {this.props.onClick2}>Resgister Resturants</button>
           <button onClick = {this.props.onClick}>Resgister User</button>
           </div>
     
           <div className="column"> 
           <button  onClick = {this.props.onClick1}>Login</button>
           </div>
           
           </div>
        </div>
        <br/> <br/>
   
      <div className = "row1">
      <div className="column"> 

      <Slider/>
      </div>

      <div className="column"> 

<Slider/>
</div>
           </div>

      </PersistGate>
    </Provider>
  );
}
}

export default MainDisplay;












// Button variant="outlined" color="primary" onClick = {e.onClick}>