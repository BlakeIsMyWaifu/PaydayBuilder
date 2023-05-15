import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { type CompatibleWeapons, type ModificationList } from '../weaponTypes'

const mainGuns: CompatibleWeapons = {
	assaultRifle: [
		'AK',
		'AK.762',
		'Golden AK.762',
		'AK17',
		'AMCAR',
		'CAR-4',
		'AMR-16',
		'Bootleg',
		'Commando 553'
	],
	shotgun: [
		'Reinfeld 880',
		'IZHMA 12G',
		'Locomotive 12G'
	],
	sniper: [
		'Contractor .308'
	],
	lightMachineGun: [
		'KSP',
		'RPK'
	],
	special: [
		'Piglet'
	],
	submachineGun: [
		'Para',
		'Krinkov',
		'Jacket\'s Piece',
		'Kross Vertex'
	]
}

export type StockModificationsList =
	// Main Guns
	| 'Standard Stock (Main)'
	| 'Tactical Stock (Main)'
	| 'Skeletal Stock (Main)'
	| 'Wooden Sniper Stock'
	| 'Wide Stock'
	| 'War-Torn Stock'
	| 'Classic Stock'
	| '2 Piece Stock'
	| 'Contractor Stock'

	// Commando 553
	| 'Enhanced Stock'

	// Eagle Heavy
	| 'Sniper Stock (Eagle Heavy)'

	// AK, RPK
	| 'Folding Stock'

	// JP36
	| 'Solid Stock (JP36)'
	| 'Sniper Stock (JP36)'

	// Galant
	| 'Magpouch Stock'

	// M308
	| 'Abraham Body'
	| 'Jaeger Body'
	| 'B-Team Stock'

	// Valkyria
	| 'Solid Stock (Valkyria)'

	// AK5
	| 'Bertil Stock'
	| 'Caesar Stock'

	// Gecko 7.62
	| 'Fabulous Stock'
	| 'Light Stock (Gecko)'
	| 'Plastic Stock (Gecko)'
	| 'Skeletal Stock (Gecko)'
	| 'Sniper Stock (Gecko)'
	| 'Wooden Stock (Gecko)'

	// Falcon
	| 'CQB Stock'
	| 'Marksman Stock (Falcon)'
	| 'Wooden Stock (Falcon)'

	// Rodion 3B
	| 'Shoulder Pad'

	// Gewehr 3
	| 'Precision Stock'
	| 'Wooden Stock (Gewehr)'

	// Predator 12G
	| 'Folded Stock (Predator)'
	| 'Solid Stock (Predator)'
	| 'No Stock (Predator)'

	// Breaker 12G
	| 'Long Stock'

	// Reinfeld 880
	| 'Short Enough Stock'
	| 'Short Enough Tactical Stock'
	| 'Government Issue Tactical Stock'

	// Reinfeld 880, Locomotive 12G
	| 'Muldon Stock'

	// Mosconi 12G
	| 'Gangsta Special Stock'

	// M1014
	| 'Collapsed Stock'
	| 'Tactical Stock (M1014)'

	// Reinfeld 88
	| 'Artisan Stock'

	// VD-12
	| 'VD-12 Stock'

	// Joceline O/U 12G
	| 'Luxurious Ammo Pouch'
	| 'Wrist Wrecker Stock'

	// Rattlesnake
	| 'Tactical Aluminium Body'

	// R700
	| 'Military Stock'
	| 'Tactical Stock (R700)'

	// Bernetti Rangehitter
	| 'Club Stock'

	// R93
	| 'Wooden Body'

	// Grom
	| 'Lightweight Stock'

	// Nagant
	| 'Discrete Stock (Nagant)'

	// RPK
	| 'Plastic Stock (RPK)'

	// KSP 58
	| 'Plastic Stock (KSP 58)'

	// KSP
	| 'Solid Stock (KSP)'

	// Airbow
	| 'Light Stock (Airbow)'

	// Piglet
	| 'No Stock (Piglet)'

	// GL40
	| 'Sawed-off Stock'

	// Broomstick
	| 'Holster Stock'

	// STRYK 18c
	| 'Stock'

	// Bernetti Auto
	| 'Federales Stock (Bernetti Auto)'

	// Igor Automatik
	| 'Federales Stock (Igor)'

	// Peacemaker .45
	| 'Ol´ Ben\'s Stock'

	// Swedish K
	| 'Folded Stock (Swedish)'

	// SpecOps
	| 'Unfolded Stock (SpecOps)'

	// Mark 10
	| 'Skeletal Stock (Mark 10)'

	// AK Gen 21 Tactical
	| 'Bull Stock'

	// Compact-5
	| 'Adjustable Stock'
	| 'Bare Essentials Stock'
	| 'Spartan Stock'

	// Chicago Typewriter
	| 'QD Sling Stock'
	| 'Discrete Stock (Chicago Typewriter)'

	// Cobra
	| 'No Stock (Cobra)'
	| 'Unfolded Stock (Cobra)'

	// CMP
	| 'Skeletal Stock (CMP)'

	// Para
	| 'Shorter Than Short Stock'

	// Micro Uzi
	| 'No Stock (Micro Uzi)'
	| 'Unfolded Stock (Micro Uzi)'

	// Signature
	| 'No Stock (Signature)'

	// Jackal
	| 'Civilian Stock'
	| 'Folded Stock (Jackal)'

	// MP40
	| 'Folded Stock (MP40)'

	// Heather
	| 'Unfolded Stock (Heather)'

	// Blaster 9mm
	| 'Just Bend It'

	// Patchett L2A1
	| 'Folded Stock (Patchett)'
	| 'No Stock (Patchett)'
	| 'Solid Stock (Patchett)'

	// Uzi
	| 'Ergonomic Stock'
	| 'Solid Stock (Uzi)'
	| 'Folded Stock (Uzi)'

	// Locomotive 12G
	| 'Standard Stock (Locomotive)'
	| 'Police Shorty Stock'
	| 'Tactical Shorty Stock'

	// GSPS 12G
	| 'Stakeout Stock (GSPS)'

	// Claire 12G
	| 'Deadman\'s Stock'

	// China Puff 40mm
	| 'Riot Stock'

	// Basilisk 3V
	| 'Copperhead Recoil Pad'

	// Pronghorn
	| 'Stakeout Stock (Pronghorn)'
	| 'Marksman Stock (Pronghorn)'

	// Aran G2
	| 'Bounty Stock'

	// SG Versteckt 51D
	| 'Zittern Stock'

	// Argos III
	| 'Flak Frame Null Stock'

	// Wasp-DS
	| 'Bounce Slate RX Stock'

	// Miyaka 10 Special
	| 'MS10 Tactical Stock'

