import React from 'react';
import * as firebase from 'firebase'
import { resolve } from 'url';
import SweetAlert from 'react-bootstrap-sweetalert';


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

  function Login(email, password) 
  {
    return new Promise (() =>
    {
      
      
      firebase.auth().signInWithEmailAndPassword(email, password)
          .then((user) => {
              let userDetail = {
                  email: user.email,
                  uid: user.uid
              }
              // email = this.refs.txtEmail.value = '';
              // password = this.refs.txtPassword.value = '';
              var goodMessage = 'Thanks for Sign In';
              
              
               console.log(goodMessage);
              
          })
          .catch((error) => {
              var errorCode = error.code;
              // var errorMessage = error.message;
              var errorMessage = "The email address or password you entered is not valid";
              console.log(errorCode,error);
          });
    })
  }


  function RegisterUser(userDetail) 
  {
    return new Promise (() =>
    {
      firebase.auth()
        .createUserWithEmailAndPassword(userDetail.email, userDetail.password)
        .then((success) => {
           
            let userId = firebase.auth().currentUser.uid;
            firebase.database().ref("users/" + userId)
                .set(userDetail)
                .then(() => {
                  console.log("Inserted");
                  alert("Inserted");
                  
                  return(<img src={ require('../../images/img_3.jpg') } alt="Image" class="img-fluid"/>
           
                    //     <SweetAlert 
                    //     success 
                    //     title= "Welconme"
                    //       text= "You can use this email to procceed further features"
                    //       icon= "success"
                    //       button= "Done"
                    //     onConfirm={() => this.hideAlert()}
                    //   >
                    //     Hello world!
                    // </SweetAlert>
                )
                    // document.getElementById("loaders").style.display = 'none';
                    // swal({
                        // title: "Welconme",
                        // text: "You can use this email to procceed further features",
                        // icon: "success",
                        // button: "Done",
                    // })
                    
                   
                })
        })
        .catch(function (error) {
            // Handle Errors here.
            // document.getElementById("loaders").style.display = 'none';
            // var errorCode = error.code;
            var errorMessage = error.message;
            // swal({
            //     title: "Error",
            //     text: errorMessage,
            //     icon: "error",
            //     button: "Ok",
            // });
            // ...
        });
})
}
  export {
    Login,
    RegisterUser
  }
