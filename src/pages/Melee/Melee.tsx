import { changeMelee } from 'actions/weaponsAction'
import Container from 'components/Container'
import { InfoContainer, InfoDescription, InfoTitle, InfoUnlock } from 'components/Info'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName } from 'components/Item'
import melees from 'data/weapons/melees'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { useState } from 'react'
import { itemColours } from 'utils/colours'

import MeleeStatsTable from './MeleeStatsTable'

export const Melee: React.FC = () => {

	const dispatch = useAppDispatch()

	const equippedMelee = melees[useAppSelector(state => state.weapons.melee)]
	const [selectedMelee, setSelectedMelee] = useState(equippedMelee)

	const leftFacing = useAppSelector(state => state.settings.leftFacing)

	return (
		<Container title='Melee'>

			<ItemContainer>
				{
					Object.values(melees).map(melee => {
						return <Item
							key={melee.name}
							width={192}
							rowAmount={8}
							selected={melee.name === selectedMelee.name}
							onClick={() => melee.name === selectedMelee.name ? dispatch(changeMelee(melee.name)) : setSelectedMelee(melee)}
						>
							<ItemName colour={itemColours[melee.source.rarity]}>{melee.name}</ItemName>
							{melee.name === equippedMelee.name && <ItemEquipped />}
							<ItemImage src={`images/melees/${melee.image}.png`} leftFacing={leftFacing} onMouseDown={event => event.preventDefault()} />
						</Item>
					})
				}
			</ItemContainer>

			<InfoContainer>
				<InfoTitle>{selectedMelee.name}</InfoTitle>
				<MeleeStatsTable selectedMelee={selectedMelee.name} equippedMelee={selectedMelee.name !== equippedMelee.name ? equippedMelee.name : undefined} />
				<InfoUnlock colour={itemColours[selectedMelee.source.rarity]}>{selectedMelee.source.name}</InfoUnlock>
				<InfoDescription>{selectedMelee.description}</InfoDescription>
			</InfoContainer>

		</Container>
	)
}

export default Melee
