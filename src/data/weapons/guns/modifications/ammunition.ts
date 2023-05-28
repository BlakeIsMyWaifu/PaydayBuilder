import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { type CompatibleWeapons, type ModificationList } from '../weaponTypes'

const mainGuns: CompatibleWeapons = {
	shotgun: [
		'Reinfeld 880',
		'IZHMA 12G',
		'Mosconi 12G',
		'Locomotive 12G',
		'Goliath 12G',
		'Breaker 12G',
		'M1014',
		'Raven',
		'Steakout 12G',
		'GSPS 12G',
		'Street Sweeper',
		'Predator 12G',
		'Joceline O/U 12G',
		'The Judge'
	],
	akimboShotgun: [
		'Akimbo Goliath 12G',
		'Brothers Grimm 12G',
		'Akimbo Judge'
	]
}

export type AmmunitionModificationsList =
	// Shotguns
	| 'Tombstone Slug'
	// | '000 Buckshot (Community)'
	| '000 Buckshot'
	| 'HE Round'
	| 'Flechette'
	| 'AP Slug'
	| 'Dragon\'s Breath Round'

	// Plainsrider Bow
	| 'Explosive Arrows (Plainsrider)'
	| 'Poisoned Arrows (Plainsrider)'

	// Light Crossbox
	| 'Explosive Bolt (Light Crossbow)'
	| 'Poison Bolt (Light Crossbow)'

	// Airbow
	| 'Explosive Arrow (Airbow)'
	| 'Poison Arrow (Airbow)'

	// English Longbow
	| 'Explosive Arrow (English Longbow)'
	| 'Poison Arrow (English Longbow)'

	// DECA Technologies Compound Bow
	| 'Explosive Arrow (DECA)'
	| 'Poison Arrow (DECA)'

	// Heavy Crossbow
	| 'Explosive Bolt (Heavy Crossbow)'
	| 'Poison Bolt (Heavy Crossbow)'

	// KETCHNOV Byk-1, Little Friend 7.62
	// Compact 40mm, China Puff 40mm, Piglet, GL40, Arbiter, Basilisk 3V
	| 'Sting Grenade'
	| 'Incendiary Round'
	| 'X1-a Tactical ZAPper'
	| 'Viper Grenade'

	// Pistol Crossbow
	| 'Explosive Bolts (Pistol Crossbow)'
	| 'Poisoned Bolts (Pistol Crossbow)'

