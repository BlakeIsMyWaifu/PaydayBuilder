import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { CompatibleWeapons, ModificationList } from '../weaponTypes'

const AKRifles: CompatibleWeapons = {
	assaultRifle: [
		'AK Rifle',
		'AK.762',
		'Golden AK.762 Rifle',
		'AK17 Rifle'
	],
	submachineGun: [
		'Krinkov Submachine Gun'
	]
}

export type MagazineModificationsList =
	// AK Rifles
	'AK Quadstacked Mag' |
	'Low Drag Magazine' |
	'Speed Pull Magazine' |

	// AMCAR, AMR-16, Para
	'Milspec Mag.' |

	// Random Guns One
	'Vintage Mag.' |
	'Tactical Mag.' |
	'CAR Quadstacked Mag' |
	'Expert Mag' |
	'L5 Magazine' |

	// Falcon
	'Extended Magazine (Falcon)' |

	// Reinfeld 880
	'Extended Mag. (Reinfeld 880)' |

	// Grimm 12G, Brothers Grimm 12G, IZHMA 12G
	'Big Brother Magazine' |

	// Steakout 12G
	'Drum Mag' |

	// OVE9000
	'Durable Blade' |
	'Sharp Blade' |

	// Flamethrower Mk.1
	'Rare' |
	'Well Done' |

	// Interceptor .45
	'Extended Mag. (Interceptor)' |
	'I want more Magazine!' |

	// STRYK 18c, Chimano 88, Chimano Custom, Chimano Compact
	'Extended Mag. (Chimano)' |

	// Signature .40
	'Extended Mag. (Signature .40)' |

	// Crosskill
	'12rnd Mag.' |
	'Magazine with Ameritude!' |

	// Bernetti 9
	'Extended Mag. (Bernetti 9)' |

	// Crosskill Chunky Compact
	'Crosskill Long Mag' |

	// White Streak
	'Extended Magazine (White Streak)' |

	// Broomstick
	'High Capacity Mag' |

	// 5/7 AP
	'Extended Magazine (5/7 AP)' |

	// Contractor
	'Extended Magazine (Contractor)' |

	// Chimano Compact
	'Striking Mag' |

	// Crosskill Guard
	'Extended Mag (Crosskill Guard)' |

	// LEO
	'Extended Mag (LEO)' |

	// Bernetti Auto
	'Extended Magazine (Bernetti Auto)' |

	// Igor Automatik
	'Extended Magazine (Igor)' |

	// HOLT 9mm
	'Extended Magazine (HOLT)' |

	// Deagle
	'Extended Mag. (Deagle)' |

	// Swedish K
	'Extended Mag. (Swedish)' |

	// SpecOps
	'Extended Mag. (SpecOps)' |

	// Mark 10
	'Extended Mag. (Mark 10)' |

	// Compact-5
	'Straight Magazine' |

	// Cobra
	'Extended Mag (Cobra)' |

	// CMP
	'Extended Mag. (CMP)' |

	// Signature
	'Extended Magazine (Signature)' |

	// Jackal
	'Extended Magazine (Jackal)' |
	'Short Magazine (Jackal)' |

	// Blaster 9mm
	'Extended Mag (Blaster)' |

	// Patchett L2A1
	'Extended Mag (Patchett)' |
	'Short Mag (Patchett)' |

	// Locomotive 12G
	'Extended Mag. (Locomotive)' |

	// MA-17 Flamethrower
	'High Temperature Mixture' |
	'Low Temperature Mixture' |

	// Pronghorn
	'Standoff Extended Magazine' |

	// Wasp-DS
	'Celerity X9 Magazine' |

	// Gecko M2
	'Stack S3 Magazine' |

	// Káng Arms Model 54
	'KA54 Extended Magazine' |

	// KETCHNOV BYK-1
	'K-B1 Speedmag' |

	// Káng Arms X1
	'KA-ZDM2 Extended Magazine' |

	// Miyaka 10 Special
	'MS10 Speedmag'

