import akimboShotguns from './primary/akimboShotguns'
import assaultRifles from './primary/assaultRifles'
import lightMachineGuns from './primary/lightMachineGuns'
import shotguns from './primary/shotgunsPrimary'
import snipers from './primary/snipersPrimary'
import specials from './primary/specialsPrimary'

const primary = {
	'Assault Rifle': assaultRifles,
	'Shotgun': shotguns,
	'LMG': lightMachineGuns,
	'Sniper': snipers,
	// 'Akimbo Pistol': [],
	// 'Akimbo SMG': [],
	'Akimbo Shotgun': akimboShotguns,
	'Special': specials
}

export default primary