import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { type ModificationCollection } from '../weaponTypes'

export type GripModificationsList = keyof typeof grip

const grip = {
	'AK Rubber Grip': {
		name: 'AK Rubber Grip',
		image: 'wpn_fps_upg_ak_g_hgrip',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Green Mantis'
		},
		stats: {
			stability: 8,
			concealment: 2
		}
	},
	'AK Plastic Grip': {
		name: 'AK Plastic Grip',
		image: 'wpn_fps_upg_ak_g_pgrip',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Yellow Bull'
		},
		stats: {
			accuracy: 8,
			stability: -8
		}
	},
	'AK Wood Grip': {
		name: 'AK Wood Grip',
		image: 'wpn_fps_upg_ak_g_wgrip',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Red Spider'
		},
		stats: {
			stability: 12,
			concealment: -1
		}
	},
	'Aluminum Grip': {
		name: 'Aluminum Grip',
		image: 'wpn_fps_upg_ak_g_rk3',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Hey Mr.DJ'
		},
		stats: {
			accuracy: 4,
			concealment: 1
		}
	},
	'Ergo Grip (Main)': {
		name: 'Ergo Grip',
		image: 'wpn_fps_upg_m4_g_ergo',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: source['Base Game'],
		cost: 14e3,
		stats: {
			stability: 4
		}
	},
	'Pro Grip': {
		name: 'Pro Grip',
		image: 'wpn_fps_upg_m4_g_sniper',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: source['Base Game'],
		cost: 44e3,
		stats: {
			accuracy: 4,
			stability: 4,
			concealment: -1
		}
	},
	'Rubber Grip': {
		name: 'Rubber Grip',
		image: 'wpn_fps_upg_m4_g_hgrip',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Gage Weapon Pack #01'],
		cost: 19600,
		stats: {
			accuracy: 4,
			stability: 4
		}
	},
	'Straight Grip': {
		name: 'Straight Grip',
		image: 'wpn_fps_upg_m4_g_mgrip',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Gage Weapon Pack #01'],
		cost: 19600,
		stats: {
			concealment: 2
		}
	},
	'Contractor Grip': {
		name: 'Contractor Grip',
		image: 'wpn_fps_snp_tti_g_grippy',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['John Wick Heists'],
		cost: 9e3,
		stats: {
			stability: 4
		}
	},
	'Titanium Skeleton Grip': {
		name: 'Titanium Skeleton Grip',
		image: 'wpn_fps_upg_g_m4_surgeon',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['Cartel Optics Mod Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		stats: {
			accuracy: 4,
			stability: -4,
			concealment: 2
		}
	},
	'Verge AK Grip': {
		name: 'Verge AK Grip',
		image: 'wpn_fps_upg_ak_g_edg',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['McShay Weapon Pack 3'],
		cost: 9e3,
		stats: {
			accuracy: 8,
			stability: 8,
			concealment: -1
		}
	},
	'Ergonomic AK Grip': {
		name: 'Ergonomic AK Grip',
		image: 'wpn_fps_upg_ak_g_gradus',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['McShay Weapon Pack 3'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			concealment: 1
		}
	},
	'Ultimatum AK Grip': {
		name: 'Ultimatum AK Grip',
		image: 'wpn_fps_upg_ak_g_rk9',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['McShay Weapon Pack 3'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			stability: 4
		}
	},
	'VD-12 Grip': {
		name: 'VD-12 Grip',
		image: 'wpn_fps_sho_sko12_body_grip',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['McShay Weapon Pack 2'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			concealment: 1
		}
	},
	'Laser Grip': {
		name: 'Laser Grip',
		image: 'wpn_fps_pis_g26_g_laser',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: source.Community,
		cost: 28e3,
		specialEffect: ['Laser'],
		stats: {
			accuracy: 4,
			concealment: -1
		}
	},
	'Platypus Grip': {
		name: 'Platypus Grip',
		image: 'wpn_fps_pis_g26_g_gripforce',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: source.Community,
		cost: 53e3,
		stats: {
			stability: 8,
			concealment: -1
		}
	},
	'Ergo Grip (STRYK / Chimano Custom)': {
		name: 'Ergo Grip',
		image: 'wpn_fps_pis_g18c_g_ergo',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: source['Base Game'],
		cost: 28e3,
		stats: {
			stability: 8
		}
	},
	'Skeletonized AR Grip': {
		name: 'Skeletonized AR Grip',
		image: 'wpn_fps_m4_uupg_g_billet',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['McShay Mod Pack'],
		cost: 44e3,
		stats: {
			accuracy: -4,
			stability: 4,
			concealment: 2
		}
	},
	'Ursa Minor Grip': {
		name: 'Ursa Minor Grip',
		image: 'wpn_fps_snp_victor_g_mod3',
		icon: 'inv_mod_grip',
		slot: 'grip',
		source: content['A Criminal Carol'],
		cost: 9e3,
		stats: {
			accuracy: 4,
			concealment: 1
		}
	}

} as const satisfies ModificationCollection

export default grip