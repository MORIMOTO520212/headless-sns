import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// firebaseConfig.tsは鍵情報を含むためgitでは管理していません
import { firebaseConfig } from 'src/constants/firebaseConfig';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = firebase.firestore();
