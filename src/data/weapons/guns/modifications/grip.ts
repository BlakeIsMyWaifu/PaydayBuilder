import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { CompatibleWeapons, ModificationList } from '../weaponTypes'

const AKRifles: CompatibleWeapons = {
	assaultRifle: [
		'AK',
		'AK.762',
		'Golden AK.762',
		'AK17'
	],
	shotgun: [
		'IZHMA 12G'
	],
	lightMachineGun: [
		'RPK'
	],
	submachineGun: [
		'Krinkov',
		'Tatonka'
	]
}

const mainGuns: CompatibleWeapons = {
	assaultRifle: [
		'CAR-4',
		'AMR-16',
		'Eagle Heavy',
		'Bootleg'
	],
	sniper: [
		'Thanatos .50 cal',
		'Contractor .308'
	],
	submachineGun: [
		'Para'
	],
	shotgun: [
		'Reinfeld 880',
		'Locomotive 12G'
	]
}

export type GripModificationsList =
	// AK Rifles
	| 'AK Rubber Grip'
	| 'AK Plastic Grip'
	| 'AK Wood Grip'
	| 'Aluminum Grip'

	// Commando 553
	| 'Enhanced Grip'

	// Main Guns
	| 'Ergo Grip (Main)'
	| 'Pro Grip'
	| 'Rubber Grip'
	| 'Straight Grip'
	| 'Contractor Grip'
	| 'Titanium Skeleton Grip'

	// Queen's Wrath
	| 'Delightful Grip'

	// Clarion
	| 'G2 Grip'

	// Gecko 7.62
	| 'Sniper Grip'

	// Falcon
	| 'Tactical Grip'

	// Gewehr 3
	| 'Retro Grip'
	| 'Precision Grip'

	// VD-12
	| 'VD-12 Grip'

	// Lebensauger .308
	| 'Leichter Grip'
	| 'Subtiler Grip'
	| 'Walnuss Grip'

	// Brenner 21
	| 'Ergo Grip (Brenner)'

	// DECA Technologies Compound Bow
	| 'Wooden Grip (DECA)'
	| 'Ergonomic Grip (DECA)'

	// Hailstorm Mk5
	| 'Whiteout Grip'
	| 'Crystalline Grip'
	| 'FZRA Grip'

	// Chimano 88, STYYK 18c, Chimano Custom, Chimano Compact
	| 'Laser Grip (Chimano)'
	| 'Platypus Grip'

	// Gruber Kurz
	| 'Laser Grip (Gruber Kurz)'

	// Signature .40
	| 'Ergo Grip (Signature .40)'

	// Crosskill
	| 'Ergo Grip (Crosskill)'
	| 'Bling Grip (Crosskill)'
	| 'Engraved Crosskill Grips'

	// Bernetti 9
	| 'Ergo Grip (Bernetti 9)'
	| 'Engraved Bernetti Grips'

	// Bronco .44
	| 'Ergo Wooden Grip'

	// Baby Deagle
	| 'Spike Grip'

	// M13 9mm
	| 'Wooden Grip (M13)'

	// STRYK 18c, Chimano Custom
	| 'Ergo Grip (STRYK / Chimano Custom)'

	// Parabellum
	| 'Engraved Grip'

	// Castigo .44
	| 'Carnival Grip'
	| 'Cruz Grip'

	// Frenchman Model 87
	| 'Mule Bone Grip'

	// Crosskill Guard
	| 'Blinged Grip'
	| 'Ergonomic Grip (Crosskill Guard)'

	// Bernetti Auto
	| 'Cartel Grip (Bernetti Auto)'
	| 'Weller Grip'

	// Czech 92
	| 'Cartel Grip (Czech)'
	| 'Sicario Grip'

	// Igor Automatik
	| 'Federales Grip'
	| 'Cartel Grip (Igor)'

	// HOLT 9mm
	| 'Ergonomic Grip (HOLT)'
	| 'Bling Grip (HOLT)'

	// Peacemaker .45
	| 'Grand Grip'

	// Matever .357
	| 'Noir Grip'

	// Deagle
	| 'Ergo Grip (Deagle)'
	| 'Bling Grip (Deagle)'

	// Swedish K
	| 'Ergo Grip (Swedish)'
	| 'Bling Grip (Swedish)'

	// Chicago Typewriter
	| 'Discrete Grip'

	// Cobra
	| 'Ergo Grip (Cobra)'
	| 'Wooden Grip (Cobra)'

	// Pistol Crossbow
	| 'Camo Grip'
	| 'Walnut Grip'

	// RUS-12 Angry Tiger
	| 'RUS Custom Wood Grip'

	// Miyaka 10 Special
	| 'MS10 Comfort Wood Grip'

