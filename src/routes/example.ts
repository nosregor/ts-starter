import { Router, Request, Response } from 'express'
import { validate } from '../middlewares/validate'
import { createUserSchema } from '../schemas/userSchema'

const router = Router()

router.post('/body-params', validate(createUserSchema), (req: Request, res: Response) => {
  /**
   * Get variables from body params
   */
  const { email, password, mobile } = req.body

  res.status(200).send({ email, password, mobile })
})

export default router
