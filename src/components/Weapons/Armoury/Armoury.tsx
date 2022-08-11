import Container from 'components/Container'
import DetectionRisk from 'components/DetectionRisk'
import HorizontalBar from 'components/HorizontalBar/HorizontalBar'
import Info from 'components/Info'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName } from 'components/Item-Elements'
import ModIcons from 'components/ModIcons'
import { ResetContainer, ResetText } from 'components/Reset-Elements'
import { Slot, Weapon, WeaponData } from 'data/weapons/guns/weaponTypes'
import { useAppDispatch } from 'hooks/reduxHooks'
import { Dispatch, FC, Fragment, SetStateAction } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { changeWeapon } from 'slices/weaponsSlice'
import { useArmouryStore } from 'state/useArmouryStore'
import { useBuildStore } from 'state/useBuildsStore'
import { useSettingsStore } from 'state/useSettingsStore'
import { useWeaponStore } from 'state/useWeaponStore'
import { blue, itemColours } from 'utils/colours'
import findWeapon from 'utils/findWeapon'
import { findNextNum } from 'utils/maths'

import WeaponInfo from '../WeaponInfo'
import { ActiveBuildTab, ArmouryBar, BlackmarketLink, BuyContainer, BuyText, DetectionAndActionsContainer, WeaponActionText, WeaponActionsContainer } from './Armoury-Elements'
import BuildsArmoury, { BuildTab } from './BuildsArmoury/BuildsArmoury'

interface ArmouryProps {
	slot: Slot;
	data: Record<string, Record<string, WeaponData>>;
	setEnableBuy: Dispatch<SetStateAction<boolean>>;
	buildTabs: BuildTab[];
	setBuildTabs: Dispatch<SetStateAction<BuildTab[]>>;
	activeTabId: number;
	changeActiveTab: (tabId: number) => void;
	selectedWeaponId: number;
	setSelectedWeaponId: Dispatch<SetStateAction<number>>;
}

