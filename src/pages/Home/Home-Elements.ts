import styled from 'styled-components'
import { dim } from 'utils/colours'
import corner from 'utils/corner'

interface container {
	area: string;
}

export const Container = styled.div<container>`
	position: absolute;
	width: 100%;
	height: 100%;

	display: grid;
	gap: 8px;
	grid-template-columns: 0 2fr 1fr 1fr 1fr;
	grid-template-rows: 0 calc(100% - 3rem - 16px) 3rem;
	grid-template-areas: ${props => props.area};
`

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
	width: calc(100% - 32px);
	height: calc(50% - 20px);
	background-color: ${dim} !important;
	display: flex;
	flex-direction: column;
	padding: 8px 16px;
	overflow-y: auto;
	${corner};
`

export const SelectorWrapper = styled.div`
	width: 100%;
	height: calc(100% - 20px);
	${corner};
`

export const Image = styled.img`
	height: auto;
	max-height: calc(100% - 32px);
	width: auto;
	max-width: 100%;
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
	justify-content: space-evenly;
	align-items: center;
`

export const ConfigButton = styled.p`
	font-size: 2.5rem;
	cursor: pointer;
	&:hover {
		color: white;
	}
`