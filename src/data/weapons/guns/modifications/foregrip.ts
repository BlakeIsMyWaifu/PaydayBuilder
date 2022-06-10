import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { CompatibleWeapons, ModificationList } from '../weaponTypes'

const AKRifles: CompatibleWeapons = {
	assaultRifle: [
		'AK Rifle',
		'AK.762',
		'Golden AK.762 Rifle'
	]
}

export type ForegripModificationsList =
	// AK Rifle, AK.762, Golden AK.762
	'Railed Wooden Grip' |
	'The Tactical Russian Handguard' |
	'Battleproven Handguard' |
	'Lightweight Rail' |
	'Crabs Rail' |
	'Keymod Rail' |

	// Commando 553
	'Enhanced Foregrip' |
	'Railed Foregrip (Commando)' |

	// Eagle Heavy
	'Rail Extension' |

	// CAR-4
	'Aftermarket Special Handguard' |
	'Competition Foregrip' |
	'Gazelle Rail' |
	'OVAL Foregrip' |
	'E.M.O. Foregrip' |

	// Cavity 9mm
	'Appalachian Foregrip' |
	'Delabarre Foregrip' |
	'Tooth Fairy Suppressor' |

	// JP36
	'Compact Foregrip' |
	'Polizei Special Foregrip' |
	'JP36 Long Foregrip' |

	// Queen's Wrath
	'Versatile Foregrip' |

	// Galant
	'Custom Foregrip' |

	// AK5
	'Karbin Ceres Handguard' |
	'Belgian Heat Handguard' |

	// AMR-16
	'Tactical Handguard' |
	'Blast From The Past Handguard' |
	'Long Ergo Foregrip' |

	// Gewehr 3
	'Precision Foregrip' |
	'Tactical Foregrip (Gewehr)' |
	'Wooden Foregrip' |
	'Plastic Foregrip' |

	// Reinfeld 880
	'Zombie Hunter Pump' |

	// IZHMA 12G
	'The Tactical Russian Rail' |
	'Hollow Handle' |

	// Grimm 12G, Brothers Grimm 12G
	'Little Brother Foregrip' |

	// Grom
	'Lightweight Foregrip' |

	// RPK
	'Tactical Foregrip (RPK)' |

	//KSP
	'Railed Foregrip (KSP)' |

	// Brenner 21
	'Short Foregrip (Brenner)' |

	// Compact-5
	'Sehr Kurze Barrel' |
	'Polizei Tactical Barrel' |
	'The Ninja Barrel' |
	'Enlightened Foregrip' |

	// Chicago Typewriter
	'Discrete Foregrip' |

	// Para
	'Railed Handguard' |
	'Aftermarket Shorty' |

	// Signature
	'Short Foregrip (Signature)' |

	// Krinkov
	'Moscow Special Rail' |
	'Aluminum Foregrip' |

	// Uzi
	'Tactical Foregrip (Uzi)' |

	// SG Versteckt 51D
	'Schatten Foregrip' |

	// M60
	'Modernized Foregrip' |
	'Tactical Foregrip (M60)' |
	'Tropical Foregrip'

