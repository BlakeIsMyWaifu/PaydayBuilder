import { type WeaponName,type WeaponType } from 'data/weapons/guns/weaponTypes'

interface CrewWeaponData {
	weaponType: WeaponType;
	damage: number;
	magazine: number;
	ammo: number;
	rateOfFire: number;
	alertRadius: number;
	suppression: number;
}

export type CrewWeapon = keyof typeof crewWeapons

const crewWeapons = {
	'M308': {
		weaponType: 'Assault Rifle',
		damage: 12.8,
		magazine: 10,
		ammo: 8,
		rateOfFire: 0.08,
		alertRadius: 50,
		suppression: 1
	},
	'Reinfeld 880': {
		weaponType: 'Shotgun',
		damage: 87,
		magazine: 6,
		ammo: 4,
		rateOfFire: 0,
		alertRadius: 45,
		suppression: 1.8
	},
	'JP36': {
		weaponType: 'Assault Rifle',
		damage: 12.8,
		magazine: 30,
		ammo: 5,
		rateOfFire: 0.08,
		alertRadius: 50,
		suppression: 1
	},
	'AMR-16': {
		weaponType: 'Assault Rifle',
		damage: 10.5,
		magazine: 30,
		ammo: 8,
		rateOfFire: 0.07,
		alertRadius: 50,
		suppression: 1
	},
	'UAR': {
		weaponType: 'Assault Rifle',
		damage: 12,
		magazine: 30,
		ammo: 5,
		rateOfFire: 0.08,
		alertRadius: 50,
		suppression: 1
	},
	'AK': {
		weaponType: 'Assault Rifle',
		damage: 13.8,
		magazine: 30,
		ammo: 5,
		rateOfFire: 0.09,
		alertRadius: 50,
		suppression: 1
	},
	'AK5': {
		weaponType: 'Assault Rifle',
		damage: 12.8,
		magazine: 30,
		ammo: 5,
		rateOfFire: 0.08,
		alertRadius: 50,
		suppression: 1
	},
	'AMCAR': {
		weaponType: 'Assault Rifle',
		damage: 16.5,
		magazine: 20,
		ammo: 5,
		rateOfFire: 0.11,
		alertRadius: 50,
		suppression: 1
	},
	'AK.762': {
		weaponType: 'Assault Rifle',
		damage: 16.1,
		magazine: 30,
		ammo: 5,
		rateOfFire: 0.11,
		alertRadius: 50,
		suppression: 1
	},
	'Golden AK.762': {
		weaponType: 'Assault Rifle',
		damage: 16.1,
		magazine: 30,
		ammo: 5,
		rateOfFire: 0.11,
		alertRadius: 50,
		suppression: 1
	},
	'IZHMA 12G': {
		weaponType: 'Shotgun',
		damage: 27,
		magazine: 7,
		ammo: 10,
		rateOfFire: 0.18,
		alertRadius: 45,
		suppression: 1.8
	},
	'Mosconi 12G': {
		weaponType: 'Shotgun',
		damage: 174,
		magazine: 2,
		ammo: 4,
		rateOfFire: 0,
		alertRadius: 45,
		suppression: 1.8
	},
	'Commando 553': {
		weaponType: 'Assault Rifle',
		damage: 12.6,
		magazine: 30,
		ammo: 5,
		rateOfFire: 0.08,
		alertRadius: 50,
		suppression: 1
	},
	'Eagle Heavy': {
		weaponType: 'Assault Rifle',
		damage: 14.7,
		magazine: 20,
		ammo: 5,
		rateOfFire: 0.1,
		alertRadius: 50,
		suppression: 1
	},
	'Brenner-21': {
		weaponType: 'LMG',
		damage: 12.5,
		magazine: 150,
		ammo: 5,
		rateOfFire: 0.08,
		alertRadius: 50,
		suppression: 1
	},
	'KSP': {
		weaponType: 'LMG',
		damage: 9.9,
		magazine: 200,
		ammo: 2,
		rateOfFire: 0.07,
		alertRadius: 50,
		suppression: 1
	},
	'RPK': {
		weaponType: 'LMG',
		damage: 12,
		magazine: 100,
		ammo: 5,
		rateOfFire: 0.08,
		alertRadius: 50,
		suppression: 1
	},
	'Thanatos .50 cal': {
		weaponType: 'Sniper',
		damage: 225,
		magazine: 5,
		ammo: 5,
		rateOfFire: 1.5,
		alertRadius: 50,
		suppression: 1
	},
	'Rattlesnake': {
		weaponType: 'Sniper',
		damage: 150,
		magazine: 10,
		ammo: 5,
		rateOfFire: 1,
		alertRadius: 50,
		suppression: 1
	},
	'R93': {
		weaponType: 'Sniper',
		damage: 180,
		magazine: 6,
		ammo: 5,
		rateOfFire: 1.2,
		alertRadius: 50,
		suppression: 1
	},
	'Falcon': {
		weaponType: 'Assault Rifle',
		damage: 12.9,
		magazine: 20,
		ammo: 5,
		rateOfFire: 0.08,
		alertRadius: 50,
		suppression: 1
	},
	'M1014': {
		weaponType: 'Shotgun',
		damage: 21,
		magazine: 8,
		ammo: 4,
		rateOfFire: 0.14,
		alertRadius: 45,
		suppression: 1.8
	},
	'Raven': {
		weaponType: 'Shotgun',
		damage: 87,
		magazine: 14,
		ammo: 4,
		rateOfFire: 0.58,
		alertRadius: 45,
		suppression: 1.8
	},
	'Gewehr 3': {
		weaponType: 'Assault Rifle',
		damage: 14.3,
		magazine: 20,
		ammo: 5,
		rateOfFire: 0.09,
		alertRadius: 50,
		suppression: 1
	},
	'Gecko 7.62': {
		weaponType: 'Assault Rifle',
		damage: 10.7,
		magazine: 30,
		ammo: 5,
		rateOfFire: 0.07,
		alertRadius: 50,
		suppression: 1
	},
	'Clarion': {
		weaponType: 'Assault Rifle',
		damage: 9,
		magazine: 30,
		ammo: 5,
		rateOfFire: 0.06,
		alertRadius: 50,
		suppression: 1
	},
	'Predator 12G': {
		weaponType: 'Shotgun',
		damage: 30,
		magazine: 6,
		ammo: 4,
		rateOfFire: 0.2,
		alertRadius: 45,
		suppression: 1.8
	},
	'Buzzsaw 42': {
		weaponType: 'LMG',
		damage: 7.5,
		magazine: 150,
		ammo: 3,
		rateOfFire: 0.05,
		alertRadius: 50,
		suppression: 1
	},
	'Nagant': {
		weaponType: 'Sniper',
		damage: 150,
		magazine: 5,
		ammo: 8,
		rateOfFire: 1,
		alertRadius: 50,
		suppression: 1
	},
	'Queen\'s Wrath': {
		weaponType: 'Assault Rifle',
		damage: 20,
		magazine: 30,
		ammo: 5,
		rateOfFire: 0.08,
		alertRadius: 50,
		suppression: 1
	},
	'Lion\'s Roar': {
		weaponType: 'Assault Rifle',
		damage: 10.5,
		magazine: 30,
		ammo: 5,
		rateOfFire: 0.07,
		alertRadius: 50,
		suppression: 1
	},
	'Joceline O/U 12G': {
		weaponType: 'Shotgun',
		damage: 174,
		magazine: 2,
		ammo: 4,
		rateOfFire: 0,
		alertRadius: 45,
		suppression: 1.8
	},
	'Steakout 12G': {
		weaponType: 'Shotgun',
		damage: 30,
		magazine: 8,
		ammo: 4,
		rateOfFire: 0.2,
		alertRadius: 45,
		suppression: 1.8
	},
	'Repeater 1874': {
		weaponType: 'Sniper',
		damage: 105,
		magazine: 15,
		ammo: 8,
		rateOfFire: 0.7,
		alertRadius: 50,
		suppression: 1
	},
	'Valkyria': {
		weaponType: 'Assault Rifle',
		damage: 10.1,
		magazine: 20,
		ammo: 5,
		rateOfFire: 0.07,
		alertRadius: 50,
		suppression: 1
	},
	'Cavity 9mm': {
		weaponType: 'Assault Rifle',
		damage: 12.8,
		magazine: 33,
		ammo: 8,
		rateOfFire: 0.08,
		alertRadius: 50,
		suppression: 1
	},
	'Lebensauger .308': {
		weaponType: 'Sniper',
		damage: 75,
		magazine: 10,
		ammo: 5,
		rateOfFire: 0.5,
		alertRadius: 50,
		suppression: 1
	},
	'KSP 58': {
		weaponType: 'LMG',
		damage: 9.9,
		magazine: 200,
		ammo: 2,
		rateOfFire: 0.07,
		alertRadius: 50,
		suppression: 1
	},
	'Platypus 70': {
		weaponType: 'Sniper',
		damage: 150,
		magazine: 5,
		ammo: 8,
		rateOfFire: 1,
		alertRadius: 50,
		suppression: 1
	},
	'Bootleg': {
		weaponType: 'Assault Rifle',
		damage: 13.5,
		magazine: 100,
		ammo: 5,
		rateOfFire: 0.09,
		alertRadius: 50,
		suppression: 1
	},
	'Breaker 12G': {
		weaponType: 'Shotgun',
		damage: 112.5,
		magazine: 7,
		ammo: 5,
		rateOfFire: 0.75,
		alertRadius: 10,
		suppression: 1
	},
	'Desertfox': {
		weaponType: 'Sniper',
		damage: 150,
		magazine: 5,
		ammo: 8,
		rateOfFire: 20,
		alertRadius: 50,
		suppression: 1
	},
	'Little Friend 7.62': {
		weaponType: 'Assault Rifle',
		damage: 20,
		magazine: 1,
		ammo: 4,
		rateOfFire: 0.1,
		alertRadius: 28,
		suppression: 1
	},
	'Contractor .308': {
		weaponType: 'Sniper',
		damage: 60,
		magazine: 20,
		ammo: 5,
		rateOfFire: 0.4,
		alertRadius: 50,
		suppression: 1
	},
	'Grom': {
		weaponType: 'Sniper',
		damage: 20,
		magazine: 10,
		ammo: 4,
		rateOfFire: 0.5,
		alertRadius: 50,
		suppression: 1
	},
	'AK17': {
		weaponType: 'Assault Rifle',
		damage: 20,
		magazine: 35,
		ammo: 5,
		rateOfFire: 0.09,
		alertRadius: 50,
		suppression: 1
	}
} as const satisfies Partial<Record<WeaponName, CrewWeaponData>>

export default crewWeapons