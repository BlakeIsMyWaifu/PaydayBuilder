import { CrewData } from 'pages/crewmanagement'
import { FC } from 'react'
import { useArmouryStore } from 'state/useArmouryStore'
import styled from 'styled-components'
import { blue } from 'utils/colours'
import corner from 'utils/corner'
import findMask from 'utils/findMask'
import findWeapon from 'utils/findWeapon'

const Container = styled.div`
	display: flex;
	flex-direction: row;
	position: relative;
`

const LoadoutNumber = styled.h2`
	writing-mode: vertical-rl;
	font-size: 1.5rem;
`

const ItemContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 128px;
	align-items: center;
	justify-content: center;
	${corner};
`

const Item = styled.div`
	width: 128px;
	height: 128px;
	position: relative;
	&:nth-child(4) {
		width: 256px;
	}
`

const ItemTitle = styled.p`
	position: absolute;
	top: 0;
	color: ${blue};
	font-size: 16px;
`

const ItemIcon = styled.img``

interface LoadoutProps {
	data: CrewData;
	index: 1 | 2 | 3;
}

const Loadout: FC<LoadoutProps> = ({ data, index }) => {

	const primary = useArmouryStore(state => state.primary)

	return (
		<Container>

			<LoadoutNumber>Loadout {index}</LoadoutNumber>

			<ItemContainer>
				<Item>
					<ItemTitle>Mask</ItemTitle>
					<ItemIcon src={`/images/masks/${findMask(data.mask).image}.webp`} onMouseDown={event => event.preventDefault()} />
				</Item>
				<Item>
					<ItemTitle>Character</ItemTitle>
					<ItemIcon src={`/images/masks/${findMask(data.character).image}.webp`} onMouseDown={event => event.preventDefault()} />
				</Item>
				<Item>
					<ItemTitle>Outfit</ItemTitle>
					<ItemIcon src={`/images/masks/${findMask(data.mask).image}.webp`} onMouseDown={event => event.preventDefault()} />
				</Item>
				<Item>
					<ItemTitle>Weapon</ItemTitle>
					<ItemIcon src={`/images/weapons/${findWeapon(primary[data.weapon].weaponFind).image}.webp`} onMouseDown={event => event.preventDefault()} />
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
