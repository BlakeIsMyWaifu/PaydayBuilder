import styled from 'styled-components'
import corner from 'utils/corner'

export const Title = styled.h1`
	grid-area: title;
	font-size: 4rem;
`

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
	filter: string;
}

export const FilterText = styled.h1<filterText>`
	font-size: 1.2rem;
	direction: rtl;
	cursor: pointer;
	color: ${props => props.color};
	text-decoration: ${props => props.filter ? 'line-through' : 'none'};
`

export const MaskContainer = styled.div`
	grid-area: masks;
	${corner};
	padding: 12px;
	overflow-y: scroll;
`

export const MaskCollection = styled.div`
	padding-top: 16px;
`

export const MaskCollectionTitle = styled.h1`
	font-size: 1.5rem;
	padding-left: 32px;
	color: ${props => props.color};
`

export const Mask = styled.img`
	width: 96px;
	height: 96px;
`

export const InfoUnlock = styled.h1`
	text-transform: none;
	color: ${props => props.color};
`

export const InfoCost = styled.p`
	text-transform: none;
`