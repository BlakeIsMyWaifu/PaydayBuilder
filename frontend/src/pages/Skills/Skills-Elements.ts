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
	padding-right: 20px;
	font-size: 1.6rem;
`

export const Trees = styled.div`
	grid-area: skills;
	${corner}
`

export const SubtreeSkills = styled.div``

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