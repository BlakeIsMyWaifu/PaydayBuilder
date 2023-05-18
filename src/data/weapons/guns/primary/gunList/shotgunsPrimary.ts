import { type shotgunPrimaryList } from '../../gunList'
import { type WeaponData } from '../../weaponTypes'
import breaker12G from '../shotgun/breaker12G'
import Deimos from '../shotgun/Deimos'
import izhma12G from '../shotgun/izhma12G'
import jocelineOU12G from '../shotgun/jocelineOU12G'
import m1014 from '../shotgun/m1014'
import mosconi12G from '../shotgun/mosconi12G'
import mosconi12GTactical from '../shotgun/mosconi12GTactical'
import predator12G from '../shotgun/predator12G'
import raven from '../shotgun/raven'
import reinfeld88 from '../shotgun/reinfeld88'
import reinfeld880 from '../shotgun/reinfeld880'
import steakout12G from '../shotgun/steakout12G'
import vd12 from '../shotgun/vd12'

export type ShotgunPrimaryList = typeof shotgunPrimaryList[number]

const shotgunsPrimary: Record<ShotgunPrimaryList, WeaponData> = {
	'Predator 12G': predator12G,
	'Joceline O/U 12G': jocelineOU12G,
	'Reinfeld 880': reinfeld880,
	'IZHMA 12G': izhma12G,
	'Mosconi 12G': mosconi12G,
	'M1014': m1014,
	'Raven': raven,
	'Steakout 12G': steakout12G,
	'Breaker 12G': breaker12G,
	'Reinfeld 88': reinfeld88,
	'Mosconi 12G Tactical': mosconi12GTactical,
	'VD-12': vd12,
	'Deimos': Deimos
}

export default shotgunsPrimary