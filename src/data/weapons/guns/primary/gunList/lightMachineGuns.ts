import { type lightMachineGunList } from '../../gunList'
import { type WeaponData } from '../../weaponTypes'
import akronHC from '../lightMachineGun/akronHC'
import brenner21 from '../lightMachineGun/brenner21'
import buzzsaw42 from '../lightMachineGun/buzzsaw42'
import campbell74 from '../lightMachineGun/campbell74'
import ksp from '../lightMachineGun/ksp'
import ksp58 from '../lightMachineGun/ksp58'
import m60 from '../lightMachineGun/m60'
import rpk from '../lightMachineGun/rpk'
import sgVersteckt51D from '../lightMachineGun/sgVersteckt51D'

export type LightMachineGunList = typeof lightMachineGunList[number]

const lightMachineGuns: Record<LightMachineGunList, WeaponData> = {
	'KSP 58': ksp58,
	'RPK': rpk,
	'KSP': ksp,
	'Brenner-21': brenner21,
	'Buzzsaw 42': buzzsaw42,
	'M60': m60,
	'SG Versteckt 51D': sgVersteckt51D,
	'Akron HC': akronHC,
	'Campbell 74': campbell74
}

export default lightMachineGuns
