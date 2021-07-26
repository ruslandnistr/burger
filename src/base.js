import  Rebase  from 're-base';
import firebase from 'firebase'

import 'firebase/database';
import 'firebase/auth'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCaH4w-j3zOVcfXhOB0XrE2ZnI7_D9e1qw",
    authDomain: "hot-burgers-d9bb3.firebaseapp.com",
    databaseURL: "https://hot-burgers-d9bb3-default-rtdb.asia-southeast1.firebasedatabase.app",
});
const base = Rebase.createClass(firebaseApp.database());
export{ firebaseApp};
export default base;