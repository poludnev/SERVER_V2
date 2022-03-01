import { RequestHandler } from 'express';

export const api1: RequestHandler = async (req, res) => {
  res.status(200).json({ api: 'controller ok'})
}

export const api2: RequestHandler = async (req, res) => {
  res.status(200).json({ api: 'contiller with params', params: req.params})
}
export const api3: RequestHandler = async (req, res) => {
  res.status(200).json({ api: 'contiller with params 2', params: req.params})
}
