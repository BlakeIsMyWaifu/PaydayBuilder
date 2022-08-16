import perkDecks, { PerkCard, PerkData } from 'data/abilities/perks'
import throwables from 'data/weapons/throwables'
import { Dispatch, FC, RefObject, SetStateAction } from 'react'
import { useAbilityStore } from 'state/useAbilitiesStore'
import { useWeaponsStore } from 'state/useWeaponsStore'

import { Card, CardBackground, CardIcon, CardWrapper, Container, Title } from './Perk-Elements'

interface PerkProps {
	perk: PerkData;
	index: number;
	perkref: RefObject<HTMLDivElement>;
	setHoveredCard: Dispatch<SetStateAction<PerkCard | null>>;
	selectedPerk: PerkData;
	setSelectedPerk: Dispatch<SetStateAction<PerkData>>;
}

const Perk: FC<PerkProps> = ({ perk, index, perkref, setHoveredCard, selectedPerk, setSelectedPerk }) => {

	const equippedPerk = perkDecks[useAbilityStore(state => state.perkDeck)]
	const changePerkDeck = useAbilityStore(state => state.changePerkDeck)

	const changeThrowable = useWeaponsStore(state => state.changeThrowable)

	const equipPerkDeckHandler = (): void => {
		if (selectedPerk.name === equippedPerk.name) return
		changePerkDeck(selectedPerk.name)
	}

	return (
		<Container ref={perkref}>

			<Title>{perk.name} {perk.name === equippedPerk.name && '(EQUIPPED)'}</Title>

			<CardWrapper onClick={() => {
				if (selectedPerk.name !== perk.name) {
					setSelectedPerk(perk)
					return
				}
				const throwable = perk.throwable ? throwables[perk.throwable] : throwables['Frag Grenade']
				if (perk.throwable || equippedPerk.throwable) {
					changeThrowable(throwable.name)
				}
				equipPerkDeckHandler()
			}}>
				{
					perk.cards.map((card, i) => {
						const x = ~~((i + 1) / 2) * 48
						const y = i % 2 ? 0 : (index + 1) * 48
						return <Card
							key={`${perk.name}-${card.name}`}
							onMouseOver={() => setHoveredCard(card)}
							onMouseLeave={() => setHoveredCard(null)}
							selected={selectedPerk.name === perk.name}>
							<CardBackground src='/images/perks/card.png' onMouseDown={event => event.preventDefault()} selected={selectedPerk.name === perk.name} />
							<CardIcon x={x} y={y} />
						</Card>
					})
				}
			</CardWrapper>

		</Container>
	)
}

export default Perk
