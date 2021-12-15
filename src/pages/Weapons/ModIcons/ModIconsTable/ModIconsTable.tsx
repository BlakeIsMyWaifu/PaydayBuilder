import { Data, Head, Label, Row, Table } from 'components/Table'
import { Modification, ModificationSlot, ModificationStats, WeaponData } from 'data/weapons/guns/weaponTypes'
import useWeaponStats from 'hooks/useWeaponStats'
import React from 'react'
import { green, red } from 'utils/colours'

interface ModIconsTableProps {
	weapon: WeaponData;
	modifications: Partial<Record<ModificationSlot, string>>;
	hoveredMod: Modification<string>;
}

const ModIconsTable: React.FC<ModIconsTableProps> = ({ weapon, modifications, hoveredMod }) => {

	const totalStats = useWeaponStats(weapon, modifications).total

	return (
		<>
			<Table>
				<thead>
					<Row>
						<Head />
						<Head>Total</Head>
						<Head>Equipped</Head>
					</Row>
				</thead>
				<tbody>
					{
						Object.entries(totalStats).map(([label, statTotal]: [string, number]) => {
							const stats = hoveredMod?.stats
							const statChange = stats?.[(label as keyof ModificationStats)]
							return <Row key={label}>
								<Label>{label}</Label>
								<Data color='#fff'>{Math.round(statTotal * 10) / 10}</Data>
								<Data color={statChange ? (statChange > 0 ? green : red) : '#fff'}>{stats && statChange}</Data>
							</Row>
						})
					}
				</tbody>
			</Table>
		</>
	)
}

export default ModIconsTable
