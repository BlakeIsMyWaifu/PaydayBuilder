import statLimit from 'data/weapons/guns/statLimit'
import { ModificationStats } from 'data/weapons/guns/weaponTypes'
import React from 'react'
import { colourCompare, purple } from 'utils/colours'
import { twoDP } from 'utils/maths'

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

						const template = (innerData: React.ReactNode): JSX.Element => {
							return <Row key={stat}>
								<Label>{stat}</Label>
								{innerData}
							</Row>
						}

						switch (main.constructor.name) {
							case 'Number': {
								const numMain = main + equippedAdditional?.[stat]
								const numCompare = compare + selectedAdditional?.[stat]

								const parseNum = (num: number): [boolean, number] => {
									if (!Object.keys(statLimit).includes(stat)) return [false, twoDP(num)]
									const limit = statLimit[(stat as keyof ModificationStats)] ?? Infinity
									const isLimit = num >= limit
									return isLimit ? [true, limit] : [false, twoDP(num)]
								}

								const [isLimitedMain, parsedMain] = parseNum(numMain)
								const [isLimitedCompare, parsedCompare] = parseNum(numCompare)

								return template(<>
									<Data colour={isLimitedMain ? purple : colourCompare(numMain, numCompare)}>{parsedMain}</Data>
									<Data colour={isLimitedCompare ? purple : colourCompare(numCompare, numMain)}>{parsedCompare}</Data>
								</>)
							}
							case 'Array': {
								const arrMain = main?.[0] + equippedAdditional[stat]?.[0]
								const arrCompare = compare?.[0] + selectedAdditional[stat]?.[0]

								return template(<>
									<Data colour={colourCompare(arrMain, arrCompare)}>{`${arrMain} (${main[1] + equippedAdditional[stat][1]})`}</Data>
									<Data colour={colourCompare(arrCompare, arrMain)}>{`${arrCompare} (${compare[1] + selectedAdditional[stat][1]})`}</Data>
								</>)
							}
							default: {
								return template(<>
									<Data>{main}</Data>
									<Data>{compare}</Data>
								</>)
							}
						}
					})
				}
			</tbody>
		</Table>
	)
}

export default TableCompare