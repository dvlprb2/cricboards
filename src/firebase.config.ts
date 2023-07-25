import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDVJBccG4pNgC2u0e0ogxCbYcpZGxntzEc',
  authDomain: 'cricboards-47.firebaseapp.com',
  projectId: 'cricboards-47',
  storageBucket: 'cricboards-47.appspot.com',
  messagingSenderId: '568762015069',
  appId: '1:568762015069:web:388d9833afa0eb03609cb4',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// const checkClubAndRedirect = email => {
//   const clubRef = firebase.firestore().collection('clubs');
//   clubRef
//     .where('membersEmails', 'array-contains', email)
//     .get()
//     .then(querySnapshot => {
//       if (!querySnapshot.empty) {
//         // User is already added to at least one club
//         navigation.navigate('Home');
//       } else {
//         // User is not added to any club
//         navigation.navigate('CreateClub');
//       }
//     })
//     .catch(error => {
//       console.error('Error checking clubs:', error);
//     });
// };
