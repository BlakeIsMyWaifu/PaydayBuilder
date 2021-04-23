import express from 'express'

import akimbos from '../data/weapons/primary/akimbos.js'
import assaultRifles from '../data/weapons/primary/assaultRifles.js'
import lightMachineGuns from '../data/weapons/primary/lightMachineGuns.js'
import shotguns from '../data/weapons/primary/shotgunsPrimary.js'
import sniperRifles from '../data/weapons/primary/sniperRifles.js'
import specials from '../data/weapons/primary/specialPrimary.js'

const router = express.Router()

router.get('/akimbos', (req, res) => res.json(akimbos))
router.get('/assaultRifles', (req, res) => res.json(assaultRifles))
router.get('/lightMachineGuns', (req, res) => res.json(lightMachineGuns))
router.get('/shotguns', (req, res) => res.json(shotguns))
router.get('/sniperRifles', (req, res) => res.json(sniperRifles))
router.get('/specials', (req, res) => res.json(specials))

export default router