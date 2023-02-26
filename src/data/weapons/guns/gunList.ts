import { type AkimboShotgunsList } from './primary/gunList/akimboShotguns'
import { type AssaultRifleList } from './primary/gunList/assaultRifles'
import { type LightMachineGunList } from './primary/gunList/lightMachineGuns'
import { type PrimaryShotgunList } from './primary/gunList/shotgunsPrimary'
import { type PrimarySniperList } from './primary/gunList/snipersPrimary'
import { type PrimarySpecialList } from './primary/gunList/specialsPrimary'
import { type PistolList } from './secondary/gunList/pistols'
import { type SecondaryShotgunList } from './secondary/gunList/shotgunsSecondary'
import { type SecondarySniperList } from './secondary/gunList/snipersSecondary'
import { type SecondarySpecialList } from './secondary/gunList/specialsSecondary'
import { type SubmachineGunList } from './secondary/gunList/submachineGuns'

export const assaultRifleList: AssaultRifleList[] = [
	'AMCAR',
	'Commando 553',
	'Eagle Heavy',
	'Union 5.56',
	'AK',
	'CAR-4',
	'UAR',
	'KETCHNOV Byk-1',
	'Cavity 9mm',
	'AK.762',
	'JP36',
	'AK17',
	'Golden AK.762',
	'Bootleg',
	'Queen\'s Wrath',
	'Galant',
	'M308',
	'Clarion',
	'Lion\'s Roar',
	'Valkyria',
	'AK5',
	'Gecko 7.62',
	'Tempest-21',
	'AMR-16',
	'Little Friend 7.62',
	'Falcon',
	'Gewehr 3',
	'KS12 Urban'
]

export const shotgunList: (PrimaryShotgunList | SecondaryShotgunList)[] = [
	// primary
	'Predator 12G',
	'Breaker 12G',
	'Reinfeld 880',
	'Mosconi 12G Tactical',
	'M1014',
	'Raven',
	'IZHMA 12G',
	'Reinfeld 88',
	'Mosconi 12G',
	'Joceline O/U 12G',
	'Steakout 12G',
	// secondary
	'Locomotive 12G',
	'GSPS 12G',
	'Goliath 12G',
	'Grimm 12G',
	'Street Sweeper',
	'The Judge',
	'Claire 12G',
	'Argos III'
]

export const lightMachineGunList: LightMachineGunList[] = [
	'RPK',
	'KSP 58',
	'M60',
	'KSP',
	'Buzzsaw 42',
	'Brenner-21',
	'SG Versteckt 51D'
]

export const sniperList: (PrimarySniperList | SecondarySniperList)[] = [
	// primary
	'Rattlesnake',
	'R700',
	'Bernetti Rangehitter',
	'Káng Arms X1',
	'Platypus 70',
	'Lebensauger .308',
	'Desertfox',
	'Contractor .308',
	'R93',
	'Repeater 1874',
	'Grom',
	'Nagant',
	'Thanatos .50 cal',
	// secondary
	'Pronghorn'
]

export const akimboShotgunList: AkimboShotgunsList[] = [
	'Akimbo Goliath 12G',
	'Brothers Grimm 12G',
	'Akimbo Judge'
]

export const specialList: (PrimarySpecialList | SecondarySpecialList)[] = [
	// primary
	'OVE9000',
	'Plainsrider Bow',
	'Light Crossbow',
	'Airbow',
	'English Longbow',
	'XL 5.56 Microgun',
	'DECA Technologies Compound Bow',
	'Vulcan Minigun',
	'Heavy Crossbow',
	'Piglet',
	'Flamethrower Mk.1',
	'GL40',
	// secondary
	'Pistol Crossbow',
	'Compact 40mm',
	'HRL-7',
	'China Puff 40mm',
	'Commando 101',
	'MA-17 Flamethrower',
	'Arbiter',
	'OVE9000',
	'Cash Blaster',
	'Basilisk 3V'
]

export const pistolList: PistolList[] = [
	'Interceptor .45',
	'Chimano 88',
	'Gruber Kurz',
	'Signature .40',
	'Crosskill',
	'Bernetti 9',
	'Bronco .44',
	'Crosskill Chunky Compact',
	'White Streak',
	'Baby Deagle',
	'M13 9mm',
	'Chimano Custom',
	'Broomstick',
	'Parabellum',
	'5/7 AP',
	'Castigo .44',
	'Contractor',
	'Frenchman Model 87',
	'Chimano Compact',
	'Crosskill Guard',
	'LEO',
	'STRYK 18c',
	'Bernetti Auto',
	'Czech 92',
	'Igor Automatik',
	'HOLT 9mm',
	'Peacemaker .45',
	'Matever .357',
	'Deagle',
	'Gecko M2'
]

export const submachineGunList: SubmachineGunList[] = [
	'Swedish K',
	'SpecOps',
	'Mark 10',
	'CR 805B',
	'AK Gen 21 Tactical',
	'Jacket\'s Piece',
	'Compact-5',
	'Chicago Typewriter',
	'Miyaka 10 Special',
	'Cobra',
	'CMP',
	'Para',
	'Micro Uzi',
	'Signature',
	'Jackal',
	'MP40',
	'Heather',
	'Krinkov',
	'Blaster 9mm',
	'Kobus 90',
	'Kross Vertex',
	'Tatonka',
	'Patchett L2A1',
	'Uzi',
	'Wasp-DS SMG'
]

export default {
	assaultRifleList,
	shotgunList,
	lightMachineGunList,
	sniperList,
	akimboShotgunList,
	specialList,
	pistolList,
	submachineGunList
}