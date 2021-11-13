import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'
import { assaultRifleList, lightMachineGunList, shotgunList, submachineGunList } from '../gunList'

import { CompatibleWeapons, WeaponModificationList } from '../weaponTypes'

const autoGuns: CompatibleWeapons = {
	assaultRifle: assaultRifleList,
	submachineGun: submachineGunList,
	lightMachineGun: lightMachineGunList
}

const mainPistols: CompatibleWeapons = {
	pistol: [
		'Interceptor 45 Pistol',
		'Chimano Custom Pistol',
		'Chimano Compact Pistol',
		'Chimano 88 Pistol',
		'Crosskill Pistol',
		'Bernetti 9 Pistol',
		'Bronco .44 Pistol',
		'White Streak Pistol',
		'STRYK 18c Pistol',
		'Deagle Pistol',
		'M13 9mm Pistol',
		'Gruber Kurz Pistol',
		'Signature .40 Pistol',
		'LEO Pistol',
		'Baby Deagle',
		'Bernetti Auto Pistol',
		'Czech 92 Pistol',
		'Igor Automatik Pistol',
		'HOLT 9mm Pistol',
		'Crosskill Chunky Compact Pistol'
	]
}

const mainPistolsWithBroomstick: CompatibleWeapons = {
	pistol: [
		...Object.values(mainPistols),
		'Broomstick Pistol'
	]
}

export type BarrelExtModificationsList =
	// Assault Rifles
	// Submachine Guns
	// Light Machine Guns
	'Low Profile Suppressor' |
	'Medium Suppressor' |
	'The Bigger The Better Suppressor' |
	'Stubby Compensator' |
	'The Tank Compensator' |
	'Fire Breather Nozzle' |
	'Tactical Compensator' |
	'Competitor\'s Compensator' |
	'Funnel of Fun Nozzle' |
	'Ported Compensator' |
	// Misc
	'PBS Suppressor' |

	// Shotguns
	'Shark Teeth Nozzle' |
	'The Silent Killer Suppressor' |
	'King\'s Crown Compensator' |
	'Shh!' |
	'Donald\'s Horizontal Leveller' |

	// Snipers
	'Beak Suppressor' |
	'Sniper Suppressor' |
	'Langer Barrel' |
	'Gedämpfter Barrel' |
	'Contractor Silencer' |

	// Pistols
	'IPSC Compensator' |
	'Facepunch Compensator' |
	'Flash Hider' |
	'Roctec Suppressor' |
	'Champion\'s Suppressor' |
	'Standard Issue Suppressor' |
	'Size Doesn\'t Matter Suppressor' |
	'Monolith Suppressor' |
	'Asepsis Suppressor' |
	'Budget Suppressor' |
	'Jungle Ninja Suppressor' |
	'Hurricane Compensator' |
	'Ventilated .45' |
	'Velocity .45' |
	'Ventilated Compensator' |
	'Velocity Compensator' |
	'Aggressor Comensator' |
	'Punisher Compensator' |
	'The Competitor Compensator' |
	'The Professional Compensator' |
	'La Femme Compensator' |
	'OVERKILL Compensator' |
	'Ventilated .40' |
	'Velocity .40' |
	'Damper.L 44 Nozzle'

