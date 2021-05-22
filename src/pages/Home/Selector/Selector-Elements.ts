import { Link as LinkRouter } from 'react-router-dom'
import styled from 'styled-components'
import { blue, dim } from 'utils/colours'

export const Link = styled(LinkRouter)`
	text-decoration: none;
`

export const Container = styled.div`
	width: 100%;
	height: 25%;
	background-color: ${dim};
`

export const Title = styled.p`
	font-size: 20px;
	color: ${blue};
	padding-left: 4px;
`

export const Image = styled.img`
	height: calc(100% - 32px);
	width: auto;
	display: block;
	margin-left: auto;
	margin-right: auto;
`

export const EquipmentContainer = styled.div`
	display: flex;
	flex-direction: row;
`

export const SkillsContainer = styled.div`
	width: calc(100% - 24px);
	height: 96px;
	padding-left: 12px;
	padding-top: 32px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

export const SkillWrapper = styled.div`
	width: calc(20% - 12px);
	height: 100%;
	display: flex;
	flex-direction: column;
`

export const SkillsCard = styled.div`
	width: 100%;
	height: 64px;
	background-color: #fff;
	border-radius: 6px;
`

export interface skillsAmount {
	colour: string
}

export const SkillsAmount = styled.h1<skillsAmount>`
	font-size: 1.5rem;
	text-align: center;
	color: ${props => props.colour};
`

interface perkDeckImage {
	x: number;
	y: number;
}

export const PerkDeckImage = styled.div<perkDeckImage>`
	background-position-x: calc((${props => props.x}% / 192) * 100) !important;
	background-position-y: calc((${props => props.y}% / 1008) * 100) !important;
	background: url('/images/perks/perks.png') 0 0 no-repeat;
	background-size: 500% 2200%;
	height: 144px;
	width: 144px;
	margin-left: calc(50% - 72px);
	filter: invert(1);
`