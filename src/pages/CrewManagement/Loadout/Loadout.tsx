import masks from 'data/character/masks'
import { useAppSelector } from 'hooks'
import React from 'react'
import findWeapon from 'utils/findWeapon'

import { CrewData } from '../CrewManagement'
import { Container, Item, ItemContainer, ItemIcon, ItemTitle, LoadoutNumber } from './Loadout-Elements'

interface LoadoutProps {
	data: CrewData;
	index: 1 | 2 | 3;
}

const Loadout: React.FC<LoadoutProps> = ({ data, index }) => {

	const { primary } = useAppSelector(state => state.armoury)

	return (
		<Container>

			<LoadoutNumber>Loadout {index}</LoadoutNumber>

			<ItemContainer>
				<Item>
					<ItemTitle>Mask</ItemTitle>
					<ItemIcon src={`images/masks/${masks[data.mask].image}.png`} onMouseDown={event => event.preventDefault()} />
				</Item>
				<Item>
					<ItemTitle>Character</ItemTitle>
					<ItemIcon src={`images/masks/${masks[data.character].image}.png`} onMouseDown={event => event.preventDefault()} />
				</Item>
				<Item>
					<ItemTitle>Outfit</ItemTitle>
					<ItemIcon src={`images/masks/${masks[data.mask].image}.png`} onMouseDown={event => event.preventDefault()} />
				</Item>
				<Item>
					<ItemTitle>Weapon</ItemTitle>
					<ItemIcon src={`images/weapons/${findWeapon(primary[data.weapon].weaponFind).image}.png`} onMouseDown={event => event.preventDefault()} />
				</Item>
				<Item>
					<ItemTitle>Ability</ItemTitle>
					<ItemIcon src={`images/crew/abilities/${data.ability}.png`} onMouseDown={event => event.preventDefault()} />
				</Item>
				<Item>
					<ItemTitle>Boost</ItemTitle>
					<ItemIcon src={`images/crew/boosts/${data.boost}.png`} onMouseDown={event => event.preventDefault()} />
				</Item>
			</ItemContainer>


		</Container>
	)
}

export default Loadout
