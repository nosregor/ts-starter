import { Request, Response, NextFunction, RequestHandler } from 'express'
import { bodyParamsValidator } from '../validators'
import { z } from 'zod'

export const validateAuthBody: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log('Validating request body...')
  try {
    // Validate the request body against the schema
    const validatedData = bodyParamsValidator.parse(req.body)
    console.log('Validated data:', validatedData)
    // Replace body with validated data (optional)
    req.body = validatedData

    next()
  } catch (error) {
    // Handle validation errors
    console.error('Validation error:', error)
    if (error instanceof z.ZodError) {
      res.status(400).json({
        message: 'Validation failed',
        errors: error.errors.map(e => ({
          path: e.path.join('.'),
          message: e.message,
        })),
      })
      return
    }

    // Pass to error handler middleware
    next(error)
  }
}
