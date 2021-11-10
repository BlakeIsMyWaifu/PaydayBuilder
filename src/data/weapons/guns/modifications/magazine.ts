import content from 'data/source/downloadableContent'

import assaultRifles from '../primary/assaultRifles'
import submachineGuns from '../secondary/submachineGuns'
import { WeaponData, WeaponModificationList } from '../weaponTypes'

const AKRifles: WeaponData[] = [
	assaultRifles['AK Rifle'],
	assaultRifles['AK.762'],
	submachineGuns['Krinkov Submachine Gun'],
	assaultRifles['AK17 Rifle'],
	assaultRifles['Golden AK.762 Rifle']
]

export type MagazineModificationsList =
	'AK Quadstacked Mag' |
	'Low Drag Magazine' |
	'Speed Pull Magazine'

const magazine: WeaponModificationList<MagazineModificationsList> = {
	'AK Quadstacked Mag': {
		name: 'AK Quadstacked Mag',
		image: 'wpn_fps_upg_ak_m_quad',
		slot: 'Magazine',
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
		},
		compatibleWeapons: AKRifles
	},
	'Low Drag Magazine': {
		name: 'Low Drag Magazine',
		image: 'wpn_fps_upg_ak_m_uspalm',
		slot: 'Magazine',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'Here Comes the Pain Train'
		},
		stats: {
			magazine: 4,
			stability: 4,
			concealment: 1
		},
		compatibleWeapons: AKRifles
	},
	'Speed Pull Magazine': {
		name: 'Speed Pull Magazine',
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
		slot: 'Magazine',
		source: content['Gage Spec Ops Pack'],
		cost: 14e3,
		acquisition: {
			infinite: true
		},
		specialEffect: ['RELOAD -1.9'],
		stats: {},
		compatibleWeapons: [
			assaultRifles['JP36 Rifle'],
			assaultRifles['UAR Rifle'],
			assaultRifles['AK Rifle'],
			assaultRifles['AK.762'],
			assaultRifles['Golden AK.762 Rifle'],
			assaultRifles['AK17 Rifle'],
			submachineGuns['Krinkov Submachine Gun'],
			assaultRifles['CAR-4 Rifle'],
			assaultRifles['AMCAR Rifle'],
			assaultRifles['AMR-16 Rifle'],
			assaultRifles['AK5 Rifle'],
			assaultRifles['Queen\'s Wrath Rifle'],
			submachineGuns['CR 805B Submachine Gun'],
			submachineGuns['Para Submachine Gun'],
			submachineGuns['Heather Submachine Gun'],
			submachineGuns['Mark 10 Submachine Gun'],
			submachineGuns['Kobus 90 Submachine Gun']
		]
	}
}

export default magazine