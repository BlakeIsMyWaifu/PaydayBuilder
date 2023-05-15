import { type specialSecondaryList } from '../../gunList'
import { type WeaponData } from '../../weaponTypes'
import arbiter from '../special/arbiter'
import basilisk3V from '../special/basilisk3V'
import cashBlaster from '../special/cashBlaster'
import chinaPuff40mm from '../special/chinaPuff40mm'
import commando101 from '../special/commando101'
import compact40mm from '../special/compact40mm'
import hrl7 from '../special/hrl7'
import ma17Flamethrower from '../special/ma17Flamethrower'
import ove9000 from '../special/ove9000'
import pistolCrossbow from '../special/pistolCrossbow'

export type SpecialSecondaryList = typeof specialSecondaryList[number]

const specialsSecondary: Record<SpecialSecondaryList, WeaponData> = {
	'OVE9000': ove9000,
	'Compact 40mm': compact40mm,
	'MA-17 Flamethrower': ma17Flamethrower,
	'HRL-7': hrl7,
	'Pistol Crossbow': pistolCrossbow,
	'China Puff 40mm': chinaPuff40mm,
	'Arbiter': arbiter,
	'Commando 101': commando101,
	'Basilisk 3V': basilisk3V,
	'Cash Blaster': cashBlaster
}

export default specialsSecondary