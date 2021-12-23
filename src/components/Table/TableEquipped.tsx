import { ModificationStats } from 'data/weapons/guns/weaponTypes'
import React from 'react'
import { blue, colourCompare, sycamore } from 'utils/colours'

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
						const modValue: number = additionalStats.mod?.[(stat as keyof ModificationStats)] || 0
						return <Row key={stat}>
							<Label>{stat}</Label>
							{
								typeof baseValue === 'number' && (
									<>
										<Data colour={colourCompare(baseValue + skillValue + modValue, baseValue)}>{Math.round((baseValue + skillValue + modValue) * 10) / 10}</Data>
										<Data>{baseValue}</Data>
										{additionalStats.mod && (modValue ? (<Data colour={sycamore}>{modValue > 0 ? `+${modValue}` : modValue}</Data>) : <Data />)}
										{skillValue ? <Data colour={blue}>{skillValue > 0 ? `+${skillValue}` : skillValue}</Data> : <Data />}
									</>
								)
							}
							{
								Array.isArray(baseValue) && (
									<>
										<Data colour={colourCompare(baseValue[0] + skillValue[0], baseValue[0])}>{`${baseValue[0] + skillValue[0]} (${baseValue[1] + skillValue[1]})`}</Data>
										<Data>{`${baseValue[0]} (${baseValue[1]})`}</Data>
										{isArrayZeros(skillValue) ? <Data colour={blue}>{skillValue[0] > 0 ? '+' : ''}{`${skillValue[0]} (${skillValue[1]})`}</Data> : <Data />}
									</>
								)
							}
							{
								typeof baseValue === 'string' && (
									<>
										<Data>{baseValue}</Data>
										<Data />
										<Data />
										{additionalStats.mod && <Data />}
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

export default TableEquipped