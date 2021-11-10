import source from 'data/source/miscSources'

import primary from '../primary'
import secondary from '../secondary'
import { WeaponData, WeaponModificationList } from '../weaponTypes'

const allWeapons: WeaponData[] = [
	Object.values(primary),
	Object.values(secondary)
].map(record => Object.values(record)).flat()

export type BoostModificationsList =
	'Concealment' |
	'Stability' |
	'Accuracy' |
	'Team Boost'

const boost: WeaponModificationList<BoostModificationsList> = {
	'Concealment': {
		name: 'Concealment',
		image: 'wpn_fps_upg_bonus_concealment_p1',
		slot: 'Boost',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			concealment: 1
		},
		compatibleWeapons: allWeapons
	},
	'Stability': {
		name: 'Stability',
		image: 'wpn_fps_upg_bonus_recoil_p1',
		slot: 'Boost',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			stability: 4
		},
		compatibleWeapons: allWeapons
	},
	'Accuracy': {
		name: 'Accuracy',
		image: 'wpn_fps_upg_bonus_spread_p1',
		slot: 'Boost',
		source: source['Base Game'],
		cost: 9e3,
		stats: {
			accuracy: 4
		},
		compatibleWeapons: allWeapons
	},
	'Team Boost': {
		name: 'Team Boost',
		image: 'wpn_fps_upg_bonus_team_exp_money_p3',
		slot: 'Boost',
		source: source['Base Game'],
		cost: 9e3,
		specialEffect: ['+3% Experience & money reward for you and your crew.'],
		stats: {},
		compatibleWeapons: allWeapons
	}
}

export default boost