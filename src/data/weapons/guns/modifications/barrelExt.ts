import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import snipers from '../primary/snipers'
import pistols from '../secondary/pistols'
import { WeaponData, WeaponModification } from '../weaponTypes'

const mainPistols: WeaponData[] = [
	pistols['Interceptor 45 Pistol'],
	pistols['Chimano Custom Pistol'],
	pistols['Chimano Compact Pistol'],
	pistols['Chimano 88 Pistol'],
	pistols['Crosskill Pistol'],
	pistols['Bernetti 9 Pistol'],
	pistols['Bronco .44 Pistol'],
	pistols['White Streak Pistol'],
	pistols['STRYK 18c Pistol'],
	pistols['Deagle Pistol'],
	pistols['M13 9mm Pistol'],
	pistols['Gruber Kurz Pistol'],
	pistols['Signature .40 Pistol'],
	pistols['LEO Pistol'],
	pistols['Baby Deagle'],
	pistols['Bernetti Auto Pistol'],
	pistols['Czech 92 Pistol'],
	pistols['Igor Automatik Pistol'],
	pistols['HOLT 9mm Pistol'],
	pistols['Crosskill Chunky Compact Pistol']
]

type BarrelExtModificationsList =
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

	'Shark Teeth Nozzle' |
	'The Silent Killer Suppressor' |
	'King\'s Crown Compensator' |
	'Shh!' |
	'Donald\'s Horizontal Leveller' |

	'Beak Suppressor' |
	'Sniper Suppressor' |
	'Langer Barrel' |
	'Gedämpfter Barrel' |
	'Contractor Silencer' |

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

const assaultRiflesModifications: Record<BarrelExtModificationsList, WeaponModification<BarrelExtModificationsList>> = {
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
		compatibleWeapons: {
			type: [
				'Assault Rifle',
				'Submachine Gun',
				'LMG'
			]
		}
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
		compatibleWeapons: {
			type: [
				'Assault Rifle',
				'Submachine Gun',
				'LMG'
			]
		}
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
		compatibleWeapons: {
			type: [
				'Assault Rifle',
				'Submachine Gun',
				'LMG'
			]
		}
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
		compatibleWeapons: {
			type: [
				'Assault Rifle',
				'Submachine Gun',
				'LMG'
			]
		}
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
		compatibleWeapons: {
			type: [
				'Assault Rifle',
				'Submachine Gun',
				'LMG'
			]
		}
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
		compatibleWeapons: {
			type: [
				'Assault Rifle',
				'Submachine Gun',
				'LMG'
			]
		}
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
		compatibleWeapons: {
			type: [
				'Assault Rifle',
				'Submachine Gun',
				'LMG'
			]
		}
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
		compatibleWeapons: {
			type: [
				'Assault Rifle',
				'Submachine Gun',
				'LMG'
			]
		}
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
		compatibleWeapons: {
			type: [
				'Assault Rifle',
				'Submachine Gun',
				'LMG'
			]
		}
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
		compatibleWeapons: {
			type: [
				'Assault Rifle',
				'Submachine Gun',
				'LMG'
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
			type: [
				'Shotgun'
			]
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
			type: [
				'Shotgun'
			]
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
			type: [
				'Shotgun'
			]
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
			type: [
				'Shotgun'
			]
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
			type: [
				'Shotgun'
			]
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
			list: [
				snipers['Platypus 70 Sniper Rifle']
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
			list: [
				snipers['Rattlesnake Sniper Rifle']
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
			list: [
				snipers['Lebensauger .308 Sniper Rifle']
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
			list: [
				snipers['Lebensauger .308 Sniper Rifle']
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
			list: [
				snipers['Contractor .308 Sniper Rifle']
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
		compatibleWeapons: {
			list: mainPistols
		}
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
		compatibleWeapons: {
			list: [
				...mainPistols,
				pistols['Broomstick Pistol']
			]
		}
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
		compatibleWeapons: {
			list: [
				...mainPistols,
				pistols['Broomstick Pistol']
			]
		}
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
		compatibleWeapons: {
			list: [
				...mainPistols,
				pistols['Broomstick Pistol']
			]
		}
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
		compatibleWeapons: {
			list: [
				...mainPistols,
				pistols['Broomstick Pistol']
			]
		}
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
		compatibleWeapons: {
			list: [
				...mainPistols,
				pistols['Broomstick Pistol']
			]
		}
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
		compatibleWeapons: {
			list: [
				...mainPistols,
				pistols['Broomstick Pistol']
			]
		}
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
		compatibleWeapons: {
			list: [
				...mainPistols,
				pistols['Broomstick Pistol']
			]
		}
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
		compatibleWeapons: {
			list: [
				...mainPistols,
				pistols['Broomstick Pistol']
			]
		}
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
		compatibleWeapons: {
			list: [
				...mainPistols,
				pistols['Broomstick Pistol']
			]
		}
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
		compatibleWeapons: {
			list: [
				...mainPistols,
				pistols['Broomstick Pistol']
			]
		}
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
		compatibleWeapons: {
			list: [
				...mainPistols,
				pistols['Broomstick Pistol']
			]
		}
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
			list: [
				pistols['Interceptor 45 Pistol']
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
			list: [
				pistols['Interceptor 45 Pistol']
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
			list: [
				pistols['STRYK 18c Pistol'],
				pistols['Chimano Custom Pistol']
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
			list: [
				pistols['STRYK 18c Pistol'],
				pistols['Chimano Custom Pistol']
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
			list: [
				pistols['Crosskill Pistol']
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
			list: [
				pistols['Crosskill Pistol']
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
			list: [
				pistols['Bernetti 9 Pistol']
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
			list: [
				pistols['Bernetti 9 Pistol']
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
			list: [
				pistols['Deagle Pistol']
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
			list: [
				pistols['Deagle Pistol']
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
			list: [
				pistols['Signature .40 Pistol']
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
			list: [
				pistols['Signature .40 Pistol']
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
			list: [
				pistols['Broomstick Pistol']
			]
		}
	}
}

export default assaultRiflesModifications