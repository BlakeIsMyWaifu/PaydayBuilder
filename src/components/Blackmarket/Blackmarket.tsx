import Container from 'components/Container'
import DetectionRisk from 'components/DetectionRisk'
import HorizontalBar from 'components/HorizontalBar'
import { InfoContainer, InfoTitle, InfoTitleWrapper, InfoUnlock } from 'components/Info/Info-Elements'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName } from 'components/Item-Elements'
import { ActionText, ActionsContainer } from 'components/ItemAction-Elements'
import { ModIcon, ModWrapper } from 'components/ModIcons/ModIcons-Elements'
import { ResetContainer, ResetText } from 'components/Reset-Elements'
import { Modification, ModificationSlot, Slot, Weapon, WeaponData } from 'data/weapons/guns/weaponTypes'
import useWeaponStats from 'hooks/useWeaponStats'
import { FC, useState } from 'react'
import { useArmouryStore } from 'state/useArmouryStore'
import { itemColours } from 'utils/colours'
import findWeapon from 'utils/findWeapon'
import { modificationsFromNames } from 'utils/modificationsFromNames'

import BlackmarketStatsTable from './BlackmarketStatsTable'

interface WeaponCheckerProps {
	slot: string;
	id: string;
	modtype?: string;
}

const WeaponChecker: FC<WeaponCheckerProps> = ({ slot, id, modtype }) => {

	const armoury = useArmouryStore()

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
		<Blackmarket
			slot={(slot as Slot)}
			id={id ? +id : 0}
			weapon={findWeapon(weapon.weaponFind)}
			modifications={weapon.modifications}
			modtype={modtype || ''}
		/>
	) : (
		<Container>
			<h1>Error, invalid weapon</h1>
		</Container>
	)
}

interface BlackmarketProps {
	slot: Slot;
	id: number;
	weapon: WeaponData;
	modifications: Partial<Record<ModificationSlot, string>>;
	modtype: string;
}

const Blackmarket: FC<BlackmarketProps> = ({ slot, id, weapon, modifications, modtype }) => {

	const equippedModifications = modificationsFromNames(modifications)

	const validModtype = Object.keys(weapon.modifications).includes(modtype) ? modtype : Object.keys(weapon.modifications)[0]

	const [selectedTab, setSelectedTab] = useState<ModificationSlot>(validModtype as ModificationSlot)
	const [selectedItem, setSelectedItem] = useState<Modification>(equippedModifications[selectedTab] || weapon.modifications[selectedTab]?.[0] || weapon.modifications.boost[0])

	const changeMod = useArmouryStore(state => state.changeMod)
	const resetWeaponMods = useArmouryStore(state => state.resetWeaponMods)
	const removeMod = useArmouryStore(state => state.removeMod)

	const equipModHelper = (): void => {
		if (!selectedItem) return
		changeMod(slot, id, selectedItem)
	}

	const changeTab = (tab: ModificationSlot): void => {
		if (selectedTab === tab) return
		const equippedItem = equippedModifications[tab]
		const firstItem = Object.values(weapon.modifications[tab] || {})[0]
		setSelectedItem(equippedItem || firstItem as Modification)
		setSelectedTab(tab)
	}

	const fixItemName = (name: string): string => name.split(' (')[0]

	const totalStats = useWeaponStats(weapon, modifications).total

	return (
		<Container
			rows='4rem 2rem 1fr 120px 1.5rem 4rem'
			areas='"title reset" "horizontalbar ." "items info" "items drisk" "items actions" "items back"'
			title={`Blackmarket - ${weapon.name}`}
			backLocation={`/${slot}`}
		>

			<HorizontalBar active={selectedTab} items={Object.keys(weapon.modifications).map(type => ({
				label: type,
				callback: () => changeTab(type as ModificationSlot)
			}))} />

			<ItemContainer>
				{
					Object.values(weapon.modifications[(selectedTab as ModificationSlot)] || {}).map((mod: Modification) => {
						return <Item
							key={mod.name}
							width={192}
							rowAmount={4}
							selected={selectedItem.name === mod.name}
							onClick={() => selectedItem.name === mod.name ? equipModHelper() : setSelectedItem(mod)}
						>
							{mod.name === equippedModifications[mod.slot]?.name && <ItemEquipped />}
							<ItemName colour={itemColours[mod.source.rarity]}>{fixItemName(mod.name)}</ItemName>
							<ItemImage src={`/images/modifications/${mod.slot.replaceAll(' ', '')}/${mod.image}.webp`} onMouseDown={event => event.preventDefault()} />
						</Item>
					})
				}
			</ItemContainer>

			<InfoContainer>
				<InfoTitleWrapper>
					<ModWrapper>
						<ModIcon src={`/images/modifications/icons/${selectedItem.icon}.png`} equipped={true} />
					</ModWrapper>
					<InfoTitle>{fixItemName(selectedItem.name)}</InfoTitle>
				</InfoTitleWrapper>
				<BlackmarketStatsTable
					weapon={weapon}
					totalStats={totalStats}
					selectedItem={selectedItem}
					equippedMod={equippedModifications[selectedTab]}
				/>
				<InfoUnlock colour={itemColours[selectedItem.source.rarity]}>{selectedItem.source.name}</InfoUnlock>
			</InfoContainer>

			<ResetContainer>
				<ResetText onClick={() => resetWeaponMods(slot, id)}>Reset all modifications</ResetText>
			</ResetContainer>

			<DetectionRisk flexDirection='row' corner={true} />

			<ActionsContainer>
				{
					selectedItem === equippedModifications[selectedItem.slot] ?
						<ActionText onClick={() => {
							removeMod(slot, id, selectedItem.slot)
						}}>Remove Modification</ActionText> :
						<ActionText onClick={() => {
							changeMod(slot, id, selectedItem)
						}}>Craft Modification</ActionText>
				}
			</ActionsContainer>

		</Container>
	)
}

export default WeaponChecker
