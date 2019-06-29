
import React from 'react';
import { store, persistor } from '../Store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import './css/hotel.css'
import {GetResturants} from '../config/firebase'
import Button from '@material-ui/core/Button/Button';

import Chip from '@material-ui/core/Chip';
import { Table } from '@material-ui/core';
  
// import './css/display.css'

class DisplayRequest extends React.Component {
    constructor(){
      super();
     
      this.state = {
       
        selectedPolice : "",
        data : [],
        limit : 1,
       
        
    }

    
  
    }

    
    
    
    DisplayData(resturants) {
        
        const { selectedPolice } = this.state;
        
       
        
        
        console.log(",,,,,,,,,,",selectedPolice);
    }
    
    componentDidMount() {
      
   
        var Orders = localStorage.getItem("Orders");
        var OrdersData= JSON.parse(Orders);
        console.log(Orders);
        
        
        this.setState({
            
            data: OrdersData
        })

    }

render() {
    const{data} = this.state
    console.log(data);
        

    const display = data.map((value,index) => {
        return   (
        console.log(value)
        )
  
               
    });   

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <header className="App-header">
          </header>

        <div >
  

    <table id="customers">
  <tbody>
<tr>
<th>Sno</th>
  <th>Resturants</th>
  <th>Item</th>
  <th>Quantity</th>
  <th>Bill</th>
  <th>State</th>
</tr>

{display}

</tbody>
</table>

        </div>
        </div>
      </PersistGate>
    </Provider>
  );
}
}

export default DisplayRequest;
