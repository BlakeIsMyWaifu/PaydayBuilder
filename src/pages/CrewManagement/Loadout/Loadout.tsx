import React from 'react'

import { CrewData } from '../CrewManagement'
import { Container, Item, ItemContainer, ItemIcon, ItemTitle, LoadoutNumber } from './Loadout-Elements'

interface LoadoutComponent {
	data: CrewData;
	index: 1 | 2 | 3;
}

const Loadout: React.FC<LoadoutComponent> = ({ data, index }) => {
	return (
		<Container>

			<LoadoutNumber>Loadout {index}</LoadoutNumber>

			<ItemContainer>
				<Item>
					<ItemTitle>Mask</ItemTitle>
					<ItemIcon src={`images/masks/${data.mask.image}.png`} onMouseDown={event => event.preventDefault()} />
				</Item>
				<Item>
					<ItemTitle>Character</ItemTitle>
					<ItemIcon src={`images/masks/${data.character.image}.png`} onMouseDown={event => event.preventDefault()} />
				</Item>
				<Item>
					<ItemTitle>Outfit</ItemTitle>
					<ItemIcon src={`images/masks/${data.mask.image}.png`} onMouseDown={event => event.preventDefault()} />
				</Item>
				<Item>
					<ItemTitle>Weapon</ItemTitle>
					<ItemIcon src={`images/weapons/${data.weapon.image}.png`} onMouseDown={event => event.preventDefault()} />
				</Item>
				<Item>
					<ItemTitle>Ability</ItemTitle>
					<ItemIcon src={`images/crew/abilities/${data.ability?.name}.png`} onMouseDown={event => event.preventDefault()} />
				</Item>
				<Item>
					<ItemTitle>Boost</ItemTitle>
					<ItemIcon src={`images/crew/boosts/${data.boost?.name}.png`} onMouseDown={event => event.preventDefault()} />
				</Item>
			</ItemContainer>


		</Container>
	)
}

export default Loadout
