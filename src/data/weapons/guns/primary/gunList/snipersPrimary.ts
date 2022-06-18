import { WeaponData } from '../../weaponTypes'
import bernettiRangehitter from '../sniper/bernettiRangehitter'
import contractor308 from '../sniper/contractor308'
import desertfox from '../sniper/desertfox'
import grom from '../sniper/grom'
import kangArmsX1 from '../sniper/kangArmsX1'
import lebensauger308 from '../sniper/lebensauger308'
import nagant from '../sniper/nagant'
import platypus70 from '../sniper/platypus70'
import r700 from '../sniper/r700'
import r93 from '../sniper/r93'
import rattlesnake from '../sniper/rattlesnake'
import repeater1874 from '../sniper/repeater1874'
import thanatos50Cal from '../sniper/thanatos50Cal'

export type PrimarySniperList =
	'Rattlesnake' |
	'R700' |
	'Bernetti Rangehitter' |
	'Káng Arms X1' |
	'Platypus 70' |
	'Lebensauger .308' |
	'Desertfox' |
	'Contractor .308' |
	'R93' |
	'Repeater 1874' |
	'Grom' |
	'Nagant' |
	'Thanatos .50 cal'

const snipers: Record<PrimarySniperList, WeaponData> = {
	'Rattlesnake': rattlesnake,
	'R700': r700,
	'Bernetti Rangehitter': bernettiRangehitter,
	'Káng Arms X1': kangArmsX1,
	'Platypus 70': platypus70,
	'Lebensauger .308': lebensauger308,
	'Desertfox': desertfox,
	'Contractor .308': contractor308,
	'R93': r93,
	'Repeater 1874': repeater1874,
	'Grom': grom,
	'Nagant': nagant,
	'Thanatos .50 cal': thanatos50Cal
}

export default snipers