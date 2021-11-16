import styled from 'styled-components'

interface HorizontalBarProps {
	gap?: string;
}

export const HorizontalBar = styled.div<HorizontalBarProps>`
	grid-area: horizontalbar;
	display: flex;
	overflow-x: hidden;
	gap: ${props => props.gap ? props.gap : '1.6rem'};
`

export const HorizontalItem = styled.p`
	font-size: 1.6rem;
	cursor: pointer;
	white-space: nowrap;
	color: ${props => props.color};
`