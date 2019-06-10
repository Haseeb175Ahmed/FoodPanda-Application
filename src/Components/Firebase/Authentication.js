import React from 'react';
import * as firebase from 'firebase'
import { resolve } from 'url';


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


  function SignUp(email, password) 
  {
    return new Promise (() =>
    {
      
      
      firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                let userDetail = {
                    username: name,
                    useremail: user.email,
                    useruid: user.uid
                }
                 console.log(userDetail)
                name = this.refs.txtName.value = '';
                email = this.refs.txtEmail.value = '';
                password = this.refs.txtPassword.value = ''; 
               firebase.database().ref('users/' + user.uid).set(userDetail)
                .then(() => 
                    console.log("SignUp Completed"
                
                ));
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                this.toggleErrorMessage();
                this.setState({ errormessage: errorMessage });
            });
    // })
 
  }


