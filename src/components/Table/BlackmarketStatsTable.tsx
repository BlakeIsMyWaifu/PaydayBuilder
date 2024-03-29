import { Data, Head, Label, Row, Table } from 'components/Table/Table-Elements'
import statLimit from 'data/weapons/guns/statLimit'
import { type Modification, type ModificationStats, type WeaponData, type WeaponStats } from 'data/weapons/guns/weaponTypes'
import { type FC } from 'react'
import { colourCompare, green, purple, red } from 'utils/colours'
import { twoDP } from 'utils/maths'

interface BlackmarketStatsTableProps {
	weapon: WeaponData;
	totalStats: WeaponStats;
	selectedItem: Modification;
	equippedMod?: Modification;
}

const BlackmarketStatsTable: FC<BlackmarketStatsTableProps> = ({ totalStats, selectedItem, equippedMod }) => {

	const isCompareMode = selectedItem !== equippedMod && equippedMod

	return (
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
						const totalStat = twoDP(stat + selectedStat - equipStat)

						const limit = statLimit[label] ?? Infinity
						const isLimit = totalStat >= limit

						return <Row key={label}>
							<Label>{label}</Label>
							<Data colour={isLimit ? purple : colourCompare(selectedStat, equipStat)}>
								{isLimit ? limit : (totalStat > 0 ? totalStat : 0)}
							</Data>
							{
								isCompareMode && <Data colour={colourCompare(equipStat, selectedStat)}>
									{!!equipStat && (equipStat >= 0 ? `+${equipStat}` : equipStat)}
								</Data>
							}
							<Data colour={selectedStat > 0 ? green : red}>
								{!!selectedStat && (selectedStat >= 0 ? `+${selectedStat}` : selectedStat)}
							</Data>
						</Row>
					})
				}
			</tbody>
		</Table>
	)
}

export default BlackmarketStatsTable
