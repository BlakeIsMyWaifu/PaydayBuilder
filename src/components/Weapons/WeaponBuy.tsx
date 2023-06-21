import Container from 'components/Container'
import { ActionsContainer, ActionText } from 'components/elements/itemActionElements'
import { Item, ItemContainer, ItemImage, ItemName } from 'components/elements/itemElements'
import HorizontalBar from 'components/HorizontalBar'
import { primaryGunList, secondaryGunList } from 'data/weapons/guns/gunList'
import { type Slot, type WeaponData } from 'data/weapons/guns/weaponTypes'
import { type Dispatch, type FC, type SetStateAction, useMemo, useState } from 'react'
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

	const gunList: Record<string, readonly string[]> = useMemo(() => slot === 'primary' ? primaryGunList : secondaryGunList, [slot])

	const armoury = useArmouryStore(state => state[slot])
	const equippedWeaponId = useWeaponsStore(state => state[slot])
	const equippedWeapon = armoury[equippedWeaponId]
	const equippedWeaponData = data[equippedWeapon.weaponFind.type][equippedWeapon.weaponFind.name]

	const leftFacing = useIsLeftFacing()

	const [selectedTab, setSelectedTab] = useState(Object.keys(gunList)[0])
	const [selectedWeapon, setSelectedWeapon] = useState<WeaponData | null>(null)

	const addWeapon = useArmouryStore(state => state.addWeapon)
	const changeWeapon = useWeaponsStore(state => state.changeWeapon)

	const addWeaponHelper = (weapon: WeaponData) => {
		addWeapon(weapon)
		const id = +Object.keys(armoury)[Object.keys(armoury).length - 1] + 1
		changeWeapon(slot, id)
		setSelectedWeaponId(id)
		setEnableBuy(false)
	}

	return (
		<Container
			title={slot === 'primary' ? 'Primary' : 'Secondary'}
			desktopLayout={{
				columns: '3fr 1.5fr',
				rows: '4rem 2rem auto 2rem 4rem',
				areas: '"title reset" "horizontalbar ." "items info" "items actions" "items back"'
			}}
			mobileLayout={{
				columns: '3fr 1.5fr',
				rows: '3rem 1.5rem auto 1rem 150px',
				areas: '"title reset" "horizontalbar horizontalbar" "items items" "info actions" "info back"'
			}}
		>

			<HorizontalBar active={selectedTab} items={Object.keys(gunList).map(weaponType => ({
				label: weaponType,
				callback: () => {
					setSelectedTab(weaponType)
				}
			}))} />

			<ItemContainer>
				{
					Object.values(Object.values(gunList[selectedTab])).map(weaponName => {
						const weapon = data[selectedTab]?.[weaponName]
						if (!weapon) return null
						const isSelected = weapon.name === selectedWeapon?.name
						return <Item
							key={weapon.name}
							rowAmount={5}
							aspectRatio='2 / 1'
							selected={isSelected}
							onClick={() => isSelected ? addWeaponHelper(weapon) : setSelectedWeapon(weapon)}
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

			<WeaponInfo
				selectedWeapon={selectedWeapon ? {
					id: -1,
					weaponFind: {
						name: selectedWeapon.name,
						type: selectedWeapon.weaponType,
						slot
					},
					modifications: {}
				} : null}
				selectedWeaponData={selectedWeapon ?? null}
				equippedWeapon={equippedWeaponId ? [equippedWeapon, equippedWeaponData] : []}
			/>

			<ActionsContainer>
				{selectedWeapon && <ActionText onClick={() => addWeaponHelper(selectedWeapon)}>Save Weapon</ActionText>}
			</ActionsContainer>

		</Container>
	)
}

export default WeaponBuy