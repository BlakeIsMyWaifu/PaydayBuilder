import styled, { css, keyframes } from 'styled-components'

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
	state: string;
	redFlash: boolean;
}

// https://github.com/microsoft/typescript-styled-plugin/issues/137
// https://github.com/microsoft/typescript-styled-plugin/pull/138
let redFlash = keyframes`
	\ 25% {
		transform: rotate(3deg);
		filter: hue-rotate(180deg);
	}
	\ 50% {
		transform: rotate(-6deg);
		filter: hue-rotate(180deg);
	}
	\ 75% {
		transform: rotate(1deg);
		filter: hue-rotate(180deg);
	}
	\ 100% {
		transform: rotate(0deg);
		filter: hue-rotate(180deg);
	}
`

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
	&:hover {
		transform: scale(1.1);
	}
	animation: ${props => props.redFlash ? css`${redFlash} 0.25s 1` : ''};
`

export const Label = styled.p`
	color: #fff;
	text-align: center;
`