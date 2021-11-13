import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { CompatibleWeapons, WeaponModificationList } from '../weaponTypes'

const mainGuns: CompatibleWeapons = {
	assaultRifle: [
		'AK Rifle',
		'AK.762',
		'Golden AK.762 Rifle',
		'AK17 Rifle',
		'AMCAR Rifle',
		'CAR-4 Rifle',
		'AMR-16 Rifle',
		'Bootleg Rifle',
		'Commando 553 Rifle'
	],
	shotgun: [
		'Reinfeld 880 Shotgun',
		'IZHMA 12G Shotgun',
		'Locomotive 12G Shotgun'
	],
	sniper: [
		'Contractor .308 Sniper Rifle'
	],
	lightMachineGun: [
		'KSP Light Machine Gun',
		'RPK Light Machine Gun'
	],
	special: [
		'Piglet Grenade Launcher'
	],
	submachineGun: [
		'Para Submachine Gun',
		'Krinkov Submachine Gun',
		'Jacket\'s Piece',
		'Kross Vertex Submachine Gun'
	]
}

export type StockModificationsList =
	'Standard Stock' |
	'Tactical Stock' |
	'Skeletal Stock' |
	'Wooden Sniper Stock' |
	'Wide Stock' |
	'War-Torn Stock' |
	'Classic Stock' |
	'2 Piece Stock' |
	'Contractor Stock' |
	// Commando 553
	'Enhanced Stock'

const stock: WeaponModificationList<StockModificationsList> = {
	'Standard Stock': {
		name: 'Standard Stock',
		image: 'wpn_fps_upg_m4_s_standard',
		slot: 'Stock',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: {
			assaultRifle: [
				'AK Rifle',
				'AK.762',
				'Golden AK.762 Rifle'
			],
			shotgun: [
				'Reinfeld 880 Shotgun',
				'IZHMA 12G Shotgun',
				'Locomotive 12G Shotgun'
			],
			lightMachineGun: [
				'RPK Light Machine Gun',
				'KSP Light Machine Gun'
			],
			submachineGun: [
				'Para Submachine Gun',
				'Krinkov Submachine Gun',
				'Jacket\'s Piece',
				'Kross Vertex Submachine Gun'
			]
		}
	},
	'Tactical Stock': {
		name: 'Tactical Stock',
		image: 'wpn_fps_upg_m4_s_pts',
		slot: 'Stock',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: mainGuns
	},
	'Skeletal Stock': {
		name: 'Skeletal Stock',
		image: 'wpn_upg_ak_s_skfoldable',
		slot: 'Stock',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			stability: -4,
			concealment: 2
		},
		compatibleWeapons: {
			assaultRifle: [
				'AK.762',
				'Golden AK.762 Rifle'
			],
			shotgun: [
				'IZHMA 12G Shotgun'
			],
			submachineGun: [
				'Krinkov Submachine Gun'
			]
		}
	},
	'Wooden Sniper Stock': {
		name: 'Wooden Sniper Stock',
		image: 'wpn_upg_ak_s_psl',
		slot: 'Stock',
		source: source['Base Game'],
		cost: 44e3,
		stats: {
			accuracy: 12,
			concealment: -3
		},
		compatibleWeapons: {
			assaultRifle: [
				'AK Rifle',
				'AK.762',
				'Golden AK.762 Rifle'
			],
			shotgun: [
				'IZHMA 12G Shotgun'
			],
			submachineGun: [
				'Krinkov Submachine Gun'
			]
		},
		incompatibleSlot: ['Grip']
	},
	'Wide Stock': {
		name: 'Wide Stock',
		image: 'wpn_fps_upg_m4_s_crane',
		slot: 'Stock',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Yellow Bull'
		},
		stats: {
			stability: 4,
			concealment: 1
		},
		compatibleWeapons: mainGuns
	},
	'War-Torn Stock': {
		name: 'War-Torn Stock',
		image: 'wpn_fps_upg_m4_s_mk46',
		slot: 'Stock',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Red Spider'
		},
		stats: {
			accuracy: 8,
			stability: -4,
			concealment: -3
		},
		compatibleWeapons: mainGuns
	},
	'Classic Stock': {
		name: 'Classic Stock',
		image: 'wpn_fps_upg_ak_s_solidstock',
		slot: 'Stock',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'The Turtle Always Wins'
		},
		stats: {
			accuracy: 4,
			stability: 12,
			concealment: -4
		},
		compatibleWeapons: {
			assaultRifle: [
				'AK Rifle',
				'AK.762',
				'Golden AK.762 Rifle'
			],
			shotgun: [
				'IZHMA 12G Shotgun'
			],
			lightMachineGun: [
				'RPK Light Machine Gun'
			],
			submachineGun: [
				'Krinkov Submachine Gun'
			]
		}
	},
	'2 Piece Stock': {
		name: '2 Piece Stock',
		image: 'wpn_fps_upg_m4_s_ubr',
		slot: 'Stock',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'The Turtle Always Wins'
		},
		stats: {
			accuracy: 4,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: mainGuns
	},
	'Contractor Stock': {
		name: 'Contractor Stock',
		image: 'wpn_fps_snp_tti_s_vltor',
		slot: 'Stock',
		source: content['John Wick Heists'],
		cost: 9e3,
		stats: {
			stability: 4
		},
		compatibleWeapons: mainGuns
	},
	'Enhanced Stock': {
		name: 'Enhanced Stock',
		image: 'wpn_fps_ass_s552_g_standard_green',
		slot: 'Stock',
		source: content['Armored Transport'],
		cost: 33600,
		stats: {
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			assaultRifle: [
				'Commando 553 Rifle'
			]
		}
	}
}

export default stock