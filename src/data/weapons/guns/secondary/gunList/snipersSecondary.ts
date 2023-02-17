import { WeaponData } from '../../weaponTypes'
import aranG2 from '../sniper/aranG2'
import pronghorn from '../sniper/pronghorn'

export type SecondarySniperList =
	| 'Pronghorn'
	| 'Aran G2'

const snipers: Record<SecondarySniperList, WeaponData> = {
	'Pronghorn': pronghorn,
	'Aran G2': aranG2
}

export default snipers