import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { akimboShotgunList, assaultRifleList, lightMachineGunList } from '../gunList'
import { type CompatibleWeapons, type ModificationList } from '../weaponTypes'

const mainSnipers: CompatibleWeapons = {
	sniper: [
		'Platypus 70',
		'Rattlesnake',
		'R93',
		'Thanatos .50 cal',
		'Nagant',
		'Lebensauger .308',
		'Desertfox',
		'Contractor .308',
		'Grom',
		'R700',
		'Bernetti Rangehitter'
	]
}

const mainGuns: CompatibleWeapons = {
	assaultRifle: assaultRifleList,
	shotgun: [
		// primary
		'Predator 12G',
		'Reinfeld 880',
		'IZHMA 12G',
		'M1014',
		'Raven',
		'Steakout 12G',
		'VD-12',
		'Breaker 12G',
		'Reinfeld 88',
		'Mosconi 12G Tactical',
		// secondary
		'The Judge',
		'Locomotive 12G',
		'Goliath 12G',
		'Grimm 12G',
		'Street Sweeper',
		'GSPS 12G'
	],
	akimboShotgun: akimboShotgunList,
	sniper: mainSnipers.sniper,
	lightMachineGun: lightMachineGunList,
	special: [
		'Vulcan Minigun',
		'Piglet',
		'Arbiter'
	]
}

const gunsWithSights: CompatibleWeapons = {
	assaultRifle: assaultRifleList,
	sniper: mainSnipers.sniper,
	special: [
		'Arbiter',
		'HRL-7'
	]
}

const gunsWithMagnifier: CompatibleWeapons = {
	assaultRifle: [
		'AMCAR',
		'AK',
		'CAR-4',
		'UAR',
		'JP36',
		'M308',
		'AK5',
		'AMR-16',
		'Commando 553',
		'Eagle Heavy',
		'Cavity 9mm',
		'AK17',
		'Bootleg',
		'Queen\'s Wrath',
		'Clarion',
		'Lion\'s Roar',
		'Gecko 7.62',
		'Little Friend 7.62',
		'Falcon',
		'Gewehr 3'
	],
	sniper: mainGuns.sniper,
	special: [
		'Arbiter',
		'HRL-7',
		'Piglet'
	],
	submachineGun: [
		'Mark 10',
		'Compact-5',
		'CMP',
		'Para',
		'SpecOps',
		'CR 805B',
		'Cobra',
		'Jackal',
		'Blaster 9mm',
		'Kross Vertex',
		'Tatonka',
		'Uzi',
		'Chicago Typewriter'
	],
	pistol: [
		'Bronco .44',
		'Deagle'
	],
	shotgun: [
		'Reinfeld 880',
		'Locomotive 12G',
		'Goliath 12G',
		'M1014',
		'Raven',
		'Steakout 12G',
		'Street Sweeper',
		'Predator 12G',
		'The Judge'
	]
}

export type SecondarySightList =
	| 'Riktpunkt 45 degree Sight'
	| 'Riktpunkt Magnifier Gadget x6.25'
	| '45 degree red-dot sight'
	| '45 Degree Ironsights'
	| 'Signature Magnifier Gadget x6.25'

	// Snipers
	| 'Angled Sight'

const secondarySight: ModificationList<SecondarySightList> = {
	'Riktpunkt 45 degree Sight': {
		name: 'Riktpunkt 45 degree Sight',
		image: 'wpn_fps_upg_o_45rds_v2',
		icon: 'inv_mod_second_sight',
		slot: 'gadget',
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
	'Riktpunkt Magnifier Gadget x6.25': {
		name: 'Riktpunkt Magnifier Gadget x6.25',
		image: 'wpn_fps_upg_o_xpsg33_magnifier',
		icon: 'inv_mod_second_sight',
		slot: 'gadget',
		source: source['Base Game'],
		cost: 9e3,
		acquisition: {
			bonus: 1
		},
		stats: {
			stability: 4
		},
		compatibleWeapons: gunsWithMagnifier,
		incompatibleSlot: [] // Incompatible with certain sights
	},
	'45 degree red-dot sight': {
		name: '45 degree red-dot sight',
		image: 'wpn_fps_upg_o_45rds',
		icon: 'inv_mod_second_sight',
		slot: 'gadget',
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
		icon: 'inv_mod_second_sight',
		slot: 'gadget',
		source: content['Cartel Optics Mod Pack'],
		cost: 14e3,
		stats: {
			concealment: 1
		},
		compatibleWeapons: gunsWithSights,
		incompatibleSlot: [] // Requires a pre-installed sight mod to mount
	},
	'Signature Magnifier Gadget x6.25': {
		name: 'Signature Magnifier Gadget x6.25',
		image: 'wpn_fps_upg_o_sig',
		icon: 'inv_mod_second_sight',
		slot: 'gadget',
		source: content['Cartel Optics Mod Pack'],
		cost: 14e3,
		stats: {
			stability: 4
		},
		compatibleWeapons: gunsWithMagnifier,
		incompatibleSlot: [] // Incompatible with certain sights
	},
	'Angled Sight': {
		name: 'Angled Sight',
		image: 'wpn_fps_upg_o_45iron',
		icon: 'inv_mod_second_sight',
		slot: 'gadget',
		source: content['Gage Sniper Pack'],
		cost: 7200,
		acquisition: {
			achievement: 'Triple Kill'
		},
		stats: {},
		compatibleWeapons: mainSnipers
	}
}

export default secondarySight