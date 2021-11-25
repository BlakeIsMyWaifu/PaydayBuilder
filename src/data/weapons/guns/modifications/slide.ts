import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { ModificationList } from '../weaponTypes'

export type SlideModificationsList =
	// Interceptor .45
	'Expert Slide' |
	'Match Slide' |

	// Gruber Kurz
	'Long Slide (Gruber Kurz)' |

	// Signature .40
	'Two Tone Slide' |
	'Long Slide (Signature .40)' |

	// Crosskill
	'Vented Slide' |
	'Long Vented Slide' |

	// Bronco .44
	'Aggressor Barrel' |
	'Pocket Surprise Barrel' |
	'Ventilated Barrel' |
	'Overcompensating Barrel' |

	// Crosskill Chunky Compact
	'Chunky Hunter Barrel' |
	'Crosskill Platinum Bull Slide' |

	// Chimano Custom
	'Long Slide (Chimano Custom)' |

	// Broomstick
	'Precision Barrel (Broomstick)' |

	// Chimano Compact
	'Striking Slide' |

	// Crosskill Guard
	'Milled Slide' |

	// LEO
	'Custom Slide' |
	'Long Slide (LEO)' |

	// Peacemaker .45
	'Precision Barrel (Peacemaker)' |
	'Shootout Barrel' |

	// Deagle
	'Long Barrel' |
	'Custom Milled Barrel'

