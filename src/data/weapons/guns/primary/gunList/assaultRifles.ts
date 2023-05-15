import { type assaultRifleList } from '../../gunList'
import { type WeaponData } from '../../weaponTypes'
import ak from '../assaultRifle/ak'
import ak5 from '../assaultRifle/ak5'
import ak17 from '../assaultRifle/ak17'
import ak762 from '../assaultRifle/ak762'
import amcar from '../assaultRifle/amcar'
import amr16 from '../assaultRifle/amr16'
import bootleg from '../assaultRifle/bootleg'
import car4 from '../assaultRifle/car4'
import cavity9mm from '../assaultRifle/cavity9mm'
import clarion from '../assaultRifle/clarion'
import commando553 from '../assaultRifle/commando553'
import eagleHeavy from '../assaultRifle/eagleHeavy'
import falcon from '../assaultRifle/falcon'
import galant from '../assaultRifle/galant'
import gecko762 from '../assaultRifle/gecko762'
import gewehr3 from '../assaultRifle/gewehr3'
import goldenAk762 from '../assaultRifle/goldenAk762'
import jp36 from '../assaultRifle/jp36'
import ketchnovByk1 from '../assaultRifle/ketchnovByk1'
import ks12Urban from '../assaultRifle/ks12Urban'
import lionsRoar from '../assaultRifle/lionsRoar'
import littleFriend762 from '../assaultRifle/littleFriend762'
import m308 from '../assaultRifle/m308'
import queensWrath from '../assaultRifle/queensWrath'
import rodion3B from '../assaultRifle/rodion3B'
import tempest21 from '../assaultRifle/tempest21'
import uar from '../assaultRifle/uar'
import union556 from '../assaultRifle/union556'
import valkyria from '../assaultRifle/valkyria'

export type AssaultRifleList = typeof assaultRifleList[number]

const assaultRifles: Record<AssaultRifleList, WeaponData> = {
	'Golden AK.762': goldenAk762,
	'AMCAR': amcar,
	'AK': ak,
	'CAR-4': car4,
	'UAR': uar,
	'AK.762': ak762,
	'JP36': jp36,
	'M308': m308,
	'AK5': ak5,
	'AMR-16': amr16,
	'Commando 553': commando553,
	'Eagle Heavy': eagleHeavy,
	'Falcon': falcon,
	'Clarion': clarion,
	'Gecko 7.62': gecko762,
	'Gewehr 3': gewehr3,
	'Queen\'s Wrath': queensWrath,
	'Lion\'s Roar': lionsRoar,
	'Cavity 9mm': cavity9mm,
	'Valkyria': valkyria,
	'Bootleg': bootleg,
	'Little Friend 7.62': littleFriend762,
	'Union 5.56': union556,
	'AK17': ak17,
	'Galant': galant,
	'Tempest-21': tempest21,
	'KETCHNOV Byk-1': ketchnovByk1,
	'KS12 Urban': ks12Urban,
	'Rodion 3B': rodion3B
}

export default assaultRifles