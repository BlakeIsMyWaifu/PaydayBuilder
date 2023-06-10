import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import { type ModificationCollection } from '../weaponTypes'

export type MagazineModification = keyof typeof magazine

const magazine = {
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
		}
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
		}
	},
	'Speed Pull Magazine': {
		name: 'Speed Pull Magazine',
		// TODO split into each weapon
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
		}
	},
	'Extended Magazine (Chimano)': {
		name: 'Extended Magazine (Chimano)',
		image: 'wpn_fps_pis_g18c_m_mag_33rnd',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: source['Base Game'],
		cost: 44e3,
		stats: {
			magazine: 12,
			concealment: -2
		}
	},
	'Plated AR Magazine': {
		name: 'Plated AR Magazine',
		image: 'wpn_fps_m4_uupg_m_strike',
		icon: 'inv_mod_magazine',
		slot: 'magazine',
		source: content['McShay Mod Pack'],
		cost: 9e3,
		stats: {
			magazine: 8,
			concealment: -1,
			reload: -0.5
		}
	}
} as const satisfies ModificationCollection

export default magazine