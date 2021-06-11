import assaultRifles from './primary/assaultRifles'
import shotguns from './primary/shotgunsPrimary'
import { weaponTypes } from './weaponTypes'

const primary: weaponTypes = {
	'Assault Rifle': Object.values(assaultRifles),
	'Shotgun': Object.values(shotguns),
	'LMG': [],
	'Sniper': [],
	'Akimbo Pistol': [],
	'Akimbo SMG': [],
	'Akimbo Shotun': [],
	'Special': []
}

export default primary