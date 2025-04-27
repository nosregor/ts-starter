import { Router } from 'express'

const router = Router()

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Get all users
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: List of users
 */
router.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'Alice' }])
})

export default router
