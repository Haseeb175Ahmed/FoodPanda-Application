import React,{Component} from 'react';
import Registration from './Components/Registration'
import DashBoard from './Components/DashBoard'
import Login from './Components/login'

class App extends Component {

  constructor() {
    super();

    this.state = {
      
      }
 }
  
  render() {

    // const{data} = this.state;
  
    return (

      <div className="App">
        <header className="App-header">

        </header>

       
      <DashBoard Tab1 = "Restaurants "   Tab2 = "My Requests"/>
      {/* <DashBoard Tab1 = "Pending "   Tab2 = "In Progress" Tab3 = "Delivered"/> */}
      {/* <Registration Title = "Registration Form"/> */}
      
        </div>

     

        
    );
  }
}

export default App;








// gender
// age
// country
// city



{/* <img src={logo} className="App-logo" alt="logo" /> */}