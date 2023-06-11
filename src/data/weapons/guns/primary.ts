import akimboShotguns from './primary/gunList/akimboShotguns'
import assaultRifles from './primary/gunList/assaultRifles'
import lightMachineGuns from './primary/gunList/lightMachineGuns'
import shotgunsPrimary from './primary/gunList/shotgunsPrimary'
import snipersPrimary from './primary/gunList/snipersPrimary'
import specialsPrimary from './primary/gunList/specialsPrimary'

const primary = {
	'Assault Rifle': assaultRifles,
	'Shotgun': shotgunsPrimary,
	'LMG': lightMachineGuns,
	'Sniper': snipersPrimary,
	// 'Akimbo Pistol': [],
	// 'Akimbo SMG': [],
	'Akimbo Shotgun': akimboShotguns,
	'Special': specialsPrimary
}

export default primary