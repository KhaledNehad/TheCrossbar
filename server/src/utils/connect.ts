import mongoose from 'mongoose';
import logger from './logger';
import dotenv from 'dotenv';
import { config } from '../config/default';

dotenv.config();

const connect = async () => {
  const dbUri = config.mongo.uri;

  try {
    await mongoose.connect(dbUri, { dbName: config.mongo.dbName });
    logger.info('Database connected');
  } catch (error) {
    logger.error('db error', error);
    process.exit(1);
  }
};

export default connect;
