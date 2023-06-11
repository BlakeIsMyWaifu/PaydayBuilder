import { type submachineGunList } from '../../gunList'
import { type WeaponData } from '../../weaponTypes'
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

export type SubmachineGun = typeof submachineGunList[number]

const submachineGuns: Record<SubmachineGun, WeaponData> = {
	'Chicago Typewriter': chicagoTypewriter,
	'Mark 10': mark10,
	'Compact-5': compact5,
	'CMP': cmp,
	'Para': para,
	'Heather': heather,
	'Krinkov': krinkov,
	'MP40': mp40,
	'Kobus 90': kobus90,
	'Signature': signature,
	'Swedish K': swedishK,
	'SpecOps': specOps,
	'Cobra': cobra,
	'Blaster 9mm': blaster9mm,
	'Uzi': uzi,
	'Patchett L2A1': patchettL2A1,
	'Jacket\'s Piece': jacketsPiece,
	'Kross Vertex': krossVertex,
	'Tatonka': tatonka,
	'Micro Uzi': microUzi,
	'Jackal': jackal,
	'CR 805B': cr805B,
	'AK Gen 21 Tactical': akGen21Tactical,
	'Miyaka 10 Special': miyaka10Special,
	'Wasp-DS SMG': waspDsSmg
}

export default submachineGuns