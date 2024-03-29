import armours, { type ArmourList, type ArmourStats } from 'data/character/armours'
import { type CustomStatsHook } from 'hooks/customStatsHook'
import { useSkillsStore } from 'state/useSkillsStore'
import { typedObject } from 'utils/typedObject'

interface CompleteArmourStats extends ArmourStats {
	health: number;
}

const useArmourStats = (armourName: ArmourList): CustomStatsHook<CompleteArmourStats> => {

	const armourStats = armours[armourName].stats

	const baseStats = (): CompleteArmourStats => {
		const { armour, concealment, speed, dodge, steadiness, stamina } = armourStats
		return { armour, health: 230, concealment, speed, dodge, steadiness, stamina }
	}

	const dieHard = useSkillsStore(state => state.trees.enforcer.Tank.upgrades['Die Hard'])
	const innerPockets = useSkillsStore(state => state.trees.ghost['Artful Dodger'].upgrades['Inner Pockets'])
	const ironMan = useSkillsStore(state => state.trees.enforcer.Tank.upgrades['Iron Man'])

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

		typedObject.entries(skillStats()).forEach(([label, stat]) => {
			stats[label] += stat
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