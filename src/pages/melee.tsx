import Container from 'components/Container'
import DetectionRisk from 'components/DetectionRisk'
import { InfoContainer, InfoDescription, InfoTitle, InfoUnlock } from 'components/elements/infoElements'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName } from 'components/elements/itemElements'
import MeleeStatsTable from 'components/Table/MeleeStatsTable'
import melees from 'data/weapons/melees'
import { NextPage } from 'next'
import { useState } from 'react'
import { useSettingsContext } from 'state/settingsContext'
import { useWeaponsStore } from 'state/useWeaponsStore'
import { itemColours } from 'utils/colours'

export const Melee: NextPage = () => {

	const equippedMelee = melees[useWeaponsStore(state => state.melee)]
	const [selectedMelee, setSelectedMelee] = useState(equippedMelee)

	const changeMelee = useWeaponsStore(state => state.changeMelee)

	const { leftFacing } = useSettingsContext().state

	const equipMeleeHander = (): void => {
		if (selectedMelee.name === equippedMelee.name) return
		changeMelee(selectedMelee.name)
	}

	return (
		<Container
			rows='4rem 8fr 120px 4rem'
			areas='"title title" "items info" "items drisk" "items back"'
			title='Melee'
		>

			<ItemContainer>
				{
					Object.values(melees).map(melee => {
						return <Item
							key={melee.name}
							width={192}
							rowAmount={8}
							selected={melee.name === selectedMelee.name}
							onClick={() => melee.name === selectedMelee.name ? equipMeleeHander() : setSelectedMelee(melee)}
						>
							<ItemName colour={itemColours[melee.source.rarity]}>{melee.name}</ItemName>
							{melee.name === equippedMelee.name && <ItemEquipped />}
							<ItemImage src={`/images/melees/${melee.image}.webp`} leftFacing={leftFacing} onMouseDown={event => event.preventDefault()} />
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

			<DetectionRisk flexDirection='row' corner={true} />

		</Container>
	)
}

export default Melee
