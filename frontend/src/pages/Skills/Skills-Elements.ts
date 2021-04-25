import styled from 'styled-components'

import corner from '../../utils/corner'

export const Title = styled.div`
	grid-area: title;
	font-size: 4rem;
	text-transform: uppercase;
`

export const Trees = styled.div`
	grid-area: skills;
`

export const Reset = styled.div`
	grid-area: reset;
`

export const Points = styled.div`
	grid-area: points;
`

export const Info = styled.div`
	grid-area: info;
	${corner}
`