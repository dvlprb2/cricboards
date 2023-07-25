import {
  doc,
  addDoc,
  collection,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import {db} from '../firebase.config';
import {getCurrentUser} from './auth';

export interface ClubDocumentData {
  name: string;
  members: Array<string>;
  owner: string;
}
// Add a new document in collection "clubs"
export const createClub = async (data: ClubDocumentData) => {
  return await addDoc(collection(db, 'clubs'), data);
};
// Add a new member in collection "clubs.members"
export const addMemberToClub = async (clubId: string, memberId: string) => {
  const clubRef = doc(db, 'clubs', clubId);

  // Atomically add a new region to the "members" array field.
  return await updateDoc(clubRef, {
    members: arrayUnion(memberId),
  });
};
// Delete a member from collection "clubs.members"
export const removeMemberFromClub = async (
  clubId: string,
  memberId: string,
) => {
  const clubRef = doc(db, 'clubs', clubId);

  // Atomically remove a region from the "members" array field.
  return await updateDoc(clubRef, {
    members: arrayRemove(memberId),
  });
};

export const getClubsByUser = async () => {
  const currentUser = await getCurrentUser();
  const q = query(
    collection(db, 'clubs'),
    where('owner', '==', currentUser?.id),
  );

  return await getDocs(q);
};
