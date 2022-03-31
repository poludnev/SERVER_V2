import {
  addDocument,
  getDocuments,
  getDocumentById,
  updateDocumentData
} from '../firebase/firebase.js';

import collectionsPath from '../lib/collections/collectionsPath.js';
import { BodyCondition, Excercise } from '../types/healthClasses.js';

const bodyCollectionPath = collectionsPath.getBodyCollectionPath();
const trainingCollectionPath = collectionsPath.getHealthCollectionPath();

export const getBodyshandler = async () => {
  const data = await getDocuments(bodyCollectionPath);
  return { status: 'succeed', data };
};

export const getBodyByIdHandler = async (id: string) => {
  const data = await getDocumentById(bodyCollectionPath, id);
  return { status: 'succeed', data };
};

export const getTrainingsHandler = async () => {
  const data = await getDocuments(trainingCollectionPath);
  return { status: 'succeed', data };
};

export const getTrainingByIdHandler = async (id: string) => {
  const data = await getDocumentById(trainingCollectionPath, id);
  return { status: 'succeed', data };
};

export const updateBodyHandler = async (
  id: string,
  fieldsToUpdate: { weight?: number; hieght?: number; bmi?: number }
) => {
  try {
    const data = await updateDocumentData(
      bodyCollectionPath,
      id,
      fieldsToUpdate
    );
    return { status: 'succeed', data };
  } catch (e) {
    return { status: 'error', error: String(e) };
  }
};

export const updateTrainingHandler = async (
  id: string,
  fieldsToUpdate: {
    title?: string;
    duration?: number;
    load?: number;
    calories?: number;
  }
) => {
  try {
    const data = await updateDocumentData(
      trainingCollectionPath,
      id,
      fieldsToUpdate
    );
    return { status: 'succeed', data };
  } catch (e) {
    return { status: 'error', error: String(e) };
  }
};

export const addBodyHandler = async (bodyCondition: BodyCondition) => {
  const data = await addDocument(bodyCollectionPath, bodyCondition.data);
  return { status: 'succeed', data };
};

export const addTrainingHandler = async (exercise: Excercise) => {
  const data = await addDocument(trainingCollectionPath, exercise.data);
  return { status: 'succeed', data };
};

export const setBodyToDeleteHandler = async (id: string) => {
  try {
    const deletedTimestamp = await updateDocumentData(bodyCollectionPath, id, {
      toDelete: true
    });
    return { status: 'deleted', time: deletedTimestamp };
  } catch (e) {
    return { status: 'error', error: 'wrong id' };
  }
};

export const setTrainingToDeleteHandler = async (id: string) => {
  try {
    const deletedTimestamp = await updateDocumentData(
      trainingCollectionPath,
      id,
      {
        toDelete: true
      }
    );
    return { status: 'deleted', time: deletedTimestamp };
  } catch (e) {
    return { status: 'error', error: 'wrong id' };
  }
};
