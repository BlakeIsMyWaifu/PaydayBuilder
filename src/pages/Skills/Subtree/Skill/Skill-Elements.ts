import styled from 'styled-components'

export const Container = styled.div`
	height: 100%;
	width: 50%;
`

interface icon {
	x: number;
	y: number;
	state: string
}

export const Icon = styled.div<icon>`
	background-position-x: calc((${props => props.x}% / 880) * 100) !important;
	background-position-y: calc((${props => props.y}% / 960) * 100) !important;
	background: url("/images/skills/skills.png") 0 0 no-repeat;
	background-size: 1200% 1300%;
	padding-bottom: 50%;
	height: 0;
	width: 50%;
	margin-left: 25%;
	opacity: ${props => props.state === 'locked' || props.state === 'available' ? 0.2 : 1};
`

export const Label = styled.p`
	color: #fff;
	margin-left: 25%;
`