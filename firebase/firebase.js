import firebase from 'firebase/app';
import 'firebase/database'; 
import 'firebase/storage'; 
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
    name: 'jai pandey',
    age: 26,
    stressLevel:6,
    isSingle: true,
    job: {
        title: 'software devloper',
        company: 'sael'
    },
    location: {
        city: 'New Delhi',
        country: 'India'
    }
}).then(() => {
    console.log('Data is save');
}).catch((e) => {
    console.log('this failed',e);
});

// database.ref('age').set(27);
// database.ref('location/city').set('Delhi');

// database.ref('attribute').set({
//     height: 73,
//     weight: 150
// }).then(() => {
//     console.log('second set call worked');
// }).catch((e) => {
//     console.log('Thing did nott for the second error',e);
// });

// database.ref('isSingle').set(null);
// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Data is removed');
//     }).catch((e) => {
//         console.log('this failed',e);
//     });
database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
});
//console.log('requested to change data');