import { InfoSubtitle, InfoTitle, InfoUnlock } from 'components/Info'
import { WeaponData } from 'data/weapons/guns/weaponTypes'
import React from 'react'
import { itemColours } from 'utils/colours'

import WeaponsStatsTable from '../WeaponStatsTable/WeaponStatsTable'

interface WeaponInfoProps {
	selectedWeapon: WeaponData;
	equippedWeapon?: WeaponData;
}

const WeaponInfo: React.FC<WeaponInfoProps> = ({ selectedWeapon, equippedWeapon }) => {
	return (
		<>
			<InfoTitle>{selectedWeapon.name}</InfoTitle>
			<InfoSubtitle>Value ${selectedWeapon.cost.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}</InfoSubtitle>
			<WeaponsStatsTable showExtraStats={true} selectedWeapon={selectedWeapon} equippedWeapon={equippedWeapon} />
			<InfoUnlock color={itemColours[selectedWeapon.source.rarity]}>{selectedWeapon.source.name}</InfoUnlock>
		</>
	)
}

export default WeaponInfo
