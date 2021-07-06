import { changeEquipment } from 'actions/characterAction'
import Container from 'components/Container'
import { InfoContainer, InfoDescription, InfoTitle } from 'components/Info'
import { ItemEquipped, ItemName, LockedIcon } from 'components/Item'
import data, { equipmentData } from 'data/character/equipment'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { useState } from 'react'
import { itemColours } from 'utils/colours'

import { EquipInfo, EquipText, EquipementImage, EquipmentWrapper, Item } from './Equipment-Elements'

const Equipment: React.FC = () => {

	const dispatch = useAppDispatch()

	const { primary: equippedPrimary, secondary: equippedSecondary } = useAppSelector(state => state.character.equipment)

	const [selectedEquipment, setSelectedEquipment] = useState<equipmentData>(equippedPrimary)

	const skillTrees = useAppSelector(state => state.skills.trees)

	const getEquipmentAmount = (equipment: equipmentData) => {
		let outAmount: number[] = equipment.amount
		equipment.upgrade.forEach(({ amount, skillPath, skillState }) => {
			const [tree, subtree, skill] = skillPath
			const upgradeState = skillTrees[tree][subtree].upgrades[skill]
			if (upgradeState === skillState) outAmount = amount
		})
		return outAmount
	}

	const jackOfAllTrades = skillTrees.technician.engineer.upgrades['Jack of All Trades']
	const jackOfAllTradesUnlocked = jackOfAllTrades === 'aced'
	const engineeringState = skillTrees.technician.engineer.upgrades.Engineering
	const engineeringUnlocked = engineeringState  === 'basic' || engineeringState === 'aced'

	return (
		<Container rows='4rem 8fr 3rem 4rem' areas={`"title title" "wrapper info" "wrapper ${jackOfAllTradesUnlocked ? 'equipinfo' : 'info'}" "wrapper back"`} title='Equipment'>

			<EquipmentWrapper>
				{
					data.map(equipment => {
						const locked = equipment.name === 'Silenced Sentry Gun' && !engineeringUnlocked
						const amount = getEquipmentAmount(equipment)
						return <Item key={equipment.name} selected={equipment.name === selectedEquipment.name} onMouseDown={(event: React.MouseEvent) => {
							event.preventDefault()
							if (equipment.name !== selectedEquipment.name) {
								setSelectedEquipment(equipment)
							} else {
								if (event.button !== 0 && event.button !== 2) return
								if (locked) return
								const slot = event.button ? 'secondary' : 'primary'
								if (slot === 'primary'&& equipment === equippedSecondary) dispatch(changeEquipment([null, 'secondary']))
								if (slot === 'secondary' && jackOfAllTrades !== 'aced') return
								if (slot === 'secondary' && equipment === equippedPrimary) return
								dispatch(changeEquipment([equipment, slot]))
							}
						}}>
							<ItemName color={itemColours[equipment.amount === amount ? 'normal' : 'dlc']}>{equipment.name} (x{amount.join('/x')})</ItemName>
							{ equipment.name === equippedPrimary.name && <ItemEquipped> { jackOfAllTradesUnlocked ? 'Primary' : ''}</ItemEquipped> }
							{ equipment.name === equippedSecondary?.name && <ItemEquipped> Secondary</ItemEquipped> }
							{ locked && <LockedIcon /> }
							<EquipementImage
								src={`images/equipment/${equipment.name}.png`}
								locked={locked}
								onContextMenu={event => event.preventDefault()}
							/>
						</Item>
					})
				}
			</EquipmentWrapper>

			<InfoContainer>
				<InfoTitle>{selectedEquipment.name} (x{getEquipmentAmount(selectedEquipment).join('/x')})</InfoTitle>
				<InfoDescription>{selectedEquipment.description.join('\n\n')}</InfoDescription>
			</InfoContainer>

			{
				jackOfAllTradesUnlocked && (
					<EquipInfo>
						<EquipText>[Left Click] Equip Primary</EquipText>
						<EquipText>[Right Click] Equip Secondary</EquipText>
					</EquipInfo>
				)
			}

		</Container>
	)
}

export default Equipment
