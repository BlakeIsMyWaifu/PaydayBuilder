import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import assaultRifles from '../primary/assaultRifles'
import lightMachineGuns from '../primary/lightMachineGuns'
import primaryShotguns from '../primary/shotgunsPrimary'
import snipers from '../primary/snipers'
import primarySpecials from '../primary/specialsPrimary'
import secondaryShotguns from '../secondary/shotgunsSecondary'
import submachineGuns from '../secondary/submachineGuns'
import { WeaponData, WeaponModificationList } from '../weaponTypes'

const mainGuns: WeaponData[] = [
	assaultRifles['AK Rifle'],
	assaultRifles['AK.762'],
	assaultRifles['Golden AK.762 Rifle'],
	assaultRifles['AK17 Rifle'],
	assaultRifles['AMCAR Rifle'],
	assaultRifles['CAR-4 Rifle'],
	assaultRifles['AMR-16 Rifle'],
	assaultRifles['Bootleg Rifle'],
	assaultRifles['Commando 553 Rifle'],
	primaryShotguns['Reinfeld 880 Shotgun'],
	primaryShotguns['IZHMA 12G Shotgun'],
	snipers['Contractor .308 Sniper Rifle'],
	lightMachineGuns['KSP Light Machine Gun'],
	lightMachineGuns['RPK Light Machine Gun'],
	primarySpecials['Piglet Grenade Launcher'],
	submachineGuns['Para Submachine Gun'],
	submachineGuns['Krinkov Submachine Gun'],
	submachineGuns['Jacket\'s Piece'],
	submachineGuns['Kross Vertex Submachine Gun'],
	secondaryShotguns['Locomotive 12G Shotgun']
]

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
		compatibleWeapons: [
			assaultRifles['AK Rifle'],
			assaultRifles['AK.762'],
			assaultRifles['Golden AK.762 Rifle'],
			primaryShotguns['Reinfeld 880 Shotgun'],
			primaryShotguns['IZHMA 12G Shotgun'],
			lightMachineGuns['RPK Light Machine Gun'],
			lightMachineGuns['KSP Light Machine Gun'],
			submachineGuns['Para Submachine Gun'],
			submachineGuns['Krinkov Submachine Gun'],
			submachineGuns['Jacket\'s Piece'],
			submachineGuns['Kross Vertex Submachine Gun'],
			secondaryShotguns['Locomotive 12G Shotgun']
		]
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
		compatibleWeapons: [
			assaultRifles['AK.762'],
			assaultRifles['Golden AK.762 Rifle'],
			primaryShotguns['IZHMA 12G Shotgun'],
			submachineGuns['Krinkov Submachine Gun']
		]
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
		compatibleWeapons: [
			assaultRifles['AK Rifle'],
			assaultRifles['AK.762'],
			assaultRifles['Golden AK.762 Rifle'],
			primaryShotguns['IZHMA 12G Shotgun'],
			submachineGuns['Krinkov Submachine Gun']
		],
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
		compatibleWeapons: [
			assaultRifles['AK Rifle'],
			assaultRifles['AK.762'],
			assaultRifles['Golden AK.762 Rifle'],
			primaryShotguns['IZHMA 12G Shotgun'],
			lightMachineGuns['RPK Light Machine Gun'],
			submachineGuns['Krinkov Submachine Gun']
		]
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
		compatibleWeapons: [
			assaultRifles['Commando 553 Rifle']
		]
	}
}

export default stock