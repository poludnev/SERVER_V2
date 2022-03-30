import { RequestHandler } from 'express';

import {
  addUserHandler,
  getUsersAllHandler,
  getUsersWithoutDeletedHandler,
  getUserIdByLogin,
  getUserByLoginHandler,
  setUserToDeleteHandler
} from '../handlers/usersHandler.js';
import { User } from '../types/userClasses.js';

export const getMoneyUsers: RequestHandler = async (req, res) => {
  const { params, query } = req;
  if (params.login) {
    const response = await getUserByLoginHandler(params.login);
    res.status(200).json({ getExpenses: 'ok', params, query, response });
    return;
  }
  const { status, data } = await getUsersWithoutDeletedHandler();
  res.status(200).json({ data });
};

export const getMoneyUsersAll: RequestHandler = async (req, res) => {
  const response = await getUsersAllHandler();
  res.status(200).json({ getExpenses: 'ok', response });
};

export const addMoneyUser: RequestHandler = async (req, res) => {
  const { email, login, password } = req.body;
  if (!email || !login || !password) {
    res.status(422).json({ error: 'empty user info' });
    return;
  }
  const { id } = await getUserIdByLogin(login);
  if (id) {
    res.status(422).json({ error: 'user login already exists' });
    return;
  }
  const user = new User(email, login, password);
  const response = await addUserHandler(user);
  res.status(200).json({ response });
};

export const deleteMoneyUser: RequestHandler = async (req, res) => {
  const { login } = req.body;
  if (!login) {
    res.status(200).json({ error: 'no login' });
    return;
  }
  const response = await setUserToDeleteHandler(login);
  res.status(200).json({ test: 'test', login, response });
};

export default {
  getMoneyUsers, addMoneyUser, deleteMoneyUser, getMoneyUsersAll
}