import { changeEquipment } from 'actions/characterAction'
import Container from 'components/Container'
import { InfoContainer, InfoDescription, InfoTitle } from 'components/Info'
import { ItemEquiped, ItemName } from 'components/Item'
import data, { equipmentData } from 'data/character/equipment'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { useState } from 'react'
import { itemColours } from 'utils/colours'

import { EquipInfo, EquipText, EquipementImage, EquipmentWrapper, Item } from './Equipment-Elements'

const Equipment: React.FC = () => {

	const dispatch = useAppDispatch()

	const { primary: equipedPrimary, secondary: equipedSecondary } = useAppSelector(state => state.character.equipment)

	const [selectedEquipment, setSelectedEquipment] = useState<equipmentData>(equipedPrimary)

	return (
		<Container rows='4rem 8fr 3rem 4rem' areas='"title title" "wrapper info" "wrapper equipinfo" "wrapper back"' title={'Equipment'}>

			<EquipmentWrapper>
				{
					data.map(equipment => {
						return <Item key={equipment.name} selected={equipment.name === selectedEquipment.name}>
							<ItemName color={itemColours.normal}>{equipment.name}</ItemName>
							{equipment.name === equipedPrimary.name && <ItemEquiped> Primary</ItemEquiped>}
							{equipment.name === equipedSecondary?.name && <ItemEquiped> Secondary</ItemEquiped>}
							<EquipementImage
								src={`images/equipment/${equipment.name}.png`}
								onContextMenu={event => event.preventDefault()}
								onMouseDown={(event: React.MouseEvent) => {
									event.preventDefault()
									if (equipment.name !== selectedEquipment.name) {
										setSelectedEquipment(equipment)
									} else {
										if (event.button !== 0 && event.button !== 2) return
										const slot = event.button ? 'secondary' : 'primary'
										dispatch(changeEquipment([equipment, slot]))
									}
								}}
							/>
						</Item>
					})
				}
			</EquipmentWrapper>

			<InfoContainer>
				{
					selectedEquipment && (
						<>
							<InfoTitle>{selectedEquipment.name} (x{selectedEquipment.amount.join('/x')})</InfoTitle>
							<InfoDescription>{selectedEquipment.description.join('\n\n')}</InfoDescription>
						</>
					)
				}
			</InfoContainer>

			<EquipInfo>
				<EquipText>[Left Click] Equip Primary</EquipText>
				<EquipText>[Right Click] Equip Secondary</EquipText>
			</EquipInfo>

		</Container>
	)
}

export default Equipment
