import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { assaultRifleList, submachineGunList } from '../gunList'
import { type CompatibleWeapons, type ModificationList } from '../weaponTypes'

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
		'Breaker 12G',
		'Reinfeld 88',
		'Mosconi 12G Tactical',
		// secondary
		'The Judge',
		'Locomotive 12G',
		'Goliath 12G',
		'Grimm 12G',
		'Street Sweeper'
	],
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
	],
	special: [
		'Piglet',
		'Arbiter',
		'HRL-7'
	],
	pistol: [
		'Bronco .44',
		'Deagle'
	],
	submachineGun: submachineGunList
}

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

const mainPistols: CompatibleWeapons = {
	pistol: [
		'Chimano 88',
		'Crosskill',
		'Bernetti 9',
		'White Streak',
		'Parabellum',
		'Crosskill Guard',
		'STRYK 18c',
		'Deagle',
		'M13 9mm',
		'Gruber Kurz',
		'Signature .40',
		'Baby Deagle',
		'Contractor',
		'LEO',
		'Broomstick',
		'Bernetti Auto',
		'Czech 92',
		'Igor Automatik',
		'HOLT 9mm',
		'Interceptor .45',
		'Chimano Custom',
		'5/7 AP',
		'Chimano Compact'
	]
}

export type SightModificationsList =
	// Main guns
	| 'The Professional\'s Choice Sight'
	| 'Surgeon Sight'
	| 'See More Sight'
	| 'Combat Sight'
	| 'Speculator Sight'
	| 'Trigonom Sight'
	| 'Holographic Sight'
	| 'Compact Holosight'
	| 'Solar Sight'
	| 'Military Red Dot Sight (1)'
	| 'Military Red Dot Sight (2)'
	| 'Milspec Scope'
	| 'Acough Optic Scope'
	| 'Compact Profile Sight'
	| 'Maelstrom Sight'
	| 'Advanced Combat Sight'
	| 'Reconnaissance Sight'

	// Snipers
	| 'Theia Magnified Scope'
	| 'Box Buddy Sight'

	// Repeater 1874
	| 'A5 Scope'

	// Pistols
	| 'Pistol Red Dot Sight'
	| 'SKOLD Micro Reflex Sight'
	| 'Riktpunkt Holosight'

	// Bernetti 9, Crosskill, Deagle
	| 'Marksman Sight'

	// Broomstick
	| 'Barrel Sight 44'

	// Contractor
	| 'Tritium Sights'

	// Pronghorn
	| 'Iron Sights'

	// Káng Arms X1
	| 'KA-ZD032 Iron Sight'

