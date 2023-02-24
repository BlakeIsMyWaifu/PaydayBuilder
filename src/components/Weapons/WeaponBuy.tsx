import Container from 'components/Container'
import { ActionText, ActionsContainer } from 'components/elements/itemActionElements'
import { Item, ItemContainer, ItemImage, ItemName } from 'components/elements/itemElements'
import HorizontalBar from 'components/HorizontalBar'
import { Slot, WeaponData } from 'data/weapons/guns/weaponTypes'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { useIsLeftFacing } from 'state/settingsContext'
import { useArmouryStore } from 'state/useArmouryStore'
import { useWeaponsStore } from 'state/useWeaponsStore'
import { itemColours } from 'utils/colours'

import WeaponInfo from './WeaponInfo'

interface WeaponBuyProps {
	slot: Slot;
	data: Record<string, Record<string, WeaponData>>;
	setEnableBuy: Dispatch<SetStateAction<boolean>>;
	setSelectedWeaponId: Dispatch<SetStateAction<number>>;
}

const WeaponBuy: FC<WeaponBuyProps> = ({ slot, data, setEnableBuy, setSelectedWeaponId }) => {

	const armoury = useArmouryStore(state => state[slot])
	const equippedWeaponId = useWeaponsStore(state => state[slot])
	const equippedWeapon = armoury[equippedWeaponId]

	const leftFacing = useIsLeftFacing()

	const [selectedTab, setSelectedTab] = useState<string>(Object.keys(data)[0])
	const [selectedWeapon, setSelectedWeapon] = useState<WeaponData>(Object.values(data[selectedTab])[0])

	const addWeapon = useArmouryStore(state => state.addWeapon)
	const changeWeapon = useWeaponsStore(state => state.changeWeapon)

	const addWeaponHelper = (weapon: WeaponData): void => {
		addWeapon(weapon)
		const id = +Object.keys(armoury)[Object.keys(armoury).length - 1] + 1
		changeWeapon(slot, id)
		setSelectedWeaponId(id)
		setEnableBuy(false)
	}

	return (
		<Container title={slot} desktopLayout={{
			columns: '3fr 1.5fr',
			rows: '4rem 2rem auto 2rem 4rem',
			areas: '"title reset" "horizontalbar ." "items info" "items actions" "items back"'
		}}>

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
								src={`/images/weapons/${weapon.image}.webp`}
								leftFacing={leftFacing}
								aspectRatio='auto'
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