import melees, { type MeleeList, type MeleeStats } from 'data/weapons/melees'
import { type CustomStatsHook } from 'hooks/customStatsHook'
import { useSkillsStore } from 'state/useSkillsStore'

const useMeleeStats = (meleeName: MeleeList): CustomStatsHook<MeleeStats> => {

	const meleeStats = melees[meleeName].stats

	const baseStats = (): MeleeStats => {
		const toTwoDecimal = (number: number): number => +(Math.round(number * 100) / 100).toFixed(2)
		const { damage, knockdown, chargeTime, range, concealment, specialType, specialTime } = meleeStats
		const stats: MeleeStats = {
			damage, knockdown, chargeTime, range, concealment,
			attackDelay: toTwoDecimal(meleeStats.attackDelay),
			cooldown: toTwoDecimal(meleeStats.cooldown),
			unequipDelay: toTwoDecimal(meleeStats.unequipDelay)
		}
		if (specialType) {
			stats.specialType = specialType
			stats.specialTime = specialTime
		}
		return stats
	}

	const innerPockets = useSkillsStore(state => state.trees.ghost['Artful Dodger'].upgrades['Inner Pockets'])
	const pumpingIron = useSkillsStore(state => state.trees.fugitive.Brawler.upgrades['Pumping Iron'])

	const skillStats = (): MeleeStats => {
		const stats: MeleeStats = {
			damage: [0, 0],
			knockdown: [0, 0],
			chargeTime: 0,
			range: 0,
			concealment: 0,
			attackDelay: 0,
			cooldown: 0,
			unequipDelay: 0,
			specialType: null,
			specialTime: null
		}

		stats.concealment += innerPockets === 'basic' || innerPockets === 'aced' ? 2 : 0
		stats.damage = pumpingIron === 'aced' ? [meleeStats.damage[0] << 1, meleeStats.damage[1] << 1] : stats.damage

		return stats
	}

	const totalStats = (): MeleeStats => {
		const stats = baseStats()
		const { damage, concealment } = skillStats()

		stats.damage = [stats.damage[0] + damage[0], stats.damage[1] + damage[1]]
		stats.concealment += concealment

		return stats
	}

	return {
		base: baseStats(),
		skill: skillStats(),
		total: totalStats()
	}
}

export default useMeleeStats