import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { ModificationList } from '../weaponTypes'

export type BarrelModificationsList =
	// AK, AK.762, Golden AK.762
	| 'AK Slavic Dragon Barrel'
	| 'Modern Barrel'
	| 'DMR Kit (AK)'

	// CAR-4, AMR-16
	| 'Long Barrel (CAR)'
	| 'Short Barrel (CAR)'
	| 'Stealth Barrel'
	| 'DMR Kit (CAR)'

	// UAR
	| 'Short Barrel (UAR)'
	| 'Long Barrel (UAR)'

	// AK5
	| 'CQB Barrel (AK5)'

	// Commando 553
	| 'Long Barrel (Commando)'

	// Eagle Heavy
	| 'Short Barrel (Eagle Heavy)'
	| 'Long Barrel (Eagle Heavy)'

	// Falcon
	| 'CQB Foregrip (Falcon)'
	| 'Retro Foregrip'
	| 'Marksman Foregrip'
	| 'Wooden Foregrip'

	// Clarion
	| 'Long Barrel (Clarion)'
	| 'Short Barrel (Clarion)'
	| 'Sniper Barrel'
	| 'Suppressed Barrel (Clarion)'

	// Gecko 7.62
	| 'Fabulous Foregrip'
	| 'CQB Foregrip (Gecko)'
	| 'Light Foregrip'
	| 'Sniper Foregrip'

	// Gewehr 3
	| 'Assault Kit'
	| 'DMR Kit (Gewehr)'

	// Queen's Wrath
	| 'Prodigious Barrel'
	| 'Diminutive Barrel'

	// Lion's Roar
	| 'CQB Barrel (Lion\'s Roar)'
	| 'Precision Barrel'
	| 'Silenced Barrel (Lion\'s Roar)'

	// Valkyria
	| 'Prototype Barrel (Valkyria)'

	// Bootleg
	| 'AML Barrel'

	// Union 5.56
	| 'Short Barrel (Union)'

	// Galant
	| 'Tanker Barrel'

	// KETCHNOV Byk-1?

	// Predator 12G
	| 'Extended Mag'

	// Joceline O/U 12G
	| 'Sawed Off Barrel (Joceline)'

	// IZHMA
	| 'Short Barrel (IZHMA)'

	// M1014
	| 'Short Barrel (M1014)'
	| 'Long Barrel (M1014)'

	// Raven
	| 'Short Barrel (Raven)'
	| 'Long Barrel (Raven)'

	// Steakout 12G
	| 'Long Barrel (Steakout)'
	| 'Suppressed Barrel (Steakout)'

	// Breaker 12G
	| 'Long Barrel (Breaker)'
	| 'Short Barrel (Breaker)'

	// Mosconi 12G
	| 'Road Warrior Barrel'

	// Reinfeld 88
	| 'Huntsman Barrel'
	| 'Ventilated Barrel'

	// Mosconi 12G Tactical
	| 'CE Extender'
	| 'CE Muffler'

	// Akimbo Goliath 12G, Goliath 12G
	| 'Short Barrel (Goliath)'
	| 'Silenced Barrel (Goliath)'

	// VD-12
	| 'Long Barrel (VD-12)'
	| 'Short Barrel (VD-12)'

	// Rattlesnake
	| 'Long Barrel (Rattlesnake)'

	// R93
	| 'Short Barrel (R93)'
	| 'Compensated Suppressor'

	// Thanatos .50 cal
	| 'Tank Buster Barrel'
	| 'CQB Barrel (Thanatos)'
	| 'Suppressed Barrel (Thanatos)'

	// Nagant
	| 'Short Barrel (Nagant)'
	| 'Long Barrel (Nagant)'
	| 'Silenced Barrel (Nagant)'

	// Repeater 1874
	| 'Long Range Barrel'
	| 'Outlaw\'s Silenced Barrel'

	// Lebensauger .308
	| 'Langer Barrel'
	| 'Gedämpfter Barrel'

	// Desertfox
	| 'Long Barrel (Desertfox)'
	| 'Silenced Barrel (Desertfox)'

	// Grom
	| 'Grievky Compensator'
	| 'Tikho Barrel'

	// R700
	| 'Short Barrel (R700)'
	| 'Medium Barrel (R700)'

	// Bernetti Rangehitter
	| 'Deep Range Barrel'
	| 'Wind Whistler Barrel'

	// Káng Arms X1?

	// KSP 58
	| 'Short Barrel (KSP 58)'

	// KSP
	| 'Long Barrel (KSP)'

	// Akron HC
	| 'Short Barrel (Akron HC)'
	| 'DMR Barrel'

	// Brenner 21
	| 'Long Barrel (Brenner)'

	// Buzzsaw 42
	| 'Light Barrel'
	| 'Heatsinked Suppressed Barrel (Buzzsaw)'

	// M60?

	// GL40
	| 'Pirate Barrel'

	// Vulcan Minigun
	| 'Aerial Assault Barrel'
	| 'The Stump Barrel'

	// Piglet
	| 'Short Barrel (Piglet)'

	// Hailstorm Mk 5
	| 'v1.4 Barrel'
	| 'v3.8 Barrel'
	| 'v2.2 Barrel'

	// White Streak
	| 'Prototype Barrel (White Streak)'

	// M13 9mm
	| 'Threaded Barrel (M13)'

	// Matever .357
	| 'Pesante Barrel'
	| 'Medio Barrel'
	| 'Pisccolo Barrel'

	// Baby Deagle
	| 'Ported Barrel'
	| 'Threaded Barrel (Baby Deagle)'

	// Bernetti Auto
	| 'Weller Barrel'

	// Czech 92
	| 'Sicario Barrel'

	// Igor Automatik
	| 'Tirador Barrel'

	// Frenchman Model 87
	| 'Opera Long Barrel'
	| 'Napoleon Barrel'

	// Parabellum
	| 'Reinforced Barrel'
	| 'Short Barrel (Parabellum)'

	// 5/7 AP
	| 'TiN Treated Barrel'

	// Castigo .44
	| 'Diablo Barrel'

	// Chicago Typewriter
	| 'Stubby Barrel'
	| 'Long Barrel (Chicago Typewriter)'

	// Para
	| 'Medium Barrel (Para)'

	// Kobus 90
	| 'Long Barrel (Kobus)'
	| 'Civilian Market Barrel'
	| 'Mall Ninja Barrel'

	// Swedish K
	| 'Grease Barrel'
	| 'Swedish Barrel'

	// Blaster 9mm
	| 'Short Barrel (Blaster)'
	| 'Ghetto Blaster'

	// Patchett L2A1
	| 'Long Barrel (Patchett)'
	| 'Short Barrel (Patchett)'
	| 'Heatsinked Suppressed Barrel (Patchett)'
	| 'Suppressed Barrel (Patchett)'

	// Micro Uzi
	| 'Custom Barrel'

	// Jackal
	| 'Civilian Barrel'

	// CR 805B
	| 'Medium Barrel (CR)'
	| 'Short Barrel (CR)'

	// AK Gen 21
	| 'MG8 Precision Barrel'
	| 'BY90 Wide Suppressor'

	// Miyaka 10 Special?

	// Claire 12G
	| 'Sawed Off Barrel (Claire)'

	// Street Sweeper
	| 'Long Barrel (Street Sweeper)'
	| 'Suppressed Barrel (Street Sweeper)'

	// GSPS 12G
	| 'Riot Barrel'

	// Crossbow
	| 'Carbon Limb'
	| 'Skeletal Limb'

	// MA-17 Flamethrower
	| 'Merlin Nozzle'

	// Arbiter
	| 'Bombardier Barrel'
	| 'Long Barrel (Arbiter)'

	// Basilisk 3V
	| 'Fang Barrel'

	// Pronghorn
	| 'Longshot Suppressor'

	// Aran G2
	| 'Long Barrel (Aran G2)'
	| 'Short Barrel (Aran G2)'

	// SG Versteckt 51D
	| 'Kalt Barrel'

	// Gecko M2
	| 'UpShot Barrel'
	| 'Pinnacle Barrel'

	// M60
	| 'Short Barrel (M60)'

	// Káng Arms Model 54
	| 'KA54 Barrel Extender'

	// RUS-12 Angry Tiger
	| 'RUS-J Long Valley Barrel and Stabilizer'
	| 'RUS-K Tactical Short Barrel'

	//KETCHNOV BYK-1
	| 'K-B100 Suppressor'

	// Káng Arms X1
	| 'KA-ZD1A Long Barrel'
	| 'KA-ZD1B Short Barrel'

	// Miyaka 10 Special
	| 'MS10 Short Barrel'

