import pistols from './secondary/pistols'
import shotguns from './secondary/shotgunsSecondary'
import specials from './secondary/specialsSecondary'
import submachineGuns from './secondary/submachineGuns'
import { weaponData } from './weaponTypes'

const secondary: Record<string, weaponData[]> = {
	'Pistol': Object.values(pistols),
	'Submachine Gun': Object.values(submachineGuns),
	'Special': Object.values(specials),
	'Shotgun': Object.values(shotguns)
}

export default secondary