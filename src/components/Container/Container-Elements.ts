import { ContainerProps } from 'components/Container'
import Link from 'next/link'
import styled from 'styled-components'
import { blue } from 'utils/colours'

export const Area = styled.div<ContainerProps>`
	position: absolute;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	padding: 8px;
	box-sizing: border-box;

	overflow: hidden;

	display: grid;
	gap: 8px;

	grid-template-columns: ${props => props.columns};
	grid-template-rows: ${props => props.rows};
	grid-template-areas: ${props => props.areas};
`

export const Title = styled.h1`
	grid-area: title;
	font-size: 4rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`

export const BackWrapper = styled.div`
	grid-area: back;
	position: relative;
`

export const BackLink = styled(Link)`
	text-decoration: none;
`

export const BackText = styled.p`
	color: ${blue};
	position: absolute;
	bottom: 0;
	right: 0;
	font-size: 4rem;
	line-height: 4rem;
	&:hover {
		color: #fff;
	}
`