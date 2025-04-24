import { Router } from 'express'
import { AppError } from '../utils/errors'

const router = Router()

router.get('/fail', (_req, _res) => {
  throw new AppError('This route fails intentionally', 400)
})

export default router
