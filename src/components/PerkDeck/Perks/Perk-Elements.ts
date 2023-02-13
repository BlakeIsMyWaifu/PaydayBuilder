import styled from 'styled-components'
import corner from 'utils/corner'

export const Container = styled.div`
	width: calc(100% - 16px);
	height: 120px;
	position: relative;
`

export const Title = styled.p`
	font-size: 1.2rem;
	position: absolute;
	z-index: 20;
`

export const Equipped = styled(Title)`
	top: 1.2rem;
`

export const CardWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-left: 32px;
`

interface CardProps {
	selected: boolean;
}

export const Card = styled.div<CardProps>`
	height: 92px;
	width: 64px;
	position: relative;
	${props => props.selected ? 'transform: scale(120%);' : ''}
	transition: transform 0.25s ease-in-out;
	&:hover {
		${corner}
	}
	`

interface CardBackgroundProps {
	selected: boolean;
}

export const CardBackground = styled.img<CardBackgroundProps>`
	height: 100%;
	width: 100%;
	opacity: ${props => props.selected ? 1 : 0.5};
`

export interface CardIconBaseProps {
	x: number;
	y: number;
}

export const CardIconBase = styled.div<CardIconBaseProps>`
	background-position-x: calc((${props => props.x}% / 192) * 100) !important;
	background-position-y: calc((${props => props.y}% / 1104) * 100) !important;
	background: url('/images/perks/perks.png') 0 0 no-repeat;
	background-size: 500% 2400%;
`

export const CardIcon = styled(CardIconBase)`
	height: 48px;
	width: 48px;
	top: 24px;
	left: 8px;
	position: absolute;
`

export const CardNumber = styled.p`
	position: absolute;
	top: 4px;
	width: 100%;
	text-align: center;
	color: black;
	text-shadow: none;
`