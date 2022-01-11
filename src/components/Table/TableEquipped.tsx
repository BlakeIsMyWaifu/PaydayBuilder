import statLimit from 'data/weapons/guns/statLimit'
import { ModificationStats } from 'data/weapons/guns/weaponTypes'
import React from 'react'
import { blue, colourCompare, purple, sycamore } from 'utils/colours'
import { oneDP } from 'utils/maths'

import { Data, Head, Label, Row, Table } from './Table-Elements'

interface TableEquippedProps {
	baseStats: Record<string, any>;
	additionalStats: {
		skill: Record<string, any>;
		mod?: ModificationStats;
	}
}

const TableEquipped: React.FC<TableEquippedProps> = ({ baseStats, additionalStats }) => {

	const isArrayZeros = (arr: number[]) => arr.reduce((a, b) => a + b)

	return (
		<Table>
			<thead>
				<Row>
					<Head />
					<Head>Total</Head>
					<Head>Base</Head>
					{additionalStats.mod && <Head colour={sycamore}>Mod</Head>}
					<Head colour={blue}>Skill</Head>
				</Row>
			</thead>
			<tbody>
				{
					Object.entries(baseStats).map(([stat, baseValue]) => {
						const skillValue = additionalStats.skill[stat]
						const modValue: number = additionalStats.mod?.[(stat as keyof ModificationStats)] ?? 0

						const template = (innerData: React.ReactNode): JSX.Element => <Row key={stat}>
							<Label>{stat}</Label>
							{innerData}
						</Row>

						switch (baseValue.constructor.name) {
							case 'Number': {
								let colour = colourCompare(baseValue + skillValue + modValue, baseValue)
								let totalValue = oneDP(baseValue + skillValue + modValue)

								if (Object.keys(statLimit).includes(stat)) {
									const limit = statLimit[(stat as keyof ModificationStats)] ?? Infinity
									const isLimit = totalValue >= limit
									if (isLimit) {
										totalValue = limit
										colour = purple
									}
								}

								const modTotalValue = modValue > 0 ? `+${modValue}` : modValue
								const skillTotalValue = skillValue > 0 ? `+${skillValue}` : skillValue

								return template(<>
									<Data colour={colour}>{totalValue}</Data>
									<Data>{baseValue}</Data>
									{additionalStats.mod && (modValue ? (<Data colour={sycamore}>{modTotalValue}</Data>) : <Data />)}
									{skillValue ? <Data colour={blue}>{skillTotalValue}</Data> : <Data />}
								</>)
							}
							case 'String': {
								return template(<>
									<Data>{baseValue}</Data>
									<Data />
									<Data />
									{additionalStats.mod && <Data />}
								</>)
							}
							case 'Array': {
								const colour = colourCompare(baseValue[0] + skillValue[0], baseValue[0])
								const totalValue = `${baseValue[0] + skillValue[0]} (${baseValue[1] + skillValue[1]})`
								const skillTotalValue = `${skillValue[0] > 0 ? '+' : ''}${skillValue[0]} (${skillValue[1]})`

								return template(<>
									<Data colour={colour}>{totalValue}</Data>
									<Data>{`${baseValue[0]} (${baseValue[1]})`}</Data>
									{isArrayZeros(skillValue) ? <Data colour={blue}>{skillTotalValue}</Data> : <Data />}
								</>)
							}
							default: {
								return template(<></>)
							}
						}
					})
				}
			</tbody>
		</Table>
	)
}

export default TableEquipped