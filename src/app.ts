import express, { Request, Response } from 'express'
import pinoHttp from 'pino-http'
import logger from './utils/logger'
import exampleRoutes from './routes/example'
import { AppError } from './utils/errors'
import { errorHandler } from './middleware/errorHandler'

const app = express()

app.use(pinoHttp({ logger, autoLogging: true }))
app.use(express.json())

const PORT = process.env.PORT || 3000

app.get('/healthz', (req: Request, res: Response) => {
  // req.log.info('Health check pinged') // automatically bound to request
  res.status(200).json({ status: 'OK', timestamp: new Date() })
})

app.use('/api', exampleRoutes)

// Unhandled routes
app.all('*', (req, res, next) => {
  next(new AppError(`This path ${req.originalUrl} isn't on this server!`, 404))
})

// ❗️Centralized error handling must come **after** routes
app.use(errorHandler)

export default app
