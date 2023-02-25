import styled from 'styled-components'
import { red } from 'utils/colours'
import corner from 'utils/corner'

export const InfoContainer = styled(corner)`
	grid-area: info;
	display: flex;
	flex-direction: column;
	padding: 8px 16px;
	overflow-y: auto;
	font-size: ${props => props.theme.isMobile ? '0.75rem' : '1rem'};
`

export const InfoTitleWrapper = styled.span`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 2rem;
`

interface InfoTextProps {
	uppercase?: boolean;
}

export const InfoTitle = styled.h1<InfoTextProps>`
	text-transform: ${props => props.uppercase ? 'uppercase ' : 'none'};
	font-size: 200%;
`

export const InfoSubtitle = styled.h2<InfoTextProps>`
	text-transform: ${props => props.uppercase ? 'uppercase ' : 'none'};
	font-size: 100%;
`

export const InfoDescription = styled.p<InfoTextProps>`
	text-transform: ${props => props.uppercase ? 'uppercase ' : 'none'};
	font-size: 120%;
	padding-top: 16px;
	padding-bottom: 8px;
	white-space: pre-line;
`

export const InfoRequirement = styled.p`
	color: ${red};
	font-size: 100%;
`

interface InfoUnlockProps {
	colour: string;
}

export const InfoUnlock = styled.p<InfoUnlockProps>`
	text-transform: none;
	color: ${props => props.colour};
	font-size: 100%;
`

export const InfoCost = styled.p`
	text-transform: none;
	font-size: 100%;
`