import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import akimboShotuns from '../primary/akimboShotuns'
import assaultRifles from '../primary/assaultRifles'
import lightMachineGuns from '../primary/lightMachineGuns'
import primaryShotguns from '../primary/shotgunsPrimary'
import snipers from '../primary/snipers'
import primarySpecials from '../primary/specialsPrimary'
import pistols from '../secondary/pistols'
import secondaryShotguns from '../secondary/shotgunsSecondary'
import secondarySpecials from '../secondary/specialsSecondary'
import submachineGuns from '../secondary/submachineGuns'
import { WeaponModificationList } from '../weaponTypes'

export type BarrelModificationsList =
	// AK Rifle, AK.762, Golden AK.762
	'AK Slavic Dragon Barrel' |
	'Modern Barrel' |
	'DMR Kit (AK)' |

	// CAR-4, AMR-16
	'Long Barrel (CAR)' |
	'Short Barrel (CAR)' |
	'Stealth Barrel' |
	'DMR Kit (CAR)' |

	// UAR
	'Short Barrel (UAR)' |
	'Long Barrel (UAR)' |

	// AK5
	'CQB Barrel (AK5)' |

	// Commando 553
	'Long Barrel (Commando)' |

	// Eagle Heavy
	'Short Barrel (Eagle Heavy)' |
	'Long Barrel (Eagle Heavy)' |

	// Falcon
	'CQB Foregrip (Falcon)' |
	'Retro Foregrip' |
	'Marksman Foregrip' |
	'Wooden Foregrip' |

	// Clarion
	'Long Barrel (Clarion)' |
	'Short Barrel (Clarion)' |
	'Sniper Barrel' |
	'Suppressed Barrel (Clarion)' |

	// Gecko 7.62
	'Fabulous Foregrip' |
	'CQB Foregrip (Gecko)' |
	'Light Foregrip' |
	'Sniper Foregrip' |

	// Gewehr 3
	'Assault Kit' |
	'DMR Kit (Gewehr)' |

	// Queen's Wrath
	'Prodigious Barrel' |
	'Diminutive Barrel' |

	// Lion's Roar
	'CQB Barrel (Lion\'s Roar)' |
	'Precision Barrel' |
	'Silenced Barrel (Lion\'s Roar)' |

	// Valkyria
	'Prototype Barrel (Valkyria)' |

	// Bootleg
	'AML Barrel' |

	// Union 5.56
	'Short Barrel (Union)' |

	// Galant
	'Tanker Barrel' |

	// KETCHNOV Byk-1?

	// Predator 12G
	'Extended Mag' |

	// Joceline O/U 12G
	'Sawed Off Barrel (Joceline)' |

	// IZHMA
	'Short Barrel (IZHMA)' |

	// M1014
	'Short Barrel (M1014)' |
	'Long Barrel (M1014)' |

	// Raven
	'Short Barrel (Raven)' |
	'Long Barrel (Raven)' |

	// Steakout 12G
	'Long Barrel (Steakout)' |
	'Suppressed Barrel (Steakout)' |

	// Reinfeld 88
	'Huntsman Barrel' |
	'Ventilated Barrel' |

	// Mosconi 12G Tactical
	'CE Extender' |
	'CE Muffler' |

	// Akimbo Goliath 12G, Goliath 12G
	'Short Barrel (Goliath)' |
	'Silenced Barrel (Goliath)' |

	// Rattlesnake
	'Long Barrel (Rattlesnake)' |

	// R93
	'Short Barrel (R93)' |
	'Compensated Suppressor' |

	// Thanatos .50 cal
	'Tank Buster Barrel' |
	'CQB Barrel (Thanatos)' |
	'Suppressed Barrel (Thanatos)' |

	// Nagant
	'Short Barrel (Nagant)' |
	'Long Barrel (Nagant)' |
	'Silenced Barrel (Nagant)' |

	// Repeater 1874
	'Long Range Barrel' |
	'Outlaw\'s Silenced Barrel' |

	// Desertfox
	'Long Barrel (Desertfox)' |
	'Silenced Barrel (Desertfox)' |

	// Grom
	'Grievky Compensator' |
	'Tikho Barrel' |

	// R700
	'Short Barrel (R700)' |
	'Medium Barrel (R700)' |

	// Bernetti Rangehitter
	'Deep Range Barrel' |
	'Wind Whistler Barrel' |

	// Káng Arms X1?

	// KSP 58
	'Short Barrel (KSP 58)' |

	// KSP
	'Long Barrel (KSP)' |

	// Brenner 21
	'Long Barrel (Brenner)' |

	// Buzzsaw 42
	'Light Barrel' |
	'Heatsinked Suppressed Barrel (Buzzsaw)' |

	// M60?

	// GL40
	'Pirate Barrel' |

	// Vulcan Minigun
	'Aerial Assault Barrel' |
	'The Stump Barrel' |

	// Piglet
	'Short Barrel (Piglet)' |

	// White Streak
	'Prototype Barrel (White Streak)' |

	// M13 9mm
	'Threaded Barrel (M13)' |

	// Matever .357
	'Pesante Barrel' |
	'Medio Barrel' |
	'Pisccolo Barrel' |

	// Baby Deagle
	'Ported Barrel' |
	'Threaded Barrel (Baby Deagle)' |

	// Bernetti Auto
	'Weller Barrel' |

	// Czech 92
	'Sicario Barrel' |

	// Igor Automatik
	'Tirador Barrel' |

	// Frenchman Model 87
	'Opera Long Barrel' |
	'Napoleon Barrel' |

	// Chicago Typewriter
	'Stubby Barrel' |
	'Long Barrel (Chicago Typewriter)' |

	// Para
	'Medium Barrel (Para)' |

	// Kobus 90
	'Long Barrel (Kobus)' |
	'Civilian Market Barrel' |
	'Mall Ninja Barrel' |

	// Swedish K
	'Grease Barrel' |
	'Swedish Barrel' |

	// Blaster 9mm
	'Short Barrel (Blaster)' |
	'Ghetto Blaster' |

	// Patchett L2A1
	'Long Barrel (Patchett)' |
	'Short Barrel (Patchett)' |
	'Heatsinked Suppressed Barrel (Patchett)' |
	'Suppressed Barrel (Patchett)' |

	// Micro Uzi
	'Custom Barrel' |

	// CR 805B
	'Medium Barrel (CR)' |
	'Short Barrel (CR)' |

	// AK Gen 21
	'MG8 Precision Barrel' |
	'BY90 Wide Suppressor' |

	// Miyaka 10 Special?

	// Claire 12G
	'Sawed Off Barrel (Claire)' |

	// Street Sweeper
	'Long Barrel (Street Sweeper)' |
	'Suppressed Barrel (Street Sweeper)' |

	// GSPS 12G
	'Riot Barrel' |

	// Pistol Crossbow
	'Carbon Limb' |
	'Skeletal Limb' |

	// Arbiter
	'Bombardier Barrel' |
	'Long Barrel (Arbiter)'

