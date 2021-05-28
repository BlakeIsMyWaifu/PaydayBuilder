import React from 'react'
import styled from 'styled-components'
import { blue, dim, grey } from 'utils/colours'

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
	color: ${props => props.color};
	&:last-child {
		padding-right: 8px;
		width: 57px;
	}
`

interface tableEquiped {
	baseStats: {
		[key: string]: any;
	};
	additionalStats: {
		[key: string]: any;
	};
}

const isArrayZeros = (arr: number[]) => arr.reduce((a, b) => a + b)

export const TableEquiped: React.FC<tableEquiped> = ({ baseStats, additionalStats }) => {
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
					Object.entries(baseStats).map(([label, baseValue]) => {
						const skillValue = additionalStats[label]
						return <Row key={label}>
							<Label>{label}</Label>
							{
								typeof baseValue === 'number' && (
									<>
										<Data>{baseValue + skillValue}</Data>
										<Data>{baseValue}</Data>
										{skillValue ? <Data color={blue}>+{skillValue}</Data> : <Data />}
									</>
								)
							}
							{
								Array.isArray(baseValue) && (
									<>
										<Data>{`${baseValue[0] + skillValue[0]} (${baseValue[1] + skillValue[1]})`}</Data>
										<Data>{`${baseValue[0]} (${baseValue[1]})`}</Data>
										{isArrayZeros(skillValue) ? <Data color={blue}>+{`${skillValue[0]} (${skillValue[1]})`}</Data> : <Data />}
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
	equipedStats: {
		[key: string]: any;
	};
	selectedStats: {
		[key: string]: any;
	};
	equipedAdditional: {
		[key: string]: any;
	};
	selectedAdditional: {
		[key: string]: any;
	};
}

export const TableCompare: React.FC<tableCompare> = ({ equipedStats, selectedStats, equipedAdditional, selectedAdditional }) => {

	const labels = [...Object.keys(equipedStats), ...Object.keys(selectedStats)].filter((label, i, arr) => arr.indexOf(label) == i)

	return (
		<Table>
			<thead>
				<Row>
					<Head />
					<Head>Equiped</Head>
					<Head>Selected</Head>
				</Row>
			</thead>
			<tbody>
				{
					labels.map(label => {
						return <Row>
							<Label>{label}</Label>
							{
								typeof equipedStats[label] === 'number' && (
									<>
										<Data>{(equipedStats[label] ?? '') + (equipedAdditional[label] ?? '')}</Data>
										<Data>{(selectedStats[label] ?? '') + (selectedAdditional[label] ?? '')}</Data>
									</>
								)
							}
							{
								Array.isArray(equipedStats[label]) && (
									<>
										<Data>{`${equipedStats[label][0] + equipedAdditional[label][0]} (${equipedStats[label][1] + equipedAdditional[label][1]})`}</Data>
										<Data>{`${selectedStats[label][0] + selectedAdditional[label][0]} (${selectedStats[label][1] + selectedAdditional[label][1]})`}</Data>
									</>
								)
							}
							{
								typeof equipedStats[label] === 'string' && (
									<>
										<Data>{equipedStats[label]}</Data>
										<Data>{selectedStats[label]}</Data>
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