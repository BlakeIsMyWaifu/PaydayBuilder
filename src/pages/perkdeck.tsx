import Container from 'components/Container'
import { ItemContainer } from 'components/elements/itemElements'
import HorizontalBar from 'components/HorizontalBar'
import Perk from 'components/PerkDeck/Perk'
import PerkInfoTab from 'components/PerkDeck/PerkInfoTab'
import { type PerkCard, type PerkData } from 'data/abilities/perks'
import { type NextPage } from 'next'
import { createRef, useEffect, useRef, useState } from 'react'
import { useAbilityStore } from 'state/useAbilitiesStore'
import { trpc } from 'utils/trpc'

export type PerkCardIndex = PerkCard & { index: number }

const PerkDeck: NextPage = () => {

	const { data } = trpc.abilitiesData.perkDeckData.useQuery()

	useEffect(() => {
		if (!data) return
		setSelectedPerk(data[equippedPerkName])
		const currentEquippedIndex = Object.keys(data).indexOf(equippedPerkName)
		scrollToPerk(currentEquippedIndex, 'auto')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data])

	const perkWrapperRef = useRef<HTMLDivElement>(null)

	// ! the length must be updated if any new perk decks are added
	const perkRefs = useRef(Array.from({ length: 23 }, () => createRef<HTMLDivElement>()))

	const scrollToPerk = (i: number, behavior: 'smooth' | 'auto'): void => {
		const container = perkWrapperRef.current
		if (!container) return
		container.scrollTo({
			top: (i * 120) + 8,
			left: 0,
			behavior
		})
	}

	const [hoveredCard, setHoveredCard] = useState<PerkCardIndex | null>(null)

	const equippedPerkName = useAbilityStore(state => state.perkDeck)

	const [selectedPerk, setSelectedPerk] = useState<PerkData | null>(null)

	return (
		<Container
			title='Perk Deck'
			desktopLayout={{
				rows: '4rem 2rem auto 4rem',
				areas: '"title title" "horizontalbar ." "items info" "items back"'
			}}
			mobileLayout={{
				rows: '3rem 1.5rem auto 150px',
				areas: '"title title" "horizontalbar horizontalbar" "items items" "info back"'
			}}
		>

			<HorizontalBar active={equippedPerkName} items={Object.values(data ?? {}).map((perkDeck, i) => ({
				label: perkDeck.name,
				callback: () => scrollToPerk(i, 'smooth')
			}))} />

			<ItemContainer ref={perkWrapperRef}>
				{
					data && Object.values(data).map((perkdeck, i) => {
						return <Perk
							perkref={perkRefs.current[i]}
							key={perkdeck.name}
							perk={perkdeck}
							index={i}
							setHoveredCard={setHoveredCard}
							selectedPerk={selectedPerk}
							setSelectedPerk={setSelectedPerk}
							equippedPerkData={data[equippedPerkName]}
						/>
					})
				}
			</ItemContainer>

			<PerkInfoTab hoveredCard={hoveredCard} />

		</Container>
	)
}

export default PerkDeck
