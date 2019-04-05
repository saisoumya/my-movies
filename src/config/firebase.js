import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCkC72V__FjkQzR2jxW6_tovoGLlOri16s",
    authDomain: "my-movies-wheelhouse.firebaseapp.com",
    databaseURL: "https://my-movies-wheelhouse.firebaseio.com",
    projectId: "my-movies-wheelhouse",
    storageBucket: "my-movies-wheelhouse.appspot.com",
    messagingSenderId: "724544012166"
  };
  export const firebaseApp = firebase.initializeApp(config);

  export default firebase;