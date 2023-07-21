import express from 'express'
import dotenv from 'dotenv'
import config from 'config'
import logger from './utils/logger'
import connect from './utils/connect'

dotenv.config()

const app = express()
const port = process.env.PORT || config.get<number>('port')
const env = process.env.NODE_ENV || config.get<string>('env')

app.listen(port, async () => {
  logger.info(`Server started on port ${port} in ${env} mode`)
  await connect()
})
