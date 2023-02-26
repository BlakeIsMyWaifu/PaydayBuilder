import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { akimboShotgunList, assaultRifleList, lightMachineGunList } from '../gunList'
import { type CompatibleWeapons, type ModificationList } from '../weaponTypes'

const mainSnipers: CompatibleWeapons = {
	sniper: [
		'Platypus 70',
		'Rattlesnake',
		'R93',
		'Thanatos .50 cal',
		'Nagant',
		'Lebensauger .308',
		'Desertfox',
		'Contractor .308',
		'Grom',
		'R700',
		'Bernetti Rangehitter'
	]
}

const mainGuns: CompatibleWeapons = {
	assaultRifle: assaultRifleList,
	shotgun: [
		// primary
		'Predator 12G',
		'Reinfeld 880',
		'IZHMA 12G',
		'M1014',
		'Raven',
		'Steakout 12G',
		'VD-12',
		'Breaker 12G',
		'Reinfeld 88',
		'Mosconi 12G Tactical',
		// secondary
		'The Judge',
		'Locomotive 12G',
		'Goliath 12G',
		'Grimm 12G',
		'Street Sweeper',
		'GSPS 12G'
	],
	akimboShotgun: akimboShotgunList,
	sniper: Object.values(mainSnipers),
	lightMachineGun: lightMachineGunList,
	special: [
		'Vulcan Minigun',
		'Piglet',
		'Arbiter'
	]
}

const gunsWithSights: CompatibleWeapons = {
	assaultRifle: assaultRifleList,
	sniper: Object.values(mainSnipers),
	special: [
		'Arbiter',
		'HRL-7'
	]
}

const gunsWithMagnifier: CompatibleWeapons = {
	assaultRifle: [
		'AMCAR',
		'AK',
		'CAR-4',
		'UAR',
		'JP36',
		'M308',
		'AK5',
		'AMR-16',
		'Commando 553',
		'Eagle Heavy',
		'Cavity 9mm',
		'AK17',
		'Bootleg',
		'Queen\'s Wrath',
		'Clarion',
		'Lion\'s Roar',
		'Gecko 7.62',
		'Little Friend 7.62',
		'Falcon',
		'Gewehr 3'
	],
	sniper: Object.values(mainSnipers),
	special: [
		'Arbiter',
		'HRL-7',
		'Piglet'
	],
	submachineGun: [
		'Mark 10',
		'Compact-5',
		'CMP',
		'Para',
		'SpecOps',
		'CR 805B',
		'Cobra',
		'Jackal',
		'Blaster 9mm',
		'Kross Vertex',
		'Tatonka',
		'Uzi',
		'Chicago Typewriter'
	],
	pistol: [
		'Bronco .44',
		'Deagle'
	],
	shotgun: [
		'Reinfeld 880',
		'Locomotive 12G',
		'Goliath 12G',
		'M1014',
		'Raven',
		'Steakout 12G',
		'Street Sweeper',
		'Predator 12G',
		'The Judge'
	]
}

const mainPistols: CompatibleWeapons = {
	pistol: [
		'Chimano 88',
		'Crosskill',
		'Bernetti 9',
		'White Streak',
		'STRYK 18c',
		'Deagle',
		'Gruber Kurz',
		'Signature .40',
		'Baby Deagle',
		'Contractor',
		'LEO',
		'Broomstick',
		'Matever .357',
		'Interceptor .45',
		'Chimano Custom',
		'5/7 AP',
		'Chimano Custom'
	],
	submachineGun: [
		'Cobra',
		'Micro Uzi'
	]
}

export type GadgetModificationsList =
	// Main guns
	| 'Assault Light'
	| 'Tactical Laser Module'
	| 'Compact Laser Module'
	| 'Military Laser Module'
	| 'LED Combo'
	| 'Stealth Laser Module'

	// Guns with sights
	| 'Riktpunkt 45 degree Sight'
	| '45 degree red-dot sight'
	| '45 Degree Ironsights'

	// Guns with magnifier
	| 'Riktpunkt Magnifier Gadget'
	| 'Signature Magnifier Gadget'

	// Snipers
	| 'Angled Sight'

	// Pistols
	| 'Tactical Pistol Light'
	| 'Pocket Laser'
	| 'Micro Laser'
	| 'Combined Module'
	| 'Polymer Flashlight'

