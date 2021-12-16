import { InfoContainer, InfoSubtitle, InfoTitle, InfoUnlock } from 'components/Info'
import { Weapon } from 'data/weapons/guns/weaponTypes'
import React from 'react'
import { itemColours } from 'utils/colours'
import findWeapon from 'utils/findWeapon'

import WeaponsStatsTable from '../WeaponStatsTable'

interface WeaponInfoProps {
	selectedWeapon: Weapon;
	equippedWeapon?: Weapon;
}

const WeaponInfo: React.FC<WeaponInfoProps> = ({ selectedWeapon, equippedWeapon }) => {
	const selectedWeaponData = findWeapon(selectedWeapon.weaponFind)
	return (
		<InfoContainer>
			<InfoTitle>{selectedWeapon.weaponFind.name}</InfoTitle>
			<InfoSubtitle>Value ${selectedWeaponData.cost.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}</InfoSubtitle>
			<WeaponsStatsTable showExtraStats={true} selectedWeapon={selectedWeapon} equippedWeapon={equippedWeapon} />
			<InfoUnlock colour={itemColours[selectedWeaponData.source.rarity]}>{selectedWeaponData.source.name}</InfoUnlock>
		</InfoContainer>
	)
}

export default WeaponInfo
