import content from 'data/source/downloadableContent'

import { CompatibleWeapons, WeaponModificationList } from '../weaponTypes'

const AKRifles: CompatibleWeapons = {
	assaultRifle: [
		'AK Rifle',
		'AK.762',
		'Golden AK.762 Rifle',
		'AK17 Rifle'
	],
	submachineGun: [
		'Krinkov Submachine Gun'
	]
}

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
		compatibleWeapons: {
			assaultRifle: [
				'JP36 Rifle',
				'UAR Rifle',
				'AK Rifle',
				'AK.762',
				'Golden AK.762 Rifle',
				'AK17 Rifle',
				'CAR-4 Rifle',
				'AMCAR Rifle',
				'AMR-16 Rifle',
				'AK5 Rifle',
				'Queen\'s Wrath Rifle'
			],
			submachineGun: [
				'Krinkov Submachine Gun',
				'CR 805B Submachine Gun',
				'Para Submachine Gun',
				'Heather Submachine Gun',
				'Mark 10 Submachine Gun',
				'Kobus 90 Submachine Gun'
			]
		}
	}
}

export default magazine