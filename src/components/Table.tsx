import { ModificationStats } from 'data/weapons/guns/weaponTypes'
import React from 'react'
import styled from 'styled-components'
import { blue, dim, green, grey, lightgrey, red, sycamore } from 'utils/colours'
import { oneDP } from 'utils/maths'

export const Table = styled.table`
	color: #fff;
	font-size: 1rem;
	margin-top: 12px;
	border-collapse: collapse;
	border: 1px solid ${grey};
`

export const Row = styled.tr`
	&:nth-child(odd) {
		background-color: ${dim};
	}
`

interface HeadProps {
	colour?: string;
}

export const Head = styled.th<HeadProps>`
	text-align: end;
	width: 65px;
	color: ${props => props.colour};
	background-color: ${grey};
	font-weight: bold;
	font-size: 1.2rem;
	&:last-child {
		padding-right: 8px;
		width: 47px;
	}
`

export const Label = styled.td`
	text-align: start;
	font-weight: bold;
	font-size: 1.2rem;
`

interface DataProps {
	colour?: string;
}

export const Data = styled.td<DataProps>`
	text-align: end;
	width: 65px;
	color: ${props => props.colour || lightgrey};
	text-transform: none;
	&:last-child {
		padding-right: 8px;
		width: 57px;
	}
`

interface TableEquippedProps {
	baseStats: Record<string, any>;
	additionalStats: {
		skill: Record<string, any>;
		mod?: ModificationStats;
	}
}

const colourCompare = (valueOne: number, valueTwo: number) => valueOne !== valueTwo ? (valueOne < valueTwo ? red : green) : '#fff'

export const TableEquipped: React.FC<TableEquippedProps> = ({ baseStats, additionalStats }) => {

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

interface TableCompareProps {
	equippedStats: Record<string, any>;
	selectedStats: Record<string, any>;
	equippedAdditional: Record<string, any>;
	selectedAdditional: Record<string, any>;
}

export const TableCompare: React.FC<TableCompareProps> = ({ equippedStats, selectedStats, equippedAdditional, selectedAdditional }) => {

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