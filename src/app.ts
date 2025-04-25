import express, { Request, Response } from 'express'
import pinoHttp from 'pino-http'
import logger from './utils/logger'
import exampleRoutes from './routes/example'
import { AppError } from './utils/errors'
import { errorHandler } from './middleware/errorHandler'
import { swaggerSpec } from './docs/swagger'
import swaggerUi from 'swagger-ui-express'
import helmet from 'helmet'
import cors from 'cors'

const app = express()

// Security middleware
app.use(helmet())
app.use(cors())
app.use(express.json({ limit: '10kb' }))

// logging middleware
// ❗️pinoHttp must be used before any routes
app.use(pinoHttp({ logger, autoLogging: true }))

// Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use('/api', exampleRoutes)

// Health check route
app.get('/healthz', (req: Request, res: Response) => {
  // req.log.info('Health check pinged') // automatically bound to request
  res.status(200).json({ status: 'OK', timestamp: new Date() })
})

// Unhandled routes
app.all('*', (req, res, next) => {
  next(new AppError(`This path ${req.originalUrl} isn't on this server!`, 404))
})

// Global error handling 
// ❗️Centralized error handling must come **after** routes
app.use(errorHandler)

export default app