const gadget: ModificationList<GadgetModificationsList> = {
	'Assault Light': {
		name: 'Assault Light',
		image: 'wpn_fps_upg_fl_ass_smg_sho_surefire',
		icon: 'inv_mod_flashlight',
		slot: 'gadget',
		source: source['Base Game'],
		cost: 21e3,
		specialEffect: ['Flashlight'],
		stats: {
			concealment: -1
		},
		compatibleWeapons: mainGuns
	},
	'Tactical Laser Module': {
		name: 'Tactical Laser Module',
		image: 'wpn_fps_upg_fl_ass_smg_sho_peqbox',
		icon: 'inv_mod_laser',
		slot: 'gadget',
		source: source['Base Game'],
		cost: 36e3,
		specialEffect: ['Laser'],
		stats: {
			concealment: -1
		},
		compatibleWeapons: mainGuns
	},
	'Compact Laser Module': {
		name: 'Compact Laser Module',
		image: 'wpn_fps_upg_fl_ass_laser',
		icon: 'inv_mod_laser',
		slot: 'gadget',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Red Spider'
		},
		specialEffect: ['Laser'],
		stats: {},
		compatibleWeapons: mainGuns
	},
	'Military Laser Module': {
		name: 'Military Laser Module',
		image: 'wpn_fps_upg_fl_ass_peq15',
		icon: 'inv_mod_laser',
		slot: 'gadget',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Blue Eagle'
		},
		specialEffect: ['Flashlight', 'Laser'],
		stats: {
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: mainGuns
	},
	'LED Combo': {
		name: 'LED Combo',
		image: 'wpn_fps_upg_fl_ass_utg',
		icon: 'inv_mod_laser',
		slot: 'gadget',
		source: content['The Butcher Mod Pack 2'],
		cost: 36e3,
		acquisition: {
			bonus: 1
		},
		specialEffect: ['Flashlight', 'Laser'],
		stats: {
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: mainGuns
	},
	'Stealth Laser Module': {
		name: 'Stealth Laser Module',
		image: 'wpn_fps_upg_fl_dbal_laser',
		icon: 'inv_mod_laser',
		slot: 'gadget',
		source: content['McShay Mod Pack'],
		cost: 36e3,
		specialEffect: ['Flashlight', 'Laser'],
		stats: {
			accuracy: 4,
			stability: -4
		},
		compatibleWeapons: mainGuns
	},
	'Riktpunkt 45 degree Sight': {
		name: 'Riktpunkt 45 degree Sight',
		image: 'wpn_fps_upg_o_45rds_v2',
		icon: 'inv_mod_second_sight',
		slot: 'gadget',
		source: source['Base Game'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			stability: 4
		},
		compatibleWeapons: gunsWithSights,
		incompatibleSlot: [] // Requires a pre-installed sight mod to mount
	},
	'45 degree red-dot sight': {
		name: '45 degree red-dot sight',
		image: 'wpn_fps_upg_o_45rds',
		icon: 'inv_mod_second_sight',
		slot: 'gadget',
		source: content['Gage Spec Ops Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		stats: {
			stability: 4
		},
		compatibleWeapons: gunsWithSights,
		incompatibleSlot: [] // Requires a pre-installed sight mod to mount
	},
	'45 Degree Ironsights': {
		name: '45 Degree Ironsights',
		image: 'wpn_fps_upg_o_45steel',
		icon: 'inv_mod_second_sight',
		slot: 'gadget',
		source: content['Cartel Optics Mod Pack'],
		cost: 14e3,
		stats: {
			concealment: 1
		},
		compatibleWeapons: gunsWithSights,
		incompatibleSlot: [] // Requires a pre-installed sight mod to mount
	},
	'Riktpunkt Magnifier Gadget': {
		name: 'Riktpunkt Magnifier Gadget',
		image: 'wpn_fps_upg_o_xpsg33_magnifier',
		icon: 'inv_mod_second_sight',
		slot: 'gadget',
		source: source['Base Game'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			stability: 4
		},
		compatibleWeapons: gunsWithMagnifier,
		incompatibleSlot: [] // Incompatible with certain sights
	},
	'Signature Magnifier Gadget': {
		name: 'Signature Magnifier Gadget',
		image: 'wpn_fps_upg_o_sig',
		icon: 'inv_mod_second_sight',
		slot: 'gadget',
		source: content['Cartel Optics Mod Pack'],
		cost: 14e3,
		stats: {
			stability: 4
		},
		compatibleWeapons: gunsWithMagnifier,
		incompatibleSlot: [] // Incompatible with certain sights
	},
	'Angled Sight': {
		name: 'Angled Sight',
		image: 'wpn_fps_upg_o_45iron',
		icon: 'inv_mod_second_sight',
		slot: 'gadget',
		source: content['Gage Sniper Pack'],
		cost: 7200,
		acquisition: {
			achievement: 'Triple Kill'
		},
		stats: {},
		compatibleWeapons: mainSnipers
	},
	'Tactical Pistol Light': {
		name: 'Tactical Pistol Light',
		image: 'wpn_fps_upg_fl_pis_tlr1',
		icon: 'inv_mod_flashlight',
		slot: 'gadget',
		source: source['Base Game'],
		cost: 14e3,
		specialEffect: ['Flashlight'],
		stats: {
			concealment: -1
		},
		compatibleWeapons: mainPistols
	},
	'Pocket Laser': {
		name: 'Pocket Laser',
		image: 'wpn_fps_upg_fl_pis_laser',
		icon: 'inv_mod_laser',
		slot: 'gadget',
		source: source['Base Game'],
		cost: 36e3,
		specialEffect: ['Laser'],
		stats: {
			concealment: -1
		},
		compatibleWeapons: mainPistols
	},
	'Micro Laser': {
		name: 'Micro Laser',
		image: 'wpn_fps_upg_fl_pis_crimson',
		icon: 'inv_mod_laser',
		slot: 'gadget',
		source: source.Community,
		cost: 36e3,
		acquisition: {
			bonus: 1
		},
		specialEffect: ['Laser'],
		stats: {},
		compatibleWeapons: mainPistols
	},
	'Combined Module': {
		name: 'Combined Module',
		image: 'wpn_fps_upg_fl_pis_x400v',
		icon: 'inv_mod_laser',
		slot: 'gadget',
		source: source.Community,
		cost: 36e3,
		stats: {
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: mainPistols
	},
	'Polymer Flashlight': {
		name: 'Polymer Flashlight',
		image: 'wpn_fps_upg_fl_pis_m3x',
		icon: 'inv_mod_flashlight',
		slot: 'gadget',
		source: content['The Butcher Mod Pack 2'],
		cost: 0, // Unknown?
		acquisition: {
			bonus: 1
		},
		specialEffect: ['Flashlight'],
		stats: {
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: mainPistols
	}
}

export default gadget