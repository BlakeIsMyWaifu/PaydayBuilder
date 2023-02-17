import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { assaultRifleList, lightMachineGunList, shotgunList, submachineGunList } from '../gunList'
import { CompatibleWeapons, ModificationList } from '../weaponTypes'

const autoGuns: CompatibleWeapons = {
	assaultRifle: assaultRifleList,
	submachineGun: submachineGunList,
	lightMachineGun: lightMachineGunList
}

const mainPistols: CompatibleWeapons = {
	pistol: [
		'Interceptor .45',
		'Chimano Custom',
		'Chimano Compact',
		'Chimano 88',
		'Crosskill',
		'Bernetti 9',
		'White Streak',
		'STRYK 18c',
		'Deagle',
		'M13 9mm',
		'Gruber Kurz',
		'Signature .40',
		'LEO',
		'Baby Deagle',
		'Bernetti Auto',
		'Czech 92',
		'Igor Automatik',
		'HOLT 9mm',
		'Crosskill Chunky Compact'
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
	| 'Low Profile Suppressor'
	| 'Medium Suppressor'
	| 'The Bigger The Better Suppressor'
	| 'Stubby Compensator'
	| 'The Tank Compensator'
	| 'Fire Breather Nozzle'
	| 'Tactical Compensator'
	| 'Competitor\'s Compensator'
	| 'Funnel of Fun Nozzle'
	| 'Ported Compensator'
	// Misc
	| 'PBS Suppressor'

	// Shotguns
	| 'Shark Teeth Nozzle'
	| 'The Silent Killer Suppressor'
	| 'King\'s Crown Compensator'
	| 'Shh!'
	| 'Donald\'s Horizontal Leveller'

	// Platypus 70
	| 'Beak Suppressor'

	// Rattlesnake
	| 'Sniper Suppressor'

	// Contractor .308
	| 'Contractor Silencer'

	// Pistols
	| 'IPSC Compensator'
	| 'Facepunch Compensator'
	| 'Flash Hider'
	| 'Roctec Suppressor'
	| 'Champion\'s Suppressor'
	| 'Standard Issue Suppressor'
	| 'Size Doesn\'t Matter Suppressor'
	| 'Monolith Suppressor'
	| 'Asepsis Suppressor'
	| 'Budget Suppressor'
	| 'Jungle Ninja Suppressor'
	| 'Hurricane Compensator'

	// Interceptor .45
	| 'Ventilated .45'
	| 'Velocity .45'

	// STRYK 18c, Chimano Custom
	| 'Ventilated Compensator'
	| 'Velocity Compensator'

	// Crosskill
	| 'Aggressor Compensator'
	| 'Punisher Compensator'

	// Bernetti 9
	| 'The Competitor Compensator'
	| 'The Professional Compensator'

	// Deagle
	| 'La Femme Compensator'
	| 'OVERKILL Compensator'

	// Signature .40
	| 'Ventilated .40'
	| 'Velocity .40'

	// Broomstick
	| 'Damper.L 44 Nozzle'

	// Contractor
	| 'Contractor Compensator'

	// SpecOps
	| 'Suppressed Barrel'

	// Mark 10, Jacket's Piece
	| 'Werbell\'s Suppressor'
	| 'Slotted Barrel Extension'

	// Cobra
	| 'Suppressor'

	// CMP
	| 'Tactical Suppressor'

	// Micro Uzi
	| 'Futomaki Suppressor'
	| 'Maki Suppressor'
	| 'Spring Suppressor'

	// Jackal
	| 'Silentgear Silencer'

	// Heather
	| 'Tishina Suppressor'

	// Kross Vertex
	| 'HPS Suppressor'
	| 'Precision Barrel'

	// Uzi
	| 'Silent Death'

	// SG Versteckt 51D + other?
	| 'Marmon Compensator'

	// Argos III
	| 'Try-Core Compensator'

	// KS12 Urban Rifle
	| 'KS12-A Burst Muzzle'
	| 'KS12-S Long Silencer'

	// Aran G2
	| 'Phantom Suppressor'

const barrelExt: ModificationList<BarrelExtModificationsList> = {
	'Low Profile Suppressor': {
		name: 'Low Profile Suppressor',
		image: 'wpn_fps_upg_ns_ass_smg_small',
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
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
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
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
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
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
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
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
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
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
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
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
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
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
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
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
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
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
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
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
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		specialEffect: ['Silences Weapon'],
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
				'AK',
				'AK.762',
				'Golden AK.762',
				'AK17'
			],
			lightMachineGun: [
				'RPK'
			],
			submachineGun: [
				'Krinkov',
				'Tatonka'
			]
		}
	},
	'Shark Teeth Nozzle': {
		name: 'Shark Teeth Nozzle',
		image: 'wpn_fps_upg_ns_shot_shark',
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
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
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
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
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
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
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
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
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
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
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
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
				'Platypus 70'
			]
		}
	},
	'Sniper Suppressor': {
		name: 'Sniper Suppressor',
		image: 'wpn_fps_snp_msr_ns_suppressor',
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
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
				'Rattlesnake'
			]
		}
	},
	'Contractor Silencer': {
		name: 'Contractor Silencer',
		image: 'wpn_fps_snp_tti_ns_hex',
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
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
				'Contractor .308'
			]
		}
	},
	'IPSC Compensator': {
		name: 'IPSC Compensator',
		image: 'wpn_fps_upg_ns_pis_ipsccomp',
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
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
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
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
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
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
		compatibleWeapons: {
			pistol: [
				...Object.values(mainPistolsWithBroomstick),
				'Bronco .44 Pistol'
			]
		}
	},
	'Roctec Suppressor': {
		name: 'Roctec Suppressor',
		image: 'wpn_fps_upg_ns_pis_medium_gem',
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
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
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
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
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
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
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
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
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
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
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
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
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
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
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
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
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
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
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
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
				'Interceptor .45'
			]
		}
	},
	'Velocity .45': {
		name: 'Velocity .45',
		image: 'wpn_fps_pis_usp_co_comp_2',
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
		source: source.Community,
		cost: 36e3,
		stats: {
			accuracy: 8,
			stability: 8,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Interceptor .45'
			]
		}
	},
	'Ventilated Compensator': {
		name: 'Ventilated Compensator',
		image: 'wpn_fps_pis_g18c_co_1',
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
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
				'STRYK 18c',
				'Chimano Custom'
			]
		}
	},
	'Velocity Compensator': {
		name: 'Velocity Compensator',
		image: 'wpn_fps_pis_g18c_co_comp_2',
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
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
				'STRYK 18c',
				'Chimano Custom'
			]
		}
	},
	'Aggressor Compensator': {
		name: 'Aggressor Compensator',
		image: 'wpn_fps_pis_1911_co_2',
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
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
				'Crosskill'
			]
		}
	},
	'Punisher Compensator': {
		name: 'Punisher Compensator',
		image: 'wpn_fps_pis_1911_co_1',
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
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
				'Crosskill'
			]
		}
	},
	'The Competitor Compensator': {
		name: 'The Competitor Compensator',
		image: 'wpn_fps_pis_beretta_co_co2',
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			damage: 2,
			concealment: -1,
			threat: 6
		},
		compatibleWeapons: {
			pistol: [
				'Bernetti 9'
			]
		}
	},
	'The Professional Compensator': {
		name: 'The Professional Compensator',
		image: 'wpn_fps_pis_beretta_co_co1',
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
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
				'Bernetti 9'
			]
		}
	},
	'La Femme Compensator': {
		name: 'La Femme Compensator',
		image: 'wpn_fps_pis_deagle_co_short',
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
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
				'Deagle'
			]
		}
	},
	'OVERKILL Compensator': {
		name: 'OVERKILL Compensator',
		image: 'wpn_fps_pis_deagle_co_long',
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
		source: source.Community,
		cost: 62e3,
		stats: {
			damage: 2,
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'Deagle'
			]
		}
	},
	'Ventilated .40': {
		name: 'Ventilated .40',
		image: 'wpn_fps_pis_p226_co_comp_1',
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
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
				'Signature .40'
			]
		}
	},
	'Velocity .40': {
		name: 'Velocity .40',
		image: 'wpn_fps_pis_p226_co_comp_2',
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
		source: content['Gage Weapon Pack #01'],
		cost: 50400,
		stats: {
			accuracy: 8,
			stability: 8,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Signature .40'
			]
		}
	},
	'Damper.L 44 Nozzle': {
		name: 'Damper.L 44 Nozzle',
		image: 'wpn_fps_pis_c96_nozzle',
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
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
				'Broomstick'
			]
		}
	},
	'Contractor Compensator': {
		name: 'Contractor Compensator',
		image: 'wpn_fps_pis_packrat_ns_wick',
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
		source: content['John Wick Weapon Pack'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Contractor'
			]
		}
	},
	'Suppressed Barrel': {
		name: 'Suppressed Barrel',
		image: 'Suppressed_Barrel',
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
		source: content['Gage Weapon Pack #01'],
		cost: 39200,
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -1,
			accuracy: 4,
			stability: 12,
			concealment: -2,
			threat: -24
		},
		compatibleWeapons: {
			submachineGun: [
				'SpecOps'
			]
		}
	},
	'Werbell\'s Suppressor': {
		name: 'Werbell\'s Suppressor',
		image: 'wpn_fps_smg_cobray_ns_silencer',
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
		source: content['Jacket Character Pack'],
		cost: 9e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -3,
			stability: 4,
			concealment: -1,
			threat: -20
		},
		compatibleWeapons: {
			submachineGun: [
				'Mark 10',
				'Jacket\'s Piece'
			]
		}
	},
	'Slotted Barrel Extension': {
		name: 'Slotted Barrel Extension',
		image: 'wpn_fps_smg_cobray_ns_barrelextension',
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
		source: content['Jacket Character Pack'],
		cost: 9e3,
		stats: {
			damage: 2,
			accuracy: 8,
			stability: -8,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'Mark 10',
				'Jacket\'s Piece'
			]
		}
	},
	'Suppressor': {
		name: 'Suppressor',
		image: 'wpn_fps_smg_scorpion_b_suppressed',
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
		source: content['Hotline Miami'],
		cost: 36e3,
		acquisition: {
			achievement: 'Sounds of Animals Fighting'
		},
		specialEffect: ['Silences Weapon'],
		stats: {
			accuracy: -4,
			stability: 4,
			concealment: -2,
			threat: -24
		},
		compatibleWeapons: {
			submachineGun: [
				'Cobra'
			]
		}
	},
	'Tactical Suppressor': {
		name: 'Tactical Suppressor',
		image: 'wpn_fps_smg_mp9_b_suppressed',
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
		source: content['The Butcher Mod Pack 2'],
		cost: 28e3,
		specialEffect: ['Silences Weapon'],
		acquisition: {
			bonus: 1
		},
		stats: {
			accuracy: 4,
			stability: 12,
			concealment: -4,
			threat: -24
		},
		compatibleWeapons: {
			submachineGun: [
				'CMP'
			]
		}
	},
	'Futomaki Suppressor': {
		name: 'Futomaki Suppressor',
		image: 'wpn_fps_smg_baka_b_longsupp',
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
		source: content['Yakuza Character Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		specialEffect: ['Silences Weapon'],
		stats: {
			stability: 20,
			concealment: -1,
			threat: -20
		},
		compatibleWeapons: {
			submachineGun: [
				'Micro Uzi'
			]
		}
	},
	'Maki Suppressor': {
		name: 'Maki Suppressor',
		image: 'wpn_fps_smg_baka_b_midsupp',
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
		source: content['Yakuza Character Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -2,
			stability: 8,
			concealment: -2,
			threat: -20
		},
		compatibleWeapons: {
			submachineGun: [
				'Micro Uzi'
			]
		}
	},
	'Spring Suppressor': {
		name: 'Spring Suppressor',
		image: 'wpn_fps_smg_baka_b_smallsupp',
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
		source: content['Yakuza Character Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -4,
			threat: -20
		},
		compatibleWeapons: {
			submachineGun: [
				'Micro Uzi'
			]
		}
	},
	'Silentgear Silencer': {
		name: 'Silentgear Silencer',
		image: 'wpn_fps_smg_schakal_ns_silencer',
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
		source: content['John Wick Weapon Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		stats: {
			damage: -3,
			stability: 4,
			concealment: -1,
			threat: -20
		},
		compatibleWeapons: {
			submachineGun: [
				'Jackal'
			]
		}
	},
	'Tishina Suppressor': {
		name: 'Tishina Suppressor',
		image: 'wpn_fps_smg_sr2_ns_silencer',
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
		source: source['Base Game'],
		cost: 21e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -2,
			stability: 8,
			concealment: -2,
			threat: -20
		},
		compatibleWeapons: {
			submachineGun: [
				'Heather'
			]
		}
	},
	'HPS Suppressor': {
		name: 'HPS Suppressor',
		image: 'wpn_fps_smg_polymer_ns_silencer',
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
		source: content['Gage Ninja Pack'],
		cost: 9e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -3,
			stability: 4,
			concealment: -1,
			threat: -20
		},
		compatibleWeapons: {
			submachineGun: [
				'Kross Vertex'
			]
		}
	},
	'Precision Barrel': {
		name: 'Precision Barrel',
		image: 'wpn_fps_smg_polymer_barrel_precision',
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
		source: content['Gage Ninja Pack'],
		cost: 9e3,
		stats: {
			damage: 2,
			accuracy: 8,
			stability: -12,
			concealment: -4
		},
		compatibleWeapons: {
			submachineGun: [
				'Kross Vertex'
			]
		}
	},
	'Silent Death': {
		name: 'Silent Death',
		image: 'wpn_fps_smg_uzi_b_suppressed',
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
		source: content['Hotline Miami'],
		cost: 36e3,
		specialEffect: ['Silences Weapon'],
		acquisition: {
			achievement: 'Sounds of Animals Fighting'
		},
		stats: {
			accuracy: -4,
			stability: 4,
			concealment: -2,
			threat: -18
		},
		compatibleWeapons: {
			submachineGun: [
				'Uzi'
			]
		}
	},
	'Marmon Compensator': {
		name: 'Marmon Compensator',
		image: 'wpn_fps_upg_ns_ass_smg_v6',
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
		source: content['Cartel Optics Mod Pack'],
		cost: 44e3,
		stats: {
			damage: 1,
			accuracy: 8,
			stability: 4,
			concealment: -3,
			threat: 1
		},
		compatibleWeapons: {
			lightMachineGun: [
				'SG Versteckt 51D'
			]
		}
	},
	'Try-Core Compensator': {
		name: 'Try-Core Compensator',
		image: 'wpn_fps_sho_ultima_ns_comp',
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
		source: content['Jiu Feng Smuggler Pack 4'],
		cost: 7200,
		stats: {
			damage: 4,
			stability: 12,
			concealment: -3
		},
		compatibleWeapons: {
			shotgun: [
				'Argos III'
			]
		}
	},
	'KS12-A Burst Muzzle': {
		name: 'KS12-A Burst Muzzle',
		image: 'wpn_fps_ass_shak12_ns_muzzle',
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
		source: content['Jiu Feng Smuggler Pack 3'],
		cost: 9e3,
		stats: {
			damage: 2,
			accuracy: 4,
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: {
			assaultRifle: [
				'KS12 Urban'
			]
		}
	},
	'KS12-S Long Silencer': {
		name: 'KS12-S Long Silencer',
		image: 'wpn_fps_ass_shak12_ns_suppressor',
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
		source: content['Jiu Feng Smuggler Pack 3'],
		cost: 9e3,
		stats: {
			damage: -2,
			accuracy: 12,
			stability: 4,
			concealment: -5,
			threat: -20
		},
		compatibleWeapons: {
			assaultRifle: [
				'KS12 Urban'
			]
		}
	},
	'Phantom Suppressor': {
		name: 'Phantom Suppressor',
		image: 'wpn_fps_snp_contender_suppressor', // TODO image
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
		source: content['McShay Weapon Pack 3'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: {
			sniper: [
				'Aran G2'
			]
		}
	}
}

export default barrelExt