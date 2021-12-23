import React from 'react'
import { colourCompare } from 'utils/colours'
import { oneDP } from 'utils/maths'

import { Data, Head, Label, Row, Table } from './Table-Elements'

interface TableCompareProps {
	equippedStats: Record<string, any>;
	selectedStats: Record<string, any>;
	equippedAdditional: Record<string, any>;
	selectedAdditional: Record<string, any>;
}

const TableCompare: React.FC<TableCompareProps> = ({ equippedStats, selectedStats, equippedAdditional, selectedAdditional }) => {

	const stats = [...Object.keys(equippedStats), ...Object.keys(selectedStats)].filter((label, i, arr) => arr.indexOf(label) === i)

	return (
		<Table>
			<thead>
				<Row>
					<Head />
					<Head>Equipped</Head>
					<Head>Selected</Head>
				</Row>
			</thead>
			<tbody>
				{
					stats.map(stat => {
						const main = equippedStats?.[stat]
						const compare = selectedStats?.[stat]

						const numMain = main + equippedAdditional?.[stat]
						const numCompare = compare + selectedAdditional?.[stat]

						const arrMain = main?.[0] + equippedAdditional[stat]?.[0]
						const arrCompare = compare?.[0] + selectedAdditional[stat]?.[0]

						return <Row key={stat}>
							<Label>{stat}</Label>
							{
								typeof main === 'number' && (
									<>
										<Data colour={colourCompare(numMain, numCompare)}>{oneDP(numMain)}</Data>
										<Data colour={colourCompare(numCompare, numMain)}>{oneDP(numCompare)}</Data>
									</>
								)
							}
							{
								Array.isArray(main) && (
									<>
										<Data colour={colourCompare(arrMain, arrCompare)}>{`${arrMain} (${main[1] + equippedAdditional[stat][1]})`}</Data>
										<Data colour={colourCompare(arrCompare, arrMain)}>{`${arrCompare} (${compare[1] + selectedAdditional[stat][1]})`}</Data>
									</>
								)
							}
							{
								(typeof main === 'string' || typeof compare === 'string') && (
									<>
										<Data>{main}</Data>
										<Data>{compare}</Data>
									</>
								)
							}
						</Row>
					})
				}
			</tbody>
		</Table>
	)
}

export default TableCompare