import { type sniperSecondaryList } from '../../gunList'
import { type WeaponData } from '../../weaponTypes'
import aranG2 from '../sniper/aranG2'
import northStar from '../sniper/northStar'
import pronghorn from '../sniper/pronghorn'

export type SecondarySniper = typeof sniperSecondaryList[number]

const snipersSecondary: Record<SecondarySniper, WeaponData> = {
	'Pronghorn': pronghorn,
	'Aran G2': aranG2,
	'North Star': northStar
}

export default snipersSecondary