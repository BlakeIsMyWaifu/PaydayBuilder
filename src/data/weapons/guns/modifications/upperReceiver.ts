import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { ModificationList } from '../weaponTypes'

export type UpperReceiverModificationsList =
	// Commando 553
	'Heat Treated Body' |

	// CAR-4, AMR-16, Para
	'Exotique Receiver' |
	'LW Upper Receiver' |
	'THRUST Upper Receiver' |

	// Reinfeld 880, Locomotive 12G
	'Shell Rack' |

	// XL 5.56 Microgun
	'Heat Sink Barrel' |
	'XS Heat Sink Barrel' |
	'XS Barrel' |

	// DECA Technologies Compound Bow
	'Tactical Frame' |

	// Bernetti 9
	'The Elite Slide' |

	// Bronco .44,
	'Slimline Body' |

	// Swedish K
	'Swedish Body' |

	// Jacket's Piece
	'80\'s Calling'

const upperReceiver: ModificationList<UpperReceiverModificationsList> = {
	'Heat Treated Body': {
		name: 'Heat Treated Body',
		image: 'wpn_fps_ass_s552_body_standard_black',
		icon: 'inv_mod_upper_receiver',
		slot: 'upperReceiver',
		source: content['Armored Transport'],
		cost: 21e3,
		stats: {
			damage: 1,
			accuracy: -4,
			concealment: 4
		},
		compatibleWeapons: {
			assaultRifle: [
				'Commando 553 Rifle'
			]
		}
	},
	'Exotique Receiver': {
		name: 'Exotique Receiver',
		image: 'wpn_fps_m4_upper_reciever_edge',
		icon: 'inv_mod_upper_receiver',
		slot: 'upperReceiver',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			damage: 1,
			stability: 4
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
	'LW Upper Receiver': {
		name: 'LW Upper Receiver',
		image: 'wpn_fps_upg_ass_m4_upper_reciever_ballos',
		icon: 'inv_mod_upper_receiver',
		slot: 'upperReceiver',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Hey Mr. DJ'
		},
		stats: {
			accuracy: 4,
			stability: 8
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
	'THRUST Upper Receiver': {
		name: 'THRUST Upper Receiver',
		image: 'wpn_fps_upg_ass_m4_upper_reciever_core',
		icon: 'inv_mod_upper_receiver',
		slot: 'upperReceiver',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'OVE SAW 72000'
		},
		stats: {
			damage: 2,
			accuracy: -8
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
	'Shell Rack': {
		name: 'Shell Rack',
		image: 'wpn_fps_shot_r870_body_rack',
		icon: 'inv_mod_upper_receiver',
		slot: 'upperReceiver',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			magazine: 2,
			concealment: -2
		},
		compatibleWeapons: {
			shotgun: [
				'Reinfeld 880 Shotgun',
				'Locomotive 12G Shotgun'
			]
		}
	},
	'Heat Sink Barrel': {
		name: 'Heat Sink Barrel',
		image: 'wpn_fps_lmg_shuno_b_heat_long',
		icon: 'inv_mod_upper_receiver',
		slot: 'upperReceiver',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			stability: -8,
			concealment: -2
		},
		compatibleWeapons: {
			special: [
				'XL 5.56 Microgun'
			]
		}
	},
	'XS Heat Sink Barrel': {
		name: 'XS Heat Sink Barrel',
		image: 'wpn_fps_lmg_shuno_b_heat_short',
		icon: 'inv_mod_upper_receiver',
		slot: 'upperReceiver',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			accuracy: -4,
			stability: 8,
			concealment: 2
		},
		compatibleWeapons: {
			special: [
				'XL 5.56 Microgun'
			]
		}
	},
	'XS Barrel': {
		name: 'XS Barrel',
		image: 'wpn_fps_lmg_shuno_b_short',
		icon: 'inv_mod_upper_receiver',
		slot: 'upperReceiver',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			accuracy: -8,
			stability: 16,
			concealment: 2
		},
		compatibleWeapons: {
			special: [
				'XL 5.56 Microgun'
			]
		}
	},
	'Tactical Frame': {
		name: 'Tactical Frame',
		image: 'wpn_fps_bow_elastic_body_tactic',
		icon: 'inv_mod_upper_receiver',
		slot: 'upperReceiver',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			accuracy: -4,
			stability: -4,
			concealment: 1
		},
		compatibleWeapons: {
			special: [
				'DECA Technologies Compound Bow'
			]
		}
	},
	'The Elite Slide': {
		name: 'The Elite Slide',
		image: 'wpn_fps_pis_beretta_sl_brigadier',
		icon: 'inv_mod_upper_receiver',
		slot: 'upperReceiver',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			stability: 8
		},
		compatibleWeapons: {
			pistol: [
				'Bernetti 9 Pistol'
			]
		}
	},
	'Slimline Body': {
		name: 'Slimline Body',
		image: 'wpn_fps_pis_rage_body_smooth',
		icon: 'inv_mod_upper_receiver',
		slot: 'upperReceiver',
		source: source['Base Game'],
		cost: 44e3,
		stats: {
			stability: 4,
			concealment: 1
		},
		compatibleWeapons: {
			pistol: [
				'Bronco .44 Pistol'
			]
		}
	},
	'Swedish Body': {
		name: 'Swedish Body',
		image: 'wpn_fps_smg_m45_body_green',
		icon: 'inv_mod_upper_receiver',
		slot: 'upperReceiver',
		source: content['Armored Transport'],
		cost: 25200,
		stats: {
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: {
			submachineGun: [
				'Swedish K Submachine Gun'
			]
		}
	},
	'80\'s Calling': {
		name: '80\'s Calling',
		image: 'wpn_fps_smg_cobray_body_upper_jacket',
		icon: 'inv_mod_upper_receiver',
		slot: 'upperReceiver',
		source: content['Jacket Character Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		stats: {
			damage: 1,
			stability: 20,
			concealment: -3
		},
		compatibleWeapons: {
			submachineGun: [
				'Jacket\'s Piece'
			]
		}
	}
}

export default upperReceiver