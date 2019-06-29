
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
        
  
    const arr = [
      {'resturants':'KFC','foodItem':'Chiicken Tikka','foodQuatity':'3','bill':'250'},
      {'resturants':'Frontier','foodItem':'Chiicken Karahi','foodQuatity':'3kg','bill':'750'},
      {'resturants':'DUA','foodItem':'Chiicken Makhni','foodQuatity':'1kg','bill':'550'},
      {'resturants':'kababJee','foodItem':'Malai Botti','foodQuatity':'3','bill':'250'},
      {'resturants':'Zahid Neehari','foodItem':'Chiicken neehari','foodQuatity':'1','bill':'800'},
    ];
    console.log(arr);
    const display = arr.map((value,index) => {
        return   (
            <tr>
              <td>{value.index}</td>
              <td>{value.resturants}</td>
              <td>{value.foodItem}</td>
              <td>{value.foodQuatity}</td>
              <td>{value.bill}</td>
              <td>Pending</td>
              
            </tr>
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
