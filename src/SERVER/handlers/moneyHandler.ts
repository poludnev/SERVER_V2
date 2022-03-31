import {
  addDocument,
  getDocuments,
  getDocumentById,
  getDocumentsByField,
  updateDocumentData
} from '../firebase/firebase.js';

import { Income, Expense, Balance } from '../types/moneyClasses.js';
const currentCollectionPath =
  process.env.NODE_ENV === 'production' ? 'money' : 'moneyTest';
console.log('currentCollectionPath', currentCollectionPath);

export const getMoneyHandler = async () => {
  const data = await getDocuments(currentCollectionPath);
  return { status: 'succeed', data };
};

export const getMoneyByIdHandler = async (id: string) => {
  const data = await getDocumentById(currentCollectionPath, id);
  if (data === null) return { status: 'error', error: 'id not exists' };
  return { status: 'succeed', data };
};

export const getExpensesHandler = async () => {
  const data = await getDocumentsByField(
    currentCollectionPath,
    'type',
    'expense'
  );
  return { status: 'succeed', data };
};

export const getIncomesHandler = async () => {
  const data = await getDocumentsByField(
    currentCollectionPath,
    'type',
    'income'
  );
  return { status: 'succeed', data };
};

export const getBalanceHandler = async () => {
  const data = await getDocuments(currentCollectionPath);
  return { status: 'succeed', data };
};

export const getBalanceByIdHandler = async (id: string) => {
  const data = await getDocumentById(currentCollectionPath, id);
  if (data === null) return { status: 'error', error: 'id not exists' };
  return { status: 'succeed', data };
};

export const updateMoneyHandler = async (id: string, fieldsToUpdate: {}) => {
  try {
    const updateTimestamp = await updateDocumentData(
      currentCollectionPath,
      id,
      fieldsToUpdate
    );
    return { status: 'succeed', updateTimestamp };
  } catch (e) {
    return { status: 'error', error: String(e) };
  }
};

export const updateBalanceHandler = async (id: string, fieldsToUpdate: {}) => {
  try {
    const updateTimestamp = await updateDocumentData(
      currentCollectionPath,
      id,
      fieldsToUpdate
    );
    return { status: 'succeed', updateTimestamp };
  } catch (e) {
    return { status: 'error', error: String(e) };
  }
};

export const addExpenseHandler = async (expense: Expense) => {
  const id = await addDocument(currentCollectionPath, expense.data);
  return { status: 'succeed', id };
};

export const addIncomeHandler = async (income: Income) => {
  const id = await addDocument(currentCollectionPath, income.data);
  return { status: 'succeed', id };
};

export const addBalanceHandler = async (balance: Balance) => {
  const id = await addDocument(currentCollectionPath, balance.data);
  return { status: 'succeed', id };
};

export const setMoneyToDeleteHandler = async (id: string) => {
  try {
    const deletedTimestamp = await updateDocumentData(
      currentCollectionPath,
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

export const setBalanceToDeleteHandler = async (id: string) => {
  try {
    const deletedTimestamp = await updateDocumentData(
      currentCollectionPath,
      id,
      {
        toDelete: true
      }
    );
    return { status: 'deleted', time: deletedTimestamp };
  } catch (e) {
    return { status: 'error', error: String(e) };
  }
};