const sight: ModificationList<SightModificationsList> = {
	'The Professional\'s Choice Sight': {
		name: 'The Professional\'s Choice Sight',
		image: 'wpn_fps_upg_o_t1micro',
		icon: 'inv_mod_scope',
		slot: 'sight',
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
		icon: 'inv_mod_scope',
		slot: 'sight',
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
		icon: 'inv_mod_scope',
		slot: 'sight',
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
		icon: 'inv_mod_scope',
		slot: 'sight',
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
		icon: 'inv_mod_scope',
		slot: 'sight',
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
		icon: 'inv_mod_scope',
		slot: 'sight',
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
		icon: 'inv_mod_scope',
		slot: 'sight',
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
		icon: 'inv_mod_scope',
		slot: 'sight',
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
		icon: 'inv_mod_scope',
		slot: 'sight',
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
		icon: 'inv_mod_scope',
		slot: 'sight',
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
		icon: 'inv_mod_scope',
		slot: 'sight',
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
		icon: 'inv_mod_scope',
		slot: 'sight',
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
		icon: 'inv_mod_scope',
		slot: 'sight',
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
		icon: 'inv_mod_scope',
		slot: 'sight',
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
		icon: 'inv_mod_scope',
		slot: 'sight',
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
		icon: 'inv_mod_scope',
		slot: 'sight',
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
		icon: 'inv_mod_scope',
		slot: 'sight',
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
	},
	'Theia Magnified Scope': {
		name: 'Theia Magnified Scope',
		image: 'wpn_fps_upg_o_leupold',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['Gage Sniper Pack'],
		cost: 49600,
		acquisition: {
			achievement: 'Didn\'t See That Coming Did You?'
		},
		specialEffect: [
			'Auto-Tagger',
			'Range Finder'
		],
		stats: {
			stability: 4,
			concealment: -3
		},
		compatibleWeapons: mainSnipers
	},
	'Box Buddy Sight': {
		name: 'Box Buddy Sight',
		image: 'wpn_fps_upg_o_box',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['Gage Spec Ops Pack'],
		cost: 62e3,
		acquisition: {
			infinite: true
		},
		stats: {
			stability: 4,
			concealment: -3
		},
		compatibleWeapons: mainSnipers
	},
	'A5 Scope': {
		name: 'A5 Scope',
		image: 'wpn_fps_snp_winchester_sniper_scope',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['The Butcher\'s Western Pack'],
		cost: 0,
		acquisition: {
			bonus: 1
		},
		stats: {
			stability: 4,
			concealment: -3
		},
		compatibleWeapons: {
			sniper: [
				'Repeater 1874'
			]
		}
	},
	'Pistol Red Dot Sight': {
		name: 'Pistol Red Dot Sight',
		image: 'wpn_fps_upg_o_rmr',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Purple Snake'
		},
		stats: {
			accuracy: 4,
			concealment: -1
		},
		compatibleWeapons: mainPistols
	},
	'SKOLD Micro Reflex Sight': {
		name: 'SKOLD Micro Reflex Sight',
		image: 'wpn_fps_upg_o_rms',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['Cartel Optics Mod Pack'],
		cost: 44e3,
		stats: {
			accuracy: 4,
			concealment: -1
		},
		compatibleWeapons: mainPistols
	},
	'Riktpunkt Holosight': {
		name: 'Riktpunkt Holosight',
		image: 'wpn_fps_upg_o_rikt',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['Cartel Optics Mod Pack'],
		cost: 44e3,
		stats: {
			accuracy: 4,
			concealment: -1
		},
		compatibleWeapons: mainPistols
	},
	'Marksman Sight': {
		name: 'Marksman Sight',
		image: 'wpn_upg_o_marksmansight_rear',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: source['Base Game'],
		cost: 36e3,
		stats: {
			accuracy: 4,
			stability: 4
		},
		compatibleWeapons: {
			pistol: [
				'Bernetti 9',
				'Crosskill',
				'Deagle'
			]
		}
	},
	'Barrel Sight 44': {
		name: 'Barrel Sight 44',
		image: 'wpn_fps_pis_c96_sight',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['Gage Historical Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Special Operations Execution'
		},
		stats: {
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'Broomstick'
			]
		}
	},
	'Tritium Sights': {
		name: 'Tritium Sights',
		image: 'wpn_fps_pis_packrat_o_expert',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['John Wick Weapon Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		stats: {
			accuracy: 4
		},
		compatibleWeapons: {
			pistol: [
				'Contractor'
			]
		}
	},
	'Iron Sights': {
		name: 'Iron Sights',
		image: 'wpn_fps_snp_scout_o_iron_up',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['McShay Weapon Pack'],
		cost: 9e3,
		stats: {
			stability: -4,
			concealment: 2
		},
		compatibleWeapons: {
			sniper: [
				'Pronghorn'
			]
		}
	},
	'KA-ZD032 Iron Sight': {
		name: 'KA-ZD032 Iron Sight',
		image: 'KA-ZD032_Iron_Sight',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['Jiu Feng Smuggler Pack 2'],
		cost: 9e3,
		stats: {
			stability: -4,
			concealment: 2
		},
		compatibleWeapons: {
			sniper: [
				'Káng Arms X1'
			]
		}
	}
}

export default sight