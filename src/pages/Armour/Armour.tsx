import { changeArmour } from 'actions/characterAction'
import Container from 'components/Container'
import { InfoContainer, InfoDescription, InfoTitle } from 'components/Info'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName, LockedIcon } from 'components/Item'
import armours, { ArmourData } from 'data/character/armours'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { useState } from 'react'

import { ArmourStatsTable } from './ArmourStatsTable'

export const Armour: React.FC = () => {

	const dispatch = useAppDispatch()

	const equippedArmour = armours[useAppSelector(state => state.character.armour)]
	const [selectedArmour, setSelectedArmour] = useState<ArmourData>(equippedArmour)

	const ironManUnlocked = useAppSelector(state => state.skills.trees.enforcer['Tank'].upgrades['Iron Man']) === 'aced'

	return (
		<Container title='Armour'>

			<ItemContainer>
				{
					Object.values(armours).map(armour => {
						const locked = armour.name === 'Improved Combined Tactical Vest' && !ironManUnlocked
						return <Item
							key={armour.name}
							width={196}
							rowAmount={5}
							selected={armour.name === selectedArmour.name}
							onClick={() => armour.name === selectedArmour.name && !locked ? dispatch(changeArmour(armour.name)) : setSelectedArmour(armour)}
						>
							<ItemName>{armour.name}</ItemName>
							{armour.name === equippedArmour.name && <ItemEquipped />}
							{locked && <LockedIcon />}
							<ItemImage
								src={`images/armours/${armour.name}.png`}
								onMouseDown={event => event.preventDefault()}
								locked={locked}
							/>
						</Item>
					})
				}
			</ItemContainer>

			<InfoContainer>
				<InfoTitle>{selectedArmour.name}</InfoTitle>
				<ArmourStatsTable selectedArmour={selectedArmour.name} equippedArmour={selectedArmour.name !== equippedArmour.name ? equippedArmour.name : undefined} />
				<InfoDescription>{selectedArmour.desciption.join('\n\n')}</InfoDescription>
			</InfoContainer>

		</Container>
	)
}

export default Armour
