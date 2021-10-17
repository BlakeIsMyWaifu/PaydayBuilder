import { addWeapon, removeWeapon } from 'actions/armouryAction'
import { changeWeapon } from 'actions/weaponsAction'
import Container from 'components/Container'
import { InfoContainer, InfoSubtitle, InfoTitle, InfoUnlock } from 'components/Info'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName } from 'components/Item'
import primary from 'data/weapons/guns/primary'
import secondary from 'data/weapons/guns/secondary'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { useState } from 'react'
import { blue, itemColours } from 'utils/colours'

import { ActionsContainer, ActionsText, WeaponType, WeaponTypes } from './Weapons-Elements'
import WeaponsStatsTable from './WeaponStatsTable'

interface WeaponsComponent {
	slot: 'primary' | 'secondary';
}

const Weapons: React.FC<WeaponsComponent> = ({ slot }) => {

	const data = slot === 'primary' ? primary : secondary

	const dispatch = useAppDispatch()

	const armoury = useAppSelector(state => state.armoury[slot])

	const equippedWeaponId = useAppSelector(state => state.weapons[slot])
	const equippedWeapon = useAppSelector(state => state.armoury[slot][equippedWeaponId].weapon)

	const [selectedWeapon, setSelectedWeapon] = useState(equippedWeapon)
	const [selectedArmoury, setSelectedArmoury] = useState<number>(armoury[equippedWeaponId].id)

	const leftFacing = useAppSelector(state => state.settings.leftFacing)

	const [selectedTab, setSeletectTab] = useState('saved')

	const addWeaponHelper = () => {
		dispatch(addWeapon({ slot, weapon: selectedWeapon }))
		setSeletectTab('saved')
		const id = +Object.keys(armoury)[Object.keys(armoury).length - 1] + 1
		setSelectedArmoury(id)
		dispatch(changeWeapon({ slot, weapon: id }))
	}

	return (
		<Container columns='3fr 1.5fr' rows='4rem 2rem 8fr 3rem 4rem' areas='"title filter" "weapontypes filter" "items info" "items actions" "items back"' title={slot}>

			<WeaponTypes>
				<WeaponType color={'saved' === selectedTab ? '#fff' : blue} onClick={() => setSeletectTab('saved')}>Saved</WeaponType>
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
					selectedTab === 'saved' ?
						Object.values(armoury).map((weapon, i) => {
							if (i === 0) return <></>
							return <Item
								key={`${weapon.name}-${weapon.id}`}
								width={192}
								height={96}
								selected={selectedArmoury === weapon.id}
								onClick={() => selectedArmoury === weapon.id ? dispatch(changeWeapon({ slot, weapon: weapon.id })) : (() => {
									setSelectedArmoury(weapon.id)
									setSelectedWeapon(weapon.weapon)
								})()}
							>
								{equippedWeaponId === weapon.id && <ItemEquipped />}
								<ItemName color={itemColours[weapon.weapon.source.rarity]}>{weapon.name}</ItemName>
								<ItemImage src={`images/weapons/${weapon.weapon.image}.png`} leftFacing={leftFacing} onMouseDown={event => event.preventDefault()} />
							</Item>
						}) :
						Object.values(data[selectedTab]).map(weapon => {
							return <Item
								key={weapon.name}
								width={192}
								height={96}
								selected={weapon.name === selectedWeapon.name}
								onClick={() => weapon.name === selectedWeapon.name ? addWeaponHelper() : setSelectedWeapon(weapon)}
							>
								<ItemName color={itemColours[weapon.source.rarity]}>{weapon.name}</ItemName>
								<ItemImage src={`images/weapons/${weapon.image}.png`} leftFacing={leftFacing} onMouseDown={event => event.preventDefault()} />
							</Item>
						})
				}
			</ItemContainer>

			<InfoContainer>
				<InfoTitle>{selectedWeapon.name}</InfoTitle>
				<InfoSubtitle>Value ${selectedWeapon.cost.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}</InfoSubtitle>
				<WeaponsStatsTable showExtraStats={true} selectedWeapon={selectedWeapon} equippedWeapon={selectedWeapon.name !== equippedWeapon.name ? equippedWeapon : undefined} />
				<InfoUnlock color={itemColours[selectedWeapon.source.rarity]}>{selectedWeapon.source.name}</InfoUnlock>
			</InfoContainer>

			<ActionsContainer>
				{
					selectedTab === 'saved' ?
						<ActionsText onClick={() => {
							if (Object.keys(armoury).length === 1) return
							dispatch(removeWeapon({ slot, id: selectedArmoury }))
							setSelectedArmoury(0)
							if (equippedWeaponId === selectedArmoury) {
								dispatch(changeWeapon({ slot, weapon: Object.values(armoury)[0].id }))
							}
						}}>Delete Weapon</ActionsText> :
						<ActionsText onClick={addWeaponHelper}>Save Weapon</ActionsText>
				}
			</ActionsContainer>

		</Container>
	)
}

export default Weapons
