import { changeWeapon } from 'actions/weaponsAction'
import Container from 'components/Container'
import { InfoContainer, InfoSubtitle, InfoTitle } from 'components/Info'
import { Item, ItemContainer, ItemEquiped, ItemImage, ItemName } from 'components/Item'
import { TableCompare, TableEquiped } from 'components/Table'
import primary from 'data/weapons/guns/primary'
import secondary from 'data/weapons/guns/secondary'
import { weaponData, weaponExtraStats, weaponStats } from 'data/weapons/guns/weaponTypes'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { useState } from 'react'
import { blue, itemColours } from 'utils/colours'

import { WeaponType, WeaponTypes } from './Weapons-Elements'

interface weaponsStatsTable {
	mainWeapon: weaponData;
	compareWeapon?: weaponData;
}

export const WeaponsStatsTable: React.FC<weaponsStatsTable> = ({ mainWeapon, compareWeapon }) => {

	const baseStats = (weapon: weaponData) => {
		let extra = weapon.extraStats

		let extraStats = {
			tacticalReload: `${extra.tacticalReload}`,
			reload: `${extra.reload}`,
			equipDelays: typeof extra.equipDelays === 'number' ? `${extra.equipDelays} | ${extra.equipDelays}` : `${extra.equipDelays.join(' | ')}`,
			ammoPickup: extra.ammoPickup ? `${extra.ammoPickup.join(' | ')}` : '0 | 0',
			recoilHorizontal: typeof extra.recoilHorizontal === 'number' ? `${extra.recoilHorizontal * -1} | ${extra.recoilHorizontal}` : `${extra.recoilHorizontal.join(' | ')}`,
			recoilVertical: typeof extra.recoilVertical === 'number' ? `${extra.recoilVertical * -1} | ${extra.recoilVertical}` : `${extra.recoilVertical.join(' | ')}`,
			spread: `${extra.spread}`,
			damageModifier: extra.damageModifier ? (typeof extra.damageModifier === 'number' ? `${extra.damageModifier} | ${extra.damageModifier}` : `${extra.damageModifier.join(' | ')}`) : ''
		}

		return ({ ...weapon.stats, ...extraStats })
	}

	const additionalStats = (weapon: weaponData) => {
		let stats: weaponStats = {
			magazine: 0,
			totalAmmo: 0,
			rateOfFire: 0,
			damage: 0,
			accuracy: 0,
			stability: 0,
			concealment: 0,
			threat: 0
		}

		return stats
	}

	return (
		compareWeapon ? 
			<TableCompare
				mainStats={baseStats(compareWeapon)}
				compareStats={baseStats(mainWeapon)}
				mainAdditional={additionalStats(compareWeapon)}
				compareAdditional={additionalStats(mainWeapon)}
			/> :
			<TableEquiped
				baseStats={baseStats(mainWeapon)}
				additionalStats={additionalStats(mainWeapon)}
			/>
	)
}

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
		<Container columns='3fr 1.5fr' rows='4rem 2rem 8fr 4rem' areas='"title filter" "weapontypes filter" "items info" "items back"' title={slot}>

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
				<InfoSubtitle>Value ${selectedWeapon.cost.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}</InfoSubtitle>
				<WeaponsStatsTable mainWeapon={selectedWeapon} compareWeapon={selectedWeapon.name !== equipedWeapon.name ? equipedWeapon : undefined} />
			</InfoContainer>

		</Container>
	)
}

export default Weapons