const magazine: ModificationList<MagazineModificationsList> = {
	'AK Quadstacked Mag': {
		name: 'AK Quadstacked Mag',
		image: 'wpn_fps_upg_ak_m_quad',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Blue Eagle'
		},
		stats: {
			magazine: 30,
			accuracy: -4,
			stability: 4,
			concealment: -3
		},
		compatibleWeapons: AKRifles
	},
	'Low Drag Magazine': {
		name: 'Low Drag Magazine',
		image: 'wpn_fps_upg_ak_m_uspalm',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Here Comes the Pain Train'
		},
		stats: {
			magazine: 4,
			stability: 4,
			concealment: 1
		},
		compatibleWeapons: AKRifles
	},
	'Speed Pull Magazine': {
		name: 'Speed Pull Magazine',
		/*
			wpn_fps_ass_g36_m_quick (JP36)
			wpn_fps_ass_aug_m_quick (UAR)
			wpn_fps_upg_ak_m_quick (AKs)
			wpn_fps_m4_upg_m_quick (CARs)
			wpn_fps_smg_sr2_m_quick (Heather)
			wpn_fps_smg_mac10_m_quick (Mark 10)
			wpn_fps_smg_p90_m_strap (Kobus 90)
		*/
		image: 'wpn_fps_upg_ak_m_quick',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Gage Spec Ops Pack'],
		cost: 14e3,
		acquisition: {
			infinite: true
		},
		stats: {
			reload: -1.9 // Different for different guns?
		},
		compatibleWeapons: {
			assaultRifle: [
				'JP36 Rifle',
				'UAR Rifle',
				'AK Rifle',
				'AK.762',
				'Golden AK.762 Rifle',
				'AK17 Rifle',
				'CAR-4 Rifle',
				'AMCAR Rifle',
				'AMR-16 Rifle',
				'AK5 Rifle',
				'Queen\'s Wrath Rifle',
				'Union 5.56 Rifle'
			],
			submachineGun: [
				'Krinkov Submachine Gun',
				'CR 805B Submachine Gun',
				'Para Submachine Gun',
				'Heather Submachine Gun',
				'Mark 10 Submachine Gun',
				'Kobus 90 Submachine Gun'
			]
		}
	},
	'Milspec Mag.': {
		name: 'Milspec Mag.',
		image: 'wpn_fps_m4_uupg_m_std',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			magazine: 8,
			concealment: -1
		},
		compatibleWeapons: {
			assaultRifle: [
				'AMCAR Rifle',
				'AMR-16 Rifle'
			],
			submachineGun: [
				'Para Submachine Gun'
			]
		}
	},
	'Vintage Mag.': {
		name: 'Vintage Mag.',
		image: 'wpn_fps_upg_m4_m_straight',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 14e3,
		stats: {
			magazine: -8,
			concealment: 1
		},
		compatibleWeapons: {
			assaultRifle: [
				'CAR-4 Rifle',
				'AK5 Rifle',
				'Queen\'s Wrath Rifle'
			],
			submachineGun: [
				'CR 805B Submachine Gun'
			]
		}
	},
	'Tactical Mag.': {
		name: 'Tactical Mag.',
		image: 'wpn_fps_upg_m4_m_pmag',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			magazine: 4
		},
		compatibleWeapons: {
			assaultRifle: [
				'CAR-4 Rifle',
				'AK5 Rifle',
				'AMR-16 Rifle',
				'Queen\'s Wrath Rifle'
			],
			submachineGun: [
				'Para Submachine Gun',
				'CR 805B Submachine Gun'
			]
		}
	},
	'CAR Quadstacked Mag': {
		name: 'CAR Quadstacked Mag',
		image: 'wpn_fps_upg_m4_m_quad',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Purple Snake'
		},
		stats: {
			magazine: 30,
			accuracy: -4,
			stability: 4,
			concealment: -3
		},
		compatibleWeapons: {
			assaultRifle: [
				'AMCAR Rifle',
				'CAR-4 Rifle',
				'AK5 Rifle',
				'AMR-16 Rifle',
				'Queen\'s Wrath Rifle'
			],
			submachineGun: [
				'Para Submachine Gun',
				'CR 805B Submachine Gun'
			]
		}
	},
	'Expert Mag': {
		name: 'Expert Mag',
		image: 'wpn_fps_ass_l85a2_m_emag',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Clover Character Pack'],
		cost: 9e3,
		stats: {
			magazine: 4,
			stability: 4
		},
		compatibleWeapons: {
			assaultRifle: [
				'CAR-4 Rifle',
				'AK5 Rifle',
				'AMR-16 Rifle',
				'Queen\'s Wrath Rifle'
			],
			submachineGun: [
				'Para Submachine Gun',
				'CR 805B Submachine Gun'
			]
		}
	},
	'L5 Magazine': {
		name: 'L5 Magazine',
		image: 'wpn_fps_upg_m4_m_l5',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Private Party'
		},
		stats: {
			magazine: 4,
			stability: 4
		},
		compatibleWeapons: {
			assaultRifle: [
				'AMCAR Rifle',
				'CAR-4 Rifle',
				'AK5 Rifle',
				'AMR-16 Rifle',
				'Queen\'s Wrath Rifle'
			],
			submachineGun: [
				'Para Submachine Gun',
				'CR 805B Submachine Gun'
			]
		}
	},
	'Extended Magazine (Falcon)': {
		name: 'Extended Magazine (Falcon)',
		image: 'wpn_fps_ass_fal_m_01',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['The Big Bank Heist'],
		cost: 11200,
		acquisition: {
			achievement: 'It Takes a Pig to Kill a Pig'
		},
		stats: {
			magazine: 20,
			accuracy: -4,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: {
			assaultRifle: [
				'Falcon Rifle'
			]
		}
	},
	'Extended Mag. (Reinfeld 880)': {
		name: 'Extended Mag. (Reinfeld 880)',
		image: 'wpn_fps_shot_r870_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 44e3,
		stats: {
			magazine: 2,
			concealment: -1
		},
		compatibleWeapons: {
			shotgun: [
				'Reinfeld 880 Shotgun'
			]
		}
	},
	'Big Brother Magazine': {
		name: 'Big Brother Magazine',
		image: 'wpn_fps_sho_basset_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 10800,
		stats: {
			magazine: 8,
			concealment: -2
		},
		compatibleWeapons: {
			shotgun: [
				'Grimm 12G Shotgun',
				'IZHMA 12G Shotgun'
			],
			akimboShotgun: [
				'Brothers Grimm 12G Shotguns'
			]
		}
	},
	'Drum Mag': {
		name: 'Drum Mag',
		image: 'wpn_fps_sho_aa12_mag_drum',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['The Butcher\'s BBQ Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			magazine: 12,
			concealment: -4
		},
		compatibleWeapons: {
			shotgun: [
				'Steakout 12G Shotgun'
			]
		}
	},
	'Durable Blade': {
		name: 'Durable Blade',
		image: 'wpn_fps_saw_m_blade_durable',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['The Butcher Mod Pack 2'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			totalAmmo: 150,
			magazine: 50
		},
		compatibleWeapons: {
			special: [
				'OVE9000 Saw'
			]
		}
	},
	'Sharp Blade': {
		name: 'Sharp Blade',
		image: 'wpn_fps_saw_m_blade_sharp',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
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
	'Rare': {
		name: 'Rare',
		image: 'wpn_fps_fla_mk2_mag_rare',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['The Butcher\'s BBQ Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			totalAmmo: 450,
			damage: -4
		},
		compatibleWeapons: {
			special: [
				'Flamethrower Mk.1'
			]
		}
	},
	'Well Done': {
		name: 'Well Done',
		image: 'wpn_fps_fla_mk2_mag_welldone',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['The Butcher\'s BBQ Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			totalAmmo: -450,
			damage: 7
		},
		compatibleWeapons: {
			special: [
				'Flamethrower Mk.1'
			]
		}
	},
	'Extended Mag. (Interceptor)': {
		name: 'Extended Mag. (Interceptor)',
		image: 'wpn_fps_pis_usp_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source.Community,
		cost: 14e3,
		stats: {
			magazine: 8,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Interceptor .45 Pistol'
			]
		}
	},
	'I want more Magazine!': {
		name: 'I want more Magazine!',
		image: 'wpn_fps_pis_usp_m_big',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Gage Spec Ops Pack'],
		cost: 14e3,
		acquisition: {
			infinite: true
		},
		stats: {
			magazine: 12,
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'Interceptor .45 Pistol'
			]
		}
	},
	'Extended Mag. (Chimano)': {
		name: 'Extended Mag. (Chimano)',
		image: 'wpn_fps_pis_g18c_m_mag_33rnd',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 44e3,
		stats: {
			magazine: 12,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'STRYK 18c Pistol',
				'Chimano 88 Pistol',
				'Chimano Custom Pistol',
				'Chimano Compact Pistol'
			]
		}
	},
	'Extended Mag. (Signature .40)': {
		name: 'Extended Mag. (Signature .40)',
		image: 'wpn_fps_pis_p226_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Gage Weapon Pack #01'],
		cost: 14e3,
		stats: {
			magazine: 8
		},
		compatibleWeapons: {
			pistol: [
				'Signature .40 Pistol'
			]
		}
	},
	'12rnd Mag.': {
		name: '12rnd Mag.',
		image: 'wpn_fps_pis_1911_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			magazine: 6,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Crosskill Pistol'
			]
		}
	},
	'Magazine with Ameritude!': {
		name: 'Magazine with Ameritude!',
		image: 'wpn_fps_pis_1911_m_big',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Gage Spec Ops Pack'],
		cost: 14e3,
		acquisition: {
			infinite: true
		},
		stats: {
			magazine: 12,
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'Crosskill Pistol'
			]
		}
	},
	'Extended Mag. (Bernetti 9)': {
		name: 'Extended Mag. (Bernetti 9)',
		image: 'wpn_fps_pis_beretta_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 14e3,
		stats: {
			magazine: 12,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'Bernetti 9 Pistol'
			]
		}
	},
	'Crosskill Long Mag': {
		name: 'Crosskill Long Mag',
		image: 'wpn_fps_pis_m1911_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Jiu Feng Smuggler Pack'],
		cost: 9e3,
		stats: {
			magazine: 2,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Crosskill Chunky Compact Pistol'
			]
		}
	},
	'Extended Magazine (White Streak)': {
		name: 'Extended Magazine (White Streak)',
		image: 'wpn_fps_pis_pl14_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			magazine: 2,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'White Streak Pistol'
			]
		}
	},
	'High Capacity Mag': {
		name: 'High Capacity Mag',
		image: 'wpn_fps_pis_c96_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Gage Historical Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'So Uncivilized'
		},
		stats: {
			magazine: 10,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'Broomstick Pistol'
			]
		}
	},
	'Extended Magazine (5/7 AP)': {
		name: 'Extended Magazine (5/7 AP)',
		image: 'wpn_fps_pis_lemming_m_ext',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source.Community,
		cost: 9e3,
		stats: {
			magazine: 4
		},
		compatibleWeapons: {
			pistol: [
				'5/7 AP Pistol'
			]
		}
	},
	'Extended Magazine (Contractor)': {
		name: 'Extended Magazine (Contractor)',
		image: 'wpn_fps_pis_packrat_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['John Wick Weapon Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		stats: {
			magazine: 10,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Contractor Pistol'
			]
		}
	},
	'Striking Mag': {
		name: 'Striking Mag',
		image: 'wpn_fps_pis_g26_m_contour',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source.Community,
		cost: 53e3,
		stats: {
			stability: 8,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Chimano Compact Pistol'
			]
		}
	},
	'Extended Mag (Crosskill Guard)': {
		name: 'Extended Mag (Crosskill Guard)',
		image: 'wpn_fps_pis_shrew_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			magazine: 4,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'Crosskill Guard Pistol'
			]
		}
	},
	'Extended Mag (LEO)': {
		name: 'Extended Mag (LEO)',
		image: 'wpn_fps_pis_hs2000_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['The Bomb Heists'],
		cost: 9e3,
		acquisition: {
			achievement: 'Breaking Dead' // also from drops
		},
		stats: {
			magazine: 8
		},
		compatibleWeapons: {
			pistol: [
				'LEO Pistol'
			]
		}
	},
	'Extended Magazine (Bernetti Auto)': {
		name: 'Extended Magazine (Bernetti Auto)',
		image: 'wpn_fps_pis_beer_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Federales Weapon Pack'],
		cost: 21e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			magazine: 6,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Bernetti Auto Pistol'
			]
		}
	},
	'Extended Magazine (Igor)': {
		name: 'Extended Magazine (Igor)',
		image: 'wpn_fps_pis_stech_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Federales Weapon Pack'],
		cost: 36e3,
		stats: {
			magazine: 14,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'Igor Automatik Pistol'
			]
		}
	},
	'Extended Magazine (HOLT)': {
		name: 'Extended Magazine (HOLT)',
		image: 'wpn_fps_pis_holt_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Fugitive Weapon Pack'],
		cost: 14e3,
		stats: {
			magazine: 10,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'HOLT 9mm Pistol'
			]
		}
	},
	'Extended Mag. (Deagle)': {
		name: 'Extended Mag. (Deagle)',
		image: 'wpn_fps_pis_deagle_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 53e3,
		stats: {
			magazine: 6,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'Deagle Pistol'
			]
		}
	},
	'Extended Mag. (Swedish)': {
		name: 'Extended Mag. (Swedish)',
		image: 'wpn_fps_smg_m45_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Armored Transport'],
		cost: 33600,
		stats: {
			magazine: 12,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'Swedish K Submachine Gun'
			]
		}
	},
	'Extended Mag. (SpecOps)': {
		name: 'Extended Mag. (SpecOps)',
		image: 'wpn_fps_smg_mp7_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Gage Weapon Pack #01'],
		cost: 12600,
		stats: {
			magazine: 12,
			concealment: -3
		},
		compatibleWeapons: {
			submachineGun: [
				'SpecOps Submachine Gun'
			]
		}
	},
	'Extended Mag. (Mark 10)': {
		name: 'Extended Mag. (Mark 10)',
		image: 'wpn_fps_smg_mac10_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 14e3,
		stats: {
			magazine: 8,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'Mark 10 Submachine Gun'
			]
		}
	},
	'Straight Magazine': {
		name: 'Straight Magazine',
		image: 'wpn_fps_smg_mp5_m_straight',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['The Butcher Mod Pack 2'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			stability: 8,
			concealment: -1
		},
		compatibleWeapons: {
			submachineGun: [
				'Compact-5 Submachine Gun'
			]
		}
	},
	'Extended Mag (Cobra)': {
		name: 'Extended Mag (Cobra)',
		image: 'wpn_fps_smg_scorpion_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Hotline Miami'],
		cost: 9e3,
		acquisition: {
			achievement: 'Phew!'
		},
		stats: {
			magazine: 20,
			stability: 8,
			concealment: -3
		},
		compatibleWeapons: {
			submachineGun: [
				'Cobra Submachine Gun'
			]
		}
	},
	'Extended Mag. (CMP)': {
		name: 'Extended Mag. (CMP)',
		image: 'wpn_fps_smg_mp9_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 28e3,
		stats: {
			magazine: 12,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'CMP Submachine Gun'
			]
		}
	},
	'Extended Magazine (Signature)': {
		name: 'Extended Magazine (Signature)',
		image: 'wpn_fps_smg_shepheard_mag_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			magazine: 30
		},
		compatibleWeapons: {
			submachineGun: [
				'Signature Submachine Gun'
			]
		}
	},
	'Extended Magazine (Jackal)': {
		name: 'Extended Magazine (Jackal)',
		image: 'wpn_fps_smg_schakal_m_long',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['John Wick Weapon Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		stats: {
			magazine: 20,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'Jackal Submachine Gun'
			]
		}
	},
	'Short Magazine (Jackal)': {
		name: 'Short Magazine (Jackal)',
		image: 'wpn_fps_smg_schakal_m_short',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['John Wick Weapon Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		stats: {
			magazine: -10,
			concealment: 2
		},
		compatibleWeapons: {
			submachineGun: [
				'Jackal Submachine Gun'
			]
		}
	},
	'Extended Mag (Blaster)': {
		name: 'Extended Mag (Blaster)',
		image: 'wpn_fps_smg_tec9_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Hotline Miami'],
		cost: 28e3,
		acquisition: {
			achievement: 'Overdose'
		},
		stats: {
			magazine: 12,
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'Blaster 9mm Submachine Gun'
			]
		}
	},
	'Extended Mag (Patchett)': {
		name: 'Extended Mag (Patchett)',
		image: 'wpn_fps_smg_sterling_m_long',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Gage Historical Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Wind of Change'
		},
		stats: {
			magazine: 10,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'Patchett L2A1 Submachine Gun'
			]
		}
	},
	'Short Mag (Patchett)': {
		name: 'Short Mag (Patchett)',
		image: 'wpn_fps_smg_sterling_m_short',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Gage Historical Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Special Operations Execution'
		},
		stats: {
			magazine: -10,
			concealment: 2
		},
		compatibleWeapons: {
			submachineGun: [
				'Patchett L2A1 Submachine Gun'
			]
		}
	},
	'Extended Mag. (Locomotive)': {
		name: 'Extended Mag. (Locomotive)',
		image: 'wpn_fps_shot_shorty_m_extended_short',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			magazine: 2
		},
		compatibleWeapons: {
			shotgun: [
				'Locomotive 12G Shotgun'
			]
		}
	},
	'High Temperature Mixture': {
		name: 'High Temperature Mixture',
		image: 'wpn_fps_fla_system_m_high',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			totalAmmo: -350,
			damage: 7
		},
		compatibleWeapons: {
			special: [
				'MA-17 Flamethrower'
			]
		}
	},
	'Low Temperature Mixture': {
		name: 'Low Temperature Mixture',
		image: 'wpn_fps_fla_system_m_low',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			totalAmmo: 350,
			damage: -4
		},
		compatibleWeapons: {
			special: [
				'MA-17 Flamethrower'
			]
		}
	},
	'Standoff Extended Magazine': {
		name: 'Standoff Extended Magazine',
		image: 'wpn_fps_snp_scout_m_extended',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['McShay Weapon Pack'],
		cost: 9e3,
		stats: {
			totalAmmo: 2,
			concealment: -1
		},
		compatibleWeapons: {
			sniper: [
				'Pronghorn Sniper Rifle'
			]
		}
	},
	'Celerity X9 Magazine': {
		name: 'Celerity X9 Magazine',
		image: 'wpn_fps_smg_fmg9_m_speed',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Jiu Feng Smuggler Pack 4'],
		cost: 7200,
		stats: {
			reload: -0.7,
			accuracy: 4,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'Wasp-DS SMG'
			]
		}
	},
	'Stack S3 Magazine': {
		name: 'Stack S3 Magazine',
		image: 'wpn_fps_pis_maxim9_m_ext',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Jiu Feng Smuggler Pack 4'],
		cost: 7200,
		stats: {
			magazine: 4,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Gecko M2 Pistol'
			]
		}
	},
	'KA54 Extended Magazine': {
		name: 'KA54 Extended Magazine',
		image: 'KA54_Extended_Magazine',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Jiu Feng Smuggler Pack 3'],
		cost: 9e3,
		stats: {
			magazine: 4,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Káng Arms Model 54'
			]
		}
	},
	'K-B1 Speedmag': {
		name: 'K-B1 Speedmag',
		image: 'K-B1_Speedmag',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Jiu Feng Smuggler Pack 2'],
		cost: 14e3,
		stats: {
			magazine: 10,
			accuracy: -4,
			concealment: -3,
			reload: -1.1
		},
		compatibleWeapons: {
			assaultRifle: [
				'KETCHNOV Byk-1 Assault Rifle'
			]
		}
	},
	'KA-ZDM2 Extended Magazine': {
		name: 'KA-ZDM2 Extended Magazine',
		image: 'KA-ZDM2_Extended_Magazine',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Jiu Feng Smuggler Pack 2'],
		cost: 14e3,
		stats: {
			magazine: 10,
			concealment: -1
		},
		compatibleWeapons: {
			sniper: [
				'Káng Arms X1 Sniper Rifle'
			]
		}
	},
	'MS10 Speedmag': {
		name: 'MS10 Speedmag',
		image: 'MS10_Speedmag',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['Jiu Feng Smuggler Pack 2'],
		cost: 14e3,
		stats: {
			concealment: -1,
			reload: -1
		},
		compatibleWeapons: {
			submachineGun: [
				'Miyaka 10 Special Submachine Gun'
			]
		}
	}
}

export default magazine