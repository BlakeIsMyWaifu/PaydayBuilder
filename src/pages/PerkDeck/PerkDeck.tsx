import Back from 'components/Back'
import Container from 'components/Container'
import { InfoContainer, InfoDescription, InfoTitle } from 'components/Info'
import { Title, Wrapper } from 'components/Content'
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
		const currentEquipedIndex = data.indexOf(data.find(perk => perk.name === equipedPerk.name) || data[0])
		scrollToPerk(currentEquipedIndex)
	}, [])

	return (
		<Container columns='3fr 1fr' rows='4rem 2rem 7fr 4rem' areas='"title title" "perkdecknames ." "wrapper info" "wrapper back"'>

			<Title>Perk Deck</Title>

			<PerkDeckNamesWrapper ref={scrollRef} onWheel={e => scrollHorizontalDiv(e, scrollRef)}>
				{
					data.map((perkdeck, i) => {
						return <PerkDeckName key={perkdeck.name} onClick={() => scrollToPerk(i)}>{perkdeck.name}</PerkDeckName>
					})
				}
			</PerkDeckNamesWrapper>

			<Wrapper ref={perkWrapperRef}>
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
			</Wrapper>

			<InfoContainer>
				<InfoTitle>{hoveredCard.name}</InfoTitle>
				<InfoDescription>{hoveredCard.description.join('\n\n')}</InfoDescription>
			</InfoContainer>

			<Back />

		</Container>
	)
}

export default PerkDeck
