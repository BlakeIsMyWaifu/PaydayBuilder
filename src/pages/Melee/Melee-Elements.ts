import styled from 'styled-components'
import { dim, grey } from 'utils/colours'

export const TableStats = styled.table`
	color: #fff;
	font-size: 1rem;
	padding-top: 24px;
	border-collapse: collapse;
	border: 1px solid ${grey};
`

export const TableRow = styled.tr`
	&:nth-child(odd) {
		background-color: ${dim};
	}
`

export const TableHead = styled.th`
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

export const TableLabel = styled.td`
	text-align: start;
	font-weight: bold;
	font-size: 1.2rem;
`

export const TableData = styled.td`
	text-align: end;
	width: 65px;
	color: ${props => props.color};
	&:last-child {
		padding-right: 8px;
		width: 57px;
	}
`