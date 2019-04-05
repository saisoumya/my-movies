import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebaseApp from './config/firebase'

firebaseApp.auth().onAuthStateChanged((user)=>{
   if(user){
       console.log("signed in..",user);
   }else{
    console.log("not signed in..");
   }
})
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
