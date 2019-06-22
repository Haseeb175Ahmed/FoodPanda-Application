import React,{Component} from 'react';
import Registration from './Components/Registration'
import DashBoard from './Components/DashBoard'
import Login from './Components/login'
import Map from './Components/GoogleMap'
import Main from './Components/Main'

import './App.css'
class App extends Component {

  constructor() {
    super();

    this.state = {
      
      }
 }

 

  
  render() {

    // const{data} = this.state;
  
    return (

      <div >
        {/* <header className="App-header">

        </header> */}

       
      {/* <DashBoard Tab1 = "Restaurants "   Tab2 = "My Requests"/> */}
      {/* <DashBoard Tab1 = "Pending "   Tab2 = "In Progress" Tab3 = "Delivered"/> */}
      {/* <Registration Title = "User Registration Form"/> */}
      <Main/>
      {/* <Login/> */}
  
        </div>

     

        
    );
  }
}

export default App;








