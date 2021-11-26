import { changeMod, removeMod } from 'actions/armouryAction'
import Container from 'components/Container'
import { HorizontalBar, HorizontalItem } from 'components/HorizontalActionBar'
import { InfoContainer, InfoTitle, InfoUnlock } from 'components/Info'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName } from 'components/Item'
import { ActionText, ActionsContainer } from 'components/ItemAction'
import { Modification, ModificationSlot, Slot, Weapon, WeaponData } from 'data/weapons/guns/weaponTypes'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { useState } from 'react'
import { useParams } from 'react-router'
import { blue, itemColours } from 'utils/colours'

import BlackmarketStatsTable from './BlackmarketStatsTable'

const WeaponChecker: React.FC = () => {

	const { slot, id } = useParams()

	const armoury = useAppSelector(state => state.armoury)

	const getWeapon = (slot: string | undefined, id: string | undefined): Weapon | null => {
		if (!slot || !id) return null
		if (!['primary', 'secondary'].includes(slot)) return null
		if (!/^\d+$/.test(id)) return null
		const validSlot: Slot = (slot as Slot)
		const validId: number = +id
		return armoury[validSlot][validId]
	}
	const weapon = getWeapon(slot, id)

	return weapon ? (
		<Blackmarket slot={(slot as Slot)} id={id ? +id : 0} weapon={weapon.weapon} equippedModifications={weapon.modifications}></Blackmarket>
	) : (
		<Container title='Blackmarket'>
			<h1>Error, invalid weapon</h1>
		</Container>
	)
}

interface BlackmarketProps {
	slot: Slot;
	id: number;
	weapon: WeaponData;
	equippedModifications: Partial<Record<ModificationSlot, Modification<string>>>;
}

const Blackmarket: React.FC<BlackmarketProps> = ({ slot, id, weapon, equippedModifications }) => {

	const dispatch = useAppDispatch()

	const [selectedTab, setSelectedTab] = useState<ModificationSlot>(Object.keys(weapon.modifications)[0] as ModificationSlot)

	const [selectedItem, setSelectedItem] = useState<Modification<string>>(equippedModifications[selectedTab] || weapon.modifications[selectedTab]?.[0] || weapon.modifications.boost[0])

	const equidModHelper = (): void => {
		if (!selectedItem) return
		dispatch(changeMod({
			slot,
			id,
			newMod: selectedItem
		}))
	}

	const changeTab = (tab: ModificationSlot): void => {
		if (selectedTab === tab) return
		const equipedItem = equippedModifications[tab]
		const firstItem = Object.values(weapon.modifications[tab] || {})[0]
		setSelectedItem(equipedItem || firstItem as Modification<string>)
		setSelectedTab(tab)
	}

	const fixItemName = (name: string): string => name.split(' (')[0]

	return (
		<Container rows='4rem 2rem 8fr 1.5rem 4rem' areas='"title title" "horizontalbar ." "items info" "items actions" "items back"' title={`Blackmarket - ${weapon.name}`} backLocation={`/${slot}`}>

			<HorizontalBar>
				{
					Object.keys(weapon.modifications).map((type) => {
						return <HorizontalItem
							key={type}
							color={selectedTab === type ? '#fff' : blue}
							onClick={() => {
								changeTab(type as ModificationSlot)
							}}>{type}</HorizontalItem>
					})
				}
			</HorizontalBar>

			<ItemContainer>
				{
					Object.values(weapon.modifications[(selectedTab as ModificationSlot)] || {}).map((mod: Modification<string>) => {
						return <Item
							key={mod.name}
							width={192}
							height={96}
							selected={selectedItem.name === mod.name}
							onClick={() => selectedItem.name === mod.name ? equidModHelper() : setSelectedItem(mod)}
						>
							{mod.name === equippedModifications[mod.slot]?.name && <ItemEquipped />}
							<ItemName color={itemColours[mod.source.rarity]}>{fixItemName(mod.name)}</ItemName>
							<ItemImage src={`images/modifications/${mod.slot.replaceAll(' ', '')}/${mod.image}.webp`} />
						</Item>
					})
				}
			</ItemContainer>

			<InfoContainer>
				<InfoTitle>{fixItemName(selectedItem.name)}</InfoTitle>
				<BlackmarketStatsTable weapon={weapon} selectedItem={selectedItem} equippedMod={equippedModifications[selectedTab]} />
				<InfoUnlock color={itemColours[selectedItem.source.rarity]}>{selectedItem.source.name}</InfoUnlock>
			</InfoContainer>

			<ActionsContainer>
				{
					selectedItem === equippedModifications[selectedItem.slot] ?
						<ActionText onClick={() => {
							dispatch(removeMod({
								slot,
								id,
								modSlot: selectedItem.slot
							}))
						}}>Remove Modification</ActionText> :
						<ActionText onClick={() => {
							dispatch(changeMod({
								slot,
								id,
								newMod: selectedItem
							}))
						}}>Craft Modification</ActionText>
				}
			</ActionsContainer>

		</Container>
	)
}

export default WeaponChecker
