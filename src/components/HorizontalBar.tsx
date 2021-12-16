import React, { useLayoutEffect, useRef, useState } from 'react'
import styled, { FlattenInterpolation } from 'styled-components'
import { blue } from 'utils/colours'

interface ContainerProps {
	arrows: boolean;
}

const Container = styled.div<ContainerProps>`
	grid-area: horizontalbar;
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: ${props => props.arrows ? '32px 1fr 32px' : '1fr'};
	grid-template-areas: ${props => props.arrows ? '"left items right"' : '"items"'};
`

interface ArrowProps {
	direction: 'left' | 'right';
}

const Arrow = styled.p<ArrowProps>`
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

const ItemContainer = styled.div`
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

const Item = styled.p<HorizontalItemProps>`
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

	const [hasArrows, setHasArrows] = useState(false)

	const scrollRef = useRef<HTMLDivElement>(null)

	const scrollHorizontalDiv = (event: React.WheelEvent, ref: React.RefObject<HTMLDivElement>): void => {
		ref.current?.scrollTo({
			top: 0,
			left: ref.current.scrollLeft + event.deltaY,
			behavior: 'auto'
		})
	}

	useLayoutEffect(() => {
		const updateSize = (): void => {
			const div = scrollRef.current
			if (!div) return
			setHasArrows(div.clientWidth < div.scrollWidth)
		}
		window.addEventListener('resize', updateSize)
		updateSize()

		return () => window.removeEventListener('resize', updateSize)
	}, [])

	const scrollBar = (direct: 'left' | 'right', ref: React.RefObject<HTMLDivElement>): void => {
		const div = ref.current
		if (!div) return
		const amount = 200 * (direct === 'left' ? -1 : 1)
		div.scrollTo({
			top: 0,
			left: div.scrollLeft + amount,
			behavior: 'smooth'
		})
	}

	return (
		<Container arrows={hasArrows} onWheel={event => scroll ? scroll(event) : scrollHorizontalDiv(event, scrollRef)}>
			{hasArrows && <Arrow direction='left' onMouseDown={() => scrollBar('left', scrollRef)}>⮜</Arrow>}
			<ItemContainer ref={scrollRef}>
				{
					items.map(({ label, colour, callback, additionalStyling }) => {
						return <Item
							key={label}
							active={label === active}
							onClick={callback}
							colour={colour}
							additionalStyling={additionalStyling || null}
						>
							{label}
						</Item>
					})
				}
			</ItemContainer>
			{hasArrows && <Arrow direction='right' onMouseDown={() => scrollBar('right', scrollRef)}>⮞</Arrow>}
		</Container>
	)
}

export default HorizontalBar