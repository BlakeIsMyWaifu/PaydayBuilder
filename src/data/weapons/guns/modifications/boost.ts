import source from 'data/source/miscSources'

import { akimboShotgunList, assaultRifleList, lightMachineGunList, pistolList, shotgunList, sniperList, specialList, submachineGunList } from '../gunList'
import { CompatibleWeapons, ModificationList } from '../weaponTypes'

const allWeapons: CompatibleWeapons = {
	assaultRifle: assaultRifleList,
	shotgun: shotgunList,
	lightMachineGun: lightMachineGunList,
	sniper: sniperList,
	akimboShotgun: akimboShotgunList,
	special: specialList,
	pistol: pistolList,
	submachineGun: submachineGunList
}

export type BoostModificationsList =
	'Concealment' |
	'Stability' |
	'Accuracy' |
	'Team Boost' |

	// Shotgun accuracy reduction
	'Accuracy (- Shotguns)' |

	// Total Ammo Main
	'Total Ammo (Main)' |

	// Ammo Plainsrider
	'Total Ammo (Plainsrider)' |

	// Damage MA-17 Flamethrower, Flamethrower Mk.1
	'Damage (Flamethrower)' |

	// Concealment Pistols
	'Concealment (Extra)'

const boost: ModificationList<BoostModificationsList> = {
	'Concealment': {
		name: 'Concealment',
		image: 'wpn_fps_upg_bonus_concealment_p1',
		icon: 'inv_mod_bonus_stats',
		slot: 'boost',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			concealment: 1
		},
		compatibleWeapons: allWeapons
	},
	'Stability': {
		name: 'Stability',
		image: 'wpn_fps_upg_bonus_recoil_p1',
		icon: 'inv_mod_bonus_stats',
		slot: 'boost',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			stability: 4
		},
		compatibleWeapons: allWeapons
	},
	'Accuracy': {
		name: 'Accuracy',
		image: 'wpn_fps_upg_bonus_spread_p1',
		icon: 'inv_mod_bonus_stats',
		slot: 'boost',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			accuracy: 4
		},
		compatibleWeapons: allWeapons
	},
	'Team Boost': {
		name: 'Team Boost',
		image: 'wpn_fps_upg_bonus_team_exp_money_p3',
		icon: 'inv_mod_bonus_team',
		slot: 'boost',
		source: source['Base Game'],
		cost: 9e3,
		specialEffect: ['+3% Experience & money reward for you and your crew.'],
		stats: {},
		compatibleWeapons: allWeapons
	},
	'Accuracy (- Shotguns)': {
		name: 'Accuracy (- Shotguns)',
		image: 'wpn_fps_upg_bonus_spread_n1',
		icon: 'inv_mod_bonus_stats',
		slot: 'boost',
		source: source['Base Game'],
		cost: 12600,
		stats: {
			accuracy: -4
		},
		compatibleWeapons: {
			shotgun: shotgunList,
			akimboShotgun: akimboShotgunList
		}
	},
	'Total Ammo (Main)': {
		name: 'Total Ammo (Main)',
		image: 'wpn_fps_upg_bonus_total_ammo_p1',
		icon: 'inv_mod_bonus_stats',
		slot: 'boost',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			totalAmmo: 2 // different per weapon
		},
		compatibleWeapons: {
			special: [
				'OVE9000',
				'MA-17 Flamethrower',
				'Vulcan Minigun',
				'Flamethrower Mk.1',
				'Plainsrider Bow',
				'Light Crossbow',
				'English Longbow',
				'Heavy Crossbow',
				'Pistol Crossbow'
			],
			sniper: [
				'Platypus 70',
				'Rattlesnake',
				'Lebensauger .308',
				'Desertfox',
				'Contractor .308',
				'R93',
				'Repeater 1874',
				'Grom',
				'Nagant',
				'Thanatos .50 cal'
			]
		}
	},
	'Total Ammo (Plainsrider)': {
		name: 'Total Ammo (Plainsrider)',
		image: 'wpn_fps_upg_bonus_total_ammo_p3',
		icon: 'inv_mod_bonus_stats',
		slot: 'boost',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			totalAmmo: 8
		},
		compatibleWeapons: {
			special: [
				'Plainsrider Bow'
			]
		}
	},
	'Damage (Flamethrower)': {
		name: 'Damage (Flamethrower)',
		image: 'wpn_fps_upg_bonus_damage_p1', // wpn_fps_upg_bonus_damage_p3
		icon: 'inv_mod_bonus_stats',
		slot: 'boost',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			damage: 1
		},
		compatibleWeapons: {
			special: [
				'MA-17 Flamethrower',
				'Flamethrower Mk.1'
			]
		}
	},
	'Concealment (Extra)': {
		name: 'Concealment (Extra)',
		image: 'wpn_fps_upg_bonus_concealment_p3',
		icon: 'inv_mod_bonus_stats',
		slot: 'boost',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			concealment: 3
		},
		compatibleWeapons: {
			assaultRifle: [
				'Clarion'
			],
			pistol: [
				'Bernetti 9',
				'Bronco .44',
				'Gruber Kurz'
			]
		}
	}
}

export default boost