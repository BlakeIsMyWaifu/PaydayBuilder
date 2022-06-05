import styled from 'styled-components'
import { dim } from 'utils/colours'
import corner from 'utils/corner'

export const EquipmentContainer = styled.div`
	display: flex;
	flex-direction: row;
`

interface ImageProps {
	leftFacing?: boolean;
}

export const Image = styled.img<ImageProps>`
	height: calc(100% - 32px);
	width: auto;
	max-width: 100%;
	display: block;
	margin-left: auto;
	margin-right: auto;
	${props => props.leftFacing && 'transform: scaleX(-1)'};
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
	height: calc(100% - 32px);
	aspect-ratio: 1;
	max-width: 100%;
	margin: auto;
	filter: invert(1);
`

interface TabProps {
	area: string;
}

export const Tab = styled.div<TabProps>`
	grid-area: ${props => props.area};
`

interface TabTitleProps {
	direction: 'ltr' | 'rtl';
}

export const TabTitle = styled.h1<TabTitleProps>`
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