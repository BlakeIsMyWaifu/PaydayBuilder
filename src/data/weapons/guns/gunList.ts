/*
 * Primary
 */

export const assaultRifleList = [
	'Golden AK.762',
	'AMCAR',
	'AK',
	'CAR-4',
	'UAR',
	'AK.762',
	'JP36',
	'M308',
	'AK5',
	'AMR-16',
	'Commando 553',
	'Eagle Heavy',
	'Falcon',
	'Clarion',
	'Gecko 7.62',
	'Gewehr 3',
	'Queen\'s Wrath',
	'Lion\'s Roar',
	'Cavity 9mm',
	'Valkyria',
	'Bootleg',
	'Little Friend 7.62',
	'Union 5.56',
	'AK17',
	'Galant',
	'Tempest-21',
	'KETCHNOV Byk-1',
	'KS12 Urban',
	'Rodion 3B'
] as const

export const shotgunPrimaryList = [
	'Predator 12G',
	'Joceline O/U 12G',
	'Reinfeld 880',
	'IZHMA 12G',
	'Mosconi 12G',
	'M1014',
	'Raven',
	'Steakout 12G',
	'Breaker 12G',
	'Reinfeld 88',
	'Mosconi 12G Tactical',
	'VD-12',
	'Deimos'
] as const

export const lightMachineGunList = [
	'KSP 58',
	'RPK',
	'KSP',
	'Brenner-21',
	'Buzzsaw 42',
	'M60',
	'SG Versteckt 51D',
	'Akron HC',
	'Campbell 74'
] as const

export const sniperPrimaryList = [
	'Platypus 70',
	'Rattlesnake',
	'R93',
	'Thanatos .50 cal',
	'Nagant',
	'Repeater 1874',
	'Lebensauger .308',
	'Desertfox',
	'Contractor .308',
	'Grom',
	'R700',
	'Bernetti Rangehitter',
	'Káng Arms X1',
	'Amaroq 900'
] as const

export const akimboShotgunList = [
	'Akimbo Goliath 12G',
	'Brothers Grimm 12G',
	'Akimbo Judge',
	'Akimbo VD-12'
] as const

export const specialPrimaryList = [
	'OVE9000',
	'XL 5.56 Microgun',
	'DECA Technologies Compound Bow',
	'GL40',
	'Vulcan Minigun',
	'Piglet',
	'Flamethrower Mk.1',
	'Plainsrider Bow',
	'English Longbow',
	'Light Crossbow',
	'Heavy Crossbow',
	'Airbow',
	'Hailstorm Mk 5'
] as const

/*
 * Secondary
 */

export const pistolList = [
	'Interceptor .45',
	'Chimano Custom',
	'5/7 AP',
	'Chimano Compact',
	'Chimano 88',
	'Crosskill',
	'Bernetti 9',
	'Bronco .44',
	'White Streak',
	'Parabellum',
	'Castigo .44',
	'Crosskill Guard',
	'STRYK 18c',
	'Deagle',
	'M13 9mm',
	'Gruber Kurz',
	'Signature .40',
	'Broomstick',
	'Contractor',
	'LEO',
	'Peacemaker .45',
	'Matever .357',
	'Baby Deagle',
	'Bernetti Auto',
	'Czech 92',
	'Igor Automatik',
	'HOLT 9mm',
	'Frenchman Model 87',
	'Crosskill Chunky Compact',
	'RUS-12 Angry Tiger',
	'Gecko M2',
	'Káng Arms Model 54'
] as const

export const submachineGunList = [
	'Chicago Typewriter',
	'Mark 10',
	'Compact-5',
	'CMP',
	'Para',
	'Heather',
	'Krinkov',
	'MP40',
	'Kobus 90',
	'Signature',
	'Swedish K',
	'SpecOps',
	'Cobra',
	'Blaster 9mm',
	'Uzi',
	'Patchett L2A1',
	'Jacket\'s Piece',
	'Kross Vertex',
	'Tatonka',
	'Micro Uzi',
	'Jackal',
	'CR 805B',
	'AK Gen 21 Tactical',
	'Miyaka 10 Special',
	'Wasp-DS SMG'
] as const

export const specialSecondaryList = [
	'OVE9000',
	'Compact 40mm',
	'MA-17 Flamethrower',
	'HRL-7',
	'Pistol Crossbow',
	'China Puff 40mm',
	'Arbiter',
	'Commando 101',
	'Basilisk 3V',
	'Cash Blaster'
] as const

export const shotgunSecondaryList = [
	'The Judge',
	'Locomotive 12G',
	'Goliath 12G',
	'Grimm 12G',
	'Claire 12G',
	'Street Sweeper',
	'GSPS 12G',
	'Argos III'
] as const

export const sniperSecondaryList = [
	'Pronghorn',
	'Aran G2',
	'North Star'
] as const

/*
 * Both
 */

export const shotgunList = [
	...shotgunPrimaryList,
	...shotgunSecondaryList
] as const

export const sniperList = [
	...sniperPrimaryList,
	...sniperSecondaryList
] as const

export const specialList = [
	...specialPrimaryList,
	...specialSecondaryList
] as const