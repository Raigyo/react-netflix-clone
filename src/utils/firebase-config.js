import { initializeApp } from 'firebase';

export const initFirebase = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyBJ8WjwI0bKNPpTDwozdBYF0GLz4RQzyuE",
    authDomain: "mini-netflix-64ac0.firebaseapp.com",
    databaseURL: "https://mini-netflix-64ac0.firebaseio.com",
    projectId: "mini-netflix-64ac0",
    storageBucket: "mini-netflix-64ac0.appspot.com",
    messagingSenderId: "537150750226",
    appId: "1:537150750226:web:42c0c005c781f799b2e2cb",
  };

  initializeApp(firebaseConfig);
};
