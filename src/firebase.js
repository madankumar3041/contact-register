
import* as firebase from "firebase";

  var firebaseConfig = {
    apiKey: "AIzaSyBfq5F87N_oQ8610rWnIvoF31PUx4b59xI",
    authDomain: "react-crud-8330f.firebaseapp.com",
    databaseURL: "https://react-crud-8330f.firebaseio.com",
    projectId: "react-crud-8330f",
    storageBucket: "react-crud-8330f.appspot.com",
    messagingSenderId: "4070710592",
    appId: "1:4070710592:web:ba1a2b51a8f799a3512ea5",
    measurementId: "G-5X3X8JFERF"
  };
 var fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();