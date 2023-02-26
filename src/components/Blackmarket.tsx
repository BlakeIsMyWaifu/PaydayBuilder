import Container from 'components/Container'
import DetectionRisk from 'components/DetectionRisk'
import { InfoContainer, InfoTitle, InfoTitleWrapper, InfoUnlock } from 'components/elements/infoElements'
import { ActionText, ActionsContainer } from 'components/elements/itemActionElements'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName } from 'components/elements/itemElements'
import { ResetContainer, ResetText } from 'components/elements/resetElements'
import HorizontalBar from 'components/HorizontalBar'
import { ModIcon, ModWrapper } from 'components/ModIcons/ModIcons'
import { type Modification, type ModificationSlot, type Slot, type Weapon, type WeaponData } from 'data/weapons/guns/weaponTypes'
import useWeaponStats from 'hooks/useWeaponStats'
import { type FC, useState } from 'react'
import { useIsMobile } from 'state/settingsContext'
import { useArmouryStore } from 'state/useArmouryStore'
import { itemColours } from 'utils/colours'
import findWeapon from 'utils/findWeapon'
import { modificationsFromNames } from 'utils/modificationsFromNames'

import BlackmarketStatsTable from './Table/BlackmarketStatsTable'

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
		if (selectedItem === equippedModifications[selectedTab]) return
		changeMod(slot, id, selectedItem)
	}

	const changeTab = (tab: ModificationSlot): void => {
		if (selectedTab === tab) return
		const equippedItem = equippedModifications[tab]
		const firstItem = Object.values<Modification>(weapon.modifications[tab] ?? {})[0]
		setSelectedItem(equippedItem ?? firstItem)
		setSelectedTab(tab)
	}

	const fixItemName = (name: string): string => name.split(' (')[0]

	const totalStats = useWeaponStats(weapon, modifications).total

	const isMobile = useIsMobile()

	return (
		<Container
			title={`Blackmarket - ${weapon.name}`}
			backLocation={`/${slot}`}
			desktopLayout={{
				rows: '4rem 2rem auto 120px 1.5rem 4rem',
				areas: '"title reset" "horizontalbar ." "items info" "items drisk" "items actions" "items back"'
			}}
			mobileLayout={{
				rows: '3rem 1.5rem auto 80px 68px 64px',
				areas: '"title reset" "horizontalbar horizontalbar" "items items" "info drisk" "info actions" "info back"'
			}}
		>

			<HorizontalBar active={selectedTab} items={Object.keys(weapon.modifications).map(type => ({
				label: type,
				callback: () => changeTab(type as ModificationSlot)
			}))} />

			<ItemContainer>
				{
					Object.values(weapon.modifications[selectedTab] || {}).map((mod: Modification) => {
						return <Item
							key={mod.name}
							rowAmount={4}
							selected={selectedItem.name === mod.name}
							onClick={() => selectedItem.name === mod.name ? equipModHelper() : setSelectedItem(mod)}
						>
							{mod.name === equippedModifications[mod.slot]?.name && <ItemEquipped />}
							<ItemName colour={itemColours[mod.source.rarity]}>{fixItemName(mod.name)}</ItemName>
							<ItemImage
								src={`/images/modifications/${mod.image}.webp`}
								aspectRatio='auto'
								onMouseDown={event => event.preventDefault()}
							/>
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

			<DetectionRisk
				flexDirection='row'
				corner={true}
				text={!isMobile}
				size={isMobile ? 64 : 96}
			/>

			<ActionsContainer>
				{
					selectedItem === equippedModifications[selectedItem.slot] ?
						<ActionText onClick={() => {
							removeMod(slot, id, selectedItem.slot)
						}}>Remove {!isMobile && 'Modification'}</ActionText> :
						<ActionText onClick={() => {
							changeMod(slot, id, selectedItem)
						}}>Craft {!isMobile && 'Modification'}</ActionText>
				}
			</ActionsContainer>

		</Container>
	)
}

export default WeaponChecker
