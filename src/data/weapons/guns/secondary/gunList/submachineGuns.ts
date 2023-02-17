import { WeaponData } from '../../weaponTypes'
import akGen21Tactical from '../submachineGun/akGen21Tactical'
import blaster9mm from '../submachineGun/blaster9mm'
import chicagoTypewriter from '../submachineGun/chicagoTypewriter'
import cmp from '../submachineGun/cmp'
import cobra from '../submachineGun/cobra'
import compact5 from '../submachineGun/compact5'
import cr805B from '../submachineGun/cr805B'
import heather from '../submachineGun/heather'
import jackal from '../submachineGun/jackal'
import jacketsPiece from '../submachineGun/jacketsPiece'
import kobus90 from '../submachineGun/kobus90'
import krinkov from '../submachineGun/krinkov'
import krossVertex from '../submachineGun/krossVertex'
import mark10 from '../submachineGun/mark10'
import microUzi from '../submachineGun/microUzi'
import miyaka10Special from '../submachineGun/miyaka10Special'
import mp40 from '../submachineGun/mp40'
import para from '../submachineGun/para'
import patchettL2A1 from '../submachineGun/patchettL2A1'
import signature from '../submachineGun/signature'
import specOps from '../submachineGun/specOps'
import swedishK from '../submachineGun/swedishK'
import tatonka from '../submachineGun/tatonka'
import uzi from '../submachineGun/uzi'
import waspDsSmg from '../submachineGun/waspDsSmg'

export type SubmachineGunList =
	| 'Swedish K'
	| 'SpecOps'
	| 'Mark 10'
	| 'CR 805B'
	| 'AK Gen 21 Tactical'
	| 'Jacket\'s Piece'
	| 'Compact-5'
	| 'Chicago Typewriter'
	| 'Miyaka 10 Special'
	| 'Cobra'
	| 'CMP'
	| 'Para'
	| 'Micro Uzi'
	| 'Signature'
	| 'Jackal'
	| 'MP40'
	| 'Heather'
	| 'Krinkov'
	| 'Blaster 9mm'
	| 'Kobus 90'
	| 'Kross Vertex'
	| 'Tatonka'
	| 'Patchett L2A1'
	| 'Uzi'
	| 'Wasp-DS SMG'

const submachineGuns: Record<SubmachineGunList, WeaponData> = {
	'Swedish K': swedishK,
	'SpecOps': specOps,
	'Mark 10': mark10,
	'CR 805B': cr805B,
	'AK Gen 21 Tactical': akGen21Tactical,
	'Jacket\'s Piece': jacketsPiece,
	'Compact-5': compact5,
	'Chicago Typewriter': chicagoTypewriter,
	'Miyaka 10 Special': miyaka10Special,
	'Cobra': cobra,
	'CMP': cmp,
	'Para': para,
	'Micro Uzi': microUzi,
	'Signature': signature,
	'Jackal': jackal,
	'MP40': mp40,
	'Heather': heather,
	'Krinkov': krinkov,
	'Blaster 9mm': blaster9mm,
	'Kobus 90': kobus90,
	'Kross Vertex': krossVertex,
	'Tatonka': tatonka,
	'Patchett L2A1': patchettL2A1,
	'Uzi': uzi,
	'Wasp-DS SMG': waspDsSmg
}

export default submachineGuns