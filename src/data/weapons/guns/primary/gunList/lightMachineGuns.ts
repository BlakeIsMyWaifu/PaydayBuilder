import { WeaponData } from '../../weaponTypes'
import akronHC from '../lightMachineGun/akronHC'
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
	| 'SG Versteckt 51D'
	| 'KSP'
	| 'Akron HC'
	| 'Buzzsaw 42'
	| 'Brenner-21'

const lightMachineGuns: Record<LightMachineGunList, WeaponData> = {
	'RPK': rpk,
	'KSP 58': ksp58,
	'M60': m60,
	'SG Versteckt 51D': sgVersteckt51D,
	'KSP': ksp,
	'Akron HC': akronHC,
	'Buzzsaw 42': buzzsaw42,
	'Brenner-21': brenner21
}

export default lightMachineGuns
