import Container from 'components/Container'
import DetectionRisk from 'components/DetectionRisk'
import { InfoContainer, InfoTitle, InfoTitleWrapper, InfoUnlock } from 'components/elements/infoElements'
import { ActionsContainer, ActionText } from 'components/elements/itemActionElements'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName } from 'components/elements/itemElements'
import { ResetContainer, ResetText } from 'components/elements/resetElements'
import HorizontalBar from 'components/HorizontalBar'
import { ModIcon, ModWrapper } from 'components/ModIcons/ModIcons'
import placeholderWeapon from 'data/weapons/guns/placeholderWeapon'
import { type ModificationSlot, type Slot, type Weapon, type WeaponFind } from 'data/weapons/guns/weaponTypes'
import useWeaponStats from 'hooks/useWeaponStats'
import { type FC, useCallback, useState } from 'react'
import { useIsMobile } from 'state/settingsContext'
import { useArmouryStore } from 'state/useArmouryStore'
import { itemColours } from 'utils/colours'
import { modificationsFromNames } from 'utils/modificationsFromNames'
import { trpc } from 'utils/trpc'
import { typedObject } from 'utils/typedObject'

import BlackmarketStatsTable from './Table/BlackmarketStatsTable'

interface WeaponCheckerProps {
	slot: string;
	id: string;
	modSlot?: string;
}

const WeaponChecker: FC<WeaponCheckerProps> = ({ slot, id, modSlot: modtype }) => {

	const armoury = useArmouryStore()

	const getWeapon = (slot: string | undefined, id: string | undefined): Weapon | null => {
		if (!slot || !id) return null
		if (!['primary', 'secondary'].includes(slot)) return null
		if (!/^\d+$/.test(id)) return null
		const validSlot = (slot as Slot)
		const validId = +id
		return armoury[validSlot][validId]
	}

	const weapon = getWeapon(slot, id)

	return weapon ? (
		<Blackmarket
			slot={(slot as Slot)}
			id={id ? +id : 0}
			weaponFind={weapon.weaponFind}
			equippedModNames={weapon.modifications}
			modSlotString={modtype ?? ''}
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
	weaponFind: WeaponFind;
	equippedModNames: Partial<Record<ModificationSlot, string>>;
	modSlotString: string;
}

const Blackmarket: FC<BlackmarketProps> = ({ slot, id, weaponFind, equippedModNames, modSlotString }) => {

	let { data: weaponData } = trpc.loadoutData.getWeapon.useQuery(weaponFind)
	weaponData ??= placeholderWeapon

	const equippedModData = modificationsFromNames(equippedModNames, weaponData.modifications)

	const modSlot = Object.keys(weaponData.modifications).includes(modSlotString) ? (modSlotString as ModificationSlot) : typedObject.keys(weaponData.modifications)[0]

	const [selectedTab, setSelectedTab] = useState(modSlot)
	const [selectedItem, setSelectedItem] = useState(equippedModData[selectedTab] ?? weaponData.modifications[selectedTab]?.[0] ?? weaponData.modifications.boost[0])

	const changeMod = useArmouryStore(state => state.changeMod)
	const resetWeaponMods = useArmouryStore(state => state.resetWeaponMods)
	const removeMod = useArmouryStore(state => state.removeMod)

	const equipModHelper = () => {
		if (selectedItem === equippedModData[selectedTab]) return
		changeMod(slot, id, selectedItem)
	}

	const changeTab = useCallback((tab: ModificationSlot) => {
		if (selectedTab === tab) return
		const equippedItem = equippedModData[tab]
		const firstItem = Object.values((weaponData ?? placeholderWeapon).modifications[tab] ?? {})[0]
		setSelectedItem(equippedItem ?? firstItem)
		setSelectedTab(tab)
	}, [equippedModData, selectedTab, weaponData])

	const totalStats = useWeaponStats(weaponData, equippedModNames).total

	const isMobile = useIsMobile()

	return (
		<Container
			title={`Blackmarket - ${weaponData.name}`}
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

			<HorizontalBar active={selectedTab} items={Object.keys(weaponData.modifications).map(type => ({
				label: type,
				callback: () => changeTab(type as ModificationSlot)
			}))} />

			<ItemContainer>
				{
					Object.values(weaponData.modifications[selectedTab] ?? {}).map(mod => {
						return <Item
							key={mod.name}
							rowAmount={4}
							aspectRatio='2 / 1'
							selected={selectedItem.name === mod.name}
							onClick={() => selectedItem.name === mod.name ? equipModHelper() : setSelectedItem(mod)}
						>
							{mod.name === equippedModData[mod.slot]?.name && <ItemEquipped />}
							<ItemName colour={itemColours[mod.source.rarity]}>{mod.name}</ItemName>
							<ItemImage
								src={`/images/modifications/${mod.image}.webp`}
								aspectRatio='auto'
								onMouseDown={event => event.preventDefault()}
								onError={({ currentTarget }) => {
									currentTarget.onerror = null
									currentTarget.src = '/images/modifications/placeholder.webp'
								}}
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
					<InfoTitle>{selectedItem.name}</InfoTitle>
				</InfoTitleWrapper>
				<BlackmarketStatsTable
					weapon={weaponData}
					totalStats={totalStats}
					selectedItem={selectedItem}
					equippedMod={equippedModData[selectedTab]}
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
					selectedItem === equippedModData[selectedItem.slot] ?
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
