import { Data, Head, Label, Row, Table } from 'components/Table'
import { AllWeaponStats, Modification, ModificationStats, WeaponData } from 'data/weapons/guns/weaponTypes'
import React from 'react'
import { green, red } from 'utils/colours'

interface BlackmarketStatsTableProps {
	weapon: WeaponData;
	totalStats: AllWeaponStats;
	selectedItem: Modification<string>;
	equippedMod?: Modification<string>;
}

const BlackmarketStatsTable: React.FC<BlackmarketStatsTableProps> = ({ totalStats, selectedItem, equippedMod }) => {

	const isCompareMode = selectedItem !== equippedMod && equippedMod

	return (
		<>
			<Table>
				<thead>
					<Row>
						<Head />
						<Head>Total</Head>
						{isCompareMode && <Head>Equipped</Head>}
						<Head>Selected</Head>
					</Row>
				</thead>
				<tbody>
					{
						Object.entries(totalStats).map(([labelString, stat]: [string, number]) => {
							if (labelString === 'rateOfFire') return

							const label = labelString as keyof ModificationStats

							const equipStat = equippedMod?.stats[label] || 0
							const selectedStat = selectedItem.stats[label] || 0
							const totalStat = stat + selectedStat - equipStat

							const colourCompare = (one: number, two: number): string => {
								if (one > two || one > 0) return green
								if (one < two || one < 0) return red
								return '#fff'
							}

							return <Row key={label}>
								<Label>{label}</Label>
								<Data color={colourCompare(selectedStat, equipStat)}>{Math.round(totalStat * 10) / 10}</Data>
								{isCompareMode && <Data color={colourCompare(equipStat, selectedStat)}>{!!equipStat && (equipStat >= 0 ? `+${equipStat}` : equipStat)}</Data>}
								<Data color={selectedStat > 0 ? green : red}>{!!selectedStat && (selectedStat >= 0 ? `+${selectedStat}` : selectedStat)}</Data>
							</Row>
						})
					}
				</tbody>
			</Table>
		</>
	)
}

export default BlackmarketStatsTable
