import { updateTraining } from '../controllers/healthController.js';
import {
  addDocument,
  getDocuments,
  getDocumentById,
  getDocumentsByField,
  updateDocumentData,
} from '../firebase/firebase.js';

import { BodyCondition, Excercise } from '../types/healthClasses.js';
const bodyCollectionPath = 'body-test';
const trainingCollectionPath = 'training-test';

export const getBodyshandler = async () => {
  const response = await getDocuments(bodyCollectionPath);
  return response;
};

export const getBodyByIdHandler = async (id: string) => {
  const response = await getDocumentById(bodyCollectionPath, id);
  return response;
};

export const getTrainingsHandler = async () => {
  const response = await getDocuments(trainingCollectionPath);
  return response;
};

export const getTrainingByIdHandler = async (id: string) => {
  const response = await getDocumentById(trainingCollectionPath, id);
  return response;
};

export const updateBodyHandler = async (id: string, fieldsToUpdate: {}) => {
  try {
    const response = await updateDocumentData(
      bodyCollectionPath,
      id,
      fieldsToUpdate,
    );
    return response;
  } catch (e) {
    return { status: 'error', error: String(e) };
  }
};

export const updateTrainingHandler = async (id: string, fieldsToUpdate: {}) => {
  try {
    const response = await updateDocumentData(
      trainingCollectionPath,
      id,
      fieldsToUpdate,
    );
    return response;
  } catch (e) {
    return { status: 'error', error: String(e) };
  }
};

export const addBodyHandler = async (bodyCondition: BodyCondition) => {
  const response = await addDocument(bodyCollectionPath, bodyCondition.data);
  return response;
};

export const addTrainingHandler = async (exercise: Excercise) => {
  const response = await addDocument(trainingCollectionPath, exercise.data);
  return response;
};

export const setBodyToDeleteHandler = async (id: string) => {
  try {
    const deletedTimestamp = await updateDocumentData(bodyCollectionPath, id, {
      toDelete: true,
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
        toDelete: true,
      },
    );
    return { status: 'deleted', time: deletedTimestamp };
  } catch (e) {
    return { status: 'error', error: 'wrong id' };
  }
};