const barrel: ModificationList<BarrelModificationsList> = {
	'AK Slavic Dragon Barrel': {
		name: 'AK Slavic Dragon Barrel',
		image: 'wpn_fps_upg_ak_b_draco',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			assaultRifle: [
				'AK',
				'AK.762',
				'Golden AK.762'
			]
		}
	},
	'Modern Barrel': {
		name: 'Modern Barrel',
		image: 'wpn_fps_upg_ak_b_ak105',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'The Collector'
		},
		stats: {
			damage: 2,
			concealment: 1
		},
		compatibleWeapons: {
			assaultRifle: [
				'AK',
				'AK.762',
				'Golden AK.762'
			]
		}
	},
	'DMR Kit (AK)': {
		name: 'DMR Kit (AK)',
		image: 'wpn_fps_upg_ass_ak_b_zastava',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			assaultRifle: [
				'AK',
				'AK.762',
				'Golden AK.762'
			]
		}
	},
	'Long Barrel (CAR)': {
		name: 'Long Barrel (CAR)',
		image: 'wpn_fps_m4_uupg_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: source['Base Game'],
		cost: 28e3,
		stats: {
			damage: 2,
			accuracy: 4,
			concealment: -2
		},
		compatibleWeapons: {
			assaultRifle: [
				'CAR-4',
				'AMR-16'
			]
		}
	},
	'Short Barrel (CAR)': {
		name: 'Short Barrel (CAR)',
		image: 'wpn_fps_m4_uupg_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: source['Base Game'],
		cost: 36e3,
		stats: {
			accuracy: -4,
			concealment: 2
		},
		compatibleWeapons: {
			assaultRifle: [
				'CAR-4'
			]
		}
	},
	'Stealth Barrel': {
		name: 'Stealth Barrel',
		image: 'wpn_fps_m4_uupg_b_sd',
		icon: 'inv_mod_silencer',
		slot: 'barrel',
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
		compatibleWeapons: {
			assaultRifle: [
				'CAR-4'
			]
		},
		incompatibleSlot: ['barrelExt']
	},
	'DMR Kit (CAR)': {
		name: 'DMR Kit (CAR)',
		image: 'wpn_fps_upg_ass_m4_b_beowulf',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			assaultRifle: [
				'CAR-4',
				'AMR-16'
			]
		}
	},
	'Short Barrel (UAR)': {
		name: 'Short Barrel (UAR)',
		image: 'wpn_fps_aug_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: source['Base Game'],
		cost: 36e3,
		stats: {
			accuracy: -4,
			stability: 8,
			concealment: 2
		},
		compatibleWeapons: {
			assaultRifle: [
				'UAR'
			]
		}
	},
	'Long Barrel (UAR)': {
		name: 'Long Barrel (UAR)',
		image: 'wpn_fps_aug_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: source['Base Game'],
		cost: 53e3,
		stats: {
			damage: 1,
			accuracy: 4,
			stability: 4,
			concealment: -3
		},
		compatibleWeapons: {
			assaultRifle: [
				'UAR'
			]
		}
	},
	'CQB Barrel (AK5)': {
		name: 'CQB Barrel (AK5)',
		image: 'wpn_fps_ass_ak5_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['The Butcher Mod Pack 2'],
		cost: 9e3,
		stats: {
			damage: 2,
			accuracy: 4,
			concealment: 2
		},
		compatibleWeapons: {
			assaultRifle: [
				'AK5'
			]
		}
	},
	'Long Barrel (Commando)': {
		name: 'Long Barrel (Commando)',
		image: 'wpn_fps_ass_s552_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Armored Transport'],
		cost: 52800,
		stats: {
			damage: 1,
			accuracy: 4,
			concealment: -4
		},
		compatibleWeapons: {
			assaultRifle: [
				'Commando 553'
			]
		}
	},
	'Short Barrel (Eagle Heavy)': {
		name: 'Short Barrel (Eagle Heavy)',
		image: 'wpn_fps_ass_scar_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Gage Weapon Pack #01'],
		cost: 29400,
		stats: {
			damage: 1,
			accuracy: -4,
			concealment: 3,
			threat: 4
		},
		compatibleWeapons: {
			assaultRifle: [
				'Eagle Heavy'
			]
		}
	},
	'Long Barrel (Eagle Heavy)': {
		name: 'Long Barrel (Eagle Heavy)',
		image: 'wpn_fps_ass_scar_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Gage Weapon Pack #01'],
		cost: 39200,
		stats: {
			accuracy: 8,
			concealment: -3
		},
		compatibleWeapons: {
			assaultRifle: [
				'Eagle Heavy'
			]
		}
	},
	'CQB Foregrip (Falcon)': {
		name: 'CQB Foregrip (Falcon)',
		image: 'wpn_fps_ass_fal_fg_01',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			assaultRifle: [
				'Falcon'
			]
		}
	},
	'Retro Foregrip': {
		name: 'Retro Foregrip',
		image: 'wpn_fps_ass_fal_fg_03',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			assaultRifle: [
				'Falcon'
			]
		}
	},
	'Marksman Foregrip': {
		name: 'Marksman Foregrip',
		image: 'wpn_fps_ass_fal_fg_04',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			assaultRifle: [
				'Falcon'
			]
		}
	},
	'Wooden Foregrip': {
		name: 'Wooden Foregrip',
		image: 'wpn_fps_ass_fal_fg_wood',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			assaultRifle: [
				'Falcon'
			]
		}
	},
	'Long Barrel (Clarion)': {
		name: 'Long Barrel (Clarion)',
		image: 'wpn_fps_ass_famas_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			assaultRifle: [
				'Clarion'
			]
		}
	},
	'Short Barrel (Clarion)': {
		name: 'Short Barrel (Clarion)',
		image: 'wpn_fps_ass_famas_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			assaultRifle: [
				'Clarion'
			]
		}
	},
	'Sniper Barrel': {
		name: 'Sniper Barrel',
		image: 'wpn_fps_ass_famas_b_sniper',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			assaultRifle: [
				'Clarion'
			]
		}
	},
	'Suppressed Barrel (Clarion)': {
		name: 'Suppressed Barrel (Clarion)',
		image: 'wpn_fps_ass_famas_b_suppressed',
		icon: 'inv_mod_silencer',
		slot: 'barrel',
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
		compatibleWeapons: {
			assaultRifle: [
				'Clarion'
			]
		}
	},
	'Fabulous Foregrip': {
		name: 'Fabulous Foregrip',
		image: 'wpn_fps_ass_galil_fg_fab',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			assaultRifle: [
				'Gecko 7.62'
			]
		}
	},
	'CQB Foregrip (Gecko)': {
		name: 'CQB Foregrip (Gecko)',
		image: 'wpn_fps_ass_galil_fg_mar',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			assaultRifle: [
				'Gecko 7.62'
			]
		}
	},
	'Light Foregrip': {
		name: 'Light Foregrip',
		image: 'wpn_fps_ass_galil_fg_sar',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Gage Assault Pack'],
		cost: 14e3,
		acquisition: {
			achievement: 'Unusual Suspects'
		},
		stats: {
			damage: 1,
			concealment: 1
		},
		compatibleWeapons: {
			assaultRifle: [
				'Gecko 7.62'
			]
		}
	},
	'Sniper Foregrip': {
		name: 'Sniper Foregrip',
		image: 'wpn_fps_ass_galil_fg_sniper',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			assaultRifle: [
				'Gecko 7.62'
			]
		}
	},
	'Assault Kit': {
		name: 'Assault Kit',
		image: 'wpn_fps_ass_g3_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			assaultRifle: [
				'Gewehr 3'
			]
		}
	},
	'DMR Kit (Gewehr)': {
		name: 'DMR Kit (Gewehr)',
		image: 'wpn_fps_ass_g3_b_sniper',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			assaultRifle: [
				'Gewehr 3'
			]
		}
	},
	'Prodigious Barrel': {
		name: 'Prodigious Barrel',
		image: 'wpn_fps_ass_l85a2_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Clover Character Pack'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			concealment: -3
		},
		compatibleWeapons: {
			assaultRifle: [
				'Queen\'s Wrath'
			]
		}
	},
	'Diminutive Barrel': {
		name: 'Diminutive Barrel',
		image: 'wpn_fps_ass_l85a2_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Clover Character Pack'],
		cost: 9e3,
		stats: {
			concealment: 3
		},
		compatibleWeapons: {
			assaultRifle: [
				'Queen\'s Wrath'
			]
		}
	},
	'CQB Barrel (Lion\'s Roar)': {
		name: 'CQB Barrel (Lion\'s Roar)',
		image: 'wpn_fps_ass_vhs_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Dragan Character Pack'],
		cost: 9e3,
		stats: {
			accuracy: -4,
			stability: 4,
			concealment: 3
		},
		compatibleWeapons: {
			assaultRifle: [
				'Lion\'s Roar'
			]
		}
	},
	'Precision Barrel': {
		name: 'Precision Barrel',
		image: 'wpn_fps_ass_vhs_b_sniper',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Dragan Character Pack'],
		cost: 9e3,
		stats: {
			accuracy: 8,
			concealment: -2
		},
		compatibleWeapons: {
			assaultRifle: [
				'Lion\'s Roar'
			]
		}
	},
	'Silenced Barrel (Lion\'s Roar)': {
		name: 'Silenced Barrel (Lion\'s Roar)',
		image: 'wpn_fps_ass_vhs_b_silenced',
		icon: 'inv_mod_silencer',
		slot: 'barrel',
		source: content['Dragan Character Pack'],
		cost: 14e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -1,
			stability: 12,
			threat: -18
		},
		compatibleWeapons: {
			assaultRifle: [
				'Lion\'s Roar'
			]
		},
		incompatibleSlot: ['barrelExt']
	},
	'Prototype Barrel (Valkyria)': {
		name: 'Prototype Barrel (Valkyria)',
		image: 'wpn_fps_ass_asval_b_proto',
		icon: 'inv_mod_silencer',
		slot: 'barrel',
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
		compatibleWeapons: {
			assaultRifle: [
				'Valkyria'
			]
		}
	},
	'AML Barrel': {
		name: 'AML Barrel',
		image: 'wpn_fps_ass_tecci_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			assaultRifle: [
				'Bootleg'
			]
		}
	},
	'Short Barrel (Union)': {
		name: 'Short Barrel (Union)',
		image: 'wpn_fps_corgi_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			accuracy: -8,
			concealment: 3
		},
		compatibleWeapons: {
			assaultRifle: [
				'Union 5.56'
			]
		}
	},
	'Tanker Barrel': {
		name: 'Tanker Barrel',
		image: 'wpn_fps_ass_ching_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['WW2 Weapon Pack'],
		cost: 9e3,
		stats: {
			stability: -16,
			concealment: 4
		},
		compatibleWeapons: {
			assaultRifle: [
				'Galant'
			]
		}
	},
	'Extended Mag': {
		name: 'Extended Mag',
		image: 'wpn_fps_sho_b_spas12_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: source.Community,
		cost: 9e3,
		stats: {
			magazine: 4,
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: {
			shotgun: [
				'Predator 12G'
			]
		}
	},
	'Sawed Off Barrel (Joceline)': {
		name: 'Sawed Off Barrel (Joceline)',
		image: 'wpn_fps_shot_b682_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: source.Community,
		cost: 9e3,
		stats: {
			accuracy: -16,
			stability: -12,
			concealment: 10
		},
		compatibleWeapons: {
			shotgun: [
				'Joceline O/U 12G'
			]
		}
	},
	'Short Barrel (IZHMA)': {
		name: 'Short Barrel (IZHMA)',
		image: 'wpn_fps_sho_saiga_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			shotgun: [
				'IZHMA 12G'
			]
		}
	},
	'Short Barrel (M1014)': {
		name: 'Short Barrel (M1014)',
		image: 'wpn_fps_sho_ben_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			shotgun: [
				'M1014'
			]
		}
	},
	'Long Barrel (M1014)': {
		name: 'Long Barrel (M1014)',
		image: 'wpn_fps_sho_ben_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			shotgun: [
				'M1014'
			]
		}
	},
	'Short Barrel (Raven)': {
		name: 'Short Barrel (Raven)',
		image: 'wpn_fps_sho_ksg_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			shotgun: [
				'Raven'
			]
		}
	},
	'Long Barrel (Raven)': {
		name: 'Long Barrel (Raven)',
		image: 'wpn_fps_sho_ksg_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			shotgun: [
				'Raven'
			]
		}
	},
	'Long Barrel (Steakout)': {
		name: 'Long Barrel (Steakout)',
		image: 'wpn_fps_sho_aa12_barrel_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			shotgun: [
				'Steakout 12G'
			]
		}
	},
	'Suppressed Barrel (Steakout)': {
		name: 'Suppressed Barrel (Steakout)',
		image: 'wpn_fps_sho_aa12_barrel_silenced',
		icon: 'inv_mod_silencer',
		slot: 'barrel',
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
		compatibleWeapons: {
			shotgun: [
				'Steakout 12G'
			]
		},
		incompatibleSlot: ['barrelExt']
	},
	'Long Barrel (Breaker)': {
		name: 'Long Barrel (Breaker)',
		image: 'wpn_fps_sho_boot_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Biker Character Pack'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			stability: 4,
			concealment: -3
		},
		compatibleWeapons: {
			shotgun: [
				'Breaker 12G'
			]
		}
	},
	'Road Warrior Barrel': {
		name: 'Road Warrior Barrel',
		image: 'wpn_fps_shot_huntsman_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: source['Base Game'],
		cost: 80e3,
		stats: {
			accuracy: -16,
			stability: -16,
			concealment: 10
		},
		compatibleWeapons: {
			shotgun: [
				'Mosconi 12G'
			]
		}
	},
	'Short Barrel (Breaker)': {
		name: 'Short Barrel (Breaker)',
		image: 'wpn_fps_sho_boot_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Biker Character Pack'],
		cost: 9e3,
		stats: {
			accuracy: -4,
			stability: -4,
			concealment: 3
		},
		compatibleWeapons: {
			shotgun: [
				'Breaker 12G'
			]
		}
	},
	'Huntsman Barrel': {
		name: 'Huntsman Barrel',
		image: 'wpn_fps_sho_m1897_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Gunslinger Weapon Pack'],
		cost: 9e3,
		stats: {
			accuracy: 8,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: {
			shotgun: [
				'Reinfeld 88'
			]
		}
	},
	'Ventilated Barrel': {
		name: 'Ventilated Barrel',
		image: 'wpn_fps_sho_m1897_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Gunslinger Weapon Pack'],
		cost: 9e3,
		stats: {
			accuracy: -8,
			concealment: 2
		},
		compatibleWeapons: {
			shotgun: [
				'Reinfeld 88'
			]
		}
	},
	'CE Extender': {
		name: 'CE Extender',
		image: 'wpn_fps_sho_m590_b_xxx',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Jiu Feng Smuggler Pack'],
		cost: 9e3,
		stats: {
			magazine: 4,
			accuracy: 4,
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: {
			shotgun: [
				'Mosconi 12G Tactical'
			]
		}
	},
	'CE Muffler': {
		name: 'CE Muffler',
		image: 'wpn_fps_sho_m590_b_xxx___',
		icon: 'inv_mod_silencer',
		slot: 'barrel',
		source: content['Jiu Feng Smuggler Pack'],
		cost: 9e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			accuracy: -8,
			concealment: -1,
			threat: -22
		},
		compatibleWeapons: {
			shotgun: [
				'Mosconi 12G Tactical'
			]
		}
	},
	'Short Barrel (Goliath)': {
		name: 'Short Barrel (Goliath)',
		image: 'wpn_fps_sho_rota_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			accuracy: -8,
			concealment: 3
		},
		compatibleWeapons: {
			shotgun: [
				'Goliath 12G'
			],
			akimboShotgun: [
				'Akimbo Goliath 12G'
			]
		}
	},
	'Silenced Barrel (Goliath)': {
		name: 'Silenced Barrel (Goliath)',
		image: 'wpn_fps_sho_rota_b_silencer',
		icon: 'inv_mod_silencer',
		slot: 'barrel',
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
		compatibleWeapons: {
			shotgun: [
				'Goliath 12G'
			],
			akimboShotgun: [
				'Akimbo Goliath 12G'
			]
		},
		incompatibleSlot: ['barrelExt']
	},
	'Long Barrel (VD-12)': {
		name: 'Long Barrel (VD-12)',
		image: 'wpn_fps_sho_sko12_b_long', // TODO image
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['McShay Weapon Pack 2'],
		cost: 9e3,
		stats: {
			damage: 2,
			accuracy: 8,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: {
			shotgun: [
				'VD-12'
			]
		}
	},
	'Short Barrel (VD-12)': {
		name: 'Short Barrel (VD-12)',
		image: 'wpn_fps_sho_sko12_b_short', // TODO image
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['McShay Weapon Pack 2'],
		cost: 9e3,
		stats: {
			accuracy: -4,
			stability: -4,
			concealment: 2
		},
		compatibleWeapons: {
			shotgun: [
				'VD-12'
			]
		}
	},
	'Long Barrel (Rattlesnake)': {
		name: 'Long Barrel (Rattlesnake)',
		image: 'wpn_fps_snp_msr_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Gage Sniper Pack'],
		cost: 7200,
		acquisition: {
			achievement: 'Public Enemy No. 1'
		},
		stats: {
			accuracy: 4,
			concealment: -3
		},
		compatibleWeapons: {
			sniper: [
				'Rattlesnake'
			]
		}
	},
	'Short Barrel (R93)': {
		name: 'Short Barrel (R93)',
		image: 'wpn_fps_snp_r93_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			sniper: [
				'R93'
			]
		}
	},
	'Compensated Suppressor': {
		name: 'Compensated Suppressor',
		image: 'wpn_fps_snp_r93_b_suppressed',
		icon: 'inv_mod_silencer',
		slot: 'barrel',
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
		compatibleWeapons: {
			sniper: [
				'R93'
			]
		}
	},
	'Tank Buster Barrel': {
		name: 'Tank Buster Barrel',
		image: 'wpn_fps_snp_m95_barrel_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			sniper: [
				'Thanatos .50 cal'
			]
		}
	},
	'CQB Barrel (Thanatos)': {
		name: 'CQB Barrel (Thanatos)',
		image: 'wpn_fps_snp_m95_barrel_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Gage Sniper Pack'],
		cost: 7200,
		acquisition: {
			achievement: 'Surprise Motherfucker'
		},
		stats: {
			accuracy: -12,
			concealment: 3
		},
		compatibleWeapons: {
			sniper: [
				'Thanatos .50 cal'
			]
		}
	},
	'Suppressed Barrel (Thanatos)': {
		name: 'Suppressed Barrel (Thanatos)',
		image: 'wpn_fps_snp_m95_barrel_suppressed',
		icon: 'inv_mod_silencer',
		slot: 'barrel',
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
		compatibleWeapons: {
			sniper: [
				'Thanatos .50 cal'
			]
		}
	},
	'Short Barrel (Nagant)': {
		name: 'Short Barrel (Nagant)',
		image: 'wpn_fps_snp_mosin_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Gage Historical Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Wind of Change'
		},
		stats: {
			accuracy: -4,
			concealment: 3
		},
		compatibleWeapons: {
			sniper: [
				'Nagant'
			]
		}
	},
	'Long Barrel (Nagant)': {
		name: 'Long Barrel (Nagant)',
		image: 'wpn_fps_snp_mosin_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Gage Historical Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Death From Below'
		},
		stats: {
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			sniper: [
				'Nagant'
			]
		}
	},
	'Silenced Barrel (Nagant)': {
		name: 'Silenced Barrel (Nagant)',
		image: 'wpn_fps_snp_mosin_b_sniper',
		icon: 'inv_mod_silencer',
		slot: 'barrel',
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
		compatibleWeapons: {
			sniper: [
				'Nagant'
			]
		}
	},
	'Long Range Barrel': {
		name: 'Long Range Barrel',
		image: 'wpn_fps_snp_winchester_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['The Butcher\'s Western Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			accuracy: 4,
			concealment: -2
		},
		compatibleWeapons: {
			sniper: [
				'Repeater 1874'
			]
		}
	},
	'Outlaw\'s Silenced Barrel': {
		name: 'Outlaw\'s Silenced Barrel',
		image: 'wpn_fps_snp_winchester_b_suppressed',
		icon: 'inv_mod_silencer',
		slot: 'barrel',
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
		compatibleWeapons: {
			sniper: [
				'Repeater 1874'
			]
		}
	},
	'Langer Barrel': {
		name: 'Langer Barrel',
		image: 'wpn_fps_snp_wa2000_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Gage Ninja Pack'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			concealment: -3
		},
		compatibleWeapons: {
			sniper: [
				'Lebensauger .308'
			]
		}
	},
	'Gedämpfter Barrel': {
		name: 'Gedämpfter Barrel',
		image: 'wpn_fps_snp_wa2000_b_suppressed',
		icon: 'inv_mod_silencer',
		slot: 'barrel',
		source: content['Gage Ninja Pack'],
		cost: 44e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -4,
			accuracy: -4,
			stability: 8,
			concealment: -2,
			threat: -18
		},
		compatibleWeapons: {
			sniper: [
				'Lebensauger .308'
			]
		}
	},
	'Long Barrel (Desertfox)': {
		name: 'Long Barrel (Desertfox)',
		image: 'wpn_fps_snp_desertfox_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['John Wick Weapon Pack'],
		cost: 21e3,
		acquisition: {
			infinite: true
		},
		stats: {
			accuracy: 12,
			concealment: -3
		},
		compatibleWeapons: {
			sniper: [
				'Desertfox'
			]
		}
	},
	'Silenced Barrel (Desertfox)': {
		name: 'Silenced Barrel (Desertfox)',
		image: 'wpn_fps_snp_desertfox_b_silencer',
		icon: 'inv_mod_silencer',
		slot: 'barrel',
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
		compatibleWeapons: {
			sniper: [
				'Desertfox'
			]
		}
	},
	'Grievky Compensator': {
		name: 'Grievky Compensator',
		image: 'wpn_fps_snp_siltstone_ns_variation_b',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Gage Russian Weapon Pack'],
		cost: 9e3,
		stats: {
			accuracy: 8,
			stability: 8
		},
		compatibleWeapons: {
			sniper: [
				'Grom'
			]
		}
	},
	'Tikho Barrel': {
		name: 'Tikho Barrel',
		image: 'wpn_fps_snp_siltstone_b_silenced',
		icon: 'inv_mod_silencer',
		slot: 'barrel',
		source: content['Gage Russian Weapon Pack'],
		cost: 44e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -2,
			accuracy: -4,
			stability: 4,
			threat: -18
		},
		compatibleWeapons: {
			sniper: [
				'Grom'
			]
		}
	},
	'Short Barrel (R700)': {
		name: 'Short Barrel (R700)',
		image: 'wpn_fps_snp_r700_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			sniper: [
				'R700'
			]
		}
	},
	'Medium Barrel (R700)': {
		name: 'Medium Barrel (R700)',
		image: 'wpn_fps_snp_r700_b_medium',
		icon: 'inv_mod_silencer',
		slot: 'barrel',
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
		compatibleWeapons: {
			sniper: [
				'R700'
			]
		}
	},
	'Deep Range Barrel': {
		name: 'Deep Range Barrel',
		image: 'wpn_fps_snp_sbl_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Gunslinger Weapon Pack'],
		cost: 9e3,
		stats: {
			accuracy: 12,
			stability: 4,
			concealment: -3
		},
		compatibleWeapons: {
			sniper: [
				'Bernetti Rangehitter'
			]
		}
	},
	'Wind Whistler Barrel': {
		name: 'Wind Whistler Barrel',
		image: 'wpn_fps_snp_sbl_b_short',
		icon: 'inv_mod_silencer',
		slot: 'barrel',
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
		compatibleWeapons: {
			sniper: [
				'Bernetti Rangehitter'
			]
		}
	},
	'Short Barrel (KSP 58)': {
		name: 'Short Barrel (KSP 58)',
		image: 'wpn_fps_lmg_par_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: source['Base Game'],
		cost: 0,
		acquisition: {
			bonus: 1
		},
		stats: {
			concealment: 2
		},
		compatibleWeapons: {
			lightMachineGun: [
				'KSP'
			]
		}
	},
	'Long Barrel (KSP)': {
		name: 'Long Barrel (KSP)',
		image: 'wpn_fps_lmg_m249_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Gage Weapon Pack #02'],
		cost: 50400,
		stats: {
			damage: -1,
			accuracy: 4,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: {
			lightMachineGun: [
				'KSP'
			]
		}
	},
	'Short Barrel (Akron HC)': {
		name: 'Short Barrel (Akron HC)',
		image: 'wpn_fps_lmg_hcar_barrel_short', // TODO image
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['McShay Weapon Pack 3'],
		cost: 14e3,
		stats: {
			accuracy: -4,
			stability: -4,
			concealment: 2
		},
		compatibleWeapons: {
			lightMachineGun: [
				'Akron HC'
			]
		}
	},
	'DMR Barrel': {
		name: 'DMR Barrel',
		image: 'wpn_fps_lmg_hcar_barrel_dmr', // TODO image
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['McShay Weapon Pack 3'],
		cost: 21e3,
		stats: {
			magazine: -10,
			totalAmmo: -80,
			damage: 40
		},
		compatibleWeapons: {
			lightMachineGun: [
				'Akron HC'
			]
		}
	},
	'Long Barrel (Brenner)': {
		name: 'Long Barrel (Brenner)',
		image: 'wpn_fps_lmg_hk21_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Gage Weapon Pack #02'],
		cost: 28e3,
		stats: {
			damage: -1,
			accuracy: 4,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: {
			lightMachineGun: [
				'Brenner-21'
			]
		}
	},
	'Light Barrel': {
		name: 'Light Barrel',
		image: 'wpn_fps_lmg_mg42_b_mg34',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			lightMachineGun: [
				'Buzzsaw 42'
			]
		}
	},
	'Heatsinked Suppressed Barrel (Buzzsaw)': {
		name: 'Heatsinked Suppressed Barrel (Buzzsaw)',
		image: 'wpn_fps_lmg_mg42_b_vg38',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			lightMachineGun: [
				'Buzzsaw 42'
			]
		},
		incompatibleSlot: ['barrelExt']
	},
	'Pirate Barrel': {
		name: 'Pirate Barrel',
		image: 'wpn_fps_gre_m79_barrel_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			special: [
				'GL40'
			]
		}
	},
	'Aerial Assault Barrel': {
		name: 'Aerial Assault Barrel',
		image: 'wpn_fps_lmg_m134_barrel_extreme',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			special: [
				'Vulcan Minigun'
			]
		}
	},
	'The Stump Barrel': {
		name: 'The Stump Barrel',
		image: 'wpn_fps_lmg_m134_barrel_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			special: [
				'Vulcan Minigun'
			]
		}
	},
	'Short Barrel (Piglet)': {
		name: 'Short Barrel (Piglet)',
		image: 'wpn_fps_gre_m32_barrel_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			special: [
				'Piglet'
			]
		}
	},
	'v1.4 Barrel': {
		name: 'v1.4 Barrel',
		image: 'wpn_fps_hailstorm_b_extended', // TODO image
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['McShay Weapon Pack 2'],
		cost: 9e3,
		stats: {
			damage: 1,
			accuracy: 4,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: {
			special: [
				'Hailstorm Mk 5'
			]
		}
	},
	'v3.8 Barrel': {
		name: 'v3.8 Barrel',
		image: 'wpn_fps_hailstorm_b_ext_suppressed', // TODO image
		icon: 'inv_mod_silencer',
		slot: 'barrel',
		source: content['McShay Weapon Pack 2'],
		cost: 9e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -2,
			accuracy: 8,
			stability: 4,
			concealment: -3,
			threat: -18
		},
		compatibleWeapons: {
			special: [
				'Hailstorm Mk 5'
			]
		}
	},
	'v2.2 Barrel': {
		name: 'v2.2 Barrel',
		image: 'wpn_fps_hailstorm_b_suppressed', // TODO image
		icon: 'inv_mod_silencer',
		slot: 'barrel',
		source: content['McShay Weapon Pack 2'],
		cost: 9e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			damage: -1,
			accuracy: 4,
			stability: 4,
			concealment: -2,
			threat: -18
		},
		compatibleWeapons: {
			special: [
				'Hailstorm Mk 5'
			]
		}
	},
	'Prototype Barrel (White Streak)': {
		name: 'Prototype Barrel (White Streak)',
		image: 'wpn_fps_pis_pl14_b_comp',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: source['Base Game'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			accuracy: 4,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'White Streak'
			]
		},
		incompatibleSlot: [] // Suppressors
	},
	'Threaded Barrel (M13)': {
		name: 'Threaded Barrel (M13)',
		image: 'wpn_fps_pis_legacy_b_threaded',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			stability: -4,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'M13 9mm'
			]
		}
	},
	'Pesante Barrel': {
		name: 'Pesante Barrel',
		image: 'wpn_fps_pis_2006m_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['The Alesso Heist'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'Matever .357'
			]
		}
	},
	'Medio Barrel': {
		name: 'Medio Barrel',
		image: 'wpn_fps_pis_2006m_b_medium',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['The Alesso Heist'],
		cost: 9e3,
		stats: {
			accuracy: -4,
			concealment: 2
		},
		compatibleWeapons: {
			pistol: [
				'Matever .357'
			]
		}
	},
	'Pisccolo Barrel': {
		name: 'Pisccolo Barrel',
		image: 'wpn_fps_pis_2006m_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['The Alesso Heist'],
		cost: 9e3,
		stats: {
			accuracy: -8,
			concealment: 4
		},
		compatibleWeapons: {
			pistol: [
				'Matever .357'
			]
		}
	},
	'Ported Barrel': {
		name: 'Ported Barrel',
		image: 'wpn_fps_pis_sparrow_b_comp',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['The Point Break Heists'],
		cost: 9e3,
		stats: {
			accuracy: 4
		},
		compatibleWeapons: {
			pistol: [
				'Baby Deagle'
			]
		},
		incompatibleSlot: ['barrelExt']
	},
	'Threaded Barrel (Baby Deagle)': {
		name: 'Threaded Barrel (Baby Deagle)',
		image: 'wpn_fps_pis_sparrow_b_threaded',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['The Point Break Heists'],
		cost: 9e3,
		stats: {
			stability: 4
		},
		compatibleWeapons: {
			pistol: [
				'Baby Deagle'
			]
		}
	},
	'Weller Barrel': {
		name: 'Weller Barrel',
		image: 'wpn_fps_pis_beer_b_robo',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			pistol: [
				'Bernetti Auto'
			]
		}
	},
	'Sicario Barrel': {
		name: 'Sicario Barrel',
		image: 'wpn_fps_pis_czech_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			pistol: [
				'Czech 92'
			]
		}
	},
	'Tirador Barrel': {
		name: 'Tirador Barrel',
		image: 'wpn_fps_pis_stech_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Federales Weapon Pack'],
		cost: 36e3,
		stats: {
			accuracy: 4,
			concealment: -2,
			threat: 2
		},
		compatibleWeapons: {
			pistol: [
				'Igor Automatik'
			]
		}
	},
	'Opera Long Barrel': {
		name: 'Opera Long Barrel',
		image: 'wpn_fps_pis_model3_bar_xxx',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Gunslinger Weapon Pack'],
		cost: 9e3,
		stats: {
			accuracy: 8,
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			pistol: [
				'Frenchman Model 87'
			]
		}
	},
	'Napoleon Barrel': {
		name: 'Napoleon Barrel',
		image: 'wpn_fps_pis_model3_bar_xxx__',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Gunslinger Weapon Pack'],
		cost: 9e3,
		stats: {
			accuracy: -4,
			concealment: 2
		},
		compatibleWeapons: {
			pistol: [
				'Frenchman Model 87'
			]
		}
	},
	'Reinforced Barrel': {
		name: 'Reinforced Barrel',
		image: 'wpn_fps_pis_breech_b_reinforced',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['WW2 Weapon Pack'],
		cost: 9e3,
		stats: {
			accuracy: 8
		},
		compatibleWeapons: {
			pistol: [
				'Parabellum'
			]
		}
	},
	'Short Barrel (Parabellum)': {
		name: 'Short Barrel (Parabellum)',
		image: 'wpn_fps_pis_breech_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['WW2 Weapon Pack'],
		cost: 9e3,
		stats: {
			accuracy: -8,
			concealment: 2
		},
		compatibleWeapons: {
			pistol: [
				'Parabellum'
			]
		}
	},
	'TiN Treated Barrel': {
		name: 'TiN Treated Barrel',
		image: 'wpn_fps_pis_lemming_b_nitride',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: source.Community,
		cost: 21e3,
		stats: {
			accuracy: 4,
			stability: 4
		},
		compatibleWeapons: {
			pistol: [
				'5/7 AP'
			]
		}
	},
	'Diablo Barrel': {
		name: 'Diablo Barrel',
		image: 'wpn_fps_pis_chinchilla_b_satan',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			accuracy: 8
		},
		compatibleWeapons: {
			pistol: [
				'Castigo .44'
			]
		}
	},
	'Stubby Barrel': {
		name: 'Stubby Barrel',
		image: 'wpn_fps_smg_thompson_barrel_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: source.Community,
		cost: 14e3,
		stats: {
			accuracy: -4,
			concealment: 3
		},
		compatibleWeapons: {
			submachineGun: [
				'Chicago Typewriter'
			]
		}
	},
	'Long Barrel (Chicago Typewriter)': {
		name: 'Long Barrel (Chicago Typewriter)',
		image: 'wpn_fps_smg_thompson_barrel_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: source.Community,
		cost: 28e3,
		stats: {
			accuracy: 4,
			concealment: -3
		},
		compatibleWeapons: {
			submachineGun: [
				'Chicago Typewriter'
			]
		}
	},
	'Medium Barrel (Para)': {
		name: 'Medium Barrel (Para)',
		image: 'wpn_fps_m4_uupg_b_medium',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			concealment: -1
		},
		compatibleWeapons: {
			submachineGun: [
				'Para'
			]
		}
	},
	'Long Barrel (Kobus)': {
		name: 'Long Barrel (Kobus)',
		image: 'wpn_fps_smg_p90_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: source['Base Game'],
		cost: 62e3,
		stats: {
			damage: 2,
			accuracy: 4,
			stability: 12,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'Kobus 90'
			]
		}
	},
	'Civilian Market Barrel': {
		name: 'Civilian Market Barrel',
		image: 'wpn_fps_smg_p90_b_civilian',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			submachineGun: [
				'Kobus 90'
			]
		}
	},
	'Mall Ninja Barrel': {
		name: 'Mall Ninja Barrel',
		image: 'wpn_fps_smg_p90_b_ninja',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			submachineGun: [
				'Kobus 90'
			]
		},
		incompatibleSlot: ['barrelExt']
	},
	'Grease Barrel': {
		name: 'Grease Barrel',
		image: 'wpn_fps_smg_m45_b_small',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Armored Transport'],
		cost: 16800,
		stats: {
			accuracy: -8,
			concealment: 3
		},
		compatibleWeapons: {
			submachineGun: [
				'Swedish K'
			]
		}
	},
	'Swedish Barrel': {
		name: 'Swedish Barrel',
		image: 'wpn_fps_smg_m45_b_green',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Armored Transport'],
		cost: 25200,
		stats: {
			accuracy: 4,
			concealment: -1
		},
		compatibleWeapons: {
			submachineGun: [
				'Swedish K'
			]
		}
	},
	'Short Barrel (Blaster)': {
		name: 'Short Barrel (Blaster)',
		image: 'wpn_fps_smg_tec9_b_standard',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			submachineGun: [
				'Blaster 9mm'
			]
		}
	},
	'Ghetto Blaster': {
		name: 'Ghetto Blaster',
		image: 'wpn_fps_smg_tec9_ns_ext',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			submachineGun: [
				'Blaster 9mm'
			]
		}
	},
	'Long Barrel (Patchett)': {
		name: 'Long Barrel (Patchett)',
		image: 'wpn_fps_smg_sterling_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			submachineGun: [
				'Patchett L2A1'
			]
		}
	},
	'Short Barrel (Patchett)': {
		name: 'Short Barrel (Patchett)',
		image: 'wpn_fps_smg_sterling_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			submachineGun: [
				'Patchett L2A1'
			]
		}
	},
	'Heatsinked Suppressed Barrel (Patchett)': {
		name: 'Heatsinked Suppressed Barrel (Patchett)',
		image: 'wpn_fps_smg_sterling_b_e11',
		icon: 'inv_mod_silencer',
		slot: 'barrel',
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
		compatibleWeapons: {
			submachineGun: [
				'Patchett L2A1'
			]
		},
		incompatibleSlot: ['barrelExt']
	},
	'Suppressed Barrel (Patchett)': {
		name: 'Suppressed Barrel (Patchett)',
		image: 'wpn_fps_smg_sterling_b_suppressed',
		icon: 'inv_mod_silencer',
		slot: 'barrel',
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
		compatibleWeapons: {
			submachineGun: [
				'Patchett L2A1'
			]
		}
	},
	'Custom Barrel': {
		name: 'Custom Barrel',
		image: 'wpn_fps_smg_baka_b_comp',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Yakuza Character Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			accuracy: 4,
			concealment: -1
		},
		compatibleWeapons: {
			submachineGun: [
				'Micro Uzi'
			]
		}
	},
	'Civilian Barrel': {
		name: 'Civilian Barrel',
		image: 'wpn_fps_smg_schakal_b_civil',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['John Wick Weapon Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		stats: {
			accuracy: 4,
			concealment: -1
		},
		compatibleWeapons: {
			submachineGun: [
				'Jackal'
			]
		}
	},
	'Medium Barrel (CR)': {
		name: 'Medium Barrel (CR)',
		image: 'wpn_fps_smg_hajk_b_medium',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['The Biker Heist'],
		cost: 9e3,
		stats: {
			accuracy: -4,
			concealment: 2
		},
		compatibleWeapons: {
			submachineGun: [
				'CR 805B'
			]
		}
	},
	'Short Barrel (CR)': {
		name: 'Short Barrel (CR)',
		image: 'wpn_fps_smg_hajk_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['The Biker Heist'],
		cost: 9e3,
		stats: {
			accuracy: -12,
			concealment: 5
		},
		compatibleWeapons: {
			submachineGun: [
				'CR 805B'
			]
		}
	},
	'MG8 Precision Barrel': {
		name: 'MG8 Precision Barrel',
		image: 'wpn_fps_smg_vityaz_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Jiu Feng Smuggler Pack'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: {
			submachineGun: [
				'AK Gen 21 Tactical'
			]
		}
	},
	'BY90 Wide Suppressor': {
		name: 'BY90 Wide Suppressor',
		image: 'wpn_fps_smg_vityaz_b_xxx',
		icon: 'inv_mod_silencer',
		slot: 'barrel',
		source: content['Jiu Feng Smuggler Pack'],
		cost: 9e3,
		specialEffect: ['Silences Weapon'],
		stats: {
			accuracy: -4,
			concealment: -1,
			threat: -16.8
		},
		compatibleWeapons: {
			submachineGun: [
				'AK Gen 21 Tactical'
			]
		}
	},
	'Sawed Off Barrel (Claire)': {
		name: 'Sawed Off Barrel (Claire)',
		image: 'wpn_fps_shot_coach_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: source.Community,
		cost: 9e3,
		stats: {
			accuracy: -16,
			stability: -16,
			concealment: 10
		},
		compatibleWeapons: {
			shotgun: [
				'Claire 12G'
			]
		}
	},
	'Long Barrel (Street Sweeper)': {
		name: 'Long Barrel (Street Sweeper)',
		image: 'wpn_fps_sho_striker_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			shotgun: [
				'Claire 12G'
			]
		}
	},
	'Suppressed Barrel (Street Sweeper)': {
		name: 'Suppressed Barrel (Street Sweeper)',
		image: 'wpn_fps_sho_striker_b_suppressed',
		icon: 'inv_mod_silencer',
		slot: 'barrel',
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
		compatibleWeapons: {
			shotgun: [
				'Street Sweeper'
			]
		},
		incompatibleSlot: ['barrelExt']
	},
	'Riot Barrel': {
		name: 'Riot Barrel',
		image: 'wpn_fps_shot_m37_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['The Goat Simulator Heist'],
		cost: 9e3,
		stats: {
			accuracy: -8,
			concealment: 2
		},
		compatibleWeapons: {
			shotgun: [
				'GSPS 12G'
			]
		}
	},
	'Carbon Limb': {
		name: 'Carbon Limb',
		image: 'wpn_fps_shot_m37_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Gage Ninja Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			concealment: 1
		},
		compatibleWeapons: {
			special: [
				'Pistol Crossbow'
			]
		}
	},
	'Skeletal Limb': {
		name: 'Skeletal Limb',
		image: 'wpn_fps_bow_hunter_b_skeletal',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Gage Ninja Pack'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			concealment: 1
		},
		compatibleWeapons: {
			special: [
				'Pistol Crossbow'
			]
		}
	},
	'Bombardier Barrel': {
		name: 'Bombardier Barrel',
		image: 'wpn_fps_gre_arbiter_b_comp',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			special: [
				'Arbiter'
			]
		}
	},
	'Merlin Nozzle': {
		name: 'Merlin Nozzle',
		image: 'wpn_fps_fla_system_b_wtf',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			totalAmmo: -350,
			concealment: 5
		},
		compatibleWeapons: {
			special: [
				'MA-17 Flamethrower'
			]
		}
	},
	'Long Barrel (Arbiter)': {
		name: 'Long Barrel (Arbiter)',
		image: 'wpn_fps_gre_arbiter_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
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
		compatibleWeapons: {
			special: [
				'Arbiter'
			]
		}
	},
	'Fang Barrel': {
		name: 'Fang Barrel',
		image: '???',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['McShay Weapon Pack'],
		cost: 9e3,
		stats: {
			accuracy: 28,
			stability: 20,
			concealment: -2
		},
		compatibleWeapons: {
			special: [
				'Basilisk 3V'
			]
		}
	},
	'Longshot Suppressor': {
		name: 'Longshot Suppressor',
		image: 'wpn_fps_snp_scout_ns_suppressor',
		icon: 'inv_mod_silencer',
		slot: 'barrel',
		source: content['McShay Weapon Pack'],
		cost: 9e3,
		stats: {
			damage: -2,
			accuracy: 12,
			stability: 4,
			concealment: -2,
			threat: -22
		},
		compatibleWeapons: {
			sniper: [
				'Pronghorn'
			]
		}
	},
	'Long Barrel (Aran G2)': {
		name: 'Long Barrel (Aran G2)',
		image: 'wpn_fps_snp_contender_barrel_long', // TODO image
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['McShay Weapon Pack 3'],
		cost: 9e3,
		stats: {
			damage: 12,
			accuracy: 4,
			concealment: -3
		},
		compatibleWeapons: {
			sniper: [
				'Aran G2'
			]
		}
	},
	'Short Barrel (Aran G2)': {
		name: 'Short Barrel (Aran G2)',
		image: 'wpn_fps_snp_contender_barrel_short', // TODO image
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['McShay Weapon Pack 3'],
		cost: 9e3,
		stats: {
			accuracy: -8,
			stability: -8,
			concealment: 2
		},
		compatibleWeapons: {
			sniper: [
				'Aran G2'
			]
		}
	},
	'Kalt Barrel': {
		name: 'Kalt Barrel',
		image: 'wpn_fps_lmg_hk51b_b_fluted',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['McShay Weapon Pack'],
		cost: 28e3,
		stats: {
			damage: 2,
			accuracy: 8,
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: {
			lightMachineGun: [
				'SG Versteckt 51D'
			]
		}
	},
	'UpShot Barrel': {
		name: 'UpShot Barrel',
		image: 'wpn_fps_pis_maxim9_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Jiu Feng Smuggler Pack 4'],
		cost: 11200,
		stats: {
			accuracy: 12,
			stability: 8,
			concealment: -3
		},
		compatibleWeapons: {
			pistol: [
				'Gecko M2'
			]
		}
	},
	'Pinnacle Barrel': {
		name: 'Pinnacle Barrel',
		image: 'wpn_fps_pis_maxim9_b_marksman',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Jiu Feng Smuggler Pack 4'],
		cost: 11200,
		stats: {
			accuracy: 4,
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Gecko M2'
			]
		}
	},
	'Short Barrel (M60)': {
		name: 'Short Barrel (M60)',
		image: 'wpn_fps_lmg_m60_b_short',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Fugitive Weapon Pack'],
		cost: 21e3,
		stats: {
			accuracy: -4,
			stability: 4
		},
		compatibleWeapons: {
			lightMachineGun: [
				'M60'
			]
		}
	},
	'KA54 Barrel Extender': {
		name: 'KA54 Barrel Extender',
		image: 'KA54_Barrel_Extender',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Jiu Feng Smuggler Pack 3'],
		cost: 21e3,
		stats: {
			accuracy: 4,
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: {
			pistol: [
				'Káng Arms Model 54'
			]
		}
	},
	'RUS-J Long Valley Barrel and Stabilizer': {
		name: 'RUS-J Long Valley Barrel and Stabilizer',
		image: 'RUS-J_Long_Valley_Barrel_and_Stabilizer',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Jiu Feng Smuggler Pack 3'],
		cost: 32e3,
		stats: {
			damage: 4,
			accuracy: 12,
			stability: 4,
			concealment: -3
		},
		compatibleWeapons: {
			pistol: [
				'RUS-12 Angry Tiger'
			]
		}
	},
	'RUS-K Tactical Short Barrel': {
		name: 'RUS-K Tactical Short Barrel',
		image: 'RUS-K_Tactical_Short_Barrel',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Jiu Feng Smuggler Pack 3'],
		cost: 21e3,
		stats: {
			accuracy: -8,
			stability: -8,
			concealment: 2
		},
		compatibleWeapons: {
			pistol: [
				'RUS-12 Angry Tiger'
			]
		}
	},
	'K-B100 Suppressor': {
		name: 'K-B100 Suppressor',
		image: 'K-B100_Suppressor',
		icon: 'inv_mod_silencer',
		slot: 'barrel',
		source: content['Jiu Feng Smuggler Pack 2'],
		cost: 9e3,
		stats: {
			damage: -1,
			accuracy: -4,
			concealment: 1,
			threat: -12
		},
		compatibleWeapons: {
			assaultRifle: [
				'KETCHNOV Byk-1'
			]
		}
	},
	'KA-ZD1A Long Barrel': {
		name: 'KA-ZD1A Long Barrel',
		image: 'KA-ZD1A_Long_Barrel',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Jiu Feng Smuggler Pack 2'],
		cost: 14e3,
		stats: {
			accuracy: 8,
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: {
			sniper: [
				'Káng Arms X1'
			]
		}
	},
	'KA-ZD1B Short Barrel': {
		name: 'KA-ZD1B Short Barrel',
		image: 'KA-ZD1B_Short_Barrel',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Jiu Feng Smuggler Pack 2'],
		cost: 14e3,
		stats: {
			accuracy: -4,
			concealment: 1
		},
		compatibleWeapons: {
			sniper: [
				'Káng Arms X1'
			]
		}
	},
	'MS10 Short Barrel': {
		name: 'MS10 Short Barrel',
		image: 'MS10_Short_Barrel',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: content['Jiu Feng Smuggler Pack 2'],
		cost: 9e3,
		stats: {
			accuracy: -4,
			stability: -8,
			concealment: 2
		},
		compatibleWeapons: {
			submachineGun: [
				'Miyaka 10 Special'
			]
		}
	}
}

export default barrel