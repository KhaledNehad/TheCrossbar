import mongoose from 'mongoose'
import config from 'config'
import logger from './logger'
import dotenv from 'dotenv'

dotenv.config()

const connect = async () => {
  const dbUri = process.env.DB_URI || config.get<string>('dbUri')

  try {
    await mongoose.connect(dbUri)
    logger.info('Database connected')
  } catch (error) {
    logger.error('db error', error)
    process.exit(1)
  }
}

export default connect
