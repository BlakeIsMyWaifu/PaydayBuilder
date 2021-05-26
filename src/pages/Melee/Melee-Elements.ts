import styled from 'styled-components'
import { blue, dim, grey } from 'utils/colours'
import corner from 'utils/corner'

export const IconWrapper = styled.div`
	position: relative;
`

export const EquipedLabel = styled.h1`
	position: absolute;
	top: 5px;
	left: 8px;
`

export const NameLabel = styled.h1`
	position: absolute;
	top: 5px;
	right: 8px;
	font-size: 0.8rem;
	color: ${props => props.color};
`

interface meleeIcon {
	selected: boolean;
}

export const MeleeIcon = styled.img<meleeIcon>`
	width: 192px;
	height: 96px;
	${props => props.selected && corner};
`

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