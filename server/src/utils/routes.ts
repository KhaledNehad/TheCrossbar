import { Express, Request, Response } from 'express';

const routes = (app: Express) => {
  app.get('/ping', (req: Request, res: Response) => res.status(200).json({ message: 'pong' }));
};

export default routes;
