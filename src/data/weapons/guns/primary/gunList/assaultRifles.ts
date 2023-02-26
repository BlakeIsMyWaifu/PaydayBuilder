import { type WeaponData } from '../../weaponTypes'
import ak from '../assaultRifle/ak'
import ak17 from '../assaultRifle/ak17'
import ak5 from '../assaultRifle/ak5'
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

export type AssaultRifleList =
	| 'AMCAR'
	| 'Commando 553'
	| 'Eagle Heavy'
	| 'Union 5.56'
	| 'AK'
	| 'CAR-4'
	| 'UAR'
	| 'KETCHNOV Byk-1'
	| 'Cavity 9mm'
	| 'AK.762'
	| 'JP36'
	| 'AK17'
	| 'Golden AK.762'
	| 'Bootleg'
	| 'Queen\'s Wrath'
	| 'Galant'
	| 'M308'
	| 'Clarion'
	| 'Lion\'s Roar'
	| 'Valkyria'
	| 'AK5'
	| 'Gecko 7.62'
	| 'Tempest-21'
	| 'AMR-16'
	| 'KS12 Urban'
	| 'Little Friend 7.62'
	| 'Falcon'
	| 'Rodion 3B'
	| 'Gewehr 3'

const assaultRifles: Record<AssaultRifleList, WeaponData> = {
	'AMCAR': amcar,
	'Commando 553': commando553,
	'Eagle Heavy': eagleHeavy,
	'Union 5.56': union556,
	'AK': ak,
	'CAR-4': car4,
	'UAR': uar,
	'KETCHNOV Byk-1': ketchnovByk1,
	'Cavity 9mm': cavity9mm,
	'AK.762': ak762,
	'JP36': jp36,
	'AK17': ak17,
	'Golden AK.762': goldenAk762,
	'Bootleg': bootleg,
	'Queen\'s Wrath': queensWrath,
	'Galant': galant,
	'M308': m308,
	'Clarion': clarion,
	'Lion\'s Roar': lionsRoar,
	'Valkyria': valkyria,
	'AK5': ak5,
	'Gecko 7.62': gecko762,
	'Tempest-21': tempest21,
	'AMR-16': amr16,
	'KS12 Urban': ks12Urban,
	'Little Friend 7.62': littleFriend762,
	'Falcon': falcon,
	'Rodion 3B': rodion3B,
	'Gewehr 3': gewehr3
}

export default assaultRifles