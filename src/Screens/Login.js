import React from 'react';
import Appbar from '../Components/AppBar';
import Album  from '../Components/Home';
class Start extends React.Component {


    login() {
    
  this.props.history.push('/login');
    }
    

    UserRegistration() {
    
        this.props.history.push('/UserRegistration');
          }



     RestarauntRegistration() {
    
            this.props.history.push('/RestarauntRegistration');
              }



    render() {
        return (
            <div>
              
                <Album onClick={this.UserRegistration.bind(this)} onClick1={this.login.bind(this)} />
              
          <br/>
          <br/>
          
                     {/* <button className="btn1"  onClick={this.UserRegistration.bind(this)}><h2>User Registration</h2></button>
                     <br/>
                   <br/>
                   <br/>
                   
                    <button className="btn2"   onClick={this.RestarauntRegistration.bind(this)}><h2> Restaraunts Registration</h2></button>
                    <br/>
                    <br/>
                   <br/>
                   
                   <button className="btn3" onClick={this.login.bind(this)}><h2>Sign In</h2></button>
                   <br/>
                   <br/> */}
               
            </div>
        )
    }
}

export default Start;
