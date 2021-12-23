import styled from 'styled-components'
import { dim, grey, lightgrey } from 'utils/colours'

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