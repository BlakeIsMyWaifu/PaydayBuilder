import express from 'express'

import armours from '../data/character/armours.js'
import characters from '../data/character/characters.js'
import deployables from '../data/character/depolyables.js'
import masks from '../data/character/masks.js'

const router = express.Router()

router.get('/armours', (req, res) => res.json(armours))
router.get('/characters', (req, res) => res.json(characters))
router.get('/deployables', (req, res) => res.json(deployables))
router.get('/masks', (req, res) => res.json(masks))

export default router