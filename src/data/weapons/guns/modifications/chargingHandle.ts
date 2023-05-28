import content from 'data/source/downloadableContent'

import { type ModificationList } from '../weaponTypes'

export type ChargingHandleList =
	| 'Taktika Charging Handle'

export const chargingHandle: ModificationList<ChargingHandleList> = {
	'Taktika Charging Handle': {
		name: 'Taktika Charging Handle',
		image: 'wpn_fps_upg_ak_dh_zenitco',
		icon: 'inv_mod_custom',
		slot: 'chargingHandle',
		source: content['McShay Mod Pack'],
		cost: 9e3,
		stats: {
			accuracy: -4,
			stability: 4
		},
		compatibleWeapons: {}
	}
}

export default chargingHandle