import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBrdJK7zM0mCyOkLpyfv_CEQn78V60S8FM",
  authDomain: "covid-19-8cffb.firebaseapp.com",
  databaseURL: "https://covid-19-8cffb.firebaseio.com",
  projectId: "covid-19-8cffb",
  storageBucket: "covid-19-8cffb.appspot.com",
  messagingSenderId: "554620384094",
  appId: "1:554620384094:web:2e10338c639f93addad5cf",
  measurementId: "G-0N7D4QVPME"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
