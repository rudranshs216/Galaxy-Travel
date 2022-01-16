import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBb46IbYWCzKgyQhLvgsZBauMdNgrb-FDs",
    authDomain: "galaxy-travel-eb2dc.firebaseapp.com",
    databaseURL: "https://galaxy-travel-eb2dc-default-rtdb.firebaseio.com",
    projectId: "galaxy-travel-eb2dc",
    storageBucket: "galaxy-travel-eb2dc.appspot.com",
    messagingSenderId: "354480466247",
    appId: "1:354480466247:web:577a4a7d8d90091a808462"
  };

  const fireDB = firebase.initializeApp(firebaseConfig);

  export default fireDB.database().ref();