const grip: ModificationList<GripModificationsList> = {
	'AK Rubber Grip': {
		name: 'AK Rubber Grip',
		image: 'wpn_fps_upg_ak_g_hgrip',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Green Mantis'
		},
		stats: {
			stability: 8,
			concealment: 2
		},
		compatibleWeapons: AKRifles
	},
	'AK Plastic Grip': {
		name: 'AK Plastic Grip',
		image: 'wpn_fps_upg_ak_g_pgrip',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Yellow Bull'
		},
		stats: {
			accuracy: 8,
			stability: -8
		},
		compatibleWeapons: AKRifles
	},
	'AK Wood Grip': {
		name: 'AK Wood Grip',
		image: 'wpn_fps_upg_ak_g_wgrip',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Red Spider'
		},
		stats: {
			stability: 12,
			concealment: -1
		},
		compatibleWeapons: AKRifles
	},
	'Aluminum Grip': {
		name: 'Aluminum Grip',
		image: 'wpn_fps_upg_ak_g_rk3',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Hey Mr.DJ'
		},
		stats: {
			accuracy: 4,
			concealment: 1
		},
		compatibleWeapons: AKRifles
	},
	'Enhanced Grip': {
		name: 'Enhanced Grip',
		image: 'wpn_fps_ass_s552_g_standard_green',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Armored Transport'],
		cost: 33600,
		stats: {
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			assaultRifle: [
				'Commando 553'
			]
		}
	},
	'Ergo Grip (Main)': {
		name: 'Ergo Grip (Main)',
		image: 'wpn_fps_upg_m4_g_ergo',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: source['Base Game'],
		cost: 14e3,
		stats: {
			stability: 4
		},
		compatibleWeapons: mainGuns
	},
	'Pro Grip': {
		name: 'Pro Grip',
		image: 'wpn_fps_upg_m4_g_sniper',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: source['Base Game'],
		cost: 44e3,
		stats: {
			accuracy: 4,
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: mainGuns
	},
	'Rubber Grip': {
		name: 'Rubber Grip',
		image: 'wpn_fps_upg_m4_g_hgrip',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Gage Weapon Pack #01'],
		cost: 19600,
		stats: {
			accuracy: 4,
			stability: 4
		},
		compatibleWeapons: mainGuns
	},
	'Straight Grip': {
		name: 'Straight Grip',
		image: 'wpn_fps_upg_m4_g_mgrip',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Gage Weapon Pack #01'],
		cost: 19600,
		stats: {
			concealment: 2
		},
		compatibleWeapons: mainGuns
	},
	'Contractor Grip': {
		name: 'Contractor Grip',
		image: 'wpn_fps_snp_tti_g_grippy',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['John Wick Heists'],
		cost: 9e3,
		stats: {
			stability: 4
		},
		compatibleWeapons: mainGuns
	},
	'Titanium Skeleton Grip': {
		name: 'Titanium Skeleton Grip',
		image: 'wpn_fps_upg_g_m4_surgeon',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Cartel Optics Mod Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		stats: {
			accuracy: 4,
			stability: -4,
			concealment: 2
		},
		compatibleWeapons: mainGuns
	},
	'Delightful Grip': {
		name: 'Delightful Grip',
		image: 'wpn_fps_ass_l85a2_g_worn',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Clover Character Pack'],
		cost: 9e3,
		stats: {
			stability: 4
		},
		compatibleWeapons: {
			assaultRifle: [
				'Queen\'s Wrath'
			]
		}
	},
	'G2 Grip': {
		name: 'G2 Grip',
		image: 'wpn_fps_ass_famas_g_retro',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Gage Assault Pack'],
		cost: 14e3,
		acquisition: {
			achievement: 'Tour de Clarion'
		},
		stats: {
			accuracy: 8,
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: {
			assaultRifle: [
				'Clarion'
			]
		}
	},
	'Sniper Grip': {
		name: 'Sniper Grip',
		image: 'wpn_fps_ass_galil_g_sniper',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Gage Assault Pack'],
		cost: 14e3,
		acquisition: {
			achievement: 'Precision Aiming'
		},
		stats: {
			accuracy: 4,
			stability: -4,
			concealment: -1
		},
		compatibleWeapons: {
			assaultRifle: [
				'Gecko 7.62'
			]
		}
	},
	'Tactical Grip': {
		name: 'Tactical Grip',
		image: 'wpn_fps_ass_fal_g_01',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['The Big Bank Heist'],
		cost: 11200,
		acquisition: {
			achievement: 'It Takes Two to Tango'
		},
		stats: {
			stability: 4,
			concealment: 2
		},
		compatibleWeapons: {
			assaultRifle: [
				'Falcon'
			]
		}
	},
	'Retro Grip': {
		name: 'Retro Grip',
		image: 'wpn_fps_ass_g3_g_retro',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Gage Assault Pack'],
		cost: 14e3,
		acquisition: {
			achievement: 'Not Today'
		},
		stats: {
			stability: 8
		},
		compatibleWeapons: {
			assaultRifle: [
				'Gewehr 3'
			]
		}
	},
	'Precision Grip': {
		name: 'Precision Grip',
		image: 'wpn_fps_ass_g3_g_sniper',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Gage Assault Pack'],
		cost: 14e3,
		acquisition: {
			achievement: 'Precision Aiming'
		},
		stats: {
			accuracy: 8,
			stability: -4,
			concealment: -1
		},
		compatibleWeapons: {
			assaultRifle: [
				'Gewehr 3'
			]
		}
	},
	'VD-12 Grip': {
		name: 'VD-12 Grip',
		image: '', // TODO image
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['McShay Weapon Pack 2'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			concealment: 1
		},
		compatibleWeapons: {
			shotgun: [
				'VD-12 Shotgun'
			]
		}
	},
	'Leichter Grip': {
		name: 'Leichter Grip',
		image: 'wpn_fps_snp_wa2000_g_light',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Gage Ninja Pack'],
		cost: 9e3,
		stats: {
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: {
			sniper: [
				'Lebensauger .308'
			]
		}
	},
	'Subtiler Grip': {
		name: 'Subtiler Grip',
		image: 'wpn_fps_snp_wa2000_g_stealth',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Gage Ninja Pack'],
		cost: 9e3,
		stats: {
			stability: -4,
			concealment: 2
		},
		compatibleWeapons: {
			sniper: [
				'Lebensauger .308'
			]
		}
	},
	'Walnuss Grip': {
		name: 'Walnuss Grip',
		image: 'wpn_fps_snp_wa2000_g_walnut',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Gage Ninja Pack'],
		cost: 439e3,
		stats: {
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: {
			sniper: [
				'Lebensauger .308'
			]
		}
	},
	'Ergo Grip (Brenner)': {
		name: 'Ergo Grip (Brenner)',
		image: 'wpn_fps_lmg_hk21_g_ergo',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Gage Weapon Pack #02'],
		cost: 37800,
		stats: {
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: {
			lightMachineGun: [
				'Brenner-21'
			]
		}
	},
	'Wooden Grip (DECA)': {
		name: 'Wooden Grip (DECA)',
		image: 'wpn_fps_bow_elastic_g_wood',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			stability: 8
		},
		compatibleWeapons: {
			special: [
				'DECA Technologies Compound Bow'
			]
		}
	},
	'Ergonomic Grip (DECA)': {
		name: 'Ergonomic Grip (DECA)',
		image: 'wpn_fps_bow_elastic_g_ergo',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			concealment: 1
		},
		compatibleWeapons: {
			special: [
				'DECA Technologies Compound Bow'
			]
		}
	},
	'Whiteout Grip': {
		name: 'Whiteout Grip',
		image: 'wpn_fps_hailstorm_g_bubble', // TODO image
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['McShay Weapon Pack 2'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			stability: -4
		},
		compatibleWeapons: {
			special: [
				'Hailstorm Mk 5'
			]
		}
	},
	'Crystalline Grip': {
		name: 'Crystalline Grip',
		image: 'wpn_fps_hailstorm_g_crystal', // TODO image
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['McShay Weapon Pack 2'],
		cost: 9e3,
		stats: {
			accuracy: -4,
			stability: 4
		},
		compatibleWeapons: {
			special: [
				'Hailstorm Mk 5'
			]
		}
	},
	'FZRA Grip': {
		name: 'FZRA Grip',
		image: 'wpn_fps_hailstorm_g_noise', // TODO image
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['McShay Weapon Pack 2'],
		cost: 9e3,
		stats: {
			concealment: 1
		},
		compatibleWeapons: {
			special: [
				'Hailstorm Mk 5'
			]
		}
	},
	'Laser Grip (Chimano)': {
		name: 'Laser Grip (Chimano)',
		image: 'wpn_fps_pis_g26_g_laser',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: source.Community,
		cost: 28e3,
		specialEffect: ['Laser'],
		stats: {
			accuracy: 4,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Chimano 88',
				'STRYK 18c',
				'Chimano Custom',
				'Chimano Compact'
			]
		}
	},
	'Platypus Grip': {
		name: 'Platypus Grip',
		image: 'wpn_fps_pis_g26_g_gripforce',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: source.Community,
		cost: 53e3,
		stats: {
			stability: 8,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Chimano 88',
				'STRYK 18c',
				'Chimano Custom',
				'Chimano Compact'
			]
		}
	},
	'Laser Grip (Gruber Kurz)': {
		name: 'Laser Grip (Gruber Kurz)',
		image: 'wpn_fps_pis_ppk_g_laser',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Armored Transport'],
		cost: 10800,
		stats: {
			accuracy: 8
		},
		compatibleWeapons: {
			pistol: [
				'Gruber Kurz'
			]
		}
	},
	'Ergo Grip (Signature .40)': {
		name: 'Ergo Grip (Signature .40)',
		image: 'wpn_fps_pis_p226_g_ergo',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Gage Weapon Pack #01'],
		cost: 12600,
		stats: {
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Signature .40'
			]
		}
	},
	'Ergo Grip (Crosskill)': {
		name: 'Ergo Grip (Crosskill)',
		image: 'wpn_fps_pis_1911_g_ergo',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: source['Base Game'],
		cost: 14e3,
		stats: {
			stability: 4
		},
		compatibleWeapons: {
			pistol: [
				'Crosskill'
			]
		}
	},
	'Bling Grip (Crosskill)': {
		name: 'Bling Grip (Crosskill)',
		image: 'wpn_fps_pis_1911_g_bling',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: source['Base Game'],
		cost: 80e3,
		stats: {
			accuracy: 4,
			stability: -4
		},
		compatibleWeapons: {
			pistol: [
				'Crosskill'
			]
		}
	},
	'Engraved Crosskill Grips': {
		name: 'Engraved Crosskill Grips',
		image: 'wpn_fps_pis_1911_g_engraved',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['The Butcher Mod Pack 2'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			stability: 4
		},
		compatibleWeapons: {
			pistol: [
				'Crosskill'
			]
		}
	},
	'Ergo Grip (Bernetti 9)': {
		name: 'Ergo Grip (Bernetti 9)',
		image: 'wpn_fps_pis_beretta_g_ergo',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: source['Base Game'],
		cost: 14e3,
		stats: {
			stability: 4
		},
		compatibleWeapons: {
			pistol: [
				'Bernetti 9'
			]
		}
	},
	'Engraved Bernetti Grips': {
		name: 'Engraved Bernetti Grips',
		image: 'wpn_fps_pis_beretta_g_engraved',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['The Butcher Mod Pack 2'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			stability: 4
		},
		compatibleWeapons: {
			pistol: [
				'Bernetti 9'
			]
		}
	},
	'Ergo Wooden Grip': {
		name: 'Ergo Wooden Grip',
		image: 'wpn_fps_pis_rage_g_ergo',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: source['Base Game'],
		cost: 14e3,
		stats: {
			stability: 4
		},
		compatibleWeapons: {
			pistol: [
				'Bronco .44'
			]
		}
	},
	'Spike Grip': {
		name: 'Spike Grip',
		image: 'wpn_fps_pis_sparrow_g_cowboy',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['The Point Break Heists'],
		cost: 9e3,
		stats: {
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'Baby Deagle'
			]
		}
	},
	'Wooden Grip (M13)': {
		name: 'Wooden Grip (M13)',
		image: 'wpn_fps_pis_legacy_g_wood',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			stability: 8
		},
		compatibleWeapons: {
			pistol: [
				'M13 9mm'
			]
		}
	},
	'Ergo Grip (STRYK / Chimano Custom)': {
		name: 'Ergo Grip (STRYK / Chimano Custom)',
		image: 'wpn_fps_pis_g18c_g_ergo',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: source['Base Game'],
		cost: 28e3,
		stats: {
			stability: 8
		},
		compatibleWeapons: {
			pistol: [
				'STRYK 18c',
				'Chimano Custom'
			]
		}
	},
	'Engraved Grip': {
		name: 'Engraved Grip',
		image: 'wpn_fps_pis_breech_g_custom',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['WW2 Weapon Pack'],
		cost: 9e3,
		stats: {},
		compatibleWeapons: {
			pistol: [
				'Parabellum'
			]
		}
	},
	'Carnival Grip': {
		name: 'Carnival Grip',
		image: 'wpn_fps_pis_chinchilla_g_black',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			stability: 8
		},
		compatibleWeapons: {
			pistol: [
				'Castigo .44'
			]
		}
	},
	'Cruz Grip': {
		name: 'Cruz Grip',
		image: 'wpn_fps_pis_chinchilla_g_death',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			stability: 8
		},
		compatibleWeapons: {
			pistol: [
				'Castigo .44'
			]
		}
	},
	'Mule Bone Grip': {
		name: 'Mule Bone Grip',
		image: 'wpn_fps_pis_model3_g_xxx',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Gunslinger Weapon Pack'],
		cost: 9e3,
		stats: {
			stability: 4
		},
		compatibleWeapons: {
			pistol: [
				'Frenchman Model 87'
			]
		}
	},
	'Blinged Grip': {
		name: 'Blinged Grip',
		image: 'wpn_fps_pis_shrew_g_bling',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			stability: 8
		},
		compatibleWeapons: {
			pistol: [
				'Crosskill Guard'
			]
		}
	},
	'Ergonomic Grip (Crosskill Guard)': {
		name: 'Ergonomic Grip (Crosskill Guard)',
		image: 'wpn_fps_pis_shrew_g_ergo',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			stability: 8
		},
		compatibleWeapons: {
			pistol: [
				'Crosskill Guard'
			]
		}
	},
	'Cartel Grip (Bernetti Auto)': {
		name: 'Cartel Grip (Bernetti Auto)',
		image: 'wpn_fps_pis_beer_g_luxury',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Federales Weapon Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			accuracy: 4,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Bernetti Auto'
			]
		}
	},
	'Weller Grip': {
		name: 'Weller Grip',
		image: 'wpn_fps_pis_beer_g_robo',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Federales Weapon Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			concealment: 1
		},
		compatibleWeapons: {
			pistol: [
				'Bernetti Auto'
			]
		}
	},
	'Cartel Grip (Czech)': {
		name: 'Cartel Grip (Czech)',
		image: 'wpn_fps_pis_czech_g_luxury',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Federales Weapon Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			concealment: 1
		},
		compatibleWeapons: {
			pistol: [
				'Czech 92'
			]
		}
	},
	'Sicario Grip': {
		name: 'Sicario Grip',
		image: 'wpn_fps_pis_czech_g_sport',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Federales Weapon Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			accuracy: 4,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Czech 92'
			]
		}
	},
	'Federales Grip': {
		name: 'Federales Grip',
		image: 'wpn_fps_pis_stech_g_tactical',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Federales Weapon Pack'],
		cost: 21e3,
		stats: {
			stability: 4,
			concealment: 1
		},
		compatibleWeapons: {
			pistol: [
				'Igor Automatik'
			]
		}
	},
	'Cartel Grip (Igor)': {
		name: 'Cartel Grip (Igor)',
		image: 'wpn_fps_pis_stech_g_luxury',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Federales Weapon Pack'],
		cost: 28e3,
		stats: {
			accuracy: 4,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Igor Automatik'
			]
		}
	},
	'Ergonomic Grip (HOLT)': {
		name: 'Ergonomic Grip (HOLT)',
		image: 'wpn_fps_pis_holt_g_ergo',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Fugitive Weapon Pack'],
		cost: 14e3,
		stats: {
			accuracy: 8
		},
		compatibleWeapons: {
			pistol: [
				'HOLT 9mm'
			]
		}
	},
	'Bling Grip (HOLT)': {
		name: 'Bling Grip (HOLT)',
		image: 'wpn_fps_pis_holt_g_bling',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Fugitive Weapon Pack'],
		cost: 21e3,
		stats: {
			stability: 8
		},
		compatibleWeapons: {
			pistol: [
				'HOLT 9mm'
			]
		}
	},
	'Grand Grip': {
		name: 'Grand Grip',
		image: 'wpn_fps_pis_peacemaker_g_bling',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['The Butcher\'s Western Pack'],
		cost: 9e3,
		stats: {
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Peacemaker .45'
			]
		}
	},
	'Noir Grip': {
		name: 'Noir Grip',
		image: 'wpn_fps_pis_2006m_g_bling',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['The Alesso Heist'],
		cost: 9e3,
		stats: {
			concealment: 2
		},
		compatibleWeapons: {
			pistol: [
				'Matever .357'
			]
		}
	},
	'Ergo Grip (Deagle)': {
		name: 'Ergo Grip (Deagle)',
		image: 'wpn_fps_pis_deagle_g_ergo',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: source['Base Game'],
		cost: 44e3,
		stats: {
			accuracy: 4,
			stability: -4,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Deagle'
			]
		}
	},
	'Bling Grip (Deagle)': {
		name: 'Bling Grip (Deagle)',
		image: 'wpn_fps_pis_deagle_g_bling',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: source['Base Game'],
		cost: 80e3,
		stats: {
			stability: 8,
			concealment: 1
		},
		compatibleWeapons: {
			pistol: [
				'Deagle'
			]
		}
	},
	'Ergo Grip (Swedish)': {
		name: 'Ergo Grip (Swedish)',
		image: 'wpn_fps_smg_m45_g_ergo',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Armored Transport'],
		cost: 16800,
		stats: {
			accuracy: 4,
			stability: 4
		},
		compatibleWeapons: {
			submachineGun: [
				'Swedish K'
			]
		}
	},
	'Bling Grip (Swedish)': {
		name: 'Bling Grip (Swedish)',
		image: 'wpn_fps_smg_m45_g_bling',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Armored Transport'],
		cost: 16800,
		stats: {
			stability: 8,
			concealment: -1
		},
		compatibleWeapons: {
			submachineGun: [
				'Swedish K'
			]
		}
	},
	'Discrete Grip': {
		name: 'Discrete Grip',
		image: 'wpn_fps_smg_thompson_grip_discrete',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: source.Community,
		cost: 14e3,
		stats: {
			stability: -4,
			concealment: 1
		},
		compatibleWeapons: {
			submachineGun: [
				'Chicago Typewriter'
			]
		}
	},
	'Ergo Grip (Cobra)': {
		name: 'Ergo Grip (Cobra)',
		image: 'wpn_fps_smg_scorpion_g_ergo',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Hotline Miami'],
		cost: 9e3,
		acquisition: {
			achievement: 'Phew!'
		},
		stats: {
			stability: 12,
			concealment: 1
		},
		compatibleWeapons: {
			submachineGun: [
				'Cobra'
			]
		}
	},
	'Wooden Grip (Cobra)': {
		name: 'Wooden Grip (Cobra)',
		image: 'wpn_fps_smg_scorpion_g_wood',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Hotline Miami'],
		cost: 9e3,
		acquisition: {
			achievement: 'Do You Like Hurting Other People?'
		},
		stats: {
			accuracy: 4,
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: {
			submachineGun: [
				'Cobra'
			]
		}
	},
	'Camo Grip': {
		name: 'Camo Grip',
		image: 'wpn_fps_bow_hunter_g_camo',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Gage Ninja Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			concealment: 1
		},
		compatibleWeapons: {
			special: [
				'Pistol Crossbow'
			]
		}
	},
	'Walnut Grip': {
		name: 'Walnut Grip',
		image: 'wpn_fps_bow_hunter_g_walnut',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Gage Ninja Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			concealment: -1
		},
		compatibleWeapons: {
			special: [
				'Pistol Crossbow'
			]
		}
	},
	'RUS Custom Wood Grip': {
		name: 'RUS Custom Wood Grip',
		image: 'RUS_Custom_Wood_Grip',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Jiu Feng Smuggler Pack 3'],
		cost: 21e3,
		stats: {
			stability: 24
		},
		compatibleWeapons: {
			pistol: [
				'RUS-12 Angry Tiger'
			]
		}
	},
	'MS10 Comfort Wood Grip': {
		name: 'MS10 Comfort Wood Grip',
		image: 'MS10_Comfort_Wood_Grip',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Jiu Feng Smuggler Pack 2'],
		cost: 9e3,
		stats: {
			stability: 4
		},
		compatibleWeapons: {
			submachineGun: [
				'Miyaka 10 Special'
			]
		}
	}
}

export default grip