const barrelExt: WeaponModificationList<BarrelExtModificationsList> = {
	'Low Profile Suppressor': {
		name: 'Low Profile Suppressor',
		image: 'wpn_fps_upg_ns_ass_smg_small',
		slot: 'Barrel Ext',
		source: source['Base Game'],
		cost: 21e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -5,
			threat: 16.8
		},
		compatibleWeapons: autoGuns
	},
	'Medium Suppressor': {
		name: 'Medium Suppressor',
		image: 'wpn_fps_upg_ns_ass_smg_medium',
		slot: 'Barrel Ext',
		source: source['Base Game'],
		cost: 14e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -3,
			stability: 4,
			concealment: -2,
			threat: -16.8
		},
		compatibleWeapons: autoGuns
	},
	'The Bigger The Better Suppressor': {
		name: 'The Bigger The Better Suppressor',
		image: 'wpn_fps_upg_ns_ass_smg_large',
		slot: 'Barrel Ext',
		source: source['Base Game'],
		cost: 36e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -1,
			accuracy: 8,
			stability: 4,
			concealment: -3,
			threat: 16.8
		},
		compatibleWeapons: autoGuns
	},
	'Stubby Compensator': {
		name: 'Stubby Compensator',
		image: 'wpn_fps_upg_ns_ass_smg_stubby',
		slot: 'Barrel Ext',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			damage: 1,
			stability: 12,
			threat: 6
		},
		compatibleWeapons: autoGuns
	},
	'The Tank Compensator': {
		name: 'The Tank Compensator',
		image: 'wpn_fps_upg_ns_ass_smg_tank',
		slot: 'Barrel Ext',
		source: source['Base Game'],
		cost: 28e3,
		stats: {
			damage: 2,
			stability: 8,
			concealment: -1,
			threat: 8
		},
		compatibleWeapons: autoGuns
	},
	'Fire Breather Nozzle': {
		name: 'Fire Breather Nozzle',
		image: 'wpn_fps_upg_ns_ass_smg_firepig',
		slot: 'Barrel Ext',
		source: source['Base Game'],
		cost: 36e3,
		stats: {
			damage: 3,
			stability: 4,
			concealment: -2,
			threat: 14
		},
		compatibleWeapons: autoGuns
	},
	'Tactical Compensator': {
		name: 'Tactical Compensator',
		image: 'wpn_fps_upg_ass_ns_surefire',
		slot: 'Barrel Ext',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Red Spider'
		},
		stats: {
			damage: 1,
			accuracy: 12,
			stability: -4,
			concealment: -2
		},
		compatibleWeapons: autoGuns
	},
	'Competitor\'s Compensator': {
		name: 'Competitor\'s Compensator',
		image: 'wpn_fps_upg_ass_ns_jprifles',
		slot: 'Barrel Ext',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Green Mantis'
		},
		stats: {
			damage: 2,
			accuracy: 4,
			stability: 12,
			concealment: -2,
			threat: 6
		},
		compatibleWeapons: autoGuns
	},
	'Funnel of Fun Nozzle': {
		name: 'Funnel of Fun Nozzle',
		image: 'wpn_fps_upg_ass_ns_linear',
		slot: 'Barrel Ext',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Yellow Bull'
		},
		stats: {
			damage: 4,
			accuracy: -8,
			concealment: -2,
			threat: 14
		},
		compatibleWeapons: autoGuns
	},
	'Ported Compensator': {
		name: 'Ported Compensator',
		image: 'wpn_fps_upg_ass_ns_battle',
		slot: 'Barrel Ext',
		source: content['The Butcher Mod Pack 2'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			damage: 2,
			accuracy: 4,
			stability: -8,
			concealment: -1
		},
		compatibleWeapons: autoGuns
	},
	'PBS Suppressor': {
		name: 'PBS Suppressor',
		image: 'wpn_fps_upg_ns_ass_pbs1',
		slot: 'Barrel Ext',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: '$1.8M Speedrun'
		},
		stats: {
			stability: 4,
			concealment: -5,
			threat: -22
		},
		compatibleWeapons: {
			assaultRifle: [
				'AK Rifle',
				'AK.762',
				'Golden AK.762 Rifle',
				'AK17 Rifle'
			],
			lightMachineGun: [
				'RPK Light Machine Gun'
			],
			submachineGun: [
				'Krinkov Submachine Gun',
				'Tatonka Submachine Gun'
			]
		}
	},
	'Shark Teeth Nozzle': {
		name: 'Shark Teeth Nozzle',
		image: 'wpn_fps_upg_ns_shot_shark',
		slot: 'Barrel Ext',
		source: source['Base Game'],
		cost: 36e3,
		stats: {
			damage: 2,
			accuracy: -8,
			stability: 8,
			concealment: -2,
			threat: 6
		},
		compatibleWeapons: {
			shotgun: shotgunList
		}
	},
	'The Silent Killer Suppressor': {
		name: 'The Silent Killer Suppressor',
		image: 'wpn_fps_upg_ns_shot_thick',
		slot: 'Barrel Ext',
		source: source['Base Game'],
		cost: 53e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -4,
			stability: 4,
			concealment: -2,
			threat: -22
		},
		compatibleWeapons: {
			shotgun: shotgunList
		}
	},
	'King\'s Crown Compensator': {
		name: 'King\'s Crown Compensator',
		image: 'wpn_fps_upg_shot_ns_king',
		slot: 'Barrel Ext',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Purple Snake'
		},
		stats: {
			damage: 1,
			accuracy: 12,
			concealment: -2,
			threat: 18.8
		},
		compatibleWeapons: {
			shotgun: shotgunList
		}
	},
	'Shh!': {
		name: 'Shh!',
		image: 'wpn_fps_upg_ns_sho_salvo_large',
		slot: 'Barrel Ext',
		source: content['The Butcher Mod Pack 2'],
		cost: 53e3,
		acquisition: {
			bonus: 1
		},
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -4,
			accuracy: 4,
			stability: 4,
			concealment: -4,
			threat: -22
		},
		compatibleWeapons: {
			shotgun: shotgunList
		}
	},
	'Donald\'s Horizontal Leveller': {
		name: 'Donald\'s Horizontal Leveller',
		image: 'wpn_fps_upg_ns_duck',
		slot: 'Barrel Ext',
		source: content['Gage Spec Ops Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		specialEffect: ['Spread pellets horizontally'],
		stats: {
			damage: 2,
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			shotgun: shotgunList
		}
	},
	'Beak Suppressor': {
		name: 'Beak Suppressor',
		image: 'wpn_fps_snp_model70_ns_suppressor',
		slot: 'Barrel Ext',
		source: source['Base Game'],
		cost: 9e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -12,
			stability: 4,
			concealment: -2,
			threat: -22
		},
		compatibleWeapons: {
			sniper: [
				'Platypus 70 Sniper Rifle'
			]
		}
	},
	'Sniper Suppressor': {
		name: 'Sniper Suppressor',
		image: 'wpn_fps_snp_msr_ns_suppressor',
		slot: 'Barrel Ext',
		source: content['Gage Sniper Pack'],
		cost: 28e3,
		acquisition: {
			achievement: 'Double Kill'
		},
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -8,
			accuracy: -4,
			stability: 12,
			concealment: -2,
			threat: -22
		},
		compatibleWeapons: {
			sniper: [
				'Rattlesnake Sniper Rifle'
			]
		}
	},
	'Langer Barrel': {
		name: 'Langer Barrel',
		image: 'wpn_fps_snp_wa2000_b_long',
		slot: 'Barrel Ext',
		source: content['Gage Ninja Pack'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			concealment: -3
		},
		compatibleWeapons: {
			sniper: [
				'Lebensauger .308 Sniper Rifle'
			]
		}
	},
	'Gedämpfter Barrel': {
		name: 'Gedämpfter Barrel',
		image: 'wpn_fps_snp_wa2000_b_suppressed',
		slot: 'Barrel Ext',
		source: content['Gage Ninja Pack'],
		cost: 44e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -4,
			accuracy: -4,
			stability: 8,
			concealment: -2,
			threat: -18
		},
		compatibleWeapons: {
			sniper: [
				'Lebensauger .308 Sniper Rifle'
			]
		}
	},
	'Contractor Silencer': {
		name: 'Contractor Silencer',
		image: 'wpn_fps_snp_tti_ns_hex',
		slot: 'Barrel Ext',
		source: content['John Wick Heists'],
		cost: 9e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -2,
			stability: 4,
			concealment: -2,
			threat: -18
		},
		compatibleWeapons: {
			sniper: [
				'Contractor .308 Sniper Rifle'
			]
		}
	},
	'IPSC Compensator': {
		name: 'IPSC Compensator',
		image: 'wpn_fps_upg_ns_pis_ipsccomp',
		slot: 'Barrel Ext',
		source: source.Community,
		cost: 28e3,
		stats: {
			accuracy: 12,
			stability: -4,
			concealment: -1
		},
		compatibleWeapons: mainPistols
	},
	'Facepunch Compensator': {
		name: 'Facepunch Compensator',
		image: 'wpn_fps_upg_ns_pis_meatgrinder',
		slot: 'Barrel Ext',
		source: source.Community,
		cost: 53e3,
		stats: {
			damage: 2,
			accuracy: -4,
			stability: 8,
			concealment: -1
		},
		compatibleWeapons: mainPistolsWithBroomstick
	},
	'Flash Hider': {
		name: 'Flash Hider',
		image: 'wpn_fps_upg_pis_ns_flash',
		slot: 'Barrel Ext',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Blue Eagle'
		},
		stats: {
			damage: 2,
			accuracy: -4,
			stability: 12
		},
		compatibleWeapons: mainPistolsWithBroomstick
	},
	'Roctec Suppressor': {
		name: 'Roctec Suppressor',
		image: 'wpn_fps_upg_ns_pis_medium_gem',
		slot: 'Barrel Ext',
		source: source.Community,
		cost: 28e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -3,
			stability: 4,
			concealment: -1,
			threat: -24
		},
		compatibleWeapons: mainPistolsWithBroomstick
	},
	'Champion\'s Suppressor': {
		name: 'Champion\'s Suppressor',
		image: 'wpn_fps_upg_ns_pis_large_kac',
		slot: 'Barrel Ext',
		source: source.Community,
		cost: 44e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -1,
			accuracy: 4,
			stability: -8,
			concealment: -2,
			threat: -24
		},
		compatibleWeapons: mainPistolsWithBroomstick
	},
	'Standard Issue Suppressor': {
		name: 'Standard Issue Suppressor',
		image: 'wpn_fps_upg_ns_pis_medium',
		slot: 'Barrel Ext',
		source: source['Base Game'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -2,
			stability: 4,
			concealment: -2,
			threat: -24
		},
		compatibleWeapons: mainPistolsWithBroomstick
	},
	'Size Doesn\'t Matter Suppressor': {
		name: 'Size Doesn\'t Matter Suppressor',
		image: 'wpn_fps_upg_ns_pis_small',
		slot: 'Barrel Ext',
		source: source['Base Game'],
		cost: 21e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -4,
			threat: -24
		},
		compatibleWeapons: mainPistolsWithBroomstick
	},
	'Monolith Suppressor': {
		name: 'Monolith Suppressor',
		image: 'wpn_fps_upg_ns_pis_large',
		slot: 'Barrel Ext',
		source: source['Base Game'],
		cost: 36e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -1,
			stability: 8,
			concealment: -3,
			threat: -24
		},
		compatibleWeapons: mainPistolsWithBroomstick
	},
	'Asepsis Suppressor': {
		name: 'Asepsis Suppressor',
		image: 'wpn_fps_upg_ns_pis_medium_slim',
		slot: 'Barrel Ext',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Green Mantis'
		},
		specialEffect: ['Silences Weapon'],
		stats: {
			accuracy: -8,
			stability: -4,
			concealment: -2,
			threat: -24
		},
		compatibleWeapons: mainPistolsWithBroomstick
	},
	'Budget Suppressor': {
		name: 'Budget Suppressor',
		image: 'wpn_fps_upg_ns_ass_filter',
		slot: 'Barrel Ext',
		source: content['The Butcher Mod Pack 2'],
		cost: 0,
		acquisition: {
			bonus: 5
		},
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -3,
			accuracy: -4,
			concealment: -3,
			threat: -24
		},
		compatibleWeapons: mainPistolsWithBroomstick
	},
	'Jungle Ninja Suppressor': {
		name: 'Jungle Ninja Suppressor',
		image: 'wpn_fps_upg_ns_pis_jungle',
		slot: 'Barrel Ext',
		source: content['The Butcher Mod Pack 2'],
		cost: 36e3,
		acquisition: {
			bonus: 1
		},
		specialEffect: ['Silences Weapon'],
		stats: {
			accuracy: 4,
			stability: 8,
			concealment: -5,
			threat: -24
		},
		compatibleWeapons: mainPistolsWithBroomstick
	},
	'Hurricane Compensator': {
		name: 'Hurricane Compensator',
		image: 'wpn_fps_upg_ns_pis_typhoon',
		slot: 'Barrel Ext',
		source: content['Cartel Optics Mod Pack'],
		cost: 39200,
		acquisition: {
			bonus: 1
		},
		stats: {
			damage: 1,
			accuracy: 4,
			stability: 4,
			concealment: -1,
			threat: -24
		},
		compatibleWeapons: mainPistolsWithBroomstick
	},
	'Ventilated .45': {
		name: 'Ventilated .45',
		image: 'wpn_fps_pis_usp_co_comp_1',
		slot: 'Barrel Ext',
		source: source.Community,
		cost: 28e3,
		stats: {
			damage: 2,
			accuracy: -4,
			concealment: -1,
			threat: 5
		},
		compatibleWeapons: {
			pistol: [
				'Interceptor 45 Pistol'
			]
		}
	},
	'Velocity .45': {
		name: 'Velocity .45',
		image: 'wpn_fps_pis_usp_co_comp_2',
		slot: 'Barrel Ext',
		source: source.Community,
		cost: 36e3,
		stats: {
			accuracy: 8,
			stability: 8,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Interceptor 45 Pistol'
			]
		}
	},
	'Ventilated Compensator': {
		name: 'Ventilated Compensator',
		image: 'wpn_fps_pis_g18c_co_1',
		slot: 'Barrel Ext',
		source: source['Base Game'],
		cost: 28e3,
		stats: {
			damage: 1,
			stability: -4,
			concealment: -1,
			threat: 5
		},
		compatibleWeapons: {
			pistol: [
				'STRYK 18c Pistol',
				'Chimano Custom Pistol'
			]
		}
	},
	'Velocity Compensator': {
		name: 'Velocity Compensator',
		image: 'wpn_fps_pis_g18c_co_comp_2',
		slot: 'Barrel Ext',
		source: source['Base Game'],
		cost: 36e3,
		stats: {
			damage: 1,
			stability: 16,
			concealment: -1,
			threat: 1
		},
		compatibleWeapons: {
			pistol: [
				'STRYK 18c Pistol',
				'Chimano Custom Pistol'
			]
		}
	},
	'Aggressor Comensator': {
		name: 'Aggressor Comensator',
		image: 'wpn_fps_pis_1911_co_2',
		slot: 'Barrel Ext',
		source: source.Community,
		cost: 14e3,
		stats: {
			damage: 2,
			stability: 8,
			concealment: -1,
			threat: 1
		},
		compatibleWeapons: {
			pistol: [
				'Crosskill Pistol'
			]
		}
	},
	'Punisher Compensator': {
		name: 'Punisher Compensator',
		image: 'wpn_fps_pis_1911_co_1',
		slot: 'Barrel Ext',
		source: source.Community,
		cost: 36e3,
		stats: {
			damage: 1,
			stability: 4,
			concealment: -1,
			threat: 10
		},
		compatibleWeapons: {
			pistol: [
				'Crosskill Pistol'
			]
		}
	},
	'The Competitor Compensator': {
		name: 'The Competitor Compensator',
		image: 'wpn_fps_pis_beretta_co_co2',
		slot: 'Barrel Ext',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			damage: 2,
			concealment: -1,
			threat: 6
		},
		compatibleWeapons: {
			pistol: [
				'Bernetti 9 Pistol'
			]
		}
	},
	'The Professional Compensator': {
		name: 'The Professional Compensator',
		image: 'wpn_fps_pis_beretta_co_co1',
		slot: 'Barrel Ext',
		source: source['Base Game'],
		cost: 28e3,
		stats: {
			damage: 1,
			accuracy: 4,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'Bernetti 9 Pistol'
			]
		}
	},
	'La Femme Compensator': {
		name: 'La Femme Compensator',
		image: 'wpn_fps_pis_deagle_co_short',
		slot: 'Barrel Ext',
		source: source.Community,
		cost: 44e3,
		stats: {
			damage: 1,
			stability: 4,
			concealment: -1,
			threat: 13
		},
		compatibleWeapons: {
			pistol: [
				'Deagle Pistol'
			]
		}
	},
	'OVERKILL Compensator': {
		name: 'OVERKILL Compensator',
		image: 'wpn_fps_pis_deagle_co_long',
		slot: 'Barrel Ext',
		source: source.Community,
		cost: 62e3,
		stats: {
			damage: 2,
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'Deagle Pistol'
			]
		}
	},
	'Ventilated .40': {
		name: 'Ventilated .40',
		image: 'wpn_fps_pis_p226_co_comp_1',
		slot: 'Barrel Ext',
		source: content['Gage Weapon Pack #01'],
		cost: 39200,
		stats: {
			damage: 2,
			accuracy: -4,
			concealment: -1,
			threat: 5
		},
		compatibleWeapons: {
			pistol: [
				'Signature .40 Pistol'
			]
		}
	},
	'Velocity .40': {
		name: 'Velocity .40',
		image: 'wpn_fps_pis_p226_co_comp_2',
		slot: 'Barrel Ext',
		source: content['Gage Weapon Pack #01'],
		cost: 50400,
		stats: {
			accuracy: 8,
			stability: 8,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Signature .40 Pistol'
			]
		}
	},
	'Damper.L 44 Nozzle': {
		name: 'Damper.L 44 Nozzle',
		image: 'wpn_fps_pis_c96_nozzle',
		slot: 'Barrel Ext',
		source: content['Gage Historical Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Special Operations Execution'
		},
		stats: {
			damage: 2,
			accuracy: -4,
			stability: 8,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Broomstick Pistol'
			]
		}
	}
}

export default barrelExt