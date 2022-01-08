import Container from 'components/Container'
import DetectionRisk from 'components/DetectionRisk'
import HorizontalBar from 'components/HorizontalBar/HorizontalBar'
import Info from 'components/Info'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName } from 'components/Item-Elements'
import ModIcons from 'components/ModIcons'
import { ResetContainer, ResetText } from 'components/Reset-Elements'
import { Slot, Weapon, WeaponData } from 'data/weapons/guns/weaponTypes'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import React, { Fragment, useEffect, useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { addWeapon, removeWeapon, resetArmoury } from 'slices/armourySlice'
import { changeWeapon } from 'slices/weaponsSlice'
import { blue, itemColours } from 'utils/colours'
import findWeapon from 'utils/findWeapon'
import { findNextNum } from 'utils/maths'

import WeaponInfo from '../WeaponInfo'
import { ActiveBuildTab, ArmouryBar, BlackmarketLink, BuyContainer, BuyText, DetectionAndActionsContainer, WeaponActionText, WeaponActionsContainer } from './Armoury-Elements'
import BuildsArmoury, { BuildTab } from './BuildsArmoury/BuildsArmoury'

interface ArmouryProps {
	slot: Slot;
	data: Record<string, Record<string, WeaponData>>;
	setEnableBuy: React.Dispatch<React.SetStateAction<boolean>>;
	buildTabs: BuildTab[];
	setBuildTabs: React.Dispatch<React.SetStateAction<BuildTab[]>>;
	activeTabId: number;
	setActiveTabId: React.Dispatch<React.SetStateAction<number>>;
}

const Armoury: React.FC<ArmouryProps> = ({ slot, data, setEnableBuy, buildTabs, setBuildTabs, activeTabId, setActiveTabId }) => {

	const dispatch = useAppDispatch()

	const armoury = useAppSelector(state => state.armoury[slot])
	const equippedWeaponId = useAppSelector(state => state.weapons[slot])
	const leftFacing = useAppSelector(state => state.settings.leftFacing)

	const [selectedWeaponId, setSelectedWeaponId] = useState<number>(armoury[equippedWeaponId].id)

	const { current: activeBuildId, builds } = useAppSelector(state => state.builds)
	const activeBuildName = builds[activeBuildId].name || 'New Build'

	const getBuildWeapons = (tabId: number): Weapon[] => {
		const build = buildTabs.find(build => build.id === tabId) || buildTabs[0]
		return typeof build.data === 'string' ? [] : build.data
	}

	const isActiveBuild = activeBuildId === activeTabId
	const weaponsData = isActiveBuild ? Object.values(armoury) : getBuildWeapons(activeTabId)

	useEffect(() => {
		setSelectedWeaponId(1)
	}, [activeTabId])

	return (
		<Container
			columns='3fr 1.5fr'
			rows='4rem 2rem auto 6rem 4rem'
			areas='"title reset" "armourybar infotabs" "items info" "items actions" "items back"'
			title={slot}
		>

			<ArmouryBar>
				<ActiveBuildTab colour={isActiveBuild ? '#fff' : blue} onClick={() => {
					// setSelectedWeaponId(1)
					setActiveTabId(activeBuildId)
				}}>{activeBuildName}</ActiveBuildTab>
				<HorizontalBar active={activeTabId} items={buildTabs.filter(build => build.active).map(build => ({
					label: build.name,
					callback: () => {
						// setSelectedWeaponId(1)
						setActiveTabId(build.id)
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
					setActiveTabId(activeBuildId)
					dispatch(changeWeapon({ slot, weapon: 0 }))
					dispatch(resetArmoury(slot))
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
					setActiveTabId={setActiveTabId}
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

						<BlackmarketLink to={`/blackmarket/${slot}/${selectedWeaponId}`}>
							<WeaponActionText>Modify Weapon</WeaponActionText>
						</BlackmarketLink>

						<WeaponActionText onClick={() => {
							dispatch(removeWeapon({ slot, id: selectedWeaponId }))

							const armouryValues = Object.values(armoury)
							const filtedArmoury = armouryValues.filter(value => value.id !== selectedWeaponId).reverse()

							if (equippedWeaponId === selectedWeaponId) {
								dispatch(changeWeapon({ slot, weapon: filtedArmoury[0].id }))
							}

							if (Object.keys(armoury).length === 2) {
								setEnableBuy(true)
								setSelectedWeaponId(0)
							} else {
								setSelectedWeaponId(filtedArmoury[0].id)
							}
						}}>Delete Weapon</WeaponActionText>

					</WeaponActionsContainer> : <WeaponActionsContainer>
						<WeaponActionText onClick={() => {
							const { weaponFind, modifications } = weaponsData[selectedWeaponId - 1]
							const weaponData = findWeapon(weaponFind)
							const nextNum = findNextNum(armoury)
							dispatch(addWeapon({
								weapon: weaponData,
								mods: modifications
							}))
							dispatch(changeWeapon({
								slot,
								weapon: nextNum
							}))
							setSelectedWeaponId(Object.keys(armoury).length)
							setActiveTabId(activeBuildId)
						}}>Duplicate Weapon</WeaponActionText>
					</WeaponActionsContainer>
				}
			</DetectionAndActionsContainer>

		</Container>
	)
}

export default Armoury