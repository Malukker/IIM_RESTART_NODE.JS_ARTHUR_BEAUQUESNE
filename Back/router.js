import express from 'express'
import agents from './routes/AgentRoutes.js'

const router = express.Router()

router.use('/agents', agents)

export default router