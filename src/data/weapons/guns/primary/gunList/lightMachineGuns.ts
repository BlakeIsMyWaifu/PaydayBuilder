import { WeaponData } from '../../weaponTypes'
import brenner21 from '../lightMachineGun/brenner21'
import buzzsaw42 from '../lightMachineGun/buzzsaw42'
import ksp from '../lightMachineGun/ksp'
import ksp58 from '../lightMachineGun/ksp58'
import m60 from '../lightMachineGun/m60'
import rpk from '../lightMachineGun/rpk'
import sgVersteckt51D from '../lightMachineGun/sgVersteckt51D'

export type LightMachineGunList =
	| 'RPK'
	| 'KSP 58'
	| 'M60'
	| 'KSP'
	| 'Buzzsaw 42'
	| 'Brenner-21'
	| 'SG Versteckt 51D'

const lightMachineGuns: Record<LightMachineGunList, WeaponData> = {
	'RPK': rpk,
	'KSP 58': ksp58,
	'M60': m60,
	'KSP': ksp,
	'Buzzsaw 42': buzzsaw42,
	'Brenner-21': brenner21,
	'SG Versteckt 51D': sgVersteckt51D
}

export default lightMachineGuns
