import Container from 'components/Container'
import { InfoContainer, InfoDescription, InfoTitle, InfoUnlock } from 'components/elements/infoElements'
import { ActionsContainer, ActionText } from 'components/elements/itemActionElements'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName, LockedIcon } from 'components/elements/itemElements'
import { type EquipmentData } from 'data/character/equipment'
import { type NextPage } from 'next'
import { useState } from 'react'
import { useCharacterStore } from 'state/useCharacterStore'
import { useSkillsStore } from 'state/useSkillsStore'
import { itemColours } from 'utils/colours'
import { trpc } from 'utils/trpc'

const Equipment: NextPage = () => {

	const { data } = trpc.characterData.equipmentData.useQuery()

	const { primary: equippedPrimary, secondary: equippedSecondary } = useCharacterStore(state => state.equipment)

	const [selectedEquipment, setSelectedEquipment] = useState<EquipmentData | null>(null)

	const skillTrees = useSkillsStore(state => state.trees)

	const getEquipmentAmount = (equipment: EquipmentData) => {
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

	const equipEquipmentHandler = (button: number) => {
		if (button !== 0 && button !== 2) return
		if (!selectedEquipment) return
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
			title='Equipment'
			desktopLayout={{
				rows: '4rem 8fr 3rem 4rem',
				areas: `"title title" "items info" "items ${jackOfAllTradesUnlocked ? 'actions' : 'info'}" "items back"`
			}}
			mobileLayout={{
				rows: '3rem auto 86px 64px',
				areas: `"title title" "items items" "info ${jackOfAllTradesUnlocked ? 'actions' : '.'}" "info back"`
			}}
		>

			<ItemContainer>
				{
					Object.values(data ?? {}).map(equipment => {
						const locked = equipment.name === 'Silenced Sentry Gun' && !engineeringUnlocked
						const amount = getEquipmentAmount(equipment)
						const isSelected = equipment.name === selectedEquipment?.name
						return <Item
							key={equipment.name}
							rowAmount={5}
							aspectRatio='1 / 1'
							selected={isSelected}
							onMouseDown={event => isSelected ? equipEquipmentHandler(event.button) : setSelectedEquipment(equipment)}
						>
							<ItemName colour={itemColours[equipment.amount === amount ? 'Free' : 'Community']}>{equipment.name} (x{amount.join('/x')})</ItemName>
							{equipment.name === equippedPrimary && <ItemEquipped> {jackOfAllTradesUnlocked ? 'Primary' : ''}</ItemEquipped>}
							{equipment.name === equippedSecondary && <ItemEquipped> Secondary</ItemEquipped>}
							{locked && <LockedIcon />}
							<ItemImage
								src={`/images/equipment/${equipment.name}.webp`}
								locked={locked}
								onContextMenu={event => event.preventDefault()}
								onMouseDown={event => event.preventDefault()}
							/>
						</Item>
					})
				}
			</ItemContainer>

			<InfoContainer>
				{
					selectedEquipment && <>
						<InfoTitle>{selectedEquipment.name} (x{getEquipmentAmount(selectedEquipment).join('/x')})</InfoTitle>
						<InfoDescription>{selectedEquipment.description.join('\n\n')}</InfoDescription>
						<InfoUnlock colour={itemColours[selectedEquipment.source.rarity]}>{selectedEquipment.source.name}</InfoUnlock>
					</>
				}
			</InfoContainer>

			{
				jackOfAllTradesUnlocked && (
					<ActionsContainer>
						<ActionText onClick={() => equipEquipmentHandler(0)}>Equip Primary</ActionText>
						<ActionText onClick={() => equipEquipmentHandler(2)}>Equip Secondary</ActionText>
					</ActionsContainer>
				)
			}

		</Container>
	)
}

export default Equipment
