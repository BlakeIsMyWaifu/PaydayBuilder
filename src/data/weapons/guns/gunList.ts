/*
 * Primary
 */

export const assaultRifleList = [
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
	'KS12 Urban',
	'Little Friend 7.62',
	'Falcon',
	'Rodion 3B',
	'Gewehr 3'
] as const

export const shotgunPrimaryList = [
	'Predator 12G',
	'Breaker 12G',
	'Reinfeld 880',
	'Mosconi 12G Tactical',
	'VD-12',
	'M1014',
	'Raven',
	'IZHMA 12G',
	'Reinfeld 88',
	'Deimos',
	'Mosconi 12G',
	'Joceline O/U 12G',
	'Steakout 12G'
] as const

export const lightMachineGunList = [
	'RPK',
	'KSP 58',
	'M60',
	'SG Versteckt 51D',
	'Campbell 74',
	'KSP',
	'Akron HC',
	'Buzzsaw 42',
	'Brenner-21'
] as const

export const sniperPrimaryList = [
	'Rattlesnake',
	'R700',
	'Bernetti Rangehitter',
	'Káng Arms X1',
	'Amaroq 900',
	'Platypus 70',
	'Lebensauger .308',
	'Desertfox',
	'Contractor .308',
	'R93',
	'Repeater 1874',
	'Grom',
	'Nagant',
	'Thanatos .50 cal'
] as const

export const akimboShotgunList = [
	'Akimbo Goliath 12G',
	'Akimbo VD-12',
	'Brothers Grimm 12G',
	'Akimbo Judge'
] as const

export const specialPrimaryList = [
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
	'Hailstorm Mk 5'
] as const

export const primaryGunList = {
	'Assault Rifle': assaultRifleList,
	'Shotgun': shotgunPrimaryList,
	'LMG': lightMachineGunList,
	'Sniper': sniperPrimaryList,
	// 'Akimbo Pistol': [],
	// 'Akimbo SMG': [],
	'Akimbo Shotgun': akimboShotgunList,
	'Special': specialPrimaryList
} as const

/*
 * Secondary
 */

export const pistolList = [
	'Interceptor .45',
	'Chimano 88',
	'Gruber Kurz',
	'Signature .40',
	'Crosskill',
	'Bernetti 9',
	'Bronco .44',
	'Crosskill Chunky Compact',
	'Gecko M2',
	'White Streak',
	'Baby Deagle',
	'M13 9mm',
	'Kahn .357',
	'Chimano Custom',
	'Broomstick',
	'Káng Arms Model 54',
	'Parabellum',
	'5/7 AP',
	'Castigo .44',
	'Contractor',
	'Frenchman Model 87',
	'RUS-12 Angry Tiger',
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
	'Deagle'
] as const

export const submachineGunList = [
	'Swedish K',
	'SpecOps',
	'Mark 10',
	'CR 805B',
	'AK Gen 21 Tactical',
	'Jacket\'s Piece',
	'Compact-5',
	'Chicago Typewriter',
	'Wasp-DS SMG',
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
	'Uzi'
] as const

export const specialSecondaryList = [
	'Pistol Crossbow',
	'Compact 40mm',
	'HRL-7',
	'China Puff 40mm',
	'Commando 101',
	'MA-17 Flamethrower',
	'Arbiter',
	'Basilisk 3V',
	'OVE9000',
	'Cash Blaster'
] as const

export const shotgunSecondaryList = [
	'Locomotive 12G',
	'GSPS 12G',
	'Goliath 12G',
	'Grimm 12G',
	'Street Sweeper',
	'Argos III',
	'The Judge',
	'Claire 12G'
] as const

export const sniperSecondaryList = [
	'Pronghorn',
	'Aran G2',
	'North Star'
] as const

export const secondaryGunList = {
	'Pistol': pistolList,
	'Submachine Gun': submachineGunList,
	'Special': specialSecondaryList,
	'Shotgun': shotgunSecondaryList,
	'Sniper': sniperSecondaryList
}

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