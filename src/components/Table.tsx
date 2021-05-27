import { armourStats } from 'data/character/armours'
import React from 'react'
import styled from 'styled-components'
import { blue, dim, grey } from 'utils/colours'

const Table = styled.table`
	color: #fff;
	font-size: 1rem;
	margin-top: 24px;
	border-collapse: collapse;
	border: 1px solid ${grey};
`

const Row = styled.tr`
	&:nth-child(odd) {
		background-color: ${dim};
	}
`

const Head = styled.th`
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

const Label = styled.td`
	text-align: start;
	font-weight: bold;
	font-size: 1.2rem;
`

const Data = styled.td`
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
		[key: string]: number;
	};
	additionalStats: {
		[key: string]: number;
	};
}

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
							<Data>{baseValue + skillValue}</Data>
							<Data>{baseValue}</Data>
							{skillValue ? <Data color={blue}>+{skillValue}</Data> : <Data />}
						</Row>
					})
				}
			</tbody>
		</Table>
	)
}

interface tableCompare {
	equipedStats: {
		[key: string]: number;
	};
	selectedStats: {
		[key: string]: number;
	};
	equipedAdditional: {
		[key: string]: number;
	};
	selectedAdditional: {
		[key: string]: number;
	};
}

export const TableCompare: React.FC<tableCompare> = ({ equipedStats, selectedStats, equipedAdditional, selectedAdditional }) => {
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
					Object.entries(equipedStats).map(([label, value]) => {
						return <Row>
							<Label>{label}</Label>
							<Data>{value + equipedAdditional[label]}</Data>
							<Data>{selectedStats[label] + selectedAdditional[label]}</Data>
						</Row>
					})
				}
			</tbody>
		</Table>
	)
}