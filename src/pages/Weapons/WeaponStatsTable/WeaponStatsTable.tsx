import TableCompare from 'components/Table/TableCompare'
import TableEquipped from 'components/Table/TableEquipped'
import { Weapon } from 'data/weapons/guns/weaponTypes'
import useWeaponStats from 'hooks/useWeaponStats'
import React from 'react'
import findWeapon from 'utils/findWeapon'

interface WeaponsStatsTableProps {
	showExtraStats: boolean;
	selectedWeapon: Weapon;
	equippedWeapon?: Weapon;
}

const WeaponsStatsTable: React.FC<WeaponsStatsTableProps> = ({ showExtraStats, selectedWeapon, equippedWeapon }) => {

	const selectedWeaponData = findWeapon(selectedWeapon.weaponFind)
	const equippedWeaponData = findWeapon(equippedWeapon?.weaponFind || selectedWeapon.weaponFind)

	const selectedData = useWeaponStats(selectedWeaponData, selectedWeapon.modifications, showExtraStats)
	const equippedData = useWeaponStats(equippedWeaponData, equippedWeapon?.modifications || {}, showExtraStats)

	return equippedWeapon ? (
		<TableCompare
			equippedStats={equippedData.base}
			selectedStats={selectedData.base}
			equippedAdditional={equippedData.additional}
			selectedAdditional={selectedData.additional}
		/>
	) : (
		<TableEquipped
			baseStats={selectedData.base}
			additionalStats={{ skill: selectedData.skill, mod: selectedData.mod }}
		/>
	)
}

export default WeaponsStatsTable