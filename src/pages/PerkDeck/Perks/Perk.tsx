import { perk } from 'data/abilities/perks'
import React from 'react'

import { Card, CardBackground, CardIcon, CardWrapper, Container, Title } from './Perk-Elements'

interface perkComponent {
	data: perk;
	index: number;
	perkref: React.RefObject<HTMLDivElement>;
}

const Perk: React.FC<perkComponent> = ({ data, index, perkref }: perkComponent) => {
	return (
		<Container ref={perkref}>
			
			<Title>{data.name}</Title>

			<CardWrapper>
				{
					data.cards.map((perk, i) => {
						let x = ~~((i + 1) / 2) * 48
						let y = i % 2 ? 0 : (index + 1) * 48
						return <Card key={`card-${data.name}-${perk.name}`}>
							<CardBackground src={'images/perks/card.png'}/>
							<CardIcon x={x} y={y}/>
						</Card>
					})
				}
			</CardWrapper>

		</Container>
	)
}

export default Perk
