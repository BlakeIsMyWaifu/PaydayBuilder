import { changeWeapon } from 'actions/weaponsAction'
import Container from 'components/Container'
import { InfoContainer, InfoTitle } from 'components/Info'
import { Item, ItemContainer, ItemEquiped, ItemImage, ItemName } from 'components/Item'
import primary from 'data/weapons/guns/primary'
import secondary from 'data/weapons/guns/secondary'
import { weaponData } from 'data/weapons/guns/weaponTypes'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { useState } from 'react'
import { blue, itemColours } from 'utils/colours'

import { WeaponType, WeaponTypes } from './Weapons-Elements'

interface weaponsComponent {
	slot: 'primary' | 'secondary';
}

const Weapons: React.FC<weaponsComponent> = ({ slot }) => {

	const data = slot === 'primary' ? primary : secondary

	const dispatch = useAppDispatch()

	const equipedWeapon = useAppSelector(state => state.weapons[slot].equipped)

	const [selectedTab, setSeletectTab] = useState<string>(equipedWeapon.weaponType)

	const [selectedWeapon, setSeletectedWeapon] = useState(equipedWeapon)

	const clickWeapon = (weapon: weaponData) => weapon.name === selectedWeapon.name ? dispatch(changeWeapon({slot, weapon})) : setSeletectedWeapon(weapon)

	return (
		<Container rows='4rem 2rem 8fr 4rem' areas='"title filter" "weapontypes filter" "items info" "items back"' title={slot}>

			<WeaponTypes>
				{
					Object.keys(data).map(weaponType => {
						return <WeaponType
							key={weaponType}
							color={weaponType === selectedTab ? '#fff' : blue}
							onClick={() => setSeletectTab(weaponType)}
						>{weaponType}</WeaponType>
					})
				}
			</WeaponTypes>

			<ItemContainer>
				{
					Object.values(data[selectedTab]).map(weapon => {
						return <Item key={weapon.name} width={192} height={96}  selected={weapon.name === selectedWeapon.name}>
							<ItemName color={itemColours[weapon.source.rarity]}>{weapon.name}</ItemName>
								{weapon.name === equipedWeapon.name && <ItemEquiped />}
								<ItemImage
									src={`images/weapons/ksg.png`}
									onClick={() => clickWeapon(weapon)}
								/>
						</Item>
					})
				}
			</ItemContainer>

			<InfoContainer>
				<InfoTitle>{selectedWeapon.name}</InfoTitle>
			</InfoContainer>

		</Container>
	)
}

export default Weapons
