import styled from 'styled-components'
import corner from 'utils/corner'

export const Title = styled.h1`
	grid-area: title;
	font-size: 4rem;
`

export const MaskWrapper = styled.div`
	grid-area: masks;
	${corner};
	padding: 12px;
	overflow-y: scroll;
`

export const Mask = styled.img`
	width: 96px;
	height: 96px;
`

export const Info = styled.div`
	grid-area: info;
	${corner};
	padding: 8px;
`

export const InfoName = styled.h1`
	text-transform: none;
	font-size: 2rem;
`

export const InfoDescription = styled.h1`
	text-transform: none;
	font-size: 1.2rem;
`

export const InfoUnlock = styled.h1`
	text-transform: none;
	color: yellow;
`

export const InfoCost = styled.p`
	text-transform: none;
`