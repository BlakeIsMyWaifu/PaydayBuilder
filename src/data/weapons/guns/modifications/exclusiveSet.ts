import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { type ModificationList } from '../weaponTypes'

export type ExclusiveSetList =
	// CAR-4
	| 'Longbore'

	// Rodion 3B
	| 'Strelok'

	// VD-12
	| 'Stateside'

	// Deimos
	| 'Flatline'

	// Campbell 74
	| 'Offworld'

	// Akron HC
	| 'Aureate'

	// Amaroq 900
	| 'Dragon Lore'
	| 'Badlands'

	// Hailstorm Mk 5
	| 'Prototype'

	// Kahn .357
	| 'Electric Dream'

	// Wasp-DS
	| 'Whisper 9 Silencer'

	// Basilisk 3V
	| 'Venomous'

	// Argos III
	| 'Triple Tech Threat'

	// Pronghorn
	| 'Open Range Sniper'

	// Aran G2
	| 'Perfect Blue'

	// North Star
	| 'Celestial Assault'

const exclusiveSet: ModificationList<ExclusiveSetList> = {
	'Longbore': {
		name: 'Longbore',
		image: 'wpn_fps_m4_upg_fg_mk12', // - wpn_fps_m4_upg_mk12
		icon: 'inv_mod_ammo_explosive', // TODO update icon
		slot: 'exclusiveSet',
		source: source['Chinese New Year 2022'],
		cost: 28e3,
		stats: {
			damage: 2,
			accuracy: 12,
			stability: 8,
			concealment: -4,
			threat: -16.8
		},
		compatibleWeapons: {}
	},
	'Strelok': {
		name: 'Strelok',
		image: 'wpn_fps_ass_tkb_conversion',
		icon: 'inv_mod_ammo_explosive', // TODO update icon
		slot: 'exclusiveSet',
		source: content['McShay Weapon Pack 3'],
		cost: 9e3,
		stats: {
			damage: -5,
			accuracy: 16,
			stability: 12,
			concealment: -1
		},
		compatibleWeapons: {}
	},
	'Stateside': {
		name: 'Stateside',
		image: 'wpn_fps_sho_sko12_conversion',
		icon: 'inv_mod_ammo_explosive', // TODO update icon
		slot: 'exclusiveSet',
		source: content['McShay Weapon Pack 2'],
		cost: 9e3,
		stats: {
			totalAmmo: 6,
			damage: 1,
			accuracy: -8,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: {}
	},
	'Flatline': {
		name: 'Flatline',
		image: 'Wpn_fps_sho_supernova_conversion',
		icon: 'inv_mod_ammo_explosive', // TODO update icon
		slot: 'exclusiveSet',
		source: content['McShay Weapon Pack 4'],
		cost: 9e3,
		stats: {
			magazine: 2,
			totalAmmo: 5,
			damage: -10,
			accuracy: -8,
			stability: 4,
			concealment: 2
		},
		compatibleWeapons: {}
	},
	'Offworld': {
		name: 'Offworld',
		image: 'wpn_fps_lmg_kacchainsaw_conversionkit',
		icon: 'inv_mod_ammo_explosive', // TODO update icon
		slot: 'exclusiveSet',
		source: content['McShay Weapon Pack 4'],
		cost: 9e3,
		stats: {
			magazine: 80,
			totalAmmo: 300,
			damage: -40,
			accuracy: 4,
			stability: 4,
			concealment: 3
		},
		compatibleWeapons: {}
	},
	'Aureate': {
		name: 'Aureate',
		image: 'wpn_fps_lmg_hcar_body_conversionkit',
		icon: 'inv_mod_ammo_explosive', // TODO update icon
		slot: 'exclusiveSet',
		source: content['McShay Weapon Pack 3'],
		cost: 9e3,
		specialEffect: ['Ammo pickups locked to 6-12'],
		stats: {
			magazine: 80,
			totalAmmo: 160,
			// TODO rateOfFire: 400,
			damage: -40,
			accuracy: 4,
			stability: 4,
			concealment: 3
		},
		compatibleWeapons: {}
	},
	'Dragon Lore': {
		name: 'Dragon Lore',
		image: 'wpn_fps_snp_awp_conversion_dragonlore',
		icon: 'inv_mod_ammo_explosive', // TODO update icon
		slot: 'exclusiveSet',
		source: content['McShay Weapon Pack 4'],
		cost: 62e3,
		stats: {
			magazine: -2,
			totalAmmo: 1,
			// TODO rateOfFire: 1,
			damage: 210,
			accuracy: 8,
			stability: 8,
			concealment: -6
		},
		compatibleWeapons: {}
	},
	'Badlands': {
		name: 'Badlands',
		image: 'wpn_fps_snp_awp_conversion_wildlands',
		icon: 'inv_mod_ammo_explosive',
		slot: 'exclusiveSet',
		source: content['McShay Weapon Pack 4'],
		cost: 62e3,
		stats: {
			totalAmmo: 7,
			damage: -210,
			accuracy: -8,
			stability: 16,
			concealment: 2
		},
		compatibleWeapons: {}
	},
	'Prototype': {
		name: 'Prototype',
		image: 'wpn_fps_hailstorm_conversion',
		icon: 'inv_mod_ammo_explosive',
		slot: 'exclusiveSet',
		source: content['McShay Weapon Pack 2'],
		cost: 9e3,
		stats: {
			totalAmmo: 54,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: {}
	},
	'Electric Dream': {
		name: 'Electric Dream',
		image: 'wpn_fps_pis_korth_conversionkit',
		icon: 'inv_mod_ammo_explosive',
		slot: 'exclusiveSet',
		source: content['McShay Weapon Pack 2'],
		cost: 9e3,
		stats: {
			damage: 2,
			accuracy: 8,
			stability: 8,
			concealment: -3
		},
		compatibleWeapons: {}
	},
	'Whisper 9 Silencer': {
		name: 'Whisper 9 Silencer',
		image: 'wpn_fps_smg_fmg9_conversion',
		icon: 'inv_mod_ammo_explosive',
		slot: 'exclusiveSet',
		source: content['Jiu Feng Smuggler Pack 4'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			damage: 2,
			accuracy: 8,
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {}
	},
	'Venomous': {
		name: 'Venomous',
		image: 'wpn_fps_gre_ms3gl_conversion',
		icon: 'inv_mod_ammo_explosive',
		slot: 'exclusiveSet',
		source: content['McShay Weapon Pack'],
		cost: 9e3,
		stats: {
			magazine: -1,
			totalAmmo: -1,
			damage: 160,
			accuracy: 56,
			concealment: -1
		},
		compatibleWeapons: {}
	},
	'Triple Tech Threat': {
		name: 'Triple Tech Threat',
		image: 'wpn_fps_sho_ultima_body_kit',
		icon: 'inv_mod_ammo_explosive',
		slot: 'exclusiveSet',
		source: content['Jiu Feng Smuggler Pack 4'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			accuracy: -4,
			stability: 8,
			concealment: -1
		},
		compatibleWeapons: {}
	},
	'Open Range Sniper': {
		name: 'Open Range Sniper',
		image: 'wpn_fps_snp_scout_conversion',
		icon: 'inv_mod_ammo_explosive',
		slot: 'exclusiveSet',
		source: content['McShay Weapon Pack'],
		cost: 9e3,
		stats: {
			accuracy: 12,
			stability: 16,
			concealment: -2,
			reload: -1.5
		},
		compatibleWeapons: {}
	},
	'Perfect Blue': {
		name: 'Perfect Blue',
		image: 'wpn_fps_snp_contender_conversion',
		icon: 'inv_mod_ammo_explosive',
		slot: 'exclusiveSet',
		source: content['McShay Weapon Pack 3'],
		cost: 9e3,
		stats: {
			totalAmmo: -1,
			damage: 40,
			accuracy: 8,
			concealment: -8
		},
		compatibleWeapons: {}
	},
	'Celestial Assault': {
		name: 'Celestial Assault',
		image: 'wpn_fps_snp_victor_sbr_kit',
		icon: 'inv_mod_ammo_explosive',
		slot: 'exclusiveSet',
		source: content['A Criminal Carol'],
		cost: 9e3,
		acquisition: {
			sideJob: 'Diamonds In The Sky'
		},
		stats: {
			damage: -2,
			accuracy: 8,
			stability: 8,
			concealment: 3
		},
		compatibleWeapons: {}
	}
}

export default exclusiveSet