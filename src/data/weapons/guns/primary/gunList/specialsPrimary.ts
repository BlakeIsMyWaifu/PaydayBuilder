import { type specialPrimaryList } from '../../gunList'
import { type WeaponData } from '../../weaponTypes'
import airbow from '../special/airbow'
import decaTechnologiesCompoundBow from '../special/decaTechnologiesCompoundBow'
import englishLongbow from '../special/englishLongbow'
import flamethrowerMk1 from '../special/flamethrowerMk1'
import gl40 from '../special/gl40'
import hailstormMk5 from '../special/hailstormMk5'
import heavyCrossbow from '../special/heavyCrossbow'
import lightCrossbow from '../special/lightCrossbow'
import ove9000 from '../special/ove9000'
import piglet from '../special/piglet'
import plainsriderBow from '../special/plainsriderBow'
import vulcanMinigun from '../special/vulcanMinigun'
import xl556Microgun from '../special/xl556Microgun'

export type SpecialPrimaryList = typeof specialPrimaryList[number]

const specialsPrimary: Record<SpecialPrimaryList, WeaponData> = {
	'OVE9000': ove9000,
	'XL 5.56 Microgun': xl556Microgun,
	'DECA Technologies Compound Bow': decaTechnologiesCompoundBow,
	'GL40': gl40,
	'Vulcan Minigun': vulcanMinigun,
	'Piglet': piglet,
	'Flamethrower Mk.1': flamethrowerMk1,
	'Plainsrider Bow': plainsriderBow,
	'English Longbow': englishLongbow,
	'Light Crossbow': lightCrossbow,
	'Heavy Crossbow': heavyCrossbow,
	'Airbow': airbow,
	'Hailstorm Mk 5': hailstormMk5
}

export default specialsPrimary