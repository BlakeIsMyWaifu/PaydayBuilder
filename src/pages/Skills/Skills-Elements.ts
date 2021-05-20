import styled from 'styled-components'
import { blue } from 'utils/colours'

export const Title = styled.h1`
	grid-area: title;
	font-size: 4rem;
`

export const TreeNamesWrapper = styled.div`
	grid-area: treenames;
	display: flex;
`

export const TreeName = styled.h1`
	padding-right: 2rem;
	font-size: 1.6rem;
	cursor: pointer;
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