import { changePerkdeck } from 'actions/abilitiesAction'
import { changeThrowable } from 'actions/weaponsAction'
import { PerkCard, Perk } from 'data/abilities/perks'
import throwableData from 'data/weapons/throwables'
import { useAppDispatch, useAppSelector } from 'hooks'
import React from 'react'

import { Card, CardBackground, CardIcon, CardWrapper, Container, Title } from './Perk-Elements'

interface PerkProps {
	perk: Perk;
	index: number;
	perkref: React.RefObject<HTMLDivElement>;
	setHoveredCard: React.Dispatch<React.SetStateAction<PerkCard | null>>;
	selectedPerk: Perk;
	setSelectedPerk: React.Dispatch<React.SetStateAction<Perk>>;
}

const Perk: React.FC<PerkProps> = ({ perk, index, perkref, setHoveredCard, selectedPerk, setSelectedPerk }) => {

	const dispatch = useAppDispatch()

	const equippedPerk = useAppSelector(state => state.abilities.perkdeck)

	return (
		<Container ref={perkref}>

			<Title>{perk.name} {perk.name === equippedPerk.name && '(EQUIPPED)'}</Title>

			<CardWrapper onClick={() => {
				if (selectedPerk.name !== perk.name) {
					setSelectedPerk(perk)
					return
				}
				const throwable = throwableData.find(throwable => throwable.name === perk.throwable) || throwableData[5]
				if (perk.throwable || equippedPerk.throwable) {
					dispatch(changeThrowable(throwable))
				}
				dispatch(changePerkdeck(perk))
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
							<CardBackground src={'images/perks/card.png'} onMouseDown={event => event.preventDefault()} selected={selectedPerk.name === perk.name} />
							<CardIcon x={x} y={y} />
						</Card>
					})
				}
			</CardWrapper>

		</Container>
	)
}

export default Perk
