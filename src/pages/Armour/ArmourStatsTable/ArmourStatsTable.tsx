import { TableCompare, TableEquipped } from 'components/Table'
import { ArmourData, ArmourStats } from 'data/character/armours'
import { useAppSelector } from 'hooks'
import React from 'react'

interface ArmourStatsTableProps {
	selectedArmour: ArmourData;
	equippedArmour?: ArmourData;
}

export const ArmourStatsTable: React.FC<ArmourStatsTableProps> = ({ selectedArmour, equippedArmour }) => {

	const baseStats = ({ armour, concealment, speed, dodge, steadiness, stamina }: ArmourStats) => {
		return { armour, health: 230, concealment, speed, dodge, steadiness, stamina }
	}

	const dieHard = useAppSelector(state => state.skills.trees.enforcer['Tank'].upgrades['Die Hard'])
	const innerPockets = useAppSelector(state => state.skills.trees.ghost['Artful Dodger'].upgrades['Inner Pockets'])
	const ironMan = useAppSelector(state => state.skills.trees.enforcer['Tank'].upgrades['Iron Man'])

	const skillStats = (armour: ArmourData) => {
		const hasBallistic = armour.name.includes('Ballistic Vest')

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
		stats.armour += ironMan === 'basic' || ironMan === 'aced' ? ((armour.stats.armour + stats.armour) / 100) * 30 : 0
		stats.concealment += innerPockets === 'aced' && hasBallistic ? 5 : 1 // +1 from blending in perk

		return stats
	}

	return (
		equippedArmour ?
			<TableCompare
				equippedStats={baseStats(equippedArmour.stats)}
				selectedStats={baseStats(selectedArmour.stats)}
				equippedAdditional={skillStats(equippedArmour)}
				selectedAdditional={skillStats(selectedArmour)}
			/> :
			<TableEquipped
				baseStats={baseStats(selectedArmour.stats)}
				additionalStats={{ skill: skillStats(selectedArmour) }}
			/>
	)
}

export default ArmourStatsTable