import firebase from 'firebase/compat/app'
import 'firebase/compat/database'



const firebaseConfig = {
    apiKey: "AIzaSyC8zv4LvTxrPZpuVK6ga_rZ-n_8PjmlHYc",
    authDomain: "accio-modudle-test.firebaseapp.com",
    databaseURL: "https://accio-modudle-test-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "accio-modudle-test",
    storageBucket: "accio-modudle-test.appspot.com",
    messagingSenderId: "736631393216",
    appId: "1:736631393216:web:4e3d30e54070fe476bd625",
    measurementId: "G-GTG1FRWH74"
  };

  firebase.initializeApp(firebaseConfig)
  export const dataref= firebase.database()
  export default firebase