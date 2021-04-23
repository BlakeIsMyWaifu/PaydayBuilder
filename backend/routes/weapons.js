import express from 'express'

import melees from '../data/weapons/melees.js'
import throwables from '../data/weapons/throwables.js'

const router = express.Router()

router.get('/melees', (req, res) => res.json(melees))
router.get('/throwables', (req, res) => res.json(throwables))

export default router