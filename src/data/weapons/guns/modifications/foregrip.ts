import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { type ModificationCollection } from '../weaponTypes'

export type ForegripModification = keyof typeof foregrip

const foregrip = {
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
		}
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
		}
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
		}
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
		}
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
		}
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
		}
	},
	'Orthogon Foregrip': {
		name: 'Orthogon Foregrip',
		image: '', // ! missing image - wpn_fps_m4_uupg_lower_radian
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['McShay Mod Pack'],
		cost: 9e3,
		stats: {
			damage: 3,
			accuracy: 12,
			stability: 8,
			concealment: -2
		}
	},
	'Taktika Handguard Kit': {
		name: 'Taktika Handguard Kit',
		image: 'wpn_fps_upg_ak_fg_zenitco',
		icon: 'inv_mod_foregrip',
		slot: 'foregrip',
		source: content['McShay Mod Pack'],
		cost: 9e3,
		stats: {
			accuracy: 8,
			stability: 4,
			concealment: -1
		}
	}
} as const satisfies ModificationCollection

export default foregrip