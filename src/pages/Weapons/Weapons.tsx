import { changeWeapon } from 'actions/weaponsAction'
import Container from 'components/Container'
import { InfoContainer, InfoSubtitle, InfoTitle, InfoUnlock } from 'components/Info'
import { Item, ItemContainer, ItemEquipped, ItemImage, ItemName } from 'components/Item'
import { TableCompare, TableEquipped } from 'components/Table'
import primary from 'data/weapons/guns/primary'
import secondary from 'data/weapons/guns/secondary'
import { weaponData, weaponStats } from 'data/weapons/guns/weaponTypes'
import { useAppDispatch, useAppSelector } from 'hooks'
import React, { useState } from 'react'
import { blue, itemColours } from 'utils/colours'

import { WeaponType, WeaponTypes } from './Weapons-Elements'

interface weaponsStatsTable {
	showExtraStats: boolean;
	selectedWeapon: weaponData;
	equippedWeapon?: weaponData;
}

export const WeaponsStatsTable: React.FC<weaponsStatsTable> = ({ showExtraStats, selectedWeapon, equippedWeapon }) => {

	const baseStats = (weapon: weaponData) => {
		if (!showExtraStats) return weapon.stats

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
		equippedWeapon ? 
			<TableCompare
				equippedStats={baseStats(equippedWeapon)}
				selectedStats={baseStats(selectedWeapon)}
				equippedAdditional={additionalStats(equippedWeapon)}
				selectedAdditional={additionalStats(selectedWeapon)}
			/> :
			<TableEquipped
				baseStats={baseStats(selectedWeapon)}
				additionalStats={additionalStats(selectedWeapon)}
			/>
	)
}

interface weaponsComponent {
	slot: 'primary' | 'secondary';
}

const Weapons: React.FC<weaponsComponent> = ({ slot }) => {

	const data = slot === 'primary' ? primary : secondary

	const dispatch = useAppDispatch()

	const equippedWeapon = useAppSelector(state => state.weapons[slot].equipped)

	const [selectedTab, setSeletectTab] = useState<string>(equippedWeapon.weaponType)

	const [selectedWeapon, setSeletectedWeapon] = useState(equippedWeapon)

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
						return <Item
							key={weapon.name}
							width={192}
							height={96}
							selected={weapon.name === selectedWeapon.name}
							onClick={() => weapon.name === selectedWeapon.name ? dispatch(changeWeapon({slot, weapon})) : setSeletectedWeapon(weapon)}
						>
							<ItemName color={itemColours[weapon.source.rarity]}>{weapon.name}</ItemName>
							{ weapon.name === equippedWeapon.name && <ItemEquipped /> }
							<ItemImage src={`images/weapons/${weapon.image}.png`} onMouseDown={event => event.preventDefault()} />
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

		</Container>
	)
}

export default Weapons
