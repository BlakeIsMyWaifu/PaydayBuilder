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
	| 'Holographic Sight x1.5'
	| 'The Professional\'s Choice Sight x1.5'
	| 'Surgeon Sight x1.25'
	| 'Acough Optic Scope x3.25'
	| 'Military Red Dot Sight x2'
	| 'Military Red Dot Sight Special x2'
	| 'Milspec Scope x2'
	| 'See More Sight x1.5'
	| 'Combat Sight x2'
	| 'Compact Holosight x1.5'
	| 'Speculator Sight x1.5'
	| 'Trigonom Sight x1.5'
	| 'Solar Sight x1.5'
	| 'Reconnaissance Sight x2'
	| 'Compact Tactical Box Sight x2.5'
	| 'Compact Profile Sight x1.5'
	| 'Maelstrom Sight x1.5'
	| 'CASSIAN Elite Score x4.5'
	| 'Biometric Analyzer x1.25'
	| 'Advanced Combat Sight x3.25'
	| 'CASSIAN Sharp Sight x3.25'
	| 'Z5 Owl Glass Universal Scope x2.5'

	// JP36
	| 'JP36 Original Sight x2'

	// Rodion 3B
	| 'Svidetel Iron Sight' // TODO scope level
	| 'Angular Rail' // TODO scope level

	// Raven
	| 'Flip-up x1'

	// Snipers
	| 'Theia Magnified Scope x10'
	| 'Box Buddy Sight x10'
	| 'CASSIAN Iron Sights x1'
	| 'Trace Optic x6.25'
	| 'Tuunbaq Scope x4.5 / x10'

	// Bernetti Rangehitter
	| 'Iron Sight x1 (Bernetti Rangehitter)'

	// Káng Arms X1
	| 'KA-ZD032 Iron Sight x1.25'

	// Amaroq 900
	| 'Keelut Ironsights x1.25'

	// Platypus 70
	| 'Iron Sight x1.25 (Platypus)'

	// Repeater 1874
	| 'A5 Scope' // TODO scope level

	// Grom
	| 'Iron Sight (Grom)' // TODO scope level

	// Nagant
	| 'Iron Sight x1.25 (Nagant)'

	// Pistols
	| 'Pistol Red Dot Sight x1.5'
	| 'SKOLD Micro Reflex Sight x1.5'
	| 'Riktpunkt Holosight x1.5'

	// Bernetti 9, Crosskill, Deagle
	| 'Marksman Sight x1.25'

	// Broomstick
	| 'Barrel Sight 44'

	// Contractor
	| 'Tritium Sights'

	// Pronghorn
	| 'Iron Sights'

	// Aran G2
	| 'Sylux Iron Sight'

	// North Star
	| 'Cynosura Iron Sights'

