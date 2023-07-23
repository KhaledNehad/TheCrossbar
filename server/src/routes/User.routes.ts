import express from 'express';
import UserController from '../controller/User.controller';

const userRouter = express.Router();

userRouter.post('/create', UserController.createUser);

userRouter.get('/get/:userId', UserController.getUser);

userRouter.get('/getall', UserController.getAllUsers);

userRouter.put('/update/:userId', UserController.updateUser);

userRouter.delete('/delete/:userId', UserController.deleteUser);

export = userRouter;
