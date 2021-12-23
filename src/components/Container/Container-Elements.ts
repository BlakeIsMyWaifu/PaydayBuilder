import { ContainerProps } from 'components/Container'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { blue } from 'utils/colours'

export const Area = styled.div<ContainerProps>`
	position: absolute;
	width: calc(100% - 16px);
	height: calc(100% - 16px);
	top: 8px;
	bottom: 8px;
	left: 8px;
	right: 8px;

	display: grid;
	gap: 8px;

	grid-template-columns: ${props => props.columns};
	grid-template-rows: ${props => props.rows};
	grid-template-areas: ${props => props.areas};
`

export const Title = styled.h1`
	grid-area: title;
	font-size: 4rem;
`

export const BackWrapper = styled.div`
	grid-area: back;
`

export const BackLink = styled(Link)`
	text-decoration: none;
`

export const BackText = styled.p`
	color: ${blue};
	position: absolute;
	bottom: 0;
	right: 8px;
	font-size: calc(4rem - 8px);
	&:hover {
		color: #fff;
	}
`