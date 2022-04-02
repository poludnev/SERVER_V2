import database from '../firebase/firebase.js';

import collectionsPath from '../lib/collections/collectionsPath.js';

import { User } from '../types/userClasses.js';
import { Data } from '../types/types.js';

const currentCollectionPath = collectionsPath.getUsersCollectionPath();

export const addUserHandler = async (
  user: User
): Promise<{ status: string; id: string }> => {
  const id = await database.addDocument(currentCollectionPath, user.data);
  return { status: 'succeed', id };
};

export const getUsersAllHandler = async (): Promise<{
  status: string;
  data: Data;
}> => {
  const data = await database.getDocuments(currentCollectionPath);
  return { status: 'succeed', data };
};

export const getUsersWithoutDeletedHandler = async (): Promise<{
  status: string;
  data: Data;
}> => {
  const data = await database.getDocumentsWithoutField(
    currentCollectionPath,
    'toDelete'
  );
  return { status: 'succeed', data };
};

export const getUserByLoginHandler = async (
  login: string
): Promise<{ status: string; data: Data }> => {
  const data = await database.getDocumentsByField(
    currentCollectionPath,
    'login',
    login
  );
  return { status: 'succeed', data };
};

export const getUserIdByLogin = async (
  login: string
): Promise<{ status: string; id: string | null }> => {
  const users = await database.getDocumentsByField(
    currentCollectionPath,
    'login',
    login
  );
  const id = Object.keys(users)[0] || null;
  return { status: 'succeed', id };
};

export const setUserToDeleteHandler = async (
  login: string
): Promise<{ status: string; error?: string; time?: number | Error }> => {
  const { id } = await getUserIdByLogin(login);

  if (!id) return { status: 'failed', error: 'user does not exist' };

  const deletedTimestamp = await database.updateDocumentData(
    currentCollectionPath,
    id,
    {
      toDelete: true
    }
  );
  return { status: 'deleted', time: deletedTimestamp };
};
