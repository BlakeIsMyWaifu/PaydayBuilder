import Container from 'components/Container'
import { InfoContainer, InfoDescription, InfoTitle, InfoUnlock } from 'components/elements/infoElements'
import { ActionText, ActionsContainer } from 'components/elements/itemActionElements'
import { ItemEquipped, ItemName, LockedIcon } from 'components/elements/itemElements'
import equipments, { EquipmentData } from 'data/character/equipment'
import { NextPage } from 'next'
import { useState } from 'react'
import { useCharacterStore } from 'state/useCharacterStore'
import { useSkillsStore } from 'state/useSkillsStore'
import styled from 'styled-components'
import { itemColours } from 'utils/colours'
import corner from 'utils/corner'

const EquipmentWrapper = styled.div`
	grid-area: wrapper;
	padding: 12px;
	${corner};
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-gap: 12px;
`

interface ItemProps {
	selected: boolean;
}

const Item = styled.div<ItemProps>`
	position: relative;
	width: 100%;
	height: 100%;
	${props => props.selected && corner};
`

interface EquipmentImageProps {
	locked: boolean;
}

const EquipmentImage = styled.img<EquipmentImageProps>`
	width: auto;
	height: 100%;
	position: relative;
	left: 50%;
	transform: translateX(-50%);
	filter: brightness(${props => props.locked ? 0.2 : 1});
`

const Equipment: NextPage = () => {

	const { primary: equippedPrimary, secondary: equippedSecondary } = useCharacterStore(state => state.equipment)

	const [selectedEquipment, setSelectedEquipment] = useState<EquipmentData>(equipments[equippedPrimary])

	const skillTrees = useSkillsStore(state => state.trees)

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

	const changeEquipment = useCharacterStore(state => state.changeEquipment)

	const equipEquipment = (button: number): void => {
		if (button !== 0 && button !== 2) return
		if (selectedEquipment.name === 'Silenced Sentry Gun' && !engineeringUnlocked) return

		const slot = button ? 'secondary' : 'primary'
		if (slot === 'primary' && selectedEquipment.name === equippedSecondary) changeEquipment('secondary', null)
		if (slot === 'secondary' && jackOfAllTrades !== 'aced') return
		if (slot === 'secondary' && selectedEquipment.name === equippedPrimary) return

		if (slot === 'primary' && selectedEquipment.name === equippedPrimary) return
		if (slot === 'secondary' && selectedEquipment.name === equippedSecondary) return
		changeEquipment(slot, selectedEquipment.name)
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
							<ItemName colour={itemColours[equipment.amount === amount ? 'Free' : 'Community']}>{equipment.name} (x{amount.join('/x')})</ItemName>
							{equipment.name === equippedPrimary && <ItemEquipped> {jackOfAllTradesUnlocked ? 'Primary' : ''}</ItemEquipped>}
							{equipment.name === equippedSecondary && <ItemEquipped> Secondary</ItemEquipped>}
							{locked && <LockedIcon />}
							<EquipmentImage
								src={`/images/equipment/${equipment.name}.webp`}
								locked={locked}
								onContextMenu={event => event.preventDefault()}
								onMouseDown={event => event.preventDefault()}
							/>
						</Item>
					})
				}
			</EquipmentWrapper>

			<InfoContainer>
				<InfoTitle>{selectedEquipment.name} (x{getEquipmentAmount(selectedEquipment).join('/x')})</InfoTitle>
				<InfoDescription>{selectedEquipment.description.join('\n\n')}</InfoDescription>
				<InfoUnlock colour={itemColours[selectedEquipment.source.rarity]}>{selectedEquipment.source.name}</InfoUnlock>
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
