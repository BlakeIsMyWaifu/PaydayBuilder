import React from 'react'
import styled from 'styled-components'
import { blue, dim, green, grey, lightgrey, red } from 'utils/colours'

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

export const Head = styled.th`
	text-align: end;
	width: 65px;
	color: ${props => props.color};
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

export const Data = styled.td`
	text-align: end;
	width: 65px;
	color: ${props => props.color || lightgrey};
	text-transform: none;
	&:last-child {
		padding-right: 8px;
		width: 57px;
	}
`

interface tableEquipped {
	baseStats: Record<string, any>;
	additionalStats: Record<string, any>;
}

const colourCompare = (valueOne: number, valueTwo: number) => valueOne !== valueTwo ? (valueOne < valueTwo ? red : green) : '#fff'

export const TableEquipped: React.FC<tableEquipped> = ({ baseStats, additionalStats }) => {

	const isArrayZeros = (arr: number[]) => arr.reduce((a, b) => a + b)

	return (
		<Table>
			<thead>
				<Row>
					<Head />
					<Head>Total</Head>
					<Head>Base</Head>
					<Head color={blue}>Skill</Head>
				</Row>
			</thead>
			<tbody>
				{
					Object.entries(baseStats).map(([stat, baseValue]) => {
						const skillValue = additionalStats[stat]
						return <Row key={stat}>
							<Label>{stat}</Label>
							{
								typeof baseValue === 'number' && (
									<>
										<Data color={colourCompare(baseValue + skillValue, baseValue)}>{baseValue + skillValue}</Data>
										<Data>{baseValue}</Data>
										{skillValue ? <Data color={blue}>{skillValue > 0 ? '+' : ''}{skillValue}</Data> : <Data />}
									</>
								)
							}
							{
								Array.isArray(baseValue) && (
									<>
										<Data color={colourCompare(baseValue[0] + skillValue[0], baseValue[0])}>{`${baseValue[0] + skillValue[0]} (${baseValue[1] + skillValue[1]})`}</Data>
										<Data>{`${baseValue[0]} (${baseValue[1]})`}</Data>
										{isArrayZeros(skillValue) ? <Data color={blue}>{skillValue[0] > 0 ? '+' : ''}{`${skillValue[0]} (${skillValue[1]})`}</Data> : <Data />}
									</>
								)
							}
							{
								typeof baseValue === 'string' && (
									<>
										<Data>{baseValue}</Data>
										<Data />
										<Data />
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

interface tableCompare {
	equippedStats: Record<string, any>;
	selectedStats: Record<string, any>;
	equippedAdditional: Record<string, any>;
	selectedAdditional: Record<string, any>;
}

export const TableCompare: React.FC<tableCompare> = ({ equippedStats, selectedStats, equippedAdditional, selectedAdditional }) => {

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
										<Data color={colourCompare(numMain, numCompare)}>{numMain}</Data>
										<Data color={colourCompare(numCompare, numMain)}>{numCompare}</Data>
									</>
								)
							}
							{
								Array.isArray(main) && (
									<>
										<Data color={colourCompare(arrMain, arrCompare)}>{`${arrMain} (${main[1] + equippedAdditional[stat][1]})`}</Data>
										<Data color={colourCompare(arrCompare, arrMain)}>{`${arrCompare} (${compare[1] + selectedAdditional[stat][1]})`}</Data>
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