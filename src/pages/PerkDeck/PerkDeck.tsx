import Container from 'components/Container'
import { HorizontalBar, HorizontalItem } from 'components/HorizontalActionBar'
import { InfoContainer, InfoDescription, InfoTitle } from 'components/Info'
import { ItemContainer } from 'components/Item'
import perkDecks, { PerkCard } from 'data/abilities/perks'
import { useAppSelector } from 'hooks'
import React, { createRef, useEffect, useRef, useState } from 'react'
import { blue } from 'utils/colours'
import scrollHorizontalDiv from 'utils/scrollHorizontalDiv'

import Perk from './Perks'

const PerkDeck: React.FC = () => {

	const scrollRef = useRef<HTMLDivElement>(null)

	const perkWrapperRef = useRef<HTMLDivElement>(null)

	const perkRefs = useRef(Array.from({ length: Object.keys(perkDecks).length }, () => createRef<HTMLDivElement>()))

	const scrollToPerk = (i: number, behavior: 'smooth' | 'auto') => {
		const container = perkWrapperRef.current
		if (!container) return
		container.scrollTo({
			top: (i * 120) + 8,
			left: 0,
			behavior
		})
	}

	const [hoveredCard, setHoveredCard] = useState<PerkCard | null>(null)

	const equippedPerk = perkDecks[useAppSelector(state => state.abilities.perkdeck)]

	const [selectedPerk, setSelectedPerk] = useState(equippedPerk)

	useEffect(() => {
		const currentEquippedIndex = Object.keys(perkDecks).indexOf(equippedPerk.name)
		scrollToPerk(currentEquippedIndex, 'auto')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Container rows='4rem 2rem 7fr 4rem' areas='"title title" "horizontalbar ." "items info" "items back"' title='Perk Deck'>

			<HorizontalBar ref={scrollRef} onWheel={event => scrollHorizontalDiv(event, scrollRef)}>
				{
					Object.values(perkDecks).map((perkdeck, i) => {
						return <HorizontalItem
							key={perkdeck.name}
							onClick={() => scrollToPerk(i, 'smooth')}
							color={perkdeck.name === equippedPerk.name ? '#fff' : blue}
						>{perkdeck.name}</HorizontalItem>
					})
				}
			</HorizontalBar>

			<ItemContainer ref={perkWrapperRef}>
				{
					Object.values(perkDecks).map((perkdeck, i) => {
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
