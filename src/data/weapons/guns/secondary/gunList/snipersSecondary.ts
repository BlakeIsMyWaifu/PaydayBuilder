import { WeaponData } from '../../weaponTypes'
import aranG2 from '../sniper/aranG2'
import northStar from '../sniper/northStar'
import pronghorn from '../sniper/pronghorn'

export type SecondarySniperList =
	| 'Pronghorn'
	| 'Aran G2'
	| 'North Star'

const snipers: Record<SecondarySniperList, WeaponData> = {
	'Pronghorn': pronghorn,
	'Aran G2': aranG2,
	'North Star': northStar
}

export default snipers