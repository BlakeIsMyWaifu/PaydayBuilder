import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'
import { akimboShotgunList, assaultRifleList, lightMachineGunList } from '../gunList'

import { CompatibleWeapons, WeaponModificationList } from '../weaponTypes'

const mainSnipers: CompatibleWeapons = {
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
	]
}

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
		'Street Sweeper Shotgun',
		'GSPS 12G Shotgun',
	],
	akimboShotgun: akimboShotgunList,
	sniper: Object.values(mainSnipers),
	lightMachineGun: lightMachineGunList,
	special: [
		'Vulcan Minigun',
		'Piglet Grenade Launcher',
		'Arbiter Grenade Launcher'
	]
}

const gunsWithSights: CompatibleWeapons = {
	assaultRifle: assaultRifleList,
	sniper: Object.values(mainSnipers),
	special: [
		'Arbiter Grenade Launcher',
		'HRL-7 Rocket Launcher'
	]
}

export type GadgetModificationsList =
	// main guns
	'Assault Light' |
	'Tactical Laser Module' |
	'Compact Laser Module' |
	'Military Laser Module' |
	'LED Combo' |

	// guns with sights
	'Riktpunkt 45 degree Sight' |
	'45 degree red-dot sight' |
	'45 Degree Ironsights'

const gadget: WeaponModificationList<GadgetModificationsList> = {
	'Assault Light': {
		name: 'Assault Light',
		image: 'wpn_fps_upg_fl_ass_smg_sho_surefire',
		slot: 'Gadget',
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
		slot: 'Gadget',
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
		slot: 'Gadget',
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
		slot: 'Gadget',
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
		slot: 'Gadget',
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
	'Riktpunkt 45 degree Sight': {
		name: 'Riktpunkt 45 degree Sight',
		image: 'wpn_fps_upg_o_45rds_v2',
		slot: 'Gadget',
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
		slot: 'Gadget',
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
		slot: 'Gadget',
		source: content['Cartel Optics Mod Pack'],
		cost: 14e3,
		stats: {
			concealment: 1
		},
		compatibleWeapons: gunsWithSights,
		incompatibleSlot: [] // Requires a pre-installed sight mod to mount
	}
}

export default gadget