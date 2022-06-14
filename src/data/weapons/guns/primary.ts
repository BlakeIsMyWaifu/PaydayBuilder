import akimboShotguns from './primary/gunList/akimboShotguns'
import assaultRifles from './primary/gunList/assaultRifles'
import lightMachineGuns from './primary/gunList/lightMachineGuns'
import shotguns from './primary/gunList/shotgunsPrimary'
import snipers from './primary/gunList/snipersPrimary'
import specials from './primary/gunList/specialsPrimary'

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