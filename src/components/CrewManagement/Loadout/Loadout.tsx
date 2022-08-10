import { useAppSelector } from 'hooks/reduxHooks'
import { FC } from 'react'
import findMask from 'utils/findMask'
import findWeapon from 'utils/findWeapon'

import { CrewData } from '../CrewManagement'
import { Container, Item, ItemContainer, ItemIcon, ItemTitle, LoadoutNumber } from './Loadout-Elements'

interface LoadoutProps {
	data: CrewData;
	index: 1 | 2 | 3;
}

const Loadout: FC<LoadoutProps> = ({ data, index }) => {

	const { primary } = useAppSelector(state => state.armoury)

	return (
		<Container>

			<LoadoutNumber>Loadout {index}</LoadoutNumber>

			<ItemContainer>
				<Item>
					<ItemTitle>Mask</ItemTitle>
					<ItemIcon src={`/images/masks/${findMask(data.mask).image}.png`} onMouseDown={event => event.preventDefault()} />
				</Item>
				<Item>
					<ItemTitle>Character</ItemTitle>
					<ItemIcon src={`/images/masks/${findMask(data.character).image}.png`} onMouseDown={event => event.preventDefault()} />
				</Item>
				<Item>
					<ItemTitle>Outfit</ItemTitle>
					<ItemIcon src={`/images/masks/${findMask(data.mask).image}.png`} onMouseDown={event => event.preventDefault()} />
				</Item>
				<Item>
					<ItemTitle>Weapon</ItemTitle>
					<ItemIcon src={`/images/weapons/${findWeapon(primary[data.weapon].weaponFind).image}.png`} onMouseDown={event => event.preventDefault()} />
				</Item>
				<Item>
					<ItemTitle>Ability</ItemTitle>
					<ItemIcon src={`/images/crew/abilities/${data.ability}.png`} onMouseDown={event => event.preventDefault()} />
				</Item>
				<Item>
					<ItemTitle>Boost</ItemTitle>
					<ItemIcon src={`/images/crew/boosts/${data.boost}.png`} onMouseDown={event => event.preventDefault()} />
				</Item>
			</ItemContainer>

		</Container>
	)
}

export default Loadout
