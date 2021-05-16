import { changePerkdeck } from 'actions/abilitiesAction'
import { card, perk } from 'data/abilities/perks'
import { useAppDispatch, useAppSelector } from 'hooks'
import React from 'react'

import { Card, CardBackground, CardIcon, CardWrapper, Container, Title } from './Perk-Elements'

interface perkComponent {
	data: perk;
	index: number;
	perkref: React.RefObject<HTMLDivElement>;
	setHoveredCard: React.Dispatch<React.SetStateAction<card>>;
	selectedPerk: perk;
	setSelectedPerk: React.Dispatch<React.SetStateAction<perk>>;
}

const Perk: React.FC<perkComponent> = ({ data, index, perkref, setHoveredCard, selectedPerk, setSelectedPerk }: perkComponent) => {
	
	const selected = selectedPerk === data
	
	const dispatch = useAppDispatch()

	const clickPerk = () => selected ? dispatch(changePerkdeck(data)) : setSelectedPerk(data)

	const equipedPerk = useAppSelector(state => state.abilities.perkdeck)

	return (
		<Container ref={perkref}>
			
			<Title>{data.name} {data === equipedPerk && '(EQUIPED)'}</Title>

			<CardWrapper onMouseDown={clickPerk}>
				{
					data.cards.map((card, i) => {
						const x = ~~((i + 1) / 2) * 48
						const y = i % 2 ? 0 : (index + 1) * 48
						return <Card key={`card-${data.name}-${card.name}`} onMouseOver={() => setHoveredCard(card)}>
							<CardBackground src={'images/perks/card.png'} selected={selected}/>
							<CardIcon x={x} y={y}/>
						</Card>
					})
				}
			</CardWrapper>

		</Container>
	)
}

export default Perk
