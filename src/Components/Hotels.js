import React from 'react';
import { store, persistor } from '../Store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import './css/hotel.css'
import {GetResturants} from '../config/firebase'
import Button from '@material-ui/core/Button/Button';
import Details from './Details'
import Chip from '@material-ui/core/Chip';
import {withRouter} from 'react-router-dom'
  
// import './css/display.css'

class DisplayResturants extends React.Component {
    constructor(){
      super();
     
      this.state = {
       
        selectedPolice : "",
        data : [],
        limit : 1,
        Orders : [],
        toggle : false,
       title : "",
       filterData: []
        
    }

    
  
      this.fetchData.bind();

        this.DisplayData.bind();
   
    }

    
    
    
    DisplayData(resturants) {
        
        const { selectedPolice } = this.state;
        
       
        
        
        console.log(",,,,,,,,,,",selectedPolice);
    }

    Details(e) {
    
        this.props.history.push('/Details');
        // this.setState({
            
           
        //    toggle : true,
        //    title :e.currentTarget.value
        // })
            
          }

    
    componentDidMount() {
      
        this.fetchData();
        var Resturants = localStorage.getItem("Resturants");
        var convertuserData= JSON.parse(Resturants);
      
        var Orders = localStorage.getItem("Orders");
        var OrdersData= JSON.parse(Orders);
        
        
        this.setState({
            
            data: convertuserData,
            Orders : OrdersData
        })
      

    }
    async fetchData() {
        
        try {
           

            var resturants = await GetResturants(); 
           
            console.log("fetchData >>>>>>2",resturants);
            this.DisplayData(resturants)
         
            

        } catch (error) {

        }
        finally {

            // this.setState({

            //     data: resturants
            // })

        }
    }
    onScrolle(e){
        this.setState({limit : this.state.limit + 5 })
          
           if(e.target.scrollHeight === Math.ceil(e.target.scrollTop + e.target.clientHeight)  ){
            console.log(Math.ceil(e.target.scrollTop + e.target.clientHeight),"========================");
             this.loadMore();
           }
           
      }
     //If Bottom Then Load More data
      loadMore(){
        console.log("succeeded");
        this.setState({limit : this.state.limit + 6 })
      }

      search(e) {
          
          
        const {data} = this.state;
        const text = e.target.value;
         //For Sorting Police data name
       
          //Filtering data from police
          
            let data1 = data.filter((elem) => {
                return elem.fullName.substr(0, text.length).toLowerCase().match(text.toLowerCase())
              })
              this.setState({filterData :data1});
  
              console.log(data);
              
         
   
           
    }
   
render() {
    const{data,toggle,title,filterData} = this.state
    var temp = [...data]
    temp.length = this.state.limit;
    const showData = (filterData.length > 0) ? filterData : data

    console.log("ShowData",showData)
    

    const display = showData.map((value,index) => {
        return   (
         <center>
                <div className="column"> <br/><br/>
             <img src={value.file }  className= "img"/>  
                         <p><b>Name</b>: {value.fullName}</p>
                          <p><b>Address</b>: {value.city}</p>
                          <p><b>Email</b>: {value.email}</p>
                          <p><Button id="btn1" value={value.fullName} onClick={this.Details.bind(this)}>order Now</Button></p>
                          
         </div>
             </center>
          
        )
  
               
    });   

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
                                        <input className="form-control form-control-lg form-control-borderless" id = "search"
                                         onChange = {this.search.bind(this)}
                                         type="search" placeholder="Search Resturants or keywords"
                                        />
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
          <center>
          <Chip variant="outlined" label="BBQ"  clickable color="primary" />&nbsp;
          <Chip variant="outlined" label="Tikka"  clickable color="primary" />&nbsp;
          <Chip variant="outlined" label="Zinger"  clickable color="secondary" />&nbsp;
          <Chip variant="outlined" label="Chicken Rool"  clickable color="primary" />&nbsp;
          <Chip variant="outlined" label="Karahi"  clickable color="secondary" />&nbsp;
          <Chip variant="outlined" label="Sweets"  clickable color="primary" />&nbsp;
          <Chip variant="outlined" label="Shakes"  clickable color="secondary" />
          </center>
<br/>
          <div className = "">
            <div className = "row1"  onScroll={ this.onScrolle.bind(this)} style={{height : '500px',border :'2px solid black ',overflow : 'scroll'}}>
           
        {!toggle ? display : <Details Title = {title}/>}
       
         
             </div>
            </div>
        </div>
      </PersistGate>
    </Provider>
  );
}
}

export default withRouter(DisplayResturants);
