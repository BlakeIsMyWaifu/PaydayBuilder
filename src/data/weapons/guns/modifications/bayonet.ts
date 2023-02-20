import content from 'data/source/downloadableContent'

import { ModificationList } from '../weaponTypes'

export type BayonetModificationsList =
	| 'Nagant Bayonet'

const bayonet: ModificationList<BayonetModificationsList> = {
	'Nagant Bayonet': {
		name: 'Nagant Bayonet',
		image: 'wpn_fps_snp_mosin_ns_bayonet',
		icon: 'inv_mod_bayonet',
		slot: 'bayonet',
		source: content['Gage Historical Pack'],
		cost: 9e3,
		acquisition: {
			infinite: true
		},
		specialEffect: ['Modifies Weapon Butt'],
		stats: {
			concealment: -2
		},
		compatibleWeapons: {
			sniper: [
				'Nagant'
			]
		}
	}
}

export default bayonet