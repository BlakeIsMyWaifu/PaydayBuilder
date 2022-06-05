import { InfoContainer, InfoSubtitle, InfoTitle, InfoUnlock } from 'components/Info/Info-Elements'
import { Weapon } from 'data/weapons/guns/weaponTypes'
import { FC } from 'react'
import { itemColours } from 'utils/colours'
import findWeapon from 'utils/findWeapon'

import WeaponsStatsTable from '../WeaponStatsTable'

interface WeaponInfoProps {
	selectedWeapon: Weapon;
	equippedWeapon?: Weapon;
}

const WeaponInfo: FC<WeaponInfoProps> = ({ selectedWeapon, equippedWeapon }) => {

	const selectedWeaponData = findWeapon(selectedWeapon.weaponFind)

	return (
		<InfoContainer>
			<InfoTitle>{selectedWeaponData.name}</InfoTitle>
			<InfoSubtitle>Value ${selectedWeaponData.cost.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}</InfoSubtitle>
			<WeaponsStatsTable
				showExtraStats={true}
				selectedWeapon={selectedWeapon}
				equippedWeapon={equippedWeapon} />
			<InfoUnlock colour={itemColours[selectedWeaponData.source.rarity]}>{selectedWeaponData.source.name}</InfoUnlock>
		</InfoContainer>
	)
}

export default WeaponInfo
