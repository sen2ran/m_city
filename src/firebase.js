import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

//sen2 2
//Sen2
const config = {
    apiKey: "AIzaSyBow_7muyUUMdjhWdAb-zs-K3SgfLH_O5A",
    authDomain: "m-city-7c464.firebaseapp.com",
    databaseURL: "https://m-city-7c464.firebaseio.com",
    projectId: "m-city-7c464",
    storageBucket: "",
    messagingSenderId: "1020827375812",
    appId: "1:1020827375812:web:062bed7cd4dab1242a5191"
};

firebase.initializeApp(config)

const firebaseDB = firebase.database()
const firebaseMatches =  firebaseDB.ref('matches')
const firebasePromotions = firebaseDB.ref('promotions')
const firebaseTeams = firebaseDB.ref('teams')


export {
    firebaseDB,
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams
}