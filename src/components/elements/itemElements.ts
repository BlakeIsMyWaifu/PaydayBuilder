import styled from 'styled-components'
import corner, { cornerCSS } from 'utils/corner'

export const ItemContainer = styled(corner)`
	grid-area: items;
	padding: 12px;
	overflow-y: auto;
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
`

export interface ItemProps {
	width?: number;
	rowAmount: number;
	selected: boolean;
}

export const Item = styled.div<ItemProps>`
	position: relative;
	line-height: 0;
	width: max(${props => 100 / (props.rowAmount || 10)}%, ${props => props.width ?? (props.theme.isMobile ? 128 : 192)}px);
	cursor: pointer;
	${props => props.selected && cornerCSS};
`

export const ItemEquipped = styled.p`
	position: absolute;
	top: 5px;
	left: 8px;
	font-size: 0.8rem;
	line-height: 0.8rem;
	z-index: 10;
	&::before {
		content: 'Equipped';
	}
`

interface ItemNameProps {
	colour?: string;
}

export const ItemName = styled.h2<ItemNameProps>`
	position: absolute;
	top: 5px;
	right: 8px;
	width: 60%;
	font-size: 0.8rem;
	line-height: 0.8rem;
	color: ${props => props.colour ?? 'white'};
	z-index: 5;
	white-space: pre-line;
	direction: rtl;
`

interface ItemImageProps {
	locked?: boolean;
	leftFacing?: boolean;
	aspectRatio?: 'auto';
}

export const ItemImage = styled.img<ItemImageProps>`
	height: 100%;
	width: 100%;
	aspect-ratio: ${props => props.aspectRatio ?? '1 / 1'};
	filter: brightness(${props => props.locked ? 0.2 : 1});
	transform: scaleX(${props => props.leftFacing ? -1 : 1});
`

export const LockedIcon = styled.div`
	position: absolute;
	top: calc(50% - 16px);
	left: calc(50% - 16px);
	background-image: url('images/locked.png');
	background-repeat: no-repeat;
	width: 32px;
	height: 32px;
	z-index: 10;
`