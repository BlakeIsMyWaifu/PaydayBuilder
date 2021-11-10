import content from 'data/source/downloadableContent'
import source from 'data/source/miscSources'

import assaultRifles from '../primary/assaultRifles'
import { WeaponData, WeaponModificationList } from '../weaponTypes'

const AKRifles: WeaponData[] = [
	assaultRifles['AK Rifle'],
	assaultRifles['AK.762'],
	assaultRifles['Golden AK.762 Rifle']
]

export type ForegripModificationsList =
	// AK Rifle, AK.762, Golden AK.762
	'Railed Wooden Grip' |
	'The Tactical Russian Handguard' |
	'Battleproven Handguard' |
	'Lightweight Rail' |
	'Crabs Rail' |
	'Keymod Rail' |

	// Commando 553
	'Enhanced Foregrip' |
	'Railed Foregrip'

const foregrip: WeaponModificationList<ForegripModificationsList> = {
	'Railed Wooden Grip': {
		name: 'Railed Wooden Grip',
		image: 'wpn_upg_ak_fg_combo2',
		slot: 'Foregrip',
		source: source['Base Game'],
		cost: 21e3,
		stats: {
			accuracy: 4,
			stability: 4
		},
		compatibleWeapons: AKRifles
	},
	'The Tactical Russian Handguard': {
		name: 'The Tactical Russian Handguard',
		image: 'wpn_upg_ak_fg_combo3',
		slot: 'Foregrip',
		source: source['Base Game'],
		cost: 36e3,
		stats: {
			accuracy: 4,
			stability: 8,
			concealment: -1
		},
		compatibleWeapons: AKRifles
	},
	'Battleproven Handguard': {
		name: 'Battleproven Handguard',
		image: 'wpn_fps_upg_ak_fg_tapco',
		slot: 'Foregrip',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Red Spider'
		},
		stats: {
			accuracy: 4,
			concealment: 3
		},
		compatibleWeapons: AKRifles
	},
	'Lightweight Rail': {
		name: 'Lightweight Rail',
		image: 'wpn_fps_upg_fg_midwest',
		slot: 'Foregrip',
		source: content['Gage Mod Courier'],
		cost: 0,
		acquisition: {
			package: 'Purple Snake'
		},
		stats: {
			accuracy: 4,
			stability: 12,
			concealment: -2
		},
		compatibleWeapons: AKRifles
	},
	'Crabs Rail': {
		name: 'Crabs Rail',
		image: 'wpn_fps_upg_ak_fg_krebs',
		slot: 'Foregrip',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'The Collector'
		},
		stats: {
			accuracy: 8,
			concealment: 3
		},
		compatibleWeapons: AKRifles
	},
	'Keymod Rail': {
		name: 'Keymod Rail',
		image: 'wpn_fps_upg_ak_fg_trax',
		slot: 'Foregrip',
		source: content['The Butcher\'s AK/CAR Mod Pack'],
		cost: 9e3,
		acquisition: {
			achievement: 'The Collector'
		},
		stats: {
			accuracy: 8,
			stability: 8,
			concealment: -2
		},
		compatibleWeapons: AKRifles
	},
	'Enhanced Foregrip': {
		name: 'Enhanced Foregrip',
		image: 'wpn_fps_ass_s552_fg_standard_green',
		slot: 'Foregrip',
		source: content['Armored Transport'],
		cost: 10800,
		stats: {
			accuracy: 4,
			concealment: -4
		},
		compatibleWeapons: [
			assaultRifles['Commando 553 Rifle']
		]
	},
	'Railed Foregrip': {
		name: 'Railed Foregrip',
		image: 'wpn_fps_ass_s552_fg_railed',
		slot: 'Foregrip',
		source: content['Armored Transport'],
		cost: 63600,
		stats: {
			stability: 20,
			concealment: -2
		},
		compatibleWeapons: [
			assaultRifles['Commando 553 Rifle']
		]
	}
}

export default foregrip