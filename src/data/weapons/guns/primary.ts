import akimboShotuns from './primary/akimboShotuns'
import assaultRifles from './primary/assaultRifles'
import lightMachineGuns from './primary/lightMachineGuns'
import shotguns from './primary/shotgunsPrimary'
import snipers from './primary/snipers'
import specials from './primary/specialsPrimary'

const primary = {
	'Assault Rifle': assaultRifles,
	'Shotgun': shotguns,
	'LMG': lightMachineGuns,
	'Sniper': snipers,
	// 'Akimbo Pistol': [],
	// 'Akimbo SMG': [],
	'Akimbo Shotgun': akimboShotuns,
	'Special': specials
}

export default primary