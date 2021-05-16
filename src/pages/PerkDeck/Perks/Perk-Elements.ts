import styled from 'styled-components'

export const Container = styled.div`
	width: calc(100% - 16px);
	height: 120px;
	padding: 8px;
`

export const Title = styled.h1`
	font-size: 1.2rem;
`

export const CardWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
`

export const Card = styled.div`
	height: 48px;
	width: 48px;
	position: relative;
`

interface cardBackground {
	selected: boolean;
}

export const CardBackground = styled.img<cardBackground>`
	opacity: ${props => props.selected ? 1 : 0.5};
`

interface cardIcon {
	x: number;
	y: number;
}

export const CardIcon = styled.div<cardIcon>`
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