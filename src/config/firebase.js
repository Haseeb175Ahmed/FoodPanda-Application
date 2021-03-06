import React from 'react'
import swal from 'sweetalert';
import '../Components/css/Sign.css'

import * as firebase from 'firebase';
  
const firebaseConfig = {
    apiKey: "AIzaSyAD085w6lrcragEolYUSPqblwmQUvW05So",
    authDomain: "maximal-ceiling-159615.firebaseapp.com",
    databaseURL: "https://maximal-ceiling-159615.firebaseio.com",
    projectId: "maximal-ceiling-159615",
    storageBucket: "maximal-ceiling-159615.appspot.com",
    messagingSenderId: "397361805205",
    appId: "1:397361805205:web:cf325267e9f9f172"
  };

  firebase.initializeApp(firebaseConfig);
  var db = firebase.database();



class Login extends React.Component {
    constructor(){
      super();
      this.state = {
          Restaurants : [],
     
  
      }
  
      this.Auth = this.Auth.bind(this);
   
    }
  



    Auth() {
   
        var email = document.getElementById("email1").value;
        var password = document.getElementById("password1").value;
        var user = document.getElementById("user").value;
    
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((success) => {   
                localStorage.setItem("user",JSON.stringify(success))
                localStorage.setItem("email",JSON.stringify(email))
    
                swal({
                    title: "Welcome",
                    text: "You can use this email to procceed more features",
                    icon: "success",
                    button: "Done",
                })
                .then(() => {
                    let userUid = firebase.auth().currentUser.uid;
                   
                    var db = firebase.database().ref("Users/"+userUid+"/");
                    db.on('value', function(snapshot) {
                        console.log("Orders321;",snapshot);
                     if (snapshot.val() != null ) {
                         var Orders = Object.values(snapshot.val());
                         console.log("Orders;111;",snapshot.val().orders);
                         localStorage.setItem("Orders", JSON.stringify(snapshot.val().orders));
                        //  console.log(this.props);
                     }
                   
                        })
                   this.props.history.push('/UserDashBoard');
                })
            })
        
            .catch((error) => {
                // var errorCode = error.code;
                var errorMessage = error.message;
                swal({
                    title: "Error",
                    text: errorMessage,
                    icon: "error",
                    button: "Ok",
                });
           
            });
        }
    
    render() {
        return (
            <div className="container">
                <br/><br/><br/>
                <h2 className="h2">Sign In</h2>
              
               <div className="white-box">
                   <div className='signup-childs'>
                   <select className="form-control" id="user">
                      <option value="Resturants"> Resturants</option>
                      <option value="Costumers">Costumers </option>
                      </select><br/>
                      <strong>Email</strong><br/>
                      <input id="email1" placeholder='Enter email' type = 'text'/>
                   </div>
                   <div className='signup-childs'>
                      <strong>Password</strong><br/>
                      <input id="password1" type="password" placeholder='Enter password'/>
                   </div>

                  

                   <div className='signup-textline'>
                       <br/>
                       <button  type="submit" className="SignIn"  onClick={this.Auth}><h2>Sign In</h2></button>
                   </div>

                   <br/><br/>
               </div>

            </div>

          

  

        )
    }
}

