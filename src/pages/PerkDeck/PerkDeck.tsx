import Back from 'components/Back/Back'
import Container from 'components/Container/Container'
import data from 'data/abilities/perks'
import React, { createRef, useRef } from 'react'

import { Info, PerkDeckName, PerkDeckNamesWrapper, PerksWrapper, Title } from './PerkDeck-Elements'
import Perk from './Perks/Perk'

const PerkDeck: React.FC = () => {

	const scrollRef = useRef<HTMLDivElement>(null)

	const onWheel = (event: React.WheelEvent) => {
		const container = scrollRef.current
		if (!container) return
		const containerScrollPosition = container.scrollLeft
		container.scrollTo({
			top: 0,
			left: containerScrollPosition + event.deltaY,
			behavior: 'auto'
		})
	}

	const perkWrapperRef = useRef<HTMLDivElement>(null)

	const perkRefs = useRef(Array.from({length: data.length}, _ => React.createRef<HTMLDivElement>()))

	const scrollToPerk = (event: React.MouseEvent, i: number) => {
		const container = perkWrapperRef.current
		if (!container) return
		container.scrollTo({
			top: i * 136,
			left: 0,
			behavior: 'smooth'
		})
	}

	return (
		<Container columns='3fr 1fr' rows='4rem 2rem 7fr 4rem' areas='"title title" "perkdecknames ." "perkdeck info" "perkdeck back"'>

			<Title>Perk Deck</Title>

			<PerkDeckNamesWrapper ref={scrollRef} onWheel={onWheel}>
				{
					data.map((perkdeck, i) => {
						return <PerkDeckName key={perkdeck.name} onClick={event => scrollToPerk(event, i)}>{perkdeck.name}</PerkDeckName>
					})
				}
			</PerkDeckNamesWrapper>

			<PerksWrapper ref={perkWrapperRef}>
				{
					data.map((perkdeck, i) => {
						return <Perk perkref={perkRefs.current[i]} key={perkdeck.name} data={perkdeck} index={i} />
					})
				}
			</PerksWrapper>

			<Info>
				
			</Info>

			<Back />

		</Container>
	)
}

export default PerkDeck
