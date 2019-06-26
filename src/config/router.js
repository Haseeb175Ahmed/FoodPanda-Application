import React from 'react';
import UserRegistrationForm from '../Components/UserRegistrationForm'
import RestaurantsRegistrationForm from '../Components/RestarauntsRegistrationForm'
import Login from '../config/firebase'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Start from '../Screens/Login'
import UserDashBoard from '../Components/DashBoard'

function Navigations() {
    return (
        //this.props.history.push('/dashboard')
        <Router>
            {/* optional */}
            {/* <ul>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </ul> */}
            {/* optional */}

            
            <div>
                <Route exact path="/" component={Start}/>
                <Route  path="/login" component={Login} /> 
                <Route  path="/UserRegistration" component={UserRegistrationForm} /> 
                <Route  path="/RestarauntRegistration" component={RestaurantsRegistrationForm} /> 
                <Route  path="/UserDashBoard" component={UserDashBoard} /> 
                
                {/* this.props.match.params.username */}
            </div>
        </Router>
    );
}

export default Navigations