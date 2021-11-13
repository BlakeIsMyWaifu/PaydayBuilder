import styled from 'styled-components'
import { blue } from 'utils/colours'

export const TreeNamesWrapper = styled.div`
	grid-area: treenames;
	display: flex;
	gap: 1.5rem;
`

interface TreeNameProps {
	active: boolean;
}

export const TreeName = styled.p<TreeNameProps>`
	padding: 0 6px;
	font-size: 1.6rem;
	cursor: pointer;
	color: ${props => props.active && 'black'};
	text-shadow: ${props => props.active && 'none'};
	background-color: ${props => props.active && 'white'};
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