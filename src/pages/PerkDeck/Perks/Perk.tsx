import { changePerkdeck } from 'actions/abilitiesAction'
import { changeThrowable } from 'actions/weaponsAction'
import { card, perk } from 'data/abilities/perks'
import throwableData from 'data/weapons/throwables'
import { useAppDispatch, useAppSelector } from 'hooks'
import React from 'react'

import { Card, CardBackground, CardIcon, CardWrapper, Container, Title } from './Perk-Elements'

interface perkComponent {
	perk: perk;
	index: number;
	perkref: React.RefObject<HTMLDivElement>;
	setHoveredCard: React.Dispatch<React.SetStateAction<card | null>>;
	selectedPerk: perk;
	setSelectedPerk: React.Dispatch<React.SetStateAction<perk>>;
}

const Perk: React.FC<perkComponent> = ({ perk, index, perkref, setHoveredCard, selectedPerk, setSelectedPerk }) => {
	
	const dispatch = useAppDispatch()

	const equipedPerk = useAppSelector(state => state.abilities.perkdeck)

	return (
		<Container ref={perkref}>
			
			<Title>{perk.name} {perk.name === equipedPerk.name && '(EQUIPED)'}</Title>

			<CardWrapper onMouseDown={event => {
				event.preventDefault()
				if (selectedPerk.name !== perk.name) {
					setSelectedPerk(perk)
					return
				}
				const throwable = throwableData.find(throwable => throwable.name === perk.throwable) || throwableData[5]
				if (perk.throwable || equipedPerk.throwable) {
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
							<CardBackground src={'images/perks/card.png'} selected={selectedPerk.name === perk.name}/>
							<CardIcon x={x} y={y}/>
						</Card>
					})
				}
			</CardWrapper>

		</Container>
	)
}

export default Perk
