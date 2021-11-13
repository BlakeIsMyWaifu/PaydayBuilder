import content from 'data/source/downloadableContent'

import { WeaponModificationList } from '../weaponTypes'

export type ExtraModificationsList =
	// AK Rifle, AK.762, Golden AK.762
	// IZHMA 12G, Krinkov
	'Scope Mount'

const extra: WeaponModificationList<ExtraModificationsList> = {
	'Scope Mount': {
		name: 'Scope Mount',
		image: 'wpn_fps_upg_o_ak_scopemount',
		slot: 'Extra',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: '$1.8M Speedrun'
		},
		stats: {
			stability: 4,
			concealment: -1
		},
		compatibleWeapons: {
			assaultRifle: [
				'AK Rifle',
				'AK.762',
				'Golden AK.762 Rifle'
			],
			shotgun: [
				'IZHMA 12G Shotgun'
			],
			submachineGun: [
				'Krinkov Submachine Gun'
			]
		}
	}
}

export default extra