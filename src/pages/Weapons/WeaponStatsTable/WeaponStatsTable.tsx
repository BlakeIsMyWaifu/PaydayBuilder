import { TableCompare, TableEquipped } from 'components/Table'
import { WeaponData, WeaponStats } from 'data/weapons/guns/weaponTypes'

interface WeaponsStatsTableComponent {
	showExtraStats: boolean;
	selectedWeapon: WeaponData;
	equippedWeapon?: WeaponData;
}

const WeaponsStatsTable: React.FC<WeaponsStatsTableComponent> = ({ showExtraStats, selectedWeapon, equippedWeapon }) => {

	const baseStats = (weapon: WeaponData) => {
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

	const additionalStats = (weapon: WeaponData) => {
		let stats: WeaponStats = {
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

export default WeaponsStatsTable