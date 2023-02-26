import { type FC, type RefObject, type WheelEvent, useEffect, useRef, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import styled, { type FlattenInterpolation } from 'styled-components'
import { blue } from 'utils/colours'

interface ContainerProps {
	arrows: boolean;
}

const Container = styled.div<ContainerProps>`
	grid-area: horizontalbar;
	height: 100%;
	width: 100%;
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
	additionalStyling: FlattenInterpolation<unknown> | null;
	active: boolean;
}

const Item = styled.p<HorizontalItemProps>`
	font-size: ${props => props.theme.isMobile ? '1.2rem' : '1.6rem'};
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
	active: string | number;
	items: {
		label: string;
		callback: () => void;
		colour?: string;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		additionalStyling?: FlattenInterpolation<any> | null;
		id?: number;
	}[];
	scroll?: (event: WheelEvent) => void;
}

const HorizontalBar: FC<HorizontalActionBarProps> = ({ active, items, scroll }) => {

	const [hasArrows, setHasArrows] = useState(false)

	const scrollRef = useRef<HTMLDivElement>(null)

	const scrollHorizontalDiv = (event: WheelEvent, ref: RefObject<HTMLDivElement>): void => {
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

	useEffect(() => {
		window.addEventListener('resize', updateSize)
		updateSize()
		return () => window.removeEventListener('resize', updateSize)
	}, [])

	const scrollBar = (direct: 'left' | 'right', ref: RefObject<HTMLDivElement>): void => {
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