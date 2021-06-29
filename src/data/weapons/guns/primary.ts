import assaultRifles from './primary/assaultRifles'
import lightMachineGuns from './primary/lightMachineGuns'
import shotguns from './primary/shotgunsPrimary'
import snipers from './primary/snipers'
import specials from './primary/specialsPrimary'
import { weaponTypes } from './weaponTypes'

const primary: weaponTypes = {
	'Assault Rifle': Object.values(assaultRifles),
	'Shotgun': Object.values(shotguns),
	'LMG': Object.values(lightMachineGuns),
	'Sniper': Object.values(snipers),
	'Akimbo Pistol': [],
	'Akimbo SMG': [],
	'Akimbo Shotun': [],
	'Special': Object.values(specials)
}

export default primary