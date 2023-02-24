import Container from 'components/Container'
import DetectionRisk from 'components/DetectionRisk'
import { ActionText, ActionsContainer } from 'components/elements/itemActionElements'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName } from 'components/elements/itemElements'
import { ResetContainer, ResetText } from 'components/elements/resetElements'
import HorizontalBar from 'components/HorizontalBar'
import Info from 'components/Info'
import ModIcons from 'components/ModIcons'
import { Slot, Weapon, WeaponData } from 'data/weapons/guns/weaponTypes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dispatch, FC, Fragment, SetStateAction, useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { useIsLeftFacing } from 'state/settingsContext'
import { useArmouryStore } from 'state/useArmouryStore'
import { BuildSave, useBuildsStore } from 'state/useBuildsStore'
import { useWeaponsStore } from 'state/useWeaponsStore'
import styled from 'styled-components'
import { blue, itemColours } from 'utils/colours'
import findWeapon from 'utils/findWeapon'
import { findNextNum } from 'utils/maths'

import BuildsArmoury, { BuildTab } from './BuildsArmoury'
import WeaponInfo from './WeaponInfo'

const BuyContainer = styled(Item)`
	color: ${blue};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`

const BuyText = styled.p`
	color: inherit;
	font-size: 1.2rem;
`

const DetectionAndActionsContainer = styled(ActionsContainer)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`

const WeaponActionsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`

interface WeaponActionTextProps {
	hide?: boolean;
}

const WeaponActionText = styled(ActionText) <WeaponActionTextProps>`
	visibility: ${props => props.hide ? 'hidden' : 'visible'};
`

const BlackmarketLink = styled(Link)`
	text-decoration: none;
`

const ArmouryBarContainer = styled.div`
	grid-area: armourybar;
	display: flex;
	flex-direction: row;
`

interface ActiveBuildTabProps {
	colour: string;
}

const ActiveBuildTab = styled.p<ActiveBuildTabProps>`
	font-size: 1.6rem;
	cursor: pointer;
	white-space: nowrap;
	width: min-content;
	padding-right: 12px;
	color: ${props => props.colour};
	margin-right: 24px;
`

interface ArmouryProps {
	slot: Slot;
	data: Record<string, Record<string, WeaponData>>;
	setEnableBuy: Dispatch<SetStateAction<boolean>>;
	activeTabId: number;
	changeActiveTab: (tabId: number) => void;
	selectedWeaponId: number;
	setSelectedWeaponId: Dispatch<SetStateAction<number>>;
}

