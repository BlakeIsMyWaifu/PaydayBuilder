import Container from 'components/Container'
import HorizontalBar from 'components/HorizontalBar'
import { Item, ItemContainer, ItemImage, ItemName } from 'components/Item-Elements'
import { ActionText, ActionsContainer } from 'components/ItemAction-Elements'
import { Slot, WeaponData } from 'data/weapons/guns/weaponTypes'
import { useAppDispatch } from 'hooks/reduxHooks'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { changeWeapon } from 'slices/weaponsSlice'
import { useArmouryStore } from 'state/useArmouryStore'
import { useSettingsStore } from 'state/useSettingsStore'
import { useWeaponStore } from 'state/useWeaponStore'
import { itemColours } from 'utils/colours'

import WeaponInfo from '../WeaponInfo'

interface WeaponBuyProps {
	slot: Slot;
	data: Record<string, Record<string, WeaponData>>;
	setEnableBuy: Dispatch<SetStateAction<boolean>>;
	setSelectedWeaponId: Dispatch<SetStateAction<number>>;
}

const WeaponBuy: FC<WeaponBuyProps> = ({ slot, data, setEnableBuy, setSelectedWeaponId }) => {

	const dispatch = useAppDispatch()

	const armoury = useArmouryStore(state => state[slot])
	const equippedWeaponId = useWeaponStore(state => state[slot])
	const equippedWeapon = armoury[equippedWeaponId]
	const leftFacing = useSettingsStore(state => state.leftFacing)

	const [selectedTab, setSelectedTab] = useState<string>(Object.keys(data)[0])
	const [selectedWeapon, setSelectedWeapon] = useState<WeaponData>(Object.values(data[selectedTab])[0])

	const addWeapon = useArmouryStore(state => state.addWeapon)

	const addWeaponHelper = (weapon: WeaponData): void => {
		addWeapon(weapon)
		const id = +Object.keys(armoury)[Object.keys(armoury).length - 1] + 1
		dispatch(changeWeapon({ slot, weapon: id }))
		setSelectedWeaponId(id)
		setEnableBuy(false)
	}

	return (
		<Container
			columns='3fr 1.5fr'
			rows='4rem 2rem auto 2rem 4rem'
			areas='"title reset" "horizontalbar ." "items info" "items actions" "items back"'
			title={slot}
		>

			<HorizontalBar active={selectedTab} items={Object.keys(data).map(weaponType => ({
				label: weaponType,
				callback: () => {
					setSelectedTab(weaponType)
				}
			}))} />

			<ItemContainer>
				{
					Object.values(Object.values(data[selectedTab])).map(weapon => {
						return <Item
							key={weapon.name}
							width={192}
							rowAmount={5}
							selected={selectedWeapon.name === weapon.name}
							onClick={() => {
								if (selectedWeapon.name === weapon.name) {
									addWeaponHelper(weapon)
								} else {
									setSelectedWeapon(weapon)
								}
							}}
						>
							<ItemName colour={itemColours[weapon.source.rarity]}>{weapon.name}</ItemName>
							<ItemImage
								src={`/images/weapons/${weapon.image}.png`}
								leftFacing={leftFacing}
								onMouseDown={event => event.preventDefault()}
							/>
						</Item>
					})
				}
			</ItemContainer>

			<WeaponInfo selectedWeapon={{
				id: -1,
				weaponFind: {
					name: selectedWeapon.name,
					type: selectedWeapon.weaponType,
					slot
				},
				modifications: {}
			}} equippedWeapon={equippedWeaponId ? equippedWeapon : undefined} />

			<ActionsContainer>
				<ActionText onClick={() => addWeaponHelper(selectedWeapon)}>Save Weapon</ActionText>
			</ActionsContainer>

		</Container>
	)
}

export default WeaponBuy