const Armoury: FC<ArmouryProps> = ({ slot, data, setEnableBuy, buildTabs, setBuildTabs, activeTabId, changeActiveTab, selectedWeaponId, setSelectedWeaponId }) => {

	const dispatch = useAppDispatch()

	const armoury = useArmouryStore(state => state[slot])
	const equippedWeaponId = useWeaponStore(state => state[slot])
	const leftFacing = useSettingsStore(state => state.leftFacing)

	const { current: activeBuildId, builds } = useBuildStore()
	const activeBuildName = builds[activeBuildId].name || 'New Build'

	const getBuildWeapons = (tabId: number): Weapon[] => {
		const build = buildTabs.find(build => build.id === tabId) || buildTabs[0]
		return typeof build.data === 'string' ? [] : build.data
	}

	const isActiveBuild = activeBuildId === activeTabId
	const weaponsData = isActiveBuild ? Object.values(armoury) : getBuildWeapons(activeTabId)

	const resetArmoury = useArmouryStore(state => state.resetArmoury)
	const removeWeapon = useArmouryStore(state => state.removeWeapon)
	const addWeapon = useArmouryStore(state => state.addWeapon)

	return (
		<Container
			columns='3fr 1.5fr'
			rows='4rem 2rem auto 6rem 4rem'
			areas='"title reset" "armourybar infotabs" "items info" "items actions" "items back"'
			title={slot}
		>

			<ArmouryBar>
				<ActiveBuildTab colour={isActiveBuild ? '#fff' : blue} onClick={() => {
					changeActiveTab(activeBuildId)
				}}>{activeBuildName}</ActiveBuildTab>
				<HorizontalBar active={activeTabId} items={buildTabs.filter(build => build.active).map(build => ({
					label: build.name,
					callback: () => {
						changeActiveTab(build.id)
					},
					id: build.id
				}))} />
			</ArmouryBar>

			<ItemContainer>
				{
					weaponsData.map((weapon, i) => {
						if (!i && isActiveBuild) return <Fragment key={'fragment'} />

						const { id, weaponFind } = weapon
						const weaponData = findWeapon(weaponFind)

						return <Item
							key={id}
							width={192}
							rowAmount={5}
							selected={selectedWeaponId === id}
							onClick={() => {
								if (selectedWeaponId === id && isActiveBuild) {
									dispatch(changeWeapon({ slot, weapon: id }))
								} else {
									setSelectedWeaponId(id)
								}
							}}
						>
							{equippedWeaponId === id && isActiveBuild && <ItemEquipped />}
							<ItemName colour={itemColours[weaponData.source.rarity]}>{weaponData.name}</ItemName>
							<ItemImage
								src={`/images/weapons/${weaponData.image}.png`}
								leftFacing={leftFacing}
								onMouseDown={event => event.preventDefault()}
							/>
							<ModIcons weapon={weapon} link={isActiveBuild} />
						</Item>
					})
				}

				{
					activeBuildId === activeTabId && <BuyContainer
						width={192}
						rowAmount={5}
						selected={false}
						onClick={() => setEnableBuy(true)}
					>
						<FaPlusCircle size={48} />
						<BuyText>Buy Weapon</BuyText>
					</BuyContainer>
				}

			</ItemContainer>

			<ResetContainer>
				<ResetText onClick={() => {
					setEnableBuy(true)
					changeActiveTab(activeBuildId)
					dispatch(changeWeapon({ slot, weapon: 0 }))
					resetArmoury(slot)
				}}>Delete All Weapons</ResetText>
			</ResetContainer>

			<Info tabs={{
				'weapon stats': <WeaponInfo
					selectedWeapon={weaponsData[selectedWeaponId - (isActiveBuild ? 0 : 1)]}
					equippedWeapon={armoury[selectedWeaponId]?.id === equippedWeaponId && isActiveBuild ? undefined : armoury[equippedWeaponId]}
				/>,
				builds: <BuildsArmoury
					data={data}
					buildTabs={buildTabs}
					setBuildTabs={setBuildTabs}
					changeActiveTab={changeActiveTab}
				/>
			}} />

			<DetectionAndActionsContainer>

				<DetectionRisk
					flexDirection='row'
					corner={true}
					size={64}
				/>

				{
					isActiveBuild ? <WeaponActionsContainer>

						<WeaponActionText hide={selectedWeaponId === equippedWeaponId} onClick={() => {
							dispatch(changeWeapon({ slot, weapon: selectedWeaponId }))
						}}>Equip Weapon</WeaponActionText>

						<BlackmarketLink href={`/blackmarket/${slot}/${selectedWeaponId}`}>
							<a>
								<WeaponActionText>Modify Weapon</WeaponActionText>
							</a>
						</BlackmarketLink>

						<WeaponActionText onClick={() => {
							removeWeapon(slot, selectedWeaponId)

							const armouryValues = Object.values(armoury)
							const filteredArmoury = armouryValues.filter(value => value.id !== selectedWeaponId).reverse()

							if (equippedWeaponId === selectedWeaponId) {
								dispatch(changeWeapon({ slot, weapon: filteredArmoury[0].id }))
							}

							if (Object.keys(armoury).length === 2) {
								setEnableBuy(true)
								setSelectedWeaponId(0)
							} else {
								setSelectedWeaponId(filteredArmoury[0].id)
							}
						}}>Delete Weapon</WeaponActionText>

					</WeaponActionsContainer> : <WeaponActionsContainer>
						<WeaponActionText onClick={() => {
							const { weaponFind, modifications } = weaponsData[selectedWeaponId - 1]
							const weaponData = findWeapon(weaponFind)
							const nextNum = findNextNum(armoury)
							addWeapon(weaponData, modifications)
							dispatch(changeWeapon({
								slot,
								weapon: nextNum
							}))
							setSelectedWeaponId(Object.keys(armoury).length)
							changeActiveTab(activeBuildId)
						}}>Duplicate Weapon</WeaponActionText>
					</WeaponActionsContainer>
				}
			</DetectionAndActionsContainer>

		</Container>
	)
}

export default Armoury