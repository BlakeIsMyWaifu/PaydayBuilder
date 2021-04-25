import styled from 'styled-components'

import container from '../../utils/container'
import corner from '../../utils/corner'

export const Container = styled.div`
	${container}
	grid-template-columns: 3fr 1fr;
	grid-template-rows: 1fr 8fr 1fr;
	grid-template-areas: "title title" "masks info" "masks back";
`

export const Title = styled.div`
	grid-area: title;
	font-size: 4rem;
	text-transform: uppercase;
`

export const MaskWrapper = styled.div`
	grid-area: masks;
	${corner};
`

export const Info = styled.div`
	grid-area: info;
	${corner};
`