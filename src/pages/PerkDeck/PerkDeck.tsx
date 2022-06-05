import Container from 'components/Container'
import HorizontalBar from 'components/HorizontalBar'
import { InfoContainer, InfoDescription, InfoTitle } from 'components/Info/Info-Elements'
import { ItemContainer } from 'components/Item-Elements'
import perkDecks, { PerkCard } from 'data/abilities/perks'
import { useAppSelector } from 'hooks/reduxHooks'
import useMountEffect from 'hooks/useMountEffect'
import { FC, createRef, useRef, useState } from 'react'

import Perk from './Perks'

const PerkDeck: FC = () => {

	const perkWrapperRef = useRef<HTMLDivElement>(null)

	const perkRefs = useRef(Array.from({ length: Object.keys(perkDecks).length }, () => createRef<HTMLDivElement>()))

	const scrollToPerk = (i: number, behavior: 'smooth' | 'auto'): void => {
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

	useMountEffect(() => {
		const currentEquippedIndex = Object.keys(perkDecks).indexOf(equippedPerk.name)
		scrollToPerk(currentEquippedIndex, 'auto')
	})

	return (
		<Container rows='4rem 2rem 7fr 4rem' areas='"title title" "horizontalbar ." "items info" "items back"' title='Perk Deck'>

			<HorizontalBar active={equippedPerk.name} items={Object.values(perkDecks).map((perkDeck, i) => ({
				label: perkDeck.name,
				callback: () => scrollToPerk(i, 'smooth')
			}))} />

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
