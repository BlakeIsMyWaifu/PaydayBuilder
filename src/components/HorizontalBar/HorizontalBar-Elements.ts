import styled, { FlattenInterpolation } from 'styled-components'
import { blue } from 'utils/colours'

interface ContainerProps {
	arrows: boolean;
}

export const Container = styled.div<ContainerProps>`
	grid-area: horizontalbar;
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: ${props => props.arrows ? '32px 1fr 32px' : '1fr'};
	grid-template-areas: ${props => props.arrows ? '"left items right"' : '"items"'};
`

interface ArrowProps {
	direction: 'left' | 'right';
}

export const Arrow = styled.p<ArrowProps>`
	grid-area: ${props => props.direction};
	height: 32px;
	aspect-ratio: 1;
	color: ${blue};
	font-size: 32px;
	line-height: 32px;
	font-weight: bold;
	color: ${blue};
	cursor: pointer;
	&:hover {
		color: white;
	}
`

export const ItemContainer = styled.div`
	grid-area: items;
	display: flex;
	overflow-x: hidden;
	gap: 1.6rem;
`

interface HorizontalItemProps {
	colour?: string;
	additionalStyling: FlattenInterpolation<any> | null;
	active: boolean;
}

export const Item = styled.p<HorizontalItemProps>`
	font-size: 1.6rem;
	cursor: pointer;
	white-space: nowrap;
	color: ${props => props.colour || (props.active ? '#fff' : blue)};
	${props => props.additionalStyling};
	&:first-child {
		padding-left: 12px;
	}
	&:last-child {
		padding-right: 12px;
	}
`