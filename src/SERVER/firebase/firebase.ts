import { initializeApp } from 'firebase-admin/app';
import { getFirestore, QuerySnapshot } from 'firebase-admin/firestore';

import { Data } from '../types/types.js';

initializeApp();

const db = getFirestore();

const getDataFromSnapShot = (
  snapshot: QuerySnapshot,
  filterOptions: { toDelete?: boolean } = {}
): Data => {
  const data: Data = {};
  snapshot.forEach((doc) => {
    const docData = doc.data();
    if (filterOptions.toDelete && docData.toDelete) return;
    if (docData.date) {
      docData.timestamp = docData.date.toMillis();
    }
    data[doc.id] = docData;
  });
  return data;
};

export const addDocument = async (
  collectionPath: string,
  data: Data
): Promise<string> => {
  const docRef = db.collection(collectionPath);
  const response = await docRef.add(data);
  return response.id;
};

export const getDocuments = async (collectionPath: string): Promise<Data> => {
  const docRef = db.collection(collectionPath);
  const snapshot = await docRef.get();
  return getDataFromSnapShot(snapshot);
};

export const getDocumentById = async (collectionPath: string, id: string) => {
  const data = await (await db.collection(collectionPath).doc(id).get()).data();
  if (!data) return null;
  if (data.date) {
    data.timestamp = data.date.toMillis();
  }
  return data;
};

export const getDocumentsByField = async (
  collectionPath: string,
  fieldName: string,
  fieldValue: string | number
): Promise<Data> => {
  const docRef = db.collection(collectionPath);
  const snapshot = await docRef.where(fieldName, '==', fieldValue).get();
  return getDataFromSnapShot(snapshot);
};

export const getDocumentsWithoutField = async (
  collectionPath: string,
  fieldName: string
): Promise<Data> => {
  const docRef = db.collection(collectionPath);
  const snapshot = await docRef.get();
  return getDataFromSnapShot(snapshot, { [fieldName]: true });
};

export const updateDocumentData = async (
  collectionPath: string,
  id: string,
  fieldsTooUpdate: Data
): Promise<number | Error> => {
  const docRef = await db.collection(collectionPath).doc(id);

  if (!(await docRef.get()).exists) {
    throw new Error('does not exist');
  }
  const res = await docRef.update(fieldsTooUpdate);
  return await res.writeTime.toMillis();
};

export default {
  addDocument,
  getDocuments,
  getDocumentById,
  getDocumentsByField,
  getDocumentsWithoutField,
  updateDocumentData
};
