import React from 'react';

import { store, persistor } from '../Store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import color from '@material-ui/core/colors/deepPurple';
import '../Components/css/Details.css';
import {Orders} from '../config/firebase'









class Details extends React.Component {
    constructor(){
      super();
      this.state = {

         
       
  
      }
  
      // this.Login = this.Login.bind(this);
   
    }
    
     finalCost(){

      var foodItem = document.getElementById("food_item").value;
      var specialItemm = document.getElementById("special_item").value;
      var foodQuatity = document.getElementById("food_quantity").value;
      var deliveryType = document.getElementById("delivery_type").value;
      var deliveryArea = document.getElementById("delivery_area").value;

      // var all_food = (parseInt(foodItem)*7) + (parseInt(specialItemm)*3) + ((foodQuatity)*2) + (parseInt(deliveryType)*4) + (parseInt(deliveryArea)*3)
      
      var i = 50;
      document.getElementById("result").innerHTML = i = i + 10;

     }
   ok_result(){
      document.getElementById("okResult").style.display="block";
      document.getElementById("okResult").style.backgroundColor="#DCE775";
      document.getElementById("input_box").style.display="none";
  }

   

render() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <header className="App-header">
          


            
          </header>

          <div className = "column">
          <div className="online_food_delivery_box animated bounceInDown" id="input_box">
          <center> <p><img src={require("../images/11.png")}  className= "img"/> 
          <h1> {this.props.Title}</h1></p></center><br/>
          <form>
              <div className="form-group">
                  <select className="form-control" id="food_item"   onChange={this.finalCost.bind(10)}>
                      <option value="0"> Select Food Item ... </option>
                      <option value="1"> Spring Roll </option>
                      <option value="Fried Prawn"> Fried Prawn </option>
                      <option value="Thai Fried Chicken Wings"> Thai Fried Chicken Wings  </option>
                      <option value="Cutlet Chicken"> Cutlet Chicken </option>
                      <option value=" Cutlet Beef "> Cutlet Beef  </option>
                      <option value="Thai Mixed Noodles"> Thai Mixed Noodles  </option>
                      <option value="Thai Beef With Ginger"> Thai Beef With Ginger </option>
                  </select>
              </div><br/>
              <div className="form-group">
                  <select className="form-control" id="special_item" onChange={this.finalCost.bind()}>
                      <option value="0"> Want Special Item ?</option>
                      <option value="Yes"> Yes </option>
                      <option value="No"> No </option>
                  </select>
              </div><br/>
              <div className="form-group">
                  <input type="number" className="form-control" id="food_quantity" placeholder="Quantity" onKeyPress={this.finalCost.bind()} />
              </div><br/>
              <div className="form-group">
                  <select className="form-control" id="delivery_type" onChange={this.finalCost.bind()}>
                      <option value="0"> Delivery Type - </option>
                      <option value="Normal"> Normal </option>
                      <option value="Emergency"> Emergency </option>
                  </select><br/>
              </div>
              <div className="form-group">
                  <select className="form-control" id="delivery_area" onChange={this.finalCost.bind()}>
                      <option value="0"> Select Delivery Area ... </option>
                      <option value="Dhanmondi"> Dhanmondi </option>
                      <option value="Gulshan"> Gulshan </option>
                      <option value="Mohammadpur"> Mohammadpur  </option>
                      <option value="Uttara"> Uttara </option>
                     
                  </select>
              </div><br/>
              <div className="form-group">
                
                  <span id="result">0</span>
                  <input type="button" value="SUBMIT" className="btn btn-primary" style={{float: 'right'}} id="ok"  onClick = {()=>Orders()}/>
              </div>
          </form>
      </div>

      <div className="result_box animated zoomIn" style={{display: 'none'}} id="okResult" onClick = {this.ok_result.bind()}>
          <h3 className="result_box_text" id="ok_text"> Your order is successfully submitted. Please keep patience, we will come to you soon.<br/><br/><span> --  Thank You  -- </span></h3><br/>
      </div>

          </div>
        </div>
      </PersistGate>
    </Provider>
  );
}
}

export default Details;
