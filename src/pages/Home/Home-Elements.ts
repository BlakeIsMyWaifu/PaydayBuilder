import styled from 'styled-components'
import { dim } from 'utils/colours'
import corner from 'utils/corner'

interface tab {
	id: string;
}

export const Tab = styled.div<tab>`
	grid-area: ${(props) => props.id};
`

interface TabtitleProps {
	direction: 'ltr' | 'rtl'
}

export const TabTitle = styled.h1<TabtitleProps>`
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

interface ImageProps {
	leftFacing?: boolean;
}

export const Image = styled.img<ImageProps>`
	height: auto;
	max-height: calc(100% - 32px);
	width: auto;
	max-width: 100%;
	display: block;
	margin-left: auto;
	margin-right: auto;
	${props => props.leftFacing && 'transform: scaleX(-1)'};
`

export const EquipmentContainer = styled.div`
	display: flex;
	flex-direction: row;
`

interface PerkDeckImageProps {
	x: number;
	y: number;
}

export const PerkDeckImage = styled.div<PerkDeckImageProps>`
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

export const VersionWrapper = styled.div`
	grid-area: version;
	position: relative;
`

export const VersionText = styled.p`
	font-size: 1.2rem;
	color: white;
	position: absolute;
	left: 0;
	bottom: 0;
`