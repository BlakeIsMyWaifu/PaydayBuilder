import styled from 'styled-components'

export const Container = styled.div`
	height: 100%;
	width: 50%;
	padding-top: 5%;
`

export const Icon = styled.div`
	padding-bottom: 50%;
	height: 0;
	width: 50%;
	margin-left: 25%;
	position: relative;
`

export const Locked = styled.div`
	background: url('/images/skills/locked.png') 0 0 no-repeat;
	background-size: 50% 50%;
	height: 100%;
	width: 100%;
	top: 25%;
	left: 25%;
	position: absolute;
`

export const Aced = styled.div`
	background: url('/images/skills/ace.png') 0 0 no-repeat;
	background-size: 100% 100%;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	position: absolute;
`

interface icon {
	x: number;
	y: number;
	state: string
}

export const SkillIcon = styled.div<icon>`
	background-position-x: calc((${props => props.x}% / 880) * 100) !important;
	background-position-y: calc((${props => props.y}% / 960) * 100) !important;
	background: url('/images/skills/skills.png') 0 0 no-repeat;
	background-size: 1200% 1300%;
	opacity: ${props => props.state === 'locked' || props.state === 'available' ? 0.3 : 1};
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	position: absolute;
`

export const Label = styled.p`
	color: #fff;
	text-align: center;
`