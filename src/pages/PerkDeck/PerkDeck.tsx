import Back from 'components/Back'
import Container from 'components/Container'
import { ItemContainer, Title } from 'components/Content'
import { InfoContainer, InfoDescription, InfoTitle } from 'components/Info'
import data from 'data/abilities/perks'
import { useAppSelector } from 'hooks'
import React, { createRef, useEffect, useRef, useState } from 'react'
import scrollHorizontalDiv from 'utils/scrollHorizontalDiv'

import { PerkDeckName, PerkDeckNamesWrapper } from './PerkDeck-Elements'
import Perk from './Perks/Perk'

const PerkDeck: React.FC = () => {

	const scrollRef = useRef<HTMLDivElement>(null)

	const perkWrapperRef = useRef<HTMLDivElement>(null)

	const perkRefs = useRef(Array.from({length: data.length}, () => createRef<HTMLDivElement>()))

	const scrollToPerk = (i: number, behavior: 'smooth' | 'auto') => {
		const container = perkWrapperRef.current
		if (!container) return
		container.scrollTo({
			top: (i * 120) + 8,
			left: 0,
			behavior
		})
	}

	const [hoveredCard, setHoveredCard] = useState(data[0].cards[0])

	const equipedPerk = useAppSelector(state => state.abilities.perkdeck)

	const [selectedPerk, setSelectedPerk] = useState(equipedPerk)

	useEffect(() => {
		const currentEquipedIndex = data.indexOf(data.find(perk => perk.name === equipedPerk.name) || data[0])
		scrollToPerk(currentEquipedIndex, 'auto')
	}, [])

	return (
		<Container columns='3fr 1fr' rows='4rem 2rem 7fr 4rem' areas='"title title" "perkdecknames ." "items info" "items back"'>

			<Title>Perk Deck</Title>

			<PerkDeckNamesWrapper ref={scrollRef} onWheel={e => scrollHorizontalDiv(e, scrollRef)}>
				{
					data.map((perkdeck, i) => {
						return <PerkDeckName key={perkdeck.name} onClick={() => scrollToPerk(i, 'smooth')}>{perkdeck.name}</PerkDeckName>
					})
				}
			</PerkDeckNamesWrapper>

			<ItemContainer ref={perkWrapperRef}>
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
			</ItemContainer>

			<InfoContainer>
				<InfoTitle>{hoveredCard.name}</InfoTitle>
				<InfoDescription>{hoveredCard.description.join('\n\n')}</InfoDescription>
			</InfoContainer>

			<Back />

		</Container>
	)
}

export default PerkDeck
