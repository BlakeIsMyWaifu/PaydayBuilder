import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { type ModificationCollection } from '../weaponTypes'

export type StockModification = keyof typeof stock

const stock = {
	'Standard Stock (Main)': {
		name: 'Standard Stock',
		image: 'wpn_fps_upg_m4_s_standard',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			stability: 4,
			concealment: -1
		}
	},
	'Tactical Stock (Main)': {
		name: 'Tactical Stock',
		image: 'wpn_fps_upg_m4_s_pts',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			stability: 4,
			concealment: -1
		}
	},
	'Skeletal Stock (Main)': {
		name: 'Skeletal Stock',
		image: 'wpn_upg_ak_s_skfoldable',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			stability: -4,
			concealment: 2
		}
	},
	'Wooden Sniper Stock': {
		name: 'Wooden Sniper Stock',
		image: 'wpn_upg_ak_s_psl',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 44e3,
		stats: {
			accuracy: 12,
			concealment: -3
		},
		incompatibleSlot: ['grip']
	},
	'Wide Stock': {
		name: 'Wide Stock',
		image: 'wpn_fps_upg_m4_s_crane',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Yellow Bull'
		},
		stats: {
			stability: 4,
			concealment: 1
		}
	},
	'War-Torn Stock': {
		name: 'War-Torn Stock',
		image: 'wpn_fps_upg_m4_s_mk46',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Red Spider'
		},
		stats: {
			accuracy: 8,
			stability: -4,
			concealment: -3
		}
	},
	'Classic Stock': {
		name: 'Classic Stock',
		image: 'wpn_fps_upg_ak_s_solidstock',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'The Turtle Always Wins'
		},
		stats: {
			accuracy: 4,
			stability: 12,
			concealment: -4
		}
	},
	'2 Piece Stock': {
		name: '2 Piece Stock',
		image: 'wpn_fps_upg_m4_s_ubr',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'The Turtle Always Wins'
		},
		stats: {
			accuracy: 4,
			stability: 4,
			concealment: -2
		}
	},
	'Contractor Stock': {
		name: 'Contractor Stock',
		image: 'wpn_fps_snp_tti_s_vltor',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['John Wick Heists'],
		cost: 9e3,
		stats: {
			stability: 4
		}
	},
	'Folding Stock': {
		name: 'Folding Stock',
		image: 'wpn_upg_ak_s_folding',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			stability: -4,
			concealment: 2
		}
	},
	'Muldon Stock': {
		name: 'Muldon Stock',
		image: 'wpn_fps_shot_r870_s_folding',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: source['Base Game'],
		cost: 71e3,
		stats: {
			stability: -4,
			concealment: 1
		},
		incompatibleSlot: ['sight']
	},
	'VD-12 Stock': {
		name: 'VD-12 Stock',
		image: 'wpn_fps_sho_sko12_stock',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['McShay Weapon Pack 2'],
		cost: 9e3,
		stats: {
			accuracy: 4
		}
	},
	'Taktika Telescopic Stock': {
		name: 'Taktika Telescopic Stock',
		image: 'wpn_fps_upg_ak_s_zenitco',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['McShay Mod Pack'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			concealment: 1
		}
	},
	'Ursa Minor Stock': {
		name: 'Ursa Minor Stock',
		image: 'wpn_fps_snp_victor_s_mod0',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['A Criminal Carol'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			stability: -4,
			concealment: 1
		}
	},
	'Starlight Stock': {
		name: 'Starlight Stock',
		image: 'wpn_fps_m4_uupg_s_zulu',
		icon: 'inv_mod_stock',
		slot: 'stock',
		source: content['A Criminal Carol'],
		cost: 36e3,
		stats: {
			accuracy: -4,
			concealment: 2
		}
	}
} as const satisfies ModificationCollection

export default stock