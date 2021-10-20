import Container from 'components/Container'
import { InfoContainer, InfoDescription, InfoTitle } from 'components/Info'
import { ItemContainer } from 'components/Item'
import data, { card } from 'data/abilities/perks'
import { useAppSelector } from 'hooks'
import React, { createRef, useEffect, useRef, useState } from 'react'
import { blue } from 'utils/colours'
import scrollHorizontalDiv from 'utils/scrollHorizontalDiv'

import { PerkDeckName, PerkDeckNamesContainer } from './PerkDeck-Elements'
import Perk from './Perks'

const PerkDeck: React.FC = () => {

	const scrollRef = useRef<HTMLDivElement>(null)

	const perkWrapperRef = useRef<HTMLDivElement>(null)

	const perkRefs = useRef(Array.from({ length: Object.keys(data).length }, () => createRef<HTMLDivElement>()))

	const scrollToPerk = (i: number, behavior: 'smooth' | 'auto') => {
		const container = perkWrapperRef.current
		if (!container) return
		container.scrollTo({
			top: (i * 120) + 8,
			left: 0,
			behavior
		})
	}

	const [hoveredCard, setHoveredCard] = useState<card | null>(null)

	const equippedPerk = useAppSelector(state => state.abilities.perkdeck)

	const [selectedPerk, setSelectedPerk] = useState(equippedPerk)

	useEffect(() => {
		const currentEquippedIndex = Object.keys(data).indexOf(equippedPerk.name)
		scrollToPerk(currentEquippedIndex, 'auto')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Container rows='4rem 2rem 7fr 4rem' areas='"title title" "perkdecknames ." "items info" "items back"' title='Perk Deck'>

			<PerkDeckNamesContainer ref={scrollRef} onWheel={event => scrollHorizontalDiv(event, scrollRef)}>
				{
					Object.values(data).map((perkdeck, i) => {
						return <PerkDeckName
							key={perkdeck.name}
							onClick={() => scrollToPerk(i, 'smooth')}
							color={perkdeck.name === equippedPerk.name ? '#fff' : blue}
						>{perkdeck.name}</PerkDeckName>
					})
				}
			</PerkDeckNamesContainer>

			<ItemContainer ref={perkWrapperRef}>
				{
					Object.values(data).map((perkdeck, i) => {
						return <Perk
							perkref={perkRefs.current[i]}
							key={perkdeck.name}
							perk={perkdeck}
							index={i}
							setHoveredCard={setHoveredCard}
							selectedPerk={selectedPerk}
							setSelectedPerk={setSelectedPerk}
						/>
					})
				}
			</ItemContainer>

			<InfoContainer>
				<InfoTitle>{hoveredCard?.name}</InfoTitle>
				<InfoDescription>{hoveredCard?.description.join('\n\n')}</InfoDescription>
			</InfoContainer>

		</Container>
	)
}

export default PerkDeck
