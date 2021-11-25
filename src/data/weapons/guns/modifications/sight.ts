import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { assaultRifleList, submachineGunList } from '../gunList'
import { CompatibleWeapons, ModificationList } from '../weaponTypes'

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

const mainPistols: CompatibleWeapons = {
	pistol: [
		'Chimano 88 Pistol',
		'Crosskill Pistol',
		'Bernetti 9 Pistol',
		'White Streak Pistol',
		'Parabellum Pistol',
		'Crosskill Guard Pistol',
		'STRYK 18c Pistol',
		'Deagle Pistol',
		'M13 9mm Pistol',
		'Gruber Kurz Pistol',
		'Signature .40 Pistol',
		'Baby Deagle',
		'Contractor Pistol',
		'LEO Pistol',
		'Broomstick Pistol',
		'Bernetti Auto Pistol',
		'Czech 92 Pistol',
		'Igor Automatik Pistol',
		'HOLT 9mm Pistol',
		'Interceptor .45 Pistol',
		'Chimano Custom Pistol',
		'5/7 AP Pistol',
		'Chimano Compact Pistol'
	]
}

export type SightModificationsList =
	// Main guns
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
	'Reconnaissance Sight' |

	// Snipers
	'Theia Magnified Scope' |
	'Box Buddy Sight' |

	// Repeater 1874
	'A5 Scope' |

	// Pistols
	'Pistol Red Dot Sight' |
	'SKOLD Micro Reflex Sight' |
	'Riktpunkt Holosight' |

	// Bernetti 9, Crosskill, Deagle
	'Marksman Sight' |

	// Broomstick
	'Barrel Sight 44' |

	// Contractor
	'Tritium Sights'

const sight: ModificationList<SightModificationsList> = {
	'The Professional\'s Choice Sight': {
		name: 'The Professional\'s Choice Sight',
		image: 'wpn_fps_upg_o_t1micro',
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
				'Repeater 1874 Sniper Rifle'
			]
		}
	},
	'Pistol Red Dot Sight': {
		name: 'Pistol Red Dot Sight',
		image: 'wpn_fps_upg_o_rmr',
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
		slot: 'sight',
		source: source['Base Game'],
		cost: 36e3,
		stats: {
			accuracy: 4,
			stability: 4
		},
		compatibleWeapons: {
			pistol: [
				'Bernetti 9 Pistol',
				'Crosskill Pistol',
				'Deagle Pistol'
			]
		}
	},
	'Barrel Sight 44': {
		name: 'Barrel Sight 44',
		image: 'wpn_fps_pis_c96_sight',
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
				'Broomstick Pistol'
			]
		}
	},
	'Tritium Sights': {
		name: 'Tritium Sights',
		image: 'wpn_fps_pis_packrat_o_expert',
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
				'Contractor Pistol'
			]
		}
	}
}

export default sight