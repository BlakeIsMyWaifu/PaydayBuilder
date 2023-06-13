import pistols from './secondary/gunList/pistols'
import shotgunsSecondary from './secondary/gunList/shotgunsSecondary'
import snipersSecondary from './secondary/gunList/snipersSecondary'
import specialsSecondary from './secondary/gunList/specialsSecondary'
import submachineGuns from './secondary/gunList/submachineGuns'

export type SecondaryWeaponType = keyof typeof secondary

const secondary = {
	'Pistol': pistols,
	'Submachine Gun': submachineGuns,
	'Special': specialsSecondary,
	'Shotgun': shotgunsSecondary,
	'Sniper': snipersSecondary
}

export default secondary