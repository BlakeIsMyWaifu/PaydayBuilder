import { InfoContainer, InfoSubtitle, InfoTitle, InfoUnlock } from 'components/elements/infoElements'
import { type Weapon, type WeaponData } from 'data/weapons/guns/weaponTypes'
import { type FC } from 'react'
import { itemColours } from 'utils/colours'

import WeaponsStatsTable from '../Table/WeaponStatsTable'

interface WeaponInfoProps {
	selectedWeapon: Weapon | null;
	selectedWeaponData: WeaponData | null;
	equippedWeapon: [Weapon, WeaponData] | undefined[];
}

const WeaponInfo: FC<WeaponInfoProps> = ({ selectedWeapon, selectedWeaponData, equippedWeapon: [equippedWeapon, equippedWeaponData] }) => {

	if (!selectedWeapon || !selectedWeaponData) return <InfoContainer />

	return (
		<InfoContainer>
			<InfoTitle>{selectedWeaponData.name}</InfoTitle>
			<InfoSubtitle>Value ${selectedWeaponData.cost.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}</InfoSubtitle>
			<WeaponsStatsTable
				showExtraStats={true}
				selectedWeaponData={selectedWeaponData}
				selectedWeaponMods={selectedWeapon.modifications}
				equippedWeaponData={equippedWeaponData}
				equippedWeaponMods={equippedWeapon?.modifications}
			/>
			<InfoUnlock colour={itemColours[selectedWeaponData.source.rarity]}>{selectedWeaponData.source.name}</InfoUnlock>
		</InfoContainer>
	)
}

export default WeaponInfo
