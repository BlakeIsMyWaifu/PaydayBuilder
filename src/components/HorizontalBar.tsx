import React, { useRef } from 'react'
import styled, { FlattenInterpolation } from 'styled-components'
import { blue } from 'utils/colours'

const Container = styled.div`
	grid-area: horizontalbar;
	display: flex;
	overflow-x: hidden;
	gap: 1.6rem;
`

interface HorizontalItemProps {
	additionalStyling: FlattenInterpolation<any> | null;
	active: boolean;
}

const Item = styled.p<HorizontalItemProps>`
	font-size: 1.6rem;
	cursor: pointer;
	white-space: nowrap;
	color: ${props => props.color || (props.active ? '#fff' : blue)};
	${props => props.additionalStyling}
`

interface HorizontalActionBarProps {
	active: string;
	items: {
		label: string;
		callback: () => void;
		colour?: string;
		additionalStyling?: FlattenInterpolation<any> | null;
	}[];
	scroll?: (event: React.WheelEvent) => void;
}

const HorizontalBar: React.FC<HorizontalActionBarProps> = ({ active, items, scroll }) => {

	const scrollRef = useRef<HTMLDivElement>(null)

	const scrollHorizontalDiv = (event: React.WheelEvent, ref: React.RefObject<HTMLDivElement>): void => {
		const div = ref.current
		if (!div) return
		const containerScrollPosition = div.scrollLeft
		div.scrollTo({
			top: 0,
			left: containerScrollPosition + event.deltaY,
			behavior: 'auto'
		})
	}

	return (
		<Container ref={scrollRef} onWheel={event => scroll ? scroll(event) : scrollHorizontalDiv(event, scrollRef)}>
			{
				items.map(({ label, colour, callback, additionalStyling }) => {
					return <Item
						key={label}
						active={label === active}
						onClick={callback}
						color={colour}
						additionalStyling={additionalStyling || null}
					>
						{label}
					</Item>
				})
			}
		</Container>
	)
}

export default HorizontalBar