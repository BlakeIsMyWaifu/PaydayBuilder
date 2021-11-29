import { addWeapon, removeWeapon, resetArmoury } from 'actions/armouryAction'
import { changeWeapon } from 'actions/weaponsAction'
import Container from 'components/Container'
import { HorizontalBar, HorizontalItem } from 'components/HorizontalActionBar'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName } from 'components/Item'
import { ActionText, ActionsContainer } from 'components/ItemAction'
import { ResetContainer, ResetText } from 'components/Reset'
import primary from 'data/weapons/guns/primary'
import secondary from 'data/weapons/guns/secondary'
import { Slot, WeaponData } from 'data/weapons/guns/weaponTypes'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { blue, itemColours } from 'utils/colours'

import WeaponInfo from './WeaponInfo/WeaponInfo'

interface WeaponsProps {
	slot: Slot;
}

const Weapons: React.FC<WeaponsProps> = ({ slot }) => {

	const data: Record<string, Record<string, WeaponData>> = slot === 'primary' ? primary : secondary

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
		<Container columns='3fr 1.5fr' rows='4rem 2rem 8fr 3rem 4rem' areas='"title reset" "horizontalbar filter" "items info" "items actions" "items back"' title={slot}>

			<HorizontalBar>
				<HorizontalItem color={'saved' === selectedTab ? '#fff' : blue} onClick={() => setSeletectTab('saved')}>Saved</HorizontalItem>
				{
					Object.keys(data).map(weaponType => {
						return <HorizontalItem
							key={weaponType}
							color={weaponType === selectedTab ? '#fff' : blue}
							onClick={() => setSeletectTab(weaponType)}
						>{weaponType}</HorizontalItem>
					})
				}
			</HorizontalBar>

			<ItemContainer>
				{
					selectedTab === 'saved' ?
						Object.values(armoury).map(({ id, weapon }, i) => {
							if (i === 0) return <Fragment key={'fragment'}></Fragment>
							return <Item
								key={`${weapon.name}-${id}`}
								width={192}
								height={96}
								selected={selectedArmoury === id}
								onClick={() => selectedArmoury === id ? dispatch(changeWeapon({ slot, weapon: id })) : (() => {
									setSelectedArmoury(id)
									setSelectedWeapon(weapon)
								})()}
							>
								{equippedWeaponId === id && <ItemEquipped />}
								<ItemName color={itemColours[weapon.source.rarity]}>{weapon.name}</ItemName>
								<ItemImage src={`images/weapons/${weapon.image}.png`} leftFacing={leftFacing} onMouseDown={event => event.preventDefault()} />
							</Item>
						}) :
						Object.values(Object.values<WeaponData>(data[selectedTab])).map(weapon => {
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

			<ResetContainer>
				<ResetText onClick={() => {
					setSelectedArmoury(0)
					dispatch(changeWeapon({ slot, weapon: 0 }))
					dispatch(resetArmoury(slot))
				}}>Delete All Saved</ResetText>
			</ResetContainer>

			{
				selectedTab === 'saved' ?
					selectedArmoury !== 0 && <WeaponInfo selectedWeapon={armoury[selectedArmoury]} equippedWeapon={armoury[selectedArmoury].id === equippedWeaponId ? undefined : armoury[equippedWeaponId]} /> :
					<WeaponInfo selectedWeapon={armoury[selectedArmoury]} equippedWeapon={armoury[equippedWeaponId]} />
			}

			<ActionsContainer>
				{
					selectedTab === 'saved' ? selectedArmoury !== 0 &&
						<>
							<Link to={`/blackmarket/${slot}/${selectedArmoury}`} style={{ textDecoration: 'none' }}>
								<ActionText>Modify Weapon</ActionText>
							</Link>
							<ActionText onClick={() => {
								if (Object.keys(armoury).length === 1) return
								dispatch(removeWeapon({ slot, id: selectedArmoury }))
								setSelectedArmoury(0)
								if (equippedWeaponId === selectedArmoury) {
									dispatch(changeWeapon({ slot, weapon: Object.values(armoury)[0].id }))
								}
							}}>Delete Weapon</ActionText>
						</> :
						<ActionText onClick={addWeaponHelper}>Save Weapon</ActionText>
				}
			</ActionsContainer>

		</Container>
	)
}

export default Weapons
