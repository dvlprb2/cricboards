import {GoogleSignin, User} from '@react-native-google-signin/google-signin';
import {collection, getDocs, query, where} from 'firebase/firestore';
import {db} from '../firebase.config';

interface LoginProps {
  userInfo: User;
  hasClub: boolean;
}
export const googleSignIn = async (): Promise<LoginProps> => {
  await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  const userInfo = await GoogleSignin.signIn();
  const querySnapshot = await checkClubAndRedirect(userInfo.user.email);
  return {userInfo: userInfo, hasClub: !querySnapshot.empty};
};

export const isSignedIn = async () => {
  return await GoogleSignin.isSignedIn();
};

export const getCurrentUserInfo = async () => {
  return await GoogleSignin.signInSilently();
};

export const getCurrentUser = async () => {
  const currentUser = await GoogleSignin.getCurrentUser();
  return currentUser?.user;
};

export const checkClubAndRedirect = async (email: string) => {
  const clubRef = collection(db, 'clubs');
  const q = query(clubRef, where('members', 'array-contains', email));
  return await getDocs(q);
};

export const signOut = async () => {
  return await GoogleSignin.signOut();
};
