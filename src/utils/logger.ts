import pino from 'pino'
import pinoPretty from 'pino-pretty'

const logger = pino({
  name: process.env.APP_NAME,
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:yyyy-mm-dd HH:MM:ss Z',
      ignore: 'pid,hostname',
    },
  },
})

export default logger
