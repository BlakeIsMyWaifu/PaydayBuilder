import { WeaponData } from '../../weaponTypes'
import pronghorn from '../sniper/pronghorn'

export type SecondarySniperList =
	| 'Pronghorn'

const snipers: Record<SecondarySniperList, WeaponData> = {
	'Pronghorn': pronghorn
}

export default snipers