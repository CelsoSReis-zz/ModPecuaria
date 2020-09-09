import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyA0j03uT5e7WbZxvbb_zWUnQpdKCx7PVF0",
    authDomain: "rwgestagropec.firebaseapp.com",
    databaseURL: "https://rwgestagropec.firebaseio.com",
    projectId: "rwgestagropec",
    storageBucket: "rwgestagropec.appspot.com",
    messagingSenderId: "597397636350",
    appId: "1:597397636350:web:4690f389892684395f11af",
    measurementId: "G-M538MX8H7X"
  };
  // Initialize Firebase condição "if" é para não haver duplicidade da conexão
if(!firebase.apps.lenght){
  //abrir minha conexão
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
