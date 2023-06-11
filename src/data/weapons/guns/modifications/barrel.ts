import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { type ModificationCollection } from '../weaponTypes'

export type BarrelModification = keyof typeof barrel

const barrel = {
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
		}
	},
	'DMR Kit (AK)': {
		name: 'DMR Kit',
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
		}
	},
	'Long Barrel (CAR / AMR)': {
		name: 'Long Barrel',
		image: 'wpn_fps_m4_uupg_b_long',
		icon: 'inv_mod_barrel',
		slot: 'barrel',
		source: source['Base Game'],
		cost: 28e3,
		stats: {
			damage: 2,
			accuracy: 4,
			concealment: -2
		}
	},
	'DMR Kit (CAR / AMR)': {
		name: 'DMR Kit',
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
		}
	}
} as const satisfies ModificationCollection

export default barrel