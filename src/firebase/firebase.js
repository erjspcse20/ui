import firebase from 'firebase/app';
const config = {
    apiKey: "AIzaSyBhfGdyQDZ0FB8UbeLbb9NYDqAhHPRGtWo",
    authDomain: "expencify-ffd18.firebaseapp.com",
    databaseURL: "https://expencify-ffd18.firebaseio.com",
    projectId: "expencify-ffd18",
    storageBucket: "expencify-ffd18.appspot.com",
    messagingSenderId: "722878555916"
};

firebase.initializeApp(config);
firebase.database().ref().set({
    name: 'jai pandey'
});
// firebase.database().ref().set({
//     name: 'jai pandey'
// });