import React from 'react';

import { store, persistor } from '../Store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'









class Details extends React.Component {
    constructor(){
      super();
      this.state = {
       
  
      }
  
      // this.Login = this.Login.bind(this);
   
    }


   

render() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <header className="App-header">
          


            
          </header>

          <div>
              <h1>HAsh Tag</h1>
          </div>
        </div>
      </PersistGate>
    </Provider>
  );
}
}

export default Details;
