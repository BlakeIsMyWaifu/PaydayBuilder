import { WeaponData } from '../../weaponTypes'
import airbow from '../special/airbow'
import decaTechnologiesCompoundBow from '../special/decaTechnologiesCompoundBow'
import englishLongbow from '../special/englishLongbow'
import flamethrowerMk1 from '../special/flamethrowerMk1'
import gl40 from '../special/gl40'
import heavyCrossbow from '../special/heavyCrossbow'
import lightCrossbow from '../special/lightCrossbow'
import ove9000 from '../special/ove9000'
import piglet from '../special/piglet'
import plainsriderBow from '../special/plainsriderBow'
import vulcanMinigun from '../special/vulcanMinigun'
import xl556Microgun from '../special/xl556Microgun'

export type PrimarySpecialList =
	'OVE9000' |
	'Plainsrider Bow' |
	'Light Crossbow' |
	'Airbow' |
	'English Longbow' |
	'XL 5.56 Microgun' |
	'DECA Technologies Compound Bow' |
	'Vulcan Minigun' |
	'Heavy Crossbow' |
	'Piglet' |
	'Flamethrower Mk.1' |
	'GL40'

const specials: Record<PrimarySpecialList, WeaponData> = {
	'OVE9000': ove9000,
	'Plainsrider Bow': plainsriderBow,
	'Light Crossbow': lightCrossbow,
	'Airbow': airbow,
	'English Longbow': englishLongbow,
	'XL 5.56 Microgun': xl556Microgun,
	'DECA Technologies Compound Bow': decaTechnologiesCompoundBow,
	'Vulcan Minigun': vulcanMinigun,
	'Heavy Crossbow': heavyCrossbow,
	'Piglet': piglet,
	'Flamethrower Mk.1': flamethrowerMk1,
	'GL40': gl40
}

export default specials