const ammunition: ModificationList<AmmunitionModificationsList> = {
	'Tombstone Slug': {
		name: 'Tombstone Slug',
		image: 'wpn_fps_upg_a_rip',
		icon: 'inv_mod_ammo_poison',
		slot: 'ammunition',
		source: source['Base Game'],
		cost: 36e3,
		acquisition: {
			infinite: true
		},
		specialEffect: [
			'Poisons enemies',
			'Penetrates body armor'
		],
		stats: {
			totalAmmo: -20,
			damage: -4,
			accuracy: 4
		},
		compatibleWeapons: mainGuns
	},
	/** This replaced with the DLC version */
	// '000 Buckshot (Community)': {
	// 	name: '000 Buckshot (Community)',
	// 	image: 'wpn_fps_upg_a_custom_free',
	// 	icon: 'inv_mod_ammo_custom',
	// 	slot: 'ammunition',
	// 	source: source.Community,
	// 	cost: 50400,
	// 	acquisition: {
	// 		bonus: 2
	// 	},
	// 	stats: {
	// 		damage: 15
	// 	},
	// 	compatibleWeapons: mainGuns
	// },
	'000 Buckshot': {
		name: '000 Buckshot',
		image: 'wpn_fps_upg_a_custom',
		icon: 'inv_mod_ammo_custom',
		slot: 'ammunition',
		source: content['Gage Shotgun Pack'],
		cost: 50400,
		acquisition: {
			infinite: true
		},
		stats: {
			damage: 15
		},
		compatibleWeapons: mainGuns
	},
	'HE Round': {
		name: 'HE Round',
		image: 'wpn_fps_upg_a_explosive',
		icon: 'inv_mod_ammo_explosive',
		slot: 'ammunition',
		source: content['Gage Shotgun Pack'],
		cost: 50400,
		acquisition: {
			infinite: true
		},
		specialEffect: ['Creates an explosion on impact'],
		stats: {
			totalAmmo: -5,
			damage: 3,
			accuracy: -12
		},
		compatibleWeapons: mainGuns
	},
	'Flechette': {
		name: 'Flechette',
		image: 'wpn_fps_upg_a_piercing',
		icon: 'inv_mod_ammo_piercing',
		slot: 'ammunition',
		source: content['Gage Shotgun Pack'],
		cost: 50400,
		acquisition: {
			infinite: true
		},
		specialEffect: ['Penetrates body armor'],
		stats: {
			damage: -3,
			accuracy: 8
		},
		compatibleWeapons: mainGuns
	},
	'AP Slug': {
		name: 'AP Slug',
		image: 'wpn_fps_upg_a_slug',
		icon: 'inv_mod_ammo_slug',
		slot: 'ammunition',
		source: content['Gage Shotgun Pack'],
		cost: 50400,
		acquisition: {
			infinite: true
		},
		specialEffect: ['Penetrates body armor, shields, enemies and thin walls'],
		stats: {
			totalAmmo: -8, // different ammo per gun
			damage: 15,
			accuracy: 8
		},
		compatibleWeapons: mainGuns
	},
	'Dragon\'s Breath Round': {
		name: 'Dragon\'s Breath Round',
		image: 'wpn_fps_upg_a_dragons_breath',
		icon: 'inv_mod_ammo_dragons_breath',
		slot: 'ammunition',
		source: content['The Butcher\'s BBQ Pack'],
		cost: 50400,
		acquisition: {
			infinite: true
		},
		specialEffect: ['Sets enemies on fire'],
		stats: {
			totalAmmo: -5,
			damage: -6,
			accuracy: -4
		},
		compatibleWeapons: mainGuns
	},
	'Explosive Arrows (Plainsrider)': {
		name: 'Explosive Arrows (Plainsrider)',
		image: 'wpn_fps_upg_a_bow_explosion',
		icon: 'inv_mod_ammo_explosive',
		slot: 'ammunition',
		source: content['The Butcher\'s Western Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		specialEffect: ['Explosive', 'Removes Ammo Pickup'],
		stats: {
			damage: -300
		},
		compatibleWeapons: {
			special: [
				'Plainsrider Bow'
			]
		}
	},
	'Poisoned Arrows (Plainsrider)': {
		name: 'Poisoned Arrows (Plainsrider)',
		image: 'wpn_fps_upg_a_bow_poison',
		icon: 'inv_mod_ammo_poison',
		slot: 'ammunition',
		source: source['Base Game'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		specialEffect: ['100% chance to poison target'],
		stats: {
			totalAmmo: -15,
			damage: -900
		},
		compatibleWeapons: {
			special: [
				'Plainsrider Bow'
			]
		}
	},
	'Explosive Bolt (Light Crossbow)': {
		name: 'Explosive Bolt (Light Crossbow)',
		image: 'wpn_fps_bow_frankish_m_explosive',
		icon: 'inv_mod_ammo_explosive',
		slot: 'ammunition',
		source: content['Gage Chivalry Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		specialEffect: ['Explosive', 'Removes Ammo Pickup'],
		stats: {
			damage: -50
		},
		compatibleWeapons: {
			special: [
				'Light Crossbow'
			]
		}
	},
	'Poison Bolt (Light Crossbow)': {
		name: 'Poison Bolt (Light Crossbow)',
		image: 'wpn_fps_bow_frankish_m_poison',
		icon: 'inv_mod_ammo_poison',
		slot: 'ammunition',
		source: content['Gage Chivalry Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		specialEffect: ['100% chance to poison target'],
		stats: {
			totalAmmo: -15,
			damage: -650
		},
		compatibleWeapons: {
			special: [
				'Light Crossbow'
			]
		}
	},
	'Explosive Arrow (Airbow)': {
		name: 'Explosive Arrow (Airbow)',
		image: 'wpn_fps_bow_ecp_m_arrows_explosive', // - wpn_fps_bow_ecp_m_explosive
		icon: 'inv_mod_ammo_explosive',
		slot: 'ammunition',
		source: content['h3h3 Character Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		specialEffect: ['Explosive', 'Removes Ammo Pickup'],
		stats: {
			damage: -150
		},
		compatibleWeapons: {
			special: [
				'Airbow'
			]
		}
	},
	'Poison Arrow (Airbow)': {
		name: 'Poison Arrow (Airbow)',
		image: 'wpn_fps_bow_ecp_m_arrows_poison', // - wpn_fps_bow_ecp_m_poison
		icon: 'inv_mod_ammo_poison',
		slot: 'ammunition',
		source: content['h3h3 Character Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		specialEffect: ['100% chance to poison target'],
		stats: {
			damage: -600
		},
		compatibleWeapons: {
			special: [
				'Airbow'
			]
		}
	},
	'Explosive Arrow (English Longbow)': {
		name: 'Explosive Arrow (English Longbow)',
		image: 'wpn_fps_bow_long_m_explosive',
		icon: 'inv_mod_ammo_explosive',
		slot: 'ammunition',
		source: content['Gage Chivalry Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		specialEffect: ['Explosive', 'Removes Ammo Pickup'],
		stats: {
			damage: -600
		},
		compatibleWeapons: {
			special: [
				'English Longbow'
			]
		}
	},
	'Poison Arrow (English Longbow)': {
		name: 'Poison Arrow (English Longbow)',
		image: 'wpn_fps_bow_long_m_poison',
		icon: 'inv_mod_ammo_poison',
		slot: 'ammunition',
		source: content['Gage Chivalry Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		specialEffect: ['100% chance to poison target'],
		stats: {
			totalAmmo: -10,
			damage: -1700
		},
		compatibleWeapons: {
			special: [
				'English Longbow'
			]
		}
	},
	'Explosive Arrow (DECA)': {
		name: 'Explosive Arrow (DECA)',
		image: 'wpn_fps_bow_elastic_m_explosive',
		icon: 'inv_mod_ammo_explosive',
		slot: 'ammunition',
		source: source['Base Game'],
		cost: 9e3,
		specialEffect: ['Explosive', 'Removes Ammo Pickup'],
		stats: {
			damage: -600
		},
		compatibleWeapons: {
			special: [
				'DECA Technologies Compound Bow'
			]
		}
	},
	'Poison Arrow (DECA)': {
		name: 'Poison Arrow (DECA)',
		image: 'wpn_fps_bow_elastic_m_poison',
		icon: 'inv_mod_ammo_poison',
		slot: 'ammunition',
		source: source['Base Game'],
		cost: 9e3,
		specialEffect: ['100% chance to poison target'],
		stats: {
			totalAmmo: -9,
			damage: -1700 // TODO adds damage now?
		},
		compatibleWeapons: {
			special: [
				'DECA Technologies Compound Bow'
			]
		}
	},
	'Explosive Bolt (Heavy Crossbow)': {
		name: 'Explosive Bolt (Heavy Crossbow)',
		image: 'wpn_fps_bow_arblast_m_explosive',
		icon: 'inv_mod_ammo_explosive',
		slot: 'ammunition',
		source: content['Gage Chivalry Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		specialEffect: ['Explosive', 'Removes Ammo Pickup'],
		stats: {
			damage: -600
		},
		compatibleWeapons: {
			special: [
				'Heavy Crossbow'
			]
		}
	},
	'Poison Bolt (Heavy Crossbow)': {
		name: 'Poison Bolt (Heavy Crossbow)',
		image: 'wpn_fps_bow_arblast_m_poison',
		icon: 'inv_mod_ammo_poison',
		slot: 'ammunition',
		source: content['Gage Chivalry Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		specialEffect: ['100% chance to poison target'],
		stats: {
			totalAmmo: -100,
			damage: -1700
		},
		compatibleWeapons: {
			special: [
				'Heavy Crossbow'
			]
		}
	},
	'Sting Grenade': {
		name: 'Sting Grenade',
		image: 'wpn_fps_upg_a_grenade_launcher_hornet',
		icon: 'inv_mod_ammo_custom',
		slot: 'ammunition',
		source: source['Base Game'], // TODO Find update, around start of 2023
		cost: 14e3,
		specialEffect: ['Shoots an AP shotgun round.', 'Receives bonuses from skills', 'Suffers from damage falloff'],
		stats: {},
		compatibleWeapons: {}
	},
	'Incendiary Round': {
		name: 'Incendiary Round',
		image: 'wpn_fps_upg_a_grenade_launcher_incendiary',
		icon: 'inv_mod_ammo_dragons_breath',
		slot: 'ammunition',
		source: content['The Butcher\'s BBQ Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		specialEffect: ['35% chance to set targets on fire'],
		stats: {
			damage: -1270
		},
		compatibleWeapons: {
			assaultRifle: [
				'KETCHNOV Byk-1',
				'Little Friend 7.62'
			],
			special: [
				'Compact 40mm',
				'China Puff 40mm',
				'Piglet',
				'GL40',
				'Arbiter',
				'Basilisk 3V'
			]
		}
	},
	'X1-a Tactical ZAPper': {
		name: 'X1-a Tactical ZAPper',
		image: 'wpn_fps_upg_a_grenade_launcher_electric',
		icon: 'inv_mod_ammo_explosive',
		slot: 'ammunition',
		source: content['Jiu Feng Smuggler Pack 2'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		specialEffect: ['Electrocutes all targets within its radius'],
		stats: {
			damage: -180 // Different per weapon
		},
		compatibleWeapons: {
			assaultRifle: [
				'KETCHNOV Byk-1',
				'Little Friend 7.62'
			],
			special: [
				'Compact 40mm',
				'China Puff 40mm',
				'Piglet',
				'GL40',
				'Arbiter',
				'Basilisk 3V'
			]
		}
	},
	'Viper Grenade': {
		name: 'Viper Grenade',
		image: 'wpn_fps_upg_a_grenade_launcher_poison',
		icon: 'inv_mod_ammo_explosive',
		slot: 'ammunition',
		source: content['McShay Weapon Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		specialEffect: ['Spawns a poison gas cloud'],
		stats: {
			damage: 40 // Different per weapon
		},
		compatibleWeapons: {
			assaultRifle: [
				'KETCHNOV Byk-1',
				'Little Friend 7.62'
			],
			special: [
				'Compact 40mm',
				'China Puff 40mm',
				'Piglet',
				'GL40',
				'Arbiter',
				'Basilisk 3V'
			]
		}
	},
	'Explosive Bolts (Pistol Crossbow)': {
		name: 'Explosive Bolts (Pistol Crossbow)',
		image: 'wpn_fps_upg_a_crossbow_explosion',
		icon: 'inv_mod_ammo_explosive',
		slot: 'ammunition',
		source: content['Gage Ninja Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		specialEffect: ['Explosive', 'Removes Ammo Pickup'],
		stats: {
			damage: -50
		},
		compatibleWeapons: {
			special: [
				'Pistol Crossbow'
			]
		}
	},
	'Poisoned Bolts (Pistol Crossbow)': {
		name: 'Poisoned Bolts (Pistol Crossbow)',
		image: 'wpn_fps_upg_a_crossbow_poison',
		icon: 'inv_mod_ammo_poison',
		slot: 'ammunition',
		source: content['Gage Ninja Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		specialEffect: ['100% chance to poison target'],
		stats: {
			totalAmmo: -8,
			damage: -250
		},
		compatibleWeapons: {
			special: [
				'Pistol Crossbow'
			]
		}
	}
}

export default ammunition