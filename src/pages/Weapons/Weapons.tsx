import { changeWeapon } from 'actions/weaponsAction'
import Container from 'components/Container'
import { InfoContainer, InfoSubtitle, InfoTitle, InfoUnlock } from 'components/Info'
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
			tacticalReload: extra.tacticalReload ? (typeof extra.tacticalReload === 'number' ? `${extra.tacticalReload}s` : `${extra.tacticalReload[0]}s | ${extra.tacticalReload[1]}s`) : '',
			reload: `${extra.reload}s`,
			equipDelays: `${extra.equipDelays[0]}s | ${extra.equipDelays[1]}s`,
			ammoPickup: extra.ammoPickup ? `${extra.ammoPickup.join(' | ')}` : '',
			recoilHorizontal: `${extra.recoilHorizontal[0]}' | ${extra.recoilHorizontal[1]}'`,
			recoilVertical: `${extra.recoilVertical[0]}' | ${extra.recoilVertical[1]}'`,
			spread: `${extra.spread}'`,
			damageModifier: extra.damageModifier ? `${extra.damageModifier.join(' | ')}` : ''
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
									src={`images/weapons/${weapon.image}.png`}
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
				{
					selectedWeapon.source.name !== 'Base Game' &&
						<InfoUnlock color={itemColours[selectedWeapon.source.rarity]}>{selectedWeapon.source.name}</InfoUnlock>
				}
			</InfoContainer>

		</Container>
	)
}

export default Weapons
