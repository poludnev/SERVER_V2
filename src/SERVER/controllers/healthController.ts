import { RequestHandler } from 'express';

import {
  getBodyshandler,
  getBodyByIdHandler,
  getTrainingsHandler,
  getTrainingByIdHandler,
  addBodyHandler,
  addTrainingHandler,
  updateBodyHandler,
  updateTrainingHandler,
  setBodyToDeleteHandler,
  setTrainingToDeleteHandler
} from '../handlers/healthHandler.js';
import { getUserIdByLogin } from '../handlers/usersHandler.js';
import { BodyCondition, Excercise } from '../types/healthClasses.js';

export const getBody: RequestHandler = async (req, res) => {
  const { id } = req.params;
  if (id) {
    const response = await getBodyByIdHandler(id);
    res.status(200).json(response);
    return;
  }
  const response = await getBodyshandler();
  res.status(200).json(response);
};

export const getTraining: RequestHandler = async (req, res) => {
  const { id } = req.params;
  if (id) {
    const response = await getTrainingByIdHandler(id);
    res.status(200).json(response);
    return;
  }
  const response = await getTrainingsHandler();
  res.status(200).json(response);
};

export const updateBody: RequestHandler = async (req, res) => {
  const { id, fieldsToUpdate } = req.body;
  const response = await updateBodyHandler(id, fieldsToUpdate);
  res.status(200).json(response);
};

export const updateTraining: RequestHandler = async (req, res) => {
  const { id, fieldsToUpdate } = req.body;
  const response = await updateTrainingHandler(id, fieldsToUpdate);
  res.status(200).json(response);
};

export const addBody: RequestHandler = async (req, res) => {
  const { body } = req;
  const { timestamp, weight, login, bmi, height } = body;
  console.log(timestamp, weight, login, bmi, height);
  if (!timestamp || !login || !weight) {
    if (!login) {
      res.status(422).json({ error: 'no userName' });
      return;
    }
    res.status(422).json({ error: 'required data missing' });
    return;
  }
  const { id: userId } = await getUserIdByLogin(login);
  if (!userId) {
    res.status(422).json({ error: 'unknown username' });
    return;
  }
  const date = new Date(timestamp);
  const bodyData = new BodyCondition(date, weight, userId, bmi, height);
  const response = await addBodyHandler(bodyData);
  res.status(200).json(response);
};

export const addTraining: RequestHandler = async (req, res) => {
  const { body } = req;
  const { timestamp, login, title, duration, load, calories } = body;
  if (!timestamp || !login || !title || !duration || !load || !calories) {
    if (!login) {
      res.status(422).json({ error: 'no userName' });
      return;
    }
    res.status(422).json({ error: 'required data missing' });
    return;
  }
  const { id: userId } = await getUserIdByLogin(login);
  if (!userId) {
    res.status(422).json({ error: 'unknown username' });
    return;
  }
  const date = new Date(timestamp);
  const exerciseData = new Excercise(
    date,
    userId,
    title,
    duration,
    load,
    calories
  );
  const response = await addTrainingHandler(exerciseData);
  res.status(200).json(response);
};

export const deleteBody: RequestHandler = async (req, res) => {
  const { id } = req.body;
  const response = await setBodyToDeleteHandler(id);
  res.status(200).json(response);
};

export const deleteTraining: RequestHandler = async (req, res) => {
  const { id } = req.body;
  const response = await setTrainingToDeleteHandler(id);
  res.status(200).json(response);
};

export default {
  getBody,
  getTraining,
  updateBody,
  updateTraining,
  addBody,
  addTraining,
  deleteBody,
  deleteTraining
};
