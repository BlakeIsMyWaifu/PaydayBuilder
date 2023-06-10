import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { type ModificationCollection } from '../weaponTypes'

export type BarrelExtModification = keyof typeof barrelExt

const barrelExt = {
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
		}
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
		}
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
		}
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
		}
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
		}
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
		}
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
		}
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
		}
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
		}
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
		}
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
		}
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
		}
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
		}
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
		}
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
		}
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
		}
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
		}
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
		}
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
		}
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
		}
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
		}
	},
	'Medved R4 Suppressor': {
		name: 'Medved R4 Suppressor',
		image: 'wpn_fps_upg_ns_pis_putnik',
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
		source: source['Base Game'],
		cost: 21e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -2,
			accuracy: 4,
			stability: 4,
			concealment: -2,
			threat: -24
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
		}
	},
	'KS12-S Long Silencer': {
		name: 'KS12-S Long Silencer',
		image: 'wpn_fps_ass_shak12_ns_suppressor',
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
		source: content['Jiu Feng Smuggler Pack 3'],
		cost: 9e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -2,
			accuracy: 12,
			stability: 4,
			concealment: -5,
			threat: -20
		}
	},
	'Verdunkeln Muzzle Brake': {
		name: 'Verdunkeln Muzzle Brake',
		image: 'wpn_fps_lmg_hk51b_ns_jcomp',
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
		source: content['McShay Weapon Pack'],
		cost: 9e3,
		stats: {
			damage: 1,
			accuracy: 4,
			stability: 4,
			concealment: -1
		}
	},
	'Buckeye Suppressor': {
		name: 'Buckeye Suppressor',
		image: 'wpn_fps_lmg_hcar_suppressor',
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
		source: content['McShay Weapon Pack 3'],
		cost: 9e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			accuracy: 8,
			stability: 4,
			concealment: -2,
			threat: -25
		}
	},
	'Taktika Muzzle Brake': {
		name: 'Taktika Muzzle Brake',
		image: 'wpn_fps_upg_ak_ns_zenitco',
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
		source: content['McShay Mod Pack'],
		cost: 9e3,
		stats: {
			damage: 3,
			accuracy: 8,
			stability: 4,
			concealment: -2
		}
	},
	'Fyodor Muzzle Brake': {
		name: 'Fyodor Muzzle Brake',
		image: 'wpn_fps_upg_ak_ns_jmac',
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
		source: content['McShay Weapon Pack 3'],
		cost: 9e3,
		stats: {
			damage: 3,
			accuracy: 8,
			stability: -4,
			concealment: -2
		}
	},
	'Federation Suppressor': {
		name: 'Federation Suppressor',
		image: 'wpn_fps_upg_ak_ns_tgp',
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
		source: content['McShay Weapon Pack 3'],
		cost: 9e3,
		stats: {
			damage: -2,
			concealment: -1,
			threat: -16.8
		}
	},
	'Rami Suppressor': {
		name: 'Rami Suppressor',
		image: 'wpn_fps_lmg_kacchainsaw_ns_suppressor',
		icon: 'inv_mod_silencer',
		slot: 'barrelExt',
		source: content['McShay Weapon Pack 4'],
		cost: 9e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			accuracy: 4,
			stability: 4,
			concealment: -1,
			threat: -25
		}
	},
	'Dourif Muzzle': {
		name: 'Dourif Muzzle',
		image: 'wpn_fps_lmg_kacchainsaw_ns_muzzle',
		icon: 'inv_mod_barrel_ext',
		slot: 'barrelExt',
		source: content['McShay Weapon Pack 4'],
		cost: 36e3,
		stats: {
			damage: 2,
			accuracy: 4,
			stability: 8,
			concealment: -2
		}
	}
} as const satisfies ModificationCollection

export default barrelExt