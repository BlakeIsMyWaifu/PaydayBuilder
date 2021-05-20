import styled from 'styled-components'
import corner from 'utils/corner'

export const Title = styled.h1`
	grid-area: title;
	font-size: 4rem;
`

export const ArmourWrapper = styled.div`
	grid-area: armours;
	${corner};
	padding: 12px;
	overflow-y: scroll;
`

export const Armourr = styled.img`
	width: 128px;
	height: 128px;
`