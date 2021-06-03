import { changePerkdeck } from 'actions/abilitiesAction'
import { card, perk } from 'data/abilities/perks'
import { useAppDispatch, useAppSelector } from 'hooks'
import React from 'react'

import { Card, CardBackground, CardIcon, CardWrapper, Container, Title } from './Perk-Elements'

interface perkComponent {
	data: perk;
	index: number;
	perkref: React.RefObject<HTMLDivElement>;
	setHoveredCard: React.Dispatch<React.SetStateAction<card | null>>;
	selectedPerk: perk;
	setSelectedPerk: React.Dispatch<React.SetStateAction<perk>>;
}

const Perk: React.FC<perkComponent> = ({ data, index, perkref, setHoveredCard, selectedPerk, setSelectedPerk }) => {
	
	const dispatch = useAppDispatch()

	const clickPerk = () => selectedPerk.name === data.name ? dispatch(changePerkdeck(data)) : setSelectedPerk(data)

	const equipedPerk = useAppSelector(state => state.abilities.perkdeck)

	return (
		<Container ref={perkref}>
			
			<Title>{data.name} {data.name === equipedPerk.name && '(EQUIPED)'}</Title>

			<CardWrapper onMouseDown={event => {
				event.preventDefault()
				clickPerk()
			}}>
				{
					data.cards.map((card, i) => {
						const x = ~~((i + 1) / 2) * 48
						const y = i % 2 ? 0 : (index + 1) * 48
						return <Card
							key={`${data.name}-${card.name}`}
							onMouseOver={() => setHoveredCard(card)}
							onMouseLeave={() => setHoveredCard(null)}
							selected={selectedPerk.name === data.name}>
							<CardBackground src={'images/perks/card.png'} selected={selectedPerk.name === data.name}/>
							<CardIcon x={x} y={y}/>
						</Card>
					})
				}
			</CardWrapper>

		</Container>
	)
}

export default Perk
