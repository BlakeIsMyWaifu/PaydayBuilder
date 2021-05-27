import { changeArmour } from 'actions/characterAction'
import Container from 'components/Container'
import { Item, ItemContainer, ItemEquiped, ItemImage, ItemName } from 'components/Content'
import { InfoContainer, InfoTitle } from 'components/Info'
import data, { armourData } from 'data/character/armours'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { useState } from 'react'

const Armour: React.FC = () => {
	
	const dispatch = useAppDispatch()

	const equipedArmour = useAppSelector(state => state.character.armour)

	const [selectedArmour, setSelectedArmour] = useState<armourData>(equipedArmour)

	const clickArmour = (armour: armourData) => armour.name === selectedArmour.name ? dispatch(changeArmour(armour)) : setSelectedArmour(armour)

	return (
		<Container title={'Armour'}>

			<ItemContainer>
				{
					data.map(armour => {
						return <Item key={armour.name} size={196} selected={armour.name === selectedArmour.name}>
							<ItemName>{armour.name}</ItemName>
							{armour.name === equipedArmour.name && <ItemEquiped />}
							<ItemImage
								src={`images/armours/${armour.name}.png`}
								onMouseDown={() => clickArmour(armour)}
							/>
						</Item>
					})
				}
			</ItemContainer>

			<InfoContainer>
				<InfoTitle>{selectedArmour.name}</InfoTitle>
			</InfoContainer>

		</Container>
	)
}

export default Armour
