import styled from 'styled-components'
import corner from 'utils/corner'

export const CollectionTitles = styled.div`
	grid-area: collectiontitles;
	display: flex;
	overflow-x: hidden;
`

export const CollectionTitle = styled.h1`
	padding-right: 2rem;
	font-size: 1.6rem;
	cursor: pointer;
	white-space: nowrap;
	color: ${props => props.color};
	&:last-child {
		padding-right: 0;
	}
`

export const FilterContainer = styled.div`
	grid-area: filter;
`

export const FilterTitle = styled.h1`
	font-size: 2rem;
	text-align: center;
`

export const FiltersWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(3 1fr);
`

interface filterText {
	typeFilter: boolean;
}

export const FilterText = styled.h1<filterText>`
	font-size: 1.2rem;
	direction: rtl;
	cursor: pointer;
	color: ${props => props.color};
	text-decoration: ${props => props.typeFilter ? 'line-through' : 'none'};
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

interface itemImage {
	selected?: boolean;
}

export const ItemImage = styled.img<itemImage>`
	width: 96px;
	height: 96px;
	${props => props.selected && corner};
`

export const InfoCost = styled.p`
	text-transform: none;
`