const foregrip: ModificationList<ForegripModificationsList> = {
	'Railed Wooden Grip': {
		name: 'Railed Wooden Grip',
		image: 'wpn_upg_ak_fg_combo2',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			accuracy: 4,
			stability: 4
		},
		compatibleWeapons: AKRifles
	},
	'The Tactical Russian Handguard': {
		name: 'The Tactical Russian Handguard',
		image: 'wpn_upg_ak_fg_combo3',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: source['Base Game'],
		cost: 36e3,
		stats: {
			accuracy: 4,
			stability: 8,
			concealment: -1
		},
		compatibleWeapons: AKRifles
	},
	'Battleproven Handguard': {
		name: 'Battleproven Handguard',
		image: 'wpn_fps_upg_ak_fg_tapco',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Red Spider'
		},
		stats: {
			accuracy: 4,
			concealment: 3
		},
		compatibleWeapons: AKRifles
	},
	'Lightweight Rail': {
		name: 'Lightweight Rail',
		image: 'wpn_fps_upg_fg_midwest',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Purple Snake'
		},
		stats: {
			accuracy: 4,
			stability: 12,
			concealment: -2
		},
		compatibleWeapons: AKRifles
	},
	'Crabs Rail': {
		name: 'Crabs Rail',
		image: 'wpn_fps_upg_ak_fg_krebs',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'The Collector'
		},
		stats: {
			accuracy: 8,
			concealment: 3
		},
		compatibleWeapons: AKRifles
	},
	'Keymod Rail': {
		name: 'Keymod Rail',
		image: 'wpn_fps_upg_ak_fg_trax',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'The Collector'
		},
		stats: {
			accuracy: 8,
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: AKRifles
	},
	'Enhanced Foregrip': {
		name: 'Enhanced Foregrip',
		image: 'wpn_fps_ass_s552_fg_standard_green',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['Armored Transport'],
		cost: 10800,
		stats: {
			accuracy: 4,
			concealment: -4
		},
		compatibleWeapons: {
			assaultRifle: [
				'Commando 553 Rifle'
			]
		}
	},
	'Railed Foregrip (Commando)': {
		name: 'Railed Foregrip (Commando)',
		image: 'wpn_fps_ass_s552_fg_railed',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['Armored Transport'],
		cost: 63600,
		stats: {
			stability: 20,
			concealment: -2
		},
		compatibleWeapons: {
			assaultRifle: [
				'Commando 553 Rifle'
			]
		}
	},
	'Rail Extension': {
		name: 'Rail Extension',
		image: 'wpn_fps_ass_scar_fg_railext',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['Gage Weapon Pack #01'],
		cost: 39200,
		stats: {
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: {
			assaultRifle: [
				'Eagle Heavy Rifle'
			]
		}
	},
	'Aftermarket Special Handguard': {
		name: 'Aftermarket Special Handguard',
		image: 'wpn_fps_m4_uupg_fg_lr300',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: source['Base Game'],
		cost: 36e3,
		stats: {
			stability: 4,
			concealment: 1
		},
		compatibleWeapons: {
			assaultRifle: [
				'CAR-4 Rifle'
			]
		}
	},
	'Competition Foregrip': {
		name: 'Competition Foregrip',
		image: 'wpn_fps_upg_fg_jp',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Purple Snake'
		},
		stats: {
			damage: 1,
			accuracy: 8,
			stability: 12,
			concealment: 2
		},
		compatibleWeapons: {
			assaultRifle: [
				'CAR-4 Rifle'
			]
		}
	},
	'Gazelle Rail': {
		name: 'Gazelle Rail',
		image: 'wpn_fps_upg_fg_smr',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Red Spider'
		},
		stats: {
			damage: 2,
			accuracy: -4,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: {
			assaultRifle: [
				'CAR-4 Rifle'
			]
		}
	},
	'OVAL Foregrip': {
		name: 'OVAL Foregrip',
		image: 'wpn_fps_upg_ass_m4_fg_lvoa',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'The Wolf Lures You to Your Grave'
		},
		stats: {
			damage: 2,
			accuracy: -8,
			stability: 16
		},
		compatibleWeapons: {
			assaultRifle: [
				'CAR-4 Rifle'
			]
		}
	},
	'E.M.O. Foregrip': {
		name: 'E.M.O. Foregrip',
		image: 'wpn_fps_upg_ass_m4_fg_moe',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'The Wolf Lures You to Your Grave'
		},
		stats: {
			damage: 1,
			accuracy: 4,
			stability: 8,
			concealment: 2
		},
		compatibleWeapons: {
			assaultRifle: [
				'CAR-4 Rifle'
			]
		}
	},
	'Appalachian Foregrip': {
		name: 'Appalachian Foregrip',
		image: 'wpn_fps_ass_sub2000_fg_gen2',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['The Golden Grin Casino Heist'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			stability: 16,
			concealment: 3
		},
		compatibleWeapons: {
			assaultRifle: [
				'Cavity 9mm'
			]
		}
	},
	'Delabarre Foregrip': {
		name: 'Delabarre Foregrip',
		image: 'wpn_fps_ass_sub2000_fg_railed',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['The Golden Grin Casino Heist'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			assaultRifle: [
				'Cavity 9mm'
			]
		}
	},
	'Tooth Fairy Suppressor': {
		name: 'Tooth Fairy Suppressor',
		image: 'wpn_fps_ass_sub2000_fg_suppressed',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['The Golden Grin Casino Heist'],
		cost: 36e3,
		acquisition: {
			bonus: 1
		},
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -1,
			accuracy: 4,
			stability: -8,
			concealment: -2,
			threat: -23
		},
		compatibleWeapons: {
			assaultRifle: [
				'Cavity 9mm'
			]
		}
	},
	'Compact Foregrip': {
		name: 'Compact Foregrip',
		image: 'wpn_fps_ass_g36_fg_c',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: source['Base Game'],
		cost: 28e3,
		stats: {
			stability: -4,
			concealment: 2
		},
		compatibleWeapons: {
			assaultRifle: [
				'JP36 Rifle'
			]
		}
	},
	'Polizei Special Foregrip': {
		name: 'Polizei Special Foregrip',
		image: 'wpn_fps_ass_g36_fg_ksk',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: source['Base Game'],
		cost: 36e3,
		stats: {
			accuracy: 4,
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			assaultRifle: [
				'JP36 Rifle'
			]
		}
	},
	'JP36 Long Foregrip': {
		name: 'JP36 Long Foregrip',
		image: 'wpn_fps_upg_g36_fg_long',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['Gage Spec Ops Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		stats: {
			accuracy: 8,
			stability: 4,
			concealment: -3
		},
		compatibleWeapons: {
			assaultRifle: [
				'JP36 Rifle'
			]
		}
	},
	'Versatile Foregrip': {
		name: 'Versatile Foregrip',
		image: 'wpn_fps_ass_l85a2_fg_short',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['Clover Character Pack'],
		cost: 9e3,
		stats: {
			stability: 4,
			concealment: 1
		},
		compatibleWeapons: {
			assaultRifle: [
				'Queen\'s Wrath Rifle'
			]
		}
	},
	'Custom Foregrip': {
		name: 'Custom Foregrip',
		image: 'wpn_fps_ass_ching_fg_railed',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['WW2 Weapon Pack'],
		cost: 9e3,
		stats: {
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: {
			assaultRifle: [
				'Galant Rifle'
			]
		}
	},
	'Karbin Ceres Handguard': {
		name: 'Karbin Ceres Handguard',
		image: 'wpn_fps_ass_ak5_fg_ak5c',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: source['Base Game'],
		cost: 53e3,
		stats: {
			damage: 1,
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			assaultRifle: [
				'AK5 Rifle'
			]
		}
	},
	'Belgian Heat Handguard': {
		name: 'Belgian Heat Handguard',
		image: 'wpn_fps_ass_ak5_fg_fnc',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: source['Base Game'],
		cost: 80e3,
		stats: {
			stability: -4,
			concealment: 1
		},
		compatibleWeapons: {
			assaultRifle: [
				'AK5 Rifle'
			]
		}
	},
	'Tactical Handguard': {
		name: 'Tactical Handguard',
		image: 'wpn_fps_m16_fg_railed',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: source['Base Game'],
		cost: 53e3,
		stats: {
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			assaultRifle: [
				'AMR-16 Rifle'
			]
		}
	},
	'Blast From The Past Handguard': {
		name: 'Blast From The Past Handguard',
		image: 'wpn_fps_m16_fg_vietnam',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: source['Base Game'],
		cost: 80e3,
		stats: {
			stability: 4,
			concealment: 2
		},
		compatibleWeapons: {
			assaultRifle: [
				'AMR-16 Rifle'
			]
		}
	},
	'Long Ergo Foregrip': {
		name: 'Long Ergo Foregrip',
		image: 'wpn_fps_upg_ass_m16_fg_stag',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'OVE SAW 72000'
		},
		stats: {
			stability: 8,
			concealment: -3
		},
		compatibleWeapons: {
			assaultRifle: [
				'AMR-16 Rifle'
			]
		}
	},
	'Precision Foregrip': {
		name: 'Precision Foregrip',
		image: 'wpn_fps_ass_g3_fg_psg',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['Gage Assault Pack'],
		cost: 14e3,
		acquisition: {
			achievement: 'Precision Aiming'
		},
		stats: {
			accuracy: 4,
			stability: -4,
			concealment: -1
		},
		compatibleWeapons: {
			assaultRifle: [
				'Gewehr 3 Rifle'
			]
		}
	},
	'Tactical Foregrip (Gewehr)': {
		name: 'Tactical Foregrip (Gewehr)',
		image: 'wpn_fps_ass_g3_fg_railed',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['Gage Assault Pack'],
		cost: 14e3,
		acquisition: {
			achievement: 'Unusual Suspects'
		},
		stats: {
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			assaultRifle: [
				'Gewehr 3 Rifle'
			]
		}
	},
	'Wooden Foregrip': {
		name: 'Wooden Foregrip',
		image: 'wpn_fps_ass_g3_fg_retro',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['Gage Assault Pack'],
		cost: 14e3,
		acquisition: {
			achievement: 'Not Today'
		},
		stats: {
			accuracy: -4,
			stability: 12,
			concealment: 2
		},
		compatibleWeapons: {
			assaultRifle: [
				'Gewehr 3 Rifle'
			]
		}
	},
	'Plastic Foregrip': {
		name: 'Plastic Foregrip',
		image: 'wpn_fps_ass_g3_fg_retro_plastic',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['Gage Assault Pack'],
		cost: 14e3,
		acquisition: {
			achievement: 'So Many Choices'
		},
		stats: {
			accuracy: -4,
			concealment: 4
		},
		compatibleWeapons: {
			assaultRifle: [
				'Gewehr 3 Rifle'
			]
		}
	},
	'Zombie Hunter Pump': {
		name: 'Zombie Hunter Pump',
		image: 'wpn_fps_shot_r870_fg_wood',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: source['Base Game'],
		cost: 14e3,
		stats: {
			stability: 4
		},
		compatibleWeapons: {
			shotgun: [
				'Reinfeld 880 Shotgun'
			]
		}
	},
	'The Tactical Russian Rail': {
		name: 'The Tactical Russian Rail',
		image: 'wpn_upg_saiga_fg_lowerrail',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: source['Base Game'],
		cost: 36e3,
		stats: {
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			shotgun: [
				'IZHMA 12G Shotgun'
			]
		}
	},
	'Hollow Handle': {
		name: 'Hollow Handle',
		image: 'wpn_fps_sho_saiga_fg_holy',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['Gage Spec Ops Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		stats: {
			concealment: 4
		},
		compatibleWeapons: {
			shotgun: [
				'IZHMA 12G Shotgun'
			]
		}
	},
	'Little Brother Foregrip': {
		name: 'Little Brother Foregrip',
		image: 'wpn_fps_sho_basset_fg_short',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: source['Base Game'],
		cost: 10800,
		stats: {
			stability: -12,
			concealment: 3
		},
		compatibleWeapons: {
			shotgun: [
				'Grimm 12G Shotgun'
			],
			akimboShotgun: [
				'Brothers Grimm 12G Shotguns'
			]
		}
	},
	'Lightweight Foregrip': {
		name: 'Lightweight Foregrip',
		image: 'wpn_fps_snp_siltstone_fg_polymer',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['Gage Russian Weapon Pack'],
		cost: 9e3,
		stats: {
			stability: -8,
			concealment: 3
		},
		compatibleWeapons: {
			sniper: [
				'Grom Sniper Rifle'
			]
		}
	},
	'Tactical Foregrip (RPK)': {
		name: 'Tactical Foregrip (RPK)',
		image: 'wpn_fps_lmg_rpk_fg_standard',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['Gage Weapon Pack #02'],
		cost: 64800,
		stats: {
			damage: 1,
			accuracy: -4,
			stability: -4,
			concealment: 1
		},
		compatibleWeapons: {
			lightMachineGun: [
				'RPK Light Machine Gun'
			]
		}
	},
	'Railed Foregrip (KSP)': {
		name: 'Railed Foregrip (KSP)',
		image: 'wpn_fps_lmg_m249_fg_mk46',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['Gage Weapon Pack #02'],
		cost: 79200,
		stats: {
			damage: 2,
			stability: -8,
			concealment: -1
		},
		compatibleWeapons: {
			lightMachineGun: [
				'KSP Light Machine Gun'
			]
		}
	},
	'Short Foregrip (Brenner)': {
		name: 'Short Foregrip (Brenner)',
		image: 'wpn_fps_lmg_hk21_fg_short',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['Gage Weapon Pack #02'],
		cost: 79200,
		stats: {
			damage: 1,
			accuracy: -4,
			concealment: 3
		},
		compatibleWeapons: {
			lightMachineGun: [
				'Brenner-21 Light Machine Gun'
			]
		},
		incompatibleSlot: ['bipod']
	},
	'Sehr Kurze Barrel': {
		name: 'Sehr Kurze Barrel',
		image: 'wpn_fps_smg_mp5_fg_m5k',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: source['Base Game'],
		cost: 28e3,
		stats: {
			stability: -12,
			concealment: 3
		},
		compatibleWeapons: {
			submachineGun: [
				'Compact-5 Submachine Gun'
			]
		}
	},
	'Polizei Tactical Barrel': {
		name: 'Polizei Tactical Barrel',
		image: 'wpn_fps_smg_mp5_fg_mp5a5',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: source['Base Game'],
		cost: 36e3,
		stats: {
			stability: 8,
			concealment: -3
		},
		compatibleWeapons: {
			submachineGun: [
				'Compact-5 Submachine Gun'
			]
		}
	},
	'The Ninja Barrel': {
		name: 'The Ninja Barrel',
		image: 'wpn_fps_smg_mp5_fg_mp5sd',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: source['Base Game'],
		cost: 80e3,
		stats: {
			damage: -4,
			stability: 12,
			concealment: 1,
			threat: -24
		},
		compatibleWeapons: {
			submachineGun: [
				'Compact-5 Submachine Gun'
			]
		},
		incompatibleSlot: ['barrelExt']
	},
	'Enlightened Foregrip': {
		name: 'Enlightened Foregrip',
		image: 'wpn_fps_smg_mp5_fg_flash',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['Gage Spec Ops Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		specialEffect: ['Flashlight'],
		stats: {
			accuracy: 4,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'Compact-5 Submachine Gun'
			]
		}
	},
	'Discrete Foregrip': {
		name: 'Discrete Foregrip',
		image: 'wpn_fps_smg_thompson_foregrip_discrete',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: source.Community,
		cost: 14e3,
		stats: {
			stability: -4,
			concealment: 1
		},
		compatibleWeapons: {
			submachineGun: [
				'Chicago Typewriter Submachine Gun'
			]
		}
	},
	'Railed Handguard': {
		name: 'Railed Handguard',
		image: 'wpn_fps_smg_olympic_fg_railed',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: source['Base Game'],
		cost: 28e3,
		stats: {
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: {
			submachineGun: [
				'Para Submachine Gun'
			]
		}
	},
	'Aftermarket Shorty': {
		name: 'Aftermarket Shorty',
		image: 'wpn_fps_upg_smg_olympic_fg_lr300',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'The Wolf Lures You to Your Grave'
		},
		stats: {
			stability: 8
		},
		compatibleWeapons: {
			submachineGun: [
				'Para Submachine Gun'
			]
		}
	},
	'Short Foregrip (Signature)': {
		name: 'Short Foregrip (Signature)',
		image: 'wpn_fps_smg_shepheard_body_short',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			accuracy: -8,
			concealment: 2
		},
		compatibleWeapons: {
			submachineGun: [
				'Signature Submachine Gun'
			]
		}
	},
	'Moscow Special Rail': {
		name: 'Moscow Special Rail',
		image: 'wpn_fps_smg_akmsu_fg_rail',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: source['Base Game'],
		cost: 36e3,
		stats: {
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'Krinkov Submachine Gun'
			]
		}
	},
	'Aluminum Foregrip': {
		name: 'Aluminum Foregrip',
		image: 'wpn_fps_upg_ak_fg_zenit',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Hey Mr. DJ'
		},
		stats: {
			stability: 4
		},
		compatibleWeapons: {
			submachineGun: [
				'Krinkov Submachine Gun'
			]
		}
	},
	'Tactical Foregrip (Uzi)': {
		name: 'Tactical Foregrip (Uzi)',
		image: 'wpn_fps_smg_uzi_fg_rail',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['Hotline Miami'],
		cost: 9e3,
		acquisition: {
			achievement: 'Walk Faster'
		},
		stats: {
			accuracy: 4,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'Uzi Submachine Gun'
			]
		}
	},
	'Schatten Foregrip': {
		name: 'Schatten Foregrip',
		image: 'wpn_fps_lmg_hk51b_fg_railed',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['McShay Weapon Pack'],
		cost: 44e3,
		stats: {
			stability: 8,
			concealment: -1
		},
		compatibleWeapons: {
			lightMachineGun: [
				'SG Versteckt 51D'
			]
		}
	},
	'Modernized Foregrip': {
		name: 'Modernized Foregrip',
		image: 'wpn_fps_lmg_m60_fg_keymod',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['Fugitive Weapon Pack'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			stability: -8
		},
		compatibleWeapons: {
			lightMachineGun: [
				'M60 Light Machine Gun'
			]
		}
	},
	'Tactical Foregrip (M60)': {
		name: 'Tactical Foregrip (M60)',
		image: 'wpn_fps_lmg_m60_fg_tactical',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['Fugitive Weapon Pack'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			stability: -8
		},
		compatibleWeapons: {
			lightMachineGun: [
				'M60 Light Machine Gun'
			]
		}
	},
	'Tropical Foregrip': {
		name: 'Tropical Foregrip',
		image: 'wpn_fps_lmg_m60_fg_tropical',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['Fugitive Weapon Pack'],
		cost: 9e3,
		stats: {
			accuracy: -4,
			stability: 8,
			threat: 9
		},
		compatibleWeapons: {
			lightMachineGun: [
				'M60 Light Machine Gun'
			]
		}
	}
}

export default foregrip