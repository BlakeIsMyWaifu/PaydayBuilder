import Container from 'components/Container'
import DetectionRisk from 'components/DetectionRisk'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName } from 'components/Item-Elements'
import ModIcons from 'components/ModIcons'
import { ResetContainer, ResetText } from 'components/Reset-Elements'
import { Slot } from 'data/weapons/guns/weaponTypes'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import React, { Fragment, useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import { removeWeapon, resetArmoury } from 'slices/armourySlice'
import { changeWeapon } from 'slices/weaponsSlice'
import { itemColours } from 'utils/colours'
import findWeapon from 'utils/findWeapon'

import WeaponInfo from '../WeaponInfo'
import { BlackmarketLink, BuyContainer, BuyText, DetectionAndActionsContainer, WeaponActionText, WeaponActionsContainer } from './Armoury-Elements'

interface ArmouryProps {
	slot: Slot;
	setEnableBuy: React.Dispatch<React.SetStateAction<boolean>>;
}

const Armoury: React.FC<ArmouryProps> = ({ slot, setEnableBuy }) => {

	const dispatch = useAppDispatch()

	const armoury = useAppSelector(state => state.armoury[slot])
	const equippedWeaponId = useAppSelector(state => state.weapons[slot])
	const leftFacing = useAppSelector(state => state.settings.leftFacing)

	const [selectedWeaponId, setSelectedWeaponId] = useState<number>(armoury[equippedWeaponId].id)

	return (
		<Container
			columns='3fr 1.5fr'
			rows='4rem 2rem auto 6rem 4rem'
			areas='"title reset" "horizontalbar infotabs" "items info" "items actions" "items back"'
			title={slot}
		>

			<ItemContainer>
				{
					Object.values(armoury).map((weapon, i) => {
						if (!i) return <Fragment key={'fragment'} />

						const { id, weaponFind } = weapon
						const weaponData = findWeapon(weaponFind)

						return <Item
							key={id}
							width={192}
							rowAmount={5}
							selected={selectedWeaponId === id}
							onClick={() => {
								if (selectedWeaponId === id) {
									dispatch(changeWeapon({ slot, weapon: id }))
								} else {
									setSelectedWeaponId(id)
								}
							}}
						>
							{equippedWeaponId === id && <ItemEquipped />}
							<ItemName colour={itemColours[weaponData.source.rarity]}>{weaponData.name}</ItemName>
							<ItemImage
								src={`/images/weapons/${weaponData.image}.png`}
								leftFacing={leftFacing}
								onMouseDown={event => event.preventDefault()}
							/>
							<ModIcons weapon={weapon} />
						</Item>
					})
				}

				<BuyContainer
					width={192}
					rowAmount={5}
					selected={false}
					onClick={() => setEnableBuy(true)}
				>
					<FaPlusCircle size={48} />
					<BuyText>Buy Weapon</BuyText>
				</BuyContainer>

			</ItemContainer>

			<ResetContainer>
				<ResetText onClick={() => {
					setEnableBuy(true)
					setSelectedWeaponId(0)
					dispatch(changeWeapon({ slot, weapon: 0 }))
					dispatch(resetArmoury(slot))
				}}>Delete All Weapons</ResetText>
			</ResetContainer>

			<WeaponInfo
				selectedWeapon={armoury[selectedWeaponId]}
				equippedWeapon={armoury[selectedWeaponId].id === equippedWeaponId ? undefined : armoury[equippedWeaponId]}
			/>

			<DetectionAndActionsContainer>

				<DetectionRisk
					flexDirection='row'
					corner={true}
					size={64}
				/>

				<WeaponActionsContainer>

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

				</WeaponActionsContainer>
			</DetectionAndActionsContainer>

		</Container>
	)
}

export default Armoury