export default Login
   



            
    function UserForm() {

       
        let email = document.getElementById("email2").value;
        let fullName = document.getElementById("fullName1").value;
        
        let age = document.getElementById("age").value;
 
        let password = document.getElementById("password2").value; 
       
        let cpassword =document.getElementById("password3").value; 
        let country =document.getElementById("country").value;
        let city =document.getElementById("city").value;

       
    
       
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            let userObj = {
                fullName,
                email,
                   age,
                   password,
                   cpassword,
                   country,
                   city,
                //    gm
                
            }   
           
            let userUid = firebase.auth().currentUser.uid;
            firebase.database().ref('Users/' + userUid).set(userObj)
            .then(() => {   
                swal({
                    title: "Welcome",
                    text: "You can use this email to procceed more features",
                    icon: "success",
                    button: "Done",
                })
                .then(() => {
                    var db = firebase.database().ref('Restaurants/');
                    db.on('value', function(snapshot) {
                    
                    
                    var ProductsData = Object.values(snapshot.val());
                    console.log("Restaurants;",ProductsData);
                    localStorage.setItem("Resturants", JSON.stringify(ProductsData));
       
            })
                })
            })
        })
                .catch((error) => {
                    // var errorCode = error.code;
                    var errorMessage = error.message;
                    swal({
                        title: "Error",
                        text: errorMessage,
                        icon: "error",
                        button: "Ok",
                    });
               
                });
            }

           


 function RestaurauntForm()
 {

                let email = document.getElementById("email3").value;
                let password3 = document.getElementById("password5").value;
                let fullName = document.getElementById("fullName2").value; 
   
                let cfpassword =document.getElementById("password4").value; 
                let country =document.getElementById("country").value;
                let city =document.getElementById("city").value;
                let  ResObj = {
                    fullName,
                    email,
                    password3,
                    cfpassword,
                    country,
                    city,
                } 

                

                let file = document.getElementById("file").files[0];
               
                firebase.auth().createUserWithEmailAndPassword(email, password3)
                .then((success) => {
                    let storageRef=firebase.storage().ref()
                    .child(`profile/${file.name}`)
                    storageRef.put(file)
                    .then(function(url){    
                       url.ref.getDownloadURL().then((snapshot)=>{   
             
                              ResObj.file=snapshot;
                              let userUid = firebase.auth().currentUser.uid;
                              firebase.database().ref('Restaurants/' + userUid).set(ResObj)
                              .then(() => {
                                 console.log("abc.file",ResObj);
                              })
                            
                             
                            .then(() => {
                                
                    

                          })

                         
            
                   })
               })
          })

                
                
                
              
                    
                    
            .then(() => {   
                swal({
                    title: "Welcome",
                    text: "You can use this email to procceed more features",
                    icon: "success",
                    button: "Done",

                    
                })
                .then(() =>
                {
                    var db = firebase.database().ref('Restaurants/');
                    db.on('value', function(snapshot) {
                    
                    
                    var ProductsData = Object.values(snapshot.val());
                    console.log("Restaurants;",ProductsData);
                    localStorage.setItem("Resturants", JSON.stringify(ProductsData));
                })
                // this.props.history.push('/login');
                
                // this.props.history.push('/login');
            })
        })
        
                .catch((error) => {
                    // var errorCode = error.code;
                    var errorMessage = error.message;
                    swal({
                        title: "Error",
                        text: errorMessage,
                        icon: "error",
                        button: "Ok",
                    });
               
                });
 

            }

            function GetResturants() 
  {
    //   const {Restaurants} = this.state;
    return new Promise ((e) => 
    {
      
        var db = firebase.database().ref('Restaurants/');
        db.on('value', function(snapshot) {
        
         
          var ProductsData = Object.values(snapshot.val());
          console.log("Restaurants;111;",ProductsData);
          localStorage.setItem("Resturants", JSON.stringify(ProductsData));
       
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                this.toggleErrorMessage();
                // console.log(".........SIgn up errorMessage",errorMessage)
                this.setState({ errormessage: errorMessage });
            });
     })
 
  }

function Orders() 
    {
            var foodItem = document.getElementById("food_item").value;
            var specialItemm = document.getElementById("special_item").value;
            var foodQuatity = document.getElementById("food_quantity").value;
            var deliveryType = document.getElementById("delivery_type").value;
            var deliveryArea = document.getElementById("delivery_area").value;
            // var resturantName = document.getElementById("resturantName").value;
            
            // console.log("NAme",resturantName)
                
            let  orderobj = {
                    foodItem,
                    specialItemm,
                    foodQuatity,
                    deliveryType,
                    deliveryArea,
                    bill : 500+"Rs"
                    
             } 
             let userUid = firebase.auth().currentUser.uid;
             orderobj.uid = userUid;
             firebase.database().ref("Users/"+userUid+"/orders/").set(orderobj)
             .then(() => {   
                 swal({
                     title: "Welcome",
                     text: "You can use this email to procceed more features",
                     icon: "success",
                     button: "Done",

                     
                 })
                 .then(() => {
                    var db = firebase.database().ref("Users/"+userUid+"/orders/");
                   
                    
                //      if (orderobj != null ) {
                //          var Orders = Object.values(snapshot.val());
                //          console.log("Orders;111;",snapshot.val());
                //          localStorage.setItem("Orders", JSON.stringify(orderobj));
                //          console.log(this.props);
                   
                //  }

                db.on('value', function(snapshot) {
        
         
                    var Orders = Object.values(snapshot.val());
                    console.log("Restaurants;111;",Orders);
                    localStorage.setItem("Orders", JSON.stringify(Orders));
                 
                      })
             })
       
                 .catch((error) => {
                     // var errorCode = error.code;
                     var errorMessage = error.message;
                     swal({
                         title: "Error",
                         text: errorMessage,
                         icon: "error",
                         button: "Ok",
                     });
                
                 });
            //  console.log("orderobj",orderobj);
        })
}

   


        export {Login,UserForm,RestaurauntForm,GetResturants,Orders}
           
