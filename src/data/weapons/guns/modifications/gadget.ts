import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { akimboShotgunList, assaultRifleList, lightMachineGunList } from '../gunList'
import { CompatibleWeapons, ModificationList } from '../weaponTypes'

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

const gunsWithMagnifier: CompatibleWeapons = {
	assaultRifle: [
		'AMCAR Rifle',
		'AK Rifle',
		'CAR-4 Rifle',
		'UAR Rifle',
		'JP36 Rifle',
		'M308 Rifle',
		'AK5 Rifle',
		'AMR-16 Rifle',
		'Commando 553 Rifle',
		'Eagle Heavy Rifle',
		'Cavity 9mm',
		'AK17 Rifle',
		'Bootleg Rifle',
		'Queen\'s Wrath Rifle',
		'Clarion Rifle',
		'Lion\'s Roar Rifle',
		'Gecko 7.62 Rifle',
		'Little Friend 7.62 Assault Rifle',
		'Falcon Rifle',
		'Gewehr 3 Rifle'
	],
	sniper: Object.values(mainSnipers),
	special: [
		'Arbiter Grenade Launcher',
		'HRL-7 Rocket Launcher',
		'Piglet Grenade Launcher'
	],
	submachineGun: [
		'Mark 10 Submachine Gun',
		'Compact-5 Submachine Gun',
		'CMP Submachine Gun',
		'Para Submachine Gun',
		'SpecOps Submachine Gun',
		'CR 805B Submachine Gun',
		'Cobra Submachine Gun',
		'Jackal Submachine Gun',
		'Blaster 9mm Submachine Gun',
		'Kross Vertex Submachine Gun',
		'Tatonka Submachine Gun',
		'Uzi Submachine Gun',
		'Chicago Typewriter Submachine Gun'
	],
	pistol: [
		'Bronco .44 Pistol',
		'Deagle Pistol'
	],
	shotgun: [
		'Reinfeld 880 Shotgun',
		'Locomotive 12G Shotgun',
		'Goliath 12G Shotgun',
		'M1014 Shotgun',
		'Raven Shotgun',
		'Steakout 12G Shotgun',
		'Street Sweeper Shotgun',
		'Predator 12G Shotgun',
		'The Judge Shotgun'
	]
}

const mainPistols: CompatibleWeapons = {
	pistol: [
		'Chimano 88 Pistol',
		'Crosskill Pistol',
		'Bernetti 9 Pistol',
		'White Streak Pistol',
		'STRYK 18c Pistol',
		'Deagle Pistol',
		'Gruber Kurz Pistol',
		'Signature .40 Pistol',
		'Baby Deagle',
		'Contractor Pistol',
		'LEO Pistol',
		'Broomstick Pistol',
		'Matever .357 Revolver',
		'Interceptor .45 Pistol',
		'Chimano Custom Pistol',
		'5/7 AP Pistol',
		'Chimano Custom Pistol'
	],
	submachineGun: [
		'Cobra Submachine Gun',
		'Micro Uzi Submachine Gun'
	]
}

export type GadgetModificationsList =
	// Main guns
	'Assault Light' |
	'Tactical Laser Module' |
	'Compact Laser Module' |
	'Military Laser Module' |
	'LED Combo' |

	// Guns with sights
	'Riktpunkt 45 degree Sight' |
	'45 degree red-dot sight' |
	'45 Degree Ironsights' |

	// Guns with magnifier
	'Riktpunkt Magnifier Gadget' |
	'Signature Magnifier Gadget' |

	// Snipers
	'Angled Sight' |

	// Pistols
	'Tactical Pistol Light' |
	'Pocket Laser' |
	'Micro Laser' |
	'Combined Module' |
	'Polymer Flashlight'

const gadget: ModificationList<GadgetModificationsList> = {
	'Assault Light': {
		name: 'Assault Light',
		image: 'wpn_fps_upg_fl_ass_smg_sho_surefire',
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
	'Riktpunkt 45 degree Sight': {
		name: 'Riktpunkt 45 degree Sight',
		image: 'wpn_fps_upg_o_45rds_v2',
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