const stock: ModificationList<StockModificationsList> = {
	'Standard Stock (Main)': {
		name: 'Standard Stock (Main)',
		image: 'wpn_fps_upg_m4_s_standard',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: {
			assaultRifle: [
				'AK',
				'AK.762',
				'Golden AK.762'
			],
			shotgun: [
				'Reinfeld 880',
				'IZHMA 12G',
				'Locomotive 12G'
			],
			lightMachineGun: [
				'RPK',
				'KSP'
			],
			submachineGun: [
				'Para',
				'Krinkov',
				'Jacket\'s Piece',
				'Kross Vertex'
			]
		}
	},
	'Tactical Stock (Main)': {
		name: 'Tactical Stock (Main)',
		image: 'wpn_fps_upg_m4_s_pts',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: mainGuns
	},
	'Skeletal Stock (Main)': {
		name: 'Skeletal Stock (Main)',
		image: 'wpn_upg_ak_s_skfoldable',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			stability: -4,
			concealment: 2
		},
		compatibleWeapons: {
			assaultRifle: [
				'AK.762',
				'Golden AK.762'
			],
			shotgun: [
				'IZHMA 12G'
			],
			submachineGun: [
				'Krinkov'
			]
		}
	},
	'Wooden Sniper Stock': {
		name: 'Wooden Sniper Stock',
		image: 'wpn_upg_ak_s_psl',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 44e3,
		stats: {
			accuracy: 12,
			concealment: -3
		},
		compatibleWeapons: {
			assaultRifle: [
				'AK',
				'AK.762',
				'Golden AK.762'
			],
			shotgun: [
				'IZHMA 12G'
			],
			submachineGun: [
				'Krinkov'
			]
		},
		incompatibleSlot: ['grip']
	},
	'Wide Stock': {
		name: 'Wide Stock',
		image: 'wpn_fps_upg_m4_s_crane',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Yellow Bull'
		},
		stats: {
			stability: 4,
			concealment: 1
		},
		compatibleWeapons: mainGuns
	},
	'War-Torn Stock': {
		name: 'War-Torn Stock',
		image: 'wpn_fps_upg_m4_s_mk46',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Red Spider'
		},
		stats: {
			accuracy: 8,
			stability: -4,
			concealment: -3
		},
		compatibleWeapons: mainGuns
	},
	'Classic Stock': {
		name: 'Classic Stock',
		image: 'wpn_fps_upg_ak_s_solidstock',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'The Turtle Always Wins'
		},
		stats: {
			accuracy: 4,
			stability: 12,
			concealment: -4
		},
		compatibleWeapons: {
			assaultRifle: [
				'AK',
				'AK.762',
				'Golden AK.762'
			],
			shotgun: [
				'IZHMA 12G'
			],
			lightMachineGun: [
				'RPK'
			],
			submachineGun: [
				'Krinkov'
			]
		}
	},
	'2 Piece Stock': {
		name: '2 Piece Stock',
		image: 'wpn_fps_upg_m4_s_ubr',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'The Turtle Always Wins'
		},
		stats: {
			accuracy: 4,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: mainGuns
	},
	'Contractor Stock': {
		name: 'Contractor Stock',
		image: 'wpn_fps_snp_tti_s_vltor',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['John Wick Heists'],
		cost: 9e3,
		stats: {
			stability: 4
		},
		compatibleWeapons: mainGuns
	},
	'Enhanced Stock': {
		name: 'Enhanced Stock',
		image: 'wpn_fps_ass_s552_g_standard_green',
		icon: 'inv_mod_stock',
		slot: 'stock',
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
	'Sniper Stock (Eagle Heavy)': {
		name: 'Sniper Stock (Eagle Heavy)',
		image: 'wpn_fps_ass_scar_s_sniper',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gage Weapon Pack #01'],
		cost: 39200,
		stats: {
			stability: 8,
			concealment: -3
		},
		compatibleWeapons: {
			assaultRifle: [
				'Eagle Heavy'
			]
		}
	},
	'Folding Stock': {
		name: 'Folding Stock',
		image: 'wpn_upg_ak_s_folding',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			stability: -4,
			concealment: 2
		},
		compatibleWeapons: {
			assaultRifle: [
				'AK'
			],
			lightMachineGun: [
				'RPK'
			]
		}
	},
	'Solid Stock (JP36)': {
		name: 'Solid Stock (JP36)',
		image: 'wpn_fps_ass_g36_s_kv',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 28e3,
		stats: {
			concealment: 2
		},
		compatibleWeapons: {
			assaultRifle: [
				'JP36'
			]
		}
	},
	'Sniper Stock (JP36)': {
		name: 'Sniper Stock (JP36)',
		image: 'wpn_fps_ass_g36_s_sl8',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 71e3,
		stats: {
			accuracy: 4,
			stability: 8,
			concealment: -3
		},
		compatibleWeapons: {
			assaultRifle: [
				'JP36'
			]
		}
	},
	'Magpouch Stock': {
		name: 'Magpouch Stock',
		image: 'wpn_fps_ass_ching_s_pouch',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['WW2 Weapon Pack'],
		cost: 9e3,
		stats: {
			totalAmmo: 11
		},
		compatibleWeapons: {
			assaultRifle: [
				'Galant'
			]
		}
	},
	'Abraham Body': {
		name: 'Abraham Body',
		image: 'wpn_fps_ass_m14_body_ebr',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 44e3,
		stats: {
			stability: 8,
			concealment: 2
		},
		compatibleWeapons: {
			assaultRifle: [
				'M308'
			]
		}
	},
	'Jaeger Body': {
		name: 'Jaeger Body',
		image: 'wpn_fps_ass_m14_body_jae',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 80e3,
		stats: {
			accuracy: 4,
			stability: 12,
			concealment: -2
		},
		compatibleWeapons: {
			assaultRifle: [
				'M308'
			]
		}
	},
	'B-Team Stock': {
		name: 'B-Team Stock',
		image: 'B-Team_Stock_(M308)', // ! missing image
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 0,
		stats: {
			accuracy: -4,
			stability: -12,
			concealment: 19
		},
		compatibleWeapons: {
			assaultRifle: [
				'M308'
			]
		}
	},
	'Solid Stock (Valkyria)': {
		name: 'Solid Stock (Valkyria)',
		image: 'wpn_fps_ass_asval_s_solid',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Sokol Character Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		stats: {
			stability: 20,
			concealment: -3
		},
		compatibleWeapons: {
			assaultRifle: [
				'Valkyria'
			]
		}
	},
	'Bertil Stock': {
		name: 'Bertil Stock',
		image: 'wpn_fps_ass_ak5_s_ak5b',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 36e3,
		stats: {
			accuracy: 4,
			concealment: -1
		},
		compatibleWeapons: {
			assaultRifle: [
				'AK5'
			]
		}
	},
	'Caesar Stock': {
		name: 'Caesar Stock',
		image: 'wpn_fps_ass_ak5_s_ak5c',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 53e3,
		stats: {
			stability: 8,
			concealment: 2
		},
		compatibleWeapons: {
			assaultRifle: [
				'AK5'
			]
		}
	},
	'Fabulous Stock': {
		name: 'Fabulous Stock',
		image: 'wpn_fps_ass_galil_s_fab',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gage Assault Pack'],
		cost: 14e3,
		acquisition: {
			achievement: 'Rabbit Hunting'
		},
		stats: {
			accuracy: 4,
			stability: -4,
			concealment: 3
		},
		compatibleWeapons: {
			assaultRifle: [
				'Gecko 7.62'
			]
		}
	},
	'Light Stock (Gecko)': {
		name: 'Light Stock (Gecko)',
		image: 'wpn_fps_ass_galil_s_light',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gage Assault Pack'],
		cost: 14e3,
		acquisition: {
			achievement: 'So Many Choices'
		},
		stats: {
			stability: 4,
			concealment: 2
		},
		compatibleWeapons: {
			assaultRifle: [
				'Gecko 7.62'
			]
		}
	},
	'Plastic Stock (Gecko)': {
		name: 'Plastic Stock (Gecko)',
		image: 'Plastic_Stock_(Gecko_7.62)', // ! missing image
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gage Assault Pack'],
		cost: 14e3,
		acquisition: {
			achievement: 'Army of One'
		},
		stats: {
			accuracy: 8,
			stability: -8,
			concealment: 1
		},
		compatibleWeapons: {
			assaultRifle: [
				'Gecko 7.62'
			]
		}
	},
	'Skeletal Stock (Gecko)': {
		name: 'Skeletal Stock (Gecko)',
		image: 'wpn_fps_ass_galil_s_skeletal',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gage Assault Pack'],
		cost: 14e3,
		acquisition: {
			achievement: 'Rabbit Hunting'
		},
		stats: {
			accuracy: -4,
			stability: 12,
			concealment: 1
		},
		compatibleWeapons: {
			assaultRifle: [
				'Gecko 7.62'
			]
		}
	},
	'Sniper Stock (Gecko)': {
		name: 'Sniper Stock (Gecko)',
		image: 'wpn_fps_ass_galil_s_sniper',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gage Assault Pack'],
		cost: 14e3,
		acquisition: {
			achievement: 'Precision Aiming'
		},
		stats: {
			accuracy: 12,
			stability: -12,
			concealment: -2
		},
		compatibleWeapons: {
			assaultRifle: [
				'Gecko 7.62'
			]
		}
	},
	'Wooden Stock (Gecko)': {
		name: 'Wooden Stock (Gecko)',
		image: 'wpn_fps_ass_galil_s_wood',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gage Assault Pack'],
		cost: 14e3,
		acquisition: {
			achievement: 'Artillery Barrage'
		},
		stats: {
			stability: 16,
			concealment: -2
		},
		compatibleWeapons: {
			assaultRifle: [
				'Gecko 7.62'
			]
		}
	},
	'CQB Stock': {
		name: 'CQB Stock',
		image: 'wpn_fps_ass_fal_s_01',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['The Big Bank Heist'],
		cost: 11200,
		acquisition: {
			achievement: 'Don\'t Bring the Heat'
		},
		stats: {
			concealment: 5
		},
		compatibleWeapons: {
			assaultRifle: [
				'Falcon'
			]
		}
	},
	'Marksman Stock (Falcon)': {
		name: 'Marksman Stock (Falcon)',
		image: 'wpn_fps_ass_fal_s_03',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['The Big Bank Heist'],
		cost: 11200,
		acquisition: {
			achievement: 'Funding Father'
		},
		stats: {
			accuracy: 4,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: {
			assaultRifle: [
				'Falcon'
			]
		}
	},
	'Wooden Stock (Falcon)': {
		name: 'Wooden Stock (Falcon)',
		image: 'wpn_fps_ass_fal_s_wood',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['The Big Bank Heist'],
		cost: 11200,
		acquisition: {
			achievement: 'Backing Bobblehead Bob'
		},
		stats: {
			stability: 16
		},
		compatibleWeapons: {
			assaultRifle: [
				'Falcon'
			]
		}
	},
	'Shoulder Pad': {
		name: 'Shoulder Pad',
		image: 'wpn_fps_ass_tkb_s_tigr',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['McShay Weapon Pack 3'],
		cost: 9e3,
		stats: {
			stability: 4
		},
		compatibleWeapons: {
			assaultRifle: [
				'Rodion 3B'
			]
		}
	},
	'Precision Stock': {
		name: 'Precision Stock',
		image: 'wpn_fps_ass_g3_s_sniper',
		icon: 'inv_mod_stock',
		slot: 'stock',
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
	'Wooden Stock (Gewehr)': {
		name: 'Wooden Stock (Gewehr)',
		image: 'wpn_fps_ass_g3_s_wood',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gage Assault Pack'],
		cost: 14e3,
		acquisition: {
			achievement: 'Not Today'
		},
		stats: {
			stability: 12,
			concealment: -1
		},
		compatibleWeapons: {
			assaultRifle: [
				'Gewehr 3'
			]
		}
	},
	'Folded Stock (Predator)': {
		name: 'Folded Stock (Predator)',
		image: 'wpn_fps_sho_s_spas12_folded',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source.Community,
		cost: 9e3,
		stats: {
			accuracy: -4,
			stability: -4,
			concealment: 2
		},
		compatibleWeapons: {
			shotgun: [
				'Predator 12G'
			]
		},
		incompatibleSlot: ['sight']
	},
	'Solid Stock (Predator)': {
		name: 'Solid Stock (Predator)',
		image: 'wpn_fps_sho_s_spas12_solid',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source.Community,
		cost: 9e3,
		stats: {
			accuracy: 4,
			stability: 4,
			concealment: -3
		},
		compatibleWeapons: {
			shotgun: [
				'Predator 12G'
			]
		}
	},
	'No Stock (Predator)': {
		name: 'No Stock (Predator)',
		image: 'wpn_fps_sho_s_spas12_nostock',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source.Community,
		cost: 28e3,
		stats: {
			stability: -12,
			concealment: 4
		},
		compatibleWeapons: {
			shotgun: [
				'Predator 12G'
			]
		}
	},
	'Long Stock': {
		name: 'Long Stock',
		image: 'wpn_fps_sho_boot_s_long',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Biker Character Pack'],
		cost: 9e3,
		stats: {
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			shotgun: [
				'Breaker 12G'
			]
		}
	},
	'Short Enough Stock': {
		name: 'Short Enough Stock',
		image: 'wpn_fps_shot_r870_s_nostock',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 14e3,
		stats: {
			stability: -12,
			concealment: 3
		},
		compatibleWeapons: {
			shotgun: [
				'Reinfeld 880'
			]
		}
	},
	'Short Enough Tactical Stock': {
		name: 'Short Enough Tactical Stock',
		image: 'wpn_fps_shot_r870_s_nostock_big',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 28e3,
		stats: {
			stability: -12,
			concealment: 1
		},
		compatibleWeapons: {
			shotgun: [
				'Reinfeld 880'
			]
		}
	},
	'Government Issue Tactical Stock': {
		name: 'Government Issue Tactical Stock',
		image: 'wpn_fps_shot_r870_s_solid_big',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 28e3,
		stats: {
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			shotgun: [
				'Reinfeld 880'
			]
		}
	},
	'Muldon Stock': {
		name: 'Muldon Stock',
		image: 'wpn_fps_shot_r870_s_folding',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 71e3,
		stats: {
			stability: -4,
			concealment: 1
		},
		compatibleWeapons: {
			shotgun: [
				'Reinfeld 880',
				'Locomotive 12G'
			]
		},
		incompatibleSlot: ['sight']
	},
	'Gangsta Special Stock': {
		name: 'Gangsta Special Stock',
		image: 'wpn_fps_shot_huntsman_s_short',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 80e3,
		stats: {
			accuracy: -16,
			stability: -16,
			concealment: 10
		},
		compatibleWeapons: {
			shotgun: [
				'Mosconi 12G'
			]
		}
	},
	'Collapsed Stock': {
		name: 'Collapsed Stock',
		image: 'wpn_fps_sho_ben_s_collapsed',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gage Shotgun Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Knock, Knock'
		},
		stats: {
			stability: -12,
			concealment: 6
		},
		compatibleWeapons: {
			shotgun: [
				'M1014'
			]
		}
	},
	'Tactical Stock (M1014)': {
		name: 'Tactical Stock (M1014)',
		image: 'wpn_fps_sho_ben_s_solid',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gage Shotgun Pack'],
		cost: 36e3,
		acquisition: {
			achievement: 'Shock and Awe'
		},
		stats: {
			accuracy: 4,
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			shotgun: [
				'M1014'
			]
		}
	},
	'Artisan Stock': {
		name: 'Artisan Stock',
		image: 'wpn_fps_sho_m1897_s_xxx', // ! missing image
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gunslinger Weapon Pack'],
		cost: 9e3,
		stats: {
			accuracy: -8,
			concealment: 2
		},
		compatibleWeapons: {
			shotgun: [
				'Reinfeld 88'
			]
		}
	},
	'VD-12 Stock': {
		name: 'VD-12 Stock',
		image: 'wpn_fps_sho_sko12_stock',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['McShay Weapon Pack 2'],
		cost: 9e3,
		stats: {
			accuracy: 4
		},
		compatibleWeapons: {
			shotgun: [
				'VD-12'
			]
		}
	},
	'Luxurious Ammo Pouch': {
		name: 'Luxurious Ammo Pouch',
		image: 'wpn_fps_shot_b682_s_ammopouch',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source.Community,
		cost: 9e3,
		stats: {
			totalAmmo: 8
		},
		compatibleWeapons: {
			shotgun: [
				'Joceline O/U 12G'
			]
		}
	},
	'Wrist Wrecker Stock': {
		name: 'Wrist Wrecker Stock',
		image: 'wpn_fps_shot_b682_s_short',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source.Community,
		cost: 9e3,
		stats: {
			accuracy: -16,
			stability: -12,
			concealment: 6
		},
		compatibleWeapons: {
			shotgun: [
				'Joceline O/U 12G'
			]
		}
	},
	'Tactical Aluminium Body': {
		name: 'Tactical Aluminium Body',
		image: 'wpn_fps_snp_msr_body_msr',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gage Sniper Pack'],
		cost: 49600,
		acquisition: {
			achievement: 'A Taste of Their Own Medicine'
		},
		stats: {
			stability: 8,
			concealment: 5
		},
		compatibleWeapons: {
			sniper: [
				'Rattlesnake'
			]
		}
	},
	'Military Stock': {
		name: 'Military Stock',
		image: 'wpn_fps_snp_r700_s_tactical',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Fugitive Weapon Pack'],
		cost: 21e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			accuracy: 8
		},
		compatibleWeapons: {
			sniper: [
				'R700'
			]
		}
	},
	'Tactical Stock (R700)': {
		name: 'Tactical Stock (R700)',
		image: 'wpn_fps_snp_r700_s_military',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Fugitive Weapon Pack'],
		cost: 21e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			stability: 8
		},
		compatibleWeapons: {
			sniper: [
				'R700'
			]
		}
	},
	'Club Stock': {
		name: 'Club Stock',
		image: 'wpn_fps_snp_sbl_s_xxx', // ! missing image
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gunslinger Weapon Pack'],
		cost: 9e3,
		stats: {
			totalAmmo: 3
		},
		compatibleWeapons: {
			sniper: [
				'Bernetti Rangehitter'
			]
		}
	},
	'Wooden Body': {
		name: 'Wooden Body',
		image: 'wpn_fps_snp_r93_body_wood',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gage Sniper Pack'],
		cost: 42400,
		acquisition: {
			achievement: 'You Can\'t Hide'
		},
		stats: {
			stability: 8,
			concealment: -3
		},
		compatibleWeapons: {
			sniper: [
				'R93'
			]
		}
	},
	'Lightweight Stock': {
		name: 'Lightweight Stock',
		image: 'wpn_fps_snp_siltstone_s_polymer',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gage Russian Weapon Pack'],
		cost: 9e3,
		stats: {
			stability: -8,
			concealment: 2
		},
		compatibleWeapons: {
			sniper: [
				'Grom'
			]
		}
	},
	'Discrete Stock (Nagant)': {
		name: 'Discrete Stock (Nagant)',
		image: 'wpn_fps_snp_mosin_body_standard_black',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gage Historical Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Wind of Change'
		},
		stats: {
			stability: -4,
			concealment: 3
		},
		compatibleWeapons: {
			sniper: [
				'Nagant'
			]
		}
	},
	'Plastic Stock (RPK)': {
		name: 'Plastic Stock (RPK)',
		image: 'wpn_fps_lmg_rpk_s_standard',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gage Weapon Pack #02'],
		cost: 37800,
		stats: {
			stability: 8,
			concealment: 1
		},
		compatibleWeapons: {
			lightMachineGun: [
				'RPK'
			]
		}
	},
	'Plastic Stock (KSP 58)': {
		name: 'Plastic Stock (KSP 58)',
		image: 'wpn_fps_lmg_par_s_plastic',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 0,
		acquisition: {
			bonus: 1
		},
		stats: {
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: {
			lightMachineGun: [
				'KSP 58'
			]
		}
	},
	'Solid Stock (KSP)': {
		name: 'Solid Stock (KSP)',
		image: 'wpn_fps_lmg_m249_s_solid',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gage Weapon Pack #02'],
		cost: 37800,
		stats: {
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			lightMachineGun: [
				'KSP'
			]
		}
	},
	'Light Stock (Airbow)': {
		name: 'Light Stock (Airbow)',
		image: 'wpn_fps_bow_ecp_s_bare',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['h3h3 Character Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		stats: {
			stability: -8,
			concealment: 2
		},
		compatibleWeapons: {
			special: [
				'Airbow'
			]
		}
	},
	'No Stock (Piglet)': {
		name: 'No Stock (Piglet)',
		image: 'wpn_fps_gre_m32_no_stock',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['The Butcher\'s BBQ Pack'],
		cost: 0,
		acquisition: {
			infinite: true
		},
		stats: {
			stability: -16,
			concealment: 4
		},
		compatibleWeapons: {
			special: [
				'Piglet'
			]
		}
	},
	'Sawed-off Stock': {
		name: 'Sawed-off Stock',
		image: 'wpn_fps_gre_m79_stock_short',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gage Assault Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Big Bada Boom'
		},
		stats: {
			stability: -4,
			concealment: 4
		},
		compatibleWeapons: {
			special: [
				'GL40'
			]
		}
	},
	'Holster Stock': {
		name: 'Holster Stock',
		image: 'wpn_fps_pis_c96_s_solid',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gage Historical Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'So Uncivilized'
		},
		stats: {
			stability: 16,
			concealment: -3
		},
		compatibleWeapons: {
			pistol: [
				'Broomstick'
			]
		}
	},
	'Stock': {
		name: 'Stock',
		image: 'wpn_fps_pis_g18c_s_stock',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 62e3,
		stats: {
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'STRYK 18c'
			]
		}
	},
	'Federales Stock (Bernetti Auto)': {
		name: 'Federales Stock (Bernetti Auto)',
		image: 'wpn_fps_pis_beer_s_std',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Federales Weapon Pack'],
		cost: 53e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'Bernetti Auto'
			]
		}
	},
	'Federales Stock (Igor)': {
		name: 'Federales Stock (Igor)',
		image: 'wpn_fps_pis_stech_s_standard',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Federales Weapon Pack'],
		cost: 9e3,
		stats: {
			stability: 12,
			concealment: -3
		},
		compatibleWeapons: {
			pistol: [
				'Igor Automatik'
			]
		}
	},
	'Ol´ Ben\'s Stock': {
		name: 'Ol´ Ben\'s Stock',
		image: 'wpn_fps_pis_peacemaker_s_skeletal',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['The Butcher\'s Western Pack'],
		cost: 9e3,
		stats: {
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'Peacemaker .45'
			]
		}
	},
	'Folded Stock (Swedish)': {
		name: 'Folded Stock (Swedish)',
		image: 'wpn_fps_smg_m45_s_folded',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Armored Transport'],
		cost: 16800,
		stats: {
			stability: -8,
			concealment: 3
		},
		compatibleWeapons: {
			submachineGun: [
				'Swedish K'
			]
		}
	},
	'Unfolded Stock (SpecOps)': {
		name: 'Unfolded Stock (SpecOps)',
		image: 'wpn_fps_smg_mp7_s_long',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gage Weapon Pack #01'],
		cost: 12600,
		stats: {
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'SpecOps'
			]
		}
	},
	'Skeletal Stock (Mark 10)': {
		name: 'Skeletal Stock (Mark 10)',
		image: 'wpn_fps_smg_mac10_s_skel',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			stability: 12,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'Mark 10'
			]
		}
	},
	'Bull Stock': {
		name: 'Bull Stock',
		image: 'wpn_fps_smg_vityaz_b_xxx', // ! missing image
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Jiu Feng Smuggler Pack'],
		cost: 9e3,
		stats: {
			stability: -8,
			concealment: 2
		},
		compatibleWeapons: {
			submachineGun: [
				'AK Gen 21 Tactical'
			]
		}
	},
	'Adjustable Stock': {
		name: 'Adjustable Stock',
		image: 'wpn_fps_smg_mp5_s_adjust',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			concealment: 3
		},
		compatibleWeapons: {
			submachineGun: [
				'Compact-5'
			]
		}
	},
	'Bare Essentials Stock': {
		name: 'Bare Essentials Stock',
		image: 'wpn_fps_smg_mp5_s_ring',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			stability: -12,
			concealment: 4
		},
		compatibleWeapons: {
			submachineGun: [
				'Compact-5'
			]
		}
	},
	'Spartan Stock': {
		name: 'Spartan Stock',
		image: 'wpn_fps_smg_mp5_s_folding',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gage Spec Ops Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		stats: {
			stability: 4
		},
		compatibleWeapons: {
			submachineGun: [
				'Compact-5'
			]
		}
	},
	'QD Sling Stock': {
		name: 'QD Sling Stock',
		image: 'wpn_fps_smg_thompson_stock_nostock',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source.Community,
		cost: 9e3,
		stats: {
			stability: -12,
			concealment: 4
		},
		compatibleWeapons: {
			submachineGun: [
				'Chicago Typewriter'
			]
		}
	},
	'Discrete Stock (Chicago Typewriter)': {
		name: 'Discrete Stock (Chicago Typewriter)',
		image: 'wpn_fps_smg_thompson_stock_discrete',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source.Community,
		cost: 21e3,
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
	'No Stock (Cobra)': {
		name: 'No Stock (Cobra)',
		image: 'wpn_fps_smg_scorpion_s_nostock',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Hotline Miami'],
		cost: 9e3,
		acquisition: {
			achievement: 'Sounds of Animals Fighting'
		},
		stats: {
			stability: -4,
			concealment: 1
		},
		compatibleWeapons: {
			submachineGun: [
				'Cobra'
			]
		}
	},
	'Unfolded Stock (Cobra)': {
		name: 'Unfolded Stock (Cobra)',
		image: 'wpn_fps_smg_scorpion_s_unfolded',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Hotline Miami'],
		cost: 9e3,
		acquisition: {
			achievement: 'Phew!'
		},
		stats: {
			stability: 12,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'Cobra'
			]
		}
	},
	'Skeletal Stock (CMP)': {
		name: 'Skeletal Stock (CMP)',
		image: 'wpn_fps_smg_mp9_s_skel',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 36e3,
		stats: {
			accuracy: 4,
			stability: 12,
			concealment: -3
		},
		compatibleWeapons: {
			submachineGun: [
				'CMP'
			]
		}
	},
	'Shorter Than Short Stock': {
		name: 'Shorter Than Short Stock',
		image: 'wpn_fps_smg_olympic_s_short',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 36e3,
		stats: {
			stability: -4,
			concealment: 2
		},
		compatibleWeapons: {
			submachineGun: [
				'Para'
			]
		}
	},
	'No Stock (Micro Uzi)': {
		name: 'No Stock (Micro Uzi)',
		image: 'wpn_fps_smg_baka_s_standard',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Yakuza Character Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			stability: -8,
			concealment: 1
		},
		compatibleWeapons: {
			submachineGun: [
				'Micro Uzi'
			]
		}
	},
	'Unfolded Stock (Micro Uzi)': {
		name: 'Unfolded Stock (Micro Uzi)',
		image: 'wpn_fps_smg_baka_s_unfolded',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Yakuza Character Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			stability: 8,
			concealment: -3
		},
		compatibleWeapons: {
			submachineGun: [
				'Micro Uzi'
			]
		}
	},
	'No Stock (Signature)': {
		name: 'No Stock (Signature)',
		image: 'wpn_fps_smg_shepheard_s_no',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			stability: -8,
			concealment: 2
		},
		compatibleWeapons: {
			submachineGun: [
				'Signature'
			]
		}
	},
	'Civilian Stock': {
		name: 'Civilian Stock',
		image: 'wpn_fps_smg_schakal_s_civil',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['John Wick Weapon Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		stats: {
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: {
			submachineGun: [
				'Jackal'
			]
		}
	},
	'Folded Stock (Jackal)': {
		name: 'Folded Stock (Jackal)',
		image: 'wpn_fps_smg_schakal_s_folded',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['John Wick Weapon Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		stats: {
			stability: -8,
			concealment: 2
		},
		compatibleWeapons: {
			submachineGun: [
				'Jackal'
			]
		}
	},
	'Folded Stock (MP40)': {
		name: 'Folded Stock (MP40)',
		image: 'wpn_fps_smg_erma_s_folded',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['WW2 Weapon Pack'],
		cost: 9e3,
		stats: {
			stability: -8,
			concealment: 3
		},
		compatibleWeapons: {
			submachineGun: [
				'MP40'
			]
		}
	},
	'Unfolded Stock (Heather)': {
		name: 'Unfolded Stock (Heather)',
		image: 'wpn_fps_smg_sr2_s_unfolded',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			stability: 8
		},
		compatibleWeapons: {
			submachineGun: [
				'Heather'
			]
		}
	},
	'Just Bend It': {
		name: 'Just Bend It',
		image: 'wpn_fps_smg_tec9_s_unfolded',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Hotline Miami'],
		cost: 21e3,
		acquisition: {
			achievement: 'Overdose'
		},
		stats: {
			stability: 12,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'Blaster 9mm'
			]
		}
	},
	'Folded Stock (Patchett)': {
		name: 'Folded Stock (Patchett)',
		image: 'wpn_fps_smg_sterling_s_folded',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gage Historical Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Special Operations Execution'
		},
		stats: {
			stability: -8,
			concealment: 2
		},
		compatibleWeapons: {
			submachineGun: [
				'Patchett L2A1'
			]
		}
	},
	'No Stock (Patchett)': {
		name: 'No Stock (Patchett)',
		image: 'wpn_fps_smg_sterling_s_nostock',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gage Historical Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Special Operations Execution'
		},
		stats: {
			accuracy: -4,
			stability: -8,
			concealment: 4
		},
		compatibleWeapons: {
			submachineGun: [
				'Patchett L2A1'
			]
		}
	},
	'Solid Stock (Patchett)': {
		name: 'Solid Stock (Patchett)',
		image: 'wpn_fps_smg_sterling_s_solid',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gage Historical Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Special Operations Execution'
		},
		stats: {
			accuracy: 4,
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'Patchett L2A1'
			]
		}
	},
	'Ergonomic Stock': {
		name: 'Ergonomic Stock',
		image: 'wpn_fps_smg_uzi_s_leather',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Hotline Miami'],
		cost: 9e3,
		acquisition: {
			achievement: 'Walk Faster'
		},
		stats: {
			accuracy: 8,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'Uzi'
			]
		}
	},
	'Solid Stock (Uzi)': {
		name: 'Solid Stock (Uzi)',
		image: 'wpn_fps_smg_uzi_s_solid',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Hotline Miami'],
		cost: 9e3,
		acquisition: {
			achievement: 'Do You Like Hurting Other People?'
		},
		stats: {
			accuracy: 4,
			stability: 12,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'Uzi'
			]
		}
	},
	'Folded Stock (Uzi)': {
		name: 'Folded Stock (Uzi)',
		image: 'wpn_fps_smg_uzi_s_standard',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Hotline Miami'],
		cost: 9e3,
		acquisition: {
			achievement: 'Sounds of Animals Fighting'
		},
		stats: {
			stability: -12,
			concealment: 4
		},
		compatibleWeapons: {
			submachineGun: [
				'Uzi'
			]
		}
	},
	'Standard Stock (Locomotive)': {
		name: 'Standard Stock (Locomotive)',
		image: 'wpn_fps_shot_r870_s_solid',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 14e3,
		stats: {
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: {
			shotgun: [
				'Locomotive 12G'
			]
		}
	},
	'Police Shorty Stock': {
		name: 'Police Shorty Stock',
		image: 'wpn_fps_shot_shorty_s_solid_short',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			stability: 8,
			concealment: -3
		},
		compatibleWeapons: {
			shotgun: [
				'Locomotive 12G'
			]
		}
	},
	'Tactical Shorty Stock': {
		name: 'Tactical Shorty Stock',
		image: 'wpn_fps_shot_shorty_s_nostock_short',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 28e3,
		stats: {
			stability: -16,
			concealment: 3
		},
		compatibleWeapons: {
			shotgun: [
				'Locomotive 12G'
			]
		}
	},
	'Stakeout Stock (GSPS)': {
		name: 'Stakeout Stock (GSPS)',
		image: 'wpn_fps_shot_m37_s_short',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['The Goat Simulator Heist'],
		cost: 9e3,
		stats: {
			accuracy: -8,
			concealment: 2
		},
		compatibleWeapons: {
			shotgun: [
				'GSPS 12G'
			]
		}
	},
	'Deadman\'s Stock': {
		name: 'Deadman\'s Stock',
		image: 'wpn_fps_shot_coach_s_short', // ! missing image
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source.Community,
		cost: 9e3,
		stats: {
			accuracy: -16,
			stability: -16,
			concealment: 10
		},
		compatibleWeapons: {
			shotgun: [
				'Claire 12G'
			]
		}
	},
	'Riot Stock': {
		name: 'Riot Stock',
		image: 'wpn_fps_gre_china_s_short',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Wolf Pack'],
		cost: 9e3,
		stats: {
			stability: -4,
			concealment: 4
		},
		compatibleWeapons: {
			special: [
				'China Puff 40mm'
			]
		}
	},
	'Copperhead Recoil Pad': {
		name: 'Copperhead Recoil Pad',
		image: '???', // ! missing image
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['McShay Weapon Pack'],
		cost: 9e3,
		stats: {
			accuracy: 8,
			concealment: -1
		},
		compatibleWeapons: {
			special: [
				'Basilisk 3V'
			]
		}
	},
	'Stakeout Stock (Pronghorn)': {
		name: 'Stakeout Stock (Pronghorn)',
		image: 'wpn_fps_snp_scout_s_pads_none',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['McShay Weapon Pack'],
		cost: 9e3,
		stats: {
			accuracy: -8,
			stability: -4,
			concealment: 2
		},
		compatibleWeapons: {
			sniper: [
				'Pronghorn'
			]
		}
	},
	'Marksman Stock (Pronghorn)': {
		name: 'Marksman Stock (Pronghorn)',
		image: 'wpn_fps_snp_scout_s_pads_one',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['McShay Weapon Pack'],
		cost: 9e3,
		stats: {
			stability: -4,
			concealment: 1
		},
		compatibleWeapons: {
			sniper: [
				'Pronghorn'
			]
		}
	},
	'Bounty Stock': {
		name: 'Bounty Stock',
		image: 'wpn_fps_upg_m4_s_contender',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['McShay Weapon Pack 3'],
		cost: 9e3,
		stats: {
			accuracy: 8,
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			sniper: [
				'Aran G2'
			]
		}
	},
	'Zittern Stock': {
		name: 'Zittern Stock',
		image: 'wpn_fps_lmg_hk51b_s_extended',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['McShay Weapon Pack'],
		cost: 9e3,
		stats: {
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			lightMachineGun: [
				'SG Versteckt 51D'
			]
		}
	},
	'Flak Frame Null Stock': {
		name: 'Flak Frame Null Stock',
		image: 'wpn_fps_sho_ultima_s_light',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Jiu Feng Smuggler Pack 4'],
		cost: 7200,
		stats: {
			stability: 8,
			concealment: -1
		},
		compatibleWeapons: {
			shotgun: [
				'Argos III'
			]
		}
	},
	'Bounce Slate RX Stock': {
		name: 'Bounce Slate RX Stock',
		image: 'wpn_fps_smg_fmg9_stock_padded',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Jiu Feng Smuggler Pack 4'],
		cost: 7200,
		stats: {
			accuracy: 8,
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'Wasp-DS SMG'
			]
		}
	},
	'MS10 Tactical Stock': {
		name: 'MS10 Tactical Stock',
		image: 'MS10_Tactical_Stock', // ! missing image
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Jiu Feng Smuggler Pack 2'],
		cost: 9e3,
		stats: {
			stability: 12,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'Miyaka 10 Special'
			]
		}
	}
}

export default stock