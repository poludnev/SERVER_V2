import {
  addDocument,
  getDocuments,
  getDocumentsByField,
  updateDocumentData,
  getDocumentsWithoutField
} from '../firebase/firebase.js';

import { User } from '../types/userClasses.js';
import { Data } from '../firebase/types.js';

const currentCollectionPath = 'users-test';

export const addUserHandler = async (
  user: User
): Promise<{ status: string; id: string }> => {
  const id = await addDocument(currentCollectionPath, user.data);
  return { status: 'succeed', id };
};

export const getUsersAllHandler = async (): Promise<{
  status: string;
  data: Data;
}> => {
  const data = await getDocuments(currentCollectionPath);
  return { status: 'succeed', data };
};

export const getUsersWithoutDeletedHandler = async (): Promise<{
  status: string;
  data: Data;
}> => {
  const data = await getDocumentsWithoutField(
    currentCollectionPath,
    'toDelete'
  );
  return { status: 'succeed', data };
};

export const getUserByLoginHandler = async (
  login: string
): Promise<{ status: string; data: Data }> => {
  const data = await getDocumentsByField(currentCollectionPath, 'login', login);
  return { status: 'succeed', data };
};

export const getUserIdByLogin = async (
  login: string
): Promise<{ status: string; id: string | null }> => {
  const users = await getDocumentsByField(
    currentCollectionPath,
    'login',
    login
  );
  const id = Object.keys(users)[0] || null;
  return { status: 'succeed', id };
};

export const setUserToDeleteHandler = async (login: string): Promise<{}> => {
  const { id } = await getUserIdByLogin(login);

  if (!id) return { status: 'failed', error: 'user does not exist' };

  const deletedTimestamp = await updateDocumentData(currentCollectionPath, id, {
    toDelete: true
  });
  return { status: 'deleted', time: deletedTimestamp };
};
