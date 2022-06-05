import styled, { css } from 'styled-components'
import { blue } from 'utils/colours'

interface HighlightActiveProps {
	active: boolean;
}

export const highlightActive = css<HighlightActiveProps>`
	color: ${props => props.active && 'black'};
	text-shadow: ${props => props.active && 'none'};
	background-color: ${props => props.active && 'white'};
	padding: 0 4px;
`

export const Tree = styled.div`
	grid-area: skills;
	display: flex;
	justify-content: space-between;
`

export const SubtreeLabelWrapper = styled.div`
	grid-area: subtreelabels;
	display: flex;
`

export const SubtreeLabel = styled.p`
	color: ${blue};
	font-size: 2rem;
	width: calc(100% / 3);
	text-align: center;
`