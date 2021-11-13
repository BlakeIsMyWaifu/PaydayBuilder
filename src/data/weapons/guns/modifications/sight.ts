import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'
import { assaultRifleList, submachineGunList } from '../gunList'

import { CompatibleWeapons, WeaponModificationList } from '../weaponTypes'

const mainGuns: CompatibleWeapons = {
	assaultRifle: assaultRifleList,
	shotgun: [
		// primary
		'Predator 12G Shotgun',
		'Reinfeld 880 Shotgun',
		'IZHMA 12G Shotgun',
		'M1014 Shotgun',
		'Raven Shotgun',
		'Steakout 12G Shotgun',
		'Breaker 12G Shotgun',
		'Reinfeld 88 Shotgun',
		'Mosconi 12G Tactical Shotgun',
		// secondary
		'The Judge Shotgun',
		'Locomotive 12G Shotgun',
		'Goliath 12G Shotgun',
		'Grimm 12G Shotgun',
		'Street Sweeper Shotgun'
	],
	sniper: [
		'Platypus 70 Sniper Rifle',
		'Rattlesnake Sniper Rifle',
		'R93 Sniper Rifle',
		'Thanatos .50 cal Sniper Rifle',
		'Nagant Sniper Rifle',
		'Lebensauger .308 Sniper Rifle',
		'Desertfox Sniper Rifle',
		'Contractor .308 Sniper Rifle',
		'Grom Sniper Rifle',
		'R700 Sniper Rifle',
		'Bernetti Rangehitter Sniper Rifle'
	],
	special: [
		'Piglet Grenade Launcher',
		'Arbiter Grenade Launcher',
		'HRL-7 Rocket Launcher'
	],
	pistol: [
		'Bronco .44 Pistol',
		'Deagle Pistol'
	],
	submachineGun: submachineGunList
}

export type SightModificationsList =
	// main guns
	'The Professional\'s Choice Sight' |
	'Surgeon Sight' |
	'See More Sight' |
	'Combat Sight' |
	'Speculator Sight' |
	'Trigonom Sight' |
	'Holographic Sight' |
	'Compact Holosight' |
	'Solar Sight' |
	'Military Red Dot Sight (1)' |
	'Military Red Dot Sight (2)' |
	'Milspec Scope' |
	'Acough Optic Scope' |
	'Compact Profile Sight' |
	'Maelstrom Sight' |
	'Advanced Combat Sight' |
	'Reconnaissance Sight'

const sight: WeaponModificationList<SightModificationsList> = {
	'The Professional\'s Choice Sight': {
		name: 'The Professional\'s Choice Sight',
		image: 'wpn_fps_upg_o_t1micro',
		slot: 'Sight',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: mainGuns
	},
	'Surgeon Sight': {
		name: 'Surgeon Sight',
		image: 'wpn_fps_upg_o_docter',
		slot: 'Sight',
		source: source['Base Game'],
		cost: 36e3,
		stats: {
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: mainGuns
	},
	'See More Sight': {
		name: 'See More Sight',
		image: 'wpn_fps_upg_o_cmore',
		slot: 'Sight',
		source: content['Armored Transport'],
		cost: 43200,
		stats: {
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: mainGuns
	},
	'Combat Sight': {
		name: 'Combat Sight',
		image: 'wpn_fps_upg_o_cs',
		slot: 'Sight',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Blue Eagle'
		},
		stats: {
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: mainGuns
	},
	'Speculator Sight': {
		name: 'Speculator Sight',
		image: 'wpn_fps_upg_o_reflex',
		slot: 'Sight',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Green Mantis'
		},
		stats: {
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: mainGuns
	},
	'Trigonom Sight': {
		name: 'Trigonom Sight',
		image: 'wpn_fps_upg_o_rx01',
		slot: 'Sight',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Yellow Bull'
		},
		stats: {
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: mainGuns
	},
	'Holographic Sight': {
		name: 'Holographic Sight',
		image: 'wpn_fps_upg_o_eotech',
		slot: 'Sight',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: mainGuns
	},
	'Compact Holosight': {
		name: 'Compact Holosight',
		image: 'wpn_fps_upg_o_eotech_xps',
		slot: 'Sight',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Green Mantis'
		},
		stats: {
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: mainGuns
	},
	'Solar Sight': {
		name: 'Solar Sight',
		image: 'wpn_fps_upg_o_rx30',
		slot: 'Sight',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Blue Eagle'
		},
		stats: {
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: mainGuns
	},
	'Military Red Dot Sight (1)': {
		name: 'Military Red Dot Sight (1)',
		image: 'wpn_fps_upg_o_aimpoint_2',
		slot: 'Sight',
		source: content.Lootbag,
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			stability: 4,
			concealment: -3
		},
		compatibleWeapons: mainGuns
	},
	'Military Red Dot Sight (2)': {
		name: 'Military Red Dot Sight (2)',
		image: 'wpn_fps_upg_o_aimpoint',
		slot: 'Sight',
		source: source['Base Game'],
		cost: 62e3,
		stats: {
			stability: 4,
			concealment: -3
		},
		compatibleWeapons: mainGuns
	},
	'Milspec Scope': {
		name: 'Milspec Scope',
		image: 'wpn_fps_upg_o_specter',
		slot: 'Sight',
		source: source['Base Game'],
		cost: 62e3,
		stats: {
			stability: 4,
			concealment: -3
		},
		compatibleWeapons: mainGuns
	},
	'Acough Optic Scope': {
		name: 'Acough Optic Scope',
		image: 'wpn_fps_upg_o_acog',
		slot: 'Sight',
		source: source['Base Game'],
		cost: 44e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			stability: 4,
			concealment: -3
		},
		compatibleWeapons: mainGuns
	},
	'Compact Profile Sight': {
		name: 'Compact Profile Sight',
		image: 'wpn_fps_upg_o_fc1',
		slot: 'Sight',
		source: content['Cartel Optics Mod Pack'],
		cost: 62e3,
		stats: {
			stability: -4
		},
		compatibleWeapons: mainGuns
	},
	'Maelstrom Sight': {
		name: 'Maelstrom Sight',
		image: 'wpn_fps_upg_o_uh',
		slot: 'Sight',
		source: content['Cartel Optics Mod Pack'],
		cost: 62e3,
		stats: {
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: mainGuns
	},
	'Advanced Combat Sight': {
		name: 'Advanced Combat Sight',
		image: 'wpn_fps_upg_o_bmg',
		slot: 'Sight',
		source: content['Cartel Optics Mod Pack'],
		cost: 62e3,
		stats: {
			stability: 4,
			concealment: -3
		},
		compatibleWeapons: mainGuns
	},
	'Reconnaissance Sight': {
		name: 'Reconnaissance Sight',
		image: 'wpn_fps_upg_o_spot',
		slot: 'Sight',
		source: content['Gage Spec Ops Pack'],
		cost: 62e3,
		acquisition: {
			infinite: true
		},
		specialEffect: ['Rangefinder'],
		stats: {
			stability: 4,
			concealment: -3
		},
		compatibleWeapons: mainGuns
	}
}

export default sight