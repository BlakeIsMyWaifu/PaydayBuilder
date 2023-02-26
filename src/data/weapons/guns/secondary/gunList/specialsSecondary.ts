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

export type SecondarySpecialList =
	| 'Pistol Crossbow'
	| 'Compact 40mm'
	| 'HRL-7'
	| 'China Puff 40mm'
	| 'Commando 101'
	| 'MA-17 Flamethrower'
	| 'Arbiter'
	| 'OVE9000'
	| 'Cash Blaster'
	| 'Basilisk 3V'

const specials: Record<SecondarySpecialList, WeaponData> = {
	'Pistol Crossbow': pistolCrossbow,
	'Compact 40mm': compact40mm,
	'HRL-7': hrl7,
	'China Puff 40mm': chinaPuff40mm,
	'Commando 101': commando101,
	'MA-17 Flamethrower': ma17Flamethrower,
	'Arbiter': arbiter,
	'OVE9000': ove9000,
	'Cash Blaster': cashBlaster,
	'Basilisk 3V': basilisk3V
}

export default specials