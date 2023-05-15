import { type sniperPrimaryList } from '../../gunList'
import { type WeaponData } from '../../weaponTypes'
import bernettiRangehitter from '../sniper/bernettiRangehitter'
import contractor308 from '../sniper/contractor308'
import desertfox from '../sniper/desertfox'
import grom from '../sniper/grom'
import kangArmsX1 from '../sniper/kangArmsX1'
import lebensauger308 from '../sniper/lebensauger308'
import nagant from '../sniper/nagant'
import platypus70 from '../sniper/platypus70'
import r93 from '../sniper/r93'
import r700 from '../sniper/r700'
import rattlesnake from '../sniper/rattlesnake'
import repeater1874 from '../sniper/repeater1874'
import thanatos50Cal from '../sniper/thanatos50Cal'

export type SniperPrimaryList = typeof sniperPrimaryList[number]

const snipersPrimary: Record<SniperPrimaryList, WeaponData> = {
	'Platypus 70': platypus70,
	'Rattlesnake': rattlesnake,
	'R93': r93,
	'Thanatos .50 cal': thanatos50Cal,
	'Nagant': nagant,
	'Repeater 1874': repeater1874,
	'Lebensauger .308': lebensauger308,
	'Desertfox': desertfox,
	'Contractor .308': contractor308,
	'Grom': grom,
	'R700': r700,
	'Bernetti Rangehitter': bernettiRangehitter,
	'Káng Arms X1': kangArmsX1
}

export default snipersPrimary