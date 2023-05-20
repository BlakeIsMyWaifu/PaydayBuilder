import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { type ModificationList } from '../weaponTypes'

export type ExtraModificationsList =
	// AK Rifle, AK.762, Golden AK.762
	// IZHMA 12G, Krinkov
	| 'Scope Mount (AK)'

	// UAR
	| 'A3 Tactical Foregrip'

	// M308
	| 'Scope Mount (M308)'

	// Vulcan Minigun
	| 'I\'ll Take Half That Kit'

	// Bronco .44
	| 'Bronco Scope Mount'

	// Deagle
	| 'Deagle Scope Mount'

	// Mark 10
	| 'Railed Handguard'

	// Argos III
	| 'ShellSwitch M8 Ammo Cache'

	// Wasp-DS
	| 'Rake Ultra Grip'

	// KS12 Urban Rifle
	| 'KS12-S Carry Handle'

	// Campbell 74
	| 'Moseley Sling'

	// Amaroq 900
	| 'Snowbound Shell Rack'

const extra: ModificationList<ExtraModificationsList> = {
	'Scope Mount (AK)': {
		name: 'Scope Mount (AK)',
		image: 'wpn_fps_upg_o_ak_scopemount',
		icon: 'inv_mod_extra',
		slot: 'extra',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: '$1.8M Speedrun'
		},
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
				'IZHMA 12G'
			],
			submachineGun: [
				'Krinkov'
			]
		}
	},
	'A3 Tactical Foregrip': {
		name: 'A3 Tactical Foregrip',
		image: 'wpn_fps_aug_fg_a3',
		icon: 'inv_mod_extra',
		slot: 'extra',
		source: source['Base Game'],
		cost: 53e3,
		stats: {
			damage: 1,
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			assaultRifle: [
				'UAR'
			]
		}
	},
	'Scope Mount (M308)': {
		name: 'Scope Mount (M308)',
		image: 'wpn_fps_upg_o_m14_scopemount',
		icon: 'inv_mod_extra',
		slot: 'extra',
		source: content['The Butcher Mod Pack 2'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			accuracy: 4,
			concealment: -1
		},
		compatibleWeapons: {
			assaultRifle: [
				'M308'
			]
		}
	},
	'I\'ll Take Half That Kit': {
		name: 'I\'ll Take Half That Kit',
		image: 'wpn_fps_lmg_m134_body_upper_light',
		icon: 'inv_mod_extra',
		slot: 'extra',
		source: content['The OVERKILL Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			totalAmmo: -300,
			accuracy: -4,
			stability: 12,
			concealment: 3
		},
		compatibleWeapons: {
			special: [
				'Vulcan Minigun'
			]
		}
	},
	'Bronco Scope Mount': {
		name: 'Bronco Scope Mount',
		image: 'wpn_fps_pis_rage_extra',
		icon: 'inv_mod_extra',
		slot: 'extra',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Purple Snake'
		},
		stats: {},
		compatibleWeapons: {
			pistol: [
				'Bronco .44'
			]
		}
	},
	'Deagle Scope Mount': {
		name: 'Deagle Scope Mount',
		image: 'wpn_fps_pis_deagle_extra',
		icon: 'inv_mod_extra',
		slot: 'extra',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Blue Eagle'
		},
		stats: {},
		compatibleWeapons: {
			pistol: [
				'Deagle'
			]
		}
	},
	'Railed Handguard': {
		name: 'Railed Handguard',
		image: 'wpn_fps_smg_mac10_body_ris',
		icon: 'inv_mod_extra',
		slot: 'extra',
		source: source['Base Game'],
		cost: 36e3,
		stats: {
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'Mark 10'
			]
		}
	},
	'ShellSwitch M8 Ammo Cache': {
		name: 'ShellSwitch M8 Ammo Cache',
		image: 'wpn_fps_sho_ultima_body_rack',
		icon: 'inv_mod_extra',
		slot: 'extra',
		source: content['Jiu Feng Smuggler Pack 4'],
		cost: 7200,
		stats: {
			totalAmmo: 5,
			concealment: -2
		},
		compatibleWeapons: {
			shotgun: [
				'Argos III'
			]
		}
	},
	'Rake Ultra Grip': {
		name: 'Rake Ultra Grip',
		image: 'wpn_fps_smg_fmg9_grip_tape',
		icon: 'inv_mod_extra',
		slot: 'extra',
		source: content['Jiu Feng Smuggler Pack 4'],
		cost: 7e3,
		stats: {
			stability: 4
		},
		compatibleWeapons: {
			submachineGun: [
				'Wasp-DS SMG'
			]
		}
	},
	'KS12-S Carry Handle': {
		name: 'KS12-S Carry Handle',
		image: 'wpn_fps_ass_groza_fl_adapter', // ! missing image
		icon: 'inv_mod_extra',
		slot: 'extra',
		source: content['Jiu Feng Smuggler Pack 3'],
		cost: 9e3,
		stats: {},
		compatibleWeapons: {
			assaultRifle: [
				'KS12 Urban'
			]
		}
	},
	'Moseley Sling': {
		name: 'Moseley Sling',
		image: 'wpn_fps_lmg_kacchainsaw_sling',
		icon: 'inv_mod_extra',
		slot: 'extra',
		source: content['McShay Weapon Pack 4'],
		cost: 9e3,
		stats: {
			accuracy: 24,
			stability: 20,
			concealment: -1
		},
		compatibleWeapons: {
			lightMachineGun: [
				'Campbell 74'
			]
		}
	},
	'Snowbound Shell Rack': {
		name: 'Snowbound Shell Rack',
		image: 'wpn_fps_snp_awp_ext_shellrack',
		icon: 'inv_mod_extra',
		slot: 'extra',
		source: content['McShay Weapon Pack 4'],
		cost: 9e3,
		stats: {
			totalAmmo: 6,
			accuracy: -4,
			stability: -4
		},
		compatibleWeapons: {
			sniper: [
				'Amaroq 900'
			]
		}
	}
}

export default extra