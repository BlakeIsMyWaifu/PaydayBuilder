import { TableCompare, TableEquipped } from 'components/Table'
import { ArmourList } from 'data/character/armours'
import useArmourStats from 'hooks/useArmourStats'
import React from 'react'

interface ArmourStatsTableProps {
	selectedArmour: ArmourList;
	equippedArmour?: ArmourList;
}

export const ArmourStatsTable: React.FC<ArmourStatsTableProps> = ({ selectedArmour, equippedArmour }) => {

	const selectedStats = useArmourStats(selectedArmour)
	const equippedStats = useArmourStats(equippedArmour || selectedArmour)

	return equippedArmour ? (
		<TableCompare
			equippedStats={equippedStats.base}
			selectedStats={selectedStats.base}
			equippedAdditional={equippedStats.skill}
			selectedAdditional={selectedStats.skill}
		/>
	) : (
		<TableEquipped
			baseStats={selectedStats.base}
			additionalStats={{ skill: selectedStats.skill }}
		/>
	)
}

export default ArmourStatsTable