import { RequestHandler } from 'express';
import {
  getMoneyHandler,
  getMoneyByIdHandler,
  getExpensesHandler,
  getIncomesHandler,
  getBalanceHandler,
  getBalanceByIdHandler,
  updateMoneyHandler,
  updateBalanceHandler,
  addIncomeHandler,
  addExpenseHandler,
  addBalanceHandler,
  setMoneyToDeleteHandler,
  setBalanceToDeleteHandler,
} from '../handlers/moneyHandler.js';
import { getUserIdByLogin } from '../handlers/usersHandler.js';
import { Income, Expense, Balance } from '../types/moneyClasses.js';

export const getMoney: RequestHandler = async (req, res) => {
  console.log('request money');
  const { id } = req.params;
  if (!!id) {
    const response = await getMoneyByIdHandler(id);
    res.status(200).json({ getMoneyById: 'ok', response });
    return;
  }
  const response = await getMoneyHandler();

  res.status(200).json(response);
};

export const getExpenses: RequestHandler = async (req, res) => {
  const { params, query } = req;
  const response = await getExpensesHandler();
  res.status(200).json({ getExpenses: 'ok', params, query, response });
};

export const getIncomes: RequestHandler = async (req, res) => {
  const { params, query } = req;
  const response = await getIncomesHandler();
  res.status(200).json({ getIncomes: 'ok', params, query, response });
};

export const getBalances: RequestHandler = async (req, res) => {
  const { params, query } = req;
  const { id } = req.params;
  if (!!id) {
    const response = await getBalanceByIdHandler(id);
    res.status(200).json({ getMoneyById: 'ok', response });
    return;
  }
  const response = await getBalanceHandler();
  res.status(200).json({ getBalances: 'ok', params, query, response });
};

export const updateMoney: RequestHandler = async (req, res) => {
  const { params, body } = req;
  const { id } = req.params;
  const response = await updateMoneyHandler(id, req.body);
  res.status(200).json({ updateMonay: 'ok', params, body, response });
};
export const updateBalance: RequestHandler = async (req, res) => {
  const { params, body } = req;
  const { id } = req.params;
  const response = await updateBalanceHandler(id, req.body);
  res.status(200).json({ updateMonay: 'ok', params, body, response });
};

export const addExpense: RequestHandler = async (req, res) => {
  const data = req.body;
  console.log(data);
  const {
    timestamp,
    amount,
    currency,
    userName,
    category,
    balance,
    description,
  } = req.body;
  if (!userName) {
    res.status(422).json({ error: 'no userName' });
    return;
  }
  const { id: userId } = await getUserIdByLogin(userName);
  if (!userId) {
    console.log('unknown username');
    res.status(422).json({ error: 'unknown username' });
    return;
  }
  const date = new Date(Number(timestamp));

  const expense = new Expense(
    date,
    userId,
    Number(amount),
    currency,
    category,
    userName,
    Number(balance),
    description,
  );
  const response = await addExpenseHandler(expense);
  res.status(200).json({ addExpense: 'ok', data, response });
};

export const addIncome: RequestHandler = async (req, res) => {
  const data = req.body;
  const { timestamp, amount, currency, userName, category, balance } = req.body;
  console.log(data);
  if (!userName) {
    res.status(422).json({ error: 'no userName' });
    return;
  }
  const { id: userId } = await getUserIdByLogin(userName);
  if (!userId) {
    res.status(422).json({ error: 'unknown username' });
    return;
  }
  const date = new Date(Number(timestamp));
  const income = new Income(
    date,
    userId,
    Number(amount),
    currency,
    category,
    userName,
    balance,
  );
  const response = await addIncomeHandler(income);
  res.status(200).json({ addIncome: 'ok', data, response });
};

export const addBalance: RequestHandler = async (req, res) => {
  const data = req.body;
  const {
    timestamp,
    amount,
    currency,
    userName,
    balance,
    description,
    payer,
    payee,
  } = req.body;
  if (!userName) {
    res.status(422).json({ error: 'no userName' });
    return;
  }
  const { id: userId } = await getUserIdByLogin(userName);
  if (!userId) {
    res.status(422).json({ error: 'unknown username' });
    return;
  }
  const date = new Date(Number(timestamp));
  const updatedBalance = new Balance(
    date,
    userId,
    amount,
    currency,
    userName,
    balance,
    description,
    payer,
    payee,
  );
  const response = await addBalanceHandler(updatedBalance);
  res.status(200).json({ addBalance: 'ok', data, response });
};

export const deleteExpenses: RequestHandler = async (req, res) => {
  const { id } = req.body;
  const response = await setMoneyToDeleteHandler(id);

  res.status(200).json({ delete: 'expense', response });
};

export const deleteIncomes: RequestHandler = async (req, res) => {
  const { id } = req.body;
  const response = await setMoneyToDeleteHandler(id);
  res.status(200).json({ delete: 'income', response });
};

export const deleteBalance: RequestHandler = async (req, res) => {
  const { id } = req.body;
  const response = await setBalanceToDeleteHandler(id);
  res.status(200).json({ delete: 'balance', response });
};
