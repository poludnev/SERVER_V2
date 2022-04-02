import database from '../firebase/firebase.js';

import collectionsPath from '../lib/collections/collectionsPath.js';

import { Income, Expense, Balance } from '../types/moneyClasses.js';
const currentCollectionPath = collectionsPath.getMoneyCollectionPath();

export const getMoneyHandler = async () => {
  const data = await database.getDocuments(currentCollectionPath);
  return { status: 'succeed', data };
};

export const getMoneyByIdHandler = async (id: string) => {
  const data = await database.getDocumentById(currentCollectionPath, id);
  if (data === null) return { status: 'error', error: 'id not exists' };
  return { status: 'succeed', data };
};

export const getExpensesHandler = async () => {
  const data = await database.getDocumentsByField(
    currentCollectionPath,
    'type',
    'expense'
  );
  return { status: 'succeed', data };
};

export const getIncomesHandler = async () => {
  const data = await database.getDocumentsByField(
    currentCollectionPath,
    'type',
    'income'
  );
  return { status: 'succeed', data };
};

export const getBalanceHandler = async () => {
  const data = await database.getDocumentsByField(
    currentCollectionPath,
    'type',
    'balance'
  );
  return { status: 'succeed', data };
};

export const getBalanceByIdHandler = async (id: string) => {
  const data = await database.getDocumentById(currentCollectionPath, id);
  if (data === null) return { status: 'error', error: 'id not exists' };
  return { status: 'succeed', data };
};

export const updateMoneyHandler = async (
  id: string,
  fieldsToUpdate: { amount?: number; balance?: number; description?: string }
) => {
  try {
    const updateTimestamp = await database.updateDocumentData(
      currentCollectionPath,
      id,
      fieldsToUpdate
    );
    return { status: 'succeed', updateTimestamp };
  } catch (e) {
    return { status: 'error', error: String(e) };
  }
};

export const updateBalanceHandler = async (
  id: string,
  fieldsToUpdate: { amount?: number; balance?: number; description?: string }
) => {
  try {
    const updateTimestamp = await database.updateDocumentData(
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
  const id = await database.addDocument(currentCollectionPath, expense.data);
  return { status: 'succeed', id };
};

export const addIncomeHandler = async (income: Income) => {
  const id = await database.addDocument(currentCollectionPath, income.data);
  return { status: 'succeed', id };
};

export const addBalanceHandler = async (balance: Balance) => {
  const id = await database.addDocument(currentCollectionPath, balance.data);
  return { status: 'succeed', id };
};

export const setMoneyToDeleteHandler = async (id: string) => {
  try {
    const deletedTimestamp = await database.updateDocumentData(
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
    const deletedTimestamp = await database.updateDocumentData(
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
