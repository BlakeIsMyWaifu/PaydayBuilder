import content from 'data/source/downloadableContent'

import assaultRifles from '../primary/assaultRifles'
import primaryShotguns from '../primary/shotgunsPrimary'
import submachineGuns from '../secondary/submachineGuns'
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
		compatibleWeapons: [
			assaultRifles['AK Rifle'],
			assaultRifles['AK.762'],
			assaultRifles['Golden AK.762 Rifle'],
			primaryShotguns['IZHMA 12G Shotgun'],
			submachineGuns['Krinkov Submachine Gun']
		]
	}
}

export default extra