import styled from 'styled-components'
import { dim } from 'utils/colours'
import corner from 'utils/corner'

interface tab {
	id: string;
}

export const Tab = styled.div<tab>`
	grid-area: ${(props) => props.id};
`

interface tabtitle {
	direction: 'ltr' | 'rtl'
}

export const TabTitle = styled.h1<tabtitle>`
	direction: ${props => props.direction};
	font-size: 20px;
`

export const PreviewWrapper = styled.div`
	width: 100%;
	height: calc(100% - 20px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const Preview = styled.div`
	width: 100%;
	height: calc(50% - 4px);
	background-color: ${dim} !important;
	${corner}
`

export const SelectorWrapper = styled.div`
	width: 100%;
	height: calc(100% - 20px);
	${corner}
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

export const ConfigWrapper = styled.div`
	grid-area: config;
	display: flex;
`

export const ResetCurrentBuild = styled.p`
	font-size: 2.5rem;
	cursor: pointer;
	&:hover {
		color: white;
	}
`