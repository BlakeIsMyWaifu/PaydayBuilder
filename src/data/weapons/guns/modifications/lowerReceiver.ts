import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { ModificationList } from '../weaponTypes'

export type LowerReceiverModifications =
	// Union 5.56
	'Dunes Tactical Receiver' |

	// CAR-4, AMR-16, Para
	'THRUST Lower Receiver' |

	// UAR
	'Raptor Polymer Body' |

	// Breaker 12G
	'Treated Body' |

	// Mosconi 12G Tactical
	'CE Rail Stabilizer' |

	// The Judge, Akimbo Judge
	'Custom Reinforced Frame' |

	// OVE9000
	'Silent Motor' |
	'Fast Motor' |

	// Bernetti 9
	'Custom Titanium Frame' |

	// Baby Deagle
	'Spike Kit' |

	// Chimano Compact
	'Striking Body Kit' |

	// Mark 10
	'Custom Built Frame' |

	// Kobus 90
	'Custom Assault Frame'

const lowerReceiver: ModificationList<LowerReceiverModifications> = {
	'Dunes Tactical Receiver': {
		name: 'Dunes Tactical Receiver',
		image: 'wpn_fps_corgi_body_lower_strap',
		icon: 'inv_mod_lower_receiver',
		slot: 'lowerReceiver',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			assaultRifle: [
				'Union 5.56 Rifle'
			]
		}
	},
	'THRUST Lower Receiver': {
		name: 'THRUST Lower Receiver',
		image: 'wpn_fps_upg_ass_m4_lower_reciever_core',
		icon: 'inv_mod_lower_receiver',
		slot: 'lowerReceiver',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'OVE SAW 72000'
		},
		stats: {
			damage: 2
		},
		compatibleWeapons: {
			assaultRifle: [
				'CAR-4 Rifle',
				'AMR-16 Rifle'
			],
			submachineGun: [
				'Para Submachine Gun'
			]
		}
	},
	'Raptor Polymer Body': {
		name: 'Raptor Polymer Body',
		image: 'wpn_fps_aug_body_f90',
		icon: 'inv_mod_lower_receiver',
		slot: 'lowerReceiver',
		source: content['The Butcher Mod Pack 2'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			damage: 2,
			accuracy: 4,
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			assaultRifle: [
				'UAR Rifle'
			]
		}
	},
	'Treated Body': {
		name: 'Treated Body',
		image: 'wpn_fps_sho_boot_body_exotic',
		icon: 'inv_mod_lower_receiver',
		slot: 'lowerReceiver',
		source: content['Biker Character Pack'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: {
			shotgun: [
				'Breaker 12G Shotgun'
			]
		}
	},
	'CE Rail Stabilizer': {
		name: 'CE Rail Stabilizer',
		image: 'wpn_fps_sho_m590_lower_receiver_xxx',
		icon: 'inv_mod_lower_receiver',
		slot: 'lowerReceiver',
		source: content['Jiu Feng Smuggler Pack'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			concealment: -2
		},
		compatibleWeapons: {
			shotgun: [
				'Mosconi 12G Tactical Shotgun'
			]
		}
	},
	'Custom Reinforced Frame': {
		name: 'Custom Reinforced Frame',
		image: 'wpn_fps_pis_judge_body_modern',
		icon: 'inv_mod_lower_receiver',
		slot: 'lowerReceiver',
		source: source['Base Game'],
		cost: 12600,
		acquisition: {
			coins: 6
		},
		stats: {},
		compatibleWeapons: {
			shotgun: [
				'The Judge Shotgun'
			],
			akimboShotgun: [
				'Akimbo Judge Shotguns'
			]
		}
	},
	'Silent Motor': {
		name: 'Silent Motor',
		image: 'wpn_fps_saw_body_silent',
		icon: 'inv_mod_lower_receiver',
		slot: 'lowerReceiver',
		source: content['The Butcher Mod Pack 2'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		specialEffect: ['Silences Weapon'],
		stats: {
			threat: -16
		},
		compatibleWeapons: {
			special: [
				'OVE9000 Saw'
			]
		}
	},
	'Fast Motor': {
		name: 'Fast Motor',
		image: 'wpn_fps_saw_body_speed',
		icon: 'inv_mod_lower_receiver',
		slot: 'lowerReceiver',
		source: content['The Butcher Mod Pack 2'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			damage: 3
		},
		compatibleWeapons: {
			special: [
				'OVE9000 Saw'
			]
		}
	},
	'Custom Titanium Frame': {
		name: 'Custom Titanium Frame',
		image: 'wpn_fps_pis_beretta_body_modern',
		icon: 'inv_mod_lower_receiver',
		slot: 'lowerReceiver',
		source: source['Base Game'],
		cost: 9e3,
		acquisition: {
			coins: 6
		},
		stats: {},
		compatibleWeapons: {
			pistol: [
				'Bernetti 9 Pistol'
			]
		}
	},
	'Spike Kit': {
		name: 'Spike Kit',
		image: 'wpn_fps_pis_sparrow_body_941',
		icon: 'inv_mod_lower_receiver',
		slot: 'lowerReceiver',
		source: content['The Point Break Heists'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			stability: -8,
			concealment: 1
		},
		compatibleWeapons: {
			pistol: [
				'Baby Deagle'
			]
		}
	},
	'Striking Body Kit': {
		name: 'Striking Body Kit',
		image: 'wpn_fps_pis_g26_body_custom',
		icon: 'inv_mod_lower_receiver',
		slot: 'lowerReceiver',
		source: source.Community,
		cost: 53e3,
		stats: {
			damage: 1,
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Chimano Compact Pistol'
			]
		}
	},
	'Custom Built Frame': {
		name: 'Custom Built Frame',
		image: 'wpn_fps_smg_mac10_body_modern',
		icon: 'inv_mod_lower_receiver',
		slot: 'lowerReceiver',
		source: source['Base Game'],
		cost: 9e3,
		acquisition: {
			coins: 6
		},
		stats: {},
		compatibleWeapons: {
			submachineGun: [
				'Mark 10 Submachine Gun'
			]
		}
	},
	'Custom Assault Frame': {
		name: 'Custom Assault Frame',
		image: 'wpn_fps_smg_p90_body_boxy',
		icon: 'inv_mod_lower_receiver',
		slot: 'lowerReceiver',
		source: source['Base Game'],
		cost: 9e3,
		acquisition: {
			coins: 6
		},
		stats: {},
		compatibleWeapons: {
			submachineGun: [
				'Kobus 90 Submachine Gun'
			]
		}
	}
}

export default lowerReceiver