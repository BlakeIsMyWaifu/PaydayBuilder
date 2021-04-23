import express from 'express'

import skills from '../data/abilities/skills.js'

const router = express.Router()

router.get('/skills', (req, res) => res.json(skills))

export default router