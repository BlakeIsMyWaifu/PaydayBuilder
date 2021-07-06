import styled, { css, keyframes } from 'styled-components'
import corner from 'utils/corner'

export const RarityContainer = styled.div`
	grid-area: rarity;
	display: flex;
	gap: 1rem;
	overflow-x: hidden;
`

const rainbow = keyframes`
	0% {
		color: #3BAEFE;
	}
	18% {
		color: #FFD400;
	}
	36% {
		color: #FFF;
	}
	54% {
		color: #FF9100;
	}
	72% {
		color: #FE5D63;
	}
	90% {
		color: #FF1AFF;
	}
	100% {
		color: #3BAEFE;
	}
`

export const RarityTitle = styled.h1`
	font-size: 1.6rem;
	cursor: pointer;
	white-space: nowrap;
	color: ${props => props.color};
	animation: ${props => props.color === 'rainbow' && css`${rainbow}`} 4s linear 0s infinite;
`

export const ItemContainer = styled.div`
	grid-area: items;
	padding: 12px;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	${corner};
`

export const MaskCollection = styled.div`
	display: flex;
	flex-direction: column;
`

export const MaskCollectionTitle = styled.h1`
	font-size: 1.5rem;
	padding-left: 32px;
	color: ${props => props.color};
`

export const MaskWrapper = styled.div`
	padding-top: 16px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`

export const InfoCost = styled.p`
	text-transform: none;
`

export const CollectionsContainer = styled.div`
	padding-top: 16px;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	overflow-x: hidden;
`

export const CollectionTitle = styled.div`
	font-size: 1.2rem;
	cursor: pointer;
	color: ${props => props.color};
	&:hover::before {
		content: '> ';
	}
`