const sight: ModificationList<SightModificationsList> = {
	'Holographic Sight x1.5': {
		name: 'Holographic Sight x1.5',
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
	'The Professional\'s Choice Sight x1.5': {
		name: 'The Professional\'s Choice Sight x1.5',
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
	'Surgeon Sight x1.25': {
		name: 'Surgeon Sight x1.25',
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
	'Acough Optic Scope x3.25': {
		name: 'Acough Optic Scope x3.25',
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
	'Military Red Dot Sight x2': {
		name: 'Military Red Dot Sight x2',
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
	'Military Red Dot Sight Special x2': {
		name: 'Military Red Dot Sight Special x2',
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
	'Milspec Scope x2': {
		name: 'Milspec Scope x2',
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
	'See More Sight x1.5': {
		name: 'See More Sight x1.5',
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
	'Combat Sight x2': {
		name: 'Combat Sight x2',
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
	'Compact Holosight x1.5': {
		name: 'Compact Holosight x1.5',
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
	'Speculator Sight x1.5': {
		name: 'Speculator Sight x1.5',
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
	'Trigonom Sight x1.5': {
		name: 'Trigonom Sight x1.5',
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
	'Solar Sight x1.5': {
		name: 'Solar Sight x1.5',
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
	'Reconnaissance Sight x2': {
		name: 'Reconnaissance Sight x2',
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
	'Compact Tactical Box Sight x2.5': {
		name: 'Compact Tactical Box Sight x2.5',
		image: 'wpn_fps_upg_o_tf90',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: source['Christmas 2020 Update'],
		cost: 36e3,
		stats: {
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: {}
	},
	'Compact Profile Sight x1.5': {
		name: 'Compact Profile Sight x1.5',
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
	'Maelstrom Sight x1.5': {
		name: 'Maelstrom Sight x1.5',
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
	'CASSIAN Elite Score x4.5': {
		name: 'CASSIAN Elite Score x4.5',
		image: 'wpn_fps_upg_o_hamr',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['McShay Mod Pack'],
		cost: 36e3,
		stats: {
			accuracy: -4,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: {}
	},
	'Biometric Analyzer x1.25': {
		name: 'Biometric Analyzer x1.25',
		image: 'wpn_fps_upg_o_health',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['McShay Mod Pack'],
		cost: 36e3,
		specialEffect: ['Health Display'],
		stats: {
			accuracy: 4,
			concealment: -1
		},
		compatibleWeapons: {}
	},
	'Advanced Combat Sight x3.25': {
		name: 'Advanced Combat Sight x3.25',
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
	'CASSIAN Sharp Sight x3.25': {
		name: 'CASSIAN Sharp Sight x3.25',
		image: 'wpn_fps_upg_o_atibal',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['McShay Mod Pack'],
		cost: 62e3,
		specialEffect: ['Piggyback Mode'],
		stats: {
			accuracy: 4,
			stability: 24,
			concealment: -2
		},
		compatibleWeapons: {}
	},
	'Z5 Owl Glass Universal Scope x2.5': {
		name: 'Z5 Owl Glass Universal Scope x2.5',
		image: 'wpn_fps_upg_o_poe',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['Jiu Feng Smuggler Pack 3'],
		cost: 36e3,
		stats: {
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: {}
	},
	'JP36 Original Sight x2': {
		name: 'JP36 Original Sight x2',
		image: 'wpn_fps_ass_g36_o_vintage',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['Gage Spec Ops Pack'],
		cost: 9e3,
		stats: {
			stability: 4
		},
		compatibleWeapons: {}
	},
	'Svidetel Iron Sight': {
		name: 'Svidetel Iron Sight',
		image: 'wpn_fps_ass_tkb_o_tritium',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['McShay Weapon Pack 3'],
		cost: 9e3,
		stats: {
			accuracy: 4
		},
		compatibleWeapons: {}
	},
	'Angular Rail': {
		name: 'Angular Rail',
		image: 'wpn_fps_ass_tkb_o_tt01',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['McShay Weapon Pack 3'],
		cost: 9e3,
		stats: {
			stability: 4
		},
		compatibleWeapons: {}
	},
	'Flip-up x1': {
		name: 'Flip-up x1',
		image: 'wpn_fps_upg_o_mbus_rear',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['Gage Shotgun Pack'],
		cost: 21e3,
		acquisition: {
			achievement: 'Lock, Stock & Eight Smoking Barrels'
		},
		stats: {
			concealment: 2
		},
		compatibleWeapons: {}
	},
	'Theia Magnified Scope x10': {
		name: 'Theia Magnified Scope x10',
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
	'Box Buddy Sight x10': {
		name: 'Box Buddy Sight x10',
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
	'CASSIAN Iron Sights x1': {
		name: 'CASSIAN Iron Sights x1',
		image: 'wpn_fps_upg_o_mbus_pro',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['McShay Mod Pack'],
		cost: 21e3,
		stats: {
			stability: -4,
			concealment: 2
		},
		compatibleWeapons: {}
	},
	'Trace Optic x6.25': {
		name: 'Trace Optic x6.25',
		image: 'wpn_fps_upg_o_northtac',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['McShay Weapon Pack 3'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			concealment: -2
		},
		compatibleWeapons: {}
	},
	'Tuunbaq Scope x4.5 / x10': {
		name: 'Tuunbaq Scope x4.5 / x10',
		image: 'wpn_fps_upg_o_schmidt',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['McShay Weapon Pack 4'],
		cost: 62e3,
		stats: {
			accuracy: -4,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: {}
	},
	'Iron Sight x1 (Bernetti Rangehitter)': {
		name: 'Iron Sight x1 (Bernetti Rangehitter)',
		image: 'wpn_fps_snp_sbl_o_standard',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: source['Christmas 2020 Update'],
		cost: 9e3,
		stats: {
			stability: -4,
			concealment: 2
		},
		compatibleWeapons: {}
	},
	'KA-ZD032 Iron Sight x1.25': {
		name: 'KA-ZD032 Iron Sight x1.25',
		image: 'wpn_fps_snp_qbu88_o_standard',
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
	},
	'Keelut Ironsights x1.25': {
		name: 'Keelut Ironsights x1.25',
		image: 'wpn_fps_snp_awp_o_irons',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['McShay Weapon Pack 4'],
		cost: 21e3,
		stats: {
			stability: -4,
			concealment: 2
		},
		compatibleWeapons: {}
	},
	'Iron Sight x1.25 (Platypus)': {
		name: 'Iron Sight x1.25 (Platypus)',
		image: 'wpn_fps_snp_model70_iron_sight',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: source['Base Game'],
		cost: 0,
		acquisition: {
			infinite: true
		},
		stats: {
			stability: -4,
			concealment: 2
		},
		compatibleWeapons: {}
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
	'Iron Sight (Grom)': {
		name: 'Iron Sight (Grom)',
		image: 'wpn_fps_snp_siltstone_iron_sight',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['Gage Russian Weapon Pack'],
		cost: 9e3,
		stats: {
			stability: -4,
			concealment: 2
		},
		compatibleWeapons: {}
	},
	'Iron Sight x1.25 (Nagant)': {
		name: 'Iron Sight x1.25 (Nagant)',
		image: 'wpn_fps_snp_mosin_iron_sight',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['Gage Historical Pack'],
		cost: 0,
		acquisition: {
			infinite: true
		},
		stats: {
			stability: -4,
			concealment: 2
		},
		compatibleWeapons: {}
	},
	'Pistol Red Dot Sight x1.5': {
		name: 'Pistol Red Dot Sight x1.5',
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
	'SKOLD Micro Reflex Sight x1.5': {
		name: 'SKOLD Micro Reflex Sight x1.5',
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
	'Riktpunkt Holosight x1.5': {
		name: 'Riktpunkt Holosight x1.5',
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
	'Marksman Sight x1.25': {
		name: 'Marksman Sight x1.25',
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
	'Sylux Iron Sight': {
		name: 'Sylux Iron Sight',
		image: 'wpn_fps_upg_contender_o_ironsight',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['McShay Weapon Pack 3'],
		cost: 9e3,
		stats: {
			stability: -4,
			concealment: 2
		},
		compatibleWeapons: {}
	},
	'Cynosura Iron Sights': {
		name: 'Cynosura Iron Sights',
		image: 'wpn_fps_snp_victor_o_standard',
		icon: 'inv_mod_scope',
		slot: 'sight',
		source: content['A Criminal Carol'],
		cost: 9e3,
		acquisition: {
			sideJob: 'Constellation Prize'
		},
		stats: {
			concealment: 2
		},
		compatibleWeapons: {}
	}
}

export default sight