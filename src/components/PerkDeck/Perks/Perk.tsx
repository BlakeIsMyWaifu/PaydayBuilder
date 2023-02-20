import perkDecks, { PerkData } from 'data/abilities/perks'
import throwables from 'data/weapons/throwables'
import { Dispatch, FC, RefObject, SetStateAction } from 'react'
import { useAbilityStore } from 'state/useAbilitiesStore'
import { useWeaponsStore } from 'state/useWeaponsStore'

import { PerkCardIndex } from '../PerkDeck'
import { Card, CardBackground, CardIcon, CardNumber, CardWrapper, Container, Equipped, Title } from './Perk-Elements'

interface PerkProps {
	perk: PerkData;
	index: number;
	perkref: RefObject<HTMLDivElement>;
	setHoveredCard: Dispatch<SetStateAction<PerkCardIndex | null>>;
	selectedPerk: PerkData;
	setSelectedPerk: Dispatch<SetStateAction<PerkProps['selectedPerk']>>;
}

const Perk: FC<PerkProps> = ({ perk, index, perkref, setHoveredCard, selectedPerk, setSelectedPerk }) => {

	const equippedPerk = perkDecks[useAbilityStore(state => state.perkDeck)]
	const changePerkDeck = useAbilityStore(state => state.changePerkDeck)

	const copycatCards = useAbilityStore(state => state.copycat)
	const changeCopycatValues = useAbilityStore(state => state.changeCopycatValues)

	const changeThrowable = useWeaponsStore(state => state.changeThrowable)

	const equipPerkDeckHandler = (): void => {
		if (selectedPerk.name === equippedPerk.name) return
		changePerkDeck(selectedPerk.name)
	}

	const perkDeckClickHandler = (): void => {
		if (selectedPerk.name !== perk.name) return setSelectedPerk(perk)
		if (perk.throwable || equippedPerk.throwable) {
			const throwable = perk.throwable ? throwables[perk.throwable] : throwables['Frag Grenade']
			changeThrowable(throwable.name)
		}
		equipPerkDeckHandler()
	}

	const cardClickHandler = (button: number, cardIndex: number): void => {
		if (perk.name !== 'Copycat' || selectedPerk.name !== 'Copycat' || cardIndex % 2) return
		changeCopycatValues(cardIndex / 2, button ? 'decrement' : 'increment')
	}

	return (
		<Container ref={perkref}>

			<Title>{perk.name}</Title>
			<Equipped>{perk.name === equippedPerk.name && '(EQUIPPED)'}</Equipped>

			<CardWrapper onClick={perkDeckClickHandler}>
				{
					perk.cards.map((card, i) => {
						const x = ~~((i + 1) / 2) * 48
						const y = i % 2 ? 0 : (index + 1) * 48
						return <Card
							key={`${perk.name}-${card.name}`}
							onMouseOver={() => setHoveredCard({ ...card, index: i })}
							onMouseLeave={() => setHoveredCard(null)}
							onMouseDown={event => cardClickHandler(event.button, i)}
							onContextMenu={event => event.preventDefault()}
							selected={selectedPerk.name === perk.name}>
							<CardBackground src='/images/perks/card.png' onMouseDown={event => event.preventDefault()} selected={selectedPerk.name === perk.name} />
							<CardIcon x={x} y={y} />
							{perk.name === 'Copycat' && !(i % 2) && <CardNumber>{copycatCards[i / 2] + 1}/{i === 8 ? 22 : 4}</CardNumber>}
						</Card>
					})
				}
			</CardWrapper>

		</Container>
	)
}

export default Perk
