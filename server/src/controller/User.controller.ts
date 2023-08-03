import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import User from '../models/User.model';
import logger from '../utils/logger';

const createUser = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body || !req.body.username || !req.body.password || !req.body.email) {
    return res.status(400).json({ message: 'Missing required fields ' });
  }

  const { username, password, email } = req.body;

  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    username,
    password,
    email,
    isAdmin: false,
    createdAt: new Date(),
    updatedAt: new Date()
  });

  try {
    return user
      .save()
      .then((user) => res.status(201).json(user))
      .catch((error) => {
        logger.error(error);
        res.status(500).json({ error });
      });
  } catch (error) {
    logger.error(error);
    return res.status(400).json({ error });
  }
};

// Single user
const getUser = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId;

  return User.findById(userId)
    .then((user) => (user ? res.status(200).json(user) : res.status(404).json({ message: 'User not found' })))
    .catch((error) => {
      logger.error(error);
      res.status(500).json({ error });
    });
};

// All Users
const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
  return User.find()
    .then((users) => res.status(200).json(users))
    .catch((error) => {
      logger.error(error);
      res.status(500).json({ error });
    });
};

const updateUser = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId;
  const { username, email, password } = req.body;

  return User.findById(userId)

    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      user.username = username || user.username;
      user.email = email || user.email;
      user.password = password || user.password;
      user.updatedAt = new Date();

      return user
        .save()
        .then((updatedUser) => res.status(200).json(updatedUser))
        .catch((error) => {
          logger.error(error);
          res.status(500).json({ error });
        });
    })
    .catch((error) => {
      logger.error(error);
      res.status(500).json({ error });
    });
};

const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId;

  return User.findByIdAndDelete(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      return res.status(201).json({ message: 'User deleted' });
    })
    .catch((error) => {
      logger.error(error);
      res.status(500).json({ error });
    });
};

export = {
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser
};
