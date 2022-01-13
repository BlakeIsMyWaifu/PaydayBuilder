import { FaAngleLeft } from '@react-icons/all-files/fa/FaAngleLeft'
import { FaAngleRight } from '@react-icons/all-files/fa/FaAngleRight'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { FlattenInterpolation } from 'styled-components'

import { Arrow, Container, Item, ItemContainer } from './HorizontalBar-Elements'

interface HorizontalActionBarProps {
	active: string | number;
	items: {
		label: string;
		callback: () => void;
		colour?: string;
		additionalStyling?: FlattenInterpolation<any> | null;
		id?: number;
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

	const updateSize = (): void => {
		const div = scrollRef.current
		if (!div) return
		setHasArrows(div.clientWidth < div.scrollWidth)
	}

	useEffect(() => {
		updateSize()
	}, [items])

	useLayoutEffect(() => {
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
			{hasArrows && <Arrow direction='left' onMouseDown={() => scrollBar('left', scrollRef)}> <FaAngleLeft /> </Arrow>}
			<ItemContainer ref={scrollRef}>
				{
					items.map(({ label, colour, callback, additionalStyling, id }, i) => {
						return <Item
							key={`${label}-${i}`}
							active={(typeof active === 'string' ? label : id) === active}
							onClick={callback}
							colour={colour}
							additionalStyling={additionalStyling || null}
						>
							{label}
						</Item>
					})
				}
			</ItemContainer>
			{hasArrows && <Arrow direction='right' onMouseDown={() => scrollBar('right', scrollRef)}> <FaAngleRight /> </Arrow>}
		</Container>
	)
}

export default HorizontalBar