import express from 'express'

import pistols from '../data/weapons/secondary/pistols.js'
import shotguns from '../data/weapons/secondary/shotgunsSecondary.js'
import specials from '../data/weapons/secondary/specialSecondary.js'
import subMachineGuns from '../data/weapons/secondary/subMachineGuns.js'

const router = express.Router()

router.get('/pistols', (req, res) => res.json(pistols))
router.get('/shotguns', (req, res) => res.json(shotguns))
router.get('/specials', (req, res) => res.json(specials))
router.get('/subMachineGuns', (req, res) => res.json(subMachineGuns))

export default router