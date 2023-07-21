import dayjs from 'dayjs'
import pino from 'pino'
import pinoPretty from 'pino-pretty'

const prettyStream = pinoPretty()

const logger = pino(
  {
    base: {
      pid: false,
    },
    timestamp: () => `,"time":"${dayjs().format()}"`,
  },
  prettyStream
)

export default logger
