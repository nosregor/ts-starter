import { Router } from 'express'
import { Request, Response } from 'express'

const router = Router()

/**
 * @openapi
 * /healthz:
 *   get:
 *     summary: Get health status
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: Health status of service
 */
router.get('/', (req: Request, res: Response) => {
  // req.log.info('Health check pinged') // automatically bound to request
  res.status(200).json({ status: 'OK', timestamp: new Date() })
})

export default router
