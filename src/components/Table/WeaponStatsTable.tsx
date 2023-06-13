import TableCompare from 'components/Table/TableCompare'
import TableEquipped from 'components/Table/TableEquipped'
import placeholderWeapon from 'data/weapons/guns/placeholderWeapon'
import { type Weapon, type WeaponData } from 'data/weapons/guns/weaponTypes'
import useWeaponStats from 'hooks/useWeaponStats'
import { type FC } from 'react'
import { trpc } from 'utils/trpc'

interface TableBaseProps {
	showExtraStats: boolean;
}

interface TableSelectedProps extends TableBaseProps {
	selectedWeaponData: WeaponData;
	selectedWeaponMods: Weapon['modifications'];
}

interface TableEquippedProps extends TableSelectedProps {
	equippedWeaponData: WeaponData;
	equippedWeaponMods: Weapon['modifications'];
}

type WeaponStatsTableProps = TableFetchProps | TableSelectedProps | TableEquippedProps

const WeaponStatsTable: FC<WeaponStatsTableProps> = props => {

	const isFetch = (props: WeaponStatsTableProps): props is TableFetchProps => {
		return !!(props as TableFetchProps).selectedWeapon
	}

	const hasEquipped = (props: TableSelectedProps | TableEquippedProps): props is TableEquippedProps => {
		return !!(props as TableEquippedProps).equippedWeaponData
	}

	return isFetch(props)
		? <TableFetch
			showExtraStats={props.showExtraStats}
			selectedWeapon={props.selectedWeapon}
			equippedWeapon={props.equippedWeapon}
		/>
		: hasEquipped(props)
			? <Table
				showExtraStats={props.showExtraStats}
				selectedWeapon={[props.selectedWeaponData, props.selectedWeaponMods]}
				equippedWeapon={[props.equippedWeaponData, props.equippedWeaponMods]}
			/>
			: <Table
				showExtraStats={props.showExtraStats}
				selectedWeapon={[props.selectedWeaponData, props.selectedWeaponMods]}
			/>
}

interface TableFetchProps extends TableBaseProps {
	selectedWeapon: Weapon;
	equippedWeapon?: Weapon;
}

const TableFetch: FC<TableFetchProps> = ({ showExtraStats, selectedWeapon, equippedWeapon }) => {

	const { data: selectedWeaponData } = trpc.loadoutData.getWeapon.useQuery(selectedWeapon.weaponFind)
	const { data: equippedWeaponData } = trpc.loadoutData.getWeapon.useQuery(equippedWeapon?.weaponFind ?? selectedWeapon.weaponFind)

	return equippedWeapon
		? <Table
			showExtraStats={showExtraStats}
			selectedWeapon={[selectedWeaponData ?? placeholderWeapon, selectedWeapon.modifications]}
			equippedWeapon={[equippedWeaponData ?? placeholderWeapon, equippedWeapon.modifications]}
		/>
		: <Table
			showExtraStats={showExtraStats}
			selectedWeapon={[selectedWeaponData ?? placeholderWeapon, selectedWeapon.modifications]}
		/>
}

interface TableProps {
	showExtraStats: boolean;
	selectedWeapon: [WeaponData, Weapon['modifications']];
	equippedWeapon?: [WeaponData, Weapon['modifications']];
}

const Table: FC<TableProps> = ({ showExtraStats, selectedWeapon: [selectedWeaponData, selectedWeaponMods], equippedWeapon }) => {

	const [equippedWeaponData, equippedWeaponMods] = equippedWeapon ?? []

	const selectedWeaponStats = useWeaponStats(selectedWeaponData, selectedWeaponMods, showExtraStats)
	const equippedWeaponStats = useWeaponStats(equippedWeaponData ?? selectedWeaponData, equippedWeaponMods ?? {}, showExtraStats)

	return equippedWeaponData
		? <TableCompare
			equippedStats={equippedWeaponStats.base}
			selectedStats={selectedWeaponStats.base}
			equippedAdditional={equippedWeaponStats.additional}
			selectedAdditional={selectedWeaponStats.additional}
		/>
		: <TableEquipped baseStats={selectedWeaponStats.base} additionalStats={{ skill: selectedWeaponStats.skill, mod: selectedWeaponStats.mod }} />
}

export default WeaponStatsTable