if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyDMTBrAZsGRWVU0KaLfIeqxBtGbNYMmtNs",
  "appId": "1:838268871936:web:ca2cc04a15fd34ee",
  "databaseURL": "https://expense-app-lurisan.firebaseio.com",
  "storageBucket": "expense-app-lurisan.appspot.com",
  "authDomain": "expense-app-lurisan.firebaseapp.com",
  "messagingSenderId": "838268871936",
  "projectId": "expense-app-lurisan"
});