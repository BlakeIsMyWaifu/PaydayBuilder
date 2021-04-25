import styled from 'styled-components'

import container from '../../utils/container'
import corner from '../../utils/corner'

export const Container = styled.div`
	${container}
	grid-template-columns: 3fr 1fr;
	grid-template-rows: 1fr 1fr 7fr 1fr;
	grid-template-areas: "title reset" "skills points" "skills info" "skills back";
`

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