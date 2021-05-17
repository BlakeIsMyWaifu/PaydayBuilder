import styled from 'styled-components'
import corner from 'utils/corner'

export const Title = styled.h1`
	grid-area: title;
	font-size: 4rem;
`

export const MaskContainer = styled.div`
	grid-area: masks;
	${corner};
	padding: 12px;
	overflow-y: scroll;
`

export const MaskCollection = styled.div`
	padding-top: 16px;
`

export const CollectionTitle = styled.h1`
	font-size: 1.5rem;
	padding-left: 32px;
	color: ${props => props.color};
`

export const Mask = styled.img`
	width: 96px;
	height: 96px;
`

export const InfoUnlock = styled.h1`
	text-transform: none;
	color: ${props => props.color};
`

export const InfoCost = styled.p`
	text-transform: none;
`