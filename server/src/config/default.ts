import dotenv from 'dotenv';
dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_CLUSTER = process.env.MONGO_CLUSTER || '';
const MONGO_DB_NAME = process.env.MONGO_DB_NAME || '';
const MONGO_HOST = process.env.MONGO_HOST;

const DB_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}${MONGO_HOST}`;

const PORT = process.env.PORT || '';
const NODE_ENV = process.env.NODE_ENV || 'development';

const requiredEnvVariables = [MONGO_USERNAME, MONGO_PASSWORD, MONGO_CLUSTER, DB_URI, MONGO_DB_NAME, MONGO_HOST, PORT, NODE_ENV];

const isEnvVariableMissing = requiredEnvVariables.some((envVariable) => {
  return envVariable === '';
});

if (isEnvVariableMissing) {
  throw new Error('Some of the required environment variables are missing');
}

export const config = {
  mongo: {
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
    clusterName: MONGO_CLUSTER,
    host: MONGO_HOST,
    uri: DB_URI,
    dbName: MONGO_DB_NAME
  },
  server: {
    port: PORT,
    env: NODE_ENV
  }
};
