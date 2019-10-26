import firebase from 'firebase'
import firestore from 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
   apiKey: "AIzaSyAiCKJd-6_YJ_l3Ks0KT21Ixzj3JL3QPoA",
    authDomain: "ninja-chat-f3752.firebaseapp.com",
    databaseURL: "https://ninja-chat-f3752.firebaseio.com",
    projectId: "ninja-chat-f3752",
    storageBucket: "ninja-chat-f3752.appspot.com",
    messagingSenderId: "449446234658",
    appId: "1:449446234658:web:631d8de2120c45e576587b"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings( {timestampsInSnapshots: true} )
export default firebaseApp.firestore()

