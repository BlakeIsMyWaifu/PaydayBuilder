import akimboShotuns from './primary/akimboShotuns'
import assaultRifles from './primary/assaultRifles'
import lightMachineGuns from './primary/lightMachineGuns'
import shotguns from './primary/shotgunsPrimary'
import snipers from './primary/snipers'
import specials from './primary/specialsPrimary'
import { weaponData } from './weaponTypes'

const primary: Record<string, weaponData[]> = {
	'Assault Rifle': Object.values(assaultRifles),
	'Shotgun': Object.values(shotguns),
	'LMG': Object.values(lightMachineGuns),
	'Sniper': Object.values(snipers),
	// 'Akimbo Pistol': [],
	// 'Akimbo SMG': [],
	'Akimbo Shotgun': Object.values(akimboShotuns),
	'Special': Object.values(specials)
}

export default primary