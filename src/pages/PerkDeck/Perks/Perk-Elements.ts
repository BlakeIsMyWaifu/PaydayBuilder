import styled from 'styled-components'
import corner from 'utils/corner'

export const Container = styled.div`
	width: calc(100% - 16px);
	height: 120px;
`

export const Title = styled.h1`
	font-size: 1.2rem;
`

export const CardWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
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

interface CardIconProps {
	x: number;
	y: number;
}

export const CardIcon = styled.div<CardIconProps>`
	background-position-x: calc((${props => props.x}% / 192) * 100) !important;
	background-position-y: calc((${props => props.y}% / 1008) * 100) !important;
	background: url('/images/perks/perks.png') 0 0 no-repeat;
	background-size: 500% 2200%;
	height: 48px;
	width: 48px;
	top: 24px;
	left: 8px;
	position: absolute;
`