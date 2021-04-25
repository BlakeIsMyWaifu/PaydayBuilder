import styled from 'styled-components'
import corner from 'utils/corner'

export const Title = styled.div`
	grid-area: title;
	font-size: 4rem;
`

export const MaskWrapper = styled.div`
	grid-area: masks;
	${corner};
`

export const Info = styled.div`
	grid-area: info;
	${corner};
`