const slide: ModificationList<SlideModificationsList> = {
	'Expert Slide': {
		name: 'Expert Slide',
		image: 'wpn_fps_pis_usp_b_expert',
		slot: 'slide',
		source: source.Community,
		cost: 14e3,
		stats: {
			accuracy: 12,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Interceptor .45 Pistol'
			]
		}
	},
	'Match Slide': {
		name: 'Match Slide',
		image: 'wpn_fps_pis_usp_b_match',
		slot: 'slide',
		source: source.Community,
		cost: 14e3,
		stats: {
			accuracy: 4,
			stability: 8,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Interceptor .45 Pistol'
			]
		}
	},
	'Long Slide (Gruber Kurz)': {
		name: 'Long Slide (Gruber Kurz)',
		image: 'wpn_fps_pis_ppk_b_long',
		slot: 'slide',
		source: content['Armored Transport'],
		cost: 25200,
		stats: {
			damage: 1,
			accuracy: 8,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'Gruber Kurz Pistol'
			]
		}
	},
	'Two Tone Slide': {
		name: 'Two Tone Slide',
		image: 'wpn_fps_pis_p226_b_equinox',
		slot: 'slide',
		source: content['Gage Weapon Pack #01'],
		cost: 39200,
		stats: {
			damage: 2,
			stability: 4,
			threat: 2
		},
		compatibleWeapons: {
			pistol: [
				'Signature .40 Pistol'
			]
		}
	},
	'Long Slide (Signature .40)': {
		name: 'Long Slide (Signature .40)',
		image: 'wpn_fps_pis_p226_b_long',
		slot: 'slide',
		source: content['Gage Weapon Pack #01'],
		cost: 61e3,
		stats: {
			damage: 1,
			accuracy: 8,
			stability: 4,
			concealment: -3
		},
		compatibleWeapons: {
			pistol: [
				'Signature .40 Pistol'
			]
		}
	},
	'Vented Slide': {
		name: 'Vented Slide',
		image: 'wpn_fps_pis_1911_b_vented',
		slot: 'slide',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			damage: 1,
			accuracy: -4,
			stability: 8,
			threat: 2
		},
		compatibleWeapons: {
			pistol: [
				'Crosskill Pistol'
			]
		}
	},
	'Long Vented Slide': {
		name: 'Long Vented Slide',
		image: 'wpn_fps_pis_1911_b_long',
		slot: 'slide',
		source: source['Base Game'],
		cost: 14e3,
		stats: {
			damage: 1,
			accuracy: 8,
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'Crosskill Pistol'
			]
		}
	},
	'Aggressor Barrel': {
		name: 'Aggressor Barrel',
		image: 'wpn_fps_pis_rage_b_comp1',
		slot: 'slide',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			damage: 2,
			accuracy: 8,
			stability: 8,
			concealment: -3
		},
		compatibleWeapons: {
			pistol: [
				'Bronco .44 Pistol'
			]
		}
	},
	'Pocket Surprise Barrel': {
		name: 'Pocket Surprise Barrel',
		image: 'wpn_fps_pis_rage_b_short',
		slot: 'slide',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			accuracy: -8,
			stability: -12,
			concealment: 3
		},
		compatibleWeapons: {
			pistol: [
				'Bronco .44 Pistol'
			]
		}
	},
	'Ventilated Barrel': {
		name: 'Ventilated Barrel',
		image: 'wpn_fps_pis_rage_b_comp2',
		slot: 'slide',
		source: source['Base Game'],
		cost: 28e3,
		stats: {
			damage: 1,
			accuracy: -4,
			stability: 4,
			concealment: -3,
			threat: 10
		},
		compatibleWeapons: {
			pistol: [
				'Bronco .44 Pistol'
			]
		}
	},
	'Overcompensating Barrel': {
		name: 'Overcompensating Barrel',
		image: 'wpn_fps_pis_rage_b_long',
		slot: 'slide',
		source: source['Base Game'],
		cost: 36e3,
		stats: {
			accuracy: 12,
			stability: 12,
			concealment: -3
		},
		compatibleWeapons: {
			pistol: [
				'Bronco .44 Pistol'
			]
		}
	},
	'Chunky Hunter Barrel': {
		name: 'Chunky Hunter Barrel',
		image: 'wpn_fps_pis_m1911_b_xxx',
		slot: 'slide',
		source: content['Jiu Feng Smuggler Pack'],
		cost: 9e3,
		stats: {
			accuracy: 8,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'Crosskill Chunky Compact Pistol'
			]
		}
	},
	'Crosskill Platinum Bull Slide': {
		name: 'Crosskill Platinum Bull Slide',
		image: 'wpn_fps_pis_m1911_b_xxx__',
		slot: 'slide',
		source: content['Jiu Feng Smuggler Pack'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Crosskill Chunky Compact Pistol'
			]
		}
	},
	'Long Slide (Chimano Custom)': {
		name: 'Long Slide (Chimano Custom)',
		image: 'wpn_fps_pis_g22c_b_long',
		slot: 'slide',
		source: source.Community,
		cost: 36e3,
		stats: {
			damage: 1,
			accuracy: -4,
			stability: 4,
			threat: 2
		},
		compatibleWeapons: {
			pistol: [
				'Chimano Custom Pistol'
			]
		}
	},
	'Precision Barrel (Broomstick)': {
		name: 'Precision Barrel (Broomstick)',
		image: 'wpn_fps_pis_c96_b_long',
		slot: 'slide',
		source: content['Gage Historical Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Wind of Change'
		},
		stats: {
			totalAmmo: -45,
			damage: 110,
			accuracy: -8,
			stability: -8,
			concealment: -3
		},
		compatibleWeapons: {
			pistol: [
				'Broomstick Pistol'
			]
		}
	},
	'Striking Slide': {
		name: 'Striking Slide',
		image: 'wpn_fps_pis_g26_b_custom',
		slot: 'slide',
		source: source.Community,
		cost: 28e3,
		stats: {
			damage: 1,
			accuracy: 4,
			stability: -8,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Chimano Compact Pistol'
			]
		}
	},
	'Milled Slide': {
		name: 'Milled Slide',
		image: 'wpn_fps_pis_shrew_sl_milled',
		slot: 'slide',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			stability: 4
		},
		compatibleWeapons: {
			pistol: [
				'Crosskill Guard Pistol'
			]
		}
	},
	'Custom Slide': {
		name: 'Custom Slide',
		image: 'wpn_fps_pis_hs2000_sl_custom',
		slot: 'slide',
		source: content['The Bomb Heists'],
		cost: 28e3,
		acquisition: {
			achievement: 'Done in 60 Seconds' // also from drops
		},
		stats: {
			damage: 2,
			stability: 4,
			threat: 2
		},
		compatibleWeapons: {
			pistol: [
				'LEO Pistol'
			]
		}
	},
	'Long Slide (LEO)': {
		name: 'Long Slide (LEO)',
		image: 'wpn_fps_pis_hs2000_sl_long',
		slot: 'slide',
		source: content['The Bomb Heists'],
		cost: 44e3,
		acquisition: {
			achievement: 'I\'ve Got the Power' // also from drops
		},
		stats: {
			damage: 1,
			accuracy: 8,
			stability: 4,
			concealment: -3
		},
		compatibleWeapons: {
			pistol: [
				'LEO Pistol'
			]
		}
	},
	'Precision Barrel (Peacemaker)': {
		name: 'Precision Barrel (Peacemaker)',
		image: 'wpn_fps_pis_peacemaker_b_long',
		slot: 'slide',
		source: content['The Butcher\'s Western Pack'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'Peacemaker .45 Revolver'
			]
		}
	},
	'Shootout Barrel': {
		name: 'Shootout Barrel',
		image: 'wpn_fps_pis_peacemaker_b_short',
		slot: 'slide',
		source: content['The Butcher\'s Western Pack'],
		cost: 9e3,
		stats: {
			accuracy: -4,
			concealment: 2
		},
		compatibleWeapons: {
			pistol: [
				'Peacemaker .45 Revolver'
			]
		}
	},
	'Long Barrel': {
		name: 'Long Barrel',
		image: 'wpn_fps_pis_deagle_b_long',
		slot: 'slide',
		source: source['Base Game'],
		cost: 53e3,
		stats: {
			damage: 2,
			accuracy: 8,
			concealment: -3
		},
		compatibleWeapons: {
			pistol: [
				'Deagle Pistol'
			]
		},
		incompatibleSlot: [] // some barrel extenstions
	},
	'Custom Milled Barrel': {
		name: 'Custom Milled Barrel',
		image: 'wpn_fps_pis_deagle_b_modern',
		slot: 'slide',
		source: source['Base Game'],
		cost: 53e3,
		acquisition: {
			coins: 6
		},
		stats: {},
		compatibleWeapons: {
			pistol: [
				'Deagle Pistol'
			]
		},
		incompatibleSlot: [] // suppressors
	}
}

export default slide