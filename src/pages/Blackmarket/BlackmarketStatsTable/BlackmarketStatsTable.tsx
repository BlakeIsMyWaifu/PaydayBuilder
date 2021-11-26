import { Data, Head, Label, Row, Table } from 'components/Table'
import { Modification, ModificationStats, WeaponData } from 'data/weapons/guns/weaponTypes'
import React from 'react'
import { green, red } from 'utils/colours'

interface BlackmarketStatsTableProps {
	weapon: WeaponData;
	selectedItem: Modification<string>;
	equippedMod?: Modification<string>;
}

const BlackmarketStatsTable: React.FC<BlackmarketStatsTableProps> = ({ weapon, selectedItem, equippedMod }) => {

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
						Object.entries(weapon.stats).map(([labelString, stat]: [string, number]) => {
							const label = labelString as keyof ModificationStats
							const equipStat = equippedMod?.stats[label]
							const selectedStat = selectedItem.stats[label]
							const colour = (number: number | undefined): string => number ? (number > 0 ? green : red) : '#fff'
							return <Row key={label}>
								<Label>{label}</Label>
								<Data color={colour((equipStat || 0) + (selectedStat || 0))}>{stat}</Data>
								{isCompareMode && <Data color={colour(equipStat)}>{equipStat}</Data>}
								<Data color={colour(selectedStat)}>{selectedStat}</Data>
							</Row>
						})
					}
				</tbody>
			</Table>
		</>
	)
}

export default BlackmarketStatsTable
