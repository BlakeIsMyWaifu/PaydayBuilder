import Back from 'components/Back'
import Container from 'components/Container'
import { InfoContainer, InfoDescription, InfoTitle } from 'components/Info'
import data from 'data/abilities/perks'
import { useAppSelector } from 'hooks'
import React, { createRef, useEffect, useRef, useState } from 'react'

import { PerkDeckName, PerkDeckNamesWrapper, PerksWrapper, Title } from './PerkDeck-Elements'
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

	const perkRefs = useRef(Array.from({length: data.length}, () => createRef<HTMLDivElement>()))

	const scrollToPerk = (i: number) => {
		const container = perkWrapperRef.current
		if (!container) return
		container.scrollTo({
			top: i * 136,
			left: 0,
			behavior: firstScroll ? 'smooth' : 'auto'
		})
		firstScroll = true
	}

	const [hoveredCard, setHoveredCard] = useState(data[0].cards[0])

	const equipedPerk = useAppSelector(state => state.abilities.perkdeck)

	const [selectedPerk, setSelectedPerk] = useState(equipedPerk)

	let firstScroll = false

	useEffect(() => {
		const currentEquipedIndex = data.indexOf(equipedPerk)
		scrollToPerk(currentEquipedIndex)
	}, [])

	return (
		<Container columns='3fr 1fr' rows='4rem 2rem 7fr 4rem' areas='"title title" "perkdecknames ." "perkdeck info" "perkdeck back"'>

			<Title>Perk Deck</Title>

			<PerkDeckNamesWrapper ref={scrollRef} onWheel={onWheel}>
				{
					data.map((perkdeck, i) => {
						return <PerkDeckName key={perkdeck.name} onClick={() => scrollToPerk(i)}>{perkdeck.name}</PerkDeckName>
					})
				}
			</PerkDeckNamesWrapper>

			<PerksWrapper ref={perkWrapperRef}>
				{
					data.map((perkdeck, i) => {
						return <Perk
							perkref={perkRefs.current[i]}
							key={perkdeck.name}
							data={perkdeck}
							index={i}
							setHoveredCard={setHoveredCard}
							selectedPerk={selectedPerk}
							setSelectedPerk={setSelectedPerk}
						/>
					})
				}
			</PerksWrapper>

			<InfoContainer>
				<InfoTitle>{hoveredCard.name}</InfoTitle>
				<InfoDescription>{hoveredCard.description.join('\n\n')}</InfoDescription>
			</InfoContainer>

			<Back />

		</Container>
	)
}

export default PerkDeck