const Armoury: FC<ArmouryProps> = ({ slot, data, setEnableBuy, activeTabId, changeActiveTab, selectedWeaponId, setSelectedWeaponId }) => {

	const armoury = useArmouryStore(state => state[slot])
	const equippedWeaponId = useWeaponsStore(state => state[slot])

	const { current: activeBuildId, builds } = useBuildsStore()

	const slotParameter = slot === 'primary' ? 'ap' : 'as'

	const [buildTabs, setBuildTabs] = useState<BuildTab[]>(Object.values(builds).map(build => ({
		...build,
		name: build.name || 'New Build',
		active: false
	})).filter(build => build.id !== activeBuildId && !build.data.includes(`&${slotParameter}=_&`)))

	const getBuildWeapons = (tabId: number): Weapon[] => {
		const build = buildTabs.find(build => build.id === tabId) ?? buildTabs[0]
		return typeof build.data === 'string' ? [] : build.data
	}

	const isActiveBuild = activeBuildId === activeTabId
	const weaponsData = isActiveBuild ? Object.values(armoury) : getBuildWeapons(activeTabId)

	const resetArmoury = useArmouryStore(state => state.resetArmoury)
	const removeWeapon = useArmouryStore(state => state.removeWeapon)
	const addWeapon = useArmouryStore(state => state.addWeapon)
	const changeWeapon = useWeaponsStore(state => state.changeWeapon)

	const deleteWeaponHandler = (): void => {
		removeWeapon(slot, selectedWeaponId)

		const armouryValues = Object.values(armoury)
		const filteredArmoury = armouryValues.filter(value => value.id !== selectedWeaponId).reverse()

		if (equippedWeaponId === selectedWeaponId) {
			changeWeapon(slot, filteredArmoury[0].id)
		}

		if (Object.keys(armoury).length === 1) {
			setEnableBuy(true)
			setSelectedWeaponId(0)
		} else {
			setSelectedWeaponId(filteredArmoury[0].id)
		}
	}

	const duplicateWeaponHandler = (): void => {
		const { weaponFind, modifications } = weaponsData[selectedWeaponId - 1]
		const weaponData = findWeapon(weaponFind)
		const nextNum = findNextNum(armoury)
		addWeapon(weaponData, modifications)
		changeWeapon(slot, nextNum)
		setSelectedWeaponId(Object.keys(armoury).length)
		changeActiveTab(activeBuildId)
	}

	return (
		<Container title={slot} desktopLayout={{
			columns: '3fr 1.5fr',
			rows: '4rem 2rem auto 6rem 4rem',
			areas: '"title reset" "armourybar infotabs" "items info" "items actions" "items back"'
		}}>

			<ArmouryBar
				builds={builds}
				activeBuildId={activeBuildId}
				isActiveBuild={isActiveBuild}
				changeActiveTab={changeActiveTab}
				activeTabId={activeTabId}
				buildTabs={buildTabs}
			/>

			<ArmouryItems
				weaponsData={weaponsData}
				isActiveBuild={isActiveBuild}
				selectedWeaponId={selectedWeaponId}
				setSelectedWeaponId={setSelectedWeaponId}
				equippedWeaponId={equippedWeaponId}
				slot={slot}
				duplicateWeaponHandler={duplicateWeaponHandler}
				activeBuildId={activeBuildId}
				activeTabId={activeTabId}
				setEnableBuy={setEnableBuy}
			/>

			<ResetContainer>
				<ResetText onClick={() => {
					setEnableBuy(true)
					changeActiveTab(activeBuildId)
					changeWeapon(slot, 0)
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
							changeWeapon(slot, selectedWeaponId)
						}}>Equip Weapon</WeaponActionText>

						<BlackmarketLink href={`/blackmarket/${slot}/${selectedWeaponId}`}>
							<WeaponActionText>Modify Weapon</WeaponActionText>
						</BlackmarketLink>

						<WeaponActionText onClick={deleteWeaponHandler}>Delete Weapon</WeaponActionText>

					</WeaponActionsContainer> : <WeaponActionsContainer>
						<WeaponActionText onClick={duplicateWeaponHandler}>Duplicate Weapon</WeaponActionText>
					</WeaponActionsContainer>
				}
			</DetectionAndActionsContainer>

		</Container>
	)
}

interface ArmouryBarProps {
	builds: Record<number, BuildSave>;
	activeBuildId: number;
	isActiveBuild: boolean;
	changeActiveTab: (tabId: number) => void;
	activeTabId: number;
	buildTabs: BuildTab[];
}

const ArmouryBar: FC<ArmouryBarProps> = ({ builds, activeBuildId, isActiveBuild, changeActiveTab, activeTabId, buildTabs }) => {

	const activeBuildName = builds[activeBuildId].name || 'New Build'

	return (
		<ArmouryBarContainer>
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
		</ArmouryBarContainer>
	)
}

interface ArmouryItemsProps {
	weaponsData: Weapon[];
	isActiveBuild: boolean;
	selectedWeaponId: number;
	setSelectedWeaponId: Dispatch<SetStateAction<ArmouryItemsProps['selectedWeaponId']>>;
	equippedWeaponId: number;
	slot: Slot;
	duplicateWeaponHandler: () => void;
	activeBuildId: number;
	activeTabId: number;
	setEnableBuy: Dispatch<SetStateAction<boolean>>;
}

const ArmouryItems: FC<ArmouryItemsProps> = ({ weaponsData, isActiveBuild, selectedWeaponId, setSelectedWeaponId, equippedWeaponId, slot, duplicateWeaponHandler, activeBuildId, activeTabId, setEnableBuy }) => {

	const router = useRouter()

	const leftFacing = useIsLeftFacing()

	const changeWeapon = useWeaponsStore(state => state.changeWeapon)

	return (
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
								if (equippedWeaponId === id) {
									router.push(`/blackmarket/${slot}/${selectedWeaponId}`)
								} else {
									changeWeapon(slot, id)
								}
							} else if (selectedWeaponId === id && !isActiveBuild) {
								duplicateWeaponHandler()
							} else {
								setSelectedWeaponId(id)
							}
						}}
					>
						{equippedWeaponId === id && isActiveBuild && <ItemEquipped />}
						<ItemName colour={itemColours[weaponData.source.rarity]}>{weaponData.name}</ItemName>
						<ItemImage
							src={`/images/weapons/${weaponData.image}.webp`}
							leftFacing={leftFacing}
							aspectRatio='auto'
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
	)
}

export default Armoury