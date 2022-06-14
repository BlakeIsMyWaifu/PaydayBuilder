import { WeaponData } from '../../weaponTypes'
import breaker12G from '../shotgun/breaker12G'
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

export type PrimaryShotgunList =
	'Predator 12G' |
	'Breaker 12G' |
	'Reinfeld 880' |
	'Mosconi 12G Tactical' |
	'M1014' |
	'Raven' |
	'IZHMA 12G' |
	'Reinfeld 88' |
	'Mosconi 12G' |
	'Joceline O/U 12G' |
	'Steakout 12G'

const shotguns: Record<PrimaryShotgunList, WeaponData> = {
	'Predator 12G': predator12G,
	'Breaker 12G': breaker12G,
	'Reinfeld 880': reinfeld880,
	'Mosconi 12G Tactical': mosconi12GTactical,
	'M1014': m1014,
	'Raven': raven,
	'IZHMA 12G': izhma12G,
	'Reinfeld 88': reinfeld88,
	'Mosconi 12G': mosconi12G,
	'Joceline O/U 12G': jocelineOU12G,
	'Steakout 12G': steakout12G
}

export default shotguns