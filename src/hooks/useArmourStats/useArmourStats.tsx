import armours, { ArmourList, ArmourStats } from 'data/character/armours'
import { CustomStatsHook, useAppSelector } from 'hooks'

interface CompleteArmourStats extends ArmourStats {
	health: number;
}

const useArmourStats = (armourName: ArmourList): CustomStatsHook<CompleteArmourStats> => {

	const armourStats = armours[armourName].stats

	const baseStats = (): CompleteArmourStats => {
		const { armour, concealment, speed, dodge, steadiness, stamina } = armourStats
		return { armour, health: 230, concealment, speed, dodge, steadiness, stamina }
	}

	const dieHard = useAppSelector(state => state.skills.trees.enforcer['Tank'].upgrades['Die Hard'])
	const innerPockets = useAppSelector(state => state.skills.trees.ghost['Artful Dodger'].upgrades['Inner Pockets'])
	const ironMan = useAppSelector(state => state.skills.trees.enforcer['Tank'].upgrades['Iron Man'])

	const skillStats = (): CompleteArmourStats => {
		const hasBallistic = armourName.includes('Ballistic Vest')

		const stats = {
			armour: 0,
			health: 0,
			concealment: 0,
			dodge: 0,
			speed: 0,
			stamina: 0,
			steadiness: 0
		}

		stats.armour += dieHard === 'aced' && hasBallistic ? 20 : 0
		stats.armour += ironMan === 'basic' || ironMan === 'aced' ? ((armourStats.armour + stats.armour) / 100) * 30 : 0
		stats.concealment += innerPockets === 'aced' && hasBallistic ? 5 : 1 // +1 from blending in perk

		return stats
	}

	const totalStats = (): CompleteArmourStats => {
		const stats = baseStats()

		Object.entries(skillStats()).forEach(([label, stat]) => {
			stats[(label as keyof CompleteArmourStats)] += stat
		})

		return stats
	}

	return {
		base: baseStats(),
		skill: skillStats(),
		total: totalStats()
	}
}

export default useArmourStats