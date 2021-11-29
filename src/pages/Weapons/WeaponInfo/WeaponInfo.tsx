import { InfoContainer, InfoSubtitle, InfoTitle, InfoUnlock } from 'components/Info'
import { Weapon } from 'data/weapons/guns/weaponTypes'
import React from 'react'
import { itemColours } from 'utils/colours'

import WeaponsStatsTable from '../WeaponStatsTable/WeaponStatsTable'

interface WeaponInfoProps {
	selectedWeapon: Weapon;
	equippedWeapon?: Weapon;
}

const WeaponInfo: React.FC<WeaponInfoProps> = ({ selectedWeapon, equippedWeapon }) => {
	return (
		<InfoContainer>
			<InfoTitle>{selectedWeapon.weapon.name}</InfoTitle>
			<InfoSubtitle>Value ${selectedWeapon.weapon.cost.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}</InfoSubtitle>
			<WeaponsStatsTable showExtraStats={true} selectedWeapon={selectedWeapon} equippedWeapon={equippedWeapon} />
			<InfoUnlock color={itemColours[selectedWeapon.weapon.source.rarity]}>{selectedWeapon.weapon.source.name}</InfoUnlock>
		</InfoContainer>
	)
}

export default WeaponInfo
