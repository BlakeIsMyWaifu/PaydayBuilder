import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import akimboShotuns from '../primary/akimboShotuns'
import assaultRifles from '../primary/assaultRifles'
import lightMachineGuns from '../primary/lightMachineGuns'
import primaryShotguns from '../primary/shotgunsPrimary'
import snipers from '../primary/snipers'
import primarySpecials from '../primary/specialsPrimary'
import secondaryShotguns from '../secondary/shotgunsSecondary'
import secondarySpecials from '../secondary/specialsSecondary'
import { WeaponData, WeaponModificationList } from '../weaponTypes'

const mainSnipers: WeaponData[] = [
	snipers['Platypus 70 Sniper Rifle'],
	snipers['Rattlesnake Sniper Rifle'],
	snipers['R93 Sniper Rifle'],
	snipers['Thanatos .50 cal Sniper Rifle'],
	snipers['Nagant Sniper Rifle'],
	snipers['Lebensauger .308 Sniper Rifle'],
	snipers['Desertfox Sniper Rifle'],
	snipers['Contractor .308 Sniper Rifle'],
	snipers['Grom Sniper Rifle'],
	snipers['R700 Sniper Rifle'],
	snipers['Bernetti Rangehitter Sniper Rifle']
]

const mainGuns: WeaponData[] = [
	...Object.values(assaultRifles),
	primaryShotguns['Predator 12G Shotgun'],
	primaryShotguns['Reinfeld 880 Shotgun'],
	primaryShotguns['IZHMA 12G Shotgun'],
	primaryShotguns['M1014 Shotgun'],
	primaryShotguns['Raven Shotgun'],
	primaryShotguns['Steakout 12G Shotgun'],
	primaryShotguns['Breaker 12G Shotgun'],
	primaryShotguns['Reinfeld 88 Shotgun'],
	primaryShotguns['Mosconi 12G Tactical Shotgun'],
	...Object.values(akimboShotuns),
	...mainSnipers,
	...Object.values(lightMachineGuns),
	primarySpecials['Vulcan Minigun'],
	primarySpecials['Piglet Grenade Launcher'],
	secondaryShotguns['The Judge Shotgun'],
	secondaryShotguns['Locomotive 12G Shotgun'],
	secondaryShotguns['Goliath 12G Shotgun'],
	secondaryShotguns['Grimm 12G Shotgun'],
	secondaryShotguns['Street Sweeper Shotgun'],
	secondaryShotguns['GSPS 12G Shotgun'],
	secondarySpecials['Arbiter Grenade Launcher']
]

const gunsWithSights: WeaponData[] = [
	...Object.values(assaultRifles),
	...mainSnipers,
	secondarySpecials['Arbiter Grenade Launcher'],
	secondarySpecials['HRL-7 Rocket Launcher']
]

export type GadgetModificationsList =
	// main guns
	'Assault Light' |
	'Tactical Laser Module' |
	'Compact Laser Module' |
	'Military Laser Module' |
	'LED Combo' |

	// guns with sights
	'Riktpunkt 45 degree Sight' |
	'45 degree red-dot sight' |
	'45 Degree Ironsights'

const gadget: WeaponModificationList<GadgetModificationsList> = {
	'Assault Light': {
		name: 'Assault Light',
		image: 'wpn_fps_upg_fl_ass_smg_sho_surefire',
		slot: 'Gadget',
		source: source['Base Game'],
		cost: 21e3,
		specialEffect: ['Flashlight'],
		stats: {
			concealment: -1
		},
		compatibleWeapons: mainGuns
	},
	'Tactical Laser Module': {
		name: 'Tactical Laser Module',
		image: 'wpn_fps_upg_fl_ass_smg_sho_peqbox',
		slot: 'Gadget',
		source: source['Base Game'],
		cost: 36e3,
		specialEffect: ['Laser'],
		stats: {
			concealment: -1
		},
		compatibleWeapons: mainGuns
	},
	'Compact Laser Module': {
		name: 'Compact Laser Module',
		image: 'wpn_fps_upg_fl_ass_laser',
		slot: 'Gadget',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Red Spider'
		},
		specialEffect: ['Laser'],
		stats: {},
		compatibleWeapons: mainGuns
	},
	'Military Laser Module': {
		name: 'Military Laser Module',
		image: 'wpn_fps_upg_fl_ass_peq15',
		slot: 'Gadget',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Blue Eagle'
		},
		specialEffect: ['Flashlight', 'Laser'],
		stats: {
			stability: 4,
			concealment: -2
		},
		compatibleWeapons: mainGuns
	},
	'LED Combo': {
		name: 'LED Combo',
		image: 'wpn_fps_upg_fl_ass_utg',
		slot: 'Gadget',
		source: content['The Butcher Mod Pack 2'],
		cost: 36e3,
		acquisition: {
			bonus: 1
		},
		specialEffect: ['Flashlight', 'Laser'],
		stats: {
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: mainGuns
	},
	'Riktpunkt 45 degree Sight': {
		name: 'Riktpunkt 45 degree Sight',
		image: 'wpn_fps_upg_o_45rds_v2',
		slot: 'Gadget',
		source: source['Base Game'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			stability: 4
		},
		compatibleWeapons: gunsWithSights,
		incompatibleSlot: [] // Requires a pre-installed sight mod to mount
	},
	'45 degree red-dot sight': {
		name: '45 degree red-dot sight',
		image: 'wpn_fps_upg_o_45rds',
		slot: 'Gadget',
		source: content['Gage Spec Ops Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		stats: {
			stability: 4
		},
		compatibleWeapons: gunsWithSights,
		incompatibleSlot: [] // Requires a pre-installed sight mod to mount
	},
	'45 Degree Ironsights': {
		name: '45 Degree Ironsights',
		image: 'wpn_fps_upg_o_45steel',
		slot: 'Gadget',
		source: content['Cartel Optics Mod Pack'],
		cost: 14e3,
		stats: {
			concealment: 1
		},
		compatibleWeapons: gunsWithSights,
		incompatibleSlot: [] // Requires a pre-installed sight mod to mount
	}
}

export default gadget