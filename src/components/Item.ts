import styled from 'styled-components';
import corner from 'utils/corner';

export const ItemContainer = styled.div`
	grid-area: items;
	padding: 12px;
	overflow-y: auto;
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	${corner};
`

interface item {
	width?: number;
	height?: number;
	size?: number;
	selected: boolean;
}

export const Item = styled.div<item>`
	position: relative;
	width: ${props => props.width || props.size || 128}px;
	height: ${props => props.height || props.size || 128}px;
	${props => props.selected && corner};
`

export const ItemEquiped = styled.h1`
	position: absolute;
	top: 5px;
	left: 8px;
	font-size: 0.8rem;
	&::before {
		content: 'Equiped';
	}
`

export const ItemName = styled.h1`
	position: absolute;
	direction: rtl;
	top: 5px;
	right: 8px;
	font-size: 0.8rem;
	color: ${props => props.color};
	z-index: 5;
`

interface itemImage {
	locked?: boolean;
}

export const ItemImage = styled.img<itemImage>`
	width: 100%;
	height: 100%;
	filter: brightness(${props => props.locked ? 0.2 : 1});
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