import express, { Request, Response, NextFunction, Express } from 'express';
import logger from './logger';
import routes from './routes';
import userRouter from '../routes/User.routes';
import postRouter from '../routes/Post.routes';

export const startServer = (app: Express) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    logger.info(`Incoming -> Method: [${req.method}] Url: [${req.url}] body:[${req.body}] IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
      logger.info(`Outgoing <- Method: [${req.method}] Url: [${req.url}] IP: [${req.socket.remoteAddress}] Status: [${res.statusCode}]`);
    });

    next();
  });
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE');
      return res.status(200).json({});
    }

    next();
  });

  routes(app);

  app.use('/api/users', userRouter);
  app.use('/api/posts', postRouter);

  app.use((req, res, next) => {
    const error = new Error('Not found');
    logger.error(error);
    return res.status(404).json({
      message: error.message
    });
  });
};
