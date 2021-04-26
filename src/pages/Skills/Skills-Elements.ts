import styled from 'styled-components'
import { blue, red } from 'utils/colours'
import corner from 'utils/corner'

export const Title = styled.div`
	grid-area: title;
	font-size: 4rem;
`

export const TreeNamesWrapper = styled.div`
	grid-area: treenames;
	display: flex;
`

export const TreeName = styled.p`
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

export const Reset = styled.div`
	grid-area: reset;
`

export const ResetText = styled.p`
	color: ${blue};
	font-size: 1.6rem;
	direction: rtl;
`

export const Points = styled.div`
	grid-area: points;
	color: ${red};
	font-size: 1.8rem;
	display: flex;
	justify-content: space-between;
`

export const PointsText = styled.p`
	color: inherit;
`

export const PointsNumber = styled.p`
	color: inherit;
	direction: rtl;
`

export const Info = styled.div`
	grid-area: info;
	${corner}
`