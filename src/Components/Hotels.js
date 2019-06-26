import React from 'react';
import Search from '../Components/SearchInput'
import { store, persistor } from '../Store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import './css/hotel.css'
import {GetResturants} from '../config/firebase'
// import './css/display.css'

class DisplayResturants extends React.Component {
    constructor(){
      super();
      this.state = {
       
        selectedPolice : "",
        data : "",
       
        
    }
  
      this.fetchData.bind();

        this.DisplayData.bind();
   
    }

    componentDidMount() {
        console.log('The state has been updated.') 
        this.fetchData();

    }

    DisplayData(resturants) {
      
        const { selectedPolice } = this.state;
      
        this.setState({

            data: resturants
        }, () => { console.log('The state has been updated.') })
      

        console.log(",,,,,,,,,,",selectedPolice);
    }

    async fetchData() {
        
        try {
            console.log('The state has been fetch.') 

            var resturants = await GetResturants(); 
          
            console.log("rEsturants >>>>>>1",resturants);
           
            //  this.setState({

            //     data: resturants
            // }, () => { console.log('The state has been updated.') })
          
            console.log("rEsturants >>>>>>2",resturants);
            this.DisplayData(resturants)
         
            

        } catch (error) {

        }
        finally {

            // this.setState({

            //     data: resturants
            // })

        }
    }

   
render() {
    const{data} = this.state

    console.log("render.........",data);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <header className="App-header">
          

          <div className="container">
    <br/>
	<div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <form className="card card-sm">
                                <div className="card-body row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <i className="fas fa-search h4 text-body"></i>
                                    </div>
                                   
                                    <div className="col">
                                        <input className="form-control form-control-lg form-control-borderless" id = "search" type="search" placeholder="Search topics or keywords"/>
                                    </div>
                                 
                                    <div className="col-auto">
                                        <button className="btn" type="">Search</button>
                                    </div>

                                    <div className="col-auto">
                                        <button className="btn" type="">Rating</button>
                                    </div>
                                  
                                </div>
                            </form>
                        </div>
                       
                    </div>
              </div>
          </header>
<br/>
          <div className = "">
            <div className = "row1">
             <div className="column">
             <img src={ require('../images/img_1.jpg') }  className= "img"/>  
                         <p><b>Name</b> : HASeeb</p>
                          <p><b>Adress</b> : category.</p>
                          <p><b>Email</b> :ProductsData[key]</p>
                          
         </div>

         <div className="column">
             <img src={ require('../images/img_1.jpg') }  className= "img"/>  
                         <p><b>Name</b> : HASeeb</p>
                          <p><b>Adress</b> : category.</p>
                          <p><b>Email</b> :ProductsData</p>
                          
         </div>
         
             </div>
            </div>
        </div>
      </PersistGate>
    </Provider>
  );
}
}

export default DisplayResturants;