const barrel: WeaponModificationList<BarrelModificationsList> = {
	'AK Slavic Dragon Barrel': {
		name: 'AK Slavic Dragon Barrel',
		image: 'wpn_fps_upg_ak_b_draco',
		slot: 'Barrel',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Green Mantis'
		},
		stats: {
			damage: 2,
			accuracy: -8,
			concealment: 1
		},
		compatibleWeapons: [
			assaultRifles['AK Rifle'],
			assaultRifles['AK.762'],
			assaultRifles['Golden AK.762 Rifle']
		]
	},
	'Modern Barrel': {
		name: 'Modern Barrel',
		image: 'wpn_fps_upg_ak_b_ak105',
		slot: 'Barrel',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'The Collector'
		},
		stats: {
			damage: 2,
			concealment: 1
		},
		compatibleWeapons: [
			assaultRifles['AK Rifle'],
			assaultRifles['AK.762'],
			assaultRifles['Golden AK.762 Rifle']
		]
	},
	'DMR Kit (AK)': {
		name: 'DMR Kit (AK)',
		image: 'wpn_fps_upg_ass_ak_b_zastava',
		slot: 'Barrel',
		source: source['Base Game'],
		cost: 9e3,
		acquisition: {
			achievement: 'Here Comes the Pain Train'
		},
		stats: {
			totalAmmo: -27,
			damage: 63,
			accuracy: 8,
			stability: -12,
			concealment: -4
		},
		compatibleWeapons: [
			assaultRifles['AK Rifle'],
			assaultRifles['AK.762'],
			assaultRifles['Golden AK.762 Rifle']
		]
	},
	'Long Barrel (CAR)': {
		name: 'Long Barrel (CAR)',
		image: 'wpn_fps_m4_uupg_b_long',
		slot: 'Barrel',
		source: source['Base Game'],
		cost: 28e3,
		stats: {
			damage: 2,
			accuracy: 4,
			concealment: -2
		},
		compatibleWeapons: [
			assaultRifles['CAR-4 Rifle'],
			assaultRifles['AMR-16 Rifle']
		]
	},
	'Short Barrel (CAR)': {
		name: 'Short Barrel (CAR)',
		image: 'wpn_fps_m4_uupg_b_short',
		slot: 'Barrel',
		source: source['Base Game'],
		cost: 36e3,
		stats: {
			accuracy: -4,
			concealment: 2
		},
		compatibleWeapons: [
			assaultRifles['CAR-4 Rifle']
		]
	},
	'Stealth Barrel': {
		name: 'Stealth Barrel',
		image: 'wpn_fps_m4_uupg_b_sd',
		slot: 'Barrel',
		source: source['Base Game'],
		cost: 44e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -2,
			accuracy: -4,
			stability: 4,
			concealment: 1,
			threat: -16.8
		},
		compatibleWeapons: [
			assaultRifles['CAR-4 Rifle']
		],
		incompatibleSlot: ['Barrel Ext']
	},
	'DMR Kit (CAR)': {
		name: 'DMR Kit (CAR)',
		image: 'wpn_fps_upg_ass_m4_b_beowulf',
		slot: 'Barrel',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Private Party'
		},
		specialEffect: ['Sets ammo pickup to 0.90-1.24, is not affected by skills/perks'],
		stats: {
			totalAmmo: -90,
			damage: 108,
			accuracy: 16,
			stability: -40,
			concealment: -4
		},
		compatibleWeapons: [
			assaultRifles['CAR-4 Rifle'],
			assaultRifles['AMR-16 Rifle']
		]
	},
	'Short Barrel (UAR)': {
		name: 'Short Barrel (UAR)',
		image: 'wpn_fps_aug_b_short',
		slot: 'Barrel',
		source: source['Base Game'],
		cost: 36e3,
		stats: {
			accuracy: -4,
			stability: 8,
			concealment: 2
		},
		compatibleWeapons: [
			assaultRifles['UAR Rifle']
		]
	},
	'Long Barrel (UAR)': {
		name: 'Long Barrel (UAR)',
		image: 'wpn_fps_aug_b_long',
		slot: 'Barrel',
		source: source['Base Game'],
		cost: 53e3,
		stats: {
			damage: 1,
			accuracy: 4,
			stability: 4,
			concealment: -3
		},
		compatibleWeapons: [
			assaultRifles['UAR Rifle']
		]
	},
	'CQB Barrel (AK5)': {
		name: 'CQB Barrel (AK5)',
		image: 'wpn_fps_ass_ak5_b_short',
		slot: 'Barrel',
		source: content['The Butcher Mod Pack 2'],
		cost: 9e3,
		stats: {
			damage: 2,
			accuracy: 4,
			concealment: 2
		},
		compatibleWeapons: [
			assaultRifles['AK5 Rifle']
		]
	},
	'Long Barrel (Commando)': {
		name: 'Long Barrel (Commando)',
		image: 'wpn_fps_ass_s552_b_long',
		slot: 'Barrel',
		source: content['Armored Transport'],
		cost: 52800,
		stats: {
			damage: 1,
			accuracy: 4,
			concealment: -4
		},
		compatibleWeapons: [
			assaultRifles['Commando 553 Rifle']
		]
	},
	'Short Barrel (Eagle Heavy)': {
		name: 'Short Barrel (Eagle Heavy)',
		image: 'wpn_fps_ass_scar_b_short',
		slot: 'Barrel',
		source: content['Gage Weapon Pack #01'],
		cost: 29400,
		stats: {
			damage: 1,
			accuracy: -4,
			concealment: 3,
			threat: 4
		},
		compatibleWeapons: [
			assaultRifles['Eagle Heavy Rifle']
		]
	},
	'Long Barrel (Eagle Heavy)': {
		name: 'Long Barrel (Eagle Heavy)',
		image: 'wpn_fps_ass_scar_b_long',
		slot: 'Barrel',
		source: content['Gage Weapon Pack #01'],
		cost: 39200,
		stats: {
			accuracy: 8,
			concealment: -3
		},
		compatibleWeapons: [
			assaultRifles['Eagle Heavy Rifle']
		]
	},
	'CQB Foregrip (Falcon)': {
		name: 'CQB Foregrip (Falcon)',
		image: 'wpn_fps_ass_fal_fg_01',
		slot: 'Barrel',
		source: content['The Big Bank Heist'],
		cost: 11200,
		acquisition: {
			achievement: 'Entrapment'
		},
		stats: {
			damage: 1,
			accuracy: -4,
			concealment: 6
		},
		compatibleWeapons: [
			assaultRifles['Falcon Rifle']
		]
	},
	'Retro Foregrip': {
		name: 'Retro Foregrip',
		image: 'wpn_fps_ass_fal_fg_03',
		slot: 'Barrel',
		source: content['The Big Bank Heist'],
		cost: 11200,
		acquisition: {
			achievement: 'You Owe Me One'
		},
		stats: {
			damage: 1,
			stability: 8,
			concealment: -1
		},
		compatibleWeapons: [
			assaultRifles['Falcon Rifle']
		]
	},
	'Marksman Foregrip': {
		name: 'Marksman Foregrip',
		image: 'wpn_fps_ass_fal_fg_04',
		slot: 'Barrel',
		source: content['The Big Bank Heist'],
		cost: 11200,
		acquisition: {
			achievement: 'Sweet Sixteen'
		},
		stats: {
			damage: 1,
			accuracy: 4,
			stability: -4,
			concealment: -2
		},
		compatibleWeapons: [
			assaultRifles['Falcon Rifle']
		]
	},
	'Wooden Foregrip': {
		name: 'Wooden Foregrip',
		image: 'wpn_fps_ass_fal_fg_wood',
		slot: 'Barrel',
		source: content['The Big Bank Heist'],
		cost: 11200,
		acquisition: {
			achievement: '12 Angry Minutes'
		},
		stats: {
			accuracy: 8,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: [
			assaultRifles['Falcon Rifle']
		]
	},
	'Long Barrel (Clarion)': {
		name: 'Long Barrel (Clarion)',
		image: 'wpn_fps_ass_famas_b_long',
		slot: 'Barrel',
		source: content['Gage Assault Pack'],
		cost: 14e3,
		acquisition: {
			achievement: 'Unusual Suspects'
		},
		stats: {
			damage: 1,
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: [
			assaultRifles['Clarion Rifle']
		]
	},
	'Short Barrel (Clarion)': {
		name: 'Short Barrel (Clarion)',
		image: 'wpn_fps_ass_famas_b_short',
		slot: 'Barrel',
		source: content['Gage Assault Pack'],
		cost: 14e3,
		acquisition: {
			achievement: 'So Many Choices'
		},
		stats: {
			damage: 3,
			accuracy: -4,
			stability: -4,
			concealment: 2
		},
		compatibleWeapons: [
			assaultRifles['Clarion Rifle']
		]
	},
	'Sniper Barrel': {
		name: 'Sniper Barrel',
		image: 'wpn_fps_ass_famas_b_sniper',
		slot: 'Barrel',
		source: content['Gage Assault Pack'],
		cost: 14e3,
		acquisition: {
			achievement: 'Precision Aiming'
		},
		stats: {
			damage: 1,
			accuracy: 4,
			stability: -4,
			concealment: -2
		},
		compatibleWeapons: [
			assaultRifles['Clarion Rifle']
		]
	},
	'Suppressed Barrel (Clarion)': {
		name: 'Suppressed Barrel (Clarion)',
		image: 'wpn_fps_ass_famas_b_suppressed',
		slot: 'Barrel',
		source: content['Gage Assault Pack'],
		cost: 28e3,
		acquisition: {
			achievement: 'Tour de Clarion'
		},
		specialEffect: ['Silences Weapon'],
		stats: {
			accuracy: 8,
			concealment: -1,
			threat: -16.8
		},
		compatibleWeapons: [
			assaultRifles['Clarion Rifle']
		]
	},
	'Fabulous Foregrip': {
		name: 'Fabulous Foregrip',
		image: 'wpn_fps_ass_galil_fg_fab',
		slot: 'Barrel',
		source: content['Gage Assault Pack'],
		cost: 14e3,
		acquisition: {
			achievement: 'Rabbit Hunting'
		},
		stats: {
			accuracy: 4,
			stability: 8,
			concealment: -1
		},
		compatibleWeapons: [
			assaultRifles['Gecko 7.62 Rifle']
		]
	},
	'CQB Foregrip (Gecko)': {
		name: 'CQB Foregrip (Gecko)',
		image: 'wpn_fps_ass_galil_fg_mar',
		slot: 'Barrel',
		source: content['Gage Assault Pack'],
		cost: 14e3,
		acquisition: {
			achievement: 'Army of One'
		},
		stats: {
			damage: 2,
			accuracy: -4,
			stability: -4,
			concealment: 4
		},
		compatibleWeapons: [
			assaultRifles['Gecko 7.62 Rifle']
		]
	},
	'Light Foregrip': {
		name: 'Light Foregrip',
		image: 'wpn_fps_ass_galil_fg_sar',
		slot: 'Barrel',
		source: content['Gage Assault Pack'],
		cost: 14e3,
		acquisition: {
			achievement: 'Unusual Suspects'
		},
		stats: {
			damage: 1,
			concealment: 1
		},
		compatibleWeapons: [
			assaultRifles['Gecko 7.62 Rifle']
		]
	},
	'Sniper Foregrip': {
		name: 'Sniper Foregrip',
		image: 'wpn_fps_ass_galil_fg_sniper',
		slot: 'Barrel',
		source: content['Gage Assault Pack'],
		cost: 14e3,
		acquisition: {
			achievement: 'Precision Aiming'
		},
		stats: {
			accuracy: 12,
			stability: -4,
			concealment: -2
		},
		compatibleWeapons: [
			assaultRifles['Gecko 7.62 Rifle']
		]
	},
	'Assault Kit': {
		name: 'Assault Kit',
		image: 'wpn_fps_ass_g3_b_short',
		slot: 'Barrel',
		source: content['Gage Assault Pack'],
		cost: 14e3,
		acquisition: {
			achievement: 'So Many Choices'
		},
		specialEffect: ['Sets ammo pickup to 6-12.6, is not affected by skills/perks. ammo pickup'],
		stats: {
			totalAmmo: 75,
			damage: -40,
			accuracy: -16,
			stability: 20,
			concealment: 4
		},
		compatibleWeapons: [
			assaultRifles['Gewehr 3 Rifle']
		]
	},
	'DMR Kit (Gewehr)': {
		name: 'DMR Kit (Gewehr)',
		image: 'wpn_fps_ass_g3_b_sniper',
		slot: 'Barrel',
		source: content['Gage Assault Pack'],
		cost: 14e3,
		acquisition: {
			achievement: 'Precision Aiming'
		},
		specialEffect: [
			'Sets ammo pickup to 0.5-1.75, is not affected by skills/perks.',
			'Doubles amount of damage from barrel extensions'
		],
		stats: {
			totalAmmo: -30,
			magazine: -10,
			damage: 61,
			accuracy: 8,
			stability: -4,
			concealment: -2
		},
		compatibleWeapons: [
			assaultRifles['Gewehr 3 Rifle']
		]
	},
	'Prodigious Barrel': {
		name: 'Prodigious Barrel',
		image: 'wpn_fps_ass_l85a2_b_long',
		slot: 'Barrel',
		source: content['Clover Character Pack'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			concealment: -3
		},
		compatibleWeapons: [
			assaultRifles['Queen\'s Wrath Rifle']
		]
	},
	'Diminutive Barrel': {
		name: 'Diminutive Barrel',
		image: 'wpn_fps_ass_l85a2_b_short',
		slot: 'Barrel',
		source: content['Clover Character Pack'],
		cost: 9e3,
		stats: {
			concealment: 3
		},
		compatibleWeapons: [
			assaultRifles['Queen\'s Wrath Rifle']
		]
	},
	'CQB Barrel (Lion\'s Roar)': {
		name: 'CQB Barrel (Lion\'s Roar)',
		image: 'wpn_fps_ass_vhs_b_short',
		slot: 'Barrel',
		source: content['Dragan Character Pack'],
		cost: 9e3,
		stats: {
			accuracy: -4,
			stability: 4,
			concealment: 3
		},
		compatibleWeapons: [
			assaultRifles['Lion\'s Roar Rifle']
		]
	},
	'Precision Barrel': {
		name: 'Precision Barrel',
		image: 'wpn_fps_ass_vhs_b_sniper',
		slot: 'Barrel',
		source: content['Dragan Character Pack'],
		cost: 9e3,
		stats: {
			accuracy: 8,
			concealment: -2
		},
		compatibleWeapons: [
			assaultRifles['Lion\'s Roar Rifle']
		]
	},
	'Silenced Barrel (Lion\'s Roar)': {
		name: 'Silenced Barrel (Lion\'s Roar)',
		image: 'wpn_fps_ass_vhs_b_silenced',
		slot: 'Barrel',
		source: content['Dragan Character Pack'],
		cost: 14e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -1,
			stability: 12,
			threat: -18
		},
		compatibleWeapons: [
			assaultRifles['Lion\'s Roar Rifle']
		],
		incompatibleSlot: ['Barrel Ext']
	},
	'Prototype Barrel (Valkyria)': {
		name: 'Prototype Barrel (Valkyria)',
		image: 'wpn_fps_ass_asval_b_proto',
		slot: 'Barrel',
		source: content['Sokol Character Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		specialEffect: ['Silences Weapon'],
		stats: {
			accuracy: -4,
			concealment: 2
		},
		compatibleWeapons: [
			assaultRifles['Valkyria Rifle']
		]
	},
	'AML Barrel': {
		name: 'AML Barrel',
		image: 'wpn_fps_ass_tecci_b_long',
		slot: 'Barrel',
		source: content['Sydney Character Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			accuracy: 4,
			stability: 12,
			concealment: -3
		},
		compatibleWeapons: [
			assaultRifles['Bootleg Rifle']
		]
	},
	'Short Barrel (Union)': {
		name: 'Short Barrel (Union)',
		image: 'wpn_fps_corgi_b_short',
		slot: 'Barrel',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			accuracy: -8,
			concealment: 3
		},
		compatibleWeapons: [
			assaultRifles['Union 5.56 Rifle']
		]
	},
	'Tanker Barrel': {
		name: 'Tanker Barrel',
		image: 'wpn_fps_ass_ching_b_short',
		slot: 'Barrel',
		source: content['WW2 Weapon Pack'],
		cost: 9e3,
		stats: {
			stability: -16,
			concealment: 4
		},
		compatibleWeapons: [
			assaultRifles['Galant Rifle']
		]
	},
	'Extended Mag': {
		name: 'Extended Mag',
		image: 'wpn_fps_sho_b_spas12_long',
		slot: 'Barrel',
		source: source.Community,
		cost: 9e3,
		stats: {
			magazine: 4,
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: [
			primaryShotguns['Predator 12G Shotgun']
		]
	},
	'Sawed Off Barrel (Joceline)': {
		name: 'Sawed Off Barrel (Joceline)',
		image: 'wpn_fps_shot_b682_b_short',
		slot: 'Barrel',
		source: source.Community,
		cost: 9e3,
		stats: {
			accuracy: -16,
			stability: -12,
			concealment: 10
		},
		compatibleWeapons: [
			primaryShotguns['Joceline O/U 12G Shotgun']
		]
	},
	'Short Barrel (IZHMA)': {
		name: 'Short Barrel (IZHMA)',
		image: 'wpn_fps_sho_saiga_b_short',
		slot: 'Barrel',
		source: content['Gage Spec Ops Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		stats: {
			accuracy: -4,
			stability: -4,
			concealment: 4
		},
		compatibleWeapons: [
			primaryShotguns['IZHMA 12G Shotgun']
		]
	},
	'Short Barrel (M1014)': {
		name: 'Short Barrel (M1014)',
		image: 'wpn_fps_sho_ben_b_short',
		slot: 'Barrel',
		source: content['Gage Shotgun Pack'],
		cost: 36e3,
		acquisition: {
			achievement: 'Seven Eleven'
		},
		stats: {
			magazine: -2,
			damage: 2,
			accuracy: -8,
			stability: -8,
			concealment: 6
		},
		compatibleWeapons: [
			primaryShotguns['M1014 Shotgun']
		]
	},
	'Long Barrel (M1014)': {
		name: 'Long Barrel (M1014)',
		image: 'wpn_fps_sho_ben_b_long',
		slot: 'Barrel',
		source: content['Gage Shotgun Pack'],
		cost: 62e3,
		acquisition: {
			achievement: 'Shotguns 101'
		},
		stats: {
			magazine: 2,
			accuracy: 8,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: [
			primaryShotguns['M1014 Shotgun']
		]
	},
	'Short Barrel (Raven)': {
		name: 'Short Barrel (Raven)',
		image: 'wpn_fps_sho_ksg_b_short',
		slot: 'Barrel',
		source: content['Gage Shotgun Pack'],
		cost: 36e3,
		acquisition: {
			achievement: 'Everyday I\'m Shovelin\''
		},
		stats: {
			magazine: -4,
			damage: 1,
			accuracy: -8,
			stability: -8,
			concealment: 4
		},
		compatibleWeapons: [
			primaryShotguns['Raven Shotgun']
		]
	},
	'Long Barrel (Raven)': {
		name: 'Long Barrel (Raven)',
		image: 'wpn_fps_sho_ksg_b_long',
		slot: 'Barrel',
		source: content['Gage Shotgun Pack'],
		cost: 53e3,
		acquisition: {
			achievement: 'Clay Pigeon Shooting'
		},
		stats: {
			magazine: 4,
			accuracy: 8,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: [
			primaryShotguns['Raven Shotgun']
		]
	},
	'Long Barrel (Steakout)': {
		name: 'Long Barrel (Steakout)',
		image: 'wpn_fps_sho_aa12_barrel_long',
		slot: 'Barrel',
		source: content['The Butcher\'s BBQ Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			accuracy: 8,
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: [
			primaryShotguns['Steakout 12G Shotgun']
		]
	},
	'Suppressed Barrel (Steakout)': {
		name: 'Suppressed Barrel (Steakout)',
		image: 'wpn_fps_sho_aa12_barrel_silenced',
		slot: 'Barrel',
		source: content['The Butcher\'s BBQ Pack'],
		cost: 36e3,
		acquisition: {
			bonus: 1
		},
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -2,
			accuracy: 4,
			stability: -8,
			concealment: -2,
			threat: -22
		},
		compatibleWeapons: [
			primaryShotguns['Steakout 12G Shotgun']
		],
		incompatibleSlot: ['Barrel Ext']
	},
	'Huntsman Barrel': {
		name: 'Huntsman Barrel',
		image: 'wpn_fps_sho_m1897_b_long',
		slot: 'Barrel',
		source: content['Gunslinger Weapon Pack'],
		cost: 9e3,
		stats: {
			accuracy: 8,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: [
			primaryShotguns['Reinfeld 88 Shotgun']
		]
	},
	'Ventilated Barrel': {
		name: 'Ventilated Barrel',
		image: 'wpn_fps_sho_m1897_b_short',
		slot: 'Barrel',
		source: content['Gunslinger Weapon Pack'],
		cost: 9e3,
		stats: {
			accuracy: -8,
			concealment: 2
		},
		compatibleWeapons: [
			primaryShotguns['Reinfeld 88 Shotgun']
		]
	},
	'CE Extender': {
		name: 'CE Extender',
		image: 'wpn_fps_sho_m590_b_xxx',
		slot: 'Barrel',
		source: content['Jiu Feng Smuggler Pack'],
		cost: 9e3,
		stats: {
			magazine: 4,
			accuracy: 4,
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: [
			primaryShotguns['Mosconi 12G Tactical Shotgun']
		]
	},
	'CE Muffler': {
		name: 'CE Muffler',
		image: 'wpn_fps_sho_m590_b_xxx___',
		slot: 'Barrel',
		source: content['Jiu Feng Smuggler Pack'],
		cost: 9e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			accuracy: -8,
			concealment: -1,
			threat: -22
		},
		compatibleWeapons: [
			primaryShotguns['Mosconi 12G Tactical Shotgun']
		]
	},
	'Short Barrel (Goliath)': {
		name: 'Short Barrel (Goliath)',
		image: 'wpn_fps_sho_rota_b_short',
		slot: 'Barrel',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			accuracy: -8,
			concealment: 3
		},
		compatibleWeapons: [
			akimboShotuns['Akimbo Goliath 12G Shotguns'],
			secondaryShotguns['Goliath 12G Shotgun']
		]
	},
	'Silenced Barrel (Goliath)': {
		name: 'Silenced Barrel (Goliath)',
		image: 'wpn_fps_sho_rota_b_silencer',
		slot: 'Barrel',
		source: source['Base Game'],
		cost: 44e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -2,
			accuracy: -4,
			stability: 4,
			concealment: -1,
			threat: -22
		},
		compatibleWeapons: [
			akimboShotuns['Akimbo Goliath 12G Shotguns'],
			secondaryShotguns['Goliath 12G Shotgun']
		],
		incompatibleSlot: ['Barrel Ext']
	},
	'Long Barrel (Rattlesnake)': {
		name: 'Long Barrel (Rattlesnake)',
		image: 'wpn_fps_snp_msr_b_long',
		slot: 'Barrel',
		source: content['Gage Sniper Pack'],
		cost: 7200,
		acquisition: {
			achievement: 'Public Enemy No. 1'
		},
		stats: {
			accuracy: 4,
			concealment: -3
		},
		compatibleWeapons: [
			snipers['Rattlesnake Sniper Rifle']
		]
	},
	'Short Barrel (R93)': {
		name: 'Short Barrel (R93)',
		image: 'wpn_fps_snp_r93_b_short',
		slot: 'Barrel',
		source: content['Gage Sniper Pack'],
		cost: 7200,
		acquisition: {
			achievement: 'Maximum Penetration'
		},
		stats: {
			accuracy: -8,
			stability: 8,
			concealment: 3
		},
		compatibleWeapons: [
			snipers['R93 Sniper Rifle']
		]
	},
	'Compensated Suppressor': {
		name: 'Compensated Suppressor',
		image: 'wpn_fps_snp_r93_b_suppressed',
		slot: 'Barrel',
		source: content['Gage Sniper Pack'],
		cost: 22400,
		acquisition: {
			achievement: 'Last Action Villain'
		},
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -16,
			accuracy: -4,
			stability: 4,
			concealment: -1,
			threat: -23
		},
		compatibleWeapons: [
			snipers['R93 Sniper Rifle']
		]
	},
	'Tank Buster Barrel': {
		name: 'Tank Buster Barrel',
		image: 'wpn_fps_snp_m95_barrel_long',
		slot: 'Barrel',
		source: content['Gage Sniper Pack'],
		cost: 7200,
		acquisition: {
			achievement: 'Far, Far Away'
		},
		stats: {
			accuracy: 8,
			concealment: -4,
			threat: 60
		},
		compatibleWeapons: [
			snipers['Thanatos .50 cal Sniper Rifle']
		]
	},
	'CQB Barrel (Thanatos)': {
		name: 'CQB Barrel (Thanatos)',
		image: 'wpn_fps_snp_m95_barrel_short',
		slot: 'Barrel',
		source: content['Gage Sniper Pack'],
		cost: 7200,
		acquisition: {
			achievement: 'Surprise Motherfucker'
		},
		stats: {
			accuracy: -12,
			concealment: 3
		},
		compatibleWeapons: [
			snipers['Thanatos .50 cal Sniper Rifle']
		]
	},
	'Suppressed Barrel (Thanatos)': {
		name: 'Suppressed Barrel (Thanatos)',
		image: 'wpn_fps_snp_m95_barrel_suppressed',
		slot: 'Barrel',
		source: content['Gage Sniper Pack'],
		cost: 35200,
		acquisition: {
			achievement: 'Dodge This'
		},
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -80,
			stability: 8,
			threat: -27
		},
		compatibleWeapons: [
			snipers['Thanatos .50 cal Sniper Rifle']
		]
	},
	'Short Barrel (Nagant)': {
		name: 'Short Barrel (Nagant)',
		image: 'wpn_fps_snp_mosin_b_short',
		slot: 'Barrel',
		source: content['Gage Historical Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Wind of Change'
		},
		stats: {
			accuracy: -4,
			concealment: 3
		},
		compatibleWeapons: [
			snipers['Nagant Sniper Rifle']
		]
	},
	'Long Barrel (Nagant)': {
		name: 'Long Barrel (Nagant)',
		image: 'wpn_fps_snp_mosin_b_long',
		slot: 'Barrel',
		source: content['Gage Historical Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Death From Below'
		},
		stats: {
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: [
			snipers['Nagant Sniper Rifle']
		]
	},
	'Silenced Barrel (Nagant)': {
		name: 'Silenced Barrel (Nagant)',
		image: 'wpn_fps_snp_mosin_b_sniper',
		slot: 'Barrel',
		source: content['Gage Historical Pack'],
		cost: 44e3,
		acquisition: {
			achievement: 'Death From Below'
		},
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -16,
			accuracy: -4,
			stability: 4,
			concealment: -2,
			threat: -22
		},
		compatibleWeapons: [
			snipers['Nagant Sniper Rifle']
		]
	},
	'Long Range Barrel': {
		name: 'Long Range Barrel',
		image: 'wpn_fps_snp_winchester_b_long',
		slot: 'Barrel',
		source: content['The Butcher\'s Western Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			accuracy: 4,
			concealment: -2
		},
		compatibleWeapons: [
			snipers['Repeater 1874 Sniper Rifle']
		]
	},
	'Outlaw\'s Silenced Barrel': {
		name: 'Outlaw\'s Silenced Barrel',
		image: 'wpn_fps_snp_winchester_b_suppressed',
		slot: 'Barrel',
		source: content['The Butcher\'s Western Pack'],
		cost: 44e3,
		acquisition: {
			bonus: 1
		},
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -6,
			accuracy: -4,
			stability: 12,
			concealment: -2,
			threat: -22
		},
		compatibleWeapons: [
			snipers['Repeater 1874 Sniper Rifle']
		]
	},
	'Long Barrel (Desertfox)': {
		name: 'Long Barrel (Desertfox)',
		image: 'wpn_fps_snp_desertfox_b_long',
		slot: 'Barrel',
		source: content['John Wick Weapon Pack'],
		cost: 21e3,
		acquisition: {
			infinite: true
		},
		stats: {
			accuracy: 12,
			concealment: -3
		},
		compatibleWeapons: [
			snipers['Desertfox Sniper Rifle']
		]
	},
	'Silenced Barrel (Desertfox)': {
		name: 'Silenced Barrel (Desertfox)',
		image: 'wpn_fps_snp_desertfox_b_silencer',
		slot: 'Barrel',
		source: content['John Wick Weapon Pack'],
		cost: 44e3,
		acquisition: {
			infinite: true
		},
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -8,
			accuracy: -4,
			stability: 4,
			concealment: -1,
			threat: -22
		},
		compatibleWeapons: [
			snipers['Desertfox Sniper Rifle']
		]
	},
	'Grievky Compensator': {
		name: 'Grievky Compensator',
		image: 'wpn_fps_snp_siltstone_ns_variation_b',
		slot: 'Barrel',
		source: content['Gage Russian Weapon Pack'],
		cost: 9e3,
		stats: {
			accuracy: 8,
			stability: 8
		},
		compatibleWeapons: [
			snipers['Grom Sniper Rifle']
		]
	},
	'Tikho Barrel': {
		name: 'Tikho Barrel',
		image: 'wpn_fps_snp_siltstone_b_silenced',
		slot: 'Barrel',
		source: content['Gage Russian Weapon Pack'],
		cost: 44e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -2,
			accuracy: -4,
			stability: 4,
			threat: -18
		},
		compatibleWeapons: [
			snipers['Grom Sniper Rifle']
		]
	},
	'Short Barrel (R700)': {
		name: 'Short Barrel (R700)',
		image: 'wpn_fps_snp_r700_b_short',
		slot: 'Barrel',
		source: content['Fugitive Weapon Pack'],
		cost: 14e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			accuracy: -4,
			stability: -4,
			concealment: 3
		},
		compatibleWeapons: [
			snipers['R700 Sniper Rifle']
		]
	},
	'Medium Barrel (R700)': {
		name: 'Medium Barrel (R700)',
		image: 'wpn_fps_snp_r700_b_medium',
		slot: 'Barrel',
		source: content['Fugitive Weapon Pack'],
		cost: 44e3,
		acquisition: {
			bonus: 1
		},
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -8,
			stability: 8,
			concealment: -1,
			threat: -22
		},
		compatibleWeapons: [
			snipers['R700 Sniper Rifle']
		]
	},
	'Deep Range Barrel': {
		name: 'Deep Range Barrel',
		image: 'wpn_fps_snp_sbl_b_long',
		slot: 'Barrel',
		source: content['Gunslinger Weapon Pack'],
		cost: 9e3,
		stats: {
			accuracy: 12,
			stability: 4,
			concealment: -3
		},
		compatibleWeapons: [
			snipers['Bernetti Rangehitter Sniper Rifle']
		]
	},
	'Wind Whistler Barrel': {
		name: 'Wind Whistler Barrel',
		image: 'wpn_fps_snp_sbl_b_short',
		slot: 'Barrel',
		source: content['Gunslinger Weapon Pack'],
		cost: 44e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -6,
			accuracy: -4,
			stability: 12,
			concealment: -1,
			threat: -22
		},
		compatibleWeapons: [
			snipers['Bernetti Rangehitter Sniper Rifle']
		]
	},
	'Short Barrel (KSP 58)': {
		name: 'Short Barrel (KSP 58)',
		image: 'wpn_fps_lmg_par_b_short',
		slot: 'Barrel',
		source: source['Base Game'],
		cost: 0,
		acquisition: {
			bonus: 1
		},
		stats: {
			concealment: 2
		},
		compatibleWeapons: [
			lightMachineGuns['KSP 58 Light Machine Gun']
		]
	},
	'Long Barrel (KSP)': {
		name: 'Long Barrel (KSP)',
		image: 'wpn_fps_lmg_m249_b_long',
		slot: 'Barrel',
		source: content['Gage Weapon Pack #02'],
		cost: 50400,
		stats: {
			damage: -1,
			accuracy: 4,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: [
			lightMachineGuns['KSP Light Machine Gun']
		]
	},
	'Long Barrel (Brenner)': {
		name: 'Long Barrel (Brenner)',
		image: 'wpn_fps_lmg_hk21_b_long',
		slot: 'Barrel',
		source: content['Gage Weapon Pack #02'],
		cost: 28e3,
		stats: {
			damage: -1,
			accuracy: 4,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: [
			lightMachineGuns['Brenner-21 Light Machine Gun']
		]
	},
	'Light Barrel': {
		name: 'Light Barrel',
		image: 'wpn_fps_lmg_mg42_b_mg34',
		slot: 'Barrel',
		source: content['Gage Historical Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Bullet Hell'
		},
		stats: {
			damage: -1,
			accuracy: 8,
			stability: 8
		},
		compatibleWeapons: [
			lightMachineGuns['Buzzsaw 42 Light Machine Gun']
		]
	},
	'Heatsinked Suppressed Barrel (Buzzsaw)': {
		name: 'Heatsinked Suppressed Barrel (Buzzsaw)',
		image: 'wpn_fps_lmg_mg42_b_vg38',
		slot: 'Barrel',
		source: content['Gage Historical Pack'],
		cost: 28e3,
		acquisition: {
			achievement: 'Wind of Change'
		},
		stats: {
			accuracy: -4,
			stability: 4,
			threat: -23
		},
		compatibleWeapons: [
			lightMachineGuns['Buzzsaw 42 Light Machine Gun']
		],
		incompatibleSlot: ['Barrel Ext']
	},
	'Pirate Barrel': {
		name: 'Pirate Barrel',
		image: 'wpn_fps_gre_m79_barrel_short',
		slot: 'Barrel',
		source: content['Gage Assault Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Artillery Barrage'
		},
		specialEffect: ['Removes flip-up sight.'],
		stats: {
			accuracy: -8,
			concealment: 4
		},
		compatibleWeapons: [
			primarySpecials['GL40 Grenade Launcher']
		]
	},
	'Aerial Assault Barrel': {
		name: 'Aerial Assault Barrel',
		image: 'wpn_fps_lmg_m134_barrel_extreme',
		slot: 'Barrel',
		source: content['The OVERKILL Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			accuracy: 4,
			stability: -12,
			concealment: -3
		},
		compatibleWeapons: [
			primarySpecials['Vulcan Minigun']
		]
	},
	'The Stump Barrel': {
		name: 'The Stump Barrel',
		image: 'wpn_fps_lmg_m134_barrel_short',
		slot: 'Barrel',
		source: content['The OVERKILL Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			accuracy: -4,
			stability: 12,
			concealment: 3
		},
		compatibleWeapons: [
			primarySpecials['Vulcan Minigun']
		]
	},
	'Short Barrel (Piglet)': {
		name: 'Short Barrel (Piglet)',
		image: 'wpn_fps_gre_m32_barrel_short',
		slot: 'Barrel',
		source: content['The Butcher\'s BBQ Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			accuracy: -4,
			stability: 20,
			concealment: 2
		},
		compatibleWeapons: [
			primarySpecials['Piglet Grenade Launcher']
		]
	},
	'Prototype Barrel (White Streak)': {
		name: 'Prototype Barrel (White Streak)',
		image: 'wpn_fps_pis_pl14_b_comp',
		slot: 'Barrel',
		source: source['Base Game'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			accuracy: 4,
			concealment: -1
		},
		compatibleWeapons: [
			pistols['White Streak Pistol']
		],
		incompatibleSlot: [] // Suppressors
	},
	'Threaded Barrel (M13)': {
		name: 'Threaded Barrel (M13)',
		image: 'wpn_fps_pis_legacy_b_threaded',
		slot: 'Barrel',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			stability: -4,
			concealment: -1
		},
		compatibleWeapons: [
			pistols['M13 9mm Pistol']
		]
	},
	'Pesante Barrel': {
		name: 'Pesante Barrel',
		image: 'wpn_fps_pis_2006m_b_long',
		slot: 'Barrel',
		source: content['The Alesso Heist'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			concealment: -2
		},
		compatibleWeapons: [
			pistols['Matever .357 Revolver']
		]
	},
	'Medio Barrel': {
		name: 'Medio Barrel',
		image: 'wpn_fps_pis_2006m_b_medium',
		slot: 'Barrel',
		source: content['The Alesso Heist'],
		cost: 9e3,
		stats: {
			accuracy: -4,
			concealment: 2
		},
		compatibleWeapons: [
			pistols['Matever .357 Revolver']
		]
	},
	'Pisccolo Barrel': {
		name: 'Pisccolo Barrel',
		image: 'wpn_fps_pis_2006m_b_short',
		slot: 'Barrel',
		source: content['The Alesso Heist'],
		cost: 9e3,
		stats: {
			accuracy: -8,
			concealment: 4
		},
		compatibleWeapons: [
			pistols['Matever .357 Revolver']
		]
	},
	'Ported Barrel': {
		name: 'Ported Barrel',
		image: 'wpn_fps_pis_sparrow_b_comp',
		slot: 'Barrel',
		source: content['The Point Break Heists'],
		cost: 9e3,
		stats: {
			accuracy: 4
		},
		compatibleWeapons: [
			pistols['Baby Deagle']
		],
		incompatibleSlot: ['Barrel Ext']
	},
	'Threaded Barrel (Baby Deagle)': {
		name: 'Threaded Barrel (Baby Deagle)',
		image: 'wpn_fps_pis_sparrow_b_threaded',
		slot: 'Barrel',
		source: content['The Point Break Heists'],
		cost: 9e3,
		stats: {
			stability: 4
		},
		compatibleWeapons: [
			pistols['Baby Deagle']
		]
	},
	'Weller Barrel': {
		name: 'Weller Barrel',
		image: 'wpn_fps_pis_beer_b_robo',
		slot: 'Barrel',
		source: content['Federales Weapon Pack'],
		cost: 62e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			accuracy: 8,
			stability: 4,
			concealment: -5,
			threat: 14
		},
		compatibleWeapons: [
			pistols['Bernetti Auto Pistol']
		]
	},
	'Sicario Barrel': {
		name: 'Sicario Barrel',
		image: 'wpn_fps_pis_czech_b_long',
		slot: 'Barrel',
		source: content['Federales Weapon Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			accuracy: 4,
			concealment: -2,
			threat: 2
		},
		compatibleWeapons: [
			pistols['Czech 92 Pistol']
		]
	},
	'Tirador Barrel': {
		name: 'Tirador Barrel',
		image: 'wpn_fps_pis_stech_b_long',
		slot: 'Barrel',
		source: content['Federales Weapon Pack'],
		cost: 36e3,
		stats: {
			accuracy: 4,
			concealment: -2,
			threat: 2
		},
		compatibleWeapons: [
			pistols['Igor Automatik Pistol']
		]
	},
	'Opera Long Barrel': {
		name: 'Opera Long Barrel',
		image: 'wpn_fps_pis_model3_bar_xxx',
		slot: 'Barrel',
		source: content['Gunslinger Weapon Pack'],
		cost: 9e3,
		stats: {
			accuracy: 8,
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: [
			pistols['Frenchman Model 87 Revolver']
		]
	},
	'Napoleon Barrel': {
		name: 'Napoleon Barrel',
		image: 'wpn_fps_pis_model3_bar_xxx__',
		slot: 'Barrel',
		source: content['Gunslinger Weapon Pack'],
		cost: 9e3,
		stats: {
			accuracy: -4,
			concealment: 2
		},
		compatibleWeapons: [
			pistols['Frenchman Model 87 Revolver']
		]
	},
	'Stubby Barrel': {
		name: 'Stubby Barrel',
		image: 'wpn_fps_smg_thompson_barrel_short',
		slot: 'Barrel',
		source: source.Community,
		cost: 14e3,
		stats: {
			accuracy: -4,
			concealment: 3
		},
		compatibleWeapons: [
			submachineGuns['Chicago Typewriter Submachine Gun']
		]
	},
	'Long Barrel (Chicago Typewriter)': {
		name: 'Long Barrel (Chicago Typewriter)',
		image: 'wpn_fps_smg_thompson_barrel_long',
		slot: 'Barrel',
		source: source.Community,
		cost: 28e3,
		stats: {
			accuracy: 4,
			concealment: -3
		},
		compatibleWeapons: [
			submachineGuns['Chicago Typewriter Submachine Gun']
		]
	},
	'Medium Barrel (Para)': {
		name: 'Medium Barrel (Para)',
		image: 'wpn_fps_m4_uupg_b_medium',
		slot: 'Barrel',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			concealment: -1
		},
		compatibleWeapons: [
			submachineGuns['Para Submachine Gun']
		]
	},
	'Long Barrel (Kobus)': {
		name: 'Long Barrel (Kobus)',
		image: 'wpn_fps_smg_p90_b_long',
		slot: 'Barrel',
		source: source['Base Game'],
		cost: 62e3,
		stats: {
			damage: 2,
			accuracy: 4,
			stability: 12,
			concealment: -2
		},
		compatibleWeapons: [
			submachineGuns['Kobus 90 Submachine Gun']
		]
	},
	'Civilian Market Barrel': {
		name: 'Civilian Market Barrel',
		image: 'wpn_fps_smg_p90_b_civilian',
		slot: 'Barrel',
		source: content['The Butcher Mod Pack 2'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			damage: 2,
			accuracy: 8,
			stability: -8,
			concealment: -4
		},
		compatibleWeapons: [
			submachineGuns['Kobus 90 Submachine Gun']
		]
	},
	'Mall Ninja Barrel': {
		name: 'Mall Ninja Barrel',
		image: 'wpn_fps_smg_p90_b_ninja',
		slot: 'Barrel',
		source: content['The Butcher Mod Pack 2'],
		cost: 14e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			damage: -1,
			stability: 12,
			threat: -18
		},
		compatibleWeapons: [
			submachineGuns['Kobus 90 Submachine Gun']
		],
		incompatibleSlot: ['Barrel Ext']
	},
	'Grease Barrel': {
		name: 'Grease Barrel',
		image: 'wpn_fps_smg_m45_b_small',
		slot: 'Barrel',
		source: content['Armored Transport'],
		cost: 16800,
		stats: {
			accuracy: -8,
			concealment: 3
		},
		compatibleWeapons: [
			submachineGuns['Swedish K Submachine Gun']
		]
	},
	'Swedish Barrel': {
		name: 'Swedish Barrel',
		image: 'wpn_fps_smg_m45_b_green',
		slot: 'Barrel',
		source: content['Armored Transport'],
		cost: 25200,
		stats: {
			accuracy: 4,
			concealment: -1
		},
		compatibleWeapons: [
			submachineGuns['Swedish K Submachine Gun']
		]
	},
	'Short Barrel (Blaster)': {
		name: 'Short Barrel (Blaster)',
		image: 'wpn_fps_smg_tec9_b_standard',
		slot: 'Barrel',
		source: content['Hotline Miami'],
		cost: 21e3,
		acquisition: {
			achievement: 'Sounds of Animals Fighting'
		},
		stats: {
			accuracy: -4,
			stability: 4,
			concealment: 3
		},
		compatibleWeapons: [
			submachineGuns['Blaster 9mm Submachine Gun']
		]
	},
	'Ghetto Blaster': {
		name: 'Ghetto Blaster',
		image: 'wpn_fps_smg_tec9_ns_ext',
		slot: 'Barrel',
		source: content['Hotline Miami'],
		cost: 36e3,
		acquisition: {
			achievement: 'Overdose'
		},
		stats: {
			accuracy: 4,
			stability: -8,
			concealment: -3
		},
		compatibleWeapons: [
			submachineGuns['Blaster 9mm Submachine Gun']
		]
	},
	'Long Barrel (Patchett)': {
		name: 'Long Barrel (Patchett)',
		image: 'wpn_fps_smg_sterling_b_long',
		slot: 'Barrel',
		source: content['Gage Historical Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Wind of Change'
		},
		stats: {
			damage: 1,
			accuracy: 4,
			stability: -4,
			concealment: -2
		},
		compatibleWeapons: [
			submachineGuns['Patchett L2A1 Submachine Gun']
		]
	},
	'Short Barrel (Patchett)': {
		name: 'Short Barrel (Patchett)',
		image: 'wpn_fps_smg_sterling_b_short',
		slot: 'Barrel',
		source: content['Gage Historical Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Special Operations Execution'
		},
		stats: {
			damage: 2,
			accuracy: -4,
			stability: 4,
			concealment: 1
		},
		compatibleWeapons: [
			submachineGuns['Patchett L2A1 Submachine Gun']
		]
	},
	'Heatsinked Suppressed Barrel (Patchett)': {
		name: 'Heatsinked Suppressed Barrel (Patchett)',
		image: 'wpn_fps_smg_sterling_b_e11',
		slot: 'Barrel',
		source: content['Gage Historical Pack'],
		cost: 28e3,
		acquisition: {
			achievement: 'Special Operations Execution'
		},
		specialEffect: ['Silences Weapon'],
		stats: {
			accuracy: -4,
			stability: 4,
			concealment: -1,
			threat: -18
		},
		compatibleWeapons: [
			submachineGuns['Patchett L2A1 Submachine Gun']
		],
		incompatibleSlot: ['Barrel Ext']
	},
	'Suppressed Barrel (Patchett)': {
		name: 'Suppressed Barrel (Patchett)',
		image: 'wpn_fps_smg_sterling_b_suppressed',
		slot: 'Barrel',
		source: content['Gage Historical Pack'],
		cost: 28e3,
		acquisition: {
			achievement: 'Special Operations Execution'
		},
		specialEffect: ['Silences Weapon'],
		stats: {
			accuracy: -4,
			stability: 4,
			concealment: -2,
			threat: -18
		},
		compatibleWeapons: [
			submachineGuns['Patchett L2A1 Submachine Gun']
		]
	},
	'Custom Barrel': {
		name: 'Custom Barrel',
		image: 'wpn_fps_smg_baka_b_comp',
		slot: 'Barrel',
		source: content['Yakuza Character Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			accuracy: 4,
			concealment: -1
		},
		compatibleWeapons: [
			submachineGuns['Micro Uzi Submachine Gun']
		]
	},
	'Medium Barrel (CR)': {
		name: 'Medium Barrel (CR)',
		image: 'wpn_fps_smg_hajk_b_medium',
		slot: 'Barrel',
		source: content['The Biker Heist'],
		cost: 9e3,
		stats: {
			accuracy: -4,
			concealment: 2
		},
		compatibleWeapons: [
			submachineGuns['CR 805B Submachine Gun']
		]
	},
	'Short Barrel (CR)': {
		name: 'Short Barrel (CR)',
		image: 'wpn_fps_smg_hajk_b_short',
		slot: 'Barrel',
		source: content['The Biker Heist'],
		cost: 9e3,
		stats: {
			accuracy: -12,
			concealment: 5
		},
		compatibleWeapons: [
			submachineGuns['CR 805B Submachine Gun']
		]
	},
	'MG8 Precision Barrel': {
		name: 'MG8 Precision Barrel',
		image: 'wpn_fps_smg_vityaz_b_long',
		slot: 'Barrel',
		source: content['Jiu Feng Smuggler Pack'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: [
			submachineGuns['AK Gen 21 Tactical Submachine Gun']
		]
	},
	'BY90 Wide Suppressor': {
		name: 'BY90 Wide Suppressor',
		image: 'wpn_fps_smg_vityaz_b_xxx',
		slot: 'Barrel',
		source: content['Jiu Feng Smuggler Pack'],
		cost: 9e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			accuracy: -4,
			concealment: -1,
			threat: -16.8
		},
		compatibleWeapons: [
			submachineGuns['AK Gen 21 Tactical Submachine Gun']
		]
	},
	'Sawed Off Barrel (Claire)': {
		name: 'Sawed Off Barrel (Claire)',
		image: 'wpn_fps_shot_coach_b_short',
		slot: 'Barrel',
		source: source.Community,
		cost: 9e3,
		stats: {
			accuracy: -16,
			stability: -16,
			concealment: 10
		},
		compatibleWeapons: [
			secondaryShotguns['Claire 12G Shotgun']
		]
	},
	'Long Barrel (Street Sweeper)': {
		name: 'Long Barrel (Street Sweeper)',
		image: 'wpn_fps_sho_striker_b_long',
		slot: 'Barrel',
		source: content['Gage Shotgun Pack'],
		cost: 21e3,
		acquisition: {
			achievement: 'Bang for the Buck'
		},
		stats: {
			accuracy: 8,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: [
			secondaryShotguns['Street Sweeper Shotgun']
		]
	},
	'Suppressed Barrel (Street Sweeper)': {
		name: 'Suppressed Barrel (Street Sweeper)',
		image: 'wpn_fps_sho_striker_b_suppressed',
		slot: 'Barrel',
		source: content['Gage Shotgun Pack'],
		cost: 36e3,
		acquisition: {
			achievement: 'No Heist for Old Man'
		},
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -2,
			accuracy: -4,
			stability: 8,
			concealment: -2,
			threat: -22
		},
		compatibleWeapons: [
			secondaryShotguns['Street Sweeper Shotgun']
		],
		incompatibleSlot: ['Barrel Ext']
	},
	'Riot Barrel': {
		name: 'Riot Barrel',
		image: 'wpn_fps_shot_m37_b_short',
		slot: 'Barrel',
		source: content['The Goat Simulator Heist'],
		cost: 9e3,
		stats: {
			accuracy: -8,
			concealment: 2
		},
		compatibleWeapons: [
			secondaryShotguns['GSPS 12G Shotgun']
		]
	},
	'Carbon Limb': {
		name: 'Carbon Limb',
		image: 'wpn_fps_shot_m37_b_short',
		slot: 'Barrel',
		source: content['Gage Ninja Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			concealment: 1
		},
		compatibleWeapons: [
			secondarySpecials['Pistol Crossbow']
		]
	},
	'Skeletal Limb': {
		name: 'Skeletal Limb',
		image: 'wpn_fps_bow_hunter_b_skeletal',
		slot: 'Barrel',
		source: content['Gage Ninja Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			concealment: 1
		},
		compatibleWeapons: [
			secondarySpecials['Pistol Crossbow']
		]
	},
	'Bombardier Barrel': {
		name: 'Bombardier Barrel',
		image: 'wpn_fps_gre_arbiter_b_comp',
		slot: 'Barrel',
		source: content['Gage Spec Ops Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		stats: {
			accuracy: -4,
			stability: -4,
			concealment: 2
		},
		compatibleWeapons: [
			secondarySpecials['Arbiter Grenade Launcher']
		]
	},
	'Long Barrel (Arbiter)': {
		name: 'Long Barrel (Arbiter)',
		image: 'wpn_fps_gre_arbiter_b_long',
		slot: 'Barrel',
		source: content['Gage Spec Ops Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		stats: {
			accuracy: 4,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: [
			secondarySpecials['Arbiter Grenade Launcher']
		]
	}
}

export default barrel