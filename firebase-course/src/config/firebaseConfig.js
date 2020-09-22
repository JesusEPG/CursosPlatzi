import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAn3fItgk79hsVm3lSGowCOW8ZmpEFxxEU",
  authDomain: "fir-course-fc32a.firebaseapp.com",
  databaseURL: "https://fir-course-fc32a.firebaseio.com",
  projectId: "fir-course-fc32a",
  storageBucket: "fir-course-fc32a.appspot.com",
  messagingSenderId: "576737714022",
  appId: "1:576737714022:web:b4ef59a73cf3e5946f32a7"
});

export { firebaseApp };
