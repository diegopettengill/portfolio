import firebase from 'firebase/app';
import 'firebase/firebase-firestore';

const config = {
    apiKey: "AIzaSyDB2NPIiedjKyhzu8VKcfd0ML3g4u603mc",
    authDomain: "portfolio-a4829.firebaseapp.com",
    databaseURL: "https://portfolio-a4829.firebaseio.com",
    projectId: "portfolio-a4829",
    storageBucket: "portfolio-a4829.appspot.com",
    messagingSenderId: "506262009598"
};

export default firebase.initializeApp(config);