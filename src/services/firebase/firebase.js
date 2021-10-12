import * as firebase from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA15Nzldgfp8hlSQVpMYRWInQHggIJInJg",
    authDomain: "coderhouse-ecommerce-efe4b.firebaseapp.com",
    projectId: "coderhouse-ecommerce-efe4b",
    storageBucket: "coderhouse-ecommerce-efe4b.appspot.com",
    messagingSenderId: "347066247940",
    appId: "1:347066247940:web:a1e62d1b011d4f04aafe51"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export const getFirebase = () => {
      return app
  }

  export const db = getFirestore(app)