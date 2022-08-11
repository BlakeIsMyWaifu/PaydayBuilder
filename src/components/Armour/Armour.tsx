import Container from 'components/Container'
import DetectionRisk from 'components/DetectionRisk'
import { InfoContainer, InfoDescription, InfoTitle } from 'components/Info/Info-Elements'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName, LockedIcon } from 'components/Item-Elements'
import armours, { ArmourData } from 'data/character/armours'
import { useAppDispatch } from 'hooks/reduxHooks'
import { FC, useState } from 'react'
import { changeArmour } from 'slices/characterSlice'
import { useCharacterStore } from 'state/useCharacterStore'
import { useSkillsStore } from 'state/useSkillsStore'

import { ArmourStatsTable } from './ArmourStatsTable'

export const Armour: FC = () => {

	const dispatch = useAppDispatch()

	const equippedArmour = armours[useCharacterStore(state => state.armour)]
	const [selectedArmour, setSelectedArmour] = useState<ArmourData>(equippedArmour)

	const ironManUnlocked = useSkillsStore(state => state.trees.enforcer.Tank.upgrades['Iron Man']) === 'aced'

	return (
		<Container
			rows='4rem 8fr 120px 4rem'
			areas='"title title" "items info" "items drisk" "items back"'
			title='Armour'
		>

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
								src={`/images/armours/${armour.name}.png`}
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
				<InfoDescription>{selectedArmour.description.join('\n\n')}</InfoDescription>
			</InfoContainer>

			<DetectionRisk flexDirection='row' corner={true} />

		</Container>
	)
}

export default Armour
