import firebase from 'firebase';
import 'firebase/firestore';
// import 'firebase/auth';
// ;
const firebaseConfig = {
  apiKey: 'AIzaSyAqGGoxUpiSOzqYWEiVOpHBJvP85QP5o8Q',
  authDomain: 'app-freela-8ea72.firebaseapp.com',
  databaseURL: 'https://app-freela-8ea72.firebaseio.com',
  projectId: 'app-freela-8ea72',
  storageBucket: 'app-freela-8ea72.appspot.com',
  messagingSenderId: '155089571805',
  appId: '1:155089571805:web:03b27f2d4eb69577ff3034',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
