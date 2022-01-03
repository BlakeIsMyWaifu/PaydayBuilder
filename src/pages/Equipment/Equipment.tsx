import Container from 'components/Container'
import { InfoContainer, InfoDescription, InfoTitle } from 'components/Info/Info-Elements'
import { ItemEquipped, ItemName, LockedIcon } from 'components/Item-Elements'
import { ActionText, ActionsContainer } from 'components/ItemAction-Elements'
import equipments, { EquipmentData } from 'data/character/equipment'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import React, { useState } from 'react'
import { changeEquipment } from 'slices/characterSlice'
import { itemColours } from 'utils/colours'

import { EquipementImage, EquipmentWrapper, Item } from './Equipment-Elements'

const Equipment: React.FC = () => {

	const dispatch = useAppDispatch()

	const { primary: equippedPrimary, secondary: equippedSecondary } = useAppSelector(state => state.character.equipment)

	const [selectedEquipment, setSelectedEquipment] = useState<EquipmentData>(equipments[equippedPrimary])

	const skillTrees = useAppSelector(state => state.skills.trees)

	const getEquipmentAmount = (equipment: EquipmentData): number[] => {
		let outAmount: number[] = equipment.amount
		equipment.upgrade.forEach(({ amount, skillPath, skillState }) => {
			const [tree, subtree, skill] = skillPath
			const upgradeState = skillTrees[tree][subtree].upgrades[skill]
			if (upgradeState === skillState) outAmount = amount
		})
		return outAmount
	}

	const jackOfAllTrades = skillTrees.technician['Engineer'].upgrades['Jack of All Trades']
	const jackOfAllTradesUnlocked = jackOfAllTrades === 'aced'
	const engineeringState = skillTrees.technician['Engineer'].upgrades.Engineering
	const engineeringUnlocked = engineeringState === 'basic' || engineeringState === 'aced'

	const equipEquipment = (button: number): void => {
		if (button !== 0 && button !== 2) return
		if (selectedEquipment.name === 'Silenced Sentry Gun' && !engineeringUnlocked) return
		const slot = button ? 'secondary' : 'primary'
		if (slot === 'primary' && selectedEquipment.name === equippedSecondary) dispatch(changeEquipment({ equipment: null, slot: 'secondary' }))
		if (slot === 'secondary' && jackOfAllTrades !== 'aced') return
		if (slot === 'secondary' && selectedEquipment.name === equippedPrimary) return
		dispatch(changeEquipment({ equipment: selectedEquipment.name, slot }))
	}

	return (
		<Container
			rows='4rem 8fr 3rem 4rem'
			areas={`"title title" "wrapper info" "wrapper ${jackOfAllTradesUnlocked ? 'actions' : 'info'}" "wrapper back"`}
			title='Equipment'
		>

			<EquipmentWrapper>
				{
					Object.values(equipments).map(equipment => {
						const locked = equipment.name === 'Silenced Sentry Gun' && !engineeringUnlocked
						const amount = getEquipmentAmount(equipment)
						return <Item
							key={equipment.name}
							selected={equipment.name === selectedEquipment.name}
							onMouseDown={event => equipment.name !== selectedEquipment.name ? setSelectedEquipment(equipment) : equipEquipment(event.button)}
						>
							<ItemName colour={itemColours[equipment.amount === amount ? 'normal' : 'dlc']}>{equipment.name} (x{amount.join('/x')})</ItemName>
							{equipment.name === equippedPrimary && <ItemEquipped> {jackOfAllTradesUnlocked ? 'Primary' : ''}</ItemEquipped>}
							{equipment.name === equippedSecondary && <ItemEquipped> Secondary</ItemEquipped>}
							{locked && <LockedIcon />}
							<EquipementImage
								src={`/images/equipment/${equipment.name}.png`}
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
					<ActionsContainer>
						<ActionText onClick={() => equipEquipment(0)}>Equip Primary</ActionText>
						<ActionText onClick={() => equipEquipment(2)}>Equip Secondary</ActionText>
					</ActionsContainer>
				)
			}

		</Container >
	)
}

export default Equipment
