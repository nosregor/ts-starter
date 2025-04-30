import { Router, Request, Response } from 'express'
import { validateAuthBody } from '../middlewares/validate'

const router = Router()

router.post('/body-params', validateAuthBody, (req: Request, res: Response) => {
  /**
   * Get variables from body params
   */
  const { email, password, mobile } = req.body

  res.status(200).send({ email, password, mobile })
})

export default router
