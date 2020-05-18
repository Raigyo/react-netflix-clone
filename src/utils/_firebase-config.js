import { initializeApp } from 'firebase';

//Rename in 'firebase-config.js'

export const initFirebase = () => {
  var firebaseConfig = {
    //Replace with data from Firebase
    apiKey: "xxxxxxxxxxxxxxxxxx-x-xxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxxxxxx",
    databaseURL: "xxxxxxxxxxxxxxxxxxxxxxxxx",
    projectId: "xxxxxxxxxxxxxxxxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxxxxxxxx",
    appId: "xxxxxxxxxxxxxxxxxxxxxxxx",
  };

  initializeApp(firebaseConfig);
};
