import styled from 'styled-components'
import corner from 'utils/corner'

export const InfoContainer = styled.div`
	grid-area: info;
	display: flex;
	flex-direction: column;
	padding: 8px 16px;
	overflow-y: auto;
	${corner};
`

interface infoText {
	uppercase?: boolean;
}

export const InfoTitle = styled.h1<infoText>`
	text-transform: ${props => props.uppercase ? 'uppercase ' : 'none'};
	font-size: 2rem;
`

export const InfoSubtitle = styled.h1<infoText>`
	text-transform: ${props => props.uppercase ? 'uppercase ' : 'none'};
	font-size: 1rem;
`

export const InfoDescription = styled.h1<infoText>`
	text-transform: ${props => props.uppercase ? 'uppercase ' : 'none'};
	font-size: 1.2rem;
	padding-top: 16px;
	padding-bottom: 8px;
	white-space: pre-line;
`

export const InfoUnlock = styled.h1`
	text-transform: none;
	color: ${props => props.color};
`