import React,{Component} from 'react';
import Registration from './Registration'

import Login from './login'



class App extends Component {

  constructor() {
    super();

    this.state = {
        resturants : false,
        costumer : false,
      
      
      }
 }
  

 renderUser() {
    const{resturants,costumer} = this.state;
   
        if (!resturants) {
            this.setState({ resturants: true });
            this.setState({ costumer: false });
        }
        else  
        {
            this.setState({ resturants: false });
            this.setState({ costumer: true });
        }  

        console.log(resturants);
  }

//   renderresturants() {
//     const{admin} = this.state;
   
//         if (!admin) {
//             this.setState({ admin: true });
//             this.setState({ costumer: false });
//         }
//         else  
//         {
//             this.setState({ admin: false });
//             this.setState({ costumer: true });
//         }  

//         console.log(admin);
//   }

  render() {

    const{resturants,constumer} = this.state;
  
    return (

      <div >
      
      <button onClick={this.renderUser.bind(this)}>Admin</button>
      {resturants &&<Registration Title = "Resturants Registration Form"/>}
      {!constumer && <Registration Title = "User Registration Form"/>}
        </div>

     
        
        
    );
  }
}

export default App;








