import { TableCompare, TableEquipped } from 'components/Table'
import { MeleeList } from 'data/weapons/melees'
import useMeleeStats from 'hooks/useMeleeStats'
import React from 'react'

interface MeleeStatsTableProps {
	selectedMelee: MeleeList;
	equippedMelee?: MeleeList;
}

const MeleeStatsTable: React.FC<MeleeStatsTableProps> = ({ selectedMelee, equippedMelee }) => {

	const selectedStats = useMeleeStats(selectedMelee)
	const equippedStats = useMeleeStats(equippedMelee || selectedMelee)

	return (
		equippedMelee ?
			<TableCompare
				equippedStats={selectedStats.base}
				selectedStats={equippedStats.base}
				equippedAdditional={equippedStats.skill}
				selectedAdditional={selectedStats.skill}
			/> :
			<TableEquipped
				baseStats={selectedStats.base}
				additionalStats={{ skill: selectedStats.skill }}
			/>
	)
}

export default MeleeStatsTable