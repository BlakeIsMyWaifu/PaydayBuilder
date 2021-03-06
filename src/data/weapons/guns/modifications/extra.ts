import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { ModificationList } from '../weaponTypes'

export type ExtraModificationsList =
	// AK Rifle, AK.762, Golden AK.762
	// IZHMA 12G, Krinkov
	'Scope Mount (AK)' |

	// UAR
	'A3 Tactical Foregrip' |

	// M308
	'Scope Mount (M308)' |

	// Vulcan Minigun
	'I\'ll Take Half That Kit' |

	// Bronco .44
	'Bronco Scope Mount' |

	// Deagle
	'Deagle Scope Mount' |

	// Mark 10
	'Railed Handguard'

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
				'AK Rifle',
				'AK.762',
				'Golden AK.762 Rifle'
			],
			shotgun: [
				'IZHMA 12G Shotgun'
			],
			submachineGun: [
				'Krinkov Submachine Gun'
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
				'UAR Rifle'
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
				'M308 Rifle'
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
				'Bronco .44 Pistol'
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
				'Deagle Pistol'
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
				'Mark 10 Submachine Gun'
			]
		}
	}
}

export default extra