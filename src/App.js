import React from 'react';

import { store, persistor } from '../src/Store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import Dashboard from '../src/Components/DashBoard'

// import food from './food.png'
// import food2 from './food2.jpg'
import UserRegistrationForm from '../src/Components/UserRegistrationForm'
import RestarauntsRegistrationForm from '../src/Components/RestarauntsRegistrationForm'
// import Login from '../src/Config/firebase'
import Navigations from '../src/config/router'







class App extends React.Component {
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
          


            <div className="display">
              <Navigations />
            </div>
            {/* <Dashboard Tab1 = "Resturants "   Tab2 = "Pending" Tab3 = "In Progress"/> */}
          </header>
        </div>
      </PersistGate>
    </Provider>
  );
}
}

export default App;
