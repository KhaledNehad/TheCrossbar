import express, { Request, Response } from 'express';
import logger from './utils/logger';
import connect from './utils/connect';
import { config } from './config/default';
import { createServer } from 'http';

import { startServer } from './utils/startServer';

const app = express();

const port = config.server.port;
const env = config.server.env;

createServer(app).listen(port, async () => {
  await connect();
  startServer(app);
  logger.info(`Server running at http://localhost:${port} in ${env} mode`);
});
